-- Server-side protection for paid lesson content (2026-05-30).
-- Already applied to the live DB via the Management API; kept here for
-- reproducibility and so a fresh environment converges on the same state.
--
-- Paid (Intermedio/Avanzado) lesson bodies are no longer shipped in the client
-- bundle (split into data/paidContent.ts, seed-only). They are stored here and
-- served at runtime by the get-lesson-content Edge Function after a server-side
-- premium check. The content tables are locked so they are not readable with
-- the anon key; the service role (Edge Functions / seed) bypasses RLS.

-- 1. Protected content store (full paid lesson blobs, icon-serialized sections).
create table if not exists public.protected_lessons (
  lesson_id  integer primary key references public.lessons(id) on delete cascade,
  content    jsonb not null,
  created_at timestamptz default now()
);
alter table public.protected_lessons enable row level security;
-- No policies: RLS-enabled with no policy denies all anon/authenticated access.
-- The service role (used by the seed and get-lesson-content) bypasses RLS.

-- 2. Lock the content tables: drop the public read policies so lesson bodies and
-- quiz questions are not world-readable via the anon key. The app reads free
-- lessons from the bundle and paid lessons via the gated function; grok-chat
-- reads lesson_details via the service role.
drop policy if exists "Allow public read access to lesson_details" on public.lesson_details;
drop policy if exists "Allow public read access to quizzes"        on public.quizzes;
drop policy if exists "Allow public read access to quiz_questions"  on public.quiz_questions;
