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
// Two separate messages, one per paid tier. Both should sound like CBas wrote
// them personally, not like a SaaS auto-responder.
//   premium → Inversor ($99)
//   vip     → Cripto Experto ($249)
// Placeholders substituted at send time:
//   {{name}}      → first name (or "fundador" if name unknown)
//   {{planName}}  → "Inversor" or "Cripto Experto"
// ---------------------------------------------------------------------------

// Subject line per tier — they can differ or be identical.
const SUBJECT_BY_TIER: Record<'premium' | 'vip', string> = {
  premium: 'Bienvenido a Hablemos Cripto',
  vip: 'Bienvenido a Cripto Experto',
}

// REPLACE BOTH BODIES BELOW WITH YOUR VOICE BEFORE DEPLOYING.
// HTML is allowed (basic tags: p, strong, em, a, ul, li, br).
const BODY_HTML_BY_TIER: Record<'premium' | 'vip', string> = {
  // ======================= INVERSOR ($99) =======================
  premium: `
<p>Hola {{name}},</p>

<p><strong>Bienvenido a Hablemos Cripto.</strong></p>

<p>Acabas de asegurar tu <strong>acceso de por vida</strong> al plan
{{planName}}: las 44 lecciones, todas las actualizaciones futuras y las
herramientas de práctica, sin renovaciones.</p>

<p>Construí esta ruta con lo que me hubiera gustado tener cuando empecé: una
secuencia clara, seguridad antes que especulación y contexto para tomar
decisiones propias. Aquí no encontrarás promesas de rentabilidad ni señales
mágicas. Encontrarás fundamentos, práctica y criterios para evaluar el riesgo.</p>

<p>Te recomiendo empezar por el principio, incluso si ya conoces algunos temas.
Cada nivel prepara el siguiente y tu progreso queda guardado en la cuenta.</p>

<p><a href="https://www.hablemoscripto.io/education">Empezar el plan de estudio</a></p>

<p>Nos vemos adentro,<br>
CBas<br>
<a href="https://hablemoscripto.io">hablemoscripto.io</a></p>
`,
  // ==================== CRIPTO EXPERTO ($249) ===================
  vip: `
<p>Hola {{name}},</p>

<p><strong>Bienvenido a Cripto Experto.</strong></p>

<p>Acabas de asegurar tu <strong>acceso de por vida</strong> al plan
{{planName}}: todo el currículum, acceso inmediato a la comunidad privada y
acompañamiento como miembro fundador.</p>

<p>Quiero empezar conociendo tu contexto. Dentro de los próximos dos días hábiles
te escribiré para coordinar una sesión privada de bienvenida. Allí revisaremos
qué quieres aprender, tu experiencia actual y cómo aprovechar mejor la
plataforma.</p>

<p>A medida que crezca la comunidad tendremos un encuentro grupal mensual para
analizar el mercado, profundizar en el newsletter y responder preguntas. También
tendrás prioridad si solicitas una mentoría uno a uno.</p>

<p>Tu acceso a la comunidad ya está activo:</p>

<p><a href="https://discord.gg/CQYyvzQb65">Entrar a la comunidad privada</a></p>

<p>Puedes comenzar el currículum aquí:</p>

<p><a href="https://www.hablemoscripto.io/education">Abrir Hablemos Cripto</a></p>

<p>Nos vemos adentro,<br>
CBas<br>
<a href="https://hablemoscripto.io">hablemoscripto.io</a></p>
`,
}

// ---------------------------------------------------------------------------
// Sender
// ---------------------------------------------------------------------------

// Buyer/user name is attacker-controllable and gets interpolated into BODY_HTML,
// which is sent as an HTML email — escape before substitution to prevent injection.
function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function renderTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => escapeHtml(values[key] ?? ''))
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

  const subject = SUBJECT_BY_TIER[tier] ?? SUBJECT_BY_TIER.premium
  const body = BODY_HTML_BY_TIER[tier] ?? BODY_HTML_BY_TIER.premium
  const innerHtml = renderTemplate(body, values)
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
        reply_to: 'soporte@hablemoscripto.io',
        subject,
        html: fullHtml,
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
