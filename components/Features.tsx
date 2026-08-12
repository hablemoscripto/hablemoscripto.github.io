import React from 'react';
import { ArrowUpRight, Twitter, Youtube } from 'lucide-react';
import { TEACHING_PRINCIPLES } from '../data/landingCopy';

const Features: React.FC = () => {
  return (
    <section
      id="about"
      className="border-y border-white/5 bg-navy-900/50 py-16 scroll-mt-28 md:py-24"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <figure>
            <picture>
              <source
                srcSet="/images/MadLad.webp 450w, /images/MadLad-2x.webp 900w"
                sizes="(max-width: 1024px) 90vw, 400px"
                type="image/webp"
              />
              <img
                src="/images/MadLad.webp"
                alt="Avatar MadLad de CBas, fundador de Hablemos Cripto"
                width={450}
                height={450}
                loading="lazy"
                className="aspect-square w-full max-w-[400px] rounded-2xl border border-white/10 object-cover"
              />
            </picture>
            <figcaption className="mt-4 text-sm text-navy-400">
              CBas, fundador pseudónimo de Hablemos Cripto
            </figcaption>
          </figure>

          <div>
            <p className="mb-4 text-sm font-bold text-brand-400">Quién está detrás</p>
            <h2 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
              Experiencia pública, identidad pseudónima
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-300">
              Soy CBas. Publico sobre mercados cripto con esta identidad desde 2017 y he atravesado
              ciclos alcistas, caídas y cambios de narrativa. Hablemos Cripto convierte esa
              experiencia en una ruta educativa que prioriza criterio, seguridad y contexto para
              LATAM.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://twitter.com/Crypto_CBas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 px-1 py-2 font-semibold text-navy-200 transition-colors hover:text-white"
                aria-label="Ver el historial público de @Crypto_CBas en X, abre en una pestaña nueva"
              >
                <Twitter size={18} className="text-brand-500" aria-hidden="true" />
                Historial público en X
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com/@hablemoscripto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 px-1 py-2 font-semibold text-navy-200 transition-colors hover:text-white"
                aria-label="Ver Hablemos Cripto en YouTube, abre en una pestaña nueva"
              >
                <Youtube size={18} className="text-brand-500" aria-hidden="true" />
                Canal de YouTube
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-9 border-t border-white/10">
              {TEACHING_PRINCIPLES.map((principle) => (
                <div
                  key={principle.title}
                  className="grid gap-2 border-b border-white/10 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6"
                >
                  <h3 className="font-bold text-white">{principle.title}</h3>
                  <p className="leading-relaxed text-navy-400">{principle.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
