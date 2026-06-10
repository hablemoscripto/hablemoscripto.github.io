/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Banknote,
  BookOpen,
  Wallet,
  BarChart3,
  Search,
  Briefcase,
  Zap,
  Gem,
  Cpu,
  LucideIcon,
  Anchor,
  Scissors,
  Landmark,
  Percent,
  TrendingDown,
  TrendingUp,
  Users,
  Server,
  Network,
  Smartphone,
  Shield,
  Globe,
  CheckCircle,
  AlertTriangle,
  Link,
  Activity,
  Clock,
  Layers,
  RefreshCw,
  Lock,
  PiggyBank,
  Award,
  Target,
  Brain,
  Eye,
  Crosshair,
  MessageSquare,
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import {
  BEGINNER_LEVEL,
  INTERMEDIATE_LEVEL,
  ADVANCED_LEVEL,
} from '../data/levels';
import { LESSONS_DATA, type LevelData } from '../data/courseData';
import { PAID_LESSONS } from '../data/paidContent';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error(
    'Supabase credentials not found. Make sure to create a .env.local file with VITE_SUPABASE_URL and SUPABASE_SERVICE_KEY.'
  );
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const ICONS: Record<string, LucideIcon> = {
  Banknote,
  BookOpen,
  Wallet,
  BarChart3,
  Search,
  Briefcase,
  Zap,
  Gem,
  Cpu,
  Anchor,
  Scissors,
  Landmark,
  Percent,
  TrendingDown,
  TrendingUp,
  Users,
  Server,
  Network,
  Smartphone,
  Shield,
  Globe,
  CheckCircle,
  AlertTriangle,
  Link,
  Activity,
  Clock,
  Layers,
  RefreshCw,
  Lock,
  PiggyBank,
  Award,
  Target,
  Brain,
  Eye,
  Crosshair,
  MessageSquare,
};

function getIconName(icon: LucideIcon): string | null {
  for (const name in ICONS) {
    if (ICONS[name] === icon) {
      return name;
    }
  }
  return null;
}

// Convert sections to database-friendly format (icons as strings)
function serializeSections(sections: any[]): any[] {
  return sections.map(section => {
    const serialized: any = { ...section };

    // Convert features icons to string names
    // Lucide React icons are objects (React.memo/forwardRef), not functions,
    // so we check for non-string values and resolve via reference equality
    if (section.features) {
      serialized.features = section.features.map((feature: any) => ({
        ...feature,
        icon: typeof feature.icon === 'string' ? feature.icon : (getIconName(feature.icon) || null)
      }));
    }

    return serialized;
  });
}

// Tracks soft failures (a single lesson/quiz/referral) so the run can finish
// the rest but still exit non-zero — a partial seed must never look successful.
let hadError = false;

