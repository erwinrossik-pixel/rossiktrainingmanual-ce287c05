import { useEffect, useRef, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const SESSION_KEY = 'analytics_session_id';

function generateSessionId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function getDeviceType(): string {
  const ua = navigator.userAgent;
  if (/tablet|ipad|playbook|silk/i.test(ua)) return 'tablet';
  if (/mobile|iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(ua)) return 'mobile';
  return 'desktop';
}

function getBrowser(): string {
  const ua = navigator.userAgent;
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Safari')) return 'Safari';
  if (ua.includes('Edge')) return 'Edge';
  if (ua.includes('Opera')) return 'Opera';
  return 'Other';
}

export function useAnalytics() {
  const { user } = useAuth();
  const pageStartTime = useRef<number>(Date.now());
  const currentPath = useRef<string>('');
  const sessionId = useRef<string>('');

  // Initialize or get session
  useEffect(() => {
    let storedSession = sessionStorage.getItem(SESSION_KEY);
    if (!storedSession) {
      storedSession = generateSessionId();
      sessionStorage.setItem(SESSION_KEY, storedSession);
    }
    sessionId.current = storedSession;
  }, []);

  // Track session start/update
  const initSession = useCallback(async () => {
    if (!user || !sessionId.current) return;

    try {
      const { data: existing } = await supabase
        .from('user_sessions')
        .select('id')
        .eq('session_id', sessionId.current)
        .single();

      if (!existing) {
        await supabase.from('user_sessions').insert({
          user_id: user.id,
          session_id: sessionId.current,
          device_type: getDeviceType(),
          browser: getBrowser(),
        });
      }
    } catch (error) {
      console.error('Error initializing session:', error);
    }
  }, [user]);

  // Update session activity
  const updateSessionActivity = useCallback(async (durationSeconds: number) => {
    if (!user || !sessionId.current) return;

    try {
      await supabase
        .from('user_sessions')
        .update({
          last_activity_at: new Date().toISOString(),
          total_duration_seconds: durationSeconds,
        })
        .eq('session_id', sessionId.current);
    } catch (error) {
      console.error('Error updating session:', error);
    }
  }, [user]);

  // Track page view
  const trackPageView = useCallback(async (pagePath: string, chapterId?: string) => {
    if (!user || !sessionId.current) return;

    // Save duration for previous page
    if (currentPath.current) {
      const duration = Math.floor((Date.now() - pageStartTime.current) / 1000);
      if (duration > 0) {
        await updateSessionActivity(duration);
      }
    }

    // Start tracking new page
    pageStartTime.current = Date.now();
    currentPath.current = pagePath;

    try {
      await supabase.from('page_views').insert({
        user_id: user.id,
        page_path: pagePath,
        chapter_id: chapterId || null,
        session_id: sessionId.current,
      });

      // Update pages visited count
      await supabase
        .from('user_sessions')
        .update({
          pages_visited: supabase.rpc ? undefined : 1,
          last_activity_at: new Date().toISOString(),
        })
        .eq('session_id', sessionId.current);
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  }, [user, updateSessionActivity]);

  // Track chapter visit
  const trackChapterVisit = useCallback((chapterId: string) => {
    trackPageView(`/chapter/${chapterId}`, chapterId);
  }, [trackPageView]);

  // Initialize session on mount
  useEffect(() => {
    if (user) {
      initSession();
    }
  }, [user, initSession]);

  // Track page unload
  useEffect(() => {
    const handleUnload = () => {
      if (currentPath.current && user) {
        const duration = Math.floor((Date.now() - pageStartTime.current) / 1000);
        // Use sendBeacon for reliable tracking on page unload
        navigator.sendBeacon && navigator.sendBeacon('/api/analytics', JSON.stringify({
          type: 'duration',
          duration,
          sessionId: sessionId.current,
        }));
      }
    };

    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, [user]);

  return {
    trackPageView,
    trackChapterVisit,
    sessionId: sessionId.current,
  };
}
