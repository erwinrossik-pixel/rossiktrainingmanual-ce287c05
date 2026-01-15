import { useState, useEffect, useCallback } from "react";
import { Sidebar } from "@/components/manual/Sidebar";
import { ManualContent } from "@/components/manual/ManualContent";
import { ProgressDashboard } from "@/components/manual/ProgressDashboard";
import { ProgressProvider, useProgressContext } from "@/contexts/ProgressContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useAnalytics } from "@/hooks/useAnalytics";
import { AppHeader } from "@/components/layout/AppHeader";

function ManualApp() {
  const [activeChapter, setActiveChapter] = useState("intro");
  const [showDashboard, setShowDashboard] = useState(false);
  const { visitChapter } = useProgressContext();
  const { trackChapterVisit } = useAnalytics();
  const lastTrackedChapter = useState<string>("");

  // Memoized chapter change handler
  const handleChapterChange = useCallback((chapter: string) => {
    setActiveChapter(chapter);
    setShowDashboard(false);
  }, []);

  // Memoized dashboard handlers
  const handleShowDashboard = useCallback(() => setShowDashboard(true), []);
  const handleCloseDashboard = useCallback(() => setShowDashboard(false), []);

  const handleNavigateFromDashboard = useCallback((chapterId: string) => {
    setActiveChapter(chapterId);
    setShowDashboard(false);
  }, []);

  // Track chapter visits - only when chapter actually changes
  useEffect(() => {
    if (!showDashboard && activeChapter !== lastTrackedChapter[0]) {
      visitChapter(activeChapter);
      trackChapterVisit(activeChapter);
      lastTrackedChapter[0] = activeChapter;
    }
  }, [activeChapter, showDashboard]);

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <AppHeader />
      
      <Sidebar 
        activeChapter={activeChapter} 
        onChapterChange={handleChapterChange}
        onShowDashboard={handleShowDashboard}
      />
      {showDashboard ? (
        <main className="lg:ml-72 min-h-screen pt-16 p-6 lg:p-10">
          <ProgressDashboard 
            onNavigate={handleNavigateFromDashboard}
            onClose={handleCloseDashboard}
          />
        </main>
      ) : (
        <ManualContent activeChapter={activeChapter} onChapterChange={handleChapterChange} />
      )}
    </div>
  );
}

const Index = () => {
  return (
    <LanguageProvider>
      <ProgressProvider>
        <ManualApp />
      </ProgressProvider>
    </LanguageProvider>
  );
};

export default Index;
