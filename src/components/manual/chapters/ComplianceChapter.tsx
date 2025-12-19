import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Clock, AlertTriangle, Moon, Calendar, Shield, FileText, Truck, CheckCircle2, XCircle, Scale, Timer, Coffee, Bed, MapPin, Ban, Euro, Calculator, Eye } from "lucide-react";

export function ComplianceChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 p-8 md:p-12 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <Scale className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Compliance – Drivers' Hours
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            EU Regulation 561/2006 – Essential rules every dispatcher must know for legal and safe transport operations.
          </p>
        </div>
      </div>

      {/* Why Compliance Matters */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          Why Compliance Matters
        </h2>
        <p className="text-muted-foreground mb-4">
          Drivers' hours regulations exist to prevent fatigue-related accidents. Non-compliance can result in heavy fines, criminal prosecution, and most importantly, endanger lives. As a dispatcher, you share responsibility for ensuring compliance.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Euro className="w-8 h-8 text-destructive mx-auto mb-2" />
            <p className="text-2xl font-bold text-destructive">€500-5,000</p>
            <p className="text-xs text-muted-foreground">Fine per violation</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Ban className="w-8 h-8 text-warning mx-auto mb-2" />
            <p className="text-2xl font-bold text-warning">License</p>
            <p className="text-xs text-muted-foreground">Points or suspension</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Truck className="w-8 h-8 text-info mx-auto mb-2" />
            <p className="text-2xl font-bold text-info">Vehicle</p>
            <p className="text-xs text-muted-foreground">Can be impounded</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Scale className="w-8 h-8 text-destructive mx-auto mb-2" />
            <p className="text-2xl font-bold text-destructive">Criminal</p>
            <p className="text-xs text-muted-foreground">Prosecution possible</p>
          </div>
        </div>
      </div>

      {/* Key Limits Table */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Clock className="w-6 h-6 text-primary" />
          Driving Time Limits – EU Regulation 561/2006
        </h2>
        <DataTable 
          headers={["Regulation", "Standard Limit", "Exception/Notes"]}
          rows={[
            ["Daily Driving", "9 hours per day", "Can extend to 10h twice per week"],
            ["Weekly Driving", "56 hours maximum", "Hard limit, no exceptions"],
            ["Bi-weekly Driving", "90 hours per 2 weeks", "Total of any two consecutive weeks"],
            ["Continuous Driving", "4h 30min maximum", "Then break required"],
            ["Break", "45 minutes minimum", "Can split: 15min + 30min (in that order)"],
            ["Daily Rest", "11 hours minimum", "Can reduce to 9h up to 3× between weekly rests"],
            ["Weekly Rest", "45 hours (regular)", "Can reduce to 24h once per 2 weeks + compensation"],
          ]}
        />
        
        <div className="mt-4 p-4 bg-warning/10 border border-warning/30 rounded-lg">
          <p className="text-sm flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <span><strong>Important:</strong> These are EU-wide rules. Some countries may have stricter national requirements. Always check local regulations.</span>
          </p>
        </div>
      </div>

      {/* Visual Explanation Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <InfoCard title="Average Daily Distance" icon={MapPin} variant="info">
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <div>
                <span className="font-medium">Single driver:</span>
                <p className="text-xs text-muted-foreground">9h driving × 75 km/h average</p>
              </div>
              <span className="font-bold text-2xl text-primary">~650-700 km</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <div>
                <span className="font-medium">Double-manned (24h):</span>
                <p className="text-xs text-muted-foreground">18h total driving</p>
              </div>
              <span className="font-bold text-2xl text-primary">~1,100-1,200 km</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <div>
                <span className="font-medium">Realistic average:</span>
                <p className="text-xs text-muted-foreground">Including loading, traffic</p>
              </div>
              <span className="font-bold text-2xl text-warning">500-600 km</span>
            </div>
          </div>
        </InfoCard>

        <InfoCard title="Critical Reminders" icon={AlertTriangle} variant="warning">
          <ul className="space-y-3">
            <li className="flex items-start gap-3 p-2 bg-muted/30 rounded">
              <Timer className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              <div>
                <strong>Driving includes congestion!</strong>
                <p className="text-xs text-muted-foreground">Standing in traffic = driving time on tachograph</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-2 bg-muted/30 rounded">
              <Clock className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              <div>
                <strong>Shift ≠ Driving time</strong>
                <p className="text-xs text-muted-foreground">Working period includes loading, paperwork, waiting</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-2 bg-muted/30 rounded">
              <FileText className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              <div>
                <strong>Art.12 exceptions</strong>
                <p className="text-xs text-muted-foreground">Use tachoprint + manual notes for emergencies</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-2 bg-muted/30 rounded">
              <Bed className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              <div>
                <strong>Weekly rest (45h+)</strong>
                <p className="text-xs text-muted-foreground">Cannot be taken in vehicle - hotel/home required</p>
              </div>
            </li>
          </ul>
        </InfoCard>
      </div>

      {/* Break Rules Detail */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Coffee className="w-6 h-6 text-primary" />
          Break Rules Explained
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 bg-accent rounded-lg border-l-4 border-primary">
            <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <Coffee className="w-5 h-5" />
              45-Minute Break
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              Required after 4h 30min of continuous driving.
            </p>
            <div className="bg-muted/50 p-2 rounded text-xs">
              <strong>Split option:</strong> 15min + 30min (must be in this order, not 30+15)
            </div>
          </div>
          <div className="p-4 bg-accent rounded-lg border-l-4 border-info">
            <h3 className="font-semibold text-info mb-2 flex items-center gap-2">
              <Moon className="w-5 h-5" />
              Daily Rest (11h)
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              Standard 11h uninterrupted rest within each 24h period.
            </p>
            <div className="bg-muted/50 p-2 rounded text-xs">
              <strong>Reduced option:</strong> 9h minimum (max 3× between weekly rests)
            </div>
          </div>
          <div className="p-4 bg-accent rounded-lg border-l-4 border-success">
            <h3 className="font-semibold text-success mb-2 flex items-center gap-2">
              <Bed className="w-5 h-5" />
              Weekly Rest (45h)
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              Regular weekly rest, cannot be taken in vehicle cab.
            </p>
            <div className="bg-muted/50 p-2 rounded text-xs">
              <strong>Reduced option:</strong> 24h (once per 2 weeks, must compensate later)
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-info/10 border border-info/30 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Eye className="w-5 h-5 text-info" />
            Split Daily Rest Option
          </h4>
          <p className="text-sm">
            Daily rest can be split into two parts: first part minimum 3 hours, second part minimum 9 hours = total 12 hours. 
            This extends the daily driving window but requires precise planning.
          </p>
        </div>
      </div>

      {/* Weekly Pattern Example */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Calendar className="w-6 h-6 text-primary" />
          Weekly Driving Pattern Example
        </h2>
        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div key={day} className="font-semibold text-muted-foreground">{day}</div>
            ))}
            {[
              { hours: 10, extended: true },
              { hours: 9, extended: false },
              { hours: 10, extended: true },
              { hours: 9, extended: false },
              { hours: 9, extended: false },
              { hours: 9, extended: false },
              { hours: 0, rest: true },
            ].map((day, i) => (
              <div key={i} className={`p-2 rounded ${
                day.rest ? 'bg-success/20 text-success' : 
                day.extended ? 'bg-warning/20 text-warning' :
                'bg-primary/20 text-primary'
              } font-bold`}>
                {day.rest ? 'REST' : `${day.hours}h`}
                {day.extended && <span className="text-xs block">*ext</span>}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary/20 rounded"></div>
              <span>Standard (9h)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-warning/20 rounded"></div>
              <span>Extended (10h) - 2× max</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-success/20 rounded"></div>
              <span>Weekly rest (45h+)</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Example: Max 56h/week, 2× 10h days allowed. Weekly rest must start by end of 6th day (144h from last weekly rest).
          </p>
        </div>
      </div>

      {/* Enforcement & Penalties */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Scale className="w-6 h-6 text-primary" />
          Enforcement & Penalties
        </h2>
        
        <DataTable
          headers={["Violation", "Typical Fine Range", "Additional Consequences"]}
          rows={[
            ["Exceeding daily driving time", "€150-500 per hour", "Points on license, vehicle delay"],
            ["Missing breaks", "€100-300 per violation", "Driver prohibited from continuing"],
            ["Insufficient daily rest", "€200-600", "Required to take rest before continuing"],
            ["Exceeding weekly driving", "€300-1,000", "Vehicle may be immobilized"],
            ["Falsifying tachograph", "€1,000-30,000", "Criminal prosecution, license revocation"],
            ["No tachograph records", "€500-2,000", "Vehicle impounded until resolved"],
            ["Weekly rest in cab (>45h)", "€100-500", "Required to book hotel accommodation"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Dispatcher Responsibility
            </h4>
            <ul className="text-sm space-y-1">
              <li>• You can be fined for instructing violations</li>
              <li>• Planning impossible journeys = liability</li>
              <li>• Company can face operator license issues</li>
              <li>• Record keeping failures penalize company</li>
            </ul>
          </div>
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              How to Stay Compliant
            </h4>
            <ul className="text-sm space-y-1">
              <li>• Plan realistic schedules with buffers</li>
              <li>• Check driver's remaining hours before booking</li>
              <li>• Document all planning in TMS</li>
              <li>• Monitor tachograph data proactively</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tachograph Basics */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          Digital Tachograph Essentials
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Driver Card Modes</h3>
            <div className="space-y-2">
              {[
                { mode: "Driving", symbol: "🚛", desc: "Vehicle moving - automatic", color: "bg-primary/20" },
                { mode: "Other Work", symbol: "⚒️", desc: "Loading, paperwork, cleaning", color: "bg-warning/20" },
                { mode: "Available", symbol: "⏳", desc: "Waiting, not working", color: "bg-info/20" },
                { mode: "Break/Rest", symbol: "🛏️", desc: "Resting, not available", color: "bg-success/20" },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 ${item.color} rounded-lg`}>
                  <span className="text-2xl">{item.symbol}</span>
                  <div>
                    <p className="font-medium">{item.mode}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Record Keeping Requirements</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 p-2 bg-muted/30 rounded">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Driver must carry current + previous 28 days of records</span>
              </li>
              <li className="flex items-start gap-2 p-2 bg-muted/30 rounded">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Company must download driver card every 28 days minimum</span>
              </li>
              <li className="flex items-start gap-2 p-2 bg-muted/30 rounded">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Vehicle unit must be downloaded every 90 days</span>
              </li>
              <li className="flex items-start gap-2 p-2 bg-muted/30 rounded">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Records must be kept for minimum 2 years</span>
              </li>
              <li className="flex items-start gap-2 p-2 bg-muted/30 rounded">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Attestation letters needed for days not driving</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Article 12 Exceptions */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-primary" />
          Article 12 – Emergency Exceptions
        </h2>
        
        <p className="text-muted-foreground mb-4">
          A driver may depart from regulations to reach a suitable stopping place, provided road safety is not jeopardized. The driver must indicate the reason manually on the tachograph printout.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">Valid Reasons</h4>
            <ul className="text-sm space-y-1">
              <li>• Reach a suitable safe parking place</li>
              <li>• Ensure safety of vehicle, load, or persons</li>
              <li>• Complete delivery during unforeseen delays</li>
              <li>• Traffic accidents causing major delays</li>
              <li>• Extreme weather making stopping dangerous</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">NOT Valid Reasons</h4>
            <ul className="text-sm space-y-1">
              <li>• Meet delivery deadline</li>
              <li>• Avoid overnight parking costs</li>
              <li>• Get home earlier</li>
              <li>• Complete another job</li>
              <li>• Poor planning by dispatcher</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 p-4 bg-info/10 border border-info/30 rounded-lg">
          <h4 className="font-semibold mb-2">Required Documentation</h4>
          <p className="text-sm">
            When using Art.12, driver must print tachograph record and write: reason for deviation, type of deviation, and signature. 
            Keep this printout with tachograph records.
          </p>
        </div>
      </div>

      {/* Planning Calculator */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Calculator className="w-6 h-6 text-primary" />
          Quick Compliance Calculator
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Time to Distance</h3>
            <DataTable
              headers={["Driving Time", "Average (75km/h)", "With Breaks"]}
              rows={[
                ["4h 30min", "~340 km", "4h 30min total"],
                ["9h (standard)", "~675 km", "~10h 15min total"],
                ["10h (extended)", "~750 km", "~11h 30min total"],
                ["18h (double)", "~1,200 km", "~21h total"],
              ]}
            />
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Common Route Times</h3>
            <DataTable
              headers={["Route", "Distance", "Driving Days"]}
              rows={[
                ["DE-UK", "~800-1,200 km", "1.5-2 days"],
                ["DE-IT (North)", "~900 km", "1.5 days"],
                ["DE-ES", "~1,800 km", "3 days"],
                ["PL-FR", "~1,500 km", "2.5 days"],
                ["NL-CZ", "~900 km", "1.5 days"],
              ]}
            />
          </div>
        </div>
      </div>

      {/* Multi-crew Rules */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Truck className="w-6 h-6 text-primary" />
          Multi-manning (Double-crew) Rules
        </h2>

        <p className="text-muted-foreground mb-4">
          When two drivers operate together, different rules apply allowing longer journeys.
        </p>

        <DataTable
          headers={["Aspect", "Single Driver", "Multi-manning"]}
          rows={[
            ["Max driving before break", "4h 30min", "4h 30min per driver"],
            ["Daily driving", "9h (10h 2×/week)", "9h per driver"],
            ["Daily rest", "11h (or 9h reduced)", "9h minimum, within 30h of last rest"],
            ["Total shift window", "13-15 hours", "Up to 21 hours"],
            ["Distance per 24h", "~700 km", "~1,200 km"],
            ["Presence requirement", "-", "2nd driver must be present from hour 1"],
          ]}
        />

        <div className="mt-4 p-4 bg-warning/10 border border-warning/30 rounded-lg">
          <p className="text-sm flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <span><strong>Important:</strong> The second driver must be present in the vehicle from the start of the journey. You cannot have one driver start alone and pick up the second driver later - this is NOT multi-manning.</span>
          </p>
        </div>
      </div>

      {/* Quiz */}
      <Quiz title="Compliance Quiz – Drivers' Hours" questions={quizzes.compliance} chapterId="compliance" />
    </div>
  );
}