async function seed() {
  console.log('Starting database seed...');
  console.warn(
    '\n⚠️  DESTRUCTIVE: this deletes and reinserts all content tables.\n' +
      '   Deleting `lessons` CASCADE-wipes protected_lessons (paid content) and\n' +
      '   lesson_details (AI RAG) until the reinsert completes. Run against\n' +
      '   production only with a fresh backup and during low traffic.\n'
  );

  // 1. Clean up existing data
  console.log('Cleaning up old data...');
  const tables = [
    'referrals',
    'quiz_questions',
    'protected_lessons',
    'quizzes',
    'lesson_details',
    'lessons',
    'modules',
    'levels',
  ];
  for (const table of tables) {
    const cleanupColumn = table === 'lesson_details' || table === 'protected_lessons' ? 'lesson_id' : 'id';
    const { error } = await supabase.from(table).delete().neq(cleanupColumn, -1); // trick to delete all rows
    if (error) {
      console.error(`Error cleaning up ${table}:`, error);
      process.exit(1); // a half-cleaned DB must abort loudly, not continue
    }
  }
  console.log('Old data cleaned up successfully.');

  // 2. Seed Levels, Modules, and Lessons
  console.log('Seeding levels, modules, and lessons...');
  const levelsToSeed: LevelData[] = [
    BEGINNER_LEVEL,
    INTERMEDIATE_LEVEL,
    ADVANCED_LEVEL,
  ];

  for (const [levelIndex, level] of levelsToSeed.entries()) {
    // Determine icon and color based on level id
    let iconName = 'Shield';
    let color = 'brand';
    if (level.id === 'intermediate') {
      iconName = 'TrendingUp';
      color = 'indigo';
    } else if (level.id === 'advanced') {
      iconName = 'Star';
      color = 'rose';
    }

    const { error: levelError } = await supabase.from('levels').insert({
      id: level.id,
      title: level.title,
      subtitle: level.subtitle,
      description: level.description,
      lessons_count: level.stats.lessons,
      duration: level.stats.duration,
      icon_name: iconName,
      color: color,
      order: levelIndex,
    });
    if (levelError) {
      console.error('Error seeding level:', levelError);
      process.exit(1);
    }

    for (const [moduleIndex, module] of level.modules.entries()) {
      const { data: moduleData, error: moduleError } = await supabase
        .from('modules')
        .insert({
          level_id: level.id,
          title: module.title,
          description: module.description,
          icon_name: getIconName(module.icon),
          order: moduleIndex,
        })
        .select('id')
        .single();

      if (moduleError) {
        console.error('Error seeding module:', moduleError);
        process.exit(1);
      }

      for (const [lessonIndex, lesson] of module.lessons.entries()) {
        const { error: lessonError } = await supabase.from('lessons').insert({
          id: lesson.id,
          module_id: moduleData.id,
          title: lesson.title,
          description: lesson.description,
          duration: lesson.duration,
          type: lesson.type,
          is_locked: lesson.isLocked || false,
          order: lessonIndex,
        });

        if (lessonError) {
          console.error('Error seeding lesson:', lessonError);
          process.exit(1);
        }

        // Seed Referrals if they exist. The DB column is button_text (snake_case)
        // while the data field is buttonText (camelCase), so map it explicitly —
        // a blind spread inserts an unknown `buttonText` column and the row fails.
        if (lesson.referrals) {
          for (const referral of lesson.referrals) {
            const { error: referralError } = await supabase
              .from('referrals')
              .insert({
                lesson_id: lesson.id,
                title: referral.title,
                description: referral.description,
                link: referral.link,
                button_text: referral.buttonText,
                code: referral.code ?? null,
              });
            if (referralError) {
              console.error('Error seeding referral:', referralError);
              hadError = true;
            }
          }
        }
      }
    }
  }
  console.log('Levels, modules, and lessons seeded successfully.');

  // 3. Seed Lesson Details and Quizzes for ALL lessons (free + paid). Free
  // lessons live in courseData (bundled); paid lessons live in paidContent
  // (NOT bundled). lesson_details is needed for the grok-chat RAG.
  console.log('Seeding lesson details and quizzes...');
  const ALL_LESSONS = { ...LESSONS_DATA, ...PAID_LESSONS };
  for (const lessonId in ALL_LESSONS) {
    const lessonData = ALL_LESSONS[lessonId];
    const isPaid = !!PAID_LESSONS[lessonId];

    // Seed Lesson Details
    const { error: detailError } = await supabase
      .from('lesson_details')
      .insert({
        lesson_id: lessonData.id,
        level: lessonData.level,
        number: lessonData.number,
        description: lessonData.description,
        sections: serializeSections(lessonData.sections),
      });
    if (detailError) {
      console.error(`Error seeding details for lesson ${lessonId}:`, detailError);
      hadError = true;
    }

    // Paid lessons: store the full lesson body as a protected blob, served at
    // runtime by the get-lesson-content Edge Function after a premium check.
    // Sections are icon-serialized (component -> name) so the blob is JSON-safe
    // and SectionRenderer's ICON_MAP resolves them on the client.
    if (isPaid) {
      const { error: protError } = await supabase
        .from('protected_lessons')
        .insert({
          lesson_id: lessonData.id,
          content: { ...lessonData, sections: serializeSections(lessonData.sections) },
        });
      if (protError) {
        console.error(`Error seeding protected content for lesson ${lessonId}:`, protError);
        hadError = true;
      }
    }

    // Seed Quiz
    if (lessonData.quiz) {
      const { data: quizData, error: quizError } = await supabase
        .from('quizzes')
        .insert({ lesson_id: lessonData.id })
        .select('id')
        .single();

      if (quizError) {
        console.error(`Error seeding quiz for lesson ${lessonId}:`, quizError);
        process.exit(1);
      }

      for (const [
        questionIndex,
        question,
      ] of lessonData.quiz.questions.entries()) {
        // Mirror the read-path normalization (lessonService.resolveCorrectAnswer):
        // flatten options to string[] and convert letter answers ('a'-'d') to
        // the numeric option index so a future DB-backed read path scores
        // multiple-choice answers correctly.
        const options = (question.options ?? []).map((opt: unknown) =>
          typeof opt === 'string' ? opt : (opt as { text?: string }).text ?? ''
        );
        const type = question.type ?? 'multiple-choice';
        let correctAnswer = question.correctAnswer;
        if (type === 'multiple-choice' && typeof correctAnswer === 'string') {
          const index = correctAnswer.trim().toLowerCase().charCodeAt(0) - 97;
          if (index >= 0 && index < options.length) correctAnswer = index;
        }

        const { error: questionError } = await supabase
          .from('quiz_questions')
          .insert({
            quiz_id: quizData.id,
            question: question.question,
            options,
            correct_answer: correctAnswer,
            explanation: question.explanation,
            order: questionIndex,
          });

        if (questionError) {
          console.error(
            `Error seeding question for lesson ${lessonId}:`,
            questionError
          );
          hadError = true;
        }
      }
    }
  }
  console.log('Lesson details and quizzes seeded successfully.');

  if (hadError) {
    console.error(
      '\n❌ Seed finished with errors above — some rows did not persist. ' +
        'Do NOT treat this as a successful seed; fix the errors and re-run.'
    );
    process.exit(1);
  }

  console.log('Database seed complete! ✅');
}

seed().catch((err) => {
  console.error('Seed failed with an unexpected error:', err);
  process.exit(1);
});
