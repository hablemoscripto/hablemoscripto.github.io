import React from 'react';
import { Sparkles, CheckCircle, AlertCircle, Trophy, ArrowRight } from 'lucide-react';
import { useDailyReview } from '../../hooks/useDailyReview';

/**
 * Daily review card — surfaces one question from a completed lesson to
 * trigger the testing effect (Roediger & Karpicke 2006). Shown on
 * /education for users with 3+ completed lessons, once per day.
 *
 * Deliberately gentle: no streak pressure, no nagging. Dismissible.
 */
const DailyReviewCard: React.FC = () => {
  const { status, question, selectedIndex, isCorrect, answer, dismissUntilTomorrow } =
    useDailyReview();

  if (status === 'hidden') return null;

  // Compact "already reviewed today" banner
  if (status === 'done-today') {
    return (
      <div className="container max-w-7xl mx-auto px-6 mt-6">
        <div className="flex items-center gap-3 px-4 py-3 bg-navy-900/60 border border-emerald-500/20 rounded-2xl">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center shrink-0">
            <Trophy size={16} className="text-emerald-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white font-medium">Ya revisaste hoy</p>
            <p className="text-xs text-navy-400">Mañana vuelve otra pregunta para reforzar lo que sabes.</p>
          </div>
        </div>
      </div>
    );
  }

  // status is 'idle' or 'answered' — need question
  if (!question) return null;

  return (
    <div className="container max-w-7xl mx-auto px-6 mt-6">
      <div className="rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-500/10 to-brand-500/5 overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 flex items-center gap-3 bg-brand-500/10 border-b border-brand-500/20">
          <div className="w-9 h-9 rounded-lg bg-brand-500/20 flex items-center justify-center shrink-0">
            <Sparkles size={18} className="text-brand-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs uppercase tracking-wider text-brand-400 font-bold">Repaso del día</p>
            <p className="text-xs text-navy-400 truncate">
              Una pregunta rápida de <span className="text-navy-200 font-medium">{question.lessonTitle}</span>
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          <p className="text-white font-medium leading-relaxed">{question.question}</p>

          {/* Options */}
          <div className="space-y-2">
            {question.options.map((opt, optIdx) => {
              const isSelected = selectedIndex === optIdx;
              const isCorrectOption = optIdx === question.correctIndex;
              const submitted = selectedIndex !== null;

              let className = 'w-full p-3 rounded-lg text-left border transition-all flex items-center gap-3 text-sm ';
              if (submitted) {
                if (isCorrectOption) {
                  className += 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400';
                } else if (isSelected) {
                  className += 'bg-red-500/10 border-red-500/50 text-red-400';
                } else {
                  className += 'bg-navy-950 border-navy-800 text-navy-500 opacity-50';
                }
              } else {
                className += 'bg-navy-950 border-navy-800 text-navy-300 hover:border-brand-500/50 hover:bg-navy-900 cursor-pointer';
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => answer(optIdx)}
                  disabled={submitted}
                  className={className}
                >
                  <span
                    className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold shrink-0 ${
                      submitted && isCorrectOption
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : submitted && isSelected
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-navy-800 text-navy-400'
                    }`}
                  >
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span className="flex-1">{opt}</span>
                  {submitted && isCorrectOption && <CheckCircle size={16} className="text-emerald-500 shrink-0" />}
                  {submitted && isSelected && !isCorrectOption && <AlertCircle size={16} className="text-red-500 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {status === 'answered' && question.explanation && (
            <div
              className={`rounded-lg p-3 text-sm flex items-start gap-2 animate-in fade-in slide-in-from-top-2 ${
                isCorrect
                  ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-300'
                  : 'bg-brand-500/10 border border-brand-500/20 text-brand-300'
              }`}
            >
              {isCorrect ? (
                <CheckCircle size={16} className="shrink-0 mt-0.5" />
              ) : (
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
              )}
              <span className="leading-relaxed">{question.explanation}</span>
            </div>
          )}

          {/* Done state CTA */}
          {status === 'answered' && (
            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-navy-400">Mañana te espera otra pregunta.</p>
              <button
                onClick={dismissUntilTomorrow}
                className="flex items-center gap-2 px-4 py-2 bg-brand-500 hover:bg-brand-400 text-navy-950 text-sm font-bold rounded-lg transition-all active:scale-[0.98]"
              >
                Hasta mañana
                <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyReviewCard;
