import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, PlayCircle, BookOpen, MessageSquare, ThumbsUp, AlertCircle, AlertTriangle, Clock, Video, Award, ArrowRight, ArrowLeft, ExternalLink, Lock, Users, Link, Globe, Shield, Layers, Zap, Server, Network, Smartphone, Activity, RefreshCw, PiggyBank, Banknote, Wallet, BarChart3, Search, Briefcase, Gem, Cpu, Scissors, Landmark, Percent, TrendingDown, TrendingUp, LucideIcon, ZoomIn, Brain, Eye, Crosshair, Target, Anchor } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import VideoPlayer from './ui/VideoPlayer';
import ImageLightbox from './lesson/ImageLightbox';
import SelectionTooltip from './lesson/SelectionTooltip';
import { useProgress } from '../contexts/ProgressContext';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Quiz from './education/Quiz';
import CheckpointQuiz from './education/CheckpointQuiz';
import { getPreviousLessonId, getLevelForLesson } from '../utils/courseUtils';
import { fetchLessonById, LessonData, type LessonSection } from '../services/lessonService';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

declare global {
    interface Window {
        __currentLesson?: { title: string; level: string; id: number } | null;
    }
}

// Icon map for dynamic icon rendering from database
const ICON_MAP: Record<string, LucideIcon> = {
  Users, Lock, Link, Globe, Shield, Layers, Zap, Server, Network, Smartphone,
  Activity, RefreshCw, PiggyBank, Banknote, Wallet, BarChart3, Search, Briefcase,
  Gem, Cpu, Scissors, Landmark, Percent, TrendingDown, TrendingUp, AlertCircle,
  AlertTriangle, CheckCircle, Clock, BookOpen, Award, Brain, Eye, Crosshair,
  Target, Anchor
};

