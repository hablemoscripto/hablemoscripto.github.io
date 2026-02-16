import React from 'react';
import { Shield, TrendingUp, Star, ArrowRight, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const levels = [
  {
    number: '01',
    title: 'Principiante',
    subtitle: 'Bases Solidas',
    lessons: 19,
    description: 'Dinero, inflacion, Bitcoin, wallets, seguridad, stablecoins y tu primer plan de inversion.',
    icon: Shield,
    color: 'brand' as const,
  },
  {
    number: '02',
    title: 'Intermedio',
    subtitle: 'Analisis de Mercado',
    lessons: 12,
    description: 'Blockchain a fondo, DeFi, liquidity pools, yield farming y metricas on-chain.',
    icon: TrendingUp,
    color: 'indigo' as const,
  },
  {
    number: '03',
    title: 'Avanzado',
    subtitle: 'DeFi & Estrategias',
    lessons: 11,
    description: 'Staking, MEV, gobernanza, estrategias avanzadas de trading y gestion de portafolio.',
    icon: Star,
    color: 'rose' as const,
  },
];

const colorMap = {
  brand: {
    accent: 'text-brand-500',
    bg: 'bg-brand-500/10',
    border: 'border-brand-500/30',
    dot: 'bg-brand-500',
  },
  indigo: {
    accent: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/30',
    dot: 'bg-indigo-500',
  },
  rose: {
    accent: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/30',
    dot: 'bg-rose-500',
  },
};

const Courses: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleStart = () => {
    if (user) {
      navigate('/education');
    } else {
      navigate('/?showAuth=true');
    }
  };

  return (
    <section id="courses" className="py-28 lg:py-32 relative">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-brand-500 font-bold tracking-wider text-sm uppercase mb-3 block">Plan de Estudio</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Tu ruta de aprendizaje
          </h2>
          <p className="text-slate-400 text-lg">
            Un curriculo estructurado paso a paso. Diseñado para llevarte de cero a experto de forma segura.
          </p>
        </div>

        {/* Learning Path */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {levels.map((level, index) => {
            const colors = colorMap[level.color];
            const Icon = level.icon;
            return (
              <div
                key={level.number}
                className="group relative bg-surface-1 rounded-2xl border border-surface-border hover:border-surface-border-hover transition-all duration-300 overflow-hidden"
              >
                {/* Top accent line */}
                <div className={`h-0.5 ${colors.dot}`}></div>

                <div className="p-6 lg:p-8">
                  {/* Icon + Level label */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                      <Icon size={24} className={colors.accent} />
                    </div>
                    <div>
                      <span className={`text-xs font-bold tracking-widest uppercase ${colors.accent}`}>{level.title}</span>
                      <h3 className="text-xl font-bold text-white">{level.subtitle}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6 min-h-[60px]">
                    {level.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">{level.lessons} lecciones</span>
                    <button
                      onClick={handleStart}
                      className={`flex items-center gap-1 text-sm font-medium ${colors.accent} hover:underline transition-colors`}
                    >
                      Ver nivel <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Connector line (not on last) */}
                {index < levels.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-5 w-6 lg:w-8 border-t border-dashed border-surface-border-hover z-10"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA below path */}
        <div className="text-center mt-12">
          <button
            onClick={handleStart}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-500/20"
          >
            Comenzar Ahora <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
