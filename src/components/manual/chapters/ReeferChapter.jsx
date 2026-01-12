import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Thermometer, Snowflake, AlertTriangle, CheckCircle2, FileText, Clock } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function ReeferChapter() {
  const { ct } = useChapterTranslation('reefer');
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Thermometer}
        variant="reefer"
      />

      {/* Cold Chain Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Snowflake className="w-6 h-6 text-primary" />
          {ct('coldChainTitle')}
        </h2>
        <p className="text-muted-foreground mb-4">{ct('coldChainDesc')}</p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-primary">€8B+</p>
            <p className="text-sm text-muted-foreground">{ct('euReeferMarket')}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-primary">+20-40%</p>
            <p className="text-sm text-muted-foreground">{ct('premiumOverStandard')}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-primary">{ct('zeroTolerance')}</p>
            <p className="text-sm text-muted-foreground">{ct('zeroTolerancePharma')}</p>
          </div>
        </div>
      </section>

      {/* Temperature Classes */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif">{ct('tempClassesTitle')}</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">{ct('tempClass')}</th>
                <th className="p-3 text-left border border-border">{ct('tempRange')}</th>
                <th className="p-3 text-left border border-border">{ct('typicalCargo')}</th>
                <th className="p-3 text-left border border-border">{ct('specialNotes')}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50 dark:bg-blue-900/20">
                <td className="p-3 border border-border font-semibold">{ct('deepFrozen')}</td>
                <td className="p-3 border border-border">-25°C to -18°C</td>
                <td className="p-3 border border-border text-sm">{ct('deepFrozenCargo')}</td>
                <td className="p-3 border border-border text-sm">{ct('strictestTempControl')}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">{ct('frozen')}</td>
                <td className="p-3 border border-border">-18°C to -12°C</td>
                <td className="p-3 border border-border text-sm">{ct('frozenCargo')}</td>
                <td className="p-3 border border-border text-sm">{ct('mostCommonFrozen')}</td>
              </tr>
              <tr className="bg-blue-50 dark:bg-blue-900/20">
                <td className="p-3 border border-border font-semibold">{ct('chilled')}</td>
                <td className="p-3 border border-border">+2°C to +8°C</td>
                <td className="p-3 border border-border text-sm">{ct('chilledCargo')}</td>
                <td className="p-3 border border-border text-sm">{ct('highestVolumeSegment')}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">{ct('cool')}</td>
                <td className="p-3 border border-border">+8°C to +15°C</td>
                <td className="p-3 border border-border text-sm">{ct('coolCargo')}</td>
                <td className="p-3 border border-border text-sm">{ct('needsVentilation')}</td>
              </tr>
              <tr className="bg-blue-50 dark:bg-blue-900/20">
                <td className="p-3 border border-border font-semibold">{ct('ambientControlled')}</td>
                <td className="p-3 border border-border">+15°C to +25°C</td>
                <td className="p-3 border border-border text-sm">{ct('ambientCargo')}</td>
                <td className="p-3 border border-border text-sm">{ct('protectFromExtreme')}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 p-4 bg-warning/10 border border-warning/30 rounded-lg">
          <p className="text-sm flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <span><strong>{ct('critical')}:</strong> {ct('criticalVerifyTemp')}</span>
          </p>
        </div>
      </section>

      {/* ATP Agreement */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          {ct('atpTitle')}
        </h2>
        
        <InfoCard title={ct('whatIsATP')} icon={FileText}>
          <p className="text-sm text-muted-foreground mb-4">{ct('atpDescription')}</p>
          <h4 className="font-semibold mb-2">{ct('atpCoverage')}</h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              {ct('equipmentConstruction')}
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              {ct('temperatureMaintenance')}
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              {ct('testingCertification')}
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              {ct('markingRequirements')}
            </li>
          </ul>
        </InfoCard>
      </section>

      {/* Best Practices */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif">{ct('coldChainBestPracticesTitle')}</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard title={ct('preCoolingProtocol')} icon={Snowflake}>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                {ct('preCool1')}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                {ct('preCool2')}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                {ct('preCool3')}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                {ct('preCool4')}
              </li>
            </ul>
          </InfoCard>
          
          <InfoCard title={ct('temperatureMonitoring')} icon={Clock}>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                {ct('monitoring1')}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                {ct('monitoring2')}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                {ct('monitoring3')}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                {ct('monitoring4')}
              </li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Quiz */}
      {quizzes.reefer && <Quiz quizId="reefer" />}
    </div>
  );
}
