import React, { useState, useEffect } from 'react';
import EducationNavbar from './EducationNavbar';
import {
  Trophy, Shield, TrendingUp, Star, ChevronRight, LucideIcon, Award, Crown,
  Footprints, BookOpen, Flag, GraduationCap, Gem, Zap, Flame, Activity, Calendar, Lock,
} from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { useGamification } from '../contexts/GamificationContext';
import LevelCard from './ui/LevelCard';
import Certificate from './ui/Certificate';
import PaymentButton from './PaymentButton';
import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

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

const ACHIEVEMENT_ICONS: Record<string, LucideIcon> = {
  Footprints, BookOpen, Award, Flag, GraduationCap, TrendingUp, Crown, Gem,
  Zap, Flame, Star, Activity, Calendar, Trophy,
};

const EducationPage: React.FC<EducationPageProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const [levels, setLevels] = useState<Level[]>([]);
  const { user } = useAuth();
  const [activeCertificate, setActiveCertificate] = useState<{ level: string, title: string, variant: 'beginner' | 'intermediate' | 'advanced' } | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { progress: supabaseProgress } = useProgress();
  const { achievements, achievementDefinitions } = useGamification();
  const [progress, setProgress] = useState<ProgressData>({});

  useEffect(() => {
    const fetchLevels = async () => {
      const { data, error } = await supabase
        .from('levels')
        .select('*')
        .order('order', { ascending: true });
      if (error) {
        console.error('Error fetching levels:', error);
      } else {
        setLevels(data as Level[]);
      }
    };

    fetchLevels();
  }, []);

  useEffect(() => {
    const fetchProgressByLevel = async () => {
      if (levels.length === 0) return;

      const newProgress: ProgressData = {};
      levels.forEach(level => {
        newProgress[level.id] = [];
      });

      if (supabaseProgress.length > 0) {
        // Fetch lessons with their level associations
        const { data: lessonsData, error } = await supabase
          .from('lessons')
          .select(`
            id,
            modules!inner(
              level_id
            )
          `);

        if (error) {
          console.error('Error fetching lessons for progress:', error);
          return;
        }

        // Create a map of lesson ID to level ID
        const lessonToLevel: Record<number, string> = {};
        lessonsData?.forEach((lesson: any) => {
          lessonToLevel[lesson.id] = lesson.modules.level_id;
        });

        // Map completed lessons to their levels
        supabaseProgress.forEach((p) => {
          if (p.completed && p.lessonId) {
            const levelId = lessonToLevel[p.lessonId];
            if (levelId && newProgress[levelId]) {
              newProgress[levelId].push(p.lessonId);
            }
          }
        });

        setProgress(newProgress);
        localStorage.setItem('hablemos-progress', JSON.stringify(newProgress));
      } else if (user) {
        // Authenticated user with no Supabase progress = fresh account
        // Clear any stale localStorage data and use empty progress
        localStorage.removeItem('hablemos-progress');
        setProgress(newProgress);
      } else {
        // Guest user: fall back to localStorage for offline progress
        const savedProgress = localStorage.getItem('hablemos-progress');
        if (savedProgress) {
          setProgress(JSON.parse(savedProgress));
        }
      }
    };

    fetchProgressByLevel();
  }, [supabaseProgress, levels, user]);

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

  const getPrerequisiteInfo = (levelId: string) => {
    const prerequisiteMap: Record<string, string> = {
      'intermediate': 'beginner',
      'advanced': 'intermediate'
    };

    const prereqId = prerequisiteMap[levelId];
    if (!prereqId) return null;

    const prereqLevel = levels.find(l => l.id === prereqId);
    if (!prereqLevel) return null;

    const completedCount = progress[prereqId]?.length || 0;
    const totalLessons = prereqLevel.lessons_count;
    const prereqProgress = getLevelProgress(prereqId);
    const lessonsRemaining = totalLessons - completedCount;

    return {
      title: prereqLevel.title,
      progress: prereqProgress,
      lessonsRemaining
    };
  };

  const totalCompletedLessons = Object.values(progress).reduce((acc, val) => acc + val.length, 0);
  const totalLessons = levels.reduce((acc, level) => acc + level.lessons_count, 0);
  const globalPercentage = totalLessons > 0 ? Math.round((totalCompletedLessons / totalLessons) * 100) : 0;

  const handleLevelSelect = (levelId: string) => {
    navigate(`/education/${levelId}`);
  };

  const handleClaimCertificate = (levelId: string, levelTitle: string) => {
    // Map levelId to variant
    const variant = levelId as 'beginner' | 'intermediate' | 'advanced';
    setActiveCertificate({
      level: levelTitle,
      title: 'Curso de Criptomonedas',
      variant: variant
    });
  };

  const isDashboard = location.pathname === '/education';

  const levelColors: { [key: string]: 'brand' | 'indigo' | 'rose' } = {
    beginner: 'brand',
    intermediate: 'indigo',
    advanced: 'rose',
  }

  return (
    <div className="bg-surface-base min-h-screen pb-20">
      <EducationNavbar
        globalProgress={globalPercentage}
        onOpenProgress={() => setShowModal(true)}
        currentView="dashboard"
      />

      <div className="bg-surface-2 border-b border-surface-border py-4 sticky top-16 z-30 backdrop-blur-md">
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

      {/* Certificate Modal */}
      {activeCertificate && (
        <Certificate
          studentName={user?.user_metadata?.full_name || user?.email?.split('@')[0] || "Estudiante"}
          courseName={activeCertificate.title}
          level={activeCertificate.level}
          date={new Date().toLocaleDateString()}
          variant={activeCertificate.variant}
          onClose={() => setActiveCertificate(null)}
        />
      )}

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
              {levels.map((level, index) => {
                const isCompleted = getLevelProgress(level.id) === 100;
                const isLocked = isLevelLocked(level.id);
                const prereqInfo = isLocked ? getPrerequisiteInfo(level.id) : null;
                return (
                  <div key={level.id} className="relative">
                    <LevelCard
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
                      isLocked={isLocked}
                      onAction={() => !isLocked && handleLevelSelect(level.id)}
                      prerequisiteTitle={prereqInfo?.title}
                      prerequisiteProgress={prereqInfo?.progress}
                      prerequisiteLessonsRemaining={prereqInfo?.lessonsRemaining}
                    />

                    {isCompleted && (
                      <div className="mt-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <button
                          onClick={() => handleClaimCertificate(level.id, level.title)}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-accent-500/20 hover:scale-105 transition-all"
                        >
                          <Award size={20} />
                          Reclamar Certificado
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="container max-w-7xl mx-auto px-6 mt-16">
            <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-2">
              <Trophy size={24} className="text-brand-500" />
              Logros
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {achievementDefinitions.map(def => {
                const unlocked = achievements.find(a => a.id === def.id);
                const Icon = ACHIEVEMENT_ICONS[def.icon] || Trophy;
                return (
                  <div
                    key={def.id}
                    className={`relative rounded-xl p-4 text-center transition-all ${
                      unlocked
                        ? 'bg-surface-2 border border-brand-500/30 shadow-md shadow-brand-500/5'
                        : 'bg-surface-2 border border-surface-border opacity-50'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                      unlocked
                        ? 'bg-brand-500'
                        : 'bg-surface-3'
                    }`}>
                      {unlocked ? (
                        <Icon size={24} className="text-slate-900" />
                      ) : (
                        <Lock size={20} className="text-slate-600" />
                      )}
                    </div>
                    <p className={`text-sm font-bold mb-1 ${unlocked ? 'text-white' : 'text-slate-500'}`}>
                      {def.title}
                    </p>
                    {unlocked ? (
                      <p className="text-xs text-brand-400">
                        {new Date(unlocked.unlockedAt!).toLocaleDateString('es-CO', { day: 'numeric', month: 'short' })}
                      </p>
                    ) : (
                      <p className="text-xs text-slate-600">{def.description}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Premium Section - Temporary for testing */}
          <div className="container max-w-7xl mx-auto px-6 mt-12">
            <div className="bg-surface-1 border border-accent-500/20 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Obtener Premium</h2>
              <p className="text-slate-400 mb-6 max-w-md mx-auto">
                Accede a contenido exclusivo, lecciones avanzadas y recursos adicionales para dominar el mundo cripto.
              </p>
              <PaymentButton
                onSuccess={() => alert('Pago exitoso! Ya eres premium.')}
                onError={(error) => alert(error)}
                className="mx-auto"
              />
            </div>
          </div>

          <div className="container max-w-7xl mx-auto px-6 mt-8 mb-12">
            <div className="bg-surface-2 border border-surface-border rounded-xl p-6">
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-surface-base/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-surface-1 border border-surface-border-hover w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-surface-border flex justify-between items-center bg-surface-2">
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
              <div className="text-center p-6 bg-surface-base rounded-xl border border-surface-border">
                <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-surface-border"></div>
                  <div
                    className="absolute inset-0 rounded-full border-4 border-brand-500 border-t-transparent transform -rotate-90 transition-all duration-1000"
                    style={{
                      clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
                      borderTopColor: 'transparent',
                      borderRightColor: globalPercentage > 25 ? '#10B981' : 'transparent',
                      borderBottomColor: globalPercentage > 50 ? '#10B981' : 'transparent',
                      borderLeftColor: globalPercentage > 75 ? '#10B981' : 'transparent',
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
    <div className="w-full h-2 bg-surface-3 rounded-full overflow-hidden">
      <div
        className={`h-full ${color} transition-all duration-500`}
        style={{ width: `${(current / total) * 100}%` }}
      ></div>
    </div>
  </div>
);

export default EducationPage;