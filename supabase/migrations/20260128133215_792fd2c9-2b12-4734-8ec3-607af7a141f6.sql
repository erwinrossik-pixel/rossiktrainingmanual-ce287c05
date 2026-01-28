-- Add final exam data to certificates table
ALTER TABLE public.certificates 
ADD COLUMN IF NOT EXISTS final_exam_score numeric,
ADD COLUMN IF NOT EXISTS final_exam_passed_at timestamp with time zone,
ADD COLUMN IF NOT EXISTS final_exam_attempt_id uuid REFERENCES public.final_exam_attempts(id);

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS idx_certificates_final_exam_attempt ON public.certificates(final_exam_attempt_id);

COMMENT ON COLUMN public.certificates.final_exam_score IS 'Score achieved on the final exam (percentage)';
COMMENT ON COLUMN public.certificates.final_exam_passed_at IS 'Timestamp when the user passed the final exam';
COMMENT ON COLUMN public.certificates.final_exam_attempt_id IS 'Reference to the successful final exam attempt';