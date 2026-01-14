-- Create table for background job tracking
CREATE TABLE public.regeneration_jobs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  change_id UUID REFERENCES public.detected_changes(id),
  chapters_to_process TEXT[] NOT NULL,
  chapters_completed TEXT[] DEFAULT '{}',
  chapters_failed JSONB DEFAULT '[]',
  status TEXT NOT NULL DEFAULT 'queued' CHECK (status IN ('queued', 'processing', 'completed', 'failed', 'partial')),
  total_chapters INTEGER NOT NULL DEFAULT 0,
  processed_chapters INTEGER NOT NULL DEFAULT 0,
  auto_apply BOOLEAN DEFAULT false,
  error_message TEXT,
  started_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.regeneration_jobs ENABLE ROW LEVEL SECURITY;

-- Admin can view all jobs
CREATE POLICY "Admins can view all regeneration jobs"
ON public.regeneration_jobs
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

-- Service role can manage jobs (for edge functions)
CREATE POLICY "Service role can manage regeneration jobs"
ON public.regeneration_jobs
FOR ALL
USING (true)
WITH CHECK (true);

-- Add trigger for updated_at
CREATE TRIGGER update_regeneration_jobs_updated_at
BEFORE UPDATE ON public.regeneration_jobs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add index for status queries
CREATE INDEX idx_regeneration_jobs_status ON public.regeneration_jobs(status);
CREATE INDEX idx_regeneration_jobs_created_at ON public.regeneration_jobs(created_at DESC);