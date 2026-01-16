import React, { memo, useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  FileText, 
  Download, 
  Calendar, 
  Users, 
  TrendingUp,
  Award,
  RefreshCw,
  FileBarChart
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useCompany } from '@/contexts/CompanyContext';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { format, subMonths, startOfMonth, endOfMonth } from 'date-fns';
import { ro } from 'date-fns/locale';
import jsPDF from 'jspdf';

interface ReportData {
  totalUsers: number;
  activeUsers: number;
  completedChapters: number;
  averageScore: number;
  certificatesIssued: number;
  topPerformers: { name: string; score: number }[];
  chapterCompletion: { chapter: string; completed: number }[];
}

export const CompanyReportGenerator = memo(function CompanyReportGenerator() {
  const { company } = useCompany();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [reportType, setReportType] = useState<'progress' | 'performance' | 'compliance'>('progress');
  const [startDate, setStartDate] = useState(format(startOfMonth(subMonths(new Date(), 1)), 'yyyy-MM-dd'));
  const [endDate, setEndDate] = useState(format(endOfMonth(subMonths(new Date(), 1)), 'yyyy-MM-dd'));
  const [reportData, setReportData] = useState<ReportData | null>(null);

  const generateReportData = useCallback(async () => {
    if (!company) return null;

    try {
      // Fetch company users
      const { data: companyUsers } = await supabase
        .from('company_users')
        .select('user_id')
        .eq('company_id', company.id)
        .eq('status', 'approved');

      const userIds = companyUsers?.map(u => u.user_id) || [];
      
      if (userIds.length === 0) {
        return {
          totalUsers: 0,
          activeUsers: 0,
          completedChapters: 0,
          averageScore: 0,
          certificatesIssued: 0,
          topPerformers: [],
          chapterCompletion: [],
        };
      }

      // Fetch quiz attempts in period
      const { data: quizAttempts } = await supabase
        .from('quiz_attempts')
        .select('user_id, score, chapter_id, passed')
        .in('user_id', userIds)
        .gte('created_at', startDate)
        .lte('created_at', endDate);

      // Fetch chapter progress
      const { data: chapterProgress } = await supabase
        .from('chapter_progress')
        .select('user_id, chapter_id, status')
        .in('user_id', userIds)
        .eq('status', 'completed');

      // Fetch certificates
      const { data: certificates } = await supabase
        .from('certificates')
        .select('id')
        .in('user_id', userIds)
        .gte('issued_at', startDate)
        .lte('issued_at', endDate);

      // Fetch profiles for top performers
      const { data: profiles } = await supabase
        .from('profiles')
        .select('id, first_name, last_name')
        .in('id', userIds);

      // Calculate metrics
      const activeUserIds = new Set(quizAttempts?.map(a => a.user_id) || []);
      const avgScore = quizAttempts && quizAttempts.length > 0
        ? Math.round(quizAttempts.reduce((a, b) => a + b.score, 0) / quizAttempts.length)
        : 0;

      // Calculate top performers
      const userScores = new Map<string, { total: number; count: number }>();
      quizAttempts?.forEach(attempt => {
        const existing = userScores.get(attempt.user_id) || { total: 0, count: 0 };
        userScores.set(attempt.user_id, {
          total: existing.total + attempt.score,
          count: existing.count + 1,
        });
      });

      const topPerformers = Array.from(userScores.entries())
        .map(([userId, scores]) => {
          const profile = profiles?.find(p => p.id === userId);
          return {
            name: profile ? `${profile.first_name || ''} ${profile.last_name || ''}`.trim() || 'Utilizator' : 'Utilizator',
            score: Math.round(scores.total / scores.count),
          };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);

      // Chapter completion stats
      const chapterCounts = new Map<string, number>();
      chapterProgress?.forEach(p => {
        chapterCounts.set(p.chapter_id, (chapterCounts.get(p.chapter_id) || 0) + 1);
      });

      const chapterCompletion = Array.from(chapterCounts.entries())
        .map(([chapter, completed]) => ({ chapter, completed }))
        .sort((a, b) => b.completed - a.completed)
        .slice(0, 10);

      return {
        totalUsers: userIds.length,
        activeUsers: activeUserIds.size,
        completedChapters: chapterProgress?.length || 0,
        averageScore: avgScore,
        certificatesIssued: certificates?.length || 0,
        topPerformers,
        chapterCompletion,
      };
    } catch (error) {
      console.error('Error generating report data:', error);
      throw error;
    }
  }, [company, startDate, endDate]);

  const handleGenerateReport = async () => {
    if (!company || !user) return;

    setLoading(true);
    try {
      const data = await generateReportData();
      if (!data) throw new Error('Failed to generate report data');
      
      setReportData(data);

      // Save report to database
      await supabase.from('company_reports').insert([{
        company_id: company.id,
        generated_by: user.id,
        report_type: reportType,
        report_period_start: startDate,
        report_period_end: endDate,
        report_data: JSON.parse(JSON.stringify(data)),
      }]);

      toast.success('Raport generat cu succes!');
    } catch (error) {
      console.error('Error generating report:', error);
      toast.error('Eroare la generarea raportului');
    } finally {
      setLoading(false);
    }
  };

  const handleExportPDF = async () => {
    if (!reportData || !company) return;

    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      
      // Header
      doc.setFontSize(20);
      doc.setTextColor(0, 0, 0);
      doc.text(`Raport ${reportType === 'progress' ? 'Progres' : reportType === 'performance' ? 'Performanță' : 'Conformitate'}`, pageWidth / 2, 20, { align: 'center' });
      
      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      doc.text(company.name, pageWidth / 2, 28, { align: 'center' });
      doc.text(`${format(new Date(startDate), 'd MMM yyyy', { locale: ro })} - ${format(new Date(endDate), 'd MMM yyyy', { locale: ro })}`, pageWidth / 2, 35, { align: 'center' });
      
      // Summary stats
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0);
      doc.text('Sumar', 20, 50);
      
      doc.setFontSize(11);
      const stats = [
        `Utilizatori totali: ${reportData.totalUsers}`,
        `Utilizatori activi: ${reportData.activeUsers}`,
        `Capitole completate: ${reportData.completedChapters}`,
        `Scor mediu: ${reportData.averageScore}%`,
        `Certificate emise: ${reportData.certificatesIssued}`,
      ];
      
      stats.forEach((stat, i) => {
        doc.text(stat, 20, 60 + i * 8);
      });
      
      // Top performers
      if (reportData.topPerformers.length > 0) {
        doc.setFontSize(14);
        doc.text('Top Performeri', 20, 110);
        
        doc.setFontSize(11);
        reportData.topPerformers.forEach((performer, i) => {
          doc.text(`${i + 1}. ${performer.name} - ${performer.score}%`, 20, 120 + i * 8);
        });
      }
      
      // Footer
      doc.setFontSize(9);
      doc.setTextColor(150, 150, 150);
      doc.text(`Generat la ${format(new Date(), 'd MMMM yyyy, HH:mm', { locale: ro })}`, pageWidth / 2, 280, { align: 'center' });
      
      // Save
      doc.save(`raport-${reportType}-${format(new Date(), 'yyyy-MM-dd')}.pdf`);
      toast.success('PDF exportat cu succes!');
    } catch (error) {
      console.error('Error exporting PDF:', error);
      toast.error('Eroare la exportul PDF');
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <FileBarChart className="h-5 w-5 text-primary" />
          <CardTitle>Generator Rapoarte Companie</CardTitle>
        </div>
        <CardDescription>
          Generează rapoarte detaliate pentru performanța echipei
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Report Configuration */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Tip raport</Label>
            <Select value={reportType} onValueChange={(v) => setReportType(v as typeof reportType)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="progress">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Progres
                  </div>
                </SelectItem>
                <SelectItem value="performance">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Performanță
                  </div>
                </SelectItem>
                <SelectItem value="compliance">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Conformitate
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Data început</Label>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Data sfârșit</Label>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <Button onClick={handleGenerateReport} disabled={loading} className="w-full">
          {loading ? (
            <>
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Se generează...
            </>
          ) : (
            <>
              <FileText className="h-4 w-4 mr-2" />
              Generează Raport
            </>
          )}
        </Button>

        {/* Report Results */}
        {reportData && (
          <div className="space-y-6 pt-4 border-t">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Rezultate Raport</h3>
              <Button variant="outline" size="sm" onClick={handleExportPDF}>
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <Users className="h-4 w-4 mx-auto mb-1 text-blue-500" />
                <p className="text-2xl font-bold">{reportData.totalUsers}</p>
                <p className="text-xs text-muted-foreground">Utilizatori</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <TrendingUp className="h-4 w-4 mx-auto mb-1 text-green-500" />
                <p className="text-2xl font-bold">{reportData.activeUsers}</p>
                <p className="text-xs text-muted-foreground">Activi</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <FileText className="h-4 w-4 mx-auto mb-1 text-purple-500" />
                <p className="text-2xl font-bold">{reportData.completedChapters}</p>
                <p className="text-xs text-muted-foreground">Capitole</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <Award className="h-4 w-4 mx-auto mb-1 text-orange-500" />
                <p className="text-2xl font-bold">{reportData.averageScore}%</p>
                <p className="text-xs text-muted-foreground">Scor mediu</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <Calendar className="h-4 w-4 mx-auto mb-1 text-primary" />
                <p className="text-2xl font-bold">{reportData.certificatesIssued}</p>
                <p className="text-xs text-muted-foreground">Certificate</p>
              </div>
            </div>

            {/* Top Performers */}
            {reportData.topPerformers.length > 0 && (
              <div>
                <h4 className="font-medium mb-3">Top Performeri</h4>
                <div className="space-y-2">
                  {reportData.topPerformers.map((performer, i) => (
                    <div key={i} className="flex items-center justify-between bg-muted/30 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <Badge variant={i === 0 ? 'default' : 'secondary'}>
                          #{i + 1}
                        </Badge>
                        <span className="font-medium">{performer.name}</span>
                      </div>
                      <span className="text-primary font-bold">{performer.score}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
});
