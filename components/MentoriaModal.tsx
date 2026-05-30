import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Modal } from './ui/Modal';

interface MentoriaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const GENERIC_ERROR = 'No pudimos enviar tu solicitud. Intenta de nuevo.';

// supabase-js's FunctionsHttpError surfaces only "non-2xx status code" by default.
// The actual server message lives in error.context (the underlying Response).
async function extractFunctionError(error: unknown): Promise<string> {
  if (!error || typeof error !== 'object') return GENERIC_ERROR;
  const ctx = (error as { context?: unknown }).context;
  if (ctx && typeof (ctx as Response).json === 'function') {
    try {
      const body = await (ctx as Response).json();
      if (body && typeof body.error === 'string') return body.error;
    } catch {
      // body wasn't JSON or stream already consumed — fall through
    }
  }
  const message = (error as { message?: unknown }).message;
  return typeof message === 'string' && message ? message : GENERIC_ERROR;
}

export default function MentoriaModal({ isOpen, onClose }: MentoriaModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const resetAndClose = () => {
    setName('');
    setEmail('');
    setMessage('');
    setStatus('idle');
    setErrorMessage('');
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      setErrorMessage('Ingresa tu nombre completo.');
      setStatus('error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMessage('Ingresa un email válido.');
      setStatus('error');
      return;
    }
    if (trimmedMessage.length < 10) {
      setErrorMessage('Cuéntame un poco más, al menos 10 caracteres para entender tu situación.');
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      const { data, error } = await supabase.functions.invoke('mentoria-request', {
        body: { name: trimmedName, email: trimmedEmail, message: trimmedMessage },
      });

      if (error) {
        setErrorMessage(await extractFunctionError(error));
        setStatus('error');
        return;
      }

      if (data && typeof (data as { error?: string }).error === 'string') {
        setErrorMessage((data as { error: string }).error);
        setStatus('error');
        return;
      }

      setStatus('success');
      setTimeout(resetAndClose, 2800);
    } catch {
      setErrorMessage('Error de red. Revisa tu conexión e intenta de nuevo.');
      setStatus('error');
    }
  };

  const isSubmitting = status === 'submitting';

  return (
    <Modal isOpen={isOpen} onClose={resetAndClose} ariaLabel="Mentoría Personalizada" maxWidth="max-w-xl">
      {status !== 'success' ? (
        <>
          <div className="mb-6 pr-8">
            <h2 className="text-3xl font-heading font-black text-white tracking-tight">
              Mentoría Personalizada
            </h2>
            <p className="text-navy-300 mt-2">
              Sesiones individuales limitadas. Completa el formulario para que pueda preparar la mejor conversación posible para ti.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="mentoria-name" className="sr-only">Nombre completo</label>
                <input
                  id="mentoria-name"
                  name="name"
                  type="text"
                  placeholder="Nombre completo"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-navy-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 disabled:opacity-60"
                />
              </div>
              <div>
                <label htmlFor="mentoria-email" className="sr-only">Correo electrónico</label>
                <input
                  id="mentoria-email"
                  name="email"
                  type="email"
                  placeholder="Correo electrónico"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-navy-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 disabled:opacity-60"
                />
              </div>
            </div>

            <div>
              <label htmlFor="mentoria-message" className="sr-only">¿Cuál es tu mayor desafío o pregunta actual?</label>
              <textarea
                id="mentoria-message"
                name="message"
                placeholder="¿Cuál es tu mayor desafío o pregunta actual?"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSubmitting}
                minLength={10}
                maxLength={4000}
                className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-navy-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 resize-y disabled:opacity-60"
              />
            </div>

            {status === 'error' && (
              <div role="alert" className="bg-red-500/10 border border-red-500/40 rounded-xl px-4 py-3 text-sm text-red-300">
                {errorMessage}
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="px-8 py-3 bg-brand-500 hover:bg-brand-400 disabled:bg-brand-500/60 text-navy-950 font-bold rounded-2xl flex items-center gap-2 transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                    Enviando...
                  </>
                ) : (
                  'Enviar solicitud'
                )}
              </button>
            </div>
          </form>

          <p className="text-xs text-navy-400 mt-6 text-center">
            Miembros Fundador tienen prioridad de respuesta.
          </p>
        </>
      ) : (
        <div className="py-10 text-center" role="status" aria-live="polite">
          <h3 className="text-2xl font-bold text-white mb-2">Solicitud recibida</h3>
          <p className="text-navy-300">
            Gracias{name ? `, ${name.split(' ')[0]}` : ''}. Revisaré tu información y te contactaré según mi disponibilidad actual.
          </p>
        </div>
      )}
    </Modal>
  );
}
