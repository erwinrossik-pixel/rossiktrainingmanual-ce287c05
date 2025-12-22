import { InfoCard } from "../InfoCard";
import { Lightbulb, AlertTriangle, CheckCircle, XCircle, Euro, Clock, Truck, MapPin } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function CaseStudiesChapter() {
  const { ct } = useChapterTranslation("case-studies");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        chapterNumber={ct('chapterNumber')}
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Lightbulb}
        variant="casestudies"
      />

      {/* Case Study 1 */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-destructive/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <XCircle className="w-6 h-6 text-destructive" />
            {ct("case1Title")}
          </h2>
          <p className="text-sm text-muted-foreground">{ct("case1Subtitle")}</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                {ct("situation")}
              </h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• {ct("case1Route")}</li>
                <li>• {ct("case1ClientOffer")}</li>
                <li>• {ct("case1DispatcherError")}</li>
                <li>• {ct("case1DriverRoute")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Euro className="w-4 h-4 text-destructive" />
                {ct("reality")}
              </h3>
              <div className="bg-destructive/5 rounded-lg p-4 text-sm">
                <div className="space-y-1">
                  <p>{ct("case1BaseCost")} <strong>€1,210</strong></p>
                  <p>{ct("case1GermanMaut")} <strong>€157</strong></p>
                  <p>{ct("case1FrenchTolls")} <strong>€180</strong></p>
                  <p className="border-t pt-2 mt-2 font-bold text-destructive">{ct("case1TotalCost")} €1,547</p>
                  <p className="font-bold text-destructive">{ct("case1Loss")} -€597</p>
                </div>
              </div>
            </div>
          </div>
          <InfoCard title={ct("lessonsLearned")} icon={Lightbulb} variant="warning">
            <ul className="space-y-1">
              <li>• <strong>{ct("lesson1")}</strong></li>
              <li>• <strong>{ct("lesson2")}</strong></li>
              <li>• <strong>{ct("lesson3")}</strong></li>
              <li>• <strong>{ct("lesson4")}</strong></li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Case Study 2 */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-success/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-success" />
            {ct("case2Title")}
          </h2>
          <p className="text-sm text-muted-foreground">{ct("case2Subtitle")}</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">{ct("outbound")}</h4>
              <p className="font-medium">{ct("case2OutboundRoute")}</p>
              <p className="text-sm text-muted-foreground">{ct("case2OutboundDetails")}</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">{ct("backhaul")}</h4>
              <p className="font-medium">{ct("case2BackhaulRoute")}</p>
              <p className="text-sm text-muted-foreground">{ct("case2BackhaulDetails")}</p>
            </div>
            <div className="bg-success/10 rounded-lg p-4">
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">{ct("result")}</h4>
              <p className="font-medium text-success">{ct("case2Total")}</p>
              <p className="text-sm text-muted-foreground">{ct("case2Comparison")}</p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-lg p-4">
            <h3 className="font-semibold mb-3">{ct("timelineManagement")}</h3>
            <div className="flex flex-col md:flex-row gap-2 text-sm">
              <div className="flex-1 bg-card rounded p-2">
                <p className="text-xs text-muted-foreground">{ct("day1Morning")}</p>
                <p>{ct("day1MorningAction")}</p>
              </div>
              <div className="flex-1 bg-card rounded p-2">
                <p className="text-xs text-muted-foreground">{ct("day1Evening")}</p>
                <p>{ct("day1EveningAction")}</p>
              </div>
              <div className="flex-1 bg-card rounded p-2">
                <p className="text-xs text-muted-foreground">{ct("day2Morning")}</p>
                <p>{ct("day2MorningAction")}</p>
              </div>
              <div className="flex-1 bg-card rounded p-2">
                <p className="text-xs text-muted-foreground">{ct("day2Afternoon")}</p>
                <p>{ct("day2AfternoonAction")}</p>
              </div>
              <div className="flex-1 bg-card rounded p-2">
                <p className="text-xs text-muted-foreground">{ct("day3Morning")}</p>
                <p>{ct("day3MorningAction")}</p>
              </div>
            </div>
          </div>
          <InfoCard title={ct("keySuccessFactors")} icon={CheckCircle} variant="success">
            <ul className="space-y-1">
              <li>• <strong>{ct("success1")}</strong></li>
              <li>• <strong>{ct("success2")}</strong></li>
              <li>• <strong>{ct("success3")}</strong></li>
              <li>• <strong>{ct("success4")}</strong></li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Case Study 3 */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-warning/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-warning" />
            {ct("case3Title")}
          </h2>
          <p className="text-sm text-muted-foreground">{ct("case3Subtitle")}</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-muted/30 rounded-lg p-4">
            <h3 className="font-semibold mb-2">{ct("initialSituation")}</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• {ct("case3Route")}</li>
              <li>• {ct("case3Client")}</li>
              <li>• {ct("case3OriginalDelivery")}</li>
              <li>• {ct("case3BreakdownReport")}</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              {ct("crisisResponseTimeline")}
            </h3>
            
            <div className="space-y-2">
              <div className="flex gap-4">
                <div className="w-24 text-sm text-muted-foreground">14:00</div>
                <div className="flex-1 bg-warning/10 rounded-lg p-3 text-sm">
                  <p className="font-medium">{ct("driverCalls")}</p>
                  <p className="text-muted-foreground">{ct("case3EngineWarning")}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 text-sm text-muted-foreground">14:15</div>
                <div className="flex-1 bg-info/10 rounded-lg p-3 text-sm">
                  <p className="font-medium">{ct("dispatcherActions")}</p>
                  <ul className="text-muted-foreground">
                    <li>• {ct("case3BreakdownActions1")}</li>
                    <li>• {ct("case3BreakdownActions2")}</li>
                    <li>• {ct("case3BreakdownActions3")}</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 text-sm text-muted-foreground">14:30</div>
                <div className="flex-1 bg-warning/10 rounded-lg p-3 text-sm">
                  <p className="font-medium">{ct("clientNotification")}</p>
                  <p className="text-muted-foreground">{ct("case3ClientMessage")}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 text-sm text-muted-foreground">15:00</div>
                <div className="flex-1 bg-success/10 rounded-lg p-3 text-sm">
                  <p className="font-medium">{ct("solutionFound")}</p>
                  <p className="text-muted-foreground">{ct("case3SolutionDetails")}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 text-sm text-muted-foreground">15:15</div>
                <div className="flex-1 bg-success/10 rounded-lg p-3 text-sm">
                  <p className="font-medium">{ct("clientAgreement")}</p>
                  <p className="text-muted-foreground">{ct("case3AgreementDetails")}</p>
                </div>
              </div>
            </div>
          </div>

          <InfoCard title={ct("whatWentRight")} icon={CheckCircle} variant="success">
            <ul className="space-y-1">
              <li>• <strong>{ct("right1")}</strong></li>
              <li>• <strong>{ct("right2")}</strong></li>
              <li>• <strong>{ct("right3")}</strong></li>
              <li>• <strong>{ct("right4")}</strong></li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Case Study 4 */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-destructive/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <XCircle className="w-6 h-6 text-destructive" />
            {ct("case4Title")}
          </h2>
          <p className="text-sm text-muted-foreground">{ct("case4Subtitle")}</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">{ct("theShipment")}</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• {ct("case4Shipment1")}</li>
                <li>• {ct("case4Shipment2")}</li>
                <li>• {ct("case4Shipment3")}</li>
                <li>• {ct("case4Shipment4")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">{ct("whatHappened")}</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• {ct("case4Happened1")}</li>
                <li>• {ct("case4Happened2")}</li>
                <li>• {ct("case4Happened3")}</li>
                <li>• {ct("case4Happened4")}</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-destructive/5 border border-destructive/30 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-destructive">{ct("claimOutcome")}</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">{ct("actualDamage")}</p>
                <p className="font-bold text-destructive">€45,000</p>
              </div>
              <div>
                <p className="text-muted-foreground">{ct("cmrLimit")} (2,500kg × €10)</p>
                <p className="font-bold">€25,000</p>
              </div>
              <div>
                <p className="text-muted-foreground">{ct("carrierPaid")}</p>
                <p className="font-bold text-destructive">€0</p>
              </div>
            </div>
          </div>

          <InfoCard title={ct("whyClaimDenied")} icon={XCircle} variant="warning">
            <ul className="space-y-1">
              <li>• <strong>{ct("denied1")}</strong></li>
              <li>• <strong>{ct("denied2")}</strong></li>
              <li>• <strong>{ct("denied3")}</strong></li>
              <li>• <strong>{ct("denied4")}</strong></li>
            </ul>
          </InfoCard>

          <InfoCard title={ct("correctProcedure")} icon={CheckCircle} variant="success">
            <ul className="space-y-1">
              <li>• <strong>{ct("correct1")}</strong></li>
              <li>• <strong>{ct("correct2")}</strong></li>
              <li>• <strong>{ct("correct3")}</strong></li>
              <li>• <strong>{ct("correct4")}</strong></li>
              <li>• <strong>{ct("correct5")}</strong></li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Case Study 5 */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-info/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Truck className="w-6 h-6 text-info" />
            {ct("case5Title")}
          </h2>
          <p className="text-sm text-muted-foreground">{ct("case5Subtitle")}</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-muted/30 rounded-lg p-4">
            <h3 className="font-semibold mb-2">{ct("clientRequest")}</h3>
            <p className="text-sm text-muted-foreground">
              {ct("case5ClientMessage")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold mb-3">{ct("distanceAnalysis")}</h4>
              <ul className="text-sm space-y-2">
                <li className="flex justify-between">
                  <span>{ct("case5RouteDistance")}</span>
                  <span className="font-mono">{ct("case5Distance")}</span>
                </li>
                <li className="flex justify-between">
                  <span>{ct("case5AverageSpeed")}</span>
                  <span className="font-mono">{ct("case5DrivingTime")}</span>
                </li>
                <li className="flex justify-between text-destructive">
                  <span>{ct("case5MaxDriving")}</span>
                  <span className="font-mono">{ct("case5MaxDrivingValue")}</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold mb-3">{ct("timeAvailable")}</h4>
              <ul className="text-sm space-y-2">
                <li className="flex justify-between">
                  <span>{ct("case5LoadComplete")}</span>
                  <span className="font-mono">{ct("case5LoadCompleteTime")}</span>
                </li>
                <li className="flex justify-between">
                  <span>{ct("case5DeliveryDeadline")}</span>
                  <span className="font-mono">{ct("case5DeliveryDeadlineTime")}</span>
                </li>
                <li className="flex justify-between">
                  <span>{ct("case5TotalTime")}</span>
                  <span className="font-mono">{ct("case5TotalTimeValue")}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-destructive">{ct("answerImpossible")}</h4>
            <p className="text-sm text-muted-foreground">
              {ct("impossibleExplanation")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
