import { cn } from "@/lib/utils";
import { ArrowDown, ArrowRight } from "lucide-react";

const colorMap = {
  primary: "bg-primary text-primary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  destructive: "bg-destructive text-destructive-foreground",
  info: "bg-info text-info-foreground",
};

const borderColorMap = {
  primary: "border-primary/30",
  success: "border-success/30",
  warning: "border-warning/30",
  destructive: "border-destructive/30",
  info: "border-info/30",
};

export function FlowDiagram({ title, steps, direction = "horizontal", className }) {
  const isHorizontal = direction === "horizontal";

  return (
    <div className={cn("bg-card border border-border rounded-xl p-6", className)}>
      <h3 className="text-lg font-semibold mb-6 text-center">{title}</h3>
      <div
        className={cn(
          "flex items-center justify-center gap-2",
          isHorizontal ? "flex-wrap" : "flex-col"
        )}
      >
        {steps.map((step, index) => (
          <div key={step.id} className={cn("flex items-center gap-2", isHorizontal ? "" : "flex-col")}>
            <div
              className={cn(
                "flex flex-col items-center p-4 rounded-xl border-2 min-w-[140px] transition-all hover:scale-105",
                borderColorMap[step.color || "primary"]
              )}
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-2",
                  colorMap[step.color || "primary"]
                )}
              >
                {index + 1}
              </div>
              <span className="font-semibold text-sm text-center">{step.label}</span>
              {step.description && (
                <span className="text-xs text-muted-foreground text-center mt-1 max-w-[120px]">
                  {step.description}
                </span>
              )}
            </div>
            {index < steps.length - 1 && (
              isHorizontal ? (
                <ArrowRight className="w-6 h-6 text-muted-foreground flex-shrink-0" />
              ) : (
                <ArrowDown className="w-6 h-6 text-muted-foreground flex-shrink-0" />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function DecisionDiagram({ title, question, yesPath, noPath, className }) {
  return (
    <div className={cn("bg-card border border-border rounded-xl p-6", className)}>
      <h3 className="text-lg font-semibold mb-6 text-center">{title}</h3>
      <div className="flex flex-col items-center">
        {/* Decision diamond */}
        <div className="w-48 h-24 bg-warning/10 border-2 border-warning/30 rotate-0 flex items-center justify-center rounded-lg">
          <span className="text-sm font-medium text-center px-2">{question}</span>
        </div>
        
        {/* Branches */}
        <div className="flex gap-8 mt-4">
          {/* Yes branch */}
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold text-success mb-2">DA ✓</span>
            <ArrowDown className="w-5 h-5 text-success mb-2" />
            <div className="p-3 bg-success/10 border border-success/30 rounded-lg text-center">
              <span className="text-xs font-medium">{yesPath.label}</span>
              <p className="text-xs text-muted-foreground mt-1">{yesPath.result}</p>
            </div>
          </div>
          
          {/* No branch */}
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold text-destructive mb-2">NU ✗</span>
            <ArrowDown className="w-5 h-5 text-destructive mb-2" />
            <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-center">
              <span className="text-xs font-medium">{noPath.label}</span>
              <p className="text-xs text-muted-foreground mt-1">{noPath.result}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProcessMap({ title, phases, className }) {
  return (
    <div className={cn("bg-card border border-border rounded-xl p-6", className)}>
      <h3 className="text-lg font-semibold mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={cn(
              "p-4 rounded-xl border-2",
              borderColorMap[phase.color]
            )}
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm",
                  colorMap[phase.color]
                )}
              >
                {index + 1}
              </div>
              <span className="font-semibold">{phase.name}</span>
            </div>
            <ul className="space-y-1.5">
              {phase.steps.map((step, stepIndex) => (
                <li key={stepIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className={cn("w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0", colorMap[phase.color].split(" ")[0])} />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
