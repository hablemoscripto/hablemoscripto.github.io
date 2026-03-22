import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

interface SelectionState {
    visible: boolean;
    x: number;
    y: number;
    text: string;
}

export default function SelectionTooltip() {
    const [selection, setSelection] = useState<SelectionState>({
        visible: false, x: 0, y: 0, text: '',
    });

    useEffect(() => {
        const handleSelection = () => {
            const sel = window.getSelection();
            if (!sel || sel.isCollapsed) {
                setSelection(prev => ({ ...prev, visible: false }));
                return;
            }

            const text = sel.toString().trim();
            if (text.length > 2 && text.length < 150) {
                const range = sel.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                setSelection({
                    visible: true,
                    x: rect.left + rect.width / 2,
                    y: rect.top - 10,
                    text,
                });
            } else {
                setSelection(prev => ({ ...prev, visible: false }));
            }
        };

        const handleMouseDown = () => setSelection(prev => ({ ...prev, visible: false }));

        document.addEventListener('mouseup', handleSelection);
        document.addEventListener('mousedown', handleMouseDown);
        return () => {
            document.removeEventListener('mouseup', handleSelection);
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);

    const handleAskAI = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const lessonContext = (window as any).__currentLesson;
        const prompt = lessonContext
            ? `En el contexto de la lección "${lessonContext.title}" sobre ${lessonContext.level}, explícame esto: "${selection.text}"`
            : `Explícame esto en términos simples: "${selection.text}"`;
        window.dispatchEvent(new CustomEvent('open-chat-with-prompt', { detail: { prompt } }));
        setSelection(prev => ({ ...prev, visible: false }));
    };

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
                onMouseDown={handleAskAI}
                className="flex items-center gap-2 px-3 py-1.5 bg-brand-500 hover:bg-brand-400 text-navy-900 text-xs font-bold rounded-full shadow-glow-brand transition-colors whitespace-nowrap"
            >
                <MessageSquare size={14} />
                Explicar con CBas
            </button>
            <div className="w-2 h-2 bg-brand-500 absolute left-1/2 -bottom-1 -translate-x-1/2 rotate-45" />
        </div>
    );
}
