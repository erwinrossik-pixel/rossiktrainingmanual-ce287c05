import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { GraduationCap, BookOpen, Target, Users, CheckCircle2, Calendar } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function TrainingChapter() {
  const { ct } = useChapterTranslation('training');
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={GraduationCap}
        variant="training"
      />

      {/* Training Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-primary" />
          {ct('trainingOverviewTitle')}
        </h2>
        <p className="text-muted-foreground mb-4">{ct('trainingOverviewDesc')}</p>
        
        <InfoCard title={ct('programObjectives')} icon={Target}>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
              {ct('objective1')}
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
              {ct('objective2')}
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
              {ct('objective3')}
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
              {ct('objective4')}
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
              {ct('objective5')}
            </li>
          </ul>
        </InfoCard>
      </section>

      {/* Week 1-2 */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Calendar className="w-6 h-6 text-primary" />
          {ct('fundamentalsTitle')}
        </h2>
        <p className="text-muted-foreground mb-4">{ct('fundamentalsDesc')}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard title={ct('week1Topics')} icon={BookOpen}>
            <ul className="space-y-2 text-sm">
              <li>• {ct('week1Topic1')}</li>
              <li>• {ct('week1Topic2')}</li>
              <li>• {ct('week1Topic3')}</li>
              <li>• {ct('week1Topic4')}</li>
              <li>• {ct('week1Topic5')}</li>
            </ul>
          </InfoCard>
          
          <InfoCard title={ct('week2Topics')} icon={BookOpen}>
            <ul className="space-y-2 text-sm">
              <li>• {ct('week2Topic1')}</li>
              <li>• {ct('week2Topic2')}</li>
              <li>• {ct('week2Topic3')}</li>
              <li>• {ct('week2Topic4')}</li>
              <li>• {ct('week2Topic5')}</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Week 3-4 */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif">{ct('operationsTitle')}</h2>
        <p className="text-muted-foreground mb-4">{ct('operationsDesc')}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard title={ct('week3Topics')} icon={BookOpen}>
            <ul className="space-y-2 text-sm">
              <li>• {ct('week3Topic1')}</li>
              <li>• {ct('week3Topic2')}</li>
              <li>• {ct('week3Topic3')}</li>
              <li>• {ct('week3Topic4')}</li>
              <li>• {ct('week3Topic5')}</li>
            </ul>
          </InfoCard>
          
          <InfoCard title={ct('week4Topics')} icon={BookOpen}>
            <ul className="space-y-2 text-sm">
              <li>• {ct('week4Topic1')}</li>
              <li>• {ct('week4Topic2')}</li>
              <li>• {ct('week4Topic3')}</li>
              <li>• {ct('week4Topic4')}</li>
              <li>• {ct('week4Topic5')}</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Mentorship */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" />
          {ct('mentorshipTitle')}
        </h2>
        <p className="text-muted-foreground mb-4">{ct('mentorshipDesc')}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard title={ct('mentorRole')} icon={Users}>
            <ul className="space-y-2 text-sm">
              <li>• {ct('mentorRole1')}</li>
              <li>• {ct('mentorRole2')}</li>
              <li>• {ct('mentorRole3')}</li>
              <li>• {ct('mentorRole4')}</li>
              <li>• {ct('mentorRole5')}</li>
            </ul>
          </InfoCard>
          
          <InfoCard title={ct('traineeRole')} icon={GraduationCap}>
            <ul className="space-y-2 text-sm">
              <li>• {ct('traineeRole1')}</li>
              <li>• {ct('traineeRole2')}</li>
              <li>• {ct('traineeRole3')}</li>
              <li>• {ct('traineeRole4')}</li>
              <li>• {ct('traineeRole5')}</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Quiz */}
      {quizzes.training && <Quiz quizId="training" />}
    </div>
  );
}
