-- Drop and recreate get_user_company_id with correct parameter name
DROP FUNCTION IF EXISTS public.get_user_company_id(uuid);

CREATE FUNCTION public.get_user_company_id(_user_id uuid)
RETURNS uuid
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT company_id FROM public.company_users 
  WHERE company_users.user_id = _user_id 
  AND status = 'approved'
  LIMIT 1;
$$;