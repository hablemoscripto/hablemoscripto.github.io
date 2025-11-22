
import React, { useEffect, useState } from 'react';
import { Users, BookOpen, Award, Shield, Zap } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

// Constants moved outside component to prevent re-creation
const WORDS = ["Bitcoin", "Solana", "Trading", "Web3", "Cripto"];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_TIME = 2000;

interface HeroProps {
  onStartLearning: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartLearning }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing Effect
  useEffect(() => {
    const currentWord = WORDS[textIndex % WORDS.length];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), PAUSE_TIME);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => prev + 1);
      }
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-32 pb-20 lg:pt-20 scroll-mt-28">

      {/* Particles Background */}
      <ParticlesBackground />

      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {/* Main Banner Background Image */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen">
            <img 
                src="/images/banner.jpg" 
                alt="Crypto Trading Background" 
                className="w-full h-full object-cover object-center"
                style={{ 
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%)'
                }}
            />
        </div>

        {/* Gradient Blobs */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[100px]"></div>
        
        {/* Texture Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white leading-[1.1] tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              De Cero a Experto en <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-amber-500 drop-shadow-[0_0_30px_rgba(255,193,7,0.2)]">
                Hablemos Cripto
              </span>
            </h1>

            {/* Typing Subheading */}
            <div className="h-12 md:h-16 flex items-center justify-center gap-3 text-2xl md:text-4xl font-light text-slate-300 mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                <span>Domina</span>
                <div className="relative">
                    <span className="font-semibold text-white border-b-2 border-brand-500 pb-1">{displayText}</span>
                    <span className="absolute -right-3 top-0 h-full w-0.5 bg-brand-500 animate-pulse"></span>
                </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
               Únete a la comunidad hispana más confiable. Olvida el ruido y las promesas falsas. Aprende con análisis profesional, estrategias probadas y una ruta de aprendizaje clara.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 mb-16">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  onStartLearning();
                }}
                className="w-full sm:w-auto px-8 py-4 bg-brand-500 text-slate-900 font-bold rounded-xl shadow-[0_0_30px_rgba(255,193,7,0.3)] hover:bg-brand-400 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,193,7,0.5)] transition-all flex items-center justify-center gap-2 text-lg"
              >
                <BookOpen size={22} />
                <span>Comenzar Ahora</span>
              </button>
              
              <a 
                href="https://discord.gg/W8haa7dDV3" 
                target="_blank"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl border border-slate-700 hover:border-brand-500/50 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group text-lg"
              >
                <Users size={22} className="text-slate-400 group-hover:text-brand-500 transition-colors" />
                <span>Unirse al Discord</span>
              </a>
            </div>

            {/* Stats Grid - Centered & Glassmorphism */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-4xl border-t border-white/5 pt-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                {[
                    { label: "Experiencia", val: "7+ Años", icon: Award },
                    { label: "Comunidad", val: "500+", icon: Users },
                    { label: "Transparencia", val: "100%", icon: Shield }
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center group">
                        <div className="mb-3 p-3 rounded-full bg-slate-900/50 border border-slate-800 group-hover:border-brand-500/50 group-hover:bg-brand-500/10 transition-all">
                           <stat.icon className="w-6 h-6 text-slate-400 group-hover:text-brand-500 transition-colors" />
                        </div>
                        <p className="text-3xl font-bold text-white group-hover:text-brand-400 transition-colors">{stat.val}</p>
                        <p className="text-sm text-slate-500 uppercase tracking-wider font-medium mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
