import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Quiz } from "../Quiz";
import { FlowDiagram, ProcessMap, DecisionDiagram } from "../FlowDiagram";
import { Checklist } from "../Checklist";
import { ChapterHero } from "../ChapterHero";
import { quizzes } from "@/data/quizData";
import {
  ClipboardList, Search, Calculator, Play, Package, 
  ArrowRight, CheckCircle2, AlertCircle, Clock, Phone,
  FileText, Truck, MapPin, Users, Euro, Shield, Calendar,
  MessageSquare, AlertTriangle, Info, Target, Zap, Mail,
  Globe, Building2, Route, TrendingUp
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function WorkflowChapter() {
  const { ct } = useChapterTranslation("workflow");
  
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <ChapterHero
        chapterNumber={ct("chapterNumber")}
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={Route}
        variant="foundation"
      />

      {/* Introduction to Workflow */}
      <div className="info-card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Route className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="section-title mb-2">{ct("understandingWorkflow")}</h2>
            <p className="text-muted-foreground mb-4">
              {ct("workflowDesc")}
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-semibold text-primary">{ct("averageOrdersDay")}</p>
                <p className="text-muted-foreground">15-25 {ct("perDispatcher")}</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-semibold text-primary">{ct("processingTime")}</p>
                <p className="text-muted-foreground">15-45 min {ct("perOrder")}</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-semibold text-primary">{ct("keyMetrics")}</p>
                <p className="text-muted-foreground">{ct("otdMarginClaims")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Flow Diagram */}
      <FlowDiagram
        title={ct("endToEndProcess")}
        steps={[
          { id: "intake", label: ct("intake"), description: ct("customerRequest"), color: "primary" },
          { id: "sourcing", label: ct("sourcing"), description: ct("findCapacity"), color: "info" },
          { id: "costing", label: ct("costing"), description: ct("calculatePrice"), color: "warning" },
          { id: "execution", label: ct("execution"), description: ct("planTrack"), color: "success" },
          { id: "delivery", label: ct("delivery"), description: ct("podClose"), color: "primary" },
        ]}
      />

      {/* Detailed Process Map */}
      <ProcessMap
        title={ct("detailedProcess")}
        phases={[
          {
            name: ct("intakePhase"),
            color: "primary",
            steps: [
              ct("collectShipment"),
              ct("verifyAddresses"),
              ct("checkTimeWindows"),
              ct("confirmIncoterms"),
              ct("assessFeasibility")
            ]
          },
          {
            name: ct("sourcingPhase"),
            color: "info",
            steps: [
              ct("checkOwnFleet"),
              ct("contactPreferred"),
              ct("postSpotMarket"),
              ct("verifyCarrierDocs"),
              ct("confirmVehicleSpecs")
            ]
          },
          {
            name: ct("costingPhase"),
            color: "warning",
            steps: [
              ct("calculateBaseCost"),
              ct("addTolls"),
              ct("includeAccessorials"),
              ct("applyMargin"),
              ct("prepareQuote")
            ]
          },
          {
            name: ct("executionPhase"),
            color: "success",
            steps: [
              ct("planRoute"),
              ct("sendLoadingInstr"),
              ct("trackMilestones"),
              ct("communicateDelays"),
              ct("updateETA")
            ]
          },
          {
            name: ct("deliveryPhase"),
            color: "primary",
            steps: [
              ct("confirmDeliveryTime"),
              ct("collectSignedPOD"),
              ct("checkDamages"),
              ct("calculateActualMargin"),
              ct("rateCarrierPerf")
            ]
          },
          {
            name: ct("postTripPhase"),
            color: "info",
            steps: [
              ct("archiveAllDocs"),
              ct("invoiceCustomer"),
              ct("payCarrier"),
              ct("analyzeProfitability"),
              ct("updateLaneDatabase")
            ]
          }
        ]}
      />

      {/* 1. Intake - Expanded */}
      <div className="info-card">
        <h2 className="section-title text-primary flex items-center gap-3">
          <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
          {ct("intakeCustomerRequest")}
        </h2>
        
        <div className="space-y-6">
          {/* Essential Information */}
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">{ct("essentialInfo")}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: ct("pickupDetails"), items: [ct("fullAddress"), ct("contactNamePhone"), ct("openingHours"), ct("dockGateNumber"), ct("referenceNumber")] },
                { title: ct("deliveryDetails"), items: [ct("fullAddress"), ct("contactNamePhone"), ct("openingHours"), ct("unloadingEquipment"), ct("advanceBooking")] },
                { title: ct("cargoInformation"), items: [ct("weightGrossNet"), ct("numberOfPallets"), ct("dimensions"), ct("stackability"), ct("hazmatClassification")] },
                { title: ct("timeRequirements"), items: [ct("pickupDateTime"), ct("deliveryDeadline"), ct("transitTimeExpect"), ct("weekendLoading"), ct("holidayConsider")] },
                { title: ct("vehicleSpecification"), items: [ct("truckTypeRequired"), ct("loadingSide"), ct("heightRequirements"), ct("temperatureReq"), ct("tailLiftNeeded")] },
                { title: ct("commercialTerms"), items: [ct("incoterms"), ct("whoPaysWaiting"), ct("insuranceRequirements"), ct("specialHandling"), ct("podRequirements")] },
              ].map((section, i) => (
                <div key={i} className="p-3 bg-card rounded-lg border border-border">
                  <h4 className="font-medium text-primary mb-2">{section.title}</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-success flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Incoterms Quick Reference */}
          <div className="p-4 bg-info/5 rounded-lg border border-info/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-info" />
              {ct("commonIncoterms")}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
              <div className="p-2 bg-card rounded">
                <p className="font-semibold text-info">{ct("exw")}</p>
                <p className="text-muted-foreground">{ct("exwDesc")}</p>
              </div>
              <div className="p-2 bg-card rounded">
                <p className="font-semibold text-info">{ct("fca")}</p>
                <p className="text-muted-foreground">{ct("fcaDesc")}</p>
              </div>
              <div className="p-2 bg-card rounded">
                <p className="font-semibold text-info">{ct("dap")}</p>
                <p className="text-muted-foreground">{ct("dapDesc")}</p>
              </div>
              <div className="p-2 bg-card rounded">
                <p className="font-semibold text-info">{ct("ddp")}</p>
                <p className="text-muted-foreground">{ct("ddpDesc")}</p>
              </div>
            </div>
          </div>

          {/* Feasibility Assessment */}
          <div className="p-4 bg-warning/5 rounded-lg border border-warning/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-warning" />
              {ct("feasibilityAssessment")}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium mb-2">{ct("beforeAccepting")}</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>☐ {ct("transitTimeRealistic")}</li>
                  <li>☐ {ct("noDrivingBans")}</li>
                  <li>☐ {ct("vehicleSpecMatches")}</li>
                  <li>☐ {ct("weightWithinLimits")}</li>
                  <li>☐ {ct("noSpecialPermits")}</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">{ct("redFlagsWatch")}</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>⚠️ {ct("impossibleDeadlines")}</li>
                  <li>⚠️ {ct("unclearAddresses")}</li>
                  <li>⚠️ {ct("noContactPerson")}</li>
                  <li>⚠️ {ct("unusualCargo")}</li>
                  <li>⚠️ {ct("paymentTermsUnclear")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Communication Template */}
          <div className="p-4 bg-success/5 rounded-lg border border-success/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-success" />
              {ct("requestConfirmation")}
            </h3>
            <div className="bg-card p-4 rounded-lg text-sm font-mono">
              <p className="text-muted-foreground">
                {ct("confirmationTemplateText")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Capacity Sourcing - Expanded */}
      <div className="info-card">
        <h2 className="section-title text-primary flex items-center gap-3">
          <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
          {ct("capacitySourcing")}
        </h2>
        
        <div className="space-y-6">
          {/* Priority Order */}
          <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
            <h3 className="font-semibold mb-3">{ct("sourcingPriorityOrder")}</h3>
            <div className="space-y-4">
              {[
                { num: 1, title: ct("ownFleet"), desc: ct("ownFleetDesc"), time: ct("immediate") },
                { num: 2, title: ct("preferredCarriers"), desc: ct("preferredDesc"), time: "15-30 min" },
                { num: 3, title: ct("carrierNetwork"), desc: ct("networkDesc"), time: "30-60 min" },
                { num: 4, title: ct("spotMarket"), desc: ct("spotMarketDesc"), time: "1-4 h" },
              ].map((item) => (
                <div key={item.num} className="flex items-center gap-4">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="text-xs bg-muted px-2 py-1 rounded">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Freight Exchanges */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              {ct("freightExchanges")}
            </h3>
            <DataTable
              headers={[ct("platform"), ct("coverage"), ct("strengths"), ct("typicalUse")]}
              rows={[
                ["TIMOCOM", ct("timocomCoverage"), ct("timocomStrengths"), ct("timocomUse")],
                ["Trans.eu", ct("transeuCoverage"), ct("transeuStrengths"), ct("transeuUse")],
                ["Teleroute", ct("telerouteCoverage"), ct("telerouteStrengths"), ct("telerouteUse")],
                ["Transporeon Spot", ct("transporeonCoverage"), ct("transporeonStrengths"), ct("transporeonUse")],
                ["LoadFox", ct("loadfoxCoverage"), ct("loadfoxStrengths"), ct("loadfoxUse")],
              ]}
            />
          </div>

          {/* Carrier Verification */}
          <div className="p-4 bg-warning/5 rounded-lg border border-warning/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-warning" />
              {ct("carrierVerification")}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium mb-2">{ct("requiredDocuments")}</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>☐ {ct("validTransportLicense")}</li>
                  <li>☐ {ct("cmrInsurance")}</li>
                  <li>☐ {ct("goodsTransitInsurance")}</li>
                  <li>☐ {ct("companyRegistration")}</li>
                  <li>☐ {ct("viesValidation")}</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">{ct("additionalChecks")}</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>☐ {ct("exchangeRating")}</li>
                  <li>☐ {ct("paymentHistory")}</li>
                  <li>☐ {ct("vehicleAgeCondition")}</li>
                  <li>☐ {ct("driverLanguage")}</li>
                  <li>☐ {ct("gpsTracking")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Spot Market Tips */}
          <div className="p-4 bg-info/5 rounded-lg border border-info/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-info" />
              {ct("spotMarketBestPractices")}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>{ct("doCheckRating")}</li>
                <li>{ct("doVerifyInsurance")}</li>
                <li>{ct("doConfirmVehicle")}</li>
                <li>{ct("doGetDriverDetails")}</li>
              </ul>
              <ul className="space-y-2">
                <li>{ct("dontAcceptSuspicious")}</li>
                <li>{ct("dontSkipVerification")}</li>
                <li>{ct("dontBookWithout")}</li>
                <li>{ct("dontIgnoreReviews")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Costing & Quote - Expanded */}
      <div className="info-card">
        <h2 className="section-title text-primary flex items-center gap-3">
          <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
          {ct("costingQuote")}
        </h2>
        
        <div className="space-y-6">
          {/* Base Cost Formula */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-2">{ct("baseCostFormula")}</h3>
              <p className="text-3xl font-mono text-primary mb-2">€1.10-1.25/km</p>
              <p className="text-sm text-muted-foreground">{ct("baseCostDesc")}</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-2">{ct("targetMarginRange")}</h3>
              <p className="text-3xl font-mono text-primary mb-2">8–18%</p>
              <p className="text-sm text-muted-foreground">{ct("targetMarginDesc")}</p>
            </div>
          </div>

          {/* Cost Components */}
          <div>
            <h3 className="font-semibold mb-3">{ct("costComponentsInclude")}</h3>
            <DataTable
              headers={[ct("component"), ct("calculation"), ct("exampleRoute"), ct("notes")]}
              rows={[
                [ct("baseTransport"), "km × €1.10-1.25", "€1,150", ct("baseTransportNote")],
                [ct("deTolls"), "km × €0.348", "€174 (500km)", ct("deTollsNote")],
                [ct("frTolls"), "km × €0.28-0.33", "€153 (500km)", ct("frTollsNote")],
                [ct("ferryTunnel"), ct("fixedPerCrossing"), "N/A", ct("ferryNote")],
                [ct("waitingTime"), "€35-50/h", "€75 (1.5h)", ct("waitingNote")],
                [ct("loadingUnloading"), "€25-50/stop", "€50", ct("loadingNote")],
                [ct("weekendDelivery"), "+15-25%", ct("ifApplicable"), ct("weekendNote")],
              ]}
            />
          </div>

          {/* Quote Options */}
          <div className="p-4 bg-success/5 rounded-lg border border-success/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-success" />
              {ct("alwaysOfferOptions")}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-lg">
                <h4 className="font-medium mb-2 text-success">{ct("economyOption")}</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {ct("economyTransit")}</li>
                  <li>• {ct("economyFlexible")}</li>
                  <li>• {ct("economyGrouped")}</li>
                  <li>• {ct("economyMargin")}</li>
                </ul>
              </div>
              <div className="p-4 bg-card rounded-lg">
                <h4 className="font-medium mb-2 text-primary">{ct("expressOption")}</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {ct("expressFastest")}</li>
                  <li>• {ct("expressDedicated")}</li>
                  <li>• {ct("expressFixed")}</li>
                  <li>• {ct("expressMargin")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quote Email Template */}
          <div className="p-4 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-3">{ct("quoteEmailTemplate")}</h3>
            <div className="bg-card p-4 rounded-lg text-sm font-mono">
              <p className="text-muted-foreground">
                {ct("quoteTemplateText")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Execution - Expanded */}
      <div className="info-card">
        <h2 className="section-title text-primary flex items-center gap-3">
          <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
          {ct("execution")}
        </h2>
        
        <div className="space-y-6">
          {/* Route Planning */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-info/5 rounded-lg border border-info/20">
              <h3 className="font-semibold text-info mb-2 flex items-center gap-2">
                <Route className="w-5 h-5" />
                {ct("routePlanningReq")}
              </h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• {ct("routeBreak45")}</li>
                <li>• {ct("routeDailyRest")}</li>
                <li>• {ct("routeWeeklyRest")}</li>
                <li>• {ct("routeDrivingBans")}</li>
                <li>• {ct("routeSecureParking")}</li>
              </ul>
            </div>
            <div className="p-4 bg-success/5 rounded-lg border border-success/20">
              <h3 className="font-semibold text-success mb-2 flex items-center gap-2">
                <Target className="w-5 h-5" />
                {ct("milestoneTracking")}
              </h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>✓ {ct("milestonePickup")}</li>
                <li>✓ {ct("milestoneBorder")}</li>
                <li>✓ {ct("milestoneRestStops")}</li>
                <li>✓ {ct("milestoneETA")}</li>
                <li>✓ {ct("milestoneDelivery")}</li>
              </ul>
            </div>
          </div>

          {/* Communication Timeline */}
          <div>
            <h3 className="font-semibold mb-3">{ct("proactiveCommunication")}</h3>
            <DataTable
              headers={[ct("timing"), ct("action"), ct("toWhom"), ct("method")]}
              rows={[
                [ct("dayBeforePickup"), ct("confirmPickupDetails"), ct("driverClient"), "Email/TMS"],
                [ct("pickupComplete"), ct("confirmLoadingSendCMR"), ct("client"), "Email + Photo"],
                [ct("dailyAM"), ct("positionUpdateETA"), ct("client"), "Email/Portal"],
                [ct("anyDelay"), ct("immediateNotification"), ct("clientInternal"), "Phone + Email"],
                [ct("dayBeforeDelivery"), ct("confirmDeliverySlot"), ct("receiverClient"), "Phone/Email"],
                [ct("deliveryComplete"), ct("sendPODConfirm"), ct("client"), "Email + TMS"],
              ]}
            />
          </div>

          {/* Delay Management */}
          <div className="p-4 bg-warning/5 rounded-lg border border-warning/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              {ct("delayManagement")}
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-card rounded-lg">
                <p className="font-medium mb-2">{ct("assessImpact")}</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• {ct("delayHowLong")}</li>
                  <li>• {ct("delayAffectDelivery")}</li>
                  <li>• {ct("delayPenalties")}</li>
                </ul>
              </div>
              <div className="p-3 bg-card rounded-lg">
                <p className="font-medium mb-2">{ct("findSolutions")}</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• {ct("solutionRoute")}</li>
                  <li>• {ct("solutionDriverSwap")}</li>
                  <li>• {ct("solutionNewSlot")}</li>
                </ul>
              </div>
              <div className="p-3 bg-card rounded-lg">
                <p className="font-medium mb-2">{ct("communicate")}</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• {ct("communicateInform")}</li>
                  <li>• {ct("communicateSolutions")}</li>
                  <li>• {ct("communicateDocument")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Delivery & Post-Trip - Expanded */}
      <div className="info-card">
        <h2 className="section-title text-primary flex items-center gap-3">
          <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">5</span>
          {ct("deliveryPostTrip")}
        </h2>
        
        <div className="space-y-6">
          {/* Delivery Icons */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <Package className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">{ct("collectPOD")}</h3>
              <p className="text-sm text-muted-foreground">{ct("collectPODDesc")}</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <Calculator className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">{ct("calculateMargin")}</h3>
              <p className="text-sm text-muted-foreground">{ct("calculateMarginDesc")}</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">{ct("rateCarrier")}</h3>
              <p className="text-sm text-muted-foreground">{ct("rateCarrierDesc")}</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">{ct("archiveDocs")}</h3>
              <p className="text-sm text-muted-foreground">{ct("archiveDocsDesc")}</p>
            </div>
          </div>

          {/* POD Checklist */}
          <Checklist
            title={ct("podVerificationChecklist")}
            items={[
              ct("podCMRSigned"),
              ct("podStampVisible"),
              ct("podNoDamage"),
              ct("podAllPieces"),
              ct("podPhotoUploaded"),
              ct("podCrossReference")
            ]}
          />

          {/* Post-Trip Analysis */}
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              {ct("postTripAnalysis")}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium mb-2">{ct("profitabilityCheck")}</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• {ct("profitActualMargin")}</li>
                  <li>• {ct("profitUnexpectedCosts")}</li>
                  <li>• {ct("profitAdjustRate")}</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">{ct("qualityCheck")}</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• {ct("qualityOnTime")}</li>
                  <li>• {ct("qualityDamage")}</li>
                  <li>• {ct("qualityCarrierAgain")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Issues & Solutions */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-primary" />
          {ct("commonIssuesSolutions")}
        </h2>
        <DataTable
          headers={[ct("issue"), ct("immediateAction"), ct("prevention"), ct("escalation")]}
          rows={[
            [ct("issueDriverNoShow"), ct("actionDriverNoShow"), ct("preventDriverNoShow"), ct("escalateDriverNoShow")],
            [ct("issueLoadingRefused"), ct("actionLoadingRefused"), ct("preventLoadingRefused"), ct("escalateLoadingRefused")],
            [ct("issueBreakdown"), ct("actionBreakdown"), ct("preventBreakdown"), ct("escalateBreakdown")],
            [ct("issueClientUnavailable"), ct("actionClientUnavailable"), ct("preventClientUnavailable"), ct("escalateClientUnavailable")],
            [ct("issueDamageDelivery"), ct("actionDamageDelivery"), ct("preventDamageDelivery"), ct("escalateDamageDelivery")],
            [ct("issuePODNotReturned"), ct("actionPODNotReturned"), ct("preventPODNotReturned"), ct("escalatePODNotReturned")],
          ]}
        />
      </section>

      {/* KPIs */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          {ct("keyPerformanceIndicators")}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: ct("kpiOTD"), target: ">95%", desc: ct("kpiOTDDesc") },
            { name: ct("kpiMargin"), target: "10-15%", desc: ct("kpiMarginDesc") },
            { name: ct("kpiClaims"), target: "<0.5%", desc: ct("kpiClaimsDesc") },
            { name: ct("kpiPOD"), target: "<48h", desc: ct("kpiPODDesc") },
            { name: ct("kpiQuoteConversion"), target: ">30%", desc: ct("kpiQuoteConversionDesc") },
            { name: ct("kpiRetention"), target: ">85%", desc: ct("kpiRetentionDesc") },
          ].map((kpi, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-4">
              <h3 className="font-semibold mb-1">{kpi.name}</h3>
              <p className="text-2xl font-bold text-primary mb-1">{kpi.target}</p>
              <p className="text-sm text-muted-foreground">{kpi.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Reference Checklists */}
      <div className="grid md:grid-cols-2 gap-6">
        <Checklist
          title={ct("dailyStartChecklist")}
          items={[
            ct("dailyCheckMessages"),
            ct("dailyReviewPickups"),
            ct("dailyVerifyDriver"),
            ct("dailyFollowPOD"),
            ct("dailyUpdateTMS"),
            ct("dailyPrepareUrgent")
          ]}
        />
        <Checklist
          title={ct("endOfDayChecklist")}
          items={[
            ct("eodShipmentsUpdated"),
            ct("eodTomorrowConfirmed"),
            ct("eodPODsCollected"),
            ct("eodQueriesResponded"),
            ct("eodHandoverNotes"),
            ct("eodWeeklyReviewed")
          ]}
        />
      </div>

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} questions={quizzes.workflow} chapterId="workflow" />
    </div>
  );
}
