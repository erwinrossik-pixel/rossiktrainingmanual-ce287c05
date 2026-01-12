import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Calculator, Euro, TrendingUp, Fuel, Percent, Clock } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function PricingChapter() {
  const { ct } = useChapterTranslation('pricing');
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Calculator}
        variant="pricing"
      />

      {/* Cost Formula */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Calculator className="w-6 h-6 text-primary" />
          {ct('costCalculationFormula')}
        </h2>
        
        <div className="bg-card border border-border rounded-xl p-6 mb-4">
          <p className="text-sm text-muted-foreground mb-2">{ct('basicFormula')}</p>
          <p className="font-mono text-lg font-bold text-primary mb-4">{ct('totalCostFormula')}</p>
          <p className="text-sm text-muted-foreground mb-2">{ct('finalPriceCalculation')}</p>
          <p className="font-mono text-lg font-bold text-primary">{ct('offerPriceFormula')}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Euro className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">€1.10-1.25</p>
            <p className="text-sm text-muted-foreground">{ct('baseRate')}</p>
            <p className="text-xs text-muted-foreground">{ct('perKm')}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Percent className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">8-18%</p>
            <p className="text-sm text-muted-foreground">{ct('targetMargin')}</p>
            <p className="text-xs text-muted-foreground">{ct('peakUpTo')}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">€1.30-1.60</p>
            <p className="text-sm text-muted-foreground">{ct('averageTotalCost')}</p>
            <p className="text-xs text-muted-foreground">{ct('perKmAllIn')}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Fuel className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">€1.70-1.90</p>
            <p className="text-sm text-muted-foreground">{ct('dieselReference')}</p>
            <p className="text-xs text-muted-foreground">{ct('perLiter')}</p>
          </div>
        </div>
      </section>

      {/* Transport Cost Components */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif">{ct('transportCostComponents')}</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard title={ct('fixedCosts')} icon={Euro}>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>{ct('fuelConsumption')}</span>
                <span className="font-medium">~35-40%</span>
              </li>
              <li className="flex justify-between">
                <span>{ct('driverSalary')}</span>
                <span className="font-medium">~25-30%</span>
              </li>
              <li className="flex justify-between">
                <span>{ct('vehicleDepreciation')}</span>
                <span className="font-medium">~10-15%</span>
              </li>
              <li className="flex justify-between">
                <span>{ct('insuranceTaxes')}</span>
                <span className="font-medium">~8-10%</span>
              </li>
              <li className="flex justify-between">
                <span>{ct('maintenanceTires')}</span>
                <span className="font-medium">~8-10%</span>
              </li>
            </ul>
          </InfoCard>
          
          <InfoCard title={ct('variableCosts')} icon={TrendingUp}>
            <ul className="space-y-2 text-sm">
              <li>• {ct('roadTolls')}</li>
              <li>• {ct('ferry')}</li>
              <li>• {ct('tunnel')}</li>
              <li>• {ct('secureParking')}</li>
              <li>• {ct('waitingTime')}</li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              {ct('impactOnTotalCost')}: +15-35%
            </p>
          </InfoCard>
        </div>
      </section>

      {/* Toll Rates */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif">{ct('tollRatesByCountry')}</h2>
        <p className="text-sm text-muted-foreground mb-4">{ct('tollRatesNote')}</p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">{ct('country')}</th>
                <th className="p-3 text-left border border-border">{ct('ratePerKm')}</th>
                <th className="p-3 text-left border border-border">{ct('system')}</th>
                <th className="p-3 text-left border border-border">{ct('importantNotes')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border font-semibold">🇩🇪 {ct('germany')}</td>
                <td className="p-3 border border-border">€0.262</td>
                <td className="p-3 border border-border">Toll Collect</td>
                <td className="p-3 border border-border text-sm">{ct('germanyNotes')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">🇦🇹 {ct('austria')}</td>
                <td className="p-3 border border-border">€0.532</td>
                <td className="p-3 border border-border">GO-Maut</td>
                <td className="p-3 border border-border text-sm">{ct('austriaNotes')}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">🇨🇭 {ct('switzerland')}</td>
                <td className="p-3 border border-border">€0.55</td>
                <td className="p-3 border border-border">LSVA</td>
                <td className="p-3 border border-border text-sm">{ct('switzerlandNotes')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">🇵🇱 {ct('poland')}</td>
                <td className="p-3 border border-border">€0.092</td>
                <td className="p-3 border border-border">e-TOLL</td>
                <td className="p-3 border border-border text-sm">{ct('polandNotes')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Margin Strategies */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Percent className="w-6 h-6 text-primary" />
          {ct('marginStrategies')}
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">{ct('clientType')}</th>
                <th className="p-3 text-left border border-border">{ct('margin')}</th>
                <th className="p-3 text-left border border-border">{ct('motivation')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border">{ct('newClientFirstOrder')}</td>
                <td className="p-3 border border-border font-semibold text-warning">15-18%</td>
                <td className="p-3 border border-border text-sm">{ct('testingUnknownRisk')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border">{ct('recurringStandardClient')}</td>
                <td className="p-3 border border-border font-semibold text-success">10-12%</td>
                <td className="p-3 border border-border text-sm">{ct('stableRelationship')}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">{ct('spotMarketUrgent')}</td>
                <td className="p-3 border border-border font-semibold text-primary">18-25%</td>
                <td className="p-3 border border-border text-sm">{ct('urgencyPremium')}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border">{ct('returnLoad')}</td>
                <td className="p-3 border border-border font-semibold">5-8%</td>
                <td className="p-3 border border-border text-sm">{ct('betterThanEmpty')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seasonal Variations */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Clock className="w-6 h-6 text-primary" />
          {ct('seasonalVariations')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">{ct('janFeb')}</h4>
            <p className="text-lg font-bold">{ct('janFebImpact')}</p>
            <p className="text-sm text-muted-foreground">{ct('janFebReason')}</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
            <h4 className="font-semibold text-green-700 dark:text-green-300">{ct('sepOct')}</h4>
            <p className="text-lg font-bold">{ct('sepOctImpact')}</p>
            <p className="text-sm text-muted-foreground">{ct('sepOctReason')}</p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
            <h4 className="font-semibold text-red-700 dark:text-red-300">{ct('dec1_15')}</h4>
            <p className="text-lg font-bold">{ct('dec1_15Impact')}</p>
            <p className="text-sm text-muted-foreground">{ct('dec1_15Reason')}</p>
          </div>
        </div>
      </section>

      {/* Quiz */}
      {quizzes.pricing && <Quiz quizId="pricing" />}
    </div>
  );
}
