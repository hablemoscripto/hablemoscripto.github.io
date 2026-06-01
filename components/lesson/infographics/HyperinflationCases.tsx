import React from 'react';
import { TrendingDown } from 'lucide-react';

// L2 · "Casos Reales" — four hyperinflation cases as scannable shock cards.
const CASES: { flag: string; country: string; period: string; stat: string; statLabel: string; impact: string }[] = [
  { flag: '🇻🇪', country: 'Venezuela', period: '2016 – 2020', stat: '1.000.000%', statLabel: 'inflación anual', impact: 'El salario mínimo no alcanzaba ni para un kilo de carne.' },
  { flag: '🇦🇷', country: 'Argentina', period: '2023 – 2024', stat: '+140%', statLabel: 'inflación anual', impact: 'Pensiones de toda una vida evaporadas en meses.' },
  { flag: '🇹🇷', country: 'Turquía', period: '2021 – 2023', stat: '−80%', statLabel: 'valor de la lira en 2 años', impact: 'La clase media, de pronto sin poder pagar la renta.' },
  { flag: '🇱🇧', country: 'Líbano', period: '2020 – 2023', stat: '−98%', statLabel: 'valor de la libra', impact: 'El banco no dejaba a la gente sacar su propio dinero.' },
];

const HyperinflationCases: React.FC = () => (
  <figure className="not-prose my-8">
    <figcaption className="mb-4 flex items-center gap-2">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-500/15">
        <TrendingDown size={16} className="text-red-400" aria-hidden="true" />
      </span>
      <span className="font-heading text-sm font-bold uppercase tracking-wide text-red-300">
        No es teoría. Está pasando ahora mismo.
      </span>
    </figcaption>

    <div className="grid gap-3 sm:grid-cols-2">
      {CASES.map((c, i) => (
        <div key={i} className="rounded-2xl border border-white/10 bg-navy-900/50 p-5 transition-colors hover:border-red-500/30">
          <div className="flex items-center gap-2">
            <span className="text-xl" aria-hidden="true">{c.flag}</span>
            <div>
              <p className="font-bold leading-tight text-white">{c.country}</p>
              <p className="text-xs text-navy-400">{c.period}</p>
            </div>
          </div>
          <p className="font-heading mt-3 text-3xl font-black text-red-400">{c.stat}</p>
          <p className="text-xs text-navy-400">{c.statLabel}</p>
          <p className="mt-3 text-sm leading-snug text-navy-300">{c.impact}</p>
        </div>
      ))}
    </div>
  </figure>
);

export default HyperinflationCases;
