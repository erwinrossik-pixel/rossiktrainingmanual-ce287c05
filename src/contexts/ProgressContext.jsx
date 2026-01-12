import React, { createContext, useContext } from 'react';
import { useProgress } from '@/hooks/useProgress';

const ProgressContext = createContext(undefined);

export function ProgressProvider({ children }) {
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
