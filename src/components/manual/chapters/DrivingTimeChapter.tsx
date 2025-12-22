import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Clock, Users, AlertTriangle, Gauge, Car, Ban } from "lucide-react";
import { Badge } from "../Badge";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function DrivingTimeChapter() {
  const { ct } = useChapterTranslation("driving-time");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        chapterNumber={ct('chapterNumber')}
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Clock}
        variant="drivingtime"
      />

      {/* Key Definitions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="info-card border-l-4 border-l-info">
          <h2 className="section-title text-info flex items-center gap-2">
            <Car className="w-5 h-5" />
            {ct("drivingTimeTitle")}
          </h2>
          <p className="text-muted-foreground mb-4">
            {ct("drivingTimeDesc")}
          </p>
          <div className="space-y-2">
            <div className="flex justify-between p-2 bg-muted/50 rounded">
              <span>{ct("dailyLimit")}</span>
              <Badge variant="info">9h (10h ×2/week)</Badge>
            </div>
            <div className="flex justify-between p-2 bg-muted/50 rounded">
              <span>{ct("weeklyLimit")}</span>
              <Badge variant="info">56h max</Badge>
            </div>
          </div>
        </div>

        <div className="info-card border-l-4 border-l-warning">
          <h2 className="section-title text-warning flex items-center gap-2">
            <Clock className="w-5 h-5" />
            {ct("shiftTimeTitle")}
          </h2>
          <p className="text-muted-foreground mb-4">
            {ct("shiftTimeDesc")}
          </p>
          <div className="space-y-2">
            <div className="flex justify-between p-2 bg-muted/50 rounded">
              <span>{ct("singleMannedMax")}</span>
              <Badge variant="warning">13–15h</Badge>
            </div>
            <div className="flex justify-between p-2 bg-muted/50 rounded">
              <span>{ct("doubleMannedMax")}</span>
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
            <h3 className="font-semibold text-lg mb-2">{ct("trafficJamWarning")}</h3>
            <p className="text-muted-foreground mb-3">
              {ct("trafficJamDesc")}
            </p>
            <div className="p-3 bg-card rounded-lg">
              <p className="text-sm font-medium mb-2">{ct("whatToDoIfTraffic")}</p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>{ct("trafficTip1")}</li>
                <li>{ct("trafficTip2")}</li>
                <li>{ct("trafficTip3")}</li>
                <li>{ct("trafficTip4")}</li>
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
            {ct("singleMannedTitle")}
          </h2>
          <DataTable 
            headers={[ct("parameter"), ct("value")]}
            rows={[
              [ct("maxDailyDriving"), "9h (10h ×2/week)"],
              [ct("maxShiftTime"), "13–15h"],
              [ct("dailyRest"), "11h (or 9h ×3/week)"],
              [ct("weeklyDriving"), "56h max"],
              [ct("distancePerDay"), "~650–700 km"],
            ]}
          />
          <div className="mt-4 p-3 bg-muted/50 rounded-lg">
            <p className="text-sm font-medium mb-2">{ct("exampleSchedule")}</p>
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
            {ct("doubleMannedTitle")}
          </h2>
          <DataTable 
            headers={[ct("parameter"), ct("value")]}
            rows={[
              [ct("maxDailyDriving"), "9h (10h ×2/week)"],
              [ct("maxShiftTime"), "21h"],
              [ct("dailyRest"), "9h (cannot reduce)"],
              [ct("weeklyDriving"), "Up to 18h/24h"],
              [ct("distancePerDay"), "~1,100 km"],
            ]}
          />
          <div className="mt-4 p-3 bg-success/10 rounded-lg border border-success/20">
            <p className="text-sm font-medium text-success mb-1">{ct("doubleMannedAdvantage")}</p>
            <p className="text-xs text-muted-foreground">
              {ct("doubleMannedAdvantageDesc")}
            </p>
          </div>
        </div>
      </div>

      {/* Average Speed */}
      <InfoCard title={ct("avgSpeedTitle")} icon={Gauge} variant="info">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">70–75</p>
            <p className="text-sm">km/h average</p>
          </div>
          <p className="text-sm text-muted-foreground flex-1">
            {ct("avgSpeedDesc")}
          </p>
        </div>
      </InfoCard>

      {/* Driving Bans */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-2">
          <Ban className="w-5 h-5 text-destructive" />
          {ct("drivingBansTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("drivingBansDesc")}
        </p>
        <DataTable 
          headers={[ct("country"), ct("banHours")]}
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
          {ct("tirolTitle")}
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
      <Quiz title={ct("knowledgeCheck")} questions={quizzes["driving-time"]} chapterId="driving-time" />
    </div>
  );
}
