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
            <h2 className="section-title mb-2">{ct("exerciseA")}</h2>
            <div className="p-4 bg-muted/50 rounded-lg mb-4">
              <p className="font-medium mb-2">{ct("exerciseAScenario")}</p>
              <p className="text-muted-foreground">
                <strong>{ct("exerciseARoute")}</strong> {ct("exerciseADistance")}
              </p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• {ct("exerciseABaseRate")}</li>
                <li>• {ct("exerciseAToll")}</li>
                <li>• {ct("exerciseAMargin")}</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold">{ct("deliverables")}</h3>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 bg-accent rounded-lg flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  <span className="text-sm">{ct("costSheet")}</span>
                </div>
                <div className="p-3 bg-accent rounded-lg flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="text-sm">{ct("schedulePlan")}</span>
                </div>
                <div className="p-3 bg-accent rounded-lg flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="text-sm">{ct("riskAssessment")}</span>
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
            <h2 className="section-title mb-2">{ct("exerciseB")}</h2>
            <div className="p-4 bg-muted/50 rounded-lg mb-4">
              <p className="font-medium mb-2">{ct("exerciseBScenario")}</p>
              <p className="text-muted-foreground">
                {ct("exerciseBRoute")}
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold">{ct("tasks")}</h3>
              <div className="space-y-2">
                <div className="p-3 bg-accent rounded-lg flex items-center gap-2">
                  <Search className="w-5 h-5 text-info" />
                  <span className="text-sm">{ct("searchIdentifyLoads")}</span>
                </div>
                <div className="p-3 bg-accent rounded-lg flex items-center gap-2">
                  <FileText className="w-5 h-5 text-info" />
                  <span className="text-sm">{ct("draftNegotiation")}</span>
                </div>
                <div className="p-3 bg-accent rounded-lg flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-info" />
                  <span className="text-sm">{ct("evaluatePaymentGuarantee")}</span>
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
            <h2 className="section-title mb-2">{ct("exerciseC")}</h2>
            <div className="p-4 bg-muted/50 rounded-lg mb-4">
              <p className="font-medium mb-2">{ct("exerciseCScenario")}</p>
              <p className="text-muted-foreground">
                {ct("exerciseCRoute")}
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold">{ct("tasks")}</h3>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 bg-accent rounded-lg text-center">
                  <p className="font-semibold text-sm">{ct("template1")}</p>
                  <p className="text-xs text-muted-foreground">{ct("template1Route")}</p>
                </div>
                <div className="p-3 bg-accent rounded-lg text-center">
                  <p className="font-semibold text-sm">{ct("template2")}</p>
                  <p className="text-xs text-muted-foreground">{ct("template2Route")}</p>
                </div>
                <div className="p-3 bg-accent rounded-lg text-center">
                  <p className="font-semibold text-sm">{ct("template3")}</p>
                  <p className="text-xs text-muted-foreground">{ct("template3Route")}</p>
                </div>
              </div>
              
              <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-warning" />
                  <span className="text-sm font-medium">{ct("bonus")}</span>
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
          {ct("evaluationCriteria")}
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              {ct("accuracyCalculations")}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              {ct("completenessDocumentation")}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              {ct("riskIdentification")}
            </li>
          </ul>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              {ct("tmsProficiency")}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              {ct("communicationClarity")}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              {ct("problemSolvingApproach")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
