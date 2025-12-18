import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Euro, TrendingUp, Users, Target, MessageSquare, Mail, FileText, CheckCircle2, AlertTriangle, Clock, Briefcase, Star, Building2 } from "lucide-react";

export function CommercialChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Commercial Fundamentals</h1>
        <p className="text-lg text-muted-foreground">
          Master the commercial aspects of freight forwarding: pricing strategies, client communication, account management, and business development.
        </p>
      </div>

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Briefcase className="w-6 h-6 text-primary" />
          The Commercial Foundation
        </h2>
        <p className="text-muted-foreground mb-4">
          Freight forwarding is fundamentally a commercial business. Success depends not just on operational excellence, but on your ability to attract clients, price services competitively, and build lasting commercial relationships.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">8-18%</p>
            <p className="text-sm text-muted-foreground">Typical margin range</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">30 min</p>
            <p className="text-sm text-muted-foreground">Max quote response time</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">80/20</p>
            <p className="text-sm text-muted-foreground">Revenue concentration rule</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">95%+</p>
            <p className="text-sm text-muted-foreground">Client retention target</p>
          </div>
        </div>
      </div>

      {/* Pricing Strategy */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Euro className="w-6 h-6 text-primary" />
          Building Transport Prices
        </h2>

        <div className="bg-muted/50 p-4 rounded-lg mb-6 font-mono text-sm">
          <p className="text-muted-foreground mb-2">Complete Pricing Formula:</p>
          <p className="font-bold">
            Final Price = (Distance × Base Rate) + Tolls + Ferries/Tunnels + Accessories + Surcharges × (1 + Margin%)
          </p>
        </div>

        <h3 className="font-semibold mb-3">Cost Components Breakdown</h3>
        <DataTable
          headers={["Component", "Typical Range", "Notes"]}
          rows={[
            ["Base Rate (km cost)", "€1.10-1.25/km", "Includes fuel, driver, vehicle depreciation"],
            ["Fuel Surcharge", "Variable", "Adjust based on diesel price index"],
            ["Road Tolls", "€0.09-0.55/km", "Country and vehicle specific"],
            ["Ferry/Tunnel", "€150-600/crossing", "Book early for better rates"],
            ["Loading/Unloading", "€25-50/operation", "If manual handling required"],
            ["Waiting Time", "€35-50/hour", "After free time (usually 2h)"],
            ["ADR Surcharge", "+30-50%", "For dangerous goods"],
            ["Reefer Surcharge", "+20-40%", "Temperature controlled transport"],
            ["Express Premium", "+20-50%", "Same day or urgent delivery"],
            ["Tail Lift", "€50-100", "If loading dock not available"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">Margin Guidelines</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>8-10%:</strong> High volume, strategic accounts</li>
              <li>• <strong>12-15%:</strong> Standard clients, regular business</li>
              <li>• <strong>15-18%:</strong> Spot business, new clients</li>
              <li>• <strong>20-25%:</strong> Peak season, urgent requests</li>
              <li>• <strong>25%+:</strong> Exceptional circumstances only</li>
            </ul>
          </div>
          <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
            <h4 className="font-semibold text-warning mb-2">Pricing Pitfalls</h4>
            <ul className="text-sm space-y-1">
              <li>• Forgetting toll costs (especially CH, AT)</li>
              <li>• Underestimating ferry/tunnel costs</li>
              <li>• Not including waiting time buffer</li>
              <li>• Ignoring seasonal market conditions</li>
              <li>• Quoting before verifying carrier cost</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Communication */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Mail className="w-6 h-6 text-primary" />
          Professional Quote Communication
        </h2>

        <p className="text-muted-foreground mb-4">
          How you present your quote is as important as the price itself. A professional, clear quotation builds trust and increases conversion.
        </p>

        <div className="bg-muted/30 p-6 rounded-lg mb-6">
          <h3 className="font-semibold mb-4">Quote Email Structure</h3>
          <div className="space-y-4 text-sm">
            <div className="border-l-4 border-primary pl-4">
              <p className="font-medium text-primary">1. Opening</p>
              <p className="text-muted-foreground">Thank client for request, reference specific enquiry</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-medium text-primary">2. Confirmation of Details</p>
              <p className="text-muted-foreground">Summarize route, cargo, dates to ensure understanding</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-medium text-primary">3. Price Presentation</p>
              <p className="text-muted-foreground">Clear pricing with currency, inclusions/exclusions</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-medium text-primary">4. Service Details</p>
              <p className="text-muted-foreground">Transit time, equipment type, tracking offered</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-medium text-primary">5. Validity & Terms</p>
              <p className="text-muted-foreground">Quote validity period, payment terms, conditions</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-medium text-primary">6. Call to Action</p>
              <p className="text-muted-foreground">Clear next step: how to confirm, contact details</p>
            </div>
          </div>
        </div>

        <div className="bg-background border rounded-lg p-6">
          <h4 className="font-semibold mb-3">Example Quote Email</h4>
          <div className="text-sm space-y-3 font-mono bg-muted/30 p-4 rounded">
            <p>Subject: RE: Transport Quote - München → Paris, 24 EUR pallets</p>
            <p className="text-muted-foreground">---</p>
            <p>Dear [Client Name],</p>
            <p>Thank you for your transport enquiry. Please find our quotation below:</p>
            <p className="font-bold mt-2">ROUTE: München → Paris</p>
            <p>• Distance: ~830 km</p>
            <p>• Cargo: 24 EUR pallets, 18,500 kg (stackable)</p>
            <p>• Loading: Wednesday 15.01.2025, 08:00-12:00</p>
            <p>• Delivery: Thursday 16.01.2025, by 16:00</p>
            <p className="font-bold mt-2">RATE: €1,450.00 (all-in)</p>
            <p>Includes: FTL curtainsider, all tolls DE/FR, loading/unloading</p>
            <p>Excludes: Waiting time beyond 2h free (€40/h), tail lift if needed</p>
            <p className="font-bold mt-2">VALIDITY: 48 hours from this email</p>
            <p>Payment: Net 30 days from invoice date</p>
            <p className="mt-2">To confirm, please reply to this email or call +49 XXX XXXXXXX.</p>
            <p>Best regards,</p>
            <p>[Your Name]</p>
          </div>
        </div>
      </div>

      {/* Response Times */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Clock className="w-6 h-6 text-primary" />
          Response Time Standards
        </h2>

        <p className="text-muted-foreground mb-4">
          Speed wins business. In freight forwarding, the first good quote often wins, regardless of whether competitors might be slightly cheaper.
        </p>

        <DataTable
          headers={["Request Type", "Target Response", "Maximum", "Priority"]}
          rows={[
            ["Urgent Spot Quote", "15 minutes", "30 minutes", "🔴 Critical"],
            ["Standard Spot Quote", "1 hour", "2 hours", "🟠 High"],
            ["Contract Rate Request", "4 hours", "Same day", "🟡 Medium"],
            ["General Enquiry", "2 hours", "4 hours", "🟡 Medium"],
            ["RFQ/Tender", "Per deadline", "Never late", "🔴 Critical"],
            ["Complaint/Issue", "30 minutes", "1 hour", "🔴 Critical"],
            ["Invoice Query", "4 hours", "Same day", "🟡 Medium"],
          ]}
        />

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mt-4">
          <p className="text-sm">
            <strong>Pro Tip:</strong> If you cannot provide a full quote immediately, acknowledge receipt and give a timeframe: "Thank you for your enquiry. I'm checking rates now and will have a quote for you within 1 hour."
          </p>
        </div>
      </div>

      {/* Client Segmentation */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          Client Segmentation & Account Management
        </h2>

        <DataTable
          headers={["Segment", "Characteristics", "Revenue Share", "Management Focus"]}
          rows={[
            ["⭐⭐⭐ Strategic (A)", "Large volume, strategic fit, growth potential", "50-60%", "Dedicated account manager, quarterly reviews"],
            ["⭐⭐ Growing (B)", "Medium volume, reliable, expansion possible", "25-35%", "Regular contact, proactive service"],
            ["⭐ Transactional (C)", "Spot business, low volume, price sensitive", "10-15%", "Efficient processing, standard service"],
            ["🆕 Prospects", "Potential new clients under development", "0%", "Sales focus, relationship building"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="font-semibold mb-3">Focus 80% of Time On:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-warning mt-0.5" />
                <span>Strategic (A) clients - protect and grow</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-warning mt-0.5" />
                <span>Growing (B) clients - develop into Strategic</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-warning mt-0.5" />
                <span>High-potential prospects</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Client Retention Activities</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Regular business reviews (quarterly for A)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Proactive problem resolution</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Service improvement suggestions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Market intelligence sharing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* New Client Acquisition */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Building2 className="w-6 h-6 text-primary" />
          New Client Acquisition
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Lead Sources</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Referrals:</strong> Highest quality, ask satisfied clients</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Industry Events:</strong> Trade shows, networking events</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>LinkedIn:</strong> Professional outreach, content marketing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Industry Directories:</strong> Chamber of commerce, trade associations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Cold Outreach:</strong> Targeted approach to ideal prospects</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">First Meeting Agenda</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
                <span>Understand their business and logistics needs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
                <span>Identify pain points with current provider</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
                <span>Present your value proposition (not just price)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">4</span>
                <span>Understand their decision-making process</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">5</span>
                <span>Agree next steps and timeline</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg mt-6">
          <h4 className="font-semibold mb-2">Value Proposition Elements</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-medium text-primary">Service Quality</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• On-time delivery record</li>
                <li>• Proactive communication</li>
                <li>• Problem resolution speed</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-primary">Technology</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• Real-time tracking</li>
                <li>• Digital documentation</li>
                <li>• Automated updates</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-primary">Expertise</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• Industry knowledge</li>
                <li>• Route optimization</li>
                <li>• Regulatory compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Credit Management */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          Credit Management for New Clients
        </h2>

        <p className="text-muted-foreground mb-4">
          Before extending payment terms to new clients, always verify their creditworthiness. A single bad debt can wipe out months of profit.
        </p>

        <DataTable
          headers={["Step", "Action", "Tools/Sources"]}
          rows={[
            ["1. Credit Check", "Request credit report", "Creditsafe, Dun & Bradstreet, Coface"],
            ["2. Trade References", "Contact 2-3 existing suppliers", "Direct phone calls, email verification"],
            ["3. Company Research", "Verify registration, management", "Company registries, LinkedIn"],
            ["4. Start Small", "Begin with prepayment or short terms", "First 3-5 shipments"],
            ["5. Monitor", "Track payment behavior", "TMS, accounting system"],
            ["6. Adjust", "Extend terms based on performance", "After proven payment reliability"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">Credit Approval Indicators</h4>
            <ul className="text-sm space-y-1">
              <li>• Company {">"}3 years old</li>
              <li>• Strong credit score (A/B rated)</li>
              <li>• Positive trade references</li>
              <li>• Established industry presence</li>
              <li>• No legal issues or defaults</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">Credit Warning Signs</h4>
            <ul className="text-sm space-y-1">
              <li>• Company {"<"}1 year old</li>
              <li>• Poor/no credit history</li>
              <li>• References not verifiable</li>
              <li>• Pressure for immediate credit</li>
              <li>• County court judgments (CCJ)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          Commercial KPIs
        </h2>

        <DataTable
          headers={["KPI", "Target", "Description"]}
          rows={[
            ["Quote Conversion Rate", "25-35%", "Quotes accepted / quotes sent"],
            ["Response Time", "<2 hours", "Average time to respond to enquiries"],
            ["Client Retention", ">95%", "Clients retained year-over-year"],
            ["Revenue per Client", "Growing YoY", "Average annual revenue per active client"],
            ["New Client Acquisition", "Per budget", "New clients won per quarter"],
            ["Average Margin", "10-15%", "Profit margin across all shipments"],
            ["DSO (Days Sales Outstanding)", "<45 days", "Average time to collect payment"],
            ["Bad Debt Rate", "<1%", "Uncollectable invoices as % of revenue"],
          ]}
        />
      </div>

      {/* Quiz */}
      {quizzes["commercial"] && (
        <Quiz
          title="Commercial Fundamentals Quiz"
          questions={quizzes["commercial"]}
          chapterId="commercial"
          questionsPerRound={5}
        />
      )}
    </div>
  );
}
