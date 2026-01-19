-- =====================================================
-- SECURITY FIX PART 2b: Continuare rezolvare probleme
-- =====================================================

-- 1. COMPANIES: Restricționare acces (dacă nu au fost create deja)
DROP POLICY IF EXISTS "Anyone can view active companies for registration" ON public.companies;

-- 2. CERTIFICATE_SETTINGS: Restricționare la admini (refacem dacă a eșuat)
DROP POLICY IF EXISTS "Anyone can view certificate settings" ON public.certificate_settings;

-- Verificăm dacă politica există deja
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'certificate_settings' AND policyname = 'Only admins can view certificate settings') THEN
    EXECUTE 'CREATE POLICY "Only admins can view certificate settings" ON public.certificate_settings FOR SELECT TO authenticated USING (has_role(auth.uid(), ''admin'') OR is_super_admin(auth.uid()))';
  END IF;
END $$;

-- 3. CERTIFICATES: Curățăm orice politică publică rămasă
DROP POLICY IF EXISTS "Public certificate verification by code only" ON public.certificates;
DROP POLICY IF EXISTS "Anyone can verify certificates by code" ON public.certificates;
DROP POLICY IF EXISTS "Anyone can verify certificates" ON public.certificates;

-- 4. Creăm funcție pentru verificare certificate publică (pentru edge function)
CREATE OR REPLACE FUNCTION public.verify_certificate_by_code(p_code TEXT)
RETURNS TABLE(
  certificate_code TEXT,
  trainee_name TEXT,
  issued_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,
  is_revoked BOOLEAN,
  revoke_reason TEXT,
  chapters_completed INTEGER,
  quizzes_passed INTEGER,
  average_score NUMERIC,
  total_training_hours NUMERIC
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    c.certificate_code,
    c.trainee_name,
    c.issued_at,
    c.expires_at,
    c.is_revoked,
    c.revoke_reason,
    c.chapters_completed,
    c.quizzes_passed,
    c.average_score,
    c.total_training_hours
  FROM public.certificates c
  WHERE c.certificate_code = UPPER(TRIM(p_code));
END;
$$;

GRANT EXECUTE ON FUNCTION public.verify_certificate_by_code(TEXT) TO anon, authenticated;