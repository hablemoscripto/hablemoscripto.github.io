import React, { useState, useEffect } from 'react';
import EducationNavbar from './EducationNavbar';
import LevelDetail from './LevelDetail';
import LessonView from './LessonView';
import { BEGINNER_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL } from '../data/courseData';
import { BookOpen, Lock, Trophy, PlayCircle, CheckCircle, ChevronRight, Star, TrendingUp, Shield } from 'lucide-react';

interface EducationPageProps {
  onNavigateHome: () => void;
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

type EducationView = 'dashboard' | 'level-beginner' | 'level-intermediate' | 'level-advanced' | 'lesson';

const EducationPage: React.FC<EducationPageProps> = ({ onNavigateHome }) => {
  const [view, setView] = useState<EducationView>('dashboard');
  const [currentLessonId, setCurrentLessonId] = useState<number | null>(null);
  
  const [progress, setProgress] = useState<ProgressData>({
    beginner: [],
    intermediate: [],
    advanced: []
  });
  const [showModal, setShowModal] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('hablemos-progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

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

  const completeLesson = (level: keyof typeof TOTAL_LESSONS, lessonId: number) => {
    setProgress(prev => {
      if (prev[level].includes(lessonId)) return prev;

      const newProgress = {
        ...prev,
        [level]: [...prev[level], lessonId]
      };
      localStorage.setItem('hablemos-progress', JSON.stringify(newProgress));
      return newProgress;
    });
  };

  const totalCompletedLessons = 
    progress.beginner.length + progress.intermediate.length + progress.advanced.length;
  
  const totalLessons = 
    TOTAL_LESSONS.beginner + TOTAL_LESSONS.intermediate + TOTAL_LESSONS.advanced;
  
  const globalPercentage = Math.round((totalCompletedLessons / totalLessons) * 100);

  // Navigation handlers
  const handleLevelSelect = (level: 'beginner' | 'intermediate' | 'advanced') => {
    if (level === 'beginner') {
      setView('level-beginner');
      window.scrollTo(0, 0);
    } else if (level === 'intermediate') {
      setView('level-intermediate');
      window.scrollTo(0, 0);
    } else if (level === 'advanced') {
      setView('level-advanced');
      window.scrollTo(0, 0);
    }
  };

  const handleLessonSelect = (lessonId: number) => {
    setCurrentLessonId(lessonId);
    setView('lesson');
    window.scrollTo(0, 0);
  };

  const getLevelFromId = (id: number): keyof ProgressData => {
      if (id <= 18) return 'beginner';
      if (id <= 34) return 'intermediate';
      return 'advanced';
  };

  const handleLessonComplete = (lessonId: number) => {
    const level = getLevelFromId(lessonId);
    completeLesson(level, lessonId);
  };

  // Helper to get active level string for display
  const getActiveLevelName = () => {
      if (view === 'level-beginner') return 'Nivel Principiante';
      if (view === 'level-intermediate') return 'Nivel Intermedio';
      if (view === 'level-advanced') return 'Nivel Avanzado';
      return '';
  };

  // View Rendering
  const renderContent = () => {
    if (view === 'lesson' && currentLessonId) {
      const activeLevelKey = getLevelFromId(currentLessonId);
      
      return (
        <LessonView 
          lessonId={currentLessonId}
          completedLessons={progress[activeLevelKey]} 
          onComplete={handleLessonComplete}
          onBack={() => setView(`level-${activeLevelKey}` as EducationView)} 
          onNext={() => {
            const nextId = currentLessonId + 1;
            // Check if next ID is within total range (max 48)
            if (nextId <= 48) {
                // Optional: Check if next ID crosses level boundary and redirect to dashboard or level view
                handleLessonSelect(nextId);
            } else {
                setView('dashboard');
            }
          }}
        />
      );
    }

    if (view === 'level-beginner') {
      return (
        <LevelDetail 
          levelData={BEGINNER_LEVEL}
          completedLessons={progress.beginner}
          onSelectLesson={handleLessonSelect}
          onBack={() => setView('dashboard')}
        />
      );
    }

    if (view === 'level-intermediate') {
      return (
        <LevelDetail 
          levelData={INTERMEDIATE_LEVEL}
          completedLessons={progress.intermediate}
          onSelectLesson={handleLessonSelect}
          onBack={() => setView('dashboard')}
        />
      );
    }

    if (view === 'level-advanced') {
      return (
        <LevelDetail 
          levelData={ADVANCED_LEVEL}
          completedLessons={progress.advanced}
          onSelectLesson={handleLessonSelect}
          onBack={() => setView('dashboard')}
        />
      );
    }

    // Dashboard View
    return (
      <>
        {/* Hero Header */}
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
    );
  };

  return (
    <div className="bg-slate-950 min-h-screen pb-20">
      <EducationNavbar 
        onNavigateHome={onNavigateHome} 
        globalProgress={globalPercentage}
        onOpenProgress={() => setShowModal(true)}
        currentView={view}
      />

      {/* Breadcrumbs / Stats Bar */}
      <div className="bg-slate-900/50 border-b border-white/5 py-4 sticky top-16 z-30 backdrop-blur-md">
        <div className="container max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center text-sm text-slate-400">
            <button onClick={onNavigateHome} className="hover:text-brand-500 transition-colors">Inicio</button>
            <ChevronRight size={14} className="mx-2" />
            <button 
              onClick={() => setView('dashboard')} 
              className={`${view === 'dashboard' ? 'text-brand-500 font-medium' : 'hover:text-brand-500 transition-colors'}`}
            >
              Plataforma Educativa
            </button>
            {view !== 'dashboard' && (
              <>
                <ChevronRight size={14} className="mx-2" />
                <button 
                  onClick={() => {
                      if(view === 'lesson') {
                          // Try to go back to current level context
                          if (currentLessonId) {
                              const level = getLevelFromId(currentLessonId);
                              setView(`level-${level}` as EducationView);
                          } else {
                             setView('dashboard'); 
                          }
                      }
                  }}
                  className={`${view.startsWith('level') ? 'text-brand-500 font-medium' : 'hover:text-brand-500 transition-colors'}`}
                >
                  {getActiveLevelName()}
                </button>
              </>
            )}
            {view === 'lesson' && (
              <>
                <ChevronRight size={14} className="mx-2" />
                <span className="text-brand-500 font-medium truncate max-w-[150px] sm:max-w-none">
                  Lección {currentLessonId}
                </span>
              </>
            )}
          </div>

          {view === 'dashboard' && (
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Trophy size={16} className="text-brand-500" />
                <span className="font-bold text-white">{totalCompletedLessons}</span> lecciones
              </div>
            </div>
          )}
        </div>
      </div>

      {renderContent()}

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

// Sub-components

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

interface LevelCardProps {
  levelNumber: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  lessonCount: number;
  completedCount: number;
  progress: number;
  color: 'brand' | 'indigo' | 'rose';
  icon: React.ElementType;
  isLocked: boolean;
  onAction: () => void;
}

const LevelCard: React.FC<LevelCardProps> = ({ 
  levelNumber, title, subtitle, description, tags, lessonCount, completedCount, progress, color, icon: Icon, isLocked, onAction 
}) => {
  
  const colorClasses = {
    brand: 'text-brand-500 group-hover:border-brand-500/50',
    indigo: 'text-indigo-400 group-hover:border-indigo-500/50',
    rose: 'text-rose-400 group-hover:border-rose-500/50',
  };

  const btnColors = {
    brand: 'bg-brand-500 hover:bg-brand-400 text-slate-900',
    indigo: 'bg-indigo-500 hover:bg-indigo-400 text-white',
    rose: 'bg-rose-500 hover:bg-rose-400 text-white',
  };

  return (
    <div className={`group relative bg-slate-900 rounded-2xl border border-slate-800 p-0 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${colorClasses[color]} ${isLocked ? 'opacity-75' : ''}`}>
      {/* Header */}
      <div className="p-8 relative">
        <div className="flex justify-between items-start mb-6">
          <div className={`w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center ${isLocked ? 'text-slate-500' : colorClasses[color].split(' ')[0]}`}>
            {isLocked ? <Lock size={20} /> : <Icon size={24} />}
          </div>
          
          {/* Circular Progress Mini */}
          <div className="relative w-12 h-12 flex items-center justify-center">
             <svg className="w-full h-full transform -rotate-90">
                <circle cx="24" cy="24" r="20" className="stroke-slate-800" strokeWidth="4" fill="none" />
                <circle 
                    cx="24" cy="24" r="20" 
                    className={isLocked ? 'stroke-slate-700' : `stroke-current`} 
                    strokeWidth="4" 
                    fill="none" 
                    strokeDasharray={125.6} 
                    strokeDashoffset={125.6 - (125.6 * progress) / 100} 
                    strokeLinecap="round"
                />
             </svg>
             <span className="absolute text-[10px] font-bold text-white">{progress}%</span>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-2">
           <span className="text-xs font-bold tracking-widest opacity-60 uppercase">{levelNumber}</span>
           <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-slate-400 text-sm font-medium mb-4">{subtitle}</p>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 min-h-[60px]">
            {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
            {tags.map(tag => (
                <span key={tag} className="px-2 py-1 rounded-md bg-slate-800 border border-slate-700 text-[10px] uppercase tracking-wider text-slate-400">
                    {tag}
                </span>
            ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <BookOpen size={14} />
            <span>{lessonCount} lecciones</span>
        </div>

        <button 
            onClick={onAction}
            disabled={isLocked}
            className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                isLocked 
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                : progress === 100 
                    ? 'bg-green-500 text-white'
                    : btnColors[color]
            }`}
        >
            {isLocked ? (
                <>
                    <Lock size={16} /> Bloqueado
                </>
            ) : progress === 100 ? (
                <>
                    <CheckCircle size={16} /> Completado
                </>
            ) : progress > 0 ? (
                <>
                    <PlayCircle size={16} /> Continuar
                </>
            ) : (
                <>
                    <PlayCircle size={16} /> Empezar Nivel
                </>
            )}
        </button>
      </div>
    </div>
  );
}

export default EducationPage;