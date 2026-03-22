import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2, Trash2 } from 'lucide-react';
import { streamGeminiResponse, ChatMessage } from '../services/geminiService';
import { trackChatMessage } from '../utils/analytics';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';

const STORAGE_KEY = 'chat_messages';

const INITIAL_GREETING: ChatMessage = {
  role: 'model',
  text: '¡Hola! Soy CBas AI 🤖. Pregúntame sobre Bitcoin, cómo empezar en cripto o conceptos de trading. ¿En qué puedo ayudarte hoy?',
  timestamp: new Date()
};

function loadStoredMessages(): ChatMessage[] {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as Array<{ role: string; text: string; timestamp: string }>;
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map(msg => ({
          ...msg,
          role: msg.role as 'user' | 'model',
          timestamp: new Date(msg.timestamp)
        }));
      }
    }
  } catch {
    // Corrupted data — fall back to default
  }
  return [INITIAL_GREETING];
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(loadStoredMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Persist messages to sessionStorage when streaming finishes
  useEffect(() => {
    if (!isLoading && messages.length > 0) {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      } catch {
        // sessionStorage full or unavailable — ignore
      }
    }
  }, [messages, isLoading]);

  const clearChat = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setMessages([{ ...INITIAL_GREETING, timestamp: new Date() }]);
  };

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [isOpen]);

  // Listen for custom events from other components (like LessonView)
  useEffect(() => {
    const handleOpenChat = (e: CustomEvent<{ prompt: string }>) => {
      setIsOpen(true);
      setInput(e.detail.prompt);
    };

    window.addEventListener('open-chat-with-prompt', handleOpenChat as EventListener);
    return () => window.removeEventListener('open-chat-with-prompt', handleOpenChat as EventListener);
  }, []);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    trackChatMessage();

    try {
      let fullResponse = '';
      setMessages(prev => [...prev, {
        role: 'model',
        text: '',
        timestamp: new Date()
      }]);

      const apiHistory = messages[0]?.role === 'model' && messages.length === 1
        ? []
        : messages;

      let frameId = 0;
      await streamGeminiResponse(
        apiHistory,
        userMessage.text,
        (chunk) => {
          cancelAnimationFrame(frameId);
          frameId = requestAnimationFrame(() => {
            setMessages(prev => {
              const updated = [...prev];
              const last = updated[updated.length - 1];
              if (last?.role === 'model') {
                updated[updated.length - 1] = { ...last, text: chunk };
              }
              return updated;
            });
          });
        }
      );
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error. Intenta de nuevo.';
      setMessages(prev => {
        const updated = [...prev];
        const last = updated[updated.length - 1];
        if (last?.role === 'model' && !last.text) {
          updated[updated.length - 1] = { ...last, text: `⚠️ ${errorMessage}` };
        }
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-navy-900 shadow-lg hover:shadow-brand-500/40 transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center"
        aria-label={isOpen ? 'Cerrar asistente IA' : 'Abrir asistente IA'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={28} aria-hidden="true" /> : <MessageCircle size={28} aria-hidden="true" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <section
          className="fixed bottom-24 right-6 w-[90vw] sm:w-[400px] h-[500px] max-h-[80vh] z-50 bg-navy-900 border border-navy-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-float-in origin-bottom-right"
          role="region"
          aria-label="Chat con asistente de IA"
        >

          {/* Header */}
          <div className="bg-navy-800 p-4 border-b border-navy-700 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center border border-brand-500/50">
              <Sparkles size={20} className="text-brand-500" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-white text-sm" id="chat-title">CBas AI Assistant</h3>
              <p className="text-xs text-navy-400 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></span>
                Online con Gemini 1.5
              </p>
            </div>
            <button
              onClick={clearChat}
              className="p-2 text-navy-400 hover:text-red-400 hover:bg-navy-700/50 rounded-lg transition-colors"
              aria-label="Limpiar conversación"
              title="Limpiar conversación"
            >
              <Trash2 size={16} aria-hidden="true" />
            </button>
          </div>

          {/* Messages Area */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-navy-950/50 scroll-smooth"
            role="log"
            aria-live="polite"
            aria-atomic="false"
            aria-label="Historial de mensajes"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                    msg.role === 'user'
                      ? 'bg-brand-600 text-white rounded-br-none'
                      : 'bg-navy-800 text-navy-200 rounded-bl-none border border-navy-700'
                  }`}
                  aria-label={msg.role === 'user' ? 'Tu mensaje' : 'Respuesta del asistente'}
                >
                  {msg.role === 'model' ? (
                     <div className="prose prose-invert prose-sm max-w-none">
                        {msg.text ? (
                          <ReactMarkdown rehypePlugins={[rehypeSanitize]}>{msg.text}</ReactMarkdown>
                        ) : (
                          <span className="flex items-center gap-1 text-navy-400" aria-label="Pensando">
                            <Loader2 size={14} className="animate-spin" aria-hidden="true" /> Pensando...
                          </span>
                        )}
                     </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 bg-navy-800 border-t border-navy-700 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregunta sobre cripto..."
              aria-label="Escribe tu pregunta sobre criptomonedas"
              className="flex-1 bg-navy-900 border border-navy-600 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label={isLoading ? 'Enviando mensaje' : 'Enviar mensaje'}
              className="p-2 bg-brand-500 text-navy-900 rounded-xl hover:bg-brand-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? <Loader2 size={20} className="animate-spin" aria-hidden="true" /> : <Send size={20} aria-hidden="true" />}
            </button>
          </form>

          {/* Powered By */}
          <div className="bg-navy-900 py-1 text-center">
             <p className="text-[10px] text-navy-500">Powered by Google Gemini</p>
          </div>
        </section>
      )}
    </>
  );
};

export default ChatWidget;
