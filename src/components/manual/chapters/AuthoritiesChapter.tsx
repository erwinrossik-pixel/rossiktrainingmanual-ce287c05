import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { Checklist } from "../Checklist";
import { ChapterHero } from "../ChapterHero";
import { ChapterImage } from "../ChapterImage";
import { MultiModalContent } from "../MultiModalContent";
import { DataTable } from "../DataTable";
import { FlowDiagram, ProcessMap } from "../FlowDiagram";
import {
  Shield, FileText, AlertTriangle, CheckCircle, Users,
  Phone, Clock, Scale, Eye, Truck, BookOpen, Info, Book,
  MapPin, Euro, Building2, Clipboard, Target, MessageSquare,
  Globe, Timer, XCircle, Lightbulb, Zap
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import authoritiesControlImg from "@/assets/chapters/authorities-control.jpg";

export function AuthoritiesChapter() {
  const { ct } = useChapterTranslation('authorities');
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={Shield}
        variant="authorities"
      />

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="section-title mb-2">{ct('section1Title')}</h2>
            <p className="text-muted-foreground">{ct('intro')}</p>
          </div>
        </div>
      </div>

      {/* Control Authorities by Country */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Globe className="w-6 h-6 text-primary" />
          Autorități de Control în Europa
        </h2>
        <DataTable
          headers={["Țară", "Autoritate Principală", "Focus Control", "Amenzi Tipice"]}
          rows={[
            ["🇩🇪 Germania", "BAG (Bundesamt für Güterverkehr)", "Maut, Cabotaj, Timp conducere", "€100 - €15.000"],
            ["🇫🇷 Franța", "DREAL + Gendarmerie", "Eco-taxe, Ore odihnă, Salarii", "€135 - €30.000"],
            ["🇦🇹 Austria", "ASFINAG + Polizei", "Maut, Emisii, Marfă periculoasă", "€150 - €20.000"],
            ["🇮🇹 Italia", "Polizia Stradale", "Tahograf, Cabotaj, Greutăți", "€170 - €25.000"],
            ["🇪🇸 Spania", "Guardia Civil + DGT", "Timp conducere, ADR, Licențe", "€200 - €20.000"],
            ["🇵🇱 Polonia", "ITD (Inspektorat)", "Licențe, Timp conducere, Maut", "PLN 500 - 12.000"],
            ["🇳🇱 Olanda", "ILT + Belastingdienst", "Cabotaj, Emisii, Tahograf", "€100 - €10.000"],
            ["🇧🇪 Belgia", "SPF Mobilité", "Eco-taxe, Cabotaj, Salarii", "€55 - €15.000"],
          ]}
        />
      </section>

      {/* Types of Controls - Enhanced */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Eye className="w-6 h-6 text-primary" />
          {ct('section2Title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title="Control Rutier" icon={Truck} variant="info">
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Verificare documente șofer</li>
              <li>• Tahograf și timpi conducere</li>
              <li>• Stare tehnică vehicul</li>
              <li>• Greutate și dimensiuni</li>
              <li>• Durată: 15-45 minute</li>
            </ul>
          </InfoCard>
          <InfoCard title="Control la Sediu" icon={Building2} variant="warning">
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Audit documente companie</li>
              <li>• Descărcări tahograf 90 zile</li>
              <li>• Contracte și CMR-uri</li>
              <li>• Evidențe salariale</li>
              <li>• Durată: 2-8 ore</li>
            </ul>
          </InfoCard>
          <InfoCard title="Control Telematics" icon={Zap}>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Monitoring digital în timp real</li>
              <li>• Verificare pozitie GPS vs tahograf</li>
              <li>• Alertare automată autorități</li>
              <li>• Cross-check date UE</li>
              <li>• Durată: instantaneu</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Control Procedure Flowchart */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Clock className="w-6 h-6 text-primary" />
          Procedura Standard de Control
        </h2>
        <ProcessMap
          title="Etapele unui Control Rutier"
          steps={[
            { icon: "🚔", label: "Semnal Oprire", description: "Urmează indicațiile siguranței" },
            { icon: "🪪", label: "Documente", description: "Prezintă: permis, CMR, tahograf" },
            { icon: "🔍", label: "Verificare", description: "Inspectorii verifică totul" },
            { icon: "📝", label: "Proces-Verbal", description: "Semnezi doar ce înțelegi" },
            { icon: "✅", label: "Finalizare", description: "Primești copie documente" }
          ]}
        />
        <ChapterImage
          src={authoritiesControlImg}
          alt="Transport authorities conducting roadside control inspection"
          variant="float-right"
          className="mt-4"
        />
      </section>

      {/* Document Requirements Table */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          Documente Obligatorii la Control
        </h2>
        <DataTable
          headers={["Document", "Obligatoriu", "Valabil", "Copie Acceptată"]}
          rows={[
            ["Licența de transport", "✅ Da", "Anual", "❌ Numai original"],
            ["Copie conformă licență", "✅ Da", "5 ani", "✅ Da (autentificată)"],
            ["Cartea de identitate tahograf", "✅ Da", "5 ani", "❌ Numai original"],
            ["Permis de conducere", "✅ Da", "15 ani max", "❌ Numai original"],
            ["CMR (scrisoare transport)", "✅ Da", "Per transport", "✅ Da"],
            ["Atestare ADR (dacă e cazul)", "✅ Condițional", "5 ani", "❌ Numai original"],
            ["Descărcări tahograf 28 zile", "✅ Da", "Mobil/printat", "✅ Da (digital)"],
            ["Asigurare CMR", "✅ Da", "Anual", "✅ Da"],
          ]}
        />
      </section>

      {/* Fine Structure */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Euro className="w-6 h-6 text-primary" />
          Structura Amenzilor - Gravitate
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-success/10 border border-success/30 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-success">Minor</div>
            <div className="text-sm text-muted-foreground mt-2">€50 - €200</div>
            <div className="text-xs mt-2">Documente incomplete, erori administrative</div>
          </div>
          <div className="bg-info/10 border border-info/30 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-info">Ușoară</div>
            <div className="text-sm text-muted-foreground mt-2">€200 - €500</div>
            <div className="text-xs mt-2">Depășire ușoară timp conducere</div>
          </div>
          <div className="bg-warning/10 border border-warning/30 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-warning">Gravă</div>
            <div className="text-sm text-muted-foreground mt-2">€500 - €3.000</div>
            <div className="text-xs mt-2">Manipulare tahograf, cabotaj ilegal</div>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-destructive">F. Gravă</div>
            <div className="text-sm text-muted-foreground mt-2">€3.000 - €30.000</div>
            <div className="text-xs mt-2">Fără licență, falsificare, cabotaj repetat</div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section>
        <div className="bg-gradient-to-br from-info/10 to-primary/10 border border-info/30 rounded-xl p-6">
          <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-info" />
            📋 Studiu de Caz: Control BAG în Germania
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Situația:</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Un camion RO este oprit pe A3 de BAG. Șoferul nu vorbește germană, documentele sunt parțial în română.
              </p>
              <h4 className="font-semibold mb-2">Ce a mers bine:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✅ CMR-ul era completat corect în 3 limbi</li>
                <li>✅ Cardul tahograf era valid și descărcat</li>
                <li>✅ Avea număr WhatsApp dispatcher disponibil</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Probleme identificate:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>⚠️ Printout tahograf 28 zile - lipsă 3 zile</li>
                <li>⚠️ Licența transport expiră în 2 săptămâni</li>
              </ul>
              <h4 className="font-semibold mb-2 mt-4">Rezultat:</h4>
              <p className="text-sm text-muted-foreground">
                Amendă €150 pentru printout incomplet. Controlul a durat 35 minute.
                <strong> Lecție:</strong> Verifică întotdeauna printout-ul înainte de plecare!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rights during Control */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Scale className="w-6 h-6 text-primary" />
          {ct('section5Title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="Drepturile Tale" variant="success" icon={CheckCircle}>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Dreptul de a cere legitimație inspector</li>
              <li>✓ Dreptul la interpret (unele țări)</li>
              <li>✓ Dreptul de a nu semna ce nu înțelegi</li>
              <li>✓ Dreptul la copie proces-verbal</li>
              <li>✓ Dreptul de a contesta în 15-30 zile</li>
              <li>✓ Dreptul de a suna la dispatcher</li>
            </ul>
          </InfoCard>
          <InfoCard title="Obligațiile Tale" variant="warning" icon={AlertTriangle}>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>⚠️ Oprește imediat la semnalul autorităților</li>
              <li>⚠️ Prezintă toate documentele solicitate</li>
              <li>⚠️ Permite accesul la vehicul și marfă</li>
              <li>⚠️ Răspunde sincer la întrebări</li>
              <li>⚠️ Nu opune rezistență fizică</li>
              <li>⚠️ Achită amenda dacă nu contești</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Pre-Control Checklist */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Clipboard className="w-6 h-6 text-primary" />
          Checklist Pre-Plecare (Evitare Amenzi)
        </h2>
        <Checklist
          items={[
            "Licență transport + copie conformă valabile",
            "Card tahograf valid + descărcat la 28 zile",
            "Printout tahograf ultimele 28 zile în cabină",
            "CMR completat corect (toate rubricile)",
            "Permis de conducere categoria corectă",
            "Asigurare CMR valabilă",
            "Certificat ADR dacă transporti marfă periculoasă",
            "Număr telefon dispatcher 24/7",
            "Aplicație traducere instalată (Google Translate)",
            "Cash pentru amenzi mici (unele țări cer plata pe loc)"
          ]}
        />
      </section>

      {/* Emergency Contacts */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Phone className="w-6 h-6 text-primary" />
          Numere Urgență și Autorități
        </h2>
        <DataTable
          headers={["Țară", "Urgență", "Autoritate Transport", "Ambasada RO"]}
          rows={[
            ["Germania", "112", "+49 221 5776 0 (BAG)", "+49 30 21239 202"],
            ["Franța", "112", "+33 1 40 81 21 22", "+33 1 47 05 10 46"],
            ["Italia", "112 / 113", "+39 06 4477 4900", "+39 06 808 6802"],
            ["Spania", "112", "+34 900 123 505", "+34 91 435 2297"],
            ["Austria", "112 / 133", "+43 1 71100 0", "+43 1 505 2349"],
            ["Olanda", "112", "+31 70 456 7890", "+31 70 354 3574"],
          ]}
        />
      </section>

      {/* Best Practices & Common Mistakes */}
      <section>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-success/10 border border-success/30 rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-success">
              <CheckCircle className="w-5 h-5" />
              {ct('bestPracticesTitle')}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct('bestPractice1')}</li>
              <li>• {ct('bestPractice2')}</li>
              <li>• {ct('bestPractice3')}</li>
              <li>• Fii calm și politicos cu inspectorii</li>
              <li>• Ține documentele într-un dosar organizat</li>
              <li>• Fotografiază orice document semnat</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-destructive">
              <XCircle className="w-5 h-5" />
              {ct('commonMistakesTitle')}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct('commonMistake1')}</li>
              <li>• {ct('commonMistake2')}</li>
              <li>• {ct('commonMistake3')}</li>
              <li>• Semnezi documente fără să le citești</li>
              <li>• Încerci să mituiești (ilegal în UE!)</li>
              <li>• Devii agresiv sau necooperant</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Book className="w-6 h-6 text-primary" />
          {ct('glossaryTitle')}
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div key={num} className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
              <dt className="font-semibold text-primary mb-1">
                {ct(`glossaryTerm${num}`)}
              </dt>
              <dd className="text-sm text-muted-foreground">
                {ct(`glossaryDef${num}`)}
              </dd>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="authorities" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="authorities" />
    </div>
  );
}
