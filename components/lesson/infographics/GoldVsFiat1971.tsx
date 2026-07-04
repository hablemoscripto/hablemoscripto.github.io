import React from 'react';
import { Coins, Banknote } from 'lucide-react';

// L1 · "Antes vs Después de 1971" — gold standard vs fiat, paired by theme.
const ROWS: { theme: string; antes: string; despues: string; highlight?: boolean }[] = [
  { theme: 'Respaldo', antes: 'Cada dólar representaba oro real', despues: 'Papel sin respaldo tangible' },
  { theme: 'Emisión de dinero', antes: 'No se podía imprimir a voluntad', despues: 'Imprimen billones (millones de millones) cuando quieren' },
  { theme: 'Poder de compra', antes: 'Un salario mínimo = ~7.9 onzas de oro al mes', despues: 'Un salario mínimo = ~0.3-0.4 onzas al mes (caída de ~95%)', highlight: true },
  { theme: 'La familia', antes: 'Vivía con un solo sueldo', despues: 'Dos sueldos apenas alcanzan' },
  { theme: 'Los precios', antes: 'Estables por décadas', despues: 'Suben cada año sin excepción' },
];

const GoldVsFiat1971: React.FC = () => (
  <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-white/10 bg-navy-900/40">
    <div className="grid grid-cols-2">
      <div className="flex items-center gap-3 border-b border-r border-white/10 bg-gradient-to-br from-amber-500/15 to-amber-500/[0.04] p-4 sm:p-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20">
          <Coins className="text-amber-400" size={20} aria-hidden="true" />
        </div>
        <div>
          <p className="font-heading text-sm font-bold text-amber-300 sm:text-base">Antes de 1971</p>
          <p className="text-xs text-navy-400">Patrón Oro</p>
        </div>
      </div>
      <div className="flex items-center gap-3 border-b border-white/10 bg-gradient-to-br from-red-500/15 to-red-500/[0.04] p-4 sm:p-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/20">
          <Banknote className="text-red-400" size={20} aria-hidden="true" />
        </div>
        <div>
          <p className="font-heading text-sm font-bold text-red-300 sm:text-base">Después de 1971</p>
          <p className="text-xs text-navy-400">Dinero Fiat</p>
        </div>
      </div>
    </div>

    <div>
      {ROWS.map((r, i) => (
        <div key={i} className={`grid grid-cols-2 ${i % 2 ? 'bg-white/[0.015]' : ''}`}>
          <div className="col-span-2 px-4 pt-3 sm:px-5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-navy-400">{r.theme}</span>
          </div>
          <div className="border-r border-white/5 px-4 pb-3 pt-1 sm:px-5">
            <p className={`text-sm leading-snug ${r.highlight ? 'font-semibold text-amber-200' : 'text-navy-200'}`}>{r.antes}</p>
          </div>
          <div className="px-4 pb-3 pt-1 sm:px-5">
            <p className={`text-sm leading-snug ${r.highlight ? 'font-semibold text-red-200' : 'text-navy-300'}`}>{r.despues}</p>
          </div>
        </div>
      ))}
    </div>

    <figcaption className="flex items-center justify-center gap-2 border-t border-white/10 bg-navy-950/60 px-4 py-3 text-center">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
      <span className="text-xs text-navy-300">
        <span className="font-semibold text-white">15 de agosto de 1971:</span> Nixon cierra la ventana del oro. El dinero dejó de representar algo escaso.
      </span>
    </figcaption>
  </figure>
);

export default GoldVsFiat1971;
