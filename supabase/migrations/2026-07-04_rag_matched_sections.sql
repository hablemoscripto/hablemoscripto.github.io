-- 2026-07-04: v2 of search_lessons_rag.
--
-- Why: v1 (2026-07-03) made section content searchable, but the reranker that
-- picks the final 2 lessons only sees title + description, so a lesson whose
-- match lives in a section (Lesson 44's "Impuestos Cripto en LATAM" for a DIAN
-- question) was retrieved and then discarded. v2 returns the matched section
-- titles so the Edge Function can show the reranker WHY a lesson is a
-- candidate, and ranks by how many keywords matched instead of a binary score.
--
-- Return type changes, so the old function must be dropped first.
-- Deploy order: apply this, then deploy grok-chat (older grok-chat builds only
-- read the first three columns, so applying this first is safe).

drop function if exists public.search_lessons_rag(text[]);

create function public.search_lessons_rag(keywords text[])
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
  order by
    -- Keyword-count relevance: a title hit is worth 3, a description hit 2,
    -- a section hit 1, summed per keyword. A lesson matching three topic
    -- keywords in its sections outranks one matching a single generic
    -- keyword in its title.
    (
      (select count(*) from unnest(keywords) as kw where l.title ilike '%' || kw || '%') * 3
      + (select count(*) from unnest(keywords) as kw where l.description ilike '%' || kw || '%') * 2
      + (select count(*) from unnest(keywords) as kw where st.section_text ilike '%' || kw || '%')
    ) desc,
    l.id asc
  limit 8;
$$;

revoke all on function public.search_lessons_rag(text[]) from public;
revoke all on function public.search_lessons_rag(text[]) from anon;
revoke all on function public.search_lessons_rag(text[]) from authenticated;
grant execute on function public.search_lessons_rag(text[]) to service_role;
