-- ============================================================================
-- GOVERNANCE SYSTEM SCHEMA - PHASE 1-5 IMPLEMENTATION
-- ============================================================================

-- PHASE 1: Content Classification Levels
CREATE TYPE public.content_level AS ENUM ('informational', 'operational', 'critical');

-- Add content_level to chapters table
ALTER TABLE public.chapters 
ADD COLUMN content_level public.content_level NOT NULL DEFAULT 'informational';

-- Add auto_update_blocked flag to chapters (PHASE 4)
ALTER TABLE public.chapters 
ADD COLUMN auto_update_blocked boolean NOT NULL DEFAULT false;

-- Add blocked_at and blocked_by for audit
ALTER TABLE public.chapters 
ADD COLUMN auto_update_blocked_at timestamp with time zone;

ALTER TABLE public.chapters 
ADD COLUMN auto_update_blocked_by uuid;

-- Add source_url to chapter_versions for traceability (PHASE 4)
ALTER TABLE public.chapter_versions 
ADD COLUMN source_url text;

-- Add approved_by and approved_at for human-in-the-loop (PHASE 3)
ALTER TABLE public.chapter_versions 
ADD COLUMN approved_by uuid;

ALTER TABLE public.chapter_versions 
ADD COLUMN approved_at timestamp with time zone;

ALTER TABLE public.chapter_versions 
ADD COLUMN is_approved boolean NOT NULL DEFAULT false;

-- Add content_level to auto_updates for severity tracking
ALTER TABLE public.auto_updates 
ADD COLUMN content_level public.content_level;

-- ============================================================================
-- PHASE 5: Enhanced Audit Logging
-- ============================================================================

-- Add immutability protection - prevent deletes on audit log
CREATE OR REPLACE FUNCTION public.prevent_audit_log_delete()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RAISE EXCEPTION 'Audit log entries cannot be deleted for compliance reasons';
  RETURN NULL;
END;
$$;

-- Trigger to prevent deletes on audit log
CREATE TRIGGER prevent_audit_delete
BEFORE DELETE ON public.update_audit_log
FOR EACH ROW
EXECUTE FUNCTION public.prevent_audit_log_delete();

-- Add more detailed fields to audit log
ALTER TABLE public.update_audit_log
ADD COLUMN severity text;

ALTER TABLE public.update_audit_log
ADD COLUMN content_level public.content_level;

ALTER TABLE public.update_audit_log
ADD COLUMN source_url text;

ALTER TABLE public.update_audit_log
ADD COLUMN previous_version integer;

ALTER TABLE public.update_audit_log
ADD COLUMN new_version integer;

-- ============================================================================
-- Update chapters with content levels based on their nature
-- ============================================================================

-- LEVEL 1 - INFORMATIONAL (general education)
UPDATE public.chapters SET content_level = 'informational' 
WHERE slug IN ('intro', 'mindset', 'softskills', 'communication', 'glossary', 'training');

-- LEVEL 2 - OPERATIONAL (procedures, workflows)
UPDATE public.chapters SET content_level = 'operational'
WHERE slug IN (
  'workflow', 'vehicle', 'loading', 'fleet', 'carrier-management',
  'clients', 'negotiation', 'commercial', 'pricing', 'exchanges',
  'technology', 'translogica', 'warehouse', 'supply-chain',
  'kpi', 'case-studies', 'checklists', 'reefer'
);

-- LEVEL 3 - CRITICAL / COMPLIANCE (legislation, customs, sanctions)
UPDATE public.chapters SET content_level = 'critical'
WHERE slug IN (
  'documents', 'customs', 'incoterms', 'driving-time', 'adr',
  'licenses-oversize', 'europe-zones', 'compliance', 'insurance',
  'claims', 'payment', 'accounting', 'emergency', 'environment',
  'risk-management', 'red-flags'
);

-- ============================================================================
-- Create governance_settings table for system-wide controls
-- ============================================================================

CREATE TABLE public.governance_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key text NOT NULL UNIQUE,
  setting_value jsonb NOT NULL,
  description text,
  updated_by uuid,
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.governance_settings ENABLE ROW LEVEL SECURITY;

-- Only admins can manage governance settings
CREATE POLICY "Admins can manage governance_settings"
ON public.governance_settings
FOR ALL
USING (get_user_role(auth.uid()) = 'admin'::app_role);

CREATE POLICY "Admins can view governance_settings"
ON public.governance_settings
FOR SELECT
USING (get_user_role(auth.uid()) = 'admin'::app_role);

-- Insert default governance settings
INSERT INTO public.governance_settings (setting_key, setting_value, description) VALUES
('require_approval_for_critical', '{"enabled": true}', 'Require admin approval for all CRITICAL content updates'),
('require_approval_for_major', '{"enabled": true}', 'Require admin approval for MAJOR severity updates'),
('auto_apply_minor_updates', '{"enabled": true}', 'Automatically apply MINOR severity updates'),
('disclaimer_level_2_enabled', '{"enabled": true}', 'Show educational disclaimer for OPERATIONAL content'),
('disclaimer_level_3_enabled', '{"enabled": true}', 'Show warning disclaimer for CRITICAL content'),
('audit_retention_days', '{"days": 3650}', 'Number of days to retain audit logs (10 years default)');