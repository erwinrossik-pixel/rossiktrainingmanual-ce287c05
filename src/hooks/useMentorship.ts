import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export interface MentorProfile {
  id: string;
  user_id: string;
  expertise_areas: string[];
  bio: string | null;
  availability_hours: number;
  max_mentees: number;
  is_active: boolean;
  rating: number;
  total_sessions: number;
  mentor_name?: string;
  current_mentees?: number;
}

export interface Mentorship {
  id: string;
  mentor_id: string;
  mentee_id: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  started_at: string | null;
  ended_at: string | null;
  notes: string | null;
  mentor_name?: string;
  mentee_name?: string;
}

export function useMentorship() {
  const { user } = useAuth();
  const [mentors, setMentors] = useState<MentorProfile[]>([]);
  const [myMentorships, setMyMentorships] = useState<Mentorship[]>([]);
  const [myMentorProfile, setMyMentorProfile] = useState<MentorProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchMentors = useCallback(async () => {
    setLoading(true);
    try {
      const { data: mentorData } = await supabase
        .from('mentor_profiles')
        .select('*')
        .eq('is_active', true);

      if (!mentorData) {
        setMentors([]);
        return;
      }

      // Get mentor names
      const userIds = mentorData.map(m => m.user_id);
      const { data: profiles } = await supabase
        .from('profiles')
        .select('id, first_name, last_name')
        .in('id', userIds);

      const nameMap: Record<string, string> = {};
      (profiles || []).forEach(p => {
        nameMap[p.id] = `${p.first_name || ''} ${p.last_name || ''}`.trim() || 'Unknown';
      });

      // Get current mentee counts
      const mentorIds = mentorData.map(m => m.id);
      const { data: mentorships } = await supabase
        .from('mentorships')
        .select('mentor_id')
        .in('mentor_id', mentorIds)
        .eq('status', 'active');

      const countMap: Record<string, number> = {};
      (mentorships || []).forEach(m => {
        countMap[m.mentor_id] = (countMap[m.mentor_id] || 0) + 1;
      });

      const enrichedMentors: MentorProfile[] = mentorData.map(m => ({
        ...m,
        mentor_name: nameMap[m.user_id],
        current_mentees: countMap[m.id] || 0
      })) as MentorProfile[];

      setMentors(enrichedMentors);

      // Check if user has mentor profile
      if (user) {
        const userMentor = enrichedMentors.find(m => m.user_id === user.id);
        setMyMentorProfile(userMentor || null);
      }
    } catch (error) {
      console.error('Error fetching mentors:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  const fetchMyMentorships = useCallback(async () => {
    if (!user) return;

    try {
      const { data } = await supabase
        .from('mentorships')
        .select('*')
        .or(`mentee_id.eq.${user.id}`);

      setMyMentorships((data || []) as Mentorship[]);
    } catch (error) {
      console.error('Error fetching mentorships:', error);
    }
  }, [user]);

  useEffect(() => {
    fetchMentors();
    fetchMyMentorships();
  }, [fetchMentors, fetchMyMentorships]);

  const requestMentor = useCallback(async (mentorId: string) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('mentorships')
        .insert({
          mentor_id: mentorId,
          mentee_id: user.id,
          status: 'pending'
        });

      if (!error) {
        await fetchMyMentorships();
        return true;
      }
    } catch (error) {
      console.error('Error requesting mentor:', error);
    }
    return false;
  }, [user, fetchMyMentorships]);

  const becomeMentor = useCallback(async (profile: Partial<MentorProfile>) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('mentor_profiles')
        .insert({
          user_id: user.id,
          expertise_areas: profile.expertise_areas || [],
          bio: profile.bio,
          availability_hours: profile.availability_hours || 5,
          max_mentees: profile.max_mentees || 3
        });

      if (!error) {
        await fetchMentors();
        return true;
      }
    } catch (error) {
      console.error('Error becoming mentor:', error);
    }
    return false;
  }, [user, fetchMentors]);

  const updateMentorshipStatus = useCallback(async (
    mentorshipId: string, 
    status: Mentorship['status']
  ) => {
    try {
      const updates: Record<string, unknown> = { status };
      if (status === 'active') updates.started_at = new Date().toISOString();
      if (status === 'completed' || status === 'cancelled') updates.ended_at = new Date().toISOString();

      const { error } = await supabase
        .from('mentorships')
        .update(updates)
        .eq('id', mentorshipId);

      if (!error) {
        await fetchMyMentorships();
        return true;
      }
    } catch (error) {
      console.error('Error updating mentorship:', error);
    }
    return false;
  }, [fetchMyMentorships]);

  return {
    mentors,
    myMentorships,
    myMentorProfile,
    loading,
    requestMentor,
    becomeMentor,
    updateMentorshipStatus,
    refresh: fetchMentors
  };
}
