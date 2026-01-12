import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "info" | "success" | "warning" | "primary";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-muted text-muted-foreground",
    info: "badge-info",
    success: "badge-success",
    warning: "badge-warning",
    primary: "badge-primary",
  };

  return (
    <span className={cn(
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
      variants[variant]
    )}>
      {children}
    </span>
  );
}
