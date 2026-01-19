-- Create table to track app version/publish info
CREATE TABLE IF NOT EXISTS public.app_metadata (
  id TEXT PRIMARY KEY DEFAULT 'main',
  last_published_at TIMESTAMPTZ,
  version TEXT DEFAULT '2025.1',
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.app_metadata ENABLE ROW LEVEL SECURITY;

-- Everyone can read app metadata
CREATE POLICY "Anyone can read app metadata" 
ON public.app_metadata FOR SELECT 
USING (true);

-- Only admins can update
CREATE POLICY "Admins can update app metadata" 
ON public.app_metadata FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'admin'
  ) OR public.is_super_admin(auth.uid())
);

-- Insert initial data with current date
INSERT INTO public.app_metadata (id, last_published_at, version)
VALUES ('main', NOW(), '2025.1')
ON CONFLICT (id) DO NOTHING;