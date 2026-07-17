import React, { useState, useMemo, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
    CheckCircle,
    AlertCircle,
    ArrowRight,
    ArrowLeft,
    Lightbulb,
    RotateCcw,
    Trophy,
    Target,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

import type {
    MultipleChoiceQuestion,
    TrueFalseQuestion,
    MultipleSelectQuestion,
    OrderingQuestion,
    FillBlankQuestion,
    Question,
    LegacyQuestion,
    QuizProps,
} from './types';

// ============================================
// HELPER FUNCTIONS
// ============================================

function normalizeQuestion(q: Question | LegacyQuestion): Question {
    // If it already has a type field, it's the new format
    if ('type' in q && q.type) {
        return q as Question;
    }
    // Convert legacy format to multiple-choice
    return {
        ...q,
        type: 'multiple-choice',
        options: (q as LegacyQuestion).options,
        correctAnswer: (q as LegacyQuestion).correctAnswer,
    } as MultipleChoiceQuestion;
}

type QuizAnswer = number | boolean | number[] | string | null | undefined;

interface QuizDraft {
    answers: Record<string, QuizAnswer>;
    index: number;
}

function loadQuizDraft(key: string | undefined, questions: Question[]): QuizDraft {
    const empty: QuizDraft = { answers: {}, index: 0 };
    if (!key || typeof window === 'undefined') return empty;
    try {
        const raw = window.sessionStorage.getItem(key);
        if (!raw) return empty;
        const parsed = JSON.parse(raw);
        // Only restore answers whose question ids still exist, so a stale draft
        // after a content edit can't inflate the answered count.
        const ids = new Set(questions.map(q => q.id));
        const answers: Record<string, QuizAnswer> = {};
        for (const [id, a] of Object.entries(parsed?.answers ?? {})) {
            if (ids.has(id)) answers[id] = a as QuizAnswer;
        }
        const index =
            Number.isInteger(parsed?.index) && parsed.index >= 0 && parsed.index < questions.length
                ? (parsed.index as number)
                : 0;
        return { answers, index };
    } catch {
        return empty;
    }
}

function clearQuizDraft(key: string | undefined) {
    if (!key || typeof window === 'undefined') return;
    try {
        window.sessionStorage.removeItem(key);
    } catch {
        // sessionStorage unavailable — nothing to clear
    }
}

// Deterministic permutation for ordering questions, seeded by question id so the
// scrambled start (and "Reiniciar orden") is stable across renders and reloads.
// Guaranteed to differ from the correct order; otherwise the question grades
// itself before the user touches it.
function scrambledOrder(count: number, correctOrder: number[], seed: string): number[] {
    let h = 2166136261;
    for (let i = 0; i < seed.length; i++) {
        h ^= seed.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    const next = () => {
        h ^= h << 13; h ^= h >>> 17; h ^= h << 5;
        return (h >>> 0) / 4294967296;
    };
    const order = Array.from({ length: count }, (_, i) => i);
    for (let attempt = 0; attempt < 10; attempt++) {
        for (let i = count - 1; i > 0; i--) {
            const j = Math.floor(next() * (i + 1));
            [order[i], order[j]] = [order[j], order[i]];
        }
        if (JSON.stringify(order) !== JSON.stringify(correctOrder)) return order;
    }
    // Pathological seed: rotate away from the correct order (count >= 2 given a
    // real ordering question).
    return [...correctOrder.slice(1), correctOrder[0]];
}

function isCorrect(question: Question, answer: QuizAnswer): boolean {
    switch (question.type) {
        case 'multiple-choice':
            return answer === question.correctAnswer;
        case 'true-false':
            return answer === question.correctAnswer;
        case 'multiple-select': {
            if (!Array.isArray(answer)) return false;
            const sortedAnswer = [...answer].sort();
            const sortedCorrect = [...question.correctAnswers].sort();
            return JSON.stringify(sortedAnswer) === JSON.stringify(sortedCorrect);
        }
        case 'ordering':
            return JSON.stringify(answer) === JSON.stringify(question.correctOrder);
        case 'fill-blank': {
            const userAnswer = (answer || '').toString().toLowerCase().trim();
            const correct = question.correctAnswer.toLowerCase().trim();
            const acceptable = question.acceptableAnswers?.map(a => a.toLowerCase().trim()) || [];
            return userAnswer === correct || acceptable.includes(userAnswer);
        }
        default:
            return false;
    }
}

// Keyboard handler for the WAI-ARIA radio pattern: arrow keys move selection and
// focus to the adjacent option (wrapping). Shared by the single-choice renderers.
function moveRadioFocus(
    e: React.KeyboardEvent<HTMLButtonElement>,
    currentIdx: number,
    count: number,
    select: (idx: number) => void,
) {
    let next: number | null = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = currentIdx === count - 1 ? 0 : currentIdx + 1;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = currentIdx === 0 ? count - 1 : currentIdx - 1;
    if (next === null) return;
    e.preventDefault();
    select(next);
    const group = e.currentTarget.parentElement;
    const radios = group?.querySelectorAll<HTMLButtonElement>('[role="radio"]');
    radios?.[next]?.focus();
}

// ============================================
// QUESTION COMPONENTS
// ============================================

interface QuestionComponentProps {
    question: Question;
    answer: QuizAnswer;
    onAnswer: (answer: QuizAnswer) => void;
    submitted: boolean;
    showHint: boolean;
    onToggleHint: () => void;
}

const MultipleChoiceRenderer: React.FC<QuestionComponentProps> = ({
    question, answer, onAnswer, submitted, showHint, onToggleHint
}) => {
    const q = question as MultipleChoiceQuestion;
    const selectedIdx = typeof answer === 'number' ? answer : null;

    return (
        <div className="space-y-3">
            <div role="radiogroup" aria-label="Opciones de respuesta" className="space-y-3">
            {q.options.map((opt, optIdx) => {
                let optionClass = "w-full p-4 rounded-xl text-left border transition-all flex items-center gap-3 group ";

                if (submitted) {
                    if (optIdx === q.correctAnswer) {
                        optionClass += "bg-emerald-500/10 border-emerald-500/50 text-emerald-400";
                    } else if (answer === optIdx) {
                        optionClass += "bg-red-500/10 border-red-500/50 text-red-400";
                    } else {
                        optionClass += "bg-navy-950 border-navy-800 text-navy-400 opacity-60";
                    }
                } else {
                    if (answer === optIdx) {
                        optionClass += "bg-brand-500/10 border-brand-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.15)]";
                    } else {
                        optionClass += "bg-navy-950 border-navy-800 text-navy-300 hover:border-navy-600 hover:bg-navy-900 cursor-pointer";
                    }
                }

                // Roving tabindex: the selected option (or the first when none is
                // selected) is the single tab stop; arrows move + select per the
                // WAI-ARIA radio pattern.
                const isTabStop = selectedIdx === optIdx || (selectedIdx === null && optIdx === 0);

                return (
                    <button
                        key={optIdx}
                        role="radio"
                        aria-checked={answer === optIdx}
                        tabIndex={submitted ? 0 : (isTabStop ? 0 : -1)}
                        onKeyDown={(e) => moveRadioFocus(e, optIdx, q.options.length, (i) => onAnswer(i))}
                        onClick={() => !submitted && onAnswer(optIdx)}
                        disabled={submitted}
                        className={optionClass}
                    >
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                            submitted && optIdx === q.correctAnswer ? 'bg-emerald-500/20 text-emerald-400' :
                            submitted && answer === optIdx ? 'bg-red-500/20 text-red-400' :
                            answer === optIdx ? 'bg-brand-500/20 text-brand-400' :
                            'bg-navy-800 text-navy-400'
                        }`}>
                            {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="flex-1">{opt}</span>
                        {submitted && optIdx === q.correctAnswer && <CheckCircle size={20} className="text-emerald-500 shrink-0" />}
                        {submitted && answer === optIdx && optIdx !== q.correctAnswer && <AlertCircle size={20} className="text-red-500 shrink-0" />}
                    </button>
                );
            })}
            </div>

            {/* Hint Button */}
            {q.hint && !submitted && (
                <button
                    onClick={onToggleHint}
                    className="flex items-center gap-2 min-h-11 px-1 text-sm text-navy-400 hover:text-brand-400 transition-colors mt-2"
                >
                    <Lightbulb size={16} />
                    {showHint ? 'Ocultar pista' : 'Ver pista'}
                </button>
            )}
            {showHint && q.hint && !submitted && (
                <div className="bg-brand-500/5 border border-brand-500/20 rounded-lg p-3 text-sm text-brand-300 flex items-start gap-2 animate-in fade-in slide-in-from-top-2">
                    <Lightbulb size={16} className="shrink-0 mt-0.5" />
                    {q.hint}
                </div>
            )}
        </div>
    );
};

const TrueFalseRenderer: React.FC<QuestionComponentProps> = ({
    question, answer, onAnswer, submitted, showHint, onToggleHint
}) => {
    const q = question as TrueFalseQuestion;
    const options = [
        { value: true, label: 'Verdadero', icon: '✓' },
        { value: false, label: 'Falso', icon: '✗' }
    ];

    const selectedIdx = options.findIndex((o) => o.value === answer);

    return (
        <div className="space-y-3">
            <div role="radiogroup" aria-label="Verdadero o Falso" className="grid grid-cols-2 gap-4">
                {options.map(({ value, label, icon }, optIdx) => {
                    let optionClass = "p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ";

                    if (submitted) {
                        if (value === q.correctAnswer) {
                            optionClass += "bg-emerald-500/10 border-emerald-500 text-emerald-400";
                        } else if (answer === value) {
                            optionClass += "bg-red-500/10 border-red-500 text-red-400";
                        } else {
                            optionClass += "bg-navy-950 border-navy-800 text-navy-400 opacity-60";
                        }
                    } else {
                        if (answer === value) {
                            optionClass += "bg-brand-500/10 border-brand-500 text-white";
                        } else {
                            optionClass += "bg-navy-950 border-navy-800 text-navy-300 hover:border-navy-600 cursor-pointer";
                        }
                    }

                    const isTabStop = selectedIdx === optIdx || (selectedIdx === -1 && optIdx === 0);

                    return (
                        <button
                            key={label}
                            role="radio"
                            aria-checked={answer === value}
                            tabIndex={submitted ? 0 : (isTabStop ? 0 : -1)}
                            onKeyDown={(e) => moveRadioFocus(e, optIdx, options.length, (i) => onAnswer(options[i].value))}
                            onClick={() => !submitted && onAnswer(value)}
                            disabled={submitted}
                            className={optionClass}
                        >
                            <span className="text-3xl" aria-hidden="true">{icon}</span>
                            <span className="font-bold">{label}</span>
                        </button>
                    );
                })}
            </div>

            {q.hint && !submitted && (
                <button
                    onClick={onToggleHint}
                    className="flex items-center gap-2 min-h-11 px-1 text-sm text-navy-400 hover:text-brand-400 transition-colors"
                >
                    <Lightbulb size={16} />
                    {showHint ? 'Ocultar pista' : 'Ver pista'}
                </button>
            )}
            {showHint && q.hint && !submitted && (
                <div className="bg-brand-500/5 border border-brand-500/20 rounded-lg p-3 text-sm text-brand-300 flex items-start gap-2 animate-in fade-in slide-in-from-top-2">
                    <Lightbulb size={16} className="shrink-0 mt-0.5" />
                    {q.hint}
                </div>
            )}
        </div>
    );
};

const MultipleSelectRenderer: React.FC<QuestionComponentProps> = ({
    question, answer, onAnswer, submitted, showHint, onToggleHint
}) => {
    const q = question as MultipleSelectQuestion;
    const selectedAnswers: number[] = Array.isArray(answer) ? answer as number[] : [];

    const toggleOption = (optIdx: number) => {
        if (submitted) return;
        const newAnswers = selectedAnswers.includes(optIdx)
            ? selectedAnswers.filter(a => a !== optIdx)
            : [...selectedAnswers, optIdx];
        onAnswer(newAnswers);
    };

    return (
        <div className="space-y-3">
            <div role="group" aria-label="Selecciona todas las respuestas correctas" className="space-y-3">
            {q.options.map((opt, optIdx) => {
                const isSelected = selectedAnswers.includes(optIdx);
                const isCorrectOption = q.correctAnswers.includes(optIdx);

                let optionClass = "w-full p-4 rounded-xl text-left border transition-all flex items-center gap-3 ";

                if (submitted) {
                    if (isCorrectOption && isSelected) {
                        optionClass += "bg-emerald-500/10 border-emerald-500/50 text-emerald-400";
                    } else if (isCorrectOption && !isSelected) {
                        optionClass += "bg-yellow-500/10 border-yellow-500/50 text-yellow-400";
                    } else if (!isCorrectOption && isSelected) {
                        optionClass += "bg-red-500/10 border-red-500/50 text-red-400";
                    } else {
                        optionClass += "bg-navy-950 border-navy-800 text-navy-400 opacity-60";
                    }
                } else {
                    if (isSelected) {
                        optionClass += "bg-brand-500/10 border-brand-500 text-white";
                    } else {
                        optionClass += "bg-navy-950 border-navy-800 text-navy-300 hover:border-navy-600 cursor-pointer";
                    }
                }

                return (
                    <button
                        key={optIdx}
                        role="checkbox"
                        aria-checked={isSelected}
                        onClick={() => toggleOption(optIdx)}
                        disabled={submitted}
                        className={optionClass}
                    >
                        <span className={`w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 transition-all ${
                            isSelected ? 'bg-brand-500 border-brand-500' : 'border-navy-600'
                        }`}>
                            {isSelected && <CheckCircle size={14} className="text-navy-900" />}
                        </span>
                        <span className="flex-1">{opt}</span>
                        {submitted && isCorrectOption && <CheckCircle size={18} className="text-emerald-500 shrink-0" />}
                        {submitted && !isCorrectOption && isSelected && <AlertCircle size={18} className="text-red-500 shrink-0" />}
                    </button>
                );
            })}
            </div>

            {q.hint && !submitted && (
                <button
                    onClick={onToggleHint}
                    className="flex items-center gap-2 min-h-11 px-1 text-sm text-navy-400 hover:text-brand-400 transition-colors"
                >
                    <Lightbulb size={16} />
                    {showHint ? 'Ocultar pista' : 'Ver pista'}
                </button>
            )}
            {showHint && q.hint && !submitted && (
                <div className="bg-brand-500/5 border border-brand-500/20 rounded-lg p-3 text-sm text-brand-300 flex items-start gap-2 animate-in fade-in slide-in-from-top-2">
                    <Lightbulb size={16} className="shrink-0 mt-0.5" />
                    {q.hint}
                </div>
            )}
        </div>
    );
};

const OrderingRenderer: React.FC<QuestionComponentProps> = ({
    question, answer, onAnswer, submitted, showHint, onToggleHint
}) => {
    const q = question as OrderingQuestion;
    // Scrambled start: presenting the source order would hand most questions to
    // the user pre-solved (authors write items in chronological order). Seeded by
    // question id so "Reiniciar orden" and re-renders agree.
    const initialOrder = useMemo(
        () => scrambledOrder(q.items.length, q.correctOrder, q.id),
        [q.items.length, q.correctOrder, q.id],
    );
    const currentOrder: number[] = Array.isArray(answer) ? answer as number[] : initialOrder;

    // Seed the scrambled order as the answer on mount so the question counts as
    // answered (arranging is optional if the user believes the shown order) and
    // submission isn't blocked on an untouched ordering question.
    useEffect(() => {
        if (!Array.isArray(answer)) {
            onAnswer(initialOrder);
        }
        // Run once on mount for this question.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const moveItem = (fromIndex: number, direction: 'up' | 'down') => {
        if (submitted) return;
        const toIndex = direction === 'up' ? fromIndex - 1 : fromIndex + 1;
        if (toIndex < 0 || toIndex >= currentOrder.length) return;

        const newOrder = [...currentOrder];
        [newOrder[fromIndex], newOrder[toIndex]] = [newOrder[toIndex], newOrder[fromIndex]];
        onAnswer(newOrder);
    };

    const getItemPosition = (itemIndex: number): number => {
        return q.correctOrder.indexOf(itemIndex);
    };

    return (
        <div className="space-y-3">
            <div className="space-y-2">
                {currentOrder.map((itemIdx, position) => {
                    const isCorrectPosition = submitted && q.correctOrder[position] === itemIdx;

                    let itemClass = "w-full p-4 rounded-xl border transition-all flex items-center gap-3 ";

                    if (submitted) {
                        if (isCorrectPosition) {
                            itemClass += "bg-emerald-500/10 border-emerald-500/50 text-emerald-400";
                        } else {
                            itemClass += "bg-red-500/10 border-red-500/50 text-red-400";
                        }
                    } else {
                        itemClass += "bg-navy-950 border-navy-800 text-navy-300";
                    }

                    return (
                        <div key={itemIdx} className={itemClass}>
                            <span className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center text-sm font-bold text-navy-400">
                                {position + 1}
                            </span>
                            <span className="flex-1">{q.items[itemIdx]}</span>
                            {!submitted && (
                                <div className="flex flex-row gap-1">
                                    <button
                                        onClick={() => moveItem(position, 'up')}
                                        disabled={position === 0}
                                        className="w-10 h-10 flex items-center justify-center hover:bg-navy-800 rounded disabled:opacity-30"
                                        aria-label="Mover arriba"
                                    >
                                        <ChevronUp size={18} />
                                    </button>
                                    <button
                                        onClick={() => moveItem(position, 'down')}
                                        disabled={position === currentOrder.length - 1}
                                        className="w-10 h-10 flex items-center justify-center hover:bg-navy-800 rounded disabled:opacity-30"
                                        aria-label="Mover abajo"
                                    >
                                        <ChevronDown size={18} />
                                    </button>
                                </div>
                            )}
                            {submitted && isCorrectPosition && <CheckCircle size={18} className="text-emerald-500" />}
                            {submitted && !isCorrectPosition && (
                                <span className="text-xs text-navy-400">
                                    (Posición correcta: {getItemPosition(itemIdx) + 1})
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>

            {!submitted && (
                <button
                    onClick={() => onAnswer(initialOrder)}
                    className="text-sm text-navy-400 hover:text-white flex items-center gap-1 min-h-11 px-1"
                >
                    <RotateCcw size={14} /> Reiniciar orden
                </button>
            )}

            {q.hint && !submitted && (
                <button
                    onClick={onToggleHint}
                    className="flex items-center gap-2 min-h-11 px-1 text-sm text-navy-400 hover:text-brand-400 transition-colors"
                >
                    <Lightbulb size={16} />
                    {showHint ? 'Ocultar pista' : 'Ver pista'}
                </button>
            )}
            {showHint && q.hint && !submitted && (
                <div className="bg-brand-500/5 border border-brand-500/20 rounded-lg p-3 text-sm text-brand-300 flex items-start gap-2 animate-in fade-in slide-in-from-top-2">
                    <Lightbulb size={16} className="shrink-0 mt-0.5" />
                    {q.hint}
                </div>
            )}
        </div>
    );
};

const FillBlankRenderer: React.FC<QuestionComponentProps> = ({
    question, answer, onAnswer, submitted, showHint, onToggleHint
}) => {
    const q = question as FillBlankQuestion;
    const correct = isCorrect(q, answer);

    return (
        <div className="space-y-4">
            <div className="text-lg text-navy-300 leading-relaxed flex flex-wrap items-center gap-2">
                <span>{q.textBefore}</span>
                <input
                    type="text"
                    value={typeof answer === 'string' ? answer : ''}
                    onChange={(e) => !submitted && onAnswer(e.target.value)}
                    disabled={submitted}
                    placeholder="Tu respuesta..."
                    aria-label={`Completa el espacio en blanco: ${q.textBefore} ___ ${q.textAfter}`.trim()}
                    autoComplete="off"
                    className={`px-4 py-2 rounded-lg border-2 bg-navy-950 font-medium min-w-[150px] transition-all ${
                        submitted
                            ? correct
                                ? 'border-emerald-500 text-emerald-400'
                                : 'border-red-500 text-red-400'
                            : 'border-navy-700 text-white focus:border-brand-500 focus:outline-none'
                    }`}
                />
                <span>{q.textAfter}</span>
            </div>

            {submitted && !correct && (
                <p className="text-sm text-navy-400">
                    Respuesta correcta: <span className="text-emerald-400 font-bold">{q.correctAnswer}</span>
                </p>
            )}

            {q.hint && !submitted && (
                <button
                    onClick={onToggleHint}
                    className="flex items-center gap-2 min-h-11 px-1 text-sm text-navy-400 hover:text-brand-400 transition-colors"
                >
                    <Lightbulb size={16} />
                    {showHint ? 'Ocultar pista' : 'Ver pista'}
                </button>
            )}
            {showHint && q.hint && !submitted && (
                <div className="bg-brand-500/5 border border-brand-500/20 rounded-lg p-3 text-sm text-brand-300 flex items-start gap-2 animate-in fade-in slide-in-from-top-2">
                    <Lightbulb size={16} className="shrink-0 mt-0.5" />
                    {q.hint}
                </div>
            )}
        </div>
    );
};

// ============================================
// MAIN QUIZ COMPONENT
// ============================================

const Quiz: React.FC<QuizProps> = ({
    questions: rawQuestions,
    onComplete,
    showProgressBar = true,
    allowNavigation = true,
    storageKey
}) => {
    const questions = useMemo(() => rawQuestions.map(normalizeQuestion), [rawQuestions]);

    // Restore an in-progress attempt (reload, back-swipe) from sessionStorage.
    const [draft] = useState(() => loadQuizDraft(storageKey, questions));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(draft.index);
    const [answers, setAnswers] = useState<Record<string, QuizAnswer>>(draft.answers);
    const [submitted, setSubmitted] = useState(false);
    const [showHints, setShowHints] = useState<{ [key: string]: boolean }>({});
    const [viewMode, setViewMode] = useState<'single' | 'all'>('single');
    const [submitError, setSubmitError] = useState<string | null>(null);

    const currentQuestion = questions[currentQuestionIndex];

    // Signal the global chat FAB to hide while the quiz is on screen so it can't
    // overlap an answer option (the highest-stakes touch target).
    useEffect(() => {
        window.dispatchEvent(new CustomEvent('quiz-active', { detail: { active: true } }));
        return () => {
            window.dispatchEvent(new CustomEvent('quiz-active', { detail: { active: false } }));
        };
    }, []);

    // Persist the attempt while it's in progress; the draft dies with the tab
    // (sessionStorage), on submit, and on retry.
    useEffect(() => {
        if (!storageKey || submitted || typeof window === 'undefined') return;
        try {
            window.sessionStorage.setItem(
                storageKey,
                JSON.stringify({ answers, index: currentQuestionIndex }),
            );
        } catch {
            // Quota or disabled storage — persistence is best-effort
        }
    }, [storageKey, answers, currentQuestionIndex, submitted]);

    const answeredCount = Object.keys(answers).filter(key => {
        const answer = answers[key];
        if (answer === undefined || answer === null || answer === '') return false;
        if (Array.isArray(answer) && answer.length === 0) return false;
        return true;
    }).length;

    const handleAnswer = (questionId: string, answer: QuizAnswer) => {
        setAnswers(prev => ({ ...prev, [questionId]: answer }));
        if (submitError) setSubmitError(null);
    };

    const toggleHint = (questionId: string) => {
        setShowHints(prev => ({ ...prev, [questionId]: !prev[questionId] }));
    };

    // Single definition of score: raw count of correct questions. The displayed
    // percentage and the pass threshold MUST use this same basis so a user can
    // never see "75% correctas" yet fail (which happened when the percentage was
    // point-weighted while the pass check counted raw questions).
    const correctCount = questions.filter(q => isCorrect(q, answers[q.id])).length;
    const passThreshold = Math.ceil(questions.length * 0.7);
    const percentage = Math.round((correctCount / questions.length) * 100);
    const passed = correctCount >= passThreshold;

    const handleSubmit = () => {
        // Check if all questions are answered
        const unanswered = questions.filter(q => {
            const answer = answers[q.id];
            if (answer === undefined || answer === null || answer === '') return true;
            if (Array.isArray(answer) && answer.length === 0) return true;
            return false;
        });

        if (unanswered.length > 0) {
            setSubmitError(
                `Por favor responde todas las preguntas. ${
                    unanswered.length === 1
                        ? 'Falta 1 pregunta'
                        : `Faltan ${unanswered.length} preguntas`
                }.`
            );
            // Navigate to first unanswered
            const firstUnansweredIndex = questions.findIndex(q => unanswered.includes(q));
            setCurrentQuestionIndex(firstUnansweredIndex);
            return;
        }

        setSubmitError(null);
        setSubmitted(true);
        setViewMode('all'); // Show all questions after submit
        clearQuizDraft(storageKey);

        if (passed) {
            const prefersReducedMotion =
                typeof window !== 'undefined' &&
                typeof window.matchMedia === 'function' &&
                window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            if (!prefersReducedMotion) {
                // Celebration burst — two waves for more impact
                confetti({
                    particleCount: 200,
                    spread: 100,
                    origin: { y: 0.6 },
                    colors: ['#10b981', '#f59e0b', '#ffffff', '#3b82f6'],
                    zIndex: 100,
                });
                setTimeout(() => {
                    confetti({
                        particleCount: 100,
                        spread: 120,
                        origin: { y: 0.5, x: 0.3 },
                        colors: ['#10b981', '#f59e0b'],
                        zIndex: 100,
                    });
                    confetti({
                        particleCount: 100,
                        spread: 120,
                        origin: { y: 0.5, x: 0.7 },
                        colors: ['#10b981', '#f59e0b'],
                        zIndex: 100,
                    });
                }, 300);
            }
            onComplete(correctCount);
        }
    };

    const handleRetry = () => {
        setSubmitted(false);
        setAnswers({});
        setShowHints({});
        setCurrentQuestionIndex(0);
        setViewMode('single');
        setSubmitError(null);
        clearQuizDraft(storageKey);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navigateQuestion = (direction: 'prev' | 'next') => {
        if (direction === 'prev' && currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        } else if (direction === 'next' && currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const renderQuestion = (q: Question, idx: number) => {
        const questionCorrect = submitted ? isCorrect(q, answers[q.id]) : null;

        const QuestionRenderer = {
            'multiple-choice': MultipleChoiceRenderer,
            'true-false': TrueFalseRenderer,
            'multiple-select': MultipleSelectRenderer,
            'ordering': OrderingRenderer,
            'fill-blank': FillBlankRenderer,
        }[q.type] || MultipleChoiceRenderer;

        return (
            <div key={q.id} className="space-y-4">
                {/* Question Header */}
                <div className="flex items-start gap-3">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                        submitted
                            ? questionCorrect
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : 'bg-red-500/20 text-red-400'
                            : 'bg-navy-800 text-navy-400'
                    }`}>
                        {idx + 1}
                    </span>
                    <div className="flex-1">
                        <p className="font-medium text-white text-lg leading-relaxed">{q.question}</p>
                        {q.type === 'multiple-select' && !submitted && (
                            <p className="text-sm text-navy-400 mt-1">(Selecciona todas las respuestas correctas)</p>
                        )}
                        {q.type === 'ordering' && !submitted && (
                            <p className="text-sm text-navy-400 mt-1">(Ordena los elementos correctamente)</p>
                        )}
                        {q.type === 'fill-blank' && !submitted && (
                            <p className="text-sm text-navy-400 mt-1">(No importa mayúsculas/minúsculas)</p>
                        )}
                        {q.difficulty && (
                            <span className={`inline-block mt-2 px-2 py-0.5 rounded text-xs font-medium ${
                                q.difficulty === 'hard' ? 'bg-red-500/20 text-red-400' :
                                q.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-emerald-500/20 text-emerald-400'
                            }`}>
                                {q.difficulty === 'hard' ? 'Difícil' : q.difficulty === 'medium' ? 'Intermedio' : 'Fácil'}
                            </span>
                        )}
                    </div>
                </div>

                {/* Question Content */}
                <QuestionRenderer
                    question={q}
                    answer={answers[q.id]}
                    onAnswer={(answer) => handleAnswer(q.id, answer)}
                    submitted={submitted}
                    showHint={showHints[q.id] || false}
                    onToggleHint={() => toggleHint(q.id)}
                />

                {/* Feedback - Always show explanation after submission */}
                {submitted && (
                    <div className={`animate-in fade-in slide-in-from-top-2 rounded-xl p-4 ${
                        questionCorrect
                            ? 'bg-emerald-500/5 border border-emerald-500/20'
                            : 'bg-amber-500/5 border border-amber-500/20'
                    }`}>
                        <div className="flex items-start gap-3">
                            {questionCorrect ? (
                                <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                            ) : (
                                <AlertCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                            )}
                            <div>
                                <p className={`font-medium mb-1 ${questionCorrect ? 'text-emerald-400' : 'text-amber-400'}`}>
                                    {questionCorrect ? '¡Correcto!' : 'Incorrecto'}
                                </p>
                                <p className="text-sm text-navy-300">{q.explanation}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="bg-navy-900 rounded-2xl border border-navy-800 overflow-hidden mt-16 shadow-2xl">
            {/* Header */}
            <div className="p-6 bg-navy-800 border-b border-navy-700">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <Target className="text-brand-500" /> Verifica tu conocimiento
                    </h2>
                    <div className="flex items-center gap-3">
                        {!submitted && (
                            <button
                                onClick={() => setViewMode(viewMode === 'single' ? 'all' : 'single')}
                                className="text-xs min-h-11 px-2 text-navy-400 hover:text-white transition-colors"
                            >
                                {viewMode === 'single' ? 'Ver todas' : 'Una a la vez'}
                            </button>
                        )}
                        <span className="text-xs font-bold bg-navy-900 text-navy-400 px-3 py-1 rounded-full border border-navy-700">
                            {questions.length} Preguntas
                        </span>
                    </div>
                </div>

                {/* Progress Bar */}
                {showProgressBar && !submitted && (
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-navy-400">
                            <span>Progreso</span>
                            <span>{answeredCount} de {questions.length} respondidas</span>
                        </div>
                        <div
                            className="h-2 bg-navy-900 rounded-full overflow-hidden"
                            role="progressbar"
                            aria-valuenow={answeredCount}
                            aria-valuemin={0}
                            aria-valuemax={questions.length}
                            aria-label="Preguntas respondidas"
                        >
                            <div
                                className="h-full bg-brand-500 transition-all duration-300"
                                style={{ width: `${(answeredCount / questions.length) * 100}%` }}
                            />
                        </div>
                    </div>
                )}

                {/* Question Navigation Dots */}
                {viewMode === 'single' && !submitted && (
                    <div className="flex items-center justify-center mt-2">
                        {questions.map((q, idx) => {
                            const isAnswered = answers[q.id] !== undefined && answers[q.id] !== null && answers[q.id] !== '';
                            const isCurrent = idx === currentQuestionIndex;

                            return (
                                <button
                                    key={q.id}
                                    onClick={() => allowNavigation && setCurrentQuestionIndex(idx)}
                                    className="w-9 h-9 flex items-center justify-center group"
                                    aria-label={`Ir a la pregunta ${idx + 1}`}
                                    title={`Pregunta ${idx + 1}`}
                                >
                                    <span
                                        className={`block w-3 h-3 rounded-full transition-all ${
                                            isCurrent
                                                ? 'bg-brand-500 scale-125'
                                                : isAnswered
                                                    ? 'bg-emerald-500/50 group-hover:bg-emerald-500'
                                                    : 'bg-navy-700 group-hover:bg-navy-600'
                                        }`}
                                    />
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Questions */}
            <div className="p-8">
                {viewMode === 'single' && !submitted ? (
                    <div className="space-y-8">
                        {renderQuestion(currentQuestion, currentQuestionIndex)}

                        {/* Pass requirement info */}
                        <p className="text-xs text-navy-400 text-center">Necesitas el 70% para completar la lección · Sin límite de tiempo</p>

                        {submitError && (
                            <div
                                role="alert"
                                className="flex items-start gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-300"
                            >
                                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                                <span>{submitError}</span>
                            </div>
                        )}

                        {/* Navigation */}
                        <div className="flex items-center justify-between pt-4 border-t border-navy-800">
                            <button
                                onClick={() => navigateQuestion('prev')}
                                disabled={currentQuestionIndex === 0}
                                className="flex items-center gap-2 min-h-11 px-2 text-navy-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                <ArrowLeft size={18} /> Anterior
                            </button>

                            <span className="text-sm text-navy-400">
                                {currentQuestionIndex + 1} / {questions.length}
                            </span>

                            {currentQuestionIndex < questions.length - 1 ? (
                                <button
                                    onClick={() => navigateQuestion('next')}
                                    className="flex items-center gap-2 min-h-11 px-2 text-navy-400 hover:text-white transition-colors"
                                >
                                    Siguiente <ArrowRight size={18} />
                                </button>
                            ) : (
                                <button
                                    onClick={handleSubmit}
                                    className="flex items-center gap-2 min-h-11 px-4 py-2 bg-brand-500 hover:bg-brand-400 text-navy-900 font-bold rounded-lg transition-colors"
                                >
                                    Enviar Quiz <ArrowRight size={18} />
                                </button>
                            )}
                        </div>

                        {/* Submit from anywhere once every question is answered — fixing
                            a skipped question shouldn't require paging back to the end. */}
                        {answeredCount === questions.length && currentQuestionIndex < questions.length - 1 && (
                            <button
                                onClick={handleSubmit}
                                className="w-full min-h-12 py-3 bg-brand-500 hover:bg-brand-400 text-navy-900 font-bold rounded-xl transition-colors shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2"
                            >
                                Enviar Quiz ({questions.length}/{questions.length} respondidas) <ArrowRight size={18} />
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="space-y-10">
                        {questions.map((q, idx) => renderQuestion(q, idx))}
                    </div>
                )}

                {/* Pass requirement info (all view) */}
                {viewMode === 'all' && !submitted && (
                    <p className="text-xs text-navy-400 text-center mt-6">Necesitas el 70% para completar la lección · Sin límite de tiempo</p>
                )}

                {/* Submit Button (for "all" view mode) */}
                {viewMode === 'all' && !submitted && (
                    <>
                        {submitError && (
                            <div
                                role="alert"
                                className="flex items-start gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-300 mt-6"
                            >
                                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                                <span>{submitError}</span>
                            </div>
                        )}
                        <button
                            onClick={handleSubmit}
                            className="w-full mt-4 py-4 bg-brand-500 hover:bg-brand-400 text-navy-900 font-bold rounded-xl transition-colors shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2 group"
                        >
                            Verificar Respuestas <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </>
                )}

                {/* Results */}
                {submitted && (
                    <div role="status" aria-live="polite" className={`mt-10 p-8 rounded-2xl text-center border transition-all duration-500 ${
                        passed
                            ? 'bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.1)]'
                            : 'bg-navy-800 border-navy-700'
                    }`}>
                        <div className="flex justify-center mb-5">
                            {passed ? (
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center rotate-3 shadow-lg shadow-emerald-500/20">
                                        <Trophy size={44} className="text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 px-3 py-1 bg-brand-500 text-navy-900 rounded-full text-xs font-black uppercase tracking-wider shadow-lg animate-bounce">
                                        +100 XP
                                    </div>
                                </div>
                            ) : (
                                <div className="w-24 h-24 rounded-3xl bg-navy-700 flex items-center justify-center">
                                    <Target size={44} className="text-navy-400" />
                                </div>
                            )}
                        </div>

                        <h3 className="text-2xl font-heading font-bold text-white mb-1">
                            {passed ? '¡Lección Completada!' : 'Sigue practicando'}
                        </h3>

                        <p className={`text-3xl font-bold mb-3 ${passed ? 'text-emerald-400' : 'text-brand-500'}`}>
                            {correctCount} / {questions.length}
                        </p>

                        <p className="text-navy-400 mb-6">
                            {percentage}% de respuestas correctas
                        </p>

                        {passed ? (
                            <p className="text-emerald-400/80 text-sm">
                                ¡Excelente trabajo! Has demostrado dominio del tema.
                            </p>
                        ) : (
                            <div className="space-y-4">
                                <p className="text-navy-300">
                                    Necesitas el 70% para aprobar, te {passThreshold - correctCount === 1 ? 'falta' : 'faltan'} <span className="text-white font-bold">{passThreshold - correctCount}</span> {passThreshold - correctCount === 1 ? 'respuesta correcta más' : 'respuestas correctas más'}.
                                </p>
                                <p className="text-sm text-navy-400">
                                    Revisa las explicaciones arriba y vuelve a intentarlo.
                                </p>
                                <button
                                    onClick={handleRetry}
                                    className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-navy-900 font-bold rounded-xl transition-all inline-flex items-center gap-2 hover:scale-105 active:scale-[0.98]"
                                >
                                    <RotateCcw size={18} /> Intentar de nuevo
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
