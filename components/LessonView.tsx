import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { PlayCircle, CheckCircle, ArrowLeft, Lock, AlertCircle, Award, ArrowRight, BookOpen, Clock, Video } from 'lucide-react';
import { LESSONS_DATA } from '../data/courseData';

interface LessonViewProps {
  lessonId: number;
  completedLessons: number[];
  onComplete: (id: number) => void;
  onBack: () => void;
  onNext: () => void;
}

const LessonView: React.FC<LessonViewProps> = ({ lessonId, completedLessons, onComplete, onBack, onNext }) => {
  // Fetch data dynamically based on lessonId
  const data = LESSONS_DATA[lessonId];
  const isCompleted = completedLessons.includes(lessonId);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [quizState, setQuizState] = useState<{ [key: string]: string }>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // Reset state when lesson changes
  useEffect(() => {
    setQuizState({});
    setQuizSubmitted(false);
    setQuizScore(0);
    window.scrollTo(0, 0);
  }, [lessonId]);

  // Scroll Progress Logic
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Quiz Selection
  const handleOptionSelect = (questionId: string, optionId: string) => {
    if (quizSubmitted) return;
    setQuizState(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  // Handle Quiz Submission
  const handleSubmitQuiz = () => {
    if (!data || !data.quiz) return;

    const questions = data.quiz.questions;
    let score = 0;
    let allAnswered = true;

    questions.forEach((q: any) => {
        if (!quizState[q.id]) allAnswered = false;
        if (quizState[q.id] === q.correctAnswer) score++;
    });

    if (!allAnswered) {
        alert("Por favor responde todas las preguntas.");
        return;
    }

    setQuizScore(score);
    setQuizSubmitted(true);

    // Auto complete if passed
    if (score >= Math.ceil(questions.length * 0.7)) {
        onComplete(lessonId);
    }
  };

  // Fallback if data doesn't exist OR has no content
  if (!data || !data.sections || data.sections.length === 0) {
    return (
        <div className="container max-w-4xl mx-auto px-6 py-24 text-center animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-500">
                <Lock size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Contenido en desarrollo</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
                Estamos trabajando en el contenido de: <span className="text-brand-500 font-bold">{data ? data.title : 'Esta lección'}</span>.
                <br/>Por favor, continúa con las siguientes lecciones disponibles.
            </p>
            <button onClick={onBack} className="px-6 py-3 bg-brand-500 hover:bg-brand-400 transition-colors text-slate-900 font-bold rounded-xl shadow-lg shadow-brand-500/20">
                Volver al Nivel
            </button>
        </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      
      {/* Progress Bar Fixed Top */}
      <div className="fixed top-16 left-0 w-full h-1 bg-slate-900 z-30">
         <div className="h-full bg-brand-500 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }}></div>
      </div>

      {/* Header */}
      <section className="bg-slate-900 border-b border-white/5 py-12">
        <div className="container max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 text-sm text-brand-500 font-bold uppercase tracking-wider mb-4">
                <span className="px-2 py-1 bg-brand-500/10 rounded border border-brand-500/20">{data.level}</span>
                <span className="text-slate-500">•</span>
                <span>Lección {data.number}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">{data.title}</h1>
            <p className="text-lg text-slate-400 max-w-3xl leading-relaxed mb-8">{data.description}</p>
            
            <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-400 border-t border-white/5 pt-6">
                <div className="flex items-center gap-2"><Clock size={16} className="text-brand-500" /> {data.duration}</div>
                <div className="flex items-center gap-2"><Video size={16} className="text-brand-500" /> {data.type}</div>
                <div className="flex items-center gap-2"><BookOpen size={16} className="text-brand-500" /> {data.level}</div>
            </div>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
                {data.sections.map((section: any, idx: number) => {
                    if (section.type === 'intro') {
                        return (
                            <div key={idx} className="prose prose-invert prose-lg max-w-none">
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="w-1 h-8 bg-brand-500 rounded-full inline-block mr-2"></span>
                                    {section.title}
                                </h2>
                                <ReactMarkdown>{section.content || ''}</ReactMarkdown>
                                {section.highlight && (
                                    <div className="bg-gradient-to-r from-brand-500/10 to-transparent border-l-4 border-brand-500 p-6 rounded-r-xl my-8">
                                        <h4 className="text-brand-500 font-bold flex items-center gap-2 mb-2">
                                            <Award size={20} /> {section.highlight.title}
                                        </h4>
                                        <div className="text-slate-200">
                                            <ReactMarkdown>{section.highlight.text}</ReactMarkdown>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    }
                    if (section.type === 'video') {
                        return (
                            <div key={idx} className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
                                <div className="aspect-video flex items-center justify-center bg-slate-950 relative group cursor-pointer overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105"></div>
                                    <div className="w-20 h-20 bg-brand-500 rounded-full flex items-center justify-center text-slate-900 shadow-[0_0_30px_rgba(255,193,7,0.4)] group-hover:scale-110 transition-transform relative z-10">
                                        <PlayCircle size={40} fill="currentColor" />
                                    </div>
                                    <div className="absolute bottom-4 left-4 text-white text-sm font-medium bg-slate-900/80 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                        {section.placeholder}
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    if (section.type === 'main') {
                        return (
                            <div key={idx} className="prose prose-invert prose-lg max-w-none">
                                <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                                <ReactMarkdown>{section.content || ''}</ReactMarkdown>
                                {section.features && (
                                    <div className="grid sm:grid-cols-2 gap-4 not-prose mt-8">
                                        {section.features.map((feat: any, i: number) => (
                                            <div key={i} className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-brand-500/30 transition-colors">
                                                <div className="text-brand-500 mb-3 bg-slate-950 w-10 h-10 rounded-lg flex items-center justify-center"><feat.icon size={20} /></div>
                                                <h4 className="font-bold text-white mb-1">{feat.title}</h4>
                                                <p className="text-sm text-slate-400 leading-relaxed">{feat.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    }
                    if (section.type === 'comparison') {
                         return (
                            <div key={idx} className="prose prose-invert prose-lg max-w-none">
                                <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                                <p>{section.content}</p>
                                <div className="not-prose overflow-hidden rounded-xl border border-slate-800 mt-6 shadow-lg">
                                    <table className="w-full text-sm text-left text-slate-400">
                                        <thead className="text-xs text-slate-200 uppercase bg-slate-800">
                                            <tr>
                                                <th className="px-6 py-4">Aspecto</th>
                                                <th className="px-6 py-4">Tradicional</th>
                                                <th className="px-6 py-4 text-brand-500 font-bold">Cripto / Bitcoin</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {section.table?.map((row: any, r: number) => (
                                                <tr key={r} className="bg-slate-900/50 border-b border-slate-800 last:border-0 hover:bg-slate-800 transition-colors">
                                                    <td className="px-6 py-4 font-medium text-white">{row.aspect}</td>
                                                    <td className="px-6 py-4">{row.trad}</td>
                                                    <td className="px-6 py-4 text-white font-medium">{row.btc}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                         );
                    }
                    if (section.type === 'takeaways') {
                        return (
                           <div key={idx} className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 not-prose">
                               <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                   <CheckCircle className="text-brand-500" /> Resumen
                               </h3>
                               <ul className="space-y-3">
                                   {section.items?.map((item: string, i: number) => (
                                       <li key={i} className="flex items-start gap-3 text-slate-300">
                                           <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0"></div>
                                           <span>{item}</span>
                                       </li>
                                   ))}
                               </ul>
                           </div>
                        );
                    }
                    return null;
                })}

                {/* Quiz Section */}
                {data.quiz && data.quiz.questions && data.quiz.questions.length > 0 && (
                <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden mt-16 shadow-2xl">
                    <div className="p-6 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <AlertCircle className="text-brand-500" /> Verifica tu conocimiento
                        </h2>
                        <span className="text-xs font-bold bg-slate-900 text-slate-400 px-3 py-1 rounded-full border border-slate-700">
                            {data.quiz.questions.length} Preguntas
                        </span>
                    </div>
                    <div className="p-8 space-y-8">
                        {data.quiz.questions.map((q: any, idx: number) => {
                            const selected = quizState[q.id];
                            const showFeedback = quizSubmitted;

                            return (
                                <div key={q.id} className="space-y-4">
                                    <p className="font-medium text-white text-lg">{idx + 1}. {q.question}</p>
                                    <div className="space-y-2">
                                        {q.options.map((opt: any) => {
                                            let optionClass = "w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between group ";
                                            
                                            if (showFeedback) {
                                                if (opt.id === q.correctAnswer) optionClass += "bg-green-500/10 border-green-500/50 text-green-500";
                                                else if (selected === opt.id) optionClass += "bg-red-500/10 border-red-500/50 text-red-500 opacity-60";
                                                else optionClass += "bg-slate-950 border-slate-800 opacity-40";
                                            } else {
                                                if (selected === opt.id) optionClass += "bg-brand-500/10 border-brand-500 text-white shadow-[0_0_15px_rgba(255,193,7,0.1)]";
                                                else optionClass += "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-600 hover:bg-slate-900";
                                            }

                                            return (
                                                <button
                                                    key={opt.id}
                                                    onClick={() => handleOptionSelect(q.id, opt.id)}
                                                    disabled={quizSubmitted}
                                                    className={optionClass}
                                                >
                                                    <span>{opt.text}</span>
                                                    {showFeedback && opt.id === q.correctAnswer && <CheckCircle size={18} />}
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
                                    {showFeedback && selected && selected !== q.correctAnswer && (
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
                            <div className={`p-8 rounded-2xl text-center border ${quizScore >= Math.ceil(data.quiz.questions.length * 0.7) ? 'bg-green-500/10 border-green-500/30' : 'bg-slate-800 border-slate-700'}`}>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Resultados: <span className={quizScore >= Math.ceil(data.quiz.questions.length * 0.7) ? 'text-green-500' : 'text-brand-500'}>{quizScore} / {data.quiz.questions.length}</span>
                                </h3>
                                {quizScore >= Math.ceil(data.quiz.questions.length * 0.7) ? (
                                    <div>
                                        <p className="text-green-400 mb-6">¡Excelente trabajo! Has completado esta lección.</p>
                                        <button 
                                            onClick={onNext}
                                            className="px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-colors inline-flex items-center gap-2 shadow-lg shadow-green-500/20 hover:scale-105 transform duration-200"
                                        >
                                            Siguiente Lección <ArrowRight size={20} />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <p className="text-slate-300">Necesitas el 70% para aprobar. Repasa el contenido e inténtalo de nuevo.</p>
                                        <button 
                                            onClick={() => {
                                                setQuizSubmitted(false);
                                                setQuizState({});
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
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
                )}

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
                
                {/* Nav Card */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sticky top-24 shadow-xl">
                    <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                        <BookOpen size={18} className="text-brand-500" /> Navegación
                    </h3>
                    <div className="space-y-3">
                        <button onClick={onBack} className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-brand-500/50 hover:text-white text-slate-400 transition-all text-sm font-medium group">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Volver al Nivel
                        </button>
                        
                        <div className="h-px bg-slate-800 my-4"></div>

                        <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-slate-400">Progreso del Nivel</span>
                            <span className="text-white font-bold">{Math.round(completedLessons.length / 18 * 100)}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                            <div className="h-full bg-brand-500 relative" style={{ width: `${completedLessons.length / 18 * 100}%` }}>
                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 text-center mt-2">{completedLessons.length} de 18 lecciones completadas</p>
                    </div>

                    <div className="mt-8">
                        <h3 className="font-bold text-white mb-4">Recursos Extra</h3>
                        <div className="space-y-3">
                            <a href="#" className="flex items-center gap-3 text-sm text-slate-400 hover:text-brand-500 transition-colors p-2 hover:bg-slate-950 rounded-lg">
                                <BookOpen size={16} /> <span className="truncate">Documentación Oficial</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 text-sm text-slate-400 hover:text-brand-500 transition-colors p-2 hover:bg-slate-950 rounded-lg">
                                <Video size={16} /> <span className="truncate">Video Complementario</span>
                            </a>
                        </div>
                    </div>

                    {!isCompleted && !quizSubmitted && data.quiz && data.quiz.questions && data.quiz.questions.length > 0 && (
                        <div className="mt-8 p-4 bg-brand-500/10 rounded-xl border border-brand-500/20 text-center animate-pulse-slow">
                            <p className="text-sm text-brand-400 mb-3 font-medium">Completa el quiz para avanzar</p>
                            <button 
                                onClick={() => document.querySelector('.bg-slate-900.rounded-2xl.mt-16')?.scrollIntoView({ behavior: 'smooth' })}
                                className="text-xs font-bold uppercase tracking-wider text-slate-900 bg-brand-500 px-4 py-2 rounded-lg hover:bg-brand-400 transition-colors shadow-lg shadow-brand-500/20 w-full"
                            >
                                Ir al Quiz
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default LessonView;