import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { DataTable } from "../DataTable";
import { Checklist } from "../Checklist";
import { ProcessMap } from "../FlowDiagram";
import { 
  Shield, FileText, Euro, AlertTriangle, CheckCircle, Truck, Package, Scale,
  Clock, Phone, Camera, Book, Lightbulb, XCircle, Building2
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import insuranceClaimImg from "@/assets/chapters/insurance-claim-document.jpg";
import insuranceDamageImg from "@/assets/chapters/insurance-damage-inspection.jpg";

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
        <h2 className="section-title flex items-center gap-2">
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

      {/* Insurance Types Detailed Table */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          Tipuri Complete de Asigurări în Transport
        </h2>
        <DataTable
          headers={["Tip Asigurare", "Cine Plătește", "Acoperire", "Cost Anual"]}
          rows={[
            ["CMR Liability", "Transportator", "8.33 SDR/kg (~€10/kg)", "€1.500-5.000"],
            ["Cargo/Goods", "Expeditor/FF", "Valoare totală marfă", "0.08-0.50%"],
            ["RCA Camion", "Transportator", "Daune terți", "€2.000-6.000"],
            ["CASCO Camion", "Transportator", "Vehicul propriu", "€3.000-10.000"],
            ["Răspundere FF", "Freight Forwarder", "Erori profesionale", "€2.000-8.000"],
            ["ADR Special", "Transportator ADR", "Marfă periculoasă", "+30-50% la CMR"],
          ]}
        />
      </section>

      {/* CMR Liability Gap Example */}
      <section>
        <h2 className="section-title flex items-center gap-2">
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

      {/* Claims Process */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <Clock className="w-6 h-6 text-primary" />
          Procesul de Despăgubire (Claims)
        </h2>
        <ProcessMap
          title="Pași pentru Deschidere Dosar Daună"
          phases={[
            { name: "Constatare", color: "warning", steps: ["Verifică marfa la descărcare", "Fotografiază daunele", "Notează pe CMR rezervele", "Nu semna fără mențiuni"] },
            { name: "Notificare", color: "info", steps: ["Anunță transportatorul în 7 zile", "Informează asigurătorul", "Trimite notificare scrisă", "Păstrează dovezi"] },
            { name: "Documentare", color: "primary", steps: ["Colectează facturi", "Obține raport expertiză", "Pregătește calculul daunei", "Completează formularul"] },
            { name: "Despăgubire", color: "success", steps: ["Depune dosarul complet", "Negociază valoarea", "Încasează despăgubirea", "Arhivează documentele"] }
          ]}
        />
      </section>

      {/* Coverage Comparison Table */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <Scale className="w-6 h-6 text-primary" />
          {ct("coverageComparisonTable")}
        </h2>
        <DataTable
          headers={[ct("risk"), ct("cmrLiability"), ct("cargoInsurance")]}
          rows={[
            [ct("accidentDamage"), "✅ Limitat (8.33 SDR/kg)", "✅ Valoare totală"],
            [ct("theft"), "✅ Limitat", "✅ Valoare totală"],
            [ct("fire"), "✅ Limitat", "✅ Valoare totală"],
            [ct("waterDamage"), "✅ Limitat", "✅ Valoare totală"],
            [ct("naturalDisaster"), "❌ Exclus", "✅ Acoperit"],
            ["Întârziere livrare", "❌ Exclus", "⚠️ Opțional"],
            [ct("inherentVice"), "❌ Exclus", "⚠️ Depinde de poliță"],
            [ct("improperPacking"), "❌ Exclus", "❌ Exclus"],
            ["Marfă ADR", "⚠️ Necesită rider", "✅ Cu primă extra"],
          ]}
        />
      </section>

      {/* Case Study */}
      <section>
        <div className="bg-gradient-to-br from-info/10 to-primary/10 border border-info/30 rounded-xl p-6">
          <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-info" />
            📋 Studiu de Caz: Furt Marfă pe A7 Franța
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Situația:</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Transport electronice RO→FR, valoare €180.000, greutate 4.200 kg.
                Camionul oprit noaptea în parcare nesupravegheată. Marfa furată integral.
              </p>
              <h4 className="font-semibold mb-2">Despăgubire CMR:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 4.200 kg × €10/kg = €42.000</li>
                <li>• Pierdere client: €180.000 - €42.000 = <strong className="text-destructive">€138.000</strong></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Dacă Avea Cargo Insurance:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Despăgubire: €180.000 (valoare totală)</li>
                <li>• Cost poliță: ~€270 (0.15%)</li>
                <li>• ROI: 666:1</li>
              </ul>
              <h4 className="font-semibold mb-2 mt-4">Lecții Învățate:</h4>
              <div className="bg-warning/20 rounded-lg p-3">
                <ul className="text-sm space-y-1">
                  <li>• Recomandă ÎNTOTDEAUNA cargo insurance pentru high-value</li>
                  <li>• Evită parcări nesupravegheate</li>
                  <li>• Verifică condițiile de parcare din poliță</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Recommend Insurance */}
      <section>
        <h2 className="section-title flex items-center gap-2">
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

      {/* High Risk Areas Map */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" />
          Zone cu Risc Crescut de Furt
        </h2>
        <DataTable
          headers={["Regiune", "Nivel Risc", "Tip Risc Principal", "Măsuri Recomandate"]}
          rows={[
            ["A7/A9 Franța (Sud)", "🔴 Foarte ridicat", "Furt din mers/parcare", "Parcări securizate, echipaj dublu"],
            ["A1/E45 Italia", "🔴 Ridicat", "Furt organizat", "GPS tracking, sigilii speciale"],
            ["M6/M1 UK", "🟠 Mediu-Ridicat", "Furt din parcări", "Doar parcări oficiale"],
            ["E30 Polonia", "🟠 Mediu", "Furt marfă", "Evitare opriri lungi"],
            ["Balcani", "🟡 Mediu", "Furt, corupție", "Documentație completă"],
            ["Spania/Portugalia", "🟢 Scăzut", "Furt ocazional", "Măsuri standard"],
          ]}
        />
        
        {/* Damage Inspection Image - contextual after high risk areas */}
        <ChapterImage
          src={insuranceDamageImg}
          alt="Insurance surveyor inspecting damaged cargo with tablet"
          variant="float-right"
          className="mt-4"
        />
      </section>

      {/* Insurance Cost Guide */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <Euro className="w-6 h-6 text-primary" />
          {ct("typicalInsuranceCosts")}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <h3 className="font-semibold mb-2">{ct("standardGoods")}</h3>
              <p className="text-3xl font-bold text-primary">0.08-0.15%</p>
              <p className="text-sm text-muted-foreground mt-2">{ct("ofDeclaredValue")}</p>
              <p className="text-xs text-muted-foreground">€200,000 = €160-300</p>
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

      {/* Required Documents for Claims */}
      <section>
        <h2 className="section-title flex items-center gap-2">
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

      {/* Claims Checklist */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <Camera className="w-6 h-6 text-primary" />
          Checklist Deschidere Dosar Daună
        </h2>
        <Checklist
          items={[
            "Fotografii clare ale daunelor (minim 10 poze)",
            "CMR cu rezerve scrise și semnate de destinatar",
            "Notificare scrisă către transportator în 7 zile",
            "Factura comercială originală",
            "Packing list cu greutăți și dimensiuni",
            "Polița de asigurare cargo (dacă există)",
            "Raport de expertiză (pentru daune mari >€5.000)",
            "Proces verbal poliție (pentru furt)",
            "Ofertă reparație sau factura înlocuire",
            "Calcul detaliat al prejudiciului"
          ]}
        />
      </section>

      {/* Key Takeaways */}
      <section>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-success/10 border border-success/30 rounded-xl p-5">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-success">
              <CheckCircle className="w-5 h-5" />
              {ct("remember")}
            </h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• {ct("cmrLiabilityNotFullCargo")}</li>
              <li>• {ct("alwaysCheckCarrierInsurance")}</li>
              <li>• {ct("offerCargoInsurance")}</li>
              <li>• {ct("documentEverything")}</li>
              <li>• Calculează întotdeauna gap-ul de acoperire</li>
              <li>• Acționează rapid - deadlines stricte!</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-5">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-destructive">
              <XCircle className="w-5 h-5" />
              {ct("commonMistakes")}
            </h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• {ct("assumingCmrCoversFullValue")}</li>
              <li>• {ct("notCheckingCarrierInsurance")}</li>
              <li>• {ct("missingClaimDeadlines")}</li>
              <li>• {ct("poorDocumentation")}</li>
              <li>• Semnezi CMR fără rezerve</li>
              <li>• Nu faci poze la descărcare</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <Book className="w-6 h-6 text-primary" />
          Glosar Termeni Asigurări
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">SDR (Special Drawing Rights)</dt>
            <dd className="text-sm text-muted-foreground">Unitate monetară FMI, ~€1.20. Limita CMR: 8.33 SDR/kg</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">CMR Liability</dt>
            <dd className="text-sm text-muted-foreground">Răspunderea legală a transportatorului conform Convenției CMR</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">Cargo Insurance</dt>
            <dd className="text-sm text-muted-foreground">Asigurare marfă pentru valoarea totală declarată</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">All Risks</dt>
            <dd className="text-sm text-muted-foreground">Poliță ce acoperă toate riscurile (excepții standard)</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">Franșiză</dt>
            <dd className="text-sm text-muted-foreground">Suma minimă suportată de asigurat înainte de despăgubire</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">Subrogație</dt>
            <dd className="text-sm text-muted-foreground">Dreptul asigurătorului de a recupera de la vinovat</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">Certificate of Insurance</dt>
            <dd className="text-sm text-muted-foreground">Document ce confirmă existența acoperirii de asigurare</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">Inherent Vice</dt>
            <dd className="text-sm text-muted-foreground">Deteriorare cauzată de natura mărfii (ex: perisabile)</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">Rezerve CMR</dt>
            <dd className="text-sm text-muted-foreground">Mențiuni scrise pe CMR la recepție pentru daune vizibile</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">Survey Report</dt>
            <dd className="text-sm text-muted-foreground">Raport de expertiză independent pentru evaluarea daunelor</dd>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <Phone className="w-6 h-6 text-primary" />
          Contacte Urgență Asigurări
        </h2>
        <div className="bg-info/10 border border-info/30 rounded-xl p-5">
          <p className="text-sm text-muted-foreground mb-4">
            În caz de daună sau furt, contactează IMEDIAT:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Pași Imediați:</h4>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Poliția locală (pentru furt/accident grav)</li>
                <li>Dispatcher-ul companiei tale</li>
                <li>Asigurătorul (linia de urgență 24/7)</li>
                <li>Fotografiază TOTUL</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Informații de Pregătit:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Număr poliță asigurare</li>
                <li>• Detalii marfă (valoare, greutate)</li>
                <li>• Locație exactă incident</li>
                <li>• Număr CMR și înmatriculare</li>
              </ul>
            </div>
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
