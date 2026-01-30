import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { FlowDiagram, DecisionDiagram, ProcessMap } from "../FlowDiagram";
import { AlertTriangle, Phone, FileText, Shield, Truck, MapPin, Clock, CheckCircle, Eye, XCircle, Timer, HelpCircle } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import emergencyResponseImg from "@/assets/chapters/emergency-response.jpg";

// Interactive "What's Missing?" Scenario Component
function WhatsMissingScenario({ 
  title, 
  scenario, 
  items, 
  missingItems, 
  timeLimit = 30 
}: { 
  title: string;
  scenario: string;
  items: { id: string; label: string; isMissing: boolean }[];
  missingItems: string[];
  timeLimit?: number;
}) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isActive, setIsActive] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      handleSubmit();
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleStart = () => {
    setIsActive(true);
    setShowResult(false);
    setSelectedItems([]);
    setTimeLeft(timeLimit);
  };

  const handleSelect = (id: string) => {
    if (!isActive || showResult) return;
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    setIsActive(false);
    setShowResult(true);
    const correct = selectedItems.filter(s => missingItems.includes(s)).length;
    const incorrect = selectedItems.filter(s => !missingItems.includes(s)).length;
    setScore(Math.max(0, correct - incorrect));
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Eye className="w-5 h-5 text-warning" />
          {title}
        </h3>
        {isActive && (
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${timeLeft <= 10 ? 'bg-destructive/20 text-destructive' : 'bg-warning/20 text-warning'}`}>
            <Timer className="w-4 h-4" />
            <span className="font-mono font-bold">{timeLeft}s</span>
          </div>
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-4">{scenario}</p>

      {!isActive && !showResult ? (
        <Button onClick={handleStart} className="w-full">
          <Timer className="w-4 h-4 mr-2" />
          Start Challenge ({timeLimit}s)
        </Button>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
            {items.map(item => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                disabled={showResult}
                className={`p-3 text-sm rounded-lg border transition-all text-left ${
                  showResult
                    ? item.isMissing
                      ? selectedItems.includes(item.id)
                        ? 'bg-success/20 border-success text-success'
                        : 'bg-destructive/20 border-destructive text-destructive'
                      : selectedItems.includes(item.id)
                        ? 'bg-destructive/20 border-destructive text-destructive'
                        : 'bg-muted border-border'
                    : selectedItems.includes(item.id)
                      ? 'bg-primary/20 border-primary'
                      : 'bg-muted/50 border-border hover:border-primary/50'
                }`}
              >
                {showResult && (
                  <span className="mr-2">
                    {item.isMissing ? (selectedItems.includes(item.id) ? '✓' : '✗') : (selectedItems.includes(item.id) ? '✗' : '')}
                  </span>
                )}
                {item.label}
              </button>
            ))}
          </div>

          {isActive && (
            <Button onClick={handleSubmit} variant="outline" className="w-full">
              Submit Answer
            </Button>
          )}

          {showResult && (
            <div className={`p-4 rounded-lg ${score === missingItems.length ? 'bg-success/20 border border-success/30' : 'bg-warning/20 border border-warning/30'}`}>
              <p className="font-semibold mb-2">
                {score === missingItems.length ? '🎉 Perfect!' : `Score: ${score}/${missingItems.length}`}
              </p>
              <p className="text-sm text-muted-foreground">
                Missing items: {missingItems.map(id => items.find(i => i.id === id)?.label).join(', ')}
              </p>
              <Button onClick={handleStart} variant="outline" size="sm" className="mt-3">
                Try Again
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export function EmergencyChapter() {
  const { ct } = useChapterTranslation("emergency");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
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

      {/* Emergency Response Image - contextual before process map */}
      <ChapterImage
        src={emergencyResponseImg}
        alt="Emergency response team managing transport incident"
        variant="float-right"
        className="mb-4"
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

      {/* Interactive Vigilance Scenarios */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Eye className="w-6 h-6 text-warning" />
          {ct("vigilanceScenariosTitle") || "Vigilance Scenarios"}
        </h2>
        <p className="text-muted-foreground mb-6">
          {ct("vigilanceScenariosDesc") || "Test your situational awareness with timed challenges. Identify what's missing or wrong in each emergency scenario."}
        </p>
        
        <div className="space-y-6">
          <WhatsMissingScenario
            title={ct("scenario1Title") || "Highway Breakdown Scene"}
            scenario={ct("scenario1Desc") || "A truck has stopped on the emergency lane. The driver is standing by the vehicle. Hazard lights are on. What safety elements are MISSING from this scene?"}
            items={[
              { id: "triangle", label: ct("triangleLabel") || "Warning Triangle (100-200m)", isMissing: true },
              { id: "vest", label: ct("vestLabel") || "High-Visibility Vest", isMissing: true },
              { id: "hazards", label: ct("hazardsLabel") || "Hazard Lights", isMissing: false },
              { id: "barrier", label: ct("barrierLabel") || "Behind Safety Barrier", isMissing: true },
              { id: "phone", label: ct("phoneLabel") || "Phone in Hand", isMissing: false },
              { id: "hood", label: ct("hoodLabel") || "Hood Open", isMissing: false },
            ]}
            missingItems={["triangle", "vest", "barrier"]}
            timeLimit={25}
          />

          <WhatsMissingScenario
            title={ct("scenario2Title") || "Cargo Damage Documentation"}
            scenario={ct("scenario2Desc") || "A consignment arrived with visible damage. The driver signed the CMR cleanly. What CRITICAL steps were missed?"}
            items={[
              { id: "photos", label: ct("photosLabel") || "Timestamped Photos", isMissing: true },
              { id: "reservation", label: ct("reservationLabel") || "CMR Reservation Note", isMissing: true },
              { id: "signed", label: ct("signedLabel") || "CMR Signed", isMissing: false },
              { id: "dispatcher", label: ct("dispatcherNotifiedLabel") || "Dispatcher Notified", isMissing: true },
              { id: "unloaded", label: ct("unloadedLabel") || "Cargo Unloaded", isMissing: false },
              { id: "witness", label: ct("witnessLabel") || "Witness Statement", isMissing: true },
            ]}
            missingItems={["photos", "reservation", "dispatcher", "witness"]}
            timeLimit={30}
          />

          <WhatsMissingScenario
            title={ct("scenario3Title") || "Theft Prevention Check"}
            scenario={ct("scenario3Desc") || "Driver parks at an unsecured rest area for the night with high-value cargo. Which security measures are MISSING?"}
            items={[
              { id: "secure_parking", label: ct("secureParking") || "Secure Parking Area", isMissing: true },
              { id: "door_locks", label: ct("doorLocks") || "Extra Door Locks", isMissing: true },
              { id: "fuel", label: ct("fuelCheck") || "Fuel Level Checked", isMissing: false },
              { id: "tracking", label: ct("trackingActive") || "GPS Tracking Active", isMissing: true },
              { id: "curtains", label: ct("curtainsClosed") || "Curtains Closed", isMissing: false },
              { id: "dispatcher_night", label: ct("dispatcherNight") || "Dispatcher Notified of Location", isMissing: true },
            ]}
            missingItems={["secure_parking", "door_locks", "tracking", "dispatcher_night"]}
            timeLimit={25}
          />
        </div>
      </section>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="emergency" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="emergency" />
    </div>
  );
}
