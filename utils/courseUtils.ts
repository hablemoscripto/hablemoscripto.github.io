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

export const getLevelForLesson = (lessonId: number): string => {
    const levels = [
        { data: BEGINNER_LEVEL, route: 'beginner' },
        { data: INTERMEDIATE_LEVEL, route: 'intermediate' },
        { data: ADVANCED_LEVEL, route: 'advanced' },
    ];

    for (const level of levels) {
        for (const module of level.data.modules) {
            if (module.lessons.some((l) => l.id === lessonId)) {
                return level.route;
            }
        }
    }

    return 'beginner'; // Default fallback
};
