import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Clock, Users, AlertTriangle, Gauge, Car, Ban } from "lucide-react";
import { Badge } from "../Badge";

export function DrivingTimeChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Shift Time vs Driving Time</h1>
        <p className="text-lg text-muted-foreground">
          Understanding the critical difference between shift time and actual driving time.
        </p>
      </div>

      {/* Key Definitions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="info-card border-l-4 border-l-info">
          <h2 className="section-title text-info flex items-center gap-2">
            <Car className="w-5 h-5" />
            Driving Time
          </h2>
          <p className="text-muted-foreground mb-4">
            Time when the driver is <strong>actively controlling the truck on the road</strong>. 
            Does not include time when the truck is stopped.
          </p>
          <div className="space-y-2">
            <div className="flex justify-between p-2 bg-muted/50 rounded">
              <span>Daily limit:</span>
              <Badge variant="info">9h (10h ×2/week)</Badge>
            </div>
            <div className="flex justify-between p-2 bg-muted/50 rounded">
              <span>Weekly limit:</span>
              <Badge variant="info">56h max</Badge>
            </div>
          </div>
        </div>

        <div className="info-card border-l-4 border-l-warning">
          <h2 className="section-title text-warning flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Shift Time
          </h2>
          <p className="text-muted-foreground mb-4">
            Total working time including <strong>all activities</strong>: waiting, loading/unloading, 
            customs documents, etc.
          </p>
          <div className="space-y-2">
            <div className="flex justify-between p-2 bg-muted/50 rounded">
              <span>Single-manned max:</span>
              <Badge variant="warning">13–15h</Badge>
            </div>
            <div className="flex justify-between p-2 bg-muted/50 rounded">
              <span>Double-manned max:</span>
              <Badge variant="warning">21h</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Jam Warning */}
      <div className="p-6 bg-destructive/5 rounded-xl border border-destructive/20">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Traffic Jam = Driving Time!</h3>
            <p className="text-muted-foreground mb-3">
              Time stuck in traffic is <strong>100% counted as driving time</strong>. Only when you park safely 
              and switch the tachograph mode to BREAK/REST does the time stop counting.
            </p>
            <div className="p-3 bg-card rounded-lg">
              <p className="text-sm font-medium mb-2">What to do if traffic will exceed your limit:</p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Exit immediately if possible, find safe parking</li>
                <li>Apply handbrake, switch tacho to BREAK/REST</li>
                <li>Take your 45-minute break</li>
                <li>If unavoidable, use Art.12 exception and document the reason</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Single vs Double Manned */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Single Manned */}
        <div className="info-card">
          <h2 className="section-title flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Single-Manned (1 Driver)
          </h2>
          <DataTable 
            headers={["Parameter", "Value"]}
            rows={[
              ["Max daily driving", "9h (10h ×2/week)"],
              ["Max shift time", "13–15h"],
              ["Daily rest", "11h (or 9h ×3/week)"],
              ["Weekly driving", "56h max"],
              ["Distance/day", "~650–700 km"],
            ]}
          />
          <div className="mt-4 p-3 bg-muted/50 rounded-lg">
            <p className="text-sm font-medium mb-2">Example Schedule:</p>
            <div className="text-xs text-muted-foreground space-y-1">
              <div className="flex justify-between">
                <span>4.5h driving → 45' break</span>
              </div>
              <div className="flex justify-between">
                <span>4.5h driving → shift end</span>
              </div>
              <div className="flex justify-between">
                <span>= 9h driving in 13h shift</span>
              </div>
            </div>
          </div>
        </div>

        {/* Double Manned */}
        <div className="info-card">
          <h2 className="section-title flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <Users className="w-5 h-5 text-primary -ml-3" />
            Double-Manned (2 Drivers)
          </h2>
          <DataTable 
            headers={["Parameter", "Value"]}
            rows={[
              ["Max driving/driver", "9h (10h ×2/week)"],
              ["Max shift time", "21h"],
              ["Daily rest", "9h (cannot reduce)"],
              ["Combined driving", "Up to 18h/24h"],
              ["Distance/24h", "~1,100 km"],
            ]}
          />
          <div className="mt-4 p-3 bg-success/10 rounded-lg border border-success/20">
            <p className="text-sm font-medium text-success mb-1">Big Advantage:</p>
            <p className="text-xs text-muted-foreground">
              Two drivers = almost non-stop truck. Each driver respects their own 9/10h limit 
              while the truck keeps moving.
            </p>
          </div>
        </div>
      </div>

      {/* Average Speed */}
      <InfoCard title="Average Speed Calculation" icon={Gauge} variant="info">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">70–75</p>
            <p className="text-sm">km/h average</p>
          </div>
          <p className="text-sm text-muted-foreground flex-1">
            While trucks can run at 80+ km/h, we calculate with 70–75 km/h to include traffic, 
            loading times, and breaks. This gives realistic ETAs.
          </p>
        </div>
      </InfoCard>

      {/* Driving Bans */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-2">
          <Ban className="w-5 h-5 text-destructive" />
          Weekend & Holiday Driving Bans
        </h2>
        <p className="text-muted-foreground mb-4">
          Trucks &gt;3.5t have driving restrictions in many European countries:
        </p>
        <DataTable 
          headers={["Country", "Ban Hours"]}
          rows={[
            ["Austria", "Sat 15:00 – Sun 22:00"],
            ["Germany", "Sun 00:00 – Sun 22:00"],
            ["Italy", "Sun 08:00 – Sun 22:00*"],
            ["Switzerland", "Sat 22:00 – Sun 22:00 + daily 22:00–05:00"],
            ["France", "Sat 22:00 – Sun 22:00"],
            ["Czech Republic", "Sun 13:00 – Sun 22:00"],
            ["Hungary", "Sat 22:00 – Sun 22:00"],
            ["Romania / Belgium / UK", "No general ban"],
          ]}
        />
        <p className="text-xs text-muted-foreground mt-3">
          * Italy: Trucks to unloading point may continue 4h after ban starts. 
          Trucks leaving Italy may start 2h before ban ends.
        </p>
      </div>

      {/* Tirol Restrictions */}
      <div className="p-6 bg-warning/5 rounded-xl border border-warning/20">
        <h3 className="font-semibold flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-warning" />
          Austria/Tirol Special Restrictions
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-sm mb-2">A-63 Kufstein to A-61 Zirl:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Nov–Apr: 20:00–05:00 closed</li>
              <li>• May–Oct: 22:00–05:00 closed</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-sm mb-2">Brenner Pass:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Double toll between 22:00–05:00</li>
              <li>• Plan alternative corridors if needed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz */}
      <Quiz title="🎯 Knowledge Check: Driving Time" questions={quizzes["driving-time"]} />
    </div>
  );
}
