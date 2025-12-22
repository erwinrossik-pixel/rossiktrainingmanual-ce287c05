import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { FlowDiagram, DecisionDiagram, ProcessMap } from "../FlowDiagram";
import { quizzes } from "@/data/quizData";
import { AlertTriangle, Phone, FileText, Shield, Truck, MapPin, Clock, CheckCircle } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function EmergencyChapter() {
  const { ct } = useChapterTranslation("emergency");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        chapterNumber={ct('chapterNumber')}
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={AlertTriangle}
        variant="emergency"
      />

      {/* Emergency Response Flow */}
      <FlowDiagram
        title={ct("emergencyResponseProtocol")}
        steps={[
          { id: "secure", label: ct("secureScene"), description: ct("hazardsSafety"), color: "destructive" },
          { id: "call", label: ct("call112"), description: ct("emergencyServices"), color: "warning" },
          { id: "document", label: ct("document"), description: ct("photosInfo"), color: "info" },
          { id: "notify", label: ct("notify"), description: ct("dispatcher"), color: "primary" },
          { id: "wait", label: ct("wait"), description: ct("followInstructions"), color: "success" },
        ]}
      />

      {/* Decision Diagram */}
      <DecisionDiagram
        title={ct("injuryAssessment")}
        question={ct("areThereInjuries")}
        yesPath={{
          label: ct("call112First"),
          result: ct("provideFirstAid")
        }}
        noPath={{
          label: ct("secureAndDocument"),
          result: ct("exchangeInfoCallDispatcher")
        }}
      />

      {/* Emergency Response Process Map */}
      <ProcessMap
        title={ct("emergencySituationHandling")}
        phases={[
          {
            name: ct("roadAccident"),
            color: "destructive",
            steps: [
              ct("turnOnHazardLights"),
              ct("placeWarningTriangle"),
              ct("putOnHighVisVest"),
              ct("callImmediately"),
              ct("documentWithPhotos")
            ]
          },
          {
            name: ct("vehicleBreakdown"),
            color: "warning",
            steps: [
              ct("pullOffRoad"),
              ct("activateHazards"),
              ct("exitSafeSide"),
              ct("callBreakdownService"),
              ct("notifyDispatcher")
            ]
          },
          {
            name: ct("cargoDamage"),
            color: "info",
            steps: [
              ct("stopAndAssess"),
              ct("takeTimestampedPhotos"),
              ct("noteCMRReservation"),
              ct("doNotSignCleanPOD"),
              ct("informAllParties")
            ]
          },
          {
            name: ct("theftSecurity"),
            color: "primary",
            steps: [
              ct("doNotConfront"),
              ct("callPolice112"),
              ct("preserveCrimeScene"),
              ct("documentEverything"),
              ct("notifyInsurance")
            ]
          }
        ]}
      />

      {/* Emergency Contacts */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Phone className="w-6 h-6 text-primary" />
          {ct("emergencyContactNumbers")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct("europeanEmergencyNumber")} icon={Phone} variant="warning">
            <p className="text-2xl font-bold text-warning">112</p>
            <p>{ct("worksInAllEU")}</p>
          </InfoCard>
          <InfoCard title={ct("roadsideAssistance")} icon={Truck} variant="info">
            <ul className="space-y-1">
              <li><strong>{ct("adacGermany")}</strong> +49 89 22 22 22</li>
              <li><strong>{ct("oeamtcAustria")}</strong> +43 1 120</li>
              <li><strong>{ct("aaUK")}</strong> +44 800 887 766</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Accident Protocol */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          {ct("roadAccidentProtocol")}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-destructive">1</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{ct("secureTheScene")}</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {ct("turnOnHazardLightsImmediately")}</li>
                  <li>• {ct("placeWarningTriangle100200m")}</li>
                  <li>• {ct("putOnHighVisVestBefore")}</li>
                  <li>• {ct("moveInjuredToSafety")}</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-warning">2</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{ct("callEmergencyServices")}</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {ct("callEmergencyNumber")}</li>
                  <li>• {ct("provideExactLocation")}</li>
                  <li>• {ct("describeInjuries")}</li>
                  <li>• {ct("stayOnLine")}</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-info/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-info">3</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{ct("documentEverythingTitle")}</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {ct("takePhotosAllVehicles")}</li>
                  <li>• {ct("getWitnessDetails")}</li>
                  <li>• {ct("exchangeInsuranceInfo")}</li>
                  <li>• {ct("fillAccidentStatement")}</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-success">4</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{ct("notifyDispatcherTitle")}</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {ct("callDispatcherAfterSecured")}</li>
                  <li>• {ct("provideLocationDetails")}</li>
                  <li>• {ct("waitForInstructions")}</li>
                  <li>• {ct("keepAllDocumentation")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breakdown Procedures */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Truck className="w-6 h-6 text-primary" />
          {ct("breakdownProcedures")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct("highwayBreakdown")} icon={MapPin} variant="warning">
            <ol className="space-y-2 list-decimal list-inside">
              <li>{ct("pullCompletelyOffRoad")}</li>
              <li>{ct("activateHazardsPlaceTriangle")}</li>
              <li>{ct("exitAwayFromTraffic")}</li>
              <li>{ct("callBreakdownFromBehindBarrier")}</li>
              <li>{ct("neverAttemptRepairsHighway")}</li>
            </ol>
          </InfoCard>
          <InfoCard title={ct("urbanRuralBreakdown")} icon={MapPin} variant="info">
            <ol className="space-y-2 list-decimal list-inside">
              <li>{ct("findSafeParking")}</li>
              <li>{ct("assessMinorRepair")}</li>
              <li>{ct("contactDispatcherETA")}</li>
              <li>{ct("secureCargoBefore")}</li>
              <li>{ct("documentConditionPhotos")}</li>
            </ol>
          </InfoCard>
        </div>
      </section>

      {/* Cargo Damage */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          {ct("cargoDamageProtocol")}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-warning flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                {ct("immediateActions")}
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• {ct("stopAndAssessDamage")}</li>
                <li>• {ct("takeDetailedPhotos")}</li>
                <li>• {ct("noteCMRReservationDelivery")}</li>
                <li>• {ct("doNotSignCleanPODDamaged")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-info flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {ct("notification")}
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• {ct("informDispatcherImmediately")}</li>
                <li>• {ct("notifyShipperConsignee")}</li>
                <li>• {ct("reportToInsurance")}</li>
                <li>• {ct("keepAllPartiesUpdated")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-success flex items-center gap-2">
                <FileText className="w-4 h-4" />
                {ct("documentation")}
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• {ct("writtenDescriptionDamage")}</li>
                <li>• {ct("photosBeforeAfter")}</li>
                <li>• {ct("witnessStatementsAvailable")}</li>
                <li>• {ct("preserveDamagedGoods")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Theft Prevention */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          {ct("theftPreventionResponse")}
        </h2>
        <InfoCard title={ct("highRiskAreasPrevention")} icon={AlertTriangle} variant="warning">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">{ct("preventionMeasures")}</h4>
              <ul className="space-y-1">
                <li>• {ct("useSecureParking")}</li>
                <li>• {ct("neverLeaveTruckUnattended")}</li>
                <li>• {ct("varyRoutesParking")}</li>
                <li>• {ct("installTrackingAlarms")}</li>
                <li>• {ct("keepCargoInfoConfidential")}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{ct("ifTheftOccurs")}</h4>
              <ul className="space-y-1">
                <li>• {ct("callPoliceImmediately")}</li>
                <li>• {ct("doNotChaseConfront")}</li>
                <li>• {ct("documentEverythingVisible")}</li>
                <li>• {ct("notifyDispatcherInsurance")}</li>
                <li>• {ct("preserveCrimeScenePolice")}</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Crisis Communication */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Phone className="w-6 h-6 text-primary" />
          {ct("crisisCommunicationChecklist")}
        </h2>
        <div className="bg-muted/30 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              ct("driverSafetyConfirmed"),
              ct("emergencyServicesContacted"),
              ct("exactLocationShared"),
              ct("photoVideosCaptured"),
              ct("dispatcherNotifiedDetails"),
              ct("clientShipperInformed"),
              ct("insuranceNotifiedIfRequired"),
              ct("writtenIncidentReportStarted"),
              ct("alternativeTransportArranged"),
              ct("allDocumentationSecured")
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Clock className="w-6 h-6 text-primary" />
          {ct("emergencyResponseTimes")}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">{ct("situation")}</th>
                <th className="p-3 text-left border border-border">{ct("notifyWithin")}</th>
                <th className="p-3 text-left border border-border">{ct("whoToContact")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border">{ct("roadAccidentInjuries")}</td>
                <td className="p-3 border border-border text-destructive font-semibold">{ct("immediate")}</td>
                <td className="p-3 border border-border">{ct("emergencyDispatcherInsurance")}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border">{ct("vehicleBreakdownSituation")}</td>
                <td className="p-3 border border-border text-warning font-semibold">{ct("minutes15")}</td>
                <td className="p-3 border border-border">{ct("breakdownDispatcher")}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">{ct("cargoDamageDiscovered")}</td>
                <td className="p-3 border border-border text-warning font-semibold">{ct("minutes30")}</td>
                <td className="p-3 border border-border">{ct("dispatcherShipperConsignee")}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border">{ct("theftOrRobbery")}</td>
                <td className="p-3 border border-border text-destructive font-semibold">{ct("immediate")}</td>
                <td className="p-3 border border-border">{ct("policeDispatcherInsurance")}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">{ct("delayOver1Hour")}</td>
                <td className="p-3 border border-border text-info font-semibold">{ct("hour1")}</td>
                <td className="p-3 border border-border">{ct("dispatcherClient")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Quiz */}
      {quizzes.emergency && (
        <Quiz title={ct("quizTitle")} questions={quizzes.emergency} chapterId="emergency" />
      )}
    </div>
  );
}
