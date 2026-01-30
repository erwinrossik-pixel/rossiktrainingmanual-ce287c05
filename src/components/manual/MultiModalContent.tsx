import { useState, useRef, useEffect } from 'react';
import { useChapterMedia, AudioSummaryContent, DiagramContent, VideoScriptContent } from '@/hooks/useChapterMedia';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, Pause, Volume2, VolumeX, RotateCcw,
  Video, Headphones, GitBranch, Clock, CheckCircle
} from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

// Language mapping for Web Speech API
const SPEECH_LANG_MAP: Record<Language, string> = {
  ro: 'ro-RO',
  de: 'de-DE',
  en: 'en-US'
};

// Translations for MultiModal content
const multiModalTranslations = {
  ro: {
    title: 'Conținut Multi-Modal',
    completed: 'parcurse',
    audio: 'Audio',
    diagrams: 'Diagrame',
    videoScript: 'Video Script',
    listened: 'Parcurs',
    seen: 'Văzut',
    hideDiagram: 'Ascunde',
    showDiagram: 'Vezi Diagrama',
    clickToView: 'Click pentru a vizualiza diagrama interactivă',
    mermaidTip: 'Diagrama Mermaid - pentru vizualizare completă, copiază codul în',
    narration: 'Narațiune:',
    visual: 'Visual:',
    previous: '← Anterior',
    next: 'Următorul →',
    minutes: 'min'
  },
  de: {
    title: 'Multi-Modal Inhalt',
    completed: 'abgeschlossen',
    audio: 'Audio',
    diagrams: 'Diagramme',
    videoScript: 'Video-Skript',
    listened: 'Gehört',
    seen: 'Gesehen',
    hideDiagram: 'Ausblenden',
    showDiagram: 'Diagramm anzeigen',
    clickToView: 'Klicken Sie, um das interaktive Diagramm anzuzeigen',
    mermaidTip: 'Mermaid-Diagramm - für vollständige Ansicht, kopieren Sie den Code in',
    narration: 'Erzählung:',
    visual: 'Visuell:',
    previous: '← Vorherige',
    next: 'Nächste →',
    minutes: 'Min'
  },
  en: {
    title: 'Multi-Modal Content',
    completed: 'completed',
    audio: 'Audio',
    diagrams: 'Diagrams',
    videoScript: 'Video Script',
    listened: 'Listened',
    seen: 'Seen',
    hideDiagram: 'Hide',
    showDiagram: 'View Diagram',
    clickToView: 'Click to view the interactive diagram',
    mermaidTip: 'Mermaid diagram - for full view, copy the code to',
    narration: 'Narration:',
    visual: 'Visual:',
    previous: '← Previous',
    next: 'Next →',
    minutes: 'min'
  }
};

interface MultiModalContentProps {
  chapterId: string;
}

