import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, BookOpen, MessageSquare, ThumbsUp, AlertCircle, Clock, Video, ArrowRight, ArrowLeft, ExternalLink, Lock, Award, RefreshCw, Loader2 } from 'lucide-react';
import VideoPlayer from './ui/VideoPlayer';
import ImageLightbox from './lesson/ImageLightbox';
import SelectionTooltip from './lesson/SelectionTooltip';
import SectionRenderer from './lesson/SectionRenderer';
import { useProgress } from '../contexts/ProgressContext';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Quiz from './education/Quiz';
import { getPreviousLessonId, getLevelForLesson, getBeginnerLessonIds, getIntermediateLessonIds, getAdvancedLessonIds } from '../utils/courseUtils';
import { INTERMEDIATE_LEVEL, ADVANCED_LEVEL } from '../data/levels';
import { fetchLessonById, LessonData } from '../services/lessonService';
import { useEntitlements } from '../contexts/EntitlementsContext';
import { canAccessLevel, hasCommunityAccess } from '../services/paymentService';
import UpgradePaywall from './ui/UpgradePaywall';
import Certificate from './ui/Certificate';
import { useAuth } from '../contexts/AuthContext';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

// Cripto Experto Discord invite. Keep in sync with EducationNavbar + the
// Experto welcome email (_shared/welcome-email.ts).
const COMMUNITY_INVITE_URL = 'https://discord.gg/CQYyvzQb65';

// An in-progress quiz attempt saved by Quiz (sessionStorage). When one exists
// the quiz opens directly so the restored answers are visible.
function hasQuizDraft(key: string | undefined): boolean {
    if (!key || typeof window === 'undefined') return false;
    try {
        return window.sessionStorage.getItem(key) !== null;
    } catch {
        return false;
    }
}

declare global {
    interface Window {
        __currentLesson?: { title: string; level: string; id: number } | null;
    }
}

