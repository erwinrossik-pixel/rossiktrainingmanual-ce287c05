import { ChevronLeft, ChevronRight, CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProgressContext } from "@/contexts/ProgressContext";
import { cn } from "@/lib/utils";

// Ordered chapter list matching sidebar sections
const chapterOrder = [
  // Foundation
  { id: "intro", label: "Introduction" },
  { id: "mindset", label: "Role & Mindset" },
  { id: "soft-skills", label: "Soft Skills" },
  { id: "workflow", label: "Operational Workflow" },
  // Equipment & Handling
  { id: "vehicle", label: "Vehicle Reference" },
  { id: "loading", label: "Loading & Securing" },
  { id: "reefer", label: "Temperature Transport" },
  { id: "warehouse", label: "Warehouse & Cross-Dock" },
  { id: "adr", label: "ADR Dangerous Goods" },
  { id: "documents", label: "Transport Documents" },
  // Trade & Regulations
  { id: "incoterms", label: "Incoterms & Trade" },
  { id: "compliance", label: "Drivers' Hours" },
  { id: "driving-time", label: "Shift vs Driving Time" },
  { id: "customs", label: "Customs & Borders" },
  { id: "europe-zones", label: "European Zones" },
  { id: "environment", label: "Environmental" },
  { id: "supply-chain", label: "Supply Chain" },
  // Commercial Skills
  { id: "pricing", label: "Pricing & Tolls" },
  { id: "commercial", label: "Commercial Skills" },
  { id: "negotiation", label: "Negotiation" },
  { id: "clients", label: "Finding Clients" },
  { id: "carrier-management", label: "Carrier Management" },
  { id: "exchanges", label: "Freight Exchanges" },
  { id: "communication", label: "Communication" },
  { id: "kpi", label: "KPIs & Performance" },
  // Systems & Technology
  { id: "translogica", label: "Translogica TMS" },
  { id: "fleet", label: "Fleet & GPS" },
  { id: "technology", label: "Technology & Digital" },
  // Risk & Finance
  { id: "risk-management", label: "Risk Management" },
  { id: "insurance", label: "Transport Insurance" },
  { id: "claims", label: "Claims & Disputes" },
  { id: "payment", label: "Payment & Invoicing" },
  { id: "accounting", label: "Accounting & Finance" },
  // Practical Application
  { id: "emergency", label: "Emergency Procedures" },
  { id: "case-studies", label: "Case Studies" },
  { id: "training", label: "Training Exercises" },
  { id: "red-flags", label: "Red Flags & Tips" },
  { id: "glossary", label: "Glossary" },
  { id: "checklists", label: "Checklists" },
];

interface ChapterNavigationProps {
  activeChapter: string;
  onChapterChange: (chapterId: string) => void;
}

export function ChapterNavigation({ activeChapter, onChapterChange }: ChapterNavigationProps) {
  const { getChapterProgress, completeChapter } = useProgressContext();
  const currentIndex = chapterOrder.findIndex(c => c.id === activeChapter);
  const prevChapter = currentIndex > 0 ? chapterOrder[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapterOrder.length - 1 ? chapterOrder[currentIndex + 1] : null;
  
  const chapterProgress = getChapterProgress(activeChapter);
  const isCompleted = chapterProgress?.completed;

  const handleMarkComplete = () => {
    completeChapter(activeChapter);
  };

  return (
    <div className="mt-12 pt-8 border-t border-border space-y-6">
      {/* Mark as Complete */}
      <div className="flex items-center justify-center">
        {isCompleted ? (
          <div className="flex items-center gap-2 px-4 py-2 bg-success/10 text-success rounded-lg">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-medium">Chapter Completed</span>
            {chapterProgress?.quizScore !== undefined && (
              <span className="text-sm opacity-80">
                (Quiz: {chapterProgress.quizScore}/{chapterProgress.quizTotal})
              </span>
            )}
          </div>
        ) : (
          <Button
            variant="outline"
            onClick={handleMarkComplete}
            className="flex items-center gap-2 border-success/50 text-success hover:bg-success/10 hover:text-success"
          >
            <Circle className="w-4 h-4" />
            Mark Chapter as Complete
          </Button>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        {prevChapter ? (
          <Button
            variant="outline"
            onClick={() => onChapterChange(prevChapter.id)}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Previous</p>
              <p className="text-sm font-medium">{prevChapter.label}</p>
            </div>
          </Button>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Button
            variant="default"
            onClick={() => onChapterChange(nextChapter.id)}
            className="flex items-center gap-2"
          >
            <div className="text-right">
              <p className="text-xs text-primary-foreground/70">Next</p>
              <p className="text-sm font-medium">{nextChapter.label}</p>
            </div>
            <ChevronRight className="w-4 h-4" />
          </Button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
