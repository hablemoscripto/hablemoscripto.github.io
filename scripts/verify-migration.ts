/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.VITE_SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Supabase credentials not found.');
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function verify() {
  console.log('\n📊 MIGRATION VERIFICATION REPORT\n');
  console.log('================================\n');

  // Check levels
  const { data: levels, error: levelsError } = await supabase
    .from('levels')
    .select('*')
    .order('id');

  if (levelsError) {
    console.error('❌ Error fetching levels:', levelsError);
  } else {
    console.log(`✅ Levels: ${levels?.length || 0} rows`);
    levels?.forEach(level => {
      console.log(`   - ${level.id}: "${level.title}" (${level.lessons_count} lessons, icon: ${level.icon_name}, color: ${level.color})`);
    });
  }

  // Check modules
  const { data: modules, error: modulesError } = await supabase
    .from('modules')
    .select('*');

  if (modulesError) {
    console.error('❌ Error fetching modules:', modulesError);
  } else {
    console.log(`\n✅ Modules: ${modules?.length || 0} rows`);
  }

  // Check lessons
  const { data: lessons, error: lessonsError } = await supabase
    .from('lessons')
    .select('*');

  if (lessonsError) {
    console.error('❌ Error fetching lessons:', lessonsError);
  } else {
    console.log(`✅ Lessons: ${lessons?.length || 0} rows`);
    console.log(`   Sample: "${lessons?.[0]?.title}" (ID: ${lessons?.[0]?.id})`);
  }

  // Check lesson details
  const { data: details, error: detailsError } = await supabase
    .from('lesson_details')
    .select('*');

  if (detailsError) {
    console.error('❌ Error fetching lesson_details:', detailsError);
  } else {
    console.log(`✅ Lesson Details: ${details?.length || 0} rows`);
    if (details && details.length > 0) {
      console.log(`   Sample: Lesson ${details[0].lesson_id} has ${details[0].sections?.length || 0} sections`);
    }
  }

  // Check quizzes
  const { data: quizzes, error: quizzesError } = await supabase
    .from('quizzes')
    .select('*');

  if (quizzesError) {
    console.error('❌ Error fetching quizzes:', quizzesError);
  } else {
    console.log(`✅ Quizzes: ${quizzes?.length || 0} rows`);
  }

  // Check quiz questions
  const { data: questions, error: questionsError } = await supabase
    .from('quiz_questions')
    .select('*');

  if (questionsError) {
    console.error('❌ Error fetching quiz_questions:', questionsError);
  } else {
    console.log(`✅ Quiz Questions: ${questions?.length || 0} rows`);
  }

  // Check referrals
  const { data: referrals, error: referralsError } = await supabase
    .from('referrals')
    .select('*');

  if (referralsError) {
    console.error('❌ Error fetching referrals:', referralsError);
  } else {
    console.log(`✅ Referrals: ${referrals?.length || 0} rows`);
  }

  console.log('\n================================');
  console.log('✅ Verification Complete!\n');
}

verify();
