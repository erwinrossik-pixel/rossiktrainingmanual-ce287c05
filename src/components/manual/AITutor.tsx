import { useState, useRef, useEffect, useCallback, memo } from "react";
import { logger } from '@/utils/logger';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { supabase } from "@/integrations/supabase/client";
import { 
  Bot, 
  Send, 
  X, 
  MessageCircle, 
  Loader2, 
  BookOpen,
  Brain,
  Lightbulb,
  HelpCircle,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface AITutorProps {
  chapterId: string;
  chapterTitle?: string;
}

const translations = {
  ro: {
    title: "AI Tutor",
    subtitle: "Asistentul tău de învățare",
    placeholder: "Întreabă ceva despre acest capitol...",
    send: "Trimite",
    thinking: "Gândesc...",
    welcome: "Bună! 👋 Sunt tutorul tău AI pentru acest capitol. Pot să:",
    capabilities: [
      "Explic concepte dificile",
      "Generez întrebări de practică",
      "Sugerez secțiuni de recitit",
      "Ofer trucuri de memorare"
    ],
    askMe: "Întreabă-mă orice despre conținutul capitolului!",
    quickActions: "Acțiuni rapide",
    explainConcept: "Explică conceptul principal",
    practiceQuiz: "Generează un mini-quiz",
    keyPoints: "Care sunt punctele cheie?",
    studyTips: "Sfaturi de studiu",
    error: "A apărut o eroare. Te rog încearcă din nou.",
    rateLimit: "Prea multe cereri. Așteaptă un moment.",
    chapter: "Capitol"
  },
  de: {
    title: "KI-Tutor",
    subtitle: "Dein Lernassistent",
    placeholder: "Frage etwas zu diesem Kapitel...",
    send: "Senden",
    thinking: "Denke nach...",
    welcome: "Hallo! 👋 Ich bin dein KI-Tutor für dieses Kapitel. Ich kann:",
    capabilities: [
      "Schwierige Konzepte erklären",
      "Übungsfragen erstellen",
      "Abschnitte zum Nachlesen vorschlagen",
      "Merkhilfen anbieten"
    ],
    askMe: "Frag mich alles über den Kapitelinhalt!",
    quickActions: "Schnellaktionen",
    explainConcept: "Erkläre das Hauptkonzept",
    practiceQuiz: "Erstelle ein Mini-Quiz",
    keyPoints: "Was sind die Kernpunkte?",
    studyTips: "Lerntipps",
    error: "Ein Fehler ist aufgetreten. Bitte versuche es erneut.",
    rateLimit: "Zu viele Anfragen. Bitte warte einen Moment.",
    chapter: "Kapitel"
  },
  en: {
    title: "AI Tutor",
    subtitle: "Your learning assistant",
    placeholder: "Ask something about this chapter...",
    send: "Send",
    thinking: "Thinking...",
    welcome: "Hi! 👋 I'm your AI tutor for this chapter. I can:",
    capabilities: [
      "Explain difficult concepts",
      "Generate practice questions",
      "Suggest sections to re-read",
      "Offer memory tricks"
    ],
    askMe: "Ask me anything about the chapter content!",
    quickActions: "Quick Actions",
    explainConcept: "Explain the main concept",
    practiceQuiz: "Generate a mini-quiz",
    keyPoints: "What are the key points?",
    studyTips: "Study tips",
    error: "An error occurred. Please try again.",
    rateLimit: "Too many requests. Please wait a moment.",
    chapter: "Chapter"
  }
};

export const AITutor = memo(function AITutor({ chapterId, chapterTitle }: AITutorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const { getBestScore, getAttemptsCount } = useChapterProgress();
  
  const t = translations[language] || translations.en;

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Reset messages when chapter changes
  useEffect(() => {
    setMessages([]);
  }, [chapterId]);

  const sendMessage = useCallback(async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Get user context
      const bestScore = getBestScore(chapterId);
      const attempts = getAttemptsCount(chapterId);

      // Build conversation history (last 6 messages for context)
      const conversationHistory = messages.slice(-6).map(m => ({
        role: m.role,
        content: m.content
      }));

      const { data, error } = await supabase.functions.invoke('ai-tutor', {
        body: {
          message: messageText,
          chapterId,
          language,
          conversationHistory,
          userContext: {
            bestScore,
            quizAttempts: attempts
          }
        }
      });

      if (error) throw error;

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.message || t.error,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      logger.error("AI Tutor error:", error);
      
      let errorMessage = t.error;
      if (error.message?.includes("429") || error.status === 429) {
        errorMessage = t.rateLimit;
      }

      const errorResponse: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: `❌ ${errorMessage}`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  }, [chapterId, language, messages, isLoading, getBestScore, getAttemptsCount, t]);

  const handleQuickAction = useCallback((action: string) => {
    sendMessage(action);
  }, [sendMessage]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  }, [input, sendMessage]);

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-primary hover:bg-primary/90"
        size="icon"
      >
        <Bot className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-[380px] h-[550px] shadow-2xl z-50 flex flex-col overflow-hidden border-2 border-primary/20">
      {/* Header */}
      <CardHeader className="pb-2 bg-gradient-to-r from-primary/10 to-primary/5 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-full">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg flex items-center gap-2">
                {t.title}
                <Sparkles className="h-4 w-4 text-yellow-500" />
              </CardTitle>
              <p className="text-xs text-muted-foreground">{t.subtitle}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        {chapterTitle && (
          <Badge variant="secondary" className="mt-2 w-fit text-xs">
            <BookOpen className="h-3 w-3 mr-1" />
            {t.chapter}: {chapterTitle}
          </Badge>
        )}
      </CardHeader>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        {messages.length === 0 ? (
          <div className="space-y-4">
            {/* Welcome message */}
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm font-medium mb-2">{t.welcome}</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {t.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-primary">•</span> {cap}
                  </li>
                ))}
              </ul>
              <p className="text-sm mt-3 font-medium text-primary">{t.askMe}</p>
            </div>

            {/* Quick actions */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">{t.quickActions}</p>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-auto py-2 px-3 justify-start text-left"
                  onClick={() => handleQuickAction(t.explainConcept)}
                >
                  <Brain className="h-3 w-3 mr-2 shrink-0" />
                  <span className="text-xs truncate">{t.explainConcept}</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-auto py-2 px-3 justify-start text-left"
                  onClick={() => handleQuickAction(t.practiceQuiz)}
                >
                  <HelpCircle className="h-3 w-3 mr-2 shrink-0" />
                  <span className="text-xs truncate">{t.practiceQuiz}</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-auto py-2 px-3 justify-start text-left"
                  onClick={() => handleQuickAction(t.keyPoints)}
                >
                  <Lightbulb className="h-3 w-3 mr-2 shrink-0" />
                  <span className="text-xs truncate">{t.keyPoints}</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-auto py-2 px-3 justify-start text-left"
                  onClick={() => handleQuickAction(t.studyTips)}
                >
                  <BookOpen className="h-3 w-3 mr-2 shrink-0" />
                  <span className="text-xs truncate">{t.studyTips}</span>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex gap-3",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {msg.role === "assistant" && (
                  <div className="p-1.5 bg-primary/10 rounded-full h-fit">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[85%] rounded-lg px-3 py-2 text-sm",
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="p-1.5 bg-primary/10 rounded-full h-fit">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="bg-muted rounded-lg px-3 py-2 text-sm flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t.thinking}
                </div>
              </div>
            )}
          </div>
        )}
      </ScrollArea>

      {/* Input */}
      <CardContent className="p-3 border-t bg-background">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.placeholder}
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={!input.trim() || isLoading}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
});
