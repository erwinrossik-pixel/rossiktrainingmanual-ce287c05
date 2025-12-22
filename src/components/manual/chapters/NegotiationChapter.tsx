import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Users, Target, MessageSquare, CheckCircle2, XCircle, AlertTriangle, Zap, Scale, TrendingUp, Handshake, Shield, Euro } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function NegotiationChapter() {
  const { ct } = useChapterTranslation("negotiation");

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
          <Handshake className="w-6 h-6 text-primary" />
          {ct("whyNegotiationSkillsMatter")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("negotiationMatterDesc")}
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Euro className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("betterMargins")}</p>
            <p className="text-xs text-muted-foreground">{ct("betterMarginsDesc")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("strongerRelationships")}</p>
            <p className="text-xs text-muted-foreground">{ct("strongerRelationshipsDesc")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("problemResolution")}</p>
            <p className="text-xs text-muted-foreground">{ct("problemResolutionDesc")}</p>
          </div>
        </div>
      </div>

      {/* Negotiation Fundamentals */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          {ct("negotiationFundamentals")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">{ct("keyPrinciples")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("preparation")}</strong> {ct("preparationDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("listenFirst")}</strong> {ct("listenFirstDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("focusOnInterests")}</strong> {ct("focusOnInterestsDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("createValue")}</strong> {ct("createValueDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("winWin")}</strong> {ct("winWinDesc")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{ct("batnaConcept")}</h3>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="font-medium text-primary mb-2">{ct("batnaTitle")}</p>
              <p className="text-sm text-muted-foreground mb-3">
                {ct("batnaDesc")}
              </p>
              <p className="text-sm">
                <strong>{ct("batnaExample")}</strong> {ct("batnaExampleDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Negotiation Scenarios */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <MessageSquare className="w-6 h-6 text-primary" />
          {ct("commonNegotiationScenarios")}
        </h2>

        <DataTable
          headers={[ct("scenario"), ct("yourGoal"), ct("theirGoal"), ct("strategy")]}
          rows={[
            [ct("clientRateNegotiation"), ct("maintainMarginWinBusiness"), ct("lowerPrice"), ct("leadWithValueJustifyCosts")],
            [ct("carrierRateNegotiation"), ct("getBestRate"), ct("maximizeRevenue"), ct("volumeCommitmentRegularBusiness")],
            [ct("paymentTerms"), ct("fasterPaymentFromClients"), ct("extendedTerms"), ct("earlyPaymentDiscountStagedTerms")],
            [ct("claimSettlement"), ct("fairResolution"), ct("minimizePayout"), ct("factsAndDocumentation")],
            [ct("serviceRecovery"), ct("keepClientMinimizeCost"), ct("compensation"), ct("understandImpactOfferRemedy")],
            [ct("contractRenewal"), ct("betterTermsKeepRelationship"), ct("rateIncrease"), ct("performanceDataMarketComparison")],
          ]}
        />
      </div>

      {/* Negotiating with Clients */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          {ct("negotiatingWithClients")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">{ct("effectiveApproaches")}</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5" />
                <span>{ct("leadWithValueNotPrice")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5" />
                <span>{ct("understandTotalCost")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5" />
                <span>{ct("offerAlternatives")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5" />
                <span>{ct("useVolumeCommitment")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5" />
                <span>{ct("documentAgreedTerms")}</span>
              </li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">{ct("avoidTheseMistakes")}</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 mt-0.5" />
                <span>{ct("droppingPriceImmediately")}</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 mt-0.5" />
                <span>{ct("competingOnPriceAlone")}</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 mt-0.5" />
                <span>{ct("concessionsWithoutGetting")}</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 mt-0.5" />
                <span>{ct("promisingWhatYouCantDeliver")}</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 mt-0.5" />
                <span>{ct("desperateToWin")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">{ct("sampleClientDialogue")}</h4>
          <div className="text-sm space-y-2">
            <p><strong>{ct("clientSays")}</strong> "Your rate is €1,450 but I have a quote for €1,350."</p>
            <p><strong>{ct("youSay")}</strong> "I understand price is important. Can you help me understand what's included in their offer? Our rate includes real-time GPS tracking, dedicated account management, and 95%+ on-time guarantee. What's most important for this shipment?"</p>
            <p><strong>{ct("clientSays")}</strong> "We need reliable delivery for production."</p>
            <p><strong>{ct("youSay")}</strong> "Our on-time rate is 97% this quarter. If I can offer you a €1,400 rate with priority carrier allocation, would that work for both of us?"</p>
          </div>
        </div>
      </div>

      {/* Negotiating with Carriers */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Scale className="w-6 h-6 text-primary" />
          {ct("negotiatingWithCarriers")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">{ct("whatYouCanOffer")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("volume")}</strong> {ct("volumeDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("payment")}</strong> {ct("paymentDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("backloads")}</strong> {ct("backloadsDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("flexibility")}</strong> {ct("flexibilityDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("partnership")}</strong> {ct("partnershipDesc")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{ct("whatYouWant")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("competitiveRates")}</strong> {ct("competitiveRatesDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("reliability")}</strong> {ct("reliabilityDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("communication")}</strong> {ct("communicationDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("flexibilityWant")}</strong> {ct("flexibilityWantDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("capacity")}</strong> {ct("capacityDesc")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
          <h4 className="font-semibold flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4" />
            {ct("goldenRuleCarrierNegotiation")}
          </h4>
          <p className="text-sm">
            {ct("goldenRuleDesc")}
          </p>
        </div>
      </div>

      {/* Negotiation Tactics */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          {ct("practicalNegotiationTactics")}
        </h2>

        <DataTable
          headers={[ct("tactic"), ct("howItWorks"), ct("whenToUse")]}
          rows={[
            [ct("anchoring"), ct("anchoringHow"), ct("anchoringWhen")],
            [ct("bracketing"), ct("bracketingHow"), ct("bracketingWhen")],
            [ct("silence"), ct("silenceHow"), ct("silenceWhen")],
            [ct("tradeOffs"), ct("tradeOffsHow"), ct("tradeOffsWhen")],
            [ct("goodCopBadCop"), ct("goodCopBadCopHow"), ct("goodCopBadCopWhen")],
            [ct("walkAwayPower"), ct("walkAwayPowerHow"), ct("walkAwayPowerWhen")],
            [ct("deadlinePressure"), ct("deadlinePressureHow"), ct("deadlinePressureWhen")],
            [ct("nibbling"), ct("nibblingHow"), ct("nibblingWhen")],
          ]}
        />
      </div>

      {/* Handling Difficult Situations */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          {ct("handlingDifficultNegotiations")}
        </h2>

        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("whenTheySayTooExpensive")}</h4>
            <p className="text-sm text-muted-foreground mb-2">{ct("dontImmediatelyDropPrice")}</p>
            <ul className="text-sm space-y-1">
              <li>• {ct("askWhatComparing")}</li>
              <li>• {ct("understandBudget")}</li>
              <li>• {ct("explainWhatsIncluded")}</li>
              <li>• {ct("offerAlternativesServiceLevels")}</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("whenUnreasonableDemand")}</h4>
            <p className="text-sm text-muted-foreground mb-2">{ct("stayCalm")}</p>
            <ul className="text-sm space-y-1">
              <li>• {ct("acknowledgeWithoutAgreeing")}</li>
              <li>• {ct("askToExplainReasoning")}</li>
              <li>• {ct("useObjectiveCriteria")}</li>
              <li>• {ct("offerCounterProposal")}</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("whenNegotiationsStall")}</h4>
            <p className="text-sm text-muted-foreground mb-2">{ct("breakTheDeadlock")}</p>
            <ul className="text-sm space-y-1">
              <li>• {ct("summarizeAgreed")}</li>
              <li>• {ct("identifyStickingPoints")}</li>
              <li>• {ct("suggestBreak")}</li>
              <li>• {ct("bringFreshPerspective")}</li>
              <li>• {ct("lookForCreativeSolutions")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Useful Phrases */}
      <div className="info-card bg-muted/30">
        <h2 className="section-title">{ct("powerfulNegotiationPhrases")}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-success">{ct("useThese")}</h4>
            <ul className="space-y-2 text-sm">
              <li>"Help me understand your priorities..."</li>
              <li>"What would make this work for you?"</li>
              <li>"Based on market data, we see..."</li>
              <li>"If we could do X, would you be able to..."</li>
              <li>"I appreciate your position, and..."</li>
              <li>"What if we approached this differently..."</li>
              <li>"Is there flexibility on...?"</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-destructive">{ct("avoidThese")}</h4>
            <ul className="space-y-2 text-sm">
              <li>"Take it or leave it"</li>
              <li>"That's our final offer" (unless it really is)</li>
              <li>"You're wrong about..."</li>
              <li>"I need this deal"</li>
              <li>"The competition is offering..."</li>
              <li>"I can't do anything about the price"</li>
              <li>"That's not my problem"</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["negotiation"] && (
        <Quiz
          title={ct("quizTitle")}
          questions={quizzes["negotiation"]}
          chapterId="negotiation"
          questionsPerRound={5}
        />
      )}
    </div>
  );
}