import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { ChapterHero } from "../ChapterHero";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { DataTable } from "../DataTable";
import { Checklist } from "../Checklist";
import { ProcessMap } from "../FlowDiagram";
import {
  Leaf, Globe, Calculator, FileText, Award, TrendingDown, Fuel, 
  BarChart3, Users, Target, CheckCircle, AlertTriangle, Book,
  Zap, Euro, Truck, Factory, Lightbulb, TreePine
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import sustainabilityImg from "@/assets/chapters/sustainability-green-logistics.jpg";

export function SustainabilityChapter() {
  const { ct } = useChapterTranslation('sustainability');
  
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      <ChapterHero
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={Leaf}
        variant="sustainability"
      />

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="section-title mb-1.5 sm:mb-2">{ct('section1Title')}</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('intro')}</p>
          </div>
        </div>
      </div>

      {/* EU Green Deal Impact */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>EU Green Deal & Transport</span>
        </h2>
        <DataTable
          headers={["Obiectiv", "Deadline", "Impact Transport", "Acțiune Necesară"]}
          rows={[
            ["Reducere 55% emisii", "2030", "Flotă Euro 6d/Electric", "Înlocuire vehicule vechi"],
            ["Net Zero Carbon", "2050", "100% zero emisii", "Tranziție completă"],
            ["ETS Transport Rutier", "2027", "Taxă CO2 pe combustibil", "Buget extra pentru fuel"],
            ["CSRD Reporting", "2024+", "Raportare obligatorie", "Sistem tracking emisii"],
            ["Clean Vehicle Directive", "2025", "Min 45% vehicule curate", "Licitații publice verzi"],
          ]}
        />
      </section>

      {/* Carbon Footprint Calculator */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section2Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-xl p-5 text-center">
            <Truck className="w-8 h-8 text-warning mx-auto mb-3" />
            <div className="text-2xl font-bold text-warning">62g CO2/tkm</div>
            <div className="text-sm text-muted-foreground mt-1">Camion Diesel Euro 6</div>
            <div className="text-xs text-muted-foreground">Standard industrie</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 text-center">
            <Fuel className="w-8 h-8 text-info mx-auto mb-3" />
            <div className="text-2xl font-bold text-info">45g CO2/tkm</div>
            <div className="text-sm text-muted-foreground mt-1">Camion LNG/CNG</div>
            <div className="text-xs text-muted-foreground">-27% vs Diesel</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 text-center">
            <Zap className="w-8 h-8 text-success mx-auto mb-3" />
            <div className="text-2xl font-bold text-success">0g CO2/tkm</div>
            <div className="text-sm text-muted-foreground mt-1">Camion Electric</div>
            <div className="text-xs text-muted-foreground">Zero emisii directe</div>
          </div>
        </div>
        <div className="mt-4 p-4 bg-info/10 border border-info/30 rounded-xl">
          <p className="text-sm text-muted-foreground">
            <strong>Formula calcul:</strong> Emisii CO2 = Distanță (km) × Greutate (tone) × Factor emisie (g CO2/tkm)
            <br />
            Exemplu: 1000 km × 20t × 62g = 1.240 kg CO2 pentru transport Euro 6
          </p>
        </div>
      </section>

      {/* Emission Reduction Strategies */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>Strategii Reducere Emisii</span>
        </h2>
        <ProcessMap
          title="Pași pentru Transport Verde"
          phases={[
            { name: "Măsurare", color: "info", steps: ["Calculează carbon footprint actual", "Identifică sursele principale", "Stabilește baseline"] },
            { name: "Optimizare", color: "warning", steps: ["Maximizează încărcarea", "Optimizează rutele", "Reduce cursele goale"] },
            { name: "Tranziție", color: "primary", steps: ["Upgrade flotă Euro 6d", "Testează vehicule electrice", "Evaluează combustibili alternativi"] },
            { name: "Compensare", color: "success", steps: ["Cumpără credite carbon", "Investește în reîmpădurire", "Certifică offsetting"] }
          ]}
        />
      </section>

      {/* Alternative Fuels Comparison */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Fuel className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section6Title')}</span>
        </h2>
        <DataTable
          headers={["Combustibil", "Reducere CO2", "Autonomie", "Infrastructură", "Cost/km"]}
          rows={[
            ["Diesel Euro 6d", "Referință", "1.500+ km", "Excelentă", "€0.35-0.45"],
            ["HVO (Bio-diesel)", "-90%", "1.500 km", "Bună", "€0.55-0.70"],
            ["LNG", "-15-25%", "1.200 km", "Limitată", "€0.30-0.40"],
            ["Electric (BEV)", "-100%*", "300-500 km", "În dezvoltare", "€0.20-0.30"],
            ["Hidrogen (H2)", "-100%*", "600-800 km", "Foarte limitată", "€0.80-1.00"],
          ]}
        />
        <p className="text-xs text-muted-foreground mt-2">* Zero emisii directe; emisiile totale depind de sursa de energie</p>
        
        <ChapterImage
          src={sustainabilityImg}
          alt="Green logistics fleet with sustainable transport practices"
          variant="float-right"
          className="mt-4"
        />
      </section>

      {/* Green Certifications */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section4Title')}</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="ISO 14001" icon={Award} variant="success">
            <p className="text-sm text-muted-foreground mb-2">Sistem de management de mediu</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Standard internațional recunoscut</li>
              <li>✓ Cerut de clienți mari</li>
              <li>✓ Audit anual extern</li>
              <li>✓ Cost: €5.000-15.000/an</li>
            </ul>
          </InfoCard>
          <InfoCard title="Lean & Green" icon={Leaf} variant="info">
            <p className="text-sm text-muted-foreground mb-2">Program european logistică verde</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ 5 stele = max performanță</li>
              <li>✓ Obiectiv: -20% CO2 în 5 ani</li>
              <li>✓ Recunoscut în 15+ țări</li>
              <li>✓ Cost: €2.000-8.000/an</li>
            </ul>
          </InfoCard>
          <InfoCard title="EcoVadis" icon={Globe}>
            <p className="text-sm text-muted-foreground mb-2">Rating ESG pentru supply chain</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Scor 0-100, medalii Bronze/Silver/Gold</li>
              <li>✓ Cerut de multinaționale</li>
              <li>✓ Evaluare anuală online</li>
              <li>✓ Cost: €1.500-5.000/an</li>
            </ul>
          </InfoCard>
          <InfoCard title="SmartWay / GLEC" icon={BarChart3} variant="warning">
            <p className="text-sm text-muted-foreground mb-2">Framework calcul emisii</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Metodologie standardizată</li>
              <li>✓ Comparabilitate între transportatori</li>
              <li>✓ Acceptat pentru CSRD reporting</li>
              <li>✓ Cost: Gratuit - €3.000</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Case Study */}
      <section>
        <div className="bg-gradient-to-br from-success/10 to-primary/10 border border-success/30 rounded-xl p-6">
          <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-success" />
            📋 Studiu de Caz: Tranziție Verde - Companie 50 Camioane
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Situația Inițială (2022):</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Flotă: 50 camioane (40 Euro 5, 10 Euro 6)</li>
                <li>• Emisii anuale: 4.500 tone CO2</li>
                <li>• Fuel cost: €2.1M/an</li>
                <li>• Rating EcoVadis: Bronze (45/100)</li>
              </ul>
              <h4 className="font-semibold mb-2 mt-4">Acțiuni Implementate:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Înlocuit 15 Euro 5 cu Euro 6d</li>
                <li>✓ 3 camioane electrice pentru urban</li>
                <li>✓ Training eco-driving pentru șoferi</li>
                <li>✓ Software optimizare rute</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Rezultate (2024):</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Emisii anuale: 3.200 tone CO2 (-29%)</li>
                <li>• Fuel cost: €1.7M/an (-19%)</li>
                <li>• Rating EcoVadis: Silver (62/100)</li>
                <li>• 3 contracte noi cu clienți "green"</li>
              </ul>
              <h4 className="font-semibold mb-2 mt-4">ROI:</h4>
              <div className="bg-success/20 rounded-lg p-3">
                <p className="text-sm font-medium">
                  Investiție: €1.2M | Economii anuale: €400k
                  <br />
                  <strong className="text-success">Payback: 3 ani</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carbon Offsetting */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <TreePine className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section8Title')}</span>
        </h2>
        <DataTable
          headers={["Tip Offset", "Cost/tonă CO2", "Calitate", "Verificare"]}
          rows={[
            ["Reîmpădurire EU", "€25-50", "⭐⭐⭐⭐⭐", "Gold Standard"],
            ["Energie regenerabilă", "€15-30", "⭐⭐⭐⭐", "VCS Verified"],
            ["Captare metan", "€10-20", "⭐⭐⭐", "CDM"],
            ["Proiecte sociale", "€20-40", "⭐⭐⭐⭐", "Gold Standard"],
            ["Credite generice", "€5-10", "⭐⭐", "Variabil"],
          ]}
        />
        <div className="mt-4 p-4 bg-warning/10 border border-warning/30 rounded-xl">
          <p className="text-sm text-muted-foreground flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
            <span><strong>Atenție:</strong> Offsetting-ul NU înlocuiește reducerea emisiilor! Este doar un complement. Prioritatea: Reduce → Optimizează → Compensează.</span>
          </p>
        </div>
      </section>

      {/* Client ESG Requirements */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section9Title')}</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Factory className="w-5 h-5 text-primary" />
              Ce Cer Clienții Mari
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✓ Raport emisii CO2 lunar per transport</li>
              <li>✓ Certificare ISO 14001 sau echivalent</li>
              <li>✓ Scor EcoVadis minim Silver</li>
              <li>✓ Plan reducere emisii pe 5 ani</li>
              <li>✓ Flotă min 50% Euro 6d sau mai nou</li>
              <li>✓ Opțiune transport "carbon neutral"</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Euro className="w-5 h-5 text-success" />
              Beneficii Comerciale
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>💰 Premium 5-15% pentru transport verde</li>
              <li>📈 Acces la licitații publice (CVD)</li>
              <li>🤝 Contracte pe termen lung cu OEMs</li>
              <li>⭐ Diferențiere competitivă</li>
              <li>📊 Rapoarte ESG pentru investitori</li>
              <li>🛡️ Reducere risc reglementare</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sustainability Checklist */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>Checklist Sustenabilitate Transport</span>
        </h2>
        <Checklist
          items={[
            "Calculezi și raportezi emisiile CO2 pentru fiecare transport",
            "Ai un plan documentat de reducere emisii pe 5 ani",
            "Flotă cu minim 80% vehicule Euro 6 sau mai nou",
            "Șoferii au training eco-driving actualizat",
            "Utilizezi software pentru optimizarea rutelor",
            "Ai cel puțin o certificare de mediu (ISO 14001/Lean&Green/EcoVadis)",
            "Poți oferi opțiune de transport carbon-neutral",
            "Monitorizezi și reduci procentul de curse goale",
            "Ai evaluat combustibili alternativi (LNG, electric, HVO)",
            "Raportezi ESG către clienții care solicită"
          ]}
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
              <li>• Integrează sustenabilitatea în oferte comerciale</li>
              <li>• Comunică transparent progresul către clienți</li>
              <li>• Investește în training continuu pentru echipă</li>
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
              <li>• Greenwashing - promisiuni fără acțiuni</li>
              <li>• Ignorarea cerințelor CSRD până în ultima clipă</li>
              <li>• Focus doar pe flotă, nu și pe operațiuni</li>
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
      <MultiModalContent chapterId="sustainability" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="sustainability" />
    </div>
  );
}
