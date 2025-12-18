import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Checklist } from "../Checklist";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Users, Shield, FileCheck, AlertTriangle, CheckCircle2, Star, Handshake, Scale, TrendingUp, Clock, Euro, Phone, BadgeCheck } from "lucide-react";

export function CarrierManagementChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Carrier Management</h1>
        <p className="text-lg text-muted-foreground">
          Complete guide to building, qualifying, managing, and developing relationships with transport carriers and subcontractors in European road freight.
        </p>
      </div>

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Handshake className="w-6 h-6 text-primary" />
          The Strategic Importance of Carrier Management
        </h2>
        <p className="text-muted-foreground mb-4">
          Your carrier network is the operational backbone of your freight forwarding business. Without reliable, qualified carriers, you cannot deliver on your promises to clients. Effective carrier management directly impacts service quality, cost efficiency, and business profitability.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-background p-4 rounded-lg">
            <p className="text-2xl font-bold text-primary">60-70%</p>
            <p className="text-sm text-muted-foreground">of transport cost is carrier cost</p>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <p className="text-2xl font-bold text-primary">85%+</p>
            <p className="text-sm text-muted-foreground">target on-time performance</p>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <p className="text-2xl font-bold text-primary">3-5</p>
            <p className="text-sm text-muted-foreground">backup carriers per lane</p>
          </div>
        </div>
      </div>

      {/* Carrier Types */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          Types of Carriers in European Road Freight
        </h2>
        
        <DataTable
          headers={["Type", "Description", "Typical Size", "Best For"]}
          rows={[
            ["Fleet Owner", "Company owning multiple trucks and employing drivers", "10-500+ trucks", "Regular lanes, volume contracts, reliability"],
            ["Owner-Operator", "Single truck owner who drives themselves", "1-3 trucks", "Spot market, flexibility, specialized routes"],
            ["Agent/Broker", "Intermediary who subcontracts to other carriers", "No own fleet", "Capacity in peak periods, hard-to-fill lanes"],
            ["Cooperative", "Association of owner-operators", "20-100+ trucks", "Regional expertise, competitive rates"],
            ["Integrated Carrier", "Large company with own fleet + subcontractors", "100-1000+ trucks", "Pan-European coverage, one-stop shop"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">Preferred: Direct Fleet Owners</h4>
            <ul className="text-sm space-y-1">
              <li>• Better control over service quality</li>
              <li>• Direct communication with operations</li>
              <li>• More predictable pricing</li>
              <li>• Easier to build long-term relationships</li>
            </ul>
          </div>
          <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
            <h4 className="font-semibold text-warning mb-2">Caution: Agent/Broker Chains</h4>
            <ul className="text-sm space-y-1">
              <li>• Less control over actual carrier</li>
              <li>• Higher risk of service failures</li>
              <li>• Communication delays through layers</li>
              <li>• Unclear liability chain</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Carrier Qualification */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          Carrier Qualification & Vetting Process
        </h2>
        
        <p className="text-muted-foreground mb-6">
          Never work with an unvetted carrier. Proper qualification protects your company, your clients, and your reputation. A single incident with an unqualified carrier can cost thousands in claims and permanent loss of client trust.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Checklist
            title="Mandatory Documents"
            items={[
              "Valid EU Community License (transport license)",
              "CMR Insurance Certificate (min €100,000)",
              "Company registration / VAT certificate",
              "Fleet insurance documentation",
              "Good repute certificate (operator CPC)",
              "Financial standing proof",
            ]}
          />
          
          <Checklist
            title="Additional Verification"
            items={[
              "Trade references (min 2-3 existing customers)",
              "Credit check through agencies",
              "Freight exchange ratings review",
              "Company age verification (>2 years preferred)",
              "Physical address verification",
              "Management contact details",
            ]}
          />
        </div>

        <div className="mt-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
          <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Red Flags During Qualification
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-1">
              <li>• Company less than 6 months old</li>
              <li>• No physical office address</li>
              <li>• Insurance certificate expired or invalid</li>
              <li>• Refuses to provide references</li>
              <li>• Listed on fraud databases</li>
            </ul>
            <ul className="space-y-1">
              <li>• Very low freight exchange ratings</li>
              <li>• Communication only via mobile/WhatsApp</li>
              <li>• Prices significantly below market</li>
              <li>• Unclear payment terms demands</li>
              <li>• No signed contracts accepted</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Insurance Requirements */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <FileCheck className="w-6 h-6 text-primary" />
          Insurance Requirements & Verification
        </h2>

        <DataTable
          headers={["Insurance Type", "Minimum Coverage", "Purpose", "Verification"]}
          rows={[
            ["CMR Liability", "€100,000 per incident", "Carrier liability for cargo damage/loss", "Certificate with validity date"],
            ["Motor Third Party", "Legal minimum (varies by country)", "Vehicle accidents, third party damage", "Green card or certificate"],
            ["Goods in Transit", "Optional, €50,000-500,000", "Extended cargo protection", "Policy document"],
            ["Public Liability", "€1,000,000+", "Damage to property during operations", "Certificate"],
            ["Employers Liability", "Legal requirement", "Driver injuries, accidents", "Certificate"],
          ]}
        />

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mt-4">
          <p className="text-sm">
            <strong>Important:</strong> Always verify insurance validity dates. Request updated certificates quarterly. CMR liability is mandatory for international road transport under the CMR Convention.
          </p>
        </div>

        <h3 className="font-semibold mt-6 mb-3">CMR Insurance Verification Checklist</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
            <span>Certificate shows carrier company name exactly matching their registration</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
            <span>Coverage amount meets your requirements (min €100,000, higher for valuable cargo)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
            <span>Policy valid for international road transport (not just domestic)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
            <span>Expiry date is future-dated (request renewal 30 days before expiry)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
            <span>Insurer is reputable (check EU insurance registers if needed)</span>
          </li>
        </ul>
      </div>

      {/* Carrier Segmentation */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Star className="w-6 h-6 text-primary" />
          Carrier Segmentation & Tiering
        </h2>
        
        <p className="text-muted-foreground mb-4">
          Not all carriers are equal. Segment your carrier base to allocate work appropriately, manage risk, and reward good performance.
        </p>

        <DataTable
          headers={["Tier", "Criteria", "Load Allocation", "Payment Terms"]}
          rows={[
            ["⭐⭐⭐ Strategic (A)", "Excellent performance, long relationship, reliable capacity", "First priority, 50-60% of volume", "Net 30-45 days"],
            ["⭐⭐ Preferred (B)", "Good performance, proven reliability, competitive rates", "Second priority, 25-35% of volume", "Net 21-30 days"],
            ["⭐ Approved (C)", "Qualified, acceptable performance, backup capacity", "Third priority, 10-15% of volume", "Net 14-21 days"],
            ["🆕 Probation", "New carriers, limited history, under evaluation", "Trial loads only, <5% of volume", "Prepay or Net 7"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Moving Up Tiers</h4>
            <ul className="text-sm space-y-1">
              <li>• 10+ successful deliveries without issues</li>
              <li>• 95%+ on-time performance</li>
              <li>• No claims in last 6 months</li>
              <li>• Responsive communication</li>
              <li>• Competitive and fair pricing</li>
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Moving Down Tiers / Removal</h4>
            <ul className="text-sm space-y-1">
              <li>• Repeated service failures</li>
              <li>• On-time below 85%</li>
              <li>• Claims without resolution</li>
              <li>• Unresponsive communication</li>
              <li>• Price manipulation attempts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Negotiation */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Scale className="w-6 h-6 text-primary" />
          Negotiation Skills with Carriers
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-success">Do's</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Be fair and transparent about requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Provide accurate cargo and timing information</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Negotiate based on total value, not just price</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Offer regular volume for better rates</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Pay on time, every time</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Build personal relationships with key contacts</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-destructive">Don'ts</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>Never squeeze carriers to unprofitable rates</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>Don't hide information about difficult loads</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>Avoid last-minute changes without compensation</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>Don't threaten or use aggressive tactics</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>Never promise volume you cannot deliver</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>Avoid paying late or disputing valid charges</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg mt-6">
          <h4 className="font-semibold mb-2">Key Negotiation Principle</h4>
          <p className="text-sm">
            Carriers are your operational partners, not adversaries. A carrier who loses money on your loads will deprioritize your freight, leading to service failures. Sustainable pricing benefits everyone.
          </p>
        </div>
      </div>

      {/* Rate Factors */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Euro className="w-6 h-6 text-primary" />
          Factors Affecting Carrier Rates
        </h2>

        <DataTable
          headers={["Factor", "Impact on Rate", "How to Leverage"]}
          rows={[
            ["Distance & Route", "Primary cost driver", "Offer return loads, triangulation"],
            ["Pickup/Delivery Location", "+10-25% for difficult access", "Clear instructions, realistic time slots"],
            ["Loading Type", "Varies significantly", "Match equipment to cargo properly"],
            ["Urgency", "+20-50% for express/same-day", "Plan ahead, avoid last-minute bookings"],
            ["Cargo Type", "ADR +30-50%, Reefer +20-40%", "Accurate cargo description upfront"],
            ["Seasonality", "+15-40% in peak periods", "Book early, use contract rates"],
            ["Market Conditions", "Supply/demand driven", "Monitor freight exchanges, adjust timing"],
            ["Backload Availability", "-10-25% if good backload", "Help carriers find return loads"],
            ["Payment Terms", "-5-10% for quick payment", "Offer faster payment for better rates"],
            ["Volume Commitment", "-5-15% for regular volume", "Consolidate and commit volume"],
          ]}
        />
      </div>

      {/* Communication Standards */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Phone className="w-6 h-6 text-primary" />
          Communication Standards with Carriers
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <InfoCard title="Order Confirmation" icon={FileCheck}>
            <ul className="text-sm space-y-1">
              <li>• Send written order within 30 min</li>
              <li>• Include all details (addresses, contacts, cargo)</li>
              <li>• Require written acceptance</li>
              <li>• Confirm driver details 24h before</li>
            </ul>
          </InfoCard>
          
          <InfoCard title="During Transport" icon={Clock}>
            <ul className="text-sm space-y-1">
              <li>• Loading confirmation required</li>
              <li>• GPS tracking or manual updates</li>
              <li>• Immediate issue notification</li>
              <li>• Delivery ETA updates</li>
            </ul>
          </InfoCard>
          
          <InfoCard title="Post-Delivery" icon={CheckCircle2}>
            <ul className="text-sm space-y-1">
              <li>• POD within 24 hours</li>
              <li>• Invoice per agreed terms</li>
              <li>• Issue resolution within 48h</li>
              <li>• Performance feedback</li>
            </ul>
          </InfoCard>
        </div>

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Common Communication Failures
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-1">
              <li>• Incomplete order information</li>
              <li>• No written confirmation</li>
              <li>• Delayed issue reporting</li>
            </ul>
            <ul className="space-y-1">
              <li>• Missing contact details</li>
              <li>• Unclear special requirements</li>
              <li>• No tracking updates during transit</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Performance Management */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          Carrier Performance Metrics
        </h2>

        <DataTable
          headers={["KPI", "Target", "Measurement", "Review Frequency"]}
          rows={[
            ["On-Time Pickup", "≥95%", "Arrival within 30 min of slot", "Weekly"],
            ["On-Time Delivery", "≥95%", "Delivery within agreed window", "Weekly"],
            ["POD Submission", "≥90% within 24h", "Signed POD received", "Weekly"],
            ["Damage Rate", "<1%", "Shipments with damage claims", "Monthly"],
            ["Communication Score", "≥4/5", "Responsiveness, updates, professionalism", "Monthly"],
            ["Invoice Accuracy", "≥98%", "Correct pricing, no disputes", "Monthly"],
            ["Load Acceptance Rate", "≥80%", "Offers accepted vs offered", "Monthly"],
            ["Capacity Reliability", "≥90%", "Confirmed loads executed", "Monthly"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-success/10 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">Reward High Performers</h4>
            <ul className="text-sm space-y-1">
              <li>• Priority load allocation</li>
              <li>• Extended payment terms</li>
              <li>• Annual volume commitments</li>
              <li>• Preferred carrier status</li>
              <li>• Public recognition</li>
            </ul>
          </div>
          <div className="bg-destructive/10 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">Address Poor Performers</h4>
            <ul className="text-sm space-y-1">
              <li>• Formal improvement plan</li>
              <li>• Reduced load allocation</li>
              <li>• Closer monitoring</li>
              <li>• Tier downgrade</li>
              <li>• Ultimate removal if no improvement</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Building Relationships */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <BadgeCheck className="w-6 h-6 text-primary" />
          Building Long-Term Carrier Relationships
        </h2>

        <div className="prose prose-slate max-w-none">
          <p>
            The most successful freight forwarders invest heavily in carrier relationships. Long-term partnerships deliver better rates, priority capacity, and superior service quality compared to transactional spot market relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="font-semibold mb-3">Relationship Building Strategies</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Consistency:</strong> Provide regular, predictable volume</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Fair Treatment:</strong> Pay on time, resolve disputes fairly</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Communication:</strong> Regular business reviews, feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Support:</strong> Help with backloads, share market intel</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Respect:</strong> Treat drivers and staff professionally</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Benefits of Strong Relationships</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-warning mt-0.5" />
                <span>Priority capacity during peak periods</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-warning mt-0.5" />
                <span>Better rates through volume discounts</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-warning mt-0.5" />
                <span>Faster problem resolution</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-warning mt-0.5" />
                <span>More flexible service arrangements</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-warning mt-0.5" />
                <span>Market intelligence sharing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Carrier Database */}
      <div className="info-card bg-muted/30">
        <h2 className="section-title">Carrier Database Management</h2>
        
        <p className="text-muted-foreground mb-4">
          Maintain a comprehensive carrier database in your TMS with the following information for each carrier:
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-background p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Company Details</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Company name & registration</li>
              <li>• VAT number</li>
              <li>• Physical address</li>
              <li>• Bank details</li>
              <li>• Key contacts</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Operational Info</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Fleet size & types</li>
              <li>• Geographic coverage</li>
              <li>• Specializations (ADR, reefer)</li>
              <li>• Equipment specifications</li>
              <li>• GPS tracking capability</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Compliance & Performance</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Insurance expiry dates</li>
              <li>• License validity</li>
              <li>• Performance scores</li>
              <li>• Tier classification</li>
              <li>• Payment terms agreed</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 p-4 bg-info/10 border border-info/30 rounded-lg">
          <p className="text-sm">
            <strong>Pro Tip:</strong> Set automatic reminders 60 days before insurance and license expiry dates. Request updated documents proactively to avoid service interruptions.
          </p>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["carrier-management"] && (
        <Quiz
          title="Carrier Management Knowledge Check"
          questions={quizzes["carrier-management"]}
          chapterId="carrier-management"
          questionsPerRound={5}
        />
      )}
    </div>
  );
}
