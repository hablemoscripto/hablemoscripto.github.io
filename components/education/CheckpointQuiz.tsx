import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Lightbulb, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

/**
 * CheckpointQuiz - A lightweight inline quiz component for embedding within lesson content.
 *
 * Features:
 * - Collapsible design (doesn't break reading flow)
 * - Immediate feedback after each answer
 * - Support for single and multiple questions
 * - Hints system
 * - Progress tracking within the checkpoint
 */

export interface CheckpointQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    hint?: string;
}

interface CheckpointQuizProps {
    id: string;
    title?: string;
    questions: CheckpointQuestion[];
    onComplete?: (allCorrect: boolean) => void;
    defaultExpanded?: boolean;
}

const CheckpointQuiz: React.FC<CheckpointQuizProps> = ({
    id,
    title = "Checkpoint",
    questions,
    onComplete,
    defaultExpanded = true
}) => {
    const [expanded, setExpanded] = useState(defaultExpanded);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<{ [key: string]: number }>({});
    const [showResult, setShowResult] = useState<{ [key: string]: boolean }>({});
    const [showHints, setShowHints] = useState<{ [key: string]: boolean }>({});
    const [completed, setCompleted] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];
    const answeredCount = Object.keys(answers).length;
    const correctCount = questions.filter(q => answers[q.id] === q.correctAnswer).length;
    const allCorrect = correctCount === questions.length;

    const handleAnswer = (questionId: string, optionIndex: number) => {
        if (showResult[questionId]) return; // Already answered

        setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
        setShowResult(prev => ({ ...prev, [questionId]: true }));

        // Auto-advance to next question after a delay
        if (currentQuestionIndex < questions.length - 1) {
            setTimeout(() => {
                setCurrentQuestionIndex(prev => prev + 1);
            }, 1500);
        } else {
            // Last question - mark as completed
            setTimeout(() => {
                setCompleted(true);
                onComplete?.(optionIndex === currentQuestion.correctAnswer && correctCount === questions.length - 1);
            }, 1000);
        }
    };

    const toggleHint = (questionId: string) => {
        setShowHints(prev => ({ ...prev, [questionId]: !prev[questionId] }));
    };

    const resetCheckpoint = () => {
        setAnswers({});
        setShowResult({});
        setShowHints({});
        setCurrentQuestionIndex(0);
        setCompleted(false);
    };

    if (questions.length === 0) return null;

    return (
        <div className="my-8 rounded-xl border border-brand-500/30 bg-gradient-to-br from-brand-500/5 to-transparent overflow-hidden">
            {/* Header */}
            <button
                onClick={() => setExpanded(!expanded)}
                className="w-full px-5 py-4 flex items-center justify-between bg-brand-500/10 hover:bg-brand-500/15 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center">
                        <Sparkles size={18} className="text-brand-400" />
                    </div>
                    <div className="text-left">
                        <h4 className="font-bold text-white text-sm">{title}</h4>
                        <p className="text-xs text-slate-400">
                            {completed
                                ? `${correctCount}/${questions.length} correctas`
                                : `${questions.length} pregunta${questions.length > 1 ? 's' : ''} rápida${questions.length > 1 ? 's' : ''}`
                            }
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {completed && (
                        <span className={`text-xs font-medium px-2 py-1 rounded ${
                            allCorrect
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-amber-500/20 text-amber-400'
                        }`}>
                            {allCorrect ? 'Perfecto' : 'Completado'}
                        </span>
                    )}
                    {expanded ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
                </div>
            </button>

            {/* Content */}
            {expanded && (
                <div className="p-5 space-y-4">
                    {/* Progress indicator */}
                    {questions.length > 1 && (
                        <div className="flex items-center gap-2 mb-4">
                            {questions.map((q, idx) => {
                                const isAnswered = showResult[q.id];
                                const isCorrect = answers[q.id] === q.correctAnswer;
                                const isCurrent = idx === currentQuestionIndex && !completed;

                                return (
                                    <div
                                        key={q.id}
                                        className={`h-1.5 flex-1 rounded-full transition-all ${
                                            isAnswered
                                                ? isCorrect
                                                    ? 'bg-green-500'
                                                    : 'bg-red-500'
                                                : isCurrent
                                                    ? 'bg-brand-500'
                                                    : 'bg-surface-border'
                                        }`}
                                    />
                                );
                            })}
                        </div>
                    )}

                    {/* Question */}
                    {!completed && (
                        <div className="space-y-4">
                            <p className="text-white font-medium">
                                {questions.length > 1 && (
                                    <span className="text-brand-400 mr-2">{currentQuestionIndex + 1}.</span>
                                )}
                                {currentQuestion.question}
                            </p>

                            {/* Options */}
                            <div className="space-y-2">
                                {currentQuestion.options.map((opt, optIdx) => {
                                    const isSelected = answers[currentQuestion.id] === optIdx;
                                    const isCorrectOption = optIdx === currentQuestion.correctAnswer;
                                    const showFeedback = showResult[currentQuestion.id];

                                    let optionClass = "w-full p-3 rounded-lg text-left border transition-all flex items-center gap-3 text-sm ";

                                    if (showFeedback) {
                                        if (isCorrectOption) {
                                            optionClass += "bg-green-500/10 border-green-500/50 text-green-400";
                                        } else if (isSelected) {
                                            optionClass += "bg-red-500/10 border-red-500/50 text-red-400";
                                        } else {
                                            optionClass += "bg-surface-base border-surface-border text-slate-500 opacity-50";
                                        }
                                    } else {
                                        optionClass += "bg-surface-base border-surface-border text-slate-300 hover:border-brand-500/50 hover:bg-surface-1 cursor-pointer";
                                    }

                                    return (
                                        <button
                                            key={optIdx}
                                            onClick={() => handleAnswer(currentQuestion.id, optIdx)}
                                            disabled={showFeedback}
                                            className={optionClass}
                                        >
                                            <span className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold shrink-0 ${
                                                showFeedback && isCorrectOption
                                                    ? 'bg-green-500/20 text-green-400'
                                                    : showFeedback && isSelected
                                                        ? 'bg-red-500/20 text-red-400'
                                                        : 'bg-surface-3 text-slate-400'
                                            }`}>
                                                {String.fromCharCode(65 + optIdx)}
                                            </span>
                                            <span className="flex-1">{opt}</span>
                                            {showFeedback && isCorrectOption && <CheckCircle size={16} className="text-green-500" />}
                                            {showFeedback && isSelected && !isCorrectOption && <AlertCircle size={16} className="text-red-500" />}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Hint */}
                            {currentQuestion.hint && !showResult[currentQuestion.id] && (
                                <>
                                    <button
                                        onClick={() => toggleHint(currentQuestion.id)}
                                        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-brand-400 transition-colors"
                                    >
                                        <Lightbulb size={14} />
                                        {showHints[currentQuestion.id] ? 'Ocultar pista' : 'Necesito una pista'}
                                    </button>
                                    {showHints[currentQuestion.id] && (
                                        <div className="bg-brand-500/5 border border-brand-500/20 rounded-lg p-3 text-xs text-brand-300 flex items-start gap-2 animate-in fade-in">
                                            <Lightbulb size={14} className="shrink-0 mt-0.5" />
                                            {currentQuestion.hint}
                                        </div>
                                    )}
                                </>
                            )}

                            {/* Feedback */}
                            {showResult[currentQuestion.id] && (
                                <div className={`rounded-lg p-3 text-sm flex items-start gap-2 animate-in fade-in slide-in-from-top-2 ${
                                    answers[currentQuestion.id] === currentQuestion.correctAnswer
                                        ? 'bg-green-500/10 border border-green-500/20 text-green-300'
                                        : 'bg-amber-500/10 border border-amber-500/20 text-amber-300'
                                }`}>
                                    {answers[currentQuestion.id] === currentQuestion.correctAnswer ? (
                                        <CheckCircle size={16} className="shrink-0 mt-0.5" />
                                    ) : (
                                        <AlertCircle size={16} className="shrink-0 mt-0.5" />
                                    )}
                                    <span>{currentQuestion.explanation}</span>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Completion State */}
                    {completed && (
                        <div className={`text-center py-4 rounded-lg ${
                            allCorrect
                                ? 'bg-green-500/10 border border-green-500/20'
                                : 'bg-surface-3 border border-surface-border-hover'
                        }`}>
                            {allCorrect ? (
                                <div className="space-y-2">
                                    <CheckCircle size={32} className="mx-auto text-green-500" />
                                    <p className="text-green-400 font-medium">¡Entendiste el concepto!</p>
                                    <p className="text-xs text-slate-400">Sigue con la lección</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    <p className="text-slate-300 font-medium">
                                        {correctCount}/{questions.length} respuestas correctas
                                    </p>
                                    <p className="text-xs text-slate-400">
                                        No te preocupes, puedes continuar con la lección
                                    </p>
                                    <button
                                        onClick={resetCheckpoint}
                                        className="text-xs text-brand-400 hover:text-brand-300 underline"
                                    >
                                        Intentar de nuevo
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CheckpointQuiz;
