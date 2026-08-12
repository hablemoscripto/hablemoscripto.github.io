import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/landingCopy';

const FaqSection: React.FC = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-navy-950 py-16 scroll-mt-28 md:py-24"
    >
      <div className="container mx-auto max-w-4xl px-6">
        <p className="mb-4 text-sm font-bold text-brand-400">Preguntas frecuentes</p>
        <h2 id="faq-heading" className="font-heading text-4xl font-bold text-white md:text-5xl">
          Lo esencial antes de empezar
        </h2>

        <div className="mt-10 border-t border-white/10">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group border-b border-white/10">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 py-5 font-bold text-white transition-colors hover:text-brand-400">
                <span>{item.question}</span>
                <ChevronDown
                  size={20}
                  className="shrink-0 text-navy-400 transition-transform group-open:rotate-180 group-open:text-brand-500 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-3xl pb-6 pr-10 leading-relaxed text-navy-400">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
