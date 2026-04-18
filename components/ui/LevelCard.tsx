import React from 'react';
import { Lock, CheckCircle, PlayCircle, LucideIcon } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface LevelCardProps {
    levelNumber: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    lessonCount: number;
    completedCount: number;
    progress: number;
    color: 'brand' | 'emerald' | 'gold';
    icon: LucideIcon;
    isLocked: boolean;
    onAction: () => void;
    className?: string;
    // Prerequisite info for locked levels
    prerequisiteTitle?: string;
    prerequisiteProgress?: number;
    prerequisiteLessonsRemaining?: number;
}

export function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

const LevelCard: React.FC<LevelCardProps> = ({
    levelNumber, title, subtitle, description, tags, lessonCount, completedCount, progress, color, icon: Icon, isLocked, onAction, className,
    prerequisiteTitle, prerequisiteProgress, prerequisiteLessonsRemaining
}) => {

    const colorClasses = {
        brand: 'text-brand-500 group-hover:border-brand-500/50 shadow-glow-brand/10',
        emerald: 'text-emerald-400 group-hover:border-emerald-500/50 shadow-emerald-500/10',
        gold: 'text-brand-300 group-hover:border-brand-300/50 shadow-brand-300/10',
    };

    const btnColors = {
        brand: 'bg-brand-500 hover:bg-brand-400 text-navy-950 shadow-glow-brand',
        emerald: 'bg-emerald-500 hover:bg-emerald-400 text-navy-950 shadow-glow-accent',
        gold: 'bg-brand-300 hover:bg-brand-200 text-navy-950 shadow-[0_0_20px_rgba(252,211,77,0.3)]',
    };

    return (
        <div className={cn(
            "group relative bg-navy-900 rounded-4xl border border-white/5 p-0 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-glass hover:bg-navy-800",
            isLocked ? 'opacity-70 grayscale-[0.5]' : '',
            className
        )}>
            {/* Top Pattern Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-7xl pointer-events-none"></div>

            {/* Header */}
            <div className="p-10 relative">
                <div className="flex justify-between items-start mb-8">
                    <div className={cn(
                        "w-14 h-14 rounded-2xl bg-navy-950 border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-white/10 shadow-glass",
                        isLocked ? 'text-navy-500' : colorClasses[color].split(' ')[0]
                    )}>
                        {isLocked ? <Lock size={24} /> : <Icon size={28} />}
                    </div>

                    {/* Circular Progress Mini */}
                    <div className="relative w-14 h-14 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="28" cy="28" r="24" className="stroke-navy-950" strokeWidth="5" fill="none" />
                            <circle
                                cx="28" cy="28" r="24"
                                className={cn(
                                    "transition-all duration-1000 ease-out",
                                    isLocked ? 'stroke-navy-800' : `stroke-current`
                                )}
                                strokeWidth="5"
                                fill="none"
                                strokeDasharray={150.8}
                                strokeDashoffset={150.8 - (150.8 * progress) / 100}
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="absolute text-[11px] font-black text-white">{progress}%</span>
                    </div>
                </div>

                <div className="flex flex-col mb-4">
                    <span className="text-[10px] font-black tracking-[0.3em] text-navy-400 uppercase mb-2">Módulo {levelNumber}</span>
                    <h3 className="text-3xl font-black text-white tracking-tighter uppercase">{title}</h3>
                </div>
                <p className="text-brand-500 text-sm font-black uppercase tracking-widest mb-6">{subtitle}</p>

                <p className="text-navy-300 text-sm leading-relaxed mb-8 min-h-[60px] font-medium">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 rounded-xl bg-navy-950 border border-white/5 text-[10px] font-black uppercase tracking-widest text-navy-400 group-hover:text-navy-200 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between p-4 bg-navy-950/50 rounded-2xl border border-white/5 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
                        <span className="text-xs font-bold text-navy-200">{completedCount} / {lessonCount} completadas</span>
                    </div>
                    {progress === 100 && <CheckCircle size={18} className="text-accent-500" />}
                </div>

                {isLocked && prerequisiteTitle ? (
                    <div className="space-y-4 p-6 bg-navy-950 rounded-3xl border border-white/5">
                        <div className="flex items-start gap-3 text-navy-400 text-xs">
                            <Lock size={16} className="text-navy-600 shrink-0 mt-0.5" />
                            <span className="leading-relaxed font-bold uppercase tracking-tight">
                                Bloqueado hasta completar <span className="text-brand-500">{prerequisiteTitle}</span>
                            </span>
                        </div>

                        {prerequisiteProgress !== undefined && (
                            <div className="space-y-2">
                                <div className="w-full h-2 bg-navy-800 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-brand-500 rounded-full transition-all duration-700"
                                        style={{ width: `${prerequisiteProgress}%` }}
                                    />
                                </div>
                                <div className="flex justify-between text-[10px] font-black text-navy-500 uppercase tracking-widest">
                                    <span>{prerequisiteProgress}% progreso</span>
                                    {prerequisiteLessonsRemaining !== undefined && (
                                        <span>{prerequisiteLessonsRemaining} restantes</span>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <button
                        onClick={onAction}
                        disabled={isLocked}
                        className={cn(
                            "w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all duration-300 group-hover:scale-[1.02] active:scale-[0.98]",
                            isLocked
                                ? 'bg-navy-900 text-navy-600 cursor-not-allowed'
                                : progress === 100
                                    ? 'bg-accent-500 text-white shadow-glow-accent'
                                    : btnColors[color]
                        )}
                    >
                        {isLocked ? (
                            <>
                                <Lock size={18} /> Bloqueado
                            </>
                        ) : progress === 100 ? (
                            <>
                                <CheckCircle size={18} /> Repasar Nivel
                            </>
                        ) : progress > 0 ? (
                            <>
                                <PlayCircle size={18} /> Continuar
                            </>
                        ) : (
                            <>
                                <PlayCircle size={18} /> Comenzar
                            </>
                        )}
                    </button>
                )}
            </div>
        </div>
    );
}

export default LevelCard;
