import { LESSONS_DATA } from '../data/courseData';
import type { Question } from '../components/education/types';

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
        const base = {
          id: q.id,
          type: q.type || 'multiple-choice',
          question: q.question,
          explanation: q.explanation || '',
          hint: q.hint,
          difficulty: q.difficulty,
          points: q.points,
        };

        const options = q.options?.map((opt) =>
          typeof opt === 'string' ? opt : opt.text ?? ''
        );

        // Return the full question object preserving all type-specific fields
        return {
          ...base,
          ...(options && { options }),
          ...(q.correctAnswer !== undefined && { correctAnswer: q.correctAnswer }),
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
