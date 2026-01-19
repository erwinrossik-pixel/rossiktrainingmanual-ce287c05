import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { AlertTriangle, FileText, Truck, Shield, Book, CheckCircle, XCircle, Flame } from "lucide-react";
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
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-primary">54</p>
              <p className="text-sm">{ct('contractingCountries')}</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-primary">9</p>
              <p className="text-sm">{ct('hazardClasses')}</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-primary">2 {ct('years')}</p>
              <p className="text-sm">{ct('updateCycle')}</p>
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
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">{ct('class')}</th>
                <th className="p-3 text-left border border-border">{ct('description')}</th>
                <th className="p-3 text-left border border-border">{ct('examples')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border font-bold">{ct('class')} 1</td>
                <td className="p-3 border border-border">{ct('explosives')}</td>
                <td className="p-3 border border-border text-sm">{ct('explosivesExamples')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-bold">{ct('class')} 2</td>
                <td className="p-3 border border-border">{ct('gases')}</td>
                <td className="p-3 border border-border text-sm">{ct('gasesExamples')}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-bold">{ct('class')} 3</td>
                <td className="p-3 border border-border">{ct('flammableLiquids')}</td>
                <td className="p-3 border border-border text-sm">{ct('flammableLiquidsExamples')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-bold">{ct('class')} 4</td>
                <td className="p-3 border border-border">{ct('flammableSolids')}</td>
                <td className="p-3 border border-border text-sm">{ct('flammableSolidsExamples')}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-bold">{ct('class')} 5</td>
                <td className="p-3 border border-border">{ct('oxidizingSubstances')}</td>
                <td className="p-3 border border-border text-sm">{ct('oxidizingExamples')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-bold">{ct('class')} 6</td>
                <td className="p-3 border border-border">{ct('toxicInfectious')}</td>
                <td className="p-3 border border-border text-sm">{ct('toxicExamples')}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-bold">{ct('class')} 7</td>
                <td className="p-3 border border-border">{ct('radioactive')}</td>
                <td className="p-3 border border-border text-sm">{ct('radioactiveExamples')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-bold">{ct('class')} 8</td>
                <td className="p-3 border border-border">{ct('corrosives')}</td>
                <td className="p-3 border border-border text-sm">{ct('corrosivesExamples')}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-bold">{ct('class')} 9</td>
                <td className="p-3 border border-border">{ct('miscellaneous')}</td>
                <td className="p-3 border border-border text-sm">{ct('miscellaneousExamples')}</td>
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
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct('adrCertificate')}</strong> - {ct('validDriverCertificate')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct('training')}</strong> - {ct('classSpecificTraining')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct('equipment')}</strong> - {ct('ppeAppropriate')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct('knowledge')}</strong> - {ct('emergencyProcedures')}</span>
              </li>
            </ul>
          </InfoCard>
          <InfoCard title={ct('vehicleRequirements')} icon={Truck} variant="info">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct('adrCertificate')}</strong> - {ct('vehicleApprovalCertificate')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct('placards')}</strong> - {ct('correctHazardDiamonds')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct('equipment')}</strong> - {ct('fireExtinguishers')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct('orangePlates')}</strong> - {ct('unNumbersVisible')}</span>
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
              <h3 className="font-semibold mb-3 text-primary">{ct('alwaysRequired')}</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct('transportDocument')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct('driverAdrCertificate')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct('instructionsInWriting')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct('photoId')}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-warning">{ct('whenApplicable')}</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                  <span>{ct('vehicleAdrApproval')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                  <span>{ct('specialPermits')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                  <span>{ct('containerPackingCertificate')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                  <span>{ct('exemptionCertificates')}</span>
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
          <p className="mb-4">
            {ct('lqDescription')}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">{ct('lqRequirements')}:</h4>
              <ul className="space-y-1 text-sm">
                <li>• {ct('innerPackagingLimit')}</li>
                <li>• {ct('grossWeightLimit')}</li>
                <li>• {ct('properLqMarking')}</li>
                <li>• {ct('noAdrPlacardsNeeded')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{ct('stillRequired')}:</h4>
              <ul className="space-y-1 text-sm">
                <li>• {ct('properPackaging')}</li>
                <li>• {ct('lqDiamondMarking')}</li>
                <li>• {ct('transportDocument')}</li>
                <li>• {ct('generalSafetyTraining')}</li>
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
            <div key={index} className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                <div>
                  <p className="font-semibold">{item.mistake}</p>
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
        <div className="bg-muted/30 rounded-xl p-6">
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
              <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Info Box */}
      <section>
        <div className="bg-warning/10 border border-warning/30 rounded-xl p-6">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-warning" />
            {ct('importantNote')}
          </h3>
          <p className="text-sm">
            {ct('importantNoteText')}
          </p>
        </div>
      </section>

      {/* Quiz */}
      <Quiz title={ct('quizTitle')} chapterId="adr" questionsPerRound={10} />
    </div>
  );
}