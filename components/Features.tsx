
import React from 'react';
import { Shield, Users, Compass, Zap, Twitter, Youtube, Clock } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-navy-950 relative overflow-hidden scroll-mt-28">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* Founder credibility unit — avatar + bio + handles, stacked */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start gap-8">

            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-brand-500/20 rounded-5xl blur-2xl group-hover:bg-brand-500/30 transition-all duration-500"></div>

              <div
                style={{ clipPath: 'inset(0 round 2rem)' }}
                className="relative border border-white/10 shadow-glass transform lg:-rotate-3 group-hover:rotate-0 transition-all duration-700 bg-navy-900 isolation-isolate z-0 will-change-transform"
              >
                <picture>
                  <source
                    srcSet="/images/MadLad.webp 450w, /images/MadLad-2x.webp 900w"
                    sizes="(max-width: 1024px) 90vw, 450px"
                    type="image/webp"
                  />
                  <img
                    src="/images/MadLad.webp"
                    alt="Avatar de CBas, fundador y analista de Hablemos Cripto"
                    width={450}
                    height={450}
                    loading="lazy"
                    className="w-full max-w-[450px] h-auto block transition-transform duration-700 group-hover:scale-105"
                  />
                </picture>

                {/* Floating Badge — identity tag */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-navy-950/80 backdrop-blur-xl border border-white/10 shadow-glow-brand">
                   <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-black text-xl tracking-tighter">CBas</p>
                        <p className="text-brand-500 text-xs font-bold uppercase tracking-widest">Fundador & Analista</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-navy-950">
                        <Zap size={20} fill="currentColor" aria-hidden="true" />
                      </div>
                   </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-brand-500/30 rounded-tr-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-brand-500/30 rounded-bl-3xl"></div>
            </div>

            {/* Sobre CBas — credibility panel anchored to avatar */}
            <div className="w-full max-w-[450px] p-6 rounded-2xl bg-navy-900/50 border border-white/5 shadow-glass">
              <p className="text-brand-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3">Sobre CBas</p>
              <p className="text-navy-200 text-sm leading-relaxed font-medium">
                He vivido ciclos alcistas y bajistas completos del mercado cripto — desde el crash de 2018 hasta el bull run de 2021 y todo lo que vino después. Aquí enseño a leer el mercado, no a especular con él. Sin shilling ni promesas de enriquecimiento rápido.
              </p>

              <div className="mt-5 pt-5 border-t border-white/5 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20">
                  <Clock size={12} className="text-brand-400" aria-hidden="true" />
                  <span className="text-[11px] font-bold text-brand-300 uppercase tracking-wider">7+ años en el mercado</span>
                </div>

                <a
                  href="https://twitter.com/Crypto_CBas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-navy-300 hover:text-white transition-colors text-sm font-medium group/link"
                  aria-label="Twitter — @Crypto_CBas (abre en una pestaña nueva)"
                >
                  <span className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center text-navy-400 group-hover/link:bg-brand-500 group-hover/link:text-navy-900 transition-all">
                    <Twitter size={14} aria-hidden="true" />
                  </span>
                  <span>@Crypto_CBas</span>
                </a>

                <a
                  href="https://www.youtube.com/@hablemoscripto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-navy-300 hover:text-white transition-colors text-sm font-medium group/link"
                  aria-label="YouTube — @hablemoscripto (abre en una pestaña nueva)"
                >
                  <span className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center text-navy-400 group-hover/link:bg-red-600 group-hover/link:text-white transition-all">
                    <Youtube size={14} aria-hidden="true" />
                  </span>
                  <span>@hablemoscripto</span>
                </a>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-navy-900 border border-white/5 text-brand-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                 Experiencia Certificada
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-white leading-tight tracking-tighter mb-6">
                ¿Por qué aprender con <br />
                <span className="text-brand-500">Hablemos Cripto?</span>
              </h2>
              <p className="text-navy-300 text-lg leading-relaxed font-medium">
                He creado el recurso que me hubiera gustado tener cuando comencé en 2017. 
                La mayoría de la información ahí fuera es ruido o estafas. Aquí filtramos la señal para que tomes decisiones inteligentes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "Experiencia Real", text: "7+ años navegando ciclos alcistas y bajistas con éxito.", color: "text-brand-400" },
                { icon: Users, title: "Comunidad VIP", text: "Grupo privado enfocado en el crecimiento mutuo.", color: "text-accent-500" },
                { icon: Zap, title: "Claridad Total", text: "Conceptos complejos explicados de forma sencilla.", color: "text-brand-500" },
                { icon: Compass, title: "Hoja de Ruta", text: "Estrategias probadas y aplicables de inmediato.", color: "text-brand-300" }
              ].map((item, i) => (
                <div key={i} className="group flex flex-col gap-4 p-6 rounded-2xl bg-navy-900/50 border border-white/5 hover:border-brand-500/30 hover:bg-navy-900 hover:scale-[1.02] transition-all duration-300 shadow-glass">
                  <div className={`w-12 h-12 rounded-xl bg-navy-950 border border-white/5 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-white uppercase tracking-tight mb-1">{item.title}</h3>
                    <p className="text-sm text-navy-400 leading-relaxed font-medium">{item.text}</p>
                  </div>
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
