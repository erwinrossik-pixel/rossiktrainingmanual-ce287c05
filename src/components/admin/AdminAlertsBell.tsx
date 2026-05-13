import { useEffect, useState, useCallback } from "react";
import { Bell, AlertTriangle, AlertCircle, Info, Check, Trash2, Loader2, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const QUIET_HOURS_KEY = "admin_alerts_quiet_hours_v1";
interface QuietHours { enabled: boolean; start: number; end: number; }
const defaultQuiet: QuietHours = { enabled: false, start: 22, end: 7 };

const loadQuietHours = (): QuietHours => {
  try {
    const raw = localStorage.getItem(QUIET_HOURS_KEY);
    if (!raw) return defaultQuiet;
    const parsed = JSON.parse(raw);
    return { ...defaultQuiet, ...parsed };
  } catch { return defaultQuiet; }
};

const isInQuietHours = (q: QuietHours, now = new Date()): boolean => {
  if (!q.enabled) return false;
  const h = now.getHours();
  // Window crosses midnight when start > end
  return q.start <= q.end ? (h >= q.start && h < q.end) : (h >= q.start || h < q.end);
};


interface AdminAlert {
  id: string;
  alert_type: string;
  severity: "info" | "warning" | "critical";
  title: string;
  message: string;
  acknowledged: boolean;
  created_at: string;
}

const severityIcon = {
  critical: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const severityColor = {
  critical: "text-destructive",
  warning: "text-warning",
  info: "text-info",
};

export function AdminAlertsBell() {
  const [alerts, setAlerts] = useState<AdminAlert[]>([]);
  const [loading, setLoading] = useState(false);
  const [running, setRunning] = useState(false);
  const [quiet, setQuiet] = useState<QuietHours>(loadQuietHours);

  const persistQuiet = (next: QuietHours) => {
    setQuiet(next);
    try { localStorage.setItem(QUIET_HOURS_KEY, JSON.stringify(next)); } catch { /* ignore */ }
  };

  const load = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from("admin_alerts")
      .select("id, alert_type, severity, title, message, acknowledged, created_at")
      .eq("acknowledged", false)
      .order("created_at", { ascending: false })
      .limit(50);
    setAlerts((data ?? []) as AdminAlert[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
    const channel = supabase
      .channel("admin_alerts_changes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "admin_alerts" },
        (payload) => {
          const a = payload.new as AdminAlert;
          if (a?.title) {
            // During quiet hours, suppress toast for non-critical alerts.
            // Critical alerts always notify.
            const inQuiet = isInQuietHours(quiet);
            const shouldToast = !inQuiet || a.severity === "critical";
            if (shouldToast) {
              const fn =
                a.severity === "critical"
                  ? toast.error
                  : a.severity === "warning"
                  ? toast.warning
                  : toast.info;
              fn(a.title, { description: a.message });
            }
          }
          load();
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "admin_alerts" },
        () => load()
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "admin_alerts" },
        () => load()
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [load, quiet]);

  const acknowledge = async (id: string) => {
    const { error } = await supabase
      .from("admin_alerts")
      .update({ acknowledged: true, acknowledged_at: new Date().toISOString() })
      .eq("id", id);
    if (error) toast.error(error.message);
    else load();
  };

  const dismiss = async (id: string) => {
    const { error } = await supabase.from("admin_alerts").delete().eq("id", id);
    if (error) toast.error(error.message);
    else load();
  };

  const runScan = async () => {
    setRunning(true);
    const { error, data } = await supabase.functions.invoke("detect-anomalies");
    setRunning(false);
    if (error) {
      toast.error(error.message);
    } else {
      const found = (data as { alerts_found?: number })?.alerts_found ?? 0;
      toast.success(found > 0 ? `${found} anomalii detectate` : "Nicio anomalie detectată");
      load();
    }
  };

  const unread = alerts.length;
  const hasCritical = alerts.some((a) => a.severity === "critical");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
          <Bell className="h-4 w-4" />
          {unread > 0 && (
            <Badge
              className={cn(
                "absolute -top-1 -right-1 h-5 min-w-5 px-1 text-xs",
                hasCritical ? "bg-destructive" : "bg-warning"
              )}
            >
              {unread}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0" align="end">
        <div className="flex items-center justify-between p-3 border-b">
          <h4 className="font-semibold text-sm">Alerte sistem</h4>
          <Button size="sm" variant="ghost" onClick={runScan} disabled={running}>
            {running ? <Loader2 className="h-3 w-3 animate-spin" /> : "Scanează"}
          </Button>
        </div>
        <ScrollArea className="max-h-96">
          {loading && (
            <div className="p-6 text-center text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin inline mr-2" />
              Se încarcă...
            </div>
          )}
          {!loading && alerts.length === 0 && (
            <div className="p-6 text-center text-sm text-muted-foreground">
              Nicio alertă activă.
            </div>
          )}
          {alerts.map((a) => {
            const Icon = severityIcon[a.severity];
            return (
              <div key={a.id} className="p-3 border-b last:border-0 space-y-2">
                <div className="flex items-start gap-2">
                  <Icon className={cn("h-4 w-4 mt-0.5 shrink-0", severityColor[a.severity])} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{a.title}</p>
                    <p className="text-xs text-muted-foreground">{a.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(a.created_at).toLocaleString("ro-RO")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button size="sm" variant="ghost" className="h-7 text-xs" onClick={() => acknowledge(a.id)}>
                    <Check className="h-3 w-3 mr-1" /> Marchează citit
                  </Button>
                  <Button size="sm" variant="ghost" className="h-7 text-xs text-destructive" onClick={() => dismiss(a.id)}>
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            );
          })}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
