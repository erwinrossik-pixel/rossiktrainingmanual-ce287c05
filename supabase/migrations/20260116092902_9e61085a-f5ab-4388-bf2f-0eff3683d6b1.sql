-- Create storage bucket for company assets (logos, favicons)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'company-assets', 
  'company-assets', 
  true,
  5242880, -- 5MB limit
  ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp', 'image/svg+xml', 'image/x-icon']
);

-- Allow authenticated users to view company assets (public bucket)
CREATE POLICY "Public can view company assets"
ON storage.objects FOR SELECT
USING (bucket_id = 'company-assets');

-- Allow company admins to upload assets for their company
CREATE POLICY "Company admins can upload assets"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'company-assets' 
  AND auth.role() = 'authenticated'
  AND (
    public.is_super_admin(auth.uid()) 
    OR public.is_company_admin(auth.uid(), (storage.foldername(name))[1]::uuid)
  )
);

-- Allow company admins to update their assets
CREATE POLICY "Company admins can update assets"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'company-assets' 
  AND auth.role() = 'authenticated'
  AND (
    public.is_super_admin(auth.uid()) 
    OR public.is_company_admin(auth.uid(), (storage.foldername(name))[1]::uuid)
  )
);

-- Allow company admins to delete their assets
CREATE POLICY "Company admins can delete assets"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'company-assets' 
  AND auth.role() = 'authenticated'
  AND (
    public.is_super_admin(auth.uid()) 
    OR public.is_company_admin(auth.uid(), (storage.foldername(name))[1]::uuid)
  )
);