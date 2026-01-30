import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { quizzes } from "@/data/quizData";
import { MessageSquare, Phone, Mail, Users, Clock, CheckCircle, AlertTriangle, FileText } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import communicationImg from "@/assets/chapters/communication-team.jpg";

export function CommunicationChapter() {
  const { ct } = useChapterTranslation("communication");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={MessageSquare}
        variant="communication"
      />

      {/* Communication Team Image - Right aligned */}
      <ChapterImage
        src={communicationImg}
        alt="Professional logistics team meeting"
        caption={ct('communicationTeamCaption') || "Comunicare profesională în echipa de logistică"}
        variant="right"
        className="mb-6"
      />

      {/* Communication Channels */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Phone className="w-6 h-6 text-primary" />
          {ct("communicationChannels")}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title={ct("phoneCalls")} icon={Phone} variant="highlight">
            <p className="font-semibold text-foreground mb-2">{ct("bestFor")}</p>
            <ul className="space-y-1">
              <li>• {ct("urgentIssuesImmediateResponse")}</li>
              <li>• {ct("complexNegotiations")}</li>
              <li>• {ct("buildingPersonalRelationships")}</li>
              <li>• {ct("clarifyingMisunderstandings")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("email")} icon={Mail} variant="info">
            <p className="font-semibold text-foreground mb-2">{ct("bestFor")}</p>
            <ul className="space-y-1">
              <li>• {ct("documentationAuditTrails")}</li>
              <li>• {ct("detailedInformationSharing")}</li>
              <li>• {ct("nonUrgentRequests")}</li>
              <li>• {ct("formalConfirmations")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("tmsPlatform")} icon={FileText} variant="success">
            <p className="font-semibold text-foreground mb-2">{ct("bestFor")}</p>
            <ul className="space-y-1">
              <li>• {ct("orderUpdatesTracking")}</li>
              <li>• {ct("statusNotifications")}</li>
              <li>• {ct("documentExchange")}</li>
              <li>• {ct("automatedCommunication")}</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Professional Email Templates */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Mail className="w-6 h-6 text-primary" />
          {ct("professionalEmailTemplates")}
        </h2>
        
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              {ct("orderConfirmation")}
            </h3>
            <div className="bg-muted/30 rounded-lg p-4 font-mono text-sm">
              <p><strong>{ct("subject")}</strong> {ct("orderConfirmationSubject")}</p>
              <br />
              <p>{ct("dearClientName")}</p>
              <br />
              <p>{ct("weConfirmReceipt")}</p>
              <br />
              <p>• {ct("loading")} {ct("dateTimeAtAddress")}</p>
              <p>• {ct("delivery")} {ct("dateTimeAtAddress")}</p>
              <p>• {ct("vehicle")} {ct("curtainsider")}</p>
              <p>• {ct("rate")} {ct("amountAllIn")}</p>
              <br />
              <p>{ct("driverDetailsWillFollow")}</p>
              <br />
              <p>{ct("bestRegards")}</p>
              <p>{ct("yourName")}</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              {ct("delayNotification")}
            </h3>
            <div className="bg-muted/30 rounded-lg p-4 font-mono text-sm">
              <p><strong>{ct("subject")}</strong> {ct("delayNoticeSubject")}</p>
              <br />
              <p>{ct("dearClientName")}</p>
              <br />
              <p>{ct("weRegretToInform")}</p>
              <br />
              <p>• {ct("originalEta")} {ct("originalTime")}</p>
              <p>• {ct("newEta")} {ct("newTime")}</p>
              <p>• {ct("reason")} {ct("trafficBreakdownWeather")}</p>
              <p>• {ct("currentLocation")} {ct("location")}</p>
              <br />
              <p>{ct("weApologizeForInconvenience")}</p>
              <br />
              <p>{ct("bestRegards")}</p>
              <p>{ct("yourName")}</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-info" />
              {ct("rateQuotation")}
            </h3>
            <div className="bg-muted/30 rounded-lg p-4 font-mono text-sm">
              <p><strong>{ct("subject")}</strong> {ct("rateQuotationSubject")}</p>
              <br />
              <p>{ct("dearClientName")}</p>
              <br />
              <p>{ct("thankYouForInquiry")}</p>
              <br />
              <p>• {ct("route")} {ct("originToDestination")}</p>
              <p>• {ct("vehicle")} {ct("vehicleDetails")}</p>
              <p>• {ct("rate")} €[Amount]</p>
              <p>• {ct("includes")} {ct("allTollsDieselDriver")}</p>
              <p>• {ct("validUntil")} {ct("date")}</p>
              <br />
              <p>{ct("waitingTimeAfter2Hours")}</p>
              <br />
              <p>{ct("pleaseConfirmToProceed")}</p>
              <br />
              <p>{ct("bestRegards")}</p>
              <p>{ct("yourName")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Phone Script Guidelines */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Phone className="w-6 h-6 text-primary" />
          {ct("phoneCallGuidelines")}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-success">{ct("do")}</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct("introduceYourselfClearly")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct("statePurposeImmediately")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct("takeNotesDuringConversation")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct("confirmKeyDetailsBeforeHangingUp")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct("followUpWithWrittenConfirmation")}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-destructive">{ct("dont")}</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                  <span>{ct("makePromisesYouCannotKeep")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                  <span>{ct("commitToRatesWithoutCalculation")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                  <span>{ct("speakNegativelyAboutCompetitors")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                  <span>{ct("interruptTheClient")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                  <span>{ct("leaveVoicemailsWithoutCallbackTime")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Handling Difficult Conversations */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" />
          {ct("handlingDifficultConversations")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct("angryClient")} icon={AlertTriangle} variant="warning">
            <ol className="space-y-2 list-decimal list-inside">
              <li><strong>{ct("listen")}</strong> - {ct("letThemExpressFrustration")}</li>
              <li><strong>{ct("acknowledge")}</strong> - {ct("iUnderstandThisIsFrustrating")}</li>
              <li><strong>{ct("apologize")}</strong> - {ct("evenIfNotYourFault")}</li>
              <li><strong>{ct("solve")}</strong> - {ct("offerConcreteSolutions")}</li>
              <li><strong>{ct("followUp")}</strong> - {ct("ensureResolutionSatisfied")}</li>
            </ol>
          </InfoCard>
          <InfoCard title={ct("priceNegotiation")} icon={Users} variant="info">
            <ol className="space-y-2 list-decimal list-inside">
              <li><strong>{ct("knowYourFloor")}</strong> - {ct("minimumAcceptableRate")}</li>
              <li><strong>{ct("addValue")}</strong> - {ct("highlightServiceQuality")}</li>
              <li><strong>{ct("counterOffer")}</strong> - {ct("neverAcceptFirstLowball")}</li>
              <li><strong>{ct("walkAway")}</strong> - {ct("ifRateIsUnprofitable")}</li>
              <li><strong>{ct("document")}</strong> - {ct("confirmAgreedRateInWriting")}</li>
            </ol>
          </InfoCard>
        </div>
      </section>

      {/* Response Time Standards */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Clock className="w-6 h-6 text-primary" />
          {ct("responseTimeStandards")}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">{ct("requestType")}</th>
                <th className="p-3 text-left border border-border">{ct("targetResponse")}</th>
                <th className="p-3 text-left border border-border">{ct("maximum")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border">{ct("urgentSpotQuote")}</td>
                <td className="p-3 border border-border text-success font-semibold">{ct("fifteenMinutes")}</td>
                <td className="p-3 border border-border">{ct("thirtyMinutes")}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border">{ct("standardQuoteRequest")}</td>
                <td className="p-3 border border-border text-success font-semibold">{ct("oneHour")}</td>
                <td className="p-3 border border-border">{ct("fourHours")}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">{ct("statusUpdateRequest")}</td>
                <td className="p-3 border border-border text-success font-semibold">{ct("thirtyMinutes")}</td>
                <td className="p-3 border border-border">{ct("oneHour")}</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border">{ct("complaintIssue")}</td>
                <td className="p-3 border border-border text-warning font-semibold">{ct("immediate")}</td>
                <td className="p-3 border border-border">{ct("fifteenMinutes")}</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">{ct("generalInquiry")}</td>
                <td className="p-3 border border-border text-info font-semibold">{ct("sameDay")}</td>
                <td className="p-3 border border-border">{ct("twentyFourHours")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Client Relationship Building */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" />
          {ct("buildingLongTermRelationships")}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{ct("reliability")}</h3>
              <p className="text-sm text-muted-foreground">{ct("reliabilityDesc")}</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-info/10 flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-8 h-8 text-info" />
              </div>
              <h3 className="font-semibold mb-2">{ct("proactiveUpdates")}</h3>
              <p className="text-sm text-muted-foreground">{ct("proactiveUpdatesDesc")}</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-semibold mb-2">{ct("personalTouch")}</h3>
              <p className="text-sm text-muted-foreground">{ct("personalTouchDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="communication" />

      {/* Quiz */}
      {quizzes.communication && (
        <Quiz title={ct("quizTitle")} questions={quizzes.communication} chapterId="communication" />
      )}
    </div>
  );
}
