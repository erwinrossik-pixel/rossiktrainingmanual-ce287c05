import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { ChapterHero } from "../ChapterHero";
import {
  Laptop, Brain, Cpu, BarChart3, Globe, Wifi, 
  Lock, FileText, Zap, GraduationCap, CheckCircle, AlertTriangle
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function DigitalizationChapter() {
  const { ct } = useChapterTranslation('digitalization');
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={Laptop}
        variant="digitalization"
      />

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Laptop className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="section-title mb-2">{ct('section1Title')}</h2>
            <p className="text-muted-foreground">{ct('intro')}</p>
          </div>
        </div>
      </div>

      {/* What is Digitalization */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Cpu className="w-6 h-6 text-primary" />
          {ct('section1Title')}
        </h2>
        <div className="info-card">
          <p className="text-muted-foreground">{ct('section1Content')}</p>
        </div>
      </section>

      {/* AI in Transport */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Brain className="w-6 h-6 text-primary" />
          {ct('section2Title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct('section2Title')} icon={Brain}>
            <p className="text-muted-foreground">{ct('section2Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section3Title')} icon={Zap}>
            <p className="text-muted-foreground">{ct('section3Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* ML for Pricing */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-primary" />
          {ct('section4Title')}
        </h2>
        <div className="info-card">
          <p className="text-muted-foreground">{ct('section4Content')}</p>
        </div>
      </section>

      {/* Digital Platforms */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Globe className="w-6 h-6 text-primary" />
          {ct('section5Title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct('section5Title')} icon={Globe}>
            <p className="text-muted-foreground">{ct('section5Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section6Title')} icon={Wifi}>
            <p className="text-muted-foreground">{ct('section6Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Blockchain */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Lock className="w-6 h-6 text-primary" />
          {ct('section7Title')}
        </h2>
        <div className="info-card">
          <p className="text-muted-foreground">{ct('section7Content')}</p>
        </div>
      </section>

      {/* e-CMR & Cybersecurity */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          {ct('section8Title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct('section8Title')} icon={FileText}>
            <p className="text-muted-foreground">{ct('section8Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section9Title')} variant="warning" icon={Lock}>
            <p className="text-muted-foreground">{ct('section9Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Future Preparation */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <GraduationCap className="w-6 h-6 text-primary" />
          {ct('section10Title')}
        </h2>
        <div className="info-card">
          <p className="text-muted-foreground">{ct('section10Content')}</p>
        </div>
      </section>

      {/* Best Practices & Common Mistakes */}
      <section>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-success/10 border border-success/30 rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-success">
              <CheckCircle className="w-5 h-5" />
              Best Practices
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct('bestPractice1')}</li>
              <li>• {ct('bestPractice2')}</li>
              <li>• {ct('bestPractice3')}</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-destructive">
              <AlertTriangle className="w-5 h-5" />
              Common Mistakes
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct('commonMistake1')}</li>
              <li>• {ct('commonMistake2')}</li>
              <li>• {ct('commonMistake3')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quiz */}
      <Quiz title="Quiz" chapterId="digitalization" />
    </div>
  );
}
