import { RefreshCw } from 'lucide-react';

// Shown when the first entitlements read fails. Paid content and checkout stay
// closed. Free lessons stay available from the classroom around this screen.
export default function AccessUnconfirmed({ onRetry }: { onRetry: () => void }) {
  return (
    <main
      id="contenido"
      tabIndex={-1}
      className="min-h-[calc(100svh-4rem)] bg-navy-950 flex items-center justify-center px-4 outline-none"
    >
      <div
        role="status"
        className="max-w-md w-full text-center bg-navy-900 border border-white/10 rounded-2xl p-8"
      >
        <h2 className="text-xl font-bold text-white mb-3">No pudimos confirmar tu acceso.</h2>
        <p className="text-navy-300 text-sm mb-6 leading-relaxed">
          Tus lecciones gratis siguen disponibles. El contenido de pago queda cerrado hasta
          confirmar.
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-navy-950 hover:bg-brand-400"
        >
          <RefreshCw size={16} aria-hidden="true" />
          Reintentar
        </button>
      </div>
    </main>
  );
}