const LessonView: React.FC = () => {
    const { lessonId } = useParams<{ lessonId: string }>();
    const navigate = useNavigate();
    const { isLessonCompleted, markLessonComplete, loading } = useProgress();

    const id = lessonId ? parseInt(lessonId, 10) : NaN;
    const isValidId = !isNaN(id) && id > 0;
    const [lesson, setLesson] = useState<LessonData | null>(null);
    const [lessonLoading, setLessonLoading] = useState(true);

    const [activeSection, setActiveSection] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizPassed, setQuizPassed] = useState(false);
    const [isLocked, setIsLocked] = useState(false);

    // Custom hooks
    const scrollProgress = useScrollProgress();
    const { prevLesson, nextLesson, canGoNext } = useLessonNavigation(id, isLessonCompleted(id), isLessonCompleted);

    // Image lightbox state
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

    // Focus Mode
    const [isFocusMode, setIsFocusMode] = useState(false);

    // Fetch lesson data from database
    useEffect(() => {
        async function loadLesson() {
            setLessonLoading(true);
            const lessonData = await fetchLessonById(id);
            setLesson(lessonData);
            if (lessonData) {
                localStorage.setItem('last_lesson_id', String(lessonData.id));
                window.__currentLesson = { title: lessonData.title, level: lessonData.level, id: lessonData.id };
            } else {
                window.__currentLesson = null;
            }
            setLessonLoading(false);
        }
        loadLesson();
        return () => { window.__currentLesson = null; };
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

    // Clean up body overflow on unmount (in case lightbox was open)
    useEffect(() => {
        return () => { document.body.style.overflow = ''; };
    }, []);

    if (!isValidId) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-navy-950">
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

    if (lessonLoading) {
        return (
            <div className="min-h-screen bg-navy-950 pb-20 animate-pulse">
                {/* Header Skeleton */}
                <section className="bg-navy-900 border-b border-white/5 py-12">
                    <div className="container max-w-7xl mx-auto px-6">
                        <div className="w-24 h-6 bg-navy-800 rounded mb-4"></div>
                        <div className="w-3/4 max-w-2xl h-12 bg-navy-800 rounded-lg mb-6"></div>
                        <div className="w-full max-w-3xl h-16 bg-navy-800/50 rounded-lg mb-8"></div>
                        <div className="flex gap-6 border-t border-white/5 pt-6">
                            <div className="w-20 h-5 bg-navy-800 rounded"></div>
                            <div className="w-24 h-5 bg-navy-800 rounded"></div>
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content Skeleton */}
                    <div className="lg:col-span-9 space-y-8">
                        {/* Video Skeleton */}
                        <div className="w-full aspect-video bg-navy-900 rounded-2xl border border-white/5"></div>
                        
                        {/* Paragraph Skeletons */}
                        <div className="space-y-4">
                            <div className="w-1/3 h-8 bg-navy-900 rounded-lg mb-6"></div>
                            <div className="w-full h-4 bg-navy-800/50 rounded"></div>
                            <div className="w-full h-4 bg-navy-800/50 rounded"></div>
                            <div className="w-5/6 h-4 bg-navy-800/50 rounded"></div>
                        </div>
                        <div className="space-y-4 pt-4">
                            <div className="w-full h-4 bg-navy-800/50 rounded"></div>
                            <div className="w-4/5 h-4 bg-navy-800/50 rounded"></div>
                        </div>
                    </div>

                    {/* Sidebar Skeleton */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="w-full h-32 bg-navy-900 rounded-2xl border border-white/5"></div>
                        <div className="w-full h-40 bg-navy-900 rounded-2xl border border-white/5"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!lesson) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-navy-950">
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
            <div className="min-h-screen flex items-center justify-center text-white bg-navy-950 p-4">
                <div className="text-center max-w-md bg-navy-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="w-20 h-20 bg-navy-800 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Lock size={40} className="text-navy-400" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">Lección Bloqueada</h2>
                    <p className="text-navy-400 mb-8 leading-relaxed">
                        Debes completar las lecciones anteriores para desbloquear este contenido. ¡Sigue aprendiendo paso a paso!
                    </p>
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => navigate('/education')}
                            className="w-full py-3 bg-brand-500 hover:bg-brand-400 text-navy-900 font-bold rounded-xl transition-all"
                        >
                            Ir al Panel de Educación
                        </button>
                        <button
                            onClick={() => navigate(-1)}
                            className="w-full py-3 bg-navy-800 hover:bg-navy-700 text-white font-medium rounded-xl transition-all"
                        >
                            Volver Atrás
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const isCompleted = isLessonCompleted(id);

    const handleQuizComplete = async (score: number) => {
        await markLessonComplete(id, score);
        setQuizPassed(true);
    };

    const handleNextLesson = () => {
        if (nextLesson) {
            navigate(`/education/lesson/${nextLesson.id}`);
        } else {
            navigate('/education');
        }
    };

    // Lightbox functions
    const openLightbox = (src: string, alt: string) => {
        setLightboxImage({ src, alt });
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxImage(null);
        document.body.style.overflow = '';
    };

    return (
        <>
            <Helmet>
                <title>{lesson.title} | Hablemos Cripto</title>
            </Helmet>

            <SelectionTooltip />
            <ImageLightbox image={lightboxImage} onClose={closeLightbox} />

            <div className="min-h-screen bg-navy-950 pb-20">
                {/* Progress Bar Fixed Top */}
                <div className="fixed top-16 left-0 w-full h-1 bg-navy-900 z-30">
                    <div className="h-full bg-brand-500 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }}></div>
                </div>

                {/* Top Navigation Bar */}
                <div className="sticky top-0 z-40 bg-navy-950/80 backdrop-blur-md border-b border-white/10">
                    <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                        {/* Left: Back to level dashboard */}
                        <button
                            onClick={() => navigate(`/education/${getLevelForLesson(id)}`)}
                            className="flex items-center gap-1 px-2 sm:px-3 py-1.5 text-navy-400 hover:text-white hover:bg-navy-800 rounded-lg transition-colors"
                        >
                            <ChevronLeft size={18} />
                            <span className="hidden sm:inline text-sm">Volver</span>
                        </button>

                        {/* Center: Previous + Title + Next */}
                        <div className="flex items-center gap-2 sm:gap-4">
                            {/* Previous lesson arrow */}
                            {prevLesson ? (
                                <button
                                    onClick={() => navigate(`/education/lesson/${prevLesson.id}`)}
                                    className="p-2 text-navy-400 hover:text-white hover:bg-navy-800 rounded-lg transition-colors"
                                    title={`Anterior: ${prevLesson.title}`}
                                >
                                    <ChevronLeft size={20} />
                                </button>
                            ) : (
                                <div className="w-9"></div>
                            )}

                            {/* Lesson title */}
                            <span className="font-medium text-navy-200 truncate max-w-[140px] sm:max-w-md text-sm sm:text-base">
                                {lesson.number?.split(' ')[0] || id}. {lesson.title}
                            </span>

                            {/* Next lesson arrow */}
                            {nextLesson ? (
                                <button
                                    onClick={() => canGoNext && navigate(`/education/lesson/${nextLesson.id}`)}
                                    disabled={!canGoNext}
                                    className={`p-2 rounded-lg transition-colors ${
                                        canGoNext
                                            ? 'text-navy-400 hover:text-white hover:bg-navy-800'
                                            : 'text-navy-600 cursor-not-allowed'
                                    }`}
                                    title={canGoNext ? `Siguiente: ${nextLesson.title}` : 'Completa esta lección para continuar'}
                                >
                                    {canGoNext ? <ChevronRight size={20} /> : <Lock size={16} />}
                                </button>
                            ) : (
                                <div className="w-9"></div>
                            )}
                        </div>

                        {/* Right: Completion status */}
                        {isCompleted ? (
                            <span className="flex items-center gap-1 text-green-500 text-sm font-medium">
                                <CheckCircle size={16} />
                                <span className="hidden sm:inline">Completado</span>
                            </span>
                        ) : (
                            <div className="w-20 sm:w-28"></div>
                        )}
                    </div>
                </div>

                {/* Header */}
                <section className="bg-navy-900 border-b border-white/5 py-12">
                    <div className="container max-w-7xl mx-auto px-6">
                        <div className="flex items-center gap-2 text-sm text-brand-500 font-bold uppercase tracking-wider mb-4">
                            <span className="px-2 py-1 bg-brand-500/10 rounded border border-brand-500/20">Lección {id}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">{lesson.title}</h1>
                        <p className="text-lg text-navy-400 max-w-3xl leading-relaxed mb-8">{lesson.description}</p>

                        <div className="flex flex-wrap gap-6 text-sm font-medium text-navy-400 border-t border-white/5 pt-6 items-center">
                            <div className="flex items-center gap-2"><Clock size={16} className="text-brand-500" /> {lesson.duration}</div>
                            <div className="flex items-center gap-2"><Video size={16} className="text-brand-500" /> Video + Texto</div>
                            <div className="flex-1"></div>
                            <button 
                                onClick={() => setIsFocusMode(!isFocusMode)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all border ${
                                    isFocusMode 
                                    ? 'bg-brand-500/10 text-brand-400 border-brand-500/30 shadow-glow-brand/20' 
                                    : 'bg-navy-800 text-navy-300 border-navy-700 hover:bg-navy-700'
                                }`}
                            >
                                <BookOpen size={16} />
                                {isFocusMode ? 'Modo Enfoque Activo' : 'Activar Modo Enfoque'}
                            </button>
                        </div>
                    </div>
                </section>

                <div className={`max-w-6xl xl:max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 transition-all duration-500`}>
                    {/* Main Content */}
                    <div className={`transition-all duration-500 ${isFocusMode ? 'lg:col-span-10 lg:col-start-2' : 'lg:col-span-9'} space-y-8`}>
                        {/* Video Section */}
                        <VideoPlayer
                            title={lesson.title}
                            videoId={lesson.videoId} // We'll need to add this to the data type later
                        />

                        {/* Referral Section */}
                        {lesson.referrals && lesson.referrals.length > 0 && (
                            <div className="grid gap-4 my-8">
                                {lesson.referrals.map((ref, idx) => (
                                    <div key={idx} className="bg-gradient-to-r from-navy-900 to-navy-800 border border-brand-500/30 rounded-xl p-6 relative overflow-hidden group hover:border-brand-500/50 transition-all">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-500/20 transition-all"></div>

                                        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="px-2 py-1 bg-brand-500/20 text-brand-400 text-xs font-bold rounded uppercase tracking-wider">Recomendado</span>
                                                    <h3 className="text-xl font-bold text-white">{ref.title}</h3>
                                                </div>
                                                <p className="text-navy-300 mb-4">{ref.description}</p>
                                                {ref.code && (
                                                    <div className="inline-flex items-center gap-2 bg-navy-950/50 px-3 py-1 rounded-lg border border-navy-700 text-sm text-navy-300 mb-4">
                                                        <span>Código:</span>
                                                        <code className="text-brand-400 font-mono font-bold">{ref.code}</code>
                                                    </div>
                                                )}
                                            </div>
                                            <a
                                                href={ref.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-navy-900 font-bold rounded-xl transition-all shadow-lg shadow-brand-500/20 hover:scale-105 flex items-center gap-2 whitespace-nowrap"
                                            >
                                                {ref.buttonText}
                                                <ExternalLink size={18} />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Content Sections with Checkpoint Quizzes */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            {lesson.sections.map((section, idx) => {
                                // Find any checkpoint quiz that should appear after this section
                                const checkpointAfterSection = lesson.checkpointQuizzes?.find(
                                    cp => cp.sectionIndex === idx
                                );

                                return (
                                    <div key={idx}>
                                        <div className="mb-8">
                                            {/* Section Title */}
                                            {section.title && (
                                                <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                                            )}

                                            {section.type === 'intro' && section.content && (
                                                <div className="text-lg text-navy-300 leading-relaxed font-medium border-l-4 border-brand-500 pl-4">
                                                    <ReactMarkdown rehypePlugins={[rehypeSanitize]}>{section.content}</ReactMarkdown>
                                                </div>
                                            )}

                                            {/* Section Image - appears before content when present */}
                                            {section.image && (
                                                <div className="my-6 not-prose">
                                                    <div
                                                        className="relative group cursor-pointer"
                                                        onClick={() => openLightbox(section.image, section.imageAlt || section.title || 'Infographic')}
                                                    >
                                                        <img
                                                            src={section.image}
                                                            srcSet={
                                                                section.image.endsWith('.webp')
                                                                    ? `${section.image.replace('.webp', '-sm.webp')} 640w, ${section.image.replace('.webp', '-md.webp')} 1024w, ${section.image} 2200w`
                                                                    : undefined
                                                            }
                                                            sizes={section.image.endsWith('.webp') ? '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px' : undefined}
                                                            alt={section.imageAlt || section.title || 'Infographic'}
                                                            width={2200}
                                                            height={1228}
                                                            loading="lazy"
                                                            className="w-full rounded-xl border border-navy-700/50 shadow-lg transition-all duration-300 group-hover:border-brand-500/50 group-hover:shadow-brand-500/20"
                                                        />
                                                        {/* Hover overlay */}
                                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-xl transition-all duration-300 flex items-center justify-center">
                                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-navy-900/80 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2 text-white text-sm font-medium">
                                                                <ZoomIn size={18} />
                                                                <span>Click para ampliar</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {section.imageCaption && (
                                                        <p className="text-sm text-navy-500 text-center mt-2 italic">{section.imageCaption}</p>
                                                    )}
                                                    {section.imageSummary && (
                                                        <div className="mt-4 bg-gradient-to-r from-brand-500/10 to-amber-500/5 border border-brand-500/30 rounded-xl p-4">
                                                            <div className="flex items-start gap-3">
                                                                <div className="shrink-0 w-8 h-8 bg-brand-500/20 rounded-lg flex items-center justify-center">
                                                                    <span className="text-brand-400 text-lg">💡</span>
                                                                </div>
                                                                <div>
                                                                    <p className="text-xs font-semibold text-brand-400 uppercase tracking-wider mb-1">Lo Esencial</p>
                                                                    <p className="text-navy-300 text-sm leading-relaxed">{section.imageSummary}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {section.type === 'main' && section.content && (
                                                <div className="text-navy-300 leading-relaxed">
                                                    <ReactMarkdown rehypePlugins={[rehypeSanitize]}>{section.content}</ReactMarkdown>
                                                </div>
                                            )}

                                            {/* Features Grid */}
                                            {section.features && section.features.length > 0 && (
                                                <div className="grid gap-4 my-6 not-prose">
                                                    {section.features.map((feature: { icon?: string; title?: string; text?: string }, i: number) => {
                                                        const IconComponent = typeof feature.icon === 'string'
                                                            ? ICON_MAP[feature.icon]
                                                            : null;
                                                        return (
                                                            <div key={i} className="bg-navy-900/50 p-5 rounded-xl border border-navy-700/50 hover:border-brand-500/30 transition-colors">
                                                                <div className="flex items-start gap-4">
                                                                    {IconComponent && (
                                                                        <div className="p-2 bg-brand-500/10 rounded-lg shrink-0">
                                                                            <IconComponent size={24} className="text-brand-500" />
                                                                        </div>
                                                                    )}
                                                                    <div>
                                                                        <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                                                                        <p className="text-navy-400 text-sm leading-relaxed">{feature.text}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}

                                            {/* Highlight Box */}
                                            {section.highlight && (
                                                <div className="bg-brand-500/10 border border-brand-500/30 rounded-xl p-5 my-6 not-prose">
                                                    <h4 className="font-bold text-brand-400 mb-2">{section.highlight.title}</h4>
                                                    <p className="text-navy-300 text-sm leading-relaxed">{section.highlight.text}</p>
                                                </div>
                                            )}

                                            {section.type === 'comparison' && (
                                                <div className="relative grid md:grid-cols-2 gap-4 my-6 not-prose">
                                                    {/* VS Badge - centered between columns */}
                                                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                                        <div className="bg-navy-800 border-2 border-navy-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                                                            <span className="text-xs font-bold text-navy-300">VS</span>
                                                        </div>
                                                    </div>

                                                    {/* Left Side - Positive/Good (green) */}
                                                    <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-6 rounded-xl border border-green-500/30 relative overflow-hidden">
                                                        <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                                        <h4 className="font-bold text-green-400 mb-4 flex items-center gap-2">
                                                            <CheckCircle size={20} className="text-green-500" />
                                                            {section.leftSide?.title || section.leftTitle || 'Antes'}
                                                        </h4>
                                                        {section.leftSide?.points ? (
                                                            <ul className="space-y-3">
                                                                {section.leftSide.points.map((item: string, i: number) => (
                                                                    <li key={i} className="flex items-start gap-3 text-sm text-navy-300">
                                                                        <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                                                                        <span>{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <p className="text-sm text-navy-400">Descentralizado, deflacionario, instantáneo, barato.</p>
                                                        )}
                                                    </div>

                                                    {/* Right Side - Negative/Bad (red) */}
                                                    <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 p-6 rounded-xl border border-red-500/30 relative overflow-hidden">
                                                        <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                                        <h4 className="font-bold text-red-400 mb-4 flex items-center gap-2">
                                                            <AlertTriangle size={20} className="text-red-500" />
                                                            {section.rightSide?.title || section.rightTitle || 'Después'}
                                                        </h4>
                                                        {section.rightSide?.points ? (
                                                            <ul className="space-y-3">
                                                                {section.rightSide.points.map((item: string, i: number) => (
                                                                    <li key={i} className="flex items-start gap-3 text-sm text-navy-300">
                                                                        <span className="text-red-500 mt-0.5 shrink-0">✗</span>
                                                                        <span>{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <p className="text-sm text-navy-400">Centralizado, inflacionario, lento, costoso.</p>
                                                        )}
                                                    </div>
                                                </div>
                                            )}

                                            {section.type === 'takeaways' && (
                                                <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-6 my-8 not-prose">
                                                    <h3 className="flex items-center gap-2 text-xl font-bold text-brand-400 mb-4">
                                                        <BookOpen size={24} />
                                                        {section.title || 'Puntos Clave'}
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {section.items?.map((item: string, i: number) => (
                                                            <li key={i} className="flex items-start gap-2 text-navy-300">
                                                                <CheckCircle size={18} className="text-brand-500 mt-1 shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                        {/* Checkpoint Quiz after this section */}
                                        {checkpointAfterSection && (
                                            <div className="not-prose">
                                                <CheckpointQuiz
                                                    id={`checkpoint-${checkpointAfterSection.id}`}
                                                    title={checkpointAfterSection.title}
                                                    questions={checkpointAfterSection.questions}
                                                />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Quiz Section */}
                        <div className="mt-12 pt-8 border-t border-white/10">
                            {!showQuiz ? (
                                <div className="text-center py-8">
                                    <h3 className="text-2xl font-bold text-white mb-4">¿Listo para poner a prueba tu conocimiento?</h3>
                                    <p className="text-navy-400 text-sm mt-2 mb-6">Necesitas acertar al menos el 70% de las preguntas para completar la lección. Sin límite de tiempo.</p>
                                    <button
                                        onClick={() => setShowQuiz(true)}
                                        className="px-8 py-3 bg-brand-500 hover:bg-brand-400 text-navy-900 font-bold rounded-xl transition-all shadow-lg shadow-brand-500/20 hover:scale-105"
                                    >
                                        Comenzar Quiz
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <Quiz
                                        questions={lesson.quiz?.questions || []}
                                        onComplete={handleQuizComplete}
                                    />

                                    {quizPassed && (
                                        <div className="mt-8 text-center animate-in zoom-in">
                                            <div className="inline-flex flex-col items-center gap-3 p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
                                                <div className="flex items-center gap-2 text-green-400 text-sm font-bold">
                                                    <CheckCircle size={18} />
                                                    ¡Lección completada! +100 XP
                                                </div>
                                                <button
                                                    onClick={handleNextLesson}
                                                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/20 inline-flex items-center gap-2 hover:scale-105 active:scale-[0.98]"
                                                >
                                                    Siguiente Lección <ArrowRight size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        {/* Bottom Lesson Navigation */}
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Previous Lesson Card */}
                                {prevLesson ? (
                                    <button
                                        onClick={() => navigate(`/education/lesson/${prevLesson.id}`)}
                                        className="group flex items-center gap-4 p-4 bg-navy-900/50 hover:bg-navy-800/50 border border-navy-700/50 hover:border-navy-600 rounded-xl transition-all text-left"
                                    >
                                        <div className="shrink-0 w-10 h-10 bg-navy-800 group-hover:bg-navy-700 rounded-lg flex items-center justify-center transition-colors">
                                            <ArrowLeft size={20} className="text-navy-400 group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs text-navy-500 uppercase tracking-wider mb-1">Anterior</p>
                                            <p className="text-sm text-navy-300 group-hover:text-white truncate transition-colors">{prevLesson.title}</p>
                                        </div>
                                    </button>
                                ) : (
                                    <div></div>
                                )}

                                {/* Next Lesson Card */}
                                {nextLesson && (
                                    <button
                                        onClick={() => canGoNext && navigate(`/education/lesson/${nextLesson.id}`)}
                                        disabled={!canGoNext}
                                        className={`group flex items-center justify-end gap-4 p-4 border rounded-xl transition-all text-right ${
                                            canGoNext
                                                ? 'bg-brand-500/10 hover:bg-brand-500/20 border-brand-500/30 hover:border-brand-500/50'
                                                : 'bg-navy-900/30 border-navy-700/30 cursor-not-allowed'
                                        }`}
                                    >
                                        <div className="min-w-0">
                                            <p className={`text-xs uppercase tracking-wider mb-1 ${canGoNext ? 'text-brand-400' : 'text-navy-600'}`}>
                                                {canGoNext ? 'Siguiente' : 'Bloqueado'}
                                            </p>
                                            <p className={`text-sm truncate transition-colors ${
                                                canGoNext ? 'text-navy-300 group-hover:text-white' : 'text-navy-600'
                                            }`}>{nextLesson.title}</p>
                                        </div>
                                        <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                                            canGoNext
                                                ? 'bg-brand-500/20 group-hover:bg-brand-500/30'
                                                : 'bg-navy-800/50'
                                        }`}>
                                            {canGoNext ? (
                                                <ArrowRight size={20} className="text-brand-400 group-hover:text-brand-300 transition-colors" />
                                            ) : (
                                                <Lock size={18} className="text-navy-600" />
                                            )}
                                        </div>
                                    </button>
                                )}
                            </div>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className={`lg:col-span-3 space-y-6 transition-all duration-500 ${isFocusMode ? 'hidden opacity-0' : 'block opacity-100'}`}>
                        <div className="sticky top-24">
                            {/* Progress Card */}
                            <div className="bg-navy-900 rounded-2xl border border-navy-800 p-6 mb-6">
                                <h3 className="font-bold text-white mb-4">Tu Progreso</h3>
                                <div className="w-full bg-navy-800 rounded-full h-2 mb-2">
                                    <div
                                        className="bg-brand-500 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${isCompleted ? 100 : 0}%` }}
                                    ></div>
                                </div>
                                <p className="text-sm text-navy-400">
                                    {isCompleted ? 'Lección completada' : 'En progreso'}
                                </p>
                            </div>

                            {/* Resources */}
                            <div className="bg-navy-900 rounded-2xl border border-navy-800 p-6">
                                <h3 className="font-bold text-white mb-4">Recursos</h3>
                                <div className="space-y-3">
                                    <button className="w-full flex items-center justify-between p-3 bg-navy-800 rounded-xl hover:bg-navy-700 transition-colors text-left">
                                        <div className="flex items-center gap-3">
                                            <MessageSquare size={18} className="text-brand-500" />
                                            <span className="text-navy-300 text-sm">Comunidad</span>
                                        </div>
                                        <ExternalLink size={14} className="text-navy-500" />
                                    </button>
                                    <button className="w-full flex items-center justify-between p-3 bg-navy-800 rounded-xl hover:bg-navy-700 transition-colors text-left">
                                        <div className="flex items-center gap-3">
                                            <ThumbsUp size={18} className="text-brand-500" />
                                            <span className="text-navy-300 text-sm">Dar Feedback</span>
                                        </div>
                                        <ExternalLink size={14} className="text-navy-500" />
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