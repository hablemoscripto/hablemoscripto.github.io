import { supabase } from '../lib/supabase';

// Question type definitions for the enhanced quiz system
export type QuestionType = 'multiple-choice' | 'true-false' | 'multiple-select' | 'ordering' | 'fill-blank';

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  question: string;
  explanation: string;
  hint?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  points?: number;
  // For multiple-choice and multiple-select
  options?: string[];
  correctAnswer?: number | boolean | string;
  // For multiple-select
  correctAnswers?: number[];
  // For ordering
  items?: string[];
  correctOrder?: number[];
  // For fill-blank
  textBefore?: string;
  textAfter?: string;
  acceptableAnswers?: string[];
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
  sections: any[];
  quiz?: {
    questions: QuizQuestion[];
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
 * Fetch a single lesson with all its details from the database
 */
export async function fetchLessonById(lessonId: number): Promise<LessonData | null> {
  try {
    // Fetch lesson basic info
    const { data: lesson, error: lessonError } = await supabase
      .from('lessons')
      .select('*')
      .eq('id', lessonId)
      .single();

    if (lessonError || !lesson) {
      console.error('Error fetching lesson:', lessonError);
      return null;
    }

    // Fetch lesson details (sections, content)
    const { data: details, error: detailsError } = await supabase
      .from('lesson_details')
      .select('*')
      .eq('lesson_id', lessonId)
      .single();

    if (detailsError) {
      console.error('Error fetching lesson details:', detailsError);
    }

    // Fetch referrals
    const { data: referrals, error: referralsError } = await supabase
      .from('referrals')
      .select('*')
      .eq('lesson_id', lessonId);

    if (referralsError) {
      console.error('Error fetching referrals:', referralsError);
    }

    // Fetch quiz with enhanced question fields
    const { data: quiz, error: quizError } = await supabase
      .from('quizzes')
      .select(`
        id,
        quiz_questions (
          id,
          question,
          question_type,
          options,
          correct_answer,
          correct_answers,
          items,
          correct_order,
          text_before,
          text_after,
          acceptable_answers,
          explanation,
          hint,
          difficulty,
          points,
          order
        )
      `)
      .eq('lesson_id', lessonId)
      .single();

    if (quizError && quizError.code !== 'PGRST116') { // Ignore "not found" errors
      console.error('Error fetching quiz:', quizError);
    }

    // Fetch checkpoint quizzes
    const { data: checkpoints, error: checkpointsError } = await supabase
      .from('checkpoint_quizzes')
      .select(`
        id,
        title,
        section_index,
        checkpoint_questions (
          id,
          question,
          options,
          correct_answer,
          explanation,
          hint,
          order
        )
      `)
      .eq('lesson_id', lessonId)
      .order('order');

    if (checkpointsError && checkpointsError.code !== 'PGRST116') {
      console.error('Error fetching checkpoint quizzes:', checkpointsError);
    }

    // Format the data to match the existing structure
    const lessonData: LessonData = {
      id: lesson.id,
      title: lesson.title,
      level: details?.level || 'Unknown',
      number: details?.number || '',
      duration: lesson.duration,
      type: lesson.type,
      description: details?.description || lesson.description,
      videoId: details?.video_id || lesson.video_id, // Map from DB
      sections: details?.sections || [],
      referrals: referrals?.map((ref: any) => ({
        title: ref.title,
        description: ref.description,
        link: ref.link,
        buttonText: ref.button_text,
        code: ref.code,
      })),
    };

    // Add quiz if exists with enhanced question format
    if (quiz && quiz.quiz_questions) {
      lessonData.quiz = {
        questions: quiz.quiz_questions
          .sort((a: any, b: any) => a.order - b.order)
          .map((q: any): QuizQuestion => {
            const questionType = q.question_type || 'multiple-choice';

            const baseQuestion = {
              id: q.id.toString(),
              type: questionType as QuestionType,
              question: q.question,
              explanation: q.explanation || '',
              hint: q.hint,
              difficulty: q.difficulty,
              points: q.points,
            };

            switch (questionType) {
              case 'true-false':
                return {
                  ...baseQuestion,
                  correctAnswer: q.correct_answer === 'true' || q.correct_answer === true,
                };

              case 'multiple-select':
                return {
                  ...baseQuestion,
                  options: q.options?.map((opt: any) => typeof opt === 'string' ? opt : opt.text) || [],
                  correctAnswers: q.correct_answers || [],
                };

              case 'ordering':
                return {
                  ...baseQuestion,
                  items: q.items || [],
                  correctOrder: q.correct_order || [],
                };

              case 'fill-blank':
                return {
                  ...baseQuestion,
                  textBefore: q.text_before || '',
                  textAfter: q.text_after || '',
                  correctAnswer: q.correct_answer,
                  acceptableAnswers: q.acceptable_answers || [],
                };

              case 'multiple-choice':
              default:
                return {
                  ...baseQuestion,
                  type: 'multiple-choice',
                  options: q.options?.map((opt: any) => typeof opt === 'string' ? opt : opt.text) || [],
                  correctAnswer: typeof q.correct_answer === 'number'
                    ? q.correct_answer
                    : q.options?.findIndex((opt: any) =>
                        (typeof opt === 'string' ? opt : opt.id) === q.correct_answer
                      ) ?? 0,
                };
            }
          }),
      };
    }

    // Add checkpoint quizzes if they exist
    if (checkpoints && checkpoints.length > 0) {
      lessonData.checkpointQuizzes = checkpoints.map((cp: any) => ({
        id: cp.id,
        title: cp.title || 'Checkpoint',
        sectionIndex: cp.section_index || 0,
        questions: (cp.checkpoint_questions || [])
          .sort((a: any, b: any) => a.order - b.order)
          .map((q: any) => ({
            id: q.id.toString(),
            question: q.question,
            options: q.options || [],
            correctAnswer: q.correct_answer,
            explanation: q.explanation || '',
            hint: q.hint,
          })),
      }));
    }

    return lessonData;
  } catch (error) {
    console.error('Unexpected error fetching lesson:', error);
    return null;
  }
}

/**
 * Fetch all lessons (lightweight - just IDs and titles)
 */
export async function fetchAllLessons() {
  const { data, error } = await supabase
    .from('lessons')
    .select('id, title, duration, type')
    .order('id');

  if (error) {
    console.error('Error fetching all lessons:', error);
    return {};
  }

  // Convert to Record<number, LessonData> format for backward compatibility
  const lessonsMap: Record<number, any> = {};
  data.forEach((lesson: any) => {
    lessonsMap[lesson.id] = lesson;
  });

  return lessonsMap;
}
