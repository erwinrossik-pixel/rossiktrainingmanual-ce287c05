import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { quizzes } from "@/data/quizData";
import { Globe, FileText, AlertTriangle, CheckCircle, Clock, MapPin, Shield } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import customsProcessFlowImg from "@/assets/chapters/customs-process-flow.jpg";

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

      {/* Customs Process Flow Image */}
      <ChapterImage
        src={customsProcessFlowImg}
        alt="European Customs Clearance Process"
        variant="inline"
        className="mb-6"
      />

      {/* EU vs Non-EU */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
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

      {/* Transit Documents */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
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
      </section>

      {/* T1 Procedure */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
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
                <p className="text-sm text-muted-foreground">
                  {ct('openingT1Desc')}
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary">2</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{ct('transitThroughEU')}</h3>
                <p className="text-sm text-muted-foreground">
                  {ct('transitThroughEUDesc')}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary">3</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{ct('closingT1')}</h3>
                <p className="text-sm text-muted-foreground">
                  {ct('closingT1Desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Borders */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <MapPin className="w-6 h-6 text-primary" />
          {ct('keyBorderCrossings')}
        </h2>
        <DataTable
          headers={[ct('route'), ct('borderPoint'), ct('notes')]}
          rows={[
            [ct('euUk'), ct('doverCalais'), ct('postBrexit')],
            [ct('euSwitzerland'), ct('baselChiasso'), ct('switzerlandNotes')],
            [ct('euNorway'), ct('svinesund'), ct('norwayNotes')],
            [ct('euTurkey'), ct('kapikule'), ct('turkeyNotes')],
            [ct('euUkraine'), ct('dorohusk'), ct('ukraineNotes')],
            [ct('euSerbia'), ct('batrovci'), ct('serbiaNotes')],
          ]}
        />
      </section>

      {/* UK Post-Brexit */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
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
      </section>

      {/* Customs Terminology */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          {ct('keyCustomsTerms')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="font-semibold mb-3">{ct('documentsCodes')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>{ct('mrn')}</strong> {ct('mrnDesc')}</li>
              <li><strong>{ct('eori')}</strong> {ct('eoriDesc')}</li>
              <li><strong>{ct('hsCode')}</strong> {ct('hsCodeDesc')}</li>
              <li><strong>{ct('sad')}</strong> {ct('sadDesc')}</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="font-semibold mb-3">{ct('procedures')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>{ct('aeo')}</strong> {ct('aeoDesc')}</li>
              <li><strong>{ct('inwardProcessing')}</strong> {ct('inwardProcessingDesc')}</li>
              <li><strong>{ct('customsWarehouse')}</strong> {ct('customsWarehouseDesc')}</li>
              <li><strong>{ct('freeZone')}</strong> {ct('freeZoneDesc')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-warning" />
          {ct('commonCustomsIssues')}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-destructive">{ct('problemsToAvoid')}</h3>
              <ul className="space-y-2 text-sm">
                <li>• {ct('brokenSeals')}</li>
                <li>• {ct('incorrectDocumentation')}</li>
                <li>• {ct('mismatchGoods')}</li>
                <li>• {ct('expiredT1')}</li>
                <li>• {ct('missingEori')}</li>
                <li>• {ct('wrongHsCodes')}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-success">{ct('bestPractices')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct('verifyDocuments')}</li>
                <li>• {ct('checkSealNumbers')}</li>
                <li>• {ct('keepCopies')}</li>
                <li>• {ct('knowT1Deadline')}</li>
                <li>• {ct('customsAgentContact')}</li>
                <li>• {ct('allowExtraTime')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Time Estimates */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Clock className="w-6 h-6 text-primary" />
          {ct('borderCrossingTimes')}
        </h2>
        <InfoCard title={ct('estimatedWaitTimes')} icon={Clock} variant="info">
          <p className="text-sm text-muted-foreground mb-4">
            {ct('estimatesNote')}
          </p>
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

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="customs" />

      {/* Quiz */}
      {quizzes.customs && (
        <Quiz title={ct('quizTitle')} questions={quizzes.customs} chapterId="customs" />
      )}
    </div>
  );
}
