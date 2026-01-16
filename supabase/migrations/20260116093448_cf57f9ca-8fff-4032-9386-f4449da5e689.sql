
-- ============================================================
-- ENTERPRISE DEPLOYMENT TABLES
-- ============================================================

-- 1. System Health & Uptime Monitoring
CREATE TABLE public.system_health_checks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  check_type TEXT NOT NULL, -- 'uptime', 'database', 'edge_functions', 'storage'
  status TEXT NOT NULL DEFAULT 'healthy', -- 'healthy', 'degraded', 'down'
  response_time_ms INTEGER,
  details JSONB,
  checked_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Error Tracking
CREATE TABLE public.error_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  error_type TEXT NOT NULL, -- 'frontend', 'edge_function', 'database', 'auth'
  error_message TEXT NOT NULL,
  error_stack TEXT,
  user_id UUID,
  session_id TEXT,
  page_url TEXT,
  user_agent TEXT,
  severity TEXT NOT NULL DEFAULT 'error', -- 'warning', 'error', 'critical'
  metadata JSONB,
  resolved_at TIMESTAMPTZ,
  resolved_by UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. Performance Metrics
CREATE TABLE public.performance_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_type TEXT NOT NULL, -- 'page_load', 'api_response', 'query_time', 'memory_usage'
  metric_name TEXT NOT NULL,
  value DECIMAL NOT NULL,
  unit TEXT NOT NULL, -- 'ms', 'bytes', 'percent'
  tags JSONB,
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 4. Backup Logs
CREATE TABLE public.backup_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  backup_type TEXT NOT NULL, -- 'full', 'incremental', 'table_specific'
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'running', 'completed', 'failed'
  tables_backed_up TEXT[],
  size_bytes BIGINT,
  duration_ms INTEGER,
  storage_location TEXT,
  error_message TEXT,
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 5. Recovery Tests
CREATE TABLE public.recovery_tests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  backup_id UUID REFERENCES public.backup_logs(id),
  test_type TEXT NOT NULL, -- 'full_restore', 'partial_restore', 'data_verification'
  status TEXT NOT NULL DEFAULT 'pending',
  tables_tested TEXT[],
  records_verified INTEGER,
  discrepancies_found INTEGER DEFAULT 0,
  test_results JSONB,
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ,
  performed_by UUID
);

