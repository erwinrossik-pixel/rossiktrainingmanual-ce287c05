import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { FileText, Euro, Calendar, CreditCard, Calculator, CheckCircle2, AlertTriangle, Clock, TrendingUp, Building2, Receipt, Scale } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import accountingImg from "@/assets/chapters/accounting-financial.jpg";
import accountingReconciliationImg from "@/assets/chapters/accounting-reconciliation.jpg";

export function AccountingChapter() {
  const { ct } = useChapterTranslation("accounting");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Receipt}
        variant="accounting"
      />


      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Euro className="w-6 h-6 text-primary" />
          {ct("financialOverview")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("financialOverviewDesc")}
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Receipt className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("clientInvoicing")}</p>
            <p className="text-xs text-muted-foreground">{ct("billForServices")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("costVerification")}</p>
            <p className="text-xs text-muted-foreground">{ct("checkCarrierInvoices")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <CreditCard className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("payments")}</p>
            <p className="text-xs text-muted-foreground">{ct("payCarriersCollect")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("marginAnalysis")}</p>
            <p className="text-xs text-muted-foreground">{ct("profitTracking")}</p>
          </div>
        </div>
        
        {/* Accounting Financial Image - contextual after financial overview */}
        <ChapterImage
          src={accountingImg}
          alt="Transport accounting and financial documentation"
          variant="float-right"
          className="mt-4"
        />
      </div>

      {/* Client Invoicing */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Receipt className="w-6 h-6 text-primary" />
          {ct("clientInvoicing")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">{ct("invoiceContentRequirements")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("yourCompanyDetails")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("clientDetails")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("invoiceNumber")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("invoiceDateDue")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("serviceDescription")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("netAmountVAT")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("paymentTermsBankDetails")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{ct("bestPractices")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("speedInvoice48h")}</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("attachmentsIncludePOD")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("accuracyCheckAmounts")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("referenceIncludeClientPO")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Calculator className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("vatApplyCorrectRate")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">{ct("quickInvoicingCashFlow")}</h4>
          <p className="text-sm">
            {ct("quickInvoicingDesc")}
          </p>
        </div>
      </div>

      {/* Cost Verification */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          {ct("carrierInvoiceVerification")}
        </h2>

        <p className="text-muted-foreground mb-4">
          {ct("carrierVerificationDesc")}
        </p>

        <DataTable
          headers={[ct("checkPoint"), ct("whatToVerify"), ct("commonIssues")]}
          rows={[
            [ct("basicDetails"), ct("correctDatesRouteVehicle"), ct("wrongShipmentRef")],
            [ct("agreedRate"), ct("priceMatchesOrder"), ct("higherRateThanAgreed")],
            [ct("additionalCharges"), ct("waitingTimeTollsJustified"), ct("unjustifiedExtras")],
            [ct("podAttached"), ct("signedCleanComplete"), ct("missingUnclearPOD")],
            [ct("vatTreatment"), ct("correctRateApplied"), ct("wrongVATRate")],
            [ct("paymentDetails"), ct("correctBankAccount"), ct("changedBankDetails")],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">{ct("approveIf")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("rateMatchesOrder")}</li>
              <li>• {ct("additionalChargesJustified")}</li>
              <li>• {ct("podCleanComplete")}</li>
              <li>• {ct("noOutstandingIssues")}</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">{ct("queryRejectIf")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("rateDiffersAgreed")}</li>
              <li>• {ct("unexplainedAdditional")}</li>
              <li>• {ct("podHasReservations")}</li>
              <li>• {ct("openClaimShipment")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Terms */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Calendar className="w-6 h-6 text-primary" />
          {ct("paymentTerms")}
        </h2>

        <DataTable
          headers={[ct("term"), ct("meaning"), ct("typicalUse"), ct("riskLevel")]}
          rows={[
            [ct("prepayment"), ct("paymentBeforeService"), ct("newClientsHighRisk"), ct("lowestForYou")],
            [ct("codPod"), ct("cashPaymentOnDelivery"), ct("newCarriersSpotMarket"), ct("low")],
            [ct("net7"), ct("paymentWithin7Days"), ct("smallCarriersQuickPayment"), ct("low")],
            [ct("net14"), ct("paymentWithin14Days"), ct("standardForCarriers"), ct("medium")],
            [ct("net30"), ct("paymentWithin30Days"), ct("standardForClients"), ct("medium")],
            [ct("net45"), ct("paymentWithin45Days"), ct("preferredCarriers"), ct("higher")],
            [ct("net60"), ct("paymentWithin60Days"), ct("largeClients"), ct("higher")],
            [ct("net90"), ct("paymentWithin90Days"), ct("corporateClientsOnly"), ct("highest")],
          ]}
        />

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg mt-4">
          <h4 className="font-semibold flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4" />
            {ct("cashFlowWarning")}
          </h4>
          <p className="text-sm">
            {ct("cashFlowWarningDesc")}
          </p>
        </div>
      </div>

      {/* VAT in Transport */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Calculator className="w-6 h-6 text-primary" />
          {ct("vatEuropeanTransport")}
        </h2>

        <DataTable
          headers={[ct("scenario"), ct("vatTreatmentCol"), ct("documentation")]}
          rows={[
            [ct("domesticTransport"), ct("standardVATRate"), ct("normalInvoiceVAT")],
            [ct("intraEUB2B"), ct("reverseChargeZero"), ct("customerVATNumber")],
            [ct("exportNonEU"), ct("zeroVATExport"), ct("customsDocProof")],
            [ct("importFromNonEU"), ct("vatOnImport"), ct("importDeclarationProof")],
            [ct("transportLinkedExport"), ct("zeroVATFollowsGoods"), ct("exportDocRef")],
            [ct("cabotage"), ct("placeOfSupply"), ct("dependsRegistration")],
          ]}
        />

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mt-4">
          <h4 className="font-semibold mb-2">{ct("reverseChargeMechanism")}</h4>
          <p className="text-sm mb-2">
            {ct("reverseChargeDesc")}
          </p>
          <p className="text-sm font-medium">
            {ct("invoiceMustState")}
          </p>
        </div>
        
        {/* Accounting Reconciliation Image - contextual after VAT section */}
        <ChapterImage
          src={accountingReconciliationImg}
          alt="Finance team reconciling freight invoices on spreadsheet"
          variant="float-right"
          className="mt-4"
        />
      </div>

      {/* Dispute Resolution */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Scale className="w-6 h-6 text-primary" />
          {ct("financialDisputeResolution")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">{ct("commonDisputeTypes")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("rateDiscrepancy")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("additionalChargesDispute")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("missingDocumentation")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("claimDeductions")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("latePayment")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{ct("resolutionProcess")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
                <span>{ct("documentDispute")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
                <span>{ct("gatherEvidence")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
                <span>{ct("communicateProfessionally")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">4</span>
                <span>{ct("seekCompromise")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">5</span>
                <span>{ct("escalateManagement")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Financial KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          {ct("financialKPIs")}
        </h2>

        <DataTable
          headers={[ct("kpi"), ct("definition"), ct("target"), ct("importance")]}
          rows={[
            [ct("grossMargin"), ct("grossMarginDef"), ct("grossMarginTarget"), ct("profitabilityMeasure")],
            [ct("dso"), ct("dsoDef"), ct("dsoTarget"), ct("cashFlowIndicator")],
            [ct("dpo"), ct("dpoDef"), ct("alignWithTerms"), ct("cashFlowManagement")],
            [ct("badDebtRate"), ct("badDebtDef"), ct("badDebtTarget"), ct("creditRiskIndicator")],
            [ct("invoiceAccuracy"), ct("invoiceAccuracyDef"), ct("invoiceAccuracyTarget"), ct("adminEfficiency")],
            [ct("creditNoteRate"), ct("creditNoteDef"), ct("creditNoteTarget"), ct("pricingServiceQuality")],
          ]}
        />
      </div>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="accounting" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="accounting" />
    </div>
  );
}
