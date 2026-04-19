import React from 'react';
import { CheckCircle, AlertTriangle, BookOpen, ZoomIn, LucideIcon, Users, Lock, Link, Globe, Shield, Layers, Zap, Server, Network, Smartphone, Activity, RefreshCw, PiggyBank, Banknote, Wallet, BarChart3, Search, Briefcase, Gem, Cpu, Scissors, Landmark, Percent, TrendingDown, TrendingUp, AlertCircle, Clock, Award, Brain, Eye, Crosshair, Target, Anchor, MessageSquare, HelpCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import type { LessonSection } from '../../services/lessonService';
import type { CheckpointQuizData } from '../../services/lessonService';
import CheckpointQuiz from '../education/CheckpointQuiz';

// Icon map for dynamic icon rendering from course data
const ICON_MAP: Record<string, LucideIcon> = {
    Users, Lock, Link, Globe, Shield, Layers, Zap, Server, Network, Smartphone,
    Activity, RefreshCw, PiggyBank, Banknote, Wallet, BarChart3, Search, Briefcase,
    Gem, Cpu, Scissors, Landmark, Percent, TrendingDown, TrendingUp, AlertCircle,
    AlertTriangle, CheckCircle, Clock, BookOpen, Award, Brain, Eye, Crosshair,
    Target, Anchor, MessageSquare
};

interface SectionRendererProps {
    section: LessonSection;
    index: number;
    checkpoint?: CheckpointQuizData;
    onImageClick: (src: string, alt: string) => void;
}

export default function SectionRenderer({ section, index, checkpoint, onImageClick }: SectionRendererProps) {
    return (
        <div>
            <div className="mb-8">
                {/* Section Title */}
                {section.title && (
                    <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                )}

                {/* Intro Content */}
                {section.type === 'intro' && section.content && (
                    <div className="text-lg text-navy-300 leading-relaxed font-medium border-l-4 border-brand-500 pl-4">
                        <ReactMarkdown rehypePlugins={[rehypeSanitize]}>{section.content}</ReactMarkdown>
                    </div>
                )}

                {/* Section Image */}
                {section.image && (
                    <div className="my-6 not-prose">
                        <div
                            className="relative group cursor-pointer"
                            onClick={() => onImageClick(section.image!, section.imageAlt || section.title || 'Infographic')}
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
                            <div className="mt-4 bg-gradient-to-r from-brand-500/10 to-brand-400/5 border border-brand-500/30 rounded-xl p-4">
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

                {/* Main Content */}
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

                {/* Comparison Section */}
                {section.type === 'comparison' && (
                    <div className="relative grid md:grid-cols-2 gap-4 my-6 not-prose">
                        {/* VS Badge */}
                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <div className="bg-navy-800 border-2 border-navy-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                                <span className="text-xs font-bold text-navy-300">VS</span>
                            </div>
                        </div>

                        {/* Left Side - Positive (green) */}
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

                        {/* Right Side - Negative (red) */}
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

                {/* Glossary Callout — defines terms at first occurrence */}
                {section.type === 'glossary' && section.terms && section.terms.length > 0 && (
                    <div className="my-6 bg-navy-900/60 border border-brand-500/20 rounded-xl p-5 not-prose">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-brand-500/15 flex items-center justify-center shrink-0">
                                <HelpCircle size={18} className="text-brand-400" />
                            </div>
                            <p className="text-xs uppercase tracking-wider text-brand-400 font-bold">¿Qué significa?</p>
                        </div>
                        <dl className="space-y-4">
                            {section.terms.map((t, i) => (
                                <div key={i} className="pl-2 border-l-2 border-brand-500/30">
                                    <dt className="font-bold text-white text-sm mb-1">{t.term}</dt>
                                    <dd className="text-sm text-navy-300 leading-relaxed">{t.definition}</dd>
                                    {t.whyItMatters && (
                                        <dd className="text-xs text-navy-400 mt-2 italic">
                                            <span className="text-brand-400/80 font-semibold not-italic">Por qué importa: </span>
                                            {t.whyItMatters}
                                        </dd>
                                    )}
                                </div>
                            ))}
                        </dl>
                    </div>
                )}

                {/* Takeaways Section */}
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
            {checkpoint && (
                <div className="not-prose">
                    <CheckpointQuiz
                        id={`checkpoint-${checkpoint.id}`}
                        title={checkpoint.title}
                        questions={checkpoint.questions}
                    />
                </div>
            )}
        </div>
    );
}
