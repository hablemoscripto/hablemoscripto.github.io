-- 2026-11-16: free accounts only retrieve Principiante lessons from the tutor.
--
-- search_lessons_rag is security definer and reads every lesson_details row.
-- grok-chat calls it with the service role, so the paywall in get-lesson-content
-- never applies. Filtering after LIMIT 8 is wrong: paid hits can fill the
-- window and drop a free lesson that would have ranked next.
--
-- level_name defaults to null so a grok-chat build that still calls the
-- one-argument RPC keeps the old behavior until it is redeployed. The new
-- function passes 'Principiante' for a free account and null for a paid one.
-- Apply this in the SQL editor before deploying grok-chat.

drop function if exists public.search_lessons_rag(text[], text);
drop function if exists public.search_lessons_rag(text[]);

create function public.search_lessons_rag(keywords text[], level_name text default null)
returns table(id integer, title text, description text, matched_sections text)
language sql
stable
security definer
set search_path = public
as $$
  select
    l.id,
    l.title,
    l.description,
    left(
      (
        select string_agg(distinct s.value ->> 'title', ' | ')
        from jsonb_array_elements(
          case when jsonb_typeof(ld.sections) = 'array' then ld.sections else '[]'::jsonb end
        ) as s(value)
        where coalesce(s.value ->> 'title', '') <> ''
          and exists (
            select 1 from unnest(keywords) as kw
            where (coalesce(s.value ->> 'title', '') || ' ' || coalesce(s.value ->> 'content', ''))
              ilike '%' || kw || '%'
          )
      ),
      240
    ) as matched_sections
  from lessons l
  left join lesson_details ld on ld.lesson_id = l.id
  cross join lateral (
    select coalesce(
      string_agg(
        coalesce(s.value ->> 'title', '') || ' ' || coalesce(s.value ->> 'content', ''),
        ' '
      ),
      ''
    ) as section_text
    from jsonb_array_elements(
      case when jsonb_typeof(ld.sections) = 'array' then ld.sections else '[]'::jsonb end
    ) as s(value)
  ) st
  where exists (
    select 1
    from unnest(keywords) as kw
    where l.title ilike '%' || kw || '%'
       or l.description ilike '%' || kw || '%'
       or st.section_text ilike '%' || kw || '%'
  )
  and (level_name is null or ld.level = level_name)
  order by
    (
      (select count(*) from unnest(keywords) as kw where l.title ilike '%' || kw || '%') * 3
      + (select count(*) from unnest(keywords) as kw where l.description ilike '%' || kw || '%') * 2
      + (select count(*) from unnest(keywords) as kw where st.section_text ilike '%' || kw || '%')
    ) desc,
    l.id asc
  limit 8;
$$;

revoke all on function public.search_lessons_rag(text[], text) from public;
revoke all on function public.search_lessons_rag(text[], text) from anon;
revoke all on function public.search_lessons_rag(text[], text) from authenticated;
grant execute on function public.search_lessons_rag(text[], text) to service_role;
