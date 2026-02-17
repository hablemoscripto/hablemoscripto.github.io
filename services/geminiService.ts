import { supabase } from '../lib/supabase';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export const streamGeminiResponse = async (
  history: ChatMessage[],
  newMessage: string,
  onChunk: (text: string) => void
): Promise<string> => {

  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      const errorMsg = "Debes iniciar sesión para usar el chat.";
      onChunk(errorMsg);
      return errorMsg;
    }

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const response = await fetch(`${supabaseUrl}/functions/v1/gemini-chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({
        history: history.map(msg => ({ role: msg.role, text: msg.text })),
        message: newMessage,
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(err.error || `HTTP ${response.status}`);
    }

    // Parse SSE stream from Edge Function
    const reader = response.body?.getReader();
    if (!reader) throw new Error('No response body');

    const decoder = new TextDecoder();
    let fullText = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      // SSE format: "data: {...}\n\n"
      const lines = chunk.split('\n');
      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const jsonStr = line.slice(6).trim();
        if (!jsonStr || jsonStr === '[DONE]') continue;
        try {
          const parsed = JSON.parse(jsonStr);
          const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            fullText += text;
            onChunk(fullText);
          }
        } catch {
          // Skip unparseable SSE lines
        }
      }
    }

    return fullText || 'No se recibió respuesta.';
  } catch (error) {
    console.error("Error calling Gemini chat:", error);
    const errorMessage = "Lo siento, tuve un problema conectando con la red. Intenta de nuevo.";
    onChunk(errorMessage);
    return errorMessage;
  }
};
