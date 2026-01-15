import React, { memo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLearningKPI } from '@/hooks/useLearningKPI';
import { LearningKPIPanel } from './LearningKPIPanel';
import { UserKPIPanel } from './UserKPIPanel';
import { ContentKPIPanel } from './ContentKPIPanel';
import { RefreshCw, BookOpen, Users, FileText, TrendingUp, Brain } from 'lucide-react';
import { toast } from 'sonner';

export const LearningAnalyticsDashboard = memo(function LearningAnalyticsDashboard() {
  const {
    chapterKPIs,
    userKPIs,
    contentKPIs,
    globalKPI,
    loading,
    error,
    refreshAllKPIs,
    chaptersNeedingImprovement,
    usersNeedingSupport,
  } = useLearningKPI();

  const handleRefresh = async () => {
    toast.info('Se actualizează KPI-urile...');
    await refreshAllKPIs();
    toast.success('KPI-uri actualizate cu succes!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Learning Analytics & KPI Dashboard
          </h2>
          <p className="text-muted-foreground">
            Analiză avansată pentru decizii informate
          </p>
        </div>
        <Button onClick={handleRefresh} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Actualizează
        </Button>
      </div>

      {/* Quick Stats */}
      {globalKPI && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Rata Promovare Globală</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">
                {globalKPI.overallPassRate.toFixed(1)}%
              </p>
            </CardContent>
          </Card>
          <Card className="bg-green-500/5 border-green-500/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Utilizatori Activi (7 zile)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-600">
                {globalKPI.activeUsersLast7Days}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-orange-500/5 border-orange-500/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Capitole Problematice</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-orange-600">
                {chaptersNeedingImprovement.length}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-blue-500/5 border-blue-500/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Utilizatori Necesită Suport</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600">
                {usersNeedingSupport.length}
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* KPI Tabs */}
      <Tabs defaultValue="learning" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="learning" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            KPI Învățare
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            KPI Utilizatori
          </TabsTrigger>
          <TabsTrigger value="content" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            KPI Conținut
          </TabsTrigger>
        </TabsList>

        <TabsContent value="learning" className="mt-6">
          <LearningKPIPanel chapterKPIs={chapterKPIs} loading={loading} />
        </TabsContent>

        <TabsContent value="users" className="mt-6">
          <UserKPIPanel userKPIs={userKPIs} loading={loading} />
        </TabsContent>

        <TabsContent value="content" className="mt-6">
          <ContentKPIPanel contentKPIs={contentKPIs} loading={loading} />
        </TabsContent>
      </Tabs>

      {error && (
        <Card className="border-destructive bg-destructive/5">
          <CardContent className="pt-6">
            <p className="text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
});
