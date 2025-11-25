import React, { useState } from 'react';
import { CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

interface Question {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

interface QuizProps {
    questions: Question[];
    onComplete: (score: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
    const [quizState, setQuizState] = useState<{ [key: string]: number }>({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [quizScore, setQuizScore] = useState(0);

    const handleOptionSelect = (questionId: string, optionIndex: number) => {
        if (quizSubmitted) return;
        setQuizState(prev => ({
            ...prev,
            [questionId]: optionIndex
        }));
    };

    const handleSubmitQuiz = () => {
        let score = 0;
        let allAnswered = true;

        questions.forEach((q) => {
            if (quizState[q.id] === undefined) allAnswered = false;
            if (quizState[q.id] === q.correctAnswer) score++;
        });

        if (!allAnswered) {
            alert("Por favor responde todas las preguntas.");
            return;
        }

        setQuizScore(score);
        setQuizSubmitted(true);

        // Pass score to parent
        if (score >= Math.ceil(questions.length * 0.7)) {
            onComplete(score);
        }
    };

    const handleRetry = () => {
        setQuizSubmitted(false);
        setQuizState({});
        setQuizScore(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden mt-16 shadow-2xl">
            <div className="p-6 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <AlertCircle className="text-brand-500" /> Verifica tu conocimiento
                </h2>
                <span className="text-xs font-bold bg-slate-900 text-slate-400 px-3 py-1 rounded-full border border-slate-700">
                    {questions.length} Preguntas
                </span>
            </div>
            <div className="p-8 space-y-8">
                {questions.map((q, idx) => {
                    const selected = quizState[q.id];
                    const showFeedback = quizSubmitted;

                    return (
                        <div key={q.id} className="space-y-4">
                            <p className="font-medium text-white text-lg">{idx + 1}. {q.question}</p>
                            <div className="space-y-2">
                                {q.options.map((opt, optIdx) => {
                                    let optionClass = "w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between group ";

                                    if (showFeedback) {
                                        if (optIdx === q.correctAnswer) optionClass += "bg-green-500/10 border-green-500/50 text-green-500";
                                        else if (selected === optIdx) optionClass += "bg-red-500/10 border-red-500/50 text-red-500 opacity-60";
                                        else optionClass += "bg-slate-950 border-slate-800 opacity-40";
                                    } else {
                                        if (selected === optIdx) optionClass += "bg-brand-500/10 border-brand-500 text-white shadow-[0_0_15px_rgba(255,193,7,0.1)]";
                                        else optionClass += "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-600 hover:bg-slate-900";
                                    }

                                    return (
                                        <button
                                            key={optIdx}
                                            onClick={() => handleOptionSelect(q.id, optIdx)}
                                            disabled={quizSubmitted}
                                            className={optionClass}
                                        >
                                            <span>{opt}</span>
                                            {showFeedback && optIdx === q.correctAnswer && <CheckCircle size={18} />}
                                        </button>
                                    );
                                })}
                            </div>
                            {showFeedback && (selected === q.correctAnswer || (!selected && false)) && (
                                <div className="animate-in fade-in slide-in-from-top-2">
                                    <p className="text-sm text-green-400 flex items-start gap-2 bg-green-500/5 p-3 rounded-lg border border-green-500/10">
                                        <CheckCircle size={16} className="mt-0.5 shrink-0" /> {q.explanation}
                                    </p>
                                </div>
                            )}
                            {showFeedback && selected !== undefined && selected !== q.correctAnswer && (
                                <div className="animate-in fade-in slide-in-from-top-2">
                                    <p className="text-sm text-red-400 flex items-start gap-2 bg-red-500/5 p-3 rounded-lg border border-red-500/10">
                                        <AlertCircle size={16} className="mt-0.5 shrink-0" /> Incorrecto. La respuesta correcta era la marcada en verde.
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                })}

                {!quizSubmitted ? (
                    <button
                        onClick={handleSubmitQuiz}
                        className="w-full py-4 bg-brand-500 hover:bg-brand-400 text-slate-900 font-bold rounded-xl transition-colors shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2 group"
                    >
                        Verificar Respuestas <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                ) : (
                    <div className={`p-8 rounded-2xl text-center border ${quizScore >= Math.ceil(questions.length * 0.7) ? 'bg-green-500/10 border-green-500/30' : 'bg-slate-800 border-slate-700'}`}>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Resultados: <span className={quizScore >= Math.ceil(questions.length * 0.7) ? 'text-green-500' : 'text-brand-500'}>{quizScore} / {questions.length}</span>
                        </h3>
                        {quizScore >= Math.ceil(questions.length * 0.7) ? (
                            <div>
                                <p className="text-green-400 mb-6">¡Excelente trabajo! Has completado esta lección.</p>
                                {/* Parent component handles "Next Lesson" button */}
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <p className="text-slate-300">Necesitas el 70% para aprobar. Repasa el contenido e inténtalo de nuevo.</p>
                                <button
                                    onClick={handleRetry}
                                    className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-colors"
                                >
                                    Intentar de nuevo
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
