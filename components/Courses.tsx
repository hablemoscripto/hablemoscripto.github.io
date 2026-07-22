import React from 'react';
import { Book, TrendingUp, Rocket, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

type AccessKind = 'free' | 'paid';

interface CourseCardProps {
  title: string;
  level: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  access: AccessKind;
  badge: string;
  ctaLabel: string;
  onCta: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  level,
  description,
  features,
  icon: Icon,
  access,
  badge,
  ctaLabel,
  onCta,
}) => {
  const isFree = access === 'free';

  return (
    <div
      className={`group relative bg-navy-900 rounded-2xl border p-8 transition-all duration-500 overflow-hidden ${
        isFree
          ? 'border-brand-500/30 hover:border-brand-500/50 hover:-translate-y-1'
          : 'border-white/10 hover:border-brand-500/30 hover:-translate-y-1'
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-start justify-between gap-3 mb-6">
        <div
          className={`w-14 h-14 rounded-xl bg-navy-800 flex items-center justify-center transition-colors ${
            isFree ? 'group-hover:bg-brand-500/20' : 'group-hover:bg-brand-500/10'
          }`}
        >
          <Icon
            className="text-navy-300 group-hover:text-brand-500 w-8 h-8 transition-colors"
            aria-hidden="true"
          />
        </div>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider ${
            isFree
              ? 'bg-brand-500/15 border border-brand-500/30 text-brand-300'
              : 'bg-navy-800 border border-white/10 text-navy-300'
          }`}
        >
          {badge}
        </span>
      </div>

      <div className="mb-2 text-xs font-bold tracking-widest text-brand-500 uppercase">{level}</div>
      <h3 className="text-2xl font-bold text-white mb-4 font-heading">{title}</h3>
      <p className="text-navy-300 mb-6 text-sm leading-relaxed">{description}</p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-navy-200">
            <CheckCircle2 className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onCta}
        aria-label={`${ctaLabel}: ${level}`}
        className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-[0.98] ${
          isFree
            ? 'bg-brand-500 text-navy-950 hover:bg-brand-400 shadow-glow-brand'
            : 'border border-white/15 bg-navy-800 text-white hover:border-brand-500/40 hover:bg-navy-700'
        }`}
      >
        {ctaLabel}
      </button>
    </div>
  );
};

const Courses: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleStartFree = () => {
    if (user) {
      navigate('/education');
    } else {
      navigate('/?showAuth=true');
    }
  };

  const handleViewPlans = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('pricing')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };

  const courses: Omit<CourseCardProps, 'onCta'>[] = [
    {
      title: 'Bases Sólidas',
      level: 'Principiante',
      description:
        'Entiende Bitcoin, blockchain y seguridad. Configura tu primera wallet y evita estafas comunes.',
      icon: Book,
      features: [
        'Fundamentos de Blockchain',
        'Seguridad y Wallets',
        'Exchanges Centralizados',
        'Primeras transacciones',
      ],
      access: 'free',
      badge: 'Gratis',
      ctaLabel: 'Empezar gratis',
    },
    {
      title: 'Análisis de Mercado',
      level: 'Intermedio',
      description:
        'Aprende a leer gráficos, identificar tendencias y entender los ciclos del mercado cripto.',
      icon: TrendingUp,
      features: [
        'Análisis Técnico Básico',
        'Psicología de Mercado',
        'Gestión de Riesgo',
        'Métricas On-Chain',
      ],
      access: 'paid',
      badge: 'Inversor y Experto',
      ctaLabel: 'Ver planes',
    },
    {
      title: 'DeFi y Avanzado',
      level: 'Avanzado',
      description:
        'Domina finanzas descentralizadas, NFTs y estrategias avanzadas de inversión on-chain.',
      icon: Rocket,
      features: [
        'Protocolos DeFi',
        'Yield Farming',
        'Análisis de Altcoins',
        'Navegación Web3',
      ],
      access: 'paid',
      badge: 'Inversor y Experto',
      ctaLabel: 'Ver planes',
    },
  ];

  return (
    <section id="courses" className="py-16 md:py-24 relative bg-navy-950 scroll-mt-28">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-900/10 via-navy-950 to-navy-950 pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="text-brand-500 font-bold tracking-wider text-sm uppercase mb-2 block">
            Plan de Estudio
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Tu camino hacia la{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
              claridad financiera
            </span>
          </h2>
          <p className="text-navy-300 text-lg">
            19 lecciones gratis para empezar con seguridad. Intermedio y Avanzado se desbloquean con un
            solo pago de por vida.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.level}
              {...course}
              onCta={course.access === 'free' ? handleStartFree : handleViewPlans}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
