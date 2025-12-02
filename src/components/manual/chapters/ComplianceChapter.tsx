import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Clock, AlertCircle, Moon, Calendar } from "lucide-react";

export function ComplianceChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Compliance – Drivers' Hours Summary</h1>
        <p className="text-lg text-muted-foreground">
          EU Regulation 561/2006 – Essential rules every dispatcher must know.
        </p>
      </div>

      {/* Key Limits Table */}
      <div className="info-card">
        <h2 className="section-title">Driving Time Limits</h2>
        <DataTable 
          headers={["Type", "Limit"]}
          rows={[
            ["Daily Driving", "9h/day (10h ×2/week)"],
            ["Weekly Driving", "≤56h/week"],
            ["Bi-weekly Driving", "≤90h/2 weeks"],
            ["Break", "45' after 4h30 (can split 15'+30')"],
            ["Daily Rest", "11h or 9h reduced ×3 between weekly"],
            ["Weekly Rest", "45h regular / 24h reduced + compensation"],
          ]}
        />
      </div>

      {/* Visual Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <InfoCard title="Average Daily Distance" icon={Clock} variant="info">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Single driver:</span>
              <span className="font-bold text-foreground">~650–700 km</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Double man (24h):</span>
              <span className="font-bold text-foreground">~1,100 km</span>
            </div>
          </div>
        </InfoCard>

        <InfoCard title="Important Reminders" icon={AlertCircle} variant="warning">
          <ul className="space-y-2 text-sm">
            <li>• Driving includes congestion time!</li>
            <li>• Shift = full working period</li>
            <li>• Use tachoprint + notes for Art.12 exceptions</li>
            <li>• Regular weekly rest (&gt;45h) cannot be taken in vehicle</li>
          </ul>
        </InfoCard>
      </div>

      {/* Break Rules */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Moon className="w-6 h-6 text-primary" />
          Break & Rest Rules
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 bg-accent rounded-lg">
            <h3 className="font-semibold text-primary mb-2">45-Minute Break</h3>
            <p className="text-sm text-muted-foreground">
              After 4h30 continuous driving. Can be split into 15' + 30' (in that order only).
            </p>
          </div>
          <div className="p-4 bg-accent rounded-lg">
            <h3 className="font-semibold text-primary mb-2">Daily Rest (11h)</h3>
            <p className="text-sm text-muted-foreground">
              Standard daily rest. Can reduce to 9h max 3 times between weekly rests.
            </p>
          </div>
          <div className="p-4 bg-accent rounded-lg">
            <h3 className="font-semibold text-primary mb-2">Weekly Rest (45h)</h3>
            <p className="text-sm text-muted-foreground">
              Regular: 45h. Reduced: 24h (once every 2 weeks, must compensate later).
            </p>
          </div>
        </div>
      </div>

      {/* Weekly Pattern */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Calendar className="w-6 h-6 text-primary" />
          Weekly Driving Pattern
        </h2>
        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div key={day} className="font-semibold text-muted-foreground">{day}</div>
            ))}
            {[10, 9, 10, 9, 9, 9, 0].map((hours, i) => (
              <div key={i} className={`p-2 rounded ${hours > 0 ? 'bg-primary/20 text-primary font-bold' : 'bg-success/20 text-success'}`}>
                {hours > 0 ? `${hours}h` : 'REST'}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Example: Max 56h/week, 2x 10h days allowed. Weekly rest must start by end of 6th day.
          </p>
        </div>
      </div>

      {/* Quiz */}
      <Quiz title="🎯 Knowledge Check: Compliance" questions={quizzes.compliance} />
    </div>
  );
}
