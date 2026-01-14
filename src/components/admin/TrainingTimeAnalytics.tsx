import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Clock, Timer, TrendingUp, Users, Download, RefreshCw } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { format } from 'date-fns';
import { toast } from 'sonner';

interface UserTrainingTime {
  userId: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  days: Record<number, number>;
  totalSeconds: number;
  isCurrentlyTraining: boolean;
  trainingStartedAt: string | null;
}

const TARGET_HOURS_PER_DAY = 8;
const TOTAL_TARGET_HOURS = 40; // 5 days * 8 hours

const DAY_NAMES = {
  1: 'Fundamente',
  2: 'Echipament & Documente',
  3: 'Geografie & Comercial',
  4: 'Tehnologie & Finanțe',
  5: 'Aplicare Practică',
};

export function TrainingTimeAnalytics() {
  const [usersTime, setUsersTime] = useState<UserTrainingTime[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTrainingTime = async () => {
    setLoading(true);

    // Fetch all profiles
    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, email, first_name, last_name');

    // Fetch all training time records
    const { data: trainingData } = await supabase
      .from('training_time')
      .select('*');

    if (!profiles) {
      setLoading(false);
      return;
    }

    const usersWithTime: UserTrainingTime[] = profiles.map(profile => {
      const userTrainingRecords = trainingData?.filter(t => t.user_id === profile.id) || [];
      
      const days: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      let isCurrentlyTraining = false;
      let trainingStartedAt: string | null = null;

      userTrainingRecords.forEach(record => {
        let seconds = record.total_seconds;
        
        // Add running time if timer is active
        if (record.is_running && record.last_start_time) {
          const elapsed = Math.floor((Date.now() - new Date(record.last_start_time).getTime()) / 1000);
          seconds += elapsed;
          isCurrentlyTraining = true;
        }
        
        days[record.day_number] = seconds;
        
        if (record.training_started_at && !trainingStartedAt) {
          trainingStartedAt = record.training_started_at;
        }
      });

      const totalSeconds = Object.values(days).reduce((a, b) => a + b, 0);

      return {
        userId: profile.id,
        email: profile.email,
        firstName: profile.first_name,
        lastName: profile.last_name,
        days,
        totalSeconds,
        isCurrentlyTraining,
        trainingStartedAt,
      };
    });

    // Sort by total time descending
    usersWithTime.sort((a, b) => b.totalSeconds - a.totalSeconds);
    setUsersTime(usersWithTime);
    setLoading(false);
  };

  useEffect(() => {
    fetchTrainingTime();

    // Refresh every 30 seconds
    const interval = setInterval(fetchTrainingTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  const formatTimeShort = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h`;
    }
    return `${minutes}m`;
  };

  // Calculate aggregate stats
  const usersWithAnyTime = usersTime.filter(u => u.totalSeconds > 0);
  const totalTimeAllUsers = usersTime.reduce((acc, u) => acc + u.totalSeconds, 0);
  const averageTime = usersWithAnyTime.length > 0 
    ? totalTimeAllUsers / usersWithAnyTime.length 
    : 0;
  const usersCurrentlyTraining = usersTime.filter(u => u.isCurrentlyTraining).length;
  const usersCompletedTarget = usersTime.filter(u => u.totalSeconds >= TOTAL_TARGET_HOURS * 3600).length;

  // Chart data: time distribution by day across all users
  const dayDistribution = [1, 2, 3, 4, 5].map(day => {
    const totalForDay = usersTime.reduce((acc, u) => acc + (u.days[day] || 0), 0);
    return {
      day: `Z${day}`,
      fullName: DAY_NAMES[day as keyof typeof DAY_NAMES],
      hours: totalForDay / 3600,
      users: usersTime.filter(u => (u.days[day] || 0) > 0).length,
    };
  });

  // Progress distribution pie chart
  const progressDistribution = [
    { 
      name: '0%', 
      value: usersTime.filter(u => u.totalSeconds === 0).length, 
      color: '#ef4444' 
    },
    { 
      name: '1-25%', 
      value: usersTime.filter(u => {
        const pct = (u.totalSeconds / (TOTAL_TARGET_HOURS * 3600)) * 100;
        return pct > 0 && pct <= 25;
      }).length, 
      color: '#f97316' 
    },
    { 
      name: '26-50%', 
      value: usersTime.filter(u => {
        const pct = (u.totalSeconds / (TOTAL_TARGET_HOURS * 3600)) * 100;
        return pct > 25 && pct <= 50;
      }).length, 
      color: '#eab308' 
    },
    { 
      name: '51-75%', 
      value: usersTime.filter(u => {
        const pct = (u.totalSeconds / (TOTAL_TARGET_HOURS * 3600)) * 100;
        return pct > 50 && pct <= 75;
      }).length, 
      color: '#3b82f6' 
    },
    { 
      name: '76-99%', 
      value: usersTime.filter(u => {
        const pct = (u.totalSeconds / (TOTAL_TARGET_HOURS * 3600)) * 100;
        return pct > 75 && pct < 100;
      }).length, 
      color: '#8b5cf6' 
    },
    { 
      name: '100%', 
      value: usersTime.filter(u => u.totalSeconds >= TOTAL_TARGET_HOURS * 3600).length, 
      color: '#22c55e' 
    },
  ].filter(d => d.value > 0);

  const exportToCSV = () => {
    const headers = ['Nume', 'Email', 'Ziua 1', 'Ziua 2', 'Ziua 3', 'Ziua 4', 'Ziua 5', 'Total', 'Progres %', 'Activ Acum', 'Început Training'];
    const rows = usersTime.map(u => [
      `${u.firstName || ''} ${u.lastName || ''}`.trim() || 'N/A',
      u.email,
      formatTime(u.days[1] || 0),
      formatTime(u.days[2] || 0),
      formatTime(u.days[3] || 0),
      formatTime(u.days[4] || 0),
      formatTime(u.days[5] || 0),
      formatTime(u.totalSeconds),
      `${Math.min(100, Math.round((u.totalSeconds / (TOTAL_TARGET_HOURS * 3600)) * 100))}%`,
      u.isCurrentlyTraining ? 'Da' : 'Nu',
      u.trainingStartedAt ? format(new Date(u.trainingStartedAt), 'dd.MM.yyyy HH:mm') : 'N/A',
    ]);

    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `training-time-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    link.click();

    toast.success('Export CSV descărcat!');
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-popover border border-border rounded-lg shadow-lg p-3 text-sm">
          <p className="font-semibold">{data.fullName}</p>
          <p className="text-muted-foreground">{data.hours.toFixed(1)} ore total</p>
          <p className="text-xs text-muted-foreground">{data.users} utilizatori activi</p>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Timp Total Platform</CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatTime(totalTimeAllUsers)}</div>
            <p className="text-xs text-muted-foreground">{usersWithAnyTime.length} utilizatori activi</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Timp Mediu</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatTime(Math.round(averageTime))}</div>
            <p className="text-xs text-muted-foreground">per utilizator activ</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">În Training Acum</CardTitle>
            <Clock className="h-4 w-4 text-green-500 animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{usersCurrentlyTraining}</div>
            <p className="text-xs text-muted-foreground">utilizatori activi</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Obiectiv Atins (40h)</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{usersCompletedTarget}</div>
            <p className="text-xs text-muted-foreground">din {usersTime.length} utilizatori</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Distribuție Timp pe Zile</CardTitle>
            <CardDescription>Ore totale petrecute de toți utilizatorii pe fiecare zi</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dayDistribution} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <XAxis 
                    dataKey="day" 
                    tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
                    axisLine={{ stroke: 'hsl(var(--border))' }}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `${value}h`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="hours" 
                    radius={[4, 4, 0, 0]}
                    fill="hsl(var(--primary))"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Distribuție Progres Training</CardTitle>
            <CardDescription>Utilizatori grupați după procentul din obiectivul de 40h</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={progressDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                    labelLine={{ stroke: 'hsl(var(--muted-foreground))' }}
                  >
                    {progressDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => [`${value} utilizatori`, '']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Users Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base">Timp Training per Utilizator</CardTitle>
            <CardDescription>Detalii despre timpul petrecut de fiecare utilizator</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={fetchTrainingTime}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Actualizează
            </Button>
            <Button variant="outline" size="sm" onClick={exportToCSV}>
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Utilizator</TableHead>
                <TableHead className="text-center">Z1</TableHead>
                <TableHead className="text-center">Z2</TableHead>
                <TableHead className="text-center">Z3</TableHead>
                <TableHead className="text-center">Z4</TableHead>
                <TableHead className="text-center">Z5</TableHead>
                <TableHead className="text-center">Total</TableHead>
                <TableHead className="w-32">Progres</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usersTime.slice(0, 20).map((userTime) => {
                const progressPercent = Math.min(100, Math.round((userTime.totalSeconds / (TOTAL_TARGET_HOURS * 3600)) * 100));
                
                return (
                  <TableRow key={userTime.userId}>
                    <TableCell>
                      <div>
                        <p className="font-medium">
                          {userTime.firstName || userTime.lastName 
                            ? `${userTime.firstName || ''} ${userTime.lastName || ''}`.trim()
                            : 'N/A'}
                        </p>
                        <p className="text-xs text-muted-foreground">{userTime.email}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-xs font-mono">
                      {userTime.days[1] > 0 ? formatTimeShort(userTime.days[1]) : '-'}
                    </TableCell>
                    <TableCell className="text-center text-xs font-mono">
                      {userTime.days[2] > 0 ? formatTimeShort(userTime.days[2]) : '-'}
                    </TableCell>
                    <TableCell className="text-center text-xs font-mono">
                      {userTime.days[3] > 0 ? formatTimeShort(userTime.days[3]) : '-'}
                    </TableCell>
                    <TableCell className="text-center text-xs font-mono">
                      {userTime.days[4] > 0 ? formatTimeShort(userTime.days[4]) : '-'}
                    </TableCell>
                    <TableCell className="text-center text-xs font-mono">
                      {userTime.days[5] > 0 ? formatTimeShort(userTime.days[5]) : '-'}
                    </TableCell>
                    <TableCell className="text-center font-mono font-medium">
                      {userTime.totalSeconds > 0 ? formatTime(userTime.totalSeconds) : '-'}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={progressPercent} className="h-2 w-16" />
                        <span className="text-xs text-muted-foreground w-8">{progressPercent}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      {userTime.isCurrentlyTraining ? (
                        <Badge className="bg-green-500 animate-pulse">Activ</Badge>
                      ) : userTime.totalSeconds > 0 ? (
                        <Badge variant="secondary">Pauză</Badge>
                      ) : (
                        <Badge variant="outline">-</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
              {usersTime.length === 0 && (
                <TableRow>
                  <TableCell colSpan={9} className="text-center text-muted-foreground py-8">
                    Niciun utilizator nu a înregistrat timp de training încă
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          {usersTime.length > 20 && (
            <p className="text-sm text-muted-foreground text-center mt-4">
              Se afișează primii 20 utilizatori. Exportă CSV pentru lista completă.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
