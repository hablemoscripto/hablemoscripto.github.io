import React from 'react';
import { Lock, Check, Sparkles, ArrowRight, ChevronLeft } from 'lucide-react';

interface UpgradePaywallProps {
  levelTitle: string;
  teaser?: string[];
  onUpgrade: () => void;
  onBack?: () => void;
}

const BENEFITS = [
  'Acceso de por vida a las 44 lecciones',
  'Niveles Intermedio y Avanzado completos',
  'Pago único, sin suscripciones',
];

const UpgradePaywall: React.FC<UpgradePaywallProps> = ({ levelTitle, teaser, onUpgrade, onBack }) => (
  <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4 py-24">
    <div className="max-w-xl w-full bg-navy-900/60 border border-white/10 rounded-3xl p-8 md:p-10 text-center backdrop-blur-sm">
      <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center mx-auto mb-6">
        <Lock size={28} className="text-brand-400" aria-hidden="true" />
      </div>
      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-400 mb-3">Contenido de pago</p>
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
        {levelTitle} es parte de los planes pagos
      </h2>
      <p className="text-navy-300 mb-8 leading-relaxed">
        Desbloquéalo con el plan Inversor o Cripto Experto. Acceso de por vida con un solo pago.
      </p>

      {teaser && teaser.length > 0 && (
        <div className="text-left bg-navy-950/60 border border-white/5 rounded-2xl p-5 mb-8">
          <p className="text-[10px] font-black uppercase tracking-widest text-navy-400 mb-3">Lo que incluye</p>
          <ul className="space-y-2">
            {teaser.slice(0, 6).map((t, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-navy-300">
                <Lock size={14} className="text-navy-500 shrink-0" aria-hidden="true" /> {t}
              </li>
            ))}
          </ul>
        </div>
      )}

      <ul className="text-left space-y-2 mb-8">
        {BENEFITS.map((b) => (
          <li key={b} className="flex items-center gap-3 text-sm text-navy-200">
            <Check size={16} className="text-brand-400 shrink-0" aria-hidden="true" /> {b}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-3">
        <button
          onClick={onUpgrade}
          className="w-full py-4 bg-brand-500 hover:bg-brand-400 text-navy-950 font-black uppercase tracking-widest text-xs rounded-2xl shadow-glow-brand transition-all inline-flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Sparkles size={16} aria-hidden="true" /> Desbloquear ahora <ArrowRight size={16} aria-hidden="true" />
        </button>
        {onBack && (
          <button
            onClick={onBack}
            className="w-full py-3 bg-navy-800 hover:bg-navy-700 text-white font-medium rounded-2xl transition-all inline-flex items-center justify-center gap-2"
          >
            <ChevronLeft size={16} aria-hidden="true" /> Volver
          </button>
        )}
      </div>
    </div>
  </div>
);

export default UpgradePaywall;
