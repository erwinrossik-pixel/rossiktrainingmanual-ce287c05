-- =====================================================
-- AUTO CONTENT UPDATE ENGINE - Database Schema
-- =====================================================

-- Enum pentru tipuri de surse
CREATE TYPE source_type AS ENUM ('api', 'rss', 'website', 'official', 'database');

-- Enum pentru severitate schimbări
CREATE TYPE change_severity AS ENUM ('minor', 'major', 'critical');

-- Enum pentru status update-uri
CREATE TYPE update_status AS ENUM ('pending', 'approved', 'rejected', 'applied', 'failed', 'rolled_back');

-- =====================================================
-- 1. CONTENT SOURCES - Surse monitorizate
-- =====================================================
CREATE TABLE public.content_sources (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  url TEXT NOT NULL,
  source_type source_type NOT NULL DEFAULT 'website',
  category TEXT NOT NULL, -- 'transport', 'customs', 'pricing', 'compliance', 'sanctions', 'legislation'
  is_active BOOLEAN NOT NULL DEFAULT true,
  check_frequency_hours INTEGER NOT NULL DEFAULT 24,
  last_checked_at TIMESTAMP WITH TIME ZONE,
  last_hash TEXT, -- Hash of last content for change detection
  reliability_score INTEGER DEFAULT 100, -- 0-100
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- =====================================================
-- 2. SOURCE CHECK LOGS - Log verificări zilnice
-- =====================================================
CREATE TABLE public.source_check_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  source_id UUID NOT NULL REFERENCES public.content_sources(id) ON DELETE CASCADE,
  checked_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL, -- 'success', 'error', 'timeout', 'no_change'
  response_time_ms INTEGER,
  content_hash TEXT,
  changes_detected BOOLEAN DEFAULT false,
  error_message TEXT,
  raw_data JSONB
);

-- =====================================================
-- 3. DETECTED CHANGES - Schimbări detectate
-- =====================================================
CREATE TABLE public.detected_changes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  source_id UUID NOT NULL REFERENCES public.content_sources(id) ON DELETE CASCADE,
  check_log_id UUID REFERENCES public.source_check_logs(id) ON DELETE SET NULL,
  detected_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  change_type TEXT NOT NULL, -- 'value_change', 'new_rule', 'restriction', 'invalidation'
  severity change_severity NOT NULL DEFAULT 'minor',
  title TEXT NOT NULL,
  description TEXT,
  old_value TEXT,
  new_value TEXT,
  source_url TEXT,
  raw_data JSONB,
  is_processed BOOLEAN DEFAULT false,
  processed_at TIMESTAMP WITH TIME ZONE
);

-- =====================================================
-- 4. CHAPTER IMPACTS - Mapare schimbări la capitole
-- =====================================================
CREATE TABLE public.chapter_impacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  change_id UUID NOT NULL REFERENCES public.detected_changes(id) ON DELETE CASCADE,
  chapter_id TEXT NOT NULL REFERENCES public.chapters(id) ON DELETE CASCADE,
  impact_level TEXT NOT NULL, -- 'direct', 'indirect', 'reference'
  affected_sections JSONB, -- Array of affected section names
  suggested_updates TEXT,
  ai_confidence DECIMAL(3,2), -- 0.00-1.00
  is_override BOOLEAN DEFAULT false, -- Admin manual override
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- =====================================================
-- 5. CHAPTER VERSIONS - Versionare capitole
-- =====================================================
CREATE TABLE public.chapter_versions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  chapter_id TEXT NOT NULL REFERENCES public.chapters(id) ON DELETE CASCADE,
  version_number INTEGER NOT NULL,
  content_snapshot JSONB NOT NULL, -- Full content backup
  change_summary TEXT,
  update_source TEXT, -- 'auto', 'manual', 'rollback'
  related_change_ids UUID[], -- Array of detected_changes IDs
  word_count INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID, -- NULL for auto updates
  UNIQUE(chapter_id, version_number)
);

