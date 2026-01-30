import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { 
  Shield, 
  BookOpen, 
  AlertTriangle, 
  Lock, 
  Unlock, 
  History,
  CheckCircle2,
  XCircle,
  RotateCcw,
  FileText,
  Settings,
  Eye
} from 'lucide-react';
import { ContentLevelBadge, ContentLevel } from '@/components/manual/ContentLevelBadge';
import { useLanguage } from '@/contexts/LanguageContext';

interface Chapter {
  id: string;
  slug: string;
  order_index: number;
  content_level: ContentLevel;
  auto_update_blocked: boolean;
  auto_update_blocked_at: string | null;
}

interface PendingUpdate {
  id: string;
  chapter_id: string;
  title: string;
  description: string;
  severity: string;
  content_level: ContentLevel | null;
  status: string;
  created_at: string;
  requires_approval: boolean;
}

interface ChapterVersion {
  id: string;
  chapter_id: string;
  version_number: number;
  change_summary: string | null;
  update_source: string | null;
  content_snapshot: Record<string, unknown> | null;
  created_at: string;
  is_approved: boolean;
  approved_by: string | null;
}

interface AuditEntry {
  id: string;
  action: string;
  entity_type: string;
  chapter_id: string | null;
  details: Record<string, unknown>;
  performed_by: string | null;
  severity: string | null;
  content_level: ContentLevel | null;
  created_at: string;
}

interface GovernanceSetting {
  id: string;
  setting_key: string;
  setting_value: { enabled?: boolean; days?: number };
  description: string | null;
}

