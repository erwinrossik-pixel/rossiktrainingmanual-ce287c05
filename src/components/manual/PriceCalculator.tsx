import { useState, useMemo } from "react";
import { Calculator, Euro, Route, Truck, Plus, Trash2, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface CountrySegment {
  id: string;
  country: string;
  km: number;
}

const TOLL_RATES: Record<string, { rate: number; name: string; flag: string }> = {
  DE: { rate: 0.348, name: "Germania", flag: "🇩🇪" },
  AT: { rate: 0.532, name: "Austria", flag: "🇦🇹" },
  CH: { rate: 0.55, name: "Elveția", flag: "🇨🇭" },
  HU: { rate: 0.425, name: "Ungaria", flag: "🇭🇺" },
  IT: { rate: 0.30, name: "Italia", flag: "🇮🇹" },
  FR: { rate: 0.30, name: "Franța", flag: "🇫🇷" },
  ES: { rate: 0.29, name: "Spania", flag: "🇪🇸" },
  CZ: { rate: 0.26, name: "Cehia", flag: "🇨🇿" },
  SI: { rate: 0.24, name: "Slovenia", flag: "🇸🇮" },
  BE: { rate: 0.171, name: "Belgia", flag: "🇧🇪" },
  NL: { rate: 0.159, name: "Olanda", flag: "🇳🇱" },
  PL: { rate: 0.092, name: "Polonia", flag: "🇵🇱" },
  SK: { rate: 0.18, name: "Slovacia", flag: "🇸🇰" },
  RO: { rate: 0.05, name: "România", flag: "🇷🇴" },
  BG: { rate: 0.04, name: "Bulgaria", flag: "🇧🇬" },
  HR: { rate: 0.15, name: "Croația", flag: "🇭🇷" },
  OTHER: { rate: 0, name: "Altă țară (fără taxă)", flag: "🌍" },
};

const TRANSPORT_TYPES = [
  { id: "standard", name: "Standard (Curtainsider)", baseRate: 1.15, description: "13.6m, marfă standard" },
  { id: "reefer", name: "Frigorific (Reefer)", baseRate: 1.35, description: "Temperatură controlată" },
  { id: "mega", name: "Mega Trailer", baseRate: 1.10, description: "3m înălțime, volum mare" },
  { id: "adr", name: "ADR (Mărfuri Periculoase)", baseRate: 1.45, description: "Certificări speciale" },
  { id: "express", name: "Express / Dedicat", baseRate: 1.50, description: "Livrare urgentă" },
];

const MARGIN_PRESETS = [
  { value: 8, label: "Minim (8%)", description: "Client fidel / volum mare" },
  { value: 12, label: "Standard (12%)", description: "Rută obișnuită" },
  { value: 15, label: "Bun (15%)", description: "Client nou / sezon normal" },
  { value: 18, label: "Premium (18%)", description: "Urgență / capacitate limitată" },
  { value: 25, label: "Peak (25%)", description: "Sezon foarte solicitat" },
];

export function PriceCalculator() {
  const [segments, setSegments] = useState<CountrySegment[]>([
    { id: "1", country: "DE", km: 300 },
    { id: "2", country: "FR", km: 500 },
  ]);
  const [transportType, setTransportType] = useState("standard");
  const [margin, setMargin] = useState(12);
  const [customMargin, setCustomMargin] = useState<number | null>(null);
  const [includeParking, setIncludeParking] = useState(false);
  const [parkingNights, setParkingNights] = useState(1);
  const [includeWaiting, setIncludeWaiting] = useState(false);
  const [waitingHours, setWaitingHours] = useState(2);

  const addSegment = () => {
    const newId = Date.now().toString();
    setSegments([...segments, { id: newId, country: "DE", km: 100 }]);
  };

  const removeSegment = (id: string) => {
    if (segments.length > 1) {
      setSegments(segments.filter(s => s.id !== id));
    }
  };

  const updateSegment = (id: string, field: "country" | "km", value: string | number) => {
    setSegments(segments.map(s => 
      s.id === id ? { ...s, [field]: value } : s
    ));
  };

  const calculation = useMemo(() => {
    const selectedTransport = TRANSPORT_TYPES.find(t => t.id === transportType)!;
    const totalKm = segments.reduce((sum, s) => sum + s.km, 0);
    
    // Base cost
    const baseCost = totalKm * selectedTransport.baseRate;
    
    // Toll costs by country
    const tollDetails = segments.map(s => {
      const country = TOLL_RATES[s.country];
      const tollCost = s.km * country.rate;
      return {
        country: s.country,
        name: country.name,
        flag: country.flag,
        km: s.km,
        rate: country.rate,
        cost: tollCost,
      };
    });
    
    const totalTolls = tollDetails.reduce((sum, t) => sum + t.cost, 0);
    
    // Accessories
    const parkingCost = includeParking ? parkingNights * 35 : 0;
    const waitingCost = includeWaiting ? waitingHours * 40 : 0;
    const accessoriesCost = parkingCost + waitingCost;
    
    // Total cost
    const totalCost = baseCost + totalTolls + accessoriesCost;
    
    // Final price with margin
    const effectiveMargin = customMargin !== null ? customMargin : margin;
    const finalPrice = totalCost * (1 + effectiveMargin / 100);
    const profit = finalPrice - totalCost;
    const costPerKm = totalKm > 0 ? totalCost / totalKm : 0;
    const pricePerKm = totalKm > 0 ? finalPrice / totalKm : 0;
    
    return {
      totalKm,
      baseCost,
      tollDetails,
      totalTolls,
      parkingCost,
      waitingCost,
      accessoriesCost,
      totalCost,
      effectiveMargin,
      finalPrice,
      profit,
      costPerKm,
      pricePerKm,
      transportName: selectedTransport.name,
    };
  }, [segments, transportType, margin, customMargin, includeParking, parkingNights, includeWaiting, waitingHours]);

  return (
    <div className="info-card">
      <h2 className="section-title flex items-center gap-3">
        <Calculator className="w-6 h-6 text-primary" />
        Calculator Interactiv de Prețuri
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Transport Type */}
          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center gap-2">
              <Truck className="w-4 h-4" />
              Tip Transport
            </Label>
            <Select value={transportType} onValueChange={setTransportType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TRANSPORT_TYPES.map(type => (
                  <SelectItem key={type.id} value={type.id}>
                    <div className="flex flex-col">
                      <span>{type.name}</span>
                      <span className="text-xs text-muted-foreground">{type.description} — €{type.baseRate.toFixed(2)}/km</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Country Segments */}
          <div className="space-y-3">
            <Label className="text-sm font-medium flex items-center gap-2">
              <Route className="w-4 h-4" />
              Rută pe Țări
            </Label>
            
            {segments.map((segment, index) => (
              <div key={segment.id} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <span className="text-xs text-muted-foreground w-6">{index + 1}.</span>
                <Select 
                  value={segment.country} 
                  onValueChange={(v) => updateSegment(segment.id, "country", v)}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(TOLL_RATES).map(([code, data]) => (
                      <SelectItem key={code} value={code}>
                        {data.flag} {data.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  value={segment.km}
                  onChange={(e) => updateSegment(segment.id, "km", parseInt(e.target.value) || 0)}
                  className="w-24"
                  min={0}
                />
                <span className="text-sm text-muted-foreground">km</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeSegment(segment.id)}
                  disabled={segments.length <= 1}
                  className="ml-auto"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
            
            <Button variant="outline" size="sm" onClick={addSegment} className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Adaugă Țară
            </Button>
          </div>

          {/* Margin Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-medium flex items-center gap-2">
              <Euro className="w-4 h-4" />
              Marjă de Profit
            </Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {MARGIN_PRESETS.map(preset => (
                <Button
                  key={preset.value}
                  variant={margin === preset.value && customMargin === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setMargin(preset.value);
                    setCustomMargin(null);
                  }}
                  className="flex flex-col h-auto py-2"
                >
                  <span className="font-medium">{preset.label}</span>
                  <span className="text-xs opacity-70">{preset.description}</span>
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="Marjă custom %"
                value={customMargin ?? ""}
                onChange={(e) => setCustomMargin(e.target.value ? parseInt(e.target.value) : null)}
                className="w-32"
                min={0}
                max={100}
              />
              <span className="text-sm text-muted-foreground">% marjă personalizată</span>
            </div>
          </div>

          {/* Accessories */}
          <div className="space-y-3 p-4 bg-muted/30 rounded-lg">
            <Label className="text-sm font-medium">Costuri Suplimentare</Label>
            
            <div className="flex items-center gap-3">
              <Checkbox 
                id="parking" 
                checked={includeParking}
                onCheckedChange={(checked) => setIncludeParking(checked as boolean)}
              />
              <label htmlFor="parking" className="text-sm cursor-pointer flex-1">
                Parcare securizată (€35/noapte)
              </label>
              {includeParking && (
                <Input
                  type="number"
                  value={parkingNights}
                  onChange={(e) => setParkingNights(parseInt(e.target.value) || 1)}
                  className="w-16"
                  min={1}
                />
              )}
            </div>
            
            <div className="flex items-center gap-3">
              <Checkbox 
                id="waiting" 
                checked={includeWaiting}
                onCheckedChange={(checked) => setIncludeWaiting(checked as boolean)}
              />
              <label htmlFor="waiting" className="text-sm cursor-pointer flex-1">
                Timp de așteptare (€40/oră)
              </label>
              {includeWaiting && (
                <Input
                  type="number"
                  value={waitingHours}
                  onChange={(e) => setWaitingHours(parseInt(e.target.value) || 1)}
                  className="w-16"
                  min={1}
                />
              )}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-primary to-rossik-dark p-6 rounded-xl text-primary-foreground">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              Rezultat Calcul
              <ArrowRight className="w-4 h-4" />
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-primary-foreground/20">
                <span className="text-primary-foreground/80">Total Kilometri</span>
                <span className="font-bold text-xl">{calculation.totalKm.toLocaleString()} km</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-primary-foreground/20">
                <span className="text-primary-foreground/80">Tip transport</span>
                <span className="font-medium">{calculation.transportName}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-primary-foreground/20">
                <span className="text-primary-foreground/80">Cost bază</span>
                <span className="font-medium">€{calculation.baseCost.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-primary-foreground/20">
                <span className="text-primary-foreground/80">Total taxe drum</span>
                <span className="font-medium">€{calculation.totalTolls.toFixed(2)}</span>
              </div>
              
              {calculation.accessoriesCost > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-primary-foreground/20">
                  <span className="text-primary-foreground/80">Accesorii</span>
                  <span className="font-medium">€{calculation.accessoriesCost.toFixed(2)}</span>
                </div>
              )}
              
              <div className="flex justify-between items-center py-3 bg-primary-foreground/10 rounded-lg px-3">
                <span className="font-semibold">COST TOTAL</span>
                <span className="font-bold text-xl">€{calculation.totalCost.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-primary-foreground/20">
                <span className="text-primary-foreground/80">Marjă aplicată</span>
                <span className="font-medium">{calculation.effectiveMargin}%</span>
              </div>
              
              <div className="flex justify-between items-center py-4 bg-primary-foreground/20 rounded-lg px-3 mt-2">
                <span className="font-bold text-lg">PREȚ RECOMANDAT</span>
                <span className="font-bold text-2xl">€{calculation.finalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Toll Breakdown */}
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-medium mb-3 text-sm">Detalii Taxe pe Țară</h4>
            <div className="space-y-2 text-sm">
              {calculation.tollDetails.map((toll, idx) => (
                <div key={idx} className="flex justify-between items-center py-1">
                  <span>{toll.flag} {toll.name} ({toll.km}km × €{toll.rate.toFixed(3)})</span>
                  <span className="font-medium">€{toll.cost.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-success/10 border border-success/30 p-3 rounded-lg text-center">
              <p className="text-xs text-muted-foreground">Profit</p>
              <p className="text-lg font-bold text-success">€{calculation.profit.toFixed(0)}</p>
            </div>
            <div className="bg-info/10 border border-info/30 p-3 rounded-lg text-center">
              <p className="text-xs text-muted-foreground">Cost/km</p>
              <p className="text-lg font-bold text-info">€{calculation.costPerKm.toFixed(2)}</p>
            </div>
            <div className="bg-warning/10 border border-warning/30 p-3 rounded-lg text-center">
              <p className="text-xs text-muted-foreground">Preț/km</p>
              <p className="text-lg font-bold text-warning">€{calculation.pricePerKm.toFixed(2)}</p>
            </div>
          </div>

          <div className="bg-info/10 border border-info/30 p-3 rounded-lg">
            <p className="text-xs flex items-start gap-2">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Calculul folosește ratele 2026 și nu include tuneluri, feriboturi sau alte taxe speciale. Ajustează manual pentru rute alpine sau maritime.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
