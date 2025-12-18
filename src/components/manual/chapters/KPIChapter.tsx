import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { BarChart3, Target, TrendingUp, TrendingDown, Clock, Euro, Users, Truck, CheckCircle2, AlertTriangle, Award, Activity } from "lucide-react";

export function KPIChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">KPIs & Performance Management</h1>
        <p className="text-lg text-muted-foreground">
          Key Performance Indicators for measuring, monitoring, and improving freight forwarding operations and individual performance.
        </p>
      </div>

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          Why KPIs Matter in Freight Forwarding
        </h2>
        <p className="text-muted-foreground mb-4">
          "What gets measured gets managed." KPIs transform subjective assessments into objective data, enabling continuous improvement, fair performance evaluation, and data-driven decision making.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Activity className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">Track Progress</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-2" />
            <p className="text-sm font-medium">Identify Issues</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="text-sm font-medium">Drive Improvement</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Award className="w-8 h-8 text-info mx-auto mb-2" />
            <p className="text-sm font-medium">Reward Success</p>
          </div>
        </div>
      </div>

      {/* Trainee KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          Trainee Performance KPIs
        </h2>
        
        <p className="text-muted-foreground mb-4">
          As a trainee, you'll be evaluated on these key metrics. Focus on accuracy and learning before speed - quality comes first.
        </p>

        <DataTable
          headers={["KPI", "Target", "Measurement", "Importance"]}
          rows={[
            ["Response Time", "<2 hours", "Average time to respond to enquiries", "🔴 Critical"],
            ["Data Entry Accuracy", ">98%", "Orders entered without errors", "🔴 Critical"],
            ["Quote Accuracy", ">95%", "Quotes without pricing errors", "🔴 Critical"],
            ["Shipments Processed", "Progressive", "Number of shipments handled per week", "🟡 Medium"],
            ["POD Collection Rate", ">90% in 24h", "PODs collected within deadline", "🟠 High"],
            ["Training Completion", "100%", "Required training modules completed", "🟠 High"],
            ["Quiz Scores", ">70%", "Chapter quiz pass rate", "🟡 Medium"],
            ["Issue Escalation Time", "<30 min", "Time to escalate problems to supervisor", "🔴 Critical"],
          ]}
        />

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mt-4">
          <p className="text-sm">
            <strong>Trainee Tip:</strong> During your first 3 months, accuracy is more important than volume. One error can take hours to fix and damage client relationships. Double-check everything.
          </p>
        </div>
      </div>

      {/* Operational KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Truck className="w-6 h-6 text-primary" />
          Operational KPIs
        </h2>

        <DataTable
          headers={["KPI", "Target", "Formula", "Review Frequency"]}
          rows={[
            ["On-Time Pickup (OTP)", "≥95%", "(Pickups on time / Total pickups) × 100", "Weekly"],
            ["On-Time Delivery (OTD)", "≥95%", "(Deliveries on time / Total deliveries) × 100", "Weekly"],
            ["Transit Time Compliance", "≥93%", "(Shipments within quoted time / Total) × 100", "Weekly"],
            ["Order Accuracy", "≥99%", "(Error-free orders / Total orders) × 100", "Weekly"],
            ["Claims Rate", "<1%", "(Shipments with claims / Total shipments) × 100", "Monthly"],
            ["POD Compliance", "≥95% in 24h", "(PODs received in 24h / Total deliveries) × 100", "Weekly"],
            ["Carrier Utilization", "85-95%", "(Loaded km / Total km) × 100", "Monthly"],
            ["First-Time Fix Rate", "≥80%", "(Issues resolved on first attempt / Total issues) × 100", "Monthly"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              World-Class Performance
            </h4>
            <ul className="text-sm space-y-1">
              <li>• On-Time Delivery: 98%+</li>
              <li>• Claims Rate: {"<"}0.5%</li>
              <li>• Order Accuracy: 99.5%+</li>
              <li>• Customer Satisfaction: 4.5+/5</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
              <TrendingDown className="w-4 h-4" />
              Performance Warning Signs
            </h4>
            <ul className="text-sm space-y-1">
              <li>• On-Time Delivery: {"<"}90%</li>
              <li>• Claims Rate: {">"}2%</li>
              <li>• Order Accuracy: {"<"}95%</li>
              <li>• Customer Complaints: Rising trend</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Financial KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Euro className="w-6 h-6 text-primary" />
          Financial KPIs
        </h2>

        <DataTable
          headers={["KPI", "Target", "Formula", "Review"]}
          rows={[
            ["Gross Margin", "10-18%", "((Revenue - Direct Cost) / Revenue) × 100", "Per shipment"],
            ["Revenue per Shipment", "Varies by lane", "Total Revenue / Number of Shipments", "Monthly"],
            ["Cost per Shipment", "Minimize", "Total Costs / Number of Shipments", "Monthly"],
            ["Revenue per FTE", "€200k-500k/year", "Total Revenue / Full-Time Equivalents", "Quarterly"],
            ["DSO (Days Sales Outstanding)", "<45 days", "Average days to collect payment", "Monthly"],
            ["Bad Debt Rate", "<1%", "(Uncollected invoices / Total invoices) × 100", "Quarterly"],
            ["Quote Win Rate", "25-35%", "(Quotes won / Quotes sent) × 100", "Monthly"],
            ["Customer Lifetime Value", "Maximize", "Average Revenue × Customer Lifespan", "Annually"],
          ]}
        />

        <div className="bg-muted/50 p-4 rounded-lg mt-6">
          <h4 className="font-semibold mb-2">Margin Breakdown by Service Type</h4>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="text-center p-3 bg-background rounded">
              <p className="text-2xl font-bold text-primary">8-12%</p>
              <p className="text-muted-foreground">Contract Lanes</p>
            </div>
            <div className="text-center p-3 bg-background rounded">
              <p className="text-2xl font-bold text-primary">12-18%</p>
              <p className="text-muted-foreground">Spot Market</p>
            </div>
            <div className="text-center p-3 bg-background rounded">
              <p className="text-2xl font-bold text-primary">15-25%</p>
              <p className="text-muted-foreground">Express/Urgent</p>
            </div>
            <div className="text-center p-3 bg-background rounded">
              <p className="text-2xl font-bold text-primary">20-35%</p>
              <p className="text-muted-foreground">Specialized (ADR, Reefer)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          Customer-Related KPIs
        </h2>

        <DataTable
          headers={["KPI", "Target", "Measurement Method"]}
          rows={[
            ["Customer Satisfaction (CSAT)", "≥4.2/5", "Post-delivery surveys, quarterly reviews"],
            ["Net Promoter Score (NPS)", ">30", "Would you recommend us? (0-10 scale)"],
            ["Customer Retention Rate", ">95%", "Customers retained year-over-year"],
            ["Customer Complaints", "<2% of shipments", "Formal complaints received"],
            ["Response Time to Queries", "<2 hours", "Average time to first response"],
            ["Issue Resolution Time", "<24 hours", "Average time to resolve customer issues"],
            ["Customer Growth Rate", "Positive", "Volume increase per existing customer"],
            ["Customer Concentration Risk", "<20% single client", "Largest client share of revenue"],
          ]}
        />

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg mt-4">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Customer Concentration Warning
          </h4>
          <p className="text-sm">
            If any single customer represents more than 20% of your revenue, you have concentration risk. Loss of that customer could severely impact your business. Diversify your client base.
          </p>
        </div>
      </div>

      {/* Carrier KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Truck className="w-6 h-6 text-primary" />
          Carrier Performance KPIs
        </h2>

        <DataTable
          headers={["KPI", "Target", "Impact on Business"]}
          rows={[
            ["On-Time Performance", "≥95%", "Direct impact on client satisfaction"],
            ["Damage Rate", "<1%", "Claims costs, client trust"],
            ["POD Submission", ">90% in 24h", "Invoicing speed, cash flow"],
            ["Communication Quality", "4+/5", "Issue management, coordination"],
            ["Load Acceptance Rate", ">80%", "Capacity reliability"],
            ["Price Competitiveness", "Market rate ±5%", "Margin protection"],
            ["Invoice Accuracy", ">98%", "Admin efficiency"],
            ["Equipment Quality", "4+/5", "Client experience, cargo safety"],
          ]}
        />

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-success/10 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">A-Tier Carrier</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• OTD 97%+</li>
              <li>• Damage {"<"}0.5%</li>
              <li>• POD 95%+ in 24h</li>
              <li>• Rating 4.5+/5</li>
            </ul>
          </div>
          <div className="bg-warning/10 p-4 rounded-lg">
            <h4 className="font-semibold text-warning mb-2">B-Tier Carrier</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• OTD 93-96%</li>
              <li>• Damage 0.5-1%</li>
              <li>• POD 85-94% in 24h</li>
              <li>• Rating 3.5-4.4/5</li>
            </ul>
          </div>
          <div className="bg-destructive/10 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">Review Required</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• OTD {"<"}93%</li>
              <li>• Damage {">"}1%</li>
              <li>• POD {"<"}85% in 24h</li>
              <li>• Rating {"<"}3.5/5</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Individual KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Award className="w-6 h-6 text-primary" />
          Individual Forwarder KPIs
        </h2>

        <DataTable
          headers={["KPI", "Trainee Target", "Experienced Target", "Expert Target"]}
          rows={[
            ["Shipments per Week", "10-20", "30-50", "50-80+"],
            ["Quote Response Time", "<4 hours", "<2 hours", "<1 hour"],
            ["Quote Conversion", "15-20%", "25-30%", "35%+"],
            ["Order Accuracy", ">95%", ">98%", ">99%"],
            ["Customer Satisfaction", "4.0/5", "4.2/5", "4.5+/5"],
            ["Revenue Managed", "€50k-100k/mo", "€150k-300k/mo", "€300k+/mo"],
            ["Gross Margin Achieved", "10%", "12%", "15%+"],
            ["Issues Escalated", "30%", "15%", "<5%"],
          ]}
        />

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mt-4">
          <p className="text-sm">
            <strong>Career Progression:</strong> Moving from trainee to experienced (6-12 months) to expert (2+ years) depends on consistently meeting targets while taking on more complex work with less supervision.
          </p>
        </div>
      </div>

      {/* Dashboard Metrics */}
      <div className="info-card bg-muted/30">
        <h2 className="section-title flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-primary" />
          Daily Dashboard Metrics
        </h2>
        
        <p className="text-muted-foreground mb-4">
          Monitor these metrics daily to stay on top of operations:
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg">
            <Clock className="w-6 h-6 text-primary mb-2" />
            <h4 className="font-semibold text-sm">Today's Pickups</h4>
            <ul className="text-xs text-muted-foreground mt-2 space-y-1">
              <li>• Scheduled count</li>
              <li>• Completed count</li>
              <li>• On-time %</li>
              <li>• Issues reported</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <Truck className="w-6 h-6 text-primary mb-2" />
            <h4 className="font-semibold text-sm">Today's Deliveries</h4>
            <ul className="text-xs text-muted-foreground mt-2 space-y-1">
              <li>• Scheduled count</li>
              <li>• Completed count</li>
              <li>• On-time %</li>
              <li>• PODs received</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-warning mb-2" />
            <h4 className="font-semibold text-sm">Open Issues</h4>
            <ul className="text-xs text-muted-foreground mt-2 space-y-1">
              <li>• Delays reported</li>
              <li>• Customer complaints</li>
              <li>• Carrier issues</li>
              <li>• Pending escalations</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <Euro className="w-6 h-6 text-success mb-2" />
            <h4 className="font-semibold text-sm">Financial</h4>
            <ul className="text-xs text-muted-foreground mt-2 space-y-1">
              <li>• Quotes pending</li>
              <li>• Orders confirmed</li>
              <li>• Revenue booked</li>
              <li>• Invoices due</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["kpi"] && (
        <Quiz
          title="KPIs & Performance Quiz"
          questions={quizzes["kpi"]}
          chapterId="kpi"
          questionsPerRound={5}
        />
      )}
    </div>
  );
}
