import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Checklist } from "../Checklist";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Shield, AlertTriangle, CheckCircle2, XCircle, Eye, TrendingUp, FileText, Scale, Users, Zap, Target, Lock } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function RiskManagementChapter() {
  const { ct } = useChapterTranslation("risk-management");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Shield}
        variant="risk"
      />

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          {ct("whyRiskManagementMatters")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("whyRiskManagementDesc")}
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-2" />
            <p className="font-medium">{ct("identify")}</p>
            <p className="text-xs text-muted-foreground">{ct("identifyDesc")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Scale className="w-8 h-8 text-info mx-auto mb-2" />
            <p className="font-medium">{ct("assess")}</p>
            <p className="text-xs text-muted-foreground">{ct("assessDesc")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Shield className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="font-medium">{ct("mitigate")}</p>
            <p className="text-xs text-muted-foreground">{ct("mitigateDesc")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Eye className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("monitor")}</p>
            <p className="text-xs text-muted-foreground">{ct("monitorDesc")}</p>
          </div>
        </div>
      </div>

      {/* Risk Categories */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          {ct("riskCategoriesTitle")}
        </h2>

        <DataTable
          headers={[ct("category"), ct("examples"), ct("potentialImpact"), ct("mitigationStrategies")]}
          rows={[
            [ct("operational"), ct("operationalExamples"), ct("operationalImpact"), ct("operationalMitigation")],
            [ct("financial"), ct("financialExamples"), ct("financialImpact"), ct("financialMitigation")],
            [ct("compliance"), ct("complianceExamples"), ct("complianceImpact"), ct("complianceMitigation")],
            [ct("carrier"), ct("carrierExamples"), ct("carrierImpact"), ct("carrierMitigation")],
            [ct("market"), ct("marketExamples"), ct("marketImpact"), ct("marketMitigation")],
            [ct("reputational"), ct("reputationalExamples"), ct("reputationalImpact"), ct("reputationalMitigation")],
          ]}
        />
      </div>

      {/* Operational Risks */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-warning" />
          {ct("operationalRiskManagement")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-destructive">{ct("commonOperationalRisks")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                <span><strong>{ct("cargoDamage")}:</strong> {ct("cargoDamageDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                <span><strong>{ct("theft")}:</strong> {ct("theftDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                <span><strong>{ct("delays")}:</strong> {ct("delaysDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                <span><strong>{ct("temperatureExcursions")}:</strong> {ct("temperatureExcursionsDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                <span><strong>{ct("documentationErrors")}:</strong> {ct("documentationErrorsDesc")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-success">{ct("mitigationMeasures")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("carrierQualification")}:</strong> {ct("carrierQualificationDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("realTimeTracking")}:</strong> {ct("realTimeTrackingDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("insurance")}:</strong> {ct("insuranceDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("documentationChecks")}:</strong> {ct("documentationChecksDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("secureParking")}:</strong> {ct("secureParkingDesc")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Financial Risks */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          {ct("financialRiskManagement")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">{ct("financialRisks")}</h4>
            <ul className="text-sm space-y-2">
              <li><strong>{ct("creditRisk")}:</strong> {ct("creditRiskDesc")}</li>
              <li><strong>{ct("fraudRisk")}:</strong> {ct("fraudRiskDesc")}</li>
              <li><strong>{ct("currencyRisk")}:</strong> {ct("currencyRiskDesc")}</li>
              <li><strong>{ct("rateVolatility")}:</strong> {ct("rateVolatilityDesc")}</li>
              <li><strong>{ct("claims")}:</strong> {ct("claimsDesc")}</li>
            </ul>
          </div>
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">{ct("mitigationStrategies")}</h4>
            <ul className="text-sm space-y-2">
              <li><strong>{ct("creditChecks")}:</strong> {ct("creditChecksDesc")}</li>
              <li><strong>{ct("paymentTerms")}:</strong> {ct("paymentTermsDesc")}</li>
              <li><strong>{ct("carrierVerification")}:</strong> {ct("carrierVerificationDesc")}</li>
              <li><strong>{ct("currencyClauses")}:</strong> {ct("currencyClausesDesc")}</li>
              <li><strong>{ct("insurance")}:</strong> {ct("insuranceCoverageDesc")}</li>
            </ul>
          </div>
        </div>

        <Checklist
          title={ct("newCustomerCreditChecklist")}
          items={[
            ct("creditCheckItem1"),
            ct("creditCheckItem2"),
            ct("creditCheckItem3"),
            ct("creditCheckItem4"),
            ct("creditCheckItem5"),
            ct("creditCheckItem6"),
            ct("creditCheckItem7"),
          ]}
        />
      </div>

      {/* Fraud Prevention */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Lock className="w-6 h-6 text-primary" />
          {ct("fraudPrevention")}
        </h2>

        <p className="text-muted-foreground mb-4">
          {ct("fraudPreventionDesc")}
        </p>

        <DataTable
          headers={[ct("fraudType"), ct("howItWorks"), ct("warningSigns"), ct("prevention")]}
          rows={[
            [ct("fakeCarrier"), ct("fakeCarrierHow"), ct("fakeCarrierSigns"), ct("fakeCarrierPrevention")],
            [ct("paymentRedirection"), ct("paymentRedirectionHow"), ct("paymentRedirectionSigns"), ct("paymentRedirectionPrevention")],
            [ct("doubleBrokering"), ct("doubleBrokeringHow"), ct("doubleBrokeringSigns"), ct("doubleBrokeringPrevention")],
            [ct("fakeClient"), ct("fakeClientHow"), ct("fakeClientSigns"), ct("fakeClientPrevention")],
            [ct("identityTheft"), ct("identityTheftHow"), ct("identityTheftSigns"), ct("identityTheftPrevention")],
          ]}
        />

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg mt-4">
          <h4 className="font-semibold flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4" />
            {ct("keyFraudPreventionRules")}
          </h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>{ct("alwaysVerify")}:</strong> {ct("alwaysVerifyDesc")}</li>
            <li>• <strong>{ct("checkDocuments")}:</strong> {ct("checkDocumentsDesc")}</li>
            <li>• <strong>{ct("trustButVerify")}:</strong> {ct("trustButVerifyDesc")}</li>
            <li>• <strong>{ct("suspiciousOfUrgency")}:</strong> {ct("suspiciousOfUrgencyDesc")}</li>
            <li>• <strong>{ct("confirmPaymentChanges")}:</strong> {ct("confirmPaymentChangesDesc")}</li>
          </ul>
        </div>
      </div>

      {/* Compliance Risks */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          {ct("complianceRiskManagement")}
        </h2>

        <DataTable
          headers={[ct("area"), ct("keyRegulations"), ct("nonComplianceConsequences"), ct("mitigationStrategies")]}
          rows={[
            [ct("driversHours"), ct("driversHoursReg"), ct("driversHoursConseq"), ct("driversHoursMitigation")],
            [ct("vehicleWeights"), ct("vehicleWeightsReg"), ct("vehicleWeightsConseq"), ct("vehicleWeightsMitigation")],
            [ct("adrDangerousGoods"), ct("adrReg"), ct("adrConseq"), ct("adrMitigation")],
            [ct("customs"), ct("customsReg"), ct("customsConseq"), ct("customsMitigation")],
            [ct("dataProtection"), ct("dataProtectionReg"), ct("dataProtectionConseq"), ct("dataProtectionMitigation")],
            [ct("sanctions"), ct("sanctionsReg"), ct("sanctionsConseq"), ct("sanctionsMitigation")],
          ]}
        />
      </div>

      {/* Risk Assessment Matrix */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Scale className="w-6 h-6 text-primary" />
          {ct("riskAssessmentMatrix")}
        </h2>

        <p className="text-muted-foreground mb-4">
          {ct("riskAssessmentDesc")}
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="border border-border p-2 bg-muted">{ct("likelihood")} ↓ / {ct("impact")} →</th>
                <th className="border border-border p-2 bg-success/20 text-success">{ct("low")}</th>
                <th className="border border-border p-2 bg-warning/20 text-warning">{ct("medium")}</th>
                <th className="border border-border p-2 bg-destructive/20 text-destructive">{ct("high")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2 font-medium bg-muted">{ct("high")}</td>
                <td className="border border-border p-2 bg-warning/10">{ct("mediumRisk")}</td>
                <td className="border border-border p-2 bg-destructive/10">{ct("highRisk")}</td>
                <td className="border border-border p-2 bg-destructive/30 font-medium">{ct("criticalRisk")}</td>
              </tr>
              <tr>
                <td className="border border-border p-2 font-medium bg-muted">{ct("medium")}</td>
                <td className="border border-border p-2 bg-success/10">{ct("lowRisk")}</td>
                <td className="border border-border p-2 bg-warning/10">{ct("mediumRisk")}</td>
                <td className="border border-border p-2 bg-destructive/10">{ct("highRisk")}</td>
              </tr>
              <tr>
                <td className="border border-border p-2 font-medium bg-muted">{ct("low")}</td>
                <td className="border border-border p-2 bg-success/20">{ct("accept")}</td>
                <td className="border border-border p-2 bg-success/10">{ct("lowRisk")}</td>
                <td className="border border-border p-2 bg-warning/10">{ct("mediumRisk")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-destructive/10 p-3 rounded-lg">
            <h4 className="font-semibold text-destructive text-sm">{ct("criticalRisk")}/{ct("highRisk")}</h4>
            <p className="text-xs text-muted-foreground">{ct("immediateAction")}</p>
          </div>
          <div className="bg-warning/10 p-3 rounded-lg">
            <h4 className="font-semibold text-warning text-sm">{ct("mediumRisk")}</h4>
            <p className="text-xs text-muted-foreground">{ct("planMitigation")}</p>
          </div>
          <div className="bg-success/10 p-3 rounded-lg">
            <h4 className="font-semibold text-success text-sm">{ct("lowRisk")}</h4>
            <p className="text-xs text-muted-foreground">{ct("monitorPeriodically")}</p>
          </div>
        </div>
      </div>

      {/* Carrier Risk */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          {ct("carrierRiskManagement")}
        </h2>

        <Checklist
          title={ct("carrierRiskAssessment")}
          items={[
            ct("carrierCheck1"),
            ct("carrierCheck2"),
            ct("carrierCheck3"),
            ct("carrierCheck4"),
            ct("carrierCheck5"),
            ct("carrierCheck6"),
            ct("carrierCheck7"),
            ct("carrierCheck8"),
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">{ct("highRiskIndicators")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("highRiskInd1")}</li>
              <li>• {ct("highRiskInd2")}</li>
              <li>• {ct("highRiskInd3")}</li>
              <li>• {ct("highRiskInd4")}</li>
              <li>• {ct("highRiskInd5")}</li>
            </ul>
          </div>
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">{ct("lowRiskIndicators")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("lowRiskInd1")}</li>
              <li>• {ct("lowRiskInd2")}</li>
              <li>• {ct("lowRiskInd3")}</li>
              <li>• {ct("lowRiskInd4")}</li>
              <li>• {ct("lowRiskInd5")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["risk-management"] && (
        <Quiz
          title={ct("quizTitle")}
          questions={quizzes["risk-management"]}
          chapterId="risk-management"
          questionsPerRound={5}
        />
      )}
    </div>
  );
}
