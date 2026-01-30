import { Truck, Globe, BookOpen, Target, Award, Users, MapPin, Building2, CheckCircle2, Star, Shield, FileText, TrendingUp, Lightbulb, Heart, Zap, Route, Phone, Mail, Clock, AlertTriangle, Wrench, Calendar, MessageCircle } from "lucide-react";
import rossikLogo from "@/assets/rossik-logo.jpg";
import { InfoCard } from "../InfoCard";
import { ChapterHero } from "../ChapterHero";
import { ChapterImage } from "../ChapterImage";
import { MultiModalContent } from "../MultiModalContent";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import introTransportImg from "@/assets/chapters/intro-european-transport.jpg";

export function IntroChapter() {
  const { ct } = useChapterTranslation("intro");

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <ChapterHero
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={BookOpen}
        variant="intro"
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
          
          {/* European Transport Image - contextual after audience section */}
          <ChapterImage
            src={introTransportImg}
            alt="European freight transport convoy on highway"
            variant="float-right"
            className="mt-4"
          />
        </div>
      </div>

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

      {/* Typical Day */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Clock className="w-6 h-6 text-primary" />
          {ct("typicalDayTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("typicalDaySubtitle")}</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="info-card border-l-4 border-l-blue-500">
            <h3 className="font-semibold text-blue-600 mb-2">{ct("dayMorning")}</h3>
            <p className="text-sm text-muted-foreground">{ct("dayMorningTasks")}</p>
          </div>
          <div className="info-card border-l-4 border-l-yellow-500">
            <h3 className="font-semibold text-yellow-600 mb-2">{ct("dayMidday")}</h3>
            <p className="text-sm text-muted-foreground">{ct("dayMiddayTasks")}</p>
          </div>
          <div className="info-card border-l-4 border-l-orange-500">
            <h3 className="font-semibold text-orange-600 mb-2">{ct("dayAfternoon")}</h3>
            <p className="text-sm text-muted-foreground">{ct("dayAfternoonTasks")}</p>
          </div>
          <div className="info-card border-l-4 border-l-purple-500">
            <h3 className="font-semibold text-purple-600 mb-2">{ct("dayEvening")}</h3>
            <p className="text-sm text-muted-foreground">{ct("dayEveningTasks")}</p>
          </div>
        </div>
      </section>

      {/* Essential Glossary */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-primary" />
          {ct("glossaryTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("glossarySubtitle")}</p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { term: "glossaryFTL", desc: "glossaryFTLDesc" },
            { term: "glossaryLTL", desc: "glossaryLTLDesc" },
            { term: "glossaryCMR", desc: "glossaryCMRDesc" },
            { term: "glossaryPOD", desc: "glossaryPODDesc" },
            { term: "glossaryETA", desc: "glossaryETADesc" },
            { term: "glossarySpot", desc: "glossarySpotDesc" },
            { term: "glossaryDedicated", desc: "glossaryDedicatedDesc" },
            { term: "glossaryGroupage", desc: "glossaryGroupageDesc" },
            { term: "glossaryLDM", desc: "glossaryLDMDesc" },
            { term: "glossaryADR", desc: "glossaryADRDesc" },
          ].map((item, i) => (
            <div key={i} className="p-3 bg-muted/50 rounded-lg">
              <p className="font-semibold text-primary text-sm">{ct(item.term)}</p>
              <p className="text-xs text-muted-foreground mt-1">{ct(item.desc)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-destructive" />
          {ct("mistakesTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("mistakesSubtitle")}</p>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="info-card border-l-4 border-l-destructive/50">
              <h4 className="font-semibold text-sm text-destructive">{ct(`mistake${n}Title`)}</h4>
              <p className="text-sm text-muted-foreground mt-1">{ct(`mistake${n}Desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* First 90 Days */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Calendar className="w-6 h-6 text-primary" />
          {ct("first90Title")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("first90Subtitle")}</p>
        <div className="space-y-4">
          <div className="info-card bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-700 dark:text-blue-400">{ct("first30Title")}</h3>
            <p className="text-sm text-muted-foreground mt-2">{ct("first30Tasks")}</p>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-2">{ct("first30Goal")}</p>
          </div>
          <div className="info-card bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
            <h3 className="font-semibold text-yellow-700 dark:text-yellow-400">{ct("first60Title")}</h3>
            <p className="text-sm text-muted-foreground mt-2">{ct("first60Tasks")}</p>
            <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400 mt-2">{ct("first60Goal")}</p>
          </div>
          <div className="info-card bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-700 dark:text-green-400">{ct("first90Title2")}</h3>
            <p className="text-sm text-muted-foreground mt-2">{ct("first90Tasks")}</p>
            <p className="text-sm font-medium text-green-600 dark:text-green-400 mt-2">{ct("first90Goal")}</p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Wrench className="w-6 h-6 text-primary" />
          {ct("toolsTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("toolsSubtitle")}</p>
        <div className="grid md:grid-cols-3 gap-4">
          {["TMS", "Exchanges", "Telematics", "Email", "Maps", "Docs"].map((tool) => (
            <div key={tool} className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold text-foreground mb-1">{ct(`tool${tool}`)}</h3>
              <p className="text-sm text-muted-foreground">{ct(`tool${tool}Desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Tips */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Star className="w-6 h-6 text-primary" />
          {ct("successTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("successSubtitle")}</p>
        <div className="grid md:grid-cols-2 gap-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="flex items-start gap-3 p-3 bg-success/5 rounded-lg border border-success/20">
              <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">{ct(`success${n}`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Path */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Route className="w-6 h-6 text-primary" />
          {ct("journeyTitle")}
        </h2>
        <p className="text-sm text-muted-foreground mb-4">{ct("journeySubtitle")}</p>
        <div className="info-card">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            <div className="space-y-6">
              {[
                { day: ct("week12"), title: ct("week12Title"), topics: ct("week12Topics") },
                { day: ct("week34"), title: ct("week34Title"), topics: ct("week34Topics") },
                { day: ct("week56"), title: ct("week56Title"), topics: ct("week56Topics") },
                { day: ct("week78"), title: ct("week78Title"), topics: ct("week78Topics") },
                { day: ct("week910"), title: ct("week910Title"), topics: ct("week910Topics"), isBackup: true },
              ].map((phase, i) => (
                <div key={i} className="flex gap-4 relative">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 z-10 ${phase.isBackup ? 'bg-muted-foreground' : 'bg-primary'}`}>
                    {i + 1}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${phase.isBackup ? 'bg-muted text-foreground' : 'bg-primary/15 text-primary'}`}>{phase.day}</span>
                    </div>
                    <h3 className="font-semibold text-base">{phase.title}</h3>
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
            <div className="p-4 bg-primary/10 rounded-lg">
              <h3 className="font-semibold mb-3 text-foreground">{ct("deptOperations")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("opsMgr")}</li>
                <li>• {ct("opsTeamLead")}</li>
                <li>• {ct("opsDispatchers")}</li>
                <li>• {ct("opsCoord")}</li>
                <li>• {ct("opsNight")}</li>
              </ul>
            </div>
            <div className="p-4 bg-info/10 rounded-lg">
              <h3 className="font-semibold mb-3 text-foreground">{ct("deptCommercial")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("commDir")}</li>
                <li>• {ct("commKAM")}</li>
                <li>• {ct("commSales")}</li>
                <li>• {ct("commPricing")}</li>
                <li>• {ct("commTender")}</li>
              </ul>
            </div>
            <div className="p-4 bg-success/10 rounded-lg">
              <h3 className="font-semibold mb-3 text-foreground">{ct("deptSupport")}</h3>
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
            <p className="font-semibold text-foreground">{ct("contactOpsAvail")}</p>
            <p>{ct("contactOpsDesc")}</p>
          </InfoCard>
          <InfoCard title={ct("contactHR")} icon={Users} variant="success">
            <p className="font-semibold text-foreground">{ct("contactHRAvail")}</p>
            <p>{ct("contactHRDesc")}</p>
          </InfoCard>
          <InfoCard title={ct("contactIT")} icon={Mail} variant="warning">
            <p className="font-semibold text-foreground">{ct("contactITAvail")}</p>
            <p>{ct("contactITDesc")}</p>
          </InfoCard>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="content-section">
        <div className="bg-gradient-to-br from-info/10 to-info/5 border-2 border-info/30 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-info mb-2 flex items-center gap-2">
            <Zap className="w-6 h-6" />
            {ct("quickStartTitle")}
          </h2>
          <p className="text-muted-foreground mb-6">{ct("quickStartSubtitle")}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Step 1 */}
            <div className="bg-background rounded-xl p-4 border border-border relative">
              <div className="absolute -top-3 -left-2 w-8 h-8 bg-info text-info-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-lg">1</div>
              <div className="pt-2">
                <h3 className="font-semibold text-sm mb-1 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-info" />
                  {ct("quickStartStep1Title")}
                </h3>
                <p className="text-xs text-muted-foreground">{ct("quickStartStep1Desc")}</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-background rounded-xl p-4 border border-border relative">
              <div className="absolute -top-3 -left-2 w-8 h-8 bg-info text-info-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-lg">2</div>
              <div className="pt-2">
                <h3 className="font-semibold text-sm mb-1 flex items-center gap-2">
                  <Target className="w-4 h-4 text-info" />
                  {ct("quickStartStep2Title")}
                </h3>
                <p className="text-xs text-muted-foreground">{ct("quickStartStep2Desc")}</p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-background rounded-xl p-4 border border-border relative">
              <div className="absolute -top-3 -left-2 w-8 h-8 bg-info text-info-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-lg">3</div>
              <div className="pt-2">
                <h3 className="font-semibold text-sm mb-1 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-info" />
                  {ct("quickStartStep3Title")}
                </h3>
                <p className="text-xs text-muted-foreground">{ct("quickStartStep3Desc")}</p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="bg-background rounded-xl p-4 border border-border relative">
              <div className="absolute -top-3 -left-2 w-8 h-8 bg-info text-info-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-lg">4</div>
              <div className="pt-2">
                <h3 className="font-semibold text-sm mb-1 flex items-center gap-2">
                  <Star className="w-4 h-4 text-info" />
                  {ct("quickStartStep4Title")}
                </h3>
                <p className="text-xs text-muted-foreground">{ct("quickStartStep4Desc")}</p>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="bg-background rounded-xl p-4 border border-border relative">
              <div className="absolute -top-3 -left-2 w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-lg">5</div>
              <div className="pt-2">
                <h3 className="font-semibold text-sm mb-1 flex items-center gap-2">
                  <Award className="w-4 h-4 text-success" />
                  {ct("quickStartStep5Title")}
                </h3>
                <p className="text-xs text-muted-foreground">{ct("quickStartStep5Desc")}</p>
              </div>
            </div>
          </div>
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

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="intro" />
    </div>
  );
}
