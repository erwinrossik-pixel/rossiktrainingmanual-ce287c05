import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { BarChart3, Target, TrendingUp, TrendingDown, Clock, Euro, Users, Truck, CheckCircle2, AlertTriangle, Award, Activity } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function KPIChapter() {
  const { ct } = useChapterTranslation('kpi');

  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={BarChart3}
        variant="kpi"
      />

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          {ct("whyKPIsTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("whyKPIsDesc")}
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Activity className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">{ct("trackProgress")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-2" />
            <p className="text-sm font-medium">{ct("identifyIssues")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="text-sm font-medium">{ct("driveImprovement")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Award className="w-8 h-8 text-info mx-auto mb-2" />
            <p className="text-sm font-medium">{ct("rewardSuccess")}</p>
          </div>
        </div>
      </div>

      {/* Trainee KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          {ct("traineeKPIsTitle")}
        </h2>
        
        <p className="text-muted-foreground mb-4">
          {ct("traineeKPIsDesc")}
        </p>

        <DataTable
          headers={[ct("kpi"), ct("target"), ct("measurement"), ct("importance")]}
          rows={[
            [ct("responseTime"), "<2 hours", ct("measurement") + ": email/system", "🔴 " + ct("critical")],
            [ct("dataEntryAccuracy"), ">98%", ct("measurement") + ": audit", "🔴 " + ct("critical")],
            [ct("quoteAccuracy"), ">95%", ct("measurement") + ": review", "🔴 " + ct("critical")],
            [ct("shipmentsProcessed"), ct("progressive"), ct("measurement") + ": volume", "🟡 " + ct("medium")],
            [ct("podCollectionRate"), ">90% in 24h", ct("measurement") + ": system", "🟠 " + ct("high")],
            [ct("trainingCompletion"), "100%", ct("measurement") + ": LMS", "🟠 " + ct("high")],
            [ct("quizScores"), ">70%", ct("measurement") + ": quiz", "🟡 " + ct("medium")],
            [ct("issueEscalationTime"), "<30 min", ct("measurement") + ": tickets", "🔴 " + ct("critical")],
          ]}
        />

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mt-4">
          <p className="text-sm">
            <strong>{ct("traineeTip")}</strong> {ct("traineeTipDesc")}
          </p>
        </div>
      </div>

      {/* Operational KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Truck className="w-6 h-6 text-primary" />
          {ct("operationalKPIsTitle")}
        </h2>

        <DataTable
          headers={[ct("kpi"), ct("target"), ct("formula"), ct("reviewFrequency")]}
          rows={[
            [ct("onTimePickup"), "≥95%", "OTP = (On-time pickups / Total pickups) × 100", ct("weekly")],
            [ct("onTimeDelivery"), "≥95%", "OTD = (On-time deliveries / Total deliveries) × 100", ct("weekly")],
            [ct("transitTimeCompliance"), "≥93%", "(Within SLA / Total) × 100", ct("weekly")],
            [ct("orderAccuracy"), "≥99%", "(Correct orders / Total orders) × 100", ct("weekly")],
            [ct("claimsRate"), "<1%", "(Claims / Total shipments) × 100", ct("monthly")],
            [ct("podCompliance"), "≥95% in 24h", "(PODs in 24h / Total) × 100", ct("weekly")],
            [ct("carrierUtilization"), "85-95%", "(Used capacity / Available capacity) × 100", ct("monthly")],
            [ct("firstTimeFixRate"), "≥80%", "(Issues fixed first time / Total issues) × 100", ct("monthly")],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              {ct("worldClassPerformance")}
            </h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("onTimeDelivery")}: 98%+</li>
              <li>• {ct("claimsRate")}: {"<"}0.5%</li>
              <li>• {ct("orderAccuracy")}: 99.5%+</li>
              <li>• {ct("customerSatisfaction")}: 4.5+/5</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
              <TrendingDown className="w-4 h-4" />
              {ct("performanceWarning")}
            </h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("onTimeDelivery")}: {"<"}90%</li>
              <li>• {ct("claimsRate")}: {">"}2%</li>
              <li>• {ct("orderAccuracy")}: {"<"}95%</li>
              <li>• {ct("customerComplaints")}: ↑</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Financial KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Euro className="w-6 h-6 text-primary" />
          {ct("financialKPIsTitle")}
        </h2>

        <DataTable
          headers={[ct("kpi"), ct("target"), ct("formula"), ct("review")]}
          rows={[
            [ct("grossMargin"), "10-18%", "(Revenue - Cost) / Revenue × 100", ct("perShipment")],
            [ct("revenuePerShipment"), ct("variesByLane"), "Total Revenue / Shipments", ct("monthly")],
            [ct("costPerShipment"), ct("minimize"), "Total Costs / Shipments", ct("monthly")],
            [ct("revenuePerFTE"), "€200k-500k/year", "Total Revenue / FTE count", ct("quarterly")],
            [ct("dso"), "<45 days", "Avg collection time", ct("monthly")],
            [ct("badDebtRate"), "<1%", "(Bad debt / Revenue) × 100", ct("quarterly")],
            [ct("quoteWinRate"), "25-35%", "(Won quotes / Total quotes) × 100", ct("monthly")],
            [ct("customerLifetimeValue"), ct("maximize"), "Avg revenue × Retention years", ct("annually")],
          ]}
        />

        <div className="bg-muted/50 p-4 rounded-lg mt-6">
          <h4 className="font-semibold mb-2">{ct("marginBreakdown")}</h4>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="text-center p-3 bg-background rounded">
              <p className="text-2xl font-bold text-primary">8-12%</p>
              <p className="text-muted-foreground">{ct("contractLanes")}</p>
            </div>
            <div className="text-center p-3 bg-background rounded">
              <p className="text-2xl font-bold text-primary">12-18%</p>
              <p className="text-muted-foreground">{ct("spotMarket")}</p>
            </div>
            <div className="text-center p-3 bg-background rounded">
              <p className="text-2xl font-bold text-primary">15-25%</p>
              <p className="text-muted-foreground">{ct("expressUrgent")}</p>
            </div>
            <div className="text-center p-3 bg-background rounded">
              <p className="text-2xl font-bold text-primary">20-35%</p>
              <p className="text-muted-foreground">{ct("specialized")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          {ct("customerKPIsTitle")}
        </h2>

        <DataTable
          headers={[ct("kpi"), ct("target"), ct("measurementMethod")]}
          rows={[
            [ct("customerSatisfaction"), "≥4.2/5", "Post-delivery survey"],
            [ct("nps"), ">30", "Quarterly survey"],
            [ct("customerRetentionRate"), ">95%", "Annual calculation"],
            [ct("customerComplaints"), "<2%", "Complaints / Shipments × 100"],
            [ct("responseTimeToQueries"), "<2h", "Avg response time"],
            [ct("issueResolutionTime"), "<24h", "Avg resolution time"],
            [ct("customerGrowthRate"), ct("positive"), "New customers / period"],
            [ct("customerConcentrationRisk"), "<20%", "Top client % of revenue"],
          ]}
        />

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg mt-4">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            {ct("concentrationWarning")}
          </h4>
          <p className="text-sm">
            {ct("concentrationWarningDesc")}
          </p>
        </div>
      </div>

      {/* Carrier KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Truck className="w-6 h-6 text-primary" />
          {ct("carrierKPIsTitle")}
        </h2>

        <DataTable
          headers={[ct("kpi"), ct("target"), ct("impactOnBusiness")]}
          rows={[
            [ct("onTimePerformance"), "≥95%", ct("directClientSatisfaction")],
            [ct("damageRate"), "<1%", ct("claimsCostsClientTrust")],
            [ct("podSubmission"), ">90% in 24h", ct("invoicingSpeedCashFlow")],
            [ct("communicationQuality"), "4+/5", ct("issueManagementCoordination")],
            [ct("loadAcceptanceRate"), ">80%", ct("capacityReliability")],
            [ct("priceCompetitiveness"), "Market ±5%", ct("marginProtection")],
            [ct("invoiceAccuracy"), ">98%", ct("adminEfficiency")],
            [ct("equipmentQuality"), "4+/5", ct("clientExperienceCargoSafety")],
          ]}
        />

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-success/10 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">{ct("aTierCarrier")}</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• OTD 97%+</li>
              <li>• {ct("damageRate")} {"<"}0.5%</li>
              <li>• POD 95%+ in 24h</li>
              <li>• Rating 4.5+/5</li>
            </ul>
          </div>
          <div className="bg-warning/10 p-4 rounded-lg">
            <h4 className="font-semibold text-warning mb-2">{ct("bTierCarrier")}</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• OTD 93-96%</li>
              <li>• {ct("damageRate")} 0.5-1%</li>
              <li>• POD 85-94% in 24h</li>
              <li>• Rating 3.5-4.4/5</li>
            </ul>
          </div>
          <div className="bg-destructive/10 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">{ct("reviewRequired")}</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• OTD {"<"}93%</li>
              <li>• {ct("damageRate")} {">"}1%</li>
              <li>• POD {"<"}85% in 24h</li>
              <li>• Rating {"<"}3.5/5</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Individual KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Award className="w-6 h-6 text-primary" />
          {ct("individualKPIsTitle")}
        </h2>

        <DataTable
          headers={[ct("kpi"), ct("traineeTarget"), ct("experiencedTarget"), ct("expertTarget")]}
          rows={[
            [ct("shipmentsPerWeek"), "10-20", "30-50", "50-80+"],
            [ct("quoteResponseTime"), "<4h", "<2h", "<1h"],
            [ct("quoteConversion"), "15-20%", "25-30%", "35%+"],
            [ct("orderAccuracy"), ">95%", ">98%", ">99%"],
            [ct("customerSatisfactionScore"), "4.0/5", "4.2/5", "4.5+/5"],
            [ct("revenueManaged"), "€50k-100k/mo", "€150k-300k/mo", "€300k+/mo"],
            [ct("grossMarginAchieved"), "10%", "12%", "15%+"],
            [ct("issuesEscalated"), "30%", "15%", "<5%"],
          ]}
        />

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mt-4">
          <p className="text-sm">
            <strong>{ct("careerProgression")}</strong> {ct("careerProgressionDesc")}
          </p>
        </div>
      </div>

      {/* Dashboard Metrics */}
      <div className="info-card bg-muted/30">
        <h2 className="section-title flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-primary" />
          {ct("dailyDashboardTitle")}
        </h2>
        
        <p className="text-muted-foreground mb-4">
          {ct("dailyDashboardDesc")}
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg">
            <Clock className="w-6 h-6 text-primary mb-2" />
            <h4 className="font-semibold text-sm">{ct("todaysPickups")}</h4>
            <ul className="text-xs text-muted-foreground mt-2 space-y-1">
              <li>• {ct("scheduledCount")}</li>
              <li>• {ct("completedCount")}</li>
              <li>• {ct("onTimePercent")}</li>
              <li>• {ct("issuesReported")}</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <Truck className="w-6 h-6 text-primary mb-2" />
            <h4 className="font-semibold text-sm">{ct("todaysDeliveries")}</h4>
            <ul className="text-xs text-muted-foreground mt-2 space-y-1">
              <li>• {ct("scheduledCount")}</li>
              <li>• {ct("completedCount")}</li>
              <li>• {ct("onTimePercent")}</li>
              <li>• {ct("podsReceived")}</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-warning mb-2" />
            <h4 className="font-semibold text-sm">{ct("openIssues")}</h4>
            <ul className="text-xs text-muted-foreground mt-2 space-y-1">
              <li>• {ct("delaysReported")}</li>
              <li>• {ct("customerComplaintsItem")}</li>
              <li>• {ct("carrierIssues")}</li>
              <li>• {ct("pendingEscalations")}</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <Euro className="w-6 h-6 text-success mb-2" />
            <h4 className="font-semibold text-sm">{ct("financial")}</h4>
            <ul className="text-xs text-muted-foreground mt-2 space-y-1">
              <li>• {ct("quotesPending")}</li>
              <li>• {ct("ordersConfirmed")}</li>
              <li>• {ct("revenueBooked")}</li>
              <li>• {ct("invoicesDue")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["kpi"] && (
        <Quiz
          title={ct("knowledgeCheck")}
          questions={quizzes["kpi"]}
          chapterId="kpi"
          questionsPerRound={10}
        />
      )}
    </div>
  );
}