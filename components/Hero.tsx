import React from 'react';
import { ArrowRight, BookOpen, Users, Shield } from 'lucide-react';

interface HeroProps {
  onStartLearning: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartLearning }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-20 scroll-mt-28">

      {/* Subtle gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[800px] h-[600px] bg-brand-500/8 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white leading-[1.05] tracking-tight mb-8">
              Aprende Cripto.{' '}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
                Protege Tu Futuro.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
              La plataforma educativa mas completa en espanol para dominar Bitcoin,
              blockchain y criptomonedas. De cero a experto, paso a paso.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onStartLearning();
                }}
                className="px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-lg shadow-lg shadow-brand-500/20"
              >
                <span>Empezar Gratis</span>
                <ArrowRight size={20} />
              </button>

              <a
                href="#courses"
                className="px-6 py-4 text-slate-400 hover:text-white font-medium transition-colors flex items-center gap-2 group"
              >
                <BookOpen size={18} className="text-brand-500" />
                <span>Ver el temario</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <BookOpen size={16} className="text-brand-500" />
                <span>42 lecciones</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-brand-500" />
                <span>100% gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-brand-500" />
                <span>500+ estudiantes</span>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
