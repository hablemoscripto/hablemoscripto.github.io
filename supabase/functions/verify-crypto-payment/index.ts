import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const ALLOWED_ORIGIN = 'https://hablemoscripto.io'

const corsHeaders = {
  'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// ---------------------------------------------------------------------------
// Rate limiter (in-memory, resets on cold start)
// ---------------------------------------------------------------------------

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 60_000

function isRateLimited(userId: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(userId)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(userId, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const USDC_MINT = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
const SOLANA_RPC_URL = 'https://api.mainnet-beta.solana.com'
const MAX_TX_AGE_SECONDS = 30 * 60 // 30 minutes

// Tier durations in days
const BILLING_DURATIONS: Record<string, number> = {
  monthly: 30,
  yearly: 365,
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface VerifyRequest {
  transactionSignature: string
  expectedAmount: number
  tier: string
  billingCycle: string
}

// Solana JSON-RPC parsed transaction types (subset we need)
interface ParsedInstruction {
  program: string
  programId: string
  parsed?: {
    type: string
    info: {
      authority?: string
      destination?: string
      source?: string
      amount?: string
      mint?: string
      tokenAmount?: {
        amount: string
        decimals: number
        uiAmount: number
      }
    }
  }
}

interface SolanaTransaction {
  slot: number
  blockTime: number | null
  meta: {
    err: unknown
    preTokenBalances?: unknown[]
    postTokenBalances?: unknown[]
  } | null
  transaction: {
    message: {
      instructions: ParsedInstruction[]
      accountKeys: { pubkey: string; signer: boolean }[]
    }
    signatures: string[]
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function jsonResponse(
  body: Record<string, unknown>,
  status: number,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

/**
 * Fetch a parsed Solana transaction via JSON-RPC.
 */
async function fetchTransaction(
  signature: string,
): Promise<SolanaTransaction | null> {
  const rpcResponse = await fetch(SOLANA_RPC_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'getTransaction',
      params: [
        signature,
        { encoding: 'jsonParsed', maxSupportedTransactionVersion: 0 },
      ],
    }),
  })

  const rpcResult = await rpcResponse.json()

  if (rpcResult.error) {
    console.error('Solana RPC error:', rpcResult.error)
    return null
  }

  return rpcResult.result as SolanaTransaction | null
}

/**
 * Walk all instructions (top-level + inner) looking for a USDC transfer
 * to the payment wallet with the expected amount.
 */
function findMatchingTransfer(
  tx: SolanaTransaction,
  paymentAddress: string,
  expectedAmountRaw: string,
): boolean {
  // Check top-level instructions
  for (const ix of tx.transaction.message.instructions) {
    if (isMatchingTransfer(ix, paymentAddress, expectedAmountRaw)) {
      return true
    }
  }

  // Check inner instructions (created by CPI calls, e.g. through wallets)
  const innerInstructions = (tx.meta as Record<string, unknown>)
    ?.innerInstructions as
    | { instructions: ParsedInstruction[] }[]
    | undefined

  if (innerInstructions) {
    for (const inner of innerInstructions) {
      for (const ix of inner.instructions) {
        if (isMatchingTransfer(ix, paymentAddress, expectedAmountRaw)) {
          return true
        }
      }
    }
  }

  return false
}

function isMatchingTransfer(
  ix: ParsedInstruction,
  paymentAddress: string,
  expectedAmountRaw: string,
): boolean {
  if (ix.program !== 'spl-token' || !ix.parsed) return false

  const { type, info } = ix.parsed

  // Handle both 'transfer' and 'transferChecked' instruction types
  if (type === 'transfer') {
    return (
      info.destination === paymentAddress &&
      info.amount === expectedAmountRaw
    )
  }

  if (type === 'transferChecked') {
    return (
      info.destination === paymentAddress &&
      info.mint === USDC_MINT &&
      info.tokenAmount?.amount === expectedAmountRaw
    )
  }

  return false
}

// ---------------------------------------------------------------------------
// Main handler
// ---------------------------------------------------------------------------

serve(async (req) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // ---- Environment ----
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const paymentAddress = Deno.env.get('USDC_PAYMENT_ADDRESS')

    if (!paymentAddress) {
      console.error('USDC_PAYMENT_ADDRESS not configured')
      return jsonResponse({ error: 'Configuracion del servidor incompleta' }, 500)
    }

    // ---- Auth ----
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return jsonResponse({ error: 'No authorization header' }, 401)
    }

    const userClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    })

    const {
      data: { user },
      error: userError,
    } = await userClient.auth.getUser()

    if (userError || !user) {
      return jsonResponse({ error: 'Usuario no autenticado' }, 401)
    }

    // ---- Rate limit ----
    if (isRateLimited(user.id)) {
      return jsonResponse(
        { error: 'Demasiadas solicitudes. Espera un momento.' },
        429,
      )
    }

    // ---- Parse body ----
    const body: VerifyRequest = await req.json()
    const { transactionSignature, expectedAmount, tier, billingCycle } = body

    if (!transactionSignature || !expectedAmount || !tier || !billingCycle) {
      return jsonResponse({ error: 'Faltan campos obligatorios' }, 400)
    }

    if (!['premium', 'vip'].includes(tier)) {
      return jsonResponse({ error: 'Tier no valido' }, 400)
    }

    if (!['monthly', 'yearly'].includes(billingCycle)) {
      return jsonResponse({ error: 'Ciclo de facturacion no valido' }, 400)
    }

    // ---- Check for duplicate submission ----
    const adminClient = createClient(supabaseUrl, supabaseServiceKey)

    const { data: existingPayment } = await adminClient
      .from('crypto_payments')
      .select('id')
      .eq('transaction_signature', transactionSignature)
      .maybeSingle()

    if (existingPayment) {
      return jsonResponse(
        { error: 'Esta transaccion ya fue procesada' },
        409,
      )
    }

    // ---- Fetch and verify Solana transaction ----
    const tx = await fetchTransaction(transactionSignature)

    if (!tx) {
      return jsonResponse(
        { error: 'Transaccion no encontrada. Verifica la firma e intenta de nuevo.' },
        404,
      )
    }

    // 1. Transaction must have succeeded
    if (tx.meta?.err) {
      return jsonResponse({ error: 'La transaccion fallo en la red de Solana' }, 400)
    }

    // 2. Transaction must be recent
    if (!tx.blockTime) {
      return jsonResponse({ error: 'No se pudo verificar la fecha de la transaccion' }, 400)
    }

    const txAgeSeconds = Math.floor(Date.now() / 1000) - tx.blockTime
    if (txAgeSeconds > MAX_TX_AGE_SECONDS) {
      return jsonResponse(
        { error: 'La transaccion es demasiado antigua. Debe ser de los ultimos 30 minutos.' },
        400,
      )
    }

    if (txAgeSeconds < 0) {
      // blockTime slightly in the future is possible due to clock skew — allow a small buffer
      if (txAgeSeconds < -120) {
        return jsonResponse({ error: 'Fecha de transaccion no valida' }, 400)
      }
    }

    // 3. Verify USDC transfer amount and destination
    // USDC has 6 decimals: $15 USDC = 15_000_000 raw
    const expectedAmountRaw = String(Math.round(expectedAmount * 1_000_000))

    const transferFound = findMatchingTransfer(tx, paymentAddress, expectedAmountRaw)

    if (!transferFound) {
      return jsonResponse(
        {
          error:
            'No se encontro una transferencia USDC valida a la direccion de pago con el monto correcto.',
        },
        400,
      )
    }

    // ---- All checks passed — record payment and upgrade user ----

    // Calculate expiration
    const durationDays = BILLING_DURATIONS[billingCycle]
    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + durationDays)

    // Insert crypto payment record
    const { error: insertError } = await adminClient
      .from('crypto_payments')
      .insert({
        user_id: user.id,
        transaction_signature: transactionSignature,
        amount_usdc: expectedAmount,
        tier,
        billing_cycle: billingCycle,
        status: 'verified',
      })

    if (insertError) {
      console.error('Error inserting crypto payment:', insertError)
      return jsonResponse(
        { error: 'Error al registrar el pago' },
        500,
      )
    }

    // Upgrade user profile
    const { error: updateError } = await adminClient
      .from('user_profiles')
      .update({
        is_premium: true,
        premium_tier: tier,
        billing_cycle: billingCycle,
        premium_since: new Date().toISOString(),
        premium_expires_at: expiresAt.toISOString(),
      })
      .eq('id', user.id)

    if (updateError) {
      console.error('Error upgrading user profile:', updateError)
      return jsonResponse(
        { error: 'Pago registrado pero error al actualizar tu cuenta. Contacta soporte.' },
        500,
      )
    }

    return jsonResponse(
      {
        success: true,
        tier,
        billingCycle,
        expiresAt: expiresAt.toISOString(),
      },
      200,
    )
  } catch (error) {
    console.error('Error:', error)
    return jsonResponse({ error: 'Error interno del servidor' }, 500)
  }
})
