import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { Checklist } from "../Checklist";
import { ProcessMap, FlowDiagram } from "../FlowDiagram";
import { 
  Globe, Shield, MessageSquare, Search, Star, CreditCard, 
  AlertTriangle, CheckCircle, Clock, Euro, Users, Target,
  TrendingUp, XCircle, Lightbulb, Zap, Book, Phone, Eye
} from "lucide-react";
import { Badge } from "../Badge";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import exchangeImg from "@/assets/chapters/freight-exchange-platform.jpg";

export function ExchangesChapter() {
  const { ct } = useChapterTranslation("exchanges");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Globe}
        variant="exchanges"
      />

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Globe className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="section-title mb-2">Ce Sunt Bursele de Marfă?</h2>
            <p className="text-muted-foreground">
              Bursele de marfă (freight exchanges) sunt platforme digitale care conectează expeditori 
              cu transportatori. Ele permit căutarea de încărcături, postarea camioanelor libere, 
              verificarea partenerilor și gestionarea documentelor de transport.
            </p>
          </div>
        </div>
      </div>

      {/* Platform Comparison Overview */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          Comparație Detaliată Platforme
        </h2>
        <DataTable
          headers={["Platformă", "Utilizatori", "Piață Principală", "Cost Lunar", "Rating"]}
          rows={[
            ["TIMOCOM", "50.000+ companii", "Germania, Europa Centrală", "€150-400", "⭐⭐⭐⭐⭐"],
            ["Trans.eu", "40.000+ companii", "Polonia, Europa de Est", "€100-250", "⭐⭐⭐⭐"],
            ["Teleroute", "35.000+ companii", "Franța, Benelux", "€120-300", "⭐⭐⭐⭐"],
            ["Transporeon", "1.300+ shipperi mari", "Enterprise/Corporate", "€300-1000+", "⭐⭐⭐⭐⭐"],
            ["Wtransnet", "15.000+ companii", "Spania, Portugalia", "€80-200", "⭐⭐⭐"],
            ["Cargopedia", "10.000+ companii", "România, Bulgaria", "€50-150", "⭐⭐⭐"],
          ]}
        />
      </section>

      {/* Main Exchanges - Enhanced Cards */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Globe className="w-6 h-6 text-primary" />
          Platformele Principale în Detaliu
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* TIMOCOM */}
          <div className="info-card border-t-4 border-t-info">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-info rounded-lg flex items-center justify-center text-info-foreground font-bold">
                TC
              </div>
              <div>
                <h3 className="font-semibold text-lg">{ct("timocomTitle")}</h3>
                <Badge variant="info">{ct("timocomBadge")}</Badge>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              {ct("timocomDesc")}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-muted-foreground" />
                <span>{ct("findPostLoads")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-muted-foreground" />
                <span>{ct("partnerVerification")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-muted-foreground" />
                <span>{ct("integratedTms")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Euro className="w-4 h-4 text-muted-foreground" />
                <span>Garanție plată până la €100.000</span>
              </div>
            </div>
          </div>

          {/* Trans.eu */}
          <div className="info-card border-t-4 border-t-success">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center text-success-foreground font-bold">
                T.eu
              </div>
              <div>
                <h3 className="font-semibold text-lg">{ct("transeuTitle")}</h3>
                <Badge variant="success">{ct("transeuBadge")}</Badge>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              {ct("transeuDesc")}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span>{ct("ceeNetwork")}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-muted-foreground" />
                <span>{ct("privateTenders")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-muted-foreground" />
                <span>{ct("transRisk")} - scoring risc parteneri</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>Aplicație mobilă completă</span>
              </div>
            </div>
          </div>

          {/* Teleroute */}
          <div className="info-card border-t-4 border-t-warning">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center text-warning-foreground font-bold">
                TR
              </div>
              <div>
                <h3 className="font-semibold text-lg">{ct("telerouteTitle")}</h3>
                <Badge variant="warning">{ct("telerouteBadge")}</Badge>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              {ct("telerouteDesc")}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-muted-foreground" />
                <span>{ct("paymentGuarantee")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span>{ct("euWideCoverage")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-muted-foreground" />
                <span>{ct("alpegaGroup")} (Bursa nr. 2 în EU)</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-muted-foreground" />
                <span>Track & Trace integrat</span>
              </div>
            </div>
          </div>

          {/* Transporeon */}
          <div className="info-card border-t-4 border-t-primary">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                TP
              </div>
              <div>
                <h3 className="font-semibold text-lg">{ct("transporeonTitle")}</h3>
                <Badge variant="primary">{ct("transporeonBadge")}</Badge>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              {ct("transporeonDesc")}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span>{ct("eTendering")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-muted-foreground" />
                <span>{ct("realTimeVisibility")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-muted-foreground" />
                <span>{ct("telematicsIntegration")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-muted-foreground" />
                <span>Pentru contracte anuale cu shipperi mari</span>
              </div>
            </div>
          </div>
        </div>
        
        <ChapterImage
          src={exchangeImg}
          alt="Modern freight exchange platform interface showing load matching"
          variant="float-right"
          className="mt-4"
        />
      </section>

      {/* Partner Verification Process */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          Cum Verifici un Partener Nou
        </h2>
        <ProcessMap
          title="Proces Verificare Partener"
          steps={[
            { icon: "🔍", label: "Caută Compania", description: "Folosește funcția de search pe platformă" },
            { icon: "⭐", label: "Check Rating", description: "Minim 80% rating pozitiv" },
            { icon: "📄", label: "Verifică Documente", description: "Licență, asigurare CMR, IDD" },
            { icon: "📞", label: "Sună-i Direct", description: "Confirmă detalii verbal" },
            { icon: "✅", label: "Start Mic", description: "Prima comandă - valoare mică" }
          ]}
        />
      </section>

      {/* Risk Indicators */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-primary" />
          Indicatori de Risc - Red Flags
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-5">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-destructive">
              <XCircle className="w-5 h-5" />
              🚨 Refuză Transportul Dacă:
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Rating sub 70% sau sub 10 evaluări</li>
              <li>• Companie înregistrată sub 6 luni</li>
              <li>• Prețul e mult sub piață (peste 20%)</li>
              <li>• Insistă pe plată cash sau crypto</li>
              <li>• Nu răspunde la telefon fix/mobil</li>
              <li>• Documente scanate de calitate slabă</li>
              <li>• Schimbă detaliile după confirmare</li>
              <li>• Refuză să semneze contract/CMR</li>
            </ul>
          </div>
          <div className="bg-success/10 border border-success/30 rounded-xl p-5">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-success">
              <CheckCircle className="w-5 h-5" />
              ✅ Indicatori Partener de Încredere:
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Rating 90%+ cu 50+ evaluări</li>
              <li>• Activ pe platformă 3+ ani</li>
              <li>• Răspunde rapid și profesionist</li>
              <li>• Documente verificate de platformă</li>
              <li>• Asigurare CMR vizibilă și valabilă</li>
              <li>• Acceptă Track & Trace</li>
              <li>• Termen plată standard (30-45 zile)</li>
              <li>• Comunicare transparentă despre probleme</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Strategy */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Euro className="w-6 h-6 text-primary" />
          Strategie de Preț pe Bursă
        </h2>
        <DataTable
          headers={["Situație", "Abordare", "Marja Recomandată"]}
          rows={[
            ["Spot cu plecare azi", "Prețul pieței -5% pentru rapiditate", "8-12%"],
            ["Încărcare peste 3+ zile", "Poți negocia mai agresiv", "12-18%"],
            ["Retur garantat", "Acceptă preț mai mic pentru curse goale", "5-8%"],
            ["Transport ADR/Reefer", "Premium +15-30% față de standard", "15-25%"],
            ["Weekend/sărbători", "Majorare +20-40%", "20-30%"],
            ["Distanță lungă 1500+ km", "Preț/km mai mic, marja mare", "10-15%"],
          ]}
        />
      </section>

      {/* Case Study */}
      <section>
        <div className="bg-gradient-to-br from-info/10 to-primary/10 border border-info/30 rounded-xl p-6">
          <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-info" />
            📋 Studiu de Caz: Fraudă Evitată pe Trans.eu
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Situația:</h4>
              <p className="text-sm text-muted-foreground mb-4">
                O companie nou-înregistrată oferă transport RO-DE la €800 când piața era €1.100. 
                Rating: 100% dar doar 3 evaluări în 2 luni.
              </p>
              <h4 className="font-semibold mb-2">Red Flags Detectate:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>⚠️ Preț sub piață cu 27%</li>
                <li>⚠️ Companie nouă, evaluări puține</li>
                <li>⚠️ La telefon vorbeau altă limbă decât declarată</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Ce am făcut:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Am cerut licența de transport - nu au trimis</li>
                <li>✓ Am verificat pe Google - adresa era un apartament</li>
                <li>✓ Am raportat contul pe platformă</li>
              </ul>
              <h4 className="font-semibold mb-2 mt-4">Rezultat:</h4>
              <p className="text-sm text-muted-foreground">
                Trans.eu a suspendat contul. Ulterior s-a dovedit că era o tentativă 
                de fraudă cu marfa. <strong>Lecție:</strong> Dacă e prea frumos să fie adevărat, 
                probabil nu e adevărat!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Comparison */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Zap className="w-6 h-6 text-primary" />
          Funcționalități pe Platforme
        </h2>
        <DataTable
          headers={["Funcționalitate", "TIMOCOM", "Trans.eu", "Teleroute", "Transporeon"]}
          rows={[
            ["Garanție Plată", "✅ €100k", "✅ €50k", "✅ €75k", "❌ Contract"],
            ["Track & Trace", "✅", "✅", "✅", "✅"],
            ["Aplicație Mobilă", "✅", "✅", "✅", "⚠️ Limitat"],
            ["Chat Integrat", "✅", "✅", "✅", "❌"],
            ["Verificare Documente", "✅", "✅", "✅", "✅"],
            ["API Integration", "✅", "✅", "✅", "✅"],
            ["Multi-limbă", "DE/EN/PL/RO", "20+ limbi", "FR/EN/NL", "EN/DE"],
            ["Licitații Private", "⚠️", "✅", "✅", "✅"],
          ]}
        />
      </section>

      {/* Best Practices Checklist */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          Checklist Utilizare Bursă
        </h2>
        <Checklist
          items={[
            "Creează profil complet cu toate documentele verificate",
            "Setează alerte pentru rutele tale preferate",
            "Verifică rating-ul și istoricul fiecărui partener nou",
            "Confirmă telefonic orice transport înainte de plecare",
            "Folosește sistemul de mesagerie intern (traceable)",
            "Activează garanția de plată pentru parteneri noi",
            "Evaluează partenerii după fiecare transport",
            "Raportează comportamentul suspect imediat",
            "Păstrează evidența tuturor comunicărilor",
            "Verifică prețul pieței înainte de a accepta"
          ]}
        />
      </section>

      {/* Best Practices Card */}
      <div className="highlight-card">
        <h3 className="font-semibold mb-3">🎯 {ct("bestPracticesTitle")}</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ {ct("checkRatings")}</li>
            <li>✓ {ct("verifyInsurance")}</li>
            <li>✓ {ct("usePlatformMessaging")}</li>
            <li>✓ {ct("savePartners")}</li>
          </ul>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ {ct("usePaymentGuarantee")}</li>
            <li>✓ {ct("checkDrivingBans")}</li>
            <li>✓ {ct("confirmDetails")}</li>
            <li>✓ {ct("ratePartners")}</li>
          </ul>
        </div>
      </div>

      {/* Glossary */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Book className="w-6 h-6 text-primary" />
          Glosar Termeni Bursă
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">Spot Load</dt>
            <dd className="text-sm text-muted-foreground">Transport cu plecare în 24-48h, preț negociat pe moment</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">Tender</dt>
            <dd className="text-sm text-muted-foreground">Licitație pentru contracte pe termen lung (3-12 luni)</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">FTL (Full Truck Load)</dt>
            <dd className="text-sm text-muted-foreground">Camion complet - un client, o destinație</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">LTL (Less Than Truck)</dt>
            <dd className="text-sm text-muted-foreground">Grupaj - mai mulți clienți în același camion</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">Payment Guarantee</dt>
            <dd className="text-sm text-muted-foreground">Platforma garantează plata dacă partenerul nu plătește</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">TransRisk</dt>
            <dd className="text-sm text-muted-foreground">Scor de risc financiar al partenerilor (Trans.eu)</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">Deadhead</dt>
            <dd className="text-sm text-muted-foreground">Kilometri parcurși fără marfă (curse goale)</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">Cabotaj</dt>
            <dd className="text-sm text-muted-foreground">Transport intern într-o țară străină (max 3 în 7 zile)</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">IDD (Index Daily Days)</dt>
            <dd className="text-sm text-muted-foreground">Indicatorul de întârziere plăți al unei companii</dd>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <dt className="font-semibold text-primary mb-1">PoD (Proof of Delivery)</dt>
            <dd className="text-sm text-muted-foreground">Dovada livrării - CMR semnat de destinatar</dd>
          </div>
        </div>
      </section>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="exchanges" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="exchanges" />
    </div>
  );
}
