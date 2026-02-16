import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useGamification } from '../../contexts/GamificationContext';
import {
    Footprints, BookOpen, Award, Flag, GraduationCap, TrendingUp, Crown, Gem,
    Zap, Flame, Star, Activity, Calendar, Trophy, LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
    Footprints, BookOpen, Award, Flag, GraduationCap, TrendingUp, Crown, Gem,
    Zap, Flame, Star, Activity, Calendar, Trophy,
};

export default function AchievementToast() {
    const { pendingToasts, dismissToast } = useGamification();

    return (
        <div className="fixed top-20 right-4 z-50 flex flex-col gap-3 pointer-events-none">
            <AnimatePresence>
                {pendingToasts.map(toast => (
                    <ToastItem key={toast.id} toast={toast} onDismiss={dismissToast} />
                ))}
            </AnimatePresence>
        </div>
    );
}

function ToastItem({ toast, onDismiss }: { toast: { id: string; title: string; description: string; icon: string }; onDismiss: (id: string) => void }) {
    useEffect(() => {
        const timer = setTimeout(() => onDismiss(toast.id), 4000);
        return () => clearTimeout(timer);
    }, [toast.id, onDismiss]);

    const Icon = ICON_MAP[toast.icon] || Trophy;

    return (
        <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 80, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="pointer-events-auto flex items-center gap-3 bg-slate-900/95 backdrop-blur-sm border border-brand-500/30 rounded-xl px-4 py-3 shadow-lg shadow-brand-500/10 max-w-xs cursor-pointer"
            onClick={() => onDismiss(toast.id)}
        >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-slate-900" />
            </div>
            <div className="min-w-0">
                <p className="text-xs text-brand-400 font-semibold uppercase tracking-wide">Logro desbloqueado</p>
                <p className="text-sm font-bold text-white truncate">{toast.title}</p>
                <p className="text-xs text-slate-400 truncate">{toast.description}</p>
            </div>
        </motion.div>
    );
}
