-- Newsletter: one deduped subscriber list (newsletter_subscribers, UNIQUE on email).
-- Account signups opt in via a checkbox -> user_metadata.newsletter=true; this
-- trigger adds them to the same list (source='signup'). The landing form already
-- inserts (source default 'landing_page'). send-newsletter mails all is_active.
-- Adds the newsletter insert to handle_new_user() without changing its existing
-- profiles/user_profiles behavior.

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (id, email, is_admin)
  VALUES (NEW.id, NEW.email, false)
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO public.user_profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', '')
  )
  ON CONFLICT (id) DO NOTHING;

  -- Opt-in newsletter at signup (checkbox in AuthModal -> user_metadata).
  IF (NEW.raw_user_meta_data->>'newsletter') = 'true' THEN
    INSERT INTO public.newsletter_subscribers (email, source)
    VALUES (NEW.email, 'signup')
    ON CONFLICT (email) DO NOTHING;
  END IF;

  RETURN NEW;
END;
$function$;
