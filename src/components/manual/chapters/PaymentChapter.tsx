import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { CreditCard, FileText, AlertTriangle, CheckCircle, Clock, Shield, Calculator, Users } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function PaymentChapter() {
  const { ct } = useChapterTranslation("payment");

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-600 to-orange-500 p-8 md:p-12 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <CreditCard className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            {ct("title")}
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            {ct("subtitle")}
          </p>
        </div>
      </div>

      {/* Payment Terms */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Clock className="w-6 h-6 text-primary" />
          {ct("standardPaymentTerms")}
        </h2>
        <DataTable
          headers={[ct("term"), ct("description"), ct("typicalUse")]}
          rows={[
            [ct("prepayment"), ct("prepaymentDesc"), ct("prepaymentUse")],
            [ct("cod"), ct("codDesc"), ct("codUse")],
            [ct("net14"), ct("net14Desc"), ct("net14Use")],
            [ct("net30"), ct("net30Desc"), ct("net30Use")],
            [ct("net45_60"), ct("net45_60Desc"), ct("net45_60Use")],
            [ct("eomPlus30"), ct("eomPlus30Desc"), ct("eomPlus30Use")],
          ]}
        />
      </section>

      {/* Credit Checks */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          {ct("creditAssessment")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct("beforeExtendingCredit")} icon={CheckCircle} variant="info">
            <ul className="space-y-2">
              <li>• {ct("checkCompanyRegistration")}</li>
              <li>• {ct("requestTradeReferences")}</li>
              <li>• {ct("useCreditRatingServices")}</li>
              <li>• {ct("reviewFreightExchangeRatings")}</li>
              <li>• {ct("startWithPrepayment")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("creditLimitGuidelines")} icon={Calculator} variant="warning">
            <ul className="space-y-2">
              <li>• {ct("newCustomerMaxLoads")}</li>
              <li>• {ct("after3PaidInvoices")}</li>
              <li>• {ct("reviewLimitsQuarterly")}</li>
              <li>• {ct("reduceImmediately")}</li>
              <li>• {ct("documentCreditDecisions")}</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Invoice Requirements */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          {ct("invoiceRequirements")}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">{ct("mandatoryElements")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("invoiceNumber")}</li>
                <li>• {ct("invoiceDate")}</li>
                <li>• {ct("yourCompanyDetails")}</li>
                <li>• {ct("customerDetails")}</li>
                <li>• {ct("serviceDescription")}</li>
                <li>• {ct("netAmountVat")}</li>
                <li>• {ct("paymentTermsDueDate")}</li>
                <li>• {ct("bankAccountDetails")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct("transportSpecificDetails")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("orderReferenceNumber")}</li>
                <li>• {ct("loadingDeliveryDates")}</li>
                <li>• {ct("route")}</li>
                <li>• {ct("vehicleRegistration")}</li>
                <li>• {ct("cmrNumber")}</li>
                <li>• {ct("weightQuantity")}</li>
                <li>• {ct("breakdownOfCharges")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VAT in Transport */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Calculator className="w-6 h-6 text-primary" />
          {ct("vatInInternationalTransport")}
        </h2>
        <div className="bg-muted/30 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">{ct("intraEuTransport")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("b2bReverseCharge")}</li>
                <li>• {ct("customerMustHaveValidVat")}</li>
                <li>• {ct("verifyVatVies")}</li>
                <li>• {ct("invoiceStatesReverseCharge")}</li>
                <li>• {ct("reportInEcSalesList")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct("exportImportTransport")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("exportFromEu")}</li>
                <li>• {ct("keepExportDocumentation")}</li>
                <li>• {ct("importToEu")}</li>
                <li>• {ct("thirdCountryRoutes")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Invoicing Best Practices */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-primary" />
          {ct("invoicingBestPractices")}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title={ct("speed")} icon={Clock} variant="success">
            <ul className="space-y-2">
              <li>• {ct("invoiceWithin48h")}</li>
              <li>• {ct("attachSignedCmr")}</li>
              <li>• {ct("useAutomatedTms")}</li>
              <li>• {ct("sendViaEmail")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("accuracy")} icon={FileText} variant="info">
            <ul className="space-y-2">
              <li>• {ct("doubleCheckFigures")}</li>
              <li>• {ct("matchOrderConfirmation")}</li>
              <li>• {ct("correctCustomerDetails")}</li>
              <li>• {ct("includeAllAgreedCharges")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("tracking")} icon={Calculator} variant="highlight">
            <ul className="space-y-2">
              <li>• {ct("useInvoiceTrackingSystem")}</li>
              <li>• {ct("setAutomaticReminders")}</li>
              <li>• {ct("monitorDso")}</li>
              <li>• {ct("ageAnalysisWeekly")}</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Collection Process */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-warning" />
          {ct("collectionProcess")}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
              <div>
                <span className="font-semibold">{ct("dueDatePlus1")}</span>
                <span className="text-muted-foreground ml-2">{ct("friendlyReminderEmail")}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
              <div>
                <span className="font-semibold">{ct("dueDatePlus7")}</span>
                <span className="text-muted-foreground ml-2">{ct("secondReminderPhoneCall")}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-warning/20 flex items-center justify-center flex-shrink-0 text-sm font-bold text-warning">3</div>
              <div>
                <span className="font-semibold">{ct("dueDatePlus14")}</span>
                <span className="text-muted-foreground ml-2">{ct("formalDemandLetter")}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 text-sm font-bold text-destructive">4</div>
              <div>
                <span className="font-semibold">{ct("dueDatePlus30")}</span>
                <span className="text-muted-foreground ml-2">{ct("finalNoticeBeforeCollection")}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 text-sm font-bold text-destructive">5</div>
              <div>
                <span className="font-semibold">{ct("dueDatePlus45")}</span>
                <span className="text-muted-foreground ml-2">{ct("handOverToCollection")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Billing */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" />
          {ct("selfBillingArrangements")}
        </h2>
        <InfoCard title={ct("selfBillingCustomerCreates")} icon={FileText} variant="info">
          <p className="text-sm text-muted-foreground mb-4">
            {ct("selfBillingDesc")}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">{ct("advantages")}</h4>
              <ul className="space-y-1 text-sm">
                <li>• {ct("fasterPayment")}</li>
                <li>• {ct("lessAdmin")}</li>
                <li>• {ct("fewerInvoiceDisputes")}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{ct("requirements")}</h4>
              <ul className="space-y-1 text-sm">
                <li>• {ct("writtenSelfBillingAgreement")}</li>
                <li>• {ct("checkEachSelfBill")}</li>
                <li>• {ct("reportDiscrepanciesPromptly")}</li>
                <li>• {ct("keepRecordsAsNormal")}</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Carrier Payments */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <CreditCard className="w-6 h-6 text-primary" />
          {ct("payingYourCarriers")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">{ct("paymentBestPractices")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct("payOnAgreedTerms")}</li>
              <li>• {ct("verifyPodReceived")}</li>
              <li>• {ct("useBatchPayments")}</li>
              <li>• {ct("keepPaymentProofRecords")}</li>
              <li>• {ct("matchPaymentsToInvoices")}</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">{ct("cashFlowManagement")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct("matchPaymentTerms")}</li>
              <li>• {ct("maintainCashReserve")}</li>
              <li>• {ct("considerFactoring")}</li>
              <li>• {ct("monitorDsoDpoWeekly")}</li>
              <li>• {ct("planForSeasonalVariations")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Calculator className="w-6 h-6 text-primary" />
          {ct("keyFinancialMetrics")}
        </h2>
        <DataTable
          headers={[ct("metric"), ct("target"), ct("description")]}
          rows={[
            [ct("dso"), ct("dsoTarget"), ct("dsoDesc")],
            [ct("dpo"), ct("dpoTarget"), ct("dpoDesc")],
            [ct("badDebtRatio"), ct("badDebtTarget"), ct("badDebtDesc")],
            [ct("invoiceAccuracy"), ct("invoiceAccuracyTarget"), ct("invoiceAccuracyDesc")],
            [ct("collectionRate"), ct("collectionRateTarget"), ct("collectionRateDesc")],
          ]}
        />
      </section>

      {/* Quiz */}
      {quizzes.payment && (
        <Quiz title={ct("quizTitle")} questions={quizzes.payment} chapterId="payment" />
      )}
    </div>
  );
}