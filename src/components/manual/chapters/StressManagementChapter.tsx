import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { ChapterHero } from "../ChapterHero";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { DataTable } from "../DataTable";
import { ProcessMap } from "../FlowDiagram";
import {
  Brain, Zap, AlertTriangle, Clock, MessageSquare,
  Users, Heart, Shield, Phone, TrendingUp, CheckCircle, Book, Activity, Coffee
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import stressDriverImg from "@/assets/chapters/stress-management-driver.jpg";
import stressRelaxationImg from "@/assets/chapters/stress-relaxation.jpg";

export function StressManagementChapter() {
  const { ct } = useChapterTranslation('stress-management');

  // Stress indicators table
  const stressIndicatorsHeaders = [
    ct('indicatorTypeHeader') || "Type",
    ct('indicatorSignsHeader') || "Warning Signs",
    ct('indicatorActionHeader') || "Immediate Action"
  ];

  const stressIndicatorsRows = [
    [
      <span className="font-semibold flex items-center gap-2"><Activity className="w-4 h-4 text-warning" /> {ct('indicatorPhysical') || "Physical"}</span>,
      ct('physicalSigns') || "Headaches, muscle tension, fatigue, sleep issues",
      ct('physicalAction') || "5-min stretch break, deep breathing"
    ],
    [
      <span className="font-semibold flex items-center gap-2"><Brain className="w-4 h-4 text-info" /> {ct('indicatorCognitive') || "Cognitive"}</span>,
      ct('cognitiveSigns') || "Poor concentration, forgetfulness, racing thoughts",
      ct('cognitiveAction') || "Task prioritization, written lists"
    ],
    [
      <span className="font-semibold flex items-center gap-2"><Heart className="w-4 h-4 text-destructive" /> {ct('indicatorEmotional') || "Emotional"}</span>,
      ct('emotionalSigns') || "Irritability, anxiety, feeling overwhelmed",
      ct('emotionalAction') || "Step away, brief walk, talk to colleague"
    ],
    [
      <span className="font-semibold flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> {ct('indicatorBehavioral') || "Behavioral"}</span>,
      ct('behavioralSigns') || "Procrastination, isolation, increased errors",
      ct('behavioralAction') || "Seek support, delegate if possible"
    ]
  ];

  // Stress management techniques
  const stressTechniques = [
    {
      name: ct('techniqueImmediate') || "Immediate Relief",
      color: "primary" as const,
      steps: [
        ct('techniqueImmediateStep1') || "Box breathing: 4-4-4-4 pattern",
        ct('techniqueImmediateStep2') || "Desk stretches (neck, shoulders)",
        ct('techniqueImmediateStep3') || "5-minute walk away from desk"
      ]
    },
    {
      name: ct('techniqueDaily') || "Daily Habits",
      color: "success" as const,
      steps: [
        ct('techniqueDailyStep1') || "Morning priority planning (3 tasks)",
        ct('techniqueDailyStep2') || "Regular meal breaks (no desk eating)",
        ct('techniqueDailyStep3') || "End-of-day review ritual"
      ]
    },
    {
      name: ct('techniqueWeekly') || "Weekly Reset",
      color: "info" as const,
      steps: [
        ct('techniqueWeeklyStep1') || "Full day off (no work emails)",
        ct('techniqueWeeklyStep2') || "Physical activity/hobby",
        ct('techniqueWeeklyStep3') || "Social time (non-work friends)"
      ]
    },
    {
      name: ct('techniqueLongTerm') || "Long-term Resilience",
      color: "warning" as const,
      steps: [
        ct('techniqueLongTermStep1') || "Regular sleep schedule",
        ct('techniqueLongTermStep2') || "Professional development",
        ct('techniqueLongTermStep3') || "Mentorship/coaching"
      ]
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      <ChapterHero
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={Brain}
        variant="stress-management"
      />

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="section-title mb-1.5 sm:mb-2">{ct('section1Title')}</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('intro')}</p>
          </div>
        </div>
      </div>

      {/* Sources of Stress */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section1Title')}</span>
        </h2>
        <div className="info-card">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('section1Content')}</p>
        </div>
      </section>

      {/* Stress Indicators Table - NEW */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('indicatorsTitle') || "Stress Warning Signs"}</span>
        </h2>
        <DataTable headers={stressIndicatorsHeaders} rows={stressIndicatorsRows} />
      </section>

      {/* Recognizing Signs & Immediate Techniques */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section2Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section2Title')} variant="warning" icon={AlertTriangle}>
            <p className="text-muted-foreground">{ct('section2Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section3Title')} icon={Brain}>
            <p className="text-muted-foreground">{ct('section3Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Stress Management Techniques - NEW */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('techniquesTitle') || "Stress Management Strategies"}</span>
        </h2>
        <ProcessMap 
          title="" 
          phases={stressTechniques} 
        />
      </section>

      {/* Interactive Breathing Exercise - NEW */}
      <section>
        <div className="bg-success/10 border border-success/30 rounded-xl p-4 sm:p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2 text-success">
            <Activity className="w-5 h-5" />
            {ct('breathingExerciseTitle') || "Box Breathing Technique (4-4-4-4)"}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-card rounded-lg p-4 text-center border border-border">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <span className="text-lg font-bold text-primary">1</span>
              </div>
              <p className="text-sm font-medium text-foreground">{ct('breatheIn') || "Breathe In"}</p>
              <p className="text-2xl font-bold text-primary mt-1">4s</p>
            </div>
            <div className="bg-card rounded-lg p-4 text-center border border-border">
              <div className="w-12 h-12 mx-auto rounded-full bg-info/10 flex items-center justify-center mb-2">
                <span className="text-lg font-bold text-info">2</span>
              </div>
              <p className="text-sm font-medium text-foreground">{ct('holdBreath') || "Hold"}</p>
              <p className="text-2xl font-bold text-info mt-1">4s</p>
            </div>
            <div className="bg-card rounded-lg p-4 text-center border border-border">
              <div className="w-12 h-12 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-2">
                <span className="text-lg font-bold text-success">3</span>
              </div>
              <p className="text-sm font-medium text-foreground">{ct('breatheOut') || "Breathe Out"}</p>
              <p className="text-2xl font-bold text-success mt-1">4s</p>
            </div>
            <div className="bg-card rounded-lg p-4 text-center border border-border">
              <div className="w-12 h-12 mx-auto rounded-full bg-warning/10 flex items-center justify-center mb-2">
                <span className="text-lg font-bold text-warning">4</span>
              </div>
              <p className="text-sm font-medium text-foreground">{ct('holdEmpty') || "Hold"}</p>
              <p className="text-2xl font-bold text-warning mt-1">4s</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground text-center">
            {ct('breathingNote') || "Repeat 4-6 cycles. Use anytime you feel stress building."}
          </p>
        </div>
      </section>

      {/* Workday Organization */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section4Title')}</span>
        </h2>
        <div className="info-card">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('section4Content')}</p>
        </div>
      </section>

      {/* Daily Wellness Checklist - NEW */}
      <section>
        <div className="bg-accent border border-primary/20 rounded-xl p-4 sm:p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2 text-primary">
            <CheckCircle className="w-5 h-5" />
            {ct('wellnessChecklistTitle') || "Daily Wellness Checklist"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                <Coffee className="w-4 h-4 text-warning" />
                {ct('morningRoutine') || "Morning Routine"}
              </h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded border border-border flex-shrink-0" />
                  {ct('morningItem1') || "Arrive 10 min early (no rush)"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded border border-border flex-shrink-0" />
                  {ct('morningItem2') || "Review & prioritize 3 main tasks"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded border border-border flex-shrink-0" />
                  {ct('morningItem3') || "Quick team check-in"}
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                <Clock className="w-4 h-4 text-info" />
                {ct('throughoutDay') || "Throughout Day"}
              </h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded border border-border flex-shrink-0" />
                  {ct('dayItem1') || "Take lunch away from desk"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded border border-border flex-shrink-0" />
                  {ct('dayItem2') || "5-min break every 90 minutes"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded border border-border flex-shrink-0" />
                  {ct('dayItem3') || "Hydrate regularly (2L water)"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Communication & Difficult Clients */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section5Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section5Title')} icon={MessageSquare}>
            <p className="text-muted-foreground">{ct('section5Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section6Title')} icon={Users}>
            <p className="text-muted-foreground">{ct('section6Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Work-Life Balance & Burnout */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section7Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section7Title')} variant="success" icon={Heart}>
            <p className="text-muted-foreground">{ct('section7Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section8Title')} variant="warning" icon={Shield}>
            <p className="text-muted-foreground">{ct('section8Content')}</p>
          </InfoCard>
        </div>
        
        {/* Stress Management Driver Image - contextual after work-life balance section */}
        <ChapterImage
          src={stressDriverImg}
          alt="Driver practicing stress management techniques in truck cabin"
          variant="float-right"
          className="mt-4"
        />
      </section>

      {/* Support & Resilience */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section9Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section9Title')} icon={Phone}>
            <p className="text-muted-foreground">{ct('section9Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section10Title')} icon={TrendingUp}>
            <p className="text-muted-foreground">{ct('section10Content')}</p>
          </InfoCard>
        </div>
        
        {/* Relaxation Zone Image - contextual after support section */}
        <ChapterImage
          src={stressRelaxationImg}
          alt="Office relaxation corner with wellness elements"
          variant="float-right"
          className="mt-4"
        />
      </section>

      {/* Best Practices & Common Mistakes */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-success/10 border border-success/30 rounded-xl p-4 sm:p-5 lg:p-6">
            <h3 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-success text-sm sm:text-base">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>{ct('bestPracticesTitle')}</span>
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>• {ct('bestPractice1')}</li>
              <li>• {ct('bestPractice2')}</li>
              <li>• {ct('bestPractice3')}</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 sm:p-5 lg:p-6">
            <h3 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-destructive text-sm sm:text-base">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>{ct('commonMistakesTitle')}</span>
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>• {ct('commonMistake1')}</li>
              <li>• {ct('commonMistake2')}</li>
              <li>• {ct('commonMistake3')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Book className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('glossaryTitle')}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div key={num} className="bg-card border border-border rounded-lg p-3 sm:p-4 hover:border-primary/50 transition-colors">
              <dt className="font-semibold text-primary mb-0.5 sm:mb-1 text-sm sm:text-base">
                {ct(`glossaryTerm${num}`)}
              </dt>
              <dd className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {ct(`glossaryDef${num}`)}
              </dd>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="stress-management" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="stress-management" />
    </div>
  );
}
