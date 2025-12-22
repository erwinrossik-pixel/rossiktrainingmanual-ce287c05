import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { BarChart3, Target, TrendingUp, TrendingDown, Clock, Euro, Users, Truck, CheckCircle2, AlertTriangle, Award, Activity } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function KPIChapter() {
  const { ct } = useChapterTranslation('kpi');

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">{ct("title")}</h1>
        <p className="text-lg text-muted-foreground">
          {ct("subtitle")}
        </p>
      </div>

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          {ct("why_kpis_matter")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("why_kpis_desc")}
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Activity className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">{ct("track_progress")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-2" />
            <p className="text-sm font-medium">{ct("identify_issues")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="text-sm font-medium">{ct("drive_improvement")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Award className="w-8 h-8 text-info mx-auto mb-2" />
            <p className="text-sm font-medium">{ct("reward_success")}</p>
          </div>
        </div>
      </div>

      {/* Trainee KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          {ct("trainee_kpis_title")}
        </h2>
        
        <p className="text-muted-foreground mb-4">
          {ct("trainee_kpis_desc")}
        </p>

        <DataTable
          headers={[ct("kpi"), ct("target"), ct("measurement"), ct("importance")]}
          rows={[
            [ct("response_time"), "<2 hours", ct("response_time_measure"), "🔴 " + ct("critical")],
            [ct("data_entry_accuracy"), ">98%", ct("data_entry_measure"), "🔴 " + ct("critical")],
            [ct("quote_accuracy"), ">95%", ct("quote_accuracy_measure"), "🔴 " + ct("critical")],
            [ct("shipments_processed"), ct("progressive"), ct("shipments_measure"), "🟡 " + ct("medium")],
            [ct("pod_collection_rate"), ">90% in 24h", ct("pod_measure"), "🟠 " + ct("high")],
            [ct("training_completion"), "100%", ct("training_measure"), "🟠 " + ct("high")],
            [ct("quiz_scores"), ">70%", ct("quiz_measure"), "🟡 " + ct("medium")],
            [ct("issue_escalation_time"), "<30 min", ct("escalation_measure"), "🔴 " + ct("critical")],
          ]}
        />

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mt-4">
          <p className="text-sm">
            <strong>{ct("trainee_tip_label")}:</strong> {ct("trainee_tip")}
          </p>
        </div>
      </div>

      {/* Operational KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Truck className="w-6 h-6 text-primary" />
          {ct("operational_kpis_title")}
        </h2>

        <DataTable
          headers={[ct("kpi"), ct("target"), ct("formula"), ct("review_frequency")]}
          rows={[
            [ct("otp"), "≥95%", ct("otp_formula"), ct("weekly")],
            [ct("otd"), "≥95%", ct("otd_formula"), ct("weekly")],
            [ct("transit_time_compliance"), "≥93%", ct("transit_formula"), ct("weekly")],
            [ct("order_accuracy"), "≥99%", ct("order_formula"), ct("weekly")],
            [ct("claims_rate"), "<1%", ct("claims_formula"), ct("monthly")],
            [ct("pod_compliance"), "≥95% in 24h", ct("pod_formula"), ct("weekly")],
            [ct("carrier_utilization"), "85-95%", ct("utilization_formula"), ct("monthly")],
            [ct("first_time_fix_rate"), "≥80%", ct("fix_formula"), ct("monthly")],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              {ct("world_class_performance")}
            </h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("otd")}: 98%+</li>
              <li>• {ct("claims_rate")}: {"<"}0.5%</li>
              <li>• {ct("order_accuracy")}: 99.5%+</li>
              <li>• {ct("customer_satisfaction")}: 4.5+/5</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
              <TrendingDown className="w-4 h-4" />
              {ct("warning_signs")}
            </h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("otd")}: {"<"}90%</li>
              <li>• {ct("claims_rate")}: {">"}2%</li>
              <li>• {ct("order_accuracy")}: {"<"}95%</li>
              <li>• {ct("customer_complaints")}: {ct("rising_trend")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Financial KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Euro className="w-6 h-6 text-primary" />
          {ct("financial_kpis_title")}
        </h2>

        <DataTable
          headers={[ct("kpi"), ct("target"), ct("formula"), ct("review")]}
          rows={[
            [ct("gross_margin"), "10-18%", ct("gross_margin_formula"), ct("per_shipment")],
            [ct("revenue_per_shipment"), ct("varies_by_lane"), ct("revenue_formula"), ct("monthly")],
            [ct("cost_per_shipment"), ct("minimize"), ct("cost_formula"), ct("monthly")],
            [ct("revenue_per_fte"), "€200k-500k/" + ct("year"), ct("fte_formula"), ct("quarterly")],
            [ct("dso"), "<45 " + ct("days"), ct("dso_formula"), ct("monthly")],
            [ct("bad_debt_rate"), "<1%", ct("bad_debt_formula"), ct("quarterly")],
            [ct("quote_win_rate"), "25-35%", ct("win_rate_formula"), ct("monthly")],
            [ct("customer_lifetime_value"), ct("maximize"), ct("clv_formula"), ct("annually")],
          ]}
        />

        <div className="bg-muted/50 p-4 rounded-lg mt-6">
          <h4 className="font-semibold mb-2">{ct("margin_breakdown")}</h4>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="text-center p-3 bg-background rounded">
              <p className="text-2xl font-bold text-primary">8-12%</p>
              <p className="text-muted-foreground">{ct("contract_lanes")}</p>
            </div>
            <div className="text-center p-3 bg-background rounded">
              <p className="text-2xl font-bold text-primary">12-18%</p>
              <p className="text-muted-foreground">{ct("spot_market")}</p>
            </div>
            <div className="text-center p-3 bg-background rounded">
              <p className="text-2xl font-bold text-primary">15-25%</p>
              <p className="text-muted-foreground">{ct("express_urgent")}</p>
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
          {ct("customer_kpis_title")}
        </h2>

        <DataTable
          headers={[ct("kpi"), ct("target"), ct("measurement_method")]}
          rows={[
            [ct("csat"), "≥4.2/5", ct("csat_method")],
            [ct("nps"), ">30", ct("nps_method")],
            [ct("customer_retention_rate"), ">95%", ct("retention_method")],
            [ct("customer_complaints"), "<2% " + ct("of_shipments"), ct("complaints_method")],
            [ct("response_time_queries"), "<2 " + ct("hours"), ct("response_method")],
            [ct("issue_resolution_time"), "<24 " + ct("hours"), ct("resolution_method")],
            [ct("customer_growth_rate"), ct("positive"), ct("growth_method")],
            [ct("customer_concentration_risk"), "<20% " + ct("single_client"), ct("concentration_method")],
          ]}
        />

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg mt-4">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            {ct("concentration_warning_title")}
          </h4>
          <p className="text-sm">
            {ct("concentration_warning_desc")}
          </p>
        </div>
      </div>

      {/* Carrier KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Truck className="w-6 h-6 text-primary" />
          {ct("carrier_kpis_title")}
        </h2>

        <DataTable
          headers={[ct("kpi"), ct("target"), ct("impact_on_business")]}
          rows={[
            [ct("on_time_performance"), "≥95%", ct("otp_impact")],
            [ct("damage_rate"), "<1%", ct("damage_impact")],
            [ct("pod_submission"), ">90% in 24h", ct("pod_impact")],
            [ct("communication_quality"), "4+/5", ct("communication_impact")],
            [ct("load_acceptance_rate"), ">80%", ct("acceptance_impact")],
            [ct("price_competitiveness"), ct("market_rate") + " ±5%", ct("price_impact")],
            [ct("invoice_accuracy"), ">98%", ct("invoice_impact")],
            [ct("equipment_quality"), "4+/5", ct("equipment_impact")],
          ]}
        />

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-success/10 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">{ct("a_tier_carrier")}</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• OTD 97%+</li>
              <li>• {ct("damage")} {"<"}0.5%</li>
              <li>• POD 95%+ in 24h</li>
              <li>• {ct("rating")} 4.5+/5</li>
            </ul>
          </div>
          <div className="bg-warning/10 p-4 rounded-lg">
            <h4 className="font-semibold text-warning mb-2">{ct("b_tier_carrier")}</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• OTD 93-96%</li>
              <li>• {ct("damage")} 0.5-1%</li>
              <li>• POD 85-94% in 24h</li>
              <li>• {ct("rating")} 3.5-4.4/5</li>
            </ul>
          </div>
          <div className="bg-destructive/10 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">{ct("review_required")}</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• OTD {"<"}93%</li>
              <li>• {ct("damage")} {">"}1%</li>
              <li>• POD {"<"}85% in 24h</li>
              <li>• {ct("rating")} {"<"}3.5/5</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Individual KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Award className="w-6 h-6 text-primary" />
          {ct("individual_kpis_title")}
        </h2>

        <DataTable
          headers={[ct("kpi"), ct("trainee_target"), ct("experienced_target"), ct("expert_target")]}
          rows={[
            [ct("shipments_per_week"), "10-20", "30-50", "50-80+"],
            [ct("quote_response_time"), "<4 " + ct("hours"), "<2 " + ct("hours"), "<1 " + ct("hour")],
            [ct("quote_conversion"), "15-20%", "25-30%", "35%+"],
            [ct("order_accuracy"), ">95%", ">98%", ">99%"],
            [ct("customer_satisfaction"), "4.0/5", "4.2/5", "4.5+/5"],
            [ct("revenue_managed"), "€50k-100k/" + ct("mo"), "€150k-300k/" + ct("mo"), "€300k+/" + ct("mo")],
            [ct("gross_margin_achieved"), "10%", "12%", "15%+"],
            [ct("issues_escalated"), "30%", "15%", "<5%"],
          ]}
        />

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mt-4">
          <p className="text-sm">
            <strong>{ct("career_progression_label")}:</strong> {ct("career_progression_desc")}
          </p>
        </div>
      </div>

      {/* Dashboard Metrics */}
      <div className="info-card bg-muted/30">
        <h2 className="section-title flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-primary" />
          {ct("daily_dashboard_title")}
        </h2>
        
        <p className="text-muted-foreground mb-4">
          {ct("daily_dashboard_desc")}
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg">
            <Clock className="w-6 h-6 text-primary mb-2" />
            <h4 className="font-semibold text-sm">{ct("todays_pickups")}</h4>
            <ul className="text-xs text-muted-foreground mt-2 space-y-1">
              <li>• {ct("scheduled_count")}</li>
              <li>• {ct("completed_count")}</li>
              <li>• {ct("on_time_percent")}</li>
              <li>• {ct("issues_reported")}</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <Truck className="w-6 h-6 text-primary mb-2" />
            <h4 className="font-semibold text-sm">{ct("todays_deliveries")}</h4>
            <ul className="text-xs text-muted-foreground mt-2 space-y-1">
              <li>• {ct("scheduled_count")}</li>
              <li>• {ct("completed_count")}</li>
              <li>• {ct("on_time_percent")}</li>
              <li>• {ct("pods_received")}</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-warning mb-2" />
            <h4 className="font-semibold text-sm">{ct("open_issues")}</h4>
            <ul className="text-xs text-muted-foreground mt-2 space-y-1">
              <li>• {ct("delays_reported")}</li>
              <li>• {ct("customer_complaints")}</li>
              <li>• {ct("carrier_issues")}</li>
              <li>• {ct("pending_escalations")}</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <Euro className="w-6 h-6 text-success mb-2" />
            <h4 className="font-semibold text-sm">{ct("financial")}</h4>
            <ul className="text-xs text-muted-foreground mt-2 space-y-1">
              <li>• {ct("quotes_pending")}</li>
              <li>• {ct("orders_confirmed")}</li>
              <li>• {ct("revenue_booked")}</li>
              <li>• {ct("invoices_due")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["kpi"] && (
        <Quiz
          title={ct("quiz_title")}
          questions={quizzes["kpi"]}
          chapterId="kpi"
          questionsPerRound={5}
        />
      )}
    </div>
  );
}
