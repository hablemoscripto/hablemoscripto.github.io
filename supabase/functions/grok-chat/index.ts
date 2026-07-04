import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// ============================================
// CONFIGURATION
// ============================================
const ALLOWED_ORIGINS = [
  'https://hablemoscripto.io',
  'https://www.hablemoscripto.io',
]

function getCorsHeaders(origin: string) {
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }
}

// xAI Configuration (OpenAI compatible)
const XAI_API_URL = 'https://api.x.ai/v1/chat/completions'

// Model configuration - allows using cheaper model for reranker
const RERANKER_MODEL = Deno.env.get('XAI_RERANKER_MODEL') || 'grok-3-fast'
const MAIN_MODEL = Deno.env.get('XAI_MAIN_MODEL') || 'grok-3-fast'

// Rate limiting (same as previous for Phase 1)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 20
const RATE_LIMIT_WINDOW_MS = 60_000

// RAG Configuration (Balanced approach)
const MAX_KEYWORD_RESULTS = 8
const MAX_CONTEXT_LESSONS = 2

// ============================================
// CBAS SYSTEM PROMPT (Approved - Phase 1)
// ============================================
const CBAS_SYSTEM_PROMPT = `Eres CBas AI, el tutor personal de Hablemos Cripto.

Tu misión es ayudar a estudiantes de habla hispana (especialmente de Latinoamérica) a **entender de verdad** los conceptos de Bitcoin, blockchain, análisis técnico, gestión de riesgo y mercados de criptomonedas, en lugar de solo memorizar información.

## Estilo de enseñanza (Tu prioridad más importante)
- Prefieres fuertemente el método socrático. En lugar de dar explicaciones largas de inmediato, haz preguntas que ayuden al estudiante a pensar y descubrir las ideas por sí mismo.
- Excepción clave: si el estudiante pide explícitamente una explicación, un ejemplo o una definición ("explícame", "dame un ejemplo", "qué es"), entrega primero la explicación completa o el ejemplo trabajado que pidió, y solo después usa una pregunta socrática para profundizar. El método socrático es para profundizar, no para negarle al estudiante la enseñanza que pidió.
- Adapta tu nivel de profundidad según las respuestas del estudiante. Si parece principiante, empieza con preguntas simples. Si muestra más conocimiento, ve más profundo.
- Usa analogías concretas y ejemplos cercanos a la realidad de Latinoamérica cuando sea útil.
- Sé paciente, claro y respetuoso. Corrige errores conceptuales con educación, pero con firmeza cuando sea importante (especialmente en temas de seguridad y riesgo).

## Reglas estrictas (Nunca las rompas)
1. **Nunca des consejos financieros ni predicciones de precio.** Si te preguntan por qué subirán o bajarán los precios, o qué comprar, responde claramente que nadie puede predecir el mercado y redirige la conversación hacia análisis, riesgo o educación.
2. **Prioriza el contenido de Hablemos Cripto.** Cuando tengas contexto relevante de lecciones, úsalo como base principal de tu respuesta. Menciona explícitamente la lección cuando sea natural ("Esto está muy alineado con lo que vemos en la Lección X...").
3. Siempre que sea apropiado, incluye un recordatorio educativo: "Esto es contenido educativo, no constituye asesoramiento financiero."
4. Nunca recomiendes proyectos, tokens, exchanges ni estrategias específicas de inversión.
5. Si el estudiante está cometiendo un error grave de concepto (especialmente en seguridad o riesgo), corrígelo directamente.
6. **Estafas: nómbralas primero.** Si el estudiante describe algo con las señales típicas de una estafa (retornos garantizados, que le pidan enviar dinero primero, presión para actuar rápido, ofertas de inversión no solicitadas por WhatsApp, Telegram o mensajes directos), dile de forma clara y firme que esto es una estafa, usando esas palabras ("esto es una estafa"), ANTES de cualquier pregunta socrática o explicación extendida. Dile también que no envíe dinero.

## Uso del contexto del currículo (RAG)
- Cuando recibas contexto de lecciones, intégralo de forma natural en tu explicación.
- Prefiere explicar los conceptos usando el marco y la profundidad del currículo de Hablemos Cripto cuando sea relevante.
- Si el contexto de las lecciones contradice tu conocimiento general, EL CONTEXTO DE LAS LECCIONES GANA: es contenido mantenido y verificado por el equipo de Hablemos Cripto. Si la diferencia es relevante para el estudiante, menciónala brevemente.
- Si el contexto es útil, puedes decir cosas como: "Esto se parece mucho a lo que explicamos en la Lección X sobre...".
- Si el contexto no es suficiente o no aplica, dilo honestamente y da la mejor explicación general posible, sugiriendo qué lección revisar después.

## Calidad de las respuestas
- Usa Markdown de forma efectiva: negritas, listas, tablas y bloques de código cuando ayuden a la comprensión.
- No uses guiones largos (— ni –) en tus respuestas. Usa comas, dos puntos, paréntesis o puntos en su lugar.
- Mantén las respuestas enfocadas. Evita repetir la misma idea varias veces.
- Estructura bien tus respuestas (usa encabezados o secciones cuando el tema sea complejo).
- Evita dejar oraciones a medias o explicaciones incompletas.
- Termina casi siempre con una pregunta que invite a continuar la conversación o que ayude a verificar comprensión.

Eres CBas. Hablas con la voz de alguien que ha vivido ciclos completos del mercado y quiere que sus estudiantes desarrollen criterio propio, no que dependan de opiniones ajenas.`

