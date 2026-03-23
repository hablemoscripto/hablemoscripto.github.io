import { useState, useEffect } from 'react';
import { getPreviousLessonId, getNextLessonId, getAllLessonsOrdered } from '../utils/courseUtils';

interface LessonNavInfo {
    id: number;
    title: string;
}

interface UseLessonNavigationResult {
    prevLesson: LessonNavInfo | null;
    nextLesson: LessonNavInfo | null;
    canGoNext: boolean;
}

export function useLessonNavigation(
    lessonId: number,
    isCurrentCompleted: boolean,
    isLessonCompleted: (id: number) => boolean
): UseLessonNavigationResult {
    const [prevLesson, setPrevLesson] = useState<LessonNavInfo | null>(null);
    const [nextLesson, setNextLesson] = useState<LessonNavInfo | null>(null);
    const [canGoNext, setCanGoNext] = useState(false);

    useEffect(() => {
        const allLessons = getAllLessonsOrdered();
        const prevId = getPreviousLessonId(lessonId);
        const nextId = getNextLessonId(lessonId);

        if (prevId !== null) {
            const prev = allLessons.find(l => l.id === prevId);
            setPrevLesson(prev ? { id: prev.id, title: prev.title } : null);
        } else {
            setPrevLesson(null);
        }

        if (nextId !== null) {
            const next = allLessons.find(l => l.id === nextId);
            setNextLesson(next ? { id: next.id, title: next.title } : null);
        } else {
            setNextLesson(null);
        }
    }, [lessonId]);

    useEffect(() => {
        if (!nextLesson) {
            setCanGoNext(false);
            return;
        }
        setCanGoNext(isCurrentCompleted || isLessonCompleted(nextLesson.id));
    }, [nextLesson, isCurrentCompleted, isLessonCompleted]);

    return { prevLesson, nextLesson, canGoNext };
}
