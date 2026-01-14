import { TrendingUp, TrendingDown, Minus, Zap, Clock } from "lucide-react";
import { useTrainingTimer } from "@/hooks/useTrainingTimer";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const translations = {
  ro: {
    title: "Eficiența Învățării",
    noData: "Încă nu ai timp înregistrat",
    phase: "Faza",
    recommended: "Recomandat",
    actual: "Timp real",
    efficiency: "Eficiență",
    faster: "Mai rapid",
    slower: "Mai lent",
    onTrack: "Pe drumul bun",
    overallEfficiency: "Eficiență Globală",
    phasesCompleted: "faze cu timp înregistrat",
    excellent: "Excelent",
    good: "Bun",
    average: "Mediu",
    needsWork: "Necesită atenție",
    phase1: "Fundamente",
    phase2: "Echipament",
    phase3: "Comercial",
    phase4: "Tehnologie",
    phase5: "Practică",
  },
  de: {
    title: "Lerneffizienz",
    noData: "Noch keine Zeit erfasst",
    phase: "Phase",
    recommended: "Empfohlen",
    actual: "Tatsächliche Zeit",
    efficiency: "Effizienz",
    faster: "Schneller",
    slower: "Langsamer",
    onTrack: "Auf Kurs",
    overallEfficiency: "Gesamteffizienz",
    phasesCompleted: "Phasen mit erfasster Zeit",
    excellent: "Ausgezeichnet",
    good: "Gut",
    average: "Durchschnitt",
    needsWork: "Braucht Aufmerksamkeit",
    phase1: "Grundlagen",
    phase2: "Ausrüstung",
    phase3: "Kommerziell",
    phase4: "Technologie",
    phase5: "Praktisch",
  },
  en: {
    title: "Learning Efficiency",
    noData: "No time recorded yet",
    phase: "Phase",
    recommended: "Recommended",
    actual: "Actual time",
    efficiency: "Efficiency",
    faster: "Faster",
    slower: "Slower",
    onTrack: "On track",
    overallEfficiency: "Overall Efficiency",
    phasesCompleted: "phases with recorded time",
    excellent: "Excellent",
    good: "Good",
    average: "Average",
    needsWork: "Needs attention",
    phase1: "Foundations",
    phase2: "Equipment",
    phase3: "Commercial",
    phase4: "Technology",
    phase5: "Practical",
  },
};

const TARGET_HOURS_PER_PHASE = 8;
const TARGET_SECONDS_PER_PHASE = TARGET_HOURS_PER_PHASE * 3600;

interface PhaseEfficiency {
  phase: number;
  name: string;
  actualSeconds: number;
  targetSeconds: number;
  efficiencyPercent: number;
  status: "faster" | "slower" | "onTrack" | "noData";
}

