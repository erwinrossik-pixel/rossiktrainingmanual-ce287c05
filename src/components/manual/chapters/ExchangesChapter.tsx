import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { Globe, Shield, MessageSquare, Search, Star, CreditCard } from "lucide-react";
import { Badge } from "../Badge";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import exchangeImg from "@/assets/chapters/freight-exchange-platform.jpg";

export function ExchangesChapter() {
  const { ct } = useChapterTranslation("exchanges");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Globe}
        variant="exchanges"
      />


      {/* Main Exchanges */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* TIMOCOM */}
        <div className="info-card border-t-4 border-t-blue-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
              TC
            </div>
            <div>
              <h3 className="font-semibold text-lg">{ct("timocomTitle")}</h3>
              <Badge variant="info">{ct("timocomBadge")}</Badge>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            {ct("timocomDesc")}
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <span>{ct("findPostLoads")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-muted-foreground" />
              <span>{ct("partnerVerification")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-muted-foreground" />
              <span>{ct("integratedTms")}</span>
            </div>
          </div>
        </div>

        {/* Trans.eu */}
        <div className="info-card border-t-4 border-t-green-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
              T.eu
            </div>
            <div>
              <h3 className="font-semibold text-lg">{ct("transeuTitle")}</h3>
              <Badge variant="success">{ct("transeuBadge")}</Badge>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            {ct("transeuDesc")}
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <span>{ct("ceeNetwork")}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-muted-foreground" />
              <span>{ct("privateTenders")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-muted-foreground" />
              <span>{ct("transRisk")}</span>
            </div>
          </div>
        </div>

        {/* Teleroute */}
        <div className="info-card border-t-4 border-t-orange-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
              TR
            </div>
            <div>
              <h3 className="font-semibold text-lg">{ct("telerouteTitle")}</h3>
              <Badge variant="warning">{ct("telerouteBadge")}</Badge>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            {ct("telerouteDesc")}
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-muted-foreground" />
              <span>{ct("paymentGuarantee")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <span>{ct("euWideCoverage")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-muted-foreground" />
              <span>{ct("alpegaGroup")}</span>
            </div>
          </div>
        </div>

        {/* Transporeon */}
        <div className="info-card border-t-4 border-t-purple-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
              TP
            </div>
            <div>
              <h3 className="font-semibold text-lg">{ct("transporeonTitle")}</h3>
              <Badge variant="primary">{ct("transporeonBadge")}</Badge>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            {ct("transporeonDesc")}
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <span>{ct("eTendering")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <span>{ct("realTimeVisibility")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-muted-foreground" />
              <span>{ct("telematicsIntegration")}</span>
            </div>
          </div>
        </div>
        
        {/* Freight Exchange Platform Image - contextual after platforms grid */}
        <ChapterImage
          src={exchangeImg}
          alt="Modern freight exchange platform interface showing load matching"
          variant="float-right"
          className="mt-4"
        />
      </div>

      {/* Comparison Table */}
      <div className="info-card">
        <h2 className="section-title">{ct("quickComparison")}</h2>
        <DataTable 
          headers={[ct("platform"), ct("useCase"), ct("keyFeature")]}
          rows={[
            [ct("timocomTitle"), ct("dailySpotLoads"), ct("partnerVerification")],
            [ct("transeuTitle"), ct("ceeNetworkUse"), ct("privateTenders")],
            [ct("telerouteTitle"), ct("paymentSecurity"), ct("paymentGuarantee")],
            [ct("transporeonTitle"), ct("enterpriseTenders"), `${ct("eTendering")}, ${ct("telematicsIntegration")}`],
          ]}
        />
      </div>

      {/* Best Practices */}
      <div className="highlight-card">
        <h3 className="font-semibold mb-3">🎯 {ct("bestPracticesTitle")}</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ {ct("checkRatings")}</li>
            <li>✓ {ct("verifyInsurance")}</li>
            <li>✓ {ct("usePlatformMessaging")}</li>
            <li>✓ {ct("savePartners")}</li>
          </ul>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ {ct("usePaymentGuarantee")}</li>
            <li>✓ {ct("checkDrivingBans")}</li>
            <li>✓ {ct("confirmDetails")}</li>
            <li>✓ {ct("ratePartners")}</li>
          </ul>
        </div>
      </div>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="exchanges" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="exchanges" />
    </div>
  );
}
