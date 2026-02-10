import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MailX, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

const UnsubscribePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState(searchParams.get('email') || '');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUnsubscribe = async () => {
    if (!email.trim()) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/unsubscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email.trim() }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al cancelar suscripcion');
      }

      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Error inesperado. Intenta de nuevo.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {status === 'success' ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
            <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
            <h1 className="text-2xl font-bold text-white mb-3">
              Suscripcion cancelada
            </h1>
            <p className="text-slate-400 mb-6">
              Tu email <span className="text-white font-medium">{email}</span> ha sido
              removido de nuestra lista de newsletter.
            </p>
            <a
              href="/"
              className="inline-block px-6 py-3 bg-brand-500 hover:bg-brand-400 text-slate-900 font-bold rounded-xl transition-colors"
            >
              Volver al inicio
            </a>
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <div className="text-center mb-6">
              <MailX className="mx-auto mb-4 text-brand-500" size={48} />
              <h1 className="text-2xl font-bold text-white mb-2">
                Cancelar suscripcion
              </h1>
              <p className="text-slate-400">
                Confirma tu email para cancelar la suscripcion al newsletter de Hablemos Cripto.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-brand-500 focus:outline-none transition-colors"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={18} />
                  <p className="text-red-400 text-sm">{errorMessage}</p>
                </div>
              )}

              <button
                onClick={handleUnsubscribe}
                disabled={status === 'loading' || !email.trim()}
                className="w-full px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <RefreshCw size={20} className="animate-spin" />
                    Procesando...
                  </>
                ) : (
                  'Confirmar cancelacion'
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnsubscribePage;
