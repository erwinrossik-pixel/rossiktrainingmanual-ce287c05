import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { ChapterHero } from "../ChapterHero";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import {
  Diamond, Shield, Lock, Eye, Truck, MapPin,
  FileText, AlertTriangle, Phone, Users, CheckCircle, Book
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import highValueSecurityImg from "@/assets/chapters/high-value-security.jpg";

export function HighValueGoodsChapter() {
  const { ct } = useChapterTranslation('high-value-goods');
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={Diamond}
        variant="high-value-goods"
      />

      {/* High Value Security Image - Full width */}
      <ChapterImage
        src={highValueSecurityImg}
        alt="High security transport truck"
        caption={ct('highValueSecurityCaption') || "Transport securizat pentru mărfuri de mare valoare"}
        variant="full"
        className="mb-6"
      />

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Diamond className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="section-title mb-2">{ct('section1Title')}</h2>
            <p className="text-muted-foreground">{ct('intro')}</p>
          </div>
        </div>
      </div>

      {/* What Are High Value Goods */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Diamond className="w-6 h-6 text-primary" />
          {ct('section1Title')}
        </h2>
        <div className="info-card">
          <p className="text-muted-foreground">{ct('section1Content')}</p>
        </div>
      </section>

      {/* Risk Assessment & Security */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          {ct('section2Title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct('section2Title')} variant="warning" icon={AlertTriangle}>
            <p className="text-muted-foreground">{ct('section2Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section3Title')} icon={Lock}>
            <p className="text-muted-foreground">{ct('section3Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Loading Procedures */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Truck className="w-6 h-6 text-primary" />
          {ct('section4Title')}
        </h2>
        <div className="info-card">
          <p className="text-muted-foreground">{ct('section4Content')}</p>
        </div>
      </section>

      {/* Parking & Monitoring */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <MapPin className="w-6 h-6 text-primary" />
          {ct('section5Title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct('section5Title')} icon={MapPin}>
            <p className="text-muted-foreground">{ct('section5Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section6Title')} icon={Eye}>
            <p className="text-muted-foreground">{ct('section6Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Insurance & Documentation */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          {ct('section7Title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct('section7Title')} variant="info" icon={Shield}>
            <p className="text-muted-foreground">{ct('section7Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section8Title')} icon={FileText}>
            <p className="text-muted-foreground">{ct('section8Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Incident Response & Partners */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Phone className="w-6 h-6 text-primary" />
          {ct('section9Title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct('section9Title')} variant="warning" icon={Phone}>
            <p className="text-muted-foreground">{ct('section9Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section10Title')} icon={Users}>
            <p className="text-muted-foreground">{ct('section10Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Best Practices & Common Mistakes */}
      <section>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-success/10 border border-success/30 rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-success">
              <CheckCircle className="w-5 h-5" />
              {ct('bestPracticesTitle')}
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
              {ct('commonMistakesTitle')}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct('commonMistake1')}</li>
              <li>• {ct('commonMistake2')}</li>
              <li>• {ct('commonMistake3')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Book className="w-6 h-6 text-primary" />
          {ct('glossaryTitle')}
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div key={num} className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
              <dt className="font-semibold text-primary mb-1">
                {ct(`glossaryTerm${num}`)}
              </dt>
              <dd className="text-sm text-muted-foreground">
                {ct(`glossaryDef${num}`)}
              </dd>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="high-value-goods" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="high-value-goods" />
    </div>
  );
}
