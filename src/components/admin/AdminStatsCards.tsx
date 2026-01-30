import { memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, Trophy, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface UserWithProgress {
  id: string;
  chaptersCompleted: number;
  totalChapters: number;
  averageScore: number;
  lastActivity: string | null;
}

interface AdminStatsCardsProps {
  users: UserWithProgress[];
}

export const AdminStatsCards = memo(function AdminStatsCards({ users }: AdminStatsCardsProps) {
  const { t } = useLanguage();

  const activeUsers7d = users.filter(u => {
    if (!u.lastActivity) return false;
    const lastActive = new Date(u.lastActivity);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return lastActive > weekAgo;
  }).length;

  const globalAvgScore = users.length > 0 
    ? Math.round(users.reduce((a, b) => a + b.averageScore, 0) / users.length)
    : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="admin-stat-card-blue">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-bold text-blue-800">{t('admin.totalUsers')}</CardTitle>
          <div className="p-2 bg-blue-500 rounded-lg shadow-md">
            <Users className="h-5 w-5 text-white" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="admin-stat-value text-blue-700">{users.length}</div>
          <p className="text-xs text-blue-600 font-medium mt-1">{t('admin.registeredUsers')}</p>
        </CardContent>
      </Card>
      
      <Card className="admin-stat-card-purple">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-bold text-purple-800">{t('admin.totalChapters')}</CardTitle>
          <div className="p-2 bg-purple-500 rounded-lg shadow-md">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="admin-stat-value text-purple-700">{users[0]?.totalChapters || 50}</div>
          <p className="text-xs text-purple-600 font-medium mt-1">{t('admin.availableChapters')}</p>
        </CardContent>
      </Card>
      
      <Card className="admin-stat-card-amber">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-bold text-amber-800">{t('admin.globalAvgScore')}</CardTitle>
          <div className="p-2 bg-amber-500 rounded-lg shadow-md">
            <Trophy className="h-5 w-5 text-white" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="admin-stat-value text-amber-700">{globalAvgScore}%</div>
          <p className="text-xs text-amber-600 font-medium mt-1">{t('admin.allScoresAvg')}</p>
        </CardContent>
      </Card>
      
      <Card className="admin-stat-card-green">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-bold text-emerald-800">{t('admin.activeUsers7d')}</CardTitle>
          <div className="p-2 bg-emerald-500 rounded-lg shadow-md">
            <Clock className="h-5 w-5 text-white" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="admin-stat-value text-emerald-700">{activeUsers7d}</div>
          <p className="text-xs text-emerald-600 font-medium mt-1">{t('admin.recentlyActive')}</p>
        </CardContent>
      </Card>
    </div>
  );
});
