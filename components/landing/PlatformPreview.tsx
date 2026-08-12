import React from 'react';
import { Bot, Brain, CheckCircle2, Circle, ListChecks, TrendingUp } from 'lucide-react';
import { ADVANCED_LEVEL, BEGINNER_LEVEL, INTERMEDIATE_LEVEL } from '../../data/levels';
import { LEARNING_TOOLS } from '../../data/landingCopy';

const LEVELS = [BEGINNER_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL];
const TOOL_ICONS = [ListChecks, Brain, Bot, TrendingUp];

const PlatformPreview: React.FC = () => {
  return (
    <section
      id="plataforma"
      aria-labelledby="platform-heading"
      className="border-b border-white/5 bg-navy-900/50 py-16 scroll-mt-28 md:py-24"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-bold text-brand-400">Así se ve la ruta</p>
            <h2
              id="platform-heading"
              className="max-w-3xl font-heading text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              Un currículum visible, no una colección de promesas
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-400">
              Cada nivel organiza módulos y lecciones concretas para que sepas qué estás aprendiendo
              y qué sigue.
            </p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-navy-950">
              <div className="flex min-h-12 items-center justify-between border-b border-white/10 px-5 py-3">
                <span className="font-semibold text-white">Ruta de aprendizaje</span>
                <span className="text-sm text-navy-400">3 niveles</span>
              </div>
              <div>
                {LEVELS.map((level, levelIndex) => {
                  const previewModule = level.modules[0];
                  return (
                    <div
                      key={level.id}
                      className="grid gap-5 border-b border-white/10 p-5 last:border-b-0 sm:grid-cols-[9rem_1fr]"
                    >
                      <div>
                        <p className="text-sm font-bold text-brand-400">{level.title}</p>
                        <p className="mt-1 text-sm text-navy-400">
                          {level.stats.lessons} lecciones · {level.stats.duration}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-white">{previewModule.title}</p>
                        <ul className="mt-3 space-y-2">
                          {previewModule.lessons.slice(0, 2).map((lesson, lessonIndex) => (
                            <li
                              key={lesson.id}
                              className="flex items-start gap-2 text-sm text-navy-300"
                            >
                              {levelIndex === 0 && lessonIndex === 0 ? (
                                <CheckCircle2
                                  size={16}
                                  className="mt-0.5 shrink-0 text-brand-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <Circle
                                  size={16}
                                  className="mt-0.5 shrink-0 text-navy-600"
                                  aria-hidden="true"
                                />
                              )}
                              <span>{lesson.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:pt-24">
            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950">
              <picture>
                <source
                  srcSet="/images/lessons/lesson-2/lesson2-1-sm.webp 480w, /images/lessons/lesson-2/lesson2-1-md.webp 960w, /images/lessons/lesson-2/lesson2-1.webp 1200w"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  type="image/webp"
                />
                <img
                  src="/images/lessons/lesson-2/lesson2-1.webp"
                  alt="Infografía de una lección sobre cómo los bancos centrales crean dinero"
                  width={1200}
                  height={675}
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
              </picture>
              <figcaption className="border-t border-white/10 px-5 py-4 text-sm text-navy-400">
                Material visual de la lección “¿Por qué el dinero pierde valor?”
              </figcaption>
            </figure>

            <h3 className="mt-10 font-heading text-2xl font-bold text-white">
              Herramientas para aprender, no para distraerte
            </h3>
            <div className="mt-6 border-t border-white/10">
              {LEARNING_TOOLS.map((tool, index) => {
                const Icon = TOOL_ICONS[index];
                return (
                  <div
                    key={tool.title}
                    className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-white/10 py-5"
                  >
                    <Icon size={22} className="mt-0.5 text-brand-500" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-white">{tool.title}</h4>
                      <p className="mt-1 leading-relaxed text-navy-400">{tool.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformPreview;