-- =====================================================
-- 6. AUTO UPDATES - Update-uri în așteptare/aplicate
-- =====================================================
CREATE TABLE public.auto_updates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  chapter_id TEXT NOT NULL REFERENCES public.chapters(id) ON DELETE CASCADE,
  change_id UUID REFERENCES public.detected_changes(id) ON DELETE SET NULL,
  status update_status NOT NULL DEFAULT 'pending',
  severity change_severity NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  original_content JSONB,
  updated_content JSONB,
  sections_affected TEXT[],
  languages_updated TEXT[] DEFAULT ARRAY['ro', 'de', 'en'],
  ai_model_used TEXT,
  requires_approval BOOLEAN DEFAULT false, -- True for critical changes
  approved_by UUID,
  approved_at TIMESTAMP WITH TIME ZONE,
  applied_at TIMESTAMP WITH TIME ZONE,
  rolled_back_at TIMESTAMP WITH TIME ZONE,
  rollback_reason TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- =====================================================
-- 7. UPDATE AUDIT LOG - Log complet de audit
-- =====================================================
CREATE TABLE public.update_audit_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  action TEXT NOT NULL, -- 'source_check', 'change_detected', 'impact_mapped', 'content_regenerated', 'update_applied', 'update_rejected', 'rollback'
  entity_type TEXT NOT NULL, -- 'source', 'change', 'chapter', 'update'
  entity_id UUID,
  chapter_id TEXT,
  details JSONB,
  performed_by TEXT, -- 'system', 'admin', user_id
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- =====================================================
-- 8. SYSTEM SETTINGS - Setări sistem auto-update
-- =====================================================
CREATE TABLE public.auto_update_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  setting_key TEXT NOT NULL UNIQUE,
  setting_value JSONB NOT NULL,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_by UUID
);

-- =====================================================
-- INDEXES pentru performanță
-- =====================================================
CREATE INDEX idx_source_checks_source ON public.source_check_logs(source_id);
CREATE INDEX idx_source_checks_date ON public.source_check_logs(checked_at DESC);
CREATE INDEX idx_detected_changes_source ON public.detected_changes(source_id);
CREATE INDEX idx_detected_changes_severity ON public.detected_changes(severity);
CREATE INDEX idx_detected_changes_processed ON public.detected_changes(is_processed);
CREATE INDEX idx_chapter_impacts_change ON public.chapter_impacts(change_id);
CREATE INDEX idx_chapter_impacts_chapter ON public.chapter_impacts(chapter_id);
CREATE INDEX idx_chapter_versions_chapter ON public.chapter_versions(chapter_id);
CREATE INDEX idx_auto_updates_status ON public.auto_updates(status);
CREATE INDEX idx_auto_updates_chapter ON public.auto_updates(chapter_id);
CREATE INDEX idx_audit_log_action ON public.update_audit_log(action);
CREATE INDEX idx_audit_log_date ON public.update_audit_log(created_at DESC);

-- =====================================================
-- RLS POLICIES
-- =====================================================
ALTER TABLE public.content_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.source_check_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.detected_changes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chapter_impacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chapter_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.auto_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.update_audit_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.auto_update_settings ENABLE ROW LEVEL SECURITY;

-- Admins can view all
CREATE POLICY "Admins can view content_sources" ON public.content_sources FOR SELECT USING (get_user_role(auth.uid()) = 'admin');
CREATE POLICY "Admins can manage content_sources" ON public.content_sources FOR ALL USING (get_user_role(auth.uid()) = 'admin');

CREATE POLICY "Admins can view source_check_logs" ON public.source_check_logs FOR SELECT USING (get_user_role(auth.uid()) = 'admin');
CREATE POLICY "System can insert source_check_logs" ON public.source_check_logs FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view detected_changes" ON public.detected_changes FOR SELECT USING (get_user_role(auth.uid()) = 'admin');
CREATE POLICY "System can manage detected_changes" ON public.detected_changes FOR ALL USING (true);

