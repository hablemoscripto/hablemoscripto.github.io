import React, { useState } from 'react';
import { ChevronLeft, Lock, CheckCircle, PlayCircle, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import { LevelData } from '../data/courseData';
import { getPreviousLessonId, getAllLessonsOrdered, getBeginnerLessonIds, getIntermediateLessonIds } from '../utils/courseUtils';
import { useEntitlements } from '../contexts/EntitlementsContext';
import { canAccessLevel } from '../services/paymentService';
import UpgradePaywall from './ui/UpgradePaywall';
import EducationNavbar from './EducationNavbar';
import LessonSearch from './LessonSearch';

interface LevelDetailProps {
    levelData: LevelData;
}

const LEVEL_LABELS: Record<string, string> = {
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    advanced: 'Avanzado',
};

const LevelDetail: React.FC<LevelDetailProps> = ({ levelData }) => {
    const navigate = useNavigate();
    const { isLessonCompleted } = useProgress();
    const { entitlements, loading: entitlementsLoading } = useEntitlements();
    const [showSearch, setShowSearch] = useState(false);

    // Hard paywall: levels the user's tier doesn't include show an upgrade
    // screen instead of the lessons (distinct from the sequential progress lock).
    if (!entitlementsLoading && !canAccessLevel(entitlements, levelData.id)) {
        // Graduation framing when every lesson of the previous level is done
        // (mirrors the LessonView paywall).
        const prevLevelIds =
            levelData.id === 'intermediate' ? getBeginnerLessonIds()
            : levelData.id === 'advanced' ? getIntermediateLessonIds()
            : [];
        const graduated = prevLevelIds.length > 0 && prevLevelIds.every((lid) => isLessonCompleted(lid));
        return (
            <UpgradePaywall
                levelTitle={levelData.title}
                teaser={levelData.modules.map((m) => m.title)}
                completedContext={
                    graduated
                        ? {
                              completedLevelTitle:
                                  levelData.id === 'advanced' ? 'Nivel Intermedio' : 'Nivel Principiante',
                              lessonsCompleted: prevLevelIds.length,
                              xp: prevLevelIds.length * 100,
                          }
                        : undefined
                }
                onUpgrade={() => navigate('/education?upgrade=inversor')}
                onBack={() => navigate('/education')}
            />
        );
    }

    // Calculate progress
    const completedCount = levelData.modules.reduce((acc, module) => {
        return acc + module.lessons.filter(lesson => isLessonCompleted(lesson.id)).length;
    }, 0);

    const totalLessons = levelData.modules.reduce((acc, module) => acc + module.lessons.length, 0);
    const progressPercentage = Math.round((completedCount / totalLessons) * 100);

    // Build a lookup for lesson titles (for prerequisite display)
    const allLessons = getAllLessonsOrdered();
    const lessonTitleMap = new Map(allLessons.map(l => [l.id, l.title]));

    // Platform-wide progress for the shared navbar.
    const globalCompleted = allLessons.filter(l => isLessonCompleted(l.id)).length;
    const globalProgress = allLessons.length ? Math.round((globalCompleted / allLessons.length) * 100) : 0;

    // Precompute the starting lesson index for each module so we can render
    // absolute lesson numbers ("Lesson N of totalLessons") without mutating
    // state during render.
    const moduleStartIndices: number[] = [];
    {
        let runningIndex = 0;
        for (const module of levelData.modules) {
            moduleStartIndices.push(runningIndex);
            runningIndex += module.lessons.length;
        }
    }

    return (
        <>
            <EducationNavbar
                globalProgress={globalProgress}
                onOpenProgress={() => navigate('/education')}
                onOpenSearch={() => setShowSearch(true)}
                currentView={`level-${levelData.id}` as 'level-beginner' | 'level-intermediate' | 'level-advanced'}
            />
            <LessonSearch isOpen={showSearch} onClose={() => setShowSearch(false)} />
            <main id="contenido" tabIndex={-1} className="min-h-screen bg-navy-950 pb-20 outline-none">
            {/* Header */}
            <div className="bg-navy-900 border-b border-white/5 pt-12 pb-12">
                <div className="container max-w-5xl mx-auto px-6">
                    <nav aria-label="Ruta de navegación" className="flex items-center text-xs font-black uppercase tracking-widest text-navy-400 mb-8">
                        <button onClick={() => navigate('/')} className="hover:text-brand-500 transition-colors">Inicio</button>
                        <ChevronLeft size={14} className="mx-2 rotate-180 text-navy-600" aria-hidden="true" />
                        <button onClick={() => navigate('/education')} className="hover:text-brand-500 transition-colors">Plataforma</button>
                        <ChevronLeft size={14} className="mx-2 rotate-180 text-navy-600" aria-hidden="true" />
                        <span className="text-brand-500">Nivel {LEVEL_LABELS[levelData.id] ?? levelData.id}</span>
                    </nav>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="text-brand-500 font-bold tracking-wider uppercase text-sm mb-2 block">Nivel {LEVEL_LABELS[levelData.id] ?? levelData.id}</span>
                            <h1 className="text-4xl font-bold text-white mb-4">{levelData.title}</h1>
                            <p className="text-navy-400 max-w-2xl text-lg">{levelData.description}</p>
                        </div>

                        <div className="bg-navy-800/50 p-5 rounded-2xl border border-navy-700 min-w-[220px]">
                            <div className="flex justify-between text-sm mb-3">
                                <span className="text-navy-400">Progreso</span>
                                <span className="text-brand-400 font-bold">{progressPercentage}%</span>
                            </div>
                            <div className="w-full h-2 bg-navy-900 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full transition-all duration-700 ease-out"
                                    style={{ width: `${progressPercentage}%` }}
                                />
                            </div>
                            <p className="text-xs text-navy-400 mt-2 text-center">{completedCount} de {totalLessons} lecciones</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modules List */}
            <div className="container max-w-5xl mx-auto px-6 py-12">
                <div className="space-y-8">
                    {levelData.modules.map((module, moduleIdx) => {
                        let firstAvailableFound = false;
                        const moduleStartIndex = moduleStartIndices[moduleIdx];

                        return (
                        <div key={module.id} className="animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${moduleIdx * 100}ms` }}>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center text-sm text-navy-400 border border-navy-700">
                                    {moduleIdx + 1}
                                </span>
                                {module.title}
                            </h3>

                            <div className="grid gap-4">
                                {module.lessons.map((lesson, lessonIdx) => {
                                    const lessonIndex = moduleStartIndex + lessonIdx;

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
                                            className={`group flex items-center gap-4 p-4 bg-navy-900/50 border border-navy-800 rounded-xl transition-all text-left ${
                                                isLocked
                                                    ? 'opacity-50 cursor-not-allowed'
                                                    : 'hover:bg-navy-900 hover:border-brand-500/30'
                                            }`}
                                        >
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                                                isCompleted
                                                    ? 'bg-green-500/10 text-green-500'
                                                    : isLocked
                                                    ? 'bg-navy-800 text-navy-400'
                                                    : 'bg-navy-800 text-navy-400 group-hover:bg-brand-500/10 group-hover:text-brand-500'
                                                }`}>
                                                {isCompleted ? <CheckCircle size={20} /> : isLocked ? <Lock size={20} /> : <PlayCircle size={20} />}
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className={`font-bold transition-colors ${
                                                        isCompleted
                                                            ? 'text-navy-300'
                                                            : isLocked
                                                            ? 'text-navy-400'
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
                                                <div className="flex items-center gap-4 text-xs text-navy-400">
                                                    <span>Lección {lessonIndex + 1} de {totalLessons}</span>
                                                    <span className="flex items-center gap-1"><Clock size={12} /> {lesson.duration}</span>
                                                    {isLocked && prevId ? (
                                                        <span className="text-navy-400">
                                                            Completa &quot;{lessonTitleMap.get(prevId)}&quot; para desbloquear
                                                        </span>
                                                    ) : isLocked ? (
                                                        <span className="flex items-center gap-1 text-navy-400"><Lock size={12} /> Bloqueada</span>
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
                    })}
                </div>
            </div>
            </main>
        </>
    );
};

export default LevelDetail;