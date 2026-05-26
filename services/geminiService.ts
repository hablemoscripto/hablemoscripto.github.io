/**
 * @deprecated
 * This file has been replaced by services/aiService.ts (powered by Grok via xAI).
 * The old Gemini implementation is no longer used.
 * 
 * Do not import from this file. Use `streamAIResponse` from './aiService' instead.
 */

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export const streamGeminiResponse = async (): Promise<string> => {
  throw new Error('geminiService is deprecated. Use aiService.ts instead.');
};
