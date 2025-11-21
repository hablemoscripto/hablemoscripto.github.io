import React from 'react';
import { BookOpen, Play, Lock, CheckCircle, ArrowLeft, Clock } from 'lucide-react';
import { LevelData } from '../data/courseData';

interface LevelDetailProps {
  levelData: LevelData;
  completedLessons: number[];
  onSelectLesson: (id: number) => void;
  onBack: () => void;
}

const LevelDetail: React.FC<LevelDetailProps> = ({ levelData, completedLessons, onSelectLesson, onBack }) => {
  const { title, subtitle, description, stats, modules } = levelData;
  
  const progressPercent = Math.round((completedLessons.length / stats.lessons) * 100);
  
  // Determine next available lesson.
  // Logic: Find the first lesson ID in this level's module list that is NOT in completedLessons.
  // If all are completed, nothing is locked.
  // If none are completed, the first one is unlocked.
  // We also allow any completed lesson to be replayed.
  
  // Helper to check if a lesson is unlocked
  // A lesson is unlocked if:
  // 1. It is already completed OR
  // 2. It is the very first lesson of this level AND no lessons are completed yet OR
  // 3. The immediate previous lesson (by ID sequence in this level) is completed.
  
  // To simplify: Get the highest completed ID within this level's context. 
  // But since IDs might be 19, 20, etc., we can't just do Max(completed) + 1 easily if there are gaps or cross-level completed IDs.
  // Robust way: Flatten all lesson IDs in this level, find the first one not completed. That one is the "active" one.
  // All IDs before that one (in the list) are unlocked.
  
  const allLevelLessonIds = modules.flatMap(m => m.lessons.map(l => l.id)).sort((a, b) => a - b);
  const firstUncompletedIndex = allLevelLessonIds.findIndex(id => !completedLessons.includes(id));
  
  // If all completed, nextUnlockId is effectively infinity (or last one).
  // If none completed, index is 0.
  const nextUnlockId = firstUncompletedIndex === -1 
      ? 999999 
      : allLevelLessonIds[firstUncompletedIndex];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Level Header */}
      <section className="relative py-16 bg-slate-900 border-b border-white/5 overflow-hidden">
         <div className="absolute inset-0 bg-brand-500/5"></div>
         <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <button 
                onClick={onBack}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
            >
                <ArrowLeft size={16} /> Volver
            </button>

            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-slate-800 p-6 rounded-3xl border border-white/10 shadow-2xl">
                    <div className="w-20 h-20 bg-brand-500/20 text-brand-500 rounded-2xl flex items-center justify-center mb-4">
                        <BookOpen size={40} />
                    </div>
                    <span className="text-xs font-bold tracking-widest opacity-60 uppercase text-slate-400">Nivel Actual</span>
                </div>

                <div className="flex-1">
                    <h1 className="text-4xl font-heading font-bold text-white mb-2">{title}</h1>
                    <p className="text-xl text-slate-300 mb-4">{subtitle}</p>
                    <p className="text-slate-400 leading-relaxed max-w-2xl mb-6">{description}</p>
                    
                    <div className="flex gap-6 text-sm font-medium text-slate-300">
                        <div className="flex items-center gap-2">
                            <BookOpen size={16} className="text-brand-500" />
                            {stats.lessons} Lecciones
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} className="text-brand-500" />
                            {stats.duration} Duración
                        </div>
                    </div>
                </div>

                {/* Big Progress Circle for Desktop */}
                <div className="hidden md:block">
                     <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="64" cy="64" r="56" className="stroke-slate-800" strokeWidth="8" fill="none" />
                            <circle 
                                cx="64" cy="64" r="56" 
                                className="stroke-brand-500 transition-all duration-1000 ease-out" 
                                strokeWidth="8" 
                                fill="none" 
                                strokeDasharray={351.8} 
                                strokeDashoffset={351.8 - (351.8 * progressPercent) / 100} 
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="absolute text-2xl font-bold text-white">{progressPercent}%</span>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* Progress Tracker Bar */}
      <div className="bg-slate-950 border-b border-white/5 py-4 sticky top-[72px] z-20">
        <div className="container max-w-7xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-sm text-slate-400">Tu Progreso: <span className="text-white font-bold">{completedLessons.length} de {stats.lessons}</span> lecciones</span>
                <div className="w-full sm:w-64 h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div className="h-full bg-brand-500 transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
                </div>
            </div>
        </div>
      </div>

      {/* Modules List */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-6">
            <div className="space-y-8">
                {modules.map((module) => (
                    <div key={module.id} className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
                        {/* Module Header */}
                        <div className="p-6 border-b border-slate-800 bg-slate-800/30 flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-slate-800 text-slate-300">
                                <module.icon size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Módulo {module.id}: {module.title}</h3>
                                <p className="text-slate-400 text-sm">{module.description}</p>
                            </div>
                        </div>

                        {/* Lessons List */}
                        <div className="divide-y divide-slate-800">
                            {module.lessons.map((lesson) => {
                                const isCompleted = completedLessons.includes(lesson.id);
                                // It is locked if it is NOT completed AND its ID is greater than or equal to the next unlocked ID.
                                // (Assuming sequential IDs for nextUnlockId logic)
                                // Correct logic: If not completed, check if it is the next one.
                                
                                const isLocked = !isCompleted && lesson.id !== nextUnlockId;
                                const isCurrent = lesson.id === nextUnlockId;

                                return (
                                    <div 
                                        key={lesson.id} 
                                        className={`p-6 flex flex-col sm:flex-row sm:items-center gap-4 transition-colors ${
                                            isLocked ? 'opacity-50 bg-slate-950/50' : 'hover:bg-white/5'
                                        } ${isCurrent ? 'bg-brand-500/5 border-l-2 border-brand-500' : ''}`}
                                    >
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm ${
                                            isCompleted 
                                                ? 'bg-green-500/20 text-green-500' 
                                                : isLocked 
                                                    ? 'bg-slate-800 text-slate-500' 
                                                    : 'bg-brand-500 text-slate-900'
                                        }`}>
                                            {isCompleted ? <CheckCircle size={18} /> : lesson.id.toString().padStart(2, '0')}
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-1">
                                                <h4 className="font-bold text-slate-200">{lesson.title}</h4>
                                                {isCurrent && <span className="px-2 py-0.5 rounded bg-brand-500/20 text-brand-500 text-[10px] uppercase font-bold tracking-wider">Siguiente</span>}
                                            </div>
                                            <div className="flex items-center gap-4 text-xs text-slate-500">
                                                <span className="flex items-center gap-1"><Clock size={12} /> {lesson.duration}</span>
                                                <span>•</span>
                                                <span>{lesson.type}</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => !isLocked && onSelectLesson(lesson.id)}
                                            disabled={isLocked}
                                            className={`px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-all w-full sm:w-auto justify-center ${
                                                isLocked 
                                                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                                                    : isCompleted 
                                                        ? 'bg-slate-800 text-green-500 hover:bg-green-500/10' 
                                                        : 'bg-brand-500 text-slate-900 hover:bg-brand-400'
                                            }`}
                                        >
                                            {isLocked ? (
                                                <><Lock size={14} /> Bloqueada</>
                                            ) : isCompleted ? (
                                                <><Play size={14} /> Repasar</>
                                            ) : (
                                                <><Play size={14} /> Empezar</>
                                            )}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default LevelDetail;