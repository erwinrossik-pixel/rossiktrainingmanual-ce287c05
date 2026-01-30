import { AlertTriangle, Lightbulb, X, Check, Shield, Eye, Clock, Euro, Users, FileText, MapPin, Truck, Phone, Ban, Scale, Zap, Target, Brain, CheckCircle2 } from "lucide-react";
import { Quiz } from "../Quiz";
import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { MultiModalContent } from "../MultiModalContent";
import { quizzes } from "@/data/quizData";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function RedFlagsChapter() {
  const { ct } = useChapterTranslation('red-flags');

  const carrierRedFlags = [
    { titleKey: "companyLessThan6Months", descKey: "companyLessThan6MonthsDesc", actionKey: "companyLessThan6MonthsAction", severity: "critical" },
    { titleKey: "noRatingsOrLowScores", descKey: "noRatingsDesc", actionKey: "noRatingsAction", severity: "critical" },
    { titleKey: "fakeInsurance", descKey: "fakeInsuranceDesc", actionKey: "fakeInsuranceAction", severity: "critical" },
    { titleKey: "belowMarketPrices", descKey: "belowMarketPricesDesc", actionKey: "belowMarketPricesAction", severity: "high" },
    { titleKey: "mobileOnlyCommunication", descKey: "mobileOnlyDesc", actionKey: "mobileOnlyAction", severity: "medium" },
    { titleKey: "refusesDocumentation", descKey: "refusesDocumentationDesc", actionKey: "refusesDocumentationAction", severity: "critical" },
    { titleKey: "pressureToDecide", descKey: "pressureToDecideDesc", actionKey: "pressureToDecideAction", severity: "high" },
    { titleKey: "bankDetailsMismatch", descKey: "bankDetailsMismatchDesc", actionKey: "bankDetailsMismatchAction", severity: "critical" },
  ];

  const complianceRedFlags = [
    { titleKey: "co2TollTiers", descKey: "co2TollTiersDesc", tipKey: "co2TollTiersTip" },
    { titleKey: "tirolRestrictions", descKey: "tirolRestrictionsDesc", tipKey: "tirolRestrictionsTip" },
    { titleKey: "sundayDrivingBans", descKey: "sundayDrivingBansDesc", tipKey: "sundayDrivingBansTip" },
    { titleKey: "driverHoursMiscalc", descKey: "driverHoursMiscalcDesc", tipKey: "driverHoursMiscalcTip" },
    { titleKey: "weightLimitsVariation", descKey: "weightLimitsVariationDesc", tipKey: "weightLimitsVariationTip" },
    { titleKey: "lezRequirements", descKey: "lezRequirementsDesc", tipKey: "lezRequirementsTip" },
  ];

  const proTips = [
    { titleKey: "proTip1Title", descKey: "proTip1Desc", icon: FileText },
    { titleKey: "proTip2Title", descKey: "proTip2Desc", icon: MapPin },
    { titleKey: "proTip3Title", descKey: "proTip3Desc", icon: Users },
    { titleKey: "proTip4Title", descKey: "proTip4Desc", icon: Phone },
    { titleKey: "proTip5Title", descKey: "proTip5Desc", icon: Shield },
    { titleKey: "proTip6Title", descKey: "proTip6Desc", icon: Target },
    { titleKey: "proTip7Title", descKey: "proTip7Desc", icon: Truck },
    { titleKey: "proTip8Title", descKey: "proTip8Desc", icon: Brain },
  ];

  const goldenRules = [
    "goldenRule1", "goldenRule2", "goldenRule3", "goldenRule4", "goldenRule5",
    "goldenRule6", "goldenRule7", "goldenRule8", "goldenRule9", "goldenRule10"
  ];

  const neverAcceptItems = [
    "neverAcceptItem1", "neverAcceptItem2", "neverAcceptItem3", 
    "neverAcceptItem4", "neverAcceptItem5", "neverAcceptItem6"
  ];

  const alwaysRequireItems = [
    "alwaysRequireItem1", "alwaysRequireItem2", "alwaysRequireItem3",
    "alwaysRequireItem4", "alwaysRequireItem5", "alwaysRequireItem6"
  ];

  const beforeBookingItems = [
    "beforeBookingItem1", "beforeBookingItem2", "beforeBookingItem3",
    "beforeBookingItem4", "beforeBookingItem5", "beforeBookingItem6"
  ];

  const beforeQuotingItems = [
    "beforeQuotingItem1", "beforeQuotingItem2", "beforeQuotingItem3",
    "beforeQuotingItem4", "beforeQuotingItem5", "beforeQuotingItem6"
  ];

  const beforeDispatchItems = [
    "beforeDispatchItem1", "beforeDispatchItem2", "beforeDispatchItem3",
    "beforeDispatchItem4", "beforeDispatchItem5", "beforeDispatchItem6"
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={AlertTriangle}
        variant="redflags"
      />

      {/* Why Red Flags Matter */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Eye className="w-6 h-6 text-primary" />
          {ct("whyRedFlagsTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("whyRedFlagsDesc")}
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Euro className="w-8 h-8 text-destructive mx-auto mb-2" />
            <p className="text-2xl font-bold text-destructive">€5-50k</p>
            <p className="text-xs text-muted-foreground">{ct("avgClaimCost")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Users className="w-8 h-8 text-warning mx-auto mb-2" />
            <p className="text-2xl font-bold text-warning">80%</p>
            <p className="text-xs text-muted-foreground">{ct("claimsFromPoorVetting")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Clock className="w-8 h-8 text-info mx-auto mb-2" />
            <p className="text-2xl font-bold text-info">48h</p>
            <p className="text-xs text-muted-foreground">{ct("timeToSpotFraud")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Shield className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="text-2xl font-bold text-success">95%</p>
            <p className="text-xs text-muted-foreground">{ct("preventableIssues")}</p>
          </div>
        </div>
      </div>

      {/* Critical Red Flags - Carriers */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3 text-destructive">
          <Ban className="w-6 h-6" />
          {ct("carrierRedFlagsTitle")}
        </h2>
        
        <div className="space-y-4">
          {carrierRedFlags.map((item, i) => (
            <div key={i} className={`p-5 rounded-xl border ${
              item.severity === 'critical' ? 'bg-destructive/10 border-destructive/30' :
              item.severity === 'high' ? 'bg-warning/10 border-warning/30' :
              'bg-info/10 border-info/30'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.severity === 'critical' ? 'bg-destructive/20' :
                  item.severity === 'high' ? 'bg-warning/20' :
                  'bg-info/20'
                }`}>
                  <X className={`w-5 h-5 ${
                    item.severity === 'critical' ? 'text-destructive' :
                    item.severity === 'high' ? 'text-warning' :
                    'text-info'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{ct(item.titleKey)}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      item.severity === 'critical' ? 'bg-destructive text-destructive-foreground' :
                      item.severity === 'high' ? 'bg-warning text-warning-foreground' :
                      'bg-info text-info-foreground'
                    }`}>
                      {item.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{ct(item.descKey)}</p>
                  <div className="flex items-center gap-2 text-sm text-success">
                    <Lightbulb className="w-4 h-4" />
                    <span><strong>{ct("action")}:</strong> {ct(item.actionKey)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Red Flags */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3 text-warning">
          <Euro className="w-6 h-6" />
          {ct("pricingRedFlagsTitle")}
        </h2>
        
        <DataTable
          headers={[ct("redFlag"), ct("whatItMeans"), ct("howToAvoid"), ct("impact")]}
          rows={[
            [ct("cheapFRLanes"), ct("cheapFRLanesDesc"), ct("cheapFRLanesAvoid"), ct("cheapFRLanesImpact")],
            [ct("swissLSVA"), ct("swissLSVADesc"), ct("swissLSVAAvoid"), ct("swissLSVAImpact")],
            [ct("ferryTunnel"), ct("ferryTunnelDesc"), ct("ferryTunnelAvoid"), ct("ferryTunnelImpact")],
            [ct("waitingTime"), ct("waitingTimeDesc"), ct("waitingTimeAvoid"), ct("waitingTimeImpact")],
            [ct("quotingWithoutVerify"), ct("quotingWithoutVerifyDesc"), ct("quotingWithoutVerifyAvoid"), ct("quotingWithoutVerifyImpact")],
            [ct("seasonalBlindness"), ct("seasonalBlindnessDesc"), ct("seasonalBlindnessAvoid"), ct("seasonalBlindnessImpact")],
          ]}
        />
      </div>

      {/* Compliance Red Flags */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3 text-destructive">
          <Scale className="w-6 h-6" />
          {ct("complianceRedFlagsTitle")}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {complianceRedFlags.map((item, i) => (
            <div key={i} className="p-5 bg-destructive/5 rounded-xl border border-destructive/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{ct(item.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{ct(item.descKey)}</p>
                  <div className="flex items-center gap-2 text-sm text-success">
                    <Lightbulb className="w-4 h-4" />
                    <span>{ct(item.tipKey)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Client Red Flags */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3 text-warning">
          <Users className="w-6 h-6" />
          {ct("clientRedFlagsTitle")}
        </h2>

        <DataTable
          headers={[ct("warningSign"), ct("whatItIndicates"), ct("recommendedAction")]}
          rows={[
            [ct("newCompanyLargeOrder"), ct("newCompanyLargeOrderIndicates"), ct("newCompanyLargeOrderAction")],
            [ct("pushesPrices"), ct("pushesPricesIndicates"), ct("pushesPricesAction")],
            [ct("vagueCargo"), ct("vagueCargoIndicates"), ct("vagueCargoAction")],
            [ct("addressChanges"), ct("addressChangesIndicates"), ct("addressChangesAction")],
            [ct("disputesInvoices"), ct("disputesInvoicesIndicates"), ct("disputesInvoicesAction")],
            [ct("unrealisticExpectations"), ct("unrealisticExpectationsIndicates"), ct("unrealisticExpectationsAction")],
            [ct("noPO"), ct("noPOIndicates"), ct("noPOAction")],
            [ct("invoiceDifferentEntity"), ct("invoiceDifferentEntityIndicates"), ct("invoiceDifferentEntityAction")],
          ]}
        />
      </div>

      {/* Documentation Red Flags */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          {ct("documentationRedFlagsTitle")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-3 flex items-center gap-2">
              <X className="w-5 h-5" />
              {ct("neverAccept")}
            </h4>
            <ul className="space-y-2 text-sm">
              {neverAcceptItems.map((key, i) => (
                <li key={i} className="flex items-start gap-2">
                  <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>{ct(key)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-3 flex items-center gap-2">
              <Check className="w-5 h-5" />
              {ct("alwaysRequire")}
            </h4>
            <ul className="space-y-2 text-sm">
              {alwaysRequireItems.map((key, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{ct(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Pro Tips */}
      <div className="space-y-4">
        <h2 className="section-title flex items-center gap-3 text-success">
          <Lightbulb className="w-6 h-6" />
          {ct("proTipsTitle")}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {proTips.map((item, i) => (
            <div key={i} className="p-5 bg-success/5 rounded-xl border border-success/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-success" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{ct(item.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{ct(item.descKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Habits of Successful Dispatchers */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Zap className="w-6 h-6 text-primary" />
          {ct("dailyHabitsTitle")}
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-primary">{ct("morningRoutine")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("morningItem1")}</li>
              <li>• {ct("morningItem2")}</li>
              <li>• {ct("morningItem3")}</li>
              <li>• {ct("morningItem4")}</li>
              <li>• {ct("morningItem5")}</li>
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-primary">{ct("throughoutDay")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("dayItem1")}</li>
              <li>• {ct("dayItem2")}</li>
              <li>• {ct("dayItem3")}</li>
              <li>• {ct("dayItem4")}</li>
              <li>• {ct("dayItem5")}</li>
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-primary">{ct("endOfDay")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("endItem1")}</li>
              <li>• {ct("endItem2")}</li>
              <li>• {ct("endItem3")}</li>
              <li>• {ct("endItem4")}</li>
              <li>• {ct("endItem5")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Golden Rules */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-rossik-dark p-8 text-primary-foreground">
        <h2 className="text-2xl font-bold mb-6 font-serif">🏆 {ct("goldenRulesTitle")}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {goldenRules.map((key, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-primary-foreground/10 rounded-lg">
              <span className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              <span className="text-sm">{ct(key)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Reference: What to Check */}
      <div className="info-card">
        <h2 className="section-title">{ct("quickReferenceTitle")}</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Truck className="w-4 h-4 text-primary" />
              {ct("beforeBookingCarrier")}
            </h4>
            <ul className="text-sm space-y-1">
              {beforeBookingItems.map((key, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-success" />
                  <span>{ct(key)}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Euro className="w-4 h-4 text-primary" />
              {ct("beforeQuotingPrice")}
            </h4>
            <ul className="text-sm space-y-1">
              {beforeQuotingItems.map((key, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-success" />
                  <span>{ct(key)}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              {ct("beforeDispatch")}
            </h4>
            <ul className="text-sm space-y-1">
              {beforeDispatchItems.map((key, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-success" />
                  <span>{ct(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="red-flags" />

      {/* Quiz */}
      {quizzes["red-flags"] && (
        <Quiz
          title={ct("knowledgeCheck")}
          questions={quizzes["red-flags"]}
          chapterId="red-flags"
          questionsPerRound={10}
        />
      )}
    </div>
  );
}