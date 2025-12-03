import { useState, useEffect } from "react";
import { Sidebar } from "@/components/manual/Sidebar";
import { ManualContent } from "@/components/manual/ManualContent";
import { ProgressDashboard } from "@/components/manual/ProgressDashboard";
import { ProgressProvider, useProgressContext } from "@/contexts/ProgressContext";

function ManualApp() {
  const [activeChapter, setActiveChapter] = useState("intro");
  const [showDashboard, setShowDashboard] = useState(false);
  const { visitChapter } = useProgressContext();

  // Track chapter visits
  useEffect(() => {
    if (!showDashboard) {
      visitChapter(activeChapter);
    }
  }, [activeChapter, visitChapter, showDashboard]);

  const handleNavigateFromDashboard = (chapterId: string) => {
    setActiveChapter(chapterId);
    setShowDashboard(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar 
        activeChapter={activeChapter} 
        onChapterChange={(chapter) => {
          setActiveChapter(chapter);
          setShowDashboard(false);
        }}
        onShowDashboard={() => setShowDashboard(true)}
      />
      {showDashboard ? (
        <main className="lg:ml-72 min-h-screen p-6 lg:p-8">
          <ProgressDashboard 
            onNavigate={handleNavigateFromDashboard}
            onClose={() => setShowDashboard(false)}
          />
        </main>
      ) : (
        <ManualContent activeChapter={activeChapter} />
      )}
    </div>
  );
}

const Index = () => {
  return (
    <ProgressProvider>
      <ManualApp />
    </ProgressProvider>
  );
};

export default Index;
