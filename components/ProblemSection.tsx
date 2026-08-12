import React from 'react';
import { PROBLEMS } from '../data/landingCopy';

const ProblemSection: React.FC = () => {
  return (
    <section id="el-problema" className="bg-navy-950 py-16 scroll-mt-28 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-bold text-brand-400">El problema no es la curiosidad</p>
            <h2 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
              Aprender sin orden deja vacíos justo donde más importa
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-400">
              Antes de pensar en rentabilidad, necesitas una base para filtrar información,
              reconocer riesgos y decidir con calma.
            </p>
          </div>

          <ol className="border-t border-white/10">
            {PROBLEMS.map((problem, index) => (
              <li
                key={problem.title}
                className="grid gap-3 border-b border-white/10 py-7 sm:grid-cols-[3rem_1fr]"
              >
                <span className="font-heading text-xl font-bold text-brand-500" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{problem.title}</h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-navy-400">{problem.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
