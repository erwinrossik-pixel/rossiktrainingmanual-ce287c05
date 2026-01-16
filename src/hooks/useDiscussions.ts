import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from './use-toast';

export interface Discussion {
  id: string;
  chapter_id: string;
  user_id: string;
  parent_id: string | null;
  content: string;
  is_pinned: boolean;
  is_resolved: boolean;
  likes_count: number;
  created_at: string;
  updated_at: string;
  profile?: {
    first_name: string | null;
    last_name: string | null;
    avatar_url: string | null;
  };
  replies?: Discussion[];
  user_liked?: boolean;
}

export function useDiscussions(chapterId: string) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDiscussions = useCallback(async () => {
    if (!chapterId) return;

    try {
      // Fetch top-level discussions
      const { data: discussionData, error } = await supabase
        .from('chapter_discussions')
        .select('*')
        .eq('chapter_id', chapterId)
        .is('parent_id', null)
        .order('is_pinned', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Get user IDs for profiles
      const userIds = [...new Set(discussionData?.map(d => d.user_id) || [])];
      
      // Fetch profiles
      const { data: profiles } = await supabase
        .from('profiles')
        .select('id, first_name, last_name, avatar_url')
        .in('id', userIds);

      // Fetch replies
      const discussionIds = discussionData?.map(d => d.id) || [];
      const { data: replies } = await supabase
        .from('chapter_discussions')
        .select('*')
        .in('parent_id', discussionIds)
        .order('created_at', { ascending: true });

      // Get reply user profiles
      const replyUserIds = [...new Set(replies?.map(r => r.user_id) || [])];
      const { data: replyProfiles } = await supabase
        .from('profiles')
        .select('id, first_name, last_name, avatar_url')
        .in('id', replyUserIds);

      // Check user likes
      let userLikes: string[] = [];
      if (user) {
        const allDiscussionIds = [...discussionIds, ...(replies?.map(r => r.id) || [])];
        const { data: likesData } = await supabase
          .from('discussion_likes')
          .select('discussion_id')
          .eq('user_id', user.id)
          .in('discussion_id', allDiscussionIds);
        userLikes = likesData?.map(l => l.discussion_id) || [];
      }

      // Enrich discussions with profiles and replies
      const enrichedDiscussions: Discussion[] = (discussionData || []).map(d => ({
        ...d,
        profile: profiles?.find(p => p.id === d.user_id),
        user_liked: userLikes.includes(d.id),
        replies: (replies || [])
          .filter(r => r.parent_id === d.id)
          .map(r => ({
            ...r,
            profile: replyProfiles?.find(p => p.id === r.user_id),
            user_liked: userLikes.includes(r.id),
            replies: []
          }))
      }));

      setDiscussions(enrichedDiscussions);
    } catch (error) {
      console.error('Error fetching discussions:', error);
    } finally {
      setLoading(false);
    }
  }, [chapterId, user]);

  useEffect(() => {
    fetchDiscussions();
  }, [fetchDiscussions]);

  const addDiscussion = useCallback(async (content: string, parentId?: string) => {
    if (!user || !chapterId) {
      toast({
        title: 'Trebuie să fii autentificat',
        variant: 'destructive'
      });
      return null;
    }

    try {
      const { data, error } = await supabase
        .from('chapter_discussions')
        .insert({
          chapter_id: chapterId,
          user_id: user.id,
          parent_id: parentId || null,
          content
        })
        .select()
        .single();

      if (error) throw error;

      await fetchDiscussions();
      toast({
        title: parentId ? 'Răspuns adăugat' : 'Comentariu adăugat',
      });
      return data;
    } catch (error) {
      console.error('Error adding discussion:', error);
      toast({
        title: 'Eroare la adăugare',
        variant: 'destructive'
      });
      return null;
    }
  }, [user, chapterId, fetchDiscussions, toast]);

  const toggleLike = useCallback(async (discussionId: string) => {
    if (!user) {
      toast({
        title: 'Trebuie să fii autentificat',
        variant: 'destructive'
      });
      return;
    }

    try {
      // Check if already liked
      const { data: existing } = await supabase
        .from('discussion_likes')
        .select('id')
        .eq('discussion_id', discussionId)
        .eq('user_id', user.id)
        .single();

      if (existing) {
        // Unlike
        await supabase
          .from('discussion_likes')
          .delete()
          .eq('id', existing.id);

        // Update count directly
        const { data: currentDiscussion } = await supabase
          .from('chapter_discussions')
          .select('likes_count')
          .eq('id', discussionId)
          .single();
        
        await supabase
          .from('chapter_discussions')
          .update({ likes_count: Math.max(0, (currentDiscussion?.likes_count || 1) - 1) })
          .eq('id', discussionId);
      } else {
        // Like
        await supabase
          .from('discussion_likes')
          .insert({
            discussion_id: discussionId,
            user_id: user.id
          });

        // Update count directly
        const { data: currentDiscussion } = await supabase
          .from('chapter_discussions')
          .select('likes_count')
          .eq('id', discussionId)
          .single();
        
        await supabase
          .from('chapter_discussions')
          .update({ likes_count: (currentDiscussion?.likes_count || 0) + 1 })
          .eq('id', discussionId);
      }

      await fetchDiscussions();
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  }, [user, fetchDiscussions, toast]);

  const deleteDiscussion = useCallback(async (discussionId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('chapter_discussions')
        .delete()
        .eq('id', discussionId)
        .eq('user_id', user.id);

      if (error) throw error;

      await fetchDiscussions();
      toast({ title: 'Comentariu șters' });
    } catch (error) {
      console.error('Error deleting discussion:', error);
    }
  }, [user, fetchDiscussions, toast]);

  return {
    discussions,
    loading,
    addDiscussion,
    toggleLike,
    deleteDiscussion,
    refresh: fetchDiscussions
  };
}
