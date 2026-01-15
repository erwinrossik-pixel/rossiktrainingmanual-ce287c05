-- Create tables for Learning Analytics & KPI System

-- Table for caching computed KPIs (updated periodically)
CREATE TABLE public.learning_kpi_cache (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    kpi_type TEXT NOT NULL, -- 'chapter', 'user', 'content', 'question'
    entity_id TEXT NOT NULL, -- chapter_id, user_id, or question_id
    metrics JSONB NOT NULL DEFAULT '{}',
    computed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    valid_until TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() + INTERVAL '1 hour'),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(kpi_type, entity_id)
);

-- Table for tracking question performance
CREATE TABLE public.question_analytics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chapter_id TEXT NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
    question_index INTEGER NOT NULL,
    question_text TEXT,
    language TEXT NOT NULL DEFAULT 'ro',
    total_attempts INTEGER NOT NULL DEFAULT 0,
    correct_attempts INTEGER NOT NULL DEFAULT 0,
    incorrect_attempts INTEGER NOT NULL DEFAULT 0,
    avg_time_seconds NUMERIC DEFAULT NULL,
    difficulty_score NUMERIC DEFAULT NULL, -- 0-1, computed from failure rate
    last_updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(chapter_id, question_index, language)
);

-- Table for AI-driven recommendations
CREATE TABLE public.ai_recommendations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    recommendation_type TEXT NOT NULL, -- 'content_improvement', 'question_update', 'chapter_restructure'
    target_entity TEXT NOT NULL, -- chapter_id or question identifier
    severity TEXT NOT NULL DEFAULT 'low', -- 'low', 'medium', 'high', 'critical'
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    suggested_action TEXT,
    ai_confidence NUMERIC DEFAULT 0.5,
    status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'applied', 'dismissed', 'scheduled'
    applied_at TIMESTAMP WITH TIME ZONE,
    applied_by UUID,
    dismissed_reason TEXT,
    kpi_data JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table for user learning analytics
CREATE TABLE public.user_learning_analytics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    chapter_id TEXT NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
    first_attempt_at TIMESTAMP WITH TIME ZONE,
    passed_at TIMESTAMP WITH TIME ZONE,
    time_to_pass_seconds INTEGER,
    total_study_time_seconds INTEGER DEFAULT 0,
    attempts_before_pass INTEGER DEFAULT 0,
    score_progression JSONB DEFAULT '[]', -- array of {score, date}
    learning_velocity NUMERIC DEFAULT 0, -- chapters completed per day
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(user_id, chapter_id)
);

-- Table for content difficulty analysis
CREATE TABLE public.content_difficulty_analysis (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chapter_id TEXT NOT NULL REFERENCES chapters(id) ON DELETE CASCADE UNIQUE,
    difficulty_rating TEXT NOT NULL DEFAULT 'medium', -- 'very_easy', 'easy', 'medium', 'hard', 'very_hard'
    avg_pass_rate NUMERIC DEFAULT 0,
    avg_attempts_to_pass NUMERIC DEFAULT 0,
    avg_time_to_pass_hours NUMERIC DEFAULT 0,
    skip_rate NUMERIC DEFAULT 0, -- users who skip this chapter
    bounce_rate NUMERIC DEFAULT 0, -- users who start but don't complete
    comprehension_issues JSONB DEFAULT '[]', -- sections flagged as unclear
    correlation_with_auto_updates INTEGER DEFAULT 0, -- how many auto-updates affected this
    needs_review BOOLEAN DEFAULT false,
    last_analyzed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.learning_kpi_cache ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.question_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_recommendations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_learning_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_difficulty_analysis ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Admins can read/write all, users can read their own analytics
CREATE POLICY "Admins can manage learning_kpi_cache"
ON public.learning_kpi_cache
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage question_analytics"
ON public.question_analytics
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage ai_recommendations"
ON public.ai_recommendations
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage content_difficulty_analysis"
ON public.content_difficulty_analysis
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can view own user_learning_analytics"
ON public.user_learning_analytics
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all user_learning_analytics"
ON public.user_learning_analytics
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create indexes for performance
CREATE INDEX idx_learning_kpi_cache_type ON public.learning_kpi_cache(kpi_type);
CREATE INDEX idx_learning_kpi_cache_valid ON public.learning_kpi_cache(valid_until);
CREATE INDEX idx_question_analytics_chapter ON public.question_analytics(chapter_id);
CREATE INDEX idx_question_analytics_difficulty ON public.question_analytics(difficulty_score);
CREATE INDEX idx_ai_recommendations_status ON public.ai_recommendations(status);
CREATE INDEX idx_ai_recommendations_type ON public.ai_recommendations(recommendation_type);
CREATE INDEX idx_user_learning_analytics_user ON public.user_learning_analytics(user_id);
CREATE INDEX idx_content_difficulty_needs_review ON public.content_difficulty_analysis(needs_review);

-- Function to update KPI cache timestamp
CREATE OR REPLACE FUNCTION update_kpi_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Triggers for updated_at
CREATE TRIGGER update_ai_recommendations_timestamp
BEFORE UPDATE ON public.ai_recommendations
FOR EACH ROW EXECUTE FUNCTION update_kpi_timestamp();

CREATE TRIGGER update_user_learning_analytics_timestamp
BEFORE UPDATE ON public.user_learning_analytics
FOR EACH ROW EXECUTE FUNCTION update_kpi_timestamp();