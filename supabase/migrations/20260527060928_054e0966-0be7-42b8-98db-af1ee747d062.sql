
-- Lock down the seed function so only the trigger can call it
REVOKE EXECUTE ON FUNCTION public.seed_demo_transactions() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.seed_demo_transactions() FROM anon;
REVOKE EXECUTE ON FUNCTION public.seed_demo_transactions() FROM authenticated;

-- Tighten the contact-message insert policy with sane bounds (still public)
DROP POLICY IF EXISTS "Anyone can submit contact messages" ON public.contact_messages;
CREATE POLICY "Anyone can submit contact messages"
  ON public.contact_messages FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(trim(name))    BETWEEN 1 AND 100
    AND length(trim(email))   BETWEEN 3 AND 255
    AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND length(trim(subject)) BETWEEN 1 AND 200
    AND length(trim(message)) BETWEEN 1 AND 5000
    AND status = 'new'
    AND (user_id IS NULL OR user_id = auth.uid())
  );
