import { memo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Users, Eye } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '@/contexts/LanguageContext';

interface UserWithProgress {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  role: string;
  created_at: string;
  chaptersCompleted: number;
  totalChapters: number;
  averageScore: number;
  lastActivity: string | null;
}

interface AdminUsersTableProps {
  users: UserWithProgress[];
  onViewDetails: (user: UserWithProgress) => void;
}

export const AdminUsersTable = memo(function AdminUsersTable({ 
  users, 
  onViewDetails 
}: AdminUsersTableProps) {
  const { t } = useLanguage();

  return (
    <Card className="border-2 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Users className="h-6 w-6 text-blue-600" />
          {t('admin.profiles.title')}
        </CardTitle>
        <CardDescription className="text-base">{t('admin.profiles.subtitle')}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-100 hover:bg-slate-100">
              <TableHead className="font-bold text-slate-800 text-base py-4">{t('admin.table.name')}</TableHead>
              <TableHead className="font-bold text-slate-800 text-base">{t('admin.table.email')}</TableHead>
              <TableHead className="font-bold text-slate-800 text-base">{t('admin.table.role')}</TableHead>
              <TableHead className="font-bold text-slate-800 text-base">{t('admin.table.chapterProgress')}</TableHead>
              <TableHead className="font-bold text-slate-800 text-base">{t('admin.table.avgScore')}</TableHead>
              <TableHead className="font-bold text-slate-800 text-base">{t('admin.table.lastActivity')}</TableHead>
              <TableHead className="font-bold text-slate-800 text-base">{t('admin.table.actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((userItem) => {
              const progressPercent = (userItem.chaptersCompleted / userItem.totalChapters) * 100;
              const scoreColor = userItem.averageScore >= 9 
                ? 'text-green-700 bg-green-100 border-green-300' 
                : userItem.averageScore >= 7 
                  ? 'text-amber-700 bg-amber-100 border-amber-300' 
                  : 'text-red-700 bg-red-100 border-red-300';
              const progressBarColor = progressPercent >= 80 
                ? '[&>div]:bg-green-500' 
                : progressPercent >= 40 
                  ? '[&>div]:bg-amber-500' 
                  : '[&>div]:bg-red-500';
              
              return (
                <TableRow key={userItem.id} className="hover:bg-blue-50/50 border-b-2">
                  <TableCell className="font-semibold text-base py-4">
                    {userItem.first_name || userItem.last_name 
                      ? `${userItem.first_name || ''} ${userItem.last_name || ''}`.trim()
                      : 'N/A'}
                  </TableCell>
                  <TableCell className="text-slate-600">{userItem.email}</TableCell>
                  <TableCell>
                    <Badge 
                      className={userItem.role === 'admin' 
                        ? 'bg-red-600 text-white font-bold px-3 py-1 text-sm shadow-md' 
                        : 'bg-blue-600 text-white font-bold px-3 py-1 text-sm shadow-md'}
                    >
                      {userItem.role === 'admin' ? t('admin.profiles.roleAdmin') : t('admin.profiles.roleUser')}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Progress 
                        value={progressPercent} 
                        className={`w-28 h-3 bg-slate-200 ${progressBarColor}`}
                      />
                      <span className={`font-bold text-sm px-2 py-1 rounded border ${
                        progressPercent >= 80 
                          ? 'text-green-700 bg-green-100 border-green-300' 
                          : progressPercent >= 40 
                            ? 'text-amber-700 bg-amber-100 border-amber-300' 
                            : 'text-red-700 bg-red-100 border-red-300'
                      }`}>
                        {userItem.chaptersCompleted}/{userItem.totalChapters}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`font-bold text-base px-3 py-1 rounded-lg border-2 ${scoreColor}`}>
                      {userItem.averageScore}/10
                    </span>
                  </TableCell>
                  <TableCell className="text-slate-600 font-medium">
                    {userItem.lastActivity 
                      ? format(new Date(userItem.lastActivity), 'dd.MM.yyyy HH:mm')
                      : 'N/A'}
                  </TableCell>
                  <TableCell>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => onViewDetails(userItem)}
                      className="bg-blue-600 text-white hover:bg-blue-700 border-blue-600 font-semibold shadow-md"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      {t('admin.table.details')}
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
});
