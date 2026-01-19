-- =====================================================
-- SECURITY FIX: Rezolvare probleme critice de securitate
-- =====================================================

-- 1. PROFILES: Restricționare acces - utilizatorii pot vedea doar propriul profil
--    Company admins pot vedea profilurile din compania lor

-- Ștergere politici existente pentru profiles
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can view profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;

-- Politică nouă: utilizatorii văd doar propriul profil
CREATE POLICY "Users can only view own profile"
ON public.profiles FOR SELECT
USING (auth.uid() = id);

-- Politică pentru company admins: pot vedea profilurile utilizatorilor din compania lor
CREATE POLICY "Company admins can view company profiles"
ON public.profiles FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.company_users cu_admin
    JOIN public.company_users cu_target ON cu_admin.company_id = cu_target.company_id
    WHERE cu_admin.user_id = auth.uid()
      AND cu_admin.role IN ('company_admin', 'super_admin')
      AND cu_admin.status = 'approved'
      AND cu_target.user_id = profiles.id
  )
);

-- 2. CERTIFICATES: Restricționare verificare publică - doar cod, nu date personale
--    Ștergem politica publică și creăm una care expune doar codul

DROP POLICY IF EXISTS "Anyone can verify certificates" ON public.certificates;
DROP POLICY IF EXISTS "Anyone can view certificates for verification" ON public.certificates;

-- Utilizatorii autentificați pot vedea doar propriile certificate
CREATE POLICY "Users can view own certificates"
ON public.certificates FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Admins pot vedea toate certificatele din compania lor
CREATE POLICY "Company admins can view company certificates"
ON public.certificates FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.company_users cu_admin
    JOIN public.company_users cu_cert ON cu_admin.company_id = cu_cert.company_id
    WHERE cu_admin.user_id = auth.uid()
      AND cu_admin.role IN ('company_admin', 'super_admin')
      AND cu_admin.status = 'approved'
      AND cu_cert.user_id = certificates.user_id
  )
);

-- Verificare publică prin cod - doar existență și validitate, nu date personale
-- Se va face printr-un edge function pentru securitate maximă

-- 3. COMPANY_SETTINGS: Restricționare acces cod de înregistrare
--    Eliminăm accesul public direct și folosim un endpoint securizat

DROP POLICY IF EXISTS "Anyone can lookup company by registration code" ON public.company_settings;

-- Creăm o funcție SECURITY DEFINER pentru verificarea codului de înregistrare
-- fără a expune alte date
CREATE OR REPLACE FUNCTION public.verify_registration_code(p_code TEXT)
RETURNS TABLE(company_id UUID, company_name TEXT, is_active BOOLEAN)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    c.id,
    c.name,
    c.is_active
  FROM public.company_settings cs
  JOIN public.companies c ON cs.company_id = c.id
  WHERE cs.registration_code = UPPER(TRIM(p_code))
    AND c.is_active = true;
END;
$$;

-- Grant execute pe funcție pentru anon și authenticated
GRANT EXECUTE ON FUNCTION public.verify_registration_code(TEXT) TO anon, authenticated;

-- Company admins și super admins pot vedea settings
CREATE POLICY "Company admins can view own company settings"
ON public.company_settings FOR SELECT
TO authenticated
USING (is_company_admin(auth.uid(), company_id) OR is_super_admin(auth.uid()));

-- 4. USER_SESSIONS: Restricționare acces date de locație
--    Doar utilizatorul propriu și super admins

DROP POLICY IF EXISTS "Users can view own sessions" ON public.user_sessions;
DROP POLICY IF EXISTS "Admins can view all sessions" ON public.user_sessions;
DROP POLICY IF EXISTS "Company admins can view company user sessions" ON public.user_sessions;

-- Utilizatorii văd doar propriile sesiuni
CREATE POLICY "Users can only view own sessions"
ON public.user_sessions FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Super admins pot vedea toate sesiunile (pentru debugging)
CREATE POLICY "Super admins can view all sessions"
ON public.user_sessions FOR SELECT
TO authenticated
USING (is_super_admin(auth.uid()));