-- 6. SLA Configuration
CREATE TABLE public.sla_configuration (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_name TEXT NOT NULL UNIQUE,
  target_value DECIMAL NOT NULL,
  warning_threshold DECIMAL,
  critical_threshold DECIMAL,
  unit TEXT NOT NULL,
  measurement_period TEXT NOT NULL, -- 'hourly', 'daily', 'weekly', 'monthly'
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 7. SLA Metrics History
CREATE TABLE public.sla_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_name TEXT NOT NULL,
  period_start TIMESTAMPTZ NOT NULL,
  period_end TIMESTAMPTZ NOT NULL,
  target_value DECIMAL NOT NULL,
  actual_value DECIMAL NOT NULL,
  is_met BOOLEAN NOT NULL,
  breach_count INTEGER DEFAULT 0,
  details JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 8. Incidents
CREATE TABLE public.incidents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  incident_number TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  severity TEXT NOT NULL, -- 'low', 'medium', 'high', 'critical'
  status TEXT NOT NULL DEFAULT 'open', -- 'open', 'investigating', 'identified', 'monitoring', 'resolved'
  affected_services TEXT[],
  impact TEXT,
  root_cause TEXT,
  resolution TEXT,
  detected_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  acknowledged_at TIMESTAMPTZ,
  resolved_at TIMESTAMPTZ,
  created_by UUID,
  assigned_to UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 9. Incident Timeline
CREATE TABLE public.incident_timeline (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  incident_id UUID REFERENCES public.incidents(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL, -- 'created', 'status_change', 'update', 'resolved'
  description TEXT NOT NULL,
  old_status TEXT,
  new_status TEXT,
  created_by UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 10. Production Readiness Checklist
CREATE TABLE public.production_checklist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL, -- 'security', 'performance', 'monitoring', 'backup', 'documentation'
  item_name TEXT NOT NULL,
  description TEXT,
  is_required BOOLEAN DEFAULT true,
  is_completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMPTZ,
  completed_by UUID,
  notes TEXT,
  evidence_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.system_health_checks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.error_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.performance_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.backup_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recovery_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sla_configuration ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sla_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.incidents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.incident_timeline ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.production_checklist ENABLE ROW LEVEL SECURITY;

-- RLS Policies - Admin only for all enterprise tables
CREATE POLICY "Admins can manage health checks" ON public.system_health_checks
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage error logs" ON public.error_logs
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage performance metrics" ON public.performance_metrics
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage backup logs" ON public.backup_logs
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage recovery tests" ON public.recovery_tests
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage SLA config" ON public.sla_configuration
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage SLA metrics" ON public.sla_metrics
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage incidents" ON public.incidents
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage incident timeline" ON public.incident_timeline
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage production checklist" ON public.production_checklist
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Allow service role to insert health checks and metrics
CREATE POLICY "Service role can insert health checks" ON public.system_health_checks
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can insert error logs" ON public.error_logs
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can insert performance metrics" ON public.performance_metrics
  FOR INSERT WITH CHECK (true);

-- Indexes for performance
CREATE INDEX idx_health_checks_type_time ON public.system_health_checks(check_type, checked_at DESC);
CREATE INDEX idx_error_logs_severity_time ON public.error_logs(severity, created_at DESC);
CREATE INDEX idx_error_logs_unresolved ON public.error_logs(resolved_at) WHERE resolved_at IS NULL;
CREATE INDEX idx_performance_metrics_type_time ON public.performance_metrics(metric_type, recorded_at DESC);
CREATE INDEX idx_backup_logs_status ON public.backup_logs(status, started_at DESC);
CREATE INDEX idx_sla_metrics_period ON public.sla_metrics(metric_name, period_start DESC);
CREATE INDEX idx_incidents_status ON public.incidents(status, severity, detected_at DESC);

-- Generate incident number function
CREATE OR REPLACE FUNCTION public.generate_incident_number()
RETURNS TRIGGER AS $$
BEGIN
  NEW.incident_number := 'INC-' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || LPAD(FLOOR(RANDOM() * 10000)::TEXT, 4, '0');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER set_incident_number
  BEFORE INSERT ON public.incidents
  FOR EACH ROW
  EXECUTE FUNCTION public.generate_incident_number();

-- Insert default SLA configuration
INSERT INTO public.sla_configuration (metric_name, target_value, warning_threshold, critical_threshold, unit, measurement_period, description) VALUES
  ('uptime', 99.9, 99.5, 99.0, 'percent', 'monthly', 'Platform availability percentage'),
  ('api_response_time', 200, 500, 1000, 'ms', 'hourly', 'Average API response time'),
  ('page_load_time', 3000, 5000, 8000, 'ms', 'hourly', 'Average page load time'),
  ('error_rate', 0.1, 0.5, 1.0, 'percent', 'hourly', 'Percentage of requests resulting in errors'),
  ('incident_response_time', 15, 30, 60, 'minutes', 'daily', 'Time to acknowledge critical incidents'),
  ('incident_resolution_time', 240, 480, 1440, 'minutes', 'daily', 'Time to resolve incidents');

-- Insert production readiness checklist items
INSERT INTO public.production_checklist (category, item_name, description, is_required) VALUES
  -- Security
  ('security', 'RLS Policies Active', 'All tables have Row Level Security enabled and policies configured', true),
  ('security', 'Authentication Required', 'All sensitive routes require authentication', true),
  ('security', 'Input Validation', 'All user inputs are validated and sanitized', true),
  ('security', 'HTTPS Enforced', 'All traffic uses HTTPS encryption', true),
  ('security', 'Secrets Management', 'All API keys and secrets are stored securely', true),
  ('security', 'SQL Injection Prevention', 'Parameterized queries used throughout', true),
  ('security', 'XSS Prevention', 'Output encoding and CSP headers configured', true),
  
  -- Performance
  ('performance', 'Database Indexes', 'Critical queries have appropriate indexes', true),
  ('performance', 'Query Optimization', 'No N+1 queries, efficient data fetching', true),
  ('performance', 'Asset Optimization', 'Images and assets are optimized and cached', true),
  ('performance', 'Code Splitting', 'Large components are lazy loaded', true),
  ('performance', 'API Rate Limiting', 'Rate limiting configured for edge functions', false),
  
  -- Monitoring
  ('monitoring', 'Error Tracking', 'Error logging system is operational', true),
  ('monitoring', 'Uptime Monitoring', 'Health check endpoints configured', true),
  ('monitoring', 'Performance Metrics', 'Key metrics are being collected', true),
  ('monitoring', 'Alerting Configured', 'Critical alerts are set up', true),
  
  -- Backup
  ('backup', 'Automated Backups', 'Daily database backups are scheduled', true),
  ('backup', 'Backup Verification', 'Backup integrity is regularly verified', true),
  ('backup', 'Recovery Tested', 'Disaster recovery procedure has been tested', true),
  ('backup', 'Backup Retention', 'Backup retention policy is defined', true),
  
  -- Documentation
  ('documentation', 'API Documentation', 'All endpoints are documented', false),
  ('documentation', 'Runbook', 'Operational runbook is available', true),
  ('documentation', 'Incident Response Plan', 'Incident handling procedures documented', true),
  ('documentation', 'Architecture Diagram', 'System architecture is documented', false);

-- Update triggers for timestamps
CREATE TRIGGER update_sla_config_timestamp
  BEFORE UPDATE ON public.sla_configuration
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_incidents_timestamp
  BEFORE UPDATE ON public.incidents
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_production_checklist_timestamp
  BEFORE UPDATE ON public.production_checklist
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
