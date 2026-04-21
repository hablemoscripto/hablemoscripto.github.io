import React, { useState, useEffect, useCallback } from 'react';
import EducationNavbar from './EducationNavbar';
import LessonSearch from './LessonSearch';
import { reportError } from '../utils/errorReporting';
import {
  Trophy, Shield, TrendingUp, Star, ChevronRight, LucideIcon, Award, Crown,
  Footprints, BookOpen, Flag, GraduationCap, Gem, Zap, Flame, Activity, Calendar, Lock,
  PlayCircle, ArrowRight,
} from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { useGamification } from '../contexts/GamificationContext';
import LevelCard from './ui/LevelCard';
import Certificate from './ui/Certificate';
import PricingSection from './PricingSection';
import PaymentModal from './PaymentModal';
import DailyReviewCard from './education/DailyReviewCard';
import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { getAllLessonsOrdered } from '../utils/courseUtils';
import { getUserPremiumStatus } from '../services/paymentService';

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
  const [showSearch, setShowSearch] = useState(false);
  const [levels, setLevels] = useState<Level[]>([]);
  const { user } = useAuth();

  // Pricing / payment state
  const [userTier, setUserTier] = useState<'free' | 'premium' | 'vip'>('free');
  const [selectedTier, setSelectedTier] = useState<'premium' | 'vip' | null>(null);
  const [selectedCycle, setSelectedCycle] = useState<'monthly' | 'yearly' | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Check user subscription tier on mount
  useEffect(() => {
    async function checkSubscriptionStatus() {
      if (!user) return;
      try {
        const status = await getUserPremiumStatus(user.id);
        if (status.isPremium) {
          // TODO: distinguish premium vs vip when DB supports it
          setUserTier('premium');
        }
      } catch {
        // Silently fail — user stays on free tier
      }
    }
    checkSubscriptionStatus();
  }, [user]);

  // Ctrl+K / Cmd+K keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowSearch(true);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  const [activeCertificate, setActiveCertificate] = useState<{ level: string, title: string, variant: 'beginner' | 'intermediate' | 'advanced' } | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { progress: supabaseProgress } = useProgress();
  const { achievements, achievementDefinitions } = useGamification();
  const [progress, setProgress] = useState<ProgressData>({});
  // Resume learning: read last visited lesson from localStorage once on mount.
  // Computed via a lazy initializer so no effect is needed — the value is
  // derived synchronously from storage and never changes for this view.
  const [{ lastLessonId, lastLessonTitle }] = useState<{
    lastLessonId: number | null;
    lastLessonTitle: string | null;
  }>(() => {
    try {
      const stored = localStorage.getItem('last_lesson_id');
      if (!stored) return { lastLessonId: null, lastLessonTitle: null };
      const id = parseInt(stored, 10);
      if (isNaN(id)) return { lastLessonId: null, lastLessonTitle: null };
      const found = getAllLessonsOrdered().find(l => l.id === id);
      return found
        ? { lastLessonId: id, lastLessonTitle: found.title }
        : { lastLessonId: null, lastLessonTitle: null };
    } catch {
      // localStorage may be unavailable in private browsing
      return { lastLessonId: null, lastLessonTitle: null };
    }
  });

  useEffect(() => {
    const fetchLevels = async () => {
      const { data, error } = await supabase
        .from('levels')
        .select('id, title, subtitle, description, lessons_count, icon_name, color')
        .order('order', { ascending: true });
      if (error) {
        reportError(error, { component: 'EducationPage', action: 'fetchLevels' });
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
          reportError(error, { component: 'EducationPage', action: 'fetchLessonsForProgress' });
          return;
        }

        // Create a map of lesson ID to level ID
        const lessonToLevel: Record<number, string> = {};
        lessonsData?.forEach((lesson: { id: number; modules: { level_id: string }[] }) => {
          lessonToLevel[lesson.id] = lesson.modules[0]?.level_id;
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

  const getLevelProgress = useCallback((levelId: string) => {
    const level = levels.find(l => l.id === levelId);
    if (!level || !progress[levelId]) return 0;

    const completed = progress[levelId].length;
    const total = level.lessons_count;
    return Math.round((completed / total) * 100);
  }, [progress, levels]);

  const isLevelLocked = useCallback((levelId: string) => {
    if (levelId === 'intermediate') return getLevelProgress('beginner') < 100;
    if (levelId === 'advanced') return getLevelProgress('intermediate') < 100;
    return false;
  }, [getLevelProgress]);

  const getPrerequisiteInfo = useCallback((levelId: string) => {
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
  }, [progress, levels, getLevelProgress]);

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

  const levelColors: { [key: string]: 'brand' | 'emerald' | 'gold' } = {
    beginner: 'brand',
    intermediate: 'emerald',
    advanced: 'gold',
  }

  const levelBgColors: { [key: string]: string } = {
    beginner: 'bg-brand-500',
    intermediate: 'bg-emerald-500',
    advanced: 'bg-brand-300',
  }

  return (
    <div className="bg-navy-950 min-h-screen pb-20">
      <EducationNavbar
        globalProgress={globalPercentage}
        onOpenProgress={() => setShowModal(true)}
        onOpenSearch={() => setShowSearch(true)}
        currentView="dashboard"
      />
      <LessonSearch isOpen={showSearch} onClose={() => setShowSearch(false)} />

      <div className="bg-navy-900/50 border-b border-white/5 py-5 sticky top-16 z-30 backdrop-blur-xl">
        <div className="container max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center text-xs font-black uppercase tracking-widest text-navy-400">
            <Link to="/" className="hover:text-brand-500 transition-colors">Inicio</Link>
            <ChevronRight size={14} className="mx-2 text-navy-600" />
            <span className="text-brand-500">Plataforma Educativa</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-lg bg-navy-950 border border-white/5 flex items-center justify-center">
                  <Trophy size={16} className="text-brand-500" />
               </div>
               <div className="flex flex-col leading-none">
                  <span className="text-white font-black text-sm tracking-tight">{totalCompletedLessons}</span>
                  <span className="text-[10px] text-navy-500 font-bold uppercase tracking-tighter">Lecciones</span>
               </div>
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
          <DailyReviewCard />
          {lastLessonId && lastLessonTitle && (
            <div className="container max-w-7xl mx-auto px-6 mt-6 mb-6">
              <button
                onClick={() => navigate(`/education/lesson/${lastLessonId}`)}
                className="w-full flex items-center justify-between p-4 bg-brand-500/10 border border-brand-500/20 rounded-2xl hover:bg-brand-500/15 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center">
                    <PlayCircle size={20} className="text-brand-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-brand-400 font-bold uppercase tracking-wider">Continuar aprendiendo</p>
                    <p className="text-sm text-white font-medium">{lastLessonTitle}</p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-brand-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
          <div className="container max-w-7xl mx-auto px-6 pt-16 pb-20">
            <div className="max-w-4xl mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-navy-900 border border-white/5 text-brand-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                 Tu Ruta de Aprendizaje
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 leading-[1.1] tracking-tighter">
                Domina Cripto <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-brand-600">Paso a Paso</span>
              </h1>
              <p className="text-xl text-navy-300 leading-relaxed max-w-2xl font-medium">
                Sigue nuestro plan de estudios estructurado. Desde conceptos fundamentales hasta estrategias de mercado avanzado.
              </p>
            </div>

            {levels.length === 0 ? (
              /* Skeleton loading state */
              <div className="animate-pulse">
                <div className="grid lg:grid-cols-3 gap-10 mt-8">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="bg-navy-900 rounded-4xl border border-white/5 overflow-hidden">
                      {/* Top gradient band */}
                      <div className="h-2 bg-navy-800"></div>
                      <div className="p-8 space-y-6">
                        {/* Level number */}
                        <div className="w-12 h-4 bg-navy-800 rounded"></div>
                        {/* Icon placeholder */}
                        <div className="w-16 h-16 bg-navy-800 rounded-2xl"></div>
                        {/* Title */}
                        <div className="w-3/4 h-8 bg-navy-800 rounded-lg"></div>
                        {/* Subtitle */}
                        <div className="w-1/2 h-5 bg-navy-800/60 rounded"></div>
                        {/* Description lines */}
                        <div className="space-y-3">
                          <div className="w-full h-4 bg-navy-800/40 rounded"></div>
                          <div className="w-5/6 h-4 bg-navy-800/40 rounded"></div>
                        </div>
                        {/* Progress bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <div className="w-20 h-3 bg-navy-800/50 rounded"></div>
                            <div className="w-10 h-3 bg-navy-800/50 rounded"></div>
                          </div>
                          <div className="w-full h-2 bg-navy-800 rounded-full"></div>
                        </div>
                        {/* Button placeholder */}
                        <div className="w-full h-14 bg-navy-800 rounded-2xl"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Achievements section skeleton */}
                <div className="mt-24 border-y border-white/5 py-24">
                  <div className="flex items-center gap-4 mb-12">
                    <div className="w-14 h-14 bg-navy-900 rounded-2xl"></div>
                    <div className="w-48 h-8 bg-navy-900 rounded-lg"></div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="bg-navy-950 border border-white/5 rounded-2xl p-6 flex flex-col items-center">
                        <div className="w-16 h-16 bg-navy-900 rounded-2xl mb-4"></div>
                        <div className="w-20 h-4 bg-navy-900/60 rounded mb-2"></div>
                        <div className="w-16 h-3 bg-navy-900/40 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
            <div className="grid lg:grid-cols-3 gap-10 mt-8">
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
                      <div className="mt-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <button
                          onClick={() => handleClaimCertificate(level.id, level.title)}
                          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-navy-950 font-black uppercase tracking-widest text-xs rounded-2xl shadow-glow-brand hover:scale-105 transition-all"
                        >
                          <Award size={20} className="text-brand-500" />
                          Reclamar Certificado
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            )}
          </div>

          {/* Achievements Section */}
          <div className="container max-w-7xl mx-auto px-6 py-24 border-y border-white/5">
            <h2 className="text-3xl font-heading font-black text-white mb-12 flex items-center gap-4 tracking-tighter uppercase">
              <div className="p-3 rounded-2xl bg-navy-900 border border-white/5">
                <Trophy size={32} className="text-brand-500" />
              </div>
              Tus Logros
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {achievementDefinitions.map(def => {
                const unlocked = achievements.find(a => a.id === def.id);
                const Icon = ACHIEVEMENT_ICONS[def.icon] || Trophy;
                return (
                  <div
                    key={def.id}
                    className={`relative rounded-2xl p-6 text-center transition-all duration-500 group ${
                      unlocked
                        ? 'bg-navy-900 border border-brand-500/20 shadow-[0_0_30px_rgba(245,158,11,0.08)]'
                        : 'bg-navy-950 border border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${
                      unlocked
                        ? 'bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-500/20 rotate-3'
                        : 'bg-navy-900 border border-white/5 grayscale'
                    }`}>
                      {unlocked ? (
                        <Icon size={28} className="text-white" />
                      ) : (
                        <div className="relative">
                          <Icon size={24} className="text-navy-600 opacity-50" />
                          <Lock size={12} className="absolute -bottom-1 -right-1 text-navy-500" />
                        </div>
                      )}
                    </div>
                    <p className={`text-sm font-bold mb-2 ${unlocked ? 'text-white' : 'text-navy-500'}`}>
                      {def.title}
                    </p>
                    {unlocked ? (
                      <div className="inline-block px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-[10px] font-bold">
                        {new Date(unlocked.unlockedAt!).toLocaleDateString('es-CO', { day: 'numeric', month: 'short' })}
                      </div>
                    ) : (
                      <p className="text-[11px] text-navy-600 leading-tight">{def.description}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pricing Section */}
          <PricingSection
            currentTier={userTier}
            onSelectPlan={(tier, cycle) => {
              setSelectedTier(tier);
              setSelectedCycle(cycle);
              setShowPaymentModal(true);
            }}
          />
          <PaymentModal
            isOpen={showPaymentModal}
            onClose={() => setShowPaymentModal(false)}
            tier={selectedTier || 'premium'}
            billingCycle={selectedCycle || 'monthly'}
            onSuccess={() => {
              setShowPaymentModal(false);
              setUserTier(selectedTier || 'premium');
            }}
          />

          <div className="container max-w-7xl mx-auto px-6 mt-8 mb-12">
            <div className="bg-navy-900/50 border border-white/5 rounded-xl p-6">
              <p className="text-sm text-navy-500 leading-relaxed">
                <strong>Aviso Educativo:</strong> Todo el contenido de esta plataforma es exclusivamente educativo y no constituye asesoramiento financiero, de inversión o trading. Las criptomonedas son activos de alto riesgo con volatilidad extrema. Existe riesgo de pérdida total de capital. Siempre realiza tu propia investigación (DYOR).
              </p>
            </div>
          </div>
        </>
      ) : (
        <Outlet />
      )}

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-navy-900 border border-navy-700 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-navy-800 flex justify-between items-center bg-navy-800/50">
              <h3 className="font-heading font-bold text-white flex items-center gap-2">
                <Trophy className="text-brand-500" size={20} />
                Tu Progreso
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-navy-400 hover:text-white transition-colors"
              >
                Cerrar
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="text-center p-6 bg-navy-950 rounded-xl border border-navy-800">
                <div className="relative w-28 h-28 mx-auto mb-4">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="6" className="text-navy-800" />
                    <circle
                      cx="50" cy="50" r="42" fill="none"
                      stroke="url(#progress-gradient)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 42}`}
                      strokeDashoffset={`${2 * Math.PI * 42 * (1 - globalPercentage / 100)}`}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-white">{globalPercentage}%</span>
                  </div>
                </div>
                <p className="text-navy-400 text-sm">
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
                    color={levelBgColors[level.id]}
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
    <div className="flex justify-between text-xs font-medium text-navy-300">
      <span>{label}</span>
      <span>{current}/{total}</span>
    </div>
    <div className="w-full h-2 bg-navy-800 rounded-full overflow-hidden">
      <div
        className={`h-full ${color} transition-all duration-500`}
        style={{ width: `${total > 0 ? (current / total) * 100 : 0}%` }}
      ></div>
    </div>
  </div>
);

export default EducationPage;