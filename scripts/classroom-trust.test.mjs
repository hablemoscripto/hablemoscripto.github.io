/**
 * Batch 2 first-session / trust anchors on shipped files.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => readFileSync(join(root, rel), 'utf8');

test('navbar does not call XP rank Nivel', () => {
  const nav = read('components/EducationNavbar.tsx');
  assert.match(nav, /\{xp\} XP/);
  assert.doesNotMatch(nav, /Nivel \{level\}/);
  assert.doesNotMatch(nav, /Nv \{level\}/);
  assert.match(nav, /currentView !== 'lesson'/);
});

test('lesson hero is compact on mobile and focus mode is persisted', () => {
  const view = read('components/LessonView.tsx');
  assert.match(view, /py-5 md:py-12/);
  assert.match(view, /line-clamp-2 md:line-clamp-none/);
  assert.match(view, /hc_focus_mode/);
  assert.match(view, /toggleFocusMode/);
  assert.match(view, /Math\.round\(scrollProgress \* 100\)/);
  assert.match(view, /!isFocusMode && lesson\.referrals/);
});

test('quiz celebrates XP only after persist', () => {
  const quiz = read('components/education/Quiz.tsx');
  assert.match(quiz, /persistStatus/);
  assert.match(quiz, /result !== false/);
  assert.match(quiz, /Reintentar guardado/);
  assert.doesNotMatch(quiz, /animate-bounce/);
  const view = read('components/LessonView.tsx');
  assert.match(view, /Promise<boolean>/);
});

test('daily review withholds XP copy until awarded', () => {
  const hook = read('hooks/useDailyReview.ts');
  assert.match(hook, /xpAward/);
  assert.match(hook, /setXpAward\('awarded'\)/);
  assert.match(hook, /setXpAward\('failed'\)/);
  const card = read('components/education/DailyReviewCard.tsx');
  assert.match(card, /xpAward === 'awarded'/);
  assert.match(card, /El XP se suma al reconectar/);
});

test('chat bubble contrast, 44px send, retry', () => {
  const chat = read('components/ChatWidget.tsx');
  assert.match(chat, /bg-brand-500 text-navy-950/);
  assert.doesNotMatch(chat, /bg-brand-600 text-white/);
  assert.match(chat, /min-h-11 min-w-11/);
  assert.match(chat, /Reintentar/);
  assert.match(chat, /skipUserAppend/);
});

test('day-zero dashboard hides PricingSection for free users', () => {
  const page = read('components/EducationPage.tsx');
  assert.match(page, /totalCompletedLessons >= 3/);
  assert.match(page, /courseTier !== 'free'/);
});
