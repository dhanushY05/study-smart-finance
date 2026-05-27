
-- =========================================
-- TRANSACTIONS TABLE
-- =========================================
CREATE TABLE public.transactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  amount NUMERIC(12, 2) NOT NULL CHECK (amount >= 0),
  type TEXT NOT NULL CHECK (type IN ('expense', 'income')),
  category TEXT NOT NULL DEFAULT 'Other',
  description TEXT,
  occurred_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.transactions TO authenticated;
GRANT ALL ON public.transactions TO service_role;

ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own transactions"
  ON public.transactions FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users insert own transactions"
  ON public.transactions FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own transactions"
  ON public.transactions FOR UPDATE TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users delete own transactions"
  ON public.transactions FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

CREATE INDEX idx_transactions_user_occurred ON public.transactions (user_id, occurred_at DESC);

CREATE TRIGGER trg_transactions_updated_at
  BEFORE UPDATE ON public.transactions
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- =========================================
-- CONTACT MESSAGES TABLE
-- =========================================
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'resolved')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_messages TO anon;
GRANT SELECT, INSERT ON public.contact_messages TO authenticated;
GRANT ALL ON public.contact_messages TO service_role;

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Anyone (even logged out) can submit a message
CREATE POLICY "Anyone can submit contact messages"
  ON public.contact_messages FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Logged-in users can only read their own
CREATE POLICY "Users view own messages"
  ON public.contact_messages FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

-- =========================================
-- AUTO-SEED DEMO TRANSACTIONS FOR NEW USERS
-- =========================================
CREATE OR REPLACE FUNCTION public.seed_demo_transactions()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.transactions (user_id, amount, type, category, description, occurred_at) VALUES
    (NEW.id, 15000, 'income',  'Allowance',     'Monthly allowance',         now() - interval '2 days'),
    (NEW.id, 8500,  'income',  'Part-time Job', 'Tutoring earnings',         now() - interval '5 days'),
    (NEW.id, 450,   'expense', 'Food',          'Lunch at campus cafe',      now() - interval '1 day'),
    (NEW.id, 1200,  'expense', 'Travel',        'Metro pass',                now() - interval '3 days'),
    (NEW.id, 3500,  'expense', 'Tuition',       'Lab fee',                   now() - interval '7 days'),
    (NEW.id, 899,   'expense', 'Entertainment', 'Movie & snacks',            now() - interval '4 days'),
    (NEW.id, 2200,  'expense', 'Books',         'Statistics textbook',       now() - interval '10 days'),
    (NEW.id, 350,   'expense', 'Food',          'Coffee with friends',       now() - interval '6 hours'),
    (NEW.id, 1800,  'expense', 'Shopping',      'New backpack',              now() - interval '12 days'),
    (NEW.id, 600,   'expense', 'Food',          'Groceries',                 now() - interval '8 days');
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created_seed_transactions
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.seed_demo_transactions();
