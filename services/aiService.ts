import { supabase } from '../lib/supabase';
import { reportError } from '../utils/errorReporting';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export const streamAIResponse = async (
  history: ChatMessage[],
  newMessage: string,
  onChunk: (text: string) => void
): Promise<string> => {
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

    if (!response.ok) {
      const err = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(err.error || `HTTP ${response.status}`);
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
          // OpenAI / xAI compatible format
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
    reportError(error, { component: 'aiService', action: 'streamAIResponse' });
    throw error;
  }
};
