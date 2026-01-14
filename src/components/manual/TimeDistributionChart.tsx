import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Clock } from "lucide-react";
import { useTrainingTimer } from "@/hooks/useTrainingTimer";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const translations = {
  ro: {
    title: "Distribuția Timpului pe Faze",
    noData: "Încă nu ai înregistrat timp de învățare",
    phase: "Faza",
    hours: "ore",
    minutes: "minute",
    total: "Total",
    target: "Obiectiv: ~8h/fază",
    phase1: "F1",
    phase2: "F2",
    phase3: "F3",
    phase4: "F4",
    phase5: "F5",
    phase1Full: "Fundamente",
    phase2Full: "Echipament",
    phase3Full: "Comercial",
    phase4Full: "Tehnologie",
    phase5Full: "Practică",
  },
  de: {
    title: "Zeitverteilung nach Phasen",
    noData: "Noch keine Lernzeit erfasst",
    phase: "Phase",
    hours: "Stunden",
    minutes: "Minuten",
    total: "Gesamt",
    target: "Ziel: ~8h/Phase",
    phase1: "P1",
    phase2: "P2",
    phase3: "P3",
    phase4: "P4",
    phase5: "P5",
    phase1Full: "Grundlagen",
    phase2Full: "Ausrüstung",
    phase3Full: "Kommerziell",
    phase4Full: "Technologie",
    phase5Full: "Praktisch",
  },
  en: {
    title: "Time Distribution by Phase",
    noData: "No learning time recorded yet",
    phase: "Phase",
    hours: "hours",
    minutes: "minutes",
    total: "Total",
    target: "Target: ~8h/phase",
    phase1: "P1",
    phase2: "P2",
    phase3: "P3",
    phase4: "P4",
    phase5: "P5",
    phase1Full: "Foundations",
    phase2Full: "Equipment",
    phase3Full: "Commercial",
    phase4Full: "Technology",
    phase5Full: "Practical",
  },
};

const TARGET_HOURS = 8;

export function TimeDistributionChart() {
  const { language } = useLanguage();
  const { getDayTime, getTotalTime, formatTime } = useTrainingTimer();
  
  const t = translations[language] || translations.en;
  const totalTime = getTotalTime();

  const chartData = [
    { 
      phase: 1, 
      name: t.phase1, 
      fullName: t.phase1Full,
      hours: getDayTime(1) / 3600, 
      seconds: getDayTime(1),
      target: TARGET_HOURS 
    },
    { 
      phase: 2, 
      name: t.phase2, 
      fullName: t.phase2Full,
      hours: getDayTime(2) / 3600, 
      seconds: getDayTime(2),
      target: TARGET_HOURS 
    },
    { 
      phase: 3, 
      name: t.phase3, 
      fullName: t.phase3Full,
      hours: getDayTime(3) / 3600, 
      seconds: getDayTime(3),
      target: TARGET_HOURS 
    },
    { 
      phase: 4, 
      name: t.phase4, 
      fullName: t.phase4Full,
      hours: getDayTime(4) / 3600, 
      seconds: getDayTime(4),
      target: TARGET_HOURS 
    },
    { 
      phase: 5, 
      name: t.phase5, 
      fullName: t.phase5Full,
      hours: getDayTime(5) / 3600, 
      seconds: getDayTime(5),
      target: TARGET_HOURS 
    },
  ];

  const getBarColor = (hours: number): string => {
    if (hours >= TARGET_HOURS) return "hsl(var(--success))";
    if (hours >= TARGET_HOURS * 0.5) return "hsl(var(--primary))";
    if (hours > 0) return "hsl(var(--warning, 38 92% 50%))";
    return "hsl(var(--muted))";
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-popover border border-border rounded-lg shadow-lg p-3 text-sm">
          <p className="font-semibold text-foreground">
            {t.phase} {data.phase}: {data.fullName}
          </p>
          <p className="text-muted-foreground mt-1">
            {formatTime(data.seconds)}
          </p>
          <div className="mt-2 text-xs text-muted-foreground">
            {data.hours >= TARGET_HOURS ? (
              <span className="text-success">✓ {t.target}</span>
            ) : (
              <span>{Math.round((data.hours / TARGET_HOURS) * 100)}% {t.target.toLowerCase()}</span>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  if (totalTime === 0) {
    return (
      <div className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-primary" />
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
          <Clock className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-sm">{t.title}</h3>
        </div>
        <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md font-mono">
          {t.total}: {formatTime(totalTime)}
        </div>
      </div>

      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}h`}
              domain={[0, Math.max(TARGET_HOURS, ...chartData.map(d => d.hours)) * 1.1]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted))', opacity: 0.3 }} />
            <Bar 
              dataKey="hours" 
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.hours)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Target line indicator */}
      <div className="flex items-center justify-center gap-4 mt-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-success" />
          <span>≥ 8h</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-primary" />
          <span>4-8h</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'hsl(38 92% 50%)' }} />
          <span>&lt; 4h</span>
        </div>
      </div>
    </div>
  );
}
