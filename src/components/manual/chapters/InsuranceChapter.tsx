import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { Shield, FileText, Euro, AlertTriangle, CheckCircle, Truck, Package, Scale } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import insuranceClaimImg from "@/assets/chapters/insurance-claim-document.jpg";

export function InsuranceChapter() {
  const { ct } = useChapterTranslation("insurance");

  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Shield}
        variant="insurance"
      />


      {/* Insurance Types Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          {ct("typesOfTransportInsurance")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct("cmrLiabilityInsurance")} icon={Truck} variant="info">
            <p className="mb-3 font-semibold text-foreground">{ct("mandatoryForCarriers")}</p>
            <ul className="space-y-2">
              <li><strong>{ct("whatItCovers")}</strong> {ct("carrierLegalLiability")}</li>
              <li><strong>{ct("limit")}</strong> {ct("sdrPerKg")}</li>
              <li><strong>{ct("whoPays")}</strong> {ct("carrierResponsibility")}</li>
              <li><strong>{ct("gap")}</strong> {ct("doesNotCoverFullValue")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("cargoGoodsInsurance")} icon={Package} variant="success">
            <p className="mb-3 font-semibold text-foreground">{ct("optionalFullValue")}</p>
            <ul className="space-y-2">
              <li><strong>{ct("whatItCovers")}</strong> {ct("fullDeclaredValue")}</li>
              <li><strong>{ct("limit")}</strong> {ct("asPerPolicy")}</li>
              <li><strong>{ct("whoPays")}</strong> {ct("shipperConsigneeOrFf")}</li>
              <li><strong>{ct("benefit")}</strong> {ct("coversAllRisks")}</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* CMR Liability Gap Example */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" />
          {ct("cmrLiabilityGap")}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold mb-4">{ct("exampleElectronicsShipment")}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="text-sm text-muted-foreground mb-1">{ct("cargoDetails")}</h4>
              <p className="text-lg font-semibold">{ct("tenPalletsElectronics")}</p>
              <p className="text-sm">{ct("weight")} 5,000 kg</p>
              <p className="text-sm">{ct("invoiceValue")} <strong className="text-primary">€200,000</strong></p>
            </div>
            <div className="bg-warning/10 border border-warning/30 rounded-lg p-4">
              <h4 className="text-sm text-muted-foreground mb-1">{ct("cmrLiabilityOnly")}</h4>
              <p className="text-lg font-semibold">5,000 kg × €10/kg</p>
              <p className="text-2xl font-bold text-warning">= €50,000</p>
              <p className="text-sm text-destructive mt-2">{ct("gap")} <strong>€150,000</strong> {ct("gapUncovered")}</p>
            </div>
            <div className="bg-success/10 border border-success/30 rounded-lg p-4">
              <h4 className="text-sm text-muted-foreground mb-1">{ct("withCargoInsurance")}</h4>
              <p className="text-lg font-semibold">{ct("fullValueCovered")}</p>
              <p className="text-2xl font-bold text-success">= €200,000</p>
              <p className="text-sm text-success mt-2">{ct("oneHundredPercentProtected")}</p>
            </div>
          </div>
          
          {/* Insurance Claim Image - contextual after liability gap example */}
          <ChapterImage
            src={insuranceClaimImg}
            alt="Insurance claim documentation and processing"
            variant="float-right"
            className="mt-4"
          />
          <div className="mt-4 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
            <p className="text-sm font-medium text-destructive flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              {ct("highValueGoodsWarning")}
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Coverage Comparison */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Scale className="w-6 h-6 text-primary" />
          {ct("coverageComparisonTable")}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">{ct("risk")}</th>
                <th className="p-3 text-center border border-border">{ct("cmrLiability")}</th>
                <th className="p-3 text-center border border-border">{ct("cargoInsurance")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border">{ct("accidentDamage")}</td>
                <td className="p-3 border border-border text-center">✅ {ct("limited")}</td>
                <td className="p-3 border border-border text-center">✅ {ct("full")}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border">{ct("theft")}</td>
                <td className="p-3 border border-border text-center">✅ {ct("limited")}</td>
                <td className="p-3 border border-border text-center">✅ {ct("full")}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">{ct("fire")}</td>
                <td className="p-3 border border-border text-center">✅ {ct("limited")}</td>
                <td className="p-3 border border-border text-center">✅ {ct("full")}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border">{ct("waterDamage")}</td>
                <td className="p-3 border border-border text-center">✅ {ct("limited")}</td>
                <td className="p-3 border border-border text-center">✅ {ct("full")}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">{ct("naturalDisaster")}</td>
                <td className="p-3 border border-border text-center text-destructive">❌ {ct("no")}</td>
                <td className="p-3 border border-border text-center">✅ {ct("yes")}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border">{ct("inherentVice")}</td>
                <td className="p-3 border border-border text-center text-destructive">❌ {ct("no")}</td>
                <td className="p-3 border border-border text-center">⚠️ {ct("depends")}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">{ct("improperPacking")}</td>
                <td className="p-3 border border-border text-center text-destructive">❌ {ct("no")}</td>
                <td className="p-3 border border-border text-center text-destructive">❌ {ct("no")}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border">{ct("fullValueCoverageRow")}</td>
                <td className="p-3 border border-border text-center text-destructive">❌ {ct("no")} (8.33 SDR/kg)</td>
                <td className="p-3 border border-border text-center text-success">✅ {ct("yes")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* When to Recommend Insurance */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-primary" />
          {ct("whenToRecommendInsurance")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct("highValueCargo")} icon={Euro} variant="warning">
            <p className="mb-2">{ct("alwaysRecommendWhen")}</p>
            <ul className="space-y-1">
              <li>• {ct("valueExceeds")}</li>
              <li>• {ct("electronicsPharmaceuticals")}</li>
              <li>• {ct("newMachineryEquipment")}</li>
              <li>• {ct("artAntiquesCollectibles")}</li>
              <li>• {ct("totalShipmentValue")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("highRiskRoutesConditions")} icon={AlertTriangle} variant="warning">
            <p className="mb-2">{ct("extraCautionRequired")}</p>
            <ul className="space-y-1">
              <li>• {ct("routesHighTheftAreas")}</li>
              <li>• {ct("temperatureSensitiveGoods")}</li>
              <li>• {ct("crossBorderMovements")}</li>
              <li>• {ct("seasonalWeatherRisks")}</li>
              <li>• {ct("longDistanceShipments")}</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Insurance Cost Guide */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Euro className="w-6 h-6 text-primary" />
          {ct("typicalInsuranceCosts")}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <h3 className="font-semibold mb-2">{ct("standardGoods")}</h3>
              <p className="text-3xl font-bold text-primary">0.08-0.15%</p>
              <p className="text-sm text-muted-foreground mt-2">{ct("ofDeclaredValue")}</p>
              <p className="text-xs text-muted-foreground">e.g., €200,000 = €160-300</p>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <h3 className="font-semibold mb-2">{ct("highValueGoods")}</h3>
              <p className="text-3xl font-bold text-warning">0.15-0.30%</p>
              <p className="text-sm text-muted-foreground mt-2">{ct("ofDeclaredValue")}</p>
              <p className="text-xs text-muted-foreground">{ct("electronicsPharma")}</p>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <h3 className="font-semibold mb-2">{ct("hazardousSpecial")}</h3>
              <p className="text-3xl font-bold text-destructive">0.30-0.50%+</p>
              <p className="text-sm text-muted-foreground mt-2">{ct("ofDeclaredValue")}</p>
              <p className="text-xs text-muted-foreground">{ct("adrTemperatureControlled")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents for Insurance */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          {ct("documentsForInsuranceClaims")}
        </h2>
        <div className="bg-muted/30 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { doc: ct("originalCommercialInvoice"), required: true },
              { doc: ct("packingListWithWeights"), required: true },
              { doc: ct("cmrBillOfLading"), required: true },
              { doc: ct("insuranceCertificatePolicy"), required: true },
              { doc: ct("claimNotificationLetter"), required: true },
              { doc: ct("photosOfDamage"), required: true },
              { doc: ct("surveyReport"), required: false },
              { doc: ct("policeReportIfTheft"), required: false },
              { doc: ct("repairQuotes"), required: false },
              { doc: ct("proofOfValue"), required: false },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <CheckCircle className={`w-5 h-5 ${item.required ? 'text-destructive' : 'text-success'}`} />
                <span className="text-sm">{item.doc}</span>
                {item.required && <span className="text-xs bg-destructive/10 text-destructive px-2 py-0.5 rounded">{ct("required")}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-primary" />
          {ct("keyTakeaways")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-info/10 border border-info/30 rounded-xl p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-info" />
              {ct("remember")}
            </h3>
            <ul className="text-sm space-y-2">
              <li>• {ct("cmrLiabilityNotFullCargo")}</li>
              <li>• {ct("alwaysCheckCarrierInsurance")}</li>
              <li>• {ct("offerCargoInsurance")}</li>
              <li>• {ct("documentEverything")}</li>
            </ul>
          </div>
          <div className="bg-warning/10 border border-warning/30 rounded-xl p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              {ct("commonMistakes")}
            </h3>
            <ul className="text-sm space-y-2">
              <li>• {ct("assumingCmrCoversFullValue")}</li>
              <li>• {ct("notCheckingCarrierInsurance")}</li>
              <li>• {ct("missingClaimDeadlines")}</li>
              <li>• {ct("poorDocumentation")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="insurance" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="insurance" />
    </div>
  );
}