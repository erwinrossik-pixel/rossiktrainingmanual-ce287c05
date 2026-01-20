import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { ChapterHero } from "../ChapterHero";
import {
  GraduationCap, TrendingUp, Award, BookOpen, Globe,
  Laptop, Users, Heart, Star, Target, CheckCircle, AlertTriangle, Book,
  Compass, Briefcase, Calendar, MessageSquare
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function ProfessionalDevelopmentChapter() {
  const { ct } = useChapterTranslation('professional-development');
  
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      <ChapterHero
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={GraduationCap}
        variant="professional-development"
      />

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="section-title mb-1.5 sm:mb-2">{ct('introTitle')}</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('intro')}</p>
          </div>
        </div>
      </div>

      {/* Career Paths */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section1Title')}</span>
        </h2>
        <div className="info-card">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">{ct('section1Content')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-muted-foreground">{ct('section1Detail1')}</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-muted-foreground">{ct('section1Detail2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical & Soft Skills */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section2Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section2Title')} icon={Compass}>
            <p className="text-muted-foreground text-sm">{ct('section2Content')}</p>
            <p className="text-xs text-muted-foreground/80 mt-2">{ct('section2Detail1')}</p>
          </InfoCard>
          <InfoCard title={ct('section3Title')} icon={Heart}>
            <p className="text-muted-foreground text-sm">{ct('section3Content')}</p>
            <p className="text-xs text-muted-foreground/80 mt-2">{ct('section3Detail1')}</p>
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
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">{ct('section4Content')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-muted-foreground">{ct('section4Detail1')}</p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-muted-foreground">{ct('section4Detail2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Learning */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section5Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section5Title')} icon={BookOpen}>
            <p className="text-muted-foreground text-sm">{ct('section5Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section6Title')} icon={Laptop}>
            <p className="text-muted-foreground text-sm">{ct('section6Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Languages & Digital Skills */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section7Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section7Title')} icon={Globe}>
            <p className="text-muted-foreground text-sm">{ct('section7Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section8Title')} icon={Laptop}>
            <p className="text-muted-foreground text-sm">{ct('section8Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Leadership & Mentoring */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section9Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section9Title')} icon={Users}>
            <p className="text-muted-foreground text-sm">{ct('section9Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section10Title')} icon={Target}>
            <p className="text-muted-foreground text-sm">{ct('section10Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Case Study */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('caseStudyTitle')}</span>
        </h2>
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-4 sm:p-6">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">{ct('caseStudyContent')}</p>
          <div className="bg-background/80 rounded-lg p-3 sm:p-4 border border-primary/10">
            <p className="text-xs sm:text-sm text-primary font-medium">{ct('caseStudyLesson')}</p>
          </div>
        </div>
      </section>

      {/* Annual Checklist */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('checklistTitle')}</span>
        </h2>
        <div className="info-card">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {ct('checklistItems').split(' | ').map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2 sm:p-3 bg-muted/50 rounded-lg">
                <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
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
              <li>• {ct('bestPractice4')}</li>
              <li>• {ct('bestPractice5')}</li>
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
              <li>• {ct('commonMistake4')}</li>
              <li>• {ct('commonMistake5')}</li>
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

      {/* Quiz */}
      <Quiz title="Quiz" chapterId="professional-development" />
    </div>
  );
}
