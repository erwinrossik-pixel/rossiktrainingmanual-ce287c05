import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  useCompanyCompetencyInsights, 
  useCompetencyAnalysis,
  UserCompetencyProfile,
  ChapterCompetency 
} from '@/hooks/useCompetencyAnalysis';
import { 
  Target, Users, TrendingUp, TrendingDown, Minus, AlertTriangle, 
  CheckCircle2, BookOpen, Search, Eye, RefreshCw, BarChart3,
  Lightbulb, ArrowRight, Star, AlertCircle
} from 'lucide-react';

export function CompetencyGapAnalysis() {
  const { loading, insights, userProfiles, refetch } = useCompanyCompetencyInsights();
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = useMemo(() => {
    if (!searchTerm) return userProfiles;
    const term = searchTerm.toLowerCase();
    return userProfiles.filter(u => 
      u.email.toLowerCase().includes(term) ||
      u.firstName?.toLowerCase().includes(term) ||
      u.lastName?.toLowerCase().includes(term)
    );
  }, [userProfiles, searchTerm]);

  const getStatusColor = (status: ChapterCompetency['status']) => {
    switch (status) {
      case 'mastered': return 'bg-green-500';
      case 'proficient': return 'bg-blue-500';
      case 'developing': return 'bg-amber-500';
      case 'needs_work': return 'bg-red-500';
      default: return 'bg-gray-300';
    }
  };

  const getStatusLabel = (status: ChapterCompetency['status']) => {
    switch (status) {
      case 'mastered': return 'Stăpânit';
      case 'proficient': return 'Competent';
      case 'developing': return 'În Dezvoltare';
      case 'needs_work': return 'Necesită Atenție';
      default: return 'Neînceput';
    }
  };

  const getTrendIcon = (trend: ChapterCompetency['trend']) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'declining': return <TrendingDown className="h-4 w-4 text-red-500" />;
      case 'stable': return <Minus className="h-4 w-4 text-gray-500" />;
      default: return null;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 70) return 'text-blue-600 bg-blue-100';
    if (score >= 50) return 'text-amber-600 bg-amber-100';
    return 'text-red-600 bg-red-100';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Analiză Lipsuri Competențe
          </h2>
          <p className="text-muted-foreground">
            Identifică ce lipsește fiecărui utilizator pentru succes
          </p>
        </div>
        <Button onClick={refetch} variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          Actualizează
        </Button>
      </div>

      {/* Company Overview */}
      {insights && (
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-600 font-medium">Scor Mediu Companie</p>
                  <p className="text-3xl font-bold text-blue-700">{insights.averageScore}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-50 to-orange-100 border-red-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-red-500 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-red-600 font-medium">Necesită Suport</p>
                  <p className="text-3xl font-bold text-red-700">{insights.usersNeedingSupport}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-500 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-green-600 font-medium">Capitole Stăpânite</p>
                  <p className="text-3xl font-bold text-green-700">{insights.topStrongChapters.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-yellow-100 border-amber-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-500 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-amber-600 font-medium">Capitole Problematice</p>
                  <p className="text-3xl font-bold text-amber-700">{insights.topWeakChapters.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Analiză per Utilizator
          </TabsTrigger>
          <TabsTrigger value="chapters" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Analiză per Capitol
          </TabsTrigger>
          <TabsTrigger value="distribution" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Distribuție Competențe
          </TabsTrigger>
        </TabsList>

        {/* Users Analysis Tab */}
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Profil Competențe Utilizatori</CardTitle>
                  <CardDescription>Click pe un utilizator pentru detalii complete</CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Caută utilizator..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filteredUsers.map((user) => (
                  <div
                    key={user.userId}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                    onClick={() => setSelectedUser(user.userId)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                        user.overallScore >= 70 ? 'bg-green-500' : 
                        user.overallScore >= 50 ? 'bg-amber-500' : 
                        user.overallScore > 0 ? 'bg-red-500' : 'bg-gray-400'
                      }`}>
                        {user.overallScore}%
                      </div>
                      <div>
                        <p className="font-semibold">
                          {user.firstName && user.lastName 
                            ? `${user.firstName} ${user.lastName}`
                            : user.email}
                        </p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">{user.strongAreas.length}</p>
                        <p className="text-xs text-muted-foreground">Puncte Forte</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-red-600">{user.weakAreas.length}</p>
                        <p className="text-xs text-muted-foreground">De Îmbunătățit</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold">{user.completedChapters}/{user.totalChapters}</p>
                        <p className="text-xs text-muted-foreground">Capitole</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Chapters Analysis Tab */}
        <TabsContent value="chapters">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <AlertTriangle className="h-5 w-5" />
                  Capitole Problematice
                </CardTitle>
                <CardDescription>Capitole cu cele mai slabe rezultate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {insights?.topWeakChapters.map((chapter, idx) => (
                    <div key={chapter.chapterId} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </span>
                        <span className="font-medium">{chapter.chapterName}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="destructive">{chapter.avgScore}%</Badge>
                        <span className="text-xs text-muted-foreground">
                          {chapter.usersStruggling} utilizatori în dificultate
                        </span>
                      </div>
                    </div>
                  ))}
                  {insights?.topWeakChapters.length === 0 && (
                    <p className="text-center text-muted-foreground py-4">
                      Nu există capitole problematice
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <Star className="h-5 w-5" />
                  Capitole Bine Stăpânite
                </CardTitle>
                <CardDescription>Capitole cu cele mai bune rezultate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {insights?.topStrongChapters.map((chapter, idx) => (
                    <div key={chapter.chapterId} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </span>
                        <span className="font-medium">{chapter.chapterName}</span>
                      </div>
                      <Badge className="bg-green-500">{chapter.avgScore}%</Badge>
                    </div>
                  ))}
                  {insights?.topStrongChapters.length === 0 && (
                    <p className="text-center text-muted-foreground py-4">
                      Nu există capitole cu scor peste 80%
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Distribution Tab */}
        <TabsContent value="distribution">
          <Card>
            <CardHeader>
              <CardTitle>Distribuție Niveluri de Competență</CardTitle>
              <CardDescription>Clasificarea utilizatorilor pe niveluri</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {insights?.competencyDistribution.map((level) => (
                  <div key={level.level} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{level.level}</span>
                      <span>{level.count} utilizatori ({level.percentage}%)</span>
                    </div>
                    <Progress 
                      value={level.percentage} 
                      className={`h-3 ${
                        level.level.includes('Mastered') ? '[&>div]:bg-green-500' :
                        level.level.includes('Proficient') ? '[&>div]:bg-blue-500' :
                        level.level.includes('Developing') ? '[&>div]:bg-amber-500' :
                        '[&>div]:bg-red-500'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* User Detail Modal */}
      <UserDetailModal 
        userId={selectedUser} 
        onClose={() => setSelectedUser(null)} 
        getStatusColor={getStatusColor}
        getStatusLabel={getStatusLabel}
        getTrendIcon={getTrendIcon}
        getScoreColor={getScoreColor}
      />
    </div>
  );
}

function UserDetailModal({ 
  userId, 
  onClose,
  getStatusColor,
  getStatusLabel,
  getTrendIcon,
  getScoreColor
}: { 
  userId: string | null; 
  onClose: () => void;
  getStatusColor: (status: ChapterCompetency['status']) => string;
  getStatusLabel: (status: ChapterCompetency['status']) => string;
  getTrendIcon: (trend: ChapterCompetency['trend']) => React.ReactNode;
  getScoreColor: (score: number) => string;
}) {
  const { loading, userProfile } = useCompetencyAnalysis(userId || undefined);

  if (!userId) return null;

  return (
    <Dialog open={!!userId} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Profil Competențe: {userProfile?.firstName} {userProfile?.lastName}
          </DialogTitle>
        </DialogHeader>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : userProfile ? (
          <ScrollArea className="h-[70vh] pr-4">
            <div className="space-y-6">
              {/* Summary */}
              <div className="grid grid-cols-4 gap-4">
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                  <CardContent className="pt-4 text-center">
                    <p className="text-3xl font-bold text-blue-600">{userProfile.overallScore}%</p>
                    <p className="text-sm text-blue-600">Scor General</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-50 to-green-100">
                  <CardContent className="pt-4 text-center">
                    <p className="text-3xl font-bold text-green-600">{userProfile.strongAreas.length}</p>
                    <p className="text-sm text-green-600">Puncte Forte</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-red-50 to-red-100">
                  <CardContent className="pt-4 text-center">
                    <p className="text-3xl font-bold text-red-600">{userProfile.weakAreas.length}</p>
                    <p className="text-sm text-red-600">De Îmbunătățit</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                  <CardContent className="pt-4 text-center">
                    <p className="text-3xl font-bold text-purple-600">
                      {userProfile.completedChapters}/{userProfile.totalChapters}
                    </p>
                    <p className="text-sm text-purple-600">Capitole Complete</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recommendations */}
              {userProfile.recommendations.length > 0 && (
                <Card className="border-amber-200 bg-amber-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-amber-700">
                      <Lightbulb className="h-5 w-5" />
                      Recomandări Personalizate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {userProfile.recommendations.map((rec, idx) => (
                        <div 
                          key={idx} 
                          className={`flex items-center justify-between p-3 rounded-lg ${
                            rec.priority === 'high' ? 'bg-red-100 border border-red-200' :
                            rec.priority === 'medium' ? 'bg-amber-100 border border-amber-200' :
                            'bg-green-100 border border-green-200'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {rec.priority === 'high' ? (
                              <AlertCircle className="h-5 w-5 text-red-500" />
                            ) : rec.priority === 'medium' ? (
                              <AlertTriangle className="h-5 w-5 text-amber-500" />
                            ) : (
                              <Lightbulb className="h-5 w-5 text-green-500" />
                            )}
                            <div>
                              <p className="font-medium">{rec.chapterName}</p>
                              <p className="text-sm text-muted-foreground">{rec.reason}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="gap-1">
                            {rec.actionText}
                            <ArrowRight className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Chapter by Chapter */}
              <Card>
                <CardHeader>
                  <CardTitle>Analiză Detaliată per Capitol</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {userProfile.competencies.map((comp) => (
                      <div 
                        key={comp.chapterId}
                        className="flex items-center gap-3 p-2 border rounded-lg"
                      >
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(comp.status)}`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">
                            {comp.chapterSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getTrendIcon(comp.trend)}
                          <span className={`px-2 py-0.5 rounded text-sm font-medium ${getScoreColor(comp.score)}`}>
                            {comp.score}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        ) : (
          <p className="text-center py-8 text-muted-foreground">Nu s-au găsit date</p>
        )}
      </DialogContent>
    </Dialog>
  );
}