import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { CreditCard, FileText, AlertTriangle, CheckCircle, Clock, Shield, Calculator, Users } from "lucide-react";

export function PaymentChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-600 to-orange-500 p-8 md:p-12 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <CreditCard className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Payment & Invoicing
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Payment terms, credit management, invoicing best practices, and cash flow optimization.
          </p>
        </div>
      </div>

      {/* Payment Terms */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Clock className="w-6 h-6 text-primary" />
          Standard Payment Terms
        </h2>
        <DataTable
          headers={["Term", "Description", "Typical Use"]}
          rows={[
            ["Prepayment", "Payment before transport", "New customers, high-risk, urgent spot"],
            ["COD", "Cash on Delivery", "First-time customers, high-value cargo"],
            ["Net 14", "Payment within 14 days", "Good customers, regular business"],
            ["Net 30", "Payment within 30 days", "Standard business terms"],
            ["Net 45/60", "Extended payment", "Large customers, contract rates"],
            ["End of Month +30", "EOM + 30 days", "Corporate accounts"],
          ]}
        />
      </section>

      {/* Credit Checks */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          Credit Assessment
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="Before Extending Credit" icon={CheckCircle} variant="info">
            <ul className="space-y-2">
              <li>• Check company registration (VAT, Chamber of Commerce)</li>
              <li>• Request trade references</li>
              <li>• Use credit rating services (Creditsafe, Coface, D&B)</li>
              <li>• Review freight exchange ratings</li>
              <li>• Start with prepayment or COD for new customers</li>
            </ul>
          </InfoCard>
          <InfoCard title="Credit Limit Guidelines" icon={Calculator} variant="warning">
            <ul className="space-y-2">
              <li>• New customer: Max 1-2 loads value</li>
              <li>• After 3+ paid invoices: Increase gradually</li>
              <li>• Review limits quarterly</li>
              <li>• Reduce immediately if payment delays</li>
              <li>• Document all credit decisions</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Invoice Requirements */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          Invoice Requirements
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Mandatory Elements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Invoice number (sequential)</li>
                <li>• Invoice date</li>
                <li>• Your company details (name, address, VAT)</li>
                <li>• Customer details (name, address, VAT)</li>
                <li>• Service description</li>
                <li>• Net amount, VAT rate, VAT amount, gross total</li>
                <li>• Payment terms and due date</li>
                <li>• Bank account details</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Transport-Specific Details</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Order/reference number</li>
                <li>• Loading and delivery dates</li>
                <li>• Route (from → to)</li>
                <li>• Vehicle/trailer registration</li>
                <li>• CMR number</li>
                <li>• Weight/quantity transported</li>
                <li>• Breakdown of charges (base rate, tolls, waiting, etc.)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VAT in Transport */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Calculator className="w-6 h-6 text-primary" />
          VAT in International Transport
        </h2>
        <div className="bg-muted/30 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Intra-EU Transport</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• B2B: Reverse charge applies (0% VAT)</li>
                <li>• Customer must have valid VAT number</li>
                <li>• Verify VAT via VIES system</li>
                <li>• Invoice states "Reverse charge" and customer VAT</li>
                <li>• Report in EC Sales List</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Export/Import Transport</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Export from EU: 0% VAT (zero-rated)</li>
                <li>• Keep export documentation as proof</li>
                <li>• Import to EU: VAT at destination country rate</li>
                <li>• Third-country routes: Check each jurisdiction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Invoicing Best Practices */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-primary" />
          Invoicing Best Practices
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title="Speed" icon={Clock} variant="success">
            <ul className="space-y-2">
              <li>• Invoice within 48h of delivery</li>
              <li>• Attach signed CMR/POD</li>
              <li>• Use automated TMS invoicing</li>
              <li>• Send via email (faster than post)</li>
            </ul>
          </InfoCard>
          <InfoCard title="Accuracy" icon={FileText} variant="info">
            <ul className="space-y-2">
              <li>• Double-check all figures</li>
              <li>• Match order confirmation</li>
              <li>• Correct customer details</li>
              <li>• Include all agreed charges</li>
            </ul>
          </InfoCard>
          <InfoCard title="Tracking" icon={Calculator} variant="highlight">
            <ul className="space-y-2">
              <li>• Use invoice tracking system</li>
              <li>• Set automatic payment reminders</li>
              <li>• Monitor DSO (Days Sales Outstanding)</li>
              <li>• Age analysis weekly</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Collection Process */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-warning" />
          Collection Process
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
              <div>
                <span className="font-semibold">Due Date +1 day:</span>
                <span className="text-muted-foreground ml-2">Friendly reminder email</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
              <div>
                <span className="font-semibold">Due Date +7 days:</span>
                <span className="text-muted-foreground ml-2">Second reminder + phone call</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-warning/20 flex items-center justify-center flex-shrink-0 text-sm font-bold text-warning">3</div>
              <div>
                <span className="font-semibold">Due Date +14 days:</span>
                <span className="text-muted-foreground ml-2">Formal demand letter, stop new orders</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 text-sm font-bold text-destructive">4</div>
              <div>
                <span className="font-semibold">Due Date +30 days:</span>
                <span className="text-muted-foreground ml-2">Final notice before collection agency/legal action</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 text-sm font-bold text-destructive">5</div>
              <div>
                <span className="font-semibold">Due Date +45 days:</span>
                <span className="text-muted-foreground ml-2">Hand over to collection agency or initiate legal proceedings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Billing */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" />
          Self-Billing Arrangements
        </h2>
        <InfoCard title="Self-Billing (Customer Creates Invoice)" icon={FileText} variant="info">
          <p className="text-sm text-muted-foreground mb-4">
            Some large shippers use self-billing where THEY create the invoice on your behalf:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Advantages</h4>
              <ul className="space-y-1 text-sm">
                <li>• Faster payment (their process)</li>
                <li>• Less admin for you</li>
                <li>• Fewer invoice disputes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Requirements</h4>
              <ul className="space-y-1 text-sm">
                <li>• Written self-billing agreement</li>
                <li>• Check each self-bill for accuracy</li>
                <li>• Report discrepancies promptly</li>
                <li>• Keep records as normal</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Carrier Payments */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <CreditCard className="w-6 h-6 text-primary" />
          Paying Your Carriers
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">Payment Best Practices</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Pay on agreed terms (builds reputation)</li>
              <li>• Verify POD received before payment</li>
              <li>• Use batch payments for efficiency</li>
              <li>• Keep payment proof records</li>
              <li>• Match payments to invoices clearly</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">Cash Flow Management</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Match payment terms (in vs. out)</li>
              <li>• Maintain cash reserve for operations</li>
              <li>• Consider factoring for large gaps</li>
              <li>• Monitor DSO and DPO weekly</li>
              <li>• Plan for seasonal variations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Calculator className="w-6 h-6 text-primary" />
          Key Financial Metrics
        </h2>
        <DataTable
          headers={["Metric", "Target", "Description"]}
          rows={[
            ["DSO (Days Sales Outstanding)", "<45 days", "Average time to collect payment"],
            ["DPO (Days Payable Outstanding)", "Match to DSO", "Average time you take to pay suppliers"],
            ["Bad debt ratio", "<1%", "Percentage of invoices written off"],
            ["Invoice accuracy", ">99%", "Invoices without errors/corrections"],
            ["Collection rate", ">95%", "Invoices collected within 60 days"],
          ]}
        />
      </section>

      {/* Quiz */}
      {quizzes.payment && (
        <Quiz title="Payment & Invoicing Quiz" questions={quizzes.payment} chapterId="payment" />
      )}
    </div>
  );
}
