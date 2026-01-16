import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Checklist } from "../Checklist";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Users, Shield, FileCheck, AlertTriangle, CheckCircle2, Star, Handshake, Scale, TrendingUp, Clock, Euro, Phone, BadgeCheck } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function CarrierManagementChapter() {
  const { ct } = useChapterTranslation("carrier-management");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Users}
        variant="carrier"
      />

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Handshake className="w-6 h-6 text-primary" />
          {ct("strategicImportanceTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("strategicImportanceDesc")}
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-background p-4 rounded-lg">
            <p className="text-2xl font-bold text-primary">60-70%</p>
            <p className="text-sm text-muted-foreground">{ct("transportCostStat")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <p className="text-2xl font-bold text-primary">85%+</p>
            <p className="text-sm text-muted-foreground">{ct("onTimePerformanceStat")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <p className="text-2xl font-bold text-primary">3-5</p>
            <p className="text-sm text-muted-foreground">{ct("backupCarriersStat")}</p>
          </div>
        </div>
      </div>

      {/* Carrier Types */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          {ct("carrierTypesTitle")}
        </h2>
        
        <DataTable
          headers={["Type", "Description", "Typical Size", "Best For"]}
          rows={[
            [ct("fleetOwner"), ct("fleetOwnerDesc"), "10-500+", ct("fleetOwnerBest")],
            [ct("ownerOperator"), ct("ownerOperatorDesc"), "1-3", ct("ownerOperatorBest")],
            [ct("agentBroker"), ct("agentBrokerDesc"), "-", ct("agentBrokerBest")],
            [ct("cooperative"), ct("cooperativeDesc"), "20-100+", ct("cooperativeBest")],
            [ct("integratedCarrier"), ct("integratedCarrierDesc"), "100-1000+", ct("integratedCarrierBest")],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">{ct("preferredTitle")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("preferredItem1")}</li>
              <li>• {ct("preferredItem2")}</li>
              <li>• {ct("preferredItem3")}</li>
              <li>• {ct("preferredItem4")}</li>
            </ul>
          </div>
          <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
            <h4 className="font-semibold text-warning mb-2">{ct("cautionTitle")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("cautionItem1")}</li>
              <li>• {ct("cautionItem2")}</li>
              <li>• {ct("cautionItem3")}</li>
              <li>• {ct("cautionItem4")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Carrier Qualification */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          {ct("qualificationTitle")}
        </h2>
        
        <p className="text-muted-foreground mb-6">
          {ct("qualificationDesc")}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Checklist
            title={ct("mandatoryDocsTitle")}
            items={[
              ct("mandatoryDoc1"),
              ct("mandatoryDoc2"),
              ct("mandatoryDoc3"),
              ct("mandatoryDoc4"),
              ct("mandatoryDoc5"),
              ct("mandatoryDoc6"),
            ]}
          />
          
          <Checklist
            title={ct("additionalVerificationTitle")}
            items={[
              ct("additionalVerification1"),
              ct("additionalVerification2"),
              ct("additionalVerification3"),
              ct("additionalVerification4"),
              ct("additionalVerification5"),
              ct("additionalVerification6"),
            ]}
          />
        </div>

        <div className="mt-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
          <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            {ct("redFlagsTitle")}
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-1">
              <li>• {ct("redFlag1")}</li>
              <li>• {ct("redFlag2")}</li>
              <li>• {ct("redFlag3")}</li>
              <li>• {ct("redFlag4")}</li>
              <li>• {ct("redFlag5")}</li>
            </ul>
            <ul className="space-y-1">
              <li>• {ct("redFlag6")}</li>
              <li>• {ct("redFlag7")}</li>
              <li>• {ct("redFlag8")}</li>
              <li>• {ct("redFlag9")}</li>
              <li>• {ct("redFlag10")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Insurance Requirements */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <FileCheck className="w-6 h-6 text-primary" />
          {ct("insuranceTitle")}
        </h2>

        <DataTable
          headers={["Insurance Type", "Minimum Coverage", "Purpose", "Verification"]}
          rows={[
            [ct("cmrLiability"), ct("cmrLiabilityCoverage"), ct("cmrLiabilityPurpose"), "Certificate"],
            [ct("motorThirdParty"), ct("motorThirdPartyCoverage"), ct("motorThirdPartyPurpose"), "Green card"],
            [ct("goodsInTransit"), ct("goodsInTransitCoverage"), ct("goodsInTransitPurpose"), "Policy"],
            [ct("publicLiability"), ct("publicLiabilityCoverage"), ct("publicLiabilityPurpose"), "Certificate"],
            [ct("employersLiability"), ct("employersLiabilityCoverage"), ct("employersLiabilityPurpose"), "Certificate"],
          ]}
        />

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mt-4">
          <p className="text-sm">
            <strong>Important:</strong> {ct("insuranceNote")}
          </p>
        </div>
      </div>

      {/* Carrier Segmentation */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Star className="w-6 h-6 text-primary" />
          {ct("segmentationTitle")}
        </h2>
        
        <p className="text-muted-foreground mb-4">
          {ct("segmentationDesc")}
        </p>

        <DataTable
          headers={["Tier", "Criteria", "Load Allocation", "Payment Terms"]}
          rows={[
            [`⭐⭐⭐ ${ct("strategicTier")}`, ct("strategicCriteria"), ct("strategicAllocation"), "Net 30-45"],
            [`⭐⭐ ${ct("preferredTier")}`, ct("preferredCriteria"), ct("preferredAllocation"), "Net 21-30"],
            [`⭐ ${ct("approvedTier")}`, ct("approvedCriteria"), ct("approvedAllocation"), "Net 14-21"],
            [`🆕 ${ct("probationTier")}`, ct("probationCriteria"), ct("probationAllocation"), "Prepay/Net 7"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("movingUpTitle")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("movingUp1")}</li>
              <li>• {ct("movingUp2")}</li>
              <li>• {ct("movingUp3")}</li>
              <li>• {ct("movingUp4")}</li>
              <li>• {ct("movingUp5")}</li>
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("movingDownTitle")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("movingDown1")}</li>
              <li>• {ct("movingDown2")}</li>
              <li>• {ct("movingDown3")}</li>
              <li>• {ct("movingDown4")}</li>
              <li>• {ct("movingDown5")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Negotiation */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Scale className="w-6 h-6 text-primary" />
          {ct("negotiationTitle")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-success">{ct("dosTitle")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("do1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("do2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("do3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("do4")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("do5")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("do6")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-destructive">{ct("dontsTitle")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>{ct("dont1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>{ct("dont2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>{ct("dont3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>{ct("dont4")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>{ct("dont5")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>{ct("dont6")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg mt-6">
          <h4 className="font-semibold mb-2">{ct("negotiationPrinciple")}</h4>
          <p className="text-sm">
            {ct("negotiationPrincipleDesc")}
          </p>
        </div>
      </div>

      {/* Rate Factors */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Euro className="w-6 h-6 text-primary" />
          {ct("rateFactorsTitle")}
        </h2>

        <DataTable
          headers={["Factor", "Impact on Rate", "How to Leverage"]}
          rows={[
            [ct("distanceRoute"), ct("distanceImpact"), ct("distanceLeverage")],
            [ct("pickupDelivery"), ct("pickupImpact"), ct("pickupLeverage")],
            [ct("loadingType"), ct("loadingImpact"), ct("loadingLeverage")],
            [ct("urgency"), ct("urgencyImpact"), ct("urgencyLeverage")],
            [ct("cargoType"), ct("cargoImpact"), ct("cargoLeverage")],
            [ct("seasonality"), ct("seasonalityImpact"), ct("seasonalityLeverage")],
            [ct("marketConditions"), ct("marketImpact"), ct("marketLeverage")],
            [ct("backloadAvailability"), ct("backloadImpact"), ct("backloadLeverage")],
            [ct("paymentTerms"), ct("paymentImpact"), ct("paymentLeverage")],
            [ct("volumeCommitment"), ct("volumeImpact"), ct("volumeLeverage")],
          ]}
        />
      </div>

      {/* Communication Standards */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Phone className="w-6 h-6 text-primary" />
          {ct("communicationTitle")}
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <InfoCard title={ct("orderConfirmation")} icon={FileCheck}>
            <ul className="text-sm space-y-1">
              <li>• {ct("orderConfirmation1")}</li>
              <li>• {ct("orderConfirmation2")}</li>
              <li>• {ct("orderConfirmation3")}</li>
              <li>• {ct("orderConfirmation4")}</li>
            </ul>
          </InfoCard>
          
          <InfoCard title={ct("duringTransport")} icon={Clock}>
            <ul className="text-sm space-y-1">
              <li>• {ct("duringTransport1")}</li>
              <li>• {ct("duringTransport2")}</li>
              <li>• {ct("duringTransport3")}</li>
              <li>• {ct("duringTransport4")}</li>
            </ul>
          </InfoCard>
          
          <InfoCard title={ct("postDelivery")} icon={CheckCircle2}>
            <ul className="text-sm space-y-1">
              <li>• {ct("postDelivery1")}</li>
              <li>• {ct("postDelivery2")}</li>
              <li>• {ct("postDelivery3")}</li>
              <li>• {ct("postDelivery4")}</li>
            </ul>
          </InfoCard>
        </div>
      </div>

      {/* Performance Management */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          {ct("carrierPerformanceTitle")}
        </h2>

        <DataTable
          headers={[ct("kpi"), ct("target"), ct("measurement"), ct("reviewFrequency")]}
          rows={[
            [ct("onTimePickup"), "≥95%", "Arrival within 30 min of slot", "Weekly"],
            [ct("onTimeDelivery"), "≥95%", "Delivery within agreed window", "Weekly"],
            [ct("podSubmission"), "≥90% within 24h", "Signed POD received", "Weekly"],
            [ct("damageRate"), "<1%", "Shipments with damage claims", "Monthly"],
            [ct("communicationScore"), "≥4/5", "Responsiveness, updates, professionalism", "Monthly"],
            [ct("invoiceAccuracy"), "≥98%", "Correct pricing, no disputes", "Monthly"],
            [ct("loadAcceptanceRate"), "≥80%", "Offers accepted vs offered", "Monthly"],
            [ct("capacityReliability"), "≥90%", "Confirmed loads executed", "Monthly"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-success/10 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">{ct("rewardHighPerformers")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("reward1")}</li>
              <li>• {ct("reward2")}</li>
              <li>• {ct("reward3")}</li>
              <li>• {ct("reward4")}</li>
              <li>• {ct("reward5")}</li>
            </ul>
          </div>
          <div className="bg-destructive/10 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">{ct("addressPoorPerformers")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("address1")}</li>
              <li>• {ct("address2")}</li>
              <li>• {ct("address3")}</li>
              <li>• {ct("address4")}</li>
              <li>• {ct("address5")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Building Relationships */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <BadgeCheck className="w-6 h-6 text-primary" />
          {ct("longTermRelationshipsTitle")}
        </h2>

        <div className="prose prose-slate max-w-none">
          <p>
            {ct("longTermDesc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="font-semibold mb-3">{ct("relationshipStrategies")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("strategy1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("strategy2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("strategy3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("strategy4")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("strategy5")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{ct("benefitsTitle")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("benefit1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("benefit2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("benefit3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("benefit4")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("benefit5")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Carrier Database */}
      <div className="info-card bg-muted/30">
        <h2 className="section-title">{ct("carrierDatabaseTitle")}</h2>
        
        <p className="text-muted-foreground mb-4">
          {ct("carrierDatabaseDesc")}
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-background p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("companyDetails")}</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• {ct("companyDetail1")}</li>
              <li>• {ct("companyDetail2")}</li>
              <li>• {ct("companyDetail3")}</li>
              <li>• {ct("companyDetail4")}</li>
              <li>• {ct("companyDetail5")}</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("operationalInfo")}</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• {ct("opInfo1")}</li>
              <li>• {ct("opInfo2")}</li>
              <li>• {ct("opInfo3")}</li>
              <li>• {ct("opInfo4")}</li>
              <li>• {ct("opInfo5")}</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("compliancePerformance")}</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• {ct("compPerf1")}</li>
              <li>• {ct("compPerf2")}</li>
              <li>• {ct("compPerf3")}</li>
              <li>• {ct("compPerf4")}</li>
              <li>• {ct("compPerf5")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 p-4 bg-info/10 border border-info/30 rounded-lg">
          <p className="text-sm">
            <strong>Pro Tip:</strong> {ct("databaseProTip")}
          </p>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["carrier-management"] && (
        <Quiz
          title={ct("quizTitle")}
          questions={quizzes["carrier-management"]}
          chapterId="carrier-management"
          questionsPerRound={10}
        />
      )}
    </div>
  );
}
