import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { logger } from '@/utils/logger';

export interface BookmarkedQuestion {
  id: string;
  user_id: string;
  chapter_id: string;
  question_text: string;
  options: string[];
  correct_index: number;
  correct_answer: string;
  explanation: string;
  notes: string | null;
  bookmarked_at: string;
}

export function useBookmarks() {
  const { user } = useAuth();
  const { language } = useLanguage();
  const [bookmarks, setBookmarks] = useState<BookmarkedQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [bookmarkedQuestionTexts, setBookmarkedQuestionTexts] = useState<Set<string>>(new Set());

  const labels = {
    bookmarkAdded: language === 'ro' ? 'Întrebare salvată!' : language === 'de' ? 'Frage gespeichert!' : 'Question bookmarked!',
    bookmarkRemoved: language === 'ro' ? 'Bookmark șters' : language === 'de' ? 'Lesezeichen entfernt' : 'Bookmark removed',
    error: language === 'ro' ? 'Eroare' : language === 'de' ? 'Fehler' : 'Error',
    loginRequired: language === 'ro' ? 'Autentifică-te pentru a salva întrebări' : language === 'de' ? 'Melden Sie sich an, um Fragen zu speichern' : 'Log in to save questions',
  };

  // Fetch all bookmarks for current user
  const fetchBookmarks = useCallback(async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('bookmarked_questions')
        .select('*')
        .eq('user_id', user.id)
        .order('bookmarked_at', { ascending: false });

      if (error) throw error;

      const formattedData = (data || []).map(item => ({
        ...item,
        options: item.options as string[]
      }));

      setBookmarks(formattedData);
      setBookmarkedQuestionTexts(new Set(formattedData.map(b => `${b.chapter_id}:${b.question_text}`)));
    } catch (error) {
      logger.error('Error fetching bookmarks:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchBookmarks();
  }, [fetchBookmarks]);

  // Check if a question is bookmarked
  const isBookmarked = useCallback((chapterId: string, questionText: string): boolean => {
    return bookmarkedQuestionTexts.has(`${chapterId}:${questionText}`);
  }, [bookmarkedQuestionTexts]);

  // Add a bookmark
  const addBookmark = useCallback(async (
    chapterId: string,
    questionText: string,
    options: string[],
    correctIndex: number,
    explanation: string
  ): Promise<boolean> => {
    if (!user) {
      toast({
        title: labels.loginRequired,
        variant: "destructive",
      });
      return false;
    }

    try {
      const { error } = await supabase
        .from('bookmarked_questions')
        .insert({
          user_id: user.id,
          chapter_id: chapterId,
          question_text: questionText,
          options: options,
          correct_index: correctIndex,
          correct_answer: options[correctIndex],
          explanation: explanation,
        });

      if (error) {
        if (error.code === '23505') {
          // Already bookmarked
          return true;
        }
        throw error;
      }

      toast({
        title: labels.bookmarkAdded,
      });

      // Update local state
      setBookmarkedQuestionTexts(prev => new Set([...prev, `${chapterId}:${questionText}`]));
      await fetchBookmarks();
      return true;
    } catch (error) {
      logger.error('Error adding bookmark:', error);
      toast({
        title: labels.error,
        variant: "destructive",
      });
      return false;
    }
  }, [user, fetchBookmarks, labels]);

  // Remove a bookmark
  const removeBookmark = useCallback(async (chapterId: string, questionText: string): Promise<boolean> => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('bookmarked_questions')
        .delete()
        .eq('user_id', user.id)
        .eq('chapter_id', chapterId)
        .eq('question_text', questionText);

      if (error) throw error;

      toast({
        title: labels.bookmarkRemoved,
      });

      // Update local state
      setBookmarkedQuestionTexts(prev => {
        const newSet = new Set(prev);
        newSet.delete(`${chapterId}:${questionText}`);
        return newSet;
      });
      await fetchBookmarks();
      return true;
    } catch (error) {
      logger.error('Error removing bookmark:', error);
      return false;
    }
  }, [user, fetchBookmarks, labels]);

  // Toggle bookmark
  const toggleBookmark = useCallback(async (
    chapterId: string,
    questionText: string,
    options: string[],
    correctIndex: number,
    explanation: string
  ): Promise<boolean> => {
    if (isBookmarked(chapterId, questionText)) {
      return removeBookmark(chapterId, questionText);
    } else {
      return addBookmark(chapterId, questionText, options, correctIndex, explanation);
    }
  }, [isBookmarked, addBookmark, removeBookmark]);

  // Update notes for a bookmark
  const updateNotes = useCallback(async (bookmarkId: string, notes: string): Promise<boolean> => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('bookmarked_questions')
        .update({ notes })
        .eq('id', bookmarkId)
        .eq('user_id', user.id);

      if (error) throw error;

      await fetchBookmarks();
      return true;
    } catch (error) {
      logger.error('Error updating notes:', error);
      return false;
    }
  }, [user, fetchBookmarks]);

  // Get bookmarks by chapter
  const getBookmarksByChapter = useCallback((chapterId: string): BookmarkedQuestion[] => {
    return bookmarks.filter(b => b.chapter_id === chapterId);
  }, [bookmarks]);

  return {
    bookmarks,
    loading,
    isBookmarked,
    addBookmark,
    removeBookmark,
    toggleBookmark,
    updateNotes,
    getBookmarksByChapter,
    refetch: fetchBookmarks,
  };
}
