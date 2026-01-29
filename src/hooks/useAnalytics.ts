import { useEffect, useRef, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const SESSION_KEY = 'analytics_session_id';
const ACTIVITY_UPDATE_INTERVAL = 30000; // 30 seconds minimum between updates
const DURATION_UPDATE_INTERVAL = 10000; // Update duration every 10 seconds

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
  const currentPageViewId = useRef<string | null>(null);
  const sessionId = useRef<string>('');
  const lastActivityUpdate = useRef<number>(0);
  const sessionInitialized = useRef<boolean>(false);
  const pendingUpdate = useRef<NodeJS.Timeout | null>(null);
  const durationUpdateInterval = useRef<NodeJS.Timeout | null>(null);

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
        // Try to get location from edge function
        let locationData = { latitude: null, longitude: null, country: null, city: null };
        try {
          const { data, error } = await supabase.functions.invoke('get-location');
          if (!error && data) {
            locationData = data;
          }
        } catch (locError) {
          console.log('Could not get location:', locError);
        }

        await supabase.from('user_sessions').insert({
          user_id: user.id,
          session_id: sessionId.current,
          device_type: getDeviceType(),
          browser: getBrowser(),
          latitude: locationData.latitude,
          longitude: locationData.longitude,
          country: locationData.country,
          city: locationData.city,
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

  // Update page view duration
  const updatePageViewDuration = useCallback(async (pageViewId: string, durationSeconds: number) => {
    if (!user || !pageViewId) return;
    
    try {
      await supabase
        .from('page_views')
        .update({ duration_seconds: durationSeconds })
        .eq('id', pageViewId);
    } catch (error) {
      console.error('Error updating page view duration:', error);
    }
  }, [user]);

  // Save current page duration and cleanup interval
  const savePreviousPageDuration = useCallback(async () => {
    if (currentPageViewId.current && pageStartTime.current) {
      const duration = Math.floor((Date.now() - pageStartTime.current) / 1000);
      if (duration > 0) {
        await updatePageViewDuration(currentPageViewId.current, duration);
        updateSessionActivity(duration);
      }
    }
    
    // Clear the interval for previous page
    if (durationUpdateInterval.current) {
      clearInterval(durationUpdateInterval.current);
      durationUpdateInterval.current = null;
    }
  }, [updatePageViewDuration, updateSessionActivity]);

  // Track page view - debounced
  const trackPageView = useCallback(async (pagePath: string, chapterId?: string) => {
    if (!user || !sessionId.current) return;

    // Prevent duplicate tracking for same page
    if (currentPath.current === pagePath) return;

    // Save duration for previous page
    await savePreviousPageDuration();

    // Start tracking new page
    pageStartTime.current = Date.now();
    currentPath.current = pagePath;

    try {
      const { data, error } = await supabase.from('page_views').insert({
        user_id: user.id,
        page_path: pagePath,
        chapter_id: chapterId || null,
        session_id: sessionId.current,
        duration_seconds: 0,
      }).select('id').single();
      
      if (!error && data) {
        currentPageViewId.current = data.id;
        
        // Start interval to periodically update duration while on page
        durationUpdateInterval.current = setInterval(async () => {
          if (currentPageViewId.current) {
            const duration = Math.floor((Date.now() - pageStartTime.current) / 1000);
            await updatePageViewDuration(currentPageViewId.current, duration);
          }
        }, DURATION_UPDATE_INTERVAL);
      }
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  }, [user, savePreviousPageDuration, updatePageViewDuration]);

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
      if (durationUpdateInterval.current) {
        clearInterval(durationUpdateInterval.current);
      }
    };
  }, []);

  // Track page unload - save final duration
  useEffect(() => {
    const handleUnload = async () => {
      if (currentPageViewId.current && user) {
        const duration = Math.floor((Date.now() - pageStartTime.current) / 1000);
        
        // Try to update with sendBeacon for reliability
        if (navigator.sendBeacon) {
          // Unfortunately we can't use Supabase with sendBeacon, 
          // but we can at least try the regular update
          try {
            await updatePageViewDuration(currentPageViewId.current, duration);
          } catch (e) {
            // Ignore errors on unload
          }
        }
      }
    };

    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'hidden' && currentPageViewId.current) {
        const duration = Math.floor((Date.now() - pageStartTime.current) / 1000);
        await updatePageViewDuration(currentPageViewId.current, duration);
      }
    };

    window.addEventListener('beforeunload', handleUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [user, updatePageViewDuration]);

  return {
    trackPageView,
    trackChapterVisit,
    sessionId: sessionId.current,
  };
}
