import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend, AreaChart, Area } from 'recharts';
import { useLanguage } from '@/contexts/LanguageContext';

interface ChapterStats {
  chapterId: string;
  chapterName: string;
  attempts: number;
  passRate: number;
  avgScore: number;
}

interface DailyActivity {
  date: string;
  attempts: number;
  passed: number;
}

interface AdminChartsProps {
  chapterStats: ChapterStats[];
  dailyActivity: DailyActivity[];
  completionDistribution: { name: string; value: number; color: string }[];
  scoreDistribution: { range: string; count: number }[];
}

const COLORS = ['#22c55e', '#eab308', '#3b82f6', '#ef4444', '#8b5cf6'];

export function AdminCharts({ 
  chapterStats, 
  dailyActivity, 
  completionDistribution,
  scoreDistribution 
}: AdminChartsProps) {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Pass Rate by Chapter */}
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle>{t('admin.charts.passRateTitle')}</CardTitle>
          <CardDescription>{t('admin.charts.passRateDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chapterStats.slice(0, 20)} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} unit="%" />
                <YAxis 
                  type="category" 
                  dataKey="chapterName" 
                  width={120}
                  tick={{ fontSize: 11 }}
                />
                <Tooltip 
                  formatter={(value: number) => [`${value.toFixed(1)}%`, t('admin.charts.passRateLabel')]}
                />
                <Bar 
                  dataKey="passRate" 
                  fill="hsl(var(--primary))"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Daily Activity Chart */}
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.charts.dailyActivity')}</CardTitle>
          <CardDescription>{t('admin.charts.dailyActivityDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dailyActivity}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 10 }}
                  interval="preserveStartEnd"
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="attempts" 
                  name={t('admin.charts.totalAttempts')}
                  stroke="hsl(var(--primary))" 
                  fill="hsl(var(--primary))"
                  fillOpacity={0.3}
                />
                <Area 
                  type="monotone" 
                  dataKey="passed" 
                  name={t('admin.charts.passed')}
                  stroke="#22c55e" 
                  fill="#22c55e"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Completion Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.charts.completionDist')}</CardTitle>
          <CardDescription>{t('admin.charts.completionDistDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={completionDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {completionDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [value, t('admin.charts.users')]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Score Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.charts.scoreDist')}</CardTitle>
          <CardDescription>{t('admin.charts.scoreDistDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scoreDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip formatter={(value: number) => [value, t('admin.charts.attempts')]} />
                <Bar 
                  dataKey="count" 
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                >
                  {scoreDistribution.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={
                        entry.range.startsWith('9') || entry.range.startsWith('10') 
                          ? '#22c55e' 
                          : entry.range.startsWith('7') || entry.range.startsWith('8')
                          ? '#eab308'
                          : '#ef4444'
                      } 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Average Score by Chapter */}
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.charts.avgScoreTitle')}</CardTitle>
          <CardDescription>{t('admin.charts.avgScoreDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chapterStats.slice(0, 15)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="chapterName" 
                  tick={{ fontSize: 9 }}
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis domain={[0, 10]} />
                <Tooltip formatter={(value: number) => [`${value.toFixed(1)}/10`, t('admin.charts.avgScore')]} />
                <Line 
                  type="monotone" 
                  dataKey="avgScore" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Most Attempted Chapters */}
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.charts.mostAttempted')}</CardTitle>
          <CardDescription>{t('admin.charts.mostAttemptedDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={[...chapterStats].sort((a, b) => b.attempts - a.attempts).slice(0, 10)}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis 
                  type="category" 
                  dataKey="chapterName" 
                  width={100}
                  tick={{ fontSize: 10 }}
                />
                <Tooltip formatter={(value: number) => [value, t('admin.charts.attempts')]} />
                <Bar 
                  dataKey="attempts" 
                  fill="#8b5cf6"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
