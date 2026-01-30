import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Users, 
  Activity, 
  Eye, 
  Clock, 
  Monitor, 
  Smartphone, 
  Tablet,
  Globe,
  TrendingUp,
  UserCheck,
  BookOpen,
  MapPin
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { format, formatDistanceToNow, subMinutes } from 'date-fns';
import { ro, de, enUS } from 'date-fns/locale';

const ActiveUsersMap = lazy(() => import('./ActiveUsersMap'));

interface UserSession {
  id: string;
  session_id: string;
  user_id: string | null;
  device_type: string | null;
  browser: string | null;
  started_at: string;
  last_activity_at: string;
  pages_visited: number | null;
  total_duration_seconds: number | null;
}

interface PageView {
  id: string;
  session_id: string;
  user_id: string | null;
  page_path: string;
  chapter_id: string | null;
  created_at: string;
  duration_seconds: number | null;
}

interface ActivityEvent {
  id: string;
  type: 'session_start' | 'page_view' | 'quiz_attempt' | 'session_update';
  description: string;
  timestamp: string;
  icon: React.ReactNode;
  color: string;
}

const RealTimeActivityPanel: React.FC = () => {
  const { t, language } = useLanguage();
  const dateLocale = language === 'ro' ? ro : language === 'de' ? de : enUS;
  
  const [activeSessions, setActiveSessions] = useState<UserSession[]>([]);
  const [recentPageViews, setRecentPageViews] = useState<PageView[]>([]);
  const [activityFeed, setActivityFeed] = useState<ActivityEvent[]>([]);
  const [stats, setStats] = useState({
    activeUsers: 0,
    totalPageViews: 0,
    avgSessionDuration: 0,
    peakHour: '00:00'
  });

  // Fetch initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      const fiveMinutesAgo = subMinutes(new Date(), 5).toISOString();
      const oneHourAgo = subMinutes(new Date(), 60).toISOString();

      // Fetch active sessions (activity in last 5 minutes)
      const { data: sessions } = await supabase
        .from('user_sessions')
        .select('*')
        .gte('last_activity_at', fiveMinutesAgo)
        .order('last_activity_at', { ascending: false });

      if (sessions) {
        setActiveSessions(sessions);
      }

      // Fetch recent page views (last hour)
      const { data: pageViews } = await supabase
        .from('page_views')
        .select('*')
        .gte('created_at', oneHourAgo)
        .order('created_at', { ascending: false })
        .limit(50);

      if (pageViews) {
        setRecentPageViews(pageViews);
      }

      // Calculate stats
      await calculateStats();
    };

    fetchInitialData();
  }, []);

  // Calculate statistics
  const calculateStats = async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const fiveMinutesAgo = subMinutes(new Date(), 5).toISOString();

    // Active users (sessions with activity in last 5 minutes)
    const { count: activeCount } = await supabase
      .from('user_sessions')
      .select('*', { count: 'exact', head: true })
      .gte('last_activity_at', fiveMinutesAgo);

    // Today's page views
    const { count: pageViewsCount } = await supabase
      .from('page_views')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', today.toISOString());

    // Average session duration today
    const { data: sessionDurations } = await supabase
      .from('user_sessions')
      .select('total_duration_seconds')
      .gte('started_at', today.toISOString())
      .not('total_duration_seconds', 'is', null);

    const avgDuration = sessionDurations?.length 
      ? sessionDurations.reduce((sum, s) => sum + (s.total_duration_seconds || 0), 0) / sessionDurations.length 
      : 0;

    // Peak hour analysis
    const { data: hourlyViews } = await supabase
      .from('page_views')
      .select('created_at')
      .gte('created_at', today.toISOString());

    const hourCounts: Record<number, number> = {};
    hourlyViews?.forEach(view => {
      const hour = new Date(view.created_at).getHours();
      hourCounts[hour] = (hourCounts[hour] || 0) + 1;
    });

    const peakHour = Object.entries(hourCounts)
      .sort(([, a], [, b]) => b - a)[0]?.[0] || '0';

    setStats({
      activeUsers: activeCount || 0,
      totalPageViews: pageViewsCount || 0,
      avgSessionDuration: Math.round(avgDuration / 60), // in minutes
      peakHour: `${peakHour.padStart(2, '0')}:00`
    });
  };

  // Subscribe to realtime changes
  useEffect(() => {
    const sessionsChannel = supabase
      .channel('realtime-sessions')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'user_sessions'
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            const newSession = payload.new as UserSession;
            setActiveSessions(prev => [newSession, ...prev].slice(0, 20));
            addActivityEvent({
              id: `session-${newSession.id}`,
              type: 'session_start',
              description: `Sesiune nouă ${newSession.device_type || 'necunoscut'} - ${newSession.browser || 'browser necunoscut'}`,
              timestamp: newSession.started_at,
              icon: <UserCheck className="h-4 w-4" />,
              color: 'text-green-500'
            });
          } else if (payload.eventType === 'UPDATE') {
            const updatedSession = payload.new as UserSession;
            setActiveSessions(prev => 
              prev.map(s => s.id === updatedSession.id ? updatedSession : s)
            );
          }
          calculateStats();
        }
      )
      .subscribe();

    const pageViewsChannel = supabase
      .channel('realtime-pageviews')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'page_views'
        },
        (payload) => {
          const newView = payload.new as PageView;
          setRecentPageViews(prev => [newView, ...prev].slice(0, 50));
          
          const pageName = newView.chapter_id 
            ? `Capitol: ${newView.chapter_id}`
            : newView.page_path;
          
          addActivityEvent({
            id: `view-${newView.id}`,
            type: 'page_view',
            description: `Vizualizare: ${pageName}`,
            timestamp: newView.created_at,
            icon: <Eye className="h-4 w-4" />,
            color: 'text-info'
          });
          calculateStats();
        }
      )
      .subscribe();

    const quizChannel = supabase
      .channel('realtime-quizzes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'quiz_attempts'
        },
        (payload) => {
          const quiz = payload.new as any;
          addActivityEvent({
            id: `quiz-${quiz.id}`,
            type: 'quiz_attempt',
            description: `Quiz ${quiz.passed ? 'trecut' : 'picat'} - ${quiz.chapter_id} (${quiz.score}%)`,
            timestamp: quiz.created_at,
            icon: <BookOpen className="h-4 w-4" />,
            color: quiz.passed ? 'text-green-500' : 'text-orange-500'
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(sessionsChannel);
      supabase.removeChannel(pageViewsChannel);
      supabase.removeChannel(quizChannel);
    };
  }, []);

  const addActivityEvent = (event: ActivityEvent) => {
    setActivityFeed(prev => [event, ...prev].slice(0, 30));
  };

  // Device type icon
  const getDeviceIcon = (deviceType: string | null) => {
    switch (deviceType) {
      case 'mobile': return <Smartphone className="h-4 w-4" />;
      case 'tablet': return <Tablet className="h-4 w-4" />;
      default: return <Monitor className="h-4 w-4" />;
    }
  };

  // Format duration
  const formatDuration = (seconds: number | null) => {
    if (!seconds) return '0m';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m`;
  };

  // Popular pages
  const popularPages = useMemo(() => {
    const pageCounts: Record<string, number> = {};
    recentPageViews.forEach(view => {
      const key = view.chapter_id || view.page_path;
      pageCounts[key] = (pageCounts[key] || 0) + 1;
    });
    return Object.entries(pageCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);
  }, [recentPageViews]);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t('admin.realtime.activeUsers')}</p>
                <p className="text-3xl font-bold text-green-600">{stats.activeUsers}</p>
                <p className="text-xs text-muted-foreground">{t('admin.realtime.inLast5Min')}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t('admin.realtime.viewsToday')}</p>
                <p className="text-3xl font-bold text-info">{stats.totalPageViews}</p>
                <p className="text-xs text-muted-foreground">{t('admin.realtime.pagesVisited')}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-info/10 flex items-center justify-center">
                <Eye className="h-6 w-6 text-info" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t('admin.realtime.avgSessionDuration')}</p>
                <p className="text-3xl font-bold text-purple-600">{stats.avgSessionDuration}m</p>
                <p className="text-xs text-muted-foreground">{t('admin.realtime.minutesPerSession')}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t('admin.realtime.peakHour')}</p>
                <p className="text-3xl font-bold text-orange-600">{stats.peakHour}</p>
                <p className="text-xs text-muted-foreground">{t('admin.realtime.mostActiveTime')}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Feed */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              {t('admin.realtime.liveActivity')}
              <Badge variant="outline" className="ml-auto animate-pulse bg-green-50 text-green-700 border-green-200">
                LIVE
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              {activityFeed.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <Activity className="h-12 w-12 mb-2 opacity-50" />
                  <p>{t('admin.realtime.waitingForActivity')}</p>
                  <p className="text-xs">{t('admin.realtime.eventsWillAppear')}</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {activityFeed.map((event) => (
                    <div 
                      key={event.id} 
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-in slide-in-from-top-2"
                    >
                      <div className={`mt-0.5 ${event.color}`}>
                        {event.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm truncate">{event.description}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatDistanceToNow(new Date(event.timestamp), { 
                            addSuffix: true, 
                            locale: dateLocale 
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Active Sessions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              {t('admin.realtime.activeSessions')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              {activeSessions.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <Users className="h-12 w-12 mb-2 opacity-50" />
                  <p>{t('admin.realtime.noActiveSessions')}</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {activeSessions.map((session) => (
                    <div 
                      key={session.id}
                      className="p-3 rounded-lg border bg-card hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {getDeviceIcon(session.device_type)}
                        <span className="text-sm font-medium capitalize">
                          {session.device_type || 'Desktop'}
                        </span>
                        <Badge variant="outline" className="ml-auto text-xs">
                          {session.browser || 'Unknown'}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {session.pages_visited || 0} {t('admin.realtime.pages')}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatDuration(session.total_duration_seconds)}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {t('admin.realtime.active')} {formatDistanceToNow(new Date(session.last_activity_at), { 
                          addSuffix: true, 
                          locale: dateLocale 
                        })}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Popular Pages */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            {t('admin.realtime.popularPages')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {popularPages.map(([page, count], index) => (
              <div 
                key={page}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
              >
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{page}</p>
                  <p className="text-xs text-muted-foreground">{count} {t('admin.realtime.views')}</p>
                </div>
              </div>
            ))}
            {popularPages.length === 0 && (
              <p className="text-muted-foreground col-span-5 text-center py-4">
                {t('admin.realtime.noActivityLastHour')}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Active Users Map */}
      <Suspense fallback={
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Hartă Utilizatori Activi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[500px] w-full" />
          </CardContent>
        </Card>
      }>
        <ActiveUsersMap />
      </Suspense>
    </div>
  );
};

export default RealTimeActivityPanel;
