import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare } from 'lucide-react';

interface SelectionState {
    visible: boolean;
    x: number;
    y: number;
    text: string;
}

// Keep the tooltip fully on-screen. Half the (approx) tooltip width.
const HALF_TOOLTIP_WIDTH = 90;
const EDGE_MARGIN = 8;

export default function SelectionTooltip() {
    const [selection, setSelection] = useState<SelectionState>({
        visible: false, x: 0, y: 0, text: '',
    });
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    // Suppress the global selection handler while interacting with the tooltip
    // itself, so tapping the button doesn't collapse the selection first.
    const interactingRef = useRef(false);

    useEffect(() => {
        const evaluateSelection = () => {
            const sel = window.getSelection();
            if (!sel || sel.isCollapsed) {
                setSelection(prev => (prev.visible ? { ...prev, visible: false } : prev));
                return;
            }

            const text = sel.toString().trim();
            if (text.length > 2 && text.length < 150) {
                const range = sel.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                const clampedX = Math.min(
                    Math.max(rect.left + rect.width / 2, HALF_TOOLTIP_WIDTH + EDGE_MARGIN),
                    window.innerWidth - HALF_TOOLTIP_WIDTH - EDGE_MARGIN
                );
                // If the selection is near the top, flip below it.
                const top = rect.top - 10;
                setSelection({
                    visible: true,
                    x: clampedX,
                    y: top < 48 ? rect.bottom + 44 : top,
                    text,
                });
            } else {
                setSelection(prev => (prev.visible ? { ...prev, visible: false } : prev));
            }
        };

        // selectionchange fires for both mouse and mobile long-press selection,
        // unlike mouseup. Debounce so we only react once the selection settles.
        const handleSelectionChange = () => {
            if (interactingRef.current) return;
            if (debounceRef.current) clearTimeout(debounceRef.current);
            debounceRef.current = setTimeout(evaluateSelection, 250);
        };

        const handlePointerDown = () => {
            if (interactingRef.current) return;
            setSelection(prev => (prev.visible ? { ...prev, visible: false } : prev));
        };

        document.addEventListener('selectionchange', handleSelectionChange);
        document.addEventListener('mousedown', handlePointerDown);
        document.addEventListener('touchstart', handlePointerDown, { passive: true });
        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
            document.removeEventListener('selectionchange', handleSelectionChange);
            document.removeEventListener('mousedown', handlePointerDown);
            document.removeEventListener('touchstart', handlePointerDown);
        };
    }, []);

    const handleAskAI = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const lessonContext = window.__currentLesson;
        const prompt = lessonContext
            ? `En el contexto de la lección "${lessonContext.title}" sobre ${lessonContext.level}, explícame esto: "${selection.text}"`
            : `Explícame esto en términos simples: "${selection.text}"`;
        window.dispatchEvent(new CustomEvent('open-chat-with-prompt', { detail: { prompt } }));
        setSelection(prev => ({ ...prev, visible: false }));
    };

    // Mark interaction start so the pointer-down listener doesn't dismiss the
    // tooltip before the click/tap fires.
    const handleInteractStart = () => { interactingRef.current = true; };
    const handleInteractEnd = () => { interactingRef.current = false; };

    if (!selection.visible) return null;

    return (
        <div
            className="fixed z-[100] animate-in zoom-in duration-200"
            style={{
                left: `${selection.x}px`,
                top: `${selection.y}px`,
                transform: 'translate(-50%, -100%)',
            }}
        >
            <button
                onMouseDown={handleInteractStart}
                onTouchStart={handleInteractStart}
                onClick={handleAskAI}
                onTouchEnd={(e) => { handleAskAI(e); handleInteractEnd(); }}
                className="flex items-center gap-2 px-4 py-2.5 bg-brand-500 hover:bg-brand-400 text-navy-900 text-xs font-bold rounded-full shadow-glow-brand transition-colors whitespace-nowrap"
            >
                <MessageSquare size={14} />
                Explicar con CBas
            </button>
            <div className="w-2 h-2 bg-brand-500 absolute left-1/2 -bottom-1 -translate-x-1/2 rotate-45" />
        </div>
    );
}
