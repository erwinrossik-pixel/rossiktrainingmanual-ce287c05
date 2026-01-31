import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { Checklist } from "../Checklist";
import { ProcessMap } from "../FlowDiagram";
import { 
  Globe, FileText, AlertTriangle, CheckCircle, Clock, MapPin, Shield,
  Euro, Truck, Book, Lightbulb, XCircle, Package, Building2
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import customsProcessFlowImg from "@/assets/chapters/customs-process-flow.jpg";
import customsBorderImg from "@/assets/chapters/customs-border-checkpoint.jpg";

export function CustomsChapter() {
  const { ct } = useChapterTranslation('customs');

  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Globe}
        variant="customs"
      />

      {/* EU vs Non-EU */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <Globe className="w-6 h-6 text-primary" />
          {ct('euVsNonEu')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct('withinEU')} icon={CheckCircle} variant="success">
            <ul className="space-y-2">
              <li>• {ct('noCustomsFormalities')}</li>
              <li>• {ct('freeMovement')}</li>
              <li>• {ct('onlyCmrRequired')}</li>
              <li>• {ct('vatVies')}</li>
              <li>• {ct('intrastatReporting')}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct('euNonEu')} icon={FileText} variant="warning">
            <ul className="space-y-2">
              <li>• {ct('fullCustomsClearance')}</li>
              <li>• {ct('exportImportDeclarations')}</li>
              <li>• {ct('t1t2Transit')}</li>
              <li>• {ct('possibleDuties')}</li>
              <li>• {ct('borderInspections')}</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Customs Procedure Flow */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <Truck className="w-6 h-6 text-primary" />
          Fluxul Procedurilor Vamale
        </h2>
        <ProcessMap
          title="Proces Export-Tranzit-Import"
          phases={[
            { name: "Export", color: "info", steps: ["Declarație export", "Control documente", "Sigilare container", "Emitere MRN"] },
            { name: "Tranzit T1", color: "warning", steps: ["Deschidere T1 la vama de plecare", "Transport sigilat", "Deadline 8-20 zile", "Fără manipulare marfă"] },
            { name: "Import", color: "success", steps: ["Închidere T1", "Declarație import", "Plată taxe vamale", "Eliberare marfă"] }
          ]}
        />
      </section>

      {/* Transit Documents */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          {ct('transitDocuments')}
        </h2>
        <DataTable
          headers={[ct('document'), ct('purpose'), ct('whenRequired')]}
          rows={[
            [ct('t1ExternalTransit'), ct('t1Purpose'), ct('t1When')],
            [ct('t2InternalTransit'), ct('t2Purpose'), ct('t2When')],
            [ct('tirCarnet'), ct('tirPurpose'), ct('tirWhen')],
            [ct('ataCarnet'), ct('ataPurpose'), ct('ataWhen')],
            [ct('eur1'), ct('eur1Purpose'), ct('eur1When')],
          ]}
        />
        
        <ChapterImage
          src={customsProcessFlowImg}
          alt="European customs clearance process flow diagram"
          variant="float-right"
          className="mt-4"
        />
      </section>

      {/* T1 Procedure Detailed */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          {ct('t1TransitProcedure')}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary">1</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{ct('openingT1')}</h3>
                <p className="text-sm text-muted-foreground">{ct('openingT1Desc')}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary">2</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{ct('transitThroughEU')}</h3>
                <p className="text-sm text-muted-foreground">{ct('transitThroughEUDesc')}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary">3</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{ct('closingT1')}</h3>
                <p className="text-sm text-muted-foreground">{ct('closingT1Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customs Duties by Product Category */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <Euro className="w-6 h-6 text-primary" />
          Taxe Vamale pe Categorii de Produse
        </h2>
        <DataTable
          headers={["Categorie", "Taxă Vamală", "TVA Standard", "Documente Extra"]}
          rows={[
            ["Textile și îmbrăcăminte", "12-17%", "19-27%", "Certificat origine"],
            ["Electronice", "0-6%", "19-27%", "CE marking"],
            ["Automobile și piese", "4.5-22%", "19-27%", "Certificat conformitate"],
            ["Produse alimentare", "8-35%", "5-19%", "Certificat sanitar"],
            ["Chimicale", "0-6.5%", "19-27%", "SDS, REACH"],
            ["Mașini industriale", "0-4%", "19-27%", "Manual tehnic"],
          ]}
        />
      </section>

      {/* Important Borders */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <MapPin className="w-6 h-6 text-primary" />
          {ct('keyBorderCrossings')}
        </h2>
        <DataTable
          headers={[ct('route'), ct('borderPoint'), "Timp Așteptare Mediu", ct('notes')]}
          rows={[
            [ct('euUk'), ct('doverCalais'), "2-4 ore", ct('postBrexit')],
            [ct('euSwitzerland'), ct('baselChiasso'), "30 min - 2 ore", ct('switzerlandNotes')],
            [ct('euNorway'), ct('svinesund'), "15-45 min", ct('norwayNotes')],
            [ct('euTurkey'), ct('kapikule'), "4-12 ore", ct('turkeyNotes')],
            [ct('euUkraine'), ct('dorohusk'), "2-8 ore", ct('ukraineNotes')],
            [ct('euSerbia'), ct('batrovci'), "1-3 ore", ct('serbiaNotes')],
          ]}
        />
      </section>

      {/* UK Post-Brexit */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          {ct('ukPostBrexit')}
        </h2>
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">{ct('requiredDocuments')}</h3>
              <ul className="space-y-2 text-sm">
                <li>• {ct('exportDeclarationEU')}</li>
                <li>• {ct('importDeclarationUK')}</li>
                <li>• {ct('gvms')}</li>
                <li>• {ct('gmr')}</li>
                <li>• {ct('commercialInvoice')}</li>
                <li>• {ct('packingList')}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct('specialRequirements')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct('animalProducts')}</li>
                <li>• {ct('plants')}</li>
                <li>• {ct('food')}</li>
                <li>• {ct('safetySecurityDeclarations')}</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Border Checkpoint Image - contextual after UK Post-Brexit section */}
        <ChapterImage
          src={customsBorderImg}
          alt="EU-UK border checkpoint with customs officers inspecting documents"
          variant="float-right"
          className="mt-4"
        />
      </section>

      {/* Case Study */}
      <section>
        <div className="bg-gradient-to-br from-info/10 to-primary/10 border border-info/30 rounded-xl p-6">
          <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-info" />
            📋 Studiu de Caz: T1 Expirat la Granița CH-IT
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Situația:</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Transport marfă din China prin Hamburg → Chiasso (IT). T1 deschis cu deadline 10 zile.
                Camionul a stat 5 zile în trafic și la ferry. La sosirea la Chiasso, T1 expirat cu 2 zile.
              </p>
              <h4 className="font-semibold mb-2">Probleme:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>⚠️ T1 expirat = marfă "în negru"</li>
                <li>⚠️ Vama cere garanție suplimentară</li>
                <li>⚠️ Risc de confiscare</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Rezolvare:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Contact urgent broker vamal</li>
                <li>✓ Dovadă întârziere (ferry delay)</li>
                <li>✓ Plată amendă €500</li>
                <li>✓ Re-deschidere T1 nou</li>
              </ul>
              <h4 className="font-semibold mb-2 mt-4">Lecții:</h4>
              <div className="bg-warning/20 rounded-lg p-3">
                <p className="text-sm">
                  • Calculează deadline T1 cu buffer 3+ zile
                  <br />
                  • Monitorizează tracking în timp real
                  <br />
                  • Ai contact broker vamal 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EORI and Customs Codes */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <Building2 className="w-6 h-6 text-primary" />
          Coduri și Identificatori Vamali
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              Coduri Obligatorii
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">EORI</strong> - Economic Operators Registration ID
                <br />Format: RO + CUI (ex: RO12345678)
              </li>
              <li>
                <strong className="text-foreground">HS Code</strong> - Codul tarifar (6-10 cifre)
                <br />Determină taxele vamale aplicabile
              </li>
              <li>
                <strong className="text-foreground">MRN</strong> - Movement Reference Number
                <br />ID unic pentru fiecare operațiune vamală
              </li>
              <li>
                <strong className="text-foreground">AEO</strong> - Authorized Economic Operator
                <br />Status preferențial pentru operatori de încredere
              </li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-success" />
              Beneficii AEO
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Controale fizice reduse</li>
              <li>✓ Prioritate la vămuire</li>
              <li>✓ Acces la proceduri simplificate</li>
              <li>✓ Recunoaștere reciprocă (SUA, Japonia, etc.)</li>
              <li>✓ Garanții reduse</li>
              <li>✓ Încredere crescută din partea clienților</li>
            </ul>
            <div className="mt-3 p-3 bg-info/10 rounded-lg">
              <p className="text-xs">
                <strong>Tip:</strong> Procesul de certificare AEO durează 6-12 luni.
                Investiția se amortizează pentru companii cu 50+ operațiuni vamale/an.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-warning" />
          {ct('commonCustomsIssues')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-5">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-destructive">
              <XCircle className="w-5 h-5" />
              {ct('problemsToAvoid')}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct('brokenSeals')}</li>
              <li>• {ct('incorrectDocumentation')}</li>
              <li>• {ct('mismatchGoods')}</li>
              <li>• {ct('expiredT1')}</li>
              <li>• {ct('missingEori')}</li>
              <li>• {ct('wrongHsCodes')}</li>
              <li>• Declarații cu date incorecte</li>
              <li>• Lipsa certificatelor de origine</li>
            </ul>
          </div>
          <div className="bg-success/10 border border-success/30 rounded-xl p-5">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-success">
              <CheckCircle className="w-5 h-5" />
              {ct('bestPractices')}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct('verifyDocuments')}</li>
              <li>• {ct('checkSealNumbers')}</li>
              <li>• {ct('keepCopies')}</li>
              <li>• {ct('knowT1Deadline')}</li>
              <li>• {ct('customsAgentContact')}</li>
              <li>• {ct('allowExtraTime')}</li>
              <li>• Verifică HS codes cu clientul</li>
              <li>• Folosește un broker experimentat</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pre-Customs Checklist */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-primary" />
          Checklist Pre-Vămuire
        </h2>
        <Checklist
          items={[
            "EORI valid și activ pentru expeditor și destinatar",
            "HS Codes verificate și corecte pentru toate produsele",
            "Factura comercială completă (valoare, origine, greutate)",
            "Packing list cu detalii per colet",
            "Certificat de origine (EUR.1, ATR, Form A) dacă e cazul",
            "T1/TIR pregătit cu deadline realist (+3 zile buffer)",
            "Sigilii notate corect pe documente",
            "Contact broker vamal la destinație confirmat",
            "Verificat restricții/licențe pentru marfa transportată",
            "Asigurare CMR validă și suficientă"
          ]}
        />
      </section>

      {/* Time Estimates */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <Clock className="w-6 h-6 text-primary" />
          {ct('borderCrossingTimes')}
        </h2>
        <InfoCard title={ct('estimatedWaitTimes')} icon={Clock} variant="info">
          <p className="text-sm text-muted-foreground mb-4">{ct('estimatesNote')}</p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-1 text-sm">
              <li><strong>{ct('euInternal')}</strong> {ct('euInternalTime')}</li>
              <li><strong>{ct('euUkDover')}</strong> {ct('euUkTime')}</li>
              <li><strong>{ct('euSwitzerlandTime')}</strong> {ct('euSwitzerlandWait')}</li>
            </ul>
            <ul className="space-y-1 text-sm">
              <li><strong>{ct('euTurkeyTime')}</strong> {ct('euTurkeyWait')}</li>
              <li><strong>{ct('euUkraineTime')}</strong> {ct('euUkraineWait')}</li>
              <li><strong>{ct('euSerbiaTime')}</strong> {ct('euSerbiaWait')}</li>
            </ul>
          </div>
        </InfoCard>
      </section>

      {/* Glossary */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <Book className="w-6 h-6 text-primary" />
          Glosar Termeni Vamali
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">T1 (External Transit)</dt>
            <dd className="text-sm text-muted-foreground">Document de tranzit pentru mărfuri non-UE</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">T2 (Internal Transit)</dt>
            <dd className="text-sm text-muted-foreground">Tranzit pentru mărfuri cu statut UE</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">MRN</dt>
            <dd className="text-sm text-muted-foreground">Movement Reference Number - ID unic operațiune</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">EORI</dt>
            <dd className="text-sm text-muted-foreground">Număr de înregistrare operator economic</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">HS Code</dt>
            <dd className="text-sm text-muted-foreground">Cod tarifar armonizat internațional</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">AEO</dt>
            <dd className="text-sm text-muted-foreground">Operator Economic Autorizat - status preferențial</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">TIR Carnet</dt>
            <dd className="text-sm text-muted-foreground">Document tranzit internațional pentru țări non-UE</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">EUR.1</dt>
            <dd className="text-sm text-muted-foreground">Certificat de origine preferențială UE</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">SAD</dt>
            <dd className="text-sm text-muted-foreground">Single Administrative Document - declarație vamală</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">Inward Processing</dt>
            <dd className="text-sm text-muted-foreground">Regim de perfecționare activă (import temporar)</dd>
          </div>
        </div>
      </section>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="customs" />

      {/* Quiz */}
      <Quiz title={ct('quizTitle')} chapterId="customs" />
    </div>
  );
}
