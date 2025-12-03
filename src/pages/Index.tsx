import { useState, useEffect } from "react";
import { Sidebar } from "@/components/manual/Sidebar";
import { ManualContent } from "@/components/manual/ManualContent";
import { ProgressProvider, useProgressContext } from "@/contexts/ProgressContext";

function ManualApp() {
  const [activeChapter, setActiveChapter] = useState("intro");
  const { visitChapter } = useProgressContext();

  // Track chapter visits
  useEffect(() => {
    visitChapter(activeChapter);
  }, [activeChapter, visitChapter]);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeChapter={activeChapter} onChapterChange={setActiveChapter} />
      <ManualContent activeChapter={activeChapter} />
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
