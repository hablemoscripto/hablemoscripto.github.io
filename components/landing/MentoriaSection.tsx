import React from 'react';
import { Check } from 'lucide-react';
import { MENTORIA_BENEFITS } from '../../data/landingCopy';

interface MentoriaSectionProps {
  onRequestMentoria: () => void;
}

const MentoriaSection: React.FC<MentoriaSectionProps> = ({ onRequestMentoria }) => {
  return (
    <section
      id="mentoria"
      aria-labelledby="mentoria-heading"
      className="border-b border-white/5 bg-navy-950 py-16 scroll-mt-28 md:py-24"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-bold text-brand-400">Cripto Experto</p>
            <h2
              id="mentoria-heading"
              className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              La ruta completa, con una relación más cercana
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-400">
              Para quienes quieren complementar el estudio independiente con contexto del fundador y
              conversaciones privadas con otros miembros.
            </p>
          </div>

          <div>
            <ul className="border-t border-white/10">
              {MENTORIA_BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-4 border-b border-white/10 py-5 text-navy-200"
                >
                  <Check size={20} className="mt-0.5 shrink-0 text-brand-500" aria-hidden="true" />
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-brand-500 px-7 py-3.5 font-bold text-navy-950 transition-colors hover:bg-brand-400"
              >
                Ver planes
              </a>
              <button
                type="button"
                onClick={onRequestMentoria}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 bg-navy-900 px-7 py-3.5 font-bold text-white transition-colors hover:border-brand-500/40 hover:bg-navy-800"
              >
                Consultar mentoría
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentoriaSection;
