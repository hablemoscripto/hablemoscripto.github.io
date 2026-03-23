import { useState, useEffect } from 'react';

export function useScrollProgress(): number {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    const scrollTop = document.documentElement.scrollTop;
                    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
                    ticking = false;
                });
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollProgress;
}
