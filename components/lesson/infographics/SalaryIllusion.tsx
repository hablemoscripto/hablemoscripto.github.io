import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';

// L2 · "La Ilusión del Aumento de Sueldo" — exact real-wage math in both directions.
const CASES = [
  {
    tone: 'red' as const,
    icon: TrendingDown,
    title: 'Si los precios suben más que tu sueldo',
    rows: [
      { label: 'Tu sueldo', value: '2,000,000 a 2,100,000 (+5%)' },
      { label: 'Los precios', value: '+10%' },
      { label: 'Lo que compra tu sueldo nuevo', value: '2,100,000 / 1.10 ≈ 1,909,000' },
    ],
    result: '−4.5%',
    resultLabel: 'de poder de compra',
  },
  {
    tone: 'green' as const,
    icon: TrendingUp,
    title: 'Si tu sueldo sube más que los precios',
    rows: [
      { label: 'Salario mínimo en Colombia, 2023', value: '+16%' },
      { label: 'Inflación de 2023', value: '+9.28%' },
      { label: 'Cálculo', value: '1.16 / 1.0928 ≈ 1.061' },
    ],
    result: '+6.1%',
    resultLabel: 'de poder de compra',
  },
];

const TONES = {
  red: { border: 'border-red-500/30', grad: 'from-red-500/15 to-red-500/[0.04]', text: 'text-red-300', mark: 'text-red-400' },
  green: { border: 'border-emerald-500/30', grad: 'from-emerald-500/15 to-emerald-500/[0.04]', text: 'text-emerald-300', mark: 'text-emerald-400' },
};

const SalaryIllusion: React.FC = () => (
  <figure className="not-prose my-8">
    <div className="grid gap-3 sm:grid-cols-2">
      {CASES.map(({ tone, icon: Icon, title, rows, result, resultLabel }) => {
        const t = TONES[tone];
        return (
          <div key={title} className={`rounded-2xl border ${t.border} bg-gradient-to-br ${t.grad} p-5`}>
            <p className={`mb-4 flex items-center gap-2 text-sm font-bold ${t.text}`}>
              <Icon size={18} className={t.mark} aria-hidden="true" /> {title}
            </p>
            <dl className="space-y-2.5">
              {rows.map((r) => (
                <div key={r.label}>
                  <dt className="text-[11px] uppercase tracking-wider text-navy-400">{r.label}</dt>
                  <dd className="text-sm font-semibold text-navy-100">{r.value}</dd>
                </div>
              ))}
            </dl>
            <p className={`font-heading mt-4 text-3xl font-black ${t.mark}`}>{result}</p>
            <p className="text-xs text-navy-300">{resultLabel}</p>
          </div>
        );
      })}
    </div>
    <figcaption className="mt-3 text-center text-xs leading-relaxed text-navy-400">
      La cuenta exacta: sueldo nuevo / (1 + inflación). Restar porcentajes (5% menos 10%) es solo
      una aproximación.
    </figcaption>
  </figure>
);

export default SalaryIllusion;
