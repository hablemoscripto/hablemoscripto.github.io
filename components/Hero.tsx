
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

    // If word is complete, wait before starting delete
    if (!isDeleting && displayText === currentWord) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), PAUSE_TIME);
      return () => clearTimeout(pauseTimer);
    }

    // If deleted fully, move to next word
    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => prev + 1);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
      }
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950 pt-32 pb-20 lg:pt-20 scroll-mt-28">

      {/* Particles Background */}
      <ParticlesBackground />

      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {/* Main Banner Background Image */}
        <div className="absolute inset-0 z-0 opacity-[0.15] mix-blend-luminosity">
            <picture>
                <source
                    srcSet="/images/banner-768w.webp 768w, /images/banner-1280w.webp 1280w, /images/banner-1920w.webp 1920w"
                    sizes="100vw"
                    type="image/webp"
                />
                <img
                    src="/images/banner-1280w.webp"
                    alt="Crypto Trading Background"
                    width={1280}
                    height={720}
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center scale-110"
                    style={{
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
                    }}
                />
            </picture>
        </div>

        {/* Gradient Blobs */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-brand-500/10 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[140px]"></div>
        
        {/* Texture Pattern */}
        <div className="absolute inset-0 bg-dots-pattern opacity-[0.15]"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900/70 border border-white/5 text-brand-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
               <Zap size={14} />
               La nueva era del aprendizaje cripto
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white leading-[1] tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              De Cero a Experto en <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-brand-600 drop-shadow-glow-brand-strong">
                Hablemos Cripto
              </span>
            </h1>

            {/* Typing Subheading */}
            <div className="h-12 md:h-16 flex items-center justify-center gap-4 text-2xl md:text-4xl font-light text-navy-200 mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                <span>Domina</span>
                <div className="relative">
                    <span className="font-bold text-white border-b-4 border-brand-500 pb-1">{displayText}</span>
                    <span className="absolute -right-4 top-1 h-[80%] w-1 bg-brand-500 animate-pulse"></span>
                </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-navy-400 max-w-2xl leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
               Olvida el ruido y las promesas falsas. Aprende con análisis profesional, estrategias probadas y una ruta de aprendizaje diseñada para resultados reales.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 mb-20">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  onStartLearning();
                }}
                className="group relative w-full sm:w-auto px-10 py-5 bg-brand-500 text-navy-950 font-black rounded-2xl shadow-glow-brand-strong hover:scale-[1.05] active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <BookOpen size={24} className="group-hover:rotate-6 transition-transform" />
                <span>COMENZAR CURSO</span>
              </button>
              
              <a
                href="https://discord.gg/W8haa7dDV3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-navy-900 text-white font-bold rounded-2xl border border-white/5 hover:border-brand-500/30 hover:bg-navy-800 transition-all flex items-center justify-center gap-3 group text-lg"
              >
                <Users size={24} className="text-navy-400 group-hover:text-brand-500 transition-colors" />
                <span>COMUNIDAD</span>
              </a>
            </div>

            {/* Stats Grid - Centered & Glassmorphism */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full max-w-4xl border-t border-white/5 pt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                {[
                    { label: "Experiencia", val: "7+ Años", icon: Award, color: "text-brand-500" },
                    { label: "Estudiantes", val: "500+", icon: Users, color: "text-accent-500" },
                    { label: "Confianza", val: "100%", icon: Shield, color: "text-brand-400" }
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center group p-6 rounded-3xl hover:bg-white/[0.02] transition-colors">
                        <div className={`mb-4 p-4 rounded-2xl bg-navy-900 border border-white/5 group-hover:border-white/10 transition-all shadow-glass`}>
                           <stat.icon className={`w-7 h-7 ${stat.color} group-hover:scale-110 transition-transform`} />
                        </div>
                        <p className="text-4xl font-black text-white tracking-tighter mb-1">{stat.val}</p>
                        <p className="text-[10px] text-navy-500 uppercase tracking-[0.3em] font-black">{stat.label}</p>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
