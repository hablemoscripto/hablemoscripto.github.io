// Receives browser error reports from utils/errorReporting.ts and stores them
// in error_logs. Public: the client posts with navigator.sendBeacon, which
// cannot attach a JWT. Origin allowlist, body cap, per-IP limit and field
// truncation keep it from becoming a free write endpoint.
//
// The name is deliberately bland. Ad blockers (common in this audience) drop
// requests whose URL contains words like log, error, track or analytics;
// the first name, log-client-error, was blocked by uBlock-style filters.
//
// Point VITE_ERROR_REPORTING_URL (Vercel) at
//   https://<project>.supabase.co/functions/v1/site-health
//
// Deploy with:
//   supabase functions deploy site-health --no-verify-jwt

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const ALLOWED_ORIGINS = new Set([
  'https://hablemoscripto.io',
  'https://www.hablemoscripto.io',
])
const DEFAULT_ALLOWED_ORIGIN = 'https://hablemoscripto.io'

const MAX_BODY_BYTES = 16_384
const RETENTION_DAYS = 30
const LEVELS = new Set(['info', 'warning', 'error'])

function buildCorsHeaders(requestOrigin: string | null): Record<string, string> {
  const allowOrigin = requestOrigin && ALLOWED_ORIGINS.has(requestOrigin)
    ? requestOrigin
    : DEFAULT_ALLOWED_ORIGIN
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Headers': 'content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Vary': 'Origin',
  }
}

// In-memory, resets on cold start. A crash loop on one page load is capped
// client-side too; this only stops a single source from filling the table.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 30
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

function text(value: unknown, max: number): string | null {
  if (typeof value !== 'string' || value.length === 0) return null
  return value.slice(0, max)
}

function boundedJson(value: unknown, maxChars: number): unknown {
  if (value === undefined || value === null) return null
  try {
    const serialized = JSON.stringify(value)
    if (serialized.length <= maxChars) return value
    return { truncated: serialized.slice(0, maxChars) }
  } catch {
    return null
  }
}

serve(async (req) => {
  const origin = req.headers.get('Origin')
  const corsHeaders = buildCorsHeaders(origin)

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  if (req.method !== 'POST') {
    return new Response(null, { status: 405, headers: corsHeaders })
  }
  if (!origin || !ALLOWED_ORIGINS.has(origin)) {
    return new Response(null, { status: 403, headers: corsHeaders })
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'
  if (isRateLimited(ip)) {
    return new Response(null, { status: 429, headers: corsHeaders })
  }

  // sendBeacon posts the JSON string as text/plain, so read text and parse.
  const raw = await req.text()
  if (raw.length > MAX_BODY_BYTES) {
    return new Response(null, { status: 413, headers: corsHeaders })
  }

  let payload: Record<string, unknown>
  try {
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('not an object')
    payload = parsed
  } catch {
    return new Response(null, { status: 400, headers: corsHeaders })
  }

  const message = text(payload.message, 1_000)
  const level = typeof payload.level === 'string' && LEVELS.has(payload.level) ? payload.level : null
  if (!message || !level) {
    return new Response(null, { status: 400, headers: corsHeaders })
  }

  const context = payload.context && typeof payload.context === 'object'
    ? payload.context as Record<string, unknown>
    : {}

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  )

  const { error } = await supabase.from('error_logs').insert({
    level,
    message,
    stack: text(payload.stack, 8_000),
    component: text(context.component, 120),
    action: text(context.action, 120),
    url: text(payload.url, 1_000),
    user_agent: text(payload.userAgent, 400),
    context: boundedJson(
      { userId: context.userId ?? null, metadata: context.metadata ?? null, clientTimestamp: payload.timestamp ?? null },
      4_000,
    ),
  })

  if (error) {
    console.error('site-health: insert failed', error)
    return new Response(null, { status: 500, headers: corsHeaders })
  }

  // Retention without a cron: roughly one insert in a hundred prunes old rows.
  if (Math.random() < 0.01) {
    const cutoff = new Date(Date.now() - RETENTION_DAYS * 86_400_000).toISOString()
    const { error: pruneError } = await supabase.from('error_logs').delete().lt('created_at', cutoff)
    if (pruneError) console.error('site-health: prune failed', pruneError)
  }

  return new Response(null, { status: 204, headers: corsHeaders })
})
