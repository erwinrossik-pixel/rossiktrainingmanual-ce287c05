import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend, AreaChart, Area } from 'recharts';
import { format, subDays, startOfDay, endOfDay } from 'date-fns';
import { Activity, Monitor, Smartphone, Tablet, Globe, Clock, Eye, Users } from 'lucide-react';

interface PageViewData {
  page_path: string;
  chapter_id: string | null;
  created_at: string;
}

interface SessionData {
  id: string;
  user_id: string;
  started_at: string;
  last_activity_at: string;
  pages_visited: number;
  total_duration_seconds: number;
  device_type: string;
  browser: string;
}

const COLORS = ['#3b82f6', '#22c55e', '#eab308', '#ef4444', '#8b5cf6', '#ec4899'];

export function UsageAnalytics() {
  const [pageViews, setPageViews] = useState<PageViewData[]>([]);
  const [sessions, setSessions] = useState<SessionData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      // Fetch page views from last 30 days
      const thirtyDaysAgo = subDays(new Date(), 30).toISOString();
      
      const { data: pageViewsData } = await supabase
        .from('page_views')
        .select('page_path, chapter_id, created_at')
        .gte('created_at', thirtyDaysAgo)
        .order('created_at', { ascending: false });

      const { data: sessionsData } = await supabase
        .from('user_sessions')
        .select('*')
        .gte('started_at', thirtyDaysAgo)
        .order('started_at', { ascending: false });

      setPageViews(pageViewsData || []);
      setSessions(sessionsData || []);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    }
    setLoading(false);
  };

  // Calculate daily page views
  const dailyPageViews = Array.from({ length: 30 }, (_, i) => {
    const date = subDays(new Date(), 29 - i);
    const dateStr = format(date, 'yyyy-MM-dd');
    const views = pageViews.filter(pv => 
      format(new Date(pv.created_at), 'yyyy-MM-dd') === dateStr
    ).length;
    
    return {
      date: format(date, 'dd/MM'),
      views,
    };
  });

  // Calculate daily sessions
  const dailySessions = Array.from({ length: 30 }, (_, i) => {
    const date = subDays(new Date(), 29 - i);
    const dateStr = format(date, 'yyyy-MM-dd');
    const sessionCount = sessions.filter(s => 
      format(new Date(s.started_at), 'yyyy-MM-dd') === dateStr
    ).length;
    
    return {
      date: format(date, 'dd/MM'),
      sessions: sessionCount,
    };
  });

  // Device distribution
  const deviceDistribution = [
    { name: 'Desktop', value: sessions.filter(s => s.device_type === 'desktop').length, icon: Monitor },
    { name: 'Mobile', value: sessions.filter(s => s.device_type === 'mobile').length, icon: Smartphone },
    { name: 'Tablet', value: sessions.filter(s => s.device_type === 'tablet').length, icon: Tablet },
  ].filter(d => d.value > 0);

  // Browser distribution
  const browserDistribution = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera', 'Other']
    .map(browser => ({
      name: browser,
      value: sessions.filter(s => s.browser === browser).length,
    }))
    .filter(b => b.value > 0);

  // Most visited chapters
  const chapterVisits = pageViews
    .filter(pv => pv.chapter_id)
    .reduce((acc, pv) => {
      acc[pv.chapter_id!] = (acc[pv.chapter_id!] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

  const topChapters = Object.entries(chapterVisits)
    .map(([chapter, count]) => ({ chapter, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  // Average session duration
  const avgDuration = sessions.length > 0
    ? Math.round(sessions.reduce((sum, s) => sum + (s.total_duration_seconds || 0), 0) / sessions.length)
    : 0;

  // Format duration
  const formatDuration = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
    return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Vizualizări</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pageViews.length}</div>
            <p className="text-xs text-muted-foreground">ultimele 30 zile</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Sesiuni Active</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sessions.length}</div>
            <p className="text-xs text-muted-foreground">ultimele 30 zile</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Durată Medie Sesiune</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatDuration(avgDuration)}</div>
            <p className="text-xs text-muted-foreground">per sesiune</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pagini/Sesiune</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {sessions.length > 0 
                ? (sessions.reduce((sum, s) => sum + (s.pages_visited || 0), 0) / sessions.length).toFixed(1)
                : 0}
            </div>
            <p className="text-xs text-muted-foreground">medie per sesiune</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Page Views */}
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Vizualizări Zilnice</CardTitle>
            <CardDescription>Numărul de vizualizări de pagini în ultimele 30 zile</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dailyPageViews}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tick={{ fontSize: 10 }} interval="preserveStartEnd" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="views" 
                    name="Vizualizări"
                    stroke="hsl(var(--primary))" 
                    fill="hsl(var(--primary))"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Sessions per Day */}
        <Card>
          <CardHeader>
            <CardTitle>Sesiuni Zilnice</CardTitle>
            <CardDescription>Numărul de sesiuni pe zi</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailySessions}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tick={{ fontSize: 10 }} interval="preserveStartEnd" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="sessions" 
                    name="Sesiuni"
                    stroke="#22c55e" 
                    strokeWidth={2}
                    dot={{ fill: '#22c55e' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Device Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Dispozitive</CardTitle>
            <CardDescription>Distribuție după tipul dispozitivului</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deviceDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {deviceDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => [value, 'Sesiuni']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Browser Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Browsere</CardTitle>
            <CardDescription>Distribuție după browser</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={browserDistribution} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" width={80} />
                  <Tooltip formatter={(value: number) => [value, 'Sesiuni']} />
                  <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Chapters */}
        <Card>
          <CardHeader>
            <CardTitle>Cele Mai Vizitate Capitole</CardTitle>
            <CardDescription>Top 10 capitole după vizualizări</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topChapters} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis 
                    type="category" 
                    dataKey="chapter" 
                    width={100}
                    tick={{ fontSize: 10 }}
                  />
                  <Tooltip formatter={(value: number) => [value, 'Vizualizări']} />
                  <Bar dataKey="count" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
