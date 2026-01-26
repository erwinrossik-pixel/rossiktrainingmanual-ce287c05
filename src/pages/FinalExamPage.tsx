import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { FinalExam } from "@/components/manual/FinalExam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lock, Trophy, BookOpen, Target, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

// All chapter IDs that need to be completed
const allChapterIds = [
  'intro', 'mindset', 'soft-skills', 'stress-management', 'workflow',
  'vehicle', 'loading', 'reefer', 'express-transport', 'intermodal', 'warehouse', 'adr',
  'documents', 'incoterms', 'customs', 'authorities', 'compliance', 'driving-time', 'licenses-oversize',
  'europe-zones', 'european-countries', 'environment', 'sustainability', 'supply-chain',
  'pricing', 'commercial', 'negotiation', 'clients', 'carrier-management', 'exchanges', 'communication', 'networking', 'kpi',
  'translogica', 'fleet', 'technology', 'digitalization',
  'risk-management', 'insurance', 'high-value-goods', 'claims', 'payment', 'accounting',
  'training', 'professional-development', 'case-studies', 'emergency', 'red-flags', 'checklists', 'glossary'
];

export default function FinalExamPage() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { language } = useLanguage();
  const { getChapterStatus, loading: progressLoading } = useChapterProgress();
  const [canTakeExam, setCanTakeExam] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  const [startExam, setStartExam] = useState(false);

  useEffect(() => {
    if (!progressLoading && user) {
      let completed = 0;
      allChapterIds.forEach(chapterId => {
        const status = getChapterStatus(chapterId);
        if (status === 'completed') {
          completed++;
        }
      });
      setCompletedCount(completed);
      setCanTakeExam(completed >= 50);
    }
  }, [progressLoading, user, getChapterStatus]);

  const labels = {
    title: language === 'ro' ? 'Examen Final' : language === 'de' ? 'Abschlussprüfung' : 'Final Exam',
    subtitle: language === 'ro' 
      ? 'Evaluează-ți cunoștințele din toate cele 50 de capitole' 
      : language === 'de' 
      ? 'Testen Sie Ihr Wissen aus allen 50 Kapiteln' 
      : 'Test your knowledge from all 50 chapters',
    locked: language === 'ro' 
      ? 'Trebuie să finalizezi toate capitolele pentru a accesa examenul final' 
      : language === 'de' 
      ? 'Sie müssen alle Kapitel abschließen, um die Abschlussprüfung zu absolvieren' 
      : 'You must complete all chapters to access the final exam',
    progress: language === 'ro' ? 'Progres' : language === 'de' ? 'Fortschritt' : 'Progress',
    chaptersCompleted: language === 'ro' 
      ? `${completedCount} din 50 capitole finalizate` 
      : language === 'de' 
      ? `${completedCount} von 50 Kapiteln abgeschlossen` 
      : `${completedCount} of 50 chapters completed`,
    startExam: language === 'ro' ? 'Începe Examenul' : language === 'de' ? 'Prüfung Starten' : 'Start Exam',
    back: language === 'ro' ? 'Înapoi la Manual' : language === 'de' ? 'Zurück zum Handbuch' : 'Back to Manual',
    loginRequired: language === 'ro' 
      ? 'Trebuie să fii autentificat pentru a susține examenul final' 
      : language === 'de' 
      ? 'Sie müssen angemeldet sein, um die Abschlussprüfung abzulegen' 
      : 'You must be logged in to take the final exam',
    login: language === 'ro' ? 'Autentificare' : language === 'de' ? 'Anmelden' : 'Log In',
    examDetails: language === 'ro' 
      ? '100 de întrebări din toate cele 50 de capitole (2 întrebări/capitol). Scor minim: 90%.' 
      : language === 'de' 
      ? '100 Fragen aus allen 50 Kapiteln (2 Fragen/Kapitel). Mindestpunktzahl: 90%.' 
      : '100 questions from all 50 chapters (2 questions/chapter). Minimum score: 90%.',
    features: {
      questions: language === 'ro' ? '100 Întrebări' : language === 'de' ? '100 Fragen' : '100 Questions',
      chapters: language === 'ro' ? '50 Capitole' : language === 'de' ? '50 Kapitel' : '50 Chapters',
      passingScore: language === 'ro' ? '90% pentru promovare' : language === 'de' ? '90% zum Bestehen' : '90% to pass',
    },
  };

  if (authLoading || progressLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <Lock className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <CardTitle>{labels.title}</CardTitle>
            <CardDescription>{labels.loginRequired}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={() => navigate('/auth')} className="w-full">
              {labels.login}
            </Button>
            <Button variant="outline" onClick={() => navigate('/')} className="w-full">
              {labels.back}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show exam
  if (startExam && canTakeExam) {
    return (
      <div className="min-h-screen bg-background">
        <FinalExam 
          onComplete={(score, total, passed) => {
            console.log('Exam completed:', { score, total, passed });
          }}
          onBack={() => setStartExam(false)}
        />
      </div>
    );
  }

  // Landing page
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-6">
        {/* Back button */}
        <Button variant="ghost" onClick={() => navigate('/')} className="mb-6 gap-2">
          <ArrowLeft className="w-4 h-4" />
          {labels.back}
        </Button>

        <Card className="border-2">
          <CardHeader className="text-center pb-2">
            <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${
              canTakeExam ? 'bg-success/20' : 'bg-muted'
            }`}>
              {canTakeExam ? (
                <Trophy className="w-10 h-10 text-success" />
              ) : (
                <Lock className="w-10 h-10 text-muted-foreground" />
              )}
            </div>
            <CardTitle className="text-3xl">{labels.title}</CardTitle>
            <CardDescription className="text-lg">{labels.subtitle}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <BookOpen className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="font-bold">{labels.features.questions}</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <Target className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="font-bold">{labels.features.chapters}</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="font-bold">{labels.features.passingScore}</p>
              </div>
            </div>

            <p className="text-center text-muted-foreground">{labels.examDetails}</p>

            {/* Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{labels.progress}</span>
                <span className={canTakeExam ? 'text-success font-medium' : ''}>
                  {labels.chaptersCompleted}
                </span>
              </div>
              <Progress 
                value={(completedCount / 50) * 100} 
                className={`h-3 ${canTakeExam ? '[&>div]:bg-success' : ''}`}
              />
            </div>

            {/* Status message */}
            {!canTakeExam && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-center">
                <Lock className="w-5 h-5 mx-auto mb-2 text-destructive" />
                <p className="text-sm text-destructive">{labels.locked}</p>
              </div>
            )}

            {/* Action */}
            <Button 
              onClick={() => setStartExam(true)} 
              disabled={!canTakeExam}
              size="lg"
              className="w-full text-lg py-6"
            >
              {canTakeExam ? (
                <>
                  <Trophy className="w-5 h-5 mr-2" />
                  {labels.startExam}
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5 mr-2" />
                  {labels.startExam}
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
