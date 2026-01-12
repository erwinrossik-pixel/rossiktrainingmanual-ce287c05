import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { FileCheck, Truck, AlertTriangle, Scale, CheckCircle2, Globe } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function LicensesOversizeChapter() {
  const { ct } = useChapterTranslation('licenses-oversize');
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={FileCheck}
        variant="licenses"
      />

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileCheck className="w-6 h-6 text-primary" />
          {ct('section1Title')}
        </h2>
        <p className="text-muted-foreground mb-4">{ct('section1Intro')}</p>
        
        <InfoCard title={ct('whyLicensesTitle')} icon={CheckCircle2}>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
              {ct('guaranteeCompetence')}
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
              {ct('ensureFinancial')}
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
              {ct('verifyReputation')}
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
              {ct('allowsLegalOperation')}
            </li>
          </ul>
        </InfoCard>
      </section>

      {/* License Types */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Globe className="w-6 h-6 text-primary" />
          {ct('section2Title')}
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">{ct('licenseType')}</th>
                <th className="p-3 text-left border border-border">{ct('description')}</th>
                <th className="p-3 text-left border border-border">{ct('coverage')}</th>
                <th className="p-3 text-left border border-border">{ct('validity')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border font-semibold">{ct('communityLicense')}</td>
                <td className="p-3 border border-border text-sm">{ct('communityLicenseDesc')}</td>
                <td className="p-3 border border-border text-sm">{ct('communityLicenseCoverage')}</td>
                <td className="p-3 border border-border text-sm">{ct('fiveYears')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">{ct('nationalLicense')}</td>
                <td className="p-3 border border-border text-sm">{ct('nationalLicenseDesc')}</td>
                <td className="p-3 border border-border text-sm">{ct('issuingCountry')}</td>
                <td className="p-3 border border-border text-sm">{ct('fiveYears')}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">{ct('cemtAuthorizations')}</td>
                <td className="p-3 border border-border text-sm">{ct('cemtDesc')}</td>
                <td className="p-3 border border-border text-sm">{ct('cemtCoverage')}</td>
                <td className="p-3 border border-border text-sm">{ct('annualRenewal')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Oversize Transport */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Truck className="w-6 h-6 text-primary" />
          {ct('section6Title')}
        </h2>
        <p className="text-muted-foreground mb-4">{ct('oversizeIntro')}</p>
        
        <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg mb-4">
          <h4 className="font-semibold mb-2">{ct('legalDefinition')}</h4>
          <p className="text-sm">{ct('legalDefinitionText')}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">{ct('category')}</th>
                <th className="p-3 text-left border border-border">{ct('standardDimensions')}</th>
                <th className="p-3 text-left border border-border">{ct('oversizeExceedance')}</th>
                <th className="p-3 text-left border border-border">{ct('specialRequirementsCol')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border font-semibold">{ct('length')}</td>
                <td className="p-3 border border-border text-sm">{ct('maxLength')}</td>
                <td className="p-3 border border-border text-sm">{ct('lengthExceed')}</td>
                <td className="p-3 border border-border text-sm">{ct('lengthRequirements')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">{ct('width')}</td>
                <td className="p-3 border border-border text-sm">{ct('maxWidth')}</td>
                <td className="p-3 border border-border text-sm">{ct('widthExceed')}</td>
                <td className="p-3 border border-border text-sm">{ct('widthRequirements')}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">{ct('height')}</td>
                <td className="p-3 border border-border text-sm">{ct('maxHeight')}</td>
                <td className="p-3 border border-border text-sm">{ct('heightExceed')}</td>
                <td className="p-3 border border-border text-sm">{ct('heightRequirements')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">{ct('totalWeight')}</td>
                <td className="p-3 border border-border text-sm">{ct('maxTotalWeight')}</td>
                <td className="p-3 border border-border text-sm">{ct('weightExceed')}</td>
                <td className="p-3 border border-border text-sm">{ct('weightRequirements')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Safety Requirements */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" />
          {ct('section8Title')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard title={ct('mandatorySignaling')} icon={AlertTriangle}>
            <ul className="space-y-2 text-sm">
              <li>• {ct('signalBoard')}</li>
              <li>• {ct('yellowFlashingLights')}</li>
              <li>• {ct('reflectiveMarkers')}</li>
              <li>• {ct('rearDimensions')}</li>
            </ul>
          </InfoCard>
          
          <InfoCard title={ct('timeRestrictions')} icon={Scale}>
            <ul className="space-y-2 text-sm">
              <li>• {ct('weekdayHours')}</li>
              <li>• {ct('weekendBan')}</li>
              <li>• {ct('holidayBan')}</li>
              <li>• {ct('nightPermitRequired')}</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Quiz */}
      {quizzes['licenses-oversize'] && <Quiz quizId="licenses-oversize" />}
    </div>
  );
}
