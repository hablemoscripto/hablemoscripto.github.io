import React, { useEffect, useRef, useState } from 'react';
import { Bitcoin, Award, Sparkles, Download, Share2, Loader2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { toPng } from 'html-to-image';

interface CertificateProps {
    studentName: string;
    courseName: string;
    level: string;
    date: string;
    variant?: 'beginner' | 'intermediate' | 'advanced';
    onClose: () => void;
}

const VARIANT_STYLES = {
    beginner: {
        gradient: 'from-brand-400 to-brand-600',
        gradientBorder: 'from-brand-400/60 via-brand-500/30 to-brand-600/60',
        accent: 'text-brand-400',
        accentBg: 'bg-brand-500/10',
        borderColor: 'border-brand-500/20',
        glowColor: 'shadow-[0_0_60px_rgba(245,158,11,0.15)]',
        badge: 'Bronce',
    },
    intermediate: {
        gradient: 'from-emerald-400 to-emerald-600',
        gradientBorder: 'from-emerald-400/60 via-emerald-500/30 to-emerald-600/60',
        accent: 'text-emerald-400',
        accentBg: 'bg-emerald-500/10',
        borderColor: 'border-emerald-500/20',
        glowColor: 'shadow-[0_0_60px_rgba(16,185,129,0.15)]',
        badge: 'Plata',
    },
    advanced: {
        gradient: 'from-brand-300 to-brand-500',
        gradientBorder: 'from-brand-300/60 via-brand-400/30 to-brand-500/60',
        accent: 'text-brand-300',
        accentBg: 'bg-brand-300/10',
        borderColor: 'border-brand-300/30',
        glowColor: 'shadow-[0_0_60px_rgba(252,211,77,0.2)]',
        badge: 'Oro',
    },
};

const Certificate: React.FC<CertificateProps> = ({ studentName, courseName, level, date, variant = 'beginner', onClose }) => {
    const styles = VARIANT_STYLES[variant];
    const shouldReduceMotion = useReducedMotion();
    const certRef = useRef<HTMLDivElement>(null);
    const [busy, setBusy] = useState(false);
    const fileName = `certificado-${variant}-hablemoscripto.png`;

    const renderPng = async (): Promise<string | null> => {
        if (!certRef.current) return null;
        try {
            // Render at 2x and wait a tick so fonts/gradients are settled.
            return await toPng(certRef.current, { pixelRatio: 2, cacheBust: true, backgroundColor: '#020617' });
        } catch (err) {
            console.error('Certificate export failed:', err);
            return null;
        }
    };

    const handleDownload = async () => {
        setBusy(true);
        const url = await renderPng();
        setBusy(false);
        if (!url) return;
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
    };

    const handleShare = async () => {
        setBusy(true);
        const url = await renderPng();
        if (!url) { setBusy(false); return; }
        try {
            const blob = await (await fetch(url)).blob();
            const file = new File([blob], fileName, { type: 'image/png' });
            const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean };
            if (nav.canShare && nav.canShare({ files: [file] })) {
                await nav.share({ files: [file], title: 'Mi certificado de Hablemos Cripto', text: `Completé el nivel ${level} en Hablemos Cripto.` });
            } else {
                // No native share (most desktops): fall back to downloading the image.
                const a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                a.click();
            }
        } catch {
            // User cancelled the share sheet, or it's unsupported — no-op.
        } finally {
            setBusy(false);
        }
    };

    useEffect(() => {
        if (shouldReduceMotion) return;
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };
        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ['#f59e0b', '#10b981', '#fcd34d'] });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ['#f59e0b', '#10b981', '#fcd34d'] });
        }, 250);

        return () => clearInterval(interval);
    }, [shouldReduceMotion]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md overflow-y-auto">
            <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { scale: 0.9, opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.5, ease: 'easeOut' }}
                className={`relative max-w-3xl w-full`}
            >
                {/* Export / Close Controls (not part of the captured image) */}
                <div className="absolute -top-12 right-0 flex gap-3 z-20">
                    <button
                        onClick={handleDownload}
                        disabled={busy}
                        className="px-4 py-2 bg-brand-500 text-navy-900 font-bold rounded-lg hover:bg-brand-400 transition-colors flex items-center gap-2 disabled:opacity-60"
                    >
                        {busy ? <Loader2 size={18} className="animate-spin" aria-hidden="true" /> : <Download size={18} aria-hidden="true" />} Descargar
                    </button>
                    <button
                        onClick={handleShare}
                        disabled={busy}
                        className="px-4 py-2 bg-navy-800 text-white font-medium rounded-lg hover:bg-navy-700 transition-colors flex items-center gap-2 disabled:opacity-60"
                    >
                        <Share2 size={18} aria-hidden="true" /> Compartir
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-navy-800 text-white font-medium rounded-lg hover:bg-navy-700 transition-colors"
                    >
                        Cerrar
                    </button>
                </div>

                {/* Certificate visual — this node is captured as the shareable PNG */}
                <div ref={certRef} className={`relative rounded-3xl overflow-hidden bg-navy-950 ${styles.glowColor}`}>
                {/* Gradient border effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${styles.gradientBorder} p-[1px]`}>
                    <div className="w-full h-full rounded-3xl bg-navy-950" />
                </div>

                {/* Certificate content */}
                <div className="relative z-10 p-8 md:p-14 text-center">
                    {/* Decorative corner accents */}
                    <div className={`absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 ${styles.borderColor} rounded-tl-xl opacity-50`} />
                    <div className={`absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 ${styles.borderColor} rounded-tr-xl opacity-50`} />
                    <div className={`absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 ${styles.borderColor} rounded-bl-xl opacity-50`} />
                    <div className={`absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 ${styles.borderColor} rounded-br-xl opacity-50`} />

                    {/* Header */}
                    <div className="mb-10">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <Bitcoin size={28} className="text-brand-500" />
                            <span className="font-heading text-lg font-bold text-white tracking-wider uppercase">
                                Hablemos<span className="text-brand-500">Cripto</span>
                            </span>
                        </div>
                        <div className={`h-px w-24 mx-auto bg-gradient-to-r ${styles.gradient} opacity-50`} />
                    </div>

                    {/* Title */}
                    <div className="mb-10">
                        <motion.div
                            initial={shouldReduceMotion ? { opacity: 0 } : { scale: 0 }}
                            animate={shouldReduceMotion ? { opacity: 1 } : { scale: 1 }}
                            transition={shouldReduceMotion ? { duration: 0.2 } : { delay: 0.3, type: 'spring', stiffness: 200 }}
                            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${styles.gradient} flex items-center justify-center mx-auto mb-6 rotate-3`}
                        >
                            <Sparkles size={36} className="text-white" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 tracking-tight">
                            Certificado de Finalización
                        </h2>
                        <p className="text-navy-400 text-sm uppercase tracking-widest">Este documento certifica que</p>
                    </div>

                    {/* Student Name */}
                    <div className="mb-10">
                        <div className={`inline-block px-8 py-3 rounded-2xl ${styles.accentBg} border ${styles.borderColor}`}>
                            <h3 className={`text-3xl md:text-4xl font-heading font-bold ${styles.accent}`}>
                                {studentName}
                            </h3>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-10 space-y-2">
                        <p className="text-navy-400">ha completado satisfactoriamente el nivel</p>
                        <h4 className="text-2xl font-heading font-bold text-white uppercase tracking-widest">{level}</h4>
                        <p className="text-navy-400">del curso <span className="text-white font-semibold">{courseName}</span></p>
                    </div>

                    {/* Footer */}
                    <div className={`h-px w-full bg-gradient-to-r from-transparent ${styles.gradientBorder} to-transparent mb-8`} />
                    <div className="flex justify-between items-end max-w-md mx-auto">
                        <div className="text-center">
                            <p className="text-white font-semibold text-sm">{date}</p>
                            <p className="text-navy-400 text-xs uppercase tracking-widest mt-1">Fecha</p>
                        </div>

                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${styles.gradient} flex items-center justify-center`}>
                            <Award size={28} className="text-white" />
                        </div>

                        <div className="text-center">
                            <p className="text-white font-semibold text-sm">HablemosCripto</p>
                            <p className="text-navy-400 text-xs uppercase tracking-widest mt-1">Certificación</p>
                        </div>
                    </div>
                </div>
                </div>
            </motion.div>

            <style>{`
                @media print {
                    body * { visibility: hidden; }
                    #root { display: none; }
                    .fixed {
                        position: absolute; inset: 0;
                        background: #020617;
                        padding: 0;
                        display: block !important;
                        visibility: visible !important;
                    }
                    .fixed * { visibility: visible !important; }
                    .print\\:hidden { display: none !important; }
                }
            `}</style>
        </div>
    );
};

export default Certificate;
