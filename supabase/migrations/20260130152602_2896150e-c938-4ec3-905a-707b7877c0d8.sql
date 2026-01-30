-- Now create the unique index
CREATE UNIQUE INDEX IF NOT EXISTS idx_content_visual_unique ON content_visual_analysis (chapter_id, language, analysis_type);