const LessonView: React.FC = () => {
    const { lessonId } = useParams<{ lessonId: string }>();
    const navigate = useNavigate();
    const { isLessonCompleted, markLessonComplete, loading } = useProgress();
    const { entitlements, loading: entitlementsLoading } = useEntitlements();
    const { user } = useAuth();

    const id = lessonId ? parseInt(lessonId, 10) : NaN;
    const isValidId = !isNaN(id) && id > 0;
    const [lesson, setLesson] = useState<LessonData | null>(null);
    const [lessonLoading, setLessonLoading] = useState(true);
    // Distinguish a genuine not-found (null) from a transport failure so an
    // entitled buyer who hits a network blip gets a retry, not a dead-end.
    const [lessonError, setLessonError] = useState(false);
    const [reloadKey, setReloadKey] = useState(0);

    // `setActiveSection` is used to reset scroll-spy state on lesson change.
    const [, setActiveSection] = useState(0);
    const quizStorageKey = Number.isNaN(id) ? undefined : `hc_quiz_draft_${id}`;
    // Reopen the quiz automatically when an in-progress attempt survived a
    // reload; otherwise the restored answers hide behind "Comenzar Quiz".
    const [showQuiz, setShowQuiz] = useState(() => hasQuizDraft(quizStorageKey));
    const [quizPassed, setQuizPassed] = useState(false);
    const [saveError, setSaveError] = useState(false);
    const [lastScore, setLastScore] = useState<number | null>(null);
    const [retryingSave, setRetryingSave] = useState(false);
    const [isLocked, setIsLocked] = useState(false);
    const [showCert, setShowCert] = useState(false);

    // Custom hooks
    const scrollProgress = useScrollProgress();
    const { prevLesson, nextLesson, canGoNext } = useLessonNavigation(id, isLessonCompleted(id), isLessonCompleted);

    // Image lightbox state
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

    // Focus Mode
    const [isFocusMode, setIsFocusMode] = useState(false);

    // Load lesson data. Free lessons resolve from the bundle instantly; paid
    // lessons are fetched from the gated Edge Function (async). The cancelled
    // flag guards against a stale resolve when the route id changes mid-fetch.
    useEffect(() => {
        let cancelled = false;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLessonLoading(true);
        setLessonError(false);
        fetchLessonById(id)
            .then((lessonData) => {
                if (cancelled) return;
                setLesson(lessonData);
                setLessonLoading(false);
                if (lessonData) {
                    try { localStorage.setItem('last_lesson_id', String(lessonData.id)); } catch { /* */ }
                    window.__currentLesson = { title: lessonData.title, level: lessonData.level, id: lessonData.id };
                } else {
                    window.__currentLesson = null;
                }
            })
            .catch(() => {
                if (cancelled) return;
                // A real fetch failure (network/server), not a missing lesson.
                setLesson(null);
                setLessonError(true);
                setLessonLoading(false);
                window.__currentLesson = null;
            });
        return () => { cancelled = true; window.__currentLesson = null; };
    }, [id, reloadKey]);

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

    // Scroll to top on lesson change — reset local UI state in response to a
    // route parameter change (idiomatic React pattern).
    useEffect(() => {
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveSection(0);

        setShowQuiz(hasQuizDraft(Number.isNaN(id) ? undefined : `hc_quiz_draft_${id}`));

        setQuizPassed(false);
        setSaveError(false);
        setLastScore(null);
        setRetryingSave(false);
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

    // Hard paywall: if the lesson's level isn't in the user's tier, show the
    // upgrade screen. This is checked BEFORE loading/not-found because paid
    // lesson bodies aren't bundled and the gated fetch will (correctly) fail for
    // non-premium users, so we must not fall through to a "not found" state.
    const lessonLevel = getLevelForLesson(id);
    const LEVEL_TITLES: Record<string, string> = {
        beginner: 'Nivel Principiante',
        intermediate: 'Nivel Intermedio',
        advanced: 'Nivel Avanzado',
    };
    if (!entitlementsLoading && !canAccessLevel(entitlements, lessonLevel)) {
        // Celebrate-then-offer: when the visitor just finished every lesson of
        // the previous level, this paywall is their graduation moment, not a
        // generic lock screen.
        const prevLevelIds =
            lessonLevel === 'intermediate' ? getBeginnerLessonIds()
            : lessonLevel === 'advanced' ? getIntermediateLessonIds()
            : [];
        const graduated =
            !loading && prevLevelIds.length > 0 && prevLevelIds.every((lid) => isLessonCompleted(lid));
        const targetLevel = lessonLevel === 'advanced' ? ADVANCED_LEVEL : INTERMEDIATE_LEVEL;
        return (
            <UpgradePaywall
                levelTitle={LEVEL_TITLES[lessonLevel] ?? 'Este nivel'}
                teaser={targetLevel.modules.map((m) => m.title)}
                completedContext={
                    graduated
                        ? {
                              completedLevelTitle:
                                  lessonLevel === 'advanced'
                                      ? LEVEL_TITLES.intermediate
                                      : LEVEL_TITLES.beginner,
                              lessonsCompleted: prevLevelIds.length,
                              xp: prevLevelIds.length * 100,
                          }
                        : undefined
                }
                onUpgrade={() => navigate('/education?upgrade=inversor')}
                onBack={() => navigate('/education')}
            />
        );
    }

    if (lessonError) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-navy-950 p-4">
                <div className="text-center max-w-md bg-navy-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <AlertCircle size={48} className="mx-auto text-amber-500 mb-4" aria-hidden="true" />
                    <h2 className="text-2xl font-bold mb-2">No pudimos cargar la lección</h2>
                    <p className="text-navy-400 mb-6 leading-relaxed">
                        Puede ser un problema temporal de conexión. Tu acceso está intacto. Intenta de nuevo en un momento.
                    </p>
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => setReloadKey((k) => k + 1)}
                            className="w-full py-3 bg-brand-500 hover:bg-brand-400 text-navy-900 font-bold rounded-xl transition-all inline-flex items-center justify-center gap-2"
                        >
                            <RefreshCw size={18} aria-hidden="true" /> Reintentar
                        </button>
                        <a
                            href={`mailto:hablemoscripto@gmail.com?subject=${encodeURIComponent(`No carga la lección ${id}`)}`}
                            className="w-full py-3 bg-navy-800 hover:bg-navy-700 text-white font-medium rounded-xl transition-all"
                        >
                            Escribir a soporte
                        </a>
                        <button onClick={() => navigate('/education')} className="text-navy-400 hover:text-white text-sm transition-colors">
                            Volver al inicio
                        </button>
                    </div>
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

    // Did finishing this lesson complete the whole level? (Sequential locking
    // guarantees the others are done.) Drives the in-flow certificate moment.
    const levelLessonIds =
        lessonLevel === 'beginner' ? getBeginnerLessonIds()
        : lessonLevel === 'intermediate' ? getIntermediateLessonIds()
        : getAdvancedLessonIds();
    const levelJustCompleted = quizPassed && levelLessonIds.length > 0 && levelLessonIds.every((lid) => isLessonCompleted(lid));
    const studentName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Estudiante';

    const handleQuizComplete = async (score: number) => {
        // Only show the success/certificate state if the completion actually
        // persisted — otherwise a silent save failure would falsely claim "+100 XP"
        // and (on a level's last lesson) hide the certificate with no explanation.
        setLastScore(score); // keep the passing score so the user can retry the save without redoing the quiz
        const saved = await markLessonComplete(id, score);
        if (saved) {
            setSaveError(false);
            setQuizPassed(true);
        } else {
            setSaveError(true);
        }
    };

    const handleRetrySave = async () => {
        if (lastScore === null || retryingSave) return;
        setRetryingSave(true);
        await handleQuizComplete(lastScore);
        setRetryingSave(false);
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

            {showCert && (
                <Certificate
                    studentName={studentName}
                    courseName="Curso de Criptomonedas"
                    level={LEVEL_TITLES[lessonLevel] ?? 'Nivel'}
                    date={new Date().toLocaleDateString('es-CO')}
                    variant={(lessonLevel as 'beginner' | 'intermediate' | 'advanced')}
                    onClose={() => setShowCert(false)}
                />
            )}

            <main id="contenido" tabIndex={-1} className="min-h-screen bg-navy-950 pb-20 outline-none">
                {/* Progress Bar Fixed Top */}
                <div className="fixed top-16 left-0 w-full h-1 bg-navy-900 z-30" role="progressbar" aria-label="Progreso de lectura" aria-valuenow={Math.round(scrollProgress * 100)} aria-valuemin={0} aria-valuemax={100}>
                    <div className="h-full bg-brand-500 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }}></div>
                </div>

                {/* Top Navigation Bar — non-sticky on mobile so it doesn't stack
                    on top of the (sticky) EducationNavbar and bury content;
                    re-stickies from sm: up where there's vertical room. */}
                <nav aria-label="Navegación de la lección" className="static sm:sticky top-0 z-40 bg-navy-950/80 backdrop-blur-md border-b border-white/10">
                    <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                        {/* Left: Back to level dashboard */}
                        <button
                            onClick={() => navigate(`/education/${getLevelForLesson(id)}`)}
                            className="flex items-center justify-center gap-1 px-3 min-h-[44px] text-navy-400 hover:text-white hover:bg-navy-800 rounded-lg transition-colors"
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
                                    className="min-h-[44px] min-w-[44px] flex items-center justify-center text-navy-400 hover:text-white hover:bg-navy-800 rounded-lg transition-colors"
                                    title={`Anterior: ${prevLesson.title}`}
                                    aria-label={`Lección anterior: ${prevLesson.title}`}
                                >
                                    <ChevronLeft size={20} />
                                </button>
                            ) : (
                                <div className="w-11"></div>
                            )}

                            {/* Lesson title — drop the numeric prefix on mobile to give the title more room */}
                            <span className="font-medium text-navy-200 truncate max-w-[200px] sm:max-w-md text-sm sm:text-base">
                                <span className="hidden sm:inline">{lesson.number?.split(' ')[0] || id}. </span>
                                {lesson.title}
                            </span>

                            {/* Next lesson arrow */}
                            {nextLesson ? (
                                <button
                                    onClick={() => canGoNext && navigate(`/education/lesson/${nextLesson.id}`)}
                                    disabled={!canGoNext}
                                    className={`min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg transition-colors ${
                                        canGoNext
                                            ? 'text-navy-400 hover:text-white hover:bg-navy-800'
                                            : 'text-navy-400 cursor-not-allowed'
                                    }`}
                                    title={canGoNext ? `Siguiente: ${nextLesson.title}` : 'Completa esta lección para continuar'}
                                    aria-label={canGoNext ? `Siguiente lección: ${nextLesson.title}` : 'Completa esta lección para continuar'}
                                >
                                    {canGoNext ? <ChevronRight size={20} /> : <Lock size={16} />}
                                </button>
                            ) : (
                                <div className="w-11"></div>
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
                </nav>

                {/* Header */}
                <section className="bg-navy-900 border-b border-white/5 py-12">
                    <div className="container max-w-7xl mx-auto px-6">
                        <div className="flex items-center gap-2 text-sm text-brand-500 font-bold uppercase tracking-wider mb-4">
                            <span className="px-2 py-1 bg-brand-500/10 rounded border border-brand-500/20">Lección {lesson.number?.split(' ')[0] || id}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">{lesson.title}</h1>
                        <p className="text-lg text-navy-400 max-w-3xl leading-relaxed mb-8">{lesson.description}</p>

                        <div className="flex flex-wrap gap-6 text-sm font-medium text-navy-400 border-t border-white/5 pt-6 items-center">
                            <div className="flex items-center gap-2"><Clock size={16} className="text-brand-500" /> {lesson.duration}</div>
                            <div className="flex items-center gap-2">
                                {lesson.videoId
                                    ? <><Video size={16} className="text-brand-500" /> Video + Texto</>
                                    : <><BookOpen size={16} className="text-brand-500" /> Lectura</>}
                            </div>
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
                        {/* Video Section — only when the lesson actually has a video */}
                        {lesson.videoId && (
                            <VideoPlayer
                                title={lesson.title}
                                videoId={lesson.videoId}
                            />
                        )}

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

                        {/* Content Sections with Checkpoint Quizzes.
                            Measure capped to ~70ch and centered for comfortable
                            study-length reading; bold rendered white so emphasized
                            terms pop on the dark theme. */}
                        <div className="prose prose-invert prose-lg max-w-[70ch] mx-auto break-words prose-strong:text-white">
                            {lesson.sections.map((section, idx) => (
                                <SectionRenderer
                                    key={idx}
                                    section={section}
                                    index={idx}
                                    checkpoint={lesson.checkpointQuizzes?.find(cp => cp.sectionIndex === idx)}
                                    onImageClick={openLightbox}
                                />
                            ))}
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
                                        storageKey={quizStorageKey}
                                    />

                                    {quizPassed && levelJustCompleted && (
                                        <div className="mt-8 text-center animate-in zoom-in" role="status" aria-live="polite">
                                            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-brand-500/15 to-brand-400/5 border border-brand-500/30">
                                                <div className="flex items-center gap-2 text-brand-400 font-bold uppercase tracking-widest text-xs">
                                                    <Award size={18} aria-hidden="true" />
                                                    Completaste el {LEVEL_TITLES[lessonLevel] ?? 'nivel'}
                                                </div>
                                                <p className="text-navy-200 text-sm max-w-sm">Terminaste todas las lecciones de este nivel. Reclama tu certificado y compártelo.</p>
                                                <div className="flex flex-col sm:flex-row gap-3">
                                                    <button
                                                        onClick={() => setShowCert(true)}
                                                        className="px-8 py-4 bg-brand-500 hover:bg-brand-400 text-navy-950 font-black uppercase tracking-widest text-xs rounded-xl shadow-glow-brand inline-flex items-center gap-2 hover:scale-105 active:scale-[0.98] transition-all"
                                                    >
                                                        <Award size={18} aria-hidden="true" /> Ver mi certificado
                                                    </button>
                                                    <button
                                                        onClick={handleNextLesson}
                                                        className="px-6 py-4 bg-navy-800 hover:bg-navy-700 text-white font-bold rounded-xl transition-all inline-flex items-center gap-2"
                                                    >
                                                        Continuar <ArrowRight size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {quizPassed && !levelJustCompleted && (
                                        <div className="mt-8 text-center animate-in zoom-in" role="status" aria-live="polite">
                                            <div className="inline-flex flex-col items-center gap-3 p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
                                                <div className="flex items-center gap-2 text-green-400 text-sm font-bold">
                                                    <CheckCircle size={18} aria-hidden="true" />
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

                                    {saveError && !quizPassed && (
                                        <div className="mt-8 text-center" role="alert" aria-live="assertive">
                                            <div className="inline-flex flex-col items-center gap-2 p-6 rounded-2xl bg-red-500/10 border border-red-500/20">
                                                <div className="flex items-center gap-2 text-red-400 text-sm font-bold">
                                                    <AlertCircle size={18} aria-hidden="true" />
                                                    No pudimos guardar tu progreso
                                                </div>
                                                <p className="text-navy-300 text-sm max-w-sm">
                                                    Revisa tu conexión y reintenta. No tienes que repetir el quiz.
                                                </p>
                                                <button
                                                    onClick={handleRetrySave}
                                                    disabled={retryingSave || lastScore === null}
                                                    aria-busy={retryingSave}
                                                    className="mt-1 px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-navy-950 font-bold rounded-xl transition-all inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {retryingSave ? (
                                                        <><Loader2 size={18} className="animate-spin" aria-hidden="true" /> Reintentando...</>
                                                    ) : (
                                                        <><RefreshCw size={18} aria-hidden="true" /> Reintentar guardado</>
                                                    )}
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
                                            <p className="text-xs text-navy-400 uppercase tracking-wider mb-1">Anterior</p>
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
                                            <p className={`text-xs uppercase tracking-wider mb-1 ${canGoNext ? 'text-brand-400' : 'text-navy-400'}`}>
                                                {canGoNext ? 'Siguiente' : 'Bloqueado'}
                                            </p>
                                            <p className={`text-sm truncate transition-colors ${
                                                canGoNext ? 'text-navy-300 group-hover:text-white' : 'text-navy-400'
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
                                                <Lock size={18} className="text-navy-400" />
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
                                    {hasCommunityAccess(entitlements) && (
                                    <a
                                        href={COMMUNITY_INVITE_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-between p-3 bg-navy-800 rounded-xl hover:bg-navy-700 hover:border-brand-500/30 border border-transparent transition-all text-left group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <MessageSquare size={18} className="text-brand-500" />
                                            <span className="text-navy-300 group-hover:text-white text-sm transition-colors">Comunidad</span>
                                        </div>
                                        <ExternalLink size={14} className="text-navy-400 group-hover:text-brand-400 transition-colors" />
                                    </a>
                                    )}
                                    <a
                                        href={`mailto:hablemoscripto@gmail.com?subject=${encodeURIComponent(`Feedback · Lección ${lesson.number?.split(' ')[0] || id}: ${lesson.title}`)}`}
                                        className="w-full flex items-center justify-between p-3 bg-navy-800 rounded-xl hover:bg-navy-700 hover:border-brand-500/30 border border-transparent transition-all text-left group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <ThumbsUp size={18} className="text-brand-500" />
                                            <span className="text-navy-300 group-hover:text-white text-sm transition-colors">Dar Feedback</span>
                                        </div>
                                        <ExternalLink size={14} className="text-navy-400 group-hover:text-brand-400 transition-colors" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default LessonView;