import React from 'react';
import { TrendingDown, Home, Car, ArrowRight } from 'lucide-react';

// L1 · "La Ruptura de 1971" — the -87% purchasing-power loss, made tangible.
const ITEMS: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string; then: string; now: string }[] = [
  { icon: Home, label: 'Una casa', then: '$25,000', now: '$400,000+' },
  { icon: Car, label: 'Un auto', then: '$3,500', now: '$48,000' },
];

const DollarErosion1971: React.FC = () => (
  <figure className="not-prose my-8 rounded-2xl border border-white/10 bg-gradient-to-br from-navy-900/70 to-navy-950 p-6 sm:p-8">
    <div className="text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-300">
        <TrendingDown size={14} aria-hidden="true" /> Poder adquisitivo del dólar
      </span>
      <p className="font-heading mt-4 text-6xl font-black leading-none text-red-400 sm:text-7xl">-87%</p>
      <p className="mt-3 text-sm text-navy-300">
        perdido desde el <span className="font-semibold text-white">15 de agosto de 1971</span>
      </p>
    </div>

    <div className="mt-7 grid gap-3 sm:grid-cols-2">
      {ITEMS.map(({ icon: Icon, label, then, now }, i) => (
        <div key={i} className="rounded-xl border border-white/10 bg-navy-900/50 p-4">
          <div className="flex items-center gap-2 text-navy-300">
            <Icon size={18} className="text-brand-400" aria-hidden="true" />
            <span className="text-sm font-medium">{label}</span>
          </div>
          <div className="mt-3 flex items-center justify-between gap-2">
            <div className="text-center">
              <p className="text-xs text-navy-400">1971</p>
              <p className="font-heading text-lg font-bold text-navy-200">{then}</p>
            </div>
            <ArrowRight size={18} className="shrink-0 text-brand-500" aria-hidden="true" />
            <div className="text-center">
              <p className="text-xs text-navy-400">Hoy</p>
              <p className="font-heading text-lg font-bold text-white">{now}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <figcaption className="mt-6 text-center text-sm text-navy-300">
      No es que las cosas sean más caras. <span className="font-semibold text-brand-400">Es que tu dinero vale menos.</span>
    </figcaption>
  </figure>
);

export default DollarErosion1971;
