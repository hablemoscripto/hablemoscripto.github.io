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

// Compare two byte arrays without short-circuiting, so verification time does
// not leak how many leading bytes matched (timing-attack resistance).
function constantTimeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) {
    diff |= a[i] ^ b[i]
  }
  return diff === 0
}

function hexToBytes(hex: string): Uint8Array | null {
  if (hex.length % 2 !== 0 || !/^[0-9a-f]*$/i.test(hex)) return null
  const bytes = new Uint8Array(hex.length / 2)
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16)
  }
  return bytes
}

// Verifies an unsubscribe token over `${emailLower}:${exp}`. Signing side lives
// in send-newsletter/index.ts — keep the signed message and secret in sync.
async function verifyHmac(email: string, exp: number, token: string, secret: string): Promise<boolean> {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const message = `${email.toLowerCase()}:${exp}`
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(message))
  const expected = new Uint8Array(signature)

  const provided = hexToBytes(token)
  if (!provided) return false

  return constantTimeEqual(expected, provided)
}

serve(async (req) => {
  const corsHeaders = buildCorsHeaders(req.headers.get('Origin'))

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    // Dedicated secret only. Must match send-newsletter/index.ts. Never fall back
    // to the service-role key — reusing the most privileged credential as an HMAC
    // secret couples unrelated secrets and widens its exposure.
    const hmacSecret = Deno.env.get('UNSUBSCRIBE_HMAC_SECRET') || ''
    if (!hmacSecret) {
      console.error('UNSUBSCRIBE_HMAC_SECRET not configured')
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const { email, token } = await req.json()

    if (!email || typeof email !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (!token || typeof token !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Invalid unsubscribe token' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Token is `${exp}.${hmacHex}` — self-contained so the unsubscribe page only
    // needs to forward `token`. Split exp back out before verifying.
    const dotIndex = token.indexOf('.')
    if (dotIndex <= 0) {
      return new Response(
        JSON.stringify({ error: 'Invalid unsubscribe token' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const expSeconds = Number.parseInt(token.slice(0, dotIndex), 10)
    const mac = token.slice(dotIndex + 1)
    if (!Number.isFinite(expSeconds) || expSeconds <= 0 || !mac) {
      return new Response(
        JSON.stringify({ error: 'Invalid unsubscribe token' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (Math.floor(Date.now() / 1000) > expSeconds) {
      return new Response(
        JSON.stringify({ error: 'Unsubscribe link has expired' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const emailLower = email.toLowerCase()

    // Verify HMAC token to prevent unauthorized unsubscriptions
    const isValid = await verifyHmac(emailLower, expSeconds, mac, hmacSecret)
    if (!isValid) {
      return new Response(
        JSON.stringify({ error: 'Invalid unsubscribe token' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const supabaseClient = createClient(supabaseUrl, supabaseServiceKey)

    const { error } = await supabaseClient
      .from('newsletter_subscribers')
      .update({ is_active: false })
      .eq('email', emailLower)

    if (error) {
      console.error('Unsubscribe error:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to unsubscribe' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ success: true }),
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
