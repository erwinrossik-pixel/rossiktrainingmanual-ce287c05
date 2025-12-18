import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { PriceCalculator } from "../PriceCalculator";
import { quizzes } from "@/data/quizData";
import { Calculator, Euro, Route, TrendingUp, Calendar, AlertTriangle, Percent, MapPin, Fuel, Clock, Truck, ArrowRight, CheckCircle2, XCircle, Info, Zap, Shield } from "lucide-react";

export function PricingChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Pricing & Toll Logic</h1>
        <p className="text-lg text-muted-foreground">
          Ghid complet pentru calculul costurilor, formule de pricing, strategii de marjă și variații sezoniere în transportul rutier european.
        </p>
      </div>

      {/* Main Formula - Enhanced */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-rossik-dark p-8 text-primary-foreground">
        <h2 className="text-2xl font-bold mb-6 font-serif">Formula de Calcul a Costurilor</h2>
        
        <div className="space-y-4">
          <div className="bg-primary-foreground/10 p-4 rounded-lg">
            <p className="text-sm text-primary-foreground/70 mb-2">Formula de bază:</p>
            <div className="font-mono text-lg">
              Cost Total = (km × Rată/km) + Σ(taxe drum) + accesorii
            </div>
          </div>
          
          <div className="bg-primary-foreground/10 p-4 rounded-lg">
            <p className="text-sm text-primary-foreground/70 mb-2">Calculul prețului final:</p>
            <div className="font-mono text-lg">
              Preț Ofertă = Cost Total × (1 + marjă%)
            </div>
          </div>

          <div className="bg-primary-foreground/20 p-4 rounded-lg border border-primary-foreground/30">
            <p className="text-sm text-primary-foreground/70 mb-2">📊 Formula extinsă (profesională):</p>
            <div className="font-mono text-sm">
              Preț = [(km × €1.10-1.25) + Taxe + Feribot + Taxe speciale] × (1 + marjă) + Accesorii
            </div>
          </div>
        </div>
        
        <Calculator className="absolute bottom-4 right-4 w-24 h-24 text-primary-foreground/10" />
      </div>

      {/* Key Rates - Enhanced */}
      <div className="grid md:grid-cols-4 gap-4">
        <InfoCard title="Rată de Bază" icon={Euro}>
          <p className="text-3xl font-bold text-primary">€1.10-1.25</p>
          <p className="text-xs text-muted-foreground mt-1">per km (2025/2026)</p>
          <p className="text-xs text-muted-foreground">Variază după combustibil</p>
        </InfoCard>
        
        <InfoCard title="Marjă Țintă" icon={TrendingUp}>
          <p className="text-3xl font-bold text-primary">8–18%</p>
          <p className="text-xs text-muted-foreground mt-1">profit standard</p>
          <p className="text-xs text-muted-foreground">Peak: până la 25%</p>
        </InfoCard>
        
        <InfoCard title="Cost Mediu Total" icon={Truck}>
          <p className="text-3xl font-bold text-primary">€1.35-1.60</p>
          <p className="text-xs text-muted-foreground mt-1">per km all-in</p>
          <p className="text-xs text-muted-foreground">Include taxe/accesorii</p>
        </InfoCard>

        <InfoCard title="Referință Diesel" icon={Fuel}>
          <p className="text-3xl font-bold text-primary">€1.45-1.65</p>
          <p className="text-xs text-muted-foreground mt-1">per litru (EU avg)</p>
          <p className="text-xs text-muted-foreground">Monitorizează săptămânal</p>
        </InfoCard>
      </div>

      {/* Cost Components Breakdown */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Calculator className="w-6 h-6 text-primary" />
          Componentele Costului de Transport
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              Costuri Fixe (incluse în rată/km)
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between py-2 border-b border-border">
                <span>Combustibil (28-32L/100km)</span>
                <span className="font-medium">€0.42-0.53/km</span>
              </li>
              <li className="flex justify-between py-2 border-b border-border">
                <span>Salariu șofer + diurnă</span>
                <span className="font-medium">€0.25-0.35/km</span>
              </li>
              <li className="flex justify-between py-2 border-b border-border">
                <span>Amortizare vehicul</span>
                <span className="font-medium">€0.15-0.20/km</span>
              </li>
              <li className="flex justify-between py-2 border-b border-border">
                <span>Asigurări + taxe</span>
                <span className="font-medium">€0.08-0.12/km</span>
              </li>
              <li className="flex justify-between py-2 border-b border-border">
                <span>Mentenanță + anvelope</span>
                <span className="font-medium">€0.10-0.15/km</span>
              </li>
              <li className="flex justify-between py-2 bg-muted/50 rounded px-2">
                <span className="font-semibold">Total cost operațional</span>
                <span className="font-bold text-primary">€1.00-1.35/km</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-warning" />
              Costuri Variabile (se adaugă)
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between py-2 border-b border-border">
                <span>Taxe drum (DE, AT, CH etc.)</span>
                <span className="font-medium">€0.09-0.55/km</span>
              </li>
              <li className="flex justify-between py-2 border-b border-border">
                <span>Feribot (UK, Scandinavia)</span>
                <span className="font-medium">€200-600/trecere</span>
              </li>
              <li className="flex justify-between py-2 border-b border-border">
                <span>Tunel (Mont Blanc, Fréjus)</span>
                <span className="font-medium">€250-400/trecere</span>
              </li>
              <li className="flex justify-between py-2 border-b border-border">
                <span>Parcare securizată</span>
                <span className="font-medium">€25-50/noapte</span>
              </li>
              <li className="flex justify-between py-2 border-b border-border">
                <span>Timp de așteptare</span>
                <span className="font-medium">€35-50/oră</span>
              </li>
              <li className="flex justify-between py-2 bg-warning/10 rounded px-2">
                <span className="font-semibold">Impact pe cost total</span>
                <span className="font-bold text-warning">+15-40%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Toll Rates by Country - 2026 Enhanced */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Route className="w-6 h-6 text-primary" />
          Taxe Drum pe Țară — 2026 (Euro VI / 24t / 5+ axe)
        </h2>
        
        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mb-4">
          <p className="text-sm flex items-start gap-2">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>Tarifele sunt pentru vehicule Euro VI, CO₂ Class 1, 24t, 5+ axe. Ratele variază în funcție de clasa de emisii, numărul de axe și tipul de drum. Verifică întotdeauna cu operatorul de taxare.</span>
          </p>
        </div>

        <DataTable 
          headers={["Țară", "Rată/km", "Sistem", "Note importante"]}
          rows={[
            ["🇩🇪 Germania", "€0.348", "LKW-Maut", "OBU obligatoriu; > 18t, 5+ axe; rata include taxa CO₂"],
            ["🇦🇹 Austria", "€0.532", "GO-Maut", "GO-Box obligatoriu; cel mai scump/km în EU"],
            ["🇨🇭 Elveția", "€0.55", "LSVA", "Taxă pe tkm; foarte scump pentru camioane grele"],
            ["🇭🇺 Ungaria", "€0.425", "HU-GO", "OBU sau pre-plată; atenție la calcul HUF→EUR"],
            ["🇮🇹 Italia", "€0.30", "Telepass", "Autostrăzi private; variază pe concesionar"],
            ["🇫🇷 Franța", "€0.28-0.33", "Télépéage", "Fără tarif național unic; ASF/APRR/Sanef diferă"],
            ["🇪🇸 Spania", "€0.28-0.31", "Vía-T", "Doar unele autostrăzi taxate; multe gratuite"],
            ["🇨🇿 Cehia", "€0.26", "MYTO CZ", "OBU obligatoriu; Euro VI discount"],
            ["🇸🇮 Slovenia", "€0.24", "DarsGo", "Sistem nou 2024; A1/A2 principale"],
            ["🇧🇪 Belgia", "€0.171", "Viapass", "Euro 6 discount; Wallonia ≈ €0.163"],
            ["🇳🇱 Olanda", "€0.159", "Vrachtwagen", "NOU din 01.07.2026; anterior fără taxă"],
            ["🇵🇱 Polonia", "€0.092", "e-TOLL", "Cel mai ieftin; app sau OBU; 0.40 PLN/km"],
          ]}
        />

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Cele mai scumpe
            </h4>
            <p className="text-sm">🇨🇭 Elveția (€0.55) și 🇦🇹 Austria (€0.532) - evită tranzitul inutil prin aceste țări dacă nu e necesar.</p>
          </div>
          
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Cele mai ieftine
            </h4>
            <p className="text-sm">🇵🇱 Polonia (€0.092) și 🇳🇱 Olanda (€0.159) - rute EST-VEST avantajoase prin PL.</p>
          </div>

          <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
            <h4 className="font-semibold text-warning mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Atenție 2026
            </h4>
            <p className="text-sm">🇳🇱 Olanda introduce taxă nouă din iulie 2026 - actualizează calculele!</p>
          </div>
        </div>
      </div>

      {/* Tunnel and Ferry Rates */}
      <div className="info-card">
        <h2 className="section-title">Tarife Tuneluri și Feriboturi 2026</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">🏔️ Tuneluri Alpine</h3>
            <DataTable
              headers={["Tunel", "Tarif (dus)", "Retur"]}
              rows={[
                ["Mont Blanc (FR↔IT)", "€280-320", "€420-480 (A/R)"],
                ["Fréjus (FR↔IT)", "€270-310", "€400-460 (A/R)"],
                ["Gotthard (CH)", "Inclus în LSVA", "-"],
                ["Brenner (AT↔IT)", "€9.50", "Ieftin vs tuneluri FR"],
                ["Arlberg (AT)", "€11.00", "Inclus în GO-Maut"],
                ["Tauern (AT)", "€13.50", "Inclus în GO-Maut"],
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold mb-3">⛴️ Feriboturi Principale</h3>
            <DataTable
              headers={["Rută", "Durată", "Tarif camion"]}
              rows={[
                ["Calais↔Dover", "1.5h", "€180-280"],
                ["Rotterdam↔Hull", "12h", "€350-500"],
                ["Kiel↔Gothenburg", "14h", "€400-600"],
                ["Rostock↔Trelleborg", "6h", "€200-350"],
                ["Livorno↔Barcelona", "20h", "€450-700"],
                ["Patras↔Ancona", "16h", "€380-550"],
              ]}
            />
          </div>
        </div>

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mt-4">
          <p className="text-sm">💡 <strong>Sfat:</strong> Rezervă feriboturi în avans pentru tarife mai bune. Diferența poate fi €100-200 între booking last-minute și anticipat.</p>
        </div>
      </div>

      {/* Interactive Price Calculator */}
      <PriceCalculator />

      {/* Extended Route Examples - Redesigned */}
      <div>
        <h2 className="section-title flex items-center gap-3">
          <MapPin className="w-6 h-6 text-primary" />
          Exemple Complete de Pricing pe Rute
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Example 1 - München → Paris */}
          <div className="info-card border-l-4 border-l-primary">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <div>
                <h3 className="font-semibold">München → Paris</h3>
                <p className="text-sm text-muted-foreground">~830 km | 2 țări | Standard</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>Cost bază (830 × €1.15)</span>
                <span className="font-medium">€955</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇩🇪 DE toll (150km × €0.348)</span>
                <span>€52</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇫🇷 FR toll (680km × €0.30)</span>
                <span>€204</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">Total Cost</span>
                <span className="font-bold">€1,211</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-primary/10 rounded">
                <span className="font-semibold">Preț Ofertă (12%)</span>
                <span className="font-bold text-primary">€1,356</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Cost/km all-in: €1.63 | Profit: €145
              </div>
            </div>
          </div>

          {/* Example 2 - Vienna → Milano */}
          <div className="info-card border-l-4 border-l-success">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-success text-success-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <div>
                <h3 className="font-semibold">Vienna → Milano</h3>
                <p className="text-sm text-muted-foreground">~810 km | 2 țări | via Brenner</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>Cost bază (810 × €1.15)</span>
                <span className="font-medium">€932</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇦🇹 AT toll (70km × €0.532)</span>
                <span>€37</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇮🇹 IT toll (740km × €0.30)</span>
                <span>€222</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>Brenner Pass toll</span>
                <span>€10</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">Total Cost</span>
                <span className="font-bold">€1,201</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-success/10 rounded">
                <span className="font-semibold">Preț Ofertă (15%)</span>
                <span className="font-bold text-success">€1,381</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Cost/km all-in: €1.70 | Profit: €180
              </div>
            </div>
          </div>

          {/* Example 3 - Rotterdam → Barcelona */}
          <div className="info-card border-l-4 border-l-warning">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-warning text-warning-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <div>
                <h3 className="font-semibold">Rotterdam → Barcelona</h3>
                <p className="text-sm text-muted-foreground">~1,450 km | 4 țări | Long haul</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>Cost bază (1450 × €1.15)</span>
                <span className="font-medium">€1,668</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇳🇱 NL + 🇧🇪 BE toll (300km)</span>
                <span>€50</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇫🇷 FR toll (850km × €0.30)</span>
                <span>€255</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇪🇸 ES toll (300km × €0.29)</span>
                <span>€87</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">Total Cost</span>
                <span className="font-bold">€2,060</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-warning/10 rounded">
                <span className="font-semibold">Preț Ofertă (10%)</span>
                <span className="font-bold text-warning">€2,266</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Cost/km all-in: €1.56 | Profit: €206 | Durată: 2 zile
              </div>
            </div>
          </div>

          {/* Example 4 - Hamburg → Warszawa */}
          <div className="info-card border-l-4 border-l-info">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-info text-info-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <div>
                <h3 className="font-semibold">Hamburg → Warszawa</h3>
                <p className="text-sm text-muted-foreground">~680 km | 2 țări | Est-Vest</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>Cost bază (680 × €1.15)</span>
                <span className="font-medium">€782</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇩🇪 DE toll (380km × €0.348)</span>
                <span>€132</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇵🇱 PL toll (300km × €0.092)</span>
                <span>€28</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">Total Cost</span>
                <span className="font-bold">€942</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-info/10 rounded">
                <span className="font-semibold">Preț Ofertă (14%)</span>
                <span className="font-bold text-info">€1,074</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Cost/km all-in: €1.58 | Profit: €132 | Rută profitabilă
              </div>
            </div>
          </div>

          {/* Example 5 - Praha → Lyon */}
          <div className="info-card border-l-4 border-l-secondary">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">5</span>
              <div>
                <h3 className="font-semibold">Praha → Lyon</h3>
                <p className="text-sm text-muted-foreground">~1,100 km | 3 țări | Transit DE</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>Cost bază (1100 × €1.15)</span>
                <span className="font-medium">€1,265</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇨🇿 CZ toll (100km × €0.26)</span>
                <span>€26</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇩🇪 DE toll (400km × €0.348)</span>
                <span>€139</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇫🇷 FR toll (600km × €0.30)</span>
                <span>€180</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">Total Cost</span>
                <span className="font-bold">€1,610</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-secondary/10 rounded">
                <span className="font-semibold">Preț Ofertă (11%)</span>
                <span className="font-bold">€1,787</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Cost/km all-in: €1.62 | Profit: €177
              </div>
            </div>
          </div>

          {/* Example 6 - Budapest → Amsterdam */}
          <div className="info-card border-l-4 border-l-destructive">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-sm font-bold">6</span>
              <div>
                <h3 className="font-semibold">Budapest → Amsterdam</h3>
                <p className="text-sm text-muted-foreground">~1,320 km | 4 țări | Complex</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>Cost bază (1320 × €1.15)</span>
                <span className="font-medium">€1,518</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇭🇺 HU toll (200km × €0.425)</span>
                <span>€85</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇦🇹 AT toll (150km × €0.532)</span>
                <span>€80</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇩🇪 DE toll (700km × €0.348)</span>
                <span>€244</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border text-muted-foreground">
                <span>🇳🇱 NL toll (270km × €0.159)</span>
                <span>€43</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">Total Cost</span>
                <span className="font-bold">€1,970</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-destructive/10 rounded">
                <span className="font-semibold">Preț Ofertă (13%)</span>
                <span className="font-bold text-destructive">€2,226</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Cost/km all-in: €1.69 | Profit: €256 | Atenție la taxe AT
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Margin Strategy */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Percent className="w-6 h-6 text-primary" />
          Strategii de Marjă și Calculul Profitului
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Niveluri de Marjă pe Tip de Client</h3>
            <DataTable
              headers={["Tip Client/Transport", "Marjă", "Motivație"]}
              rows={[
                ["Client nou / First order", "15-20%", "Testare, risc necunoscut"],
                ["Client recurent standard", "10-15%", "Relație stabilă"],
                ["Contract dedicat / FTL fix", "8-12%", "Volum garantat"],
                ["Spot market / Urgent", "15-25%", "Premium pe urgență"],
                ["Return load", "5-10%", "Mai bine decât gol"],
                ["Partnership strategic", "8-10%", "Volum mare, termen lung"],
              ]}
            />
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Ajustări de Marjă (se adaugă la bază)</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-border pb-2">
                <span>Livrare weekend / sărbătoare</span>
                <span className="text-success font-medium">+5-10%</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span>Fereastră strânsă (±2h)</span>
                <span className="text-success font-medium">+3-5%</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span>ADR (mărfuri periculoase)</span>
                <span className="text-success font-medium">+10-15%</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span>Reefer (temperatură controlată)</span>
                <span className="text-success font-medium">+15-25%</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span>Express same-day</span>
                <span className="text-success font-medium">+30-50%</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span>Multi-drop (per stop adițional)</span>
                <span className="text-success font-medium">+€75-150</span>
              </li>
              <li className="flex justify-between">
                <span>Sezon peak (Nov-Dec)</span>
                <span className="text-success font-medium">+15-25%</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">📊 Exemplu Calcul Marjă Complet</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-muted-foreground">Scenariu: München → Paris, client nou, weekend</p>
              <div className="font-mono bg-muted/50 p-3 rounded space-y-1">
                <p>Cost total: €1,211</p>
                <p>Marjă bază (client nou): 15%</p>
                <p>Ajustare weekend: +7%</p>
                <p className="border-t pt-2 mt-2">Marjă totală: 22%</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">Calcul final:</p>
              <div className="font-mono bg-success/10 p-3 rounded space-y-1">
                <p>€1,211 × 1.22 = <strong>€1,477</strong></p>
                <p>Profit: €266</p>
                <p>Profit/km: €0.32</p>
                <p className="text-success font-semibold">✓ Margin healthy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seasonal Variations */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Calendar className="w-6 h-6 text-primary" />
          Variații Sezoniere de Preț
        </h2>
        
        <DataTable
          headers={["Perioadă", "Impact Preț", "Motiv", "Strategie"]}
          rows={[
            ["Ianuarie-Februarie", "-5% la -10%", "Încetinire post-sărbători", "Acceptă marje mai mici, focus pe volum"],
            ["Martie-Aprilie", "Baseline", "Activitate normală", "Pricing standard"],
            ["Mai-Iunie", "+5% la +10%", "Peak pre-vară, agricultură", "Crește marjele pe rute agricole"],
            ["Iulie-August", "-5% la +5%", "Sezon vacanțe, cerere mixtă", "Focus pe clienți stabili"],
            ["Septembrie-Octombrie", "+10% la +15%", "Pregătire Q4, recoltă", "Pricing premium justificat"],
            ["Noiembrie (1-20)", "+15% la +25%", "Black Friday, pre-Crăciun", "Maximizează marjele"],
            ["Noiembrie (21-30)", "+20% la +30%", "Peak Black Friday", "Cerere maximă"],
            ["Decembrie (1-15)", "+20% la +35%", "Rush Crăciun", "Cele mai mari rate"],
            ["Decembrie (16-31)", "-10% la -20%", "Shutdown industrial", "Operațiuni minime"],
          ]}
        />

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Peak Season Alert
            </h4>
            <p className="text-sm">Sept-Nov: Rezervă capacitate devreme, ratele cresc săptămânal. Nu bloca prețuri fixe mai mult de 2 săptămâni.</p>
          </div>
          
          <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
            <h4 className="font-semibold text-info mb-2">🌡️ Impact Temperatură</h4>
            <p className="text-sm">Reefer vara: +20-30% din cauza cererii și consumului mai mare de combustibil pentru răcire.</p>
          </div>
          
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">💰 Best Value</h4>
            <p className="text-sm">Ian-Feb: Negociază contracte anuale în perioada lentă pentru rate mai bune de la transportatori.</p>
          </div>
        </div>
      </div>

      {/* Regional Patterns */}
      <div className="info-card">
        <h2 className="section-title">Pattern-uri Sezoniere Regionale</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">🇪🇸 Spania / 🇮🇹 Italia / 🇬🇷 Grecia</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Martie-Iunie:</strong> Export fructe/legume peak (+15-25%)</li>
              <li>• <strong>August:</strong> Închideri fabrici, capacitate redusă</li>
              <li>• <strong>Septembrie:</strong> Transport struguri/vin surge</li>
              <li>• <strong>Octombrie:</strong> Măsline, citrice din sud</li>
            </ul>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">🇩🇪 Germania / 🇳🇱 Olanda / 🇧🇪 Belgia</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Martie-Aprilie:</strong> Pregătire retail Paște</li>
              <li>• <strong>Septembrie:</strong> IAA și târguri comerciale</li>
              <li>• <strong>Oct-Nov:</strong> Distribuție bunuri Crăciun</li>
              <li>• <strong>Decembrie:</strong> Rush final, apoi stop</li>
            </ul>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">🇵🇱 Polonia / 🇨🇿 Cehia / 🇭🇺 Ungaria</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Tot anul:</strong> Rate competitive pentru distribuție EU</li>
              <li>• <strong>Vară:</strong> Export agricol crescut</li>
              <li>• <strong>Q4:</strong> Surge piese auto (VW, Škoda, Audi)</li>
              <li>• <strong>Decembrie:</strong> Mai puțin afectat de shutdown</li>
            </ul>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">🇫🇷 Franța / 🇬🇧 UK</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Mai-Iunie:</strong> Transport vin regiuni peak</li>
              <li>• <strong>August:</strong> Capacitate foarte redusă FR</li>
              <li>• <strong>Noiembrie:</strong> Beaujolais Nouveau rush</li>
              <li>• <strong>UK:</strong> Brexit = documente extra + întârzieri</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Accessorial Charges */}
      <div className="info-card">
        <h2 className="section-title">Tarife Accesorii Standard 2026</h2>
        <DataTable
          headers={["Serviciu", "Tarif", "Când se aplică"]}
          rows={[
            ["Timp de așteptare", "€40-50/oră", "După 2h gratuite încărcare/descărcare"],
            ["Parcare securizată", "€35-75/noapte", "Parking obligatoriu TIR-uri"],
            ["ADR surcharge", "€150-400", "Clase mărfuri periculoase"],
            ["Tail-lift (hayon)", "€35-60", "Per utilizare încărcare/descărcare"],
            ["Livrare weekend", "€150-250", "Sâmbătă/Duminică operațiuni"],
            ["Express/Priority", "+30-50%", "Same-day sau next-day garantat"],
            ["Multi-drop", "€75-150/stop", "Puncte adiționale de livrare"],
            ["Schimb paleți", "€12-18/palet", "Dacă nu e pre-aranjat"],
            ["Documentație CMR specială", "€20-35", "Cerințe documentație extra"],
            ["Înregistrare temperatură", "€40-60", "Printout reefer obligatoriu"],
            ["Cleaning (după chimicale)", "€100-200", "Curățare remorcă după ADR"],
            ["Redelivery (adresă greșită)", "€75-150", "Livrare repetată din cauza clientului"],
          ]}
        />
      </div>

      {/* Fuel Surcharge Guide */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Fuel className="w-6 h-6 text-primary" />
          Ghid Surcharge Combustibil
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Formula de Ajustare Diesel</h3>
            <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm mb-4">
              <p>Preț referință: €1.50/L</p>
              <p>Consum mediu: 30L/100km</p>
              <p className="mt-2 border-t pt-2">
                Surcharge = (Preț actual - €1.50) × 0.30 × km
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Exemplu: Diesel €1.70, rută 1000km<br/>
              Surcharge = (1.70 - 1.50) × 0.30 × 1000 = <strong>€60</strong>
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Tabel Ajustare Rapidă</h3>
            <DataTable
              headers={["Diesel €/L", "Ajustare", "Acțiune"]}
              rows={[
                ["< €1.40", "-3 la -5%", "Poți reduce prețurile"],
                ["€1.40-1.55", "0%", "Preț standard"],
                ["€1.55-1.70", "+3 la +5%", "Adaugă fuel surcharge"],
                ["€1.70-1.85", "+5 la +8%", "Surcharge obligatoriu"],
                ["> €1.85", "+8 la +12%", "Renegociază contracte"],
              ]}
            />
          </div>
        </div>

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg mt-4">
          <p className="text-sm flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span><strong>Important:</strong> Include clauză de ajustare combustibil în toate contractele pe termen lung. Monitorizează prețurile săptămânal și ajustează la variații &gt;5%.</span>
          </p>
        </div>
      </div>

      {/* Pro Tips Enhanced */}
      <div className="highlight-card">
        <h3 className="font-semibold mb-4 text-lg">💡 Pricing Pro Tips</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>Salvează split-uri taxe pe rute în TMS pentru cotații rapide</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>Verifică tarifele DE 2024+ CO₂ - depind de axe & emisii</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>Nu accepta rute FR ieftine fără analiză completă taxe</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>Oferă variante: economy (rută lungă) vs express</span>
            </li>
          </ul>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>Include waiting time upfront în termenii cotației</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>Monitorizează diesel săptămânal - ajustează ±5%</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>Review rate transportatori trimestrial</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>Construiește clauze seasonal surcharge în contracte</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Quick Reference Card */}
      <div className="bg-gradient-to-r from-rossik-dark to-primary p-6 rounded-2xl text-primary-foreground">
        <h3 className="font-bold text-xl mb-4">⚡ Referință Rapidă Pricing 2026</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
          <div className="bg-primary-foreground/10 p-3 rounded-lg text-center">
            <p className="text-primary-foreground/70 text-xs">Rată Bază</p>
            <p className="text-xl font-bold">€1.15/km</p>
          </div>
          <div className="bg-primary-foreground/10 p-3 rounded-lg text-center">
            <p className="text-primary-foreground/70 text-xs">Marjă Standard</p>
            <p className="text-xl font-bold">12-15%</p>
          </div>
          <div className="bg-primary-foreground/10 p-3 rounded-lg text-center">
            <p className="text-primary-foreground/70 text-xs">Peak Season</p>
            <p className="text-xl font-bold">+20-30%</p>
          </div>
          <div className="bg-primary-foreground/10 p-3 rounded-lg text-center">
            <p className="text-primary-foreground/70 text-xs">Waiting Fee</p>
            <p className="text-xl font-bold">€45/h</p>
          </div>
          <div className="bg-primary-foreground/10 p-3 rounded-lg text-center">
            <p className="text-primary-foreground/70 text-xs">Cost All-in</p>
            <p className="text-xl font-bold">€1.50-1.70</p>
          </div>
        </div>
      </div>

      {/* Quiz */}
      <Quiz title="🎯 Test de Cunoștințe: Pricing & Taxe" questions={quizzes.pricing} chapterId="pricing" />
    </div>
  );
}
