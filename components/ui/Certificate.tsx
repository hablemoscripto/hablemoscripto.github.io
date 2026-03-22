import React, { useEffect } from 'react';
import { Bitcoin, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

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
        gradient: 'from-indigo-400 to-indigo-600',
        gradientBorder: 'from-indigo-400/60 via-indigo-500/30 to-indigo-600/60',
        accent: 'text-indigo-400',
        accentBg: 'bg-indigo-500/10',
        borderColor: 'border-indigo-500/20',
        glowColor: 'shadow-[0_0_60px_rgba(99,102,241,0.15)]',
        badge: 'Plata',
    },
    advanced: {
        gradient: 'from-rose-400 to-rose-600',
        gradientBorder: 'from-rose-400/60 via-rose-500/30 to-rose-600/60',
        accent: 'text-rose-400',
        accentBg: 'bg-rose-500/10',
        borderColor: 'border-rose-500/20',
        glowColor: 'shadow-[0_0_60px_rgba(244,63,94,0.15)]',
        badge: 'Oro',
    },
};

const Certificate: React.FC<CertificateProps> = ({ studentName, courseName, level, date, variant = 'beginner', onClose }) => {
    const styles = VARIANT_STYLES[variant];

    useEffect(() => {
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };
        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ['#f59e0b', '#10b981', '#3b82f6'] });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ['#f59e0b', '#10b981', '#3b82f6'] });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`relative max-w-3xl w-full rounded-3xl overflow-hidden ${styles.glowColor}`}
            >
                {/* Print/Close Controls */}
                <div className="absolute -top-12 right-0 flex gap-4 print:hidden z-20">
                    <button
                        onClick={() => window.print()}
                        className="px-4 py-2 bg-brand-500 text-slate-900 font-bold rounded-lg hover:bg-brand-400 transition-colors flex items-center gap-2"
                    >
                        <Award size={20} /> Guardar PDF
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors"
                    >
                        Cerrar
                    </button>
                </div>

                {/* Gradient border effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${styles.gradientBorder} p-[1px]`}>
                    <div className="w-full h-full rounded-3xl bg-slate-950" />
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
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${styles.gradient} flex items-center justify-center mx-auto mb-6 rotate-3`}
                        >
                            <Sparkles size={36} className="text-white" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 tracking-tight">
                            Certificado de Finalización
                        </h2>
                        <p className="text-slate-500 text-sm uppercase tracking-widest">Este documento certifica que</p>
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
                        <p className="text-slate-400">ha completado satisfactoriamente el nivel</p>
                        <h4 className="text-2xl font-heading font-bold text-white uppercase tracking-widest">{level}</h4>
                        <p className="text-slate-400">del curso <span className="text-white font-semibold">{courseName}</span></p>
                    </div>

                    {/* Footer */}
                    <div className={`h-px w-full bg-gradient-to-r from-transparent ${styles.gradientBorder} to-transparent mb-8`} />
                    <div className="flex justify-between items-end max-w-md mx-auto">
                        <div className="text-center">
                            <p className="text-white font-semibold text-sm">{date}</p>
                            <p className="text-slate-600 text-xs uppercase tracking-widest mt-1">Fecha</p>
                        </div>

                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${styles.gradient} flex items-center justify-center`}>
                            <Award size={28} className="text-white" />
                        </div>

                        <div className="text-center">
                            <p className="text-white font-semibold text-sm">HablemosCripto</p>
                            <p className="text-slate-600 text-xs uppercase tracking-widest mt-1">Certificación</p>
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
