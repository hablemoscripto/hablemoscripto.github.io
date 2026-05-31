import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { sendFundadorWelcome } from '../_shared/welcome-email.ts'

// TODO(crypto, Phase C+): function is dormant in v1 — the frontend crypto tab
// is disabled and submitCryptoPayment was removed in the v2 refactor. Body
// still speaks the legacy 'premium' | 'vip' vocab and writes premium_tier.
// When reviving, port to the PlanId vocab and the new entitlement columns
// (course_tier / community_status) once the schema migration lands.

const ALLOWED_ORIGINS = ['https://hablemoscripto.io', 'https://www.hablemoscripto.io']

function buildCorsHeaders(origin: string | null) {
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  }
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
const SOLANA_RPC_URL = Deno.env.get('SOLANA_RPC_URL') || 'https://api.mainnet-beta.solana.com'
const MAX_TX_AGE_SECONDS = 30 * 60 // 30 minutes

// Server-side canonical USDC prices per tier. Never trust the client-supplied
// expectedAmount — derive from here so a forged amount can't unlock a tier
// cheaply. Mirrors the COP/USD lifetime catalog (Inversor 99, Cripto Experto 249).
const TIER_USDC_AMOUNT: Record<string, number> = {
  premium: 99,
  vip: 249,
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface VerifyRequest {
  transactionSignature: string
  // Ignored server-side; amount is derived from tier via TIER_USDC_AMOUNT.
  expectedAmount?: number
  tier: string
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

interface TokenBalance {
  accountIndex: number
  mint: string
  owner?: string
}

interface SolanaTransaction {
  slot: number
  blockTime: number | null
  meta: {
    err: unknown
    preTokenBalances?: TokenBalance[]
    postTokenBalances?: TokenBalance[]
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
// The plain `transfer` instruction does not carry the token mint, so we resolve
// the mint of the destination token account from the transaction's token-balance
// metadata. This lets us reject a non-USDC token with the same 6 decimals that
// would otherwise satisfy a plain transfer.
function destinationAccountIsUsdc(
  tx: SolanaTransaction,
  destination: string,
): boolean {
  const accountKeys = tx.transaction.message.accountKeys
  const balances = [
    ...(tx.meta?.postTokenBalances ?? []),
    ...(tx.meta?.preTokenBalances ?? []),
  ]

  for (const balance of balances) {
    const acct = accountKeys[balance.accountIndex]?.pubkey
    if (acct === destination) {
      return balance.mint === USDC_MINT
    }
  }

  // Mint could not be resolved — fail closed.
  return false
}

function findMatchingTransfer(
  tx: SolanaTransaction,
  paymentAddress: string,
  expectedAmountRaw: string,
): boolean {
  // Check top-level instructions
  for (const ix of tx.transaction.message.instructions) {
    if (isMatchingTransfer(tx, ix, paymentAddress, expectedAmountRaw)) {
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
        if (isMatchingTransfer(tx, ix, paymentAddress, expectedAmountRaw)) {
          return true
        }
      }
    }
  }

  return false
}

function isMatchingTransfer(
  tx: SolanaTransaction,
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
      info.amount === expectedAmountRaw &&
      destinationAccountIsUsdc(tx, paymentAddress)
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
  const corsHeaders = buildCorsHeaders(req.headers.get('Origin'))

  const jsonResponse = (body: Record<string, unknown>, status: number): Response =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

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
    // expectedAmount from the client is intentionally ignored — the amount is
    // derived server-side from the tier (see TIER_USDC_AMOUNT) so a forged
    // amount cannot unlock a tier for less than its real price.
    const body: VerifyRequest = await req.json()
    const { transactionSignature, tier } = body

    if (!transactionSignature || !tier) {
      return jsonResponse({ error: 'Faltan campos obligatorios' }, 400)
    }

    if (!['premium', 'vip'].includes(tier)) {
      return jsonResponse({ error: 'Tier no valido' }, 400)
    }

    const expectedAmount = TIER_USDC_AMOUNT[tier]
    if (!expectedAmount) {
      return jsonResponse({ error: 'Tier no valido' }, 400)
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
        { error: 'Esta transacción ya fue procesada' },
        409,
      )
    }

    // ---- Fetch and verify Solana transaction ----
    const tx = await fetchTransaction(transactionSignature)

    if (!tx) {
      return jsonResponse(
        { error: 'Transacción no encontrada. Verifica la firma e intenta de nuevo.' },
        404,
      )
    }

    // 1. Transaction must have succeeded
    if (tx.meta?.err) {
      return jsonResponse({ error: 'La transacción falló en la red de Solana' }, 400)
    }

    // 2. Transaction must be recent
    if (!tx.blockTime) {
      return jsonResponse({ error: 'No se pudo verificar la fecha de la transacción' }, 400)
    }

    const txAgeSeconds = Math.floor(Date.now() / 1000) - tx.blockTime
    if (txAgeSeconds > MAX_TX_AGE_SECONDS) {
      return jsonResponse(
        { error: 'La transacción es demasiado antigua. Debe ser de los últimos 30 minutos.' },
        400,
      )
    }

    if (txAgeSeconds < 0) {
      // blockTime slightly in the future is possible due to clock skew — allow a small buffer
      if (txAgeSeconds < -120) {
        return jsonResponse({ error: 'Fecha de transacción no válida' }, 400)
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
            'No se encontró una transferencia USDC válida a la dirección de pago con el monto correcto.',
        },
        400,
      )
    }

    // ---- All checks passed — record payment and upgrade user ----
    // Lifetime tiers leave premium_expires_at NULL.

    const { error: insertError } = await adminClient
      .from('crypto_payments')
      .insert({
        user_id: user.id,
        transaction_signature: transactionSignature,
        amount_usdc: expectedAmount,
        tier,
        billing_cycle: 'lifetime',
        status: 'verified',
      })

    if (insertError) {
      console.error('Error inserting crypto payment:', insertError)
      return jsonResponse(
        { error: 'Error al registrar el pago' },
        500,
      )
    }

    const { error: updateError } = await adminClient
      .from('user_profiles')
      .update({
        is_premium: true,
        premium_tier: tier,
        billing_cycle: 'lifetime',
        premium_since: new Date().toISOString(),
        premium_expires_at: null,
      })
      .eq('id', user.id)

    if (updateError) {
      console.error('Error upgrading user profile:', updateError)
      return jsonResponse(
        { error: 'Pago registrado pero error al actualizar tu cuenta. Contacta soporte.' },
        500,
      )
    }

    // Fundador welcome email — non-fatal if it fails.
    await sendFundadorWelcome({
      to: user.email ?? '',
      name: user.user_metadata?.full_name ?? user.user_metadata?.name,
      tier: tier as 'premium' | 'vip',
      resendApiKey: Deno.env.get('RESEND_API_KEY') ?? '',
    })

    return jsonResponse(
      {
        success: true,
        tier,
      },
      200,
    )
  } catch (error) {
    console.error('Error:', error)
    return jsonResponse({ error: 'Error interno del servidor' }, 500)
  }
})
