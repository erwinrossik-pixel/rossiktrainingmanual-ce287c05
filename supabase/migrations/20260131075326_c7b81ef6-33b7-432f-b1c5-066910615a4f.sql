
-- Create a view for profile display that uses user_roles as source of truth
CREATE OR REPLACE VIEW public.profile_with_role AS
SELECT 
  p.*,
  COALESCE(
    (SELECT ur.role FROM user_roles ur WHERE ur.user_id = p.id ORDER BY 
      CASE ur.role 
        WHEN 'admin' THEN 1 
        ELSE 2 
      END
      LIMIT 1
    ), 
    'user'::app_role
  ) as effective_role
FROM profiles p;

-- Grant access to the view
GRANT SELECT ON public.profile_with_role TO authenticated;

-- Add comment explaining the security model
COMMENT ON COLUMN profiles.role IS 'DEPRECATED: Use user_roles table for authorization. This column is kept for backwards compatibility only.';

-- Insert missing user_roles entries based on profiles.role (only admin and user are valid)
INSERT INTO user_roles (user_id, role)
SELECT p.id, p.role::app_role
FROM profiles p
WHERE p.role IN ('admin', 'user')
  AND NOT EXISTS (
    SELECT 1 FROM user_roles ur 
    WHERE ur.user_id = p.id AND ur.role = p.role::app_role
  )
ON CONFLICT (user_id, role) DO NOTHING;
