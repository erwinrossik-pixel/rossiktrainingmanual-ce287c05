import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { logger } from '@/utils/logger';

export interface Webinar {
  id: string;
  title: string;
  description: string | null;
  host_id: string;
  scheduled_at: string;
  duration_minutes: number;
  meeting_url: string | null;
  max_participants: number;
  is_recorded: boolean;
  recording_url: string | null;
  status: 'scheduled' | 'live' | 'completed' | 'cancelled';
  host_name?: string;
  registered_count?: number;
  is_registered?: boolean;
}

export function useWebinars() {
  const { user } = useAuth();
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchWebinars = useCallback(async () => {
    setLoading(true);
    try {
      const { data: webinarsData } = await supabase
        .from('webinars')
        .select('*')
        .gte('scheduled_at', new Date().toISOString())
        .order('scheduled_at', { ascending: true });

      if (!webinarsData) {
        setWebinars([]);
        return;
      }

      // Get host names
      const hostIds = [...new Set(webinarsData.map(w => w.host_id))];
      const { data: profiles } = await supabase
        .from('profiles')
        .select('id, first_name, last_name')
        .in('id', hostIds);

      const hostMap: Record<string, string> = {};
      (profiles || []).forEach(p => {
        hostMap[p.id] = `${p.first_name || ''} ${p.last_name || ''}`.trim() || 'Unknown';
      });

      // Get registration counts
      const webinarIds = webinarsData.map(w => w.id);
      const { data: registrations } = await supabase
        .from('webinar_registrations')
        .select('webinar_id, user_id')
        .in('webinar_id', webinarIds);

      const countMap: Record<string, number> = {};
      const userRegistered: Set<string> = new Set();
      (registrations || []).forEach(r => {
        countMap[r.webinar_id] = (countMap[r.webinar_id] || 0) + 1;
        if (user && r.user_id === user.id) {
          userRegistered.add(r.webinar_id);
        }
      });

      const enrichedWebinars: Webinar[] = webinarsData.map(w => ({
        ...w,
        host_name: hostMap[w.host_id],
        registered_count: countMap[w.id] || 0,
        is_registered: userRegistered.has(w.id)
      })) as Webinar[];

      setWebinars(enrichedWebinars);
    } catch (error) {
      logger.error('Error fetching webinars:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchWebinars();
  }, [fetchWebinars]);

  const registerForWebinar = useCallback(async (webinarId: string) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('webinar_registrations')
        .insert({ webinar_id: webinarId, user_id: user.id });

      if (!error) {
        await fetchWebinars();
        return true;
      }
    } catch (error) {
      logger.error('Error registering:', error);
    }
    return false;
  }, [user, fetchWebinars]);

  const unregisterFromWebinar = useCallback(async (webinarId: string) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('webinar_registrations')
        .delete()
        .eq('webinar_id', webinarId)
        .eq('user_id', user.id);

      if (!error) {
        await fetchWebinars();
        return true;
      }
    } catch (error) {
      logger.error('Error unregistering:', error);
    }
    return false;
  }, [user, fetchWebinars]);

  return {
    webinars,
    loading,
    registerForWebinar,
    unregisterFromWebinar,
    refresh: fetchWebinars
  };
}
