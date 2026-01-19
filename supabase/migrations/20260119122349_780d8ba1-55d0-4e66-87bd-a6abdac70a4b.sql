-- ============================================
-- RETENTION SYSTEM - Detect & Re-engage Users
-- ============================================

-- Table to track user retention metrics and status
CREATE TABLE public.user_retention (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  company_id UUID REFERENCES public.companies(id),
  
  -- Activity tracking
  last_active_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  total_sessions INTEGER DEFAULT 0,
  total_time_spent_minutes INTEGER DEFAULT 0,
  chapters_viewed INTEGER DEFAULT 0,
  quizzes_attempted INTEGER DEFAULT 0,
  
  -- Retention status
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'at_risk', 'inactive', 'churned', 're_engaged')),
  days_inactive INTEGER DEFAULT 0,
  
  -- Engagement scoring
  engagement_score NUMERIC(5,2) DEFAULT 0,
  risk_level TEXT DEFAULT 'low' CHECK (risk_level IN ('low', 'medium', 'high', 'critical')),
  
  -- Re-engagement tracking
  last_notification_sent_at TIMESTAMP WITH TIME ZONE,
  notifications_sent INTEGER DEFAULT 0,
  re_engaged_count INTEGER DEFAULT 0,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  
  UNIQUE(user_id)
);

-- Table to log retention actions and campaigns
CREATE TABLE public.retention_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  trigger_type TEXT NOT NULL CHECK (trigger_type IN ('days_inactive', 'low_engagement', 'incomplete_chapter', 'quiz_failure', 'manual')),
  trigger_value INTEGER, -- e.g., 3 days inactive
  message_template_ro TEXT NOT NULL,
  message_template_de TEXT,
  message_template_en TEXT,
  notification_type TEXT DEFAULT 'reminder' CHECK (notification_type IN ('info', 'reminder', 'warning', 'achievement')),
  is_active BOOLEAN DEFAULT true,
  target_company_id UUID REFERENCES public.companies(id), -- null = all companies
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Table to log sent retention messages
CREATE TABLE public.retention_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  campaign_id UUID REFERENCES public.retention_campaigns(id),
  trigger_reason TEXT NOT NULL,
  message_sent TEXT NOT NULL,
  channel TEXT DEFAULT 'in_app' CHECK (channel IN ('in_app', 'email', 'push')),
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  clicked_at TIMESTAMP WITH TIME ZONE,
  returned_at TIMESTAMP WITH TIME ZONE -- when user came back
);

-- Enable RLS
ALTER TABLE public.user_retention ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.retention_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.retention_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_retention
CREATE POLICY "Users can view own retention data"
  ON public.user_retention FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all retention data"
  ON public.user_retention FOR SELECT
  USING (public.is_super_admin(auth.uid()));

CREATE POLICY "System can manage retention data"
  ON public.user_retention FOR ALL
  USING (true)
  WITH CHECK (true);

-- RLS Policies for retention_campaigns
CREATE POLICY "Admins can manage campaigns"
  ON public.retention_campaigns FOR ALL
  USING (public.is_super_admin(auth.uid()));

CREATE POLICY "Users can view active campaigns"
  ON public.retention_campaigns FOR SELECT
  USING (is_active = true);

-- RLS Policies for retention_logs
CREATE POLICY "Users can view own logs"
  ON public.retention_logs FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all logs"
  ON public.retention_logs FOR SELECT
  USING (public.is_super_admin(auth.uid()));

CREATE POLICY "System can manage logs"
  ON public.retention_logs FOR ALL
  USING (true)
  WITH CHECK (true);

-- Indexes for performance
CREATE INDEX idx_user_retention_status ON public.user_retention(status);
CREATE INDEX idx_user_retention_risk ON public.user_retention(risk_level);
CREATE INDEX idx_user_retention_last_active ON public.user_retention(last_active_at);
CREATE INDEX idx_user_retention_company ON public.user_retention(company_id);
CREATE INDEX idx_retention_logs_user ON public.retention_logs(user_id);
CREATE INDEX idx_retention_logs_sent_at ON public.retention_logs(sent_at);