// ============================================
// TYPES
// ============================================
interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

interface GrokChatRequest {
  history: ChatMessage[]
  message: string
}

// ============================================
// RATE LIMITING
// ============================================
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

// ============================================
// UTILITIES
// ============================================
function createErrorResponse(message: string, status: number, origin: string = '') {
  return new Response(
    JSON.stringify({ error: message }),
    { 
      status, 
      headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' } 
    }
  )
}

// ============================================
// RAG: KEYWORD RETRIEVAL (Phase 1 - Balanced)
// ============================================
interface LessonCandidate {
  id: number
  title: string
  description: string | null
}

// PostgREST treats ,()*: as structural characters inside the .or() filter DSL,
// so a raw user message could break out of the ilike pattern. Whitelist to
// letters/numbers/spaces/Spanish accents and cap length to keep keyword search
// working without allowing filter injection.
function sanitizeKeywordQuery(query: string): string {
  return query
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 120)
}

// Spanish stopwords + filler dropped from keyword extraction so the search
// matches on meaningful terms (bitcoin, halving, wallet) rather than the whole
// question, which almost never appears verbatim in a title/description.
const STOPWORDS = new Set([
  'que', 'qué', 'como', 'cómo', 'cual', 'cuál', 'cuáles', 'para', 'por', 'con',
  'del', 'los', 'las', 'una', 'uno', 'unos', 'unas', 'este', 'esta', 'esto',
  'eso', 'esa', 'ese', 'sobre', 'entre', 'más', 'muy', 'pero', 'porque', 'cuando',
  'donde', 'dónde', 'quien', 'quién', 'sus', 'mis', 'tus', 'son', 'está', 'están',
  'hay', 'tiene', 'tienen', 'puede', 'pueden', 'desde', 'hasta', 'también', 'sí',
  'sirve', 'significa', 'funciona', 'explica', 'explícame', 'dime', 'cuáles',
])

function extractKeywords(query: string): string[] {
  return Array.from(
    new Set(
      sanitizeKeywordQuery(query)
        .toLowerCase()
        .split(' ')
        .filter((w) => w.length >= 4 && !STOPWORDS.has(w))
    )
  ).slice(0, 6)
}

async function getKeywordCandidates(
  supabase: any,
  query: string
): Promise<LessonCandidate[]> {
  const keywords = extractKeywords(query)
  if (keywords.length === 0) {
    return []
  }

  // Section-aware search (2026-07-03 migration): matches title, description,
  // AND the flattened text of lesson_details.sections, so topics that only
  // appear inside a section are retrievable.
  const { data: rpcData, error: rpcError } = await supabase.rpc('search_lessons_rag', {
    keywords,
  })

  if (!rpcError) {
    return rpcData || []
  }

  // Fallback while the SQL function is not applied yet, so deploy order
  // cannot break chat: OR each meaningful keyword across title + description.
  // The keywords are already sanitized to letters/numbers, so they're safe
  // inside the .or() DSL.
  console.error('search_lessons_rag unavailable, falling back to title/description search:', rpcError)

  const orFilter = keywords
    .flatMap((k) => [`title.ilike.%${k}%`, `description.ilike.%${k}%`])
    .join(',')

  const { data, error } = await supabase
    .from('lessons')
    .select('id, title, description')
    .or(orFilter)
    .limit(MAX_KEYWORD_RESULTS)

  if (error) {
    console.error('Keyword search error:', error)
    return []
  }

  return data || []
}

// Fetch the real lesson content (lesson_details.sections) for the reranked
// lessons and flatten it into grounded context. This is the substance the tutor
// teaches from — previously only titles + one-line descriptions were injected.
const MAX_CHARS_PER_LESSON = 3000

