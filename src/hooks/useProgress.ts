import { useState, useEffect, useCallback } from 'react';

export interface ChapterProgress {
  completed: boolean;
  quizScore?: number;
  quizTotal?: number;
  lastVisited?: string;
}

export interface ProgressData {
  chapters: Record<string, ChapterProgress>;
  totalCompleted: number;
  totalChapters: number;
}

const STORAGE_KEY = 'rossik-manual-progress';

const defaultProgress: ProgressData = {
  chapters: {},
  totalCompleted: 0,
  totalChapters: 27,
};

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(defaultProgress);

  // Load progress from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setProgress(parsed);
      } catch (e) {
        console.error('Failed to parse progress data:', e);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  const saveProgress = useCallback((newProgress: ProgressData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
    setProgress(newProgress);
  }, []);

  // Mark a chapter as visited
  const visitChapter = useCallback((chapterId: string) => {
    setProgress(prev => {
      const updated = {
        ...prev,
        chapters: {
          ...prev.chapters,
          [chapterId]: {
            ...prev.chapters[chapterId],
            lastVisited: new Date().toISOString(),
          },
        },
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  // Mark a chapter as completed (usually after passing quiz)
  const completeChapter = useCallback((chapterId: string, quizScore?: number, quizTotal?: number) => {
    setProgress(prev => {
      const wasCompleted = prev.chapters[chapterId]?.completed;
      const updated = {
        ...prev,
        chapters: {
          ...prev.chapters,
          [chapterId]: {
            ...prev.chapters[chapterId],
            completed: true,
            quizScore: quizScore ?? prev.chapters[chapterId]?.quizScore,
            quizTotal: quizTotal ?? prev.chapters[chapterId]?.quizTotal,
            lastVisited: new Date().toISOString(),
          },
        },
        totalCompleted: wasCompleted ? prev.totalCompleted : prev.totalCompleted + 1,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  // Save quiz score for a chapter
  const saveQuizScore = useCallback((chapterId: string, score: number, total: number) => {
    const passingScore = total * 0.7; // 70% to pass
    const passed = score >= passingScore;
    
    setProgress(prev => {
      const wasCompleted = prev.chapters[chapterId]?.completed;
      const shouldComplete = passed && !wasCompleted;
      
      const updated = {
        ...prev,
        chapters: {
          ...prev.chapters,
          [chapterId]: {
            ...prev.chapters[chapterId],
            completed: passed || prev.chapters[chapterId]?.completed || false,
            quizScore: score,
            quizTotal: total,
            lastVisited: new Date().toISOString(),
          },
        },
        totalCompleted: shouldComplete ? prev.totalCompleted + 1 : prev.totalCompleted,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
    
    return passed;
  }, []);

  // Get progress for a specific chapter
  const getChapterProgress = useCallback((chapterId: string): ChapterProgress | undefined => {
    return progress.chapters[chapterId];
  }, [progress]);

  // Calculate overall progress percentage
  const getOverallProgress = useCallback(() => {
    return Math.round((progress.totalCompleted / progress.totalChapters) * 100);
  }, [progress]);

  // Reset all progress
  const resetProgress = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setProgress(defaultProgress);
  }, []);

  return {
    progress,
    visitChapter,
    completeChapter,
    saveQuizScore,
    getChapterProgress,
    getOverallProgress,
    resetProgress,
  };
}