export function GovernanceDashboard() {
  const { t } = useLanguage();
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [pendingUpdates, setPendingUpdates] = useState<PendingUpdate[]>([]);
  const [auditLog, setAuditLog] = useState<AuditEntry[]>([]);
  const [settings, setSettings] = useState<GovernanceSetting[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVersion, setSelectedVersion] = useState<ChapterVersion | null>(null);
  const [versionHistory, setVersionHistory] = useState<ChapterVersion[]>([]);
  const [historyDialogOpen, setHistoryDialogOpen] = useState(false);
  const [approvalDialogOpen, setApprovalDialogOpen] = useState(false);
  const [selectedUpdate, setSelectedUpdate] = useState<PendingUpdate | null>(null);
  const [approvalReason, setApprovalReason] = useState('');

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    await Promise.all([
      fetchChapters(),
      fetchPendingUpdates(),
      fetchAuditLog(),
      fetchSettings(),
    ]);
    setLoading(false);
  };

  const fetchChapters = async () => {
    const { data, error } = await supabase
      .from('chapters')
      .select('id, slug, order_index, content_level, auto_update_blocked, auto_update_blocked_at')
      .order('order_index');
    
    if (!error && data) {
      setChapters(data as Chapter[]);
    }
  };

  const fetchPendingUpdates = async () => {
    const { data, error } = await supabase
      .from('auto_updates')
      .select('*')
      .in('status', ['pending'])
      .order('created_at', { ascending: false });
    
    if (!error && data) {
      setPendingUpdates(data as PendingUpdate[]);
    }
  };

  const fetchAuditLog = async () => {
    const { data, error } = await supabase
      .from('update_audit_log')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);
    
    if (!error && data) {
      setAuditLog(data as AuditEntry[]);
    }
  };

  const fetchSettings = async () => {
    const { data, error } = await supabase
      .from('governance_settings')
      .select('*');
    
    if (!error && data) {
      setSettings(data as GovernanceSetting[]);
    }
  };

  const toggleAutoUpdateBlock = async (chapterId: string, currentBlocked: boolean) => {
    const { error } = await supabase
      .from('chapters')
      .update({ 
        auto_update_blocked: !currentBlocked,
        auto_update_blocked_at: !currentBlocked ? new Date().toISOString() : null
      })
      .eq('id', chapterId);

    if (error) {
      toast.error(t('admin.governance.errorUpdate'));
      return;
    }

    const message = !currentBlocked 
      ? `${t('admin.governance.updateBlocked')} ${chapterId}`
      : `${t('admin.governance.updateUnblocked')} ${chapterId}`;
    toast.success(message);
    fetchChapters();

    // Log the action
    await supabase.from('update_audit_log').insert({
      action: !currentBlocked ? 'auto_update_blocked' : 'auto_update_unblocked',
      entity_type: 'chapter',
      chapter_id: chapterId,
      details: { blocked: !currentBlocked },
      performed_by: 'admin'
    });
  };

  const openVersionHistory = async (chapterId: string) => {
    const { data, error } = await supabase
      .from('chapter_versions')
      .select('*')
      .eq('chapter_id', chapterId)
      .order('version_number', { ascending: false });

    if (!error && data) {
      setVersionHistory(data as ChapterVersion[]);
      setHistoryDialogOpen(true);
    }
  };

  const rollbackToVersion = async (version: ChapterVersion) => {
    // Create a new version based on the old one
    const newVersionNumber = versionHistory[0].version_number + 1;
    
    const { error } = await supabase
      .from('chapter_versions')
      .insert({
        chapter_id: version.chapter_id,
        version_number: newVersionNumber,
        content_snapshot: version.content_snapshot || {},
        change_summary: `Rollback to version ${version.version_number}`,
        update_source: 'manual_rollback',
        is_approved: true,
        approved_at: new Date().toISOString()
      } as never);

    if (error) {
      toast.error(t('admin.governance.errorRollback'));
      return;
    }

    toast.success(t('admin.governance.rollbackSuccess').replace('{version}', String(version.version_number)));
    setHistoryDialogOpen(false);

    // Log the action
    await supabase.from('update_audit_log').insert({
      action: 'version_rollback',
      entity_type: 'chapter',
      chapter_id: version.chapter_id,
      details: { 
        from_version: versionHistory[0].version_number,
        to_version: version.version_number 
      },
      performed_by: 'admin',
      previous_version: versionHistory[0].version_number,
      new_version: newVersionNumber
    });
  };

  const openApprovalDialog = (update: PendingUpdate) => {
    setSelectedUpdate(update);
    setApprovalReason('');
    setApprovalDialogOpen(true);
  };

  const handleApproval = async (approved: boolean) => {
    if (!selectedUpdate) return;

    const { error } = await supabase
      .from('auto_updates')
      .update({ 
        status: approved ? 'applied' : 'rejected',
        approved_at: approved ? new Date().toISOString() : null,
        applied_at: approved ? new Date().toISOString() : null,
        rollback_reason: !approved ? approvalReason : null
      })
      .eq('id', selectedUpdate.id);

    if (error) {
      toast.error(t('admin.governance.errorProcess'));
      return;
    }

    toast.success(approved ? t('admin.governance.updateApproved') : t('admin.governance.updateRejected'));
    setApprovalDialogOpen(false);
    fetchPendingUpdates();

    // Log the action
    await supabase.from('update_audit_log').insert({
      action: approved ? 'update_approved' : 'update_rejected',
      entity_type: 'auto_update',
      entity_id: selectedUpdate.id,
      chapter_id: selectedUpdate.chapter_id,
      details: { 
        title: selectedUpdate.title,
        severity: selectedUpdate.severity,
        reason: approvalReason || null
      },
      performed_by: 'admin',
      severity: selectedUpdate.severity,
      content_level: selectedUpdate.content_level
    });
  };

  const updateSetting = async (settingKey: string, enabled: boolean) => {
    const { error } = await supabase
      .from('governance_settings')
      .update({ setting_value: { enabled } })
      .eq('setting_key', settingKey);

    if (error) {
      toast.error(t('admin.governance.errorUpdate'));
      return;
    }

    toast.success(t('admin.governance.settingEnabled'));
    fetchSettings();
  };

  const getLevelBadge = (level: ContentLevel | null) => {
    if (!level) return null;
    return <ContentLevelBadge level={level} size="sm" showLabel={false} />;
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <Badge variant="destructive">CRITICAL</Badge>;
      case 'major':
        return <Badge className="bg-orange-500">MAJOR</Badge>;
      case 'minor':
        return <Badge variant="secondary">MINOR</Badge>;
      default:
        return <Badge variant="outline">{severity}</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const criticalChapters = chapters.filter(c => c.content_level === 'critical');
  const operationalChapters = chapters.filter(c => c.content_level === 'operational');
  const blockedChapters = chapters.filter(c => c.auto_update_blocked);

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              {t('admin.governance.critical')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{criticalChapters.length}</div>
            <p className="text-xs text-muted-foreground">{t('admin.governance.level3Chapters')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Shield className="h-4 w-4 text-warning" />
              {t('admin.governance.operational')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{operationalChapters.length}</div>
            <p className="text-xs text-muted-foreground">{t('admin.governance.level2Chapters')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Lock className="h-4 w-4 text-info" />
              {t('admin.governance.blocked')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{blockedChapters.length}</div>
            <p className="text-xs text-muted-foreground">{t('admin.governance.autoUpdateStopped')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <FileText className="h-4 w-4 text-warning" />
              {t('admin.governance.pending')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingUpdates.length}</div>
            <p className="text-xs text-muted-foreground">{t('admin.governance.approvalsNeeded')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <History className="h-4 w-4 text-muted-foreground" />
              {t('admin.governance.auditLog')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{auditLog.length}</div>
            <p className="text-xs text-muted-foreground">{t('admin.governance.recentEntries')}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList>
          <TabsTrigger value="pending" className="gap-2">
            <FileText className="h-4 w-4" />
            {t('admin.governance.tabApprovals')} ({pendingUpdates.length})
          </TabsTrigger>
          <TabsTrigger value="chapters" className="gap-2">
            <BookOpen className="h-4 w-4" />
            {t('admin.governance.tabChapters')}
          </TabsTrigger>
          <TabsTrigger value="audit" className="gap-2">
            <History className="h-4 w-4" />
            {t('admin.governance.tabAudit')}
          </TabsTrigger>
          <TabsTrigger value="settings" className="gap-2">
            <Settings className="h-4 w-4" />
            {t('admin.governance.tabSettings')}
          </TabsTrigger>
        </TabsList>

        {/* Pending Approvals Tab */}
        <TabsContent value="pending" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('admin.governance.pendingTitle')}</CardTitle>
              <CardDescription>
                {t('admin.governance.pendingDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {pendingUpdates.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <CheckCircle2 className="h-12 w-12 mx-auto mb-4 text-green-500" />
                  <p>{t('admin.governance.noPending')}</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t('admin.governance.chapter')}</TableHead>
                      <TableHead>{t('admin.governance.updateTitle')}</TableHead>
                      <TableHead>{t('admin.governance.severity')}</TableHead>
                      <TableHead>{t('admin.governance.level')}</TableHead>
                      <TableHead>{t('admin.governance.date')}</TableHead>
                      <TableHead>{t('admin.governance.actions')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingUpdates.map((update) => (
                      <TableRow key={update.id}>
                        <TableCell className="font-medium">{update.chapter_id}</TableCell>
                        <TableCell>{update.title}</TableCell>
                        <TableCell>{getSeverityBadge(update.severity)}</TableCell>
                        <TableCell>{getLevelBadge(update.content_level)}</TableCell>
                        <TableCell>{format(new Date(update.created_at), 'dd.MM.yyyy HH:mm')}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => openApprovalDialog(update)}>
                              <Eye className="h-4 w-4 mr-1" />
                              {t('admin.governance.review')}
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Chapters Tab */}
        <TabsContent value="chapters" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('admin.governance.chapterControl')}</CardTitle>
              <CardDescription>
                {t('admin.governance.chapterControlDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>#</TableHead>
                      <TableHead>{t('admin.governance.chapter')}</TableHead>
                      <TableHead>{t('admin.governance.level')}</TableHead>
                      <TableHead>{t('admin.governance.autoUpdate')}</TableHead>
                      <TableHead>{t('admin.governance.actions')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {chapters.map((chapter) => (
                      <TableRow key={chapter.id}>
                        <TableCell>{chapter.order_index}</TableCell>
                        <TableCell className="font-medium">{chapter.slug}</TableCell>
                        <TableCell>
                          <ContentLevelBadge level={chapter.content_level} size="sm" />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Switch
                              checked={!chapter.auto_update_blocked}
                              onCheckedChange={() => toggleAutoUpdateBlock(chapter.id, chapter.auto_update_blocked)}
                            />
                            <span className={chapter.auto_update_blocked ? 'text-red-600' : 'text-green-600'}>
                              {chapter.auto_update_blocked ? (
                                <><Lock className="h-4 w-4 inline mr-1" />{t('admin.governance.disabled')}</>
                              ) : (
                                <><Unlock className="h-4 w-4 inline mr-1" />{t('admin.governance.enabled')}</>
                              )}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => openVersionHistory(chapter.id)}
                          >
                            <History className="h-4 w-4 mr-1" />
                            {t('admin.governance.history')}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Audit Log Tab */}
        <TabsContent value="audit" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('admin.governance.tabAudit')}</CardTitle>
              <CardDescription>
                {t('admin.governance.pendingDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t('admin.governance.date')}</TableHead>
                      <TableHead>{t('admin.governance.actions')}</TableHead>
                      <TableHead>{t('admin.table.status')}</TableHead>
                      <TableHead>{t('admin.governance.chapter')}</TableHead>
                      <TableHead>{t('admin.governance.severity')}</TableHead>
                      <TableHead>{t('admin.table.details')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {auditLog.map((entry) => (
                      <TableRow key={entry.id}>
                        <TableCell className="whitespace-nowrap">
                          {format(new Date(entry.created_at), 'dd.MM.yyyy HH:mm:ss')}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{entry.action}</Badge>
                        </TableCell>
                        <TableCell>{entry.entity_type}</TableCell>
                        <TableCell>{entry.chapter_id || '-'}</TableCell>
                        <TableCell>
                          {entry.severity ? getSeverityBadge(entry.severity) : '-'}
                        </TableCell>
                        <TableCell className="max-w-[200px] truncate">
                          {JSON.stringify(entry.details)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('admin.governance.tabSettings')}</CardTitle>
              <CardDescription>
                {t('admin.governance.chapterControlDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {settings.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{setting.setting_key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
                      <p className="text-sm text-muted-foreground">{setting.description}</p>
                    </div>
                    {setting.setting_value.enabled !== undefined && (
                      <Switch
                        checked={setting.setting_value.enabled}
                        onCheckedChange={(checked) => updateSetting(setting.setting_key, checked)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Version History Dialog */}
      <Dialog open={historyDialogOpen} onOpenChange={setHistoryDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{t('admin.governance.versionHistory')}</DialogTitle>
            <DialogDescription>
              {t('admin.governance.selectConceptForImpact') || 'Select a previous version for rollback'}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[400px]">
            <div className="space-y-2">
              {versionHistory.map((version, index) => (
                <div 
                  key={version.id}
                  className={`p-4 border rounded-lg ${index === 0 ? 'bg-primary/5 border-primary' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant={index === 0 ? 'default' : 'outline'}>
                          v{version.version_number}
                        </Badge>
                        {index === 0 && <span className="text-xs text-primary">({t('admin.governance.status')})</span>}
                        <Badge variant={version.is_approved ? 'outline' : 'secondary'} className={version.is_approved ? 'bg-green-100' : ''}>
                          {version.is_approved ? t('admin.governance.approved') : t('admin.governance.pending')}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{version.change_summary || t('admin.governance.noVersions')}</p>
                      <p className="text-xs text-muted-foreground">{format(new Date(version.created_at), 'dd.MM.yyyy HH:mm')}</p>
                    </div>
                    {index > 0 && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => rollbackToVersion(version)}
                      >
                        <RotateCcw className="h-4 w-4 mr-1" />
                        {t('admin.governance.rollback')}
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Approval Dialog */}
      <Dialog open={approvalDialogOpen} onOpenChange={setApprovalDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('admin.governance.approveUpdate')}</DialogTitle>
            <DialogDescription>
              {selectedUpdate?.title}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm">{selectedUpdate?.description}</p>
              <div className="flex gap-2 mt-2">
                {selectedUpdate && getSeverityBadge(selectedUpdate.severity)}
                {selectedUpdate && getLevelBadge(selectedUpdate.content_level)}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">{t('admin.governance.reason')}</label>
              <Textarea
                value={approvalReason}
                onChange={(e) => setApprovalReason(e.target.value)}
                placeholder={t('admin.governance.reason')}
                className="mt-1"
              />
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button variant="destructive" onClick={() => handleApproval(false)}>
              <XCircle className="h-4 w-4 mr-1" />
              {t('admin.governance.reject')}
            </Button>
            <Button onClick={() => handleApproval(true)}>
              <CheckCircle2 className="h-4 w-4 mr-1" />
              {t('admin.governance.approve')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
