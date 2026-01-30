import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { quizzes } from "@/data/quizData";
import { Building2, Search, FileText, BarChart3, Target, Handshake, Phone, Mail, Users, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import clientsMeetingImg from "@/assets/chapters/clients-meeting.jpg";

export function ClientsChapter() {
  const { ct } = useChapterTranslation("clients");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Building2}
        variant="clients"
      />

      {/* Clients Meeting Image */}
      <ChapterImage
        src={clientsMeetingImg}
        alt="Business meeting with logistics client"
        variant="inline"
        className="mb-6"
      />

      {/* Client Sources */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Search className="w-6 h-6 text-primary" />
          {ct("clientAcquisitionChannels")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Search, title: ct("freightExchanges"), desc: ct("monitorForShippers") },
            { icon: Building2, title: ct("directApproach"), desc: ct("contactProducersRetailers") },
            { icon: Target, title: ct("seasonalShippers"), desc: ct("agriculturalRetailPeaks") },
            { icon: Handshake, title: ct("referrals"), desc: ct("networkWithContacts") },
          ].map((item, i) => (
            <div key={i} className="info-card text-center">
              <item.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Sectors */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Building2 className="w-6 h-6 text-primary" />
          {ct("targetIndustrySectors")}
        </h2>
        <DataTable
          headers={[ct("sector"), ct("transportNeeds"), ct("typicalVolumes"), ct("keyConsiderations")]}
          rows={[
            [ct("automotive"), ct("automotiveNeeds"), ct("automotiveVolumes"), ct("automotiveConsiderations")],
            [ct("fmcgRetail"), ct("fmcgNeeds"), ct("fmcgVolumes"), ct("fmcgConsiderations")],
            [ct("construction"), ct("constructionNeeds"), ct("constructionVolumes"), ct("constructionConsiderations")],
            [ct("agriculture"), ct("agricultureNeeds"), ct("agricultureVolumes"), ct("agricultureConsiderations")],
            [ct("pharmaceuticals"), ct("pharmaNeeds"), ct("pharmaVolumes"), ct("pharmaConsiderations")],
            [ct("industrialMachinery"), ct("industrialNeeds"), ct("industrialVolumes"), ct("industrialConsiderations")],
            [ct("foodBeverage"), ct("foodNeeds"), ct("foodVolumes"), ct("foodConsiderations")],
            [ct("ecommerce"), ct("ecommerceNeeds"), ct("ecommerceVolumes"), ct("ecommerceConsiderations")],
          ]}
        />
      </section>

      {/* Cold Calling Script */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Phone className="w-6 h-6 text-primary" />
          {ct("coldCallingFramework")}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold">{ct("introduction10sec")}</h4>
                <p className="text-sm text-muted-foreground italic">"{ct("introScript")}"</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold">{ct("valueHook15sec")}</h4>
                <p className="text-sm text-muted-foreground italic">"{ct("valueHookScript")}"</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold">{ct("discoveryQuestions")}</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• "{ct("discoveryQ1")}"</li>
                  <li>• "{ct("discoveryQ2")}"</li>
                  <li>• "{ct("discoveryQ3")}"</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary text-sm">4</span>
              </div>
              <div>
                <h4 className="font-semibold">{ct("closeForNextStep")}</h4>
                <p className="text-sm text-muted-foreground italic">"{ct("closeScript")}"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Templates */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Mail className="w-6 h-6 text-primary" />
          {ct("emailTemplatesProspecting")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">{ct("initialContactEmail")}</h3>
            <div className="bg-muted/30 rounded-lg p-4 text-sm font-mono">
              <p><strong>{ct("initialEmailSubject")}</strong></p>
              <br />
              <p>{ct("initialEmailDear")}</p>
              <br />
              <p>{ct("initialEmailIntro")}</p>
              <br />
              <p>• {ct("initialEmailBullet1")}</p>
              <p>• {ct("initialEmailBullet2")}</p>
              <p>• {ct("initialEmailBullet3")}</p>
              <br />
              <p>{ct("initialEmailClose")}</p>
              <br />
              <p>{ct("bestRegards")}<br />{ct("yourName")}</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">{ct("followUpEmail")}</h3>
            <div className="bg-muted/30 rounded-lg p-4 text-sm font-mono">
              <p><strong>{ct("followUpSubject")}</strong></p>
              <br />
              <p>{ct("initialEmailDear")}</p>
              <br />
              <p>{ct("followUpIntro")}</p>
              <br />
              <p>{ct("followUpBody")}</p>
              <br />
              <p>{ct("followUpCommitment")}</p>
              <br />
              <p>{ct("followUpClose")}</p>
              <br />
              <p>{ct("bestRegards")}<br />{ct("yourName")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Tips */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          {ct("contractBestPractices")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-3">
            <h3 className="font-semibold">{ct("quarterlyMiniContracts")}</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                {ct("includeFuelIndexation")}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                {ct("tollAdjustmentProvisions")}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                {ct("volumeCommitmentsFlexibility")}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                {ct("clearPaymentTerms")}
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">{ct("negotiationPoints")}</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-info mt-0.5" />
                {ct("leadWithValue")}
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-info mt-0.5" />
                {ct("offerTracking")}
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-info mt-0.5" />
                {ct("highlightPunctuality")}
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-info mt-0.5" />
                {ct("proposeDedicatedCapacity")}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Client Segmentation */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          {ct("clientSegmentationStrategy")}
        </h2>
        <DataTable
          headers={[ct("segment"), ct("volume"), ct("serviceLevel"), ct("pricingStrategy"), ct("attentionLevel")]}
          rows={[
            [ct("strategicA"), ct("highRegular"), ct("premiumDedicated"), ct("negotiatedContracts"), ct("dailyContact")],
            [ct("growingB"), ct("mediumGrowing"), ct("standardPlus"), ct("competitiveRates"), ct("weeklyReviews")],
            [ct("occasionalC"), ct("lowIrregular"), ct("standard"), ct("marketRates"), ct("asNeeded")],
            [ct("unprofitableD"), ct("any"), ct("review"), ct("increaseOrExit"), ct("minimal")],
          ]}
        />
        <p className="text-sm text-muted-foreground mt-4">
          {ct("segmentationAdvice")}
        </p>
      </section>

      {/* KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-primary" />
          {ct("keyPerformanceIndicators")}
        </h2>
        <div className="grid md:grid-cols-4 gap-4 mt-4">
          <div className="p-4 bg-success/10 rounded-lg text-center border border-success/20">
            <p className="text-2xl font-bold text-success">95%+</p>
            <p className="text-sm text-muted-foreground">{ct("onTimeDelivery")}</p>
          </div>
          <div className="p-4 bg-info/10 rounded-lg text-center border border-info/20">
            <p className="text-2xl font-bold text-info">&lt;1%</p>
            <p className="text-sm text-muted-foreground">{ct("claimRate")}</p>
          </div>
          <div className="p-4 bg-warning/10 rounded-lg text-center border border-warning/20">
            <p className="text-2xl font-bold text-warning">&lt;24h</p>
            <p className="text-sm text-muted-foreground">{ct("epodDelivery")}</p>
          </div>
          <div className="p-4 bg-primary/10 rounded-lg text-center border border-primary/20">
            <p className="text-2xl font-bold text-primary">4.5+</p>
            <p className="text-sm text-muted-foreground">{ct("customerRating")}</p>
          </div>
        </div>
      </div>

      {/* Retention Strategies */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          {ct("clientRetentionStrategies")}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title={ct("proactiveCommunication")} icon={Phone} variant="success">
            <ul className="space-y-2 text-sm">
              <li>• {ct("regularPerformanceReviews")}</li>
              <li>• {ct("quarterlyBusinessMeetings")}</li>
              <li>• {ct("earlyWarningIssues")}</li>
              <li>• {ct("shareMarketInsights")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("valueAddedServices")} icon={Target} variant="info">
            <ul className="space-y-2 text-sm">
              <li>• {ct("customizedReporting")}</li>
              <li>• {ct("dedicatedAccountManager")}</li>
              <li>• {ct("priorityCapacityAccess")}</li>
              <li>• {ct("integrationWithSystems")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("issueResolution")} icon={AlertTriangle} variant="warning">
            <ul className="space-y-2 text-sm">
              <li>• {ct("respondWithin1Hour")}</li>
              <li>• {ct("ownTheProblem")}</li>
              <li>• {ct("provideSolutions")}</li>
              <li>• {ct("followUpAfterResolution")}</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Client Communication */}
      <div className="highlight-card">
        <h3 className="font-semibold mb-3">📞 {ct("clientCommunicationTips")}</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium mb-2">{ct("proactiveUpdates")}</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• {ct("pickupConfirmation")}</li>
              <li>• {ct("delayNotificationsASAP")}</li>
              <li>• {ct("deliveryETAUpdates")}</li>
              <li>• {ct("podWithin24Hours")}</li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">{ct("issueHandling")}</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• {ct("acknowledgeImmediately")}</li>
              <li>• {ct("offerSolutionsNotExcuses")}</li>
              <li>• {ct("documentEverything")}</li>
              <li>• {ct("followUpOnResolution")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Warning Signs */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-warning" />
          {ct("warningSignsClientRisks")}
        </h2>
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">{ct("financialRedFlags")}</h3>
              <ul className="space-y-2 text-sm">
                <li>• {ct("consistentlyLatePayments")}</li>
                <li>• {ct("requestsExtendedTerms")}</li>
                <li>• {ct("disputesValidInvoices")}</li>
                <li>• {ct("negativeCreditReports")}</li>
                <li>• {ct("bouncedPayments")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct("operationalRedFlags")}</h3>
              <ul className="space-y-2 text-sm">
                <li>• {ct("unrealisticExpectations")}</li>
                <li>• {ct("constantLastMinuteChanges")}</li>
                <li>• {ct("blameShiftingCulture")}</li>
                <li>• {ct("noRespectForDrivers")}</li>
                <li>• {ct("excessiveWaitingTimes")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="clients" />

      {/* Quiz */}
      {quizzes.clients && (
        <Quiz title={ct("quizTitle")} questions={quizzes.clients} chapterId="clients" />
      )}
    </div>
  );
}
