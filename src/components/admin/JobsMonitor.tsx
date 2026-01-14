import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { 
  Play, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Loader2,
  RefreshCw,
  Zap,
  AlertTriangle
} from 'lucide-react';

interface RegenerationJob {
  id: string;
  change_id: string | null;
  chapters_to_process: string[];
  chapters_completed: string[];
  chapters_failed: unknown;
  status: string;
  total_chapters: number;
  processed_chapters: number;
  auto_apply: boolean;
  error_message: string | null;
  started_at: string | null;
  completed_at: string | null;
  created_at: string;
}

// Helper to safely parse chapters_failed
const parseChaptersFailed = (data: unknown): { chapter: string; error: string }[] => {
  if (!data) return [];
  if (Array.isArray(data)) {
    return data.filter(item => 
      item && typeof item === 'object' && 'chapter' in item && 'error' in item
    ) as { chapter: string; error: string }[];
  }
  return [];
};

export function JobsMonitor() {
  const [jobs, setJobs] = useState<RegenerationJob[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();

    // Subscribe to realtime updates
    const channel = supabase
      .channel('jobs-monitor')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'regeneration_jobs'
        },
        (payload) => {
          console.log('[REALTIME] Job update:', payload);
          
          if (payload.eventType === 'INSERT') {
            const newJob = payload.new as RegenerationJob;
            setJobs(prev => [newJob, ...prev]);
            toast.info(`Nou job de regenerare pornit: ${newJob.total_chapters} capitole`);
          } else if (payload.eventType === 'UPDATE') {
            const updatedJob = payload.new as RegenerationJob;
            setJobs(prev => prev.map(job => 
              job.id === updatedJob.id ? updatedJob : job
            ));
            
            // Notify on completion
            if (updatedJob.status === 'completed') {
              toast.success(`Job finalizat: ${updatedJob.chapters_completed.length} capitole procesate`);
            } else if (updatedJob.status === 'failed' || updatedJob.status === 'partial') {
              toast.error(`Job ${updatedJob.status}: ${updatedJob.error_message || 'Eroare necunoscută'}`);
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('regeneration_jobs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20);

    if (error) {
      console.error('Error fetching jobs:', error);
    } else {
      setJobs((data as RegenerationJob[]) || []);
    }
    setLoading(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'queued':
        return <Clock className="h-4 w-4 text-muted-foreground" />;
      case 'processing':
        return <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />;
      case 'completed':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'partial':
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'queued':
        return <Badge variant="secondary">În coadă</Badge>;
      case 'processing':
        return <Badge className="bg-blue-500 hover:bg-blue-600 animate-pulse">Procesare...</Badge>;
      case 'completed':
        return <Badge className="bg-green-500 hover:bg-green-600">Finalizat</Badge>;
      case 'failed':
        return <Badge variant="destructive">Eșuat</Badge>;
      case 'partial':
        return <Badge className="bg-orange-500 hover:bg-orange-600">Parțial</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const calculateProgress = (job: RegenerationJob) => {
    if (job.total_chapters === 0) return 0;
    return Math.round((job.processed_chapters / job.total_chapters) * 100);
  };

  const calculateDuration = (job: RegenerationJob) => {
    if (!job.started_at) return null;
    const start = new Date(job.started_at);
    const end = job.completed_at ? new Date(job.completed_at) : new Date();
    const diffMs = end.getTime() - start.getTime();
    const seconds = Math.floor(diffMs / 1000);
    
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const activeJobs = jobs.filter(j => j.status === 'processing' || j.status === 'queued');
  const recentJobs = jobs.filter(j => j.status !== 'processing' && j.status !== 'queued').slice(0, 10);

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-12">
          <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Active Jobs */}
      <Card className={activeJobs.length > 0 ? 'border-blue-500 shadow-lg' : ''}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className={`h-5 w-5 ${activeJobs.length > 0 ? 'text-blue-500' : 'text-muted-foreground'}`} />
              <CardTitle className="text-lg">Job-uri Active</CardTitle>
            </div>
            {activeJobs.length > 0 && (
              <Badge className="bg-blue-500 animate-pulse">{activeJobs.length} activ(e)</Badge>
            )}
          </div>
          <CardDescription>Monitorizare în timp real a regenerării conținutului</CardDescription>
        </CardHeader>
        <CardContent>
          {activeJobs.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <CheckCircle2 className="h-12 w-12 mx-auto mb-3 text-green-500/50" />
              <p>Nu există job-uri active în acest moment</p>
            </div>
          ) : (
            <div className="space-y-4">
              {activeJobs.map((job) => (
                <div 
                  key={job.id} 
                  className="p-4 rounded-lg border bg-card/50 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(job.status)}
                      <span className="font-medium">
                        Regenerare {job.total_chapters} capitol(e)
                      </span>
                    </div>
                    {getStatusBadge(job.status)}
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Progres: {job.processed_chapters} / {job.total_chapters}</span>
                      <span>{calculateProgress(job)}%</span>
                    </div>
                    <Progress 
                      value={calculateProgress(job)} 
                      className="h-3"
                    />
                  </div>

                  {/* Chapters Status */}
                  <div className="flex flex-wrap gap-2">
                    {job.chapters_to_process.map((chapter) => {
                      const isCompleted = job.chapters_completed.includes(chapter);
                      const failedChapters = parseChaptersFailed(job.chapters_failed);
                      const isFailed = failedChapters.some(f => f.chapter === chapter);
                      const isProcessing = !isCompleted && !isFailed && job.status === 'processing';
                      
                      return (
                        <Badge 
                          key={chapter}
                          variant={isCompleted ? 'default' : isFailed ? 'destructive' : 'outline'}
                          className={`${isProcessing ? 'animate-pulse border-blue-500' : ''} ${isCompleted ? 'bg-green-500' : ''}`}
                        >
                          {isCompleted && <CheckCircle2 className="h-3 w-3 mr-1" />}
                          {isFailed && <XCircle className="h-3 w-3 mr-1" />}
                          {isProcessing && <Loader2 className="h-3 w-3 mr-1 animate-spin" />}
                          {chapter}
                        </Badge>
                      );
                    })}
                  </div>

                  {/* Duration */}
                  {job.started_at && (
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      Durată: {calculateDuration(job)}
                      {job.status === 'processing' && <span className="animate-pulse">...</span>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Jobs History */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Istoric Job-uri Recente</CardTitle>
          <CardDescription>Ultimele 10 job-uri finalizate</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            {recentJobs.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <p>Nu există job-uri în istoric</p>
              </div>
            ) : (
              <div className="space-y-2">
                {recentJobs.map((job) => (
                  <div 
                    key={job.id}
                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {getStatusIcon(job.status)}
                      <div>
                        <div className="font-medium text-sm">
                          {job.chapters_completed.length}/{job.total_chapters} capitole
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {format(new Date(job.created_at), 'dd.MM.yyyy HH:mm')}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {calculateDuration(job) && (
                        <span className="text-xs text-muted-foreground">
                          {calculateDuration(job)}
                        </span>
                      )}
                      {getStatusBadge(job.status)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
