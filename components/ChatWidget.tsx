import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2, Trash2 } from 'lucide-react';
import { streamAIResponse, ChatMessage } from '../services/aiService';
import { trackChatMessage } from '../utils/analytics';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';

const STORAGE_KEY = 'chat_messages';

const INITIAL_GREETING: ChatMessage = {
  role: 'model',
  text: '¡Hola! Soy CBas 🤖. Pregúntame sobre Bitcoin, cómo empezar en cripto o conceptos de trading. ¿En qué puedo ayudarte hoy?',
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

// First-message suggestions: newcomers don't know what to ask a tutor, and an
// empty input next to a greeting is a dead end.
const STARTER_PROMPTS = [
  '¿Cómo empiezo con poco dinero?',
  '¿Cómo evito que me estafen?',
  'Explícame Bitcoin en palabras simples',
];

// The answer takes several seconds to start streaming (the server searches the
// lessons first). Labeled stages read as work in progress; static dots read as
// a hang.
const WaitingIndicator: React.FC = () => {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 2500);
    const t2 = setTimeout(() => setStage(2), 9000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  const labels = ['Pensando...', 'Buscando en las lecciones...', 'Preparando tu respuesta...'];
  return (
    <span className="flex items-center gap-1 text-navy-400" role="status">
      <Loader2 size={14} className="animate-spin" aria-hidden="true" /> {labels[stage]}
    </span>
  );
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(loadStoredMessages);
  // Suppress the floating button while a blocking overlay (modal / mobile menu /
  // lightbox — all lock body scroll) or an in-progress quiz is on screen, so the
  // FAB never covers a dialog action or a quiz answer option.
  const [suppressed, setSuppressed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
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

  // Hide the FAB when a quiz is active (Quiz emits 'quiz-active') or when any
  // overlay locks body scroll, so it can never overlap an answer option or a
  // modal/menu action.
  useEffect(() => {
    let quizActive = false;
    let overlayActive = false;
    const update = () => setSuppressed(quizActive || overlayActive);
    const onQuiz = (e: Event) => {
      quizActive = (e as CustomEvent<{ active: boolean }>).detail?.active ?? false;
      update();
    };
    window.addEventListener('quiz-active', onQuiz as EventListener);
    const observer = new MutationObserver(() => {
      const locked = document.body.style.overflow === 'hidden';
      if (locked !== overlayActive) {
        overlayActive = locked;
        update();
      }
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
    return () => {
      window.removeEventListener('quiz-active', onQuiz as EventListener);
      observer.disconnect();
    };
  }, []);

  // Close the panel (and on Escape) and return focus to the launcher.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  // If suppression kicks in while the panel is open, close it.
  useEffect(() => {
    if (suppressed && isOpen) setIsOpen(false);
  }, [suppressed, isOpen]);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    await sendMessage(input);
  };

  const sendMessage = async (raw: string) => {
    if (!raw.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: raw.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    trackChatMessage();

    try {
      setMessages(prev => [...prev, {
        role: 'model',
        text: '',
        timestamp: new Date()
      }]);

      const apiHistory = messages[0]?.role === 'model' && messages.length === 1
        ? []
        : messages;

      const frameIdRef = { current: 0 };
      await streamAIResponse(
        apiHistory,
        userMessage.text,
        (chunk) => {
          cancelAnimationFrame(frameIdRef.current);
          frameIdRef.current = requestAnimationFrame(() => {
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

  if (suppressed) return null;

  return (
    <>
      {/* Toggle Button */}
      <button
        ref={toggleRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:right-[max(1.5rem,env(safe-area-inset-right))] z-50 p-3 sm:p-4 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-navy-900 shadow-lg hover:shadow-brand-500/40 transition-all transform hover:scale-110 active:scale-95 items-center justify-center ${
          // On mobile the open panel is a full-screen sheet with its own close
          // button; a floating X on top of it is redundant and overlaps the input.
          isOpen ? 'hidden sm:flex' : 'flex'
        }`}
        aria-label={isOpen ? 'Cerrar asistente IA' : 'Abrir asistente IA'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="size-6 sm:size-7" aria-hidden="true" /> : <MessageCircle className="size-6 sm:size-7" aria-hidden="true" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <section
          className="fixed inset-0 w-full h-full max-h-none rounded-none sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[400px] sm:h-[500px] sm:max-h-[80vh] sm:rounded-2xl z-50 bg-navy-900 border border-navy-700 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200 origin-bottom-right"
          role="region"
          aria-label="Chat con asistente de IA"
        >

          {/* Header */}
          <div className="bg-navy-800 p-4 border-b border-navy-700 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center border border-brand-500/50">
              <Sparkles size={20} className="text-brand-500" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-white text-sm" id="chat-title">CBas</h3>
              <p className="text-xs text-navy-400 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></span>
                En línea
              </p>
            </div>
            <button
              onClick={clearChat}
              className="p-2 min-h-11 min-w-11 flex items-center justify-center text-navy-400 hover:text-red-400 hover:bg-navy-700/50 rounded-lg transition-colors"
              aria-label="Limpiar conversación"
              title="Limpiar conversación"
            >
              <Trash2 size={16} aria-hidden="true" />
            </button>
            <button
              onClick={() => { setIsOpen(false); toggleRef.current?.focus(); }}
              className="sm:hidden p-2 min-h-11 min-w-11 flex items-center justify-center text-navy-400 hover:text-white hover:bg-navy-700/50 rounded-lg transition-colors"
              aria-label="Cerrar asistente IA"
            >
              <X size={20} aria-hidden="true" />
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
                     <div className="prose prose-invert prose-sm max-w-none break-words">
                        {msg.text ? (
                          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>{msg.text}</ReactMarkdown>
                        ) : (
                          <WaitingIndicator />
                        )}
                     </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            {messages.length === 1 && !isLoading && (
              <div className="flex flex-col items-start gap-2 pt-1" aria-label="Preguntas sugeridas">
                {STARTER_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => void sendMessage(prompt)}
                    className="text-left text-sm px-3 py-2.5 min-h-11 rounded-xl border border-brand-500/30 text-brand-300 hover:bg-brand-500/10 hover:border-brand-500/50 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
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
              maxLength={1000}
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
             <p className="text-[10px] text-navy-400">Con tecnología de Grok (xAI)</p>
          </div>
        </section>
      )}
    </>
  );
};

export default ChatWidget;
