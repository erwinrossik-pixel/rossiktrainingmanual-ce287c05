import { Checklist } from "../Checklist";
import { ClipboardList, Truck, Package, FileText, Calculator } from "lucide-react";

export function ChecklistsChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Checklists & Quick Reference</h1>
        <p className="text-lg text-muted-foreground">
          Essential checklists for daily operations.
        </p>
      </div>

      {/* Pre-Trip */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">Pre-Trip Checklist</h2>
          </div>
          <Checklist 
            items={[
              "Order confirmed in writing",
              "Partner vetted (rating, docs)",
              "Slot booked with warehouse",
              "Cargo securing clarified",
              "Driver equipped (PPE, straps)",
              "Route planned with rest stops",
              "Driving bans checked",
              "CMR data prepared",
            ]}
          />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">Loading Checklist</h2>
          </div>
          <Checklist 
            items={[
              "CTU/trailer inspected & clean",
              "Weight distributed evenly",
              "Center of gravity (CoG) optimal",
              "Straps & securing in place",
              "Edge protectors used",
              "Photos taken (timestamped)",
              "CMR signed by shipper",
              "Doors/curtains sealed",
            ]}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">Delivery Checklist</h2>
          </div>
          <Checklist 
            items={[
              "POD signed & collected",
              "Damages noted on CMR",
              "Photos of unloading",
              "ePOD uploaded to TMS",
              "Client notified of completion",
              "Invoice prepared",
              "Carrier rated in system",
              "Backhaul search initiated",
            ]}
          />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <ClipboardList className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">Route Building Checklist</h2>
          </div>
          <Checklist 
            items={[
              "Total distance calculated",
              "Km split by country",
              "Tolls calculated per country",
              "Legal breaks planned",
              "Rest stops identified (secure)",
              "Driving bans checked",
              "Fastest vs cheapest compared",
              "Entered in TMS template",
            ]}
          />
        </div>
      </div>

      {/* Formulas Quick Reference */}
      <div className="info-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Calculator className="w-5 h-5 text-primary" />
          </div>
          <h2 className="section-title mb-0">Quick Formulas</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Cost Calculation:</p>
            <p className="font-mono font-semibold">Cost = km × €1.10 + Σ(tolls) + accessorials</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Price Calculation:</p>
            <p className="font-mono font-semibold">Price = Cost × (1 + margin%)</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Daily Distance (Single):</p>
            <p className="font-mono font-semibold">~650-700 km (9h × 75 km/h)</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Daily Distance (Double):</p>
            <p className="font-mono font-semibold">~1,100 km (18h × 65 km/h)</p>
          </div>
        </div>
      </div>

      {/* Compliance Quick Reference */}
      <div className="info-card">
        <h2 className="section-title">Compliance Quick Reference</h2>
        <div className="overflow-x-auto">
          <table className="table-clean mt-4">
            <thead>
              <tr>
                <th>Rule</th>
                <th>Standard</th>
                <th>Exception</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Daily driving</td>
                <td>9 hours</td>
                <td>10h (2×/week)</td>
              </tr>
              <tr>
                <td>Weekly driving</td>
                <td>56 hours</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Bi-weekly driving</td>
                <td>90 hours</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Break</td>
                <td>45' after 4h30</td>
                <td>Split: 15' + 30'</td>
              </tr>
              <tr>
                <td>Daily rest</td>
                <td>11 hours</td>
                <td>9h (3×/week)</td>
              </tr>
              <tr>
                <td>Weekly rest</td>
                <td>45 hours</td>
                <td>24h (1×/2 weeks) + compensation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="highlight-card">
        <h2 className="section-title">📞 Important Contacts</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
          <div className="p-3 bg-card rounded-lg">
            <p className="font-semibold mb-1">Dispatch Office</p>
            <p className="text-muted-foreground">Available 24/7 for emergencies</p>
          </div>
          <div className="p-3 bg-card rounded-lg">
            <p className="font-semibold mb-1">Translogica Support</p>
            <p className="text-muted-foreground">TMS technical assistance</p>
          </div>
          <div className="p-3 bg-card rounded-lg">
            <p className="font-semibold mb-1">Breakdown Service</p>
            <p className="text-muted-foreground">Pan-European roadside assistance</p>
          </div>
          <div className="p-3 bg-card rounded-lg">
            <p className="font-semibold mb-1">Insurance Hotline</p>
            <p className="text-muted-foreground">For claims and incidents</p>
          </div>
        </div>
      </div>
    </div>
  );
}
