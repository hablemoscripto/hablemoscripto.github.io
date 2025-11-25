import React, { useState, useEffect } from 'react';
import EducationNavbar from './EducationNavbar';
import { BEGINNER_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL } from '../data/courseData';
import { Trophy, Shield, TrendingUp, Star, ChevronRight } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import LevelCard from './ui/LevelCard';
import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom';

interface EducationPageProps {
  onNavigateHome?: () => void; // Optional for backward compat
}

interface ProgressData {
  beginner: number[]; // Array of completed lesson IDs
  intermediate: number[];
  advanced: number[];
}

const TOTAL_LESSONS = {
  beginner: 18,
  intermediate: 16,
  advanced: 14
};

const EducationPage: React.FC<EducationPageProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Use Supabase progress context
  const { progress: supabaseProgress } = useProgress();

  // Convert Supabase progress to local format for backward compatibility
  const [progress, setProgress] = useState<ProgressData>({
    beginner: [],
    intermediate: [],
    advanced: []
  });

  // Sync Supabase progress to local state
  useEffect(() => {
    if (supabaseProgress.length > 0) {
      const newProgress: ProgressData = {
        beginner: [],
        intermediate: [],
        advanced: []
      };

      supabaseProgress.forEach((p) => {
        if (p.completed) {
          if (p.lessonId <= 18) {
            newProgress.beginner.push(p.lessonId);
          } else if (p.lessonId <= 34) {
            newProgress.intermediate.push(p.lessonId);
          } else {
            newProgress.advanced.push(p.lessonId);
          }
        }
      });

      setProgress(newProgress);
      // Also update localStorage for offline/guest use
      localStorage.setItem('hablemos-progress', JSON.stringify(newProgress));
    } else {
      // Fallback to localStorage if no Supabase progress
      const savedProgress = localStorage.getItem('hablemos-progress');
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    }
  }, [supabaseProgress]);

  const getLevelProgress = (level: keyof typeof TOTAL_LESSONS) => {
    const completed = progress[level].length;
    const total = TOTAL_LESSONS[level];
    return Math.round((completed / total) * 100);
  };

  const isLevelLocked = (level: 'intermediate' | 'advanced') => {
    if (level === 'intermediate') return getLevelProgress('beginner') < 100;
    if (level === 'advanced') return getLevelProgress('intermediate') < 100;
    return false;
  };

  const totalCompletedLessons =
    progress.beginner.length + progress.intermediate.length + progress.advanced.length;

  const totalLessons =
    TOTAL_LESSONS.beginner + TOTAL_LESSONS.intermediate + TOTAL_LESSONS.advanced;

  const globalPercentage = Math.round((totalCompletedLessons / totalLessons) * 100);

  // Navigation handlers
  const handleLevelSelect = (level: 'beginner' | 'intermediate' | 'advanced') => {
    navigate(`/education/${level}`);
  };

  // Checking if we are exactly on /education to render the dashboard
  const isDashboard = location.pathname === '/education';

  return (
    <div className="bg-slate-950 min-h-screen pb-20">
      <EducationNavbar
        globalProgress={globalPercentage}
        onOpenProgress={() => setShowModal(true)}
        currentView="dashboard"
      />

      {/* Breadcrumbs / Stats Bar */}
      <div className="bg-slate-900/50 border-b border-white/5 py-4 sticky top-16 z-30 backdrop-blur-md">
        <div className="container max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center text-sm text-slate-400">
            <Link to="/" className="hover:text-brand-500 transition-colors">Inicio</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-brand-500 font-medium">Plataforma Educativa</span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-slate-300">
              <Trophy size={16} className="text-brand-500" />
              <span className="font-bold text-white">{totalCompletedLessons}</span> lecciones
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      {isDashboard ? (
        <>
          <div className="container max-w-7xl mx-auto px-6 pt-12 pb-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Aprende Cripto <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Paso a Paso</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Domina las criptomonedas con nuestro plan de estudios estructurado.
                Desde conceptos básicos hasta estrategias avanzadas. Tu progreso se guarda automáticamente.
              </p>
            </div>

            {/* Path Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mt-8">
              <LevelCard
                levelNumber="01"
                title="Principiante"
                subtitle="Fundamentos esenciales"
                description="Aprende los conceptos básicos de Bitcoin, blockchain, wallets y seguridad cripto."
                tags={['Bitcoin', 'Blockchain', 'Wallets', 'Seguridad']}
                lessonCount={TOTAL_LESSONS.beginner}
                completedCount={progress.beginner.length}
                progress={getLevelProgress('beginner')}
                color="brand"
                icon={Shield}
                isLocked={false}
                onAction={() => handleLevelSelect('beginner')}
              />

              <LevelCard
                levelNumber="02"
                title="Intermedio"
                subtitle="Análisis y estrategias"
                description="Desarrolla habilidades de análisis técnico, fundamental y construcción de portfolios."
                tags={['Análisis Técnico', 'Altcoins', 'Portfolio', 'Trading']}
                lessonCount={TOTAL_LESSONS.intermediate}
                completedCount={progress.intermediate.length}
                progress={getLevelProgress('intermediate')}
                color="indigo"
                icon={TrendingUp}
                isLocked={isLevelLocked('intermediate')}
                onAction={() => !isLevelLocked('intermediate') && handleLevelSelect('intermediate')}
              />

              <LevelCard
                levelNumber="03"
                title="Avanzado"
                subtitle="Tecnologías emergentes"
                description="Domina DeFi, NFTs, Layer 2 y las innovaciones más recientes del ecosistema cripto."
                tags={['DeFi', 'NFTs', 'Layer 2', 'Web3']}
                lessonCount={TOTAL_LESSONS.advanced}
                completedCount={progress.advanced.length}
                progress={getLevelProgress('advanced')}
                color="rose"
                icon={Star}
                isLocked={isLevelLocked('advanced')}
                onAction={() => !isLevelLocked('advanced') && handleLevelSelect('advanced')}
              />
            </div>
          </div>

          {/* Disclaimer */}
          <div className="container max-w-7xl mx-auto px-6 mt-8 mb-12">
            <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6">
              <p className="text-sm text-slate-500 leading-relaxed">
                <strong>Aviso Educativo:</strong> Todo el contenido de esta plataforma es exclusivamente educativo y no constituye asesoramiento financiero, de inversión o trading. Las criptomonedas son activos de alto riesgo con volatilidad extrema. Existe riesgo de pérdida total de capital. Siempre realiza tu propia investigación (DYOR).
              </p>
            </div>
          </div>
        </>
      ) : (
        <Outlet />
      )}

      {/* Progress Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-800/50">
              <h3 className="font-heading font-bold text-white flex items-center gap-2">
                <Trophy className="text-brand-500" size={20} />
                Tu Progreso
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                Cerrar
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Global Stats */}
              <div className="text-center p-6 bg-slate-950 rounded-xl border border-slate-800">
                <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
                  <div
                    className="absolute inset-0 rounded-full border-4 border-brand-500 border-t-transparent transform -rotate-90 transition-all duration-1000"
                    style={{
                      clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
                      borderTopColor: 'transparent',
                      borderRightColor: globalPercentage > 25 ? '#ffc107' : 'transparent',
                      borderBottomColor: globalPercentage > 50 ? '#ffc107' : 'transparent',
                      borderLeftColor: globalPercentage > 75 ? '#ffc107' : 'transparent',
                    }}
                  ></div>
                  <span className="text-2xl font-bold text-white">{globalPercentage}%</span>
                </div>
                <p className="text-slate-400 text-sm">
                  {totalCompletedLessons} de {totalLessons} lecciones completadas
                </p>
              </div>

              {/* List */}
              <div className="space-y-4">
                <ProgressRow label="Principiante" current={progress.beginner.length} total={TOTAL_LESSONS.beginner} color="bg-brand-500" />
                <ProgressRow label="Intermedio" current={progress.intermediate.length} total={TOTAL_LESSONS.intermediate} color="bg-indigo-500" />
                <ProgressRow label="Avanzado" current={progress.advanced.length} total={TOTAL_LESSONS.advanced} color="bg-rose-500" />
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

const ProgressRow = ({ label, current, total, color }: { label: string, current: number, total: number, color: string }) => (
  <div className="flex flex-col gap-1">
    <div className="flex justify-between text-xs font-medium text-slate-300">
      <span>{label}</span>
      <span>{current}/{total}</span>
    </div>
    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
      <div
        className={`h-full ${color} transition-all duration-500`}
        style={{ width: `${(current / total) * 100}%` }}
      ></div>
    </div>
  </div>
);

export default EducationPage;