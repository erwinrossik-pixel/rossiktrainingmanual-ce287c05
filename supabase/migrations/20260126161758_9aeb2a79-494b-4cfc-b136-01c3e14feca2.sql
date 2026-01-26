-- Security hardening: tighten RLS on profiles/certificates and prevent role escalation

-- 0) Make admin checks rely on user_roles + company_users (NOT profiles.role)
CREATE OR REPLACE FUNCTION public.is_admin_user(user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT public.has_role($1, 'admin'::app_role)
     OR EXISTS (
        SELECT 1
        FROM public.company_users
        WHERE company_users.user_id = $1
          AND company_users.role IN ('super_admin', 'company_admin')
          AND company_users.status = 'approved'
      );
$$;

-- 1) PROFILES: remove overly broad/duplicate policies and re-create strict authenticated-only policies
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Block anonymous access to profiles" ON public.profiles;
DROP POLICY IF EXISTS "Company admins can view company profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can only view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;

CREATE POLICY "Users can view own profile"
ON public.profiles
FOR SELECT
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
ON public.profiles
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

CREATE POLICY "Company admins can view company profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1
    FROM public.company_users cu_admin
    JOIN public.company_users cu_target
      ON cu_admin.company_id = cu_target.company_id
    WHERE cu_admin.user_id = auth.uid()
      AND cu_admin.role IN ('company_admin'::company_role, 'super_admin'::company_role)
      AND cu_admin.status = 'approved'::user_company_status
      AND cu_target.user_id = profiles.id
  )
);

CREATE POLICY "Platform admins can view all profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- 1b) PROFILES: prevent privilege escalation by blocking role changes for non-admins
CREATE OR REPLACE FUNCTION public.prevent_profile_role_change()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  IF TG_OP = 'UPDATE' THEN
    IF NEW.role IS DISTINCT FROM OLD.role THEN
      -- Only platform admins (user_roles.admin) may change roles
      IF NOT public.has_role(auth.uid(), 'admin'::app_role) THEN
        RAISE EXCEPTION 'Not allowed to change role';
      END IF;
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_prevent_profile_role_change ON public.profiles;
CREATE TRIGGER trg_prevent_profile_role_change
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.prevent_profile_role_change();

-- 2) CERTIFICATES: tighten policies to authenticated only and remove duplicates
DROP POLICY IF EXISTS "Admins can manage all certificates" ON public.certificates;
DROP POLICY IF EXISTS "Block anonymous access to certificates" ON public.certificates;
DROP POLICY IF EXISTS "Company admins can view company certificates" ON public.certificates;
DROP POLICY IF EXISTS "Company admins view company certificates" ON public.certificates;
DROP POLICY IF EXISTS "Super admins view all certificates" ON public.certificates;
DROP POLICY IF EXISTS "Users can insert own certificate" ON public.certificates;
DROP POLICY IF EXISTS "Users can view own certificates" ON public.certificates;

CREATE POLICY "Users can view own certificates"
ON public.certificates
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own certificates"
ON public.certificates
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Company admins can view company certificates"
ON public.certificates
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1
    FROM public.company_users cu_admin
    JOIN public.company_users cu_cert
      ON cu_admin.company_id = cu_cert.company_id
    WHERE cu_admin.user_id = auth.uid()
      AND cu_admin.role IN ('company_admin'::company_role, 'super_admin'::company_role)
      AND cu_admin.status = 'approved'::user_company_status
      AND cu_cert.user_id = certificates.user_id
  )
);

CREATE POLICY "Super admins can view all certificates"
ON public.certificates
FOR SELECT
TO authenticated
USING (public.is_super_admin(auth.uid()));

CREATE POLICY "Platform admins can manage all certificates"
ON public.certificates
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));
