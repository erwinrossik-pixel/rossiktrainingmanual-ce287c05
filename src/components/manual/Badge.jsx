import { cn } from "@/lib/utils";

export function Badge({ children, variant = "default" }) {
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
