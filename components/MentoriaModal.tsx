import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';

interface MentoriaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MentoriaModal({ isOpen, onClose }: MentoriaModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For now, we simulate submission.
    // Later this can POST to a Formspree / custom endpoint / Resend.
    await new Promise(resolve => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setSubmitted(true);

    // Auto close after success
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-xl rounded-3xl bg-navy-900 border border-white/10 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-navy-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {!submitted ? (
            <>
              <div className="mb-6">
                <h2 className="text-3xl font-heading font-black text-white tracking-tight">
                  Mentoría Personalizada
                </h2>
                <p className="text-navy-300 mt-2">
                  Sesiones individuales limitadas. Completa el formulario para que pueda preparar la mejor conversación posible para ti.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    required
                    className="bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-navy-400 focus:border-brand-500 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    required
                    className="bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-navy-400 focus:border-brand-500 outline-none"
                  />
                </div>

                <textarea
                  placeholder="¿Cuál es tu mayor desafío o pregunta actual?"
                  required
                  rows={3}
                  className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-navy-400 focus:border-brand-500 outline-none resize-y"
                />

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-brand-500 hover:bg-brand-400 disabled:bg-brand-500/60 text-navy-950 font-bold rounded-2xl flex items-center gap-2 transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      'Enviar solicitud'
                    )}
                  </button>
                </div>
              </form>

              <p className="text-xs text-navy-400 mt-6 text-center">
                Miembros Fundador y Experto tienen prioridad de respuesta.
              </p>
            </>
          ) : (
            <div className="py-10 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Solicitud recibida</h3>
              <p className="text-navy-300">
                Gracias. Revisaré tu información y te contactaré según mi disponibilidad actual.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
