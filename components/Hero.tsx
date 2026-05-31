
import React, { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Users, BookOpen, Award, Zap, CheckCircle } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';
import { getAllLessonsOrdered } from '../utils/courseUtils';

// Derive the lesson count from the catalog so the headline stat can never drift.
const LESSON_COUNT = getAllLessonsOrdered().length;

// Constants moved outside component to prevent re-creation
const WORDS = ["Bitcoin", "Solana", "Trading", "Web3"];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_TIME = 2000;
const FINAL_PAUSE_TIME = 3000;
const MAX_CYCLES = 2; // Cycle the whole WORDS list twice, then settle on the last word
// The word the animation settles on after the final cycle.
const SETTLED_WORD = WORDS[(WORDS.length * MAX_CYCLES - 1) % WORDS.length];

interface HeroProps {
  onStartLearning: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartLearning }) => {
  const prefersReducedMotion = useReducedMotion();
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState(prefersReducedMotion ? SETTLED_WORD : '');
  const [isDeleting, setIsDeleting] = useState(false);
  const [settled, setSettled] = useState(!!prefersReducedMotion);

  // Typing Effect — cycles through WORDS twice, then settles on the last word.
  // Keeps the hero visually alive on arrival without being a permanent distraction.
  // Skipped entirely when the user prefers reduced motion: the final word is
  // shown immediately and no setTimeout typing loop runs.
  useEffect(() => {
    if (prefersReducedMotion || settled) return;

    const currentWord = WORDS[textIndex % WORDS.length];
    const isLastWord = textIndex === WORDS.length * MAX_CYCLES - 1;

    if (!isDeleting && displayText === currentWord) {
      if (isLastWord) {
        const finalTimer = setTimeout(() => setSettled(true), FINAL_PAUSE_TIME);
        return () => clearTimeout(finalTimer);
      }
      const pauseTimer = setTimeout(() => setIsDeleting(true), PAUSE_TIME);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting && displayText === '') {
      // Typewriter state transition — this effect IS the animation driver.
      // eslint-disable-next-line react-hooks/set-state-in-effect
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
  }, [displayText, isDeleting, textIndex, settled, prefersReducedMotion]);

  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden bg-navy-950 pt-32 pb-20 lg:pt-24 scroll-mt-28">

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
        
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900/70 border border-white/5 text-brand-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
               <Zap size={14} />
               La nueva era del aprendizaje cripto
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1] tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              De Cero a Experto en <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-brand-600 drop-shadow-glow-brand-strong">
                Cripto.
              </span>
            </h1>

            {/* Typing Subheading */}
            <div className="h-12 md:h-16 flex items-center justify-center gap-4 text-2xl md:text-4xl font-light text-navy-200 mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                <span>Domina</span>
                <div className="relative">
                    <span className="font-bold text-white border-b-4 border-brand-500 pb-1">{displayText}</span>
                    <span className={`absolute -right-4 top-1 h-[80%] w-1 bg-brand-500 transition-opacity duration-500 ${settled ? 'opacity-0' : 'animate-pulse'}`}></span>
                </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-navy-400 max-w-2xl leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
               Olvida el ruido y las promesas falsas. Aprende con análisis profesional, estrategias probadas y una ruta de aprendizaje diseñada para resultados reales.
            </p>

            {/* Outcomes */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 text-sm">
                <span className="flex items-center gap-2 text-navy-300"><CheckCircle size={16} className="text-brand-500" /> Configura tu wallet</span>
                <span className="flex items-center gap-2 text-navy-300"><CheckCircle size={16} className="text-brand-500" /> Identifica estafas</span>
                <span className="flex items-center gap-2 text-navy-300"><CheckCircle size={16} className="text-brand-500" /> Entiende blockchain</span>
                <span className="flex items-center gap-2 text-navy-300"><CheckCircle size={16} className="text-brand-500" /> Construye tu plan de inversión</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 mb-12">
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
              
              <button
                type="button"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-5 bg-navy-900 text-white font-bold rounded-2xl border border-white/5 hover:border-brand-500/30 hover:bg-navy-800 transition-all flex items-center justify-center gap-3 group text-lg"
              >
                <Users size={24} className="text-navy-400 group-hover:text-brand-500 transition-colors" />
                <span>COMUNIDAD PRIVADA</span>
              </button>
            </div>

            {/* Stats Grid - Centered & Glassmorphism */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 w-full max-w-3xl border-t border-white/5 pt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                {[
                    { label: "Experiencia", val: "7+ Años", icon: Award, color: "text-brand-500" },
                    { label: "Lecciones", val: String(LESSON_COUNT), icon: BookOpen, color: "text-brand-400" }
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center group p-6 rounded-3xl hover:bg-white/[0.02] transition-colors">
                        <div className={`mb-4 p-4 rounded-2xl bg-navy-900 border border-white/5 group-hover:border-white/10 transition-all shadow-glass`}>
                           <stat.icon className={`w-7 h-7 ${stat.color} group-hover:scale-110 transition-transform`} />
                        </div>
                        <p className="text-4xl font-black text-white tracking-tighter mb-1">{stat.val}</p>
                        <p className="text-[10px] text-navy-400 uppercase tracking-[0.3em] font-black">{stat.label}</p>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
