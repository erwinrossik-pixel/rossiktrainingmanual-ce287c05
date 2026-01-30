import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { PriceCalculator } from "../PriceCalculator";
import { quizzes } from "@/data/quizData";
import { Calculator, Euro, Route, TrendingUp, Calendar, AlertTriangle, Percent, MapPin, Fuel, Clock, Truck, ArrowRight, CheckCircle2, XCircle, Info, Zap, Shield } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import pricingImg from "@/assets/chapters/pricing-calculation.jpg";

export function PricingChapter() {
  const { ct } = useChapterTranslation("pricing");

  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Calculator}
        variant="pricing"
      />

      {/* Pricing Calculation Image - Right aligned */}
      <ChapterImage
        src={pricingImg}
        alt="Freight rate calculation spreadsheet"
        caption={ct('pricingCalculationCaption') || "Calculația tarifelor de transport - analiză costuri"}
        variant="right"
        className="mb-6"
      />

      {/* Main Formula - Enhanced */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-rossik-dark p-8 text-primary-foreground">
        <h2 className="text-2xl font-bold mb-6 font-serif">{ct("costCalculationFormula")}</h2>
        
        <div className="space-y-4">
          <div className="bg-primary-foreground/10 p-4 rounded-lg">
            <p className="text-sm text-primary-foreground/70 mb-2">{ct("basicFormula")}</p>
            <div className="font-mono text-lg">
              {ct("totalCostFormula")}
            </div>
          </div>
          
          <div className="bg-primary-foreground/10 p-4 rounded-lg">
            <p className="text-sm text-primary-foreground/70 mb-2">{ct("finalPriceCalculation")}</p>
            <div className="font-mono text-lg">
              {ct("offerPriceFormula")}
            </div>
          </div>

          <div className="bg-primary-foreground/20 p-4 rounded-lg border border-primary-foreground/30">
            <p className="text-sm text-primary-foreground/70 mb-2">📊 {ct("extendedFormula")}</p>
            <div className="font-mono text-sm">
              {ct("professionalFormula")}
            </div>
          </div>
        </div>
        
        <Calculator className="absolute bottom-4 right-4 w-24 h-24 text-primary-foreground/10" />
      </div>

      {/* Key Rates - Enhanced */}
      <div className="grid md:grid-cols-4 gap-4">
        <InfoCard title={ct("baseRate")} icon={Euro}>
          <p className="text-3xl font-bold text-primary">€1.10-1.25</p>
          <p className="text-xs text-muted-foreground mt-1">{ct("perKm")}</p>
          <p className="text-xs text-muted-foreground">{ct("variesByFuel")}</p>
        </InfoCard>
        
        <InfoCard title={ct("targetMargin")} icon={TrendingUp}>
          <p className="text-3xl font-bold text-primary">8–18%</p>
          <p className="text-xs text-muted-foreground mt-1">{ct("standardProfit")}</p>
          <p className="text-xs text-muted-foreground">{ct("peakUpTo")}</p>
        </InfoCard>
        
        <InfoCard title={ct("averageTotalCost")} icon={Truck}>
          <p className="text-3xl font-bold text-primary">€1.35-1.60</p>
          <p className="text-xs text-muted-foreground mt-1">{ct("perKmAllIn")}</p>
          <p className="text-xs text-muted-foreground">{ct("includesTollsAccessories")}</p>
        </InfoCard>

        <InfoCard title={ct("dieselReference")} icon={Fuel}>
          <p className="text-3xl font-bold text-primary">€1.45-1.65</p>
          <p className="text-xs text-muted-foreground mt-1">{ct("perLiter")}</p>
          <p className="text-xs text-muted-foreground">{ct("monitorWeekly")}</p>
        </InfoCard>
      </div>

      {/* Cost Components Breakdown */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Calculator className="w-6 h-6 text-primary" />
          {ct("transportCostComponents")}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              {ct("fixedCosts")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between py-2 border-b border-border">
                <span>{ct("fuelConsumption")}</span>
                <span className="font-medium">€0.42-0.53/km</span>
              </li>
              <li className="flex justify-between py-2 border-b border-border">
                <span>{ct("driverSalary")}</span>
                <span className="font-medium">€0.25-0.35/km</span>
              </li>
              <li className="flex justify-between py-2 border-b border-border">
                <span>{ct("vehicleDepreciation")}</span>
                <span className="font-medium">€0.15-0.20/km</span>
              </li>
              <li className="flex justify-between py-2 border-b border-border">
                <span>{ct("insuranceTaxes")}</span>
                <span className="font-medium">€0.08-0.12/km</span>
              </li>
              <li className="flex justify-between py-2 border-b border-border">
                <span>{ct("maintenanceTires")}</span>
                <span className="font-medium">€0.10-0.15/km</span>
              </li>
              <li className="flex justify-between py-2 bg-muted/50 rounded px-2">
                <span className="font-semibold">{ct("totalOperationalCost")}</span>
                <span className="font-bold text-primary">€1.00-1.35/km</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-warning" />
              {ct("variableCosts")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between py-2 border-b border-border">
                <span>{ct("roadTolls")}</span>
                <span className="font-medium">€0.09-0.55/km</span>
              </li>
              <li className="flex justify-between py-2 border-b border-border">
                <span>{ct("ferry")}</span>
                <span className="font-medium">€200-600</span>
              </li>
              <li className="flex justify-between py-2 border-b border-border">
                <span>{ct("tunnel")}</span>
                <span className="font-medium">€250-400</span>
              </li>
              <li className="flex justify-between py-2 border-b border-border">
                <span>{ct("secureParking")}</span>
                <span className="font-medium">€25-50</span>
              </li>
              <li className="flex justify-between py-2 border-b border-border">
                <span>{ct("waitingTime")}</span>
                <span className="font-medium">€35-50/h</span>
              </li>
              <li className="flex justify-between py-2 bg-warning/10 rounded px-2">
                <span className="font-semibold">{ct("impactOnTotalCost")}</span>
                <span className="font-bold text-warning">+15-40%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Toll Rates by Country - 2026 Enhanced */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Route className="w-6 h-6 text-primary" />
          {ct("tollRatesByCountry")}
        </h2>
        
        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mb-4">
          <p className="text-sm flex items-start gap-2">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>{ct("tollRatesNote")}</span>
          </p>
        </div>

        <DataTable 
          headers={[ct("country"), ct("ratePerKm"), ct("system"), ct("importantNotes")]}
          rows={[
            [`🇩🇪 ${ct("germany")}`, "€0.348", "LKW-Maut", ct("germanyNotes")],
            [`🇦🇹 ${ct("austria")}`, "€0.532", "GO-Maut", ct("austriaNotes")],
            [`🇨🇭 ${ct("switzerland")}`, "€0.55", "LSVA", ct("switzerlandNotes")],
            [`🇭🇺 ${ct("hungary")}`, "€0.425", "HU-GO", ct("hungaryNotes")],
            [`🇮🇹 ${ct("italy")}`, "€0.30", "Telepass", ct("italyNotes")],
            [`🇫🇷 ${ct("france")}`, "€0.28-0.33", "Télépéage", ct("franceNotes")],
            [`🇪🇸 ${ct("spain")}`, "€0.28-0.31", "Vía-T", ct("spainNotes")],
            [`🇨🇿 ${ct("czechia")}`, "€0.26", "MYTO CZ", ct("czechiaNotes")],
            [`🇸🇮 ${ct("slovenia")}`, "€0.24", "DarsGo", ct("sloveniaNotes")],
            [`🇧🇪 ${ct("belgium")}`, "€0.171", "Viapass", ct("belgiumNotes")],
            [`🇳🇱 ${ct("netherlands")}`, "€0.159", "Vrachtwagen", ct("netherlandsNotes")],
            [`🇵🇱 ${ct("poland")}`, "€0.092", "e-TOLL", ct("polandNotes")],
          ]}
        />

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              {ct("mostExpensive")}
            </h4>
            <p className="text-sm">{ct("mostExpensiveDesc")}</p>
          </div>
          
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              {ct("cheapest")}
            </h4>
            <p className="text-sm">{ct("cheapestDesc")}</p>
          </div>

          <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
            <h4 className="font-semibold text-warning mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              {ct("attention2026")}
            </h4>
            <p className="text-sm">{ct("attention2026Desc")}</p>
          </div>
        </div>
      </div>

      {/* Tunnel and Ferry Rates */}
      <div className="info-card">
        <h2 className="section-title">{ct("tunnelFerryRates")}</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">🏔️ {ct("alpineTunnels")}</h3>
            <DataTable
              headers={[ct("tunnelName"), ct("oneWay"), ct("roundTrip")]}
              rows={[
                [ct("montBlanc"), "€280-320", "€420-480"],
                [ct("frejus"), "€270-310", "€400-460"],
                [ct("gotthard"), ct("includedInLsva"), "-"],
                [ct("brenner"), "€9.50", ct("cheapVsFr")],
                [ct("arlberg"), "€11.00", ct("includedInGoMaut")],
                [ct("tauern"), "€13.50", ct("includedInGoMaut")],
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold mb-3">⛴️ {ct("mainFerries")}</h3>
            <DataTable
              headers={[ct("ferryRoute"), ct("duration"), ct("truckRate")]}
              rows={[
                [ct("calaisDover"), "1.5h", "€180-280"],
                [ct("rotterdamHull"), "12h", "€350-500"],
                [ct("kielGothenburg"), "14h", "€400-600"],
                [ct("rostockTrelleborg"), "6h", "€200-350"],
                [ct("livornoBarcelona"), "20h", "€450-700"],
                [ct("patrasAncona"), "16h", "€380-550"],
              ]}
            />
          </div>
        </div>

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mt-4">
          <p className="text-sm">💡 <strong>{ct("ferryTip")}</strong></p>
        </div>
      </div>

      {/* Interactive Price Calculator */}
      <PriceCalculator />

      {/* Extended Route Examples - Redesigned */}
      <div>
        <h2 className="section-title flex items-center gap-3">
          <MapPin className="w-6 h-6 text-primary" />
          {ct("completeRouteExamples")}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Example 1 - München → Paris */}
          <div className="info-card border-l-4 border-l-primary">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <div>
                <h3 className="font-semibold">München → Paris</h3>
                <p className="text-sm text-muted-foreground">~830 km | {ct("countries2")} | {ct("standard")}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>{ct("baseCost")} (830 × €1.15)</span>
                <span className="font-medium">€955</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇩🇪 DE {ct("tollCost")} (150km × €0.348)</span>
                <span>€52</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇫🇷 FR {ct("tollCost")} (680km × €0.30)</span>
                <span>€204</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">{ct("totalCost")}</span>
                <span className="font-bold">€1,211</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-primary/10 rounded">
                <span className="font-semibold">{ct("offerPrice")} (12%)</span>
                <span className="font-bold text-primary">€1,356</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                {ct("costPerKmAllIn")} €1.63 | {ct("profit")} €145
              </div>
            </div>
          </div>

          {/* Example 2 - Vienna → Milano */}
          <div className="info-card border-l-4 border-l-success">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-success text-success-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <div>
                <h3 className="font-semibold">Vienna → Milano</h3>
                <p className="text-sm text-muted-foreground">~810 km | {ct("countries2")} | {ct("viaBrenner")}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>{ct("baseCost")} (810 × €1.15)</span>
                <span className="font-medium">€932</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇦🇹 AT {ct("tollCost")} (70km × €0.532)</span>
                <span>€37</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇮🇹 IT {ct("tollCost")} (740km × €0.30)</span>
                <span>€222</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>Brenner Pass {ct("tollCost")}</span>
                <span>€10</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">{ct("totalCost")}</span>
                <span className="font-bold">€1,201</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-success/10 rounded">
                <span className="font-semibold">{ct("offerPrice")} (15%)</span>
                <span className="font-bold text-success">€1,381</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                {ct("costPerKmAllIn")} €1.70 | {ct("profit")} €180
              </div>
            </div>
          </div>

          {/* Example 3 - Rotterdam → Barcelona */}
          <div className="info-card border-l-4 border-l-warning">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-warning text-warning-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <div>
                <h3 className="font-semibold">Rotterdam → Barcelona</h3>
                <p className="text-sm text-muted-foreground">~1,450 km | {ct("countries4")} | {ct("longHaul")}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>{ct("baseCost")} (1450 × €1.15)</span>
                <span className="font-medium">€1,668</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇳🇱 NL + 🇧🇪 BE {ct("tollCost")} (300km)</span>
                <span>€50</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇫🇷 FR {ct("tollCost")} (850km × €0.30)</span>
                <span>€255</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇪🇸 ES {ct("tollCost")} (300km × €0.29)</span>
                <span>€87</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">{ct("totalCost")}</span>
                <span className="font-bold">€2,060</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-warning/10 rounded">
                <span className="font-semibold">{ct("offerPrice")} (10%)</span>
                <span className="font-bold text-warning">€2,266</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                {ct("costPerKmAllIn")} €1.56 | {ct("profit")} €206 | {ct("duration2Days")}
              </div>
            </div>
          </div>

          {/* Example 4 - Hamburg → Warszawa */}
          <div className="info-card border-l-4 border-l-info">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-info text-info-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <div>
                <h3 className="font-semibold">Hamburg → Warszawa</h3>
                <p className="text-sm text-muted-foreground">~680 km | {ct("countries2")} | {ct("eastWest")}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>{ct("baseCost")} (680 × €1.15)</span>
                <span className="font-medium">€782</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇩🇪 DE {ct("tollCost")} (380km × €0.348)</span>
                <span>€132</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇵🇱 PL {ct("tollCost")} (300km × €0.092)</span>
                <span>€28</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">{ct("totalCost")}</span>
                <span className="font-bold">€942</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-info/10 rounded">
                <span className="font-semibold">{ct("offerPrice")} (14%)</span>
                <span className="font-bold text-info">€1,074</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                {ct("costPerKmAllIn")} €1.58 | {ct("profit")} €132 | {ct("profitableRoute")}
              </div>
            </div>
          </div>

          {/* Example 5 - Praha → Lyon */}
          <div className="info-card border-l-4 border-l-secondary">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">5</span>
              <div>
                <h3 className="font-semibold">Praha → Lyon</h3>
                <p className="text-sm text-muted-foreground">~1,100 km | {ct("countries3")} | {ct("transitDE")}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>{ct("baseCost")} (1100 × €1.15)</span>
                <span className="font-medium">€1,265</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇨🇿 CZ {ct("tollCost")} (100km × €0.26)</span>
                <span>€26</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇩🇪 DE {ct("tollCost")} (400km × €0.348)</span>
                <span>€139</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇫🇷 FR {ct("tollCost")} (600km × €0.30)</span>
                <span>€180</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">{ct("totalCost")}</span>
                <span className="font-bold">€1,610</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-secondary/10 rounded">
                <span className="font-semibold">{ct("offerPrice")} (11%)</span>
                <span className="font-bold">€1,787</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                {ct("costPerKmAllIn")} €1.62 | {ct("profit")} €177
              </div>
            </div>
          </div>

          {/* Example 6 - Budapest → Amsterdam */}
          <div className="info-card border-l-4 border-l-destructive">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-sm font-bold">6</span>
              <div>
                <h3 className="font-semibold">Budapest → Amsterdam</h3>
                <p className="text-sm text-muted-foreground">~1,320 km | {ct("countries4")} | {ct("complex")}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>{ct("baseCost")} (1320 × €1.15)</span>
                <span className="font-medium">€1,518</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇭🇺 HU {ct("tollCost")} (200km × €0.425)</span>
                <span>€85</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇦🇹 AT {ct("tollCost")} (150km × €0.532)</span>
                <span>€80</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇩🇪 DE {ct("tollCost")} (700km × €0.348)</span>
                <span>€244</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇳🇱 NL {ct("tollCost")} (270km × €0.159)</span>
                <span>€43</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">{ct("totalCost")}</span>
                <span className="font-bold">€1,970</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-destructive/10 rounded">
                <span className="font-semibold">{ct("offerPrice")} (13%)</span>
                <span className="font-bold text-destructive">€2,226</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                {ct("costPerKmAllIn")} €1.69 | {ct("profit")} €256 | {ct("attentionATTolls")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Margin Strategy */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Percent className="w-6 h-6 text-primary" />
          {ct("marginStrategies")}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">{ct("marginLevelsByClient")}</h3>
            <DataTable
              headers={[ct("clientType"), ct("margin"), ct("motivation")]}
              rows={[
                [ct("newClientFirstOrder"), "15-20%", ct("testingUnknownRisk")],
                [ct("recurringStandardClient"), "10-15%", ct("stableRelationship")],
                [ct("dedicatedContractFTL"), "8-12%", ct("guaranteedVolume")],
                [ct("spotMarketUrgent"), "15-25%", ct("urgencyPremium")],
                [ct("returnLoad"), "5-10%", ct("betterThanEmpty")],
                [ct("strategicPartnership"), "8-10%", ct("largeVolumeLongTerm")],
              ]}
            />
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">{ct("marginAdjustments")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-border pb-2">
                <span>{ct("weekendHolidayDelivery")}</span>
                <span className="text-success font-medium">+5-10%</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span>{ct("tightWindow")}</span>
                <span className="text-success font-medium">+3-5%</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span>{ct("adrDangerousGoods")}</span>
                <span className="text-success font-medium">+10-15%</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span>{ct("reeferTempControlled")}</span>
                <span className="text-success font-medium">+15-25%</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span>{ct("expressSameDay")}</span>
                <span className="text-success font-medium">+30-50%</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span>{ct("multiDropPerStop")}</span>
                <span className="text-success font-medium">+€75-150</span>
              </li>
              <li className="flex justify-between">
                <span>{ct("peakSeasonNovDec")}</span>
                <span className="text-success font-medium">+15-25%</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">📊 {ct("fullMarginExample")}</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-muted-foreground">{ct("scenario")}</p>
              <div className="font-mono bg-muted/50 p-3 rounded space-y-1">
                <p>{ct("totalCostLabel")} €1,211</p>
                <p>{ct("baseMarginNewClient")} 15%</p>
                <p>{ct("weekendAdjustment")} +7%</p>
                <p className="border-t pt-2 mt-2">{ct("totalMargin")} 22%</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">{ct("finalCalculation")}</p>
              <div className="font-mono bg-success/10 p-3 rounded space-y-1">
                <p>€1,211 × 1.22 = <strong>€1,477</strong></p>
                <p>{ct("profit")} €266</p>
                <p>{ct("profitPerKm")} €0.32</p>
                <p className="text-success font-semibold">✓ {ct("marginHealthy")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seasonal Variations */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Calendar className="w-6 h-6 text-primary" />
          {ct("seasonalVariations")}
        </h2>
        
        <DataTable
          headers={[ct("period"), ct("priceImpact"), ct("reason"), ct("strategy")]}
          rows={[
            [ct("janFeb"), ct("janFebImpact"), ct("janFebReason"), ct("janFebStrategy")],
            [ct("marApr"), ct("baseline"), ct("normalActivity"), ct("standardPricing")],
            [ct("mayJun"), ct("mayJunImpact"), ct("mayJunReason"), ct("mayJunStrategy")],
            [ct("julAug"), ct("julAugImpact"), ct("julAugReason"), ct("julAugStrategy")],
            [ct("sepOct"), ct("sepOctImpact"), ct("sepOctReason"), ct("sepOctStrategy")],
            [ct("nov1_20"), ct("nov1_20Impact"), ct("nov1_20Reason"), ct("nov1_20Strategy")],
            [ct("nov21_30"), ct("nov21_30Impact"), ct("nov21_30Reason"), ct("nov21_30Strategy")],
            [ct("dec1_15"), ct("dec1_15Impact"), ct("dec1_15Reason"), ct("dec1_15Strategy")],
            [ct("dec16_31"), ct("dec16_31Impact"), ct("dec16_31Reason"), ct("dec16_31Strategy")],
          ]}
        />

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              {ct("peakSeasonAlert")}
            </h4>
            <p className="text-sm">{ct("peakSeasonAlertDesc")}</p>
          </div>
          
          <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
            <h4 className="font-semibold text-info mb-2">🌡️ {ct("temperatureImpact")}</h4>
            <p className="text-sm">{ct("temperatureImpactDesc")}</p>
          </div>
          
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">💰 {ct("bestValue")}</h4>
            <p className="text-sm">{ct("bestValueDesc")}</p>
          </div>
        </div>
      </div>

      {/* Regional Patterns */}
      <div className="info-card">
        <h2 className="section-title">{ct("regionalSeasonalPatterns")}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">🇪🇸 🇮🇹 🇬🇷 {ct("spainItalyGreece")}</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>{ct("marchJune")}</strong> {ct("fruitVegExport")}</li>
              <li>• <strong>{ct("augustFactoryClosure")}</strong> {ct("factoryClosures")}</li>
              <li>• <strong>{ct("septemberGrapesWine")}</strong> {ct("grapeWineSurge")}</li>
              <li>• <strong>{ct("octoberOlivesCitrus")}</strong> {ct("olivesCitrus")}</li>
            </ul>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">🇩🇪 🇳🇱 🇧🇪 {ct("germanyNlBe")}</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>{ct("marchAprilEaster")}</strong> {ct("easterRetailPrep")}</li>
              <li>• <strong>{ct("septemberFairs")}</strong> {ct("iaaCommercialFairs")}</li>
              <li>• <strong>{ct("octNovChristmas")}</strong> {ct("christmasGoodsDistrib")}</li>
              <li>• <strong>{ct("decemberRushStop")}</strong> {ct("finalRushThenStop")}</li>
            </ul>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">🇵🇱 🇨🇿 🇭🇺 {ct("polandCzechHungary")}</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>{ct("allYear")}</strong> {ct("competitiveRatesEU")}</li>
              <li>• <strong>{ct("summerAgriExport")}</strong> {ct("agriExportIncrease")}</li>
              <li>• <strong>{ct("q4AutoParts")}</strong> {ct("autoPartsSurge")}</li>
              <li>• <strong>{ct("decLessAffected")}</strong> {ct("lessAffectedShutdown")}</li>
            </ul>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">🇫🇷 🇬🇧 {ct("franceUK")}</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>{ct("mayJuneWine")}</strong> {ct("wineRegionsPeak")}</li>
              <li>• <strong>{ct("augustVeryReduced")}</strong> {ct("veryReducedCapacityFR")}</li>
              <li>• <strong>{ct("novemberBeaujolais")}</strong> {ct("beaujolaisNouveau")}</li>
              <li>• <strong>{ct("ukBrexit")}</strong> {ct("brexitExtraDocs")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Accessorial Charges */}
      <div className="info-card">
        <h2 className="section-title">{ct("accessorialCharges")}</h2>
        <DataTable
          headers={[ct("service"), ct("rate"), ct("whenApplied")]}
          rows={[
            [ct("waitingTimeCharge"), "€40-50/h", ct("after2hFree")],
            [ct("secureParkingCharge"), "€35-75", ct("mandatoryTruckParking")],
            [ct("adrSurcharge"), "€150-400", ct("dangerousGoodsClasses")],
            [ct("tailLiftCharge"), "€35-60", ct("perUseLoadUnload")],
            [ct("weekendDeliveryCharge"), "€150-250", ct("satSunOperations")],
            [ct("expressPriorityCharge"), "+30-50%", ct("sameDayNextDay")],
            [ct("multiDropCharge"), "€75-150", ct("additionalDeliveryPoints")],
            [ct("palletExchangeCharge"), "€12-18", ct("ifNotPrearranged")],
            [ct("specialCMRDoc"), "€20-35", ct("extraDocRequirements")],
            [ct("tempRecording"), "€40-60", ct("mandatoryReeferPrintout")],
            [ct("cleaningAfterChemicals"), "€100-200", ct("trailerCleaningAfterADR")],
            [ct("redeliveryWrongAddress"), "€75-150", ct("repeatDeliveryClientFault")],
          ]}
        />
      </div>

      {/* Fuel Surcharge Guide */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Fuel className="w-6 h-6 text-primary" />
          {ct("fuelSurchargeGuide")}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">{ct("dieselAdjustmentFormula")}</h3>
            <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm mb-4">
              <p>{ct("referencePrice")} €1.50/L</p>
              <p>{ct("averageConsumption")} 30L/100km</p>
              <p className="mt-2 border-t pt-2">
                {ct("surchargeFormula")}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              {ct("example")}<br/>
              {ct("surchargeResult")} <strong>€60</strong>
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">{ct("quickAdjustmentTable")}</h3>
            <DataTable
              headers={[ct("dieselPerL"), ct("adjustment"), ct("action")]}
              rows={[
                ["< €1.40", "-3 to -5%", ct("canReducePrices")],
                ["€1.40-1.55", "0%", ct("standardPrice")],
                ["€1.55-1.70", "+3 to +5%", ct("addFuelSurcharge")],
                ["€1.70-1.85", "+5 to +8%", ct("surchargeMandatory")],
                ["> €1.85", "+8 to +12%", ct("renegotiateContracts")],
              ]}
            />
          </div>
        </div>

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg mt-4">
          <p className="text-sm flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span><strong>{ct("fuelClauseImportant")}</strong></span>
          </p>
        </div>
      </div>

      {/* Pro Tips Enhanced */}
      <div className="highlight-card">
        <h3 className="font-semibold mb-4 text-lg">💡 {ct("pricingProTips")}</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>{ct("proTip1")}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>{ct("proTip2")}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>{ct("proTip3")}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>{ct("proTip4")}</span>
            </li>
          </ul>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>{ct("proTip5")}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>{ct("proTip6")}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>{ct("proTip7")}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>{ct("proTip8")}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Quick Reference Card */}
      <div className="bg-gradient-to-r from-rossik-dark to-primary p-6 rounded-2xl text-primary-foreground">
        <h3 className="font-bold text-xl mb-4">⚡ {ct("quickReference2026")}</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
          <div className="bg-primary-foreground/10 p-3 rounded-lg text-center">
            <p className="text-primary-foreground/70 text-xs">{ct("baseRateLabel")}</p>
            <p className="text-xl font-bold">€1.15/km</p>
          </div>
          <div className="bg-primary-foreground/10 p-3 rounded-lg text-center">
            <p className="text-primary-foreground/70 text-xs">{ct("standardMarginLabel")}</p>
            <p className="text-xl font-bold">12-15%</p>
          </div>
          <div className="bg-primary-foreground/10 p-3 rounded-lg text-center">
            <p className="text-primary-foreground/70 text-xs">{ct("peakSeasonLabel")}</p>
            <p className="text-xl font-bold">+20-30%</p>
          </div>
          <div className="bg-primary-foreground/10 p-3 rounded-lg text-center">
            <p className="text-primary-foreground/70 text-xs">{ct("waitingFeeLabel")}</p>
            <p className="text-xl font-bold">€45/h</p>
          </div>
          <div className="bg-primary-foreground/10 p-3 rounded-lg text-center">
            <p className="text-primary-foreground/70 text-xs">{ct("costAllInLabel")}</p>
            <p className="text-xl font-bold">€1.50-1.70</p>
          </div>
        </div>
      </div>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="pricing" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} questions={quizzes.pricing} chapterId="pricing" />
    </div>
  );
}
