import { ChevronLeft, ChevronRight, CheckCircle2, Circle, Sparkles } from "lucide-react";
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

export function ChapterNavigation({ activeChapter, onChapterChange }) {
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
    <div className="mt-16 pt-10 border-t border-border/50 space-y-8">
      {/* Mark as Complete */}
      <div className="flex items-center justify-center">
        {isCompleted ? (
          <div className="flex items-center gap-3 px-6 py-3 bg-success/10 text-success rounded-2xl border border-success/20 shadow-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-semibold">Chapter Completed</span>
            {chapterProgress?.quizScore !== undefined && (
              <span className="text-sm opacity-80 bg-success/20 px-2 py-0.5 rounded-full">
                Quiz: {chapterProgress.quizScore}/{chapterProgress.quizTotal}
              </span>
            )}
          </div>
        ) : (
          <Button
            variant="outline"
            size="lg"
            onClick={handleMarkComplete}
            className="flex items-center gap-3 border-success/30 text-success hover:bg-success/10 hover:text-success hover:border-success/50 rounded-xl shadow-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4" />
            Mark Chapter as Complete
          </Button>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4">
        {prevChapter ? (
          <Button
            variant="outline"
            size="lg"
            onClick={() => onChapterChange(prevChapter.id)}
            className="flex items-center gap-3 px-5 py-6 rounded-xl border-border/50 hover:bg-muted/50 hover:border-primary/20 transition-all duration-200 group"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground font-medium">Previous</p>
              <p className="text-sm font-semibold text-foreground">{prevChapter.label}</p>
            </div>
          </Button>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Button
            size="lg"
            onClick={() => onChapterChange(nextChapter.id)}
            className="flex items-center gap-3 px-5 py-6 rounded-xl bg-gradient-to-r from-primary to-rossik-dark hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 group"
          >
            <div className="text-right">
              <p className="text-xs text-primary-foreground/70 font-medium">Next Chapter</p>
              <p className="text-sm font-semibold text-primary-foreground">{nextChapter.label}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-primary-foreground group-hover:translate-x-0.5 transition-transform" />
          </Button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
