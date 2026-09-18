CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_company_id uuid;
  v_require_approval boolean := true;
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data ->> 'first_name',
    NEW.raw_user_meta_data ->> 'last_name'
  )
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user')
  ON CONFLICT (user_id, role) DO NOTHING;

  -- Company membership is created at signup time (before email confirmation)
  BEGIN
    v_company_id := NULLIF(NEW.raw_user_meta_data ->> 'company_id', '')::uuid;
  EXCEPTION WHEN others THEN
    v_company_id := NULL;
  END;

  IF v_company_id IS NULL OR NOT EXISTS (SELECT 1 FROM public.companies WHERE id = v_company_id) THEN
    SELECT id INTO v_company_id FROM public.companies WHERE is_master = true LIMIT 1;
  END IF;

  IF v_company_id IS NOT NULL THEN
    SELECT COALESCE(cs.require_approval, true) INTO v_require_approval
    FROM public.company_settings cs WHERE cs.company_id = v_company_id LIMIT 1;

    INSERT INTO public.company_users (user_id, company_id, role, status, approved_at)
    VALUES (
      NEW.id,
      v_company_id,
      'user'::company_role,
      CASE WHEN v_require_approval THEN 'pending'::user_company_status ELSE 'approved'::user_company_status END,
      CASE WHEN v_require_approval THEN NULL ELSE now() END
    )
    ON CONFLICT (user_id, company_id) DO NOTHING;
  END IF;

  RETURN NEW;
END;
$$;

-- Backfill users that registered but never got a membership row
INSERT INTO public.company_users (user_id, company_id, role, status)
SELECT u.id, (SELECT id FROM public.companies WHERE is_master = true LIMIT 1), 'user'::company_role, 'pending'::user_company_status
FROM auth.users u
WHERE NOT EXISTS (SELECT 1 FROM public.company_users cu WHERE cu.user_id = u.id)
  AND (SELECT id FROM public.companies WHERE is_master = true LIMIT 1) IS NOT NULL
ON CONFLICT (user_id, company_id) DO NOTHING;