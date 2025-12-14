import React, { useState, useMemo } from 'react';
import {
    CheckCircle,
    AlertCircle,
    ArrowRight,
    ArrowLeft,
    Lightbulb,
    GripVertical,
    RotateCcw,
    Trophy,
    Target,
    Clock,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

// ============================================
// QUESTION TYPE DEFINITIONS
// ============================================

type QuestionType = 'multiple-choice' | 'true-false' | 'multiple-select' | 'ordering' | 'fill-blank';

interface BaseQuestion {
    id: string;
    type: QuestionType;
    question: string;
    explanation: string;
    hint?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
    points?: number;
}

interface MultipleChoiceQuestion extends BaseQuestion {
    type: 'multiple-choice';
    options: string[];
    correctAnswer: number;
}

interface TrueFalseQuestion extends BaseQuestion {
    type: 'true-false';
    correctAnswer: boolean;
}

interface MultipleSelectQuestion extends BaseQuestion {
    type: 'multiple-select';
    options: string[];
    correctAnswers: number[];
}

interface OrderingQuestion extends BaseQuestion {
    type: 'ordering';
    items: string[];
    correctOrder: number[];
}

interface FillBlankQuestion extends BaseQuestion {
    type: 'fill-blank';
    textBefore: string;
    textAfter: string;
    correctAnswer: string;
    acceptableAnswers?: string[];
}

type Question = MultipleChoiceQuestion | TrueFalseQuestion | MultipleSelectQuestion | OrderingQuestion | FillBlankQuestion;

// Legacy question format for backward compatibility
interface LegacyQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

interface QuizProps {
    questions: (Question | LegacyQuestion)[];
    onComplete: (score: number) => void;
    showProgressBar?: boolean;
    allowNavigation?: boolean;
}

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

function isCorrect(question: Question, answer: any): boolean {
    switch (question.type) {
        case 'multiple-choice':
            return answer === question.correctAnswer;
        case 'true-false':
            return answer === question.correctAnswer;
        case 'multiple-select':
            if (!Array.isArray(answer)) return false;
            const sortedAnswer = [...answer].sort();
            const sortedCorrect = [...question.correctAnswers].sort();
            return JSON.stringify(sortedAnswer) === JSON.stringify(sortedCorrect);
        case 'ordering':
            return JSON.stringify(answer) === JSON.stringify(question.correctOrder);
        case 'fill-blank':
            const userAnswer = (answer || '').toString().toLowerCase().trim();
            const correct = question.correctAnswer.toLowerCase().trim();
            const acceptable = question.acceptableAnswers?.map(a => a.toLowerCase().trim()) || [];
            return userAnswer === correct || acceptable.includes(userAnswer);
        default:
            return false;
    }
}

function getPoints(question: Question): number {
    if (question.points) return question.points;
    switch (question.difficulty) {
        case 'hard': return 3;
        case 'medium': return 2;
        default: return 1;
    }
}

// ============================================
// QUESTION COMPONENTS
// ============================================

interface QuestionComponentProps {
    question: Question;
    answer: any;
    onAnswer: (answer: any) => void;
    submitted: boolean;
    showHint: boolean;
    onToggleHint: () => void;
}

const MultipleChoiceRenderer: React.FC<QuestionComponentProps> = ({
    question, answer, onAnswer, submitted, showHint, onToggleHint
}) => {
    const q = question as MultipleChoiceQuestion;
    const correct = isCorrect(q, answer);

    return (
        <div className="space-y-3">
            {q.options.map((opt, optIdx) => {
                let optionClass = "w-full p-4 rounded-xl text-left border transition-all flex items-center gap-3 group ";

                if (submitted) {
                    if (optIdx === q.correctAnswer) {
                        optionClass += "bg-green-500/10 border-green-500/50 text-green-400";
                    } else if (answer === optIdx) {
                        optionClass += "bg-red-500/10 border-red-500/50 text-red-400";
                    } else {
                        optionClass += "bg-slate-950 border-slate-800 text-slate-500 opacity-50";
                    }
                } else {
                    if (answer === optIdx) {
                        optionClass += "bg-brand-500/10 border-brand-500 text-white shadow-[0_0_15px_rgba(255,193,7,0.1)]";
                    } else {
                        optionClass += "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-600 hover:bg-slate-900 cursor-pointer";
                    }
                }

                return (
                    <button
                        key={optIdx}
                        onClick={() => !submitted && onAnswer(optIdx)}
                        disabled={submitted}
                        className={optionClass}
                    >
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                            submitted && optIdx === q.correctAnswer ? 'bg-green-500/20 text-green-400' :
                            submitted && answer === optIdx ? 'bg-red-500/20 text-red-400' :
                            answer === optIdx ? 'bg-brand-500/20 text-brand-400' :
                            'bg-slate-800 text-slate-400'
                        }`}>
                            {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="flex-1">{opt}</span>
                        {submitted && optIdx === q.correctAnswer && <CheckCircle size={20} className="text-green-500 shrink-0" />}
                        {submitted && answer === optIdx && optIdx !== q.correctAnswer && <AlertCircle size={20} className="text-red-500 shrink-0" />}
                    </button>
                );
            })}

            {/* Hint Button */}
            {q.hint && !submitted && (
                <button
                    onClick={onToggleHint}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-brand-400 transition-colors mt-2"
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

    return (
        <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
                {options.map(({ value, label, icon }) => {
                    let optionClass = "p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ";

                    if (submitted) {
                        if (value === q.correctAnswer) {
                            optionClass += "bg-green-500/10 border-green-500 text-green-400";
                        } else if (answer === value) {
                            optionClass += "bg-red-500/10 border-red-500 text-red-400";
                        } else {
                            optionClass += "bg-slate-950 border-slate-800 text-slate-500 opacity-50";
                        }
                    } else {
                        if (answer === value) {
                            optionClass += "bg-brand-500/10 border-brand-500 text-white";
                        } else {
                            optionClass += "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-600 cursor-pointer";
                        }
                    }

                    return (
                        <button
                            key={label}
                            onClick={() => !submitted && onAnswer(value)}
                            disabled={submitted}
                            className={optionClass}
                        >
                            <span className="text-3xl">{icon}</span>
                            <span className="font-bold">{label}</span>
                        </button>
                    );
                })}
            </div>

            {q.hint && !submitted && (
                <button
                    onClick={onToggleHint}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-brand-400 transition-colors"
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
    const selectedAnswers: number[] = answer || [];

    const toggleOption = (optIdx: number) => {
        if (submitted) return;
        const newAnswers = selectedAnswers.includes(optIdx)
            ? selectedAnswers.filter(a => a !== optIdx)
            : [...selectedAnswers, optIdx];
        onAnswer(newAnswers);
    };

    return (
        <div className="space-y-3">
            <p className="text-sm text-brand-400 font-medium mb-2">Selecciona todas las respuestas correctas</p>
            {q.options.map((opt, optIdx) => {
                const isSelected = selectedAnswers.includes(optIdx);
                const isCorrectOption = q.correctAnswers.includes(optIdx);

                let optionClass = "w-full p-4 rounded-xl text-left border transition-all flex items-center gap-3 ";

                if (submitted) {
                    if (isCorrectOption && isSelected) {
                        optionClass += "bg-green-500/10 border-green-500/50 text-green-400";
                    } else if (isCorrectOption && !isSelected) {
                        optionClass += "bg-yellow-500/10 border-yellow-500/50 text-yellow-400";
                    } else if (!isCorrectOption && isSelected) {
                        optionClass += "bg-red-500/10 border-red-500/50 text-red-400";
                    } else {
                        optionClass += "bg-slate-950 border-slate-800 text-slate-500 opacity-50";
                    }
                } else {
                    if (isSelected) {
                        optionClass += "bg-brand-500/10 border-brand-500 text-white";
                    } else {
                        optionClass += "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-600 cursor-pointer";
                    }
                }

                return (
                    <button
                        key={optIdx}
                        onClick={() => toggleOption(optIdx)}
                        disabled={submitted}
                        className={optionClass}
                    >
                        <span className={`w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 transition-all ${
                            isSelected ? 'bg-brand-500 border-brand-500' : 'border-slate-600'
                        }`}>
                            {isSelected && <CheckCircle size={14} className="text-slate-900" />}
                        </span>
                        <span className="flex-1">{opt}</span>
                        {submitted && isCorrectOption && <CheckCircle size={18} className="text-green-500 shrink-0" />}
                        {submitted && !isCorrectOption && isSelected && <AlertCircle size={18} className="text-red-500 shrink-0" />}
                    </button>
                );
            })}

            {q.hint && !submitted && (
                <button
                    onClick={onToggleHint}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-brand-400 transition-colors"
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
    const currentOrder: number[] = answer || q.items.map((_, i) => i);

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
            <p className="text-sm text-brand-400 font-medium mb-2">Ordena los elementos correctamente</p>
            <div className="space-y-2">
                {currentOrder.map((itemIdx, position) => {
                    const isCorrectPosition = submitted && q.correctOrder[position] === itemIdx;

                    let itemClass = "w-full p-4 rounded-xl border transition-all flex items-center gap-3 ";

                    if (submitted) {
                        if (isCorrectPosition) {
                            itemClass += "bg-green-500/10 border-green-500/50 text-green-400";
                        } else {
                            itemClass += "bg-red-500/10 border-red-500/50 text-red-400";
                        }
                    } else {
                        itemClass += "bg-slate-950 border-slate-800 text-slate-300";
                    }

                    return (
                        <div key={itemIdx} className={itemClass}>
                            <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-400">
                                {position + 1}
                            </span>
                            <GripVertical size={18} className="text-slate-600 shrink-0" />
                            <span className="flex-1">{q.items[itemIdx]}</span>
                            {!submitted && (
                                <div className="flex flex-col gap-1">
                                    <button
                                        onClick={() => moveItem(position, 'up')}
                                        disabled={position === 0}
                                        className="p-1 hover:bg-slate-800 rounded disabled:opacity-30"
                                    >
                                        <ChevronUp size={16} />
                                    </button>
                                    <button
                                        onClick={() => moveItem(position, 'down')}
                                        disabled={position === currentOrder.length - 1}
                                        className="p-1 hover:bg-slate-800 rounded disabled:opacity-30"
                                    >
                                        <ChevronDown size={16} />
                                    </button>
                                </div>
                            )}
                            {submitted && isCorrectPosition && <CheckCircle size={18} className="text-green-500" />}
                            {submitted && !isCorrectPosition && (
                                <span className="text-xs text-slate-500">
                                    (Posición correcta: {getItemPosition(itemIdx) + 1})
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>

            {!submitted && (
                <button
                    onClick={() => onAnswer(q.items.map((_, i) => i))}
                    className="text-sm text-slate-400 hover:text-white flex items-center gap-1"
                >
                    <RotateCcw size={14} /> Reiniciar orden
                </button>
            )}

            {q.hint && !submitted && (
                <button
                    onClick={onToggleHint}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-brand-400 transition-colors"
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
            <div className="text-lg text-slate-300 leading-relaxed flex flex-wrap items-center gap-2">
                <span>{q.textBefore}</span>
                <input
                    type="text"
                    value={answer || ''}
                    onChange={(e) => !submitted && onAnswer(e.target.value)}
                    disabled={submitted}
                    placeholder="Tu respuesta..."
                    className={`px-4 py-2 rounded-lg border-2 bg-slate-950 font-medium min-w-[150px] transition-all ${
                        submitted
                            ? correct
                                ? 'border-green-500 text-green-400'
                                : 'border-red-500 text-red-400'
                            : 'border-slate-700 text-white focus:border-brand-500 focus:outline-none'
                    }`}
                />
                <span>{q.textAfter}</span>
            </div>

            {submitted && !correct && (
                <p className="text-sm text-slate-400">
                    Respuesta correcta: <span className="text-green-400 font-bold">{q.correctAnswer}</span>
                </p>
            )}

            {q.hint && !submitted && (
                <button
                    onClick={onToggleHint}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-brand-400 transition-colors"
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
    allowNavigation = true
}) => {
    const questions = useMemo(() => rawQuestions.map(normalizeQuestion), [rawQuestions]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<{ [key: string]: any }>({});
    const [submitted, setSubmitted] = useState(false);
    const [showHints, setShowHints] = useState<{ [key: string]: boolean }>({});
    const [viewMode, setViewMode] = useState<'single' | 'all'>('single');

    const currentQuestion = questions[currentQuestionIndex];

    const answeredCount = Object.keys(answers).filter(key => {
        const answer = answers[key];
        if (answer === undefined || answer === null || answer === '') return false;
        if (Array.isArray(answer) && answer.length === 0) return false;
        return true;
    }).length;

    const handleAnswer = (questionId: string, answer: any) => {
        setAnswers(prev => ({ ...prev, [questionId]: answer }));
    };

    const toggleHint = (questionId: string) => {
        setShowHints(prev => ({ ...prev, [questionId]: !prev[questionId] }));
    };

    const calculateScore = () => {
        let totalPoints = 0;
        let earnedPoints = 0;

        questions.forEach(q => {
            const points = getPoints(q);
            totalPoints += points;
            if (isCorrect(q, answers[q.id])) {
                earnedPoints += points;
            }
        });

        return { totalPoints, earnedPoints, percentage: Math.round((earnedPoints / totalPoints) * 100) };
    };

    const handleSubmit = () => {
        // Check if all questions are answered
        const unanswered = questions.filter(q => {
            const answer = answers[q.id];
            if (answer === undefined || answer === null || answer === '') return true;
            if (Array.isArray(answer) && answer.length === 0) return true;
            return false;
        });

        if (unanswered.length > 0) {
            alert(`Por favor responde todas las preguntas. Faltan ${unanswered.length} pregunta(s).`);
            // Navigate to first unanswered
            const firstUnansweredIndex = questions.findIndex(q => unanswered.includes(q));
            setCurrentQuestionIndex(firstUnansweredIndex);
            return;
        }

        setSubmitted(true);
        setViewMode('all'); // Show all questions after submit

        const { earnedPoints, totalPoints } = calculateScore();
        const correctCount = questions.filter(q => isCorrect(q, answers[q.id])).length;

        // Pass if 70% or more
        if (correctCount >= Math.ceil(questions.length * 0.7)) {
            onComplete(correctCount);
        }
    };

    const handleRetry = () => {
        setSubmitted(false);
        setAnswers({});
        setShowHints({});
        setCurrentQuestionIndex(0);
        setViewMode('single');
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
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-red-500/20 text-red-400'
                            : 'bg-slate-800 text-slate-400'
                    }`}>
                        {idx + 1}
                    </span>
                    <div className="flex-1">
                        <p className="font-medium text-white text-lg leading-relaxed">{q.question}</p>
                        {q.difficulty && (
                            <span className={`inline-block mt-2 px-2 py-0.5 rounded text-xs font-medium ${
                                q.difficulty === 'hard' ? 'bg-red-500/20 text-red-400' :
                                q.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-green-500/20 text-green-400'
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
                            ? 'bg-green-500/5 border border-green-500/20'
                            : 'bg-amber-500/5 border border-amber-500/20'
                    }`}>
                        <div className="flex items-start gap-3">
                            {questionCorrect ? (
                                <CheckCircle size={20} className="text-green-500 shrink-0 mt-0.5" />
                            ) : (
                                <AlertCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                            )}
                            <div>
                                <p className={`font-medium mb-1 ${questionCorrect ? 'text-green-400' : 'text-amber-400'}`}>
                                    {questionCorrect ? '¡Correcto!' : 'Incorrecto'}
                                </p>
                                <p className="text-sm text-slate-300">{q.explanation}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const { earnedPoints, totalPoints, percentage } = calculateScore();
    const correctCount = questions.filter(q => isCorrect(q, answers[q.id])).length;
    const passed = correctCount >= Math.ceil(questions.length * 0.7);

    return (
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden mt-16 shadow-2xl">
            {/* Header */}
            <div className="p-6 bg-slate-800 border-b border-slate-700">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <Target className="text-brand-500" /> Verifica tu conocimiento
                    </h2>
                    <div className="flex items-center gap-3">
                        {!submitted && (
                            <button
                                onClick={() => setViewMode(viewMode === 'single' ? 'all' : 'single')}
                                className="text-xs text-slate-400 hover:text-white transition-colors"
                            >
                                {viewMode === 'single' ? 'Ver todas' : 'Una a la vez'}
                            </button>
                        )}
                        <span className="text-xs font-bold bg-slate-900 text-slate-400 px-3 py-1 rounded-full border border-slate-700">
                            {questions.length} Preguntas
                        </span>
                    </div>
                </div>

                {/* Progress Bar */}
                {showProgressBar && !submitted && (
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-slate-400">
                            <span>Progreso</span>
                            <span>{answeredCount} de {questions.length} respondidas</span>
                        </div>
                        <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-brand-500 transition-all duration-300"
                                style={{ width: `${(answeredCount / questions.length) * 100}%` }}
                            />
                        </div>
                    </div>
                )}

                {/* Question Navigation Dots */}
                {viewMode === 'single' && !submitted && (
                    <div className="flex items-center justify-center gap-2 mt-4">
                        {questions.map((q, idx) => {
                            const isAnswered = answers[q.id] !== undefined && answers[q.id] !== null && answers[q.id] !== '';
                            const isCurrent = idx === currentQuestionIndex;

                            return (
                                <button
                                    key={q.id}
                                    onClick={() => allowNavigation && setCurrentQuestionIndex(idx)}
                                    className={`w-3 h-3 rounded-full transition-all ${
                                        isCurrent
                                            ? 'bg-brand-500 scale-125'
                                            : isAnswered
                                                ? 'bg-green-500/50 hover:bg-green-500'
                                                : 'bg-slate-700 hover:bg-slate-600'
                                    }`}
                                    title={`Pregunta ${idx + 1}`}
                                />
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

                        {/* Navigation */}
                        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                            <button
                                onClick={() => navigateQuestion('prev')}
                                disabled={currentQuestionIndex === 0}
                                className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                <ArrowLeft size={18} /> Anterior
                            </button>

                            <span className="text-sm text-slate-500">
                                {currentQuestionIndex + 1} / {questions.length}
                            </span>

                            {currentQuestionIndex < questions.length - 1 ? (
                                <button
                                    onClick={() => navigateQuestion('next')}
                                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                                >
                                    Siguiente <ArrowRight size={18} />
                                </button>
                            ) : (
                                <button
                                    onClick={handleSubmit}
                                    className="flex items-center gap-2 px-4 py-2 bg-brand-500 hover:bg-brand-400 text-slate-900 font-bold rounded-lg transition-colors"
                                >
                                    Enviar Quiz <ArrowRight size={18} />
                                </button>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-10">
                        {questions.map((q, idx) => renderQuestion(q, idx))}
                    </div>
                )}

                {/* Submit Button (for "all" view mode) */}
                {viewMode === 'all' && !submitted && (
                    <button
                        onClick={handleSubmit}
                        className="w-full mt-8 py-4 bg-brand-500 hover:bg-brand-400 text-slate-900 font-bold rounded-xl transition-colors shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2 group"
                    >
                        Verificar Respuestas <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                )}

                {/* Results */}
                {submitted && (
                    <div className={`mt-10 p-8 rounded-2xl text-center border ${
                        passed ? 'bg-green-500/10 border-green-500/30' : 'bg-slate-800 border-slate-700'
                    }`}>
                        <div className="flex justify-center mb-4">
                            {passed ? (
                                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <Trophy size={40} className="text-green-500" />
                                </div>
                            ) : (
                                <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center">
                                    <Target size={40} className="text-slate-400" />
                                </div>
                            )}
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">
                            Resultados: <span className={passed ? 'text-green-500' : 'text-brand-500'}>
                                {correctCount} / {questions.length}
                            </span>
                        </h3>

                        <p className="text-slate-400 mb-2">
                            {percentage}% de respuestas correctas
                        </p>

                        {passed ? (
                            <div>
                                <p className="text-green-400 mb-6">¡Excelente trabajo! Has completado esta lección.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <p className="text-slate-300">
                                    Necesitas el 70% para aprobar ({Math.ceil(questions.length * 0.7)} respuestas correctas).
                                </p>
                                <p className="text-sm text-slate-400">
                                    Revisa las explicaciones arriba y vuelve a intentarlo.
                                </p>
                                <button
                                    onClick={handleRetry}
                                    className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-colors inline-flex items-center gap-2"
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
