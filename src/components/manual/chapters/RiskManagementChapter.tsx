import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Checklist } from "../Checklist";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Shield, AlertTriangle, CheckCircle2, XCircle, Eye, TrendingUp, FileText, Scale, Users, Zap, Target, Lock } from "lucide-react";

export function RiskManagementChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Risk Management</h1>
        <p className="text-lg text-muted-foreground">
          Identifying, assessing, and mitigating risks in freight forwarding operations - from operational risks to financial and compliance risks.
        </p>
      </div>

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          Why Risk Management Matters
        </h2>
        <p className="text-muted-foreground mb-4">
          Freight forwarding involves managing multiple risks across the supply chain. Effective risk management protects your company, your clients, and your reputation while enabling you to take on more complex, higher-value business.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-2" />
            <p className="font-medium">Identify</p>
            <p className="text-xs text-muted-foreground">Recognize potential risks</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Scale className="w-8 h-8 text-info mx-auto mb-2" />
            <p className="font-medium">Assess</p>
            <p className="text-xs text-muted-foreground">Evaluate likelihood & impact</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Shield className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="font-medium">Mitigate</p>
            <p className="text-xs text-muted-foreground">Implement controls</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Eye className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">Monitor</p>
            <p className="text-xs text-muted-foreground">Track and review</p>
          </div>
        </div>
      </div>

      {/* Risk Categories */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          Risk Categories in Freight Forwarding
        </h2>

        <DataTable
          headers={["Category", "Examples", "Potential Impact", "Mitigation Strategies"]}
          rows={[
            ["Operational", "Delays, damage, theft, accidents", "Claims, client loss, reputation", "Carrier vetting, tracking, insurance"],
            ["Financial", "Bad debts, fraud, currency risk", "Cash flow problems, losses", "Credit checks, payment terms, hedging"],
            ["Compliance", "Regulatory violations, customs issues", "Fines, license suspension", "Training, audits, expert partners"],
            ["Carrier", "Carrier failure, poor performance", "Service failures, claims", "Qualification, monitoring, alternatives"],
            ["Market", "Rate volatility, capacity shortages", "Margin erosion, service issues", "Contracts, diversification, forecasting"],
            ["Reputational", "Service failures, scandals", "Client loss, brand damage", "Quality focus, communication, ethics"],
          ]}
        />
      </div>

      {/* Operational Risks */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-warning" />
          Operational Risk Management
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-destructive">Common Operational Risks</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                <span><strong>Cargo damage:</strong> Physical damage during transport</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                <span><strong>Theft:</strong> Cargo theft en route or at rest</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                <span><strong>Delays:</strong> Late pickup/delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                <span><strong>Temperature excursions:</strong> Cold chain breaks</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                <span><strong>Documentation errors:</strong> Wrong addresses, quantities</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-success">Mitigation Measures</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Carrier qualification:</strong> Vet all carriers thoroughly</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Real-time tracking:</strong> GPS monitoring, alerts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Insurance:</strong> Adequate coverage for cargo value</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Documentation checks:</strong> Verify before dispatch</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Secure parking:</strong> TAPA-certified facilities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Financial Risks */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          Financial Risk Management
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">Financial Risks</h4>
            <ul className="text-sm space-y-2">
              <li><strong>Credit risk:</strong> Customers not paying invoices</li>
              <li><strong>Fraud risk:</strong> Fake carriers, payment scams</li>
              <li><strong>Currency risk:</strong> Exchange rate fluctuations</li>
              <li><strong>Rate volatility:</strong> Sudden market rate changes</li>
              <li><strong>Claims:</strong> Cargo damage or loss claims</li>
            </ul>
          </div>
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">Mitigation Strategies</h4>
            <ul className="text-sm space-y-2">
              <li><strong>Credit checks:</strong> Verify new customers</li>
              <li><strong>Payment terms:</strong> Appropriate to risk level</li>
              <li><strong>Carrier verification:</strong> Check credentials, references</li>
              <li><strong>Currency clauses:</strong> Contract protections</li>
              <li><strong>Insurance:</strong> Adequate coverage levels</li>
            </ul>
          </div>
        </div>

        <Checklist
          title="New Customer Credit Checklist"
          items={[
            "Run credit check (Creditsafe, D&B)",
            "Request 2-3 trade references",
            "Verify company registration",
            "Check for any CCJs or legal issues",
            "Start with prepayment or short terms",
            "Set appropriate credit limit",
            "Monitor payment behavior",
          ]}
        />
      </div>

      {/* Fraud Prevention */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Lock className="w-6 h-6 text-primary" />
          Fraud Prevention
        </h2>

        <p className="text-muted-foreground mb-4">
          Freight fraud is a growing problem. Common scams include fake carriers, payment redirection, and cargo theft by deception.
        </p>

        <DataTable
          headers={["Fraud Type", "How It Works", "Warning Signs", "Prevention"]}
          rows={[
            ["Fake Carrier", "Fraudster poses as carrier, takes cargo", "New contact, too-good rates, urgency", "Verify credentials, call back on known numbers"],
            ["Payment Redirection", "Email hack, fake payment details", "Changed bank details, urgency", "Verify changes by phone, secure email"],
            ["Double Brokering", "Carrier subcontracts without permission", "Unknown truck arrives, communication issues", "Clear contracts, carrier monitoring"],
            ["Fake Client", "Orders cargo, never pays", "New company, large orders, cash pressure", "Credit checks, start with prepayment"],
            ["Identity Theft", "Using stolen company identity", "Details don't match, odd communication", "Verify registration, physical address"],
          ]}
        />

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg mt-4">
          <h4 className="font-semibold flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4" />
            Key Fraud Prevention Rules
          </h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>Always verify:</strong> Call back on independently sourced numbers</li>
            <li>• <strong>Check documents:</strong> Verify insurance, licenses are current and genuine</li>
            <li>• <strong>Trust but verify:</strong> Even referrals need verification</li>
            <li>• <strong>Be suspicious of urgency:</strong> Fraudsters create pressure</li>
            <li>• <strong>Confirm payment changes:</strong> Always verify by phone before changing bank details</li>
          </ul>
        </div>
      </div>

      {/* Compliance Risks */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          Compliance Risk Management
        </h2>

        <DataTable
          headers={["Area", "Key Regulations", "Non-Compliance Consequences", "Mitigation"]}
          rows={[
            ["Drivers' Hours", "EU Regulation 561/2006", "Fines, license points, prosecution", "Tachograph monitoring, planning"],
            ["Vehicle Weights", "National regulations, EU limits", "Fines, vehicle impound", "Weight verification, load planning"],
            ["ADR/Dangerous Goods", "ADR Agreement", "Heavy fines, criminal liability", "Training, documentation, carrier vetting"],
            ["Customs", "UCC, national customs laws", "Seizure, fines, delays", "Correct documentation, compliance partner"],
            ["Data Protection", "GDPR", "Major fines (up to 4% revenue)", "Data policies, staff training"],
            ["Sanctions", "EU/US sanctions regulations", "Criminal liability, fines", "Screening, compliance procedures"],
          ]}
        />
      </div>

      {/* Risk Assessment Matrix */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Scale className="w-6 h-6 text-primary" />
          Risk Assessment Matrix
        </h2>

        <p className="text-muted-foreground mb-4">
          Use this matrix to prioritize risks based on likelihood and impact:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="border border-border p-2 bg-muted">Likelihood ↓ / Impact →</th>
                <th className="border border-border p-2 bg-success/20 text-success">Low</th>
                <th className="border border-border p-2 bg-warning/20 text-warning">Medium</th>
                <th className="border border-border p-2 bg-destructive/20 text-destructive">High</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2 font-medium bg-muted">High</td>
                <td className="border border-border p-2 bg-warning/10">Medium Risk</td>
                <td className="border border-border p-2 bg-destructive/10">High Risk</td>
                <td className="border border-border p-2 bg-destructive/30 font-medium">Critical Risk</td>
              </tr>
              <tr>
                <td className="border border-border p-2 font-medium bg-muted">Medium</td>
                <td className="border border-border p-2 bg-success/10">Low Risk</td>
                <td className="border border-border p-2 bg-warning/10">Medium Risk</td>
                <td className="border border-border p-2 bg-destructive/10">High Risk</td>
              </tr>
              <tr>
                <td className="border border-border p-2 font-medium bg-muted">Low</td>
                <td className="border border-border p-2 bg-success/20">Accept</td>
                <td className="border border-border p-2 bg-success/10">Low Risk</td>
                <td className="border border-border p-2 bg-warning/10">Medium Risk</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-destructive/10 p-3 rounded-lg">
            <h4 className="font-semibold text-destructive text-sm">Critical/High Risk</h4>
            <p className="text-xs text-muted-foreground">Immediate action required. Implement controls, escalate to management.</p>
          </div>
          <div className="bg-warning/10 p-3 rounded-lg">
            <h4 className="font-semibold text-warning text-sm">Medium Risk</h4>
            <p className="text-xs text-muted-foreground">Plan mitigation measures. Monitor regularly.</p>
          </div>
          <div className="bg-success/10 p-3 rounded-lg">
            <h4 className="font-semibold text-success text-sm">Low Risk</h4>
            <p className="text-xs text-muted-foreground">Monitor periodically. Accept if cost of mitigation exceeds benefit.</p>
          </div>
        </div>
      </div>

      {/* Carrier Risk */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          Carrier Risk Management
        </h2>

        <Checklist
          title="Carrier Risk Assessment"
          items={[
            "Valid transport license verified",
            "CMR insurance current and adequate",
            "Company registration and VAT verified",
            "Trade references checked",
            "Freight exchange ratings reviewed",
            "No blacklist appearances",
            "Physical address verified",
            "Contact details validated",
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">High-Risk Carrier Indicators</h4>
            <ul className="text-sm space-y-1">
              <li>• Company {"<"}6 months old</li>
              <li>• No verifiable references</li>
              <li>• Poor/no exchange ratings</li>
              <li>• Prices significantly below market</li>
              <li>• Reluctance to provide documents</li>
            </ul>
          </div>
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">Low-Risk Carrier Indicators</h4>
            <ul className="text-sm space-y-1">
              <li>• Established company ({">"}3 years)</li>
              <li>• Strong references</li>
              <li>• Good exchange ratings</li>
              <li>• Proper documentation</li>
              <li>• Professional communication</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["risk-management"] && (
        <Quiz
          title="Risk Management Quiz"
          questions={quizzes["risk-management"]}
          chapterId="risk-management"
          questionsPerRound={5}
        />
      )}
    </div>
  );
}
