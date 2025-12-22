import { InfoCard } from "../InfoCard";
import { Lightbulb, AlertTriangle, CheckCircle, XCircle, Euro, Clock, Truck, MapPin } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function CaseStudiesChapter() {
  const { ct } = useChapterTranslation("case-studies");
  
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-600 to-amber-500 p-8 md:p-12 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <Lightbulb className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            {ct("title")}
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            {ct("subtitle")}
          </p>
        </div>
      </div>

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
                <li>• Route: Hamburg → Lyon (1,100 km)</li>
                <li>• Client offered: €950 "all-in"</li>
                <li>• Dispatcher accepted without toll calculation</li>
                <li>• Driver took fastest route via A1/A6</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Euro className="w-4 h-4 text-destructive" />
                {ct("reality")}
              </h3>
              <div className="bg-destructive/5 rounded-lg p-4 text-sm">
                <div className="space-y-1">
                  <p>Base cost (1,100 km × €1.10): <strong>€1,210</strong></p>
                  <p>German Maut (350 km × €0.45): <strong>€157</strong></p>
                  <p>French tolls (750 km): <strong>€180</strong></p>
                  <p className="border-t pt-2 mt-2 font-bold text-destructive">Total cost: €1,547</p>
                  <p className="font-bold text-destructive">LOSS: -€597</p>
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
              <p className="font-medium">Düsseldorf → Warsaw</p>
              <p className="text-sm text-muted-foreground">1,100 km | Rate: €1,450</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">{ct("backhaul")}</h4>
              <p className="font-medium">Łódź → Berlin</p>
              <p className="text-sm text-muted-foreground">480 km | Rate: €650</p>
            </div>
            <div className="bg-success/10 rounded-lg p-4">
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">{ct("result")}</h4>
              <p className="font-medium text-success">Total: €2,100</p>
              <p className="text-sm text-muted-foreground">vs €1,450 empty return</p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-lg p-4">
            <h3 className="font-semibold mb-3">{ct("timelineManagement")}</h3>
            <div className="flex flex-col md:flex-row gap-2 text-sm">
              <div className="flex-1 bg-card rounded p-2">
                <p className="text-xs text-muted-foreground">Day 1, 08:00</p>
                <p>Load Düsseldorf</p>
              </div>
              <div className="flex-1 bg-card rounded p-2">
                <p className="text-xs text-muted-foreground">Day 1, 23:00</p>
                <p>Arrive Warsaw area</p>
              </div>
              <div className="flex-1 bg-card rounded p-2">
                <p className="text-xs text-muted-foreground">Day 2, 08:00</p>
                <p>Deliver Warsaw</p>
              </div>
              <div className="flex-1 bg-card rounded p-2">
                <p className="text-xs text-muted-foreground">Day 2, 14:00</p>
                <p>Load Łódź (110 km)</p>
              </div>
              <div className="flex-1 bg-card rounded p-2">
                <p className="text-xs text-muted-foreground">Day 3, 06:00</p>
                <p>Deliver Berlin</p>
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
              <li>• FTL automotive parts, Munich → Gothenburg</li>
              <li>• Client: Premium customer, JIT delivery critical</li>
              <li>• Original delivery: Thursday 06:00</li>
              <li>• Wednesday 14:00: Driver reports engine failure near Hamburg</li>
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
                  <p className="text-muted-foreground">Engine warning light, truck stopping on A7 near Hamburg</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 text-sm text-muted-foreground">14:15</div>
                <div className="flex-1 bg-info/10 rounded-lg p-3 text-sm">
                  <p className="font-medium">{ct("dispatcherActions")}</p>
                  <ul className="text-muted-foreground">
                    <li>• Called breakdown service</li>
                    <li>• Checked fleet for backup truck</li>
                    <li>• Contacted spot market for emergency capacity</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 text-sm text-muted-foreground">14:30</div>
                <div className="flex-1 bg-warning/10 rounded-lg p-3 text-sm">
                  <p className="font-medium">{ct("clientNotification")}</p>
                  <p className="text-muted-foreground">"Delay possible due to technical issue. Working on solution. Update in 30 minutes."</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 text-sm text-muted-foreground">15:00</div>
                <div className="flex-1 bg-success/10 rounded-lg p-3 text-sm">
                  <p className="font-medium">{ct("solutionFound")}</p>
                  <p className="text-muted-foreground">Partner carrier 45 min away, can tranship and deliver by Friday 06:00</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 text-sm text-muted-foreground">15:15</div>
                <div className="flex-1 bg-success/10 rounded-lg p-3 text-sm">
                  <p className="font-medium">{ct("clientAgreement")}</p>
                  <p className="text-muted-foreground">Client accepts 24h delay with cost compensation offer (€200 credit)</p>
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
                <li>• 20 pallets of machinery parts</li>
                <li>• Value: €180,000</li>
                <li>• Route: Stuttgart → Prague</li>
                <li>• Carrier: New contact from TIMOCOM</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">{ct("whatHappened")}</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 5 pallets arrived damaged</li>
                <li>• Damage value: €45,000</li>
                <li>• CMR signed clean (no reservations)</li>
                <li>• No loading photos taken</li>
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
              "Load Monday 14:00 in Rotterdam, deliver Tuesday 08:00 in Milan. Single driver. Is it possible?"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold mb-3">{ct("distanceAnalysis")}</h4>
              <ul className="text-sm space-y-2">
                <li className="flex justify-between">
                  <span>Rotterdam → Milan</span>
                  <span className="font-mono">~1,100 km</span>
                </li>
                <li className="flex justify-between">
                  <span>At 80 km/h average</span>
                  <span className="font-mono">~13.75 hours</span>
                </li>
                <li className="flex justify-between text-destructive">
                  <span>Max daily driving</span>
                  <span className="font-mono">9-10 hours</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold mb-3">{ct("timeAvailable")}</h4>
              <ul className="text-sm space-y-2">
                <li className="flex justify-between">
                  <span>Load complete</span>
                  <span className="font-mono">~15:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Delivery deadline</span>
                  <span className="font-mono">08:00 +1</span>
                </li>
                <li className="flex justify-between">
                  <span>Total time</span>
                  <span className="font-mono">17 hours</span>
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
