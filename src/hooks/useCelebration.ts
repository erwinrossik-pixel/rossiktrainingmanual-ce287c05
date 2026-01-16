import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { Json } from '@/integrations/supabase/types';

export interface CelebrationEvent {
  id: string;
  event_type: string;
  event_data: Record<string, unknown>;
  shown: boolean;
  created_at: string;
}

export function useCelebration() {
  const { user } = useAuth();
  const [pendingCelebrations, setPendingCelebrations] = useState<CelebrationEvent[]>([]);
  const [currentCelebration, setCurrentCelebration] = useState<CelebrationEvent | null>(null);

  const fetchPendingCelebrations = useCallback(async () => {
    if (!user) return;

    try {
      const { data } = await supabase
        .from('celebration_events')
        .select('*')
        .eq('user_id', user.id)
        .eq('shown', false)
        .order('created_at', { ascending: true })
        .limit(5);

      const typedData = (data || []).map(item => ({
        ...item,
        event_data: (item.event_data as Record<string, unknown>) || {}
      }));

      setPendingCelebrations(typedData);
      
      // Show first celebration
      if (typedData.length > 0 && !currentCelebration) {
        setCurrentCelebration(typedData[0]);
      }
    } catch (error) {
      console.error('Error fetching celebrations:', error);
    }
  }, [user, currentCelebration]);

  useEffect(() => {
    fetchPendingCelebrations();
  }, [fetchPendingCelebrations]);

  const markCelebrationShown = useCallback(async (id: string) => {
    if (!user) return;

    try {
      await supabase
        .from('celebration_events')
        .update({ shown: true })
        .eq('id', id)
        .eq('user_id', user.id);

      // Remove from pending and show next
      setPendingCelebrations(prev => {
        const remaining = prev.filter(c => c.id !== id);
        setCurrentCelebration(remaining[0] || null);
        return remaining;
      });
    } catch (error) {
      console.error('Error marking celebration shown:', error);
    }
  }, [user]);

  const triggerCelebration = useCallback(async (
    eventType: 'chapter_complete' | 'quiz_passed' | 'certificate_earned' | 'level_up' | 'achievement',
    eventData: Record<string, unknown> = {}
  ) => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('celebration_events')
        .insert({
          user_id: user.id,
          event_type: eventType,
          event_data: eventData as Json
        })
        .select()
        .single();

      if (error) throw error;

      const typedData: CelebrationEvent = {
        ...data,
        event_data: (data.event_data as Record<string, unknown>) || {}
      };

      // Show immediately if no current celebration
      if (!currentCelebration) {
        setCurrentCelebration(typedData);
      } else {
        setPendingCelebrations(prev => [...prev, typedData]);
      }
    } catch (error) {
      console.error('Error triggering celebration:', error);
    }
  }, [user, currentCelebration]);

  const dismissCelebration = useCallback(() => {
    if (currentCelebration) {
      markCelebrationShown(currentCelebration.id);
    }
  }, [currentCelebration, markCelebrationShown]);

  return {
    currentCelebration,
    pendingCelebrations,
    triggerCelebration,
    dismissCelebration,
    hasPending: pendingCelebrations.length > 0
  };
}
