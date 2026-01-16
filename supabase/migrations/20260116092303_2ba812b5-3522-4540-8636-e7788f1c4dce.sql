-- Migrare utilizatori existenți la compania Rossik
-- Adaugă toți utilizatorii existenți în company_users pentru Rossik

INSERT INTO public.company_users (user_id, company_id, role, status, approved_at)
SELECT 
  p.id as user_id,
  c.id as company_id,
  CASE 
    WHEN p.role = 'admin' THEN 'super_admin'::public.company_role
    ELSE 'user'::public.company_role
  END as role,
  'approved'::public.user_company_status as status,
  now() as approved_at
FROM public.profiles p
CROSS JOIN public.companies c
WHERE c.is_master = true
  AND NOT EXISTS (
    SELECT 1 FROM public.company_users cu 
    WHERE cu.user_id = p.id AND cu.company_id = c.id
  );