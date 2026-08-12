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
  prerequisiteTitle?: string;
  prerequisiteProgress?: number;
  prerequisiteLessonsRemaining?: number;
  requiresUpgrade?: boolean;
  onUpgrade?: () => void;
}

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const LevelCard: React.FC<LevelCardProps> = ({
  levelNumber,
  title,
  subtitle,
  description,
  tags,
  lessonCount,
  completedCount,
  progress,
  color,
  icon: Icon,
  isLocked,
  onAction,
  className,
  prerequisiteTitle,
  prerequisiteProgress,
  prerequisiteLessonsRemaining,
  requiresUpgrade,
  onUpgrade,
}) => {
  const iconColor = {
    brand: 'text-brand-500',
    emerald: 'text-emerald-400',
    gold: 'text-brand-300',
  };

  const btnColors = {
    brand: 'bg-brand-500 hover:bg-brand-400 text-navy-950',
    emerald: 'bg-emerald-500 hover:bg-emerald-400 text-navy-950',
    gold: 'bg-brand-300 hover:bg-brand-200 text-navy-950',
  };

  return (
    <div
      className={cn(
        // An owned-but-progress-gated level (isLocked) stays full color and
        // inviting; only a not-purchased level (requiresUpgrade) is dimmed.
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-900 transition-colors hover:border-white/15 hover:bg-navy-800/90',
        requiresUpgrade ? 'opacity-80' : '',
        className
      )}
    >
      <div className="relative flex flex-1 flex-col p-8">
        <div className="mb-6 flex items-start justify-between">
          <div
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-navy-950',
              requiresUpgrade ? 'text-navy-400' : iconColor[color]
            )}
          >
            {requiresUpgrade ? <Lock size={22} aria-hidden="true" /> : <Icon size={24} aria-hidden="true" />}
          </div>

          <div className="relative flex h-12 w-12 items-center justify-center">
            <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 48 48" aria-hidden="true">
              <circle cx="24" cy="24" r="20" className="stroke-navy-950" strokeWidth="4" fill="none" />
              <circle
                cx="24"
                cy="24"
                r="20"
                className={cn(
                  'transition-all duration-700 ease-out',
                  requiresUpgrade ? 'stroke-navy-800' : 'stroke-current'
                )}
                strokeWidth="4"
                fill="none"
                strokeDasharray={125.6}
                strokeDashoffset={125.6 - (125.6 * progress) / 100}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-[11px] font-bold text-white">{progress}%</span>
          </div>
        </div>

        <div className="mb-3 flex flex-col">
          <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy-400">
            Nivel {levelNumber}
          </span>
          <h3 className="font-heading text-2xl font-bold tracking-tight text-white">{title}</h3>
        </div>
        <p className="mb-4 text-sm font-semibold text-brand-400">{subtitle}</p>

        <p className="mb-6 min-h-[60px] text-sm leading-relaxed text-navy-300">{description}</p>

        {tags.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-white/5 bg-navy-950 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mb-6 flex items-center justify-between rounded-xl border border-white/5 bg-navy-950/50 px-4 py-3">
          <span className="text-xs font-semibold text-navy-200">
            {completedCount} / {lessonCount} completadas
          </span>
          {progress === 100 && <CheckCircle size={18} className="text-accent-500" aria-hidden="true" />}
        </div>

        <div className="mt-auto">
          {requiresUpgrade ? (
            <div className="space-y-3">
              <p className="text-center text-xs font-semibold text-navy-400">
                Incluido en <span className="text-brand-400">Inversor</span> y{' '}
                <span className="text-brand-400">Cripto Experto</span>
              </p>
              <button
                type="button"
                onClick={onUpgrade}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-3.5 text-sm font-bold text-navy-950 transition-colors hover:bg-brand-400"
              >
                <Lock size={16} aria-hidden="true" /> Desbloquear
              </button>
            </div>
          ) : isLocked && prerequisiteTitle ? (
            <div className="space-y-4 rounded-xl border border-brand-500/15 bg-navy-950 p-5">
              <div className="flex items-start gap-3 text-xs text-navy-300">
                <PlayCircle size={16} className="mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />
                <span className="leading-relaxed font-semibold">
                  Disponible al completar <span className="text-brand-400">{prerequisiteTitle}</span>
                </span>
              </div>

              {prerequisiteProgress !== undefined && (
                <div className="space-y-2">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-navy-800">
                    <div
                      className="h-full rounded-full bg-brand-500 transition-all duration-700"
                      style={{ width: `${prerequisiteProgress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-wide text-navy-400">
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
              type="button"
              onClick={onAction}
              disabled={isLocked}
              className={cn(
                'flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-colors',
                isLocked
                  ? 'cursor-not-allowed bg-navy-900 text-navy-400'
                  : progress === 100
                    ? 'bg-accent-500 text-white hover:bg-accent-600'
                    : btnColors[color]
              )}
            >
              {isLocked ? (
                <>
                  <Lock size={16} aria-hidden="true" /> Bloqueado
                </>
              ) : progress === 100 ? (
                <>
                  <CheckCircle size={16} aria-hidden="true" /> Repasar nivel
                </>
              ) : progress > 0 ? (
                <>
                  <PlayCircle size={16} aria-hidden="true" /> Continuar
                </>
              ) : (
                <>
                  <PlayCircle size={16} aria-hidden="true" /> Comenzar
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LevelCard;
