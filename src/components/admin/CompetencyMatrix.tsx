import { useState, useEffect, memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  TrendingDown,
  Target,
  AlertTriangle,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { COMPETENCY_AREAS } from '@/hooks/useSkillAssessment';

interface TeamMember {
  user_id: string;
  first_name: string | null;
  last_name: string | null;
  email: string;
  company_id: string | null;
  competencies: Record<string, number>;
  avg_score: number;
}

const getScoreColor = (score: number) => {
  if (score >= 80) return 'bg-green-500';
  if (score >= 60) return 'bg-amber-500';
  if (score >= 40) return 'bg-orange-500';
  return 'bg-red-500';
};

const getScoreBadge = (score: number) => {
  if (score >= 80) return { label: 'Excelent', color: 'bg-green-100 text-green-700' };
  if (score >= 60) return { label: 'Bine', color: 'bg-amber-100 text-amber-700' };
  if (score >= 40) return { label: 'Mediu', color: 'bg-orange-100 text-orange-700' };
  return { label: 'Necesită îmbunătățire', color: 'bg-red-100 text-red-700' };
};

export const CompetencyMatrix = memo(() => {
  const [teamData, setTeamData] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedArea, setSelectedArea] = useState<string>('all');

  useEffect(() => {
    fetchTeamData();
  }, []);

  const fetchTeamData = async () => {
    try {
      // Fetch all competency scores with profiles
      const { data: scores } = await supabase
        .from('competency_scores')
        .select('*');

      if (!scores?.length) {
        setLoading(false);
        return;
      }

      // Get unique user IDs
      const userIds = [...new Set(scores.map(s => s.user_id))];

      // Fetch profiles
      const { data: profiles } = await supabase
        .from('profiles')
        .select('id, first_name, last_name, email')
        .in('id', userIds);

      // Fetch company assignments
      const { data: companyUsers } = await supabase
        .from('company_users')
        .select('user_id, company_id')
        .in('user_id', userIds);

      // Build team data
      const teamMap = new Map<string, TeamMember>();

      for (const score of scores) {
        const profile = profiles?.find(p => p.id === score.user_id);
        const companyUser = companyUsers?.find(cu => cu.user_id === score.user_id);

        if (!teamMap.has(score.user_id)) {
          teamMap.set(score.user_id, {
            user_id: score.user_id,
            first_name: profile?.first_name || null,
            last_name: profile?.last_name || null,
            email: profile?.email || '',
            company_id: companyUser?.company_id || null,
            competencies: {},
            avg_score: 0
          });
        }

        const member = teamMap.get(score.user_id)!;
        member.competencies[score.competency_area] = score.score;
      }

      // Calculate average scores
      const teamArray = Array.from(teamMap.values()).map(member => {
        const scores = Object.values(member.competencies);
        member.avg_score = scores.length > 0 
          ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
          : 0;
        return member;
      });

      setTeamData(teamArray.sort((a, b) => b.avg_score - a.avg_score));
    } catch (error) {
      console.error('Error fetching team data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate team-wide statistics
  const getTeamStats = () => {
    if (!teamData.length) return { avgScore: 0, topAreas: [], weakAreas: [] };

    const areaScores: Record<string, number[]> = {};
    
    for (const member of teamData) {
      for (const [area, score] of Object.entries(member.competencies)) {
        if (!areaScores[area]) areaScores[area] = [];
        areaScores[area].push(score);
      }
    }

    const areaAverages = Object.entries(areaScores).map(([area, scores]) => ({
      area,
      avgScore: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
      label: COMPETENCY_AREAS[area as keyof typeof COMPETENCY_AREAS]?.label || area
    }));

    const sorted = [...areaAverages].sort((a, b) => b.avgScore - a.avgScore);

    return {
      avgScore: Math.round(teamData.reduce((sum, m) => sum + m.avg_score, 0) / teamData.length),
      topAreas: sorted.slice(0, 3),
      weakAreas: sorted.slice(-3).reverse()
    };
  };

  const stats = getTeamStats();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white/80 flex items-center gap-2">
              <Users className="h-4 w-4" />
              Membri Echipă
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{teamData.length}</div>
            <p className="text-xs text-white/70">cu competențe evaluate</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500 to-green-600 text-white border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white/80 flex items-center gap-2">
              <Target className="h-4 w-4" />
              Scor Mediu Echipă
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.avgScore}%</div>
            <p className="text-xs text-white/70">competență generală</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-500 to-orange-600 text-white border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white/80 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Punct Forte
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold truncate">{stats.topAreas[0]?.label || '-'}</div>
            <p className="text-xs text-white/70">{stats.topAreas[0]?.avgScore || 0}% medie</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-rose-500 to-pink-600 text-white border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white/80 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              De Îmbunătățit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold truncate">{stats.weakAreas[0]?.label || '-'}</div>
            <p className="text-xs text-white/70">{stats.weakAreas[0]?.avgScore || 0}% medie</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="matrix">
        <TabsList>
          <TabsTrigger value="matrix">
            <BarChart3 className="h-4 w-4 mr-2" />
            Matricea Competențelor
          </TabsTrigger>
          <TabsTrigger value="individual">
            <Users className="h-4 w-4 mr-2" />
            Profil Individual
          </TabsTrigger>
        </TabsList>

        <TabsContent value="matrix" className="mt-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Matricea Competențelor Echipei</CardTitle>
                  <CardDescription>Vizualizare comparativă a competențelor</CardDescription>
                </div>
                <Select value={selectedArea} onValueChange={setSelectedArea}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Toate ariile" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toate ariile</SelectItem>
                    {Object.entries(COMPETENCY_AREAS).map(([key, { label }]) => (
                      <SelectItem key={key} value={key}>{label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                <div className="space-y-4">
                  {teamData.map((member) => (
                    <div key={member.user_id} className="p-4 rounded-lg bg-muted/30">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>
                            {member.first_name?.[0] || '?'}
                            {member.last_name?.[0] || ''}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">
                              {member.first_name || 'User'} {member.last_name || ''}
                            </span>
                            <Badge {...getScoreBadge(member.avg_score)} className={getScoreBadge(member.avg_score).color}>
                              {member.avg_score}%
                            </Badge>
                          </div>
                          <span className="text-xs text-muted-foreground">{member.email}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                        {Object.entries(COMPETENCY_AREAS)
                          .filter(([key]) => selectedArea === 'all' || key === selectedArea)
                          .map(([key, { label }]) => {
                            const score = member.competencies[key] || 0;
                            return (
                              <div key={key} className="space-y-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs text-muted-foreground truncate">{label}</span>
                                  <span className="text-xs font-medium">{score}%</span>
                                </div>
                                <Progress value={score} className="h-2" />
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="individual" className="mt-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamData.map((member) => (
              <Card key={member.user_id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="text-lg">
                        {member.first_name?.[0] || '?'}
                        {member.last_name?.[0] || ''}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">
                        {member.first_name || 'User'} {member.last_name || ''}
                      </CardTitle>
                      <CardDescription className="text-xs">{member.email}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Scor General</span>
                    <Badge className={getScoreBadge(member.avg_score).color}>
                      {member.avg_score}%
                    </Badge>
                  </div>
                  
                  {/* Top 3 skills */}
                  <div className="space-y-2">
                    <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                      <Sparkles className="h-3 w-3" /> Puncte forte
                    </span>
                    {Object.entries(member.competencies)
                      .sort(([,a], [,b]) => b - a)
                      .slice(0, 3)
                      .map(([area, score]) => (
                        <div key={area} className="flex items-center gap-2">
                          <div className={`h-2 w-2 rounded-full ${getScoreColor(score)}`} />
                          <span className="text-xs flex-1 truncate">
                            {COMPETENCY_AREAS[area as keyof typeof COMPETENCY_AREAS]?.label || area}
                          </span>
                          <span className="text-xs font-medium">{score}%</span>
                        </div>
                      ))}
                  </div>

                  {/* Areas to improve */}
                  {Object.entries(member.competencies).some(([,score]) => score < 60) && (
                    <div className="space-y-2">
                      <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                        <TrendingDown className="h-3 w-3" /> De îmbunătățit
                      </span>
                      {Object.entries(member.competencies)
                        .filter(([,score]) => score < 60)
                        .sort(([,a], [,b]) => a - b)
                        .slice(0, 2)
                        .map(([area, score]) => (
                          <div key={area} className="flex items-center gap-2">
                            <div className={`h-2 w-2 rounded-full ${getScoreColor(score)}`} />
                            <span className="text-xs flex-1 truncate">
                              {COMPETENCY_AREAS[area as keyof typeof COMPETENCY_AREAS]?.label || area}
                            </span>
                            <span className="text-xs font-medium">{score}%</span>
                          </div>
                        ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
});

CompetencyMatrix.displayName = 'CompetencyMatrix';
