import React from 'react';
import { Landmark, Building2, Users, ArrowDown } from 'lucide-react';

// L3 · Cantillon intro — who receives new money first, later and last.
const TIERS = [
  {
    when: 'Primero',
    icon: Landmark,
    who: 'Bancos que operan con el banco central y gobiernos que se financian con deuda',
    effect: 'Reciben el dinero nuevo y pueden gastarlo a precios de ayer.',
    style: 'border-brand-500/40 bg-brand-500/[0.10]',
    label: 'text-brand-300',
  },
  {
    when: 'Después',
    icon: Building2,
    who: 'Grandes empresas, fondos y dueños de activos',
    effect: 'Acceden a crédito barato; acciones e inmuebles suben antes que el resto.',
    style: 'border-brand-500/20 bg-brand-500/[0.05]',
    label: 'text-brand-300/80',
  },
  {
    when: 'Al final',
    icon: Users,
    who: 'Asalariados, pensionados y ahorradores en efectivo',
    effect: 'El dinero llega, si llega, cuando muchos precios ya subieron.',
    style: 'border-white/10 bg-navy-950/50',
    label: 'text-navy-300',
  },
];

const CantillonFlow: React.FC = () => (
  <figure className="not-prose my-8 rounded-2xl border border-white/10 bg-navy-900/40 p-5 sm:p-6">
    <p className="mb-4 text-center text-sm font-semibold text-white">Dinero nuevo del banco central</p>
    <ol>
      {TIERS.map(({ when, icon: Icon, who, effect, style, label }, i) => (
        <li key={when}>
          <div className={`flex gap-4 rounded-xl border p-4 ${style}`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
              <Icon size={20} className="text-brand-400" aria-hidden="true" />
            </div>
            <div>
              <p className={`text-[11px] font-bold uppercase tracking-wider ${label}`}>{when}</p>
              <p className="text-sm font-bold text-white">{who}</p>
              <p className="mt-1 text-xs leading-relaxed text-navy-300">{effect}</p>
            </div>
          </div>
          {i < TIERS.length - 1 && (
            <div className="flex justify-center py-1.5 text-navy-500" aria-hidden="true">
              <ArrowDown size={16} />
            </div>
          )}
        </li>
      ))}
    </ol>
    <figcaption className="mt-4 text-center text-xs leading-relaxed text-navy-400">
      El orden importa. Cuánto pesa este efecto frente a otras causas de la desigualdad es un
      debate abierto.
    </figcaption>
  </figure>
);

export default CantillonFlow;
