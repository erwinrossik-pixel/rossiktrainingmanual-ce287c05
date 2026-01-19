-- Create governance incidents table for tracking AI Content Governor violations
CREATE TABLE public.governance_incidents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  incident_type TEXT NOT NULL, -- 'terminology_violation', 'concept_violation', 'consistency_failure', 'auto_rejection'
  severity TEXT NOT NULL DEFAULT 'warning', -- 'info', 'warning', 'critical'
  chapter_id TEXT,
  update_id UUID,
  violated_rule TEXT,
  content_preview TEXT,
  details JSONB,
  status TEXT NOT NULL DEFAULT 'open', -- 'open', 'reviewed', 'resolved', 'ignored'
  resolved_at TIMESTAMPTZ,
  resolved_by UUID,
  resolution_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.governance_incidents ENABLE ROW LEVEL SECURITY;

-- Admins can view all incidents
CREATE POLICY "Admins can view governance incidents"
ON public.governance_incidents
FOR SELECT
USING (public.is_admin_user(auth.uid()));

-- Admins can manage incidents
CREATE POLICY "Admins can manage governance incidents"
ON public.governance_incidents
FOR ALL
USING (public.is_admin_user(auth.uid()));

-- Create trigger for updated_at
CREATE TRIGGER update_governance_incidents_updated_at
BEFORE UPDATE ON public.governance_incidents
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add index for faster queries
CREATE INDEX idx_governance_incidents_status ON public.governance_incidents(status);
CREATE INDEX idx_governance_incidents_severity ON public.governance_incidents(severity);
CREATE INDEX idx_governance_incidents_created_at ON public.governance_incidents(created_at DESC);