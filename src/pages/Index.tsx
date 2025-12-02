import { useState } from "react";
import { Sidebar } from "@/components/manual/Sidebar";
import { ManualContent } from "@/components/manual/ManualContent";

const Index = () => {
  const [activeChapter, setActiveChapter] = useState("intro");

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeChapter={activeChapter} onChapterChange={setActiveChapter} />
      <ManualContent activeChapter={activeChapter} />
    </div>
  );
};

export default Index;
