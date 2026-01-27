import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { FileText, Ship, Truck, Plane, Package, AlertTriangle, CheckCircle2, ArrowRight, Scale, Euro, MapPin } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function IncotermsChapter() {
  const { ct } = useChapterTranslation("incoterms");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={FileText}
        variant="incoterms"
      />

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          {ct("whatAreIncoterms")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("incotermsDescription")}
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Package className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("deliveryPoint")}</p>
            <p className="text-xs text-muted-foreground">{ct("whereGoodsDelivered")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-2" />
            <p className="font-medium">{ct("riskTransfer")}</p>
            <p className="text-xs text-muted-foreground">{ct("whenRiskPasses")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Euro className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="font-medium">{ct("costAllocation")}</p>
            <p className="text-xs text-muted-foreground">{ct("whoPaysWhat")}</p>
          </div>
        </div>
      </div>

      {/* Incoterms Categories */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Scale className="w-6 h-6 text-primary" />
          {ct("incotermsCategories")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
            <h3 className="font-semibold text-info mb-2 flex items-center gap-2">
              <Truck className="w-4 h-4" />
              {ct("anyModeOfTransport")}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">{ct("anyModeDescription")}</p>
            <ul className="text-sm space-y-1">
              <li>• {ct("exw")}</li>
              <li>• {ct("fca")}</li>
              <li>• {ct("cpt")}</li>
              <li>• {ct("cip")}</li>
              <li>• {ct("dap")}</li>
              <li>• {ct("dpu")}</li>
              <li>• {ct("ddp")}</li>
            </ul>
          </div>
          <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg">
            <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <Ship className="w-4 h-4" />
              {ct("seaInlandWaterway")}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">{ct("seaOnlyDescription")}</p>
            <ul className="text-sm space-y-1">
              <li>• {ct("fas")}</li>
              <li>• {ct("fob")}</li>
              <li>• {ct("cfr")}</li>
              <li>• {ct("cif")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Most Common for Road Freight */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Truck className="w-6 h-6 text-primary" />
          {ct("keyIncotermsRoadFreight")}
        </h2>

        <div className="space-y-6">
          {/* EXW */}
          <div className="border-l-4 border-l-destructive p-4 bg-destructive/5 rounded-r-lg">
            <h3 className="font-bold text-lg flex items-center gap-2">
              {ct("exwExWorks")}
              <span className="text-xs bg-destructive/20 text-destructive px-2 py-0.5 rounded">{ct("minimumSellerObligation")}</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-3">{ct("exwDescription")}</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-success mb-1">{ct("sellerResponsibilities")}</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• {ct("makeGoodsAvailable")}</li>
                  <li>• {ct("provideCommercialInvoice")}</li>
                  <li>• {ct("packageGoods")}</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-destructive mb-1">{ct("buyerResponsibilities")}</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• {ct("allTransportCosts")}</li>
                  <li>• {ct("loadingAtSeller")}</li>
                  <li>• {ct("exportImportClearance")}</li>
                  <li>• {ct("allRiskFromCollection")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FCA */}
          <div className="border-l-4 border-l-warning p-4 bg-warning/5 rounded-r-lg">
            <h3 className="font-bold text-lg flex items-center gap-2">
              {ct("fcaFreeCarrier")}
              <span className="text-xs bg-warning/20 text-warning px-2 py-0.5 rounded">{ct("mostRecommended")}</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-3">{ct("fcaDescription")}</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-success mb-1">{ct("sellerResponsibilities")}</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• {ct("deliverToCarrier")}</li>
                  <li>• {ct("exportClearance")}</li>
                  <li>• {ct("loadingIfAtSeller")}</li>
                  <li>• {ct("provideTransportDocs")}</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-destructive mb-1">{ct("buyerResponsibilities")}</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• {ct("mainCarriageCosts")}</li>
                  <li>• {ct("importClearanceDuties")}</li>
                  <li>• {ct("riskFromDelivery")}</li>
                  <li>• {ct("unloadingAtDestination")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* DAP */}
          <div className="border-l-4 border-l-info p-4 bg-info/5 rounded-r-lg">
            <h3 className="font-bold text-lg flex items-center gap-2">
              {ct("dapDeliveredAtPlace")}
              <span className="text-xs bg-info/20 text-info px-2 py-0.5 rounded">{ct("veryCommonRoadFreight")}</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-3">{ct("dapDescription")}</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-success mb-1">{ct("sellerResponsibilities")}</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• {ct("allTransportToDestination")}</li>
                  <li>• {ct("exportClearance")}</li>
                  <li>• {ct("riskUntilArrival")}</li>
                  <li>• {ct("transitInsuranceOptional")}</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-destructive mb-1">{ct("buyerResponsibilities")}</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• {ct("importClearanceDuties")}</li>
                  <li>• {ct("unloadingFromVehicle")}</li>
                  <li>• {ct("riskAfterArrival")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* DDP */}
          <div className="border-l-4 border-l-success p-4 bg-success/5 rounded-r-lg">
            <h3 className="font-bold text-lg flex items-center gap-2">
              {ct("ddpDeliveredDutyPaid")}
              <span className="text-xs bg-success/20 text-success px-2 py-0.5 rounded">{ct("maximumSellerObligation")}</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-3">{ct("ddpDescription")}</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-success mb-1">{ct("sellerResponsibilities")}</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• {ct("allTransportCosts")}</li>
                  <li>• {ct("exportAndImportClearance")}</li>
                  <li>• {ct("allDutiesAndTaxes")}</li>
                  <li>• {ct("riskUntilDestination")}</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-destructive mb-1">{ct("buyerResponsibilities")}</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• {ct("unloadingOnly")}</li>
                  <li>• {ct("minimalObligations")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Incoterms Table */}
      <div className="info-card">
        <h2 className="section-title">{ct("allIncotermsQuickReference")}</h2>
        
        <DataTable
          headers={[ct("term"), ct("name"), ct("deliveryPointCol"), ct("riskTransferCol"), ct("whoPaysTransport")]}
          rows={[
            ["EXW", "Ex Works", ct("sellerPremises"), ct("atPickup"), ct("buyer")],
            ["FCA", "Free Carrier", ct("namedPlace"), ct("toCarrier"), ct("buyerMain")],
            ["CPT", "Carriage Paid To", ct("namedDestination"), ct("toFirstCarrier"), ct("sellerMain")],
            ["CIP", "Carriage Insurance Paid", ct("namedDestination"), ct("toFirstCarrier"), ct("sellerPlusInsurance")],
            ["DAP", "Delivered at Place", ct("namedDestination"), ct("atDestination"), ct("seller")],
            ["DPU", "Delivered Place Unloaded", ct("namedDestination"), ct("afterUnloading"), ct("sellerPlusUnloading")],
            ["DDP", "Delivered Duty Paid", ct("namedDestination"), ct("atDestination"), ct("sellerPlusDuties")],
            ["FAS", "Free Alongside Ship", ct("portOfShipment"), ct("alongsideShip"), ct("buyerMain")],
            ["FOB", "Free On Board", ct("portOfShipment"), ct("onBoardShip"), ct("buyerMain")],
            ["CFR", "Cost and Freight", ct("portOfDestination"), ct("onBoardShip"), ct("sellerMain")],
            ["CIF", "Cost Insurance Freight", ct("portOfDestination"), ct("onBoardShip"), ct("sellerPlusInsurance")],
          ]}
        />
      </div>

      {/* Visual Risk Transfer */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <ArrowRight className="w-6 h-6 text-primary" />
          {ct("riskTransferVisualization")}
        </h2>

        <div className="bg-muted/30 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4 text-sm">
            <span className="font-medium">{ct("sellersRisk")}</span>
            <span className="font-medium">{ct("buyersRisk")}</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs font-medium">EXW</span>
              <div className="flex-1 h-6 bg-gradient-to-r from-success to-success rounded-l" style={{width: '5%'}}></div>
              <div className="flex-1 h-6 bg-gradient-to-r from-destructive to-destructive rounded-r" style={{width: '95%'}}></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs font-medium">FCA</span>
              <div className="flex-1 h-6 bg-success rounded-l" style={{width: '15%'}}></div>
              <div className="flex-1 h-6 bg-destructive rounded-r" style={{width: '85%'}}></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs font-medium">DAP</span>
              <div className="flex-1 h-6 bg-success rounded-l" style={{width: '85%'}}></div>
              <div className="flex-1 h-6 bg-destructive rounded-r" style={{width: '15%'}}></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs font-medium">DDP</span>
              <div className="flex-1 h-6 bg-success rounded-l" style={{width: '95%'}}></div>
              <div className="flex-1 h-6 bg-destructive rounded-r" style={{width: '5%'}}></div>
            </div>
          </div>

          <div className="flex justify-between mt-4 text-xs text-muted-foreground">
            <span>{ct("sellerPremises")}</span>
            <span>{ct("export")}</span>
            <span>{ct("mainCarriage")}</span>
            <span>{ct("import")}</span>
            <span>{ct("destination")}</span>
          </div>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-warning" />
          {ct("commonMistakes")}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">{ct("mistakesToAvoid")}</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{ct("usingFobCifRoad")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{ct("notSpecifyingPlace")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{ct("confusingCostRisk")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{ct("usingOutdatedIncoterms")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{ct("exwBuyerCannotExport")}</span>
              </li>
            </ul>
          </div>
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">{ct("bestPractices")}</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{ct("specifyIncoterms2020")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{ct("includePreciseAddress")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{ct("useFcaDapRoad")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{ct("matchInsuranceRisk")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{ct("clarifyCustomsClearance")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Practical Examples */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <MapPin className="w-6 h-6 text-primary" />
          {ct("practicalExamples")}
        </h2>

        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("example1")}</h4>
            <p className="text-sm text-muted-foreground mb-2">
              {ct("example1Address")}
            </p>
            <p className="text-sm">
              {ct("example1Desc")}
            </p>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("example2")}</h4>
            <p className="text-sm text-muted-foreground mb-2">
              {ct("example2Address")}
            </p>
            <p className="text-sm">
              {ct("example2Desc")}
            </p>
          </div>
        </div>
      </div>

      {/* Incoterms Cheat Sheet - AI Recommendation Implementation */}
      <div className="info-card bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-2 border-amber-200 dark:border-amber-800">
        <h2 className="section-title flex items-center gap-3 text-amber-800 dark:text-amber-200">
          <FileText className="w-6 h-6" />
          {ct("cheatSheetTitle")}
        </h2>
        <p className="text-muted-foreground mb-6">{ct("cheatSheetSubtitle")}</p>

        {/* When to Use Quick Guide */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            {ct("forFreightForwarders")} - {ct("whenToUse")}
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-background/80 p-3 rounded-lg border-l-4 border-l-destructive">
              <span className="font-mono font-bold text-destructive">EXW</span>
              <p className="text-sm text-muted-foreground">{ct("useExwWhen")}</p>
            </div>
            <div className="bg-background/80 p-3 rounded-lg border-l-4 border-l-success">
              <span className="font-mono font-bold text-success">FCA</span>
              <p className="text-sm text-muted-foreground">{ct("useFcaWhen")}</p>
            </div>
            <div className="bg-background/80 p-3 rounded-lg border-l-4 border-l-info">
              <span className="font-mono font-bold text-info">DAP</span>
              <p className="text-sm text-muted-foreground">{ct("useDapWhen")}</p>
            </div>
            <div className="bg-background/80 p-3 rounded-lg border-l-4 border-l-primary">
              <span className="font-mono font-bold text-primary">DDP</span>
              <p className="text-sm text-muted-foreground">{ct("useDdpWhen")}</p>
            </div>
          </div>
        </div>

        {/* Quick Tip */}
        <div className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded-lg mb-6">
          <h4 className="font-semibold flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            {ct("quickTip")}
          </h4>
          <p className="text-sm">{ct("fcaDapTip")}</p>
        </div>

        {/* Responsibility Matrix */}
        <div>
          <h3 className="font-semibold mb-3">{ct("responsibilityMatrix")}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border p-2 text-left font-semibold">{ct("term")}</th>
                  <th className="border p-2 text-center">{ct("loading")}</th>
                  <th className="border p-2 text-center">{ct("exportClearanceShort")}</th>
                  <th className="border p-2 text-center">{ct("mainTransport")}</th>
                  <th className="border p-2 text-center">{ct("importClearanceShort")}</th>
                  <th className="border p-2 text-center">{ct("unloading")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-mono font-bold">EXW</td>
                  <td className="border p-2 text-center bg-blue-100 dark:bg-blue-900/30">{ct("buyerShort")}</td>
                  <td className="border p-2 text-center bg-blue-100 dark:bg-blue-900/30">{ct("buyerShort")}</td>
                  <td className="border p-2 text-center bg-blue-100 dark:bg-blue-900/30">{ct("buyerShort")}</td>
                  <td className="border p-2 text-center bg-blue-100 dark:bg-blue-900/30">{ct("buyerShort")}</td>
                  <td className="border p-2 text-center bg-blue-100 dark:bg-blue-900/30">{ct("buyerShort")}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-mono font-bold">FCA</td>
                  <td className="border p-2 text-center bg-green-100 dark:bg-green-900/30">{ct("sellerShort")}</td>
                  <td className="border p-2 text-center bg-green-100 dark:bg-green-900/30">{ct("sellerShort")}</td>
                  <td className="border p-2 text-center bg-blue-100 dark:bg-blue-900/30">{ct("buyerShort")}</td>
                  <td className="border p-2 text-center bg-blue-100 dark:bg-blue-900/30">{ct("buyerShort")}</td>
                  <td className="border p-2 text-center bg-blue-100 dark:bg-blue-900/30">{ct("buyerShort")}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-mono font-bold">DAP</td>
                  <td className="border p-2 text-center bg-green-100 dark:bg-green-900/30">{ct("sellerShort")}</td>
                  <td className="border p-2 text-center bg-green-100 dark:bg-green-900/30">{ct("sellerShort")}</td>
                  <td className="border p-2 text-center bg-green-100 dark:bg-green-900/30">{ct("sellerShort")}</td>
                  <td className="border p-2 text-center bg-blue-100 dark:bg-blue-900/30">{ct("buyerShort")}</td>
                  <td className="border p-2 text-center bg-blue-100 dark:bg-blue-900/30">{ct("buyerShort")}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-mono font-bold">DDP</td>
                  <td className="border p-2 text-center bg-green-100 dark:bg-green-900/30">{ct("sellerShort")}</td>
                  <td className="border p-2 text-center bg-green-100 dark:bg-green-900/30">{ct("sellerShort")}</td>
                  <td className="border p-2 text-center bg-green-100 dark:bg-green-900/30">{ct("sellerShort")}</td>
                  <td className="border p-2 text-center bg-green-100 dark:bg-green-900/30">{ct("sellerShort")}</td>
                  <td className="border p-2 text-center bg-blue-100 dark:bg-blue-900/30">{ct("buyerShort")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex gap-4 mt-3 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 bg-green-100 dark:bg-green-900/30 border rounded"></span>
              {ct("sellerLegend")}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-100 dark:bg-blue-900/30 border rounded"></span>
              {ct("buyerLegend")}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-3 italic">{ct("riskReminder")}</p>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["incoterms"] && (
        <Quiz
          title={ct("quizTitle")}
          questions={quizzes["incoterms"]}
          chapterId="incoterms"
          questionsPerRound={10}
        />
      )}
    </div>
  );
}
