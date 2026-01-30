import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { ChapterHero } from "../ChapterHero";
import { MultiModalContent } from "../MultiModalContent";
import {
  Leaf, Globe, Calculator, FileText, Award,
  TrendingDown, Fuel, BarChart3, Users, Target, CheckCircle, AlertTriangle, Book
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

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

      {/* Environmental Impact */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section1Title')}</span>
        </h2>
        <div className="info-card">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('section1Content')}</p>
        </div>
      </section>

      {/* Carbon Footprint & EU ETS */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section2Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section2Title')} icon={Calculator}>
            <p className="text-muted-foreground">{ct('section2Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section3Title')} variant="warning" icon={FileText}>
            <p className="text-muted-foreground">{ct('section3Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section4Title')}</span>
        </h2>
        <div className="info-card">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('section4Content')}</p>
        </div>
      </section>

      {/* Reduction Strategies & Alternative Fuels */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section5Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section5Title')} variant="success" icon={TrendingDown}>
            <p className="text-muted-foreground">{ct('section5Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section6Title')} icon={Fuel}>
            <p className="text-muted-foreground">{ct('section6Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Reporting & Offsetting */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section7Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section7Title')} icon={BarChart3}>
            <p className="text-muted-foreground">{ct('section7Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section8Title')} icon={Leaf}>
            <p className="text-muted-foreground">{ct('section8Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Client Requirements & Future */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section9Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section9Title')} icon={Users}>
            <p className="text-muted-foreground">{ct('section9Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section10Title')} icon={Target}>
            <p className="text-muted-foreground">{ct('section10Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Best Practices & Common Mistakes */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-success/10 border border-success/30 rounded-xl p-4 sm:p-5 lg:p-6">
            <h3 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-success text-sm sm:text-base">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>Best Practices</span>
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>• {ct('bestPractice1')}</li>
              <li>• {ct('bestPractice2')}</li>
              <li>• {ct('bestPractice3')}</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 sm:p-5 lg:p-6">
            <h3 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-destructive text-sm sm:text-base">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>Common Mistakes</span>
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>• {ct('commonMistake1')}</li>
              <li>• {ct('commonMistake2')}</li>
              <li>• {ct('commonMistake3')}</li>
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
      <Quiz title="Quiz" chapterId="sustainability" />
    </div>
  );
}
