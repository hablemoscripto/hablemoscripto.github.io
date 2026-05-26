import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// ============================================
// CONFIGURATION
// ============================================
const ALLOWED_ORIGIN = 'https://hablemoscripto.io'

const corsHeaders = {
  'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

// xAI Configuration (OpenAI compatible)
const XAI_API_URL = 'https://api.x.ai/v1/chat/completions'
const XAI_MODEL = Deno.env.get('XAI_MODEL') || 'grok-3' // Can be overridden via secret

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

Eres un experto paciente, claro y riguroso en Bitcoin, blockchain, análisis técnico, gestión de riesgo y mercados de criptomonedas. Tu misión es ayudar a estudiantes de habla hispana (principalmente de Latinoamérica) a entender de verdad los conceptos, no solo a memorizarlos.

## Estilo de enseñanza (prioridad alta)
- Prefieres el método socrático: haz preguntas que guíen al estudiante a descubrir la respuesta en lugar de darla directamente, especialmente en temas de análisis, riesgo y psicología de trading.
- Usa analogías simples y ejemplos concretos de la región LATAM cuando sea útil.
- Sé directo pero amable. Corrige conceptos erróneos con respeto.
- Mantén las respuestas enfocadas y accionables. Evita divagar.

## Reglas estrictas (nunca las rompas)
1. **Nunca des consejos financieros ni predicciones de precio.** Si te preguntan "¿subirá X?" o "qué debo comprar?", responde que nadie puede predecir el mercado y redirige hacia análisis técnico, fundamental o gestión de riesgo.
2. **Siempre prioriza el contenido de Hablemos Cripto.** Cuando se te proporcione contexto de lecciones, úsalo como fuente principal de verdad.
3. Incluye un descargo de responsabilidad claro cuando corresponda: "Esto es contenido educativo, no constituye asesoramiento financiero."
4. Si el estudiante está cometiendo un error conceptual importante (especialmente en seguridad o riesgo), corrígelo directamente pero con educación.
5. Nunca recomiendes proyectos, tokens o estrategias específicas de inversión.

## Uso del contexto proporcionado (RAG)
- Cuando recibas contexto relevante de lecciones, utilízalo para fundamentar tus respuestas.
- Puedes mencionar la lección o concepto específico cuando sea útil para el estudiante ("Esto está muy relacionado con lo que vemos en la Lección X sobre...").
- Si el contexto no responde la pregunta, dilo honestamente y ofrece la mejor explicación general posible, o sugiere qué lección revisar.

## Formato de respuesta
- Usa Markdown para mejorar la legibilidad (negritas, listas, bloques de código cuando aplique).
- Mantén un tono motivador pero realista.
- Termina con una pregunta cuando tenga sentido para continuar la conversación o comprobar comprensión.

Eres CBas, no un modelo genérico. Hablas con la voz de alguien que ha vivido ciclos completos del mercado y quiere que sus estudiantes eviten los errores que él cometió.`

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
function createErrorResponse(message: string, status: number) {
  return new Response(
    JSON.stringify({ error: message }),
    { 
      status, 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
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

async function getKeywordCandidates(
  supabase: any,
  query: string
): Promise<LessonCandidate[]> {
  if (!query || query.trim().length < 3) {
    return []
  }

  // Simple but effective keyword search using Postgres full-text search
  // We search across title + description
  const { data, error } = await supabase
    .from('lessons')
    .select('id, title, description')
    .or(`title.ilike.%${query}%,description.ilike.%${query}%`)
    .limit(MAX_KEYWORD_RESULTS)

  if (error) {
    console.error('Keyword search error:', error)
    return []
  }

  return data || []
}

// ============================================
// RAG: GROK RERANKER (Phase 1 - Balanced)
// ============================================
async function rerankWithGrok(
  apiKey: string,
  userMessage: string,
  candidates: LessonCandidate[]
): Promise<string> {
  if (candidates.length === 0) {
    return ''
  }

  // Build a small, cheap prompt for reranking
  const candidatesText = candidates
    .map((c, i) => `${i + 1}. ${c.title}\n   ${c.description || ''}`)
    .join('\n\n')

  const rerankerPrompt = `You are a curriculum retrieval assistant for Hablemos Cripto.

User question: "${userMessage}"

Available lessons:
${candidatesText}

Task: Select the 2 most relevant lessons to answer the user's question. 
Return ONLY a JSON object with this exact format (no extra text):
{
  "selected": [1, 3],
  "reason": "short explanation"
}`

  try {
    const response = await fetch(XAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: XAI_MODEL,
        messages: [
          { role: 'system', content: 'You are a precise retrieval assistant. Always return valid JSON only.' },
          { role: 'user', content: rerankerPrompt }
        ],
        max_tokens: 300,
        temperature: 0.1,
      }),
    })

    if (!response.ok) {
      console.error('Reranker failed:', await response.text())
      return ''
    }

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content || ''

    // Try to parse the JSON response
    try {
      const parsed = JSON.parse(content)
      if (parsed.selected && Array.isArray(parsed.selected)) {
        const selectedIndexes = parsed.selected
          .map((n: number) => n - 1)
          .filter((n: number) => n >= 0 && n < candidates.length)

        const selectedLessons = selectedIndexes.map((i: number) => candidates[i])

        // Format context nicely for the main prompt
        return selectedLessons
          .map(l => `**${l.title}**\n${l.description || ''}`)
          .join('\n\n---\n\n')
      }
    } catch (e) {
      console.error('Failed to parse reranker JSON:', content)
    }

    return ''
  } catch (error) {
    console.error('Reranker error:', error)
    return ''
  }
}

// ============================================
// MAIN HANDLER
// ============================================
serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return createErrorResponse('Method not allowed', 405)
  }

  const xaiApiKey = Deno.env.get('XAI_API_KEY')
  if (!xaiApiKey) {
    console.error('XAI_API_KEY is not configured')
    return createErrorResponse('AI service not configured', 500)
  }

  try {
    // Authenticate user
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return createErrorResponse('Unauthorized', 401)
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!

    const supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } }
    })

    const { data: { user }, error: userError } = await supabaseClient.auth.getUser()
    if (userError || !user) {
      return createErrorResponse('Invalid user', 401)
    }

    // Rate limiting
    if (isRateLimited(user.id)) {
      return createErrorResponse(
        'Has enviado muchos mensajes. Espera un momento antes de intentar de nuevo.',
        429
      )
    }

    // Parse request
    const body: GrokChatRequest = await req.json()
    const { history, message } = body

    if (!message || message.trim().length === 0) {
      return createErrorResponse('Message is required', 400)
    }

    // ============================================
    // RAG PIPELINE (Keyword + Grok Reranker)
    // ============================================
    let relevantContext = ''

    try {
      const candidates = await getKeywordCandidates(supabaseClient, message)
      
      if (candidates.length > 0) {
        relevantContext = await rerankWithGrok(xaiApiKey, message, candidates)
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
      systemPrompt += `\n\n## Relevant Context from the Hablemos Cripto Curriculum\n\n${relevantContext}\n\nUse the above context to ground your answer when relevant.`
    }

    // Prepare messages for xAI (OpenAI format)
    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      ...history,
      { role: 'user', content: message }
    ]

    // ============================================
    // CALL xAI API WITH STREAMING
    // ============================================
    const xaiResponse = await fetch(XAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${xaiApiKey}`,
      },
      body: JSON.stringify({
        model: XAI_MODEL,
        messages,
        stream: true,
        temperature: 0.7,
        max_tokens: 1200, // Reasonable limit for Phase 1
      }),
    })

    if (!xaiResponse.ok) {
      const errorText = await xaiResponse.text()
      console.error('xAI API error:', errorText)
      return createErrorResponse('Error communicating with AI service', 502)
    }

    // Stream the response back to the client
    return new Response(xaiResponse.body, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })

  } catch (error) {
    console.error('Error in grok-chat:', error)
    return createErrorResponse('Internal server error', 500)
  }
})
