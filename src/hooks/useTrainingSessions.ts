import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from './use-toast';

export interface TrainingSession {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  chapter_id: string | null;
  scheduled_at: string;
  duration_minutes: number;
  reminder_sent: boolean;
  completed: boolean;
  completed_at: string | null;
  recurrence: string | null;
  created_at: string;
  updated_at: string;
}

export function useTrainingSessions() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [sessions, setSessions] = useState<TrainingSession[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSessions = useCallback(async () => {
    if (!user) {
      setSessions([]);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('training_sessions')
        .select('*')
        .eq('user_id', user.id)
        .order('scheduled_at', { ascending: true });

      if (error) throw error;
      setSessions(data || []);
    } catch (error) {
      console.error('Error fetching sessions:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchSessions();
  }, [fetchSessions]);

  const createSession = useCallback(async (session: {
    title: string;
    description?: string;
    chapter_id?: string;
    scheduled_at: Date;
    duration_minutes?: number;
    recurrence?: string;
  }) => {
    if (!user) return null;

    try {
      const { data, error } = await supabase
        .from('training_sessions')
        .insert({
          user_id: user.id,
          title: session.title,
          description: session.description,
          chapter_id: session.chapter_id,
          scheduled_at: session.scheduled_at.toISOString(),
          duration_minutes: session.duration_minutes || 60,
          recurrence: session.recurrence
        })
        .select()
        .single();

      if (error) throw error;

      await fetchSessions();
      toast({ title: 'Sesiune programată' });
      return data;
    } catch (error) {
      console.error('Error creating session:', error);
      toast({ title: 'Eroare la programare', variant: 'destructive' });
      return null;
    }
  }, [user, fetchSessions, toast]);

  const updateSession = useCallback(async (id: string, updates: Partial<TrainingSession>) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('training_sessions')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;

      await fetchSessions();
      return true;
    } catch (error) {
      console.error('Error updating session:', error);
      return false;
    }
  }, [user, fetchSessions]);

  const deleteSession = useCallback(async (id: string) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('training_sessions')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;

      await fetchSessions();
      toast({ title: 'Sesiune ștearsă' });
      return true;
    } catch (error) {
      console.error('Error deleting session:', error);
      return false;
    }
  }, [user, fetchSessions, toast]);

  const markComplete = useCallback(async (id: string) => {
    return updateSession(id, { 
      completed: true, 
      completed_at: new Date().toISOString() 
    });
  }, [updateSession]);

  const getUpcoming = useCallback(() => {
    const now = new Date();
    return sessions.filter(s => 
      !s.completed && new Date(s.scheduled_at) >= now
    );
  }, [sessions]);

  const getToday = useCallback(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return sessions.filter(s => {
      const sessionDate = new Date(s.scheduled_at);
      return sessionDate >= today && sessionDate < tomorrow;
    });
  }, [sessions]);

  return {
    sessions,
    loading,
    createSession,
    updateSession,
    deleteSession,
    markComplete,
    getUpcoming,
    getToday,
    refresh: fetchSessions
  };
}
