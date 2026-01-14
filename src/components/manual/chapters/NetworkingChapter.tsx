import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { ChapterHero } from "../ChapterHero";
import { quizzes } from "@/data/quizData";
import { 
  Users, Handshake, Globe, Calendar, Laptop,
  Building2, Heart, Shield, Gift, Clock, CheckCircle, AlertTriangle
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function NetworkingChapter() {
  const { ct } = useChapterTranslation('networking');
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={Users}
        variant="networking"
      />

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="section-title mb-2">{ct('section1Title')}</h2>
            <p className="text-muted-foreground">{ct('intro')}</p>
          </div>
        </div>
      </div>

      {/* Why Networking */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Handshake className="w-6 h-6 text-primary" />
          {ct('section1Title')}
        </h2>
        <div className="info-card">
          <p className="text-muted-foreground">{ct('section1Content')}</p>
        </div>
      </section>

      {/* Building Relationships */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Heart className="w-6 h-6 text-primary" />
          {ct('section2Title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct('section2Title')} icon={Heart}>
            <p className="text-muted-foreground">{ct('section2Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section3Title')} icon={Users}>
            <p className="text-muted-foreground">{ct('section3Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Events & Digital */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Calendar className="w-6 h-6 text-primary" />
          {ct('section4Title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct('section4Title')} icon={Calendar}>
            <p className="text-muted-foreground">{ct('section4Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section5Title')} icon={Laptop}>
            <p className="text-muted-foreground">{ct('section5Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Building2 className="w-6 h-6 text-primary" />
          {ct('section6Title')}
        </h2>
        <div className="info-card">
          <p className="text-muted-foreground">{ct('section6Content')}</p>
        </div>
      </section>

      {/* Client Management & Crisis */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Globe className="w-6 h-6 text-primary" />
          {ct('section7Title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct('section7Title')} icon={Globe}>
            <p className="text-muted-foreground">{ct('section7Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section8Title')} variant="warning" icon={Shield}>
            <p className="text-muted-foreground">{ct('section8Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Reciprocity & Maintenance */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Gift className="w-6 h-6 text-primary" />
          {ct('section9Title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct('section9Title')} icon={Gift}>
            <p className="text-muted-foreground">{ct('section9Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section10Title')} icon={Clock}>
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
      <Quiz quizId="networking" questions={quizzes.networking} />
    </div>
  );
}
