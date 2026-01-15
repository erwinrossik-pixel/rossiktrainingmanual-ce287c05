-- Create cron job execution logs table
CREATE TABLE public.cron_job_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_name TEXT NOT NULL,
  execution_type TEXT NOT NULL DEFAULT 'scheduled', -- 'scheduled' or 'manual'
  started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  completed_at TIMESTAMP WITH TIME ZONE,
  duration_ms INTEGER,
  status TEXT NOT NULL DEFAULT 'running', -- 'running', 'success', 'failed', 'timeout'
  result_summary TEXT,
  error_message TEXT,
  items_processed INTEGER DEFAULT 0,
  items_failed INTEGER DEFAULT 0,
  execution_details JSONB DEFAULT '{}'::jsonb,
  triggered_by UUID, -- user id if manual execution
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.cron_job_logs ENABLE ROW LEVEL SECURITY;

-- Admins can view all logs
CREATE POLICY "Admins can view cron_job_logs"
  ON public.cron_job_logs
  FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

-- System can insert/update logs
CREATE POLICY "System can manage cron_job_logs"
  ON public.cron_job_logs
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX idx_cron_job_logs_job_name ON public.cron_job_logs(job_name);
CREATE INDEX idx_cron_job_logs_started_at ON public.cron_job_logs(started_at DESC);
CREATE INDEX idx_cron_job_logs_status ON public.cron_job_logs(status);