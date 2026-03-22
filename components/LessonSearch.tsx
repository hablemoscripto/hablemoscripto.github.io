import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Search, Clock, ChevronRight, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Modal } from './ui/Modal';
import { BEGINNER_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL, type LevelData } from '../data/courseData';
import { useProgress } from '../contexts/ProgressContext';

interface SearchResult {
  lessonId: number;
  title: string;
  description: string;
  duration: string;
  levelId: string;
  levelTitle: string;
  moduleName: string;
  completed: boolean;
}

interface LessonSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const LEVEL_COLORS: Record<string, string> = {
  beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
  intermediate: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  advanced: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

const LEVEL_LABELS: Record<string, string> = {
  beginner: 'Principiante',
  intermediate: 'Intermedio',
  advanced: 'Avanzado',
};

function buildSearchIndex(levels: { data: LevelData; id: string }[]): SearchResult[] {
  const results: SearchResult[] = [];
  for (const level of levels) {
    for (const module of level.data.modules) {
      for (const lesson of module.lessons) {
        results.push({
          lessonId: lesson.id,
          title: lesson.title,
          description: lesson.description,
          duration: lesson.duration,
          levelId: level.id,
          levelTitle: level.data.title,
          moduleName: module.title,
          completed: false,
        });
      }
    }
  }
  return results;
}

// Simple accent-insensitive, case-insensitive matching
function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export default function LessonSearch({ isOpen, onClose }: LessonSearchProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultListRef = useRef<HTMLDivElement>(null);
  const { isLessonCompleted } = useProgress();

  const allLessons = useMemo(() => {
    const index = buildSearchIndex([
      { data: BEGINNER_LEVEL, id: 'beginner' },
      { data: INTERMEDIATE_LEVEL, id: 'intermediate' },
      { data: ADVANCED_LEVEL, id: 'advanced' },
    ]);
    return index;
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return allLessons;

    const normalizedQuery = normalize(query);
    const terms = normalizedQuery.split(/\s+/).filter(Boolean);

    return allLessons
      .map((lesson) => {
        const searchText = normalize(
          `${lesson.title} ${lesson.description} ${lesson.moduleName} ${LEVEL_LABELS[lesson.levelId]}`
        );
        const matchCount = terms.filter((term) => searchText.includes(term)).length;
        return { ...lesson, matchCount };
      })
      .filter((r) => r.matchCount > 0)
      .sort((a, b) => {
        if (b.matchCount !== a.matchCount) return b.matchCount - a.matchCount;
        // Preserve curriculum order for tied scores
        return allLessons.findIndex(l => l.lessonId === a.lessonId) - allLessons.findIndex(l => l.lessonId === b.lessonId);
      });
  }, [query, allLessons]);

  // Mark completed lessons
  const enrichedResults = useMemo(() => {
    return results.map((r) => ({
      ...r,
      completed: isLessonCompleted(r.lessonId),
    }));
  }, [results, isLessonCompleted]);

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [isOpen]);

  // Keep selected item in view
  useEffect(() => {
    if (!resultListRef.current) return;
    const selected = resultListRef.current.querySelector('[data-selected="true"]');
    if (selected) {
      selected.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  const handleSelect = useCallback(
    (lessonId: number) => {
      onClose();
      navigate(`/education/lesson/${lessonId}`);
    },
    [navigate, onClose]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, enrichedResults.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && enrichedResults[selectedIndex]) {
      e.preventDefault();
      handleSelect(enrichedResults[selectedIndex].lessonId);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} ariaLabel="Buscar lecciones" maxWidth="max-w-lg" showCloseButton={false}>
      {/* Search Input */}
      <div className="relative" onKeyDown={handleKeyDown}>
        <Search
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400"
          aria-hidden="true"
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedIndex(0);
          }}
          placeholder="Buscar lecciones por tema, nivel o módulo..."
          aria-label="Buscar lecciones"
          aria-activedescendant={
            enrichedResults[selectedIndex]
              ? `search-result-${enrichedResults[selectedIndex].lessonId}`
              : undefined
          }
          role="combobox"
          aria-expanded="true"
          aria-controls="search-results"
          aria-autocomplete="list"
          className="w-full bg-navy-800 border border-navy-600 rounded-xl py-3 pl-11 pr-4 text-white placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] text-navy-500 bg-navy-700 rounded border border-navy-600">
          ESC
        </kbd>
      </div>

      {/* Results */}
      <div
        ref={resultListRef}
        id="search-results"
        role="listbox"
        aria-label="Resultados de búsqueda"
        className="mt-3 max-h-[50vh] overflow-y-auto -mx-2"
      >
        {enrichedResults.length === 0 ? (
          <div className="text-center py-8 text-navy-500">
            <BookOpen size={32} className="mx-auto mb-2 opacity-50" aria-hidden="true" />
            <p className="text-sm">No se encontraron lecciones</p>
            <p className="text-xs mt-1">Intenta con otro término de búsqueda</p>
          </div>
        ) : (
          enrichedResults.map((result, idx) => (
            <button
              key={result.lessonId}
              id={`search-result-${result.lessonId}`}
              role="option"
              aria-selected={idx === selectedIndex}
              data-selected={idx === selectedIndex}
              onClick={() => handleSelect(result.lessonId)}
              onMouseEnter={() => setSelectedIndex(idx)}
              className={`w-full text-left px-3 py-3 rounded-lg flex items-start gap-3 transition-colors ${
                idx === selectedIndex
                  ? 'bg-navy-800 ring-1 ring-brand-500/30'
                  : 'hover:bg-navy-800/50'
              }`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded border ${
                      LEVEL_COLORS[result.levelId]
                    }`}
                  >
                    {LEVEL_LABELS[result.levelId]}
                  </span>
                  {result.completed && (
                    <span className="text-[10px] font-medium text-green-400">Completada</span>
                  )}
                </div>
                <p className="text-sm font-medium text-white truncate">{result.title}</p>
                <p className="text-xs text-navy-500 truncate">{result.moduleName}</p>
              </div>
              <div className="flex items-center gap-1 text-navy-500 shrink-0 mt-1">
                <Clock size={12} aria-hidden="true" />
                <span className="text-xs">{result.duration}</span>
                <ChevronRight size={14} aria-hidden="true" className="ml-1" />
              </div>
            </button>
          ))
        )}
      </div>

      {/* Footer hint */}
      {enrichedResults.length > 0 && (
        <div className="mt-2 pt-2 border-t border-navy-800 flex items-center justify-between text-[10px] text-navy-500 -mx-2 px-3">
          <span>{enrichedResults.length} {enrichedResults.length === 1 ? 'lección' : 'lecciones'}</span>
          <div className="hidden sm:flex items-center gap-3">
            <span><kbd className="px-1 py-0.5 bg-navy-700 rounded text-navy-400">↑↓</kbd> Navegar</span>
            <span><kbd className="px-1 py-0.5 bg-navy-700 rounded text-navy-400">Enter</kbd> Ir</span>
          </div>
        </div>
      )}
    </Modal>
  );
}
