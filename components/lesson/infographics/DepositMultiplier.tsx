import React from 'react';
import { Landmark, ArrowDown } from 'lucide-react';

// L2 · "Los Bancos Multiplican" — textbook deposit multiplier at a 10% reserve.
const ROUNDS: { deposit: string; reserve: string; loan: string }[] = [
  { deposit: '$100', reserve: '$10', loan: '$90' },
  { deposit: '$90', reserve: '$9', loan: '$81' },
  { deposit: '$81', reserve: '$8.10', loan: '$72.90' },
  { deposit: '$72.90', reserve: '$7.29', loan: '$65.61' },
];

const DepositMultiplier: React.FC = () => (
  <figure className="not-prose my-8 rounded-2xl border border-white/10 bg-navy-900/40 p-5 sm:p-6">
    <div className="mb-3 grid grid-cols-[auto_1fr_1fr_1fr] gap-x-3 px-1 text-[11px] font-semibold uppercase tracking-wider text-navy-400">
      <span className="w-16">Banco</span>
      <span>Recibe</span>
      <span>Guarda (10%)</span>
      <span>Presta</span>
    </div>
    <ol className="space-y-2">
      {ROUNDS.map((r, i) => (
        <li key={i}>
          <div className="grid grid-cols-[auto_1fr_1fr_1fr] items-center gap-x-3 rounded-xl border border-white/10 bg-navy-950/50 px-3 py-2.5">
            <span className="flex w-16 items-center gap-1.5 text-xs font-semibold text-navy-300">
              <Landmark size={14} className="text-brand-400" aria-hidden="true" /> {i + 1}
            </span>
            <span className="text-sm font-semibold text-white">{r.deposit}</span>
            <span className="text-sm text-navy-300">{r.reserve}</span>
            <span className="text-sm font-semibold text-brand-300">{r.loan}</span>
          </div>
          {i < ROUNDS.length - 1 && (
            <p className="flex items-center gap-1.5 py-1 pl-4 text-[11px] text-navy-400">
              <ArrowDown size={12} aria-hidden="true" /> el préstamo se deposita en otro banco
            </p>
          )}
        </li>
      ))}
    </ol>
    <p className="mt-2 pl-4 text-xs text-navy-400">... y así sucesivamente.</p>

    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl border border-white/10 bg-navy-950/50 p-4">
        <p className="text-xs text-navy-400">Depósito original</p>
        <p className="font-heading mt-1 text-2xl font-black text-white">$100</p>
      </div>
      <div className="rounded-xl border border-brand-500/30 bg-brand-500/[0.06] p-4">
        <p className="text-xs text-navy-400">Depósitos totales en el sistema</p>
        <p className="font-heading mt-1 text-2xl font-black text-brand-300">hasta $1,000</p>
        <p className="mt-1 text-xs text-navy-300">De ellos, $900 son crédito nuevo.</p>
      </div>
    </div>

    <figcaption className="mt-4 text-xs leading-relaxed text-navy-400">
      Modelo de libro de texto. En la práctica, los bancos prestan primero y buscan las reservas
      después; el límite real lo ponen las reglas de capital, las tasas de interés y la demanda de
      crédito.
    </figcaption>
  </figure>
);

export default DepositMultiplier;
