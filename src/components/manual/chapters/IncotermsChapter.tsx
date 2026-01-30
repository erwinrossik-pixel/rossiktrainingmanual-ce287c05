import { useState } from "react";
import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { FileText, Ship, Truck, Plane, Package, AlertTriangle, CheckCircle2, ArrowRight, Scale, Euro, MapPin, Target, Lightbulb, Zap, Calculator, Play, RefreshCw } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import incotermsChartImg from "@/assets/chapters/incoterms-chart.jpg";

// Interactive Risk/Cost Simulator Component
function IncotermsSimulator({ ct }: { ct: (key: string) => string }) {
  const { language } = useLanguage();
  const [selectedIncoterm, setSelectedIncoterm] = useState<string | null>(null);
  const [scenario, setScenario] = useState({
    productValue: 50000,
    transportCost: 2500,
    insuranceCost: 250,
    customsDuties: 3500,
    unloadingCost: 150
  });
  const [showResults, setShowResults] = useState(false);

  const incoterms = [
    { code: 'EXW', sellerCost: 0, buyerCost: 100, riskTransfer: 0 },
    { code: 'FCA', sellerCost: 10, buyerCost: 90, riskTransfer: 15 },
    { code: 'CPT', sellerCost: 45, buyerCost: 55, riskTransfer: 15 },
    { code: 'CIP', sellerCost: 50, buyerCost: 50, riskTransfer: 15 },
    { code: 'DAP', sellerCost: 85, buyerCost: 15, riskTransfer: 90 },
    { code: 'DPU', sellerCost: 90, buyerCost: 10, riskTransfer: 95 },
    { code: 'DDP', sellerCost: 100, buyerCost: 0, riskTransfer: 100 },
  ];

  const calculateCosts = (incoterm: string) => {
    const total = scenario.transportCost + scenario.insuranceCost + scenario.customsDuties + scenario.unloadingCost;
    const term = incoterms.find(t => t.code === incoterm);
    if (!term) return { seller: 0, buyer: total };
    
    return {
      seller: Math.round(total * (term.sellerCost / 100)),
      buyer: Math.round(total * (term.buyerCost / 100))
    };
  };

  const labels = {
    ro: {
      title: "Simulator Interactiv Risc/Cost",
      subtitle: "Selectează un Incoterm pentru a vedea distribuția costurilor și riscurilor",
      selectIncoterm: "Selectează Incoterm",
      calculate: "Calculează",
      reset: "Resetează",
      sellerPays: "Vânzătorul plătește",
      buyerPays: "Cumpărătorul plătește",
      riskTransferPoint: "Punct transfer risc",
      totalLogisticsCost: "Cost total logistică",
      costBreakdown: "Defalcare costuri",
      transport: "Transport",
      insurance: "Asigurare",
      customs: "Vamă",
      unloading: "Descărcare"
    },
    de: {
      title: "Interaktiver Risiko/Kosten-Simulator",
      subtitle: "Wählen Sie einen Incoterm, um die Kosten- und Risikoverteilung zu sehen",
      selectIncoterm: "Incoterm auswählen",
      calculate: "Berechnen",
      reset: "Zurücksetzen",
      sellerPays: "Verkäufer zahlt",
      buyerPays: "Käufer zahlt",
      riskTransferPoint: "Risikotransferpunkt",
      totalLogisticsCost: "Gesamtlogistikkosten",
      costBreakdown: "Kostenaufschlüsselung",
      transport: "Transport",
      insurance: "Versicherung",
      customs: "Zoll",
      unloading: "Entladung"
    },
    en: {
      title: "Interactive Risk/Cost Simulator",
      subtitle: "Select an Incoterm to see cost and risk distribution",
      selectIncoterm: "Select Incoterm",
      calculate: "Calculate",
      reset: "Reset",
      sellerPays: "Seller pays",
      buyerPays: "Buyer pays",
      riskTransferPoint: "Risk transfer point",
      totalLogisticsCost: "Total logistics cost",
      costBreakdown: "Cost breakdown",
      transport: "Transport",
      insurance: "Insurance",
      customs: "Customs",
      unloading: "Unloading"
    }
  };

  const t = labels[language as keyof typeof labels] || labels.ro;
  const costs = selectedIncoterm ? calculateCosts(selectedIncoterm) : null;
  const selectedTermData = incoterms.find(term => term.code === selectedIncoterm);

  return (
    <div className="bg-gradient-to-br from-purple-500/5 to-indigo-500/10 border-2 border-purple-200 dark:border-purple-800 rounded-xl p-6">
      <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
        <Calculator className="w-6 h-6 text-purple-600" />
        {t.title}
      </h3>
      <p className="text-muted-foreground mb-6">{t.subtitle}</p>

      {/* Incoterm Selection */}
      <div className="flex flex-wrap gap-2 mb-6">
        {incoterms.map(term => (
          <button
            key={term.code}
            onClick={() => { setSelectedIncoterm(term.code); setShowResults(true); }}
            className={`px-4 py-2 rounded-lg font-mono font-bold transition-all ${
              selectedIncoterm === term.code
                ? 'bg-purple-600 text-white shadow-lg scale-105'
                : 'bg-muted hover:bg-purple-100 dark:hover:bg-purple-900/30'
            }`}
          >
            {term.code}
          </button>
        ))}
      </div>

      {showResults && selectedIncoterm && costs && selectedTermData && (
        <div className="space-y-4 animate-fade-in">
          {/* Cost Distribution Bar */}
          <div className="bg-background rounded-lg p-4">
            <p className="text-sm font-medium mb-2">{t.costBreakdown} ({selectedIncoterm})</p>
            <div className="flex h-8 rounded-lg overflow-hidden">
              <div 
                className="bg-green-500 flex items-center justify-center text-white text-xs font-medium transition-all"
                style={{ width: `${selectedTermData.sellerCost}%` }}
              >
                {selectedTermData.sellerCost > 10 && `${t.sellerPays}: €${costs.seller}`}
              </div>
              <div 
                className="bg-blue-500 flex items-center justify-center text-white text-xs font-medium transition-all"
                style={{ width: `${selectedTermData.buyerCost}%` }}
              >
                {selectedTermData.buyerCost > 10 && `${t.buyerPays}: €${costs.buyer}`}
              </div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span className="text-green-600">{t.sellerPays}</span>
              <span className="text-blue-600">{t.buyerPays}</span>
            </div>
          </div>

          {/* Risk Transfer Visualization */}
          <div className="bg-background rounded-lg p-4">
            <p className="text-sm font-medium mb-2">{t.riskTransferPoint}</p>
            <div className="relative h-6 bg-muted rounded-lg">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-green-400 rounded-l-lg transition-all"
                style={{ width: `${selectedTermData.riskTransfer}%` }}
              />
              <div 
                className="absolute top-0 h-full w-4 bg-yellow-500 rounded transition-all flex items-center justify-center"
                style={{ left: `calc(${selectedTermData.riskTransfer}% - 8px)` }}
              >
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span>{ct("sellerPremises") || "Factory"}</span>
              <span>{ct("destination") || "Destination"}</span>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-xs text-muted-foreground">{t.sellerPays}</p>
              <p className="text-2xl font-bold text-green-600">€{costs.seller.toLocaleString()}</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-xs text-muted-foreground">{t.buyerPays}</p>
              <p className="text-2xl font-bold text-blue-600">€{costs.buyer.toLocaleString()}</p>
            </div>
          </div>

          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => { setSelectedIncoterm(null); setShowResults(false); }}
            className="w-full"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            {t.reset}
          </Button>
        </div>
      )}
    </div>
  );
}

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

      {/* Incoterms Chart Image */}
      <ChapterImage
        src={incotermsChartImg}
        alt="Incoterms 2020 responsibility chart"
        variant="inline"
        className="mb-6"
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

      {/* Interactive Risk/Cost Simulator - AI Recommendation Implementation */}
      <IncotermsSimulator ct={ct} />

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

      {/* AI Recommendation: Mini Knowledge Check by Category */}
      <div className="info-card bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-2 border-indigo-200 dark:border-indigo-800">
        <h2 className="section-title flex items-center gap-3 text-indigo-800 dark:text-indigo-200">
          <Target className="w-6 h-6" />
          {ct("miniCheckTitle") || "Knowledge Check: Incoterms by Risk Level"}
        </h2>
        <p className="text-muted-foreground mb-6">{ct("miniCheckSubtitle") || "Master Incoterms by understanding the progression of seller responsibility from minimal (E) to maximum (D)."}</p>

        {/* E Terms */}
        <div className="mb-4 p-4 bg-background rounded-xl border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center font-bold">E</div>
            <div>
              <h3 className="font-semibold">{ct("eGroupTitle") || "E Group: Ex Works (Minimum Seller Obligation)"}</h3>
              <p className="text-xs text-muted-foreground">{ct("eGroupDesc") || "Seller makes goods available at their premises. Buyer bears ALL risks."}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="text-sm font-mono font-bold text-destructive">EXW</p>
              <p className="text-xs text-muted-foreground">{ct("exwMiniDesc") || "Ex Works - Buyer does everything from seller's door"}</p>
            </div>
            <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200">
              <p className="text-xs font-medium text-amber-800 dark:text-amber-200 flex items-center gap-1">
                <Lightbulb className="w-3 h-3" /> {ct("hint") || "Hint:"}
              </p>
              <p className="text-xs text-muted-foreground">{ct("exwHint") || "Think 'EX' = 'EXIT from seller's responsibility'. Buyer picks up at factory gate."}</p>
            </div>
          </div>
        </div>

        {/* F Terms */}
        <div className="mb-4 p-4 bg-background rounded-xl border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-warning text-warning-foreground flex items-center justify-center font-bold">F</div>
            <div>
              <h3 className="font-semibold">{ct("fGroupTitle") || "F Group: Free Carrier (Seller Handles Export)"}</h3>
              <p className="text-xs text-muted-foreground">{ct("fGroupDesc") || "Seller delivers to carrier, handles export. Buyer pays main carriage."}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <div className="p-2 bg-muted/50 rounded-lg">
                <span className="text-sm font-mono font-bold text-warning">FCA</span> - Free Carrier
              </div>
              <div className="p-2 bg-muted/50 rounded-lg">
                <span className="text-sm font-mono font-bold text-warning">FAS</span> - Free Alongside Ship
              </div>
              <div className="p-2 bg-muted/50 rounded-lg">
                <span className="text-sm font-mono font-bold text-warning">FOB</span> - Free On Board
              </div>
            </div>
            <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200">
              <p className="text-xs font-medium text-amber-800 dark:text-amber-200 flex items-center gap-1">
                <Lightbulb className="w-3 h-3" /> {ct("hint") || "Hint:"}
              </p>
              <p className="text-xs text-muted-foreground">{ct("fGroupHint") || "F = 'Free to...' - Seller is FREE of responsibility after handing to carrier. Use FCA for road freight (most recommended)!"}</p>
            </div>
          </div>
        </div>

        {/* C Terms */}
        <div className="mb-4 p-4 bg-background rounded-xl border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-info text-info-foreground flex items-center justify-center font-bold">C</div>
            <div>
              <h3 className="font-semibold">{ct("cGroupTitle") || "C Group: Cost/Carriage (Seller Pays Transport, Buyer Bears Risk)"}</h3>
              <p className="text-xs text-muted-foreground">{ct("cGroupDesc") || "Seller pays for carriage but risk transfers when goods handed to first carrier."}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <div className="p-2 bg-muted/50 rounded-lg">
                <span className="text-sm font-mono font-bold text-info">CPT</span> - Carriage Paid To
              </div>
              <div className="p-2 bg-muted/50 rounded-lg">
                <span className="text-sm font-mono font-bold text-info">CIP</span> - Carriage & Insurance Paid
              </div>
              <div className="p-2 bg-muted/50 rounded-lg">
                <span className="text-sm font-mono font-bold text-info">CFR/CIF</span> - Cost & Freight (sea only)
              </div>
            </div>
            <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200">
              <p className="text-xs font-medium text-amber-800 dark:text-amber-200 flex items-center gap-1">
                <Lightbulb className="w-3 h-3" /> {ct("hint") || "Hint:"}
              </p>
              <p className="text-xs text-muted-foreground">{ct("cGroupHint") || "C = 'Cost paid by seller'. Key trap: Cost ≠ Risk! Seller PAYS for transport but RISK transfers early. Watch out for this in questions!"}</p>
            </div>
          </div>
        </div>

        {/* D Terms */}
        <div className="mb-4 p-4 bg-background rounded-xl border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-success text-success-foreground flex items-center justify-center font-bold">D</div>
            <div>
              <h3 className="font-semibold">{ct("dGroupTitle") || "D Group: Delivered (Maximum Seller Obligation)"}</h3>
              <p className="text-xs text-muted-foreground">{ct("dGroupDesc") || "Seller bears all costs AND risks until destination. Best protection for buyer."}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <div className="p-2 bg-muted/50 rounded-lg">
                <span className="text-sm font-mono font-bold text-success">DAP</span> - Delivered At Place
              </div>
              <div className="p-2 bg-muted/50 rounded-lg">
                <span className="text-sm font-mono font-bold text-success">DPU</span> - Delivered Place Unloaded
              </div>
              <div className="p-2 bg-muted/50 rounded-lg">
                <span className="text-sm font-mono font-bold text-success">DDP</span> - Delivered Duty Paid
              </div>
            </div>
            <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200">
              <p className="text-xs font-medium text-amber-800 dark:text-amber-200 flex items-center gap-1">
                <Lightbulb className="w-3 h-3" /> {ct("hint") || "Hint:"}
              </p>
              <p className="text-xs text-muted-foreground">{ct("dGroupHint") || "D = 'Delivered'. DAP (most common for road) = seller delivers, buyer unloads. DDP = seller does EVERYTHING including import duties."}</p>
            </div>
          </div>
        </div>

        {/* Quick Memory Aid */}
        <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
          <h4 className="font-semibold flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-primary" />
            {ct("memoryAid") || "Memory Aid: The Seller Responsibility Ladder"}
          </h4>
          <div className="flex items-center justify-between text-sm">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-1 font-bold">E</div>
              <p className="text-xs">{ct("minimum") || "Minimum"}</p>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-destructive via-warning via-info to-success mx-2 rounded" />
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center mx-auto mb-1 font-bold">F</div>
              <p className="text-xs">{ct("exportOnly") || "+Export"}</p>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-warning via-info to-success mx-2 rounded" />
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-info/20 flex items-center justify-center mx-auto mb-1 font-bold">C</div>
              <p className="text-xs">{ct("paysCarriage") || "+Carriage"}</p>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-info to-success mx-2 rounded" />
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-1 font-bold">D</div>
              <p className="text-xs">{ct("maximum") || "Maximum"}</p>
            </div>
          </div>
          <p className="text-xs text-center text-muted-foreground mt-3">{ct("ladderExplanation") || "Remember: As you move E→F→C→D, seller responsibility INCREASES"}</p>
        </div>
      </div>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="incoterms" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="incoterms" />
    </div>
  );
}
