import { supabase } from '../lib/supabase';
import { reportError } from '../utils/errorReporting';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

const MAX_RETRIES = 1;
const RETRY_DELAY_MS = 1200;

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const streamAIResponse = async (
  history: ChatMessage[],
  newMessage: string,
  onChunk: (text: string) => void
): Promise<string> => {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.access_token) {
        const errorMsg = "Debes iniciar sesión para usar el chat.";
        onChunk(errorMsg);
        return errorMsg;
      }

      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const response = await fetch(`${supabaseUrl}/functions/v1/grok-chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          history: history.map(msg => ({
            role: msg.role === 'model' ? 'assistant' : 'user',
            content: msg.text,
          })),
          message: newMessage,
        }),
      });

      if (response.status === 429) {
        throw new Error('Has enviado muchos mensajes. Espera un momento e intenta de nuevo.');
      }

      if (response.status === 401 || response.status === 403) {
        throw new Error('Debes iniciar sesión para usar el chat.');
      }

      if (!response.ok) {
        const err = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(err.error || `Error del servidor (${response.status})`);
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No response body');

      const decoder = new TextDecoder();
      let fullText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const jsonStr = line.slice(6).trim();

          if (!jsonStr || jsonStr === '[DONE]') continue;

          try {
            const parsed = JSON.parse(jsonStr);
            const delta = parsed?.choices?.[0]?.delta?.content;
            if (delta) {
              fullText += delta;
              onChunk(fullText);
            }
          } catch {
            // Skip unparseable lines
          }
        }
      }

      return fullText || 'No se recibió respuesta.';

    } catch (error) {
      lastError = error as Error;

      // Only retry on network-related transient errors
      const isTransient = error instanceof TypeError || 
                         (error instanceof Error && error.message.includes('fetch'));

      if (attempt < MAX_RETRIES && isTransient) {
        console.warn(`AI request failed (attempt ${attempt + 1}). Retrying...`);
        await sleep(RETRY_DELAY_MS);
        continue;
      }

      // Final failure - provide clearer messages to the user
      let userMessage = "Ocurrió un error al comunicarse con el asistente. Por favor intenta de nuevo.";

      if (error instanceof Error) {
        if (error.message.includes('429') || error.message.includes('muchos mensajes')) {
          userMessage = "Has enviado muchos mensajes. Espera un momento e intenta de nuevo.";
        } else if (error.message.includes('401') || error.message.includes('403') || error.message.includes('iniciar sesión')) {
          userMessage = "Debes iniciar sesión para usar el chat.";
        } else if (error.message.includes('503') || error.message.includes('unavailable')) {
          userMessage = "El asistente de IA está temporalmente no disponible. Por favor intenta en unos minutos.";
        }
      }

      reportError(error, { component: 'aiService', action: 'streamAIResponse' });
      throw new Error(userMessage);
    }
  }

  // Should never reach here
  throw lastError || new Error('Unknown error in AI service');
};
