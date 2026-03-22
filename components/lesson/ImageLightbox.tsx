import React, { useState, useRef, useEffect, useCallback } from 'react';
import { X, ZoomIn, ZoomOut, Move } from 'lucide-react';

interface ImageLightboxProps {
    image: { src: string; alt: string } | null;
    onClose: () => void;
}

export default function ImageLightbox({ image, onClose }: ImageLightboxProps) {
    const [zoomLevel, setZoomLevel] = useState(1);
    const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Reset state when image changes
    useEffect(() => {
        setZoomLevel(1);
        setPanPosition({ x: 0, y: 0 });
    }, [image?.src]);

    // Keyboard handler
    useEffect(() => {
        if (!image) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            else if (e.key === '+' || e.key === '=') handleZoomIn();
            else if (e.key === '-') handleZoomOut();
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [image, onClose]);

    // Scroll-to-zoom
    const handleWheel = useCallback((e: WheelEvent) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.2 : 0.2;
        setZoomLevel(prev => {
            const next = Math.max(1, Math.min(4, prev + delta));
            if (next === 1) setPanPosition({ x: 0, y: 0 });
            return next;
        });
    }, []);

    useEffect(() => {
        const el = containerRef.current;
        if (!image || !el) return;
        el.addEventListener('wheel', handleWheel, { passive: false });
        return () => el.removeEventListener('wheel', handleWheel);
    }, [image, handleWheel]);

    const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.5, 4));
    const handleZoomOut = () => {
        setZoomLevel(prev => {
            const next = Math.max(prev - 0.5, 1);
            if (next === 1) setPanPosition({ x: 0, y: 0 });
            return next;
        });
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (zoomLevel > 1) {
            setIsDragging(true);
            setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging && zoomLevel > 1) {
            setPanPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
        }
    };

    const handleMouseUp = () => setIsDragging(false);

    if (!image) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={onClose}
        >
            {/* Controls */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                <div className="bg-navy-800/80 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm text-navy-300 flex items-center gap-2">
                    <Move size={14} />
                    <span>{Math.round(zoomLevel * 100)}%</span>
                </div>
                <button
                    onClick={(e) => { e.stopPropagation(); handleZoomOut(); }}
                    disabled={zoomLevel <= 1}
                    className="p-2 bg-navy-800/80 backdrop-blur-sm rounded-lg text-white hover:bg-navy-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Alejar"
                >
                    <ZoomOut size={20} />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); handleZoomIn(); }}
                    disabled={zoomLevel >= 4}
                    className="p-2 bg-navy-800/80 backdrop-blur-sm rounded-lg text-white hover:bg-navy-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Acercar"
                >
                    <ZoomIn size={20} />
                </button>
                <button
                    onClick={onClose}
                    className="p-2 bg-navy-800/80 backdrop-blur-sm rounded-lg text-white hover:bg-red-500 transition-colors"
                    aria-label="Cerrar"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Instructions */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-navy-800/80 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-navy-400 flex items-center gap-4">
                <span>Scroll para zoom</span>
                <span>Arrastra para mover</span>
                <span>ESC para cerrar</span>
            </div>

            {/* Image Container */}
            <div
                ref={containerRef}
                className={`overflow-hidden max-w-[90vw] max-h-[85vh] ${zoomLevel > 1 ? 'cursor-grab' : 'cursor-zoom-in'} ${isDragging ? 'cursor-grabbing' : ''}`}
                onClick={(e) => { e.stopPropagation(); if (zoomLevel === 1) handleZoomIn(); }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <img
                    src={image.src}
                    alt={image.alt}
                    className="max-w-full max-h-[85vh] object-contain select-none transition-transform duration-200 will-change-transform"
                    style={{
                        transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
                    }}
                    draggable={false}
                />
            </div>
        </div>
    );
}
