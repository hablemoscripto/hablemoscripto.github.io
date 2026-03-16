import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const ALLOWED_ORIGIN = 'https://hablemoscripto.io'

const corsHeaders = {
  'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Simple HTML sanitizer — strip all tags except a safe subset
function sanitizeHtml(html: string): string {
  const ALLOWED_TAGS = ['p', 'br', 'b', 'strong', 'i', 'em', 'u', 'a', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'code', 'pre', 'hr', 'img', 'span', 'div']
  const ALLOWED_ATTRS = ['href', 'src', 'alt', 'style', 'class', 'target', 'rel']
  const tagPattern = /<\/?([a-z][a-z0-9]*)\b([^>]*)>/gi
  return html.replace(tagPattern, (match, tag, attrs) => {
    const lowerTag = tag.toLowerCase()
    if (!ALLOWED_TAGS.includes(lowerTag)) return ''
    // Filter attributes
    const cleanAttrs = (attrs as string).replace(/([a-z-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi, (attrMatch, name, val1, val2) => {
      const attrName = name.toLowerCase()
      const attrVal = val1 ?? val2 ?? ''
      if (!ALLOWED_ATTRS.includes(attrName)) return ''
      // Block javascript: URLs
      if ((attrName === 'href' || attrName === 'src') && attrVal.trim().toLowerCase().startsWith('javascript:')) return ''
      return attrMatch
    })
    return `<${match.startsWith('</') ? '/' : ''}${lowerTag}${cleanAttrs}>`
  })
}

interface SendNewsletterRequest {
  subject: string
  content: string
  emails: string[]
}

async function generateHmac(email: string, secret: string): Promise<string> {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(email))
  return Array.from(new Uint8Array(signature)).map(b => b.toString(16).padStart(2, '0')).join('')
}

async function buildEmailHtml(content: string, recipientEmail: string, siteUrl: string, hmacSecret: string): Promise<string> {
  const token = await generateHmac(recipientEmail, hmacSecret)
  const unsubscribeUrl = `${siteUrl}/unsubscribe?email=${encodeURIComponent(recipientEmail)}&token=${token}`
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: linear-gradient(135deg, #ffc107 0%, #ff8f00 100%);
        padding: 30px;
        text-align: center;
        border-radius: 10px 10px 0 0;
      }
      .header h1 {
        color: #1e293b;
        margin: 0;
        font-size: 28px;
      }
      .content {
        background: #ffffff;
        padding: 30px;
        border: 1px solid #e2e8f0;
        border-top: none;
      }
      .footer {
        background: #0f172a;
        color: #94a3b8;
        padding: 20px;
        text-align: center;
        font-size: 12px;
        border-radius: 0 0 10px 10px;
      }
      .footer a {
        color: #ffc107;
        text-decoration: none;
      }
      .button {
        display: inline-block;
        padding: 12px 24px;
        background: #ffc107;
        color: #1e293b;
        text-decoration: none;
        border-radius: 8px;
        font-weight: bold;
        margin: 20px 0;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>Hablemos Cripto</h1>
    </div>
    <div class="content">
      ${content}
    </div>
    <div class="footer">
      <p>Recibiste este email porque est&aacute;s suscrito al newsletter de Hablemos Cripto.</p>
      <p>
        <a href="${siteUrl}">Visitar la plataforma</a> &middot;
        <a href="${unsubscribeUrl}">Cancelar suscripci&oacute;n</a>
      </p>
      <p style="margin-top: 10px; color: #64748b;">&copy; ${new Date().getFullYear()} Hablemos Cripto. Todos los derechos reservados.</p>
    </div>
  </body>
</html>`
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const resendApiKey = Deno.env.get('RESEND_API_KEY')!

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

    // Check if user is admin
    const { data: profile, error: profileError } = await supabaseClient
      .from('profiles')
      .select('is_admin')
      .eq('id', user.id)
      .single()

    if (profileError || !profile?.is_admin) {
      return new Response(
        JSON.stringify({ error: 'Forbidden - Admin access required' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const body: SendNewsletterRequest = await req.json()
    const { subject, content, emails } = body

    if (!subject || !content || !emails || !Array.isArray(emails) || emails.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: subject, content, emails' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const siteUrl = 'https://hablemoscripto.io'
    let sent = 0
    const errors: string[] = []

    // Sanitize content before embedding in HTML template
    const sanitizedContent = sanitizeHtml(content)

    // Use the events secret as HMAC key for unsubscribe tokens
    const hmacSecret = Deno.env.get('WOMPI_EVENTS_SECRET') || supabaseServiceKey

    // Send individual emails via Resend REST API
    for (const email of emails) {
      const html = await buildEmailHtml(sanitizedContent, email, siteUrl, hmacSecret)

      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Hablemos Cripto <newsletter@mail.hablemoscripto.io>',
          to: [email],
          subject: subject,
          html: html,
        }),
      })

      if (resendResponse.ok) {
        sent++
      } else {
        const err = await resendResponse.text()
        console.error(`Failed to send to ${email}:`, err)
        errors.push(email)
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        sent,
        failed: errors.length,
        errors: errors.length > 0 ? errors : undefined,
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
