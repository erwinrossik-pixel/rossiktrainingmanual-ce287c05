CREATE OR REPLACE FUNCTION public.register_independent_user()
 RETURNS json
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  v_user_id uuid := auth.uid();
  v_public_company uuid := '00000000-0000-0000-0000-000000000001';
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  -- Insert as PENDING so admin must approve from admin panel
  INSERT INTO public.company_users (user_id, company_id, role, status)
  VALUES (v_user_id, v_public_company, 'user', 'pending')
  ON CONFLICT (user_id, company_id) DO UPDATE
    SET status = CASE
      WHEN public.company_users.status = 'approved' THEN 'approved'
      ELSE 'pending'
    END;

  RETURN json_build_object(
    'success', true,
    'company_id', v_public_company,
    'status', 'pending'
  );
END;
$function$;