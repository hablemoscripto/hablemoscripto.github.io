-- 2026-07-03: Section-level RAG search for the grok-chat Edge Function.
--
-- Why: keyword retrieval previously searched only lessons.title and
-- lessons.description, so topics covered inside a lesson's sections were
-- invisible to the AI tutor (e.g. "DIAN" lives in the "Impuestos Cripto en
-- LATAM" section of Lesson 44, whose title never mentions it). This function
-- also matches the flattened text of lesson_details.sections (section titles
-- and content).
--
-- SECURITY DEFINER because lesson_details is locked to service-role reads
-- (2026-05-30 content protection). Execution is granted to service_role only;
-- the Edge Function calls it with its service-role client.
--
-- Deploy order: apply this migration BEFORE deploying the updated grok-chat.
-- The Edge Function falls back gracefully to the old title/description search
-- if this function is missing, so the wrong order degrades quality but does
-- not break chat.

create or replace function public.search_lessons_rag(keywords text[])
returns table(id integer, title text, description text)
language sql
stable
security definer
set search_path = public
as $$
  select l.id, l.title, l.description
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
    -- Relevance heuristic: title match beats description match beats
    -- section-only match. Rows here matched at least one field, so a
    -- section-only match simply scores 0.
    (
      case when exists (
        select 1 from unnest(keywords) as kw where l.title ilike '%' || kw || '%'
      ) then 2 else 0 end
      +
      case when exists (
        select 1 from unnest(keywords) as kw where l.description ilike '%' || kw || '%'
      ) then 1 else 0 end
    ) desc,
    l.id asc
  limit 8;
$$;

revoke all on function public.search_lessons_rag(text[]) from public;
revoke all on function public.search_lessons_rag(text[]) from anon;
revoke all on function public.search_lessons_rag(text[]) from authenticated;
grant execute on function public.search_lessons_rag(text[]) to service_role;
