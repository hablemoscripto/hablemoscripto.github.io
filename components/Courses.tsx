import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LEVEL_SUMMARIES } from '../data/landingCopy';
import { ADVANCED_LEVEL, BEGINNER_LEVEL, INTERMEDIATE_LEVEL } from '../data/levels';

type AccessKind = 'free' | 'paid';

interface CourseCardProps {
  title: string;
  subtitle: string;
  description: string;
  modules: string[];
  lessonCount: number;
  duration: string;
  icon: React.ElementType;
  access: AccessKind;
  badge: string;
  ctaLabel: string;
  onCta: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  subtitle,
  description,
  modules,
  lessonCount,
  duration,
  icon: Icon,
  access,
  badge,
  ctaLabel,
  onCta,
}) => {
  const isFree = access === 'free';

  return (
    <div
      className={`flex h-full flex-col rounded-2xl border bg-navy-900 p-7 ${
        isFree ? 'border-brand-500/40' : 'border-white/10'
      }`}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-brand-400">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <span
          className={`shrink-0 rounded-lg border px-3 py-1.5 text-xs font-bold ${
            isFree
              ? 'border-brand-500/30 bg-brand-500/10 text-brand-300'
              : 'border-white/10 bg-navy-800 text-navy-300'
          }`}
        >
          {badge}
        </span>
      </div>

      <p className="mb-2 text-sm font-semibold text-brand-400">{subtitle}</p>
      <h3 className="font-heading text-2xl font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-navy-300">{description}</p>
      <p className="mt-5 text-sm font-semibold text-white">
        {lessonCount} lecciones · {duration}
      </p>

      <ul className="mb-8 mt-6 space-y-3">
        {modules.map((module) => (
          <li key={module} className="flex items-start gap-2 text-sm text-navy-200">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
            <span>{module}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onCta}
        aria-label={`${ctaLabel}: ${title}`}
        className={`mt-auto flex min-h-11 w-full items-center justify-center rounded-xl px-5 py-3 font-bold transition-colors ${
          isFree
            ? 'bg-brand-500 text-navy-950 hover:bg-brand-400'
            : 'border border-white/15 bg-navy-800 text-white hover:border-brand-500/40 hover:bg-navy-700'
        }`}
      >
        {ctaLabel}
      </button>
    </div>
  );
};

const Courses: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleStartFree = () => {
    if (user) {
      navigate('/education');
    } else {
      navigate('/?showAuth=true');
    }
  };

  const handleViewPlans = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('pricing')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };

  const levels = [BEGINNER_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL];
  const courses: Omit<CourseCardProps, 'onCta'>[] = levels.map((level) => {
    const access: AccessKind = level.id === 'beginner' ? 'free' : 'paid';
    const summary = LEVEL_SUMMARIES[level.id as keyof typeof LEVEL_SUMMARIES];
    return {
      title: level.title,
      subtitle: summary.subtitle,
      description: summary.description,
      modules: level.modules.map((module) => module.title),
      lessonCount: level.modules.reduce((sum, module) => sum + module.lessons.length, 0),
      duration: level.stats.duration,
      icon: level.modules[0].icon,
      access,
      badge: access === 'free' ? 'Gratis' : 'Planes pagos',
      ctaLabel: access === 'free' ? 'Empezar gratis' : 'Ver planes',
    };
  });

  const freeLessonCount = BEGINNER_LEVEL.modules.reduce(
    (sum, module) => sum + module.lessons.length,
    0
  );

  return (
    <section id="courses" className="bg-navy-950 py-16 scroll-mt-28 md:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl md:mb-16">
          <p className="mb-4 text-sm font-bold text-brand-400">Plan de estudio</p>
          <h2 className="font-heading text-4xl font-bold text-white md:text-5xl">
            Tres niveles, una secuencia completa
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            Empieza con {freeLessonCount} lecciones gratuitas. Cuando quieras continuar, los niveles
            Intermedio y Avanzado amplían la ruta con análisis, riesgo y DeFi.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              {...course}
              onCta={course.access === 'free' ? handleStartFree : handleViewPlans}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
