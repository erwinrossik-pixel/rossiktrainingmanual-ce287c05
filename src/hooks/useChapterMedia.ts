import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useLanguage } from '@/contexts/LanguageContext';

export interface ChapterMedia {
  id: string;
  chapter_id: string;
  media_type: 'video_script' | 'audio_summary' | 'diagram' | 'infographic';
  language: string;
  title: string;
  content: VideoScriptContent | AudioSummaryContent | DiagramContent;
  duration_estimate: number | null;
  order_index: number;
}

export interface VideoScriptContent {
  scenes: Array<{
    title: string;
    duration: number;
    narration: string;
    visuals: string;
  }>;
}

export interface AudioSummaryContent {
  text: string;
  voice?: string;
}

export interface DiagramContent {
  type: 'flowchart' | 'mindmap' | 'diagram' | 'sequence';
  mermaid: string;
}

export interface MediaProgress {
  media_id: string;
  progress_percent: number;
  completed: boolean;
  last_position: number;
}

export function useChapterMedia(chapterId: string) {
  const { user } = useAuth();
  const { language } = useLanguage();
  const [media, setMedia] = useState<ChapterMedia[]>([]);
  const [progress, setProgress] = useState<Record<string, MediaProgress>>({});
  const [loading, setLoading] = useState(true);

  const fetchMedia = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch media for chapter in current language, fallback to 'ro'
      let { data } = await supabase
        .from('chapter_media')
        .select('*')
        .eq('chapter_id', chapterId)
        .eq('language', language)
        .eq('is_active', true)
        .order('order_index');

      // Fallback to Romanian if no content in current language
      if (!data || data.length === 0) {
        const fallback = await supabase
          .from('chapter_media')
          .select('*')
          .eq('chapter_id', chapterId)
          .eq('language', 'ro')
          .eq('is_active', true)
          .order('order_index');
        data = fallback.data;
      }

      const typedMedia = (data || []).map(item => ({
        ...item,
        content: item.content as unknown as ChapterMedia['content']
      })) as ChapterMedia[];

      setMedia(typedMedia);

      // Fetch progress if user logged in
      if (user && typedMedia.length > 0) {
        const mediaIds = typedMedia.map(m => m.id);
        const { data: progressData } = await supabase
          .from('media_progress')
          .select('*')
          .eq('user_id', user.id)
          .in('media_id', mediaIds);

        const progressMap: Record<string, MediaProgress> = {};
        (progressData || []).forEach(p => {
          progressMap[p.media_id] = {
            media_id: p.media_id,
            progress_percent: p.progress_percent || 0,
            completed: p.completed || false,
            last_position: p.last_position || 0
          };
        });
        setProgress(progressMap);
      }
    } catch (error) {
      console.error('Error fetching chapter media:', error);
    } finally {
      setLoading(false);
    }
  }, [chapterId, language, user]);

  useEffect(() => {
    fetchMedia();
  }, [fetchMedia]);

  const updateProgress = useCallback(async (
    mediaId: string, 
    progressPercent: number,
    lastPosition?: number
  ) => {
    if (!user) return;

    const completed = progressPercent >= 90;

    try {
      await supabase
        .from('media_progress')
        .upsert({
          user_id: user.id,
          media_id: mediaId,
          progress_percent: progressPercent,
          completed,
          completed_at: completed ? new Date().toISOString() : null,
          last_position: lastPosition || 0,
          updated_at: new Date().toISOString()
        }, { onConflict: 'user_id,media_id' });

      setProgress(prev => ({
        ...prev,
        [mediaId]: {
          media_id: mediaId,
          progress_percent: progressPercent,
          completed,
          last_position: lastPosition || 0
        }
      }));
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  }, [user]);

  const videoScripts = media.filter(m => m.media_type === 'video_script');
  const audioSummaries = media.filter(m => m.media_type === 'audio_summary');
  const diagrams = media.filter(m => m.media_type === 'diagram');

  return {
    media,
    videoScripts,
    audioSummaries,
    diagrams,
    progress,
    loading,
    updateProgress,
    refresh: fetchMedia
  };
}
