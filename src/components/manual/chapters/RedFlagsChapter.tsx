import { AlertTriangle, Lightbulb, X, Check } from "lucide-react";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";

export function RedFlagsChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Red Flags & Pro Tips</h1>
        <p className="text-lg text-muted-foreground">
          Common pitfalls to avoid and expert advice for success.
        </p>
      </div>

      {/* Red Flags */}
      <div className="space-y-4">
        <h2 className="section-title flex items-center gap-3 text-destructive">
          <AlertTriangle className="w-6 h-6" />
          Red Flags – Watch Out!
        </h2>
        
        {[
          {
            title: "Cheap FR Lanes Without Toll Analysis",
            desc: "France has expensive toll roads. Always calculate the full toll cost before accepting a seemingly attractive rate.",
            tip: "Use Translogica's PTV integration to get accurate toll estimates."
          },
          {
            title: "Germany's 2024 CO₂ Toll Tiers",
            desc: "Toll rates now depend on CO₂ class AND axle count. Euro 6 trucks pay less than older vehicles.",
            tip: "Verify the exact vehicle specs and emission class before quoting."
          },
          {
            title: "Tirol/Austria Restrictions",
            desc: "Night driving bans, sectoral driving bans, and double toll between 22:00-05:00 on Brenner.",
            tip: "Plan alternative corridors (Fernpass, Reschenpass) or adjust timing."
          },
          {
            title: "Unverified Partners",
            desc: "Never book with carriers that have no ratings or missing documents. Payment defaults are common.",
            tip: "Use Payment Guarantee on Teleroute for new partners."
          },
          {
            title: "Missing Documentation",
            desc: "No photos = no proof. If cargo is damaged, you have no defense without documentation.",
            tip: "Always document with timestamped photos at loading and unloading."
          },
        ].map((item, i) => (
          <div key={i} className="p-5 bg-destructive/5 rounded-xl border border-destructive/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                <div className="flex items-center gap-2 text-sm text-success">
                  <Lightbulb className="w-4 h-4" />
                  <span>{item.tip}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pro Tips */}
      <div className="space-y-4">
        <h2 className="section-title flex items-center gap-3 text-success">
          <Lightbulb className="w-6 h-6" />
          Pro Tips – Best Practices
        </h2>
        
        {[
          {
            title: "Photo + Timestamp = Protection",
            desc: "Every loading and unloading should be documented with timestamped photos. This is your insurance defense.",
          },
          {
            title: "Store Lane Templates",
            desc: "Create templates in Translogica for your regular routes with pre-calculated tolls, distances, and typical rates.",
          },
          {
            title: "Build Carrier Relationships",
            desc: "Reliable carriers are worth more than cheap spot rates. Invest in long-term partnerships.",
          },
          {
            title: "Communicate Proactively",
            desc: "Inform clients about delays BEFORE they ask. Bad news delivered early is better than surprises.",
          },
          {
            title: "Double-Check Border Crossings",
            desc: "Verify customs requirements, transit permits (T1/T2), and any special documentation needed.",
          },
          {
            title: "Use the 4W Model Always",
            desc: "Who, What, When, Where – cover these in every communication and you'll avoid misunderstandings.",
          },
        ].map((item, i) => (
          <div key={i} className="p-5 bg-success/5 rounded-xl border border-success/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-success" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Golden Rules */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-rossik-dark p-8 text-primary-foreground">
        <h2 className="text-2xl font-bold mb-6 font-serif">🏆 Golden Rules</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Documentation = Protection",
            "Communicate early and often",
            "Verify before you trust",
            "Plan for problems",
            "Know your costs",
            "Respect your partners",
          ].map((rule, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-primary-foreground/10 rounded-lg">
              <span className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              <span>{rule}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quiz */}
      <Quiz title="🎯 Knowledge Check: Red Flags & Tips" questions={quizzes["red-flags"]} chapterId="red-flags" />
    </div>
  );
}
