import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Euro, TrendingUp, Users, Target, MessageSquare, Mail, FileText, CheckCircle2, AlertTriangle, Clock, Briefcase, Star, Building2 } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function CommercialChapter() {
  const { ct } = useChapterTranslation("commercial");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Briefcase}
        variant="commercial"
      />

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Briefcase className="w-6 h-6 text-primary" />
          {ct("foundationTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("foundationDesc")}
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">8-18%</p>
            <p className="text-sm text-muted-foreground">{ct("typicalMarginRange")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">30 min</p>
            <p className="text-sm text-muted-foreground">{ct("maxQuoteResponseTime")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">80/20</p>
            <p className="text-sm text-muted-foreground">{ct("revenueConcentrationRule")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">95%+</p>
            <p className="text-sm text-muted-foreground">{ct("clientRetentionTarget")}</p>
          </div>
        </div>
      </div>

      {/* Pricing Strategy */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Euro className="w-6 h-6 text-primary" />
          {ct("pricingTitle")}
        </h2>

        <div className="bg-muted/50 p-4 rounded-lg mb-6 font-mono text-sm">
          <p className="text-muted-foreground mb-2">{ct("pricingFormula")}</p>
          <p className="font-bold">
            Final Price = (Distance × Base Rate) + Tolls + Ferries/Tunnels + Accessories + Surcharges × (1 + Margin%)
          </p>
        </div>

        <h3 className="font-semibold mb-3">{ct("componentBreakdown")}</h3>
        <DataTable
          headers={[ct("component"), ct("typicalRange"), "Notes"]}
          rows={[
            [ct("baseRate"), "€1.10-1.25/km", "Includes fuel, driver, vehicle depreciation"],
            [ct("fuelSurcharge"), "Variable", "Adjust based on diesel price index"],
            [ct("roadTolls"), "€0.09-0.55/km", "Country and vehicle specific"],
            [ct("ferryTunnel"), "€150-600/crossing", "Book early for better rates"],
            [ct("loadingUnloading"), "€25-50/operation", "If manual handling required"],
            [ct("waitingTime"), "€35-50/hour", "After free time (usually 2h)"],
            [ct("adrSurcharge"), "+30-50%", "For dangerous goods"],
            [ct("reeferSurcharge"), "+20-40%", "Temperature controlled transport"],
            [ct("expressPremium"), "+20-50%", "Same day or urgent delivery"],
            [ct("tailLift"), "€50-100", "If loading dock not available"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">{ct("marginGuidelinesTitle")}</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>8-10%:</strong> {ct("margin8_10")}</li>
              <li>• <strong>12-15%:</strong> {ct("margin12_15")}</li>
              <li>• <strong>15-18%:</strong> {ct("margin15_18")}</li>
              <li>• <strong>20-25%:</strong> {ct("margin20_25")}</li>
              <li>• <strong>25%+:</strong> {ct("margin25plus")}</li>
            </ul>
          </div>
          <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
            <h4 className="font-semibold text-warning mb-2">{ct("pricingPitfallsTitle")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("pitfall1")}</li>
              <li>• {ct("pitfall2")}</li>
              <li>• {ct("pitfall3")}</li>
              <li>• {ct("pitfall4")}</li>
              <li>• {ct("pitfall5")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Communication */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Mail className="w-6 h-6 text-primary" />
          {ct("quoteTitle")}
        </h2>

        <p className="text-muted-foreground mb-4">
          {ct("quoteDesc")}
        </p>

        <div className="bg-muted/30 p-6 rounded-lg mb-6">
          <h3 className="font-semibold mb-4">{ct("quoteStructure")}</h3>
          <div className="space-y-4 text-sm">
            <div className="border-l-4 border-primary pl-4">
              <p className="font-medium text-primary">1. {ct("opening")}</p>
              <p className="text-muted-foreground">{ct("openingDesc")}</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-medium text-primary">2. {ct("confirmationDetails")}</p>
              <p className="text-muted-foreground">{ct("confirmationDetailsDesc")}</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-medium text-primary">3. {ct("pricePresentation")}</p>
              <p className="text-muted-foreground">{ct("pricePresentationDesc")}</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-medium text-primary">4. {ct("serviceDetails")}</p>
              <p className="text-muted-foreground">{ct("serviceDetailsDesc")}</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-medium text-primary">5. {ct("validityTerms")}</p>
              <p className="text-muted-foreground">{ct("validityTermsDesc")}</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-medium text-primary">6. {ct("callToAction")}</p>
              <p className="text-muted-foreground">{ct("callToActionDesc")}</p>
            </div>
          </div>
        </div>

        <div className="bg-background border rounded-lg p-6">
          <h4 className="font-semibold mb-3">{ct("exampleQuote")}</h4>
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
          {ct("responseTimesTitle")}
        </h2>

        <p className="text-muted-foreground mb-4">
          {ct("responseTimesDesc")}
        </p>

        <DataTable
          headers={[ct("requestType"), ct("targetResponse"), ct("maximum"), ct("priority")]}
          rows={[
            [ct("urgentSpotQuote"), "15 minutes", "30 minutes", `🔴 ${ct("critical")}`],
            [ct("standardSpotQuote"), "1 hour", "2 hours", `🟠 ${ct("high")}`],
            [ct("contractRateRequest"), "4 hours", "Same day", `🟡 ${ct("medium")}`],
            [ct("generalEnquiry"), "2 hours", "4 hours", `🟡 ${ct("medium")}`],
            [ct("rfqTender"), "Per deadline", "Never late", `🔴 ${ct("critical")}`],
            [ct("complaintIssue"), "30 minutes", "1 hour", `🔴 ${ct("critical")}`],
            [ct("invoiceQuery"), "4 hours", "Same day", `🟡 ${ct("medium")}`],
          ]}
        />

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mt-4">
          <p className="text-sm">
            <strong>Pro Tip:</strong> {ct("proTip")}
          </p>
        </div>
      </div>

      {/* Client Segmentation */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          {ct("segmentationTitle")}
        </h2>

        <DataTable
          headers={[ct("segment"), ct("characteristics"), ct("revenueShare"), ct("managementFocus")]}
          rows={[
            [`⭐⭐⭐ ${ct("strategic")}`, ct("strategicDesc"), "50-60%", ct("strategicFocus")],
            [`⭐⭐ ${ct("growing")}`, ct("growingDesc"), "25-35%", ct("growingFocus")],
            [`⭐ ${ct("transactional")}`, ct("transactionalDesc"), "10-15%", ct("transactionalFocus")],
            [`🆕 ${ct("prospects")}`, ct("prospectsDesc"), "0%", ct("prospectsFocus")],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="font-semibold mb-3">{ct("focus80Title")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("focus1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("focus2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("focus3")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{ct("retentionTitle")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("retention1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("retention2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("retention3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("retention4")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* New Client Acquisition */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Building2 className="w-6 h-6 text-primary" />
          {ct("acquisitionTitle")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">{ct("leadSourcesTitle")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Referrals:</strong> {ct("referrals")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Industry Events:</strong> {ct("industryEvents")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>LinkedIn:</strong> {ct("linkedin")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Industry Directories:</strong> {ct("industryDirectories")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Cold Outreach:</strong> {ct("coldOutreach")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{ct("firstMeetingTitle")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
                <span>{ct("meeting1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
                <span>{ct("meeting2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
                <span>{ct("meeting3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">4</span>
                <span>{ct("meeting4")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">5</span>
                <span>{ct("meeting5")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg mt-6">
          <h4 className="font-semibold mb-2">{ct("valuePropositionTitle")}</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-medium text-primary">{ct("serviceQuality")}</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• On-time delivery record</li>
                <li>• Proactive communication</li>
                <li>• Problem resolution speed</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-primary">{ct("technology")}</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• Real-time tracking</li>
                <li>• Digital documentation</li>
                <li>• Automated updates</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-primary">{ct("expertise")}</p>
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
          {ct("creditManagementTitle")}
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
              <li>• {ct("creditApproval1")}</li>
              <li>• {ct("creditApproval2")}</li>
              <li>• {ct("creditApproval3")}</li>
              <li>• {ct("creditApproval4")}</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">Credit Warning Signs</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("creditWarning1")}</li>
              <li>• {ct("creditWarning2")}</li>
              <li>• {ct("creditWarning3")}</li>
              <li>• {ct("creditWarning4")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          {ct("commercialKPIsTitle")}
        </h2>

        <DataTable
          headers={[ct("kpi"), ct("target"), ct("importance")]}
          rows={[
            [ct("quoteConversionRate"), "25-35%", ct("quoteConversionImportance")],
            [ct("avgGrossMargin"), "12-15%", ct("avgGrossMarginImportance")],
            [ct("quoteResponseTime"), "<30 min", ct("quoteResponseImportance")],
            [ct("clientRetention"), ">95%", ct("clientRetentionImportance")],
            [ct("revenuePerClient"), "Growing YoY", ct("revenuePerClientImportance")],
            [ct("newClientAcquisition"), "2-4/month", ct("newClientAcquisitionImportance")],
          ]}
        />
      </div>

      {/* Quiz */}
      {quizzes["commercial"] && (
        <Quiz
          title={ct("quizTitle")}
          questions={quizzes["commercial"]}
          chapterId="commercial"
          questionsPerRound={5}
        />
      )}
    </div>
  );
}
