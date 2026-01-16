
-- Create notifications table for in-app notifications
CREATE TABLE IF NOT EXISTS public.user_notifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'info', -- info, success, warning, achievement, reminder
  icon TEXT,
  link TEXT, -- optional link to navigate to
  is_read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  read_at TIMESTAMP WITH TIME ZONE
);

-- Enable RLS
ALTER TABLE public.user_notifications ENABLE ROW LEVEL SECURITY;

-- Users can view their own notifications
CREATE POLICY "Users can view their own notifications"
  ON public.user_notifications FOR SELECT
  USING (auth.uid() = user_id);

-- Users can update their own notifications (mark as read)
CREATE POLICY "Users can update their own notifications"
  ON public.user_notifications FOR UPDATE
  USING (auth.uid() = user_id);

-- Users can delete their own notifications
CREATE POLICY "Users can delete their own notifications"
  ON public.user_notifications FOR DELETE
  USING (auth.uid() = user_id);

-- System can insert notifications (via service role)
CREATE POLICY "Service role can insert notifications"
  ON public.user_notifications FOR INSERT
  WITH CHECK (true);

-- Admins can view all notifications
CREATE POLICY "Admins can view all notifications"
  ON public.user_notifications FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Create index for faster queries
CREATE INDEX idx_user_notifications_user_id ON public.user_notifications(user_id);
CREATE INDEX idx_user_notifications_unread ON public.user_notifications(user_id, is_read) WHERE is_read = false;

-- Insert initial company settings for Rossik
INSERT INTO public.company_settings (company_id, default_language, active_languages, require_approval, welcome_message, support_email, timezone)
SELECT 
  id,
  'ro',
  ARRAY['ro', 'en', 'de'],
  false,
  'Bine ai venit la platforma de training Rossik! Începe-ți călătoria de învățare.',
  'training@rossik.ro',
  'Europe/Bucharest'
FROM public.companies WHERE slug = 'rossik'
ON CONFLICT (company_id) DO NOTHING;

-- Insert initial company branding for Rossik
INSERT INTO public.company_branding (company_id, platform_name, primary_color, secondary_color, accent_color, logo_url)
SELECT 
  id,
  'Rossik Training Academy',
  '#3b82f6',
  '#1e40af', 
  '#f59e0b',
  NULL
FROM public.companies WHERE slug = 'rossik'
ON CONFLICT (company_id) DO NOTHING;

-- Configure premium chapters (advanced topics require at least Starter plan)
INSERT INTO public.premium_chapters (chapter_id, min_plan_type)
VALUES 
  ('adr', 'starter'),
  ('customs', 'starter'),
  ('high-value-goods', 'professional'),
  ('intermodal', 'professional'),
  ('risk-management', 'professional'),
  ('kpi', 'professional'),
  ('case-studies', 'enterprise')
ON CONFLICT (chapter_id) DO NOTHING;