export function MultiModalContent({ chapterId }: MultiModalContentProps) {
  const { audioSummaries, diagrams, videoScripts, progress, loading, updateProgress } = useChapterMedia(chapterId);
  const { language } = useLanguage();
  const t = multiModalTranslations[language];

  if (loading) {
    return (
      <Card className="animate-pulse">
        <CardHeader>
          <div className="h-6 bg-muted rounded w-1/3" />
        </CardHeader>
        <CardContent>
          <div className="h-32 bg-muted rounded" />
        </CardContent>
      </Card>
    );
  }

  const hasContent = audioSummaries.length > 0 || diagrams.length > 0 || videoScripts.length > 0;
  if (!hasContent) return null;

  const completedCount = Object.values(progress).filter(p => p.completed).length;
  const totalCount = audioSummaries.length + diagrams.length + videoScripts.length;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            📚 {t.title}
          </CardTitle>
          <Badge variant="secondary">
            {completedCount}/{totalCount} {t.completed}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={audioSummaries.length > 0 ? 'audio' : diagrams.length > 0 ? 'diagrams' : 'video'}>
          <TabsList className="grid w-full grid-cols-3">
            {audioSummaries.length > 0 && (
              <TabsTrigger value="audio" className="flex items-center gap-1">
                <Headphones className="h-4 w-4" />
                {t.audio}
              </TabsTrigger>
            )}
            {diagrams.length > 0 && (
              <TabsTrigger value="diagrams" className="flex items-center gap-1">
                <GitBranch className="h-4 w-4" />
                {t.diagrams}
              </TabsTrigger>
            )}
            {videoScripts.length > 0 && (
              <TabsTrigger value="video" className="flex items-center gap-1">
                <Video className="h-4 w-4" />
                {t.videoScript}
              </TabsTrigger>
            )}
          </TabsList>

          {audioSummaries.length > 0 && (
            <TabsContent value="audio" className="mt-4">
              {audioSummaries.map(audio => (
                <AudioPlayer
                  key={audio.id}
                  mediaId={audio.id}
                  title={audio.title}
                  content={audio.content as AudioSummaryContent}
                  duration={audio.duration_estimate}
                  progress={progress[audio.id]}
                  onProgress={(percent, position) => updateProgress(audio.id, percent, position)}
                  language={language}
                  translations={t}
                />
              ))}
            </TabsContent>
          )}

          {diagrams.length > 0 && (
            <TabsContent value="diagrams" className="mt-4 space-y-4">
              {diagrams.map(diagram => (
                <DiagramViewer
                  key={diagram.id}
                  mediaId={diagram.id}
                  title={diagram.title}
                  content={diagram.content as DiagramContent}
                  isCompleted={progress[diagram.id]?.completed}
                  onView={() => updateProgress(diagram.id, 100)}
                  translations={t}
                />
              ))}
            </TabsContent>
          )}

          {videoScripts.length > 0 && (
            <TabsContent value="video" className="mt-4">
              {videoScripts.map(script => (
                <VideoScriptViewer
                  key={script.id}
                  mediaId={script.id}
                  title={script.title}
                  content={script.content as VideoScriptContent}
                  duration={script.duration_estimate}
                  progress={progress[script.id]}
                  onProgress={(percent) => updateProgress(script.id, percent)}
                  translations={t}
                />
              ))}
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
}

// Audio Player Component using Web Speech API
interface AudioPlayerProps {
  mediaId: string;
  title: string;
  content: AudioSummaryContent;
  duration: number | null;
  progress?: { progress_percent: number; completed: boolean; last_position: number };
  onProgress: (percent: number, position: number) => void;
  language: Language;
  translations: typeof multiModalTranslations.ro;
}

function AudioPlayer({ title, content, duration, progress, onProgress, language, translations }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const totalDuration = duration || 60;

  useEffect(() => {
    return () => {
      if (utteranceRef.current) {
        speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlay = () => {
    if (isPlaying) {
      speechSynthesis.pause();
      setIsPlaying(false);
    } else {
      if (speechSynthesis.paused) {
        speechSynthesis.resume();
      } else {
        const utterance = new SpeechSynthesisUtterance(content.text);
        // Use the correct language for TTS based on selected language
        utterance.lang = SPEECH_LANG_MAP[language];
        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        utterance.onend = () => {
          setIsPlaying(false);
          setCurrentTime(totalDuration);
          onProgress(100, totalDuration);
        };

        utterance.onboundary = (event) => {
          const percent = (event.charIndex / content.text.length) * 100;
          const time = (percent / 100) * totalDuration;
          setCurrentTime(time);
          onProgress(percent, time);
        };

        utteranceRef.current = utterance;
        speechSynthesis.speak(utterance);
      }
      setIsPlaying(true);
    }
  };

  const handleRestart = () => {
    speechSynthesis.cancel();
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = (currentTime / totalDuration) * 100;

  return (
    <div className="p-4 rounded-lg bg-muted/50 space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-medium flex items-center gap-2">
          <Headphones className="h-4 w-4 text-primary" />
          {title}
        </h4>
        {progress?.completed && (
          <Badge variant="secondary" className="bg-green-500/20 text-green-700">
            <CheckCircle className="h-3 w-3 mr-1" />
            {translations.listened}
          </Badge>
        )}
      </div>

      <div className="flex items-center gap-3">
        <Button
          size="icon"
          variant="outline"
          onClick={handlePlay}
          className="h-10 w-10"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>

        <div className="flex-grow space-y-1">
          <Progress value={progressPercent} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(totalDuration)}</span>
          </div>
        </div>

        <Button
          size="icon"
          variant="ghost"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>

        <Button
          size="icon"
          variant="ghost"
          onClick={handleRestart}
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      <p className="text-sm text-muted-foreground line-clamp-2">
        {content.text.slice(0, 150)}...
      </p>
    </div>
  );
}

// Diagram Viewer Component
interface DiagramViewerProps {
  mediaId: string;
  title: string;
  content: DiagramContent;
  isCompleted?: boolean;
  onView: () => void;
  translations: typeof multiModalTranslations.ro;
}

function DiagramViewer({ title, content, isCompleted, onView, translations }: DiagramViewerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasViewed, setHasViewed] = useState(false);

  // Mark as viewed when expanded
  useEffect(() => {
    if (isExpanded && !hasViewed) {
      setHasViewed(true);
      onView();
    }
  }, [isExpanded, hasViewed, onView]);

  // Safely format mermaid code for display
  const diagramCode = content.mermaid.replace(/\\n/g, '\n');

  return (
    <div className="p-4 rounded-lg bg-muted/50 space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-medium flex items-center gap-2">
          <GitBranch className="h-4 w-4 text-primary" />
          {title}
        </h4>
        <div className="flex items-center gap-2">
          {isCompleted && (
            <Badge variant="secondary" className="bg-green-500/20 text-green-700">
              <CheckCircle className="h-3 w-3 mr-1" />
              {translations.seen}
            </Badge>
          )}
          <Button
            size="sm"
            variant={isExpanded ? "secondary" : "default"}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? translations.hideDiagram : translations.showDiagram}
          </Button>
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 bg-background rounded-lg border overflow-x-auto min-h-[200px]">
          <pre className="text-xs font-mono p-4 bg-muted rounded overflow-x-auto whitespace-pre-wrap">
            {diagramCode}
          </pre>
          <p className="text-xs text-muted-foreground mt-2">
            💡 {translations.mermaidTip}{' '}
            <a 
              href="https://mermaid.live" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary underline"
            >
              mermaid.live
            </a>
          </p>
        </div>
      )}

      {!isExpanded && (
        <p className="text-sm text-muted-foreground">
          {translations.clickToView}
        </p>
      )}
    </div>
  );
}

// Video Script Viewer Component
interface VideoScriptViewerProps {
  mediaId: string;
  title: string;
  content: VideoScriptContent;
  duration: number | null;
  progress?: { progress_percent: number; completed: boolean };
  onProgress: (percent: number) => void;
  translations: typeof multiModalTranslations.ro;
}

function VideoScriptViewer({ title, content, duration, progress, onProgress, translations }: VideoScriptViewerProps) {
  const [currentScene, setCurrentScene] = useState(0);
  const scenes = content.scenes || [];

  const goToScene = (index: number) => {
    setCurrentScene(index);
    const percent = ((index + 1) / scenes.length) * 100;
    onProgress(percent);
  };

  const totalDuration = duration || scenes.reduce((acc, s) => acc + s.duration, 0);

  return (
    <div className="p-4 rounded-lg bg-muted/50 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium flex items-center gap-2">
          <Video className="h-4 w-4 text-primary" />
          {title}
        </h4>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {Math.ceil(totalDuration / 60)} {translations.minutes}
          </Badge>
          {progress?.completed && (
            <Badge variant="secondary" className="bg-green-500/20 text-green-700">
              <CheckCircle className="h-3 w-3 mr-1" />
              {translations.listened}
            </Badge>
          )}
        </div>
      </div>

      {/* Scene Navigation */}
      <div className="flex gap-1 overflow-x-auto pb-2">
        {scenes.map((scene, index) => (
          <Button
            key={index}
            size="sm"
            variant={currentScene === index ? 'default' : 'outline'}
            onClick={() => goToScene(index)}
            className="flex-shrink-0"
          >
            {index + 1}. {scene.title}
          </Button>
        ))}
      </div>

      {/* Current Scene */}
      {scenes[currentScene] && (
        <div className="p-4 bg-background rounded-lg border space-y-3">
          <div className="flex items-center justify-between">
            <h5 className="font-semibold">{scenes[currentScene].title}</h5>
            <Badge variant="secondary">{scenes[currentScene].duration}s</Badge>
          </div>
          
          <div className="space-y-2">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">{translations.narration}</p>
              <p className="text-sm">{scenes[currentScene].narration}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">{translations.visual}</p>
              <p className="text-sm italic text-muted-foreground">{scenes[currentScene].visuals}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => goToScene(Math.max(0, currentScene - 1))}
              disabled={currentScene === 0}
            >
              {translations.previous}
            </Button>
            <span className="text-sm text-muted-foreground self-center">
              {currentScene + 1} / {scenes.length}
            </span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => goToScene(Math.min(scenes.length - 1, currentScene + 1))}
              disabled={currentScene === scenes.length - 1}
            >
              {translations.next}
            </Button>
          </div>
        </div>
      )}

      {/* Progress */}
      <Progress value={(currentScene + 1) / scenes.length * 100} className="h-1" />
    </div>
  );
}
