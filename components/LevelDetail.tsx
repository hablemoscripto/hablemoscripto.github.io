import React from 'react';
import { ChevronLeft, Lock, CheckCircle, PlayCircle, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import { LevelData } from '../data/courseData';
import { getPreviousLessonId, getAllLessonsOrdered } from '../utils/courseUtils';

interface LevelDetailProps {
    levelData: LevelData;
}

const LevelDetail: React.FC<LevelDetailProps> = ({ levelData }) => {
    const navigate = useNavigate();
    const { isLessonCompleted } = useProgress();

    // Calculate progress
    const completedCount = levelData.modules.reduce((acc, module) => {
        return acc + module.lessons.filter(lesson => isLessonCompleted(lesson.id)).length;
    }, 0);

    const totalLessons = levelData.modules.reduce((acc, module) => acc + module.lessons.length, 0);
    const progressPercentage = Math.round((completedCount / totalLessons) * 100);

    // Build a lookup for lesson titles (for prerequisite display)
    const allLessons = getAllLessonsOrdered();
    const lessonTitleMap = new Map(allLessons.map(l => [l.id, l.title]));

    return (
        <div className="min-h-screen bg-slate-950 pb-20">
            {/* Header */}
            <div className="bg-slate-900 border-b border-white/5 pt-24 pb-12">
                <div className="container max-w-5xl mx-auto px-6">
                    <button
                        onClick={() => navigate('/education')}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
                    >
                        <ChevronLeft size={20} />
                        Volver al Dashboard
                    </button>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="text-brand-500 font-bold tracking-wider uppercase text-sm mb-2 block">{levelData.id}</span>
                            <h1 className="text-4xl font-bold text-white mb-4">{levelData.title}</h1>
                            <p className="text-slate-400 max-w-2xl text-lg">{levelData.description}</p>
                        </div>

                        <div className="bg-slate-800/50 p-5 rounded-2xl border border-slate-700 min-w-[220px]">
                            <div className="flex justify-between text-sm mb-3">
                                <span className="text-slate-400">Progreso</span>
                                <span className="text-brand-400 font-bold">{progressPercentage}%</span>
                            </div>
                            <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full transition-all duration-700 ease-out"
                                    style={{ width: `${progressPercentage}%` }}
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-2 text-center">{completedCount} de {totalLessons} lecciones</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modules List */}
            <div className="container max-w-5xl mx-auto px-6 py-12">
                <div className="space-y-8">
                    {(() => {
                        let runningLessonIndex = 0;
                        return levelData.modules.map((module, moduleIdx) => {
                            let firstAvailableFound = false;
                            const moduleStartIndex = runningLessonIndex;

                            return (
                        <div key={module.id} className="animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${moduleIdx * 100}ms` }}>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-sm text-slate-400 border border-slate-700">
                                    {moduleIdx + 1}
                                </span>
                                {module.title}
                            </h3>

                            <div className="grid gap-4">
                                {module.lessons.map((lesson, lessonIdx) => {
                                    const lessonIndex = moduleStartIndex + lessonIdx;
                                    runningLessonIndex = lessonIndex + 1;

                                    const isCompleted = isLessonCompleted(lesson.id);

                                    // Check if previous lesson is completed (sequential locking)
                                    const prevId = getPreviousLessonId(lesson.id);
                                    const isPreviousCompleted = prevId === null || isLessonCompleted(prevId);
                                    const isLocked = !isPreviousCompleted && !isLessonCompleted(lesson.id);

                                    // Determine if this is the first available (not locked, not completed) lesson in the module
                                    const isFirstAvailable = !isLocked && !isCompleted && !firstAvailableFound;
                                    if (isFirstAvailable) firstAvailableFound = true;

                                    return (
                                        <button
                                            key={lesson.id}
                                            onClick={() => !isLocked && navigate(`/education/lesson/${lesson.id}`)}
                                            disabled={isLocked}
                                            className={`group flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl transition-all text-left ${
                                                isLocked
                                                    ? 'opacity-50 cursor-not-allowed'
                                                    : 'hover:bg-slate-900 hover:border-brand-500/30'
                                            }`}
                                        >
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                                                isCompleted
                                                    ? 'bg-green-500/10 text-green-500'
                                                    : isLocked
                                                    ? 'bg-slate-800 text-slate-600'
                                                    : 'bg-slate-800 text-slate-400 group-hover:bg-brand-500/10 group-hover:text-brand-500'
                                                }`}>
                                                {isCompleted ? <CheckCircle size={20} /> : isLocked ? <Lock size={20} /> : <PlayCircle size={20} />}
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className={`font-bold transition-colors ${
                                                        isCompleted
                                                            ? 'text-slate-300'
                                                            : isLocked
                                                            ? 'text-slate-600'
                                                            : 'text-white group-hover:text-brand-400'
                                                    }`}>
                                                        {lesson.title}
                                                    </h4>
                                                    {isFirstAvailable && (
                                                        <span className="px-2 py-0.5 bg-brand-500/10 text-brand-400 text-[10px] font-bold rounded-full border border-brand-500/20">
                                                            Comienza aquí
                                                        </span>
                                                    )}
                                                </div>
                                                <div className={`flex items-center gap-4 text-xs ${isLocked ? 'text-slate-700' : 'text-slate-500'}`}>
                                                    <span>Lección {lessonIndex + 1} de {totalLessons}</span>
                                                    <span className="flex items-center gap-1"><Clock size={12} /> {lesson.duration}</span>
                                                    {isLocked && prevId ? (
                                                        <span className="text-slate-600">
                                                            Completa &quot;{lessonTitleMap.get(prevId)}&quot; para desbloquear
                                                        </span>
                                                    ) : isLocked ? (
                                                        <span className="flex items-center gap-1 text-slate-600"><Lock size={12} /> Bloqueada</span>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <div className={`transition-opacity ${isLocked ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'} text-brand-500`}>
                                                <PlayCircle size={24} />
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                            );
                        });
                    })()}
                </div>
            </div>
        </div>
    );
};

export default LevelDetail;