import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { Checklist } from "../Checklist";
import { ChapterHero } from "../ChapterHero";
import { ChapterImage } from "../ChapterImage";
import { 
  Target, MessageSquare, Brain, FileText, Scale, Users, CheckCircle, 
  AlertTriangle, Clock, Phone, Shield, Heart, Zap, Eye, Lightbulb,
  TrendingUp, Star, Award, BookOpen, Coffee, ThumbsUp, ThumbsDown,
  Volume2, Mail, Calendar, AlertCircle, Info, ArrowRight
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import mindsetDispatcherImg from "@/assets/chapters/mindset-dispatcher.jpg";
import mindsetCoordinationImg from "@/assets/chapters/mindset-coordination.jpg";

export function MindsetChapter() {
  const { ct } = useChapterTranslation('mindset');
  
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <ChapterHero
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={Brain}
        variant="mindset"
      />


      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="section-title mb-2">{ct('psychologyOfFreightForwarding')}</h2>
            <p className="text-muted-foreground mb-4">
              {ct('psychologyDescription')}
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-semibold text-primary">{ct('technicalSkills')}</p>
                <p className="text-muted-foreground">40% {ct('ofSuccess')}</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-semibold text-primary">{ct('softSkills')}</p>
                <p className="text-muted-foreground">35% {ct('ofSuccess')}</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-semibold text-primary">{ct('stressManagement')}</p>
                <p className="text-muted-foreground">25% {ct('ofSuccess')}</p>
              </div>
            </div>
            
            {/* Dispatcher Mindset Image - contextual after success factors */}
            <ChapterImage
              src={mindsetDispatcherImg}
              alt="Focused freight forwarder dispatcher managing operations"
              variant="float-right"
              className="mt-4"
            />
          </div>
        </div>
      </div>

      {/* What This Job Is About */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          {ct('whatThisJobIsAbout')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct('riskCoordination')} icon={Scale}>
            <p className="mb-3">{ct('riskCoordinationDesc')}</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• {ct('fasterDelivery')}</li>
              <li>• {ct('cheaperCarrier')}</li>
              <li>• {ct('tighterDeadlines')}</li>
            </ul>
          </InfoCard>
          
          <InfoCard title={ct('humanManagement')} icon={Users}>
            <p className="mb-3">{ct('humanManagementDesc')}</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• {ct('driversConcerns')}</li>
              <li>• {ct('clientsConcerns')}</li>
              <li>• {ct('partnersConcerns')}</li>
            </ul>
          </InfoCard>
          
          <InfoCard title={ct('decisionUnderPressure')} icon={Brain}>
            <p className="mb-3">{ct('decisionUnderPressureDesc')}</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• {ct('gatherFacts')}</li>
              <li>• {ct('considerConsequences')}</li>
              <li>• {ct('actDecisively')}</li>
            </ul>
          </InfoCard>
          
          <InfoCard title={ct('documentationProtection')} icon={FileText}>
            <p className="mb-3">{ct('documentationProtectionDesc')}</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• {ct('emailConfirmations')}</li>
              <li>• {ct('photosOfCargo')}</li>
              <li>• {ct('notesOnCalls')}</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Daily Responsibilities */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Clock className="w-6 h-6 text-primary" />
          {ct('dailyResponsibilities')}
        </h2>
        <DataTable
          headers={[ct('time'), ct('activity'), ct('priority'), ct('keyActions')]}
          rows={[
            ["07:00-08:00", ct('activity0700'), ct('critical'), ct('keyActions0700')],
            ["08:00-09:00", ct('activity0800'), ct('critical'), ct('keyActions0800')],
            ["09:00-10:00", ct('activity0900'), ct('high'), ct('keyActions0900')],
            ["10:00-12:00", ct('activity1000'), ct('high'), ct('keyActions1000')],
            ["12:00-13:00", ct('activity1200'), ct('high'), ct('keyActions1200')],
            ["13:00-15:00", ct('activity1300'), ct('medium'), ct('keyActions1300')],
            ["15:00-16:00", ct('activity1500'), ct('medium'), ct('keyActions1500')],
            ["16:00-17:00", ct('activity1600'), ct('high'), ct('keyActions1600')],
            ["17:00-18:00", ct('activity1700'), ct('high'), ct('keyActions1700')],
          ]}
        />
        <div className="mt-4 p-4 bg-info/10 border border-info/30 rounded-lg">
          <p className="text-sm flex items-start gap-2">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-info" />
            <span><strong>{ct('proTip')}:</strong> {ct('proTipText')}</span>
          </p>
        </div>
      </section>

      {/* Communication & Negotiation */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <MessageSquare className="w-6 h-6 text-primary" />
          {ct('communicationNegotiation')}
        </h2>
        <div className="info-card">
          <div className="space-y-6">
            {/* The 4W Model */}
            <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
              <h3 className="font-semibold mb-3">{ct('the4WModel')}</h3>
              <p className="text-sm text-muted-foreground mb-4">{ct('the4WModelDesc')}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { w: ct('who'), desc: ct('whoDesc') },
                  { w: ct('what'), desc: ct('whatDesc') },
                  { w: ct('when'), desc: ct('whenDesc') },
                  { w: ct('where'), desc: ct('whereDesc') }
                ].map((item) => (
                  <div key={item.w} className="bg-card p-4 rounded-lg shadow-sm">
                    <span className="text-2xl font-bold text-primary">{item.w}</span>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Communication Tips */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-3">{ct('negotiationPrinciples')}</h3>
                <div className="space-y-3">
                  {[
                    ct('negotiationPrinciple1'),
                    ct('negotiationPrinciple2'),
                    ct('negotiationPrinciple3'),
                    ct('negotiationPrinciple4'),
                    ct('negotiationPrinciple5'),
                  ].map((tip, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{index + 1}</span>
                      <p className="text-sm text-muted-foreground">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">{ct('languageTone')}</h3>
                <div className="space-y-2 text-sm">
                  <div className="p-3 bg-success/10 rounded-lg">
                    <p className="font-medium text-success mb-1">✓ {ct('professionalPhrases')}</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>{ct('professionalPhrase1')}</li>
                      <li>{ct('professionalPhrase2')}</li>
                      <li>{ct('professionalPhrase3')}</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-destructive/10 rounded-lg">
                    <p className="font-medium text-destructive mb-1">✗ {ct('avoidThese')}</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>{ct('avoidPhrase1')}</li>
                      <li>{ct('avoidPhrase2')}</li>
                      <li>{ct('avoidPhrase3')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Examples */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Phone className="w-6 h-6 text-primary" />
          {ct('practicalCommunicationExamples')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              {ct('goodCommunication')}
            </h3>
            <div className="space-y-4">
              <div className="bg-success/10 p-4 rounded-lg text-sm">
                <p className="font-medium mb-2">{ct('toDriver')}:</p>
                <p className="text-muted-foreground italic">{ct('goodDriverExample')}</p>
              </div>
              <div className="bg-success/10 p-4 rounded-lg text-sm">
                <p className="font-medium mb-2">{ct('toClientDelay')}:</p>
                <p className="text-muted-foreground italic">{ct('goodClientExample')}</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              {ct('poorCommunication')}
            </h3>
            <div className="space-y-4">
              <div className="bg-destructive/10 p-4 rounded-lg text-sm">
                <p className="font-medium mb-2">{ct('toDriver')}:</p>
                <p className="text-muted-foreground italic">{ct('poorDriverExample')}</p>
                <p className="text-destructive text-xs mt-2">{ct('poorDriverMissing')}</p>
              </div>
              <div className="bg-destructive/10 p-4 rounded-lg text-sm">
                <p className="font-medium mb-2">{ct('toClientDelay')}:</p>
                <p className="text-muted-foreground italic">{ct('poorClientExample')}</p>
                <p className="text-destructive text-xs mt-2">{ct('poorClientMissing')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Management */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          {ct('managingDifferentStakeholders')}
        </h2>
        <DataTable
          headers={[ct('stakeholder'), ct('theirPriority'), ct('yourApproach'), ct('commonPitfalls')]}
          rows={[
            [ct('clientShipper'), ct('clientPriority'), ct('clientApproach'), ct('clientPitfalls')],
            [ct('driver'), ct('driverPriority'), ct('driverApproach'), ct('driverPitfalls')],
            [ct('warehouseReceiver'), ct('warehousePriority'), ct('warehouseApproach'), ct('warehousePitfalls')],
            [ct('carrierPartner'), ct('carrierPriority'), ct('carrierApproach'), ct('carrierPitfalls')],
            [ct('yourManager'), ct('managerPriority'), ct('managerApproach'), ct('managerPitfalls')],
            [ct('colleagues'), ct('colleaguesPriority'), ct('colleaguesApproach'), ct('colleaguesPitfalls')],
          ]}
        />
      </section>

      {/* Driver Communication Special Section */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Heart className="w-6 h-6 text-primary" />
          {ct('buildingRelationshipsWithDrivers')}
        </h2>
        <div className="info-card">
          <p className="text-muted-foreground mb-4">
            {ct('driversAreBackbone')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-success" />
                {ct('doThis')}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct('doThis1')}</li>
                <li>• {ct('doThis2')}</li>
                <li>• {ct('doThis3')}</li>
                <li>• {ct('doThis4')}</li>
                <li>• {ct('doThis5')}</li>
                <li>• {ct('doThis6')}</li>
                <li>• {ct('doThis7')}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <ThumbsDown className="w-4 h-4 text-destructive" />
                {ct('avoidThis')}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct('avoidThis1')}</li>
                <li>• {ct('avoidThis2')}</li>
                <li>• {ct('avoidThis3')}</li>
                <li>• {ct('avoidThis4')}</li>
                <li>• {ct('avoidThis5')}</li>
                <li>• {ct('avoidThis6')}</li>
                <li>• {ct('avoidThis7')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Psychology in Forwarding */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Brain className="w-6 h-6 text-primary" />
          {ct('psychologyEmotionalIntelligence')}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title={ct('stayCalm')} variant="info" icon={Brain}>
            <p className="mb-3">{ct('stayCalmDesc')}</p>
            <div className="text-xs p-2 bg-muted rounded">
              {ct('stayCalmQuote')}
            </div>
          </InfoCard>
          
          <InfoCard title={ct('empathyFirst')} variant="success" icon={Heart}>
            <p className="mb-3">{ct('empathyFirstDesc')}</p>
            <div className="text-xs p-2 bg-muted rounded">
              {ct('empathyFirstQuote')}
            </div>
          </InfoCard>
          
          <InfoCard title={ct('solutionFocus')} variant="warning" icon={Target}>
            <p className="mb-3">{ct('solutionFocusDesc')}</p>
            <div className="text-xs p-2 bg-muted rounded">
              {ct('solutionFocusQuote')}
            </div>
          </InfoCard>
        </div>
      </section>

      {/* Stress & Burnout Prevention */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Zap className="w-6 h-6 text-primary" />
          {ct('stressBurnoutPrevention')}
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">{ct('stoacMethod')}</h3>
              <p className="text-sm text-muted-foreground mb-4">{ct('stoacDescription')}</p>
              <div className="space-y-3">
                {[
                  { letter: "S", title: ct('stoacS'), desc: ct('stoacSDesc') },
                  { letter: "T", title: ct('stoacT'), desc: ct('stoacTDesc') },
                  { letter: "O", title: ct('stoacO'), desc: ct('stoacODesc') },
                  { letter: "A", title: ct('stoacA'), desc: ct('stoacADesc') },
                  { letter: "C", title: ct('stoacC'), desc: ct('stoacCDesc') },
                ].map((item) => (
                  <div key={item.letter} className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{item.letter}</span>
                    <div>
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct('burnoutWarnings')}</h3>
              <div className="space-y-2">
                {[
                  ct('burnoutWarning1'),
                  ct('burnoutWarning2'),
                  ct('burnoutWarning3'),
                  ct('burnoutWarning4'),
                  ct('burnoutWarning5'),
                ].map((warning, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{warning}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-success/10 rounded-lg">
                <h4 className="font-medium text-success mb-2">{ct('preventionTips')}</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {ct('preventionTip1')}</li>
                  <li>• {ct('preventionTip2')}</li>
                  <li>• {ct('preventionTip3')}</li>
                  <li>• {ct('preventionTip4')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Star className="w-6 h-6 text-primary" />
          {ct('corePrinciples')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Award, title: ct('principle1Title'), desc: ct('principle1Desc') },
            { icon: Clock, title: ct('principle2Title'), desc: ct('principle2Desc') },
            { icon: FileText, title: ct('principle3Title'), desc: ct('principle3Desc') },
            { icon: Heart, title: ct('principle4Title'), desc: ct('principle4Desc') },
            { icon: TrendingUp, title: ct('principle5Title'), desc: ct('principle5Desc') },
            { icon: Shield, title: ct('principle6Title'), desc: ct('principle6Desc') },
          ].map((principle, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-start gap-3">
                <principle.icon className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm">{principle.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{principle.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pre-Call Checklist */}
      <Checklist
        title={ct('preCallChecklist')}
        items={[
          ct('preCallItem1'),
          ct('preCallItem2'),
          ct('preCallItem3'),
          ct('preCallItem4'),
          ct('preCallItem5'),
          ct('preCallItem6'),
        ]}
      />

      {/* Post-Problem Checklist */}
      <Checklist
        title={ct('postProblemChecklist')}
        items={[
          ct('postProblemItem1'),
          ct('postProblemItem2'),
          ct('postProblemItem3'),
          ct('postProblemItem4'),
          ct('postProblemItem5'),
          ct('postProblemItem6'),
        ]}
      />
      
      {/* Coordination Image - contextual after checklists */}
      <ChapterImage
        src={mindsetCoordinationImg}
        alt="Freight dispatcher coordinating shipments with headset at multi-monitor workstation"
        variant="float-right"
        className="mt-4"
      />

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="mindset" />

      {/* Quiz */}
      <Quiz title={ct('quizTitle')} chapterId="mindset" />
    </div>
  );
}