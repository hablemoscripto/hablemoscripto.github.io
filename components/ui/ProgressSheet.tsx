import React from 'react';
import { Modal } from './Modal';
import {
  getAllLessonsOrdered,
  getLessonIdsForLevel,
  type CourseLevelId,
} from '../../utils/courseUtils';
import { BEGINNER_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL } from '../../data/levels';

const LEVEL_ROWS: { id: CourseLevelId; title: string; color: string }[] = [
  { id: 'beginner', title: BEGINNER_LEVEL.title, color: 'bg-brand-500' },
  { id: 'intermediate', title: INTERMEDIATE_LEVEL.title, color: 'bg-emerald-500' },
  { id: 'advanced', title: ADVANCED_LEVEL.title, color: 'bg-brand-300' },
];

interface ProgressSheetProps {
  isOpen: boolean;
  onClose: () => void;
  isLessonCompleted: (lessonId: number) => boolean;
}

const ProgressSheet: React.FC<ProgressSheetProps> = ({ isOpen, onClose, isLessonCompleted }) => {
  const allLessons = getAllLessonsOrdered();
  const completedCount = allLessons.filter((l) => isLessonCompleted(l.id)).length;
  const globalPercentage = allLessons.length
    ? Math.round((completedCount / allLessons.length) * 100)
    : 0;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Tu progreso" maxWidth="max-w-md">
      <div className="space-y-6">
        <div className="text-center p-6 bg-navy-950 rounded-xl border border-navy-800">
          <div className="relative w-28 h-28 mx-auto mb-4">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                className="text-navy-800"
              />
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="url(#progress-sheet-gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 42}`}
                strokeDashoffset={`${2 * Math.PI * 42 * (1 - globalPercentage / 100)}`}
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="progress-sheet-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
            {completedCount} de {allLessons.length} lecciones completadas
          </p>
        </div>

        <div className="space-y-4">
          {LEVEL_ROWS.map((level) => {
            const ids = getLessonIdsForLevel(level.id);
            const current = ids.filter((id) => isLessonCompleted(id)).length;
            return (
              <div key={level.id} className="flex flex-col gap-1">
                <div className="flex justify-between text-xs font-medium text-navy-300">
                  <span>{level.title}</span>
                  <span>
                    {current}/{ids.length}
                  </span>
                </div>
                <div className="w-full h-2 bg-navy-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${level.color} transition-all duration-500`}
                    style={{ width: `${ids.length > 0 ? (current / ids.length) * 100 : 0}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default ProgressSheet;
