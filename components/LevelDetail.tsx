import React from 'react';
import { ChevronLeft, Lock, CheckCircle, PlayCircle, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import { LevelData } from '../data/courseData';
import { getPreviousLessonId } from '../utils/courseUtils';

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

                        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 min-w-[200px]">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-slate-300">Progreso</span>
                                <span className="text-white font-bold">{progressPercentage}%</span>
                            </div>
                            <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-brand-500 transition-all duration-500"
                                    style={{ width: `${progressPercentage}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-slate-500 mt-2 text-center">{completedCount} de {totalLessons} lecciones</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modules List */}
            <div className="container max-w-5xl mx-auto px-6 py-12">
                <div className="space-y-8">
                    {levelData.modules.map((module, moduleIdx) => (
                        <div key={module.id} className="animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${moduleIdx * 100}ms` }}>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-sm text-slate-400 border border-slate-700">
                                    {moduleIdx + 1}
                                </span>
                                {module.title}
                            </h3>

                            <div className="grid gap-4">
                                {module.lessons.map((lesson, lessonIdx) => {
                                    const isCompleted = isLessonCompleted(lesson.id);

                                    // Check if previous lesson is completed (sequential locking)
                                    const prevId = getPreviousLessonId(lesson.id);
                                    const isPreviousCompleted = prevId === null || isLessonCompleted(prevId);
                                    const isLocked = !isPreviousCompleted && !isLessonCompleted(lesson.id);

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
                                                <h4 className={`font-bold mb-1 transition-colors ${
                                                    isCompleted
                                                        ? 'text-slate-300'
                                                        : isLocked
                                                        ? 'text-slate-600'
                                                        : 'text-white group-hover:text-brand-400'
                                                }`}>
                                                    {lesson.title}
                                                </h4>
                                                <div className={`flex items-center gap-4 text-xs ${isLocked ? 'text-slate-700' : 'text-slate-500'}`}>
                                                    <span className="flex items-center gap-1"><Clock size={12} /> {lesson.duration}</span>
                                                    <span>Lección {lesson.id}</span>
                                                    {isLocked && <span className="flex items-center gap-1 text-slate-600"><Lock size={12} /> Bloqueada</span>}
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LevelDetail;