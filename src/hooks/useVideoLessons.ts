import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { logger } from '@/utils/logger';

export interface VideoLesson {
  id: string;
  chapter_id: string;
  title: string;
  description: string | null;
  video_url: string;
  video_type: 'youtube' | 'vimeo' | 'custom';
  duration_minutes: number | null;
  order_index: number;
  is_premium: boolean;
}

export interface VideoProgress {
  video_id: string;
  watched_seconds: number;
  completed: boolean;
}

export function useVideoLessons(chapterId?: string) {
  const { user } = useAuth();
  const [videos, setVideos] = useState<VideoLesson[]>([]);
  const [progress, setProgress] = useState<Record<string, VideoProgress>>({});
  const [loading, setLoading] = useState(true);

  const fetchVideos = useCallback(async () => {
    setLoading(true);
    try {
      let query = supabase.from('video_lessons').select('*').order('order_index');
      
      if (chapterId) {
        query = query.eq('chapter_id', chapterId);
      }

      const { data } = await query;
      setVideos((data || []) as VideoLesson[]);

      if (user) {
        const videoIds = (data || []).map(v => v.id);
        if (videoIds.length > 0) {
          const { data: progressData } = await supabase
            .from('video_progress')
            .select('video_id, watched_seconds, completed')
            .eq('user_id', user.id)
            .in('video_id', videoIds);

          const progressMap: Record<string, VideoProgress> = {};
          (progressData || []).forEach(p => {
            progressMap[p.video_id] = p as VideoProgress;
          });
          setProgress(progressMap);
        }
      }
    } catch (error) {
      logger.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  }, [chapterId, user]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const updateProgress = useCallback(async (videoId: string, watchedSeconds: number, completed: boolean = false) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('video_progress')
        .upsert({
          user_id: user.id,
          video_id: videoId,
          watched_seconds: watchedSeconds,
          completed,
          last_watched_at: new Date().toISOString()
        }, { onConflict: 'user_id,video_id' });

      if (!error) {
        setProgress(prev => ({
          ...prev,
          [videoId]: { video_id: videoId, watched_seconds: watchedSeconds, completed }
        }));
      }
    } catch (error) {
      logger.error('Error updating progress:', error);
    }
  }, [user]);

  const getVideoEmbedUrl = (video: VideoLesson): string => {
    if (video.video_type === 'youtube') {
      const videoId = video.video_url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)?.[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (video.video_type === 'vimeo') {
      const videoId = video.video_url.match(/vimeo\.com\/(\d+)/)?.[1];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return video.video_url;
  };

  return {
    videos,
    progress,
    loading,
    updateProgress,
    getVideoEmbedUrl,
    refresh: fetchVideos
  };
}
