import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey });

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
  
  if (!apiKey) {
    const errorMsg = "API Key not configured. Please providing a valid API key.";
    onChunk(errorMsg);
    return errorMsg;
  }

  try {
    // Convert history to Gemini format
    // Note: In a real app, we might manage a ChatSession more persistently.
    // For this simple widget, we'll start a fresh chat or append context manually if needed,
    // but here we use the chat feature.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `Eres "CBas AI", el asistente virtual experto de la plataforma educativa "Hablemos Cripto". 
        Tu objetivo es ayudar a estudiantes a entender conceptos de Bitcoin, Blockchain, Ethereum y Trading.
        
        Reglas:
        1. Respuestas concisas y educativas (máximo 3 párrafos cortos).
        2. Tono amigable, motivador y profesional.
        3. Usa analogías sencillas para explicar conceptos técnicos.
        4. SIEMPRE incluye un descargo de responsabilidad: "Esto es contenido educativo, no asesoramiento financiero".
        5. Si preguntan por precios futuros, di que nadie puede predecir el mercado y enfócate en el análisis técnico o fundamental.
        6. Formatea la respuesta usando Markdown (negritas, listas) para mejorar la legibilidad.`,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const resultStream = await chat.sendMessageStream({ message: newMessage });
    
    let fullText = '';
    for await (const chunk of resultStream) {
        const c = chunk as GenerateContentResponse;
        const chunkText = c.text || '';
        fullText += chunkText;
        onChunk(fullText);
    }
    
    return fullText;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    const errorMessage = "Lo siento, tuve un problema conectando con la red. Intenta de nuevo.";
    onChunk(errorMessage);
    return errorMessage;
  }
};