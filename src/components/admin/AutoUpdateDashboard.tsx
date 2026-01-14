import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { 
  RefreshCw, 
  Globe, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw,
  Clock,
  Activity,
  FileText,
  Zap,
  Settings,
  History,
  Eye
} from 'lucide-react';

interface ContentSource {
  id: string;
  name: string;
  url: string;
  source_type: string;
  category: string;
  is_active: boolean;
  check_frequency_hours: number;
  last_checked_at: string | null;
  reliability_score: number | null;
}

interface DetectedChange {
  id: string;
  source_id: string;
  title: string;
  description: string | null;
  change_type: string;
  severity: string;
  detected_at: string;
  is_processed: boolean;
  source_name?: string;
}

interface AutoUpdate {
  id: string;
  chapter_id: string;
  title: string;
  description: string | null;
  status: string;
  severity: string;
  requires_approval: boolean;
  created_at: string;
  applied_at: string | null;
  approved_by: string | null;
  sections_affected: string[] | null;
  languages_updated: string[] | null;
}

interface AuditLogEntry {
  id: string;
  action: string;
  entity_type: string;
  entity_id: string | null;
  chapter_id: string | null;
  details: unknown;
  performed_by: string | null;
  created_at: string;
}

export function AutoUpdateDashboard() {
  const [sources, setSources] = useState<ContentSource[]>([]);
  const [changes, setChanges] = useState<DetectedChange[]>([]);
  const [updates, setUpdates] = useState<AutoUpdate[]>([]);
  const [auditLog, setAuditLog] = useState<AuditLogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [selectedUpdate, setSelectedUpdate] = useState<AutoUpdate | null>(null);
  const [rejectReason, setRejectReason] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogAction, setDialogAction] = useState<'reject' | 'rollback' | null>(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    await Promise.all([
      fetchSources(),
      fetchChanges(),
      fetchUpdates(),
      fetchAuditLog()
    ]);
    setLoading(false);
  };

  const fetchSources = async () => {
    const { data, error } = await supabase
      .from('content_sources')
      .select('*')
      .order('name');
    
    if (error) {
      console.error('Error fetching sources:', error);
    } else {
      setSources(data || []);
    }
  };

  const fetchChanges = async () => {
    const { data, error } = await supabase
      .from('detected_changes')
      .select('*, content_sources(name)')
      .order('detected_at', { ascending: false })
      .limit(50);
    
    if (error) {
      console.error('Error fetching changes:', error);
    } else {
      const changesWithSource = data?.map(change => ({
        ...change,
        source_name: change.content_sources?.name
      })) || [];
      setChanges(changesWithSource);
    }
  };

  const fetchUpdates = async () => {
    const { data, error } = await supabase
      .from('auto_updates')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);
    
    if (error) {
      console.error('Error fetching updates:', error);
    } else {
      setUpdates(data || []);
    }
  };

  const fetchAuditLog = async () => {
    const { data, error } = await supabase
      .from('update_audit_log')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);
    
    if (error) {
      console.error('Error fetching audit log:', error);
    } else {
      setAuditLog(data || []);
    }
  };

  const toggleSource = async (sourceId: string, isActive: boolean) => {
    const { error } = await supabase
      .from('content_sources')
      .update({ is_active: isActive })
      .eq('id', sourceId);
    
    if (error) {
      toast.error('Eroare la actualizarea sursei');
    } else {
      toast.success(isActive ? 'Sursa activată' : 'Sursa dezactivată');
      fetchSources();
    }
  };

  const handleForceRecheck = async () => {
    setActionLoading('recheck');
    try {
      const { data, error } = await supabase.functions.invoke('auto-update-check', {
        body: { force: true }
      });
      
      if (error) throw error;
      
      toast.success(`Verificare forțată lansată pentru ${data?.sources_checked || 0} surse`);
      fetchAllData();
    } catch (error) {
      console.error('Error forcing recheck:', error);
      toast.error('Eroare la lansarea verificării');
    } finally {
      setActionLoading(null);
    }
  };

  const handleUpdateAction = async (action: 'approve' | 'reject' | 'rollback', updateId: string, reason?: string) => {
    setActionLoading(updateId);
    try {
      const { data, error } = await supabase.functions.invoke('admin-update-actions', {
        body: { 
          action, 
          update_id: updateId,
          reason 
        }
      });
      
      if (error) throw error;
      
      toast.success(data?.message || 'Acțiune completată');
      setDialogOpen(false);
      setSelectedUpdate(null);
      setRejectReason('');
      fetchUpdates();
      fetchAuditLog();
    } catch (error) {
      console.error('Error performing action:', error);
      toast.error('Eroare la efectuarea acțiunii');
    } finally {
      setActionLoading(null);
    }
  };

  const openActionDialog = (update: AutoUpdate, action: 'reject' | 'rollback') => {
    setSelectedUpdate(update);
    setDialogAction(action);
    setDialogOpen(true);
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <Badge variant="destructive">CRITIC</Badge>;
      case 'major':
        return <Badge className="bg-orange-500 hover:bg-orange-600">MAJOR</Badge>;
      case 'minor':
        return <Badge variant="secondary">MINOR</Badge>;
      default:
        return <Badge variant="outline">{severity}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">În așteptare</Badge>;
      case 'approved':
        return <Badge className="bg-blue-500 hover:bg-blue-600">Aprobat</Badge>;
      case 'applied':
        return <Badge className="bg-green-500 hover:bg-green-600">Aplicat</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Respins</Badge>;
      case 'rolled_back':
        return <Badge className="bg-purple-500 hover:bg-purple-600">Rollback</Badge>;
      case 'failed':
        return <Badge variant="destructive">Eșuat</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const pendingUpdates = updates.filter(u => u.status === 'pending' && u.requires_approval);
  const todayUpdates = updates.filter(u => {
    const today = new Date().toDateString();
    return new Date(u.created_at).toDateString() === today;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <RefreshCw className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Surse Active</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sources.filter(s => s.is_active).length}</div>
            <p className="text-xs text-muted-foreground">din {sources.length} total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Schimbări Detectate</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{changes.filter(c => !c.is_processed).length}</div>
            <p className="text-xs text-muted-foreground">neprocesate</p>
          </CardContent>
        </Card>

        <Card className={pendingUpdates.length > 0 ? 'border-yellow-500' : ''}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Necesită Aprobare</CardTitle>
            <AlertTriangle className={`h-4 w-4 ${pendingUpdates.length > 0 ? 'text-yellow-500' : 'text-muted-foreground'}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingUpdates.length}</div>
            <p className="text-xs text-muted-foreground">actualizări în așteptare</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Actualizări Azi</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayUpdates.length}</div>
            <p className="text-xs text-muted-foreground">capitole actualizate</p>
          </CardContent>
        </Card>
      </div>

      {/* Force Recheck Button */}
      <div className="flex justify-end">
        <Button 
          onClick={handleForceRecheck} 
          disabled={actionLoading === 'recheck'}
          variant="outline"
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${actionLoading === 'recheck' ? 'animate-spin' : ''}`} />
          Verificare Forțată Acum
        </Button>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="updates" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="updates" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Actualizări
          </TabsTrigger>
          <TabsTrigger value="sources" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Surse
          </TabsTrigger>
          <TabsTrigger value="changes" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Schimbări
          </TabsTrigger>
          <TabsTrigger value="audit" className="flex items-center gap-2">
            <History className="h-4 w-4" />
            Audit Log
          </TabsTrigger>
        </TabsList>

        {/* Updates Tab */}
        <TabsContent value="updates" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Actualizări Conținut</CardTitle>
              <CardDescription>Gestionare actualizări automate ale capitolelor</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Capitol</TableHead>
                      <TableHead>Titlu</TableHead>
                      <TableHead>Severitate</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Acțiuni</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {updates.map((update) => (
                      <TableRow key={update.id}>
                        <TableCell className="font-medium">{update.chapter_id}</TableCell>
                        <TableCell className="max-w-xs truncate">{update.title}</TableCell>
                        <TableCell>{getSeverityBadge(update.severity)}</TableCell>
                        <TableCell>{getStatusBadge(update.status)}</TableCell>
                        <TableCell>
                          {format(new Date(update.created_at), 'dd.MM.yyyy HH:mm')}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {update.status === 'pending' && (
                              <>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-8"
                                  onClick={() => handleUpdateAction('approve', update.id)}
                                  disabled={actionLoading === update.id}
                                >
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-8"
                                  onClick={() => openActionDialog(update, 'reject')}
                                  disabled={actionLoading === update.id}
                                >
                                  <XCircle className="h-4 w-4 text-red-500" />
                                </Button>
                              </>
                            )}
                            {update.status === 'applied' && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-8"
                                onClick={() => openActionDialog(update, 'rollback')}
                                disabled={actionLoading === update.id}
                              >
                                <RotateCcw className="h-4 w-4 text-orange-500" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    {updates.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                          Nu există actualizări înregistrate
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Surse de Date</CardTitle>
              <CardDescription>Surse oficiale monitorizate pentru actualizări</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nume</TableHead>
                    <TableHead>Tip</TableHead>
                    <TableHead>Categorie</TableHead>
                    <TableHead>Frecvență</TableHead>
                    <TableHead>Ultima Verificare</TableHead>
                    <TableHead>Activ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sources.map((source) => (
                    <TableRow key={source.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{source.name}</div>
                          <a 
                            href={source.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs text-blue-500 hover:underline truncate block max-w-xs"
                          >
                            {source.url}
                          </a>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{source.source_type}</Badge>
                      </TableCell>
                      <TableCell>{source.category}</TableCell>
                      <TableCell>{source.check_frequency_hours}h</TableCell>
                      <TableCell>
                        {source.last_checked_at 
                          ? format(new Date(source.last_checked_at), 'dd.MM.yyyy HH:mm')
                          : 'Niciodată'}
                      </TableCell>
                      <TableCell>
                        <Switch
                          checked={source.is_active}
                          onCheckedChange={(checked) => toggleSource(source.id, checked)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Changes Tab */}
        <TabsContent value="changes" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Schimbări Detectate</CardTitle>
              <CardDescription>Modificări identificate în sursele monitorizate</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Titlu</TableHead>
                      <TableHead>Sursă</TableHead>
                      <TableHead>Tip</TableHead>
                      <TableHead>Severitate</TableHead>
                      <TableHead>Detectat</TableHead>
                      <TableHead>Procesat</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {changes.map((change) => (
                      <TableRow key={change.id}>
                        <TableCell className="max-w-xs">
                          <div className="font-medium truncate">{change.title}</div>
                          {change.description && (
                            <div className="text-xs text-muted-foreground truncate">
                              {change.description}
                            </div>
                          )}
                        </TableCell>
                        <TableCell>{change.source_name || 'N/A'}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{change.change_type}</Badge>
                        </TableCell>
                        <TableCell>{getSeverityBadge(change.severity)}</TableCell>
                        <TableCell>
                          {format(new Date(change.detected_at), 'dd.MM.yyyy HH:mm')}
                        </TableCell>
                        <TableCell>
                          {change.is_processed 
                            ? <CheckCircle2 className="h-4 w-4 text-green-500" />
                            : <Clock className="h-4 w-4 text-yellow-500" />}
                        </TableCell>
                      </TableRow>
                    ))}
                    {changes.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                          Nu există schimbări detectate
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Audit Log Tab */}
        <TabsContent value="audit" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Jurnal de Audit</CardTitle>
              <CardDescription>Istoric complet al acțiunilor sistemului</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Acțiune</TableHead>
                      <TableHead>Tip Entitate</TableHead>
                      <TableHead>Capitol</TableHead>
                      <TableHead>Detalii</TableHead>
                      <TableHead>Efectuat de</TableHead>
                      <TableHead>Data</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {auditLog.map((entry) => (
                      <TableRow key={entry.id}>
                        <TableCell>
                          <Badge variant="outline">{entry.action}</Badge>
                        </TableCell>
                        <TableCell>{entry.entity_type}</TableCell>
                        <TableCell>{entry.chapter_id || '-'}</TableCell>
                        <TableCell className="max-w-xs">
                          <div className="text-xs text-muted-foreground truncate">
                            {entry.details ? JSON.stringify(entry.details) : '-'}
                          </div>
                        </TableCell>
                        <TableCell>{entry.performed_by || 'System'}</TableCell>
                        <TableCell>
                          {format(new Date(entry.created_at), 'dd.MM.yyyy HH:mm')}
                        </TableCell>
                      </TableRow>
                    ))}
                    {auditLog.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                          Nu există înregistrări în jurnal
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Reject/Rollback Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {dialogAction === 'reject' ? 'Respinge Actualizare' : 'Rollback Actualizare'}
            </DialogTitle>
            <DialogDescription>
              {dialogAction === 'reject' 
                ? 'Această acțiune va respinge actualizarea și nu va fi aplicată.'
                : 'Această acțiune va reveni la versiunea anterioară a conținutului.'}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <label className="text-sm font-medium">
              Motiv {dialogAction === 'reject' ? 'respingere' : 'rollback'}:
            </label>
            <Textarea
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="Introduceți motivul..."
              className="mt-2"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Anulează
            </Button>
            <Button 
              variant="destructive"
              onClick={() => selectedUpdate && handleUpdateAction(
                dialogAction as 'reject' | 'rollback', 
                selectedUpdate.id, 
                rejectReason
              )}
              disabled={actionLoading === selectedUpdate?.id}
            >
              {dialogAction === 'reject' ? 'Respinge' : 'Rollback'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
