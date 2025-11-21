
import React from 'react';
import { Shield, Users, Compass, Zap } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden scroll-mt-28">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image/Profile Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/5 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              <img 
                src="/images/MadLad.jpg" 
                alt="CBas Founder" 
                className="w-full max-w-md mx-auto filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-950 to-transparent p-8">
                <p className="text-brand-500 font-bold text-lg">CBas</p>
                <p className="text-white text-sm">Fundador & Analista</p>
              </div>
            </div>
            {/* Decorative square */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-brand-500/20 rounded-2xl"></div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                ¿Por qué aprender con <br />
                <span className="text-brand-500">Hablemos Cripto?</span>
              </h2>
              <p className="text-slate-400 leading-relaxed">
                He creado el recurso que me hubiera gustado tener cuando comencé en 2017. 
                La mayoría de la información ahí fuera es ruido, estafas o demasiado técnica. 
                Aquí filtramos la señal del ruido.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "Experiencia Real", text: "7+ años navegando ciclos alcistas y bajistas." },
                { icon: Users, title: "Comunidad Activa", text: "Grupo enfocado en crecer, sin toxicidad." },
                { icon: Zap, title: "Sin Tecnicismos", text: "Explicaciones claras que todos entienden." },
                { icon: Compass, title: "Enfoque Práctico", text: "Estrategias aplicables desde el día uno." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-brand-500 mb-2">
                    <item.icon size={20} />
                  </div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.text}</p>
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
