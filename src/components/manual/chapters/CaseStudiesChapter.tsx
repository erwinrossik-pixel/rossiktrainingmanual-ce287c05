import { InfoCard } from "../InfoCard";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { Lightbulb, AlertTriangle, CheckCircle, XCircle, Euro, Clock, Truck, MapPin, Thermometer, FileText, Users, TrendingUp, Target, HelpCircle, Route, Scale } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import { Quiz } from "../Quiz";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import caseStudyImg from "@/assets/chapters/case-study-analysis.jpg";
import caseStudyAnalysisImg from "@/assets/chapters/case-studies-analysis.jpg";

// Interactive Decision Scenario Component
function DecisionScenario({
  title,
  situation,
  variables,
  options,
  correctOption,
  explanation
}: {
  title: string;
  situation: string;
  variables: { label: string; value: string; isUnexpected?: boolean }[];
  options: { id: string; label: string; description: string }[];
  correctOption: string;
  explanation: string;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    if (selected) setShowResult(true);
  };

  const isCorrect = selected === correctOption;

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="bg-primary/10 p-4 border-b border-border">
        <h3 className="font-semibold flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-primary" />
          {title}
        </h3>
      </div>
      <div className="p-6 space-y-4">
        <p className="text-muted-foreground">{situation}</p>
        
        {/* Variables/Constraints */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {variables.map((v, i) => (
            <div 
              key={i} 
              className={`p-3 rounded-lg text-sm ${v.isUnexpected ? 'bg-warning/20 border border-warning/30' : 'bg-muted/50'}`}
            >
              <span className="text-muted-foreground">{v.label}:</span>
              <span className={`font-medium ml-1 ${v.isUnexpected ? 'text-warning' : ''}`}>
                {v.value}
                {v.isUnexpected && ' ⚠️'}
              </span>
            </div>
          ))}
        </div>

        {/* Options */}
        <div className="space-y-2">
          {options.map(opt => (
            <button
              key={opt.id}
              onClick={() => !showResult && setSelected(opt.id)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                showResult
                  ? opt.id === correctOption
                    ? 'bg-success/20 border-success'
                    : opt.id === selected
                      ? 'bg-destructive/20 border-destructive'
                      : 'bg-muted/30 border-border'
                  : selected === opt.id
                    ? 'bg-primary/20 border-primary'
                    : 'bg-muted/30 border-border hover:border-primary/50'
              }`}
            >
              <p className="font-medium">{opt.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{opt.description}</p>
            </button>
          ))}
        </div>

        {!showResult ? (
          <Button onClick={handleSubmit} disabled={!selected} className="w-full">
            Submit Decision
          </Button>
        ) : (
          <div className={`p-4 rounded-lg ${isCorrect ? 'bg-success/20 border border-success/30' : 'bg-warning/20 border border-warning/30'}`}>
            <p className="font-semibold mb-2">
              {isCorrect ? '✓ Correct Decision!' : '✗ Not the optimal choice'}
            </p>
            <p className="text-sm text-muted-foreground">{explanation}</p>
            <Button 
              onClick={() => { setSelected(null); setShowResult(false); }} 
              variant="outline" 
              size="sm" 
              className="mt-3"
            >
              Try Another Scenario
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

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
        
        {/* Case Study Analysis Image - contextual after introduction */}
        <ChapterImage
          src={caseStudyImg}
          alt="Professional case study analysis session"
          variant="float-right"
          className="mt-4"
        />
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

      {/* Interactive Decision Scenarios */}
      <section>
        <h2 className="section-title flex items-center gap-2 mb-4">
          <HelpCircle className="w-6 h-6 text-primary" />
          {ct("decisionScenariosTitle") || "Decision Scenarios"}
        </h2>
        <p className="text-muted-foreground mb-6">
          {ct("decisionScenariosDesc") || "Apply your knowledge to real-world logistics challenges. Consider all variables before making your decision."}
        </p>

        <div className="space-y-6">
          <DecisionScenario
            title={ct("decision1Title") || "Route Selection Under Pressure"}
            situation={ct("decision1Situation") || "Client needs urgent delivery from Munich to Barcelona. You have two route options, but just received news of a major traffic jam on the main route."}
            variables={[
              { label: "Distance A5/A7", value: "1,450 km" },
              { label: "Distance via Lyon", value: "1,520 km" },
              { label: "Traffic Delay", value: "4+ hours", isUnexpected: true },
              { label: "Deadline", value: "48h" },
              { label: "Driver Hours Left", value: "7h today" },
              { label: "Tunnel Fee (Fréjus)", value: "€420" },
            ]}
            options={[
              { id: "a", label: "Route A: Via A5/A7 (shorter)", description: "Take the jam, save on distance and tolls" },
              { id: "b", label: "Route B: Via Lyon/A9", description: "Longer but avoids congestion, higher tolls" },
              { id: "c", label: "Route C: Wait until jam clears", description: "Park and wait 4-5 hours for traffic to clear" },
            ]}
            correctOption="b"
            explanation={ct("decision1Explanation") || "Route B is optimal. The 70km extra costs ~€85 in fuel/tolls, but saves 4+ hours. Waiting wastes driver hours and risks deadline. Always factor in opportunity cost of delays vs. extra distance."}
          />

          <DecisionScenario
            title={ct("decision2Title") || "Carrier Selection Dilemma"}
            situation={ct("decision2Situation") || "You need a reefer for pharmaceutical goods (-8°C). Three carriers responded to your exchange posting."}
            variables={[
              { label: "Carrier A Price", value: "€1,850" },
              { label: "Carrier B Price", value: "€1,650", isUnexpected: true },
              { label: "Carrier C Price", value: "€1,920" },
              { label: "Cargo Value", value: "€185,000" },
              { label: "Carrier B Rating", value: "3.2/5 (new)", isUnexpected: true },
              { label: "Route", value: "NL → IT" },
            ]}
            options={[
              { id: "a", label: "Carrier A: €1,850", description: "4.8 rating, 5 years experience, GDP certified" },
              { id: "b", label: "Carrier B: €1,650 (cheapest)", description: "3.2 rating, 8 months in business, basic insurance" },
              { id: "c", label: "Carrier C: €1,920", description: "4.6 rating, pharma specialist, €500k cargo insurance" },
            ]}
            correctOption="c"
            explanation={ct("decision2Explanation") || "Carrier C is the right choice. For €185k pharmaceutical cargo, the €70 premium over Carrier A buys specialist handling and higher insurance. Carrier B's low rating and limited experience are major red flags for temperature-sensitive goods."}
          />

          <DecisionScenario
            title={ct("decision3Title") || "Port Delay Crisis"}
            situation={ct("decision3Situation") || "Your driver arrives at Rotterdam port but the container isn't ready. Terminal says 6-hour delay. Client expects delivery tomorrow morning in Stuttgart."}
            variables={[
              { label: "Current Time", value: "14:00" },
              { label: "Container Delay", value: "6 hours", isUnexpected: true },
              { label: "Rotterdam-Stuttgart", value: "650 km / 7.5h" },
              { label: "Driver Rest Due", value: "22:00" },
              { label: "Delivery Deadline", value: "Tomorrow 08:00" },
              { label: "Demurrage", value: "€150/hour after 2h" },
            ]}
            options={[
              { id: "a", label: "Wait at port", description: "Driver waits, picks up at 20:00, drives overnight" },
              { id: "b", label: "Driver rest now, pickup later", description: "Start daily rest at port, pick up early morning" },
              { id: "c", label: "Request relay driver", description: "Second driver takes over for overnight leg" },
            ]}
            correctOption="b"
            explanation={ct("decision3Explanation") || "Option B is optimal. Driver starts 11h rest at 14:00, wakes at 01:00, picks up container (ready by 20:00), and drives 7.5h to arrive Stuttgart by 08:30. This respects driving time rules and costs no extra vs. relay. Option A violates rest requirements."}
          />
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
          <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span className="text-sm">{ct("takeaway1")}</span></div>
          <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span className="text-sm">{ct("takeaway2")}</span></div>
          <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span className="text-sm">{ct("takeaway3")}</span></div>
          <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span className="text-sm">{ct("takeaway4")}</span></div>
          <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span className="text-sm">{ct("takeaway5")}</span></div>
          <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span className="text-sm">{ct("takeaway6")}</span></div>
          <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span className="text-sm">{ct("takeaway7")}</span></div>
          <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span className="text-sm">{ct("takeaway8")}</span></div>
        </div>
        
        {/* Case Study Analysis Image - contextual after takeaways */}
        <ChapterImage
          src={caseStudyAnalysisImg}
          alt="Case study whiteboard presentation with logistics flowcharts"
          variant="float-right"
          className="mt-4"
        />
      </section>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="case-studies" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="case-studies" />
    </div>
  );
}
