import { BEGINNER_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL, Lesson } from '../data/courseData';

export const getAllLessonsOrdered = (): Lesson[] => {
    const levels = [BEGINNER_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL];
    const allLessons: Lesson[] = [];

    levels.forEach((level) => {
        level.modules.forEach((module) => {
            module.lessons.forEach((lesson) => {
                allLessons.push(lesson);
            });
        });
    });

    return allLessons;
};

export const getPreviousLessonId = (currentLessonId: number): number | null => {
    const allLessons = getAllLessonsOrdered();
    const currentIndex = allLessons.findIndex((l) => l.id === currentLessonId);

    if (currentIndex <= 0) {
        return null;
    }

    return allLessons[currentIndex - 1].id;
};

export const getNextLessonId = (currentLessonId: number): number | null => {
    const allLessons = getAllLessonsOrdered();
    const currentIndex = allLessons.findIndex((l) => l.id === currentLessonId);

    if (currentIndex === -1 || currentIndex === allLessons.length - 1) {
        return null;
    }

    return allLessons[currentIndex + 1].id;
};
