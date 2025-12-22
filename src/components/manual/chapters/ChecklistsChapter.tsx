import { Checklist } from "../Checklist";
import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { ClipboardList, Truck, Package, FileText, Calculator, AlertTriangle, Phone, Shield, Clock, Euro, MapPin, CheckCircle2, Thermometer, Users, Wrench, Globe, Camera, Scale, Ban, Fuel } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function ChecklistsChapter() {
  const { ct } = useChapterTranslation("checklists");
  
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-500 p-8 md:p-12 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <ClipboardList className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            {ct("title")}
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            {ct("subtitle")}
          </p>
        </div>
      </div>

      {/* Pre-Trip & Loading Checklists */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="info-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">Pre-Dispatch Checklist</h2>
          </div>
          <Checklist 
            items={[
              "Transport order confirmed in writing",
              "Carrier/partner vetted (ratings, insurance docs)",
              "Loading slot booked with warehouse",
              "Driver details received (name, phone, plates)",
              "Vehicle type matches requirements",
              "Cargo securing requirements clarified",
              "Route planned with rest stops identified",
              "Driving bans checked (all countries on route)",
              "Tolls calculated and included in cost",
              "CMR data prepared and verified",
              "Client informed of expected timeline",
              "Emergency contacts shared with driver",
            ]}
          />
        </div>

        <div className="info-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">Loading Checklist</h2>
          </div>
          <Checklist 
            items={[
              "Vehicle/trailer inspected and clean",
              "No damage, holes, or contamination",
              "Weight distributed evenly across axles",
              "Center of gravity positioned correctly",
              "Straps and securing equipment in place",
              "Edge protectors used where needed",
              "Cargo matches packing list/CMR",
              "Photos taken with timestamps",
              "Any pre-existing damage noted on CMR",
              "CMR signed by shipper with stamp",
              "Doors/curtains properly sealed",
              "Temperature set (if reefer)",
              "Loading confirmation sent to dispatcher",
            ]}
          />
        </div>
      </div>

      {/* Delivery & Route Building Checklists */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="info-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">Delivery Checklist</h2>
          </div>
          <Checklist 
            items={[
              "Arrived at correct address",
              "Delivery window respected",
              "Cargo condition verified at unloading",
              "Any damage noted on CMR before signing",
              "Photos of unloading taken",
              "POD collected with signature, stamp, date, time",
              "Quantity confirmed matches CMR",
              "Pallets exchanged if required",
              "ePOD/scan uploaded to TMS immediately",
              "Client notified of successful delivery",
              "Invoice preparation initiated",
              "Carrier rated in system",
              "Backhaul search initiated if applicable",
            ]}
          />
        </div>

        <div className="info-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">Route Planning Checklist</h2>
          </div>
          <Checklist 
            items={[
              "Total distance calculated accurately",
              "Kilometers split by country for toll calculation",
              "Toll costs calculated per country",
              "Ferry/tunnel bookings made if needed",
              "Legal breaks and rest stops planned",
              "Secure parking locations identified",
              "Driving bans checked for all days of journey",
              "Border crossing times estimated",
              "Alternative routes identified for contingencies",
              "Fastest vs cheapest route compared",
              "Driver hours compatibility verified",
              "Route template saved in TMS for future use",
            ]}
          />
        </div>
      </div>

      {/* Carrier Qualification Checklist */}
      <div className="info-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <h2 className="section-title mb-0">New Carrier Qualification Checklist</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Checklist
            title="Mandatory Documents"
            items={[
              "Valid EU Community License (transport license)",
              "CMR Insurance Certificate (min €100,000)",
              "Company registration / Chamber of Commerce extract",
              "VAT registration certificate",
              "Fleet/vehicle insurance documentation",
              "Good repute certificate (operator CPC)",
              "Financial standing proof if required",
            ]}
          />
          <Checklist
            title="Additional Verification"
            items={[
              "Trade references collected (min 2-3)",
              "Credit check performed",
              "Freight exchange ratings reviewed",
              "Company age verified (prefer >2 years)",
              "Physical office address verified",
              "Management contact details confirmed",
              "Bank account country matches registration",
              "No fraud database listings found",
            ]}
          />
        </div>
      </div>

      {/* Reefer Checklist */}
      <div className="info-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-info/10 rounded-lg flex items-center justify-center">
            <Thermometer className="w-5 h-5 text-info" />
          </div>
          <h2 className="section-title mb-0">Temperature-Controlled Transport Checklist</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Checklist
            title="Pre-Loading"
            items={[
              "Trailer pre-cooled to required temperature",
              "Temperature recorder working and calibrated",
              "ATP certificate valid and on board",
              "Cargo temperature verified before loading",
              "Door seals checked for integrity",
              "No odors or contamination in trailer",
              "Product-specific requirements understood",
            ]}
          />
          <Checklist
            title="During & Post-Transport"
            items={[
              "Temperature monitored throughout journey",
              "Continuous mode (not cycle) for frozen goods",
              "Door opening minimized during journey",
              "Temperature at delivery within tolerance",
              "Temperature record printout attached to CMR",
              "Any deviations noted and reported immediately",
              "Clean trailer certificate if required",
            ]}
          />
        </div>
      </div>

      {/* Claims Checklist */}
      <div className="info-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-warning" />
          </div>
          <h2 className="section-title mb-0">Damage/Claims Checklist</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Checklist
            title="Immediate Actions (At Discovery)"
            items={[
              "Note reservation on CMR before signing",
              "Take timestamped photos of all damage",
              "Get receiver signature acknowledging damage",
              "Do NOT dispose of damaged goods",
              "Notify dispatcher immediately",
              "Secure damaged goods for inspection",
            ]}
          />
          <Checklist
            title="Within 7 Days"
            items={[
              "Send written claim letter to carrier",
              "Include CMR number, date, route details",
              "Attach all photo documentation",
              "Provide original commercial invoice",
              "Keep proof of sending (registered mail/email)",
              "Calculate claim value per CMR formula",
              "Escalate to insurance if applicable",
            ]}
          />
        </div>
      </div>

      {/* ADR Checklist */}
      <div className="info-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
            <Scale className="w-5 h-5 text-destructive" />
          </div>
          <h2 className="section-title mb-0">ADR (Dangerous Goods) Checklist</h2>
        </div>
        <Checklist
          items={[
            "UN number and proper shipping name confirmed",
            "Packing group identified (I, II, or III)",
            "ADR class determined with correct hazard labels",
            "Driver has valid ADR certificate for class",
            "Vehicle ADR approval certificate valid (if required)",
            "Correct placards and orange plates displayed",
            "Instructions in writing in driver's language",
            "Emergency equipment on board (PPE, fire extinguisher)",
            "Tunnel category checked for entire route",
            "No prohibited combinations loaded together",
            "Transport document complete with all ADR info",
            "Dangerous goods declaration provided by shipper",
          ]}
        />
      </div>

      {/* Formulas Quick Reference */}
      <div className="info-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Calculator className="w-5 h-5 text-primary" />
          </div>
          <h2 className="section-title mb-0">Quick Formulas & Calculations</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Basic Cost Calculation:</p>
            <p className="font-mono font-semibold text-lg">Cost = (km × €1.10-1.25) + Σ(tolls) + accessories</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Price with Margin:</p>
            <p className="font-mono font-semibold text-lg">Price = Cost × (1 + margin%)</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Daily Distance (Single Driver):</p>
            <p className="font-mono font-semibold text-lg">~650-700 km (9h × 75 km/h)</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Daily Distance (Double-manned):</p>
            <p className="font-mono font-semibold text-lg">~1,100-1,200 km (18h × 65 km/h)</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">CMR Liability Limit:</p>
            <p className="font-mono font-semibold text-lg">8.33 SDR/kg ≈ €10/kg gross weight</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Loading Meter (LDM):</p>
            <p className="font-mono font-semibold text-lg">1 LDM = 1m × 2.4m = 2.4 m²</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">EUR Pallets per FTL:</p>
            <p className="font-mono font-semibold text-lg">33 pallets (crosswise) = 13.6 LDM</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Payload Calculation:</p>
            <p className="font-mono font-semibold text-lg">Payload = GVW - Vehicle Tare (24-25t typical)</p>
          </div>
        </div>
      </div>

      {/* Compliance Quick Reference */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Clock className="w-6 h-6 text-primary" />
          Drivers' Hours Quick Reference
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">Rule</th>
                <th className="p-3 text-center border border-border">Standard</th>
                <th className="p-3 text-center border border-border">Exception</th>
                <th className="p-3 text-left border border-border">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border font-medium">Daily driving</td>
                <td className="p-3 border border-border text-center font-bold text-primary">9 hours</td>
                <td className="p-3 border border-border text-center">10h (2×/week)</td>
                <td className="p-3 border border-border text-muted-foreground">Max 56h/week, 90h/2 weeks</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-medium">Continuous driving</td>
                <td className="p-3 border border-border text-center font-bold text-primary">4h 30min</td>
                <td className="p-3 border border-border text-center">—</td>
                <td className="p-3 border border-border text-muted-foreground">Then break required</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-medium">Break</td>
                <td className="p-3 border border-border text-center font-bold text-primary">45 minutes</td>
                <td className="p-3 border border-border text-center">Split: 15' + 30'</td>
                <td className="p-3 border border-border text-muted-foreground">Order matters!</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-medium">Daily rest</td>
                <td className="p-3 border border-border text-center font-bold text-primary">11 hours</td>
                <td className="p-3 border border-border text-center">9h (3×/week)</td>
                <td className="p-3 border border-border text-muted-foreground">Within 24h window</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-medium">Weekly rest</td>
                <td className="p-3 border border-border text-center font-bold text-primary">45 hours</td>
                <td className="p-3 border border-border text-center">24h (1×/2 weeks)</td>
                <td className="p-3 border border-border text-muted-foreground">Reduced must compensate</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-medium">Weekly driving max</td>
                <td className="p-3 border border-border text-center font-bold text-primary">56 hours</td>
                <td className="p-3 border border-border text-center">—</td>
                <td className="p-3 border border-border text-muted-foreground">Hard limit</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-medium">Bi-weekly max</td>
                <td className="p-3 border border-border text-center font-bold text-primary">90 hours</td>
                <td className="p-3 border border-border text-center">—</td>
                <td className="p-3 border border-border text-muted-foreground">Any 2 consecutive weeks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Toll Rates Quick Reference */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Euro className="w-6 h-6 text-primary" />
          Toll Rates Quick Reference (2025/2026)
        </h2>
        <DataTable
          headers={["Country", "Rate/km", "System", "Key Notes"]}
          rows={[
            ["🇨🇭 Switzerland", "€0.55", "LSVA", "Highest in Europe, weight-based"],
            ["🇦🇹 Austria", "€0.532", "GO-Maut", "GO-Box required, Brenner expensive"],
            ["🇭🇺 Hungary", "€0.425", "HU-GO", "OBU or pre-pay, watch HUF rates"],
            ["🇩🇪 Germany", "€0.348", "LKW-Maut", "CO₂ tiers apply, OBU required"],
            ["🇫🇷 France", "€0.28-0.33", "Télépéage", "Varies by operator, many autoroutes"],
            ["🇮🇹 Italy", "€0.30", "Telepass", "Private concessionaires, varies"],
            ["🇪🇸 Spain", "€0.28-0.31", "Vía-T", "Many free routes available"],
            ["🇨🇿 Czechia", "€0.26", "MYTO CZ", "OBU required, Euro VI discount"],
            ["🇸🇮 Slovenia", "€0.24", "DarsGo", "A1/A2 main toll roads"],
            ["🇧🇪 Belgium", "€0.171", "Viapass", "Wallonia slightly cheaper"],
            ["🇳🇱 Netherlands", "€0.159", "Vrachtwagen", "NEW from July 2026!"],
            ["🇵🇱 Poland", "€0.092", "e-TOLL", "Cheapest major country"],
          ]}
        />
      </div>

      {/* Driving Bans */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Ban className="w-6 h-6 text-primary" />
          Weekend/Holiday Driving Bans
        </h2>
        <DataTable
          headers={["Country", "Sunday Ban", "Holiday Ban", "Exceptions"]}
          rows={[
            ["🇩🇪 Germany", "00:00-22:00", "Yes", "Reefer (perishables), limited"],
            ["🇦🇹 Austria", "00:00-22:00", "Yes", "Combined transport, reefer"],
            ["🇫🇷 France", "22:00 Sat - 22:00 Sun", "Yes", "Live animals, urgent medical"],
            ["🇮🇹 Italy", "08:00-22:00 (varies)", "Yes", "Differs by season"],
            ["🇨🇿 Czechia", "13:00-22:00", "Yes", "Reefer, combined transport"],
            ["🇵🇱 Poland", "08:00-22:00", "Some", "Agricultural products"],
            ["🇭🇺 Hungary", "00:00-22:00", "Yes", "Perishables with permit"],
            ["🇨🇭 Switzerland", "00:00-24:00 (all day)", "Yes", "Very limited exceptions"],
          ]}
        />
        <div className="mt-4 p-4 bg-warning/10 border border-warning/30 rounded-lg">
          <p className="text-sm flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <span><strong>Always verify:</strong> Bans change seasonally, during holidays, and for special events. Check official sources before planning weekend routes.</span>
          </p>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="highlight-card border border-destructive/30 bg-destructive/5">
        <h2 className="section-title flex items-center gap-3">
          <Phone className="w-6 h-6 text-destructive" />
          Emergency Contacts & Resources
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="p-4 bg-card rounded-lg border border-border">
            <p className="font-semibold mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-destructive" />
              European Emergency
            </p>
            <p className="text-2xl font-bold text-destructive">112</p>
            <p className="text-xs text-muted-foreground">Works in all EU countries</p>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border">
            <p className="font-semibold mb-2 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-warning" />
              Breakdown Service
            </p>
            <p className="text-sm text-muted-foreground">Keep your company's roadside assistance number accessible</p>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border">
            <p className="font-semibold mb-2 flex items-center gap-2">
              <ClipboardList className="w-4 h-4 text-info" />
              TMS Support
            </p>
            <p className="text-sm text-muted-foreground">Technical assistance hotline for your transport management system</p>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border">
            <p className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4 text-success" />
              Insurance Hotline
            </p>
            <p className="text-sm text-muted-foreground">24/7 claims reporting for incidents</p>
          </div>
        </div>
      </div>

      {/* Daily Dispatcher Checklist */}
      <div className="info-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <h2 className="section-title mb-0">Daily Dispatcher Routine</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-success">Morning (Start of Day)</h4>
            <ul className="text-sm space-y-2">
              {[
                "Check overnight tracking alerts",
                "Review today's pickups scheduled",
                "Verify driver confirmations received",
                "Check weather/traffic on key routes",
                "Address urgent issues first",
                "Brief team on priorities"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-success flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-info">Midday (Ongoing)</h4>
            <ul className="text-sm space-y-2">
              {[
                "Update tracking statuses proactively",
                "Respond to queries within 30 min",
                "Document all changes in TMS",
                "Escalate issues early, not late",
                "Plan tomorrow's pickups",
                "Check for backhaul opportunities"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-info flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-warning">Evening (End of Day)</h4>
            <ul className="text-sm space-y-2">
              {[
                "Confirm all deliveries completed",
                "Chase missing PODs immediately",
                "Update TMS with final status",
                "Prepare handover notes if needed",
                "Review next day schedule",
                "Flag potential issues for tomorrow"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-warning flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Documentation Checklist */}
      <div className="info-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Camera className="w-5 h-5 text-primary" />
          </div>
          <h2 className="section-title mb-0">Documentation Best Practices</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Photo Documentation (Always)</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Before loading: Empty, clean trailer",
                "During loading: Cargo placement, securing",
                "After loading: Full load, straps visible",
                "Seal numbers: Close-up of all seals",
                "Any damage: Before accepting/delivering",
                "POD: If electronic, photo of signed CMR",
                "Temperature: Recorder display for reefer"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 p-2 bg-muted/30 rounded">
                  <Camera className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Document Retention</h3>
            <DataTable
              headers={["Document", "Retention", "Format"]}
              rows={[
                ["CMR/POD", "5 years", "Original + scan"],
                ["Transport orders", "5 years", "Digital OK"],
                ["Invoices", "7-10 years", "As per tax law"],
                ["Tachograph data", "2 years", "Digital download"],
                ["Insurance certs", "Policy + 3 years", "Verified copies"],
                ["Carrier docs", "Active + 3 years", "Digital OK"],
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
