import React from 'react';
import { Droplet, EyeOff, BarChart3 } from 'lucide-react';

// L2 · "Por Qué los Gobiernos AMAN la Inflación" — three deliberate incentives.
const REASONS: { icon: React.ComponentType<{ size?: number; className?: string }>; title: string; text: string }[] = [
  { icon: Droplet, title: 'Licuar la deuda', text: 'Imprimen para "pagar" lo que deben. El número es el mismo, pero ahora vale menos.' },
  { icon: EyeOff, title: 'Impuesto invisible', text: 'Subir impuestos es impopular. Imprimir es un impuesto oculto que nadie votó.' },
  { icon: BarChart3, title: 'Maquillar las cifras', text: 'Cambian cómo se mide la inflación para que el número "oficial" parezca bajo.' },
];

const GovtLovesInflation: React.FC = () => (
  <figure className="not-prose my-8 rounded-2xl border border-white/10 bg-navy-900/40 p-5 sm:p-6">
    <figcaption className="mb-5 text-center text-sm font-semibold text-white">
      La inflación no es un error. <span className="text-brand-400">Es una política deliberada.</span>
    </figcaption>
    <div className="grid gap-4 sm:grid-cols-3">
      {REASONS.map(({ icon: Icon, title, text }, i) => (
        <div key={i} className="rounded-xl border border-white/10 bg-navy-950/50 p-4">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10">
            <Icon size={20} className="text-brand-400" aria-hidden="true" />
          </div>
          <p className="mb-1 text-sm font-bold text-white">{title}</p>
          <p className="text-xs leading-relaxed text-navy-400">{text}</p>
        </div>
      ))}
    </div>
  </figure>
);

export default GovtLovesInflation;
