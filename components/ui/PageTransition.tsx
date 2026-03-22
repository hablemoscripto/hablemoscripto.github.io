import React from 'react';
import { motion, type Variants } from 'framer-motion';

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

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
