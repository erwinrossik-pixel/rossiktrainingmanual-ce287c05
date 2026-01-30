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
      <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Users className="h-6 w-6 text-primary" />
          {t('admin.profiles.title')}
        </CardTitle>
        <CardDescription className="text-base">{t('admin.profiles.subtitle')}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted hover:bg-muted">
              <TableHead className="font-bold text-foreground text-base py-4">{t('admin.table.name')}</TableHead>
              <TableHead className="font-bold text-foreground text-base">{t('admin.table.email')}</TableHead>
              <TableHead className="font-bold text-foreground text-base">{t('admin.table.role')}</TableHead>
              <TableHead className="font-bold text-foreground text-base">{t('admin.table.chapterProgress')}</TableHead>
              <TableHead className="font-bold text-foreground text-base">{t('admin.table.avgScore')}</TableHead>
              <TableHead className="font-bold text-foreground text-base">{t('admin.table.lastActivity')}</TableHead>
              <TableHead className="font-bold text-foreground text-base">{t('admin.table.actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((userItem) => {
              const progressPercent = (userItem.chaptersCompleted / userItem.totalChapters) * 100;
              const scoreColor = userItem.averageScore >= 9 
                ? 'text-success bg-success/10 border-success/30' 
                : userItem.averageScore >= 7 
                  ? 'text-warning bg-warning/10 border-warning/30' 
                  : 'text-destructive bg-destructive/10 border-destructive/30';
              const progressBarColor = progressPercent >= 80 
                ? '[&>div]:bg-success' 
                : progressPercent >= 40 
                  ? '[&>div]:bg-warning' 
                  : '[&>div]:bg-destructive';
              
              return (
                <TableRow key={userItem.id} className="hover:bg-primary/5 border-b-2">
                  <TableCell className="font-semibold text-base py-4">
                    {userItem.first_name || userItem.last_name 
                      ? `${userItem.first_name || ''} ${userItem.last_name || ''}`.trim()
                      : 'N/A'}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{userItem.email}</TableCell>
                  <TableCell>
                    <Badge 
                      className={userItem.role === 'admin' 
                        ? 'bg-destructive text-destructive-foreground font-bold px-3 py-1 text-sm shadow-md' 
                        : 'bg-primary text-primary-foreground font-bold px-3 py-1 text-sm shadow-md'}
                    >
                      {userItem.role === 'admin' ? t('admin.profiles.roleAdmin') : t('admin.profiles.roleUser')}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Progress 
                        value={progressPercent} 
                        className={`w-28 h-3 bg-muted ${progressBarColor}`}
                      />
                      <span className={`font-bold text-sm px-2 py-1 rounded border ${
                        progressPercent >= 80 
                          ? 'text-success bg-success/10 border-success/30' 
                          : progressPercent >= 40 
                            ? 'text-warning bg-warning/10 border-warning/30' 
                            : 'text-destructive bg-destructive/10 border-destructive/30'
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
                  <TableCell className="text-muted-foreground font-medium">
                    {userItem.lastActivity 
                      ? format(new Date(userItem.lastActivity), 'dd.MM.yyyy HH:mm')
                      : 'N/A'}
                  </TableCell>
                  <TableCell>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => onViewDetails(userItem)}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 border-primary font-semibold shadow-md"
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
