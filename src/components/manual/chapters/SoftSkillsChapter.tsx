import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterHero } from "../ChapterHero";
import { quizzes } from "@/data/quizData";
import { Brain, MessageSquare, Clock, Users, Target, Lightbulb, Heart, Shield, Zap, CheckCircle2, AlertTriangle, Volume2, Ear, PenTool, Euro } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function SoftSkillsChapter() {
  const { ct } = useChapterTranslation("soft-skills");
  
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <ChapterHero
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={Users}
        variant="softskills"
      />

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Brain className="w-6 h-6 text-primary" />
          {ct("whyMatter")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("whyMatterDesc")}
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <MessageSquare className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">{ct("communication")}</p>
            <p className="text-xs text-muted-foreground">{ct("clearProfessional")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">{ct("negotiation")}</p>
            <p className="text-xs text-muted-foreground">{ct("winWin")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">{ct("stressManagement")}</p>
            <p className="text-xs text-muted-foreground">{ct("stayCalmPressure")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Lightbulb className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">{ct("problemSolving")}</p>
            <p className="text-xs text-muted-foreground">{ct("solutionsOriented")}</p>
          </div>
        </div>
      </div>

      {/* Communication */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <MessageSquare className="w-6 h-6 text-primary" />
          {ct("professionalCommunication")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-primary" />
              {ct("verbalCommunication")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("beClear")}</strong> {ct("useSimple")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("beConcise")}</strong> {ct("getToPoint")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("confirmUnderstanding")}</strong> {ct("repeatKey")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("stayProfessional")}</strong> {ct("evenUnderStress")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("adaptTone")}</strong> {ct("matchSituation")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <PenTool className="w-4 h-4 text-primary" />
              {ct("writtenCommunication")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("structure")}</strong> {ct("clearSubject")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("grammar")}</strong> {ct("proofread")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("completeness")}</strong> {ct("includeRelevant")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("documentation")}</strong> {ct("keepWritten")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("timeliness")}</strong> {ct("respondPromptly")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Ear className="w-4 h-4" />
            {ct("activeListening")}
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            {ct("listeningImportant")}
          </p>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            <div className="bg-background p-3 rounded">
              <p className="font-medium text-primary">1. {ct("focus")}</p>
              <p className="text-xs text-muted-foreground">{ct("fullAttention")}</p>
            </div>
            <div className="bg-background p-3 rounded">
              <p className="font-medium text-primary">2. {ct("dontInterrupt")}</p>
              <p className="text-xs text-muted-foreground">{ct("letFinish")}</p>
            </div>
            <div className="bg-background p-3 rounded">
              <p className="font-medium text-primary">3. {ct("clarify")}</p>
              <p className="text-xs text-muted-foreground">{ct("askQuestions")}</p>
            </div>
            <div className="bg-background p-3 rounded">
              <p className="font-medium text-primary">4. {ct("confirm")}</p>
              <p className="text-xs text-muted-foreground">{ct("summarize")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Negotiation */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          {ct("negotiationSkills")}
        </h2>

        <p className="text-muted-foreground mb-4">
          {ct("negotiateDaily")}
        </p>

        <DataTable
          headers={[ct("principle"), ct("description"), ct("application")]}
          rows={[
            [ct("preparation"), ct("prepDesc"), ct("prepApp")],
            [ct("winWinFocus"), ct("winWinDesc"), ct("winWinApp")],
            [ct("batna"), ct("batnaDesc"), ct("batnaApp")],
            [ct("listenFirst"), ct("listenDesc"), ct("listenApp")],
            [ct("separatePeople"), ct("separateDesc"), ct("separateApp")],
            [ct("objectiveCriteria"), ct("objectiveDesc"), ct("objectiveApp")],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">{ct("effectivePhrases")}</h4>
            <ul className="text-sm space-y-1">
              <li>• "{ct("helpUnderstand")}"</li>
              <li>• "{ct("whatIfWe")}"</li>
              <li>• "{ct("basedOnData")}"</li>
              <li>• "{ct("understandConcern")}"</li>
              <li>• "{ct("whatWouldMake")}"</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">{ct("avoidTactics")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("ultimatums")}</li>
              <li>• {ct("emotionalManipulation")}</li>
              <li>• {ct("dishonestClaims")}</li>
              <li>• {ct("personalAttacks")}</li>
              <li>• {ct("lastMinute")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stress Management */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Heart className="w-6 h-6 text-primary" />
          {ct("stressManagementTitle")}
        </h2>

        <p className="text-muted-foreground mb-4">
          {ct("inherentlyStressful")}
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <InfoCard title={ct("commonStressors")} icon={AlertTriangle}>
            <ul className="text-sm space-y-1">
              <li>• {ct("urgentDemands")}</li>
              <li>• {ct("transportDelays")}</li>
              <li>• {ct("multiplePriorities")}</li>
              <li>• {ct("difficultConversations")}</li>
              <li>• {ct("infoOverload")}</li>
              <li>• {ct("longHours")}</li>
            </ul>
          </InfoCard>
          
          <InfoCard title={ct("warningSigns")} icon={AlertTriangle}>
            <ul className="text-sm space-y-1">
              <li>• {ct("irritability")}</li>
              <li>• {ct("difficultyConcentrating")}</li>
              <li>• {ct("makingMistakes")}</li>
              <li>• {ct("physicalSymptoms")}</li>
              <li>• {ct("sleepProblems")}</li>
              <li>• {ct("dreadingWork")}</li>
            </ul>
          </InfoCard>
          
          <InfoCard title={ct("healthyResponses")} icon={Shield}>
            <ul className="text-sm space-y-1">
              <li>• {ct("takeBreaks")}</li>
              <li>• {ct("prioritizeTasks")}</li>
              <li>• {ct("askHelp")}</li>
              <li>• {ct("maintainPerspective")}</li>
              <li>• {ct("physicalExercise")}</li>
              <li>• {ct("setBoundaries")}</li>
            </ul>
          </InfoCard>
        </div>

        <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">{ct("inMomentTechniques")}</h4>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            <div>
              <p className="font-medium">{ct("deepBreathing")}</p>
              <p className="text-xs text-muted-foreground">{ct("deepBreathingDesc")}</p>
            </div>
            <div>
              <p className="font-medium">{ct("stepAway")}</p>
              <p className="text-xs text-muted-foreground">{ct("stepAwayDesc")}</p>
            </div>
            <div>
              <p className="font-medium">{ct("writeItDown")}</p>
              <p className="text-xs text-muted-foreground">{ct("writeDesc")}</p>
            </div>
            <div>
              <p className="font-medium">{ct("askForHelp")}</p>
              <p className="text-xs text-muted-foreground">{ct("askHelpDesc")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Solving */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Lightbulb className="w-6 h-6 text-primary" />
          {ct("problemSolvingMindset")}
        </h2>

        <p className="text-muted-foreground mb-4">
          {ct("problemsOpportunities")}
        </p>

        <div className="bg-muted/50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold mb-4">{ct("fiveStepProcess")}</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
              <div>
                <p className="font-medium">{ct("defineProblem")}</p>
                <p className="text-sm text-muted-foreground">{ct("defineDesc")}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
              <div>
                <p className="font-medium">{ct("identifyRoot")}</p>
                <p className="text-sm text-muted-foreground">{ct("identifyDesc")}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
              <div>
                <p className="font-medium">{ct("generateOptions")}</p>
                <p className="text-sm text-muted-foreground">{ct("generateDesc")}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
              <div>
                <p className="font-medium">{ct("evaluateDecide")}</p>
                <p className="text-sm text-muted-foreground">{ct("evaluateDesc")}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">5</span>
              <div>
                <p className="font-medium">{ct("implementFollowUp")}</p>
                <p className="text-sm text-muted-foreground">{ct("implementDesc")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-success/10 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">{ct("solutionsMindset")}</h4>
            <ul className="text-sm space-y-1">
              <li>• "{ct("hereIsWhatWeCan")}"</li>
              <li>• "{ct("threeOptions")}"</li>
              <li>• "{ct("toSolveRecommend")}"</li>
              <li>• "{ct("recoverableHereHow")}"</li>
            </ul>
          </div>
          <div className="bg-destructive/10 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">{ct("avoidProblemFocused")}</h4>
            <ul className="text-sm space-y-1">
              <li>• "{ct("impossible")}"</li>
              <li>• "{ct("notMyFault")}"</li>
              <li>• "{ct("cantDoAnything")}"</li>
              <li>• "{ct("carriersProblem")}"</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Time Management */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Clock className="w-6 h-6 text-primary" />
          {ct("timeManagement")}
        </h2>

        <p className="text-muted-foreground mb-4">
          {ct("everythingUrgent")}
        </p>

        <DataTable
          headers={[ct("priorityMatrix"), ct("urgent"), ct("notUrgent")]}
          rows={[
            [ct("important"), ct("doFirst"), ct("schedule")],
            [ct("notImportant"), ct("delegate"), ct("eliminate")],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div>
            <h4 className="font-semibold mb-2">{ct("dailyHabits")}</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("morningReview")}</strong> {ct("checkTodaysPickups")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("blockTime")}</strong> {ct("blockTimeDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("batchTasks")}</strong> {ct("batchTasksDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("endOfDayReview")}</strong> {ct("endOfDayDesc")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{ct("timeWasters")}</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>{ct("constantEmail")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>{ct("unnecessaryMeetings")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>{ct("perfectionism")}</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>{ct("multitasking")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Proactivity */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          {ct("proactiveMindset")}
        </h2>

        <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">{ct("reactiveVsProactive")}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-destructive mb-2">❌ {ct("reactive")}</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• {ct("reactiveWaits")}</li>
                <li>• {ct("reactiveReports")}</li>
                <li>• {ct("reactiveRelies")}</li>
                <li>• {ct("reactiveOnlyAsked")}</li>
                <li>• {ct("reactiveSurprised")}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-success mb-2">✓ {ct("proactive")}</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• {ct("proactiveSends")}</li>
                <li>• {ct("proactiveIdentifies")}</li>
                <li>• {ct("proactiveMonitors")}</li>
                <li>• {ct("proactiveAnticipates")}</li>
                <li>• {ct("proactivePlans")}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-3">{ct("proactiveBehaviors")}</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
              <span><strong>{ct("checkTomorrow")}</strong> {ct("checkTomorrowDesc")}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
              <span><strong>{ct("updateClients")}</strong> {ct("updateClientsDesc")}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
              <span><strong>{ct("anticipateSeasonal")}</strong> {ct("anticipateSeasonalDesc")}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
              <span><strong>{ct("suggestImprovements")}</strong> {ct("suggestImprovementsDesc")}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
              <span><strong>{ct("buildRelationships")}</strong> {ct("buildRelationshipsDesc")}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Case Studies Section - AI Recommendation Implementation */}
      <div className="info-card bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border-2 border-purple-200 dark:border-purple-800">
        <h2 className="section-title flex items-center gap-3 text-purple-800 dark:text-purple-200">
          <Target className="w-6 h-6" />
          {ct("caseStudiesTitle")}
        </h2>
        <p className="text-muted-foreground mb-6">{ct("caseStudiesSubtitle")}</p>

        <div className="space-y-6">
          {/* Case Study 1 */}
          <div className="bg-background rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-red-500" />
              {ct("caseStudy1Title")}
            </h3>
            <div className="bg-muted/50 p-3 rounded mb-4 text-sm italic">
              <strong>{ct("whatWouldYouDo")}</strong> {ct("caseStudy1Scenario")}
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div className="bg-red-50 dark:bg-red-950/30 p-3 rounded border-l-4 border-l-red-500">
                <p className="text-sm font-medium mb-1">{ct("wrongApproach")}</p>
                <p className="text-sm">{ct("caseStudy1Wrong")}</p>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded border-l-4 border-l-green-500">
                <p className="text-sm font-medium mb-1">{ct("rightApproach")}</p>
                <p className="text-sm">{ct("caseStudy1Right")}</p>
              </div>
            </div>
            <p className="text-sm text-primary font-medium">{ct("caseStudy1Lesson")}</p>
          </div>

          {/* Case Study 2 */}
          <div className="bg-background rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-500" />
              {ct("caseStudy2Title")}
            </h3>
            <div className="bg-muted/50 p-3 rounded mb-4 text-sm italic">
              <strong>{ct("whatWouldYouDo")}</strong> {ct("caseStudy2Scenario")}
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div className="bg-red-50 dark:bg-red-950/30 p-3 rounded border-l-4 border-l-red-500">
                <p className="text-sm font-medium mb-1">{ct("wrongApproach")}</p>
                <p className="text-sm">{ct("caseStudy2Wrong")}</p>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded border-l-4 border-l-green-500">
                <p className="text-sm font-medium mb-1">{ct("rightApproach")}</p>
                <p className="text-sm">{ct("caseStudy2Right")}</p>
              </div>
            </div>
            <p className="text-sm text-primary font-medium">{ct("caseStudy2Lesson")}</p>
          </div>

          {/* Case Study 3 */}
          <div className="bg-background rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-500" />
              {ct("caseStudy3Title")}
            </h3>
            <div className="bg-muted/50 p-3 rounded mb-4 text-sm italic">
              <strong>{ct("whatWouldYouDo")}</strong> {ct("caseStudy3Scenario")}
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div className="bg-red-50 dark:bg-red-950/30 p-3 rounded border-l-4 border-l-red-500">
                <p className="text-sm font-medium mb-1">{ct("wrongApproach")}</p>
                <p className="text-sm">{ct("caseStudy3Wrong")}</p>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded border-l-4 border-l-green-500">
                <p className="text-sm font-medium mb-1">{ct("rightApproach")}</p>
                <p className="text-sm">{ct("caseStudy3Right")}</p>
              </div>
            </div>
            <p className="text-sm text-primary font-medium">{ct("caseStudy3Lesson")}</p>
          </div>
        </div>
      </div>

      {/* AI Recommendation: Interactive Role-Play Scenarios */}
      <div className="info-card bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border-2 border-purple-200 dark:border-purple-800">
        <h2 className="section-title flex items-center gap-3 text-purple-800 dark:text-purple-200">
          <MessageSquare className="w-6 h-6" />
          {ct("rolePlayTitle") || "Interactive Role-Play Scenarios"}
        </h2>
        <p className="text-muted-foreground mb-6">{ct("rolePlaySubtitle") || "Practice these real-world freight forwarding communication scenarios. Choose your response wisely!"}</p>

        {/* Role-Play Scenario 1: Rate Negotiation */}
        <div className="bg-background rounded-xl p-5 mb-4 shadow-sm border">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Euro className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">{ct("scenario1Title") || "Rate Negotiation Under Pressure"}</h4>
              <p className="text-sm text-muted-foreground">{ct("scenario1Subtitle") || "The carrier demands a 15% rate increase mid-transport"}</p>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg mb-4">
            <p className="text-sm italic">
              <strong>{ct("situation") || "Situation:"}</strong> {ct("scenario1Situation") || "Your truck is already loaded and en route to Munich. The carrier calls: 'Diesel prices went up, I need €200 more or I'm unloading at the next rest stop.'"}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/30">
              <p className="text-xs font-semibold text-destructive mb-1">{ct("responseA") || "Response A (Aggressive)"}</p>
              <p className="text-xs">{ct("scenario1ResponseA") || "\"That's blackmail! I'll report you and never work with you again!\""}</p>
              <p className="text-xs text-destructive mt-2">❌ {ct("scenario1ResultA") || "Escalates conflict, may lose cargo"}</p>
            </div>
            <div className="p-3 bg-warning/10 rounded-lg border border-warning/30">
              <p className="text-xs font-semibold text-warning mb-1">{ct("responseB") || "Response B (Passive)"}</p>
              <p className="text-xs">{ct("scenario1ResponseB") || "\"OK, I'll pay the extra €200, just please deliver.\""}</p>
              <p className="text-xs text-warning mt-2">⚠️ {ct("scenario1ResultB") || "Solves now, sets bad precedent"}</p>
            </div>
            <div className="p-3 bg-success/10 rounded-lg border border-success/30">
              <p className="text-xs font-semibold text-success mb-1">{ct("responseC") || "Response C (Assertive)"}</p>
              <p className="text-xs">{ct("scenario1ResponseC") || "\"I understand costs rise. Let's talk about €100 now and reviewing our contract for future. Complete delivery first.\""}</p>
              <p className="text-xs text-success mt-2">✓ {ct("scenario1ResultC") || "Win-win, maintains relationship"}</p>
            </div>
          </div>
        </div>

        {/* Role-Play Scenario 2: Delay Communication */}
        <div className="bg-background rounded-xl p-5 mb-4 shadow-sm border">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-warning" />
            </div>
            <div>
              <h4 className="font-semibold">{ct("scenario2Title") || "Breaking Bad News to Client"}</h4>
              <p className="text-sm text-muted-foreground">{ct("scenario2Subtitle") || "Your shipment will be 4 hours late to a major client"}</p>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg mb-4">
            <p className="text-sm italic">
              <strong>{ct("situation") || "Situation:"}</strong> {ct("scenario2Situation") || "Driver just informed you of a 4-hour delay due to traffic. The client is BMW with a just-in-time production line. Original ETA was 14:00, now it's 18:00."}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/30">
              <p className="text-xs font-semibold text-destructive mb-1">{ct("responseA") || "Response A"}</p>
              <p className="text-xs">{ct("scenario2ResponseA") || "Wait and hope it improves. Maybe don't tell them until closer to the time."}</p>
              <p className="text-xs text-destructive mt-2">❌ {ct("scenario2ResultA") || "Worst choice - loses trust"}</p>
            </div>
            <div className="p-3 bg-warning/10 rounded-lg border border-warning/30">
              <p className="text-xs font-semibold text-warning mb-1">{ct("responseB") || "Response B"}</p>
              <p className="text-xs">{ct("scenario2ResponseB") || "\"Hi, there's a delay. New ETA 18:00. Sorry.\""}</p>
              <p className="text-xs text-warning mt-2">⚠️ {ct("scenario2ResultB") || "Too brief, no solutions offered"}</p>
            </div>
            <div className="p-3 bg-success/10 rounded-lg border border-success/30">
              <p className="text-xs font-semibold text-success mb-1">{ct("responseC") || "Response C"}</p>
              <p className="text-xs">{ct("scenario2ResponseC") || "\"Immediate update: ETA now 18:00 due to A8 traffic. Driver tracking link attached. Can we arrange night shift unloading or need alternative?\" "}</p>
              <p className="text-xs text-success mt-2">✓ {ct("scenario2ResultC") || "Proactive, offers solutions"}</p>
            </div>
          </div>
        </div>

        {/* Role-Play Scenario 3: Handling Angry Client */}
        <div className="bg-background rounded-xl p-5 shadow-sm border">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <h4 className="font-semibold">{ct("scenario3Title") || "Defusing an Angry Client"}</h4>
              <p className="text-sm text-muted-foreground">{ct("scenario3Subtitle") || "Client is yelling about damaged goods"}</p>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg mb-4">
            <p className="text-sm italic">
              <strong>{ct("situation") || "Situation:"}</strong> {ct("scenario3Situation") || "Client calls screaming: \"Your driver broke €50,000 of machinery! I'm going to sue your company! This is a disaster!\""}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/30">
              <p className="text-xs font-semibold text-destructive mb-1">{ct("responseA") || "Response A (Defensive)"}</p>
              <p className="text-xs">{ct("scenario3ResponseA") || "\"It's not our fault, the packaging was inadequate. Your goods weren't secured properly.\""}</p>
              <p className="text-xs text-destructive mt-2">❌ {ct("scenario3ResultA") || "Blame escalates anger"}</p>
            </div>
            <div className="p-3 bg-warning/10 rounded-lg border border-warning/30">
              <p className="text-xs font-semibold text-warning mb-1">{ct("responseB") || "Response B (Over-promising)"}</p>
              <p className="text-xs">{ct("scenario3ResponseB") || "\"Don't worry, we'll pay for everything immediately!\""}</p>
              <p className="text-xs text-warning mt-2">⚠️ {ct("scenario3ResultB") || "Premature commitment"}</p>
            </div>
            <div className="p-3 bg-success/10 rounded-lg border border-success/30">
              <p className="text-xs font-semibold text-success mb-1">{ct("responseC") || "Response C (Empathetic)"}</p>
              <p className="text-xs">{ct("scenario3ResponseC") || "\"I hear your frustration and I'm truly sorry this happened. Let me get the facts - photos, CMR notes - and I'll call you back in 30 minutes with a clear action plan.\""}</p>
              <p className="text-xs text-success mt-2">✓ {ct("scenario3ResultC") || "Calms, commits to action"}</p>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <h4 className="font-semibold flex items-center gap-2 mb-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            {ct("keyTakeaway") || "Key Communication Principles"}
          </h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-medium text-primary">1. {ct("principle1") || "Listen First"}</p>
              <p className="text-xs text-muted-foreground">{ct("principle1Desc") || "Let them express frustration before responding"}</p>
            </div>
            <div>
              <p className="font-medium text-primary">2. {ct("principle2") || "Acknowledge Feelings"}</p>
              <p className="text-xs text-muted-foreground">{ct("principle2Desc") || "\"I understand this is frustrating\" goes far"}</p>
            </div>
            <div>
              <p className="font-medium text-primary">3. {ct("principle3") || "Offer Solutions"}</p>
              <p className="text-xs text-muted-foreground">{ct("principle3Desc") || "Never present a problem without options"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="soft-skills" />

      {/* Quiz */}
      {quizzes["soft-skills"] && (
        <Quiz
          title={ct("quizTitle")}
          questions={quizzes["soft-skills"]}
          chapterId="soft-skills"
          questionsPerRound={10}
        />
      )}
    </div>
  );
}
