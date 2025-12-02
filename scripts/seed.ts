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
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import {
  BEGINNER_LEVEL,
  INTERMEDIATE_LEVEL,
  ADVANCED_LEVEL,
  LESSONS_DATA,
  LevelData,
} from '../data/courseData';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.VITE_SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error(
    'Supabase credentials not found. Make sure to create a .env.local file with VITE_SUPABASE_URL and VITE_SUPABASE_SERVICE_KEY.'
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
};

function getIconName(icon: LucideIcon): string | null {
  for (const name in ICONS) {
    if (ICONS[name] === icon) {
      return name;
    }
  }
  return null;
}

async function seed() {
  console.log('Starting database seed...');

  // 1. Clean up existing data
  console.log('Cleaning up old data...');
  const tables = [
    'referrals',
    'quiz_questions',
    'quizzes',
    'lesson_details',
    'lessons',
    'modules',
    'levels',
  ];
  for (const table of tables) {
    const cleanupColumn = table === 'lesson_details' ? 'lesson_id' : 'id';
    const { error } = await supabase.from(table).delete().neq(cleanupColumn, -1); // trick to delete all rows
    if (error) {
      console.error(`Error cleaning up ${table}:`, error);
      return;
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
      return;
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
        return;
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
          return;
        }

        // Seed Referrals if they exist
        if (lesson.referrals) {
          for (const referral of lesson.referrals) {
            const { error: referralError } = await supabase
              .from('referrals')
              .insert({
                lesson_id: lesson.id,
                ...referral,
              });
            if (referralError) {
              console.error('Error seeding referral:', referralError);
            }
          }
        }
      }
    }
  }
  console.log('Levels, modules, and lessons seeded successfully.');

  // 3. Seed Lesson Details and Quizzes
  console.log('Seeding lesson details and quizzes...');
  for (const lessonId in LESSONS_DATA) {
    const lessonData = LESSONS_DATA[lessonId];

    // Seed Lesson Details
    const { error: detailError } = await supabase
      .from('lesson_details')
      .insert({
        lesson_id: lessonData.id,
        level: lessonData.level,
        number: lessonData.number,
        description: lessonData.description,
        sections: lessonData.sections,
      });
    if (detailError) {
      console.error(`Error seeding details for lesson ${lessonId}:`, detailError);
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
        return;
      }

      for (const [
        questionIndex,
        question,
      ] of lessonData.quiz.questions.entries()) {
        const { error: questionError } = await supabase
          .from('quiz_questions')
          .insert({
            quiz_id: quizData.id,
            question: question.question,
            options: question.options,
            correct_answer: question.correctAnswer,
            explanation: question.explanation,
            order: questionIndex,
          });

        if (questionError) {
          console.error(
            `Error seeding question for lesson ${lessonId}:`,
            questionError
          );
        }
      }
    }
  }
  console.log('Lesson details and quizzes seeded successfully.');
  console.log('Database seed complete! ✅');
}

seed();
