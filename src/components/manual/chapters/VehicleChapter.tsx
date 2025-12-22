import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { FlowDiagram, ProcessMap } from "../FlowDiagram";
import { quizzes } from "@/data/quizData";
import { Truck, Ruler, Weight, Package, Shield, CheckCircle2, AlertTriangle, Settings, Globe, Gauge } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function VehicleChapter() {
  const { ct } = useChapterTranslation('vehicle');
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        chapterNumber={ct('chapterNumber')}
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Truck}
        variant="vehicle"
      />

      {/* Visual Specs */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sidebar to-sidebar/80 p-8 text-sidebar-foreground">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <Ruler className="w-10 h-10 mx-auto mb-3 text-sidebar-primary" />
            <p className="text-3xl font-bold">13.6m</p>
            <p className="text-sm text-sidebar-foreground/70">{ct('length')}</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl text-sidebar-primary">W</span>
            </div>
            <p className="text-3xl font-bold">2.48m</p>
            <p className="text-sm text-sidebar-foreground/70">{ct('width')}</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl text-sidebar-primary">H</span>
            </div>
            <p className="text-3xl font-bold">2.9–3.2m</p>
            <p className="text-sm text-sidebar-foreground/70">{ct('height')}</p>
          </div>
          <div className="text-center">
            <Package className="w-10 h-10 mx-auto mb-3 text-sidebar-primary" />
            <p className="text-3xl font-bold">~33</p>
            <p className="text-sm text-sidebar-foreground/70">{ct('eurPallets')}</p>
          </div>
        </div>
        <Truck className="absolute -bottom-4 -right-4 w-40 h-40 text-sidebar-foreground/5" />
      </div>

      {/* Key Specs */}
      <div className="grid md:grid-cols-2 gap-6">
        <InfoCard title={ct('payloadCapacity')} icon={Weight}>
          <p className="text-2xl font-bold text-primary">24–29 {ct('tonnes')}</p>
          <p className="text-sm">{ct('payloadDesc')}</p>
        </InfoCard>
        
        <InfoCard title={ct('volumeCapacity')} icon={Package}>
          <p className="text-2xl font-bold text-primary">~99–105 m³</p>
          <p className="text-sm">{ct('volumeDesc')}</p>
        </InfoCard>
      </div>

      {/* Vehicle Types */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Truck className="w-6 h-6 text-primary" />
          {ct('europeanVehicleTypes')}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">{ct('type')}</th>
                <th className="p-3 text-left border border-border">{ct('dimensions')}</th>
                <th className="p-3 text-left border border-border">{ct('capacity')}</th>
                <th className="p-3 text-left border border-border">{ct('bestFor')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border font-semibold">{ct('standardCurtainsider')}</td>
                <td className="p-3 border border-border text-sm">13.6m × 2.48m × 2.7m</td>
                <td className="p-3 border border-border text-sm">33 {ct('pallets')}, 24-25t</td>
                <td className="p-3 border border-border text-sm">{ct('generalCargoSide')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">{ct('megaTrailer')}</td>
                <td className="p-3 border border-border text-sm">13.6m × 2.48m × 3.0m</td>
                <td className="p-3 border border-border text-sm">33 {ct('pallets')}, 24t</td>
                <td className="p-3 border border-border text-sm">{ct('voluminousCargo')}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">{ct('boxTrailer')}</td>
                <td className="p-3 border border-border text-sm">13.6m × 2.48m × 2.7m</td>
                <td className="p-3 border border-border text-sm">33 {ct('pallets')}, 24-25t</td>
                <td className="p-3 border border-border text-sm">{ct('secureCargoRear')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">{ct('reefer')}</td>
                <td className="p-3 border border-border text-sm">13.6m × 2.48m × 2.6m</td>
                <td className="p-3 border border-border text-sm">33 {ct('pallets')}, 22-24t</td>
                <td className="p-3 border border-border text-sm">{ct('temperatureControlled')}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">{ct('flatbed')}</td>
                <td className="p-3 border border-border text-sm">13.6m × 2.48m</td>
                <td className="p-3 border border-border text-sm">{ct('varies')}, 24-27t</td>
                <td className="p-3 border border-border text-sm">{ct('machineryOversized')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">{ct('doubleDeck')}</td>
                <td className="p-3 border border-border text-sm">13.6m × 2.48m × 3.0m</td>
                <td className="p-3 border border-border text-sm">66 {ct('pallets')}, 24t</td>
                <td className="p-3 border border-border text-sm">{ct('lightStackable')}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">{ct('walkingFloor')}</td>
                <td className="p-3 border border-border text-sm">13.6m × 2.48m × 2.7m</td>
                <td className="p-3 border border-border text-sm">90-100 m³</td>
                <td className="p-3 border border-border text-sm">{ct('bulkGoods')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">{ct('tanker')}</td>
                <td className="p-3 border border-border text-sm">{ct('varies')}</td>
                <td className="p-3 border border-border text-sm">30,000-40,000 L</td>
                <td className="p-3 border border-border text-sm">{ct('liquidsChemicals')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Weight Limits by Country */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Globe className="w-6 h-6 text-primary" />
          {ct('gvwLimitsByCountry')}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">{ct('country')}</th>
                <th className="p-3 text-center border border-border">{ct('standard5Axles')}</th>
                <th className="p-3 text-center border border-border">{ct('sixAxles')}</th>
                <th className="p-3 text-left border border-border">{ct('notes')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border font-semibold">🇩🇪 {ct('germany')}</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-sm">{ct('germanyCombined')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">🇫🇷 {ct('france')}</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-center">44t</td>
                <td className="p-3 border border-border text-sm">{ct('france3Axle')}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">🇳🇱 {ct('netherlands')}</td>
                <td className="p-3 border border-border text-center">50t</td>
                <td className="p-3 border border-border text-center">50t</td>
                <td className="p-3 border border-border text-sm">{ct('netherlandsDomestic')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">🇧🇪 {ct('belgium')}</td>
                <td className="p-3 border border-border text-center">44t</td>
                <td className="p-3 border border-border text-center">44t</td>
                <td className="p-3 border border-border text-sm">{ct('belgiumInternational')}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">🇵🇱 {ct('poland')}</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-sm">{ct('polandStrict')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">🇮🇹 {ct('italy')}</td>
                <td className="p-3 border border-border text-center">44t</td>
                <td className="p-3 border border-border text-center">44t</td>
                <td className="p-3 border border-border text-sm">{ct('italy5Axles')}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">🇪🇸 {ct('spain')}</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-center">44t</td>
                <td className="p-3 border border-border text-sm">{ct('spainIntermodal')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">🇦🇹 {ct('austria')}</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-center">44t</td>
                <td className="p-3 border border-border text-sm">{ct('austriaBrenner')}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">🇬🇧 {ct('uk')}</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-center">44t</td>
                <td className="p-3 border border-border text-sm">{ct('uk6Axles')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">🇨🇭 {ct('switzerland')}</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-sm">{ct('switzerlandLSVA')}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">🇸🇪 {ct('sweden')}</td>
                <td className="p-3 border border-border text-center">60t</td>
                <td className="p-3 border border-border text-center">64t</td>
                <td className="p-3 border border-border text-sm">{ct('swedenLonger')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">🇫🇮 {ct('finland')}</td>
                <td className="p-3 border border-border text-center">60t</td>
                <td className="p-3 border border-border text-center">76t</td>
                <td className="p-3 border border-border text-sm">{ct('finlandHCT')}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-warning/10 border border-warning/30 rounded-lg">
          <p className="text-sm flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <span><strong>{ct('important')}:</strong> {ct('overweightWarning')}</span>
          </p>
        </div>
      </section>

      {/* Axle Configuration */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Settings className="w-6 h-6 text-primary" />
          {ct('axleLoadLimits')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Gauge className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">{ct('steeringAxle')}</h3>
            <p className="text-2xl font-bold text-primary">7.5t</p>
            <p className="text-xs text-muted-foreground">{ct('frontAxleMax')}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Gauge className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">{ct('driveAxle')}</h3>
            <p className="text-2xl font-bold text-primary">11.5t</p>
            <p className="text-xs text-muted-foreground">{ct('singleDriveAxle')}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Gauge className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">{ct('tandemAxle')}</h3>
            <p className="text-2xl font-bold text-primary">18-20t</p>
            <p className="text-xs text-muted-foreground">{ct('dependsOnSpacing')}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Gauge className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">{ct('tridemAxle')}</h3>
            <p className="text-2xl font-bold text-primary">21-24t</p>
            <p className="text-xs text-muted-foreground">{ct('threeAxleGroup')}</p>
          </div>
        </div>
      </section>

      {/* Pallet Configurations */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Package className="w-6 h-6 text-primary" />
          {ct('palletConfigurations')}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="font-semibold mb-3">{ct('eurPalletsSize')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>{ct('singleRow')}</span>
                <span className="font-medium">17 {ct('pallets')}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>{ct('doubleRow')}</span>
                <span className="font-medium">33 {ct('pallets')}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>{ct('doubleDeckStackable')}</span>
                <span className="font-medium">66 {ct('pallets')}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>{ct('loadingMeters')}</span>
                <span className="font-medium">13.6 LDM</span>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="font-semibold mb-3">{ct('industrialPalletsSize')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>{ct('singleRow')}</span>
                <span className="font-medium">13 {ct('pallets')}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>{ct('doubleRow')}</span>
                <span className="font-medium">26 {ct('pallets')}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>{ct('doubleDeckStackable')}</span>
                <span className="font-medium">52 {ct('pallets')}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>{ct('loadingMeters')}</span>
                <span className="font-medium">13.6 LDM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Securing Requirements */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          {ct('cargoSecuringStandards')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold mb-2">{ct('codeXLStructure')}</h3>
            <p className="text-sm text-muted-foreground">{ct('codeXLDesc')}</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold mb-2">{ct('securingEquipment')}</h3>
            <p className="text-sm text-muted-foreground">{ct('securingEquipmentDesc')}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 bg-primary/10 rounded-lg text-center">
            <p className="text-3xl font-bold text-primary">80%</p>
            <p className="text-sm text-muted-foreground">{ct('forwardRestraint')}</p>
          </div>
          <div className="p-4 bg-primary/10 rounded-lg text-center">
            <p className="text-3xl font-bold text-primary">50%</p>
            <p className="text-sm text-muted-foreground">{ct('sidewaysRestraint')}</p>
          </div>
          <div className="p-4 bg-primary/10 rounded-lg text-center">
            <p className="text-3xl font-bold text-primary">50%</p>
            <p className="text-sm text-muted-foreground">{ct('backwardRestraint')}</p>
          </div>
        </div>
      </div>

      {/* Pre-Trip Inspection */}
      <ProcessMap
        title={ct('preTripInspection')}
        phases={[
          {
            name: ct('exteriorPhase'),
            color: "primary" as const,
            steps: [ct('tireCondition'), ct('lightsReflectors'), ct('bodyDamage')]
          },
          {
            name: ct('trailerPhase'),
            color: "info" as const,
            steps: [ct('curtainsDoorsSeals'), ct('floorCondition'), ct('lashingPoints')]
          },
          {
            name: ct('documentsPhase'),
            color: "warning" as const,
            steps: [ct('registrationInsurance'), ct('driverLicense'), ct('tachograph')]
          },
          {
            name: ct('equipmentPhase'),
            color: "success" as const,
            steps: [ct('strapsChains'), ct('warningTriangle'), ct('firstAidKit')]
          }
        ]}
      />

      {/* Loading Checkpoints */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-primary" />
          {ct('loadingCheckpoints')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: ct('beforeLoading'), desc: ct('beforeLoadingDesc') },
            { title: ct('duringLoading'), desc: ct('duringLoadingDesc') },
            { title: ct('afterLoading'), desc: ct('afterLoadingDesc') },
            { title: ct('documentation'), desc: ct('documentationDesc') }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quiz */}
      {quizzes.vehicle && (
        <Quiz title={ct('quizTitle')} questions={quizzes.vehicle} chapterId="vehicle" />
      )}
    </div>
  );
}