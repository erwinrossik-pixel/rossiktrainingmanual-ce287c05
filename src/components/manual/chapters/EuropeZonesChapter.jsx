import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Map, Building2, Truck, Euro, Clock, AlertTriangle, CheckCircle2, Route, Factory, Ship, Calendar } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function EuropeZonesChapter() {
  const { ct } = useChapterTranslation("europe-zones");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Map}
        variant="europezones"
      />

      {/* Overview Map */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Map className="w-6 h-6 text-primary" />
          {ct("marketOverviewTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("marketOverviewDesc")}
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">€300B+</p>
            <p className="text-sm text-muted-foreground">{ct("annualMarketValue")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">500,000+</p>
            <p className="text-sm text-muted-foreground">{ct("transportCompanies")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">3 million+</p>
            <p className="text-sm text-muted-foreground">{ct("commercialVehicles")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">75%</p>
            <p className="text-sm text-muted-foreground">{ct("freightByRoad")}</p>
          </div>
        </div>
      </div>

      {/* DACH Region */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-2xl">🇩🇪🇦🇹🇨🇭</span>
          {ct("dachTitle")}
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <InfoCard title={`${ct("germanyTitle")} 🇩🇪`} icon={Factory}>
            <ul className="text-sm space-y-1">
              <li>• {ct("germanyItem1")}</li>
              <li>• {ct("germanyItem2")}</li>
              <li>• {ct("germanyItem3")}</li>
              <li>• {ct("germanyItem4")}</li>
              <li>• {ct("germanyItem5")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={`${ct("austriaTitle")} 🇦🇹`} icon={Route}>
            <ul className="text-sm space-y-1">
              <li>• {ct("austriaItem1")}</li>
              <li>• {ct("austriaItem2")}</li>
              <li>• {ct("austriaItem3")}</li>
              <li>• {ct("austriaItem4")}</li>
              <li>• {ct("austriaItem5")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={`${ct("switzerlandTitle")} 🇨🇭`} icon={Building2}>
            <ul className="text-sm space-y-1">
              <li>• {ct("switzerlandItem1")}</li>
              <li>• {ct("switzerlandItem2")}</li>
              <li>• {ct("switzerlandItem3")}</li>
              <li>• {ct("switzerlandItem4")}</li>
              <li>• {ct("switzerlandItem5")}</li>
            </ul>
          </InfoCard>
        </div>

        <DataTable
          headers={[ct("characteristic"), ct("germanyTitle"), ct("austriaTitle"), ct("switzerlandTitle")]}
          rows={[
            [ct("economicStrength"), ct("veryHigh"), ct("high"), ct("veryHigh")],
            [ct("infrastructureQuality"), ct("excellent"), ct("excellent"), ct("excellent")],
            [ct("averageRates"), "1.20-1.40", "1.25-1.50", "1.50-1.80"],
            [ct("marketCompetition"), ct("high"), ct("medium"), ct("medium")],
            [ct("sundayDriving"), `${ct("banned")} 00:00-22:00`, ct("banned"), ct("banned")],
            [ct("customsRequired"), ct("noEU"), ct("noEU"), ct("yesNonEU")],
            [ct("maxVehicleWeight"), "44t", "44t", "40t"],
          ]}
        />

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg mt-4">
          <h4 className="font-semibold flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4" />
            {ct("dachTipsTitle")}
          </h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>{ct("germanyTitle")}:</strong> {ct("dachTipGermany")}</li>
            <li>• <strong>{ct("austriaTitle")}:</strong> {ct("dachTipAustria")}</li>
            <li>• <strong>{ct("switzerlandTitle")}:</strong> {ct("dachTipSwitzerland")}</li>
          </ul>
        </div>
      </div>

      {/* BENELUX */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-2xl">🇧🇪🇳🇱🇱🇺</span>
          {ct("beneluxTitle")}
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <InfoCard title={`${ct("belgiumTitle")} 🇧🇪`} icon={Route}>
            <ul className="text-sm space-y-1">
              <li>• {ct("belgiumItem1")}</li>
              <li>• {ct("belgiumItem2")}</li>
              <li>• {ct("belgiumItem3")}</li>
              <li>• {ct("belgiumItem4")}</li>
              <li>• {ct("belgiumItem5")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={`${ct("netherlandsTitle")} 🇳🇱`} icon={Ship}>
            <ul className="text-sm space-y-1">
              <li>• {ct("netherlandsItem1")}</li>
              <li>• {ct("netherlandsItem2")}</li>
              <li>• {ct("netherlandsItem3")}</li>
              <li>• {ct("netherlandsItem4")}</li>
              <li>• {ct("netherlandsItem5")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={`${ct("luxembourgTitle")} 🇱🇺`} icon={Euro}>
            <ul className="text-sm space-y-1">
              <li>• {ct("luxembourgItem1")}</li>
              <li>• {ct("luxembourgItem2")}</li>
              <li>• {ct("luxembourgItem3")}</li>
              <li>• {ct("luxembourgItem4")}</li>
              <li>• {ct("luxembourgItem5")}</li>
            </ul>
          </InfoCard>
        </div>

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">{ct("beneluxCharacteristics")}</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-primary mb-1">{ct("strengths")}</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• {ct("beneluxStrength1")}</li>
                <li>• {ct("beneluxStrength2")}</li>
                <li>• {ct("beneluxStrength3")}</li>
                <li>• {ct("beneluxStrength4")}</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-primary mb-1">{ct("challenges")}</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• {ct("beneluxChallenge1")}</li>
                <li>• {ct("beneluxChallenge2")}</li>
                <li>• {ct("beneluxChallenge3")}</li>
                <li>• {ct("beneluxChallenge4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* France */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-2xl">🇫🇷</span>
          {ct("franceTitle")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">{ct("franceMarket")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("franceMarket1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("franceMarket2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("franceMarket3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("franceMarket4")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("franceMarket5")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{ct("franceOperational")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("franceOp1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Euro className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("franceOp2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("franceOp3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("franceOp4")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("franceOp5")}</span>
              </li>
            </ul>
          </div>
        </div>

        <DataTable
          headers={[ct("route"), "Distance", "Toll Cost", ct("transitTime")]}
          rows={[
            ["Paris → Lyon", "~460 km", "~€140", "5-6h"],
            ["Paris → Marseille", "~780 km", "~€230", "8-9h"],
            ["Calais → Paris", "~290 km", "~€60", "3-4h"],
            ["Lyon → Bordeaux", "~550 km", "~€170", "6-7h"],
            ["Lille → Toulouse", "~850 km", "~€270", "9-10h"],
          ]}
        />
      </div>

      {/* Italy */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-2xl">🇮🇹</span>
          {ct("italyTitle")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">{ct("italyOverview")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("italyOverview1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("italyOverview2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("italyOverview3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("italyOverview4")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("italyOverview5")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{ct("italyInfo")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Euro className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("italyInfo1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("italyInfo2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Route className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("italyInfo3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("italyInfo4")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Ship className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("italyInfo5")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">{ct("italyTips")}</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>ZTL:</strong> {ct("italyTip1")}</li>
            <li>• <strong>Payment:</strong> {ct("italyTip2")}</li>
            <li>• <strong>August:</strong> {ct("italyTip3")}</li>
            <li>• <strong>Backloads:</strong> {ct("italyTip4")}</li>
          </ul>
        </div>
      </div>

      {/* Spain & Portugal */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-2xl">🇪🇸🇵🇹</span>
          {ct("iberianTitle")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">{ct("spainTitle")} 🇪🇸</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("spainItem1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("spainItem2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("spainItem3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Euro className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("spainItem4")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("spainItem5")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{ct("portugalTitle")} 🇵🇹</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("portugalItem1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("portugalItem2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("portugalItem3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Euro className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("portugalItem4")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("portugalItem5")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
          <p className="text-sm">
            <strong>Iberian Tip:</strong> {ct("iberianTip")}
          </p>
        </div>
      </div>

      {/* CEE */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-2xl">🇵🇱🇨🇿🇭🇺🇷🇴</span>
          {ct("ceeTitle")}
        </h2>

        <p className="text-muted-foreground mb-4">
          {ct("ceeDesc")}
        </p>

        <DataTable
          headers={[ct("country"), ct("tollSystem"), ct("ratePerKm"), ct("keyIndustries")]}
          rows={[
            ["🇵🇱 Poland", "e-TOLL", "€0.092", "Automotive, electronics, distribution"],
            ["🇨🇿 Czech Republic", "MYTO CZ", "€0.26", "Automotive, machinery, glass"],
            ["🇭🇺 Hungary", "HU-GO", "€0.425", "Automotive, pharma, electronics"],
            ["🇷🇴 Romania", "RO-vignette", "€0.05", "Automotive, textiles, agriculture"],
            ["🇸🇰 Slovakia", "e-myto", "€0.18", "Automotive, electronics"],
            ["🇧🇬 Bulgaria", "Toll.bg", "€0.04", "Agriculture, textiles, outsourcing"],
            ["🇭🇷 Croatia", "HAC", "€0.15", "Tourism, food, transit"],
            ["🇸🇮 Slovenia", "DarsGo", "€0.24", "Transit hub, manufacturing"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <InfoCard title={ct("ceeAdvantages")} icon={CheckCircle2}>
            <ul className="text-sm space-y-1">
              <li>• {ct("ceeAdv1")}</li>
              <li>• {ct("ceeAdv2")}</li>
              <li>• {ct("ceeAdv3")}</li>
              <li>• {ct("ceeAdv4")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("ceeChallenges")} icon={AlertTriangle}>
            <ul className="text-sm space-y-1">
              <li>• {ct("ceeChal1")}</li>
              <li>• {ct("ceeChal2")}</li>
              <li>• {ct("ceeChal3")}</li>
              <li>• {ct("ceeChal4")}</li>
            </ul>
          </InfoCard>
        </div>
      </div>

      {/* Scandinavia */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-2xl">🇸🇪🇳🇴🇩🇰🇫🇮</span>
          {ct("scandinaviaTitle")}
        </h2>

        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🇸🇪 {ct("swedenTitle")}</h4>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• {ct("swedenItem1")}</li>
              <li>• {ct("swedenItem2")}</li>
              <li>• {ct("swedenItem3")}</li>
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🇳🇴 {ct("norwayTitle")}</h4>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• {ct("norwayItem1")}</li>
              <li>• {ct("norwayItem2")}</li>
              <li>• {ct("norwayItem3")}</li>
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🇩🇰 {ct("denmarkTitle")}</h4>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• {ct("denmarkItem1")}</li>
              <li>• {ct("denmarkItem2")}</li>
              <li>• {ct("denmarkItem3")}</li>
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🇫🇮 {ct("finlandTitle")}</h4>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• {ct("finlandItem1")}</li>
              <li>• {ct("finlandItem2")}</li>
              <li>• {ct("finlandItem3")}</li>
            </ul>
          </div>
        </div>

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">{ct("scandinaviaOperationalTips")}</h4>
          <ul className="text-sm space-y-1">
            <li>• {ct("scandinaviaTip1")}</li>
            <li>• {ct("scandinaviaTip2")}</li>
            <li>• {ct("scandinaviaTip3")}</li>
            <li>• {ct("scandinaviaTip4")}</li>
          </ul>
        </div>
      </div>

      {/* UK & Ireland */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-2xl">🇬🇧🇮🇪</span>
          {ct("ukIrelandTitle")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">🇬🇧 {ct("ukTitle")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>{ct("ukItem1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("ukItem2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Ship className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("ukItem3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Euro className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("ukItem4")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">🇮🇪 {ct("irelandTitle")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("irelandItem1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("irelandItem2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Ship className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("irelandItem3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Euro className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("irelandItem4")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
          <h4 className="font-semibold flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4" />
            {ct("brexitImpact")}
          </h4>
          <ul className="text-sm space-y-1">
            <li>• {ct("brexitItem1")}</li>
            <li>• {ct("brexitItem2")}</li>
            <li>• {ct("brexitItem3")}</li>
            <li>• {ct("brexitItem4")}</li>
          </ul>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["europe-zones"] && (
        <Quiz
          questions={quizzes["europe-zones"]}
          chapterId="europe-zones"
        />
      )}
    </div>
  );
}
