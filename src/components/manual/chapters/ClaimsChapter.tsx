import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { FlowDiagram, DecisionDiagram } from "../FlowDiagram";
import { quizzes } from "@/data/quizData";
import { FileText, AlertTriangle, Shield, Clock, Euro, CheckCircle, Scale, Camera } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function ClaimsChapter() {
  const { ct } = useChapterTranslation("claims");

  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Scale}
        variant="claims"
      />

      {/* CMR Liability Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Scale className="w-6 h-6 text-primary" />
          {ct("cmrConventionLiability")}
        </h2>
        <InfoCard title={ct("understandingCmrLiability")} icon={FileText} variant="info">
          <p className="mb-4">{ct("cmrLiabilityDesc")}</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">{ct("carrierLiabilityLimit")}</h4>
              <p className="text-2xl font-bold text-primary">{ct("sdrPerKg")}</p>
              <p className="text-sm mt-1">{ct("approxEuroPerKg")}</p>
              <p className="text-xs text-muted-foreground mt-2">{ct("sdrExplanation")}</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">{ct("delayLiabilityLimit")}</h4>
              <p className="text-2xl font-bold text-warning">{ct("freightCharge")}</p>
              <p className="text-sm mt-1">{ct("maximumTransportPrice")}</p>
              <p className="text-xs text-muted-foreground mt-2">{ct("onlyIfDeadlineSpecified")}</p>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Types of Claims */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" />
          {ct("typesOfTransportClaims")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct("totalLoss")} icon={AlertTriangle} variant="warning">
            <p className="mb-2">{ct("totalLossDesc")}</p>
            <ul className="space-y-1 text-sm">
              <li>• {ct("theftOfEntireLoad")}</li>
              <li>• {ct("completeDestructionByFire")}</li>
              <li>• {ct("undeliveredCargoAfter30Days")}</li>
              <li><strong>{ct("claimDeadline")}</strong> {ct("thirtyDaysFromDelivery")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("partialLoss")} icon={AlertTriangle} variant="info">
            <p className="mb-2">{ct("partialLossDesc")}</p>
            <ul className="space-y-1 text-sm">
              <li>• {ct("missingPackages")}</li>
              <li>• {ct("partialTheft")}</li>
              <li>• {ct("quantityDiscrepancy")}</li>
              <li><strong>{ct("claimDeadline")}</strong> {ct("sevenDaysFromDelivery")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("damage")} icon={Camera} variant="warning">
            <p className="mb-2">{ct("damageDesc")}</p>
            <ul className="space-y-1 text-sm">
              <li>• {ct("physicalDamage")}</li>
              <li>• {ct("temperatureDeviation")}</li>
              <li>• {ct("contamination")}</li>
              <li><strong>{ct("claimDeadline")}</strong> {ct("sevenDaysWrittenReservation")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("delay")} icon={Clock} variant="info">
            <p className="mb-2">{ct("delayDesc")}</p>
            <ul className="space-y-1 text-sm">
              <li>• {ct("mustBeAgreedDeadline")}</li>
              <li>• {ct("economicLossProvable")}</li>
              <li>• {ct("maximumFreightCharge")}</li>
              <li><strong>{ct("claimDeadline")}</strong> {ct("twentyOneDaysFromDelivery")}</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Visual Claims Flow */}
      <FlowDiagram
        title={ct("claimsProcessOverview")}
        steps={[
          { id: "damage", label: ct("damageFound"), description: ct("documentImmediately"), color: "destructive" },
          { id: "reserve", label: ct("cmrReserve"), description: ct("noteOnDelivery"), color: "warning" },
          { id: "notify", label: ct("notify"), description: ct("withinSevenDays"), color: "info" },
          { id: "quantify", label: ct("quantify"), description: ct("calculateValue"), color: "primary" },
          { id: "settle", label: ct("settle"), description: ct("negotiateClaim"), color: "success" },
        ]}
      />

      {/* Decision Diagram */}
      <DecisionDiagram
        title={ct("claimDecisionPoint")}
        question={ct("damageVisibleAtDelivery")}
        yesPath={{
          label: ct("immediateReservation"),
          result: ct("noteOnCmrBeforeSigning")
        }}
        noPath={{
          label: ct("hiddenDamage"),
          result: ct("writtenClaimWithinSevenDays")
        }}
      />

      {/* Claim Process Flowchart */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          {ct("claimsProcessStepByStep")}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center flex-shrink-0 text-destructive-foreground font-bold">1</div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">{ct("immediateDocumentation")}</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {ct("noteReservationOnCmr")}</li>
                  <li>• {ct("takeTimestampedPhotos")}</li>
                  <li>• {ct("getReceiverSignature")}</li>
                  <li>• {ct("preserveDamagedGoods")}</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-warning flex items-center justify-center flex-shrink-0 text-warning-foreground font-bold">2</div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">{ct("writtenNotification")}</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {ct("sendWrittenClaimLetter")}</li>
                  <li>• {ct("includeCmrDetails")}</li>
                  <li>• {ct("attachPhotoDocumentation")}</li>
                  <li>• {ct("keepProofOfSending")}</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-info flex items-center justify-center flex-shrink-0 text-info-foreground font-bold">3</div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">{ct("claimQuantification")}</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {ct("originalInvoice")}</li>
                  <li>• {ct("calculateWeightForCmr")}</li>
                  <li>• {ct("includeRepairQuotes")}</li>
                  <li>• {ct("documentConsequentialLosses")}</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center flex-shrink-0 text-success-foreground font-bold">4</div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">{ct("negotiationSettlement")}</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {ct("submitToCarrierInsurance")}</li>
                  <li>• {ct("negotiateSettlement")}</li>
                  <li>• {ct("getSettlementInWriting")}</li>
                  <li>• {ct("considerLegalAction")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Requirements */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Camera className="w-6 h-6 text-primary" />
          {ct("requiredDocumentation")}
        </h2>
        <div className="bg-muted/30 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { doc: ct("signedCmrWithReservations"), critical: true },
              { doc: ct("timestampedPhotosOfDamage"), critical: true },
              { doc: ct("originalCommercialInvoice"), critical: true },
              { doc: ct("packingListWithWeights"), critical: true },
              { doc: ct("writtenClaimNotification"), critical: true },
              { doc: ct("proofOfSending"), critical: false },
              { doc: ct("repairReplacementQuotes"), critical: false },
              { doc: ct("independentSurveyReport"), critical: false },
              { doc: ct("loadingUnloadingPhotos"), critical: false },
              { doc: ct("temperatureRecords"), critical: false },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <CheckCircle className={`w-5 h-5 ${item.critical ? 'text-destructive' : 'text-success'}`} />
                <span className="text-sm">{item.doc}</span>
                {item.critical && <span className="text-xs bg-destructive/10 text-destructive px-2 py-0.5 rounded">{ct("critical")}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Deadlines Table */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Clock className="w-6 h-6 text-primary" />
          {ct("criticalDeadlines")}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">{ct("claimType")}</th>
                <th className="p-3 text-left border border-border">{ct("reservation")}</th>
                <th className="p-3 text-left border border-border">{ct("writtenClaim")}</th>
                <th className="p-3 text-left border border-border">{ct("legalAction")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border font-medium">{ct("visibleDamage")}</td>
                <td className="p-3 border border-border text-destructive font-semibold">{ct("atDelivery")}</td>
                <td className="p-3 border border-border">{ct("sevenDays")}</td>
                <td className="p-3 border border-border">{ct("oneYear")}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-medium">{ct("hiddenDamage")}</td>
                <td className="p-3 border border-border text-warning font-semibold">{ct("withinSevenDaysReservation")}</td>
                <td className="p-3 border border-border">{ct("sevenDays")}</td>
                <td className="p-3 border border-border">{ct("oneYear")}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-medium">{ct("partialLoss")}</td>
                <td className="p-3 border border-border text-destructive font-semibold">{ct("atDelivery")}</td>
                <td className="p-3 border border-border">{ct("sevenDays")}</td>
                <td className="p-3 border border-border">{ct("oneYear")}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-medium">{ct("totalLoss")}</td>
                <td className="p-3 border border-border">{ct("na")}</td>
                <td className="p-3 border border-border text-warning font-semibold">{ct("thirtyDays")}</td>
                <td className="p-3 border border-border">{ct("oneYear")}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-medium">{ct("delay")}</td>
                <td className="p-3 border border-border">{ct("na")}</td>
                <td className="p-3 border border-border text-warning font-semibold">{ct("twentyOneDays")}</td>
                <td className="p-3 border border-border">{ct("oneYear")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Defenses Against Claims */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          {ct("carrierDefensesUnderCmr")}
        </h2>
        <InfoCard title={ct("whenCarrierNotLiable")} icon={Shield} variant="success">
          <p className="mb-3">{ct("carrierEscapeLiability")}</p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("wrongfulActOfClaimant")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("instructionsOfClaimant")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("inherentViceOfGoods")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("circumstancesBeyondControl")}</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("defectivePackingBySender")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("handlingBySenderConsignee")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("natureOfCertainGoods")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("insufficientMarkingNumbering")}</span>
              </li>
            </ul>
          </div>
        </InfoCard>
      </section>

      {/* Claim Prevention Tips */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          {ct("preventingClaims")}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Camera className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">{ct("photoEverything")}</h3>
            <p className="text-sm text-muted-foreground">{ct("photoEverythingDesc")}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <FileText className="w-10 h-10 text-info mx-auto mb-3" />
            <h3 className="font-semibold mb-2">{ct("clearCmrNotes")}</h3>
            <p className="text-sm text-muted-foreground">{ct("clearCmrNotesDesc")}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Shield className="w-10 h-10 text-success mx-auto mb-3" />
            <h3 className="font-semibold mb-2">{ct("useVerifiedCarriers")}</h3>
            <p className="text-sm text-muted-foreground">{ct("useVerifiedCarriersDesc")}</p>
          </div>
        </div>
      </section>

      {/* Quiz */}
      {quizzes.claims && (
        <Quiz title={ct("quizTitle")} questions={quizzes.claims} chapterId="claims" />
      )}
    </div>
  );
}