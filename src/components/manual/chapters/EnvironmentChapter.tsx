import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { Leaf, Truck, BarChart3, FileText, Globe, Fuel, TrendingDown, Award } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import { ChapterImage } from "../ChapterImage";
import environmentEmissionsImg from "@/assets/chapters/environment-emissions-check.jpg";

export function EnvironmentChapter() {
  const { ct } = useChapterTranslation("environment");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Leaf}
        variant="environment"
      />

      {/* Euro Emission Standards */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Truck className="w-6 h-6 text-primary" />
          {ct("euroEmissionStandards")}
        </h2>
        <DataTable
          headers={[ct("standard"), ct("introduction"), ct("keyLimits"), ct("impactOnOperations")]}
          rows={[
            [ct("euro5"), ct("euro5Year"), ct("euro5Limits"), ct("euro5Impact")],
            [ct("euro6"), ct("euro6Year"), ct("euro6Limits"), ct("euro6Impact")],
            [ct("euro6d"), ct("euro6dYear"), ct("euro6dLimits"), ct("euro6dImpact")],
            [ct("euro7"), ct("euro7Year"), ct("euro7Limits"), ct("euro7Impact")],
          ]}
        />
        <p className="text-sm text-muted-foreground mt-4">
          {ct("euroClassNote")}
        </p>
      </section>

      {/* CO2 Emissions */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-primary" />
          {ct("co2EmissionsReporting")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct("emissionFactors")} icon={Fuel} variant="info">
            <ul className="space-y-2">
              <li><strong>Diesel:</strong> {ct("dieselFactor")}</li>
              <li><strong>40t truck:</strong> {ct("truck40tFactor")}</li>
              <li><strong>LNG:</strong> {ct("lngReduction")}</li>
              <li><strong>Electric:</strong> {ct("electricZero")}</li>
              <li><strong>HVO/Biodiesel:</strong> {ct("hvoBiodiesel")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("calculationMethod")} icon={BarChart3} variant="highlight">
            <p className="mb-2 text-sm">{ct("basicFormula")}</p>
            <div className="bg-muted p-3 rounded-lg font-mono text-sm mb-2">
              {ct("co2Formula")}
            </div>
            <p className="text-sm text-muted-foreground">
              {ct("perShipment")}
            </p>
          </InfoCard>
        </div>
      </section>

      {/* Green Logistics Initiatives */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Globe className="w-6 h-6 text-primary" />
          {ct("greenLogisticsInitiatives")}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                {ct("certifications")}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>{ct("iso14001")}</li>
                <li>{ct("leanGreen")}</li>
                <li>{ct("smartWay")}</li>
                <li>{ct("sqas")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-success" />
                {ct("reductionStrategies")}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("routeOptimization")}</li>
                <li>• {ct("ecoDrivingTraining")}</li>
                <li>• {ct("higherLoadFactors")}</li>
                <li>• {ct("modalShift")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Leaf className="w-4 h-4 text-success" />
                {ct("alternativeFuels")}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("lngCng")}</li>
                <li>• {ct("hvoRenewable")}</li>
                <li>• {ct("electricUrban")}</li>
                <li>• {ct("hydrogenEmerging")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Low Emission Zones */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Globe className="w-6 h-6 text-primary" />
          {ct("lowEmissionZones")}
        </h2>
        <DataTable
          headers={[ct("cityArea"), ct("requirement"), ct("enforcement")]}
          rows={[
            [ct("germanyUmweltzone"), ct("germanyReq"), ct("germanyEnforce")],
            [ct("londonULEZ"), ct("londonReq"), ct("londonEnforce")],
            [ct("parisCritAir"), ct("parisReq"), ct("parisEnforce")],
            [ct("amsterdam"), ct("amsterdamReq"), ct("amsterdamEnforce")],
            [ct("brusselsLEZ"), ct("brusselsReq"), ct("brusselsEnforce")],
            [ct("milanAreaBC"), ct("milanReq"), ct("milanEnforce")],
          ]}
        />
      </section>

      {/* German Maut CO2 Classes */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Truck className="w-6 h-6 text-primary" />
          {ct("germanMautCO2")}
        </h2>
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6">
          <p className="text-sm text-muted-foreground mb-4">
            {ct("mautNote")}
          </p>
          <DataTable
            headers={[ct("co2Class"), ct("description"), ct("tollImpact")]}
            rows={[
              [ct("class1"), ct("class1Desc"), ct("class1Impact")],
              [ct("class2"), ct("class2Desc"), ct("class2Impact")],
              [ct("class3"), ct("class3Desc"), ct("class3Impact")],
              [ct("class4"), ct("class4Desc"), ct("class4Impact")],
              [ct("class5"), ct("class5Desc"), ct("class5Impact")],
            ]}
          />
        </div>
        
        {/* Emissions Check Image - contextual after CO2 classes */}
        <ChapterImage
          src={environmentEmissionsImg}
          alt="Environmental officer checking truck emission standards"
          variant="float-right"
          className="mt-4"
        />
      </section>

      {/* Customer Requirements */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          {ct("customerSustainabilityReq")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">{ct("commonRequirements")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct("co2ReportingPerShipment")}</li>
              <li>• {ct("euro6MinimumFleet")}</li>
              <li>• {ct("iso14001Certification")}</li>
              <li>• {ct("annualSustainabilityReport")}</li>
              <li>• {ct("emissionReductionTargets")}</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">{ct("howToPrepare")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct("trackFuelConsumption")}</li>
              <li>• {ct("useTMSCO2")}</li>
              <li>• {ct("keepFleetAge")}</li>
              <li>• {ct("documentGreenInitiatives")}</li>
              <li>• {ct("prepareStandardCO2Reports")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Eco-Driving */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Fuel className="w-6 h-6 text-primary" />
          {ct("ecoDrivingPrinciples")}
        </h2>
        <InfoCard title={ct("driverTrainingFuelEfficiency")} icon={TrendingDown} variant="success">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">{ct("keyTechniques")}</h4>
              <ul className="space-y-1 text-sm">
                <li>• {ct("maintainSteadySpeed")}</li>
                <li>• {ct("anticipateTrafficFlow")}</li>
                <li>• {ct("useEngineBraking")}</li>
                <li>• {ct("optimalGearSelection")}</li>
                <li>• {ct("minimizeIdlingTime")}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{ct("expectedResults")}</h4>
              <ul className="space-y-1 text-sm">
                <li>• {ct("fuelReduction5_15")}</li>
                <li>• {ct("reducedMaintenanceCosts")}</li>
                <li>• {ct("lowerAccidentRisk")}</li>
                <li>• {ct("improvedDriverSatisfaction")}</li>
                <li>• {ct("betterCustomerPerception")}</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Future Trends */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <TrendingDown className="w-6 h-6 text-primary" />
          {ct("futureTrends")}
        </h2>
        <div className="bg-muted/30 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">{ct("regulatoryOutlook")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("euGreenDeal")}</li>
                <li>• {ct("zeroEmissionTruckTargets")}</li>
                <li>• {ct("carbonBorderAdjustments")}</li>
                <li>• {ct("expandedEmissionTrading")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct("technologyDevelopment")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("electricTrucksRange")}</li>
                <li>• {ct("hydrogenFuelCells")}</li>
                <li>• {ct("megawattCharging")}</li>
                <li>• {ct("autonomousPlatooning")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="environment" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="environment" />
    </div>
  );
}
