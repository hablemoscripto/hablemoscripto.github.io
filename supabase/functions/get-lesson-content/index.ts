import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Serves paid (Intermedio/Avanzado) lesson bodies, which are NOT shipped in the
// client bundle. Verifies the caller's JWT and their premium entitlement
// server-side before returning the content from protected_lessons (a table only
// the service role can read). Free lessons are bundled and never hit this.

const ALLOWED_ORIGINS = [
  'https://hablemoscripto.io',
  'https://www.hablemoscripto.io',
]

function corsHeaders(origin: string) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }
}

function errorResponse(message: string, status: number, origin: string) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
  })
}

serve(async (req) => {
  const origin = req.headers.get('Origin') || ''
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders(origin) })
  if (req.method !== 'POST') return errorResponse('Method not allowed', 405, origin)

  try {
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) return errorResponse('Unauthorized', 401, origin)

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const anonKey = Deno.env.get('SUPABASE_ANON_KEY')!
    const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

    // Verify the caller's identity from their JWT.
    const authedClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
    })
    const { data: { user }, error: userError } = await authedClient.auth.getUser()
    if (userError || !user) return errorResponse('Invalid user', 401, origin)

    const body = await req.json().catch(() => null)
    const lessonId = body?.lessonId
    if (typeof lessonId !== 'number' || !Number.isInteger(lessonId)) {
      return errorResponse('lessonId (integer) required', 400, origin)
    }

    const admin = createClient(supabaseUrl, serviceKey)

    // Server-side premium check (both paid tiers grant all paid lessons;
    // lifetime tiers have a null expiry).
    const { data: profile } = await admin
      .from('user_profiles')
      .select('is_premium, premium_expires_at')
      .eq('id', user.id)
      .maybeSingle()

    const isPremium =
      !!profile?.is_premium &&
      (!profile.premium_expires_at || new Date(profile.premium_expires_at).getTime() > Date.now())

    if (!isPremium) return errorResponse('Premium required', 403, origin)

    const { data: row, error: rowError } = await admin
      .from('protected_lessons')
      .select('content')
      .eq('lesson_id', lessonId)
      .maybeSingle()

    if (rowError) {
      console.error('protected_lessons lookup error:', rowError)
      return errorResponse('Lookup failed', 500, origin)
    }
    if (!row) return errorResponse('Lesson not found', 404, origin)

    return new Response(JSON.stringify({ content: row.content }), {
      status: 200,
      headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
    })
  } catch (e) {
    console.error('get-lesson-content error:', e)
    return errorResponse('Internal server error', 500, origin)
  }
})
