import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Map, Building2, Truck, Euro, Clock, AlertTriangle, CheckCircle2, Route, Factory, Ship, Calendar } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function EuropeZonesChapter() {
  const { ct } = useChapterTranslation("europe-zones");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">{ct("title")}</h1>
        <p className="text-lg text-muted-foreground">
          {ct("subtitle")}
        </p>
      </div>

      {/* Overview Map */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Map className="w-6 h-6 text-primary" />
          {ct("marketOverviewTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("marketOverviewDesc")}
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">€300B+</p>
            <p className="text-sm text-muted-foreground">{ct("annualMarketValue")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">500,000+</p>
            <p className="text-sm text-muted-foreground">{ct("transportCompanies")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">3 million+</p>
            <p className="text-sm text-muted-foreground">{ct("commercialVehicles")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">75%</p>
            <p className="text-sm text-muted-foreground">{ct("freightByRoad")}</p>
          </div>
        </div>
      </div>

      {/* DACH Region */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-2xl">🇩🇪🇦🇹🇨🇭</span>
          DACH Region (Germany, Austria, Switzerland)
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <InfoCard title="Germany 🇩🇪" icon={Factory}>
            <ul className="text-sm space-y-1">
              <li>• Europe's largest economy</li>
              <li>• Strong automotive, machinery</li>
              <li>• Strict delivery windows</li>
              <li>• Sunday driving ban (00:00-22:00)</li>
              <li>• LKW-Maut: €0.348/km</li>
            </ul>
          </InfoCard>
          <InfoCard title="Austria 🇦🇹" icon={Route}>
            <ul className="text-sm space-y-1">
              <li>• Transit country (N-S corridor)</li>
              <li>• Alpine crossing challenges</li>
              <li>• Brenner Pass restrictions</li>
              <li>• Sunday ban + holiday bans</li>
              <li>• GO-Maut: €0.532/km</li>
            </ul>
          </InfoCard>
          <InfoCard title="Switzerland 🇨🇭" icon={Building2}>
            <ul className="text-sm space-y-1">
              <li>• Non-EU (customs required)</li>
              <li>• Highest toll rates in Europe</li>
              <li>• Night driving ban (22:00-05:00)</li>
              <li>• 40t limit (vs 44t in EU)</li>
              <li>• LSVA: €0.55/km</li>
            </ul>
          </InfoCard>
        </div>

        <DataTable
          headers={["Characteristic", "Germany", "Austria", "Switzerland"]}
          rows={[
            ["Economic Strength", "Very high", "High", "Very high"],
            ["Infrastructure Quality", "Excellent", "Excellent", "Excellent"],
            ["Average Rates (€/km)", "1.20-1.40", "1.25-1.50", "1.50-1.80"],
            ["Market Competition", "High", "Medium", "Medium"],
            ["Sunday Driving", "Banned 00:00-22:00", "Banned", "Banned"],
            ["Customs Required", "No (EU)", "No (EU)", "Yes (Non-EU)"],
            ["Max Vehicle Weight", "44t with conditions", "44t with conditions", "40t standard"],
          ]}
        />

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg mt-4">
          <h4 className="font-semibold flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4" />
            DACH Operational Tips
          </h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>Germany:</strong> Respect time windows strictly - Germans are punctual</li>
            <li>• <strong>Austria:</strong> Plan Brenner crossings carefully - night and holiday restrictions</li>
            <li>• <strong>Switzerland:</strong> Always include customs clearance time and LSVA costs in quotes</li>
          </ul>
        </div>
      </div>

      {/* BENELUX */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-2xl">🇧🇪🇳🇱🇱🇺</span>
          BENELUX (Belgium, Netherlands, Luxembourg)
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <InfoCard title="Belgium 🇧🇪" icon={Route}>
            <ul className="text-sm space-y-1">
              <li>• Major EU crossroads</li>
              <li>• Port of Antwerp (2nd largest EU)</li>
              <li>• Heavy congestion around Antwerp</li>
              <li>• Viapass toll: €0.171/km</li>
              <li>• Distribution hub for EU</li>
            </ul>
          </InfoCard>
          <InfoCard title="Netherlands 🇳🇱" icon={Ship}>
            <ul className="text-sm space-y-1">
              <li>• Port of Rotterdam (largest EU)</li>
              <li>• Excellent infrastructure</li>
              <li>• New toll from July 2026</li>
              <li>• Vrachtwagen: €0.159/km</li>
              <li>• Tight delivery windows</li>
            </ul>
          </InfoCard>
          <InfoCard title="Luxembourg 🇱🇺" icon={Euro}>
            <ul className="text-sm space-y-1">
              <li>• Financial center</li>
              <li>• Lower fuel prices</li>
              <li>• No truck tolls currently</li>
              <li>• Transit country</li>
              <li>• Many EU logistics HQs</li>
            </ul>
          </InfoCard>
        </div>

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">BENELUX Characteristics</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-primary mb-1">Strengths</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Excellent multimodal connections</li>
                <li>• Major distribution center concentration</li>
                <li>• Professional logistics culture</li>
                <li>• Good English communication</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-primary mb-1">Challenges</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Heavy traffic congestion</li>
                <li>• Strict appointment times</li>
                <li>• High warehouse demand</li>
                <li>• Premium rates for last-mile</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* France */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-2xl">🇫🇷</span>
          France
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">Market Characteristics</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>Second largest European market</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>Strong automotive, aerospace, luxury goods sectors</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>Extensive motorway network (autoroutes)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>Major ports: Le Havre, Marseille</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>Expensive tolls: €0.28-0.33/km</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Operational Considerations</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <span>Strict adherence to delivery appointments</span>
              </li>
              <li className="flex items-start gap-2">
                <Euro className="w-4 h-4 text-primary mt-0.5" />
                <span>Different toll rates by operator (ASF, Sanef, APRR)</span>
              </li>
              <li className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-primary mt-0.5" />
                <span>August slowdown (summer holidays)</span>
              </li>
              <li className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-primary mt-0.5" />
                <span>44t allowed on N-S corridor</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>Frequent strikes can disrupt operations</span>
              </li>
            </ul>
          </div>
        </div>

        <DataTable
          headers={["Route", "Distance", "Toll Cost (Truck)", "Transit Time"]}
          rows={[
            ["Paris → Lyon", "~460 km", "~€140", "5-6 hours"],
            ["Paris → Marseille", "~780 km", "~€230", "8-9 hours"],
            ["Calais → Paris", "~290 km", "~€60", "3-4 hours"],
            ["Lyon → Bordeaux", "~550 km", "~€170", "6-7 hours"],
            ["Lille → Toulouse", "~850 km", "~€270", "9-10 hours"],
          ]}
        />
      </div>

      {/* Italy */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-2xl">🇮🇹</span>
          Italy
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">Market Overview</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>Third largest EU economy</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>Strong manufacturing (North), agriculture (South)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>Fashion, automotive, food industries</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>Significant North-South economic divide</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>City center restrictions (ZTL zones)</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Key Information</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Euro className="w-4 h-4 text-primary mt-0.5" />
                <span>Tolls: ~€0.30/km (private autostrads)</span>
              </li>
              <li className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-primary mt-0.5" />
                <span>Telepass system for toll payment</span>
              </li>
              <li className="flex items-start gap-2">
                <Route className="w-4 h-4 text-primary mt-0.5" />
                <span>Alpine crossings: Brenner (cheapest), Mont Blanc, Fréjus</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <span>August shutdown - many factories closed</span>
              </li>
              <li className="flex items-start gap-2">
                <Ship className="w-4 h-4 text-primary mt-0.5" />
                <span>Key ports: Genoa, Trieste, Livorno</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Italian Market Tips</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>ZTL Zones:</strong> Major cities have restricted traffic zones - verify delivery addresses</li>
            <li>• <strong>Payment culture:</strong> Longer payment terms common (60-90 days) - careful with credit</li>
            <li>• <strong>August:</strong> Plan around "Ferragosto" week - country largely shut down</li>
            <li>• <strong>Backloads:</strong> Strong northbound flow - southbound capacity often available</li>
          </ul>
        </div>
      </div>

      {/* Spain & Portugal */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-2xl">🇪🇸🇵🇹</span>
          Iberian Peninsula (Spain & Portugal)
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">Spain 🇪🇸</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>Fourth largest EU economy</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>Strong automotive, agriculture, retail</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>Many free autoroutes (no toll)</span>
              </li>
              <li className="flex items-start gap-2">
                <Euro className="w-4 h-4 text-primary mt-0.5" />
                <span>Where tolled: €0.28-0.31/km</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <span>Siesta hours (14:00-17:00) - some closures</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Portugal 🇵🇹</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>Growing logistics hub</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>Port of Sines - Atlantic gateway</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>Often combined with Spanish routes</span>
              </li>
              <li className="flex items-start gap-2">
                <Euro className="w-4 h-4 text-primary mt-0.5" />
                <span>Electronic toll system (Via Verde)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>Long transit times from Central EU</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
          <p className="text-sm">
            <strong>Iberian Tip:</strong> Spain offers many toll-free routes. Compare tolled AP routes vs free A/N routes - the time savings don't always justify toll costs.
          </p>
        </div>
      </div>

      {/* CEE */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-2xl">🇵🇱🇨🇿🇭🇺🇷🇴</span>
          Central & Eastern Europe (CEE)
        </h2>

        <p className="text-muted-foreground mb-4">
          CEE represents the fastest-growing transport market in Europe, with competitive rates and expanding infrastructure.
        </p>

        <DataTable
          headers={["Country", "Toll System", "Rate/km", "Key Industries"]}
          rows={[
            ["🇵🇱 Poland", "e-TOLL", "€0.092", "Automotive, electronics, distribution"],
            ["🇨🇿 Czech Republic", "MYTO CZ", "€0.26", "Automotive, machinery, glass"],
            ["🇭🇺 Hungary", "HU-GO", "€0.425", "Automotive, pharma, electronics"],
            ["🇷🇴 Romania", "RO-vignette", "€0.05", "Automotive, textiles, agriculture"],
            ["🇸🇰 Slovakia", "e-myto", "€0.18", "Automotive, electronics"],
            ["🇧🇬 Bulgaria", "Toll.bg", "€0.04", "Agriculture, textiles, outsourcing"],
            ["🇭🇷 Croatia", "HAC", "€0.15", "Tourism, food, transit"],
            ["🇸🇮 Slovenia", "DarsGo", "€0.24", "Transit hub, manufacturing"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">CEE Advantages</h4>
            <ul className="text-sm space-y-1">
              <li>• Lower toll rates (especially Poland)</li>
              <li>• Competitive carrier rates</li>
              <li>• Growing manufacturing base</li>
              <li>• High carrier availability</li>
              <li>• Good East-West connectivity</li>
            </ul>
          </div>
          <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
            <h4 className="font-semibold text-warning mb-2">CEE Challenges</h4>
            <ul className="text-sm space-y-1">
              <li>• Variable road quality</li>
              <li>• Border delays (non-Schengen)</li>
              <li>• Language barriers</li>
              <li>• Different business cultures</li>
              <li>• Some payment reliability issues</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scandinavia */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-2xl">🇸🇪🇳🇴🇩🇰🇫🇮</span>
          Scandinavia & Nordics
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">Market Characteristics</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>High GDP, high wages, premium rates</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>Strong environmental focus</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>Excellent infrastructure</span>
              </li>
              <li className="flex items-start gap-2">
                <Ship className="w-4 h-4 text-primary mt-0.5" />
                <span>Ferry connections essential</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>Long distances, sparse population</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Access Routes</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Route className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Denmark:</strong> Øresund Bridge to Sweden</span>
              </li>
              <li className="flex items-start gap-2">
                <Ship className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Germany-Sweden:</strong> Rostock-Trelleborg ferry</span>
              </li>
              <li className="flex items-start gap-2">
                <Ship className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Germany-Norway:</strong> Kiel-Oslo ferry</span>
              </li>
              <li className="flex items-start gap-2">
                <Ship className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Finland:</strong> Tallinn/Stockholm ferries</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>Norway: Non-EU - customs required</span>
              </li>
            </ul>
          </div>
        </div>

        <DataTable
          headers={["Ferry Route", "Duration", "Frequency", "Truck Rate"]}
          rows={[
            ["Rostock → Trelleborg", "6 hours", "4-5/day", "€200-350"],
            ["Kiel → Gothenburg", "14 hours", "1/day", "€400-600"],
            ["Travemünde → Helsinki", "29 hours", "Every 2 days", "€500-800"],
            ["Frederikshavn → Oslo", "9 hours", "1/day", "€300-450"],
            ["Puttgarden → Rødby", "45 min", "Every 30 min", "€60-90"],
          ]}
        />
      </div>

      {/* UK & Ireland */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-2xl">🇬🇧🇮🇪</span>
          United Kingdom & Ireland
        </h2>

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg mb-6">
          <h4 className="font-semibold flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4" />
            Post-Brexit Requirements
          </h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>GVMS:</strong> Pre-declaration required for all freight</li>
            <li>• <strong>GMR:</strong> Goods Movement Reference number mandatory</li>
            <li>• <strong>Customs declarations:</strong> Full export/import declarations required</li>
            <li>• <strong>Rules of origin:</strong> Documentation for tariff preferences</li>
            <li>• <strong>Sanitary checks:</strong> Potential delays for food/animal products</li>
          </ul>
        </div>

        <DataTable
          headers={["Route", "Options", "Transit Time", "Cost"]}
          rows={[
            ["Dover ↔ Calais", "Ferry (1.5h), Eurotunnel (35min)", "3-4h port-to-port", "€180-280"],
            ["Harwich ↔ Hook of Holland", "Ferry (7h overnight)", "8-10h", "€250-400"],
            ["Liverpool ↔ Dublin", "Ferry (8h)", "10-12h", "€200-350"],
            ["Holyhead ↔ Dublin", "Ferry (3h)", "5-6h", "€180-300"],
            ["Fishguard ↔ Rosslare", "Ferry (3.5h)", "6-7h", "€180-300"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">UK Market</h4>
            <ul className="text-sm space-y-1">
              <li>• Large, developed market</li>
              <li>• Left-hand driving (RHD trucks)</li>
              <li>• Strong retail, pharma, automotive</li>
              <li>• Congestion charges (London)</li>
              <li>• Complex customs post-Brexit</li>
            </ul>
          </div>
          <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Ireland Market</h4>
            <ul className="text-sm space-y-1">
              <li>• EU member (no customs with EU)</li>
              <li>• Strong pharma, tech industries</li>
              <li>• Growing e-commerce hub</li>
              <li>• Access via UK (Brexit complexity)</li>
              <li>• Direct ferry routes from France</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["europe-zones"] && (
        <Quiz
          title={ct("quizTitle")}
          questions={quizzes["europe-zones"]}
          chapterId="europe-zones"
          questionsPerRound={5}
        />
      )}
    </div>
  );
}
