import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { AlertTriangle, FileText, Truck, Shield, Book, CheckCircle, XCircle } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function ADRChapter() {
  const { ct } = useChapterTranslation('adr');
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={AlertTriangle}
        variant="adr"
      />

      {/* What is ADR */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Book className="w-6 h-6 text-primary" />
          {ct('whatIsAdr')}
        </h2>
        <InfoCard title={ct('adrOverview')} icon={FileText} variant="info">
          <p className="mb-4">
            {ct('adrDescription')}
          </p>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-primary">54</p>
              <p className="text-sm text-foreground">{ct('contractingCountries')}</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-primary">9</p>
              <p className="text-sm text-foreground">{ct('hazardClasses')}</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-primary">2 {ct('years')}</p>
              <p className="text-sm text-foreground">{ct('updateCycle')}</p>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* ADR Classes */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" />
          {ct('adrHazardClasses')}
        </h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full border-collapse bg-card">
            <thead>
              <tr className="bg-primary/10">
                <th className="p-4 text-left font-semibold text-foreground">{ct('class')}</th>
                <th className="p-4 text-left font-semibold text-foreground">{ct('description')}</th>
                <th className="p-4 text-left font-semibold text-foreground">{ct('examples')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-4 font-bold text-primary">{ct('class')} 1</td>
                <td className="p-4 text-foreground">{ct('explosives')}</td>
                <td className="p-4 text-sm text-muted-foreground">{ct('explosivesExamples')}</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors bg-muted/10">
                <td className="p-4 font-bold text-primary">{ct('class')} 2</td>
                <td className="p-4 text-foreground">{ct('gases')}</td>
                <td className="p-4 text-sm text-muted-foreground">{ct('gasesExamples')}</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-4 font-bold text-primary">{ct('class')} 3</td>
                <td className="p-4 text-foreground">{ct('flammableLiquids')}</td>
                <td className="p-4 text-sm text-muted-foreground">{ct('flammableLiquidsExamples')}</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors bg-muted/10">
                <td className="p-4 font-bold text-primary">{ct('class')} 4</td>
                <td className="p-4 text-foreground">{ct('flammableSolids')}</td>
                <td className="p-4 text-sm text-muted-foreground">{ct('flammableSolidsExamples')}</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-4 font-bold text-primary">{ct('class')} 5</td>
                <td className="p-4 text-foreground">{ct('oxidizingSubstances')}</td>
                <td className="p-4 text-sm text-muted-foreground">{ct('oxidizingExamples')}</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors bg-muted/10">
                <td className="p-4 font-bold text-primary">{ct('class')} 6</td>
                <td className="p-4 text-foreground">{ct('toxicInfectious')}</td>
                <td className="p-4 text-sm text-muted-foreground">{ct('toxicExamples')}</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-4 font-bold text-primary">{ct('class')} 7</td>
                <td className="p-4 text-foreground">{ct('radioactive')}</td>
                <td className="p-4 text-sm text-muted-foreground">{ct('radioactiveExamples')}</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors bg-muted/10">
                <td className="p-4 font-bold text-primary">{ct('class')} 8</td>
                <td className="p-4 text-foreground">{ct('corrosives')}</td>
                <td className="p-4 text-sm text-muted-foreground">{ct('corrosivesExamples')}</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-4 font-bold text-primary">{ct('class')} 9</td>
                <td className="p-4 text-foreground">{ct('miscellaneous')}</td>
                <td className="p-4 text-sm text-muted-foreground">{ct('miscellaneousExamples')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ADR Requirements */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Truck className="w-6 h-6 text-primary" />
          {ct('adrTransportRequirements')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct('driverRequirements')} icon={Shield} variant="warning">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-foreground"><strong>{ct('adrCertificate')}</strong> - {ct('validDriverCertificate')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-foreground"><strong>{ct('training')}</strong> - {ct('classSpecificTraining')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-foreground"><strong>{ct('equipment')}</strong> - {ct('ppeAppropriate')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-foreground"><strong>{ct('knowledge')}</strong> - {ct('emergencyProcedures')}</span>
              </li>
            </ul>
          </InfoCard>
          <InfoCard title={ct('vehicleRequirements')} icon={Truck} variant="info">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-foreground"><strong>{ct('adrCertificate')}</strong> - {ct('vehicleApprovalCertificate')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-foreground"><strong>{ct('placards')}</strong> - {ct('correctHazardDiamonds')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-foreground"><strong>{ct('equipment')}</strong> - {ct('fireExtinguishers')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-foreground"><strong>{ct('orangePlates')}</strong> - {ct('unNumbersVisible')}</span>
              </li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Required Documents */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          {ct('requiredAdrDocuments')}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-primary text-lg">{ct('alwaysRequired')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{ct('transportDocument')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{ct('driverAdrCertificate')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{ct('instructionsInWriting')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{ct('photoId')}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-warning text-lg">{ct('whenApplicable')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{ct('vehicleAdrApproval')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{ct('specialPermits')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{ct('containerPackingCertificate')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{ct('exemptionCertificates')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Quantities Exception */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          {ct('limitedQuantitiesException')}
        </h2>
        <InfoCard title={ct('whenFullAdrNotApply')} icon={CheckCircle} variant="success">
          <p className="mb-4 text-foreground">
            {ct('lqDescription')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted/20 rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-foreground">{ct('lqRequirements')}</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-foreground">• {ct('innerPackagingLimit')}</li>
                <li className="text-foreground">• {ct('grossWeightLimit')}</li>
                <li className="text-foreground">• {ct('properLqMarking')}</li>
                <li className="text-foreground">• {ct('noAdrPlacardsNeeded')}</li>
              </ul>
            </div>
            <div className="bg-muted/20 rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-foreground">{ct('stillRequired')}</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-foreground">• {ct('properPackaging')}</li>
                <li className="text-foreground">• {ct('lqDiamondMarking')}</li>
                <li className="text-foreground">• {ct('transportDocumentReq')}</li>
                <li className="text-foreground">• {ct('generalSafetyTraining')}</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Common Mistakes */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <XCircle className="w-6 h-6 text-primary" />
          {ct('commonAdrMistakes')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { mistake: ct('mixingIncompatible'), consequence: ct('chemicalReaction') },
            { mistake: ct('missingPlacards'), consequence: ct('finesImpounded') },
            { mistake: ct('driverWithoutCertificate'), consequence: ct('driverLiability') },
            { mistake: ct('incorrectUnNumber'), consequence: ct('wrongEmergencyResponse') },
            { mistake: ct('tunnelRestrictionsIgnored'), consequence: ct('finesRerouting') },
            { mistake: ct('expiredVehicleCertificate'), consequence: ct('transportProhibited') },
          ].map((item, index) => (
            <div key={index} className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 hover:bg-destructive/15 transition-colors">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{item.mistake}</p>
                  <p className="text-sm text-muted-foreground mt-1">→ {item.consequence}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADR Checklist */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-primary" />
          {ct('preTransportAdrChecklist')}
        </h2>
        <div className="bg-muted/20 rounded-xl p-6 border border-border">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              ct('unNumberConfirmed'),
              ct('packingGroupIdentified'),
              ct('driverHasValidCertificate'),
              ct('vehicleApprovalValid'),
              ct('correctPlacardsOrangePlates'),
              ct('instructionsDriverLanguage'),
              ct('emergencyEquipmentOnBoard'),
              ct('tunnelCategoryChecked'),
              ct('noProhibitedCombinations'),
              ct('transportDocumentComplete')
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Info Box */}
      <section>
        <div className="bg-warning/10 border border-warning/30 rounded-xl p-6">
          <h3 className="font-semibold mb-3 flex items-center gap-2 text-foreground">
            <AlertTriangle className="w-5 h-5 text-warning" />
            {ct('importantNote')}
          </h3>
          <p className="text-sm text-foreground">
            {ct('importantNoteText')}
          </p>
        </div>
      </section>

      {/* Quiz */}
      {quizzes.adr && (
        <Quiz title={ct('quizTitle')} questions={quizzes.adr} chapterId="adr" />
      )}
    </div>
  );
}