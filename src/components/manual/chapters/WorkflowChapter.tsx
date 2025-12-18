import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Quiz } from "../Quiz";
import { FlowDiagram, ProcessMap, DecisionDiagram } from "../FlowDiagram";
import { Checklist } from "../Checklist";
import { quizzes } from "@/data/quizData";
import {
  ClipboardList, Search, Calculator, Play, Package, 
  ArrowRight, CheckCircle2, AlertCircle, Clock, Phone,
  FileText, Truck, MapPin, Users, Euro, Shield, Calendar,
  MessageSquare, AlertTriangle, Info, Target, Zap, Mail,
  Globe, Building2, Route, TrendingUp
} from "lucide-react";

export function WorkflowChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Operational Workflow (End-to-End)</h1>
        <p className="text-lg text-muted-foreground">
          The complete process from customer request to delivery completion, with detailed procedures, 
          best practices, and real-world examples for every stage of freight forwarding operations.
        </p>
      </div>

      {/* Introduction to Workflow */}
      <div className="info-card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Route className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="section-title mb-2">Understanding the Freight Forwarding Workflow</h2>
            <p className="text-muted-foreground mb-4">
              Every successful transport starts with a structured approach. The workflow described in this chapter 
              has been refined over decades of industry experience. Following these steps ensures consistency, 
              reduces errors, and builds trust with clients and partners.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-semibold text-primary">Average Orders/Day</p>
                <p className="text-muted-foreground">15-25 per dispatcher</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-semibold text-primary">Processing Time</p>
                <p className="text-muted-foreground">15-45 min per order</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-semibold text-primary">Key Metrics</p>
                <p className="text-muted-foreground">OTD, Margin, Claims</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Flow Diagram */}
      <FlowDiagram
        title="End-to-End Workflow Process"
        steps={[
          { id: "intake", label: "Intake", description: "Customer request", color: "primary" },
          { id: "sourcing", label: "Sourcing", description: "Find capacity", color: "info" },
          { id: "costing", label: "Costing", description: "Calculate price", color: "warning" },
          { id: "execution", label: "Execution", description: "Plan & track", color: "success" },
          { id: "delivery", label: "Delivery", description: "POD & close", color: "primary" },
        ]}
      />

      {/* Detailed Process Map */}
      <ProcessMap
        title="Detailed Process Breakdown"
        phases={[
          {
            name: "Intake Phase",
            color: "primary",
            steps: [
              "Collect shipment details",
              "Verify addresses & contacts",
              "Check time windows",
              "Confirm Incoterms",
              "Assess feasibility"
            ]
          },
          {
            name: "Sourcing Phase",
            color: "info",
            steps: [
              "Check own fleet availability",
              "Contact preferred carriers",
              "Post on spot market",
              "Verify carrier documents",
              "Confirm vehicle specs"
            ]
          },
          {
            name: "Costing Phase",
            color: "warning",
            steps: [
              "Calculate base cost (€/km)",
              "Add tolls & ferries",
              "Include accessorials",
              "Apply margin (8-18%)",
              "Prepare quote options"
            ]
          },
          {
            name: "Execution Phase",
            color: "success",
            steps: [
              "Plan route & breaks",
              "Send loading instructions",
              "Track milestones",
              "Communicate delays",
              "Update ETA proactively"
            ]
          },
          {
            name: "Delivery Phase",
            color: "primary",
            steps: [
              "Confirm delivery time",
              "Collect signed POD",
              "Check for damages",
              "Calculate actual margin",
              "Rate carrier performance"
            ]
          },
          {
            name: "Post-Trip Phase",
            color: "info",
            steps: [
              "Archive all documents",
              "Invoice customer",
              "Pay carrier",
              "Analyze profitability",
              "Update lane database"
            ]
          }
        ]}
      />

      {/* 1. Intake - Expanded */}
      <div className="info-card">
        <h2 className="section-title text-primary flex items-center gap-3">
          <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
          Intake (Customer Request)
        </h2>
        
        <div className="space-y-6">
          {/* Essential Information */}
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Essential Information to Collect:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Pickup Details", items: ["Full address with postal code", "Contact name & phone", "Opening hours", "Dock/gate number", "Reference number"] },
                { title: "Delivery Details", items: ["Full address with postal code", "Contact name & phone", "Opening hours", "Unloading equipment", "Advance booking required?"] },
                { title: "Cargo Information", items: ["Weight (gross & net)", "Number of pallets/colli", "Dimensions (L×W×H)", "Stackability (yes/no)", "Hazmat classification"] },
                { title: "Time Requirements", items: ["Pickup date & time window", "Delivery deadline (firm/flexible)", "Transit time expectations", "Weekend loading/delivery?", "Holiday considerations"] },
                { title: "Vehicle Specification", items: ["Truck type required", "Loading side (rear/side/top)", "Height requirements (mega?)", "Temperature requirements", "Tail lift needed?"] },
                { title: "Commercial Terms", items: ["Incoterms (EXW, FCA, DAP, etc.)", "Who pays waiting time?", "Insurance requirements", "Special handling", "POD requirements"] },
              ].map((section, i) => (
                <div key={i} className="p-3 bg-card rounded-lg border border-border">
                  <h4 className="font-medium text-primary mb-2">{section.title}</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-success flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Incoterms Quick Reference */}
          <div className="p-4 bg-info/5 rounded-lg border border-info/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-info" />
              Common Incoterms Quick Reference
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
              <div className="p-2 bg-card rounded">
                <p className="font-semibold text-info">EXW</p>
                <p className="text-muted-foreground">Buyer arranges all, we collect from factory</p>
              </div>
              <div className="p-2 bg-card rounded">
                <p className="font-semibold text-info">FCA</p>
                <p className="text-muted-foreground">Seller loads, risk transfers at handover</p>
              </div>
              <div className="p-2 bg-card rounded">
                <p className="font-semibold text-info">DAP</p>
                <p className="text-muted-foreground">We deliver to location, buyer unloads</p>
              </div>
              <div className="p-2 bg-card rounded">
                <p className="font-semibold text-info">DDP</p>
                <p className="text-muted-foreground">Full delivery incl. customs/duties</p>
              </div>
            </div>
          </div>

          {/* Feasibility Assessment */}
          <div className="p-4 bg-warning/5 rounded-lg border border-warning/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-warning" />
              Feasibility Assessment Checklist
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium mb-2">Before accepting the order, verify:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>☐ Transit time is realistic with legal driving hours</li>
                  <li>☐ No driving bans affect the route (weekends, holidays)</li>
                  <li>☐ Vehicle specification matches cargo requirements</li>
                  <li>☐ Weight is within legal limits for all countries</li>
                  <li>☐ No special permits required (or can be arranged)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Red flags to watch for:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>⚠️ Impossibly tight deadlines</li>
                  <li>⚠️ Unclear or incomplete addresses</li>
                  <li>⚠️ No contact person at pickup/delivery</li>
                  <li>⚠️ Unusual cargo without proper documentation</li>
                  <li>⚠️ Payment terms unclear or missing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Communication Template */}
          <div className="p-4 bg-success/5 rounded-lg border border-success/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-success" />
              Request Confirmation Template
            </h3>
            <div className="bg-card p-4 rounded-lg text-sm font-mono">
              <p className="text-muted-foreground">
                Dear [Client],<br/><br/>
                Thank you for your transport request. Please confirm the following details:<br/><br/>
                <strong>Pickup:</strong> [Address], [Date] [Time window]<br/>
                <strong>Delivery:</strong> [Address], [Date] [Time window]<br/>
                <strong>Cargo:</strong> [Pallets/Weight/Dimensions]<br/>
                <strong>Vehicle:</strong> [Type]<br/>
                <strong>Our reference:</strong> [REF-XXXXX]<br/><br/>
                Please confirm or advise any corrections.<br/><br/>
                Best regards,<br/>
                [Your name]
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Capacity Sourcing - Expanded */}
      <div className="info-card">
        <h2 className="section-title text-primary flex items-center gap-3">
          <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
          Capacity Sourcing
        </h2>
        
        <div className="space-y-6">
          {/* Priority Order */}
          <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
            <h3 className="font-semibold mb-3">Sourcing Priority Order:</h3>
            <div className="space-y-4">
              {[
                { num: 1, title: "Own Fleet", desc: "Best margins, full control, quality assured", time: "Immediate" },
                { num: 2, title: "Preferred Carriers", desc: "Vetted partners, agreed rates, reliable service", time: "15-30 min" },
                { num: 3, title: "Carrier Network", desc: "Secondary partners, good history, competitive rates", time: "30-60 min" },
                { num: 4, title: "Spot Market", desc: "TIMOCOM, Trans.eu, Teleroute, Transporeon – use as last resort", time: "1-4 hours" },
              ].map((item) => (
                <div key={item.num} className="flex items-center gap-4">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="text-xs bg-muted px-2 py-1 rounded">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Freight Exchanges */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Freight Exchange Platforms
            </h3>
            <DataTable
              headers={["Platform", "Coverage", "Strengths", "Typical Use"]}
              rows={[
                ["TIMOCOM", "EU-wide, DACH focus", "Large network, verified members, good DE carriers", "Standard EU FTL, reliable capacity"],
                ["Trans.eu", "Eastern Europe focus", "Strong PL/CZ/HU network, competitive rates", "East-West routes, budget capacity"],
                ["Teleroute", "Western Europe", "FR/BE/NL strong, quality carriers", "Benelux routes, FR domestic"],
                ["Transporeon Spot", "Premium carriers", "High quality, tracking, KPI reports", "Premium clients, time-critical"],
                ["LoadFox", "Germany specialist", "AI matching, instant booking", "DE domestic, last-minute"],
              ]}
            />
          </div>

          {/* Carrier Verification */}
          <div className="p-4 bg-warning/5 rounded-lg border border-warning/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-warning" />
              Carrier Verification Checklist
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium mb-2">Required Documents:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>☐ Valid transport license (Community License)</li>
                  <li>☐ CMR insurance certificate (min €100,000)</li>
                  <li>☐ Goods in transit insurance</li>
                  <li>☐ Company registration / VAT number</li>
                  <li>☐ VIES VAT validation (EU carriers)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Additional Checks:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>☐ Exchange platform rating (if applicable)</li>
                  <li>☐ Payment history (if returning carrier)</li>
                  <li>☐ Vehicle age and condition</li>
                  <li>☐ Driver language capabilities</li>
                  <li>☐ GPS/tracking availability</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Spot Market Tips */}
          <div className="p-4 bg-info/5 rounded-lg border border-info/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-info" />
              Spot Market Best Practices
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li><strong>DO:</strong> Check carrier rating before booking</li>
                <li><strong>DO:</strong> Verify insurance validity dates</li>
                <li><strong>DO:</strong> Confirm vehicle specs match requirements</li>
                <li><strong>DO:</strong> Get driver details and plate number</li>
              </ul>
              <ul className="space-y-2">
                <li><strong>DON'T:</strong> Accept suspiciously low rates</li>
                <li><strong>DON'T:</strong> Skip document verification</li>
                <li><strong>DON'T:</strong> Book without written confirmation</li>
                <li><strong>DON'T:</strong> Ignore negative reviews/ratings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Costing & Quote - Expanded */}
      <div className="info-card">
        <h2 className="section-title text-primary flex items-center gap-3">
          <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
          Costing & Quote
        </h2>
        
        <div className="space-y-6">
          {/* Base Cost Formula */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-2">Base Cost Formula</h3>
              <p className="text-3xl font-mono text-primary mb-2">€1.10-1.25/km</p>
              <p className="text-sm text-muted-foreground">× total route kilometers (loaded + empty)</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-2">Target Margin Range</h3>
              <p className="text-3xl font-mono text-primary mb-2">8–18%</p>
              <p className="text-sm text-muted-foreground">Adjust based on client, urgency, competition</p>
            </div>
          </div>

          {/* Cost Components */}
          <div>
            <h3 className="font-semibold mb-3">Cost Components to Include:</h3>
            <DataTable
              headers={["Component", "Calculation", "Example (1000km DE→FR)", "Notes"]}
              rows={[
                ["Base transport", "km × €1.10-1.25", "€1,150", "Includes driver, fuel, vehicle"],
                ["DE tolls", "km × €0.348", "€174 (500km)", "LKW-Maut OBU required"],
                ["FR tolls", "km × €0.28-0.33", "€153 (500km)", "Varies by concessionaire"],
                ["Ferry/tunnel", "Fixed per crossing", "N/A", "Add if applicable"],
                ["Waiting time", "€35-50/hour", "€75 (1.5h est)", "First 2h often free"],
                ["Loading/unloading", "€25-50/stop", "€50", "Extra stops"],
                ["Weekend delivery", "+15-25%", "If applicable", "Check driving bans"],
              ]}
            />
          </div>

          {/* Quote Options */}
          <div className="p-4 bg-success/5 rounded-lg border border-success/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-success" />
              Always Offer Options
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-lg">
                <h4 className="font-medium mb-2 text-success">Economy Option</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Standard transit time (2-3 days)</li>
                  <li>• Flexible pickup/delivery windows</li>
                  <li>• Grouped with other shipments if possible</li>
                  <li>• Lower margin (8-12%)</li>
                </ul>
              </div>
              <div className="p-4 bg-card rounded-lg">
                <h4 className="font-medium mb-2 text-primary">Express Option</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Fastest possible transit</li>
                  <li>• Dedicated vehicle</li>
                  <li>• Fixed time windows</li>
                  <li>• Premium margin (15-25%)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quote Email Template */}
          <div className="p-4 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-3">Quote Email Template</h3>
            <div className="bg-card p-4 rounded-lg text-sm font-mono">
              <p className="text-muted-foreground">
                Subject: Quote [REF] - [Route] - [Date]<br/><br/>
                Dear [Client],<br/><br/>
                Please find our quote for your requested transport:<br/><br/>
                <strong>Route:</strong> [Pickup] → [Delivery]<br/>
                <strong>Cargo:</strong> [Details]<br/>
                <strong>Vehicle:</strong> [Type]<br/><br/>
                <strong>Option A (Economy):</strong> €X,XXX - Transit: X days<br/>
                <strong>Option B (Express):</strong> €X,XXX - Transit: X days<br/><br/>
                Prices are valid until [Date] and include all tolls.<br/>
                Excludes: waiting time over 2h, weekend surcharges.<br/><br/>
                Please confirm to proceed with booking.<br/><br/>
                Best regards
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Execution - Expanded */}
      <div className="info-card">
        <h2 className="section-title text-primary flex items-center gap-3">
          <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
          Execution
        </h2>
        
        <div className="space-y-6">
          {/* Route Planning */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-info/5 rounded-lg border border-info/20">
              <h3 className="font-semibold text-info mb-2 flex items-center gap-2">
                <Route className="w-5 h-5" />
                Route Planning Requirements
              </h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 45-minute break after 4h30 driving</li>
                <li>• 11h daily rest (or 9h reduced max 3×/week)</li>
                <li>• 45h weekly rest (or 24h reduced every 2 weeks)</li>
                <li>• Consider driving bans (DE, AT, FR weekends)</li>
                <li>• Plan secure parking for overnight</li>
              </ul>
            </div>
            <div className="p-4 bg-success/5 rounded-lg border border-success/20">
              <h3 className="font-semibold text-success mb-2 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Milestone Tracking
              </h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>✓ Pickup confirmed (with CMR photo)</li>
                <li>✓ Border crossing (if applicable)</li>
                <li>✓ Rest stops / overnight</li>
                <li>✓ ETA updates (min 2x daily)</li>
                <li>✓ Delivery confirmed (POD received)</li>
              </ul>
            </div>
          </div>

          {/* Communication Timeline */}
          <div>
            <h3 className="font-semibold mb-3">Proactive Communication Timeline</h3>
            <DataTable
              headers={["Timing", "Action", "To Whom", "Method"]}
              rows={[
                ["Day before pickup", "Confirm pickup details", "Driver + Client", "Email/TMS"],
                ["Pickup complete", "Confirm loading, send CMR", "Client", "Email + Photo"],
                ["Daily (AM)", "Position update + ETA", "Client", "Email/Portal"],
                ["Any delay", "Immediate notification", "Client + Internal", "Phone + Email"],
                ["Day before delivery", "Confirm delivery slot", "Receiver + Client", "Phone/Email"],
                ["Delivery complete", "Send POD, confirm closure", "Client", "Email + TMS"],
              ]}
            />
          </div>

          {/* Delay Management */}
          <div className="p-4 bg-warning/5 rounded-lg border border-warning/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              Delay Management Protocol
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-card rounded-lg">
                <p className="font-medium mb-2">1. Assess Impact</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• How long is the delay?</li>
                  <li>• Does it affect delivery time?</li>
                  <li>• Any penalties at risk?</li>
                </ul>
              </div>
              <div className="p-3 bg-card rounded-lg">
                <p className="font-medium mb-2">2. Find Solutions</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Alternative route possible?</li>
                  <li>• Driver swap option?</li>
                  <li>• New delivery slot needed?</li>
                </ul>
              </div>
              <div className="p-3 bg-card rounded-lg">
                <p className="font-medium mb-2">3. Communicate</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Inform client immediately</li>
                  <li>• Offer solutions, not excuses</li>
                  <li>• Document everything</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Delivery & Post-Trip - Expanded */}
      <div className="info-card">
        <h2 className="section-title text-primary flex items-center gap-3">
          <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">5</span>
          Delivery & Post-Trip
        </h2>
        
        <div className="space-y-6">
          {/* Delivery Icons */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <Package className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Collect POD</h3>
              <p className="text-sm text-muted-foreground">Signed CMR/POD within 24h</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <Calculator className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Calculate Margin</h3>
              <p className="text-sm text-muted-foreground">Actual vs planned costs</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Rate Carrier</h3>
              <p className="text-sm text-muted-foreground">Update performance records</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Archive Docs</h3>
              <p className="text-sm text-muted-foreground">CMR, POD, invoices</p>
            </div>
          </div>

          {/* POD Checklist */}
          <Checklist
            title="POD Verification Checklist"
            items={[
              "CMR signed by receiver with date & time",
              "Stamp or company identification visible",
              "No damage remarks (or documented if any)",
              "All pieces/pallets accounted for",
              "Readable photo/scan uploaded to TMS",
              "Cross-reference with delivery confirmation"
            ]}
          />

          {/* Post-Trip Analysis */}
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Post-Trip Analysis Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium mb-2">Profitability Check:</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Was actual margin as planned?</li>
                  <li>• Any unexpected costs (waiting, detour)?</li>
                  <li>• Should rate be adjusted for next time?</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Quality Check:</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Was delivery on time?</li>
                  <li>• Any damage or complaints?</li>
                  <li>• Would we use this carrier again?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Issues & Solutions */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-primary" />
          Common Issues & Solutions
        </h2>
        <DataTable
          headers={["Issue", "Immediate Action", "Prevention", "Escalation"]}
          rows={[
            ["Driver doesn't arrive", "Contact driver, check GPS, prepare backup", "Confirm day before, track from start", "After 1h delay, inform client + manager"],
            ["Loading refused", "Document reason, contact client", "Verify specs beforehand, photo truck", "Immediate if cargo at risk"],
            ["Vehicle breakdown", "Arrange repair/replacement, inform client", "Use reliable carriers, age checks", "If delivery at risk"],
            ["Client not available", "Wait, call, document attempts", "Pre-confirm contact details", "After 1h waiting"],
            ["Damage at delivery", "Photo evidence, note on CMR", "Photo at loading, proper securing", "Immediate if significant"],
            ["POD not returned", "Chase driver/carrier daily", "Automate POD collection via TMS", "After 48h, escalate to carrier manager"],
          ]}
        />
      </section>

      {/* KPIs */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          Key Performance Indicators
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "On-Time Delivery", target: ">95%", desc: "Deliveries within agreed window" },
            { name: "Average Margin", target: "10-15%", desc: "Profit per shipment" },
            { name: "Claims Rate", target: "<0.5%", desc: "Damage/loss claims vs shipments" },
            { name: "POD Collection", target: "<48h", desc: "Time to receive signed POD" },
            { name: "Quote Conversion", target: ">30%", desc: "Quotes converted to orders" },
            { name: "Client Retention", target: ">85%", desc: "Repeat clients annually" },
          ].map((kpi, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-4">
              <h3 className="font-semibold mb-1">{kpi.name}</h3>
              <p className="text-2xl font-bold text-primary mb-1">{kpi.target}</p>
              <p className="text-sm text-muted-foreground">{kpi.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Reference Checklists */}
      <div className="grid md:grid-cols-2 gap-6">
        <Checklist
          title="Daily Start Checklist"
          items={[
            "Check overnight messages/alerts",
            "Review today's pickups & deliveries",
            "Verify driver status & positions",
            "Follow up pending PODs",
            "Update TMS with latest info",
            "Prepare for urgent requests"
          ]}
        />
        <Checklist
          title="End of Day Checklist"
          items={[
            "All active shipments updated",
            "Tomorrow's loadings confirmed",
            "PODs collected and filed",
            "Client queries responded",
            "Handover notes for night shift",
            "Weekly planning reviewed"
          ]}
        />
      </div>

      {/* Quiz */}
      <Quiz title="🎯 Knowledge Check: Operational Workflow" questions={quizzes.workflow} chapterId="workflow" />
    </div>
  );
}
