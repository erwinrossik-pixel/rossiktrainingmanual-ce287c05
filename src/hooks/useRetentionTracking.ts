import { useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { logger } from '@/utils/logger';

/**
 * Hook to track user activity for retention system
 * Updates user_sessions and marks user as active
 */
export function useRetentionTracking() {
  const { user } = useAuth();
  const sessionIdRef = useRef<string | null>(null);
  const lastActivityRef = useRef<Date>(new Date());
  const pagesVisitedRef = useRef<number>(0);

  // Generate session ID
  const generateSessionId = useCallback(() => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  // Update session activity
  const updateActivity = useCallback(async () => {
    if (!user || !sessionIdRef.current) return;

    const now = new Date();
    const durationSeconds = Math.floor(
      (now.getTime() - lastActivityRef.current.getTime()) / 1000
    );

    try {
      // Try to update existing session
      const { data: existingSession } = await supabase
        .from('user_sessions')
        .select('id, total_duration_seconds, pages_visited')
        .eq('session_id', sessionIdRef.current)
        .single();

      if (existingSession) {
        await supabase
          .from('user_sessions')
          .update({
            last_activity_at: now.toISOString(),
            total_duration_seconds: (existingSession.total_duration_seconds || 0) + durationSeconds,
            pages_visited: pagesVisitedRef.current
          })
          .eq('id', existingSession.id);
      }

      lastActivityRef.current = now;
    } catch (error) {
      logger.error('Error updating activity:', error);
    }
  }, [user]);

  // Start a new session with conflict handling
  const startSession = useCallback(async () => {
    if (!user) return;

    const sessionId = generateSessionId();
    sessionIdRef.current = sessionId;
    lastActivityRef.current = new Date();
    pagesVisitedRef.current = 1;

    try {
      // Check if session exists (could be created by useAnalytics)
      const { data: existing } = await supabase
        .from('user_sessions')
        .select('id')
        .eq('session_id', sessionId)
        .maybeSingle();

      if (existing) {
        // Session already exists, skip insert
        logger.retention('Session already exists:', sessionId);
        return;
      }

      // Detect device type
      const deviceType = /Mobile|Android|iPhone/i.test(navigator.userAgent)
        ? 'mobile'
        : /Tablet|iPad/i.test(navigator.userAgent)
        ? 'tablet'
        : 'desktop';

      // Detect browser
      const browser = navigator.userAgent.includes('Chrome')
        ? 'Chrome'
        : navigator.userAgent.includes('Firefox')
        ? 'Firefox'
        : navigator.userAgent.includes('Safari')
        ? 'Safari'
        : navigator.userAgent.includes('Edge')
        ? 'Edge'
        : 'Other';

      // Use upsert to prevent conflicts
      const { error } = await supabase.from('user_sessions').upsert({
        user_id: user.id,
        session_id: sessionId,
        started_at: new Date().toISOString(),
        last_activity_at: new Date().toISOString(),
        pages_visited: 1,
        total_duration_seconds: 0,
        device_type: deviceType,
        browser: browser
      }, {
        onConflict: 'session_id',
        ignoreDuplicates: true
      });

      if (error && error.code !== '23505') {
        throw error;
      }

      logger.retention('Session started:', sessionId);
    } catch (error) {
      logger.error('Error starting session:', error, { tag: 'Retention' });
    }
  }, [user, generateSessionId]);

  // Track page visit
  const trackPageVisit = useCallback(() => {
    pagesVisitedRef.current += 1;
    updateActivity();
  }, [updateActivity]);

  // Mark return from inactivity
  const markReturn = useCallback(async () => {
    if (!user) return;

    try {
      // Check if user was marked as at_risk or inactive
      const { data: retention } = await supabase
        .from('user_retention')
        .select('id, status, re_engaged_count')
        .eq('user_id', user.id)
        .single();

      if (retention && ['at_risk', 'inactive'].includes(retention.status)) {
        // Mark as re-engaged
        await supabase
          .from('user_retention')
          .update({
            status: 're_engaged',
            re_engaged_count: (retention.re_engaged_count || 0) + 1,
            last_active_at: new Date().toISOString(),
            days_inactive: 0
          })
          .eq('id', retention.id);

        // Update any pending retention logs with return time
        await supabase
          .from('retention_logs')
          .update({ returned_at: new Date().toISOString() })
          .eq('user_id', user.id)
          .is('returned_at', null);

        logger.retention('User re-engaged');
      }
    } catch (error) {
      logger.error('Error marking return:', error, { tag: 'Retention' });
    }
  }, [user]);

  // Initialize session on mount
  useEffect(() => {
    if (user) {
      startSession();
      markReturn();
    }
  }, [user, startSession, markReturn]);

  // Update activity periodically (every 30 seconds)
  useEffect(() => {
    if (!user) return;

    const interval = setInterval(updateActivity, 30000);
    return () => clearInterval(interval);
  }, [user, updateActivity]);

  // Track visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        updateActivity();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [updateActivity]);

  // Update on page unload
  useEffect(() => {
    const handleUnload = () => {
      updateActivity();
    };

    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, [updateActivity]);

  return {
    trackPageVisit,
    sessionId: sessionIdRef.current
  };
}
