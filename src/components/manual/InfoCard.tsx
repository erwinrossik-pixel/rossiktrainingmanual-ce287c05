import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "default" | "highlight" | "warning" | "success" | "info";
  className?: string;
}

export function InfoCard({ title, children, icon: Icon, variant = "default", className }: InfoCardProps) {
  const variants = {
    default: "bg-card border-border",
    highlight: "bg-accent border-primary/20",
    warning: "bg-warning/5 border-warning/30",
    success: "bg-success/5 border-success/30",
    info: "bg-info/5 border-info/30",
  };

  const iconColors = {
    default: "text-primary",
    highlight: "text-primary",
    warning: "text-warning",
    success: "text-success",
    info: "text-info",
  };

  return (
    <div className={cn(
      "rounded-xl p-6 border shadow-card",
      variants[variant],
      className
    )}>
      <div className="flex items-start gap-4">
        {Icon && (
          <div className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
            variant === "default" ? "bg-primary/10" : 
            variant === "highlight" ? "bg-primary/20" :
            variant === "warning" ? "bg-warning/10" :
            variant === "success" ? "bg-success/10" : "bg-info/10"
          )}>
            <Icon className={cn("w-5 h-5", iconColors[variant])} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-2 font-serif">{title}</h3>
          <div className="text-sm text-muted-foreground space-y-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
