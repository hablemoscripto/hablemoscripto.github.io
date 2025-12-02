import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, PlayCircle, BookOpen, MessageSquare, ThumbsUp, AlertCircle, Clock, Video, Award, ArrowRight, ArrowLeft, ExternalLink, Lock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useProgress } from '../contexts/ProgressContext';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Quiz from './education/Quiz';
import { getPreviousLessonId } from '../utils/courseUtils';
import { fetchLessonById, LessonData } from '../services/lessonService';

const LessonView: React.FC = () => {
    const { lessonId } = useParams<{ lessonId: string }>();
    const navigate = useNavigate();
    const { isLessonCompleted, markLessonComplete, loading } = useProgress();

    const id = parseInt(lessonId || '1');
    const [lesson, setLesson] = useState<LessonData | null>(null);
    const [lessonLoading, setLessonLoading] = useState(true);

    const [activeSection, setActiveSection] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [quizPassed, setQuizPassed] = useState(false);
    const [isLocked, setIsLocked] = useState(false);

    // Fetch lesson data from database
    useEffect(() => {
        async function loadLesson() {
            setLessonLoading(true);
            const lessonData = await fetchLessonById(id);
            setLesson(lessonData);
            setLessonLoading(false);
        }
        loadLesson();
    }, [id]);

    // Access Control Logic
    useEffect(() => {
        if (loading) return;

        const checkAccess = () => {
            const previousLessonId = getPreviousLessonId(id);

            // If it's the first lesson, it's always unlocked
            if (previousLessonId === null) {
                setIsLocked(false);
                return;
            }

            // Check if previous lesson is completed OR if the current lesson is already completed
            const previousCompleted = isLessonCompleted(previousLessonId);
            const currentCompleted = isLessonCompleted(id);

            if (!previousCompleted && !currentCompleted) {
                setIsLocked(true);
            } else {
                setIsLocked(false);
            }
        };

        checkAccess();
    }, [id, loading, isLessonCompleted]);

    // Scroll to top on lesson change
    useEffect(() => {
        window.scrollTo(0, 0);
        setActiveSection(0);
        setShowQuiz(false);
        setQuizPassed(false);
    }, [id]);

    // Scroll Progress Logic
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
            setScrollProgress(Number(scroll));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (lessonLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-slate-950">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-500 mx-auto mb-4"></div>
                    <p className="text-slate-400">Cargando lección...</p>
                </div>
            </div>
        );
    }

    if (!lesson) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-slate-950">
                <div className="text-center">
                    <AlertCircle size={48} className="mx-auto text-red-500 mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Lección no encontrada</h2>
                    <button onClick={() => navigate('/education')} className="text-brand-500 hover:underline">
                        Volver al inicio
                    </button>
                </div>
            </div>
        );
    }

    if (isLocked) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-slate-950 p-4">
                <div className="text-center max-w-md bg-slate-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Lock size={40} className="text-slate-400" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">Lección Bloqueada</h2>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        Debes completar las lecciones anteriores para desbloquear este contenido. ¡Sigue aprendiendo paso a paso!
                    </p>
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => navigate('/education')}
                            className="w-full py-3 bg-brand-500 hover:bg-brand-400 text-slate-900 font-bold rounded-xl transition-all"
                        >
                            Ir al Panel de Educación
                        </button>
                        <button
                            onClick={() => navigate(-1)}
                            className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-all"
                        >
                            Volver Atrás
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const isCompleted = isLessonCompleted(id);
    const nextLessonId = id + 1;
    // For now, assume next lesson exists - we'll improve this later
    const hasNextLesson = true;

    const handleQuizComplete = async (score: number) => {
        await markLessonComplete(id, score);
        setQuizPassed(true);
    };

    const handleNextLesson = () => {
        if (hasNextLesson) {
            navigate(`/education/lesson/${nextLessonId}`);
        } else {
            navigate('/education');
        }
    };

    return (
        <>
            <Helmet>
                <title>{lesson.title} | Hablemos Cripto</title>
            </Helmet>

            <div className="min-h-screen bg-slate-950 pb-20">
                {/* Progress Bar Fixed Top */}
                <div className="fixed top-16 left-0 w-full h-1 bg-slate-900 z-30">
                    <div className="h-full bg-brand-500 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }}></div>
                </div>

                {/* Top Navigation Bar */}
                <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
                    <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                        >
                            <ChevronLeft size={20} />
                            <span className="hidden sm:inline">Volver</span>
                        </button>

                        <span className="font-medium text-slate-200 truncate max-w-[200px] sm:max-w-md">
                            {id}. {lesson.title}
                        </span>

                        {isCompleted && (
                            <span className="flex items-center gap-1 text-green-500 text-sm font-medium">
                                <CheckCircle size={16} />
                                <span className="hidden sm:inline">Completado</span>
                            </span>
                        )}
                    </div>
                </div>

                {/* Header */}
                <section className="bg-slate-900 border-b border-white/5 py-12">
                    <div className="container max-w-7xl mx-auto px-6">
                        <div className="flex items-center gap-2 text-sm text-brand-500 font-bold uppercase tracking-wider mb-4">
                            <span className="px-2 py-1 bg-brand-500/10 rounded border border-brand-500/20">Lección {id}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">{lesson.title}</h1>
                        <p className="text-lg text-slate-400 max-w-3xl leading-relaxed mb-8">{lesson.description}</p>

                        <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-400 border-t border-white/5 pt-6">
                            <div className="flex items-center gap-2"><Clock size={16} className="text-brand-500" /> {lesson.duration}</div>
                            <div className="flex items-center gap-2"><Video size={16} className="text-brand-500" /> Video + Texto</div>
                        </div>
                    </div>
                </section>

                <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Video Section */}
                        <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 relative group">
                            {/* Placeholder for video */}
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-brand-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <PlayCircle size={32} className="text-brand-500" />
                                    </div>
                                    <p className="text-slate-500 font-medium">Video próximamente</p>
                                </div>
                            </div>
                        </div>

                        {/* Referral Section */}
                        {lesson.referrals && lesson.referrals.length > 0 && (
                            <div className="grid gap-4 my-8">
                                {lesson.referrals.map((ref, idx) => (
                                    <div key={idx} className="bg-gradient-to-r from-slate-900 to-slate-800 border border-brand-500/30 rounded-xl p-6 relative overflow-hidden group hover:border-brand-500/50 transition-all">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-500/20 transition-all"></div>

                                        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="px-2 py-1 bg-brand-500/20 text-brand-400 text-xs font-bold rounded uppercase tracking-wider">Recomendado</span>
                                                    <h3 className="text-xl font-bold text-white">{ref.title}</h3>
                                                </div>
                                                <p className="text-slate-300 mb-4">{ref.description}</p>
                                                {ref.code && (
                                                    <div className="inline-flex items-center gap-2 bg-slate-950/50 px-3 py-1 rounded-lg border border-slate-700 text-sm text-slate-300 mb-4">
                                                        <span>Código:</span>
                                                        <code className="text-brand-400 font-mono font-bold">{ref.code}</code>
                                                    </div>
                                                )}
                                            </div>
                                            <a
                                                href={ref.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-slate-900 font-bold rounded-xl transition-all shadow-lg shadow-brand-500/20 hover:scale-105 flex items-center gap-2 whitespace-nowrap"
                                            >
                                                {ref.buttonText}
                                                <ExternalLink size={18} />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Content Sections */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            {lesson.sections.map((section, idx) => (
                                <div key={idx} className="mb-8">
                                    {section.type === 'intro' && (
                                        <div className="text-lg text-slate-300 leading-relaxed font-medium border-l-4 border-brand-500 pl-4">
                                            <ReactMarkdown>{section.content}</ReactMarkdown>
                                        </div>
                                    )}

                                    {section.type === 'main' && (
                                        <div className="text-slate-300 leading-relaxed">
                                            <ReactMarkdown>{section.content}</ReactMarkdown>
                                        </div>
                                    )}

                                    {section.type === 'comparison' && (
                                        <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
                                            <div className="bg-slate-900/50 p-6 rounded-xl border border-red-500/20">
                                                <h4 className="font-bold text-red-400 mb-2">Antes (Fiat)</h4>
                                                <p className="text-sm text-slate-400">Centralizado, inflacionario, lento, costoso.</p>
                                            </div>
                                            <div className="bg-slate-900/50 p-6 rounded-xl border border-green-500/20">
                                                <h4 className="font-bold text-green-400 mb-2">Ahora (Cripto)</h4>
                                                <p className="text-sm text-slate-400">Descentralizado, deflacionario, instantáneo, barato.</p>
                                            </div>
                                        </div>
                                    )}

                                    {section.type === 'takeaways' && (
                                        <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-6 my-8 not-prose">
                                            <h3 className="flex items-center gap-2 text-xl font-bold text-brand-400 mb-4">
                                                <BookOpen size={24} />
                                                Puntos Clave
                                            </h3>
                                            <ul className="space-y-2">
                                                {section.items?.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-slate-300">
                                                        <CheckCircle size={18} className="text-brand-500 mt-1 shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Quiz Section */}
                        <div className="mt-12 pt-8 border-t border-white/10">
                            {!showQuiz ? (
                                <div className="text-center py-8">
                                    <h3 className="text-2xl font-bold text-white mb-4">¿Listo para poner a prueba tu conocimiento?</h3>
                                    <button
                                        onClick={() => setShowQuiz(true)}
                                        className="px-8 py-3 bg-brand-500 hover:bg-brand-400 text-slate-900 font-bold rounded-xl transition-all shadow-lg shadow-brand-500/20 hover:scale-105"
                                    >
                                        Comenzar Quiz
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <Quiz
                                        questions={lesson.quiz?.questions?.map((q: any) => ({
                                            id: q.id,
                                            question: q.question,
                                            options: q.options.map((opt: any) => opt.text),
                                            correctAnswer: q.options.findIndex((opt: any) => opt.id === q.correctAnswer),
                                            explanation: q.explanation
                                        })) || []}
                                        onComplete={handleQuizComplete}
                                    />

                                    {quizPassed && (
                                        <div className="mt-8 text-center animate-in zoom-in">
                                            <button
                                                onClick={handleNextLesson}
                                                className="px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/20 inline-flex items-center gap-2 hover:scale-105 transform duration-200"
                                            >
                                                Siguiente Lección <ArrowRight size={20} />
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="sticky top-24">
                            {/* Progress Card */}
                            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 mb-6">
                                <h3 className="font-bold text-white mb-4">Tu Progreso</h3>
                                <div className="w-full bg-slate-800 rounded-full h-2 mb-2">
                                    <div
                                        className="bg-brand-500 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${isCompleted ? 100 : 0}%` }}
                                    ></div>
                                </div>
                                <p className="text-sm text-slate-400">
                                    {isCompleted ? 'Lección completada' : 'En progreso'}
                                </p>
                            </div>

                            {/* Resources */}
                            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
                                <h3 className="font-bold text-white mb-4">Recursos</h3>
                                <div className="space-y-3">
                                    <button className="w-full flex items-center justify-between p-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors text-left">
                                        <div className="flex items-center gap-3">
                                            <MessageSquare size={18} className="text-brand-500" />
                                            <span className="text-slate-300 text-sm">Comunidad</span>
                                        </div>
                                        <ExternalLink size={14} className="text-slate-500" />
                                    </button>
                                    <button className="w-full flex items-center justify-between p-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors text-left">
                                        <div className="flex items-center gap-3">
                                            <ThumbsUp size={18} className="text-brand-500" />
                                            <span className="text-slate-300 text-sm">Dar Feedback</span>
                                        </div>
                                        <ExternalLink size={14} className="text-slate-500" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LessonView;