CREATE POLICY "Admins can view chapter_impacts" ON public.chapter_impacts FOR SELECT USING (get_user_role(auth.uid()) = 'admin');
CREATE POLICY "System can manage chapter_impacts" ON public.chapter_impacts FOR ALL USING (true);

CREATE POLICY "Admins can view chapter_versions" ON public.chapter_versions FOR SELECT USING (get_user_role(auth.uid()) = 'admin');
CREATE POLICY "System can manage chapter_versions" ON public.chapter_versions FOR ALL USING (true);

CREATE POLICY "Admins can view auto_updates" ON public.auto_updates FOR SELECT USING (get_user_role(auth.uid()) = 'admin');
CREATE POLICY "Admins can manage auto_updates" ON public.auto_updates FOR ALL USING (get_user_role(auth.uid()) = 'admin');
CREATE POLICY "System can insert auto_updates" ON public.auto_updates FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view update_audit_log" ON public.update_audit_log FOR SELECT USING (get_user_role(auth.uid()) = 'admin');
CREATE POLICY "System can insert update_audit_log" ON public.update_audit_log FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view auto_update_settings" ON public.auto_update_settings FOR SELECT USING (get_user_role(auth.uid()) = 'admin');
CREATE POLICY "Admins can manage auto_update_settings" ON public.auto_update_settings FOR ALL USING (get_user_role(auth.uid()) = 'admin');

-- =====================================================
-- INSERT DEFAULT TRUSTED SOURCES
-- =====================================================
INSERT INTO public.content_sources (name, description, url, source_type, category, reliability_score) VALUES
('EU Transport Portal', 'Official EU transport regulations and updates', 'https://transport.ec.europa.eu', 'official', 'transport', 100),
('EU Customs Union', 'European customs regulations and tariffs', 'https://taxation-customs.ec.europa.eu', 'official', 'customs', 100),
('EU Sanctions Map', 'EU restrictive measures and sanctions', 'https://sanctionsmap.eu', 'official', 'sanctions', 100),
('European Road Freight', 'Road transport statistics and updates', 'https://ec.europa.eu/eurostat', 'official', 'transport', 95),
('UNECE Transport', 'UN transport regulations (ADR, TIR)', 'https://unece.org/transport', 'official', 'compliance', 100),
('IRU - International Road Transport Union', 'Industry updates and regulations', 'https://www.iru.org', 'official', 'transport', 90),
('FIATA', 'Freight forwarders association updates', 'https://fiata.org', 'official', 'transport', 85),
('European Shippers Council', 'Shipper-focused transport updates', 'https://europeanshippers.eu', 'official', 'transport', 80),
('Fuel Price Monitor EU', 'Diesel prices across EU countries', 'https://ec.europa.eu/energy', 'api', 'pricing', 95),
('Toll Calculator Germany', 'German toll updates (Maut)', 'https://www.toll-collect.de', 'website', 'pricing', 90);

-- =====================================================
-- INSERT DEFAULT SETTINGS
-- =====================================================
INSERT INTO public.auto_update_settings (setting_key, setting_value, description) VALUES
('auto_update_enabled', 'true', 'Master switch for automatic updates'),
('check_frequency_hours', '24', 'Default check frequency in hours'),
('auto_apply_minor', 'true', 'Automatically apply minor changes'),
('require_approval_critical', 'true', 'Require admin approval for critical changes'),
('max_updates_per_day', '10', 'Maximum auto-updates per day'),
('min_chapter_word_count', '3500', 'Minimum words per chapter after update'),
('notification_email', 'null', 'Admin notification email'),
('last_full_check', 'null', 'Timestamp of last full source check');

-- =====================================================
-- TRIGGER pentru updated_at
-- =====================================================
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_content_sources_modtime
  BEFORE UPDATE ON public.content_sources
  FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_auto_updates_modtime
  BEFORE UPDATE ON public.auto_updates
  FOR EACH ROW EXECUTE FUNCTION update_modified_column();