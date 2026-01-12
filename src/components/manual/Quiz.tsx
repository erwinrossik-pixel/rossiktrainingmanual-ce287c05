import { useState, useEffect, useMemo } from "react";
import { CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight, Shuffle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useProgressContext } from "@/contexts/ProgressContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { quizTranslations, TranslatedQuizQuestion } from "@/data/quizTranslations";

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

export function Quiz({ title, questions, chapterId, questionsPerRound = 5 }: QuizProps) {
  const { language } = useLanguage();
  
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
  
  // Shuffle questions and limit to questionsPerRound
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([]);
  const [quizRound, setQuizRound] = useState(0);
  
  useEffect(() => {
    const shuffled = shuffleArray(translatedQuestions).slice(0, Math.min(questionsPerRound, translatedQuestions.length));
    setShuffledQuestions(shuffled);
  }, [translatedQuestions, questionsPerRound, quizRound]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const { saveQuizScore, getChapterProgress } = useProgressContext();

  // Initialize answered questions array when shuffled questions change
  useEffect(() => {
    setAnsweredQuestions(new Array(shuffledQuestions.length).fill(false));
  }, [shuffledQuestions.length]);

  const question = shuffledQuestions[currentQuestion];

  // Check if we have a previous score
  const previousProgress = chapterId ? getChapterProgress(chapterId) : undefined;

  const handleAnswer = (index: number) => {
    if (!question || answeredQuestions[currentQuestion]) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);
    
    if (index === question.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
      // Save the quiz score
      if (chapterId) {
        saveQuizScore(chapterId, score + (selectedAnswer === question?.correctIndex ? 1 : 0), shuffledQuestions.length);
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

  if (shuffledQuestions.length === 0 || !question) {
    return null;
  }

  const finalScore = quizCompleted ? score : score + (selectedAnswer === question?.correctIndex ? 1 : 0);
  const percentage = Math.round((finalScore / shuffledQuestions.length) * 100);
  const passed = percentage >= 70;

  if (quizCompleted) {
    return (
      <div className="mt-12 p-8 bg-card rounded-2xl border border-border shadow-card">
        <div className="text-center">
          <div className={cn(
            "w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center",
            percentage >= 80 ? "bg-success/20" : percentage >= 60 ? "bg-warning/20" : "bg-destructive/20"
          )}>
            <Trophy className={cn(
              "w-10 h-10",
              percentage >= 80 ? "text-success" : percentage >= 60 ? "text-warning" : "text-destructive"
            )} />
          </div>
          
          <h3 className="text-2xl font-bold font-serif mb-2">
            {language === 'ro' ? 'Quiz Finalizat!' : language === 'de' ? 'Quiz Abgeschlossen!' : 'Quiz Complete!'}
          </h3>
          <p className="text-4xl font-bold text-primary mb-2">{finalScore}/{shuffledQuestions.length}</p>
          <p className="text-muted-foreground mb-2">
            {percentage >= 80 
              ? (language === 'ro' ? "Excelent! Ai stăpânit acest capitol." : language === 'de' ? "Ausgezeichnet! Sie haben dieses Kapitel gemeistert." : "Excellent work! You've mastered this chapter.")
              : percentage >= 60 
              ? (language === 'ro' ? "Bine! Revizuiește întrebările greșite." : language === 'de' ? "Gut! Überprüfen Sie die verpassten Fragen." : "Good job! Review the missed questions.")
              : (language === 'ro' ? "Continuă să studiezi! Revizuiește capitolul și încearcă din nou." : language === 'de' ? "Weiterstudieren! Überprüfen Sie das Kapitel und versuchen Sie es erneut." : "Keep studying! Review the chapter and try again.")}
          </p>
          
          {passed && (
            <p className="text-success text-sm font-medium mb-4 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              {language === 'ro' ? 'Capitol marcat ca finalizat!' : language === 'de' ? 'Kapitel als abgeschlossen markiert!' : 'Chapter marked as complete!'}
            </p>
          )}
          
          <div className="w-full bg-muted rounded-full h-3 mb-6">
            <div 
              className={cn(
                "h-3 rounded-full transition-all duration-500",
                percentage >= 80 ? "bg-success" : percentage >= 60 ? "bg-warning" : "bg-destructive"
              )}
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div className="text-xs text-muted-foreground mb-4">
            {language === 'ro' 
              ? `Pool întrebări: ${translatedQuestions.length} întrebări • Se afișează ${shuffledQuestions.length} pe rundă`
              : language === 'de'
              ? `Fragenpool: ${translatedQuestions.length} Fragen • ${shuffledQuestions.length} pro Runde angezeigt`
              : `Question pool: ${translatedQuestions.length} questions • Showing ${shuffledQuestions.length} per round`}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleRestart}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <RotateCcw className="w-4 h-4" />
              {language === 'ro' ? 'Încearcă Din Nou' : language === 'de' ? 'Erneut Versuchen' : 'Try Again'}
            </button>
            {translatedQuestions.length > questionsPerRound && (
              <button
                onClick={handleNewQuestions}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
              >
                <Shuffle className="w-4 h-4" />
                {language === 'ro' ? 'Întrebări Noi' : language === 'de' ? 'Neue Fragen' : 'New Questions'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 p-6 md:p-8 bg-card rounded-2xl border border-border shadow-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold font-serif text-primary">{title}</h3>
        <span className="text-sm text-muted-foreground">
          {language === 'ro' 
            ? `Întrebarea ${currentQuestion + 1} din ${shuffledQuestions.length}`
            : language === 'de'
            ? `Frage ${currentQuestion + 1} von ${shuffledQuestions.length}`
            : `Question ${currentQuestion + 1} of ${shuffledQuestions.length}`}
        </span>
      </div>

      {/* Previous score badge */}
      {previousProgress?.quizScore !== undefined && (
        <div className="mb-4 text-sm text-muted-foreground flex items-center gap-2">
          <span>{language === 'ro' ? 'Cel mai bun scor:' : language === 'de' ? 'Bisheriges Bestes:' : 'Previous best:'}</span>
          <span className={cn(
            "px-2 py-0.5 rounded-full text-xs font-medium",
            previousProgress.quizScore >= (previousProgress.quizTotal! * 0.7)
              ? "bg-success/20 text-success"
              : "bg-warning/20 text-warning"
          )}>
            {previousProgress.quizScore}/{previousProgress.quizTotal}
          </span>
        </div>
      )}
      
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
                {selectedAnswer === question.correctIndex 
                  ? (language === 'ro' ? 'Corect!' : language === 'de' ? 'Richtig!' : 'Correct!')
                  : (language === 'ro' ? 'Incorect' : language === 'de' ? 'Falsch' : 'Incorrect')}
              </p>
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}

      {/* Next button */}
      {showResult && (
        <button
          onClick={handleNext}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          {currentQuestion < shuffledQuestions.length - 1 ? (
            <>
              {language === 'ro' ? 'Următoarea Întrebare' : language === 'de' ? 'Nächste Frage' : 'Next Question'}
              <ChevronRight className="w-4 h-4" />
            </>
          ) : (
            <>
              {language === 'ro' ? 'Vezi Rezultatele' : language === 'de' ? 'Ergebnisse Anzeigen' : 'See Results'}
              <Trophy className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