-- Trigger to update timestamp
CREATE TRIGGER update_user_retention_timestamp
  BEFORE UPDATE ON public.user_retention
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default retention campaigns
INSERT INTO public.retention_campaigns (name, trigger_type, trigger_value, message_template_ro, message_template_de, message_template_en, notification_type) VALUES
('3 Days Inactive', 'days_inactive', 3, 
  'Ne este dor de tine! 🎓 Nu ai vizitat platforma de 3 zile. Continuă-ți progresul în training!',
  'Wir vermissen dich! 🎓 Du hast die Plattform seit 3 Tagen nicht besucht. Setze dein Training fort!',
  'We miss you! 🎓 You haven''t visited the platform in 3 days. Continue your training progress!',
  'reminder'),
  
('7 Days Inactive', 'days_inactive', 7,
  '⚠️ Ești inactiv de o săptămână! Colegii tăi progresează. Revino să nu rămâi în urmă!',
  '⚠️ Du bist seit einer Woche inaktiv! Deine Kollegen machen Fortschritte. Komm zurück!',
  '⚠️ You''ve been inactive for a week! Your colleagues are progressing. Come back!',
  'warning'),

('14 Days Inactive', 'days_inactive', 14,
  '🚨 Ultimă șansă! Training-ul tău este în pericol. Ai pierdut 2 săptămâni de învățare.',
  '🚨 Letzte Chance! Dein Training ist in Gefahr. Du hast 2 Wochen Lernen verpasst.',
  '🚨 Last chance! Your training is at risk. You''ve missed 2 weeks of learning.',
  'warning'),

('Low Engagement', 'low_engagement', 30,
  '💡 Sfat: Încearcă să parcurgi cel puțin un capitol pe zi pentru rezultate optime!',
  '💡 Tipp: Versuche mindestens ein Kapitel pro Tag für optimale Ergebnisse!',
  '💡 Tip: Try to complete at least one chapter per day for optimal results!',
  'info'),

('Incomplete Chapter', 'incomplete_chapter', 1,
  '📖 Ai un capitol neterminat! Finalizează-l pentru a debloca următorul nivel.',
  '📖 Du hast ein unvollständiges Kapitel! Beende es, um das nächste Level freizuschalten.',
  '📖 You have an incomplete chapter! Finish it to unlock the next level.',
  'reminder'),

('Quiz Failure Recovery', 'quiz_failure', 2,
  '💪 Nu renunța! După 2 încercări, încearcă să recitești materialul înainte de a relua quiz-ul.',
  '💪 Gib nicht auf! Nach 2 Versuchen, lies das Material erneut bevor du das Quiz wiederholst.',
  '💪 Don''t give up! After 2 attempts, try re-reading the material before retaking the quiz.',
  'info');

-- Function to calculate engagement score
CREATE OR REPLACE FUNCTION public.calculate_engagement_score(
  p_total_sessions INTEGER,
  p_total_time INTEGER,
  p_chapters INTEGER,
  p_quizzes INTEGER,
  p_days_inactive INTEGER
) RETURNS NUMERIC AS $$
DECLARE
  score NUMERIC;
BEGIN
  -- Base score from activity
  score := LEAST(p_total_sessions * 5, 25) + -- max 25 from sessions
           LEAST(p_total_time / 30, 25) + -- max 25 from time (30min = 25 points)
           LEAST(p_chapters * 2, 25) + -- max 25 from chapters
           LEAST(p_quizzes * 3, 25); -- max 25 from quizzes
           
  -- Penalty for inactivity
  score := score - (p_days_inactive * 2);
  
  RETURN GREATEST(0, LEAST(100, score));
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Function to determine risk level
CREATE OR REPLACE FUNCTION public.determine_risk_level(
  p_days_inactive INTEGER,
  p_engagement_score NUMERIC
) RETURNS TEXT AS $$
BEGIN
  IF p_days_inactive >= 14 OR p_engagement_score < 20 THEN
    RETURN 'critical';
  ELSIF p_days_inactive >= 7 OR p_engagement_score < 40 THEN
    RETURN 'high';
  ELSIF p_days_inactive >= 3 OR p_engagement_score < 60 THEN
    RETURN 'medium';
  ELSE
    RETURN 'low';
  END IF;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Enable realtime for retention logs
ALTER PUBLICATION supabase_realtime ADD TABLE public.retention_logs;