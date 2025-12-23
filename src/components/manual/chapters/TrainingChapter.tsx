import { GraduationCap, Calculator, Search, Settings, FileText, Target, Clock, Users, BookOpen, Award, CheckCircle, AlertTriangle, Briefcase, TrendingUp, Lightbulb } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
export function TrainingChapter() {
  const { ct } = useChapterTranslation("training");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={GraduationCap}
        variant="training"
      />

      {/* Training Overview */}
      <section className="info-card">
        <h2 className="section-title flex items-center gap-2 mb-4">
          <Target className="w-6 h-6 text-primary" />
          {ct("trainingOverviewTitle")}
        </h2>
        <p className="text-muted-foreground mb-6">{ct("trainingOverviewDesc")}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              {ct("programObjectives")}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>{ct("objective1")}</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>{ct("objective2")}</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>{ct("objective3")}</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>{ct("objective4")}</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>{ct("objective5")}</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>{ct("objective6")}</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6">
            <h3 className="font-semibold flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              {ct("trainingDuration")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                <span className="text-2xl font-bold text-primary">8</span>
                <span className="text-sm">{ct("durationWeeks")}</span>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 p-2 bg-info/20 rounded text-center text-xs">{ct("durationTheory")}</div>
                <div className="flex-1 p-2 bg-success/20 rounded text-center text-xs">{ct("durationPractical")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Week 1-2: Fundamentals */}
      <section className="info-card border-l-4 border-l-info">
        <h2 className="section-title flex items-center gap-2 mb-4">
          <BookOpen className="w-6 h-6 text-info" />
          {ct("fundamentalsTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("fundamentalsDesc")}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">{ct("week1Topics")}</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {ct("week1Topic1")}</li>
              <li>• {ct("week1Topic2")}</li>
              <li>• {ct("week1Topic3")}</li>
              <li>• {ct("week1Topic4")}</li>
              <li>• {ct("week1Topic5")}</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">{ct("week2Topics")}</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {ct("week2Topic1")}</li>
              <li>• {ct("week2Topic2")}</li>
              <li>• {ct("week2Topic3")}</li>
              <li>• {ct("week2Topic4")}</li>
              <li>• {ct("week2Topic5")}</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 bg-info/10 rounded-lg">
          <p className="text-sm font-medium">{ct("fundamentalsAssessment")}</p>
          <p className="text-xs text-muted-foreground">{ct("fundamentalsAssessmentDesc")}</p>
        </div>
      </section>

      {/* Week 3-4: Operations */}
      <section className="info-card border-l-4 border-l-success">
        <h2 className="section-title flex items-center gap-2 mb-4">
          <Settings className="w-6 h-6 text-success" />
          {ct("operationsTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("operationsDesc")}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">{ct("week3Topics")}</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {ct("week3Topic1")}</li>
              <li>• {ct("week3Topic2")}</li>
              <li>• {ct("week3Topic3")}</li>
              <li>• {ct("week3Topic4")}</li>
              <li>• {ct("week3Topic5")}</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">{ct("week4Topics")}</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {ct("week4Topic1")}</li>
              <li>• {ct("week4Topic2")}</li>
              <li>• {ct("week4Topic3")}</li>
              <li>• {ct("week4Topic4")}</li>
              <li>• {ct("week4Topic5")}</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 bg-success/10 rounded-lg">
          <p className="text-sm font-medium">{ct("operationsAssessment")}</p>
          <p className="text-xs text-muted-foreground">{ct("operationsAssessmentDesc")}</p>
        </div>
      </section>

      {/* Week 5-6: Advanced */}
      <section className="info-card border-l-4 border-l-warning">
        <h2 className="section-title flex items-center gap-2 mb-4">
          <TrendingUp className="w-6 h-6 text-warning" />
          {ct("advancedTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("advancedDesc")}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">{ct("week5Topics")}</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {ct("week5Topic1")}</li>
              <li>• {ct("week5Topic2")}</li>
              <li>• {ct("week5Topic3")}</li>
              <li>• {ct("week5Topic4")}</li>
              <li>• {ct("week5Topic5")}</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">{ct("week6Topics")}</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {ct("week6Topic1")}</li>
              <li>• {ct("week6Topic2")}</li>
              <li>• {ct("week6Topic3")}</li>
              <li>• {ct("week6Topic4")}</li>
              <li>• {ct("week6Topic5")}</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 bg-warning/10 rounded-lg">
          <p className="text-sm font-medium">{ct("advancedAssessment")}</p>
          <p className="text-xs text-muted-foreground">{ct("advancedAssessmentDesc")}</p>
        </div>
      </section>

      {/* Week 7-8: Mastery */}
      <section className="info-card border-l-4 border-l-primary">
        <h2 className="section-title flex items-center gap-2 mb-4">
          <Award className="w-6 h-6 text-primary" />
          {ct("masteryTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("masteryDesc")}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">{ct("week7Topics")}</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {ct("week7Topic1")}</li>
              <li>• {ct("week7Topic2")}</li>
              <li>• {ct("week7Topic3")}</li>
              <li>• {ct("week7Topic4")}</li>
              <li>• {ct("week7Topic5")}</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">{ct("week8Topics")}</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {ct("week8Topic1")}</li>
              <li>• {ct("week8Topic2")}</li>
              <li>• {ct("week8Topic3")}</li>
              <li>• {ct("week8Topic4")}</li>
              <li>• {ct("week8Topic5")}</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 bg-primary/10 rounded-lg">
          <p className="text-sm font-medium">{ct("masteryAssessment")}</p>
          <p className="text-xs text-muted-foreground">{ct("masteryAssessmentDesc")}</p>
        </div>
      </section>

      {/* Practical Exercises Title */}
      <div className="highlight-card">
        <h2 className="section-title flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-primary" />
          {ct("practicalExercisesTitle")}
        </h2>
        <p className="text-muted-foreground">{ct("practicalExercisesDesc")}</p>
      </div>

      {/* Exercise A */}
      <div className="info-card border-l-4 border-l-primary">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">A</div>
          <div className="flex-1">
            <h2 className="section-title mb-2">{ct("exerciseA")}</h2>
            <div className="p-4 bg-muted/50 rounded-lg mb-4">
              <p className="font-medium mb-2">{ct("exerciseAScenario")}</p>
              <p className="text-muted-foreground"><strong>{ct("exerciseARoute")}</strong> {ct("exerciseADistance")}</p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• {ct("exerciseABaseRate")}</li>
                <li>• {ct("exerciseAToll")}</li>
                <li>• {ct("exerciseAMargin")}</li>
                <li>• {ct("exerciseAFuel")}</li>
                <li>• {ct("exerciseAVehicle")}</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="font-semibold">{ct("deliverables")}</h3>
                <div className="space-y-2">
                  <div className="p-2 bg-accent rounded-lg flex items-center gap-2"><Calculator className="w-4 h-4 text-primary" /><span className="text-sm">{ct("costSheet")}</span></div>
                  <div className="p-2 bg-accent rounded-lg flex items-center gap-2"><FileText className="w-4 h-4 text-primary" /><span className="text-sm">{ct("schedulePlan")}</span></div>
                  <div className="p-2 bg-accent rounded-lg flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-primary" /><span className="text-sm">{ct("riskAssessment")}</span></div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">{ct("exerciseASteps")}</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>{ct("exerciseAStep1")}</li>
                  <li>{ct("exerciseAStep2")}</li>
                  <li>{ct("exerciseAStep3")}</li>
                  <li>{ct("exerciseAStep4")}</li>
                  <li>{ct("exerciseAStep5")}</li>
                </ul>
              </div>
            </div>
            <p className="text-sm font-medium text-success mt-3">{ct("exerciseAExpectedResult")}</p>
          </div>
        </div>
      </div>

      {/* Exercise B */}
      <div className="info-card border-l-4 border-l-info">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-info text-info-foreground rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">B</div>
          <div className="flex-1">
            <h2 className="section-title mb-2">{ct("exerciseB")}</h2>
            <div className="p-4 bg-muted/50 rounded-lg mb-4">
              <p className="font-medium mb-2">{ct("exerciseBScenario")}</p>
              <p className="text-muted-foreground mb-2">{ct("exerciseBRoute")}</p>
              <p className="text-sm text-muted-foreground">{ct("exerciseBContext")}</p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                <span className="bg-info/20 px-2 py-1 rounded">{ct("exerciseBPlatform")}</span>
                <span className="bg-info/20 px-2 py-1 rounded">{ct("exerciseBTimeframe")}</span>
                <span className="bg-info/20 px-2 py-1 rounded">{ct("exerciseBBudget")}</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold">{ct("tasks")}</h3>
                <div className="space-y-2">
                  <div className="p-2 bg-accent rounded-lg flex items-center gap-2"><Search className="w-4 h-4 text-info" /><span className="text-sm">{ct("searchIdentifyLoads")}</span></div>
                  <div className="p-2 bg-accent rounded-lg flex items-center gap-2"><FileText className="w-4 h-4 text-info" /><span className="text-sm">{ct("draftNegotiation")}</span></div>
                  <div className="p-2 bg-accent rounded-lg flex items-center gap-2"><Calculator className="w-4 h-4 text-info" /><span className="text-sm">{ct("evaluatePaymentGuarantee")}</span></div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">{ct("exerciseBCriteria")}</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• {ct("exerciseBCriteria1")}</li>
                  <li>• {ct("exerciseBCriteria2")}</li>
                  <li>• {ct("exerciseBCriteria3")}</li>
                  <li>• {ct("exerciseBCriteria4")}</li>
                  <li>• {ct("exerciseBCriteria5")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise C */}
      <div className="info-card border-l-4 border-l-success">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-success text-success-foreground rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">C</div>
          <div className="flex-1">
            <h2 className="section-title mb-2">{ct("exerciseC")}</h2>
            <div className="p-4 bg-muted/50 rounded-lg mb-4">
              <p className="font-medium mb-2">{ct("exerciseCScenario")}</p>
              <p className="text-muted-foreground">{ct("exerciseCRoute")}</p>
              <p className="text-sm text-muted-foreground mt-1">{ct("exerciseCContext")}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-3 mb-4">
              <div className="p-3 bg-accent rounded-lg text-center">
                <p className="font-semibold text-sm">{ct("template1")}</p>
                <p className="text-xs text-muted-foreground">{ct("template1Route")}</p>
                <p className="text-xs text-muted-foreground mt-1">{ct("template1Details")}</p>
              </div>
              <div className="p-3 bg-accent rounded-lg text-center">
                <p className="font-semibold text-sm">{ct("template2")}</p>
                <p className="text-xs text-muted-foreground">{ct("template2Route")}</p>
                <p className="text-xs text-muted-foreground mt-1">{ct("template2Details")}</p>
              </div>
              <div className="p-3 bg-accent rounded-lg text-center">
                <p className="font-semibold text-sm">{ct("template3")}</p>
                <p className="text-xs text-muted-foreground">{ct("template3Route")}</p>
                <p className="text-xs text-muted-foreground mt-1">{ct("template3Details")}</p>
              </div>
            </div>
            <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
              <div className="flex items-center gap-2"><Settings className="w-5 h-5 text-warning" /><span className="text-sm font-medium">{ct("bonus")}</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise D */}
      <div className="info-card border-l-4 border-l-destructive">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-destructive text-destructive-foreground rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">D</div>
          <div className="flex-1">
            <h2 className="section-title mb-2">{ct("exerciseD")}</h2>
            <div className="p-4 bg-destructive/10 rounded-lg mb-4">
              <p className="font-medium mb-2">{ct("exerciseDScenario")}</p>
              <p className="text-muted-foreground">{ct("exerciseDContext")}</p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• {ct("exerciseDDetail1")}</li>
                <li>• {ct("exerciseDDetail2")}</li>
                <li>• {ct("exerciseDDetail3")}</li>
                <li>• {ct("exerciseDDetail4")}</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold">{ct("exerciseDTasks")}</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {ct("exerciseDTask1")}</li>
                  <li>• {ct("exerciseDTask2")}</li>
                  <li>• {ct("exerciseDTask3")}</li>
                  <li>• {ct("exerciseDTask4")}</li>
                  <li>• {ct("exerciseDTask5")}</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">{ct("exerciseDOptions")}</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>1. {ct("exerciseDOption1")}</li>
                  <li>2. {ct("exerciseDOption2")}</li>
                  <li>3. {ct("exerciseDOption3")}</li>
                  <li>4. {ct("exerciseDOption4")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise E */}
      <div className="info-card border-l-4 border-l-purple-500">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">E</div>
          <div className="flex-1">
            <h2 className="section-title mb-2">{ct("exerciseE")}</h2>
            <div className="p-4 bg-muted/50 rounded-lg mb-4">
              <p className="font-medium mb-2">{ct("exerciseEScenario")}</p>
              <p className="text-muted-foreground">{ct("exerciseEContext")}</p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• {ct("exerciseEDetail1")}</li>
                <li>• {ct("exerciseEDetail2")}</li>
                <li>• {ct("exerciseEDetail3")}</li>
                <li>• {ct("exerciseEDetail4")}</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold">{ct("exerciseETasks")}</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {ct("exerciseETask1")}</li>
                  <li>• {ct("exerciseETask2")}</li>
                  <li>• {ct("exerciseETask3")}</li>
                  <li>• {ct("exerciseETask4")}</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">{ct("exerciseEPoints")}</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• {ct("exerciseEPoint1")}</li>
                  <li>• {ct("exerciseEPoint2")}</li>
                  <li>• {ct("exerciseEPoint3")}</li>
                  <li>• {ct("exerciseEPoint4")}</li>
                  <li>• {ct("exerciseEPoint5")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise F */}
      <div className="info-card border-l-4 border-l-orange-500">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">F</div>
          <div className="flex-1">
            <h2 className="section-title mb-2">{ct("exerciseF")}</h2>
            <div className="p-4 bg-muted/50 rounded-lg mb-4">
              <p className="font-medium mb-2">{ct("exerciseFScenario")}</p>
              <p className="text-muted-foreground">{ct("exerciseFContext")}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold">{ct("exerciseFDocuments")}</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {ct("exerciseFDoc1")}</li>
                  <li>• {ct("exerciseFDoc2")}</li>
                  <li>• {ct("exerciseFDoc3")}</li>
                  <li>• {ct("exerciseFDoc4")}</li>
                  <li>• {ct("exerciseFDoc5")}</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">{ct("exerciseFChecklist")}</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>✓ {ct("exerciseFCheck1")}</li>
                  <li>✓ {ct("exerciseFCheck2")}</li>
                  <li>✓ {ct("exerciseFCheck3")}</li>
                  <li>✓ {ct("exerciseFCheck4")}</li>
                  <li>✓ {ct("exerciseFCheck5")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Evaluation Criteria */}
      <section className="info-card">
        <h2 className="section-title flex items-center gap-2 mb-4">
          <GraduationCap className="w-6 h-6 text-primary" />
          {ct("evaluationTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("evaluationDesc")}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">{ct("evaluationCriteria")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>{ct("accuracyCalculations")}</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>{ct("completenessDocumentation")}</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>{ct("riskIdentification")}</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>{ct("tmsProficiency")}</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>{ct("communicationClarity")}</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>{ct("problemSolvingApproach")}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{ct("gradingScale")}</h3>
            <div className="space-y-2 text-sm">
              <div className="p-2 bg-success/20 rounded">{ct("gradeExcellent")}</div>
              <div className="p-2 bg-info/20 rounded">{ct("gradeGood")}</div>
              <div className="p-2 bg-warning/20 rounded">{ct("gradeSatisfactory")}</div>
              <div className="p-2 bg-destructive/20 rounded">{ct("gradeNeedsImprovement")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section className="info-card">
        <h2 className="section-title flex items-center gap-2 mb-4">
          <Users className="w-6 h-6 text-primary" />
          {ct("mentorshipTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("mentorshipDesc")}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/5 rounded-xl p-4">
            <h3 className="font-semibold mb-3">{ct("mentorRole")}</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {ct("mentorRole1")}</li>
              <li>• {ct("mentorRole2")}</li>
              <li>• {ct("mentorRole3")}</li>
              <li>• {ct("mentorRole4")}</li>
              <li>• {ct("mentorRole5")}</li>
            </ul>
          </div>
          <div className="bg-info/5 rounded-xl p-4">
            <h3 className="font-semibold mb-3">{ct("traineeRole")}</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {ct("traineeRole1")}</li>
              <li>• {ct("traineeRole2")}</li>
              <li>• {ct("traineeRole3")}</li>
              <li>• {ct("traineeRole4")}</li>
              <li>• {ct("traineeRole5")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="highlight-card">
        <h2 className="section-title flex items-center gap-2 mb-4">
          <Lightbulb className="w-6 h-6 text-warning" />
          {ct("successTipsTitle")}
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span className="text-sm">{ct("successTip1")}</span></div>
          <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span className="text-sm">{ct("successTip2")}</span></div>
          <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span className="text-sm">{ct("successTip3")}</span></div>
          <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span className="text-sm">{ct("successTip4")}</span></div>
          <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span className="text-sm">{ct("successTip5")}</span></div>
          <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span className="text-sm">{ct("successTip6")}</span></div>
          <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span className="text-sm">{ct("successTip7")}</span></div>
          <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span className="text-sm">{ct("successTip8")}</span></div>
        </div>
      </section>

      {/* Certification */}
      <section className="info-card bg-gradient-to-br from-primary/10 to-primary/5">
        <h2 className="section-title flex items-center gap-2 mb-4">
          <Award className="w-6 h-6 text-primary" />
          {ct("certificationTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("certificationDesc")}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" />{ct("certRequirement1")}</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" />{ct("certRequirement2")}</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" />{ct("certRequirement3")}</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" />{ct("certRequirement4")}</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" />{ct("certRequirement5")}</li>
            </ul>
          </div>
          <div className="bg-background/50 rounded-xl p-4">
            <h3 className="font-semibold mb-3">{ct("certificationBenefits")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>🏆 {ct("certBenefit1")}</li>
              <li>🚀 {ct("certBenefit2")}</li>
              <li>📈 {ct("certBenefit3")}</li>
              <li>🎖️ {ct("certBenefit4")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quiz */}
      <Quiz title="Training Quiz" questions={quizzes.training} />
    </div>
  );
}
