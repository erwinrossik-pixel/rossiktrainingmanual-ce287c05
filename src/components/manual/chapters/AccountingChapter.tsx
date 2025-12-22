import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { FileText, Euro, Calendar, CreditCard, Calculator, CheckCircle2, AlertTriangle, Clock, TrendingUp, Building2, Receipt, Scale } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function AccountingChapter() {
  const { ct } = useChapterTranslation("accounting");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">{ct("title")}</h1>
        <p className="text-lg text-muted-foreground">
          {ct("subtitle")}
        </p>
      </div>

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Euro className="w-6 h-6 text-primary" />
          Financial Processes Overview
        </h2>
        <p className="text-muted-foreground mb-4">
          Every shipment involves financial transactions - client invoicing, carrier payments, and cost management. Understanding these processes is essential for profitability and cash flow management.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Receipt className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">Client Invoicing</p>
            <p className="text-xs text-muted-foreground">Bill for services</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">Cost Verification</p>
            <p className="text-xs text-muted-foreground">Check carrier invoices</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <CreditCard className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">Payments</p>
            <p className="text-xs text-muted-foreground">Pay carriers, collect from clients</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">Margin Analysis</p>
            <p className="text-xs text-muted-foreground">Profit tracking</p>
          </div>
        </div>
      </div>

      {/* Client Invoicing */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Receipt className="w-6 h-6 text-primary" />
          Client Invoicing
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">Invoice Content Requirements</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Your company details (name, address, VAT number)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Client details (name, address, VAT number)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Invoice number (unique, sequential)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Invoice date and due date</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Service description (route, dates, reference)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Net amount, VAT (if applicable), gross total</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Payment terms and bank details</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Best Practices</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Speed:</strong> Invoice within 48h of POD receipt</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Attachments:</strong> Include POD/CMR copy</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Accuracy:</strong> Check amounts match quotation</span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Reference:</strong> Include client's PO/reference</span>
              </li>
              <li className="flex items-start gap-2">
                <Calculator className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>VAT:</strong> Apply correct rate/mechanism</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Quick Invoicing = Better Cash Flow</h4>
          <p className="text-sm">
            If you invoice within 48h instead of 7 days, and payment terms are Net 30, you get paid almost a week earlier. Over a year with hundreds of shipments, this significantly improves cash flow.
          </p>
        </div>
      </div>

      {/* Cost Verification */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          Carrier Invoice Verification
        </h2>

        <p className="text-muted-foreground mb-4">
          Always verify carrier invoices before payment. Errors and unauthorized charges are common.
        </p>

        <DataTable
          headers={["Check Point", "What to Verify", "Common Issues"]}
          rows={[
            ["Basic Details", "Correct dates, route, vehicle", "Wrong shipment reference"],
            ["Agreed Rate", "Price matches transport order", "Higher rate than agreed"],
            ["Additional Charges", "Waiting time, tolls justified", "Unjustified extras"],
            ["POD Attached", "Signed, clean, complete", "Missing or unclear POD"],
            ["VAT Treatment", "Correct rate applied", "Wrong VAT rate"],
            ["Payment Details", "Correct bank account", "Changed bank details (fraud risk)"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">Approve If:</h4>
            <ul className="text-sm space-y-1">
              <li>• Rate matches transport order</li>
              <li>• Additional charges are justified</li>
              <li>• POD is clean and complete</li>
              <li>• No outstanding issues</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">Query/Reject If:</h4>
            <ul className="text-sm space-y-1">
              <li>• Rate differs from agreed</li>
              <li>• Unexplained additional charges</li>
              <li>• POD has reservations/damage</li>
              <li>• Open claim on this shipment</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Terms */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Calendar className="w-6 h-6 text-primary" />
          Payment Terms
        </h2>

        <DataTable
          headers={["Term", "Meaning", "Typical Use", "Risk Level"]}
          rows={[
            ["Prepayment", "Payment before service", "New clients, high-risk", "Lowest (for you)"],
            ["COD/POD", "Cash/Payment on Delivery", "New carriers, spot market", "Low"],
            ["Net 7", "Payment within 7 days", "Small carriers, quick payment", "Low"],
            ["Net 14", "Payment within 14 days", "Standard for carriers", "Medium"],
            ["Net 30", "Payment within 30 days", "Standard for clients", "Medium"],
            ["Net 45", "Payment within 45 days", "Preferred carriers", "Higher"],
            ["Net 60", "Payment within 60 days", "Large clients", "Higher"],
            ["Net 90", "Payment within 90 days", "Corporate clients only", "Highest"],
          ]}
        />

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg mt-4">
          <h4 className="font-semibold flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4" />
            Cash Flow Warning
          </h4>
          <p className="text-sm">
            If you pay carriers in 14 days but clients pay you in 60 days, you're financing their transport for 46 days. With 100 shipments/month at €1,500 average, that's €150,000+ in working capital. Manage payment terms carefully!
          </p>
        </div>
      </div>

      {/* VAT in Transport */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Calculator className="w-6 h-6 text-primary" />
          VAT in European Transport
        </h2>

        <DataTable
          headers={["Scenario", "VAT Treatment", "Documentation"]}
          rows={[
            ["Domestic transport", "Standard VAT rate applies", "Normal invoice with VAT"],
            ["Intra-EU B2B transport", "Reverse charge (0% VAT)", "Customer VAT number on invoice, note reverse charge"],
            ["Export to non-EU", "0% VAT (export)", "Customs documentation, proof of export"],
            ["Import from non-EU", "VAT on import (customs)", "Import declaration, VAT payment proof"],
            ["Transport linked to export", "0% VAT (follows goods)", "Export documentation reference"],
            ["Cabotage (domestic by foreign carrier)", "Place of supply rules apply", "Depends on registration status"],
          ]}
        />

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mt-4">
          <h4 className="font-semibold mb-2">Reverse Charge Mechanism (B2B Intra-EU)</h4>
          <p className="text-sm mb-2">
            For B2B transport between EU countries, the supplier invoices at 0% VAT with reference to reverse charge. The customer accounts for VAT in their country (self-assessment).
          </p>
          <p className="text-sm font-medium">
            Invoice must state: "VAT reverse charge, Article 44 EU VAT Directive" and include valid VAT numbers for both parties.
          </p>
        </div>
      </div>

      {/* Dispute Resolution */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Scale className="w-6 h-6 text-primary" />
          Financial Dispute Resolution
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">Common Dispute Types</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>Rate discrepancy - carrier invoices higher than agreed</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>Additional charges - waiting, tolls not agreed</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>Missing documentation - no POD for invoicing</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>Claim deductions - damage offset against payment</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>Late payment - exceeding agreed terms</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Resolution Process</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
                <span>Document the dispute clearly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
                <span>Gather supporting evidence (orders, emails, CMR)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
                <span>Communicate professionally with counterparty</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">4</span>
                <span>Seek fair compromise where appropriate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">5</span>
                <span>Escalate to management if unresolved</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Financial KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          Financial KPIs
        </h2>

        <DataTable
          headers={["KPI", "Definition", "Target", "Importance"]}
          rows={[
            ["Gross Margin", "(Revenue - Direct Cost) / Revenue", "10-18%", "Profitability measure"],
            ["DSO", "Average days to collect payment", "< 45 days", "Cash flow indicator"],
            ["DPO", "Average days to pay suppliers", "Align with terms", "Cash flow management"],
            ["Bad Debt Rate", "Uncollected / Total invoiced", "< 1%", "Credit risk indicator"],
            ["Invoice Accuracy", "Correct invoices / Total invoices", "> 98%", "Admin efficiency"],
            ["Credit Note Rate", "Credit notes / Total invoices", "< 2%", "Pricing/service quality"],
          ]}
        />
      </div>

      {/* Quiz */}
      {quizzes["accounting"] && (
        <Quiz
          title="Accounting & Financial Quiz"
          questions={quizzes["accounting"]}
          chapterId="accounting"
          questionsPerRound={5}
        />
      )}
    </div>
  );
}
