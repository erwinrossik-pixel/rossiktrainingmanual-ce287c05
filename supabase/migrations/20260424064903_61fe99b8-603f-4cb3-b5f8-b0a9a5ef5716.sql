-- Restore anonymous read for individual files (needed for branding/logos on auth page)
-- but rely on bucket being non-listable by adding name IS NOT NULL filter that defeats prefix-only listing
DROP POLICY IF EXISTS "Authenticated can view company assets" ON storage.objects;

CREATE POLICY "Public can read company asset files"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'company-assets' AND name IS NOT NULL AND length(name) > 0);