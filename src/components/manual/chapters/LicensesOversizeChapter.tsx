import { 
  FileText, Award, Shield, AlertTriangle, Truck, Scale, Route, 
  CheckCircle2, Clock, Euro, Globe, Building2, Phone, MapPin,
  FileCheck, Users, Ruler, Weight, Calendar, Info, X, Lightbulb,
  ArrowRight, Timer, Zap, Target, Calculator
} from "lucide-react";
import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Checklist } from "../Checklist";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";

export function LicensesOversizeChapter() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="hero-section text-primary-foreground">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <p className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider">Capitolul 40</p>
              <h1 className="text-4xl md:text-5xl font-bold font-display">Licențe & Transport Agabaritic</h1>
            </div>
          </div>
          <p className="text-xl text-primary-foreground/90 max-w-3xl leading-relaxed">
            Ghid complet pentru licențele de transport, autorizații speciale și organizarea transporturilor 
            de mărfuri agabaritice în Europa. Cunoașterea reglementărilor este esențială pentru operațiuni legale și sigure.
          </p>
        </div>
      </div>

      {/* Section 1: Introduction to Transport Licenses */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-7 h-7 text-primary" />
          Introducere în Licențele de Transport
        </h2>
        
        <div className="info-card mb-6">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Operarea activităților de transport rutier de marfă în Uniunea Europeană necesită obținerea unor 
            licențe și autorizații specifice. Aceste documente demonstrează capacitatea profesională, financiară 
            și de onorabilitate a operatorului de transport, asigurând un nivel ridicat de siguranță și 
            profesionalism în industrie.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-muted/50 rounded-xl text-center">
              <p className="text-3xl font-bold text-primary">3</p>
              <p className="text-sm text-muted-foreground">Cerințe de Bază</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-xl text-center">
              <p className="text-3xl font-bold text-primary">27</p>
              <p className="text-sm text-muted-foreground">State Membre UE</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-xl text-center">
              <p className="text-3xl font-bold text-primary">5 ani</p>
              <p className="text-sm text-muted-foreground">Valabilitate Licență</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard title="Cadrul Legal European" icon={Globe} variant="info">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                <span><strong>Regulamentul (CE) 1071/2009</strong> - Condiții pentru exercitarea profesiei de operator de transport</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                <span><strong>Regulamentul (CE) 1072/2009</strong> - Accesul pe piața transportului rutier de mărfuri</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                <span><strong>Pachetul de Mobilitate 2020</strong> - Actualizări privind cabotajul și detașarea</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                <span><strong>Directiva 96/53/CE</strong> - Dimensiuni și greutăți maxime</span>
              </li>
            </ul>
          </InfoCard>

          <InfoCard title="De Ce Sunt Importante Licențele?" icon={Shield} variant="highlight">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Garantează competența profesională a operatorului</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Asigură capacitatea financiară pentru acoperirea daunelor</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Verifică onorabilitatea și antecedentele</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Permite operarea legală pe teritoriul UE</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Obligatorie pentru contracte cu clienți mari</span>
              </li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Section 2: Types of Transport Licenses */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <Award className="w-7 h-7 text-primary" />
          Tipuri de Licențe de Transport
        </h2>

        <DataTable
          headers={["Tip Licență", "Descriere", "Acoperire", "Valabilitate", "Cerințe Speciale"]}
          rows={[
            [
              "Licență Comunitară",
              "Permite transport internațional în UE/EEA",
              "Toate statele membre UE + Norvegia, Islanda, Liechtenstein",
              "5 ani",
              "CPC Manager, Capacitate Financiară, Sediu Real"
            ],
            [
              "Licență Națională",
              "Transport rutier doar pe teritoriul național",
              "Țara emitentă",
              "5 ani",
              "Cerințe similare, domeniu limitat"
            ],
            [
              "Copii Conforme",
              "Documente pentru fiecare vehicul din flotă",
              "Aceleași rute ca licența de bază",
              "Durată licență principală",
              "Una per vehicul > 3.5t"
            ],
            [
              "Licență LTI (Vehicule Ușoare)",
              "Vehicule 2.5t - 3.5t GVW",
              "Conform regulamentelor din 2022",
              "5 ani",
              "Cerințe reduse de capacitate financiară"
            ],
            [
              "Autorizații CEMT",
              "Transport în țări non-UE (contingente limitate)",
              "Turcia, Rusia, țări Balcani",
              "Anual (cu renovare)",
              "Alocare prin autoritate națională"
            ],
            [
              "Autorizații Bilaterale",
              "Acorduri specifice între două țări",
              "Conform acordului bilateral",
              "Variabil",
              "Solicitate pentru destinații specifice"
            ],
          ]}
        />

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <InfoCard title="Licența Comunitară - Elementele Cheie" icon={FileCheck} variant="default">
            <div className="space-y-4">
              <p className="text-sm">
                Licența Comunitară este documentul fundamental pentru orice operator de transport rutier 
                internațional. Fără ea, nu puteți efectua transporturi comerciale între statele membre.
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Informații pe Licență:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Numele și adresa operatorului</li>
                  <li>• Numărul licenței și țara emitentă</li>
                  <li>• Data emiterii și expirării</li>
                  <li>• Ștampila și semnătura autorității</li>
                  <li>• Tipul vehiculelor autorizate</li>
                </ul>
              </div>
            </div>
          </InfoCard>

          <InfoCard title="Copiile Conforme" icon={FileText} variant="default">
            <div className="space-y-4">
              <p className="text-sm">
                Pentru fiecare vehicul din flotă care depășește 3.5 tone GVW, este necesară o copie 
                conformă a licenței comunitare care trebuie ținută în vehicul permanent.
              </p>
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-warning">Atenție!</p>
                    <p className="text-muted-foreground">
                      Lipsa copiei conforme în vehicul poate duce la amenzi de 2.000-10.000€ 
                      și imobilizarea vehiculului până la prezentarea documentului.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </InfoCard>
        </div>
      </section>

      {/* Section 3: Requirements for Obtaining Transport License */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-7 h-7 text-primary" />
          Cerințe pentru Obținerea Licenței
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="info-card">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-3">1. Competența Profesională</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Manager de transport certificat (CPC)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Examen CPC promovat sau diplomă recunoscută</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Rezidență în statul membru UE</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Legătură reală cu operațiunile companiei</span>
              </li>
            </ul>
          </div>

          <div className="info-card">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4">
              <Euro className="w-6 h-6 text-success" />
            </div>
            <h3 className="font-semibold text-lg mb-3">2. Capacitatea Financiară</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span><strong>9.000€</strong> pentru primul vehicul (&gt;3.5t)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span><strong>5.000€</strong> pentru fiecare vehicul adițional</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Demonstrat prin garanție bancară sau asigurare</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Pentru 2.5-3.5t: 1.800€/900€</span>
              </li>
            </ul>
          </div>

          <div className="info-card">
            <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-info" />
            </div>
            <h3 className="font-semibold text-lg mb-3">3. Onorabilitatea</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Fără condamnări penale grave</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Fără încălcări grave ale legislației transport</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Cazier judiciar curat</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Verificat prin sistemul ERRU</span>
              </li>
            </ul>
          </div>
        </div>

        <InfoCard title="Sediul Real și Stabil" icon={Building2} variant="info">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Cerințe pentru Sediu:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Spații pentru păstrarea documentelor comerciale și contabile</li>
                <li>• Echipamente și dispozitive tehnice de comunicare</li>
                <li>• Acces la parcări pentru vehicule</li>
                <li>• Facilități de întreținere (proprii sau contractate)</li>
                <li>• Adresă stabilă și verificabilă</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Documente Necesare:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Contract de închiriere sau act de proprietate</li>
                <li>• Dovada plății utilităților</li>
                <li>• Contract pentru servicii de întreținere</li>
                <li>• Fotografii ale sediului și facilităților</li>
                <li>• Autorizații de funcționare locale</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Section 4: Certificate of Professional Competence (CPC) */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <Award className="w-7 h-7 text-primary" />
          Certificatul de Competență Profesională (CPC)
        </h2>

        <div className="info-card mb-6">
          <p className="text-muted-foreground leading-relaxed">
            Certificatul de Competență Profesională (CPC) este documentul care atestă că managerul de 
            transport al unei întreprinderi posedă cunoștințele și competențele necesare pentru a conduce 
            activitățile de transport. Acest certificat se obține în urma promovării unui examen riguros.
          </p>
        </div>

        <DataTable
          headers={["Modul CPC", "Teme Acoperite", "Întrebări Examen", "Durată"]}
          rows={[
            ["Drept Civil", "Contracte, răspundere civilă, CMR, asigurări", "~25 întrebări", "1 oră"],
            ["Drept Comercial", "Societăți comerciale, contabilitate, fiscalitate", "~25 întrebări", "1 oră"],
            ["Drept Social", "Codul muncii, timp de lucru, salarizare, contracte", "~25 întrebări", "1 oră"],
            ["Drept Fiscal", "TVA, impozite, taxe vamale, accize", "~20 întrebări", "45 min"],
            ["Managementul Comercial și Financiar", "Prețuri, costuri, bugete, investiții", "~30 întrebări", "1.5 ore"],
            ["Accesul pe Piață", "Licențe, autorizații, cabotaj, CEMT", "~25 întrebări", "1 oră"],
            ["Standarde Tehnice", "Vehicule, echipamente, dimensiuni, greutăți", "~25 întrebări", "1 oră"],
            ["Siguranța Rutieră", "Conducere, accidente, ADR, cargo securing", "~25 întrebări", "1 oră"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <InfoCard title="Pregătirea pentru Examenul CPC" icon={FileText}>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                <span>Înscrierea la un curs autorizat (100-200 ore)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                <span>Studierea materialelor obligatorii (manual CPC)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                <span>Participarea la toate sesiunile de pregătire</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                <span>Rezolvarea testelor de practică</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                <span>Susținerea examenului oficial</span>
              </li>
            </ul>
          </InfoCard>

          <InfoCard title="Statistici Examen CPC" icon={Target} variant="highlight">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-primary">60%</p>
                <p className="text-xs text-muted-foreground">Rata de promovare medie</p>
              </div>
              <div className="bg-card rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-primary">200</p>
                <p className="text-xs text-muted-foreground">Întrebări în examen</p>
              </div>
              <div className="bg-card rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-primary">4h</p>
                <p className="text-xs text-muted-foreground">Durată totală examen</p>
              </div>
              <div className="bg-card rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-primary">70%</p>
                <p className="text-xs text-muted-foreground">Scor minim promovare</p>
              </div>
            </div>
          </InfoCard>
        </div>
      </section>

      {/* Section 5: Cabotage Rules */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <Route className="w-7 h-7 text-primary" />
          Regulile Cabotajului în UE
        </h2>

        <div className="info-card mb-6">
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Cabotajul</strong> reprezintă transportul național de mărfuri efectuat de un operator 
            străin pe teritoriul altui stat membru. Regulamentul (CE) 1072/2009, modificat prin Pachetul 
            de Mobilitate 2020, stabilește reguli stricte pentru această practică.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="info-card border-2 border-primary/20">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              Reguli Actuale (2024)
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-medium">Maximum 3 Operațiuni de Cabotaj</p>
                  <p className="text-muted-foreground">În termen de 7 zile de la ultima descărcare internațională</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">4</div>
                <div>
                  <p className="font-medium">Cooling-off Period de 4 Zile</p>
                  <p className="text-muted-foreground">Înainte de noi operațiuni de cabotaj în același stat</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-medium">Transport Internațional Prealabil</p>
                  <p className="text-muted-foreground">Obligatoriu înainte de cabotaj în orice stat</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="info-card border-2 border-destructive/20">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <X className="w-5 h-5 text-destructive" />
              Sancțiuni pentru Încălcări
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Amenzi 5.000 - 25.000€</p>
                  <p className="text-muted-foreground">Variază în funcție de stat și gravitate</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Imobilizarea Vehiculului</p>
                  <p className="text-muted-foreground">Până la plata amenzii sau clarificare legală</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Pierderea Licenței</p>
                  <p className="text-muted-foreground">Pentru încălcări repetate și grave</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <InfoCard title="Documentația Necesară pentru Cabotaj" icon={FileText} variant="info">
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>CMR pentru transportul internațional de intrare</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>CMR-uri pentru fiecare operațiune de cabotaj</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Copie conformă a licenței comunitare</span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Înregistrări tahograf pentru perioada relevantă</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Formular A1 (pentru detașare în anumite state)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Ordine de transport pentru toate încărcăturile</span>
              </li>
            </ul>
          </div>
        </InfoCard>
      </section>

      {/* Section 6: Oversize and Heavy Transport */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <Truck className="w-7 h-7 text-primary" />
          Transportul Agabaritic (Oversize/Heavy)
        </h2>

        <div className="info-card mb-6">
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Transportul agabaritic</strong> (denumit și transport exceptional, oversize sau heavy 
            transport) se referă la mărfuri care depășesc dimensiunile sau greutățile legale standard pentru 
            vehiculele rutiere. Aceste transporturi necesită autorizații speciale și planificare detaliată.
          </p>
          <div className="bg-warning/10 border border-warning/20 rounded-xl p-4 mt-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0" />
              <div>
                <p className="font-semibold text-warning">Definiție Legală</p>
                <p className="text-sm text-muted-foreground">
                  Un transport este considerat agabaritic când depășește: lungimea de 16.5m, lățimea de 2.55m, 
                  înălțimea de 4m, sau greutatea totală de 40t (sau limita națională aplicabilă).
                </p>
              </div>
            </div>
          </div>
        </div>

        <DataTable
          headers={["Categorie", "Dimensiuni Standard", "Depășire Agabaritică", "Cerințe Speciale"]}
          rows={[
            ["Lungime", "Max. 16.50m (ansamblu)", "> 16.50m până la 40m+", "Autorizație specială, pilot cars"],
            ["Lățime", "Max. 2.55m (2.60m reefer)", "> 2.55m până la 6m+", "Escortă, ore restricționate"],
            ["Înălțime", "Max. 4.00m (4.30m unele țări)", "> 4.00m până la 5m+", "Studiu rută, verificare poduri"],
            ["Greutate Totală", "Max. 40t (44t unele rute)", "> 40t până la 500t+", "Platforme speciale, axe multiple"],
            ["Greutate pe Axă", "Max. 10-11.5t/axă", "Depășiri autorizate", "Distribuție controlată"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <InfoCard title="Clasificarea Transporturilor Agabaritice" icon={Scale}>
            <div className="space-y-4">
              <div className="p-3 bg-success/10 rounded-lg">
                <p className="font-semibold text-success text-sm">Categoria I (Ușor)</p>
                <p className="text-xs text-muted-foreground">Depășiri minore: lățime până la 3m, lungime până la 22m</p>
              </div>
              <div className="p-3 bg-warning/10 rounded-lg">
                <p className="font-semibold text-warning text-sm">Categoria II (Mediu)</p>
                <p className="text-xs text-muted-foreground">Lățime 3-3.5m, lungime 22-30m, greutate 40-80t</p>
              </div>
              <div className="p-3 bg-destructive/10 rounded-lg">
                <p className="font-semibold text-destructive text-sm">Categoria III (Greu)</p>
                <p className="text-xs text-muted-foreground">Depășiri majore: lățime {'>'} 3.5m, lungime {'>'} 30m, greutate {'>'} 80t</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <p className="font-semibold text-primary text-sm">Mega Transport</p>
                <p className="text-xs text-muted-foreground">Mărfuri extrem de grele (100+ tone) sau lungi (50+ metri)</p>
              </div>
            </div>
          </InfoCard>

          <InfoCard title="Tipuri de Mărfuri Agabaritice" icon={Truck}>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1" />
                <span><strong>Utilaje industriale:</strong> turbine, transformatoare, reactoare</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1" />
                <span><strong>Construcții modulare:</strong> case prefabricate, containere speciale</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1" />
                <span><strong>Echipamente agricole:</strong> combine, tractoare mari</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1" />
                <span><strong>Echipamente eoliene:</strong> pale, turnuri, nacele</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1" />
                <span><strong>Vehicule speciale:</strong> macarale, excavatoare, buldozere</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1" />
                <span><strong>Construcții metalice:</strong> grinzi, structuri prefabricate</span>
              </li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Section 7: Oversize Transport Permits */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <FileCheck className="w-7 h-7 text-primary" />
          Autorizații pentru Transport Agabaritic
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <InfoCard title="Procesul de Autorizare" icon={Route}>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-medium text-sm">Studiu de Rută</p>
                  <p className="text-xs text-muted-foreground">Identificarea obstacolelor: poduri, tuneluri, sensuri giratorii, cabluri</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-medium text-sm">Cerere Autorizație</p>
                  <p className="text-xs text-muted-foreground">Depunere la autoritatea competentă din fiecare țară de tranzit</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-medium text-sm">Verificare și Aprobare</p>
                  <p className="text-xs text-muted-foreground">Analiza tehnică, taxe, condiții speciale de circulație</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                <div>
                  <p className="font-medium text-sm">Coordonare Escortă</p>
                  <p className="text-xs text-muted-foreground">Pilot cars, poliție, însoțire specială după caz</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                <div>
                  <p className="font-medium text-sm">Executare Transport</p>
                  <p className="text-xs text-muted-foreground">Respectarea strictă a rutei și condițiilor autorizate</p>
                </div>
              </div>
            </div>
          </InfoCard>

          <InfoCard title="Documentație Necesară" icon={FileText}>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Cerere de autorizație (formular oficial)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Descriere detaliată a mărfii (dimensiuni, greutate)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Configurația vehiculului (axe, suspensie)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Traseu propus cu puncte de trecere</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Asigurare pentru transport special</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Certificat de conformitate vehicul</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Licență transport și copie conformă</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Dovadă plată taxe autorizație</span>
              </li>
            </ul>
          </InfoCard>
        </div>

        <DataTable
          headers={["Țară", "Autoritate Competentă", "Timp Procesare", "Taxe Orientative"]}
          rows={[
            ["Germania", "Landesstraßenbaubehörde (fiecare land)", "3-10 zile lucrătoare", "50-500€ per traseu"],
            ["Franța", "DREAL (Direcția Regională)", "5-15 zile lucrătoare", "30-400€ per traseu"],
            ["Italia", "ANAS sau provincii", "7-20 zile lucrătoare", "50-600€ per traseu"],
            ["Spania", "DGT sau Comunități Autonome", "5-15 zile lucrătoare", "40-350€ per traseu"],
            ["Polonia", "GITD (Inspectorat)", "5-14 zile lucrătoare", "100-800 PLN"],
            ["România", "CNAIR + consilii locale", "7-30 zile lucrătoare", "200-2000 RON"],
            ["Austria", "BH (Bezirkshauptmannschaft)", "5-10 zile lucrătoare", "50-400€ per traseu"],
          ]}
        />
      </section>

      {/* Section 8: Safety Requirements */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-7 h-7 text-primary" />
          Cerințe de Siguranță pentru Transport Agabaritic
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="info-card">
            <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-warning" />
            </div>
            <h3 className="font-semibold mb-3">Semnalizare Obligatorie</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Panouri "Transport Agabaritic" față/spate</li>
              <li>• Lumini galbene intermitente</li>
              <li>• Reflectoare laterale suplimentare</li>
              <li>• Panouri cu dimensiuni (L x l x H)</li>
              <li>• Bandă reflectorizantă roșu-alb</li>
            </ul>
          </div>

          <div className="info-card">
            <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-info" />
            </div>
            <h3 className="font-semibold mb-3">Vehicule de Escortă (Pilot Cars)</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Obligatorii peste anumite dimensiuni</li>
              <li>• Față și/sau spate în funcție de lățime</li>
              <li>• Echipament de semnalizare complet</li>
              <li>• Comunicație radio permanentă</li>
              <li>• Personal instruit și autorizat</li>
            </ul>
          </div>

          <div className="info-card">
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="font-semibold mb-3">Restricții Orare</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Interzis noaptea (22:00-06:00 de obicei)</li>
              <li>• Interzis în weekenduri și sărbători</li>
              <li>• Evitare ore de vârf în orașe</li>
              <li>• Ferestre orare specifice pe trasee</li>
              <li>• Condiții meteo restrictive</li>
            </ul>
          </div>
        </div>

        <InfoCard title="Cerințe pentru Șoferul de Transport Agabaritic" icon={Users} variant="info">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Calificări Necesare:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                  <span>Permis categorie CE (vehicule articulate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                  <span>Certificat CPC șofer (CAP) valabil</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                  <span>Experiență minimă (de obicei 3-5 ani)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                  <span>Instruire specifică transport special</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Responsabilități Speciale:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5" />
                  <span>Verificarea zilnică extinsă a vehiculului</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5" />
                  <span>Comunicare continuă cu echipa de escortă</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5" />
                  <span>Respectarea strictă a traseului autorizat</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5" />
                  <span>Raportarea imediată a oricăror probleme</span>
                </li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Section 9: Costs and Pricing */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <Euro className="w-7 h-7 text-primary" />
          Costuri Transport Agabaritic
        </h2>

        <DataTable
          headers={["Element Cost", "Descriere", "Valori Orientative"]}
          rows={[
            ["Autorizații transport", "Taxe guvernamentale per țară de tranzit", "50 - 2.000€ per țară"],
            ["Escortă pilot cars", "Vehicule de însoțire și personal", "200 - 500€ / 100km per vehicul"],
            ["Escortă poliție", "Obligatorie în anumite cazuri", "100 - 400€ / oră"],
            ["Închiriere platformă specială", "Remorcă cu axe multiple, extensibilă", "500 - 5.000€ / zi"],
            ["Studiu de rută", "Analiză tehnică și planificare", "500 - 3.000€"],
            ["Modificări temporare infrastructură", "Demontare semafoare, cabluri, etc.", "1.000 - 50.000€"],
            ["Asigurare suplimentară", "Acoperire riscuri transport special", "0.5 - 3% din valoarea mărfii"],
            ["Majorare preț km", "Cost suplimentar față de transport standard", "+50% până la +300%"],
          ]}
        />

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <InfoCard title="Exemplu Calcul Cost" icon={Calculator} variant="highlight">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-border pb-2">
                <span>Transport de bază (500 km × €3/km)</span>
                <span className="font-semibold">1.500€</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span>Autorizații (DE + PL + CZ)</span>
                <span className="font-semibold">450€</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span>Pilot car (500 km)</span>
                <span className="font-semibold">800€</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span>Platformă specială (3 zile)</span>
                <span className="font-semibold">1.200€</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span>Asigurare suplimentară</span>
                <span className="font-semibold">350€</span>
              </div>
              <div className="flex justify-between pt-2 text-base font-bold text-primary">
                <span>TOTAL ESTIMAT</span>
                <span>4.300€</span>
              </div>
            </div>
          </InfoCard>

          <InfoCard title="Factori de Preț" icon={Target}>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Ruler className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Dimensiunile mărfii</p>
                  <p>Cu cât este mai mare, cu atât cresc costurile exponențial</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Weight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Greutatea totală</p>
                  <p>Afectează tipul de platformă și cerințele de autorizare</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Distanța și țările de tranzit</p>
                  <p>Mai multe țări = mai multe autorizații și coordonare</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Urgența</p>
                  <p>Autorizațiile rapide costă semnificativ mai mult</p>
                </div>
              </li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Section 10: Checklists */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <FileCheck className="w-7 h-7 text-primary" />
          Checklist-uri Practice
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Checklist
            title="Verificare Licențe și Autorizații"
            items={[
              "Licența comunitară este valabilă",
              "Copii conforme pentru toate vehiculele peste 3.5t",
              "CPC Manager valid și înregistrat",
              "Capacitatea financiară demonstrată",
              "Asigurare RCA și CMR valabile",
              "Autorizații CEMT (dacă necesare)",
              "Înregistrare în sistemul ERRU",
              "Documente vehicul actualizate (ITP, RAR)",
            ]}
          />

          <Checklist
            title="Pregătire Transport Agabaritic"
            items={[
              "Dimensiuni și greutate exacte determinate",
              "Studiu de rută complet efectuat",
              "Autorizații obținute pentru toate țările",
              "Pilot cars și escortă coordonate",
              "Șofer calificat și instruit",
              "Echipament de semnalizare complet",
              "Asigurare suplimentară contractată",
              "Plan de urgență stabilit",
              "Comunicație radio verificată",
              "Meteo verificat pentru ziua transportului",
            ]}
          />
        </div>
      </section>

      {/* Section 11: Common Mistakes */}
      <section className="content-section">
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-7 h-7 text-primary" />
          Greșeli Frecvente și Cum să le Eviți
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-xl">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Expirarea licenței/copiilor conforme</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Implementați un sistem de alertă cu 60 de zile înainte de expirare.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-xl">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Cabotaj fără documentație completă</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Păstrați toate CMR-urile și verificați regulile fiecărei țări.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-xl">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Subestimarea dimensiunilor agabaritice</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Măsurați întotdeauna cu ambalaj și echipamente de fixare incluse.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-xl">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Timp insuficient pentru autorizații</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Începeți procesul cu minimum 3-4 săptămâni înainte de transport.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-xl">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Ignorarea restricțiilor orare</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Verificați ferestrele orare permise în autorizație pentru fiecare țară.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-xl">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Lipsa asigurării adecvate</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Verificați dacă polița acoperă explicit transportul special/agabaritic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      {quizzes["licenses-oversize"] && (
        <section className="content-section">
          <Quiz title="Test Licențe & Transport Agabaritic" questions={quizzes["licenses-oversize"]} chapterId="licenses-oversize" />
        </section>
      )}
    </div>
  );
}

