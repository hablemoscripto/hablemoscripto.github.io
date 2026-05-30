import { LESSONS_DATA } from '../data/courseData';
import type { Question } from '../components/education/types';
import { shuffleQuizOptions } from '../utils/quizShuffle';

// Shape of the quiz questions stored in courseData — wide and permissive
// because entries predate the typed Question union. Narrowed at read time.
interface RawQuizQuestion {
  id: string;
  type?: string;
  question: string;
  options?: Array<string | { id?: string; text?: string }>;
  correctAnswer?: number | string | boolean;
  correctAnswers?: number[];
  items?: string[];
  correctOrder?: number[];
  textBefore?: string;
  textAfter?: string;
  acceptableAnswers?: string[];
  explanation?: string;
  hint?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  points?: number;
}

interface RawReferral {
  title: string;
  description: string;
  link: string;
  buttonText?: string;
  button_text?: string;
  code?: string;
}

export interface LessonSection {
  type?: string;
  title?: string;
  content?: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageSummary?: string;
  highlight?: { title: string; text: string };
  features?: { icon?: string; title?: string; text?: string }[];
  items?: string[];
  leftTitle?: string;
  rightTitle?: string;
  leftSide?: { title?: string; points?: string[] };
  rightSide?: { title?: string; points?: string[] };
  // Inline glossary callout — defines terms at first occurrence so lessons
  // can use technical vocabulary without leaving novices behind.
  terms?: { term: string; definition: string; whyItMatters?: string }[];
}

export interface CheckpointQuizData {
  id: number;
  title: string;
  sectionIndex: number;
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    hint?: string;
  }[];
}

export interface LessonData {
  id: number;
  title: string;
  level: string;
  number: string;
  duration: string;
  type: string;
  description: string;
  videoId?: string;
  sections: LessonSection[];
  quiz?: {
    questions: Question[];
  };
  checkpointQuizzes?: CheckpointQuizData[];
  referrals?: {
    title: string;
    description: string;
    link: string;
    buttonText: string;
    code?: string;
  }[];
}

/**
 * Final-lesson quizzes in courseData store multiple-choice answers as a
 * letter ('a'-'d'), but the Quiz component compares the chosen option's
 * numeric index against correctAnswer. Without this conversion every
 * multiple-choice answer scores as wrong, no quiz reaches the 70% pass
 * threshold, and no lesson can ever be completed. Mirrors the letter->index
 * logic in dailyReviewService. Only multiple-choice answers are letters;
 * true-false (boolean) and fill-blank (string) answers are left untouched.
 */
function resolveCorrectAnswer(
  type: string,
  correctAnswer: number | string | boolean | undefined,
  optionCount: number
): number | string | boolean | undefined {
  if (type !== 'multiple-choice' || typeof correctAnswer !== 'string') {
    return correctAnswer;
  }
  const index = correctAnswer.trim().toLowerCase().charCodeAt(0) - 97; // 'a' = 0
  return index >= 0 && index < optionCount ? index : correctAnswer;
}

/**
 * Get a single lesson by ID from the bundled course data.
 * No network request — instant, always in sync with the codebase.
 */
export function fetchLessonById(lessonId: number): LessonData | null {
  const lesson = LESSONS_DATA[lessonId];
  if (!lesson) return null;

  // Map the courseData format to LessonData interface.
  // The data is already in the right shape — sections, quiz, referrals
  // are all stored directly in LESSONS_DATA.
  const data: LessonData = {
    id: lesson.id,
    title: lesson.title,
    level: lesson.level || 'Unknown',
    number: lesson.number || '',
    duration: lesson.duration || '',
    type: lesson.type || '',
    description: lesson.description || '',
    videoId: lesson.videoId,
    sections: lesson.sections || [],
  };

  // Map quiz if present — courseData stores quiz questions with icon
  // references and richer types than the DB schema
  if (lesson.quiz?.questions) {
    data.quiz = {
      questions: lesson.quiz.questions.map((q: RawQuizQuestion) => {
        // courseData quiz questions are already in the right shape —
        // they have type, options, correctAnswer, etc. Just pass through
        // with option normalization for backward compatibility.
        const type = q.type || 'multiple-choice';
        const base = {
          id: q.id,
          type,
          question: q.question,
          explanation: q.explanation || '',
          hint: q.hint,
          difficulty: q.difficulty,
          points: q.points,
        };

        const options = q.options?.map((opt) =>
          typeof opt === 'string' ? opt : opt.text ?? ''
        );

        const correctAnswer = resolveCorrectAnswer(
          type,
          q.correctAnswer,
          options?.length ?? 0
        );

        // Defeat the position bias (correct answer is ~73% "B" in source) by
        // shuffling multiple-choice options deterministically per question.
        let finalOptions = options;
        let finalCorrect = correctAnswer;
        if (type === 'multiple-choice' && options && typeof correctAnswer === 'number') {
          const shuffled = shuffleQuizOptions(options, correctAnswer, `${lessonId}-${q.id}`);
          finalOptions = shuffled.options;
          finalCorrect = shuffled.correctIndex;
        }

        // Return the full question object preserving all type-specific fields
        return {
          ...base,
          ...(finalOptions && { options: finalOptions }),
          ...(finalCorrect !== undefined && { correctAnswer: finalCorrect }),
          ...(q.correctAnswers && { correctAnswers: q.correctAnswers }),
          ...(q.items && { items: q.items }),
          ...(q.correctOrder && { correctOrder: q.correctOrder }),
          ...(q.textBefore && { textBefore: q.textBefore }),
          ...(q.textAfter && { textAfter: q.textAfter }),
          ...(q.acceptableAnswers && { acceptableAnswers: q.acceptableAnswers }),
        } as Question;
      }),
    };
  }

  // Map checkpoint quizzes if present
  if (lesson.checkpointQuizzes) {
    data.checkpointQuizzes = lesson.checkpointQuizzes;
  }

  // Map referrals if present
  if (lesson.referrals) {
    data.referrals = lesson.referrals.map((ref: RawReferral) => ({
      title: ref.title,
      description: ref.description,
      link: ref.link,
      buttonText: ref.buttonText || ref.button_text || '',
      code: ref.code,
    }));
  }

  return data;
}
