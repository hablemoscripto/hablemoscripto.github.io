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
  premium: '¡Bienvenido a Hablemos Cripto!',
  vip: 'Bienvenido, miembro Fundador de Hablemos Cripto 👋',
}

// REPLACE BOTH BODIES BELOW WITH YOUR VOICE BEFORE DEPLOYING.
// HTML is allowed (basic tags: p, strong, em, a, ul, li, br).
const BODY_HTML_BY_TIER: Record<'premium' | 'vip', string> = {
  // ======================= INVERSOR ($99) =======================
  premium: `
<p>Hola {{name}},</p>

<p><strong>¡Bienvenido a Hablemos Cripto!</strong></p>

<p>Acabas de asegurar tu <strong>acceso de por vida</strong> al plan
{{planName}}: todo el contenido, sin renovaciones y sin sorpresas. Me alegra
muchísimo que hayas tomado la decisión de invertir en una educación que durará
para siempre.</p>

<p>Llevo alrededor de 8 años en el mundo de las criptomonedas y, la verdad,
hubiera soñado con tener acceso a una plataforma como esta cuando comencé:
acceso a una persona creíble, con años de experiencia, que ha vivido todas las
experiencias posibles en el juego. Desde soñar con volverme millonario en poco
tiempo y fallar, hasta enamorarme de la libertad tan única que ofrecen las
criptomonedas en todo sentido.</p>

<p>Hay muchas personas y grupos que prometen millones en poco tiempo y que,
claro, causan emoción. Pero la mayoría o todos se quedan ahí: promesas de aire
que nunca se convierten en realidad, que se aprovechan de las emociones y la
necesidad de la gente. Por eso construí esto. Es un tema que me apasiona
demasiado, me ha cambiado la vida y me encanta compartir lo que sé.</p>

<p>Si estás aquí, es porque eres uno de esos interesados en conocer de verdad
este mundo. Te felicito: invertir en educación nunca es una mala idea, y menos
cuando se trata de una tecnología tan novedosa.</p>

<p>Te llevaré de principiante a experto para que te sientas cómodo y seguro en
el mundo de las criptomonedas. Aquí no te prometeré volverte millonario a corto
plazo, pero sí la posibilidad de crear tu propio camino, lo más seguro posible.
Hasta dónde llegues y cuánto éxito alcances dependerá de ti.</p>

<p>Espero que disfrutes de todo el contenido de la plataforma. Me desvelé muchas
noches asegurándome de que fuera de la mejor calidad posible. Empieza aquí:</p>

<p>👉 <a href="https://www.hablemoscripto.io/education">https://www.hablemoscripto.io/education</a></p>

<p>Nos vemos adentro,<br>
CBas<br>
<a href="https://hablemoscripto.io">hablemoscripto.io</a></p>
`,
  // ==================== CRIPTO EXPERTO ($249) ===================
  vip: `
<p>Hola {{name}},</p>

<p><strong>¡Bienvenido a Hablemos Cripto!</strong></p>

<p>Acabas de asegurar tu <strong>acceso de por vida</strong> al plan
{{planName}}: todo el contenido de la plataforma, sin renovaciones y sin
sorpresas. Pero elegiste el plan que, para mí, tiene lo más valioso de todo.</p>

<p>Como miembro Cripto Experto entras a la comunidad, donde tienes acceso
directo a mí y a un grupo de personas que están en el mismo camino que tú. Te
soy sincero: tener algo así cuando yo empecé me hubiera hecho una diferencia
enorme. Aprender solo es lento y confuso; hacerlo rodeado de gente con la que
puedes preguntar, debatir y compartir lo cambia todo.</p>

<p>Cada semana haré una transmisión en vivo dentro del Discord donde desgloso el
newsletter de la semana y respondo tus preguntas en una sesión de Q&amp;A. Es el
espacio para resolver tus dudas en tiempo real y entender lo que está pasando en
el mercado conmigo.</p>

<p>Y si en algún momento te interesa una mentoría uno a uno, como miembro Cripto
Experto tienes la prioridad: estás primero en la fila.</p>

<p>Tu acceso a la comunidad está aquí. Únete al Discord y preséntate cuando
quieras:</p>

<p>👉 <a href="https://discord.gg/CQYyvzQb65">https://discord.gg/CQYyvzQb65</a></p>

<p>Llevo alrededor de 8 años en el mundo de las criptomonedas y he vivido todas
las experiencias posibles en el juego: desde soñar con volverme millonario en
poco tiempo y fallar, hasta enamorarme de la libertad tan única que ofrecen las
criptomonedas en todo sentido.</p>

<p>Hay muchas personas y grupos que prometen millones en poco tiempo y que,
claro, causan emoción. Pero la mayoría o todos se quedan ahí: promesas de aire
que nunca se convierten en realidad, que se aprovechan de las emociones y la
necesidad de la gente. Por eso construí esto. Es un tema que me apasiona
demasiado, me ha cambiado la vida y me encanta compartir lo que sé.</p>

<p>Si estás aquí, es porque eres uno de esos interesados en conocer de verdad
este mundo. Te felicito: invertir en educación nunca es una mala idea, y menos
cuando se trata de una tecnología tan novedosa.</p>

<p>Te llevaré de principiante a experto para que te sientas cómodo y seguro en
el mundo de las criptomonedas. Aquí no te prometeré volverte millonario a corto
plazo, pero sí la posibilidad de crear tu propio camino, lo más seguro posible.
Hasta dónde llegues y cuánto éxito alcances dependerá de ti.</p>

<p>Espero que disfrutes de todo el contenido de la plataforma. Me desvelé muchas
noches asegurándome de que fuera de la mejor calidad posible. Empieza aquí:</p>

<p>👉 <a href="https://www.hablemoscripto.io/education">https://www.hablemoscripto.io/education</a></p>

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
        subject,
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
