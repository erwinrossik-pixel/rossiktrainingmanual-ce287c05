-- Create quiz_sessions table to track quiz starts (including refreshes)
CREATE TABLE public.quiz_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  chapter_id TEXT NOT NULL,
  language TEXT NOT NULL DEFAULT 'ro',
  started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  completed_at TIMESTAMP WITH TIME ZONE,
  was_completed BOOLEAN DEFAULT false,
  questions_shown JSONB, -- Array of question IDs/texts shown
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.quiz_sessions ENABLE ROW LEVEL SECURITY;

-- Users can view their own sessions
CREATE POLICY "Users can view own quiz sessions"
  ON public.quiz_sessions FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own sessions
CREATE POLICY "Users can create own quiz sessions"
  ON public.quiz_sessions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own sessions
CREATE POLICY "Users can update own quiz sessions"
  ON public.quiz_sessions FOR UPDATE
  USING (auth.uid() = user_id);

-- Admins can view all sessions
CREATE POLICY "Admins can view all quiz sessions"
  ON public.quiz_sessions FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'
    ) OR is_super_admin(auth.uid())
  );

-- Create indexes for performance
CREATE INDEX idx_quiz_sessions_user_id ON public.quiz_sessions(user_id);
CREATE INDEX idx_quiz_sessions_chapter_id ON public.quiz_sessions(chapter_id);
CREATE INDEX idx_quiz_sessions_started_at ON public.quiz_sessions(started_at DESC);

-- Add question_analytics table for tracking individual question performance
CREATE TABLE public.question_performance (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  chapter_id TEXT NOT NULL,
  question_text TEXT NOT NULL,
  question_hash TEXT NOT NULL, -- Hash of question for deduplication
  was_correct BOOLEAN NOT NULL,
  user_answer_index INTEGER,
  correct_answer_index INTEGER NOT NULL,
  language TEXT NOT NULL DEFAULT 'ro',
  attempt_id UUID REFERENCES public.quiz_attempts(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.question_performance ENABLE ROW LEVEL SECURITY;

-- Users can view their own performance
CREATE POLICY "Users can view own question performance"
  ON public.question_performance FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own performance
CREATE POLICY "Users can create own question performance"
  ON public.question_performance FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Admins can view all performance data
CREATE POLICY "Admins can view all question performance"
  ON public.question_performance FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'
    ) OR is_super_admin(auth.uid())
  );

-- Create indexes
CREATE INDEX idx_question_performance_user ON public.question_performance(user_id);
CREATE INDEX idx_question_performance_chapter ON public.question_performance(chapter_id);
CREATE INDEX idx_question_performance_hash ON public.question_performance(question_hash);
CREATE INDEX idx_question_performance_wrong ON public.question_performance(was_correct) WHERE was_correct = false;