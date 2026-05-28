import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

interface PageTransitionProps {
    children: React.ReactNode;
}

const pageVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
        scale: 0.98,
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, ease: 'easeOut' },
    },
    out: {
        opacity: 0,
        y: -20,
        scale: 0.98,
        transition: { duration: 0.3, ease: 'easeInOut' },
    },
};

// When the user prefers reduced motion, cross-fade only — no translate/scale.
const reducedVariants: Variants = {
    initial: { opacity: 0 },
    in: { opacity: 1, transition: { duration: 0.2 } },
    out: { opacity: 0, transition: { duration: 0.2 } },
};

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={shouldReduceMotion ? reducedVariants : pageVariants}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
