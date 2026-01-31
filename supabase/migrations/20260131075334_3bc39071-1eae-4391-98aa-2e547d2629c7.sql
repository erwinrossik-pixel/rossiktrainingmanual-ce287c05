
-- Drop the security definer view to fix the linter error
-- The application will use user_roles table directly instead
DROP VIEW IF EXISTS public.profile_with_role;
