import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface SendNewsletterRequest {
  subject: string
  content: string
  emails: string[]
}

function buildEmailHtml(content: string, recipientEmail: string, siteUrl: string): string {
  const unsubscribeUrl = `${siteUrl}/unsubscribe?email=${encodeURIComponent(recipientEmail)}`
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

    // Send individual emails via Resend REST API
    for (const email of emails) {
      const html = buildEmailHtml(content, email, siteUrl)

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
