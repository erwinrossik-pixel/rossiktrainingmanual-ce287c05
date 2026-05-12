import { useEffect, useRef, useCallback } from 'react';
import type { MutableRefObject } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { logger } from '@/utils/logger';

const SESSION_KEY = 'analytics_session_id';
const ACTIVITY_UPDATE_INTERVAL = 30000; // 30 seconds minimum between updates
const DURATION_UPDATE_INTERVAL = 10000; // Update duration every 10 seconds
const MAX_ACTIVE_DELTA_SECONDS = 60; // never count long idle/background gaps as app time

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
  const currentPath = useRef<string>('');
  const currentPageViewId = useRef<string | null>(null);
  const sessionId = useRef<string>('');
  const lastActivityUpdate = useRef<number>(0);
  const activeSessionSeconds = useRef<number>(0);
  const activePageSeconds = useRef<number>(0);
  const lastSessionTick = useRef<number>(Date.now());
  const lastPageTick = useRef<number>(Date.now());
  const pageStartTime = useRef<number>(Date.now());
  const sessionInitialized = useRef<boolean>(false);
  const pendingUpdate = useRef<NodeJS.Timeout | null>(null);
  const durationUpdateInterval = useRef<NodeJS.Timeout | null>(null);

  const collectActiveDelta = useCallback((lastTickRef: MutableRefObject<number>, forceVisible = false) => {
    const now = Date.now();
    const elapsed = Math.floor((now - lastTickRef.current) / 1000);
    lastTickRef.current = now;
    if ((!forceVisible && document.visibilityState !== 'visible') || elapsed <= 0) return 0;
    return Math.min(elapsed, MAX_ACTIVE_DELTA_SECONDS);
  }, []);

  // Initialize or get session
  useEffect(() => {
    let storedSession = sessionStorage.getItem(SESSION_KEY);
    if (!storedSession) {
      storedSession = generateSessionId();
      sessionStorage.setItem(SESSION_KEY, storedSession);
    }
    sessionId.current = storedSession;
  }, []);

  // Track session start/update - only once per session with proper conflict handling
  const initSession = useCallback(async () => {
    if (!user || !sessionId.current || sessionInitialized.current) return;

    try {
      // Check if session already exists (could be created by another hook)
      const { data: existing } = await supabase
        .from('user_sessions')
        .select('id, total_duration_seconds')
        .eq('session_id', sessionId.current)
        .maybeSingle();

      if (existing) {
        activeSessionSeconds.current = existing.total_duration_seconds || 0;
        lastSessionTick.current = Date.now();
        // Session already exists, just mark as initialized
        sessionInitialized.current = true;
        return;
      }

      // Try to get location from edge function
      let locationData = { latitude: null, longitude: null, country: null, city: null };
      try {
        const { data, error } = await supabase.functions.invoke('get-location');
        if (!error && data) {
          locationData = data;
        }
      } catch (locError) {
        logger.debug('Could not get location:', locError);
      }

      // Use upsert to handle potential race conditions
      const { error: insertError } = await supabase.from('user_sessions').upsert({
        user_id: user.id,
        session_id: sessionId.current,
        device_type: getDeviceType(),
        browser: getBrowser(),
        latitude: locationData.latitude,
        longitude: locationData.longitude,
        country: locationData.country,
        city: locationData.city,
        started_at: new Date().toISOString(),
        last_activity_at: new Date().toISOString(),
      }, { 
        onConflict: 'session_id',
        ignoreDuplicates: true 
      });

      if (insertError && insertError.code !== '23505') {
        // Log only non-duplicate errors
        logger.error('Error initializing session:', insertError);
      }
      
      sessionInitialized.current = true;
    } catch (error) {
      logger.error('Error initializing session:', error);
      sessionInitialized.current = true; // Mark as initialized to prevent infinite retries
    }
  }, [user]);

  // Throttled session activity update
  const updateSessionActivity = useCallback(async (force = false, forceVisible = false) => {
    if (!user || !sessionId.current) return;
    
    const now = Date.now();
    activeSessionSeconds.current += collectActiveDelta(lastSessionTick, forceVisible);
    const sessionDurationSeconds = activeSessionSeconds.current;
    // Throttle updates to once per 30 seconds
    if (!force && now - lastActivityUpdate.current < ACTIVITY_UPDATE_INTERVAL) {
      // Schedule a delayed update instead
      if (pendingUpdate.current) {
        clearTimeout(pendingUpdate.current);
      }
      pendingUpdate.current = setTimeout(() => {
        updateSessionActivity();
      }, ACTIVITY_UPDATE_INTERVAL - (now - lastActivityUpdate.current));
      return;
    }

    lastActivityUpdate.current = now;

    try {
      await supabase
        .from('user_sessions')
        .update({
          last_activity_at: new Date().toISOString(),
          total_duration_seconds: sessionDurationSeconds,
        })
        .eq('session_id', sessionId.current);
    } catch (error) {
      logger.error('Error updating session:', error);
    }
  }, [user, collectActiveDelta]);

  // Update page view duration
  const updatePageViewDuration = useCallback(async (pageViewId: string, durationSeconds: number) => {
    if (!user || !pageViewId) return;
    
    try {
      await supabase
        .from('page_views')
        .update({ duration_seconds: durationSeconds })
        .eq('id', pageViewId);
    } catch (error) {
      logger.error('Error updating page view duration:', error);
    }
  }, [user]);

  // Save current page duration and cleanup interval
  const savePreviousPageDuration = useCallback(async () => {
    if (currentPageViewId.current && pageStartTime.current) {
      activePageSeconds.current += collectActiveDelta(lastPageTick);
      if (activePageSeconds.current > 0) {
        await updatePageViewDuration(currentPageViewId.current, activePageSeconds.current);
        await updateSessionActivity(true);
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
    lastPageTick.current = Date.now();
    activePageSeconds.current = 0;
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
            activePageSeconds.current += collectActiveDelta(lastPageTick);
            await updatePageViewDuration(currentPageViewId.current, activePageSeconds.current);
            await updateSessionActivity(true);
          }
        }, DURATION_UPDATE_INTERVAL);
      }
    } catch (error) {
      logger.error('Error tracking page view:', error);
    }
  }, [user, savePreviousPageDuration, updatePageViewDuration, collectActiveDelta, updateSessionActivity]);

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
        activePageSeconds.current += collectActiveDelta(lastPageTick, true);
        const duration = activePageSeconds.current;
        
        // Try to update with sendBeacon for reliability
        if (navigator.sendBeacon) {
          // Unfortunately we can't use Supabase with sendBeacon, 
          // but we can at least try the regular update
          try {
            await updatePageViewDuration(currentPageViewId.current, duration);
            await updateSessionActivity(true, true);
          } catch (e) {
            // Ignore errors on unload
          }
        }
      }
    };

    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'hidden' && currentPageViewId.current) {
        activePageSeconds.current += collectActiveDelta(lastPageTick, true);
        await updatePageViewDuration(currentPageViewId.current, activePageSeconds.current);
        await updateSessionActivity(true, true);
      }
    };

    window.addEventListener('beforeunload', handleUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [user, updatePageViewDuration, collectActiveDelta, updateSessionActivity]);

  return {
    trackPageView,
    trackChapterVisit,
    sessionId: sessionId.current,
  };
}
