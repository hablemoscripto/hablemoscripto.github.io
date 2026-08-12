import React from 'react';
import { ArrowDown, BookOpen, ShieldCheck } from 'lucide-react';
import { ADVANCED_LEVEL, BEGINNER_LEVEL, INTERMEDIATE_LEVEL } from '../data/levels';
import { HERO_COPY } from '../data/landingCopy';

const LEVELS = [BEGINNER_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL];
const LESSON_COUNT = LEVELS.reduce(
  (total, level) => total + level.modules.reduce((sum, module) => sum + module.lessons.length, 0),
  0
);

interface HeroProps {
  onStartLearning: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartLearning }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/5 bg-navy-950 pb-16 pt-32 scroll-mt-28 md:pb-24 md:pt-40"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <picture>
          <source
            srcSet="/images/banner-768w.webp 768w, /images/banner-1280w.webp 1280w, /images/banner-1920w.webp 1920w"
            sizes="100vw"
            type="image/webp"
          />
          <img
            src="/images/banner-1280w.webp"
            alt=""
            width={1280}
            height={720}
            fetchPriority="high"
            className="h-full w-full object-contain object-center opacity-[0.12] mix-blend-luminosity md:object-cover md:opacity-[0.22]"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-950" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:gap-20">
          <div>
            <div className="mb-8 flex items-center gap-3 text-sm font-semibold text-brand-400">
              <ShieldCheck size={18} aria-hidden="true" />
              <span>Educación cripto para tomar decisiones con criterio</span>
            </div>
            <h1 className="max-w-5xl font-heading text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {HERO_COPY.title}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-navy-300 md:text-xl">
              {HERO_COPY.description}
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onStartLearning}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-7 py-3.5 font-bold text-navy-950 transition-colors hover:bg-brand-400 active:bg-brand-600 sm:w-auto"
              >
                <BookOpen size={20} aria-hidden="true" />
                {HERO_COPY.primaryCta}
              </button>
              <a
                href="#plataforma"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 px-4 py-3 font-semibold text-navy-200 underline decoration-navy-700 underline-offset-8 transition-colors hover:text-white hover:decoration-brand-500 sm:w-auto"
              >
                {HERO_COPY.secondaryCta}
                <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="border-l-2 border-brand-500 pl-6 lg:mb-2">
            <p className="font-heading text-4xl font-bold text-white">{LESSON_COUNT} lecciones</p>
            <p className="mt-2 leading-relaxed text-navy-400">
              Tres niveles con una secuencia clara. El Nivel Principiante es gratuito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
