import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const ALLOWED_ORIGINS = ['https://hablemoscripto.io', 'https://www.hablemoscripto.io']

function buildCorsHeaders(origin: string | null) {
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  }
}

// Simple in-memory rate limiter (resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 5 // payments per window
const RATE_LIMIT_WINDOW_MS = 60_000 // 1 minute

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

// Canonical product prices — server is the source of truth for amounts and
// ignores any client-supplied price. MUST stay in sync with PRICING_PLANS in
// services/paymentService.ts (frontend sends the SKU; server looks up the COP).
const PRODUCT_CATALOG: Record<string, { name: string; amountInCents: number }> = {
  inversor_lifetime: { name: 'Inversor — Acceso de por vida', amountInCents: 35000000 }, // 350,000 COP
  vip_lifetime: { name: 'Cripto Experto — Acceso de por vida', amountInCents: 90000000 }, // 900,000 COP
}

interface CreatePaymentRequest {
  productType: string
  customerEmail: string
  customerName?: string
}

async function generateSignature(
  reference: string,
  amountInCents: number,
  currency: string,
  integritySecret: string
): Promise<string> {
  const stringToHash = `${reference}${amountInCents}${currency}${integritySecret}`
  const encoder = new TextEncoder()
  const data = encoder.encode(stringToHash)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

function generateReference(): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 8)
  return `HC-${timestamp}-${random}`
}

// Rank already on the account. Mirrors courseTierRank in paymentService.ts:
// an active is_premium row with a null or unknown tier counts as Inversor (1).
// Expired rows count as free. A failed read must not fall through to a charge.
function heldRank(profile: {
  is_premium: boolean | null
  premium_tier: string | null
  premium_expires_at: string | null
} | null): number {
  if (!profile?.is_premium) return 0
  if (profile.premium_expires_at) {
    const expiresAt = Date.parse(profile.premium_expires_at)
    if (!Number.isFinite(expiresAt) || expiresAt <= Date.now()) return 0
  }
  if (profile.premium_tier === 'vip') return 2
  return 1
}

function skuRank(productType: string): number {
  return productType === 'vip_lifetime' ? 2 : 1
}

serve(async (req) => {
  const corsHeaders = buildCorsHeaders(req.headers.get('Origin'))

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const integritySecret = Deno.env.get('WOMPI_INTEGRITY_SECRET')!

    // Get user from auth header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'No authorization header' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Use anon key for user auth verification (principle of least privilege)
    const supabaseClient = createClient(supabaseUrl, supabaseServiceKey)
    const userClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } }
    })

    const { data: { user }, error: userError } = await userClient.auth.getUser()
    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: 'Invalid user' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Rate limit check
    if (isRateLimited(user.id)) {
      return new Response(
        JSON.stringify({ error: 'Demasiadas solicitudes. Espera un momento.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const body: CreatePaymentRequest = await req.json()
    const { productType, customerName } = body

    // Validate productType against the server-side catalog
    const product = PRODUCT_CATALOG[productType]
    if (!product) {
      return new Response(
        JSON.stringify({ error: 'Tipo de producto no válido' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Store the auth email, never the address the browser sent.
    const customerEmail = user.email
    if (!customerEmail) {
      return new Response(
        JSON.stringify({ error: 'La cuenta no tiene un correo. No hicimos un cobro.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Refuse before signing. A profile read error must not become a charge:
    // we cannot tell whether this account already holds the tier.
    const { data: profile, error: profileError } = await supabaseClient
      .from('user_profiles')
      .select('is_premium, premium_tier, premium_expires_at')
      .eq('id', user.id)
      .maybeSingle()

    if (profileError) {
      console.error('Error reading profile before payment:', profileError)
      return new Response(
        JSON.stringify({ error: 'No pudimos confirmar tu acceso. Intenta de nuevo.' }),
        { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (heldRank(profile) >= skuRank(productType)) {
      return new Response(
        JSON.stringify({ error: 'Ya tienes este acceso. No hicimos un cobro.' }),
        { status: 409, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const amountInCents = product.amountInCents
    const productName = product.name
    const reference = generateReference()
    const currency = 'COP'

    // Generate integrity signature
    const signature = await generateSignature(reference, amountInCents, currency, integritySecret)

    // Create payment record
    const { error: insertError } = await supabaseClient
      .from('payments')
      .insert({
        user_id: user.id,
        wompi_reference: reference,
        amount_in_cents: amountInCents,
        currency: currency,
        status: 'PENDING',
        product_type: productType,
        product_name: productName,
        customer_email: customerEmail,
        customer_name: customerName,
      })

    if (insertError) {
      console.error('Error creating payment:', insertError)
      return new Response(
        JSON.stringify({ error: 'Failed to create payment record' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({
        reference,
        amountInCents,
        currency,
        signature,
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
