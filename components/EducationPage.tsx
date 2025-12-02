import React, { useState, useEffect } from 'react';
import EducationNavbar from './EducationNavbar';
import { Trophy, Shield, TrendingUp, Star, ChevronRight, LucideIcon } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import LevelCard from './ui/LevelCard';
import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase'; // Import supabase client

interface EducationPageProps {
  onNavigateHome?: () => void; // Optional for backward compat
}

interface ProgressData {
  [key: string]: number[]; // Array of completed lesson IDs for each level
}

interface Level {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  lessons_count: number;
  icon_name: string;
  color: string;
}

const ICONS: Record<string, LucideIcon> = {
  Shield,
  TrendingUp,
  Star,
};

const EducationPage: React.FC<EducationPageProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const [levels, setLevels] = useState<Level[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const { progress: supabaseProgress } = useProgress();
  const [progress, setProgress] = useState<ProgressData>({});

  useEffect(() => {
    const fetchLevels = async () => {
      const { data, error } = await supabase
        .from('levels')
        .select('*')
        .order('id', { ascending: true });
      if (error) {
        console.error('Error fetching levels:', error);
      } else {
        setLevels(data as Level[]);
      }
    };

    fetchLevels();
  }, []);

  useEffect(() => {
    if (supabaseProgress.length > 0) {
      const newProgress: ProgressData = {};
      levels.forEach(level => {
        newProgress[level.id] = [];
      });

      supabaseProgress.forEach((p) => {
        if (p.completed) {
          const levelId = p.lesson_id.split('-')[0];
          if(newProgress[levelId]) {
            newProgress[levelId].push(parseInt(p.lesson_id.split('-')[1]));
          }
        }
      });

      setProgress(newProgress);
      localStorage.setItem('hablemos-progress', JSON.stringify(newProgress));
    } else {
      const savedProgress = localStorage.getItem('hablemos-progress');
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    }
  }, [supabaseProgress, levels]);

  const getLevelProgress = (levelId: string) => {
    const level = levels.find(l => l.id === levelId);
    if (!level || !progress[levelId]) return 0;

    const completed = progress[levelId].length;
    const total = level.lessons_count;
    return Math.round((completed / total) * 100);
  };

  const isLevelLocked = (levelId: string) => {
    if (levelId === 'intermediate') return getLevelProgress('beginner') < 100;
    if (levelId === 'advanced') return getLevelProgress('intermediate') < 100;
    return false;
  };

  const totalCompletedLessons = Object.values(progress).reduce((acc, val) => acc + val.length, 0);
  const totalLessons = levels.reduce((acc, level) => acc + level.lessons_count, 0);
  const globalPercentage = totalLessons > 0 ? Math.round((totalCompletedLessons / totalLessons) * 100) : 0;

  const handleLevelSelect = (levelId: string) => {
    navigate(`/education/${levelId}`);
  };

  const isDashboard = location.pathname === '/education';

  const levelColors: { [key: string]: string } = {
    beginner: 'brand',
    intermediate: 'indigo',
    advanced: 'rose',
  }

  return (
    <div className="bg-slate-950 min-h-screen pb-20">
      <EducationNavbar
        globalProgress={globalPercentage}
        onOpenProgress={() => setShowModal(true)}
        currentView="dashboard"
      />

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

            <div className="grid lg:grid-cols-3 gap-8 mt-8">
              {levels.map((level, index) => (
                <LevelCard
                  key={level.id}
                  levelNumber={`0${index + 1}`}
                  title={level.title}
                  subtitle={level.subtitle}
                  description={level.description}
                  tags={[]} // Tags can be added to the database later
                  lessonCount={level.lessons_count}
                  completedCount={progress[level.id]?.length || 0}
                  progress={getLevelProgress(level.id)}
                  color={levelColors[level.id]}
                  icon={ICONS[level.icon_name] || Shield}
                  isLocked={isLevelLocked(level.id)}
                  onAction={() => !isLevelLocked(level.id) && handleLevelSelect(level.id)}
                />
              ))}
            </div>
          </div>

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

              <div className="space-y-4">
                {levels.map(level => (
                  <ProgressRow 
                    key={level.id}
                    label={level.title} 
                    current={progress[level.id]?.length || 0} 
                    total={level.lessons_count} 
                    color={`bg-${levelColors[level.id]}-500`}
                  />
                ))}
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