export function EfficiencyIndicator() {
  const { language } = useLanguage();
  const { getDayTime, getTotalTime, formatTime } = useTrainingTimer();

  const t = translations[language] || translations.en;
  const totalTime = getTotalTime();

  const phaseNames = [t.phase1, t.phase2, t.phase3, t.phase4, t.phase5];

  const phases: PhaseEfficiency[] = [1, 2, 3, 4, 5].map((phase) => {
    const actualSeconds = getDayTime(phase);
    const targetSeconds = TARGET_SECONDS_PER_PHASE;

    let efficiencyPercent = 0;
    let status: PhaseEfficiency["status"] = "noData";

    if (actualSeconds > 0) {
      // Efficiency = (target / actual) * 100
      // > 100% means faster than expected
      // < 100% means slower than expected
      efficiencyPercent = Math.round((targetSeconds / actualSeconds) * 100);

      if (efficiencyPercent > 110) {
        status = "faster";
      } else if (efficiencyPercent < 90) {
        status = "slower";
      } else {
        status = "onTrack";
      }
    }

    return {
      phase,
      name: phaseNames[phase - 1],
      actualSeconds,
      targetSeconds,
      efficiencyPercent,
      status,
    };
  });

  const activePhasesCount = phases.filter((p) => p.actualSeconds > 0).length;
  const overallEfficiency =
    activePhasesCount > 0
      ? Math.round(
          phases
            .filter((p) => p.actualSeconds > 0)
            .reduce((sum, p) => sum + p.efficiencyPercent, 0) / activePhasesCount
        )
      : 0;

  const getEfficiencyLabel = (efficiency: number): string => {
    if (efficiency >= 120) return t.excellent;
    if (efficiency >= 100) return t.good;
    if (efficiency >= 80) return t.average;
    return t.needsWork;
  };

  const getEfficiencyColor = (efficiency: number): string => {
    if (efficiency >= 120) return "text-success";
    if (efficiency >= 100) return "text-primary";
    if (efficiency >= 80) return "text-warning";
    return "text-destructive";
  };

  const getStatusIcon = (status: PhaseEfficiency["status"]) => {
    switch (status) {
      case "faster":
        return <TrendingUp className="w-4 h-4 text-success" />;
      case "slower":
        return <TrendingDown className="w-4 h-4 text-warning" />;
      case "onTrack":
        return <Minus className="w-4 h-4 text-primary" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusText = (status: PhaseEfficiency["status"]) => {
    switch (status) {
      case "faster":
        return t.faster;
      case "slower":
        return t.slower;
      case "onTrack":
        return t.onTrack;
      default:
        return "-";
    }
  };

  if (totalTime === 0) {
    return (
      <div className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-sm">{t.title}</h3>
        </div>
        <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
          {t.noData}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-sm">{t.title}</h3>
        </div>
        {activePhasesCount > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">
              {t.overallEfficiency}:
            </span>
            <span
              className={cn(
                "text-lg font-bold",
                getEfficiencyColor(overallEfficiency)
              )}
            >
              {overallEfficiency}%
            </span>
          </div>
        )}
      </div>

      {/* Overall status badge */}
      {activePhasesCount > 0 && (
        <div className="mb-4 p-3 bg-muted/50 rounded-lg flex items-center justify-between">
          <div>
            <span
              className={cn(
                "text-sm font-medium",
                getEfficiencyColor(overallEfficiency)
              )}
            >
              {getEfficiencyLabel(overallEfficiency)}
            </span>
            <p className="text-xs text-muted-foreground mt-0.5">
              {activePhasesCount} {t.phasesCompleted}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">{t.recommended}</p>
            <p className="text-sm font-mono">
              {activePhasesCount * TARGET_HOURS_PER_PHASE}h
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">{t.actual}</p>
            <p className="text-sm font-mono">{formatTime(totalTime)}</p>
          </div>
        </div>
      )}

      {/* Phase breakdown */}
      <div className="space-y-2">
        {phases.map((phase) => (
          <div
            key={phase.phase}
            className={cn(
              "flex items-center gap-3 p-2.5 rounded-lg transition-colors",
              phase.actualSeconds > 0
                ? "bg-muted/30 hover:bg-muted/50"
                : "opacity-50"
            )}
          >
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
              {phase.phase}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{phase.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-muted-foreground font-mono">
                  {formatTime(phase.actualSeconds)}
                </span>
                <span className="text-xs text-muted-foreground">/</span>
                <span className="text-xs text-muted-foreground font-mono">
                  {TARGET_HOURS_PER_PHASE}h
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {getStatusIcon(phase.status)}
              <span
                className={cn(
                  "text-xs font-medium min-w-[50px] text-right",
                  phase.status === "faster" && "text-success",
                  phase.status === "slower" && "text-warning",
                  phase.status === "onTrack" && "text-primary",
                  phase.status === "noData" && "text-muted-foreground"
                )}
              >
                {getStatusText(phase.status)}
              </span>
            </div>

            {phase.actualSeconds > 0 && (
              <div
                className={cn(
                  "text-sm font-bold min-w-[50px] text-right",
                  getEfficiencyColor(phase.efficiencyPercent)
                )}
              >
                {phase.efficiencyPercent}%
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 mt-4 pt-3 border-t border-border text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <TrendingUp className="w-3 h-3 text-success" />
          <span>&gt;110%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Minus className="w-3 h-3 text-primary" />
          <span>90-110%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <TrendingDown className="w-3 h-3 text-warning" />
          <span>&lt;90%</span>
        </div>
      </div>
    </div>
  );
}
