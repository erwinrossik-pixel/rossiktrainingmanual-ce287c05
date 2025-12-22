import { AlertTriangle, Lightbulb, X, Check, Shield, Eye, Clock, Euro, Users, FileText, MapPin, Truck, Phone, Ban, Scale, Zap, Target, Brain, CheckCircle2 } from "lucide-react";
import { Quiz } from "../Quiz";
import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { quizzes } from "@/data/quizData";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function RedFlagsChapter() {
  const { ct } = useChapterTranslation('red-flags');

  const carrierRedFlags = [
    { titleKey: "carrier_red_flag_1_title", descKey: "carrier_red_flag_1_desc", actionKey: "carrier_red_flag_1_action", severity: "critical" },
    { titleKey: "carrier_red_flag_2_title", descKey: "carrier_red_flag_2_desc", actionKey: "carrier_red_flag_2_action", severity: "critical" },
    { titleKey: "carrier_red_flag_3_title", descKey: "carrier_red_flag_3_desc", actionKey: "carrier_red_flag_3_action", severity: "critical" },
    { titleKey: "carrier_red_flag_4_title", descKey: "carrier_red_flag_4_desc", actionKey: "carrier_red_flag_4_action", severity: "high" },
    { titleKey: "carrier_red_flag_5_title", descKey: "carrier_red_flag_5_desc", actionKey: "carrier_red_flag_5_action", severity: "medium" },
    { titleKey: "carrier_red_flag_6_title", descKey: "carrier_red_flag_6_desc", actionKey: "carrier_red_flag_6_action", severity: "critical" },
    { titleKey: "carrier_red_flag_7_title", descKey: "carrier_red_flag_7_desc", actionKey: "carrier_red_flag_7_action", severity: "high" },
    { titleKey: "carrier_red_flag_8_title", descKey: "carrier_red_flag_8_desc", actionKey: "carrier_red_flag_8_action", severity: "critical" },
  ];

  const complianceRedFlags = [
    { titleKey: "compliance_1_title", descKey: "compliance_1_desc", tipKey: "compliance_1_tip" },
    { titleKey: "compliance_2_title", descKey: "compliance_2_desc", tipKey: "compliance_2_tip" },
    { titleKey: "compliance_3_title", descKey: "compliance_3_desc", tipKey: "compliance_3_tip" },
    { titleKey: "compliance_4_title", descKey: "compliance_4_desc", tipKey: "compliance_4_tip" },
    { titleKey: "compliance_5_title", descKey: "compliance_5_desc", tipKey: "compliance_5_tip" },
    { titleKey: "compliance_6_title", descKey: "compliance_6_desc", tipKey: "compliance_6_tip" },
  ];

  const proTips = [
    { titleKey: "pro_tip_1_title", descKey: "pro_tip_1_desc", icon: FileText },
    { titleKey: "pro_tip_2_title", descKey: "pro_tip_2_desc", icon: MapPin },
    { titleKey: "pro_tip_3_title", descKey: "pro_tip_3_desc", icon: Users },
    { titleKey: "pro_tip_4_title", descKey: "pro_tip_4_desc", icon: Phone },
    { titleKey: "pro_tip_5_title", descKey: "pro_tip_5_desc", icon: Shield },
    { titleKey: "pro_tip_6_title", descKey: "pro_tip_6_desc", icon: Target },
    { titleKey: "pro_tip_7_title", descKey: "pro_tip_7_desc", icon: Truck },
    { titleKey: "pro_tip_8_title", descKey: "pro_tip_8_desc", icon: Brain },
  ];

  const goldenRules = [
    "golden_rule_1", "golden_rule_2", "golden_rule_3", "golden_rule_4", "golden_rule_5",
    "golden_rule_6", "golden_rule_7", "golden_rule_8", "golden_rule_9", "golden_rule_10"
  ];

  const neverAcceptItems = [
    "never_accept_1", "never_accept_2", "never_accept_3", 
    "never_accept_4", "never_accept_5", "never_accept_6"
  ];

  const alwaysRequireItems = [
    "always_require_1", "always_require_2", "always_require_3",
    "always_require_4", "always_require_5", "always_require_6"
  ];

  const beforeBookingItems = [
    "before_booking_1", "before_booking_2", "before_booking_3",
    "before_booking_4", "before_booking_5", "before_booking_6"
  ];

  const beforeQuotingItems = [
    "before_quoting_1", "before_quoting_2", "before_quoting_3",
    "before_quoting_4", "before_quoting_5", "before_quoting_6"
  ];

  const beforeDispatchItems = [
    "before_dispatch_1", "before_dispatch_2", "before_dispatch_3",
    "before_dispatch_4", "before_dispatch_5", "before_dispatch_6"
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-destructive to-destructive/80 p-8 md:p-12 text-destructive-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <AlertTriangle className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            {ct("title")}
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            {ct("subtitle")}
          </p>
        </div>
      </div>

      {/* Why Red Flags Matter */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Eye className="w-6 h-6 text-primary" />
          {ct("why_recognize_title")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("why_recognize_desc")}
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Euro className="w-8 h-8 text-destructive mx-auto mb-2" />
            <p className="text-2xl font-bold text-destructive">€5-50k</p>
            <p className="text-xs text-muted-foreground">{ct("stat_claim_cost")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Users className="w-8 h-8 text-warning mx-auto mb-2" />
            <p className="text-2xl font-bold text-warning">80%</p>
            <p className="text-xs text-muted-foreground">{ct("stat_poor_vetting")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Clock className="w-8 h-8 text-info mx-auto mb-2" />
            <p className="text-2xl font-bold text-info">48h</p>
            <p className="text-xs text-muted-foreground">{ct("stat_fraud_time")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Shield className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="text-2xl font-bold text-success">95%</p>
            <p className="text-xs text-muted-foreground">{ct("stat_preventable")}</p>
          </div>
        </div>
      </div>

      {/* Critical Red Flags - Carriers */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3 text-destructive">
          <Ban className="w-6 h-6" />
          {ct("carrier_red_flags_title")}
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
                    <span><strong>{ct("action_label")}:</strong> {ct(item.actionKey)}</span>
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
          {ct("pricing_red_flags_title")}
        </h2>
        
        <DataTable
          headers={[ct("table_red_flag"), ct("table_what_it_means"), ct("table_how_to_avoid"), ct("table_impact")]}
          rows={[
            [ct("pricing_1_flag"), ct("pricing_1_means"), ct("pricing_1_avoid"), ct("pricing_1_impact")],
            [ct("pricing_2_flag"), ct("pricing_2_means"), ct("pricing_2_avoid"), ct("pricing_2_impact")],
            [ct("pricing_3_flag"), ct("pricing_3_means"), ct("pricing_3_avoid"), ct("pricing_3_impact")],
            [ct("pricing_4_flag"), ct("pricing_4_means"), ct("pricing_4_avoid"), ct("pricing_4_impact")],
            [ct("pricing_5_flag"), ct("pricing_5_means"), ct("pricing_5_avoid"), ct("pricing_5_impact")],
            [ct("pricing_6_flag"), ct("pricing_6_means"), ct("pricing_6_avoid"), ct("pricing_6_impact")],
          ]}
        />
      </div>

      {/* Compliance Red Flags */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3 text-destructive">
          <Scale className="w-6 h-6" />
          {ct("compliance_red_flags_title")}
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
          {ct("client_red_flags_title")}
        </h2>

        <DataTable
          headers={[ct("table_warning_sign"), ct("table_what_indicates"), ct("table_recommended_action")]}
          rows={[
            [ct("client_1_sign"), ct("client_1_indicates"), ct("client_1_action")],
            [ct("client_2_sign"), ct("client_2_indicates"), ct("client_2_action")],
            [ct("client_3_sign"), ct("client_3_indicates"), ct("client_3_action")],
            [ct("client_4_sign"), ct("client_4_indicates"), ct("client_4_action")],
            [ct("client_5_sign"), ct("client_5_indicates"), ct("client_5_action")],
            [ct("client_6_sign"), ct("client_6_indicates"), ct("client_6_action")],
            [ct("client_7_sign"), ct("client_7_indicates"), ct("client_7_action")],
            [ct("client_8_sign"), ct("client_8_indicates"), ct("client_8_action")],
          ]}
        />
      </div>

      {/* Documentation Red Flags */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          {ct("documentation_red_flags_title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-3 flex items-center gap-2">
              <X className="w-5 h-5" />
              {ct("never_accept_title")}:
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
              {ct("always_require_title")}:
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
          {ct("pro_tips_title")}
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
          {ct("daily_habits_title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-primary">{ct("morning_routine")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("morning_1")}</li>
              <li>• {ct("morning_2")}</li>
              <li>• {ct("morning_3")}</li>
              <li>• {ct("morning_4")}</li>
              <li>• {ct("morning_5")}</li>
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-primary">{ct("throughout_day")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("day_1")}</li>
              <li>• {ct("day_2")}</li>
              <li>• {ct("day_3")}</li>
              <li>• {ct("day_4")}</li>
              <li>• {ct("day_5")}</li>
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-primary">{ct("end_of_day")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("evening_1")}</li>
              <li>• {ct("evening_2")}</li>
              <li>• {ct("evening_3")}</li>
              <li>• {ct("evening_4")}</li>
              <li>• {ct("evening_5")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Golden Rules */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-rossik-dark p-8 text-primary-foreground">
        <h2 className="text-2xl font-bold mb-6 font-serif">🏆 {ct("golden_rules_title")}</h2>
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
        <h2 className="section-title">{ct("verification_checklist_title")}</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Truck className="w-4 h-4 text-primary" />
              {ct("before_booking_carrier")}
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
              {ct("before_quoting_price")}
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
              <MapPin className="w-4 h-4 text-primary" />
              {ct("before_dispatch")}
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

      {/* Quiz */}
      <Quiz title={ct("quiz_title")} questions={quizzes["red-flags"]} chapterId="red-flags" />
    </div>
  );
}
