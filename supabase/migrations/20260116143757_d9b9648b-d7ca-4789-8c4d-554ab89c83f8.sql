-- ============================================
-- FORUM DISCUSSIONS (Chapter Comments/Questions)
-- ============================================
CREATE TABLE public.chapter_discussions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  chapter_id TEXT NOT NULL,
  user_id UUID NOT NULL,
  parent_id UUID REFERENCES public.chapter_discussions(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_pinned BOOLEAN DEFAULT false,
  is_resolved BOOLEAN DEFAULT false,
  likes_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_discussions_chapter ON public.chapter_discussions(chapter_id);
CREATE INDEX idx_discussions_user ON public.chapter_discussions(user_id);
CREATE INDEX idx_discussions_parent ON public.chapter_discussions(parent_id);

ALTER TABLE public.chapter_discussions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view all discussions" ON public.chapter_discussions
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create discussions" ON public.chapter_discussions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own discussions" ON public.chapter_discussions
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own discussions" ON public.chapter_discussions
  FOR DELETE USING (auth.uid() = user_id);

-- Discussion likes
CREATE TABLE public.discussion_likes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  discussion_id UUID NOT NULL REFERENCES public.chapter_discussions(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(discussion_id, user_id)
);

ALTER TABLE public.discussion_likes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view all likes" ON public.discussion_likes
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can like" ON public.discussion_likes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can unlike own likes" ON public.discussion_likes
  FOR DELETE USING (auth.uid() = user_id);

-- ============================================
-- SKILL ASSESSMENTS
-- ============================================
CREATE TABLE public.skill_assessments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  assessment_type TEXT NOT NULL, -- 'initial', 'progress', 'final'
  total_score INTEGER DEFAULT 0,
  max_score INTEGER DEFAULT 100,
  skill_scores JSONB DEFAULT '{}',
  recommendations JSONB DEFAULT '[]',
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_skill_assessments_user ON public.skill_assessments(user_id);

ALTER TABLE public.skill_assessments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own assessments" ON public.skill_assessments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own assessments" ON public.skill_assessments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ============================================
-- TRAINING CALENDAR/SCHEDULING
-- ============================================
CREATE TABLE public.training_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  chapter_id TEXT,
  scheduled_at TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_minutes INTEGER DEFAULT 60,
  reminder_sent BOOLEAN DEFAULT false,
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMP WITH TIME ZONE,
  recurrence TEXT, -- 'daily', 'weekly', 'monthly', null
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_training_sessions_user ON public.training_sessions(user_id);
CREATE INDEX idx_training_sessions_scheduled ON public.training_sessions(scheduled_at);

ALTER TABLE public.training_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own sessions" ON public.training_sessions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own sessions" ON public.training_sessions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own sessions" ON public.training_sessions
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own sessions" ON public.training_sessions
  FOR DELETE USING (auth.uid() = user_id);

-- ============================================
-- COMPETENCY MATRIX
-- ============================================
CREATE TABLE public.competency_scores (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  competency_area TEXT NOT NULL, -- e.g., 'pricing', 'customs', 'adr', etc.
  score INTEGER DEFAULT 0,
  max_score INTEGER DEFAULT 100,
  last_assessment_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, competency_area)
);

CREATE INDEX idx_competency_scores_user ON public.competency_scores(user_id);

ALTER TABLE public.competency_scores ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own scores" ON public.competency_scores
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all scores" ON public.competency_scores
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Users can upsert own scores" ON public.competency_scores
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own scores" ON public.competency_scores
  FOR UPDATE USING (auth.uid() = user_id);

-- Team competency view for admins
CREATE OR REPLACE VIEW public.team_competency_matrix AS
SELECT 
  cs.user_id,
  p.first_name,
  p.last_name,
  p.email,
  cu.company_id,
  jsonb_object_agg(cs.competency_area, cs.score) as competencies,
  AVG(cs.score) as avg_score,
  MAX(cs.last_assessment_at) as last_updated
FROM public.competency_scores cs
JOIN public.profiles p ON cs.user_id = p.id
LEFT JOIN public.company_users cu ON cs.user_id = cu.user_id
GROUP BY cs.user_id, p.first_name, p.last_name, p.email, cu.company_id;

-- ============================================
-- USER 2FA SETTINGS
-- ============================================
CREATE TABLE public.user_2fa (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  is_enabled BOOLEAN DEFAULT false,
  secret_encrypted TEXT,
  backup_codes JSONB DEFAULT '[]',
  verified_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.user_2fa ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own 2fa" ON public.user_2fa
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own 2fa" ON public.user_2fa
  FOR ALL USING (auth.uid() = user_id);

-- ============================================
-- CELEBRATION EVENTS
-- ============================================
CREATE TABLE public.celebration_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  event_type TEXT NOT NULL, -- 'chapter_complete', 'quiz_passed', 'certificate_earned', 'level_up', 'achievement'
  event_data JSONB DEFAULT '{}',
  shown BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_celebration_events_user ON public.celebration_events(user_id);
CREATE INDEX idx_celebration_events_shown ON public.celebration_events(user_id, shown);

ALTER TABLE public.celebration_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own celebrations" ON public.celebration_events
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own celebrations" ON public.celebration_events
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "System can insert celebrations" ON public.celebration_events
  FOR INSERT WITH CHECK (auth.uid() = user_id);