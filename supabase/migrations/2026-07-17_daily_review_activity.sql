-- Daily review activity: one row per answered daily-review question.
-- Feeds three things:
--   1. Streak qualification (GamificationContext.refreshStreak merges these
--      dates with lesson-completion dates, so a 1-minute review keeps the
--      streak alive without completing a full lesson).
--   2. Review XP (fetchUserStats counts rows x 15 XP).
--   3. Cross-device dedupe of the same question on the same day (unique key).
-- The client degrades gracefully if this table is missing: reviews still work
-- locally, they just do not feed streak/XP until the migration runs.

create table if not exists public.daily_review_activity (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  review_date date not null,
  question_id text not null,
  correct boolean not null,
  created_at timestamptz not null default now(),
  unique (user_id, review_date, question_id)
);

create index if not exists daily_review_activity_user_date_idx
  on public.daily_review_activity (user_id, review_date);

alter table public.daily_review_activity enable row level security;

create policy "Users insert own review activity"
  on public.daily_review_activity
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "Users read own review activity"
  on public.daily_review_activity
  for select
  to authenticated
  using (auth.uid() = user_id);

create policy "Service role full access on daily_review_activity"
  on public.daily_review_activity
  for all
  to service_role
  using (true)
  with check (true);
