import { useState, useEffect, useMemo } from "react";
import { CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight, Shuffle, Lock, Unlock, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useProgressContext } from "@/contexts/ProgressContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { quizTranslations, TranslatedQuizQuestion } from "@/data/quizTranslations";
import { Button } from "@/components/ui/button";

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface QuizProps {
  title: string;
  questions?: QuizQuestion[];
  chapterId?: string;
  questionsPerRound?: number;
}

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const PASSING_SCORE = 9;
const QUESTIONS_PER_ROUND = 10;

export function Quiz({ title, questions, chapterId, questionsPerRound = QUESTIONS_PER_ROUND }: QuizProps) {
  const { language } = useLanguage();
  const { user } = useAuth();
  const { recordQuizAttempt, getBestScore, getChapterStatus, PASSING_SCORE: dbPassingScore } = useChapterProgress();
  
  // Get translated questions if available, otherwise use passed questions
  const translatedQuestions = useMemo(() => {
    if (chapterId && quizTranslations[chapterId]) {
      return quizTranslations[chapterId].map((q: TranslatedQuizQuestion) => ({
        question: q.question[language] || q.question.en,
        options: q.options[language] || q.options.en,
        correctIndex: q.correctIndex,
        explanation: q.explanation[language] || q.explanation.en
      }));
    }
    return questions || [];
  }, [chapterId, language, questions]);
  
  // Use 10 questions per round (or less if not enough available)
  const actualQuestionsPerRound = Math.min(questionsPerRound, translatedQuestions.length);
  
  // Shuffle questions and limit to questionsPerRound
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([]);
  const [quizRound, setQuizRound] = useState(0);
  
  useEffect(() => {
    const shuffled = shuffleArray(translatedQuestions).slice(0, actualQuestionsPerRound);
    setShuffledQuestions(shuffled);
  }, [translatedQuestions, actualQuestionsPerRound, quizRound]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  
  const { saveQuizScore, getChapterProgress } = useProgressContext();

  // Initialize answered questions array when shuffled questions change
  useEffect(() => {
    setAnsweredQuestions(new Array(shuffledQuestions.length).fill(false));
  }, [shuffledQuestions.length]);

  const question = shuffledQuestions[currentQuestion];

  // Check if we have a previous score (from localStorage or DB)
  const previousProgress = chapterId ? getChapterProgress(chapterId) : undefined;
  const dbBestScore = chapterId && user ? getBestScore(chapterId) : 0;
  const dbStatus = chapterId && user ? getChapterStatus(chapterId) : null;
  const isChapterCompleted = dbStatus === 'completed';

  const handleAnswer = (index: number) => {
    // GUARD: Prevent submission without valid selection
    if (typeof index !== 'number' || index < 0 || !question || answeredQuestions[currentQuestion]) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);
    
    if (index === question.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = async () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      const finalScore = score + (selectedAnswer === question?.correctIndex ? 1 : 0);
      setQuizCompleted(true);
      
      // Save to localStorage (for guests)
      if (chapterId) {
        saveQuizScore(chapterId, finalScore, shuffledQuestions.length);
      }
      
      // Save to database (for logged in users)
      if (user && chapterId) {
        setIsRecording(true);
        await recordQuizAttempt(chapterId, finalScore, language);
        setIsRecording(false);
      }
    }
  };

  const handleRestart = () => {
    setQuizRound(prev => prev + 1); // Trigger new shuffle
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const handleNewQuestions = () => {
    setQuizRound(prev => prev + 1); // Trigger new shuffle with different questions
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizCompleted(false);
  };

  // FALLBACK: Handle empty question bank gracefully
  if (shuffledQuestions.length === 0) {
    return (
      <div className="mt-12 p-8 bg-card rounded-2xl border border-border shadow-card text-center">
        <div className="text-amber-500 mb-4">
          <AlertTriangle className="w-12 h-12 mx-auto" />
        </div>
        <h3 className="text-lg font-bold mb-2">
          {language === 'ro' ? 'Quiz indisponibil' : language === 'de' ? 'Quiz nicht verfügbar' : 'Quiz unavailable'}
        </h3>
        <p className="text-muted-foreground text-sm">
          {language === 'ro' 
            ? 'Nu există suficiente întrebări pentru acest capitol. Contactați administratorul.' 
            : language === 'de'
            ? 'Für dieses Kapitel sind nicht genügend Fragen vorhanden. Kontaktieren Sie den Administrator.'
            : 'Not enough questions available for this chapter. Please contact the administrator.'}
        </p>
      </div>
    );
  }

  if (!question) {
    return null;
  }

  const finalScore = quizCompleted ? score : score + (selectedAnswer === question?.correctIndex ? 1 : 0);
  const passed = finalScore >= PASSING_SCORE;
  const percentage = Math.round((finalScore / shuffledQuestions.length) * 100);

  // Labels based on language
  const labels = {
    quizComplete: language === 'ro' ? 'Quiz Finalizat!' : language === 'de' ? 'Quiz Abgeschlossen!' : 'Quiz Complete!',
    chapterUnlocked: language === 'ro' ? 'Capitol deblocat! Poți continua la următorul capitol.' : language === 'de' ? 'Kapitel freigeschaltet! Sie können zum nächsten Kapitel übergehen.' : 'Chapter unlocked! You can proceed to the next chapter.',
    needMoreScore: language === 'ro' ? `Ai nevoie de ${PASSING_SCORE}/${shuffledQuestions.length} pentru a debloca următorul capitol.` : language === 'de' ? `Sie benötigen ${PASSING_SCORE}/${shuffledQuestions.length}, um das nächste Kapitel freizuschalten.` : `You need ${PASSING_SCORE}/${shuffledQuestions.length} to unlock the next chapter.`,
    tryAgain: language === 'ro' ? 'Încearcă Din Nou' : language === 'de' ? 'Erneut Versuchen' : 'Try Again',
    newQuestions: language === 'ro' ? 'Întrebări Noi' : language === 'de' ? 'Neue Fragen' : 'New Questions',
    questionPool: language === 'ro' 
      ? `Pool întrebări: ${translatedQuestions.length} întrebări • Se afișează ${shuffledQuestions.length} pe rundă`
      : language === 'de'
      ? `Fragenpool: ${translatedQuestions.length} Fragen • ${shuffledQuestions.length} pro Runde angezeigt`
      : `Question pool: ${translatedQuestions.length} questions • Showing ${shuffledQuestions.length} per round`,
    passingRequirement: language === 'ro' 
      ? `Scor minim pentru trecere: ${PASSING_SCORE}/${shuffledQuestions.length}`
      : language === 'de'
      ? `Mindestpunktzahl zum Bestehen: ${PASSING_SCORE}/${shuffledQuestions.length}`
      : `Minimum passing score: ${PASSING_SCORE}/${shuffledQuestions.length}`,
    bestScore: language === 'ro' ? 'Cel mai bun scor:' : language === 'de' ? 'Bisheriges Bestes:' : 'Best score:',
    question: language === 'ro' 
      ? `Întrebarea ${currentQuestion + 1} din ${shuffledQuestions.length}`
      : language === 'de'
      ? `Frage ${currentQuestion + 1} von ${shuffledQuestions.length}`
      : `Question ${currentQuestion + 1} of ${shuffledQuestions.length}`,
    nextQuestion: language === 'ro' ? 'Următoarea Întrebare' : language === 'de' ? 'Nächste Frage' : 'Next Question',
    seeResults: language === 'ro' ? 'Vezi Rezultatele' : language === 'de' ? 'Ergebnisse Anzeigen' : 'See Results',
    correct: language === 'ro' ? 'Corect!' : language === 'de' ? 'Richtig!' : 'Correct!',
    incorrect: language === 'ro' ? 'Incorect' : language === 'de' ? 'Falsch' : 'Incorrect',
    excellent: language === 'ro' ? "Excelent! Ai stăpânit acest capitol." : language === 'de' ? "Ausgezeichnet! Sie haben dieses Kapitel gemeistert." : "Excellent work! You've mastered this chapter.",
    good: language === 'ro' ? "Bine! Revizuiește întrebările greșite." : language === 'de' ? "Gut! Überprüfen Sie die verpassten Fragen." : "Good job! Review the missed questions.",
    keepStudying: language === 'ro' ? "Continuă să studiezi! Revizuiește capitolul și încearcă din nou." : language === 'de' ? "Weiterstudieren! Überprüfen Sie das Kapitel und versuchen Sie es erneut." : "Keep studying! Review the chapter and try again.",
    alreadyCompleted: language === 'ro' ? 'Capitol deja completat' : language === 'de' ? 'Kapitel bereits abgeschlossen' : 'Chapter already completed',
    loginToSave: language === 'ro' ? 'Autentifică-te pentru a salva progresul' : language === 'de' ? 'Melden Sie sich an, um den Fortschritt zu speichern' : 'Log in to save your progress',
  };

  if (quizCompleted) {
    return (
      <div className="mt-12 p-8 bg-card rounded-2xl border border-border shadow-card">
        <div className="text-center">
          <div className={cn(
            "w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center",
            passed ? "bg-success/20" : "bg-destructive/20"
          )}>
            {passed ? (
              <Unlock className="w-10 h-10 text-success" />
            ) : (
              <Lock className="w-10 h-10 text-destructive" />
            )}
          </div>
          
          <h3 className="text-2xl font-bold font-serif mb-2">{labels.quizComplete}</h3>
          <p className="text-4xl font-bold text-primary mb-2">{finalScore}/{shuffledQuestions.length}</p>
          
          {/* Passed/Failed message */}
          <div className={cn(
            "p-4 rounded-lg mb-4",
            passed ? "bg-success/10 border border-success/20" : "bg-destructive/10 border border-destructive/20"
          )}>
            {passed ? (
              <div className="flex items-center justify-center gap-2 text-success">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">{labels.chapterUnlocked}</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 text-destructive">
                <XCircle className="w-5 h-5" />
                <span className="font-medium">{labels.needMoreScore}</span>
              </div>
            )}
          </div>
          
          <p className="text-muted-foreground mb-2">
            {passed ? labels.excellent : finalScore >= 7 ? labels.good : labels.keepStudying}
          </p>
          
          {/* Show login prompt for guests */}
          {!user && (
            <p className="text-sm text-warning mb-4 flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              {labels.loginToSave}
            </p>
          )}
          
          {/* Progress bar */}
          <div className="w-full bg-muted rounded-full h-3 mb-4">
            <div 
              className={cn(
                "h-3 rounded-full transition-all duration-500 relative",
                passed ? "bg-success" : "bg-destructive"
              )}
              style={{ width: `${percentage}%` }}
            />
            {/* Passing threshold marker */}
            <div 
              className="absolute top-0 h-3 w-0.5 bg-foreground/50"
              style={{ left: `${(PASSING_SCORE / shuffledQuestions.length) * 100}%`, marginTop: '-12px' }}
            />
          </div>
          
          <div className="text-xs text-muted-foreground mb-2">
            {labels.passingRequirement}
          </div>

          <div className="text-xs text-muted-foreground mb-4">
            {labels.questionPool}
          </div>
          
          {/* Best score from DB */}
          {user && dbBestScore > 0 && (
            <div className="text-sm text-muted-foreground mb-4">
              {labels.bestScore} <span className="font-bold text-primary">{dbBestScore}/10</span>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleNewQuestions}
              disabled={isRecording}
              className="inline-flex items-center justify-center gap-2"
            >
              <Shuffle className="w-4 h-4" />
              {labels.newQuestions}
            </Button>
            <Button
              onClick={handleRestart}
              variant="secondary"
              disabled={isRecording}
              className="inline-flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              {labels.tryAgain}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 p-6 md:p-8 bg-card rounded-2xl border border-border shadow-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold font-serif text-primary">{title}</h3>
        <span className="text-sm text-muted-foreground">{labels.question}</span>
      </div>

      {/* Passing requirement info */}
      <div className="mb-4 text-xs text-muted-foreground bg-muted/50 rounded-lg px-3 py-2 flex items-center gap-2">
        <Trophy className="w-4 h-4 text-primary" />
        {labels.passingRequirement}
      </div>

      {/* Previous/Best score badge */}
      {(user && dbBestScore > 0) || previousProgress?.quizScore !== undefined ? (
        <div className="mb-4 text-sm text-muted-foreground flex items-center gap-2">
          <span>{labels.bestScore}</span>
          <span className={cn(
            "px-2 py-0.5 rounded-full text-xs font-medium",
            (user ? dbBestScore : previousProgress?.quizScore || 0) >= PASSING_SCORE
              ? "bg-success/20 text-success"
              : "bg-warning/20 text-warning"
          )}>
            {user ? dbBestScore : previousProgress?.quizScore}/{user ? 10 : previousProgress?.quizTotal}
          </span>
          {isChapterCompleted && (
            <span className="text-xs text-success flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              {labels.alreadyCompleted}
            </span>
          )}
        </div>
      ) : null}
      
      {/* Progress bar */}
      <div className="w-full bg-muted rounded-full h-2 mb-6">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / shuffledQuestions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <p className="text-lg font-medium mb-6">{question.question}</p>

      {/* Options */}
      <div className="space-y-3 mb-6">
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
                "w-full p-4 rounded-xl border text-left transition-all duration-200 flex items-center gap-3",
                !showCorrectness && "hover:bg-muted/50 hover:border-primary/50",
                !showCorrectness && isSelected && "border-primary bg-primary/5",
                showCorrectness && isCorrect && "border-success bg-success/10",
                showCorrectness && isSelected && !isCorrect && "border-destructive bg-destructive/10",
                !showCorrectness && !isSelected && "border-border",
                answeredQuestions[currentQuestion] && !isSelected && !isCorrect && "opacity-50"
              )}
            >
              <span className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0",
                !showCorrectness && "bg-muted",
                showCorrectness && isCorrect && "bg-success text-success-foreground",
                showCorrectness && isSelected && !isCorrect && "bg-destructive text-destructive-foreground"
              )}>
                {showCorrectness && isCorrect ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : showCorrectness && isSelected && !isCorrect ? (
                  <XCircle className="w-5 h-5" />
                ) : (
                  String.fromCharCode(65 + index)
                )}
              </span>
              <span className="flex-1">{option}</span>
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {showResult && (
        <div className={cn(
          "p-4 rounded-xl mb-6 animate-fade-in",
          selectedAnswer === question.correctIndex ? "bg-success/10 border border-success/20" : "bg-destructive/10 border border-destructive/20"
        )}>
          <div className="flex items-start gap-3">
            {selectedAnswer === question.correctIndex ? (
              <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className={cn(
                "font-medium mb-1",
                selectedAnswer === question.correctIndex ? "text-success" : "text-destructive"
              )}>
                {selectedAnswer === question.correctIndex ? labels.correct : labels.incorrect}
              </p>
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}

      {/* Current score indicator */}
      {showResult && (
        <div className="mb-4 text-center text-sm text-muted-foreground">
          {language === 'ro' ? 'Scor curent:' : language === 'de' ? 'Aktueller Stand:' : 'Current score:'}{' '}
          <span className={cn(
            "font-bold",
            score + (selectedAnswer === question.correctIndex ? 1 : 0) >= PASSING_SCORE ? "text-success" : "text-primary"
          )}>
            {score + (selectedAnswer === question.correctIndex ? 1 : 0)}/{currentQuestion + 1}
          </span>
        </div>
      )}

      {/* Next button */}
      {showResult && (
        <Button
          onClick={handleNext}
          className="w-full"
        >
          {currentQuestion < shuffledQuestions.length - 1 ? (
            <>
              {labels.nextQuestion}
              <ChevronRight className="w-4 h-4 ml-2" />
            </>
          ) : (
            <>
              {labels.seeResults}
              <Trophy className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      )}
    </div>
  );
}