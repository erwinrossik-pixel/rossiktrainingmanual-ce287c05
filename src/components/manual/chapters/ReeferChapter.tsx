import { Checklist } from "../Checklist";
import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { quizzes } from "@/data/quizData";
import { 
  Thermometer, Snowflake, AlertTriangle, CheckCircle, FileText, Clock, Truck,
  Shield, Zap, Eye, AlertCircle, Info, Target, Package, Euro, Phone,
  CheckCircle2, XCircle, Gauge, Settings, BookOpen
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import reeferTemperatureImg from "@/assets/chapters/reefer-temperature-zones.jpg";

export function ReeferChapter() {
  const { ct } = useChapterTranslation('reefer');
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Snowflake}
        variant="reefer"
      />

      {/* Reefer Temperature Zones Image */}
      <ChapterImage
        src={reeferTemperatureImg}
        alt="Refrigerated Trailer Temperature Zones"
        variant="inline"
        className="mb-6"
      />

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-info/20 flex items-center justify-center flex-shrink-0">
            <Thermometer className="w-6 h-6 text-info" />
          </div>
          <div>
            <h2 className="section-title mb-2">{ct('coldChainTitle')}</h2>
            <p className="text-muted-foreground mb-4">
              {ct('coldChainDesc')}
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-info/10 rounded-lg">
                <p className="font-semibold text-info">€50B+</p>
                <p className="text-muted-foreground">{ct('euReeferMarket')}</p>
              </div>
              <div className="p-3 bg-info/10 rounded-lg">
                <p className="font-semibold text-info">+25-40%</p>
                <p className="text-muted-foreground">{ct('premiumOverStandard')}</p>
              </div>
              <div className="p-3 bg-info/10 rounded-lg">
                <p className="font-semibold text-info">{ct('zeroTolerance')}</p>
                <p className="text-muted-foreground">{ct('zeroTolerancePharma')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Temperature Classes */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <Thermometer className="w-6 h-6 text-primary" />
          {ct('tempClassesTitle')}
        </h2>
        <DataTable
          headers={[ct('tempClass'), ct('tempRange'), ct('typicalCargo'), ct('equipment'), ct('specialNotes')]}
          rows={[
            [ct('deepFrozen'), "-25°C to -18°C", ct('deepFrozenCargo'), "FRC reefer", ct('strictestTempControl')],
            [ct('frozen'), "-18°C to -12°C", ct('frozenCargo'), "FRC reefer", ct('mostCommonFrozen')],
            [ct('chilled'), "+2°C to +8°C", ct('chilledCargo'), "FRC/FNA reefer", ct('highestVolumeSegment')],
            [ct('cool'), "+8°C to +14°C", ct('coolCargo'), "FNA reefer", ct('needsVentilation')],
            [ct('ambientControlled'), "+15°C to +25°C", ct('ambientCargo'), "FNA/Insulated", ct('protectFromExtreme')],
            [ct('multiTemperature'), ct('variousZones'), ct('mixedLoads'), ct('dualTempReefer'), ct('dividersRequired')],
          ]}
        />
        <div className="mt-4 p-4 bg-info/10 border border-info/30 rounded-lg">
          <p className="text-sm flex items-start gap-2">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-info" />
            <span><strong>{ct('critical')}:</strong> {ct('criticalVerifyTemp')}</span>
          </p>
        </div>
      </section>

      {/* ATP Certification - Expanded */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          {ct('atpTitle')}
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">{ct('whatIsATP')}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {ct('atpDescription')}
              </p>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">{ct('atpCoverage')}</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• {ct('equipmentConstruction')}</li>
                  <li>• {ct('temperatureMaintenance')}</li>
                  <li>• {ct('testingCertification')}</li>
                  <li>• {ct('markingRequirements')}</li>
                  <li>• {ct('internationalRecognition')}</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct('atpClassificationCodes')}</h3>
              <DataTable
                headers={[ct('code'), ct('meaning'), ct('tempCapability')]}
                rows={[
                  ["FRC", ct('frcMeaning'), ct('frcTemp')],
                  ["FRF", ct('frfMeaning'), ct('frfTemp')],
                  ["FNA", ct('fnaMeaning'), ct('fnaTemp')],
                  ["FNB", ct('fnbMeaning'), "+12°C"],
                  ["IN", ct('inMeaning'), ct('noActiveCooling')],
                  ["IR", ct('irMeaning'), ct('noActiveCooling')],
                ]}
              />
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-warning/10 border border-warning/30 rounded-lg">
            <h4 className="font-semibold text-warning mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              {ct('certificateRequirements')}
            </h4>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li>• {ct('certReq1')}</li>
              <li>• {ct('certReq2')}</li>
              <li>• {ct('certReq3')}</li>
              <li>• {ct('certReq4')}</li>
              <li>• {ct('certReq5')}</li>
              <li>• {ct('certReq6')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cold Chain Best Practices - Expanded */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <Snowflake className="w-6 h-6 text-primary" />
          {ct('coldChainBestPracticesTitle')}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-6 bg-info/10 rounded-xl border border-info/30">
            <div className="w-10 h-10 bg-info/20 rounded-lg flex items-center justify-center mb-3">
              <Thermometer className="w-5 h-5 text-info" />
            </div>
            <h3 className="font-semibold mb-3">{ct('preCoolingProtocol')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct('preCool1')}</li>
              <li>• {ct('preCool2')}</li>
              <li>• {ct('preCool3')}</li>
              <li>• {ct('preCool4')}</li>
              <li>• {ct('preCool5')}</li>
              <li>• {ct('preCool6')}</li>
            </ul>
          </div>
          <div className="p-6 bg-primary/10 rounded-xl border border-primary/30">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-3">
              <Truck className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold mb-3">{ct('loadingProtocol')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct('loading1')}</li>
              <li>• {ct('loading2')}</li>
              <li>• {ct('loading3')}</li>
              <li>• {ct('loading4')}</li>
              <li>• {ct('loading5')}</li>
              <li>• {ct('loading6')}</li>
            </ul>
          </div>
          <div className="p-6 bg-success/10 rounded-xl border border-success/30">
            <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center mb-3">
              <CheckCircle className="w-5 h-5 text-success" />
            </div>
            <h3 className="font-semibold mb-3">{ct('temperatureMonitoring')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct('monitoring1')}</li>
              <li>• {ct('monitoring2')}</li>
              <li>• {ct('monitoring3')}</li>
              <li>• {ct('monitoring4')}</li>
              <li>• {ct('monitoring5')}</li>
              <li>• {ct('monitoring6')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Temperature Deviations - Expanded */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-warning" />
          {ct('tempDeviationsTitle')}
        </h2>
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-warning">{ct('criticalActionsSTOP')}</h3>
              <ol className="space-y-3 text-sm">
                {[
                  { step: "S", action: ct('stop'), desc: ct('stopDesc') },
                  { step: "T", action: ct('temperature'), desc: ct('tempDesc') },
                  { step: "O", action: ct('operate'), desc: ct('operateDesc') },
                  { step: "P", action: ct('phone'), desc: ct('phoneDesc') },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-warning text-warning-foreground rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">{item.step}</span>
                    <div>
                      <p className="font-medium">{item.action}</p>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct('toleranceLimits')}</h3>
              <DataTable
                headers={[ct('productType'), ct('maxDeviation'), ct('maxDuration')]}
                rows={[
                  [ct('frozenGoods'), "+3°C", "< 30 " + ct('minutes')],
                  [ct('chilledGoods'), "+2°C", "< 1 " + ct('hour')],
                  [ct('freshMeat'), "+2°C", "< 30 " + ct('minutes')],
                  [ct('dairy'), "+2°C", "< 1 " + ct('hour')],
                  [ct('pharmaceuticals'), ct('zero'), ct('anyReject')],
                  [ct('vaccines'), ct('zero'), ct('anyReject')],
                ]}
              />
              <p className="text-xs text-warning mt-2">
                <AlertTriangle className="w-3 h-3 inline mr-1" />
                {ct('anyDeviationNote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reefer Unit Operation - Expanded */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <Settings className="w-6 h-6 text-primary" />
          {ct('reeferOperationTitle')}
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">{ct('commonBrands')}</h3>
              <DataTable
                headers={[ct('brand'), ct('popularModels'), ct('notes')]}
                rows={[
                  ["Carrier Transicold", "Vector 1950, Supra 1150", ct('mostCommonGlobally')],
                  ["Thermo King", "SLXe 400, SLXi Whisper", ct('strongInEU')],
                  ["Schmitz Cargobull", "S.CU 2300", ct('germanManufacturer')],
                  ["Daikin", ct('variousModels'), ct('growingPresence')],
                ]}
              />
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct('operatingModes')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="p-2 bg-muted/50 rounded">
                  <span className="font-medium">{ct('continuous')}</span> {ct('continuousDesc')}
                </li>
                <li className="p-2 bg-muted/50 rounded">
                  <span className="font-medium">{ct('startStop')}</span> {ct('startStopDesc')}
                </li>
                <li className="p-2 bg-muted/50 rounded">
                  <span className="font-medium">{ct('nullDefrost')}</span> {ct('nullDefrostDesc')}
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-semibold mb-3">{ct('fuelConsumptionGuide')}</h3>
            <DataTable
              headers={[ct('condition'), ct('consumption'), ct('costPerDay'), ct('notes')]}
              rows={[
                [ct('chilledCondition'), "2-3 L/" + ct('hour'), "€40-60/" + ct('day'), ct('standardOperating')],
                [ct('frozenCondition'), "3-4 L/" + ct('hour'), "€60-80/" + ct('day'), ct('higherInSummer')],
                [ct('deepFreezeCondition'), "4-5 L/" + ct('hour'), "€80-100/" + ct('day'), ct('highestConsumption')],
                [ct('multiTempCondition'), "4-5 L/" + ct('hour'), "€80-100/" + ct('day'), ct('twoCompartments')],
              ]}
            />
          </div>
        </div>
      </section>

      {/* Product-Specific Requirements - Expanded */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <Package className="w-6 h-6 text-primary" />
          {ct('productRequirementsTitle')}
        </h2>
        <DataTable
          headers={[ct('product'), ct('temperatureCol'), ct('humidity'), ct('specialNotes'), ct('documentsNeeded')]}
          rows={[
            [ct('freshMeatBeefPork'), "+0°C to +4°C", "85-90%", ct('healthCertRequired'), "CMR, Health cert, ATP"],
            [ct('poultry'), "+0°C to +2°C", "85-90%", ct('stricterThanRed'), "CMR, Health cert, ATP"],
            [ct('freshFish'), "-2°C to +2°C", "95-100%", ct('packedInIce'), "CMR, Catch cert, ATP"],
            [ct('dairyProducts'), "+2°C to +6°C", "80-85%", ct('sensitiveToFluctuation'), "CMR, ATP"],
            [ct('fruitsVegetables'), "+4°C to +14°C", "85-95%", ct('needVentilation'), "CMR, Phyto cert, ATP"],
            [ct('pharmaceuticalsProduct'), "+2°C to +8°C", ct('controlled'), ct('gdpCompliance'), "CMR, GDP docs, ATP, Temp log"],
            [ct('vaccinesProduct'), "+2°C to +8°C", ct('controlled'), ct('zeroToleranceDedicated'), "CMR, GDP, Batch records"],
            [ct('frozenFoods'), "-18°C " + ct('orBelow'), "N/A", ct('mustMaintainThroughout'), "CMR, ATP"],
            [ct('iceCream'), "-25°C to -20°C", "N/A", ct('sensitiveToTempRise'), "CMR, ATP"],
            [ct('flowers'), "+2°C to +8°C", "90-95%", ct('highHumidityQuick'), "CMR, Phyto cert, ATP"],
            [ct('chocolate'), "+12°C to +18°C", "50-65%", ct('avoidCondensation'), "CMR, (ATP optional)"],
            [ct('wine'), "+10°C to +16°C", "60-70%", ct('protectVibration'), "CMR, (ATP optional)"],
          ]}
        />
      </section>

      {/* GDP Compliance (Pharmaceutical) */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          {ct('gdpTitle')}
        </h2>
        <div className="info-card">
          <p className="text-muted-foreground mb-4">
            {ct('gdpDescription')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-primary">{ct('gdpRequirements')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{ct('gdpReq1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{ct('gdpReq2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{ct('gdpReq3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{ct('gdpReq4')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{ct('gdpReq5')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{ct('gdpReq6')}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-destructive">{ct('gdpNonComplianceRisks')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>{ct('gdpRisk1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>{ct('gdpRisk2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>{ct('gdpRisk3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>{ct('gdpRisk4')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>{ct('gdpRisk5')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          {ct('requiredDocumentation')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">{ct('vehicleDocuments')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('vehicleDoc1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('vehicleDoc2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('vehicleDoc3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('vehicleDoc4')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('vehicleDoc5')}</span>
              </li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">{ct('shipmentDocuments')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('shipmentDoc1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('shipmentDoc2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('shipmentDoc3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('shipmentDoc4')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('shipmentDoc5')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Considerations - Expanded */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <Euro className="w-6 h-6 text-primary" />
          {ct('pricingTitle')}
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">{ct('premiumOverStandardRates')}</h4>
              <DataTable
                headers={[ct('temperatureClassCol'), ct('premium'), ct('notes')]}
                rows={[
                  [ct('chilledRate'), "+15-25%", ct('standardReefer')],
                  [ct('frozenRate'), "+25-35%", ct('higherFuelCost')],
                  [ct('deepFreezeRate'), "+35-50%", ct('specialistEquipment')],
                  [ct('pharmaGDPRate'), "+50-100%", ct('documentationLiability')],
                  [ct('multiTemperatureRate'), "+40-60%", ct('complexLoads')],
                ]}
              />
            </div>
            <div>
              <h4 className="font-semibold mb-3">{ct('additionalCostFactors')}</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between py-2 border-b border-border">
                  <span>{ct('reeferFuel')}</span>
                  <span className="font-medium">€30-100/{ct('day')}</span>
                </li>
                <li className="flex justify-between py-2 border-b border-border">
                  <span>{ct('preCooling')}</span>
                  <span className="font-medium">€50-100</span>
                </li>
                <li className="flex justify-between py-2 border-b border-border">
                  <span>{ct('temperatureMonitoringCost')}</span>
                  <span className="font-medium">€25-50/{ct('shipment')}</span>
                </li>
                <li className="flex justify-between py-2 border-b border-border">
                  <span>{ct('cleaningFoodGrade')}</span>
                  <span className="font-medium">€50-150</span>
                </li>
                <li className="flex justify-between py-2 border-b border-border">
                  <span>{ct('temperatureReport')}</span>
                  <span className="font-medium">{ct('includedOr')} €15-30</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" />
          {ct('troubleshootingTitle')}
        </h2>
        <DataTable
          headers={[ct('problem'), ct('possibleCause'), ct('immediateAction'), ct('prevention')]}
          rows={[
            [ct('unitNotCooling'), ct('unitNotCoolingCause'), ct('unitNotCoolingAction'), ct('preTripChecks')],
            [ct('temperatureRising'), ct('temperatureRisingCause'), ct('temperatureRisingAction'), ct('inspectSeals')],
            [ct('iceOnEvaporator'), ct('iceOnEvaporatorCause'), ct('iceOnEvaporatorAction'), ct('ensureAutoDefrost')],
            [ct('inconsistentTemp'), ct('inconsistentTempCause'), ct('inconsistentTempAction'), ct('properLoadingTraining')],
            [ct('unitAlarm'), ct('unitAlarmCause'), ct('unitAlarmAction'), ct('regularMaintenance')],
            [ct('noTempPrintout'), ct('noTempPrintoutCause'), ct('noTempPrintoutAction'), ct('checkPrinter')],
          ]}
        />
      </section>

      {/* Checklists */}
      <div className="grid md:grid-cols-2 gap-6">
        <Checklist 
          title={ct('preLoadingReeferChecklist')}
          items={[
            ct('checklistPreLoad1'),
            ct('checklistPreLoad2'),
            ct('checklistPreLoad3'),
            ct('checklistPreLoad4'),
            ct('checklistPreLoad5'),
            ct('checklistPreLoad6'),
            ct('checklistPreLoad7')
          ]}
        />
        <Checklist 
          title={ct('postLoadingReeferChecklist')}
          items={[
            ct('checklistPostLoad1'),
            ct('checklistPostLoad2'),
            ct('checklistPostLoad3'),
            ct('checklistPostLoad4'),
            ct('checklistPostLoad5'),
            ct('checklistPostLoad6'),
            ct('checklistPostLoad7')
          ]}
        />
      </div>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="reefer" />

      {/* Quiz */}
      {quizzes.reefer && (
        <Quiz title={ct('knowledgeCheck')} questions={quizzes.reefer} chapterId="reefer" />
      )}
    </div>
  );
}