async function fetchLessonContent(
  supabase: any,
  candidates: LessonCandidate[],
  lessonIds: number[]
): Promise<string> {
  if (lessonIds.length === 0) return ''

  const titleById = new Map(candidates.map((c) => [c.id, c.title]))

  const { data, error } = await supabase
    .from('lesson_details')
    .select('lesson_id, sections')
    .in('lesson_id', lessonIds)

  if (error || !data) {
    console.error('lesson_details fetch error:', error)
    return ''
  }

  const sectionsById = new Map<number, unknown>(data.map((d: { lesson_id: number; sections: unknown }) => [d.lesson_id, d.sections]))
  const blocks: string[] = []

  // Preserve the reranker's selection order.
  for (const id of lessonIds) {
    const sections = sectionsById.get(id)
    if (!Array.isArray(sections)) continue
    const title = titleById.get(id) || `Lección ${id}`

    let body = sections
      .map((s: { title?: unknown; content?: unknown }) => {
        const t = typeof s.title === 'string' ? s.title : ''
        const c = typeof s.content === 'string' ? s.content : ''
        return [t, c].filter(Boolean).join(': ')
      })
      .filter(Boolean)
      .join('\n\n')

    if (body.length > MAX_CHARS_PER_LESSON) {
      body = body.slice(0, MAX_CHARS_PER_LESSON) + '…'
    }
    if (body) blocks.push(`### ${title}\n${body}`)
  }

  return blocks.join('\n\n---\n\n')
}

// ============================================
// RAG: GROK RERANKER (Phase 1 - Balanced)
// ============================================
async function rerankWithGrok(
  apiKey: string,
  userMessage: string,
  candidates: LessonCandidate[]
): Promise<number[]> {
  if (candidates.length === 0) {
    return []
  }

  const candidatesText = candidates
    .map((c, i) => `${i + 1}. Title: ${c.title}\n   Summary: ${c.description || 'No description available'}`)
    .join('\n\n')

  const rerankerPrompt = `You are an expert curriculum retrieval assistant for "Hablemos Cripto".

Tu única tarea es seleccionar las lecciones más útiles del currículo para ayudar a responder la pregunta del estudiante de la mejor manera posible.

Pregunta del estudiante: "${userMessage}"

Lecciones disponibles:
${candidatesText}

Criterios de selección (en orden de importancia):
1. Relevancia directa: ¿La lección explica los conceptos centrales que necesita el estudiante para entender su pregunta?
2. Valor pedagógico: ¿Esta lección ayudaría a un estudiante a construir una comprensión sólida del tema?
3. Profundidad adecuada: Evita seleccionar lecciones demasiado avanzadas o demasiado básicas para la pregunta.

Instrucciones:
- Selecciona máximo **2 lecciones** (puedes elegir solo 1 si es suficiente).
- Prioriza calidad sobre cantidad.
- Devuelve **únicamente** un objeto JSON válido con esta estructura exacta (sin texto adicional antes ni después):

{
  "selected": [1, 3],
  "reason": "Explicación breve y clara de por qué estas lecciones son las más útiles para responder la pregunta del estudiante"
}`

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000) // 15s timeout for reranker

    const response = await fetch(XAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: RERANKER_MODEL,
        messages: [
          { role: 'system', content: 'You are a precise and reliable retrieval assistant. Always return only valid JSON.' },
          { role: 'user', content: rerankerPrompt }
        ],
        max_tokens: 400,
        temperature: 0.1,
      }),
      signal: controller.signal,
    })

    clearTimeout(timeout)

    if (!response.ok) {
      console.error('Reranker API error:', await response.text())
      return []
    }

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content || ''

    try {
      const parsed = JSON.parse(content.trim())
      if (parsed.selected && Array.isArray(parsed.selected)) {
        const selectedLessons = parsed.selected
          .map((n: number) => candidates[n - 1])
          .filter((c: LessonCandidate | undefined): c is LessonCandidate => !!c)

        if (selectedLessons.length === 0) return []

        console.log(`[RAG] Reranker selected lessons: ${selectedLessons.map((l: LessonCandidate) => l.title).join(' | ')}`)

        return selectedLessons.map((l: LessonCandidate) => l.id)
      }
    } catch (parseError) {
      console.error('Failed to parse reranker JSON:', content)
    }

    return []
  } catch (error) {
    console.error('Reranker error:', error)
    return []
  }
}

