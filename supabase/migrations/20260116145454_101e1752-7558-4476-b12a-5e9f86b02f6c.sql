-- Video Lessons table
CREATE TABLE public.video_lessons (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  chapter_id TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  video_type TEXT DEFAULT 'youtube' CHECK (video_type IN ('youtube', 'vimeo', 'custom')),
  duration_minutes INTEGER,
  order_index INTEGER DEFAULT 0,
  is_premium BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Video watch progress
CREATE TABLE public.video_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  video_id UUID REFERENCES public.video_lessons(id) ON DELETE CASCADE,
  watched_seconds INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT false,
  last_watched_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Webinars table
CREATE TABLE public.webinars (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  host_id UUID NOT NULL,
  scheduled_at TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_minutes INTEGER DEFAULT 60,
  meeting_url TEXT,
  max_participants INTEGER DEFAULT 100,
  is_recorded BOOLEAN DEFAULT false,
  recording_url TEXT,
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'live', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Webinar registrations
CREATE TABLE public.webinar_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  webinar_id UUID REFERENCES public.webinars(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  registered_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  attended BOOLEAN DEFAULT false,
  UNIQUE(webinar_id, user_id)
);

-- Mentor profiles
CREATE TABLE public.mentor_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  expertise_areas TEXT[] DEFAULT '{}',
  bio TEXT,
  availability_hours INTEGER DEFAULT 5,
  max_mentees INTEGER DEFAULT 3,
  is_active BOOLEAN DEFAULT true,
  rating NUMERIC(3,2) DEFAULT 0,
  total_sessions INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Mentor-mentee relationships
CREATE TABLE public.mentorships (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  mentor_id UUID REFERENCES public.mentor_profiles(id) ON DELETE CASCADE,
  mentee_id UUID NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'completed', 'cancelled')),
  started_at TIMESTAMP WITH TIME ZONE,
  ended_at TIMESTAMP WITH TIME ZONE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Weekly challenges
CREATE TABLE public.weekly_challenges (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  challenge_type TEXT NOT NULL CHECK (challenge_type IN ('quiz_score', 'chapters_complete', 'training_time', 'streak', 'simulations')),
  target_value INTEGER NOT NULL,
  xp_reward INTEGER DEFAULT 100,
  badge_reward TEXT,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Challenge participation
CREATE TABLE public.challenge_participants (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  challenge_id UUID REFERENCES public.weekly_challenges(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  current_value INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMP WITH TIME ZONE,
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(challenge_id, user_id)
);

-- Social shares
CREATE TABLE public.social_shares (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  share_type TEXT NOT NULL CHECK (share_type IN ('certificate', 'achievement', 'milestone', 'challenge')),
  content_id TEXT,
  platform TEXT NOT NULL CHECK (platform IN ('linkedin', 'twitter', 'facebook')),
  share_url TEXT,
  shared_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- ML Predictions cache
CREATE TABLE public.ml_predictions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  prediction_type TEXT NOT NULL CHECK (prediction_type IN ('completion_date', 'at_risk', 'recommended_chapters', 'optimal_time')),
  prediction_data JSONB NOT NULL,
  confidence NUMERIC(3,2),
  valid_until TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.video_lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.video_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.webinars ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.webinar_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentor_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentorships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.weekly_challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenge_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_shares ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ml_predictions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for video_lessons (public read)
CREATE POLICY "Anyone can view video lessons" ON public.video_lessons FOR SELECT USING (true);
CREATE POLICY "Admins can manage video lessons" ON public.video_lessons FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- RLS Policies for video_progress
CREATE POLICY "Users can view own video progress" ON public.video_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own video progress" ON public.video_progress FOR ALL USING (auth.uid() = user_id);

-- RLS Policies for webinars (public read)
CREATE POLICY "Anyone can view webinars" ON public.webinars FOR SELECT USING (true);
CREATE POLICY "Admins can manage webinars" ON public.webinars FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- RLS Policies for webinar_registrations
CREATE POLICY "Users can view own registrations" ON public.webinar_registrations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can register for webinars" ON public.webinar_registrations FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own registrations" ON public.webinar_registrations FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for mentor_profiles (public read)
CREATE POLICY "Anyone can view mentor profiles" ON public.mentor_profiles FOR SELECT USING (true);
CREATE POLICY "Users can manage own mentor profile" ON public.mentor_profiles FOR ALL USING (auth.uid() = user_id);

-- RLS Policies for mentorships
CREATE POLICY "Mentors can view their mentorships" ON public.mentorships FOR SELECT USING (
  EXISTS (SELECT 1 FROM mentor_profiles WHERE id = mentor_id AND user_id = auth.uid())
  OR mentee_id = auth.uid()
);
CREATE POLICY "Mentees can request mentorship" ON public.mentorships FOR INSERT WITH CHECK (mentee_id = auth.uid());
CREATE POLICY "Mentors can update mentorships" ON public.mentorships FOR UPDATE USING (
  EXISTS (SELECT 1 FROM mentor_profiles WHERE id = mentor_id AND user_id = auth.uid())
);

-- RLS Policies for weekly_challenges (public read)
CREATE POLICY "Anyone can view challenges" ON public.weekly_challenges FOR SELECT USING (true);
CREATE POLICY "Admins can manage challenges" ON public.weekly_challenges FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- RLS Policies for challenge_participants
CREATE POLICY "Users can view challenge participants" ON public.challenge_participants FOR SELECT USING (true);
CREATE POLICY "Users can join challenges" ON public.challenge_participants FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own participation" ON public.challenge_participants FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for social_shares
CREATE POLICY "Users can view own shares" ON public.social_shares FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create shares" ON public.social_shares FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for ml_predictions
CREATE POLICY "Users can view own predictions" ON public.ml_predictions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "System can manage predictions" ON public.ml_predictions FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);