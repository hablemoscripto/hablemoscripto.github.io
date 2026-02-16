import React, { useRef } from 'react';
import { Bitcoin, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface CertificateProps {
    studentName: string;
    courseName: string;
    level: string;
    date: string;
    variant?: 'beginner' | 'intermediate' | 'advanced';
    onClose: () => void;
}

const Certificate: React.FC<CertificateProps> = ({ studentName, courseName, level, date, variant = 'beginner', onClose }) => {
    const certificateRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        window.print();
    };

    const getVariantStyles = () => {
        switch (variant) {
            case 'intermediate':
                return {
                    border: 'border-slate-400',
                    accent: 'text-slate-500',
                    bgPattern: 'https://www.transparenttextures.com/patterns/cubes.png', // Keep same pattern for now, maybe change later
                    badgeColor: 'text-slate-400',
                    titleColor: 'text-slate-700'
                };
            case 'advanced':
                return {
                    border: 'border-yellow-600',
                    accent: 'text-yellow-600',
                    bgPattern: 'https://www.transparenttextures.com/patterns/cubes.png',
                    badgeColor: 'text-yellow-500',
                    titleColor: 'text-yellow-800'
                };
            default: // beginner
                return {
                    border: 'border-orange-700', // Bronze-ish
                    accent: 'text-orange-700',
                    bgPattern: 'https://www.transparenttextures.com/patterns/cubes.png',
                    badgeColor: 'text-orange-600',
                    titleColor: 'text-slate-800'
                };
        }
    };

    const styles = getVariantStyles();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative max-w-4xl w-full bg-white text-slate-900 p-1 md:p-2 rounded-xl shadow-2xl"
            >
                {/* Print/Close Controls - Hidden when printing */}
                <div className="absolute -top-12 right-0 flex gap-4 print:hidden">
                    <button
                        onClick={handlePrint}
                        className="px-4 py-2 bg-brand-500 text-slate-900 font-bold rounded-lg hover:bg-brand-400 transition-colors flex items-center gap-2"
                    >
                        <Award size={20} /> Imprimir / Guardar PDF
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors"
                    >
                        Cerrar
                    </button>
                </div>

                {/* Certificate Border */}
                <div ref={certificateRef} className={`border-[10px] border-double ${styles.border} p-8 md:p-12 h-full min-h-[600px] flex flex-col items-center justify-center text-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]`}>

                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Bitcoin size={48} className={styles.accent} />
                            <h1 className={`text-3xl font-bold ${styles.titleColor} tracking-wider uppercase`}>HablemosCripto</h1>
                        </div>
                        <div className={`h-1 w-32 ${styles.border.replace('border-', 'bg-')} mx-auto`}></div>
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-800 mb-4">Certificado de Finalización</h2>
                    <p className="text-xl text-slate-600 italic mb-8">Este documento certifica que</p>

                    {/* Student Name */}
                    <div className="border-b-2 border-slate-300 px-12 py-2 mb-8 min-w-[300px]">
                        <h3 className={`text-3xl md:text-5xl font-handwriting font-bold ${styles.accent}`}>{studentName}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-xl text-slate-600 mb-2">ha completado satisfactoriamente el nivel</p>
                    <h4 className={`text-2xl md:text-3xl font-bold ${styles.titleColor} uppercase tracking-widest mb-6`}>{level}</h4>
                    <p className="text-lg text-slate-600 mb-12">del curso <span className="font-bold">{courseName}</span></p>

                    {/* Footer */}
                    <div className="flex justify-between w-full max-w-2xl mt-auto pt-12">
                        <div className="text-center">
                            <div className="border-t border-slate-400 w-48 pt-2">
                                <p className="font-bold text-slate-800">{date}</p>
                                <p className="text-sm text-slate-500 uppercase tracking-wider">Fecha</p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                                <Award size={64} className={`${styles.badgeColor} opacity-80`} />
                            </div>
                            <div className="text-center mt-4">
                                <div className="border-t border-slate-400 w-48 pt-2">
                                    <p className="font-bold text-slate-800">HablemosCripto</p>
                                    <p className="text-sm text-slate-500 uppercase tracking-wider">Certificación Oficial</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>

            <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #root {
            display: none;
          }
          .fixed {
            position: absolute;
            inset: 0;
            background: white;
            padding: 0;
            display: block !important;
            visibility: visible !important;
          }
          .fixed * {
            visibility: visible !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
        </div>
    );
};

export default Certificate;
