import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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

interface CreatePaymentRequest {
  productType: string
  productName: string
  amountInCents: number
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

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
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

    const supabaseClient = createClient(supabaseUrl, supabaseServiceKey)
    const userClient = createClient(supabaseUrl, supabaseServiceKey, {
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
    const { productType, productName, amountInCents, customerEmail, customerName } = body

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
