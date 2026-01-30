import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { quizzes } from "@/data/quizData";
import { FileText, Truck, Globe, CheckCircle, AlertTriangle, Package, Shield, Stamp } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function DocumentsChapter() {
  const { ct } = useChapterTranslation('documents');

  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={FileText}
        variant="documents"
      />

      {/* CMR Consignment Note */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          {ct('cmrConsignmentNote')}
        </h2>
        <InfoCard title={ct('mostImportantDocument')} icon={FileText} variant="highlight">
          <p className="mb-4">
            {ct('cmrDescription')}
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">{ct('fourCopiesRequired')}</h4>
              <ul className="text-sm space-y-1">
                <li><strong>{ct('copy1Red')}</strong> {ct('sender')}</li>
                <li><strong>{ct('copy2Blue')}</strong> {ct('consignee')}</li>
                <li><strong>{ct('copy3Green')}</strong> {ct('carrier')}</li>
                <li><strong>{ct('copy4Black')}</strong> {ct('forAdministration')}</li>
              </ul>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">{ct('keyFunctions')}</h4>
              <ul className="text-sm space-y-1">
                <li>• {ct('proofOfContract')}</li>
                <li>• {ct('receiptForGoods')}</li>
                <li>• {ct('proofOfDelivery')}</li>
                <li>• {ct('basisForClaims')}</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* CMR Fields Explained */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-primary" />
          {ct('cmrFieldsCheck')}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-3 text-left border border-border">{ct('field')}</th>
                  <th className="p-3 text-left border border-border">{ct('content')}</th>
                  <th className="p-3 text-left border border-border">{ct('critical')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-border font-mono text-sm">{ct('box1')}</td>
                  <td className="p-3 border border-border">{ct('senderNameAddress')}</td>
                  <td className="p-3 border border-border text-success">✓ {ct('yes')}</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 border border-border font-mono text-sm">{ct('box2')}</td>
                  <td className="p-3 border border-border">{ct('consigneeNameAddress')}</td>
                  <td className="p-3 border border-border text-success">✓ {ct('yes')}</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-mono text-sm">{ct('box3')}</td>
                  <td className="p-3 border border-border">{ct('placeOfDelivery')}</td>
                  <td className="p-3 border border-border text-success">✓ {ct('yes')}</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 border border-border font-mono text-sm">{ct('box4')}</td>
                  <td className="p-3 border border-border">{ct('placeDateLoading')}</td>
                  <td className="p-3 border border-border text-success">✓ {ct('yes')}</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-mono text-sm">{ct('box6to9')}</td>
                  <td className="p-3 border border-border">{ct('goodsDescription')}</td>
                  <td className="p-3 border border-border text-success">✓ {ct('yes')}</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 border border-border font-mono text-sm">{ct('box13')}</td>
                  <td className="p-3 border border-border">{ct('senderInstructions')}</td>
                  <td className="p-3 border border-border text-warning">⚠️ {ct('whenApplicable')}</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-mono text-sm">{ct('box16')}</td>
                  <td className="p-3 border border-border">{ct('carrierNameAddress')}</td>
                  <td className="p-3 border border-border text-success">✓ {ct('yes')}</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 border border-border font-mono text-sm">{ct('box18')}</td>
                  <td className="p-3 border border-border">{ct('reservationsLoading')}</td>
                  <td className="p-3 border border-border text-destructive">⚠️ {ct('criticalForClaims')}</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-mono text-sm">{ct('box22')}</td>
                  <td className="p-3 border border-border">{ct('senderSignature')}</td>
                  <td className="p-3 border border-border text-success">✓ {ct('yes')}</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 border border-border font-mono text-sm">{ct('box23')}</td>
                  <td className="p-3 border border-border">{ct('carrierSignatureDate')}</td>
                  <td className="p-3 border border-border text-success">✓ {ct('yes')}</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-mono text-sm">{ct('box24')}</td>
                  <td className="p-3 border border-border">{ct('consigneeSignatureDate')}</td>
                  <td className="p-3 border border-border text-destructive">⚠️ {ct('criticalPOD')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CMR Reservations */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" />
          {ct('cmrReservations')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct('atLoadingBox18')} icon={Package} variant="warning">
            <p className="mb-2 font-semibold text-foreground">{ct('driverMustNote')}</p>
            <ul className="space-y-1">
              <li>• "{ct('goodsAlreadyDamaged')}"</li>
              <li>• "{ct('unableToVerifyQuantity')}"</li>
              <li>• "{ct('packagingDamaged')}"</li>
              <li>• "{ct('loadedBySender')}"</li>
              <li>• "{ct('cannotVerifyWeight')}"</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct('atDeliveryBox24')} icon={Truck} variant="warning">
            <p className="mb-2 font-semibold text-foreground">{ct('receiverMustNote')}</p>
            <ul className="space-y-1">
              <li>• "{ct('palletsDamaged')}"</li>
              <li>• "{ct('boxMissing')}"</li>
              <li>• "{ct('sealBroken')}"</li>
              <li>• "{ct('temperatureExceeded')}"</li>
              <li>• "{ct('deliveryLate')}"</li>
            </ul>
          </InfoCard>
        </div>
        <div className="mt-4 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
          <p className="text-sm font-medium text-destructive flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            {ct('cleanCmrWarning')}
          </p>
        </div>
      </section>

      {/* Customs Documents */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Globe className="w-6 h-6 text-primary" />
          {ct('customsDocuments')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct('t1TransitDocument')} icon={Stamp} variant="info">
            <p className="mb-3">{ct('t1Description')}</p>
            <ul className="space-y-1 text-sm">
              <li><strong>{ct('purpose')}</strong> {ct('suspendDuties')}</li>
              <li><strong>{ct('validity')}</strong> {ct('setByDeparture')}</li>
              <li><strong>{ct('guarantee')}</strong> {ct('bankGuarantee')}</li>
              <li><strong>{ct('discharge')}</strong> {ct('presentAtDestination')}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct('t2TransitDocument')} icon={Stamp} variant="info">
            <p className="mb-3">{ct('t2Description')}</p>
            <ul className="space-y-1 text-sm">
              <li><strong>{ct('example')}</strong> {ct('germanyAustriaSwitzerland')}</li>
              <li><strong>{ct('purpose')}</strong> {ct('proveEuStatus')}</li>
              <li><strong>{ct('simpler')}</strong> {ct('lowerGuarantee')}</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Export/Import Documents */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Globe className="w-6 h-6 text-primary" />
          {ct('exportImportDocuments')}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-primary flex items-center gap-2">
                <FileText className="w-4 h-4" />
                {ct('commercialDocuments')}
              </h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct('commercialInvoice')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct('packingList')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct('certificateOfOrigin')}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-info flex items-center gap-2">
                <Stamp className="w-4 h-4" />
                {ct('customsForms')}
              </h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct('exportDeclaration')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct('importDeclaration')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>{ct('aeoCertification')}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-warning flex items-center gap-2">
                <Shield className="w-4 h-4" />
                {ct('specialDocuments')}
              </h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                  <span>{ct('phytosanitaryCertificate')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                  <span>{ct('veterinaryCertificate')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                  <span>{ct('citesPermits')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* POD Best Practices */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-primary" />
          {ct('podBestPractices')}
        </h2>
        <InfoCard title={ct('gettingValidPod')} icon={CheckCircle} variant="success">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-success">{ct('mustHave')}</h4>
              <ul className="space-y-1 text-sm">
                <li>✓ {ct('receiverSignature')}</li>
                <li>✓ {ct('dateTimeDelivery')}</li>
                <li>✓ {ct('companyStamp')}</li>
                <li>✓ {ct('nameOfSignatory')}</li>
                <li>✓ {ct('reservationsNotedClearly')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-destructive">{ct('neverAccept')}</h4>
              <ul className="space-y-1 text-sm">
                <li>✗ {ct('unsignedCmr')}</li>
                <li>✗ {ct('missingDeliveryDate')}</li>
                <li>✗ {ct('illegibleSignature')}</li>
                <li>✗ {ct('subjectToInspection')}</li>
                <li>✗ {ct('partialDelivery')}</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Document Checklist */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-primary" />
          {ct('preTransportChecklist')}
        </h2>
        <div className="bg-muted/30 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              ct('cmrCompleted'),
              ct('senderConsigneeVerified'),
              ct('goodsMatchInvoice'),
              ct('weightPackageConfirmed'),
              ct('specialInstructionsBox13'),
              ct('driverHasCopy'),
              ct('t1t2IfCrossing'),
              ct('adrDocuments'),
              ct('temperatureRecords'),
              ct('photosAtLoading')
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="documents" />

      {/* Quiz */}
      {quizzes.documents && (
        <Quiz title={ct('quizTitle')} questions={quizzes.documents} chapterId="documents" />
      )}
    </div>
  );
}
