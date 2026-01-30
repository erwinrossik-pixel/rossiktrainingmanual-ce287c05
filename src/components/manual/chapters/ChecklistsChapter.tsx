import { Checklist } from "../Checklist";
import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ClipboardList, Truck, Package, FileText, Calculator, AlertTriangle, Phone, Shield, Clock, Euro, MapPin, CheckCircle2, Thermometer, Users, Wrench, Globe, Camera, Scale, Ban, Fuel } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function ChecklistsChapter() {
  const { ct } = useChapterTranslation("checklists");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={ClipboardList}
        variant="checklists"
      />

      {/* Pre-Trip & Loading Checklists */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="info-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">{ct("preDispatchTitle")}</h2>
          </div>
          <Checklist 
            items={[
              ct("preDispatch1"),
              ct("preDispatch2"),
              ct("preDispatch3"),
              ct("preDispatch4"),
              ct("preDispatch5"),
              ct("preDispatch6"),
              ct("preDispatch7"),
              ct("preDispatch8"),
              ct("preDispatch9"),
              ct("preDispatch10"),
              ct("preDispatch11"),
              ct("preDispatch12"),
            ]}
          />
        </div>

        <div className="info-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">{ct("loadingChecklistTitle")}</h2>
          </div>
          <Checklist 
            items={[
              ct("loading1"),
              ct("loading2"),
              ct("loading3"),
              ct("loading4"),
              ct("loading5"),
              ct("loading6"),
              ct("loading7"),
              ct("loading8"),
              ct("loading9"),
              ct("loading10"),
              ct("loading11"),
              ct("loading12"),
              ct("loading13"),
            ]}
          />
        </div>
      </div>

      {/* Delivery & Route Building Checklists */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="info-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">{ct("deliveryChecklistTitle")}</h2>
          </div>
          <Checklist 
            items={[
              ct("delivery1"),
              ct("delivery2"),
              ct("delivery3"),
              ct("delivery4"),
              ct("delivery5"),
              ct("delivery6"),
              ct("delivery7"),
              ct("delivery8"),
              ct("delivery9"),
              ct("delivery10"),
              ct("delivery11"),
              ct("delivery12"),
              ct("delivery13"),
            ]}
          />
        </div>

        <div className="info-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">{ct("routePlanningTitle")}</h2>
          </div>
          <Checklist 
            items={[
              ct("route1"),
              ct("route2"),
              ct("route3"),
              ct("route4"),
              ct("route5"),
              ct("route6"),
              ct("route7"),
              ct("route8"),
              ct("route9"),
              ct("route10"),
              ct("route11"),
              ct("route12"),
            ]}
          />
        </div>
      </div>

      {/* Carrier Qualification Checklist */}
      <div className="info-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <h2 className="section-title mb-0">{ct("carrierQualificationTitle")}</h2>
        </div>
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
              ct("mandatoryDoc7"),
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
              ct("additionalVerification7"),
              ct("additionalVerification8"),
            ]}
          />
        </div>
      </div>

      {/* Reefer Checklist */}
      <div className="info-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-info/10 rounded-lg flex items-center justify-center">
            <Thermometer className="w-5 h-5 text-info" />
          </div>
          <h2 className="section-title mb-0">{ct("reeferTitle")}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Checklist
            title={ct("preLoadingTitle")}
            items={[
              ct("preLoading1"),
              ct("preLoading2"),
              ct("preLoading3"),
              ct("preLoading4"),
              ct("preLoading5"),
              ct("preLoading6"),
              ct("preLoading7"),
            ]}
          />
          <Checklist
            title={ct("duringPostTitle")}
            items={[
              ct("duringPost1"),
              ct("duringPost2"),
              ct("duringPost3"),
              ct("duringPost4"),
              ct("duringPost5"),
              ct("duringPost6"),
              ct("duringPost7"),
            ]}
          />
        </div>
      </div>

      {/* Claims Checklist */}
      <div className="info-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-warning" />
          </div>
          <h2 className="section-title mb-0">{ct("damageClaimsTitle")}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Checklist
            title={ct("immediateActionsTitle")}
            items={[
              ct("immediate1"),
              ct("immediate2"),
              ct("immediate3"),
              ct("immediate4"),
              ct("immediate5"),
              ct("immediate6"),
            ]}
          />
          <Checklist
            title={ct("within7DaysTitle")}
            items={[
              ct("within7Days1"),
              ct("within7Days2"),
              ct("within7Days3"),
              ct("within7Days4"),
              ct("within7Days5"),
              ct("within7Days6"),
              ct("within7Days7"),
            ]}
          />
        </div>
      </div>

      {/* ADR Checklist */}
      <div className="info-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
            <Scale className="w-5 h-5 text-destructive" />
          </div>
          <h2 className="section-title mb-0">{ct("adrTitle")}</h2>
        </div>
        <Checklist
          items={[
            ct("adr1"),
            ct("adr2"),
            ct("adr3"),
            ct("adr4"),
            ct("adr5"),
            ct("adr6"),
            ct("adr7"),
            ct("adr8"),
            ct("adr9"),
            ct("adr10"),
            ct("adr11"),
            ct("adr12"),
          ]}
        />
      </div>

      {/* Formulas Quick Reference */}
      <div className="info-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Calculator className="w-5 h-5 text-primary" />
          </div>
          <h2 className="section-title mb-0">{ct("formulasTitle")}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">{ct("basicCostCalc")}</p>
            <p className="font-mono font-semibold text-lg">Cost = (km × €1.10-1.25) + Σ(tolls) + accessories</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">{ct("priceWithMargin")}</p>
            <p className="font-mono font-semibold text-lg">Price = Cost × (1 + margin%)</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">{ct("dailyDistanceSingle")}</p>
            <p className="font-mono font-semibold text-lg">~650-700 km (9h × 75 km/h)</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">{ct("dailyDistanceDouble")}</p>
            <p className="font-mono font-semibold text-lg">~1,100-1,200 km (18h × 65 km/h)</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">{ct("cmrLiabilityLimit")}</p>
            <p className="font-mono font-semibold text-lg">8.33 SDR/kg ≈ €10/kg gross weight</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">{ct("loadingMeterLDM")}</p>
            <p className="font-mono font-semibold text-lg">1 LDM = 1m × 2.4m = 2.4 m²</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">{ct("eurPalletsPerFTL")}</p>
            <p className="font-mono font-semibold text-lg">33 pallets (crosswise) = 13.6 LDM</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">{ct("payloadCalculation")}</p>
            <p className="font-mono font-semibold text-lg">Payload = GVW - Vehicle Tare (24-25t typical)</p>
          </div>
        </div>
      </div>

      {/* Drivers' Hours Quick Reference */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Clock className="w-6 h-6 text-primary" />
          {ct("driversHoursTitle")}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">{ct("rule")}</th>
                <th className="p-3 text-center border border-border">{ct("standard")}</th>
                <th className="p-3 text-center border border-border">{ct("exception")}</th>
                <th className="p-3 text-left border border-border">{ct("notes")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border font-medium">{ct("dailyDriving")}</td>
                <td className="p-3 border border-border text-center font-bold text-primary">9 hours</td>
                <td className="p-3 border border-border text-center">10h (2×/week)</td>
                <td className="p-3 border border-border text-muted-foreground">Max 56h/week, 90h/2 weeks</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-medium">{ct("continuousDriving")}</td>
                <td className="p-3 border border-border text-center font-bold text-primary">4h 30min</td>
                <td className="p-3 border border-border text-center">—</td>
                <td className="p-3 border border-border text-muted-foreground">Then break required</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-medium">{ct("break")}</td>
                <td className="p-3 border border-border text-center font-bold text-primary">45 minutes</td>
                <td className="p-3 border border-border text-center">Split: 15' + 30'</td>
                <td className="p-3 border border-border text-muted-foreground">Order matters!</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-medium">{ct("dailyRest")}</td>
                <td className="p-3 border border-border text-center font-bold text-primary">11 hours</td>
                <td className="p-3 border border-border text-center">9h (3×/week)</td>
                <td className="p-3 border border-border text-muted-foreground">Within 24h window</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-medium">{ct("weeklyRest")}</td>
                <td className="p-3 border border-border text-center font-bold text-primary">45 hours</td>
                <td className="p-3 border border-border text-center">24h (1×/2 weeks)</td>
                <td className="p-3 border border-border text-muted-foreground">Reduced must compensate</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-medium">{ct("weeklyDrivingMax")}</td>
                <td className="p-3 border border-border text-center font-bold text-primary">56 hours</td>
                <td className="p-3 border border-border text-center">—</td>
                <td className="p-3 border border-border text-muted-foreground">Hard limit</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-medium">{ct("biweeklyMax")}</td>
                <td className="p-3 border border-border text-center font-bold text-primary">90 hours</td>
                <td className="p-3 border border-border text-center">—</td>
                <td className="p-3 border border-border text-muted-foreground">Rolling 2-week period</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="checklists" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="checklists" />
    </div>
  );
}
