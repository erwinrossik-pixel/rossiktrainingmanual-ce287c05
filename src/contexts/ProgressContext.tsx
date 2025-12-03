import React, { createContext, useContext, ReactNode } from 'react';
import { useProgress, ProgressData, ChapterProgress } from '@/hooks/useProgress';

interface ProgressContextType {
  progress: ProgressData;
  visitChapter: (chapterId: string) => void;
  completeChapter: (chapterId: string, quizScore?: number, quizTotal?: number) => void;
  saveQuizScore: (chapterId: string, score: number, total: number) => boolean;
  getChapterProgress: (chapterId: string) => ChapterProgress | undefined;
  getOverallProgress: () => number;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const progressData = useProgress();

  return (
    <ProgressContext.Provider value={progressData}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgressContext() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgressContext must be used within a ProgressProvider');
  }
  return context;
}
