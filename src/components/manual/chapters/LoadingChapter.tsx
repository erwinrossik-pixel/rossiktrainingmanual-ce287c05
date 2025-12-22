import { Checklist } from "../Checklist";
import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { FlowDiagram, DecisionDiagram } from "../FlowDiagram";
import { quizzes } from "@/data/quizData";
import { 
  Package, Camera, FileText, AlertTriangle, Shield, Truck, 
  CheckCircle2, Scale, Ruler, Target, Info, Clock, Users,
  Eye, Zap, AlertCircle, ArrowRight, XCircle, BookOpen
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function LoadingChapter() {
  const { ct } = useChapterTranslation('loading');
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        chapterNumber={ct('chapterNumber')}
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Package}
        variant="loading"
      />

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Package className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="section-title mb-2">{ct('whyLoadingMatters')}</h2>
            <p className="text-muted-foreground mb-4">
              {ct('whyLoadingMattersDesc')}
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-destructive/10 rounded-lg">
                <p className="font-semibold text-destructive">25%</p>
                <p className="text-muted-foreground">{ct('accidentsLoadShift')}</p>
              </div>
              <div className="p-3 bg-warning/10 rounded-lg">
                <p className="font-semibold text-warning">€10,000+</p>
                <p className="text-muted-foreground">{ct('finesImproperSecuring')}</p>
              </div>
              <div className="p-3 bg-success/10 rounded-lg">
                <p className="font-semibold text-success">5-10%</p>
                <p className="text-muted-foreground">{ct('fuelSavingsProperLoading')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Flow Diagram */}
      <FlowDiagram
        title={ct('loadingProcessFlow')}
        steps={[
          { id: "slot", label: ct('confirmSlot'), description: ct('verifyBooking'), color: "primary" },
          { id: "position", label: ct('position'), description: ct('parkSecure'), color: "info" },
          { id: "inspect", label: ct('inspect'), description: ct('checkTrailer'), color: "warning" },
          { id: "load", label: ct('load'), description: ct('distributeEvenly'), color: "success" },
          { id: "secure", label: ct('secure'), description: "EN 12195-1", color: "primary" },
          { id: "document", label: ct('document'), description: ct('photosCMR'), color: "info" },
        ]}
      />

      {/* Decision Diagram */}
      <DecisionDiagram
        title={ct('damageFoundAtLoading')}
        question={ct('cargoDamagedBeforeLoading')}
        yesPath={{
          label: ct('documentNotify'),
          result: ct('documentNotifyResult')
        }}
        noPath={{
          label: ct('proceedWithLoading'),
          result: ct('proceedWithLoadingResult')
        }}
      />

      {/* Step by Step Process */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          {ct('loadingProcessStepByStep')}
        </h2>
        <div className="space-y-4">
          {[
            { 
              num: 1, 
              title: ct('step1Title'), 
              desc: ct('step1Desc'),
              details: [ct('step1Detail1'), ct('step1Detail2'), ct('step1Detail3'), ct('step1Detail4')]
            },
            { 
              num: 2, 
              title: ct('step2Title'), 
              desc: ct('step2Desc'),
              details: [ct('step2Detail1'), ct('step2Detail2'), ct('step2Detail3'), ct('step2Detail4')]
            },
            { 
              num: 3, 
              title: ct('step3Title'), 
              desc: ct('step3Desc'),
              details: [ct('step3Detail1'), ct('step3Detail2'), ct('step3Detail3'), ct('step3Detail4')]
            },
            { 
              num: 4, 
              title: ct('step4Title'), 
              desc: ct('step4Desc'),
              details: [ct('step4Detail1'), ct('step4Detail2'), ct('step4Detail3'), ct('step4Detail4')]
            },
            { 
              num: 5, 
              title: ct('step5Title'), 
              desc: ct('step5Desc'),
              details: [ct('step5Detail1'), ct('step5Detail2'), ct('step5Detail3'), ct('step5Detail4')]
            },
            { 
              num: 6, 
              title: ct('step6Title'), 
              desc: ct('step6Desc'),
              details: [ct('step6Detail1'), ct('step6Detail2'), ct('step6Detail3'), ct('step6Detail4')]
            },
            { 
              num: 7, 
              title: ct('step7Title'), 
              desc: ct('step7Desc'),
              details: [ct('step7Detail1'), ct('step7Detail2'), ct('step7Detail3'), ct('step7Detail4')]
            },
            { 
              num: 8, 
              title: ct('step8Title'), 
              desc: ct('step8Desc'),
              details: [ct('step8Detail1'), ct('step8Detail2'), ct('step8Detail3'), ct('step8Detail4')]
            },
          ].map((step) => (
            <div key={step.num} className="flex gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {step.num}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{step.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {step.details.map((detail, i) => (
                    <span key={i} className="text-xs bg-muted px-2 py-1 rounded">{detail}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weight Distribution */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Scale className="w-6 h-6 text-primary" />
          {ct('weightDistributionPrinciples')}
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">{ct('centerOfGravity')}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {ct('centerOfGravityDesc')}
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">{ct('goldenRules')}:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>{ct('heavyItemsBottom')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>{ct('heavyItemsForward')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>{ct('distributeEvenly')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>{ct('fillGaps')}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct('axleLoadDistribution')}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {ct('axleLoadDistributionDesc')}
              </p>
              <DataTable
                headers={[ct('axleType'), ct('maxLoad'), ct('checkPoint')]}
                rows={[
                  [ct('frontSteering'), "7.5t", ct('shouldNotBeUnderloaded')],
                  [ct('driveAxle'), "11.5t", ct('keyForTraction')],
                  [ct('trailerTandem'), "18-20t", ct('dependsOnSpacing')],
                  [ct('trailerTridem'), "21-24t", ct('threeAxleGroup')],
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* EN 12195-1 Standards */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          {ct('en12195Standards')}
        </h2>
        <div className="info-card">
          <p className="text-muted-foreground mb-4">
            {ct('en12195Description')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-6 bg-destructive/10 rounded-lg text-center">
              <p className="text-4xl font-bold text-destructive">80%</p>
              <p className="text-sm text-muted-foreground mt-2">{ct('forwardRestraint')} (0.8g)</p>
              <p className="text-xs text-muted-foreground">{ct('emergencyBraking')}</p>
            </div>
            <div className="p-6 bg-warning/10 rounded-lg text-center">
              <p className="text-4xl font-bold text-warning">50%</p>
              <p className="text-sm text-muted-foreground mt-2">{ct('sidewaysRestraint')} (0.5g)</p>
              <p className="text-xs text-muted-foreground">{ct('corneringEvasive')}</p>
            </div>
            <div className="p-6 bg-info/10 rounded-lg text-center">
              <p className="text-4xl font-bold text-info">50%</p>
              <p className="text-sm text-muted-foreground mt-2">{ct('backwardRestraint')} (0.5g)</p>
              <p className="text-xs text-muted-foreground">{ct('accelerationUphill')}</p>
            </div>
          </div>

          <h3 className="font-semibold mb-3">{ct('whatThisMeansInPractice')}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {ct('forA10TonneLoad')}:
          </p>
          <ul className="grid md:grid-cols-3 gap-4 text-sm">
            <li className="p-3 bg-muted/50 rounded-lg">
              <span className="font-medium">{ct('forward')}:</span> 8 {ct('tonnesOfForce')}
            </li>
            <li className="p-3 bg-muted/50 rounded-lg">
              <span className="font-medium">{ct('sideways')}:</span> 5 {ct('tonnesOfForce')}
            </li>
            <li className="p-3 bg-muted/50 rounded-lg">
              <span className="font-medium">{ct('backward')}:</span> 5 {ct('tonnesOfForce')}
            </li>
          </ul>
        </div>
      </section>

      {/* Securing Equipment */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Package className="w-6 h-6 text-primary" />
          {ct('securingEquipmentGuide')}
        </h2>
        <DataTable
          headers={[ct('equipment'), ct('useFor'), ct('lashingCapacity'), ct('importantNotes')]}
          rows={[
            [ct('ratchetStraps'), ct('mostCargoTypes'), "1,500-5,000 daN", ct('checkWebbingCondition')],
            [ct('chains'), ct('heavyMachinerySteel'), "4,000-10,000 daN", ct('useWithCornerProtectors')],
            [ct('frictionMats'), ct('palletsBoxes'), ct('plus50Friction'), ct('placeUnderCargo')],
            [ct('edgeProtectors'), ct('preventingStrapDamage'), "N/A", ct('mandatoryForSharpEdges')],
            [ct('blockingBoards'), ct('fillingGaps'), "N/A", ct('preventLateralMovement')],
            [ct('airbagsDunnage'), ct('gapFilling'), ct('varies'), ct('quickToInstall')],
            [ct('antiSlipPaper'), ct('betweenLayers'), ct('plus20Friction'), ct('costEffective')],
            [ct('headboard'), ct('forwardBlocking'), ct('upTo40OfLoad'), ct('mustBeEN12642')],
          ]}
        />
      </section>

      {/* Code XL Standards */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          {ct('codeXLTrailerStructure')}
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">{ct('whatIsCodeXL')}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {ct('codeXLDescription')}
              </p>
              <div className="p-4 bg-success/10 rounded-lg">
                <h4 className="font-medium text-success mb-2">{ct('codeXLBenefits')}</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• {ct('fasterLoading')}</li>
                  <li>• {ct('cargoBlockedCounts')}</li>
                  <li>• {ct('reducedSecuringEquipment')}</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct('codeXLForceLimits')}</h3>
              <DataTable
                headers={[ct('surface'), ct('forceResistance')]}
                rows={[
                  [ct('frontWall'), "40% " + ct('ofPayload')],
                  [ct('sideWalls'), "30% " + ct('ofPayload')],
                  [ct('rearDoors'), "25% " + ct('ofPayload')],
                  [ct('roof'), ct('notLoadBearing')],
                ]}
              />
              <p className="text-xs text-muted-foreground mt-2">
                <AlertTriangle className="w-3 h-3 inline mr-1" />
                {ct('codeXLWarning')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Documentation */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Camera className="w-6 h-6 text-primary" />
          {ct('photoDocumentationRequirements')}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-info/5 rounded-xl border border-info/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Camera className="w-5 h-5 text-info" />
              {ct('whenToTakePhotos')}
            </h3>
            <div className="space-y-3">
              {[
                { stage: ct('beforeLoading'), what: ct('emptyTrailerInterior') },
                { stage: ct('duringLoading'), what: ct('cargoPlacementLabels') },
                { stage: ct('afterLoading'), what: ct('fullLoadSecured') },
                { stage: ct('atDelivery'), what: ct('beforeUnloadingAfter') },
                { stage: ct('anyDamage'), what: ct('closeUpOfDamage') },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-info mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">{item.stage}</p>
                    <p className="text-xs text-muted-foreground">{item.what}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-6 bg-warning/5 rounded-xl border border-warning/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-warning" />
              {ct('photoQualityRequirements')}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('includeTimestamp')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('goodLighting')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('clearAndFocused')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('showFullContext')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{ct('captureAllAngles')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Loading Mistakes */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <AlertCircle className="w-6 h-6 text-primary" />
          {ct('commonLoadingMistakes')}
        </h2>
        <DataTable
          headers={[ct('mistake'), ct('risk'), ct('solution'), ct('prevention')]}
          rows={[
            [ct('overloadingAxles'), ct('finesVehicleDamage'), ct('redistributeLoad'), ct('weighBeforeLeaving')],
            [ct('insufficientSecuring'), ct('loadShiftAccidents'), ct('addMoreStraps'), ct('calculateRequired')],
            [ct('noFrictionMats'), ct('cargoSlides'), ct('placeMatsUnder'), ct('alwaysCarryMats')],
            [ct('gapsBetweenCargo'), ct('loadShifts'), ct('fillWithAirbags'), ct('planLoadLayout')],
            [ct('noPhotos'), ct('disputesWithShippers'), ct('documentEverything'), ct('makeItRoutine')],
            [ct('wrongCMRDetails'), ct('claimsRejected'), ct('verifyBeforeSigning'), ct('useChecklist')],
          ]}
        />
      </section>

      {/* Special Cargo Types */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Truck className="w-6 h-6 text-primary" />
          {ct('specialCargoLoading')}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title={ct('steelCoils')} icon={Package} variant="warning">
            <ul className="space-y-1 text-sm">
              <li>• {ct('steelCoilsReq1')}</li>
              <li>• {ct('steelCoilsReq2')}</li>
              <li>• {ct('steelCoilsReq3')}</li>
              <li>• {ct('steelCoilsReq4')}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct('machineryEquipment')} icon={Package} variant="info">
            <ul className="space-y-1 text-sm">
              <li>• {ct('machineryReq1')}</li>
              <li>• {ct('machineryReq2')}</li>
              <li>• {ct('machineryReq3')}</li>
              <li>• {ct('machineryReq4')}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct('beveragesPalletized')} icon={Package} variant="success">
            <ul className="space-y-1 text-sm">
              <li>• {ct('beveragesReq1')}</li>
              <li>• {ct('beveragesReq2')}</li>
              <li>• {ct('beveragesReq3')}</li>
              <li>• {ct('beveragesReq4')}</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Pre-Loading Checklist */}
      <Checklist
        title={ct('preLoadingChecklist')}
        items={[
          ct('preLoadingItem1'),
          ct('preLoadingItem2'),
          ct('preLoadingItem3'),
          ct('preLoadingItem4'),
          ct('preLoadingItem5'),
          ct('preLoadingItem6'),
          ct('preLoadingItem7'),
          ct('preLoadingItem8'),
        ]}
      />

      {/* Post-Loading Checklist */}
      <Checklist
        title={ct('postLoadingChecklist')}
        items={[
          ct('postLoadingItem1'),
          ct('postLoadingItem2'),
          ct('postLoadingItem3'),
          ct('postLoadingItem4'),
          ct('postLoadingItem5'),
          ct('postLoadingItem6'),
          ct('postLoadingItem7'),
          ct('postLoadingItem8'),
        ]}
      />

      {/* Quiz */}
      {quizzes.loading && (
        <Quiz title={ct('quizTitle')} questions={quizzes.loading} chapterId="loading" />
      )}
    </div>
  );
}