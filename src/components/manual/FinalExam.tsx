import { useState, useEffect, useMemo, useRef } from "react";
import { CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight, Shuffle, Lock, AlertTriangle, ChevronDown, ChevronUp, Award, Clock, Target, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { quizTranslations, TranslatedQuizQuestion } from "@/data/quizTranslations";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  chapterId: string;
  chapterName: string;
}

// Seeded random number generator (Mulberry32)
function seededRandom(seed: number): () => number {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

// Generate numeric seed from string (user ID)
function stringToSeed(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  // Add date component so questions change daily
  const today = new Date();
  const dateHash = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  return Math.abs(hash + dateHash);
}

// Fisher-Yates shuffle algorithm with optional seed
function shuffleArray<T>(array: T[], rng?: () => number): T[] {
  const shuffled = [...array];
  const random = rng || Math.random;
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Chapter names for display
const chapterNames: Record<string, Record<string, string>> = {
  'intro': { ro: 'Introducere', de: 'Einführung', en: 'Introduction' },
  'mindset': { ro: 'Mentalitate', de: 'Denkweise', en: 'Mindset' },
  'soft-skills': { ro: 'Soft Skills', de: 'Soft Skills', en: 'Soft Skills' },
  'stress-management': { ro: 'Gestionarea Stresului', de: 'Stressmanagement', en: 'Stress Management' },
  'workflow': { ro: 'Flux de Lucru', de: 'Arbeitsablauf', en: 'Workflow' },
  'vehicle': { ro: 'Vehicule', de: 'Fahrzeuge', en: 'Vehicles' },
  'loading': { ro: 'Încărcare', de: 'Beladung', en: 'Loading' },
  'reefer': { ro: 'Transport Frigorific', de: 'Kühltransport', en: 'Reefer Transport' },
  'express-transport': { ro: 'Transport Express', de: 'Expresstransport', en: 'Express Transport' },
  'intermodal': { ro: 'Intermodal', de: 'Intermodal', en: 'Intermodal' },
  'warehouse': { ro: 'Depozitare', de: 'Lagerhaltung', en: 'Warehouse' },
  'adr': { ro: 'ADR', de: 'ADR', en: 'ADR' },
  'documents': { ro: 'Documente', de: 'Dokumente', en: 'Documents' },
  'incoterms': { ro: 'Incoterms', de: 'Incoterms', en: 'Incoterms' },
  'customs': { ro: 'Vamă', de: 'Zoll', en: 'Customs' },
  'authorities': { ro: 'Autorități', de: 'Behörden', en: 'Authorities' },
  'compliance': { ro: 'Conformitate', de: 'Compliance', en: 'Compliance' },
  'driving-time': { ro: 'Timp de Conducere', de: 'Lenkzeit', en: 'Driving Time' },
  'licenses-oversize': { ro: 'Licențe & Supradimensionat', de: 'Lizenzen & Übermaß', en: 'Licenses & Oversize' },
  'europe-zones': { ro: 'Zone Europa', de: 'Europa-Zonen', en: 'Europe Zones' },
  'european-countries': { ro: 'Țări Europene', de: 'Europäische Länder', en: 'European Countries' },
  'environment': { ro: 'Mediu', de: 'Umwelt', en: 'Environment' },
  'sustainability': { ro: 'Sustenabilitate', de: 'Nachhaltigkeit', en: 'Sustainability' },
  'supply-chain': { ro: 'Lanț de Aprovizionare', de: 'Lieferkette', en: 'Supply Chain' },
  'pricing': { ro: 'Prețuri', de: 'Preisgestaltung', en: 'Pricing' },
  'commercial': { ro: 'Comercial', de: 'Kommerziell', en: 'Commercial' },
  'negotiation': { ro: 'Negociere', de: 'Verhandlung', en: 'Negotiation' },
  'clients': { ro: 'Clienți', de: 'Kunden', en: 'Clients' },
  'carrier-management': { ro: 'Managementul Transportatorilor', de: 'Spediteur-Management', en: 'Carrier Management' },
  'exchanges': { ro: 'Burse de Marfă', de: 'Frachtbörsen', en: 'Freight Exchanges' },
  'communication': { ro: 'Comunicare', de: 'Kommunikation', en: 'Communication' },
  'networking': { ro: 'Networking', de: 'Networking', en: 'Networking' },
  'kpi': { ro: 'KPI', de: 'KPI', en: 'KPI' },
  'translogica': { ro: 'Translogica', de: 'Translogica', en: 'Translogica' },
  'fleet': { ro: 'Flotă', de: 'Flotte', en: 'Fleet' },
  'technology': { ro: 'Tehnologie', de: 'Technologie', en: 'Technology' },
  'digitalization': { ro: 'Digitalizare', de: 'Digitalisierung', en: 'Digitalization' },
  'risk-management': { ro: 'Managementul Riscului', de: 'Risikomanagement', en: 'Risk Management' },
  'insurance': { ro: 'Asigurări', de: 'Versicherung', en: 'Insurance' },
  'high-value-goods': { ro: 'Mărfuri de Valoare', de: 'Wertgüter', en: 'High Value Goods' },
  'claims': { ro: 'Reclamații', de: 'Reklamationen', en: 'Claims' },
  'payment': { ro: 'Plăți', de: 'Zahlung', en: 'Payment' },
  'accounting': { ro: 'Contabilitate', de: 'Buchhaltung', en: 'Accounting' },
  'training': { ro: 'Training', de: 'Schulung', en: 'Training' },
  'professional-development': { ro: 'Dezvoltare Profesională', de: 'Berufliche Entwicklung', en: 'Professional Development' },
  'case-studies': { ro: 'Studii de Caz', de: 'Fallstudien', en: 'Case Studies' },
  'emergency': { ro: 'Situații de Urgență', de: 'Notfälle', en: 'Emergency' },
  'red-flags': { ro: 'Semnale de Alarmă', de: 'Warnsignale', en: 'Red Flags' },
  'checklists': { ro: 'Checklist-uri', de: 'Checklisten', en: 'Checklists' },
  'glossary': { ro: 'Glosar', de: 'Glossar', en: 'Glossary' },
};

// All chapter IDs in order (excluding intro which has no quiz)
const allChapterIds = [
  'mindset', 'soft-skills', 'stress-management', 'workflow',
  'vehicle', 'loading', 'reefer', 'express-transport', 'intermodal', 'warehouse', 'adr',
  'documents', 'incoterms', 'customs', 'authorities', 'compliance', 'driving-time', 'licenses-oversize',
  'europe-zones', 'european-countries', 'environment', 'sustainability', 'supply-chain',
  'pricing', 'commercial', 'negotiation', 'clients', 'carrier-management', 'exchanges', 'communication', 'networking', 'kpi',
  'translogica', 'fleet', 'technology', 'digitalization',
  'risk-management', 'insurance', 'high-value-goods', 'claims', 'payment', 'accounting',
  'training', 'professional-development', 'case-studies', 'emergency', 'red-flags', 'checklists', 'glossary'
];

const TOTAL_QUESTIONS = 100;
const QUESTIONS_PER_CHAPTER = 2;
const PASSING_SCORE = 90; // 90% to pass final exam

interface FinalExamProps {
  onComplete?: (score: number, total: number, passed: boolean) => void;
  onBack?: () => void;
}

export function FinalExam({ onComplete, onBack }: FinalExamProps) {
  const { language } = useLanguage();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [examQuestions, setExamQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [examCompleted, setExamCompleted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<Array<{
    question: string;
    userAnswer: string;
    correctAnswer: string;
    explanation: string;
    chapterName: string;
    questionIndex: number;
  }>>([]);
  const [showWrongAnswers, setShowWrongAnswers] = useState(false);
  const [startTime] = useState<Date>(new Date());
  const [elapsedTime, setElapsedTime] = useState(0);

  // Timer
  useEffect(() => {
    if (!examCompleted) {
      const timer = setInterval(() => {
        setElapsedTime(Math.floor((new Date().getTime() - startTime.getTime()) / 1000));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [startTime, examCompleted]);

  // Generate exam questions on mount - unique per user
  useEffect(() => {
    const generateExamQuestions = (userId: string): QuizQuestion[] => {
      const questions: QuizQuestion[] = [];
      
      // Create a seeded RNG based on user ID + date
      const seed = stringToSeed(userId);
      const rng = seededRandom(seed);
      
      allChapterIds.forEach((chapterId, chapterIndex) => {
        const chapterQuestions = quizTranslations[chapterId];
        if (!chapterQuestions || chapterQuestions.length === 0) return;
        
        // Get translated questions for this chapter
        const translatedQuestions = chapterQuestions.map((q: TranslatedQuizQuestion, qIndex: number) => ({
          question: q.question[language] || q.question.en,
          options: q.options[language] || q.options.en,
          correctIndex: q.correctIndex,
          explanation: q.explanation[language] || q.explanation.en,
          chapterId,
          chapterName: chapterNames[chapterId]?.[language] || chapterId,
          originalIndex: qIndex // Keep track of original index for consistent selection
        }));
        
        // Use chapter-specific seed for shuffling within each chapter
        const chapterSeed = seed + chapterIndex * 1000;
        const chapterRng = seededRandom(chapterSeed);
        
        // Shuffle and pick 2 questions using seeded RNG
        const shuffled = shuffleArray(translatedQuestions, chapterRng);
        const selected = shuffled.slice(0, QUESTIONS_PER_CHAPTER);
        questions.push(...selected);
      });
      
      // Final shuffle of all questions (also seeded)
      return shuffleArray(questions, rng);
    };
    
    // Use user ID if available, otherwise generate a session-based ID
    const uniqueId = user?.id || `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const questions = generateExamQuestions(uniqueId);
    setExamQuestions(questions);
    setAnsweredQuestions(new Array(questions.length).fill(false));
  }, [language, user?.id]);

  const formatTime = (seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const question = examQuestions[currentQuestion];
  const passed = score >= PASSING_SCORE;
  const percentage = examQuestions.length > 0 ? Math.round((score / examQuestions.length) * 100) : 0;

  const handleAnswer = async (index: number) => {
    if (typeof index !== 'number' || index < 0 || !question || answeredQuestions[currentQuestion]) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);
    
    const isCorrect = index === question.correctIndex;
    
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setWrongAnswers(prev => [...prev, {
        question: question.question,
        userAnswer: question.options[index],
        correctAnswer: question.options[question.correctIndex],
        explanation: question.explanation,
        chapterName: question.chapterName,
        questionIndex: currentQuestion + 1
      }]);
    }
  };

  const handleNext = async () => {
    if (currentQuestion < examQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      const finalScore = score + (selectedAnswer === question?.correctIndex ? 1 : 0);
      setExamCompleted(true);
      
      // Save to database
      if (user) {
        setIsSaving(true);
        try {
          // Save final exam result
          const { error } = await supabase
            .from('certificates')
            .upsert({
              user_id: user.id,
              trainee_name: user.email || 'User',
              certificate_code: `FINAL-${Date.now()}-${user.id.slice(0, 8)}`,
              average_score: finalScore,
              chapters_completed: 50,
              quizzes_passed: 50,
              total_training_hours: Math.round(elapsedTime / 3600 * 10) / 10,
              issued_at: new Date().toISOString(),
              expires_at: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
            }, {
              onConflict: 'user_id'
            });
            
          if (error) {
            console.error('Error saving final exam:', error);
          } else {
            toast({
              title: language === 'ro' ? 'Examen salvat!' : language === 'de' ? 'Prüfung gespeichert!' : 'Exam saved!',
              description: language === 'ro' ? 'Rezultatul tău a fost înregistrat.' : language === 'de' ? 'Ihr Ergebnis wurde aufgezeichnet.' : 'Your result has been recorded.',
            });
          }
        } catch (error) {
          console.error('Error saving final exam:', error);
        }
        setIsSaving(false);
      }
      
      onComplete?.(finalScore, examQuestions.length, finalScore >= PASSING_SCORE);
    }
  };

  const handleRestart = () => {
    // Regenerate questions with NEW random seed (different questions on retry)
    const generateExamQuestions = (): QuizQuestion[] => {
      const questions: QuizQuestion[] = [];
      
      // Create a new seed based on user ID + current timestamp for fresh questions
      const retrySeed = stringToSeed((user?.id || 'anon') + '-retry-' + Date.now());
      const rng = seededRandom(retrySeed);
      
      allChapterIds.forEach((chapterId, chapterIndex) => {
        const chapterQuestions = quizTranslations[chapterId];
        if (!chapterQuestions || chapterQuestions.length === 0) return;
        
        const translatedQuestions = chapterQuestions.map((q: TranslatedQuizQuestion) => ({
          question: q.question[language] || q.question.en,
          options: q.options[language] || q.options.en,
          correctIndex: q.correctIndex,
          explanation: q.explanation[language] || q.explanation.en,
          chapterId,
          chapterName: chapterNames[chapterId]?.[language] || chapterId
        }));
        
        // Use chapter-specific seed for shuffling
        const chapterSeed = retrySeed + chapterIndex * 1000;
        const chapterRng = seededRandom(chapterSeed);
        
        const shuffled = shuffleArray(translatedQuestions, chapterRng);
        const selected = shuffled.slice(0, QUESTIONS_PER_CHAPTER);
        questions.push(...selected);
      });
      
      return shuffleArray(questions, rng);
    };
    
    const questions = generateExamQuestions();
    setExamQuestions(questions);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(questions.length).fill(false));
    setExamCompleted(false);
    setWrongAnswers([]);
    setShowWrongAnswers(false);
  };

  // Labels
  const labels = {
    title: language === 'ro' ? 'Examen Final - 100 Întrebări' : language === 'de' ? 'Abschlussprüfung - 100 Fragen' : 'Final Exam - 100 Questions',
    subtitle: language === 'ro' ? 'Evaluare completă a cunoștințelor din toate cele 50 de capitole' : language === 'de' ? 'Vollständige Wissensbewertung aus allen 50 Kapiteln' : 'Complete knowledge assessment from all 50 chapters',
    examComplete: language === 'ro' ? 'Examen Finalizat!' : language === 'de' ? 'Prüfung Abgeschlossen!' : 'Exam Complete!',
    passed: language === 'ro' ? 'Felicitări! Ai trecut examenul final!' : language === 'de' ? 'Herzlichen Glückwunsch! Sie haben die Abschlussprüfung bestanden!' : 'Congratulations! You passed the final exam!',
    failed: language === 'ro' ? `Ai nevoie de ${PASSING_SCORE}% pentru a trece examenul.` : language === 'de' ? `Sie benötigen ${PASSING_SCORE}%, um die Prüfung zu bestehen.` : `You need ${PASSING_SCORE}% to pass the exam.`,
    tryAgain: language === 'ro' ? 'Încearcă Din Nou' : language === 'de' ? 'Erneut Versuchen' : 'Try Again',
    question: language === 'ro' 
      ? `Întrebarea ${currentQuestion + 1} din ${examQuestions.length}`
      : language === 'de'
      ? `Frage ${currentQuestion + 1} von ${examQuestions.length}`
      : `Question ${currentQuestion + 1} of ${examQuestions.length}`,
    nextQuestion: language === 'ro' ? 'Următoarea Întrebare' : language === 'de' ? 'Nächste Frage' : 'Next Question',
    seeResults: language === 'ro' ? 'Vezi Rezultatele' : language === 'de' ? 'Ergebnisse Anzeigen' : 'See Results',
    correct: language === 'ro' ? 'Corect!' : language === 'de' ? 'Richtig!' : 'Correct!',
    incorrect: language === 'ro' ? 'Incorect' : language === 'de' ? 'Falsch' : 'Incorrect',
    chapter: language === 'ro' ? 'Capitol' : language === 'de' ? 'Kapitel' : 'Chapter',
    time: language === 'ro' ? 'Timp' : language === 'de' ? 'Zeit' : 'Time',
    score: language === 'ro' ? 'Scor' : language === 'de' ? 'Punktzahl' : 'Score',
    showWrongAnswers: language === 'ro' ? 'Vezi Răspunsurile Greșite' : language === 'de' ? 'Falsche Antworten Anzeigen' : 'Show Wrong Answers',
    hideWrongAnswers: language === 'ro' ? 'Ascunde Răspunsurile Greșite' : language === 'de' ? 'Falsche Antworten Ausblenden' : 'Hide Wrong Answers',
    wrongAnswersTitle: language === 'ro' ? 'Răspunsuri Greșite' : language === 'de' ? 'Falsche Antworten' : 'Wrong Answers',
    yourAnswer: language === 'ro' ? 'Răspunsul tău:' : language === 'de' ? 'Deine Antwort:' : 'Your answer:',
    correctAnswerLabel: language === 'ro' ? 'Răspuns corect:' : language === 'de' ? 'Richtige Antwort:' : 'Correct answer:',
    allCorrect: language === 'ro' ? 'Felicitări! Ai răspuns corect la toate întrebările!' : language === 'de' ? 'Herzlichen Glückwunsch! Du hast alle Fragen richtig beantwortet!' : 'Congratulations! You answered all questions correctly!',
    back: language === 'ro' ? 'Înapoi' : language === 'de' ? 'Zurück' : 'Back',
    passingRequirement: language === 'ro' ? `Scor minim pentru trecere: ${PASSING_SCORE}%` : language === 'de' ? `Mindestpunktzahl: ${PASSING_SCORE}%` : `Minimum passing score: ${PASSING_SCORE}%`,
  };

  // Loading state
  if (examQuestions.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Exam completed view
  if (examCompleted) {
    const finalScore = score;
    const finalPercentage = Math.round((finalScore / examQuestions.length) * 100);
    const didPass = finalPercentage >= PASSING_SCORE;
    
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="border-2 border-primary/20">
          <CardHeader className="text-center pb-4">
            <div className={cn(
              "w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center",
              didPass ? "bg-success/20" : "bg-destructive/20"
            )}>
              {didPass ? (
                <Trophy className="w-12 h-12 text-success" />
              ) : (
                <XCircle className="w-12 h-12 text-destructive" />
              )}
            </div>
            <CardTitle className="text-3xl font-bold">{labels.examComplete}</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Score display */}
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">{finalScore}/{examQuestions.length}</p>
              <p className="text-2xl font-semibold text-muted-foreground">{finalPercentage}%</p>
            </div>
            
            {/* Pass/Fail status */}
            <div className={cn(
              "p-4 rounded-lg text-center",
              didPass ? "bg-success/10 border border-success/20" : "bg-destructive/10 border border-destructive/20"
            )}>
              {didPass ? (
                <div className="flex items-center justify-center gap-2 text-success">
                  <Award className="w-6 h-6" />
                  <span className="font-semibold text-lg">{labels.passed}</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 text-destructive">
                  <XCircle className="w-6 h-6" />
                  <span className="font-semibold">{labels.failed}</span>
                </div>
              )}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <Target className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">{labels.score}</p>
                <p className="font-bold text-lg">{finalScore} / {examQuestions.length}</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">{labels.time}</p>
                <p className="font-bold text-lg">{formatTime(elapsedTime)}</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <BookOpen className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">{language === 'ro' ? 'Capitole' : language === 'de' ? 'Kapitel' : 'Chapters'}</p>
                <p className="font-bold text-lg">50</p>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{labels.passingRequirement}</span>
                <span className={didPass ? "text-success" : "text-destructive"}>{finalPercentage}%</span>
              </div>
              <Progress 
                value={finalPercentage} 
                className={cn("h-3", didPass ? "[&>div]:bg-success" : "[&>div]:bg-destructive")} 
              />
              <div className="relative h-1">
                <div 
                  className="absolute top-0 h-4 w-0.5 bg-foreground/50"
                  style={{ left: `${PASSING_SCORE}%`, marginTop: '-16px' }}
                />
              </div>
            </div>
            
            {/* Wrong answers toggle */}
            {wrongAnswers.length > 0 && (
              <div>
                <Button
                  variant="outline"
                  onClick={() => setShowWrongAnswers(!showWrongAnswers)}
                  className="w-full mb-4 flex items-center justify-center gap-2"
                >
                  {showWrongAnswers ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  {showWrongAnswers ? labels.hideWrongAnswers : labels.showWrongAnswers} ({wrongAnswers.length})
                </Button>
                
                {showWrongAnswers && (
                  <div className="space-y-4 max-h-96 overflow-y-auto p-4 border rounded-lg bg-muted/50">
                    {wrongAnswers.map((wa, idx) => (
                      <div key={idx} className="p-4 bg-background rounded-lg border border-destructive/20">
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            #{wa.questionIndex} - {wa.chapterName}
                          </Badge>
                        </div>
                        <p className="font-medium mb-2">{wa.question}</p>
                        <div className="space-y-1 text-sm">
                          <p className="text-destructive">
                            <span className="font-medium">{labels.yourAnswer}</span> {wa.userAnswer}
                          </p>
                          <p className="text-success">
                            <span className="font-medium">{labels.correctAnswerLabel}</span> {wa.correctAnswer}
                          </p>
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground italic">{wa.explanation}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            {wrongAnswers.length === 0 && (
              <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
                <CheckCircle2 className="w-8 h-8 text-success mx-auto mb-2" />
                <p className="text-success font-medium">{labels.allCorrect}</p>
              </div>
            )}
            
            {/* Actions */}
            <div className="flex gap-4 justify-center">
              <Button onClick={handleRestart} disabled={isSaving} className="gap-2">
                <RotateCcw className="w-4 h-4" />
                {labels.tryAgain}
              </Button>
              {onBack && (
                <Button variant="outline" onClick={onBack}>
                  {labels.back}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Active exam view
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {onBack && (
            <Button variant="ghost" size="sm" onClick={onBack}>
              ← {labels.back}
            </Button>
          )}
          <Badge variant="outline" className="text-sm">
            <Clock className="w-3 h-3 mr-1" />
            {formatTime(elapsedTime)}
          </Badge>
        </div>
        
        <h1 className="text-2xl font-bold mb-2">{labels.title}</h1>
        <p className="text-muted-foreground mb-4">{labels.subtitle}</p>
        
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{labels.question}</span>
            <span className="font-medium">{score} {language === 'ro' ? 'corecte' : language === 'de' ? 'richtig' : 'correct'}</span>
          </div>
          <Progress value={((currentQuestion + 1) / examQuestions.length) * 100} className="h-2" />
        </div>
      </div>
      
      {/* Question card */}
      <Card className="mb-6">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">
              {labels.chapter}: {question.chapterName}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {currentQuestion + 1} / {examQuestions.length}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-medium mb-6">{question.question}</h3>
          
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correctIndex;
              const showCorrectness = showResult;
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={answeredQuestions[currentQuestion]}
                  className={cn(
                    "w-full p-4 text-left rounded-lg border-2 transition-all",
                    !showCorrectness && !isSelected && "hover:border-primary/50 hover:bg-muted/50",
                    !showCorrectness && isSelected && "border-primary bg-primary/5",
                    showCorrectness && isCorrect && "border-success bg-success/10",
                    showCorrectness && isSelected && !isCorrect && "border-destructive bg-destructive/10",
                    answeredQuestions[currentQuestion] && !isCorrect && !isSelected && "opacity-50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium",
                      showCorrectness && isCorrect && "border-success bg-success text-success-foreground",
                      showCorrectness && isSelected && !isCorrect && "border-destructive bg-destructive text-destructive-foreground",
                      !showCorrectness && "border-muted-foreground"
                    )}>
                      {showCorrectness && isCorrect && <CheckCircle2 className="w-4 h-4" />}
                      {showCorrectness && isSelected && !isCorrect && <XCircle className="w-4 h-4" />}
                      {!showCorrectness && String.fromCharCode(65 + index)}
                    </div>
                    <span className="flex-1">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Feedback */}
          {showResult && (
            <div className={cn(
              "mt-6 p-4 rounded-lg",
              selectedAnswer === question.correctIndex ? "bg-success/10 border border-success/20" : "bg-destructive/10 border border-destructive/20"
            )}>
              <div className="flex items-center gap-2 mb-2">
                {selectedAnswer === question.correctIndex ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-success" />
                    <span className="font-medium text-success">{labels.correct}</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-destructive" />
                    <span className="font-medium text-destructive">{labels.incorrect}</span>
                  </>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Navigation */}
      {showResult && (
        <div className="flex justify-end">
          <Button onClick={handleNext} className="gap-2">
            {currentQuestion < examQuestions.length - 1 ? (
              <>
                {labels.nextQuestion}
                <ChevronRight className="w-4 h-4" />
              </>
            ) : (
              labels.seeResults
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
