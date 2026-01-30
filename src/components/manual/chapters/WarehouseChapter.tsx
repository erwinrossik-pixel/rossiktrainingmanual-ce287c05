import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { Warehouse, Package, ArrowRight, Clock, Truck, CheckCircle2, AlertTriangle, Zap, BarChart3, MapPin, Users, RefreshCw, Book, FileText } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import warehouseInteriorImg from "@/assets/chapters/warehouse-interior.jpg";

export function WarehouseChapter() {
  const { ct } = useChapterTranslation("warehouse");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Warehouse}
        variant="warehouse"
      />


      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Warehouse className="w-6 h-6 text-primary" />
          {ct("roleOfWarehousing")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("roleOfWarehousingDesc")}
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Package className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("receiving")}</p>
            <p className="text-xs text-muted-foreground">{ct("receivingDesc")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Warehouse className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("storage")}</p>
            <p className="text-xs text-muted-foreground">{ct("storageDesc")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("processing")}</p>
            <p className="text-xs text-muted-foreground">{ct("processingDesc")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Truck className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("dispatch")}</p>
            <p className="text-xs text-muted-foreground">{ct("dispatchDesc")}</p>
          </div>
        </div>
      </div>

      {/* Warehouse Types */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Warehouse className="w-6 h-6 text-primary" />
          {ct("warehouseTypes")}
        </h2>

        <DataTable
          headers={[ct("type"), ct("purpose"), ct("typicalFeatures"), ct("transportImplications")]}
          rows={[
            [ct("distributionCenter"), "Fast throughput, regional distribution", "High automation, many dock doors", "Strict time windows, high frequency"],
            [ct("fulfillmentCenter"), "E-commerce order processing", "Pick-pack stations, conveyor systems", "Small parcels, express deliveries"],
            [ct("crossDock"), "Transshipment without storage", "Inbound/outbound docks only", "Tight scheduling, quick turnaround"],
            [ct("coldStorage"), "Temperature-controlled goods", "Refrigeration zones, airlocks", "Pre-cooling, temp monitoring"],
            [ct("bondedWarehouse"), "Customs storage before clearance", "Secure, customs-supervised", "Customs documentation required"],
            [ct("generalStorage"), "Long-term inventory holding", "Racking, bulk storage", "Flexible scheduling"],
          ]}
        />
      </div>

      {/* Warehouse Interior Image - contextual before cross-docking */}
      <ChapterImage
        src={warehouseInteriorImg}
        alt="Modern warehouse interior with organized storage systems"
        variant="float-right"
        className="mb-4"
      />

      {/* Cross-Docking */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <RefreshCw className="w-6 h-6 text-primary" />
          {ct("crossDockingOperations")}
        </h2>

        <p className="text-muted-foreground mb-4">
          {ct("crossDockingDesc")}
        </p>

        <div className="bg-muted/30 p-6 rounded-lg mb-6">
          <h3 className="font-semibold mb-4">{ct("crossDockProcessFlow")}</h3>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <div className="text-center p-3 bg-background rounded-lg">
              <Truck className="w-6 h-6 text-primary mx-auto mb-1" />
              <p className="text-xs">{ct("inbound")}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="text-center p-3 bg-background rounded-lg">
              <Package className="w-6 h-6 text-primary mx-auto mb-1" />
              <p className="text-xs">{ct("unload")}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="text-center p-3 bg-primary/10 rounded-lg border-2 border-primary">
              <RefreshCw className="w-6 h-6 text-primary mx-auto mb-1" />
              <p className="text-xs font-medium">{ct("sort")}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="text-center p-3 bg-background rounded-lg">
              <Package className="w-6 h-6 text-primary mx-auto mb-1" />
              <p className="text-xs">{ct("load")}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="text-center p-3 bg-background rounded-lg">
              <Truck className="w-6 h-6 text-primary mx-auto mb-1" />
              <p className="text-xs">{ct("outbound")}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">{ct("crossDockBenefits")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("reducedStorageCosts")}</li>
              <li>• {ct("fasterTransitTimes")}</li>
              <li>• {ct("lowerHandlingDamage")}</li>
              <li>• {ct("betterInventoryTurns")}</li>
              <li>• {ct("reducedWarehouseSpace")}</li>
            </ul>
          </div>
          <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
            <h4 className="font-semibold text-warning mb-2">{ct("crossDockChallenges")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("preciseTiming")}</li>
              <li>• {ct("limitedBuffer")}</li>
              <li>• {ct("highCoordination")}</li>
              <li>• {ct("reliableTransport")}</li>
              <li>• {ct("complexScheduling")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Loading/Unloading */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Clock className="w-6 h-6 text-primary" />
          {ct("loadingUnloadingOperations")}
        </h2>

        <DataTable
          headers={[ct("activity"), ct("typicalDuration"), ct("factorsAffectingTime"), ct("freeTimeStandard")]}
          rows={[
            [ct("ftlLoadingDock"), "30-60 min", "Cargo type, equipment, staffing", "1-2 hours"],
            [ct("ftlLoadingGround"), "1-2 hours", "Manual handling, forklift access", "2 hours"],
            [ct("ftlUnloadingDock"), "30-60 min", "Same as loading", "1-2 hours"],
            [ct("ltlLoading"), "15-30 min", "Consolidation complexity", "30 min"],
            [ct("containerStripping"), "2-4 hours", "Hand-stacking, volume", "2-4 hours"],
            [ct("crossDockTransfer"), "30-60 min", "Number of items, sorting", "1 hour"],
          ]}
        />

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mt-4">
          <h4 className="font-semibold mb-2">{ct("waitingTimeDemurrage")}</h4>
          <p className="text-sm">
            {ct("waitingTimeDesc")}
          </p>
        </div>
      </div>

      {/* Consolidation */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Package className="w-6 h-6 text-primary" />
          {ct("consolidationDeconsolidation")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              {ct("consolidationGroupage")}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {ct("consolidationDesc")}
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("reducesPerShipmentCost")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("offersServiceToLtl")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("requiresCoordination")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("longerTransitTimes")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-primary" />
              {ct("deconsolidation")}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {ct("deconsolidationDesc")}
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("enablesRegionalDistribution")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("supportsHubSpoke")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("addsHandlingSorting")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("potentialMisSorting")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Warehouse KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-primary" />
          {ct("warehousePerformanceMetrics")}
        </h2>

        <DataTable
          headers={[ct("kpi"), ct("definition"), ct("target"), ct("whyItMatters")]}
          rows={[
            [ct("dockToStockTime"), "Time from arrival to storage location", "<2 hours", "Receiving efficiency"],
            [ct("orderAccuracy"), "Orders picked correctly", ">99.5%", "Customer satisfaction"],
            [ct("onTimeDispatch"), "Orders shipped on schedule", ">98%", "Transport coordination"],
            [ct("inventoryAccuracy"), "Physical vs system count", ">99%", "Stock reliability"],
            [ct("spaceUtilization"), "Used space / Available space", "85-90%", "Cost efficiency"],
            [ct("dockDoorUtilization"), "Time doors in use / Available time", ">75%", "Throughput capacity"],
          ]}
        />
      </div>

      {/* Coordination Tips */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <MapPin className="w-6 h-6 text-primary" />
          {ct("coordinatingWithWarehouses")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">{ct("beforeArrival")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("bookTimeSlot")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("provideCargoDetails")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("shareDeliveryReference")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("confirmSpecialRequirements")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{ct("duringOperations")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("driverArrivesOnTime")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("reportDelays")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("documentDiscrepancies")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("collectSignedPod")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg mt-6">
          <h4 className="font-semibold flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4" />
            {ct("commonIssuesAtWarehouses")}
          </h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>{ct("missedTimeSlots")}:</strong> {ct("missedTimeSlotsDesc")}</li>
            <li>• <strong>{ct("quantityDiscrepancies")}:</strong> {ct("quantityDiscrepanciesDesc")}</li>
            <li>• <strong>{ct("wrongUnloadingPoint")}:</strong> {ct("wrongUnloadingPointDesc")}</li>
            <li>• <strong>{ct("damagedGoods")}:</strong> {ct("damagedGoodsDesc")}</li>
          </ul>
        </div>
      </div>

      {/* Best Practices & Common Mistakes */}
      <section>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-success/10 border border-success/30 rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-success">
              <CheckCircle2 className="w-5 h-5" />
              {ct('bestPracticesTitle')}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct('bestPractice1')}</li>
              <li>• {ct('bestPractice2')}</li>
              <li>• {ct('bestPractice3')}</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-destructive">
              <AlertTriangle className="w-5 h-5" />
              {ct('commonMistakesTitle')}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct('commonMistake1')}</li>
              <li>• {ct('commonMistake2')}</li>
              <li>• {ct('commonMistake3')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          {ct('caseStudyTitle')}
        </h2>
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 space-y-4">
          <p className="text-muted-foreground">{ct('caseStudyIntro')}</p>
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
            <h4 className="font-semibold text-destructive mb-2">{ct('labelProblem')}</h4>
            <p className="text-sm text-muted-foreground">{ct('caseStudyProblem')}</p>
          </div>
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
            <h4 className="font-semibold text-primary mb-2">{ct('labelSolution')}</h4>
            <p className="text-sm text-muted-foreground">{ct('caseStudySolution')}</p>
          </div>
          <div className="bg-success/10 border border-success/30 rounded-lg p-4">
            <h4 className="font-semibold text-success mb-2">{ct('labelResult')}</h4>
            <p className="text-sm text-muted-foreground">{ct('caseStudyResult')}</p>
          </div>
          <div className="bg-warning/10 border border-warning/30 rounded-lg p-4">
            <h4 className="font-semibold text-warning mb-2">{ct('labelLesson')}</h4>
            <p className="text-sm text-muted-foreground">{ct('caseStudyLesson')}</p>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Book className="w-6 h-6 text-primary" />
          {ct('glossaryTitle')}
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div key={num} className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
              <dt className="font-semibold text-primary mb-1">
                {ct(`glossaryTerm${num}`)}
              </dt>
              <dd className="text-sm text-muted-foreground">
                {ct(`glossaryDef${num}`)}
              </dd>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="warehouse" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="warehouse" />
    </div>
  );
}
