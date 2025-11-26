import React from 'react';
import { Book, TrendingUp, Rocket, CheckCircle2, Lock } from 'lucide-react';

const CourseCard: React.FC<{
  title: string;
  level: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  delay: string;
  isLocked?: boolean;
}> = ({ title, level, description, features, icon: Icon, delay, isLocked = false }) => (
  <div className={`group relative bg-slate-900 rounded-2xl border border-slate-800 p-8 ${!isLocked ? 'hover:border-brand-500/50 hover:-translate-y-2' : 'opacity-75'} transition-all duration-500 overflow-hidden ${delay}`}>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

    <div className={`w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 ${!isLocked ? 'group-hover:bg-brand-500/20' : ''} transition-colors relative`}>
      <Icon className={`${!isLocked ? 'text-slate-400 group-hover:text-brand-500' : 'text-slate-600'} w-8 h-8 transition-colors`} />
      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 rounded-xl">
          <Lock className="w-5 h-5 text-slate-500" />
        </div>
      )}
    </div>

    <div className={`mb-2 text-xs font-bold tracking-widest ${isLocked ? 'text-slate-600' : 'text-brand-500'} uppercase`}>{level}</div>
    <h3 className={`text-2xl font-bold ${isLocked ? 'text-slate-600' : 'text-white'} mb-4 font-heading`}>{title}</h3>
    <p className={`${isLocked ? 'text-slate-600' : 'text-slate-400'} mb-6 text-sm leading-relaxed`}>{description}</p>

    <ul className="space-y-3 mb-8">
      {features.map((feature, i) => (
        <li key={i} className={`flex items-start gap-2 text-sm ${isLocked ? 'text-slate-700' : 'text-slate-300'}`}>
          <CheckCircle2 className={`w-4 h-4 ${isLocked ? 'text-slate-700' : 'text-brand-500'} mt-0.5 shrink-0`} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    <button
      disabled={isLocked}
      className={`w-full py-3 rounded-lg border font-medium transition-all flex items-center justify-center gap-2 ${
        isLocked
          ? 'border-slate-800 text-slate-600 bg-slate-900 cursor-not-allowed'
          : 'border-slate-600 text-white hover:bg-brand-500 hover:border-brand-500 hover:text-slate-900'
      }`}
    >
      {isLocked ? (
        <>
          <Lock className="w-4 h-4" />
          Bloqueado
        </>
      ) : (
        'Empezar Nivel'
      )}
    </button>
  </div>
);

const Courses: React.FC = () => {
  const courses = [
    {
      title: "Bases Sólidas",
      level: "Principiante",
      description: "Entiende Bitcoin, blockchain y seguridad. Configura tu primera wallet y evita estafas comunes.",
      icon: Book,
      features: ["Fundamentos de Blockchain", "Seguridad y Wallets", "Exchanges Centralizados", "Primeras transacciones"],
      delay: "delay-0",
      isLocked: false
    },
    {
      title: "Análisis de Mercado",
      level: "Intermedio",
      description: "Aprende a leer gráficos, identificar tendencias y entender los ciclos del mercado cripto.",
      icon: TrendingUp,
      features: ["Análisis Técnico Básico", "Psicología de Mercado", "Gestión de Riesgo", "Métricas On-Chain"],
      delay: "delay-100",
      isLocked: true
    },
    {
      title: "DeFi y Avanzado",
      level: "Avanzado",
      description: "Domina finanzas descentralizadas, NFTs, y estrategias avanzadas de inversión on-chain.",
      icon: Rocket,
      features: ["Protocolos DeFi", "Yield Farming", "Análisis de Altcoins", "Navegación Web3"],
      delay: "delay-200",
      isLocked: true
    }
  ];

  return (
    <section id="courses" className="py-24 relative bg-slate-950">
       {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-900/10 via-slate-950 to-slate-950 pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-brand-500 font-bold tracking-wider text-sm uppercase mb-2 block">Plan de Estudio</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Tu Camino hacia la <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Libertad Financiera</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Un currículum estructurado paso a paso. Sin saltos, sin confusión. Diseñado para llevarte de cero a experto de forma segura.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;