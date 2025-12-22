import { Truck, Globe, BookOpen, Target, Award, Users, MapPin, Building2, CheckCircle2, Star, Shield, FileText, TrendingUp, Lightbulb, Heart, Zap, Route, Phone, Mail } from "lucide-react";
import rossikLogo from "@/assets/rossik-logo.jpg";
import { InfoCard } from "../InfoCard";
import { ChapterHero } from "../ChapterHero";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function IntroChapter() {
  const { ct } = useChapterTranslation("intro");

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <ChapterHero
        chapterNumber={ct("chapterNumber")}
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={BookOpen}
        variant="foundation"
      />

      {/* Welcome Message */}
      <div className="info-card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="section-title mb-2">{ct("welcomeTitle")}</h2>
            <p className="text-muted-foreground mb-4">{ct("welcomeText1")}</p>
            <p className="text-muted-foreground">{ct("welcomeText2")}</p>
          </div>
        </div>
      </div>

      {/* Scope & Audience */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="info-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">{ct("scopeTitle")}</h2>
          </div>
          <p className="text-muted-foreground mb-4">{ct("scopeText")}</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>{ct("scopeFTL")}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>{ct("scopeLTL")}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>{ct("scopeCrossBorder")}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>{ct("scopeReefer")}</span>
            </li>
          </ul>
        </div>

        <div className="info-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">{ct("audienceTitle")}</h2>
          </div>
          <p className="text-muted-foreground mb-4">{ct("audienceText")}</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{ct("audienceNew")}</span>
            </li>
            <li className="flex items-start gap-2">
              <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{ct("audienceCareer")}</span>
            </li>
            <li className="flex items-start gap-2">
              <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{ct("audienceJunior")}</span>
            </li>
            <li className="flex items-start gap-2">
              <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{ct("audienceSupport")}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Industry Overview */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Globe className="w-6 h-6 text-primary" />
          {ct("industryTitle")}
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">{ct("industryOverview")}</h3>
              <p className="text-muted-foreground text-sm mb-4">{ct("industryText")}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("industryValue")}</li>
                <li>• {ct("industryVehicles")}</li>
                <li>• {ct("industryCompanies")}</li>
                <li>• {ct("industryGrowth")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct("trendsTitle")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{ct("trendDigital")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{ct("trendSustain")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{ct("trendDriver")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{ct("trendRegulatory")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          {ct("statsTitle")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-primary">€400B+</p>
            <p className="text-sm text-muted-foreground">{ct("statMarket")}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-primary">75%</p>
            <p className="text-sm text-muted-foreground">{ct("statRoad")}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-primary">3M+</p>
            <p className="text-sm text-muted-foreground">{ct("statWorkers")}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-primary">1.8T</p>
            <p className="text-sm text-muted-foreground">{ct("statTonneKm")}</p>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Award className="w-6 h-6 text-primary" />
          {ct("learnTitle")}
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-1">{ct("learnOperations")}</h3>
            <p className="text-sm text-muted-foreground">{ct("learnOperationsDesc")}</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-1">{ct("learnCompliance")}</h3>
            <p className="text-sm text-muted-foreground">{ct("learnComplianceDesc")}</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-1">{ct("learnVehicle")}</h3>
            <p className="text-sm text-muted-foreground">{ct("learnVehicleDesc")}</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-1">{ct("learnPricing")}</h3>
            <p className="text-sm text-muted-foreground">{ct("learnPricingDesc")}</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-1">{ct("learnTMS")}</h3>
            <p className="text-sm text-muted-foreground">{ct("learnTMSDesc")}</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-1">{ct("learnExchanges")}</h3>
            <p className="text-sm text-muted-foreground">{ct("learnExchangesDesc")}</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-1">{ct("learnDocs")}</h3>
            <p className="text-sm text-muted-foreground">{ct("learnDocsDesc")}</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-1">{ct("learnClient")}</h3>
            <p className="text-sm text-muted-foreground">{ct("learnClientDesc")}</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-1">{ct("learnEmergency")}</h3>
            <p className="text-sm text-muted-foreground">{ct("learnEmergencyDesc")}</p>
          </div>
        </div>
      </div>

      {/* Learning Path */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Route className="w-6 h-6 text-primary" />
          {ct("journeyTitle")}
        </h2>
        <div className="info-card">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            <div className="space-y-6">
              {[
                { week: ct("week12"), title: ct("week12Title"), topics: ct("week12Topics") },
                { week: ct("week34"), title: ct("week34Title"), topics: ct("week34Topics") },
                { week: ct("week56"), title: ct("week56Title"), topics: ct("week56Topics") },
                { week: ct("week78"), title: ct("week78Title"), topics: ct("week78Topics") },
                { week: ct("week910"), title: ct("week910Title"), topics: ct("week910Topics") },
                { week: ct("week1112"), title: ct("week1112Title"), topics: ct("week1112Topics") },
              ].map((phase, i) => (
                <div key={i} className="flex gap-4 relative">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 z-10">
                    {i + 1}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{phase.week}</span>
                    </div>
                    <h4 className="font-semibold">{phase.title}</h4>
                    <p className="text-sm text-muted-foreground">{phase.topics}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Star className="w-6 h-6 text-primary" />
          {ct("valuesTitle")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <InfoCard title={ct("valueReliability")} icon={Shield}>
            <p>{ct("valueReliabilityDesc")}</p>
          </InfoCard>
          <InfoCard title={ct("valueCommunication")} icon={Phone}>
            <p>{ct("valueCommunicationDesc")}</p>
          </InfoCard>
          <InfoCard title={ct("valueDocumentation")} icon={FileText}>
            <p>{ct("valueDocumentationDesc")}</p>
          </InfoCard>
          <InfoCard title={ct("valueProblem")} icon={Lightbulb}>
            <p>{ct("valueProblemDesc")}</p>
          </InfoCard>
          <InfoCard title={ct("valueTeamwork")} icon={Users}>
            <p>{ct("valueTeamworkDesc")}</p>
          </InfoCard>
          <InfoCard title={ct("valueImprovement")} icon={TrendingUp}>
            <p>{ct("valueImprovementDesc")}</p>
          </InfoCard>
        </div>
      </section>

      {/* Company Structure */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Building2 className="w-6 h-6 text-primary" />
          {ct("structureTitle")}
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-3 text-primary">{ct("deptOperations")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("opsMgr")}</li>
                <li>• {ct("opsTeamLead")}</li>
                <li>• {ct("opsDispatchers")}</li>
                <li>• {ct("opsCoord")}</li>
                <li>• {ct("opsNight")}</li>
              </ul>
            </div>
            <div className="p-4 bg-info/5 rounded-lg">
              <h3 className="font-semibold mb-3 text-info">{ct("deptCommercial")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("commDir")}</li>
                <li>• {ct("commKAM")}</li>
                <li>• {ct("commSales")}</li>
                <li>• {ct("commPricing")}</li>
                <li>• {ct("commTender")}</li>
              </ul>
            </div>
            <div className="p-4 bg-success/5 rounded-lg">
              <h3 className="font-semibold mb-3 text-success">{ct("deptSupport")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("suppFinance")}</li>
                <li>• {ct("suppCS")}</li>
                <li>• {ct("suppFleet")}</li>
                <li>• {ct("suppHR")}</li>
                <li>• {ct("suppIT")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts and Support */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Phone className="w-6 h-6 text-primary" />
          {ct("contactTitle")}
        </h2>
        <p className="text-muted-foreground mb-6">{ct("contactText")}</p>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title={ct("contactOps")} icon={Phone} variant="info">
            <p className="font-medium text-info">{ct("contactOpsAvail")}</p>
            <p>{ct("contactOpsDesc")}</p>
          </InfoCard>
          <InfoCard title={ct("contactHR")} icon={Users} variant="success">
            <p className="font-medium text-success">{ct("contactHRAvail")}</p>
            <p>{ct("contactHRDesc")}</p>
          </InfoCard>
          <InfoCard title={ct("contactIT")} icon={Mail} variant="warning">
            <p className="font-medium text-warning">{ct("contactITAvail")}</p>
            <p>{ct("contactITDesc")}</p>
          </InfoCard>
        </div>
      </section>

      {/* Ready to Start */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <h2 className="section-title flex items-center gap-3">
          <Zap className="w-6 h-6 text-primary" />
          {ct("readyTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("readyText")}</p>
        <div className="bg-primary/10 rounded-lg p-4">
          <p className="font-semibold text-primary mb-1">{ct("tipTitle")}</p>
          <p className="text-sm text-muted-foreground">{ct("tipText")}</p>
        </div>
      </div>
    </div>
  );
}