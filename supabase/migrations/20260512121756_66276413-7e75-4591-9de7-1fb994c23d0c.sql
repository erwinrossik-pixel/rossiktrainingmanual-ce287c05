
-- 1. Add 'removed' to enum
ALTER TYPE public.user_company_status ADD VALUE IF NOT EXISTS 'removed';

-- 2. Create Independent / Public tenant
INSERT INTO public.companies (id, name, slug, is_active, is_master, custom_domain)
VALUES (
  '00000000-0000-0000-0000-000000000001',
  'Independent',
  'public',
  true,
  false,
  NULL
)
ON CONFLICT (id) DO NOTHING;

-- 3. Default branding for public tenant
INSERT INTO public.company_branding (
  company_id, platform_name, primary_color, secondary_color, accent_color,
  background_color, text_color, font_family
)
VALUES (
  '00000000-0000-0000-0000-000000000001',
  'Training Platform', '#1e40af', '#3b82f6', '#f59e0b',
  '#ffffff', '#1f2937', 'Inter'
)
ON CONFLICT (company_id) DO NOTHING;

-- 4. Default settings for public tenant - no approval, no code
INSERT INTO public.company_settings (
  company_id, default_language, active_languages, timezone,
  registration_code, require_approval, welcome_message
)
VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ro', ARRAY['ro','de','en'], 'Europe/Bucharest',
  NULL, false,
  'Bine ai venit! Te-ai înregistrat ca utilizator independent.'
)
ON CONFLICT (company_id) DO NOTHING;

-- 5. RPC: self-register to the public tenant (no code required)
CREATE OR REPLACE FUNCTION public.register_independent_user()
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id uuid := auth.uid();
  v_public_company uuid := '00000000-0000-0000-0000-000000000001';
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  INSERT INTO public.company_users (user_id, company_id, role, status, approved_at)
  VALUES (v_user_id, v_public_company, 'user', 'approved', now())
  ON CONFLICT (user_id, company_id) DO UPDATE
    SET status = 'approved', approved_at = now();

  RETURN json_build_object(
    'success', true,
    'company_id', v_public_company
  );
END;
$$;

-- 6. RPC: admin assigns a user to an additional company
CREATE OR REPLACE FUNCTION public.admin_assign_user_to_company(
  p_user_id uuid,
  p_company_id uuid,
  p_role company_role DEFAULT 'user'
)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.is_admin_user(auth.uid()) THEN
    RAISE EXCEPTION 'Only admins can assign users to companies';
  END IF;

  INSERT INTO public.company_users (user_id, company_id, role, status, approved_by, approved_at)
  VALUES (p_user_id, p_company_id, p_role, 'approved', auth.uid(), now())
  ON CONFLICT (user_id, company_id) DO UPDATE
    SET role = EXCLUDED.role,
        status = 'approved',
        approved_by = auth.uid(),
        approved_at = now();

  RETURN json_build_object('success', true);
END;
$$;

-- 7. RPC: admin removes user from a company (keeps history)
CREATE OR REPLACE FUNCTION public.admin_remove_user_from_company(
  p_user_id uuid,
  p_company_id uuid
)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.is_admin_user(auth.uid()) THEN
    RAISE EXCEPTION 'Only admins can remove users from companies';
  END IF;

  UPDATE public.company_users
  SET status = 'removed', updated_at = now()
  WHERE user_id = p_user_id AND company_id = p_company_id;

  RETURN json_build_object('success', true);
END;
$$;
