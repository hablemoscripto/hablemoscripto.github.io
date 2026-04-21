import { useMemo } from 'react';
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
    // Prev/next lessons are pure derivations of `lessonId` — compute them with
    // useMemo instead of mirroring into state via an effect.
    const { prevLesson, nextLesson } = useMemo(() => {
        const allLessons = getAllLessonsOrdered();
        const prevId = getPreviousLessonId(lessonId);
        const nextId = getNextLessonId(lessonId);

        const prev = prevId !== null ? allLessons.find(l => l.id === prevId) : undefined;
        const next = nextId !== null ? allLessons.find(l => l.id === nextId) : undefined;

        return {
            prevLesson: prev ? { id: prev.id, title: prev.title } : null,
            nextLesson: next ? { id: next.id, title: next.title } : null,
        };
    }, [lessonId]);

    const canGoNext = useMemo(() => {
        if (!nextLesson) return false;
        return isCurrentCompleted || isLessonCompleted(nextLesson.id);
    }, [nextLesson, isCurrentCompleted, isLessonCompleted]);

    return { prevLesson, nextLesson, canGoNext };
}
