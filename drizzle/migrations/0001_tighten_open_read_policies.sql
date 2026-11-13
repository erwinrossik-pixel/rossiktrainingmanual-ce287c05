-- Helper: does the viewer share an approved company with the owner?
CREATE OR REPLACE FUNCTION public.shares_company(_viewer uuid, _owner uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.company_users a
    JOIN public.company_users b ON a.company_id = b.company_id
    WHERE a.user_id = _viewer
      AND b.user_id = _owner
      AND a.status = 'approved'
      AND b.status = 'approved'
  )
$$;

-- Helper: is the user an approved member of any company (or a platform admin)?
CREATE OR REPLACE FUNCTION public.is_approved_member(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(_user_id, 'admin'::app_role)
      OR EXISTS (
        SELECT 1 FROM public.company_users
        WHERE user_id = _user_id AND status = 'approved'
      )
$$;

REVOKE EXECUTE ON FUNCTION public.shares_company(uuid, uuid) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.is_approved_member(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.shares_company(uuid, uuid) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.is_approved_member(uuid) TO authenticated, service_role;

-- 1-3: remove "signed-in only" read rules (proper owner/company/admin rules already exist)
DROP POLICY IF EXISTS "Block anonymous user_sessions access" ON public.user_sessions;
DROP POLICY IF EXISTS "Block anonymous company_settings access" ON public.company_settings;
DROP POLICY IF EXISTS "Block anonymous certificates access" ON public.certificates;

-- Shared reference content: only approved members can read
DROP POLICY IF EXISTS "Authenticated users view certificate settings" ON public.certificate_settings;
CREATE POLICY "Approved members view certificate settings" ON public.certificate_settings
  FOR SELECT TO authenticated USING (public.is_approved_member(auth.uid()));

DROP POLICY IF EXISTS "Authenticated users can view audio cache" ON public.audio_cache;
CREATE POLICY "Approved members can view audio cache" ON public.audio_cache
  FOR SELECT TO authenticated USING (public.is_approved_member(auth.uid()));

DROP POLICY IF EXISTS "Authenticated users can view weekly challenges" ON public.weekly_challenges;
CREATE POLICY "Approved members can view weekly challenges" ON public.weekly_challenges
  FOR SELECT TO authenticated USING (public.is_approved_member(auth.uid()));

DROP POLICY IF EXISTS "Anyone can view premium chapters config" ON public.premium_chapters;
CREATE POLICY "Approved members can view premium chapters config" ON public.premium_chapters
  FOR SELECT TO authenticated USING (public.is_approved_member(auth.uid()));

DROP POLICY IF EXISTS "Authenticated users can view translation overrides" ON public.translation_overrides;
CREATE POLICY "Approved members can view translation overrides" ON public.translation_overrides
  FOR SELECT TO authenticated USING (public.is_approved_member(auth.uid()));

-- User-owned data: own rows, same-company colleagues, or platform admins
DROP POLICY IF EXISTS "Users can view all discussions" ON public.chapter_discussions;
CREATE POLICY "Users view discussions in their company" ON public.chapter_discussions
  FOR SELECT TO authenticated USING (
    auth.uid() = user_id
    OR public.has_role(auth.uid(), 'admin'::app_role)
    OR public.is_super_admin(auth.uid())
    OR public.shares_company(auth.uid(), user_id)
  );

DROP POLICY IF EXISTS "Users can view all likes" ON public.discussion_likes;
CREATE POLICY "Users view likes in their company" ON public.discussion_likes
  FOR SELECT TO authenticated USING (
    auth.uid() = user_id
    OR public.has_role(auth.uid(), 'admin'::app_role)
    OR public.is_super_admin(auth.uid())
    OR public.shares_company(auth.uid(), user_id)
  );

DROP POLICY IF EXISTS "Users can view challenge participants" ON public.challenge_participants;
CREATE POLICY "Users view challenge participants in their company" ON public.challenge_participants
  FOR SELECT TO authenticated USING (
    auth.uid() = user_id
    OR public.has_role(auth.uid(), 'admin'::app_role)
    OR public.is_super_admin(auth.uid())
    OR public.shares_company(auth.uid(), user_id)
  );

DROP POLICY IF EXISTS "Authenticated users can view mentor profiles" ON public.mentor_profiles;
CREATE POLICY "Users view mentor profiles in their company" ON public.mentor_profiles
  FOR SELECT TO authenticated USING (
    auth.uid() = user_id
    OR public.has_role(auth.uid(), 'admin'::app_role)
    OR public.is_super_admin(auth.uid())
    OR public.shares_company(auth.uid(), user_id)
  );