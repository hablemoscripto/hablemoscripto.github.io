// Welcome email sent to every new Miembro Fundador after their payment is
// confirmed. Called from both wompi-webhook (card path) and
// verify-crypto-payment (USDC path).
//
// Failures here are non-fatal — premium upgrade has already succeeded by the
// time this runs. The caller should log and move on.

const FROM_ADDRESS = 'CBas - Hablemos Cripto <cbas@mail.hablemoscripto.io>'

const TIER_PLAN_NAMES: Record<string, string> = {
  premium: 'Inversor',
  vip: 'Cripto Experto',
}

interface WelcomeEmailParams {
  to: string
  name?: string | null
  tier: 'premium' | 'vip'
  resendApiKey: string
}

// ---------------------------------------------------------------------------
// EMAIL CONTENT — the part Sebastián owns.
//
// This is the message every new Miembro Fundador receives. It should sound
// like CBas wrote it personally, not like a SaaS auto-responder.
// Use the placeholders below — they're substituted at send time:
//   {{name}}      → first name (or "fundador" if name unknown)
//   {{planName}}  → "Inversor" or "Cripto Experto"
// ---------------------------------------------------------------------------

const SUBJECT = 'Bienvenido, miembro Fundador de Hablemos Cripto 👋'

// REPLACE THE BODY BELOW WITH YOUR VOICE BEFORE DEPLOYING.
// HTML is allowed (basic tags: p, strong, em, a, ul, li, br).
const BODY_HTML = `
<p>Hola {{name}},</p>

<p>Te escribo personalmente para darte la bienvenida. Acabas de unirte como
<strong>Miembro Fundador</strong> al plan <strong>{{planName}}</strong>, y
quiero que sepas que esto significa algo para mí.</p>

<p><em>[Reemplaza este párrafo con tu mensaje personal:
qué significa para ti tener fundadores, qué pueden esperar en las
próximas semanas, cómo contactarte, etc.]</em></p>

<p>Tienes acceso de por vida a todo el contenido del plan. Sin renovaciones,
sin sorpresas. Si alguna vez quieres responderme directamente, este correo
llega a mi bandeja.</p>

<p>Gracias por confiar en este proyecto desde el inicio.</p>

<p>— CBas<br>
<a href="https://hablemoscripto.io">hablemoscripto.io</a></p>
`

// ---------------------------------------------------------------------------
// Sender
// ---------------------------------------------------------------------------

function renderTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] ?? '')
}

function firstName(fullName?: string | null): string {
  if (!fullName) return 'fundador'
  const trimmed = fullName.trim()
  if (!trimmed) return 'fundador'
  return trimmed.split(/\s+/)[0]
}

function buildHtmlEmail(innerHtml: string): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 24px;">
  ${innerHtml}
</body>
</html>`
}

export async function sendFundadorWelcome(params: WelcomeEmailParams): Promise<void> {
  const { to, name, tier, resendApiKey } = params

  if (!resendApiKey) {
    console.warn('Skipping Fundador welcome — RESEND_API_KEY not set')
    return
  }

  const planName = TIER_PLAN_NAMES[tier] ?? tier
  const values = { name: firstName(name), planName }

  const innerHtml = renderTemplate(BODY_HTML, values)
  const fullHtml = buildHtmlEmail(innerHtml)

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [to],
        subject: SUBJECT,
        html: fullHtml,
        // Reply-to defaults to the From address; if you want replies to
        // bounce to a separate inbox, add `reply_to` here.
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`Fundador welcome email failed for ${to}:`, errorText)
    } else {
      console.log(`Fundador welcome email sent to ${to}`)
    }
  } catch (err) {
    console.error(`Fundador welcome email error for ${to}:`, err)
  }
}
