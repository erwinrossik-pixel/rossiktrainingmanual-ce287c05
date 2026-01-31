
-- Update get_user_role to use user_roles table as source of truth
-- This prevents the function from reading from profiles.role (deprecated)

CREATE OR REPLACE FUNCTION public.get_user_role(_user_id uuid)
 RETURNS app_role
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $$
  SELECT role FROM public.user_roles 
  WHERE user_id = _user_id 
  ORDER BY 
    CASE role 
      WHEN 'admin' THEN 1 
      ELSE 2 
    END
  LIMIT 1
$$;

-- Add comment explaining the change
COMMENT ON FUNCTION public.get_user_role IS 'Returns the highest priority role for a user from user_roles table. Admin role takes precedence.';
