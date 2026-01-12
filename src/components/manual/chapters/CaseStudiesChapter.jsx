import { InfoCard } from "../InfoCard";
import { Lightbulb, AlertTriangle, CheckCircle, XCircle, Euro, Clock, Truck, MapPin, Thermometer, FileText, Users, TrendingUp, Target } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";

export function CaseStudiesChapter() {
  const { ct } = useChapterTranslation("case-studies");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Lightbulb}
        variant="casestudies"
      />

      {/* Introduction */}
      <section className="info-card">
        <h2 className="section-title flex items-center gap-2 mb-4">
          <Target className="w-6 h-6 text-primary" />
          {ct("introTitle")}
        </h2>
        <p className="text-muted-foreground">{ct("introDesc")}</p>
      </section>

      {/* Case Study 1 */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-destructive/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <XCircle className="w-6 h-6 text-destructive" />
            {ct("case1Title")}
          </h2>
          <p className="text-sm text-muted-foreground">{ct("case1Subtitle")}</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                {ct("situation")}
              </h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• {ct("case1Route")}</li>
                <li>• {ct("case1ClientOffer")}</li>
                <li>• {ct("case1DispatcherError")}</li>
                <li>• {ct("case1DriverRoute")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Euro className="w-4 h-4 text-destructive" />
                {ct("reality")}
              </h3>
              <div className="bg-destructive/5 rounded-lg p-4 text-sm">
                <div className="space-y-1">
                  <p>{ct("case1BaseCost")} <strong>1,210 EUR</strong></p>
                  <p>{ct("case1GermanMaut")} <strong>157 EUR</strong></p>
                  <p>{ct("case1FrenchTolls")} <strong>180 EUR</strong></p>
                  <p className="border-t pt-2 mt-2 font-bold text-destructive">{ct("case1TotalCost")} 1,547 EUR</p>
                  <p className="font-bold text-destructive">{ct("case1Loss")} -597 EUR</p>
                </div>
              </div>
            </div>
          </div>
          <InfoCard title={ct("lessonsLearned")} icon={Lightbulb} variant="warning">
            <ul className="space-y-1">
              <li>• <strong>{ct("lesson1")}</strong></li>
              <li>• <strong>{ct("lesson2")}</strong></li>
              <li>• <strong>{ct("lesson3")}</strong></li>
              <li>• <strong>{ct("lesson4")}</strong></li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Case Study 2 */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-success/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-success" />
            {ct("case2Title")}
          </h2>
          <p className="text-sm text-muted-foreground">{ct("case2Subtitle")}</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">{ct("outbound")}</h4>
              <p className="font-medium">{ct("case2OutboundRoute")}</p>
              <p className="text-sm text-muted-foreground">{ct("case2OutboundDetails")}</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">{ct("backhaul")}</h4>
              <p className="font-medium">{ct("case2BackhaulRoute")}</p>
              <p className="text-sm text-muted-foreground">{ct("case2BackhaulDetails")}</p>
            </div>
            <div className="bg-success/10 rounded-lg p-4">
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">{ct("result")}</h4>
              <p className="font-medium text-success">{ct("case2Total")}</p>
              <p className="text-sm text-muted-foreground">{ct("case2Comparison")}</p>
            </div>
          </div>
          <InfoCard title={ct("keySuccessFactors")} icon={CheckCircle} variant="success">
            <ul className="space-y-1">
              <li>• <strong>{ct("success1")}</strong></li>
              <li>• <strong>{ct("success2")}</strong></li>
              <li>• <strong>{ct("success3")}</strong></li>
              <li>• <strong>{ct("success4")}</strong></li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Case Study 3 */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-warning/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-warning" />
            {ct("case3Title")}
          </h2>
          <p className="text-sm text-muted-foreground">{ct("case3Subtitle")}</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-muted/30 rounded-lg p-4">
            <h3 className="font-semibold mb-2">{ct("initialSituation")}</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• {ct("case3Route")}</li>
              <li>• {ct("case3Client")}</li>
              <li>• {ct("case3OriginalDelivery")}</li>
              <li>• {ct("case3BreakdownReport")}</li>
            </ul>
          </div>
          <InfoCard title={ct("whatWentRight")} icon={CheckCircle} variant="success">
            <ul className="space-y-1">
              <li>• <strong>{ct("right1")}</strong></li>
              <li>• <strong>{ct("right2")}</strong></li>
              <li>• <strong>{ct("right3")}</strong></li>
              <li>• <strong>{ct("right4")}</strong></li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Case Study 4 */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-destructive/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <XCircle className="w-6 h-6 text-destructive" />
            {ct("case4Title")}
          </h2>
          <p className="text-sm text-muted-foreground">{ct("case4Subtitle")}</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">{ct("theShipment")}</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• {ct("case4Shipment1")}</li>
                <li>• {ct("case4Shipment2")}</li>
                <li>• {ct("case4Shipment3")}</li>
                <li>• {ct("case4Shipment4")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">{ct("whatHappened")}</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• {ct("case4Happened1")}</li>
                <li>• {ct("case4Happened2")}</li>
                <li>• {ct("case4Happened3")}</li>
                <li>• {ct("case4Happened4")}</li>
              </ul>
            </div>
          </div>
          <InfoCard title={ct("correctProcedure")} icon={CheckCircle} variant="success">
            <ul className="space-y-1">
              <li>• <strong>{ct("correct1")}</strong></li>
              <li>• <strong>{ct("correct2")}</strong></li>
              <li>• <strong>{ct("correct3")}</strong></li>
              <li>• <strong>{ct("correct4")}</strong></li>
              <li>• <strong>{ct("correct5")}</strong></li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Case Study 5 */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-info/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Truck className="w-6 h-6 text-info" />
            {ct("case5Title")}
          </h2>
          <p className="text-sm text-muted-foreground">{ct("case5Subtitle")}</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-muted/30 rounded-lg p-4">
            <h3 className="font-semibold mb-2">{ct("clientRequest")}</h3>
            <p className="text-sm text-muted-foreground">{ct("case5ClientMessage")}</p>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-destructive">{ct("answerImpossible")}</h4>
            <p className="text-sm text-muted-foreground">{ct("impossibleExplanation")}</p>
          </div>
        </div>
      </section>

      {/* Case Study 6 - Temperature */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-blue-500/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Thermometer className="w-6 h-6 text-blue-500" />
            {ct("case6Title")}
          </h2>
          <p className="text-sm text-muted-foreground">{ct("case6Subtitle")}</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-muted/30 rounded-lg p-4">
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• {ct("case6Situation")}</li>
              <li>• {ct("case6Route")}</li>
              <li>• {ct("case6CargoValue")}</li>
              <li>• {ct("case6Problem")}</li>
              <li>• {ct("case6Cause")}</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
            <p className="text-sm font-medium text-destructive">{ct("case6Outcome")}</p>
            <p className="text-sm text-muted-foreground">{ct("case6Insurance")}</p>
          </div>
          <InfoCard title={ct("lessonsLearned")} icon={Lightbulb} variant="warning">
            <ul className="space-y-1">
              <li>• <strong>{ct("case6Lesson1")}</strong></li>
              <li>• <strong>{ct("case6Lesson2")}</strong></li>
              <li>• <strong>{ct("case6Lesson3")}</strong></li>
              <li>• <strong>{ct("case6Lesson4")}</strong></li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Case Study 7 - Customs */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-orange-500/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <FileText className="w-6 h-6 text-orange-500" />
            {ct("case7Title")}
          </h2>
          <p className="text-sm text-muted-foreground">{ct("case7Subtitle")}</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-muted/30 rounded-lg p-4">
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• {ct("case7Route")}</li>
              <li>• {ct("case7Cargo")}</li>
              <li>• {ct("case7Problem")}</li>
              <li>• {ct("case7Cause1")}</li>
              <li>• {ct("case7Cause2")}</li>
              <li>• {ct("case7Impact")}</li>
            </ul>
          </div>
          <InfoCard title={ct("lessonsLearned")} icon={Lightbulb} variant="warning">
            <ul className="space-y-1">
              <li>• <strong>{ct("case7Lesson1")}</strong></li>
              <li>• <strong>{ct("case7Lesson2")}</strong></li>
              <li>• <strong>{ct("case7Lesson3")}</strong></li>
              <li>• <strong>{ct("case7Lesson4")}</strong></li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Case Study 8 - Carrier Default */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-purple-500/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Users className="w-6 h-6 text-purple-500" />
            {ct("case8Title")}
          </h2>
          <p className="text-sm text-muted-foreground">{ct("case8Subtitle")}</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-2">{ct("case8Situation")}</p>
            <p className="text-sm font-medium text-destructive">{ct("case8Problem")}</p>
          </div>
          <div className="bg-warning/10 rounded-lg p-4">
            <h4 className="font-semibold mb-2">{ct("case8RedFlags")}</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• {ct("case8RedFlag1")}</li>
              <li>• {ct("case8RedFlag2")}</li>
              <li>• {ct("case8RedFlag3")}</li>
            </ul>
          </div>
          <InfoCard title={ct("lessonsLearned")} icon={Lightbulb} variant="warning">
            <ul className="space-y-1">
              <li>• <strong>{ct("case8Lesson1")}</strong></li>
              <li>• <strong>{ct("case8Lesson2")}</strong></li>
              <li>• <strong>{ct("case8Lesson3")}</strong></li>
              <li>• <strong>{ct("case8Lesson4")}</strong></li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Case Study 9 - Perfect Storm */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-amber-500/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            {ct("case9Title")}
          </h2>
          <p className="text-sm text-muted-foreground">{ct("case9Subtitle")}</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-destructive/10 rounded-lg p-4">
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• {ct("case9Problem1")}</li>
                <li>• {ct("case9Problem2")}</li>
                <li>• {ct("case9Problem3")}</li>
                <li>• {ct("case9Problem4")}</li>
              </ul>
            </div>
            <div className="bg-success/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">{ct("case9Solution")}</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• {ct("case9Solution1")}</li>
                <li>• {ct("case9Solution2")}</li>
                <li>• {ct("case9Solution3")}</li>
                <li>• {ct("case9Solution4")}</li>
              </ul>
            </div>
          </div>
          <div className="bg-success/10 border border-success/30 rounded-lg p-4">
            <p className="text-sm font-medium text-success">{ct("case9Result")}</p>
          </div>
        </div>
      </section>

      {/* Case Study 10 - Negotiation Win */}
      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-emerald-500/10 p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-emerald-500" />
            {ct("case10Title")}
          </h2>
          <p className="text-sm text-muted-foreground">{ct("case10Subtitle")}</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">{ct("case10Situation")}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">{ct("case10ClientNeeds")}</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• {ct("case10Need1")}</li>
                <li>• {ct("case10Need2")}</li>
                <li>• {ct("case10Need3")}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{ct("case10Strategy")}</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• {ct("case10Strategy1")}</li>
                <li>• {ct("case10Strategy2")}</li>
                <li>• {ct("case10Strategy3")}</li>
              </ul>
            </div>
          </div>
          <div className="bg-success/10 border border-success/30 rounded-lg p-4">
            <p className="text-sm font-medium text-success">{ct("case10Result")}</p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="highlight-card">
        <h2 className="section-title flex items-center gap-2 mb-4">
          <Lightbulb className="w-6 h-6 text-primary" />
          {ct("summaryTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("summaryDesc")}</p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
            <span className="text-sm">{ct("summaryPoint1")}</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
            <span className="text-sm">{ct("summaryPoint2")}</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
            <span className="text-sm">{ct("summaryPoint3")}</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
            <span className="text-sm">{ct("summaryPoint4")}</span>
          </div>
        </div>
      </section>

      {/* Quiz */}
      {quizzes['case-studies'] && (
        <Quiz title={ct("quizTitle")} questions={quizzes['case-studies']} chapterId="case-studies" />
      )}
    </div>
  );
}