// ============================================
// MAIN HANDLER
// ============================================
serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    const origin = req.headers.get('Origin') || ''
    return new Response('ok', { headers: getCorsHeaders(origin) })
  }

  if (req.method !== 'POST') {
    const origin = req.headers.get('Origin') || ''
    return createErrorResponse('Method not allowed', 405, origin)
  }

  const xaiApiKey = Deno.env.get('XAI_API_KEY')
  if (!xaiApiKey) {
    console.error('XAI_API_KEY is not configured')
    const origin = req.headers.get('Origin') || ''
    return createErrorResponse('AI service not configured', 500, origin)
  }

  try {
    // Authenticate user
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      const origin = req.headers.get('Origin') || ''
      return createErrorResponse('Unauthorized', 401, origin)
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!

    const supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } }
    })

    // Service-role client for RAG reads: lesson_details is now locked to
    // service-role only (content-protection migration), so the anon client
    // can no longer read it. Used only for the curriculum retrieval below.
    const ragClient = createClient(supabaseUrl, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

    const { data: { user }, error: userError } = await supabaseClient.auth.getUser()
    if (userError || !user) {
      const origin = req.headers.get('Origin') || ''
      return createErrorResponse('Invalid user', 401, origin)
    }

    // Rate limiting
    if (isRateLimited(user.id)) {
      const origin = req.headers.get('Origin') || ''
      return createErrorResponse(
        'Has enviado muchos mensajes. Espera un momento antes de intentar de nuevo.',
        429,
        origin
      )
    }

    // Parse request
    const body: GrokChatRequest = await req.json()
    const { history, message } = body

    if (!message || message.trim().length === 0) {
      const origin = req.headers.get('Origin') || ''
      return createErrorResponse('Message is required', 400, origin)
    }

    if (message.length > 2000) {
      const origin = req.headers.get('Origin') || ''
      return createErrorResponse('Message too long', 400, origin)
    }

    // ============================================
    // RAG PIPELINE (Keyword + Grok Reranker)
    // ============================================
    let relevantContext = ''

    try {
      const candidates = await getKeywordCandidates(ragClient, message)

      if (candidates.length > 0) {
        const selectedIds = await rerankWithGrok(xaiApiKey, message, candidates)
        relevantContext = await fetchLessonContent(ragClient, candidates, selectedIds)
      }
    } catch (ragError) {
      console.error('RAG pipeline error (non-fatal):', ragError)
      // Continue without context if retrieval fails
    }

    // ============================================
    // BUILD FINAL PROMPT WITH CONTEXT
    // ============================================
    let systemPrompt = CBAS_SYSTEM_PROMPT

    if (relevantContext) {
      systemPrompt += `\n\n## CONTENIDO REAL DE LAS LECCIONES DE HABLEMOS CRIPTO\n\nLo siguiente es el contenido textual de las lecciones más relevantes del currículo para esta pregunta. Es tu fuente principal de verdad:\n\n${relevantContext}\n\nInstrucciones sobre este contexto:\n- Basa tu respuesta en este contenido cuando sea relevante; es lo que el estudiante está estudiando en la plataforma.\n- Referencia las lecciones de forma natural (ej: "Esto es justo lo que vemos en la lección sobre...").\n- No copies el texto literalmente ni lo cites en bloque. Explícalo con tus propias palabras, manteniendo la esencia y la profundidad del currículo.\n- Si la pregunta va más allá de este contenido, complementa con tu conocimiento general y sugiere qué lección revisar.`
    }

    // Prepare messages for xAI (OpenAI format)
    // Truncate history to control cost and context length
    const MAX_HISTORY_MESSAGES = 12
    const recentHistory = history.slice(-MAX_HISTORY_MESSAGES)

    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      ...recentHistory,
      { role: 'user', content: message }
    ]

    // ============================================
    // CALL xAI API WITH STREAMING (Main Model)
    // ============================================
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 45000) // 45s timeout for main response

    let xaiResponse
    try {
      xaiResponse = await fetch(XAI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${xaiApiKey}`,
        },
        body: JSON.stringify({
          model: MAIN_MODEL,
          messages,
          stream: true,
          temperature: 0.7,
          max_tokens: 1400,
        }),
        signal: controller.signal,
      })
    } catch (fetchError) {
      clearTimeout(timeout)
      console.error('Failed to reach xAI API:', fetchError)
      const origin = req.headers.get('Origin') || ''
      return createErrorResponse('The AI service is currently unavailable. Please try again in a moment.', 503, origin)
    }

    clearTimeout(timeout)

    if (!xaiResponse.ok) {
      const errorText = await xaiResponse.text()
      console.error('xAI API error:', errorText)
      const origin = req.headers.get('Origin') || ''
      return createErrorResponse('The AI service is currently unavailable. Please try again in a moment.', 502, origin)
    }

    // Stream the response back to the client
    const origin = req.headers.get('Origin') || ''
    return new Response(xaiResponse.body, {
      headers: {
        ...getCorsHeaders(origin),
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })

  } catch (error) {
    console.error('Error in grok-chat:', error)
    const origin = req.headers.get('Origin') || ''
    return createErrorResponse('Internal server error', 500, origin)
  }
})
