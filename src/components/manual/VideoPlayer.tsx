import { useState, useEffect } from 'react';
import { useVideoLessons, VideoLesson } from '@/hooks/useVideoLessons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Play, CheckCircle, Clock, Lock } from 'lucide-react';
import { useSubscription } from '@/hooks/useSubscription';

// Helper to check premium access

interface VideoPlayerProps {
  chapterId: string;
}

export function VideoPlayer({ chapterId }: VideoPlayerProps) {
  const { videos, progress, loading, updateProgress, getVideoEmbedUrl } = useVideoLessons(chapterId);
  const { currentPlan } = useSubscription();
  const canAccessPremium = currentPlan === 'professional' || currentPlan === 'enterprise';
  const [selectedVideo, setSelectedVideo] = useState<VideoLesson | null>(null);

  useEffect(() => {
    if (videos.length > 0 && !selectedVideo) {
      const firstUnwatched = videos.find(v => !progress[v.id]?.completed);
      setSelectedVideo(firstUnwatched || videos[0]);
    }
  }, [videos, progress, selectedVideo]);

  if (loading) {
    return (
      <Card className="animate-pulse">
        <CardHeader>
          <div className="h-6 bg-muted rounded w-1/3" />
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded" />
        </CardContent>
      </Card>
    );
  }

  if (videos.length === 0) {
    return null;
  }

  const handleVideoEnd = () => {
    if (selectedVideo) {
      updateProgress(selectedVideo.id, selectedVideo.duration_minutes ? selectedVideo.duration_minutes * 60 : 0, true);
    }
  };

  const completedCount = videos.filter(v => progress[v.id]?.completed).length;
  const overallProgress = (completedCount / videos.length) * 100;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5" />
            Video Lessons
          </CardTitle>
          <Badge variant="secondary">
            {completedCount}/{videos.length} completed
          </Badge>
        </div>
        <Progress value={overallProgress} className="h-2" />
      </CardHeader>
      <CardContent className="space-y-4">
        {selectedVideo && (
          <div className="space-y-2">
            {selectedVideo.is_premium && !canAccessPremium ? (
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Lock className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                  <p className="text-muted-foreground">Premium content</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Upgrade to watch
                  </Button>
                </div>
              </div>
            ) : (
              <div className="aspect-video rounded-lg overflow-hidden bg-black">
                <iframe
                  src={getVideoEmbedUrl(selectedVideo)}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => {
                    // Track that video started
                    if (selectedVideo && !progress[selectedVideo.id]) {
                      updateProgress(selectedVideo.id, 0, false);
                    }
                  }}
                />
              </div>
            )}
            <div>
              <h3 className="font-semibold">{selectedVideo.title}</h3>
              {selectedVideo.description && (
                <p className="text-sm text-muted-foreground">{selectedVideo.description}</p>
              )}
            </div>
            <Button 
              onClick={handleVideoEnd}
              disabled={progress[selectedVideo.id]?.completed}
              variant={progress[selectedVideo.id]?.completed ? "secondary" : "default"}
              size="sm"
            >
              {progress[selectedVideo.id]?.completed ? (
                <>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Completed
                </>
              ) : (
                'Mark as Completed'
              )}
            </Button>
          </div>
        )}

        {videos.length > 1 && (
          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">All Videos</h4>
            <div className="space-y-2">
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className={`w-full flex items-center gap-3 p-2 rounded-lg text-left transition-colors ${
                    selectedVideo?.id === video.id 
                      ? 'bg-primary/10 border border-primary/20' 
                      : 'hover:bg-muted'
                  }`}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    {progress[video.id]?.completed ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="font-medium truncate">{video.title}</p>
                    {video.duration_minutes && (
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {video.duration_minutes} min
                      </p>
                    )}
                  </div>
                  {video.is_premium && (
                    <Badge variant="outline" className="flex-shrink-0">
                      Premium
                    </Badge>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
