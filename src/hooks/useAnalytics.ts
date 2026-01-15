import { useEffect, useRef, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const SESSION_KEY = 'analytics_session_id';
const ACTIVITY_UPDATE_INTERVAL = 30000; // 30 seconds minimum between updates

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
  const lastActivityUpdate = useRef<number>(0);
  const sessionInitialized = useRef<boolean>(false);
  const pendingUpdate = useRef<NodeJS.Timeout | null>(null);

  // Initialize or get session
  useEffect(() => {
    let storedSession = sessionStorage.getItem(SESSION_KEY);
    if (!storedSession) {
      storedSession = generateSessionId();
      sessionStorage.setItem(SESSION_KEY, storedSession);
    }
    sessionId.current = storedSession;
  }, []);

  // Track session start/update - only once per session
  const initSession = useCallback(async () => {
    if (!user || !sessionId.current || sessionInitialized.current) return;

    try {
      const { data: existing } = await supabase
        .from('user_sessions')
        .select('id')
        .eq('session_id', sessionId.current)
        .maybeSingle();

      if (!existing) {
        await supabase.from('user_sessions').insert({
          user_id: user.id,
          session_id: sessionId.current,
          device_type: getDeviceType(),
          browser: getBrowser(),
        });
      }
      sessionInitialized.current = true;
    } catch (error) {
      console.error('Error initializing session:', error);
    }
  }, [user]);

  // Throttled session activity update
  const updateSessionActivity = useCallback(async (durationSeconds: number) => {
    if (!user || !sessionId.current) return;
    
    const now = Date.now();
    // Throttle updates to once per 30 seconds
    if (now - lastActivityUpdate.current < ACTIVITY_UPDATE_INTERVAL) {
      // Schedule a delayed update instead
      if (pendingUpdate.current) {
        clearTimeout(pendingUpdate.current);
      }
      pendingUpdate.current = setTimeout(() => {
        updateSessionActivity(durationSeconds);
      }, ACTIVITY_UPDATE_INTERVAL - (now - lastActivityUpdate.current));
      return;
    }

    lastActivityUpdate.current = now;

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

  // Track page view - debounced
  const trackPageView = useCallback(async (pagePath: string, chapterId?: string) => {
    if (!user || !sessionId.current) return;

    // Prevent duplicate tracking for same page
    if (currentPath.current === pagePath) return;

    // Save duration for previous page
    if (currentPath.current) {
      const duration = Math.floor((Date.now() - pageStartTime.current) / 1000);
      if (duration > 0) {
        updateSessionActivity(duration);
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
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  }, [user, updateSessionActivity]);

  // Track chapter visit - memoized
  const trackChapterVisit = useCallback((chapterId: string) => {
    trackPageView(`/chapter/${chapterId}`, chapterId);
  }, [trackPageView]);

  // Initialize session on mount - only once
  useEffect(() => {
    if (user && !sessionInitialized.current) {
      initSession();
    }
  }, [user, initSession]);

  // Cleanup pending updates on unmount
  useEffect(() => {
    return () => {
      if (pendingUpdate.current) {
        clearTimeout(pendingUpdate.current);
      }
    };
  }, []);

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
