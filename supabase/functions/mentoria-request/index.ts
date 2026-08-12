// Receives mentoría requests and emails them to CBas via Resend. The endpoint
// remains public for prospects; when a valid user JWT is present, a server-side
// profile lookup marks Cripto Experto requests as priority.
//
// Required Supabase Edge Function secrets:
//   RESEND_API_KEY        — same key the newsletter/welcome-email flow uses
//   MENTORIA_NOTIFY_TO    — (optional) where notifications land; defaults to
//                           cbas@mail.hablemoscripto.io
//
// Deploy with:
//   supabase functions deploy mentoria-request --no-verify-jwt

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const ALLOWED_ORIGINS = new Set([
  'https://hablemoscripto.io',
  'https://www.hablemoscripto.io',
])
const DEFAULT_ALLOWED_ORIGIN = 'https://hablemoscripto.io'
const FROM_ADDRESS = 'Hablemos Cripto <mentoria@mail.hablemoscripto.io>'
const DEFAULT_NOTIFY_TO = 'cbas@mail.hablemoscripto.io'

function buildCorsHeaders(requestOrigin: string | null): Record<string, string> {
  const allowOrigin = requestOrigin && ALLOWED_ORIGINS.has(requestOrigin)
    ? requestOrigin
    : DEFAULT_ALLOWED_ORIGIN
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Vary': 'Origin',
  }
}

// Simple in-memory rate limiter — caps an IP to 3 submissions per 10 minutes.
// Resets on cold start; good enough for low-volume contact forms pre-scale.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 3
const RATE_LIMIT_WINDOW_MS = 10 * 60_000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }
  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

// Conservative escape — these submissions render inside an HTML email body.
function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface MentoriaPayload {
  name?: unknown
  email?: unknown
  message?: unknown
}

function json(status: number, body: unknown, corsHeaders: Record<string, string>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

async function getVipRequester(authHeader: string | null): Promise<string | null> {
  if (!authHeader?.startsWith('Bearer ')) return null

  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const anonKey = Deno.env.get('SUPABASE_ANON_KEY')
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!supabaseUrl || !anonKey || !serviceKey) return null

  const userClient = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authHeader } },
  })
  const { data: { user }, error: userError } = await userClient.auth.getUser()
  if (userError || !user) return null

  const adminClient = createClient(supabaseUrl, serviceKey)
  const { data: profile, error: profileError } = await adminClient
    .from('user_profiles')
    .select('is_premium, premium_tier')
    .eq('id', user.id)
    .single()

  if (profileError || !profile?.is_premium || profile.premium_tier !== 'vip') {
    return null
  }

  return user.email ?? user.id
}

serve(async (req) => {
  const corsHeaders = buildCorsHeaders(req.headers.get('Origin'))

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return json(405, { error: 'Method not allowed' }, corsHeaders)
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'
  if (isRateLimited(ip)) {
    return json(429, { error: 'Demasiadas solicitudes. Intenta en unos minutos.' }, corsHeaders)
  }

  let payload: MentoriaPayload
  try {
    payload = await req.json()
  } catch {
    return json(400, { error: 'Body inválido' }, corsHeaders)
  }

  const name = typeof payload.name === 'string' ? payload.name.trim() : ''
  const email = typeof payload.email === 'string' ? payload.email.trim() : ''
  const message = typeof payload.message === 'string' ? payload.message.trim() : ''

  if (!name || name.length < 2 || name.length > 120) {
    return json(400, { error: 'Nombre inválido' }, corsHeaders)
  }
  if (!email || !EMAIL_REGEX.test(email) || email.length > 200) {
    return json(400, { error: 'Email inválido' }, corsHeaders)
  }
  if (!message || message.length < 10 || message.length > 4000) {
    return json(400, { error: 'Mensaje inválido (mínimo 10, máximo 4000 caracteres)' }, corsHeaders)
  }

  const resendApiKey = Deno.env.get('RESEND_API_KEY')
  if (!resendApiKey) {
    console.error('mentoria-request: RESEND_API_KEY not set')
    return json(500, { error: 'Servicio no configurado' }, corsHeaders)
  }
  const notifyTo = Deno.env.get('MENTORIA_NOTIFY_TO') || DEFAULT_NOTIFY_TO
  const vipRequester = await getVipRequester(req.headers.get('Authorization'))

  const subject = `${vipRequester ? '[EXPERTO] ' : ''}Nueva solicitud de mentoría - ${name}`
  const html = `<!DOCTYPE html><html><body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #1f2937; max-width: 640px; margin: 0 auto; padding: 24px;">
  <h2 style="margin: 0 0 16px;">Nueva solicitud de Mentoría Personalizada</h2>
  ${vipRequester ? `<p style="margin: 0 0 16px; color: #92400e;"><strong>Prioridad Cripto Experto</strong><br>Cuenta verificada: ${escapeHtml(vipRequester)}</p>` : ''}
  <p style="margin: 0 0 8px;"><strong>Nombre:</strong> ${escapeHtml(name)}</p>
  <p style="margin: 0 0 8px;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
  <p style="margin: 16px 0 4px;"><strong>Mensaje:</strong></p>
  <blockquote style="border-left: 3px solid #f59e0b; padding: 8px 16px; margin: 0; background: #f9fafb; white-space: pre-wrap;">${escapeHtml(message)}</blockquote>
  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
  <p style="font-size: 12px; color: #6b7280; margin: 0;">Enviado desde hablemoscripto.io · Responde directamente a este correo para contactar al solicitante.</p>
</body></html>`

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [notifyTo],
        reply_to: email,
        subject,
        html,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`mentoria-request: Resend failed (${response.status}):`, errorText)
      return json(502, { error: 'No pudimos enviar tu solicitud. Intenta de nuevo.' }, corsHeaders)
    }

    return json(200, { ok: true }, corsHeaders)
  } catch (err) {
    console.error('mentoria-request: unexpected error', err)
    return json(500, { error: 'Error inesperado. Intenta de nuevo.' }, corsHeaders)
  }
})
