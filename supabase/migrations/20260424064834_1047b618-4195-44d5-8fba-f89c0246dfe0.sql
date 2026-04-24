-- Replace broad public SELECT with a policy that still allows direct file access via getPublicUrl
-- but prevents listing the bucket contents
DROP POLICY IF EXISTS "Public can view company assets" ON storage.objects;

-- Allow public read by exact name (works for getPublicUrl), prevents anonymous LIST queries that filter on prefix only
-- Note: getPublicUrl bypasses RLS via the public CDN endpoint when bucket is public, so we keep authenticated read here
CREATE POLICY "Authenticated can view company assets"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'company-assets');