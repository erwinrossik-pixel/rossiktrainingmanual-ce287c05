import { InfoCard } from "../InfoCard";
import { GraduationCap, Calculator, Search, Settings, FileText } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function TrainingChapter() {
  const { ct } = useChapterTranslation("training");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">{ct("title")}</h1>
        <p className="text-lg text-muted-foreground">
          {ct("subtitle")}
        </p>
      </div>

      {/* Exercise A */}
      <div className="info-card border-l-4 border-l-primary">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
            A
          </div>
          <div className="flex-1">
            <h2 className="section-title mb-2">Quotation Exercise</h2>
            <div className="p-4 bg-muted/50 rounded-lg mb-4">
              <p className="font-medium mb-2">Scenario:</p>
              <p className="text-muted-foreground">
                <strong>Stuttgart → Rotterdam</strong> (620 km)
              </p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• Base rate: €1.10/km</li>
                <li>• DE toll: €0.45/km</li>
                <li>• Target margin: 12%</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold">Deliverables:</h3>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 bg-accent rounded-lg flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  <span className="text-sm">Cost sheet</span>
                </div>
                <div className="p-3 bg-accent rounded-lg flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="text-sm">Schedule plan</span>
                </div>
                <div className="p-3 bg-accent rounded-lg flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="text-sm">Risk assessment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise B */}
      <div className="info-card border-l-4 border-l-info">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-info text-info-foreground rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
            B
          </div>
          <div className="flex-1">
            <h2 className="section-title mb-2">Backhaul Exercise</h2>
            <div className="p-4 bg-muted/50 rounded-lg mb-4">
              <p className="font-medium mb-2">Scenario:</p>
              <p className="text-muted-foreground">
                Find a backhaul load from <strong>Netherlands → DE/AT/CZ</strong> on Teleroute
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold">Tasks:</h3>
              <div className="space-y-2">
                <div className="p-3 bg-accent rounded-lg flex items-center gap-2">
                  <Search className="w-5 h-5 text-info" />
                  <span className="text-sm">Search and identify suitable loads</span>
                </div>
                <div className="p-3 bg-accent rounded-lg flex items-center gap-2">
                  <FileText className="w-5 h-5 text-info" />
                  <span className="text-sm">Draft negotiation approach</span>
                </div>
                <div className="p-3 bg-accent rounded-lg flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-info" />
                  <span className="text-sm">Evaluate Payment Guarantee option</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise C */}
      <div className="info-card border-l-4 border-l-success">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-success text-success-foreground rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
            C
          </div>
          <div className="flex-1">
            <h2 className="section-title mb-2">Translogica TMS Exercise</h2>
            <div className="p-4 bg-muted/50 rounded-lg mb-4">
              <p className="font-medium mb-2">Scenario:</p>
              <p className="text-muted-foreground">
                Build lane templates in Translogica for common routes
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold">Tasks:</h3>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 bg-accent rounded-lg text-center">
                  <p className="font-semibold text-sm">Template 1</p>
                  <p className="text-xs text-muted-foreground">DE ↔ FR</p>
                </div>
                <div className="p-3 bg-accent rounded-lg text-center">
                  <p className="font-semibold text-sm">Template 2</p>
                  <p className="text-xs text-muted-foreground">AT ↔ IT</p>
                </div>
                <div className="p-3 bg-accent rounded-lg text-center">
                  <p className="font-semibold text-sm">Template 3</p>
                  <p className="text-xs text-muted-foreground">PL ↔ DE</p>
                </div>
              </div>
              
              <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-warning" />
                  <span className="text-sm font-medium">Bonus: Create workflow that flags margins &lt;€0.12/km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Evaluation Criteria */}
      <div className="highlight-card">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-primary" />
          Evaluation Criteria
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Accuracy of calculations
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Completeness of documentation
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Risk identification
            </li>
          </ul>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              TMS proficiency
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Communication clarity
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Problem-solving approach
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
