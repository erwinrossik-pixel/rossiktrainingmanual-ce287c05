import { 
  FileText, Award, Shield, AlertTriangle, Truck, Scale, Route, 
  CheckCircle2, Clock, Euro, Globe, Building2, Phone, MapPin,
  FileCheck, Users, Ruler, Weight, Calendar, Info, X, Lightbulb,
  ArrowRight, Timer, Zap, Target, Calculator
} from "lucide-react";
import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Checklist } from "../Checklist";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function LicensesOversizeChapter() {
  const { ct } = useChapterTranslation('licenses-oversize');

  return (
    <div className="space-y-10">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Award}
        variant="licenses"
      />

      {/* Quick Reference Cheat Sheet - AI Recommendation Implementation */}
      <section className="content-section">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6" />
            {ct('quickReferenceTitle') || '⚡ Quick Reference Cheat Sheet'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* License Types Quick Card */}
            <div className="bg-background rounded-xl p-4 border border-border">
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                {ct('licenseTypesQuick') || 'License Types'}
              </h3>
              <ul className="space-y-1 text-xs">
                <li className="flex justify-between">
                  <span className="font-medium">{ct('communityLicense')}</span>
                  <span className="text-muted-foreground">EU/EEA</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">{ct('nationalLicense')}</span>
                  <span className="text-muted-foreground">{ct('domestic') || 'Domestic'}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">CEMT</span>
                  <span className="text-muted-foreground">Non-EU</span>
                </li>
              </ul>
            </div>

            {/* Financial Capacity Quick Card */}
            <div className="bg-background rounded-xl p-4 border border-border">
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <Euro className="w-4 h-4 text-primary" />
                {ct('financialCapQuick') || 'Financial Capacity'}
              </h3>
              <ul className="space-y-1 text-xs">
                <li className="flex justify-between">
                  <span>{ct('firstVehicleShort') || '1st vehicle'} (&gt;3.5t)</span>
                  <span className="font-bold text-success">€9,000</span>
                </li>
                <li className="flex justify-between">
                  <span>{ct('additionalVehicleShort') || 'Each additional'}</span>
                  <span className="font-bold text-success">€5,000</span>
                </li>
                <li className="flex justify-between">
                  <span>{ct('lightVehicleShort') || 'Light (2.5-3.5t)'}</span>
                  <span className="font-bold text-success">€1,800</span>
                </li>
              </ul>
            </div>

            {/* Standard Dimensions Quick Card */}
            <div className="bg-background rounded-xl p-4 border border-border">
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <Ruler className="w-4 h-4 text-primary" />
                {ct('standardDimsQuick') || 'EU Standard Limits'}
              </h3>
              <ul className="space-y-1 text-xs">
                <li className="flex justify-between">
                  <span>{ct('maxHeight') || 'Height'}</span>
                  <span className="font-bold">4.00m</span>
                </li>
                <li className="flex justify-between">
                  <span>{ct('maxWidth') || 'Width'}</span>
                  <span className="font-bold">2.55m</span>
                </li>
                <li className="flex justify-between">
                  <span>{ct('maxLength') || 'Length'}</span>
                  <span className="font-bold">16.50m</span>
                </li>
                <li className="flex justify-between">
                  <span>{ct('maxWeight') || 'Weight'}</span>
                  <span className="font-bold">40t / 44t</span>
                </li>
              </ul>
            </div>

            {/* Permit Timeline Quick Card */}
            <div className="bg-background rounded-xl p-4 border border-border">
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <Timer className="w-4 h-4 text-primary" />
                {ct('permitTimelineQuick') || 'Permit Timeline'}
              </h3>
              <ul className="space-y-1 text-xs">
                <li className="flex justify-between">
                  <span>{ct('singleCountry') || 'Single country'}</span>
                  <span className="font-bold text-info">1-2 {ct('weeksShort') || 'wks'}</span>
                </li>
                <li className="flex justify-between">
                  <span>{ct('multiCountry') || 'Multi-country'}</span>
                  <span className="font-bold text-warning">3-4 {ct('weeksShort') || 'wks'}</span>
                </li>
                <li className="flex justify-between">
                  <span>{ct('complexOversizeShort') || 'Complex oversize'}</span>
                  <span className="font-bold text-destructive">4-6 {ct('weeksShort') || 'wks'}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 bg-warning/10 rounded-lg border border-warning/20">
            <p className="text-xs flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-warning flex-shrink-0" />
              <span className="font-medium">{ct('cheatSheetNote') || 'Pro Tip: Save this cheat sheet! These are the most frequently needed reference values for daily operations.'}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Introduction to Transport Licenses */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-7 h-7 text-primary" />
          {ct('section1Title')}
        </h2>
        
        <div className="info-card mb-6">
          <p className="text-muted-foreground leading-relaxed mb-4">
            {ct('section1Intro')}
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-muted/50 rounded-xl text-center">
              <p className="text-3xl font-bold text-primary">3</p>
              <p className="text-sm text-muted-foreground">{ct('basicRequirements')}</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-xl text-center">
              <p className="text-3xl font-bold text-primary">27</p>
              <p className="text-sm text-muted-foreground">{ct('euMemberStates')}</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-xl text-center">
              <p className="text-3xl font-bold text-primary">5 {ct('yearsShort')}</p>
              <p className="text-sm text-muted-foreground">{ct('licenseValidity')}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard title={ct('legalFrameworkTitle')} icon={Globe} variant="info">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                <span>{ct('regulation1071')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                <span>{ct('regulation1072')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                <span>{ct('mobilityPackage')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                <span>{ct('directive9653')}</span>
              </li>
            </ul>
          </InfoCard>

          <InfoCard title={ct('whyLicensesTitle')} icon={Shield} variant="highlight">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>{ct('guaranteeCompetence')}</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>{ct('ensureFinancial')}</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>{ct('verifyReputation')}</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>{ct('allowsLegalOperation')}</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>{ct('requiredForContracts')}</span>
              </li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Section 2: Types of Transport Licenses */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <Award className="w-7 h-7 text-primary" />
          {ct('section2Title')}
        </h2>

        <DataTable
          headers={[ct('licenseType'), ct('description'), ct('coverage'), ct('validity'), ct('specialRequirements')]}
          rows={[
            [ct('communityLicense'), ct('communityLicenseDesc'), ct('communityLicenseCoverage'), ct('fiveYears'), ct('cpcManagerFinancialSeat')],
            [ct('nationalLicense'), ct('nationalLicenseDesc'), ct('issuingCountry'), ct('fiveYears'), ct('similarRequirements')],
            [ct('conformingCopies'), ct('conformingCopiesDesc'), ct('sameRoutesAsBase'), ct('mainLicenseDuration'), ct('onePerVehicle')],
            [ct('ltiLicense'), ct('ltiLicenseDesc'), ct('accordingTo2022'), ct('fiveYears'), ct('reducedFinancialRequirements')],
            [ct('cemtAuthorizations'), ct('cemtDesc'), ct('cemtCoverage'), ct('annualRenewal'), ct('allocationByAuthority')],
            [ct('bilateralAuthorizations'), ct('bilateralDesc'), ct('accordingToAgreement'), ct('variable'), ct('requestedForSpecific')],
          ]}
        />

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <InfoCard title={ct('communityLicenseKeyElements')} icon={FileCheck} variant="default">
            <div className="space-y-4">
              <p className="text-sm">{ct('fundamentalDocument')}</p>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">{ct('infoOnLicense')}</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• {ct('operatorNameAddress')}</li>
                  <li>• {ct('licenseNumberCountry')}</li>
                  <li>• {ct('issueExpiryDate')}</li>
                  <li>• {ct('stampSignature')}</li>
                  <li>• {ct('authorizedVehicleTypes')}</li>
                </ul>
              </div>
            </div>
          </InfoCard>

          <InfoCard title={ct('conformingCopiesTitle')} icon={FileText} variant="default">
            <div className="space-y-4">
              <p className="text-sm">{ct('conformingCopiesInfo')}</p>
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-warning">{ct('attention')}</p>
                    <p className="text-muted-foreground">{ct('missingCopyWarning')}</p>
                  </div>
                </div>
              </div>
            </div>
          </InfoCard>
        </div>
      </section>

      {/* Section 3: Requirements for Obtaining Transport License */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-7 h-7 text-primary" />
          {ct('section3Title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="info-card">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-3">{ct('professionalCompetence')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('certifiedTransportManager')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('cpcExamPassed')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('residenceInEU')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('realLinkWithOperations')}</span>
              </li>
            </ul>
          </div>

          <div className="info-card">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4">
              <Euro className="w-6 h-6 text-success" />
            </div>
            <h3 className="font-semibold text-lg mb-3">{ct('financialCapacity')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('firstVehicleAmount')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('additionalVehicleAmount')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('demonstratedByGuarantee')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('lightVehiclesAmount')}</span>
              </li>
            </ul>
          </div>

          <div className="info-card">
            <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-info" />
            </div>
            <h3 className="font-semibold text-lg mb-3">{ct('goodRepute')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('noSeriousCriminal')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('noSeriousTransportViolations')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('cleanCriminalRecord')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('verifiedByERRU')}</span>
              </li>
            </ul>
          </div>
        </div>

        <InfoCard title={ct('realStableSeat')} icon={Building2} variant="info">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">{ct('seatRequirements')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct('premisesForDocuments')}</li>
                <li>• {ct('technicalEquipment')}</li>
                <li>• {ct('accessToParking')}</li>
                <li>• {ct('maintenanceFacilities')}</li>
                <li>• {ct('stableVerifiableAddress')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{ct('requiredDocuments')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct('leaseOrOwnership')}</li>
                <li>• {ct('utilityPaymentProof')}</li>
                <li>• {ct('maintenanceContract')}</li>
                <li>• {ct('facilityPhotos')}</li>
                <li>• {ct('localOperatingPermits')}</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Section 4: Certificate of Professional Competence (CPC) */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <Award className="w-7 h-7 text-primary" />
          {ct('section4Title')}
        </h2>

        <div className="info-card mb-6">
          <p className="text-muted-foreground leading-relaxed">{ct('cpcIntro')}</p>
        </div>

        <DataTable
          headers={[ct('cpcModule'), ct('topicsCovered'), ct('examQuestions'), ct('duration')]}
          rows={[
            [ct('civilLaw'), ct('civilLawTopics'), `~25 ${ct('questions')}`, `1 ${ct('hour')}`],
            [ct('commercialLaw'), ct('commercialLawTopics'), `~25 ${ct('questions')}`, `1 ${ct('hour')}`],
            [ct('socialLaw'), ct('socialLawTopics'), `~25 ${ct('questions')}`, `1 ${ct('hour')}`],
            [ct('fiscalLaw'), ct('fiscalLawTopics'), `~20 ${ct('questions')}`, `45 ${ct('minutes')}`],
            [ct('commercialFinancialManagement'), ct('managementTopics'), `~30 ${ct('questions')}`, `1.5 ${ct('hours')}`],
            [ct('marketAccess'), ct('marketAccessTopics'), `~25 ${ct('questions')}`, `1 ${ct('hour')}`],
            [ct('technicalStandards'), ct('technicalTopics'), `~25 ${ct('questions')}`, `1 ${ct('hour')}`],
            [ct('roadSafety'), ct('safetyTopics'), `~25 ${ct('questions')}`, `1 ${ct('hour')}`],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <InfoCard title={ct('cpcExamPreparation')} icon={FileText}>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                <span>{ct('enrollInCourse')}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                <span>{ct('studyMaterials')}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                <span>{ct('attendAllSessions')}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                <span>{ct('solvePracticeTests')}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                <span>{ct('takeOfficialExam')}</span>
              </li>
            </ul>
          </InfoCard>

          <InfoCard title={ct('cpcExamStats')} icon={Target} variant="highlight">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-primary">60%</p>
                <p className="text-xs text-muted-foreground">{ct('averagePassRate')}</p>
              </div>
              <div className="bg-card rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-primary">200</p>
                <p className="text-xs text-muted-foreground">{ct('questionsInExam')}</p>
              </div>
              <div className="bg-card rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-primary">4h</p>
                <p className="text-xs text-muted-foreground">{ct('totalExamDuration')}</p>
              </div>
              <div className="bg-card rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-primary">70%</p>
                <p className="text-xs text-muted-foreground">{ct('minimumPassScore')}</p>
              </div>
            </div>
          </InfoCard>
        </div>
      </section>

      {/* Section 5: Cabotage Rules */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <Route className="w-7 h-7 text-primary" />
          {ct('section5Title')}
        </h2>

        <div className="info-card mb-6">
          <p className="text-muted-foreground leading-relaxed mb-4">{ct('cabotageIntro')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="info-card border-2 border-primary/20">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              {ct('currentRules2024')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-medium">{ct('maxCabotageOperations')}</p>
                  <p className="text-muted-foreground">{ct('within7Days')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">4</div>
                <div>
                  <p className="font-medium">{ct('coolingOffPeriod')}</p>
                  <p className="text-muted-foreground">{ct('beforeNewOperations')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-medium">{ct('priorInternationalTransport')}</p>
                  <p className="text-muted-foreground">{ct('mandatoryBeforeCabotage')}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="info-card border-2 border-destructive/20">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <X className="w-5 h-5 text-destructive" />
              {ct('sanctionsForViolations')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">{ct('finesRange')}</p>
                  <p className="text-muted-foreground">{ct('variesByState')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">{ct('vehicleImmobilization')}</p>
                  <p className="text-muted-foreground">{ct('untilPayment')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">{ct('licenseLoss')}</p>
                  <p className="text-muted-foreground">{ct('forRepeatedViolations')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <InfoCard title={ct('cabotageDocumentation')} icon={FileText} variant="info">
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct('cmrInternationalEntry')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct('cmrForEachOperation')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct('conformingCopyLicense')}</span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct('tachographRecords')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct('a1Form')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct('transportOrdersAll')}</span>
              </li>
            </ul>
          </div>
        </InfoCard>
      </section>

      {/* Section 6: Oversize and Heavy Transport */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <Truck className="w-7 h-7 text-primary" />
          {ct('section6Title')}
        </h2>

        <div className="info-card mb-6">
          <p className="text-muted-foreground leading-relaxed mb-4">{ct('oversizeIntro')}</p>
          <div className="bg-warning/10 border border-warning/20 rounded-xl p-4 mt-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0" />
              <div>
                <p className="font-semibold text-warning">{ct('legalDefinition')}</p>
                <p className="text-sm text-muted-foreground">{ct('legalDefinitionText')}</p>
              </div>
            </div>
          </div>
        </div>

        <DataTable
          headers={[ct('category'), ct('standardDimensions'), ct('oversizeExceedance'), ct('specialRequirementsCol')]}
          rows={[
            [ct('length'), ct('maxLength'), ct('lengthExceed'), ct('lengthRequirements')],
            [ct('width'), ct('maxWidth'), ct('widthExceed'), ct('widthRequirements')],
            [ct('height'), ct('maxHeight'), ct('heightExceed'), ct('heightRequirements')],
            [ct('totalWeight'), ct('maxTotalWeight'), ct('weightExceed'), ct('weightRequirements')],
            [ct('axleWeight'), ct('maxAxleWeight'), ct('axleExceed'), ct('axleRequirements')],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <InfoCard title={ct('oversizeClassification')} icon={Scale}>
            <div className="space-y-4">
              <div className="p-3 bg-success/10 rounded-lg">
                <p className="font-semibold text-success text-sm">{ct('categoryILight')}</p>
                <p className="text-xs text-muted-foreground">{ct('categoryIDesc')}</p>
              </div>
              <div className="p-3 bg-warning/10 rounded-lg">
                <p className="font-semibold text-warning text-sm">{ct('categoryIIMedium')}</p>
                <p className="text-xs text-muted-foreground">{ct('categoryIIDesc')}</p>
              </div>
              <div className="p-3 bg-destructive/10 rounded-lg">
                <p className="font-semibold text-destructive text-sm">{ct('categoryIIIHeavy')}</p>
                <p className="text-xs text-muted-foreground">{ct('categoryIIIDesc')}</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <p className="font-semibold text-primary text-sm">{ct('megaTransport')}</p>
                <p className="text-xs text-muted-foreground">{ct('megaTransportDesc')}</p>
              </div>
            </div>
          </InfoCard>

          <InfoCard title={ct('typesOversizeCargo')} icon={Truck}>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1" />
                <span>{ct('industrialMachinery')}</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1" />
                <span>{ct('modularConstruction')}</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1" />
                <span>{ct('agriculturalEquipment')}</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1" />
                <span>{ct('windEquipment')}</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1" />
                <span>{ct('specialVehicles')}</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1" />
                <span>{ct('metalStructures')}</span>
              </li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Section 7: Oversize Transport Permits */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <FileCheck className="w-7 h-7 text-primary" />
          {ct('section7Title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <InfoCard title={ct('authorizationProcess')} icon={Route}>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-medium text-sm">{ct('routeStudy')}</p>
                  <p className="text-xs text-muted-foreground">{ct('routeStudyDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-medium text-sm">{ct('permitApplication')}</p>
                  <p className="text-xs text-muted-foreground">{ct('permitApplicationDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-medium text-sm">{ct('verificationApproval')}</p>
                  <p className="text-xs text-muted-foreground">{ct('verificationDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                <div>
                  <p className="font-medium text-sm">{ct('escortCoordination')}</p>
                  <p className="text-xs text-muted-foreground">{ct('escortCoordinationDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                <div>
                  <p className="font-medium text-sm">{ct('transportExecution')}</p>
                  <p className="text-xs text-muted-foreground">{ct('transportExecutionDesc')}</p>
                </div>
              </div>
            </div>
          </InfoCard>

          <InfoCard title={ct('requiredDocumentation')} icon={FileText}>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct('applicationFormOfficial')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct('detailedCargoDescription')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct('vehicleConfiguration')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct('proposedRouteCheckpoints')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct('specialTransportInsurance')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct('vehicleConformityCert')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct('transportLicenseConforming')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct('permitFeePaymentProof')}</span>
              </li>
            </ul>
          </InfoCard>
        </div>

        <DataTable
          headers={[ct('country'), ct('processingTime'), ct('estimatedCost'), ct('notes')]}
          rows={[
            [ct('germanyName'), ct('germanyTime'), ct('germanyCost'), ct('germanyNotes')],
            [ct('franceName'), ct('franceTime'), ct('franceCost'), ct('franceNotes')],
            [ct('polandName'), ct('polandTime'), ct('polandCost'), ct('polandNotes')],
            [ct('czechName'), ct('czechTime'), ct('czechCost'), ct('czechNotes')],
            [ct('austriaName'), ct('austriaTime'), ct('austriaCost'), ct('austriaNotes')],
            [ct('italyName'), ct('italyTime'), ct('italyCost'), ct('italyNotes')],
            [ct('spainName'), ct('spainTime'), ct('spainCost'), ct('spainNotes')],
          ]}
        />
      </section>

      {/* Section 8: Safety Requirements */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-7 h-7 text-primary" />
          {ct('section8Title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="info-card">
            <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-warning" />
            </div>
            <h3 className="font-semibold mb-3">{ct('mandatorySignaling')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct('signalBoard')}</li>
              <li>• {ct('yellowFlashingLights')}</li>
              <li>• {ct('reflectiveMarkers')}</li>
              <li>• {ct('rearDimensions')}</li>
              <li>• {ct('frontWidthIndicators')}</li>
            </ul>
          </div>

          <div className="info-card">
            <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-info" />
            </div>
            <h3 className="font-semibold mb-3">{ct('escortVehicles')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>{ct('whenRequired')}</strong></li>
              <li>• {ct('widthOver3m')}</li>
              <li>• {ct('lengthOver25m')}</li>
              <li>• {ct('weightOver80t')}</li>
              <li>• {ct('urbanAreas')}</li>
            </ul>
          </div>

          <div className="info-card">
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="font-semibold mb-3">{ct('timeRestrictions')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct('weekdayHours')}</li>
              <li>• {ct('weekendBan')}</li>
              <li>• {ct('holidayBan')}</li>
              <li>• {ct('nightPermitRequired')}</li>
              <li>• {ct('summerRestrictions')}</li>
            </ul>
          </div>
        </div>

        <InfoCard title={ct('oversizeDriverRequirements')} icon={Users} variant="info">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">{ct('qualificationsNeeded')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct('ceLicense')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct('driverCPC')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct('minimumExperience')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct('specialTransportTraining')}</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">{ct('specialResponsibilities')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5" />
                  <span>{ct('extendedDailyCheck')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5" />
                  <span>{ct('continuousEscortComm')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5" />
                  <span>{ct('strictRouteCompliance')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5" />
                  <span>{ct('immediateIssueReporting')}</span>
                </li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Section 9: Costs and Pricing */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <Euro className="w-7 h-7 text-primary" />
          {ct('section9Title')}
        </h2>

        <DataTable
          headers={[ct('costElement'), ct('costDescription'), ct('indicativeValues')]}
          rows={[
            [ct('transportPermits'), ct('governmentFeesPerCountry'), `50 - 2.000€ ${ct('perCountry')}`],
            [ct('pilotCarEscort'), ct('escortVehiclesPersonnel'), `200 - 500€ ${ct('per100km')}`],
            [ct('policeEscort'), ct('mandatoryInCases'), ct('policeEscortCost')],
            [ct('specialPlatformRental'), ct('multiAxleExtendable'), ct('platformRentalCost')],
            [ct('routeStudyCost'), ct('technicalAnalysisPlanning'), ct('routeStudyRange')],
            [ct('infrastructureChanges'), ct('trafficLightsCables'), ct('infrastructureRange')],
            [ct('additionalInsurance'), ct('specialTransportRisks'), ct('insuranceRange')],
            [ct('kmPriceIncrease'), ct('additionalVsStandard'), ct('kmIncreaseRange')],
          ]}
        />

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <InfoCard title={ct('costCalculationExample')} icon={Calculator} variant="highlight">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-border pb-2">
                <span>{ct('baseTransport')}</span>
                <span className="font-semibold">1.500€</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span>{ct('permitsExample')}</span>
                <span className="font-semibold">450€</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span>{ct('pilotCarExample')}</span>
                <span className="font-semibold">800€</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span>{ct('specialPlatformExample')}</span>
                <span className="font-semibold">1.200€</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span>{ct('additionalInsuranceExample')}</span>
                <span className="font-semibold">350€</span>
              </div>
              <div className="flex justify-between pt-2 text-base font-bold text-primary">
                <span>{ct('totalEstimated')}</span>
                <span>4.300€</span>
              </div>
            </div>
          </InfoCard>

          <InfoCard title={ct('pricingFactors')} icon={Target}>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Ruler className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">{ct('cargoDimensions')}</p>
                  <p>{ct('cargoDimensionsDesc')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Weight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">{ct('totalWeightFactor')}</p>
                  <p>{ct('totalWeightFactorDesc')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">{ct('distanceAndCountries')}</p>
                  <p>{ct('distanceAndCountriesDesc')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">{ct('urgency')}</p>
                  <p>{ct('urgencyDesc')}</p>
                </div>
              </li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Section 10: Checklists */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <FileCheck className="w-7 h-7 text-primary" />
          {ct('section10Title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Checklist
            title={ct('licenseVerificationChecklist')}
            items={[
              ct('licenseValid'),
              ct('conformingCopiesAll'),
              ct('cpcManagerValid'),
              ct('financialCapacityDemonstrated'),
              ct('rcaCmrValid'),
              ct('cemtIfNeeded'),
              ct('erruRegistration'),
              ct('vehicleDocsUpdated'),
            ]}
          />

          <Checklist
            title={ct('oversizePreparationChecklist')}
            items={[
              ct('exactDimensions'),
              ct('routeStudyComplete'),
              ct('permitsAllCountries'),
              ct('pilotCarsCoordinated'),
              ct('qualifiedDriver'),
              ct('signalingComplete'),
              ct('additionalInsuranceContracted'),
              ct('emergencyPlan'),
              ct('radioVerified'),
              ct('weatherChecked'),
            ]}
          />
        </div>
      </section>

      {/* Section 11: Common Mistakes */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-7 h-7 text-primary" />
          {ct('section11Title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-xl">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">{ct('mistake1Title')}</p>
                  <p className="text-xs text-muted-foreground mt-1">{ct('mistake1Solution')}</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-xl">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">{ct('mistake2Title')}</p>
                  <p className="text-xs text-muted-foreground mt-1">{ct('mistake2Solution')}</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-xl">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">{ct('mistake3Title')}</p>
                  <p className="text-xs text-muted-foreground mt-1">{ct('mistake3Solution')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-xl">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">{ct('mistake4Title')}</p>
                  <p className="text-xs text-muted-foreground mt-1">{ct('mistake4Solution')}</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-xl">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">{ct('mistake5Title')}</p>
                  <p className="text-xs text-muted-foreground mt-1">{ct('mistake5Solution')}</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-xl">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">{ct('mistake6Title')}</p>
                  <p className="text-xs text-muted-foreground mt-1">{ct('mistake6Solution')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Recommendation: Visual Infographic - Dimension/Weight Limits Cheat Sheet */}
      <section className="content-section">
        <div className="info-card bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-2 border-amber-200 dark:border-amber-800">
          <h2 className="section-title flex items-center gap-3 text-amber-800 dark:text-amber-200">
            <Ruler className="w-7 h-7" />
            {ct('dimensionCheatSheetTitle') || 'Quick Reference: Dimension & Weight Limits'}
          </h2>
          <p className="text-muted-foreground mb-6">{ct('dimensionCheatSheetSubtitle') || 'Visual guide for standard vs. oversize thresholds - memorize these key numbers!'}</p>

          {/* Visual Dimension Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Length */}
            <div className="bg-background rounded-xl p-4 border-2 border-info/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-info/10 rounded-bl-full" />
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-5 h-5 text-info rotate-0" />
                <span className="font-semibold text-info">{ct('lengthLabel') || 'LENGTH'}</span>
              </div>
              <div className="text-3xl font-bold text-info mb-1">16.5m</div>
              <p className="text-xs text-muted-foreground">{ct('standardMaxLength') || 'Standard max (truck+trailer)'}</p>
              <div className="mt-3 pt-3 border-t border-dashed">
                <p className="text-xs font-medium text-destructive">{ct('oversizeAbove') || 'OVERSIZE:'} &gt; 16.5m</p>
                <p className="text-xs text-muted-foreground">{ct('requiresPermitEscort') || 'Requires permit + pilot car'}</p>
              </div>
            </div>

            {/* Width */}
            <div className="bg-background rounded-xl p-4 border-2 border-warning/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-warning/10 rounded-bl-full" />
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-5 h-5 text-warning rotate-90" />
                <span className="font-semibold text-warning">{ct('widthLabel') || 'WIDTH'}</span>
              </div>
              <div className="text-3xl font-bold text-warning mb-1">2.55m</div>
              <p className="text-xs text-muted-foreground">{ct('standardMaxWidth') || 'Standard max (2.60m reefer)'}</p>
              <div className="mt-3 pt-3 border-t border-dashed">
                <p className="text-xs font-medium text-destructive">{ct('oversizeAbove') || 'OVERSIZE:'} &gt; 2.55m</p>
                <p className="text-xs text-muted-foreground">{ct('restrictedHoursEscort') || 'Restricted hours + escort'}</p>
              </div>
            </div>

            {/* Height */}
            <div className="bg-background rounded-xl p-4 border-2 border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full" />
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-5 h-5 text-primary -rotate-90" />
                <span className="font-semibold text-primary">{ct('heightLabel') || 'HEIGHT'}</span>
              </div>
              <div className="text-3xl font-bold text-primary mb-1">4.00m</div>
              <p className="text-xs text-muted-foreground">{ct('standardMaxHeight') || 'Standard max (4.30m some countries)'}</p>
              <div className="mt-3 pt-3 border-t border-dashed">
                <p className="text-xs font-medium text-destructive">{ct('oversizeAbove') || 'OVERSIZE:'} &gt; 4.00m</p>
                <p className="text-xs text-muted-foreground">{ct('routeStudyBridges') || 'Route study + bridge verification'}</p>
              </div>
            </div>

            {/* Weight */}
            <div className="bg-background rounded-xl p-4 border-2 border-success/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-success/10 rounded-bl-full" />
              <div className="flex items-center gap-2 mb-2">
                <Weight className="w-5 h-5 text-success" />
                <span className="font-semibold text-success">{ct('weightLabel') || 'WEIGHT'}</span>
              </div>
              <div className="text-3xl font-bold text-success mb-1">40t</div>
              <p className="text-xs text-muted-foreground">{ct('standardMaxWeight') || 'Standard GVW (44t some routes)'}</p>
              <div className="mt-3 pt-3 border-t border-dashed">
                <p className="text-xs font-medium text-destructive">{ct('oversizeAbove') || 'OVERSIZE:'} &gt; 40t</p>
                <p className="text-xs text-muted-foreground">{ct('specialPlatformAxles') || 'Special platform + multi-axle'}</p>
              </div>
            </div>
          </div>

          {/* Quick Decision Matrix */}
          <div className="bg-background rounded-xl p-4 border">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              {ct('quickDecisionMatrix') || 'Quick Decision: Do I Need a Special Permit?'}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                <p className="font-medium text-success mb-2">{ct('standardTransport') || '✓ STANDARD TRANSPORT'}</p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• L ≤ 16.5m</li>
                  <li>• W ≤ 2.55m</li>
                  <li>• H ≤ 4.00m</li>
                  <li>• Weight ≤ 40t</li>
                </ul>
                <p className="text-xs font-medium text-success mt-2">{ct('noPermitNeeded') || 'No special permit needed'}</p>
              </div>
              <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                <p className="font-medium text-warning mb-2">{ct('categoryI') || '⚠ CATEGORY I (Light)'}</p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• L up to 22m</li>
                  <li>• W up to 3.0m</li>
                  <li>• Weight 40-60t</li>
                </ul>
                <p className="text-xs font-medium text-warning mt-2">{ct('permitRequired') || 'Permit required, 1-2 weeks'}</p>
              </div>
              <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                <p className="font-medium text-destructive mb-2">{ct('categoryIIIII') || '⛔ CATEGORY II-III (Heavy)'}</p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• L &gt; 22m / W &gt; 3m</li>
                  <li>• H &gt; 4.5m</li>
                  <li>• Weight &gt; 60t</li>
                </ul>
                <p className="text-xs font-medium text-destructive mt-2">{ct('fullProcessEscort') || 'Full process + escort + police'}</p>
              </div>
            </div>
          </div>

          {/* Axle Weight Reference */}
          <div className="mt-4 p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-primary" />
              {ct('axleWeightReference') || 'Axle Weight Reference'}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="bg-background p-2 rounded">
                <p className="text-lg font-bold text-primary">10t</p>
                <p className="text-xs text-muted-foreground">{ct('singleAxle') || 'Single axle'}</p>
              </div>
              <div className="bg-background p-2 rounded">
                <p className="text-lg font-bold text-primary">11.5t</p>
                <p className="text-xs text-muted-foreground">{ct('driveAxle') || 'Drive axle'}</p>
              </div>
              <div className="bg-background p-2 rounded">
                <p className="text-lg font-bold text-primary">18t</p>
                <p className="text-xs text-muted-foreground">{ct('tandemAxle') || 'Tandem axle'}</p>
              </div>
              <div className="bg-background p-2 rounded">
                <p className="text-lg font-bold text-primary">24t</p>
                <p className="text-xs text-muted-foreground">{ct('tripleAxle') || 'Triple axle'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Recommendation: Country Comparison Table */}
      <section className="content-section">
        <div className="info-card bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800">
          <h2 className="section-title flex items-center gap-3 text-blue-800 dark:text-blue-200">
            <Globe className="w-7 h-7" />
            {ct('countryComparisonTitle') || 'Country Regulation Comparison'}
          </h2>
          <p className="text-muted-foreground mb-6">{ct('countryComparisonSubtitle') || 'Key differences in oversize transport regulations across major European countries'}</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border p-3 text-left font-semibold">{ct('countryCol') || 'Country'}</th>
                  <th className="border p-3 text-center font-semibold">{ct('maxHeightCol') || 'Max Height'}</th>
                  <th className="border p-3 text-center font-semibold">{ct('maxWeightCol') || 'Max Weight'}</th>
                  <th className="border p-3 text-center font-semibold">{ct('nightTransportCol') || 'Night Transport'}</th>
                  <th className="border p-3 text-center font-semibold">{ct('permitTimeCol') || 'Permit Time'}</th>
                  <th className="border p-3 text-center font-semibold">{ct('escortFromCol') || 'Escort From'}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/30">
                  <td className="border p-3 font-medium">🇩🇪 {ct('germany') || 'Germany'}</td>
                  <td className="border p-3 text-center">4.00m</td>
                  <td className="border p-3 text-center">40t (44t eco)</td>
                  <td className="border p-3 text-center text-destructive">{ct('restricted') || 'Restricted'}</td>
                  <td className="border p-3 text-center">2-4 {ct('weeks') || 'weeks'}</td>
                  <td className="border p-3 text-center">&gt; 3.0m {ct('widthShort') || 'width'}</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="border p-3 font-medium">🇫🇷 {ct('france') || 'France'}</td>
                  <td className="border p-3 text-center">4.00m</td>
                  <td className="border p-3 text-center">40t</td>
                  <td className="border p-3 text-center text-success">{ct('allowed') || 'Allowed'}</td>
                  <td className="border p-3 text-center">1-3 {ct('weeks') || 'weeks'}</td>
                  <td className="border p-3 text-center">&gt; 3.0m {ct('widthShort') || 'width'}</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="border p-3 font-medium">🇮🇹 {ct('italy') || 'Italy'}</td>
                  <td className="border p-3 text-center">4.00m</td>
                  <td className="border p-3 text-center">44t</td>
                  <td className="border p-3 text-center text-warning">{ct('limited') || 'Limited'}</td>
                  <td className="border p-3 text-center">3-6 {ct('weeks') || 'weeks'}</td>
                  <td className="border p-3 text-center">&gt; 2.55m {ct('widthShort') || 'width'}</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="border p-3 font-medium">🇪🇸 {ct('spain') || 'Spain'}</td>
                  <td className="border p-3 text-center">4.00m</td>
                  <td className="border p-3 text-center">40t</td>
                  <td className="border p-3 text-center text-success">{ct('allowed') || 'Allowed'}</td>
                  <td className="border p-3 text-center">1-2 {ct('weeks') || 'weeks'}</td>
                  <td className="border p-3 text-center">&gt; 3.0m {ct('widthShort') || 'width'}</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="border p-3 font-medium">🇵🇱 {ct('poland') || 'Poland'}</td>
                  <td className="border p-3 text-center">4.00m</td>
                  <td className="border p-3 text-center">40t</td>
                  <td className="border p-3 text-center text-success">{ct('allowed') || 'Allowed'}</td>
                  <td className="border p-3 text-center">1-2 {ct('weeks') || 'weeks'}</td>
                  <td className="border p-3 text-center">&gt; 3.2m {ct('widthShort') || 'width'}</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="border p-3 font-medium">🇳🇱 {ct('netherlands') || 'Netherlands'}</td>
                  <td className="border p-3 text-center">4.00m</td>
                  <td className="border p-3 text-center">50t</td>
                  <td className="border p-3 text-center text-success">{ct('allowed') || 'Allowed'}</td>
                  <td className="border p-3 text-center">1-2 {ct('weeks') || 'weeks'}</td>
                  <td className="border p-3 text-center">&gt; 3.5m {ct('widthShort') || 'width'}</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="border p-3 font-medium">🇦🇹 {ct('austria') || 'Austria'}</td>
                  <td className="border p-3 text-center">4.00m</td>
                  <td className="border p-3 text-center">40t (44t eco)</td>
                  <td className="border p-3 text-center text-destructive">{ct('restricted') || 'Restricted'}</td>
                  <td className="border p-3 text-center">2-4 {ct('weeks') || 'weeks'}</td>
                  <td className="border p-3 text-center">&gt; 3.0m {ct('widthShort') || 'width'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 bg-info/10 rounded-lg border border-info/20">
            <p className="text-sm flex items-start gap-2">
              <Info className="w-4 h-4 text-info mt-0.5 flex-shrink-0" />
              <span>{ct('countryComparisonNote') || 'Note: Regulations change frequently. Always verify current requirements with national transport authorities before planning oversize transports.'}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="licenses-oversize" />

      {/* Quiz Section */}
      <section className="content-section">
        <Quiz title={ct('quizTitle')} chapterId="licenses-oversize" />
      </section>
    </div>
  );
}
