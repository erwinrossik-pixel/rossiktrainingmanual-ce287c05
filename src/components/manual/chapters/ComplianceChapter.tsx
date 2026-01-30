import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { quizzes } from "@/data/quizData";
import { Clock, AlertTriangle, Moon, Calendar, Shield, FileText, Truck, CheckCircle2, XCircle, Scale, Timer, Coffee, Bed, MapPin, Ban, Euro, Calculator, Eye } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import complianceImg from "@/assets/chapters/compliance-checklist.jpg";

export function ComplianceChapter() {
  const { ct } = useChapterTranslation('compliance');

  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Scale}
        variant="compliance"
      />

      {/* Compliance Checklist Image */}
      <ChapterImage
        src={complianceImg}
        alt="EU transport compliance checklist"
        caption={ct('complianceChecklistCaption') || "Checklist conformitate - cerințe legale transport EU"}
        variant="inline"
        className="mb-6"
      />

      {/* Why Compliance Matters */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          {ct('whyComplianceTitle')}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct('whyComplianceDesc')}
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Euro className="w-8 h-8 text-destructive mx-auto mb-2" />
            <p className="text-2xl font-bold text-destructive">€500-5,000</p>
            <p className="text-xs text-muted-foreground">{ct('finePerViolation')}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Ban className="w-8 h-8 text-warning mx-auto mb-2" />
            <p className="text-2xl font-bold text-warning">License</p>
            <p className="text-xs text-muted-foreground">{ct('licensePoints')}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Truck className="w-8 h-8 text-info mx-auto mb-2" />
            <p className="text-2xl font-bold text-info">Vehicle</p>
            <p className="text-xs text-muted-foreground">{ct('vehicleImpounded')}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Scale className="w-8 h-8 text-destructive mx-auto mb-2" />
            <p className="text-2xl font-bold text-destructive">Criminal</p>
            <p className="text-xs text-muted-foreground">{ct('criminalProsecution')}</p>
          </div>
        </div>
      </div>

      {/* Key Limits Table */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Clock className="w-6 h-6 text-primary" />
          {ct('drivingTimeLimitsTitle')}
        </h2>
        <DataTable 
          headers={[ct('regulation'), ct('standardLimit'), ct('exceptionNotes')]}
          rows={[
            [ct('dailyDriving'), ct('dailyDrivingLimit'), ct('dailyDrivingException')],
            [ct('weeklyDriving'), ct('weeklyDrivingLimit'), ct('weeklyDrivingException')],
            [ct('biweeklyDriving'), ct('biweeklyDrivingLimit'), ct('biweeklyDrivingException')],
            [ct('continuousDriving'), ct('continuousDrivingLimit'), ct('continuousDrivingException')],
            [ct('breakRequired'), ct('breakLimit'), ct('breakException')],
            [ct('dailyRest'), ct('dailyRestLimit'), ct('dailyRestException')],
            [ct('weeklyRest'), ct('weeklyRestLimit'), ct('weeklyRestException')],
          ]}
        />
        
        <div className="mt-4 p-4 bg-warning/10 border border-warning/30 rounded-lg">
          <p className="text-sm flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <span><strong>Important:</strong> {ct('importantNote')}</span>
          </p>
        </div>
      </div>

      {/* Visual Explanation Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <InfoCard title={ct('averageDailyDistanceTitle')} icon={MapPin} variant="info">
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <div>
                <span className="font-medium">{ct('singleDriver')}</span>
                <p className="text-xs text-muted-foreground">{ct('singleDriverCalc')}</p>
              </div>
              <span className="font-bold text-2xl text-primary">~650-700 km</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <div>
                <span className="font-medium">{ct('doubleManned')}</span>
                <p className="text-xs text-muted-foreground">{ct('doubleMannedCalc')}</p>
              </div>
              <span className="font-bold text-2xl text-primary">~1,100-1,200 km</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <div>
                <span className="font-medium">{ct('realisticAverage')}</span>
                <p className="text-xs text-muted-foreground">{ct('realisticAverageCalc')}</p>
              </div>
              <span className="font-bold text-2xl text-warning">500-600 km</span>
            </div>
          </div>
        </InfoCard>

        <InfoCard title={ct('criticalRemindersTitle')} icon={AlertTriangle} variant="warning">
          <ul className="space-y-3">
            <li className="flex items-start gap-3 p-2 bg-muted/30 rounded">
              <Timer className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              <div>
                <strong>{ct('drivingIncludesCongestion')}</strong>
                <p className="text-xs text-muted-foreground">{ct('drivingIncludesCongestionDesc')}</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-2 bg-muted/30 rounded">
              <Clock className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              <div>
                <strong>{ct('shiftNotDriving')}</strong>
                <p className="text-xs text-muted-foreground">{ct('shiftNotDrivingDesc')}</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-2 bg-muted/30 rounded">
              <FileText className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              <div>
                <strong>{ct('art12Exceptions')}</strong>
                <p className="text-xs text-muted-foreground">{ct('art12ExceptionsDesc')}</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-2 bg-muted/30 rounded">
              <Bed className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              <div>
                <strong>{ct('weeklyRestCab')}</strong>
                <p className="text-xs text-muted-foreground">{ct('weeklyRestCabDesc')}</p>
              </div>
            </li>
          </ul>
        </InfoCard>
      </div>

      {/* Break Rules Detail */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Coffee className="w-6 h-6 text-primary" />
          {ct('breakRulesTitle')}
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 bg-accent rounded-lg border-l-4 border-primary">
            <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <Coffee className="w-5 h-5" />
              {ct('break45Min')}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {ct('break45MinDesc')}
            </p>
            <div className="bg-muted/50 p-2 rounded text-xs">
              <strong>{ct('break45MinSplit')}</strong>
            </div>
          </div>
          <div className="p-4 bg-accent rounded-lg border-l-4 border-info">
            <h3 className="font-semibold text-info mb-2 flex items-center gap-2">
              <Moon className="w-5 h-5" />
              {ct('dailyRest11h')}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {ct('dailyRest11hDesc')}
            </p>
            <div className="bg-muted/50 p-2 rounded text-xs">
              <strong>{ct('dailyRest11hReduced')}</strong>
            </div>
          </div>
          <div className="p-4 bg-accent rounded-lg border-l-4 border-success">
            <h3 className="font-semibold text-success mb-2 flex items-center gap-2">
              <Bed className="w-5 h-5" />
              {ct('weeklyRest45h')}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {ct('weeklyRest45hDesc')}
            </p>
            <div className="bg-muted/50 p-2 rounded text-xs">
              <strong>{ct('weeklyRest45hReduced')}</strong>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-info/10 border border-info/30 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Eye className="w-5 h-5 text-info" />
            {ct('splitDailyRest')}
          </h4>
          <p className="text-sm">
            {ct('splitDailyRestDesc')}
          </p>
        </div>
      </div>

      {/* Weekly Pattern Example */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Calendar className="w-6 h-6 text-primary" />
          {ct('weeklyPatternTitle')}
        </h2>
        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div key={day} className="font-semibold text-muted-foreground">{day}</div>
            ))}
            {[
              { hours: 10, extended: true },
              { hours: 9, extended: false },
              { hours: 10, extended: true },
              { hours: 9, extended: false },
              { hours: 9, extended: false },
              { hours: 9, extended: false },
              { hours: 0, rest: true },
            ].map((day, i) => (
              <div key={i} className={`p-2 rounded ${
                day.rest ? 'bg-success/20 text-success' : 
                day.extended ? 'bg-warning/20 text-warning' :
                'bg-primary/20 text-primary'
              } font-bold`}>
                {day.rest ? ct('rest') : `${day.hours}h`}
                {day.extended && <span className="text-xs block">*ext</span>}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary/20 rounded"></div>
              <span>{ct('standard9h')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-warning/20 rounded"></div>
              <span>{ct('extended10h')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-success/20 rounded"></div>
              <span>{ct('weeklyRestNote')}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            {ct('patternNote')}
          </p>
        </div>
      </div>

      {/* Enforcement & Penalties */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Scale className="w-6 h-6 text-primary" />
          {ct('enforcementTitle')}
        </h2>
        
        <DataTable
          headers={[ct('violation'), ct('typicalFineRange'), ct('additionalConsequences')]}
          rows={[
            [ct('exceedingDailyDriving'), "€150-500 per hour", "Points on license, vehicle delay"],
            [ct('missingBreaks'), "€100-300 per violation", "Driver prohibited from continuing"],
            [ct('insufficientDailyRest'), "€200-600", "Required to take rest before continuing"],
            [ct('exceedingWeeklyDriving'), "€300-1,000", "Vehicle may be immobilized"],
            [ct('falsifyingTachograph'), "€1,000-30,000", "Criminal prosecution, license revocation"],
            [ct('noTachographRecords'), "€500-2,000", "Vehicle impounded until resolved"],
            [ct('weeklyRestInCab'), "€100-500", "Required to book hotel accommodation"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              {ct('dispatcherResponsibilityTitle')}
            </h4>
            <ul className="text-sm space-y-1">
              <li>• {ct('dispatcherResp1')}</li>
              <li>• {ct('dispatcherResp2')}</li>
              <li>• {ct('dispatcherResp3')}</li>
              <li>• {ct('dispatcherResp4')}</li>
            </ul>
          </div>
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              {ct('stayCompliantTitle')}
            </h4>
            <ul className="text-sm space-y-1">
              <li>• {ct('stayCompliant1')}</li>
              <li>• {ct('stayCompliant2')}</li>
              <li>• {ct('stayCompliant3')}</li>
              <li>• {ct('stayCompliant4')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tachograph Basics */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          {ct('tachographTitle')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">{ct('driverCardModes')}</h3>
            <div className="space-y-2">
              {[
                { mode: ct('modeDriving'), symbol: "🚛", desc: ct('modeDrivingDesc'), color: "bg-primary/20" },
                { mode: ct('modeOtherWork'), symbol: "⚒️", desc: ct('modeOtherWorkDesc'), color: "bg-warning/20" },
                { mode: ct('modeAvailable'), symbol: "⏳", desc: ct('modeAvailableDesc'), color: "bg-info/20" },
                { mode: ct('modeBreakRest'), symbol: "🛏️", desc: ct('modeBreakRestDesc'), color: "bg-success/20" },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 ${item.color} rounded-lg`}>
                  <span className="text-2xl">{item.symbol}</span>
                  <div>
                    <p className="font-medium">{item.mode}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{ct('recordKeepingTitle')}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 p-2 bg-muted/30 rounded">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('recordKeeping1')}</span>
              </li>
              <li className="flex items-start gap-2 p-2 bg-muted/30 rounded">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('recordKeeping2')}</span>
              </li>
              <li className="flex items-start gap-2 p-2 bg-muted/30 rounded">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('recordKeeping3')}</span>
              </li>
              <li className="flex items-start gap-2 p-2 bg-muted/30 rounded">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('recordKeeping4')}</span>
              </li>
              <li className="flex items-start gap-2 p-2 bg-muted/30 rounded">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('recordKeeping5')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Article 12 Exceptions */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-primary" />
          {ct('article12Title')}
        </h2>
        
        <p className="text-muted-foreground mb-4">
          {ct('article12Desc')}
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">{ct('validReasons')}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct('validReason1')}</li>
              <li>• {ct('validReason2')}</li>
              <li>• {ct('validReason3')}</li>
              <li>• {ct('validReason4')}</li>
              <li>• {ct('validReason5')}</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">{ct('notValidReasons')}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct('notValid1')}</li>
              <li>• {ct('notValid2')}</li>
              <li>• {ct('notValid3')}</li>
              <li>• {ct('notValid4')}</li>
              <li>• {ct('notValid5')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 p-4 bg-info/10 border border-info/30 rounded-lg">
          <h4 className="font-semibold mb-2">{ct('requiredDocumentation')}</h4>
          <p className="text-sm">
            {ct('requiredDocumentationDesc')}
          </p>
        </div>
      </div>

      {/* Planning Calculator */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Calculator className="w-6 h-6 text-primary" />
          {ct('calculatorTitle')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">{ct('timeToDistance')}</h3>
            <DataTable
              headers={[ct('drivingTime'), ct('average75'), ct('withBreaks')]}
              rows={[
                ["4h 30min", "~340 km", "4h 30min total"],
                ["9h (standard)", "~675 km", "~10h 15min total"],
                ["10h (extended)", "~750 km", "~11h 30min total"],
                ["18h (double)", "~1,200 km", "~21h total"],
              ]}
            />
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">{ct('commonRouteTimes')}</h3>
            <DataTable
              headers={[ct('routeHeader'), ct('distance'), ct('drivingDays')]}
              rows={[
                ["DE-UK", "~800-1,200 km", "1.5-2 days"],
                ["DE-IT (North)", "~900 km", "1.5 days"],
                ["DE-ES", "~1,800 km", "3 days"],
                ["PL-FR", "~1,500 km", "2.5 days"],
                ["NL-CZ", "~900 km", "1.5 days"],
              ]}
            />
          </div>
        </div>
      </div>

      {/* Multi-crew Rules */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Truck className="w-6 h-6 text-primary" />
          {ct('multiManningTitle')}
        </h2>

        <p className="text-muted-foreground mb-4">
          {ct('multiManningDesc')}
        </p>

        <DataTable
          headers={[ct('aspect'), ct('singleDriverHeader'), ct('multiManningHeader')]}
          rows={[
            [ct('maxDrivingBeforeBreak'), "4h 30min", "4h 30min per driver"],
            [ct('dailyDrivingMM'), "9h (10h 2×/week)", "9h per driver"],
            [ct('dailyRestMM'), "11h (or 9h reduced)", "9h minimum, within 30h of last rest"],
            [ct('totalShiftWindow'), "13-15 hours", "Up to 21 hours"],
            [ct('distancePer24h'), "~700 km", "~1,200 km"],
            [ct('presenceRequirement'), "-", "2nd driver must be present from hour 1"],
          ]}
        />

        <div className="mt-4 p-4 bg-warning/10 border border-warning/30 rounded-lg">
          <p className="text-sm flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <span><strong>Important:</strong> {ct('multiManningImportant')}</span>
          </p>
        </div>
      </div>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="compliance" />

      {/* Quiz */}
      <Quiz title={ct('quizTitle')} questions={quizzes.compliance} chapterId="compliance" />
    </div>
  );
}
