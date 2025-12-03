import { supabase } from '../lib/supabase';

export interface LessonData {
  id: number;
  title: string;
  level: string;
  number: string;
  duration: string;
  type: string;
  description: string;
  videoId?: string; // Added videoId
  sections: any[];
  quiz?: {
    questions: any[];
  };
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

    // Fetch quiz
    const { data: quiz, error: quizError } = await supabase
      .from('quizzes')
      .select(`
        id,
        quiz_questions (
          id,
          question,
          options,
          correct_answer,
          explanation,
          order
        )
      `)
      .eq('lesson_id', lessonId)
      .single();

    if (quizError && quizError.code !== 'PGRST116') { // Ignore "not found" errors
      console.error('Error fetching quiz:', quizError);
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

    // Add quiz if exists
    if (quiz && quiz.quiz_questions) {
      lessonData.quiz = {
        questions: quiz.quiz_questions
          .sort((a: any, b: any) => a.order - b.order)
          .map((q: any) => ({
            id: q.id.toString(),
            question: q.question,
            options: q.options,
            correctAnswer: q.correct_answer,
            explanation: q.explanation,
          })),
      };
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
