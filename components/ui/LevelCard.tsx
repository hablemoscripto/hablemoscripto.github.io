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
    color: 'brand' | 'indigo' | 'rose';
    icon: LucideIcon;
    isLocked: boolean;
    onAction: () => void;
    className?: string;
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
        brand: { accent: 'text-brand-500', bg: 'bg-brand-500/10', border: 'hover:border-brand-500/30', line: 'bg-brand-500' },
        indigo: { accent: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'hover:border-indigo-500/30', line: 'bg-indigo-500' },
        rose: { accent: 'text-rose-400', bg: 'bg-rose-500/10', border: 'hover:border-rose-500/30', line: 'bg-rose-500' },
    };

    const btnColors = {
        brand: 'bg-brand-500 hover:bg-brand-400 text-white',
        indigo: 'bg-indigo-500 hover:bg-indigo-400 text-white',
        rose: 'bg-rose-500 hover:bg-rose-400 text-white',
    };

    const colors = colorClasses[color];

    return (
        <div className={cn(
            "group relative bg-surface-1 rounded-2xl border border-surface-border overflow-hidden transition-all duration-300 hover:-translate-y-1",
            !isLocked && colors.border,
            isLocked ? 'opacity-70' : '',
            className
        )}>
            {/* Top accent line */}
            <div className={cn("h-0.5", isLocked ? 'bg-surface-border' : colors.line)}></div>

            {/* Header */}
            <div className="p-6 lg:p-8">
                <div className="flex justify-between items-start mb-6">
                    <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center",
                        isLocked ? 'bg-surface-3 text-slate-500' : cn(colors.bg, colors.accent)
                    )}>
                        {isLocked ? <Lock size={20} /> : <Icon size={24} />}
                    </div>

                    {/* Circular Progress Mini */}
                    <div className="relative w-12 h-12 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="24" cy="24" r="20" className="stroke-surface-border" strokeWidth="4" fill="none" />
                            <circle
                                cx="24" cy="24" r="20"
                                className={isLocked ? 'stroke-surface-border-hover' : `stroke-current ${colors.accent}`}
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

                <div className="mb-2">
                    <span className={cn("text-xs font-bold tracking-widest uppercase", isLocked ? 'text-slate-500' : colors.accent)}>{levelNumber} — {subtitle}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 min-h-[60px]">
                    {description}
                </p>

                <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
                    <span className="font-bold text-slate-300">{completedCount}</span>
                    <span>/</span>
                    <span>{lessonCount} lecciones</span>
                </div>

                {isLocked && prerequisiteTitle ? (
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <Lock size={14} className="text-slate-500" />
                            <span>
                                Completa <span className="text-brand-400 font-medium">{prerequisiteTitle}</span> para desbloquear
                            </span>
                        </div>

                        {prerequisiteProgress !== undefined && (
                            <div className="space-y-1.5">
                                <div className="w-full h-1.5 bg-surface-3 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-brand-500 rounded-full transition-all duration-500"
                                        style={{ width: `${prerequisiteProgress}%` }}
                                    />
                                </div>
                                <div className="flex justify-between text-xs text-slate-500">
                                    <span>{prerequisiteProgress}% completado</span>
                                    {prerequisiteLessonsRemaining !== undefined && (
                                        <span>{prerequisiteLessonsRemaining} lecciones restantes</span>
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
                            "w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all",
                            isLocked
                                ? 'bg-surface-3 text-slate-500 cursor-not-allowed'
                                : progress === 100
                                    ? 'bg-green-500 text-white'
                                    : btnColors[color]
                        )}
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
                )}
            </div>
        </div>
    );
}

export default LevelCard;
