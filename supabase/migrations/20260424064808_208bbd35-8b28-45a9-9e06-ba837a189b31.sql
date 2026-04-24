-- Remove duplicate 'user' role for admins (keep only admin role)
DELETE FROM public.user_roles ur
WHERE ur.role = 'user'
  AND EXISTS (
    SELECT 1 FROM public.user_roles ur2
    WHERE ur2.user_id = ur.user_id AND ur2.role = 'admin'
  );