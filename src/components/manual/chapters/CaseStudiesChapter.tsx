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
            Case Study 1: The "Cheap" French Lane
          </h2>
          <p className="text-sm text-muted-foreground">What went wrong and how to avoid it</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                The Situation
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
                The Reality
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
          <InfoCard title="Lessons Learned" icon={Lightbulb} variant="warning">
            <ul className="space-y-1">
              <li>• <strong>Always calculate tolls</strong> before quoting, especially France and Italy</li>
              <li>• <strong>Use toll calculators</strong> - ViaMichelin, Google Maps toll option</li>
              <li>• <strong>"All-in" doesn't mean profitable</strong> - verify actual costs first</li>
              <li>• <strong>France A-roads are expensive</strong> - consider N-roads if time permits</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Case Study 2 */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-success/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-success" />
            Case Study 2: Perfect Backhaul Planning
          </h2>
          <p className="text-sm text-muted-foreground">How to maximize profitability</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">OUTBOUND</h4>
              <p className="font-medium">Düsseldorf → Warsaw</p>
              <p className="text-sm text-muted-foreground">1,100 km | Rate: €1,450</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">BACKHAUL</h4>
              <p className="font-medium">Łódź → Berlin</p>
              <p className="text-sm text-muted-foreground">480 km | Rate: €650</p>
            </div>
            <div className="bg-success/10 rounded-lg p-4">
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">RESULT</h4>
              <p className="font-medium text-success">Total: €2,100</p>
              <p className="text-sm text-muted-foreground">vs €1,450 empty return</p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-lg p-4">
            <h3 className="font-semibold mb-3">Timeline Management</h3>
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
          <InfoCard title="Key Success Factors" icon={CheckCircle} variant="success">
            <ul className="space-y-1">
              <li>• <strong>Planned backhaul before outbound</strong> - secured load while negotiating first trip</li>
              <li>• <strong>Flexible delivery window</strong> - used "by end of day" instead of fixed slot</li>
              <li>• <strong>Geographic knowledge</strong> - knew Łódź is on the return route</li>
              <li>• <strong>Used Trans.eu</strong> - strong CEE network for PL backhauls</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Case Study 3 */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-warning/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-warning" />
            Case Study 3: The Breakdown Crisis
          </h2>
          <p className="text-sm text-muted-foreground">Crisis management in real-time</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-muted/30 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Initial Situation</h3>
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
              Crisis Response Timeline
            </h3>
            
            <div className="space-y-2">
              <div className="flex gap-4">
                <div className="w-24 text-sm text-muted-foreground">14:00</div>
                <div className="flex-1 bg-warning/10 rounded-lg p-3 text-sm">
                  <p className="font-medium">Driver calls dispatcher</p>
                  <p className="text-muted-foreground">Engine warning light, truck stopping on A7 near Hamburg</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 text-sm text-muted-foreground">14:15</div>
                <div className="flex-1 bg-info/10 rounded-lg p-3 text-sm">
                  <p className="font-medium">Dispatcher actions</p>
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
                  <p className="font-medium">Client notification</p>
                  <p className="text-muted-foreground">"Delay possible due to technical issue. Working on solution. Update in 30 minutes."</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 text-sm text-muted-foreground">15:00</div>
                <div className="flex-1 bg-success/10 rounded-lg p-3 text-sm">
                  <p className="font-medium">Solution found</p>
                  <p className="text-muted-foreground">Partner carrier 45 min away, can tranship and deliver by Friday 06:00</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 text-sm text-muted-foreground">15:15</div>
                <div className="flex-1 bg-success/10 rounded-lg p-3 text-sm">
                  <p className="font-medium">Client agreement</p>
                  <p className="text-muted-foreground">Client accepts 24h delay with cost compensation offer (€200 credit)</p>
                </div>
              </div>
            </div>
          </div>

          <InfoCard title="What Went Right" icon={CheckCircle} variant="success">
            <ul className="space-y-1">
              <li>• <strong>Immediate communication</strong> - client informed within 30 minutes</li>
              <li>• <strong>Parallel problem-solving</strong> - explored multiple options simultaneously</li>
              <li>• <strong>Proactive compensation</strong> - offered credit before client complained</li>
              <li>• <strong>Documentation</strong> - all calls logged, photos of breakdown taken</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Case Study 4 */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-destructive/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <XCircle className="w-6 h-6 text-destructive" />
            Case Study 4: The Claim Disaster
          </h2>
          <p className="text-sm text-muted-foreground">Why documentation matters</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">The Shipment</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 20 pallets of machinery parts</li>
                <li>• Value: €180,000</li>
                <li>• Route: Stuttgart → Prague</li>
                <li>• Carrier: New contact from TIMOCOM</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What Happened</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 5 pallets arrived damaged</li>
                <li>• Damage value: €45,000</li>
                <li>• CMR signed clean (no reservations)</li>
                <li>• No loading photos taken</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-destructive/5 border border-destructive/30 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-destructive">Claim Outcome</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Actual damage</p>
                <p className="font-bold text-destructive">€45,000</p>
              </div>
              <div>
                <p className="text-muted-foreground">CMR limit (2,500kg × €10)</p>
                <p className="font-bold">€25,000</p>
              </div>
              <div>
                <p className="text-muted-foreground">Carrier paid</p>
                <p className="font-bold text-destructive">€0 - denied claim</p>
              </div>
            </div>
          </div>

          <InfoCard title="Why Claim Was Denied" icon={XCircle} variant="warning">
            <ul className="space-y-1">
              <li>• <strong>Clean CMR at delivery</strong> - receiver signed without reservations</li>
              <li>• <strong>No loading photos</strong> - couldn't prove goods were undamaged at origin</li>
              <li>• <strong>Carrier argued</strong> "damage was pre-existing" - no evidence to counter</li>
              <li>• <strong>Claim filed late</strong> - written notice sent after 7-day deadline</li>
            </ul>
          </InfoCard>

          <InfoCard title="Correct Procedure Would Have Been" icon={CheckCircle} variant="success">
            <ul className="space-y-1">
              <li>• <strong>At loading:</strong> Photos of all goods before and after loading</li>
              <li>• <strong>At delivery:</strong> Receiver notes reservations: "5 pallets damaged"</li>
              <li>• <strong>Immediately:</strong> Written notification to carrier same day</li>
              <li>• <strong>Within 7 days:</strong> Formal claim letter with full documentation</li>
              <li>• <strong>Cargo insurance:</strong> Should have been recommended for €180k value</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Case Study 5 */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-info/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Truck className="w-6 h-6 text-info" />
            Case Study 5: Driving Time Calculation
          </h2>
          <p className="text-sm text-muted-foreground">Realistic journey planning</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-muted/30 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Client Request</h3>
            <p className="text-sm text-muted-foreground">
              "Load Monday 14:00 in Rotterdam, deliver Tuesday 08:00 in Milan. Single driver. Is it possible?"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold mb-3">Distance Analysis</h4>
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
              <h4 className="font-semibold mb-3">Time Available</h4>
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
            <h4 className="font-semibold mb-2 text-destructive">Answer: NO - Impossible with single driver</h4>
            <p className="text-sm text-muted-foreground">
              Need 13.75h driving + 45min break + loading time = ~15+ hours total driving period.
              Max shift is 13-15h including breaks. This requires 2 drivers or extended delivery window.
            </p>
          </div>

          <InfoCard title="Correct Response to Client" icon={CheckCircle} variant="success">
            <p className="mb-2">Offer realistic alternatives:</p>
            <ul className="space-y-1 text-sm">
              <li><strong>Option A:</strong> Load Monday 06:00 → Deliver Tuesday 06:00 (24h window)</li>
              <li><strong>Option B:</strong> Double-manned crew → Tuesday 08:00 delivery possible</li>
              <li><strong>Option C:</strong> Load Monday PM → Deliver Tuesday 14:00 (single driver)</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Key Takeaways */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-primary" />
          Key Takeaways from Case Studies
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="font-semibold mb-3 text-success">Success Factors</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>Always calculate full costs before quoting</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>Plan backhauls before confirming outbound</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>Communicate early and proactively</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>Document everything with photos and timestamps</span>
              </li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="font-semibold mb-3 text-destructive">Common Mistakes</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                <span>Accepting rates without toll calculation</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                <span>Promising impossible delivery times</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                <span>Signing clean CMR when damage exists</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                <span>Missing claim notification deadlines</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
