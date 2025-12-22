import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Globe, Shield, MessageSquare, Search, Star, CreditCard } from "lucide-react";
import { Badge } from "../Badge";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function ExchangesChapter() {
  const { ct } = useChapterTranslation("exchanges");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">{ct("title")}</h1>
        <p className="text-lg text-muted-foreground">
          {ct("subtitle")}
        </p>
      </div>

      {/* Main Exchanges */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* TIMOCOM */}
        <div className="info-card border-t-4 border-t-blue-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
              TC
            </div>
            <div>
              <h3 className="font-semibold text-lg">TIMOCOM</h3>
              <Badge variant="info">Most Used in EU</Badge>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            Leading European freight exchange with extensive partner verification.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <span>Find & post loads/trucks</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-muted-foreground" />
              <span>Partner verification & rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-muted-foreground" />
              <span>Integrated in Translogica TMS</span>
            </div>
          </div>
        </div>

        {/* Trans.eu */}
        <div className="info-card border-t-4 border-t-green-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
              T.eu
            </div>
            <div>
              <h3 className="font-semibold text-lg">Trans.eu</h3>
              <Badge variant="success">Strong in CEE</Badge>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            Verified network with strong presence in Central/Eastern Europe.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <span>CEE/EU verified network</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-muted-foreground" />
              <span>Private tenders, in-app chat</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-muted-foreground" />
              <span>TransRisk scoring system</span>
            </div>
          </div>
        </div>

        {/* Teleroute */}
        <div className="info-card border-t-4 border-t-orange-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
              TR
            </div>
            <div>
              <h3 className="font-semibold text-lg">Teleroute</h3>
              <Badge variant="warning">Payment Protection</Badge>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            EU-wide platform with Coface-backed Payment Guarantee.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-muted-foreground" />
              <span>Payment Guarantee (Coface)</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <span>EU-wide coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-muted-foreground" />
              <span>Part of Alpega Group</span>
            </div>
          </div>
        </div>

        {/* Transporeon */}
        <div className="info-card border-t-4 border-t-purple-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
              TP
            </div>
            <div>
              <h3 className="font-semibold text-lg">Transporeon</h3>
              <Badge variant="primary">Enterprise Focus</Badge>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            Shipper-carrier network with advanced visibility features.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <span>eTendering platform</span>
            </div>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <span>Real-time visibility</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-muted-foreground" />
              <span>Telematics integration</span>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="info-card">
        <h2 className="section-title">Quick Comparison</h2>
        <DataTable 
          headers={["Platform", "Use Case", "Key Feature"]}
          rows={[
            ["TIMOCOM", "Daily spot loads", "Partner verification & rating"],
            ["Trans.eu", "CEE network", "Private tenders, in-app chat"],
            ["Teleroute", "Payment security", "Coface Payment Guarantee"],
            ["Transporeon", "Enterprise tenders", "eTendering, telematics"],
          ]}
        />
      </div>

      {/* Best Practices */}
      <div className="highlight-card">
        <h3 className="font-semibold mb-3">🎯 Exchange Best Practices</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ Always check partner ratings before booking</li>
            <li>✓ Verify insurance and licenses</li>
            <li>✓ Use platform messaging for audit trail</li>
            <li>✓ Save reliable partners to your TMS</li>
          </ul>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ Use Payment Guarantee for new partners</li>
            <li>✓ Check for driving ban countries</li>
            <li>✓ Confirm all details in writing</li>
            <li>✓ Rate partners after each job</li>
          </ul>
        </div>
      </div>

      {/* Quiz */}
      <Quiz title="🎯 Knowledge Check: Freight Exchanges" questions={quizzes.exchanges} chapterId="exchanges" />
    </div>
  );
}
