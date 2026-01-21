import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Plus,
  AlertCircle,
  Activity
} from 'lucide-react';

export function IncidentManagement() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newIncident, setNewIncident] = useState({
    title: '',
    description: '',
    severity: 'medium',
    affected_services: [] as string[],
    impact: ''
  });

  // Fetch incidents
  const { data: incidents } = useQuery({
    queryKey: ['incidents'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('incidents')
        .select('*')
        .order('detected_at', { ascending: false });
      if (error) throw error;
      return data;
    }
  });

  // Fetch incident timeline for selected incident
  const [selectedIncident, setSelectedIncident] = useState<string | null>(null);
  
  const { data: timeline } = useQuery({
    queryKey: ['incident-timeline', selectedIncident],
    queryFn: async () => {
      if (!selectedIncident) return [];
      const { data, error } = await supabase
        .from('incident_timeline')
        .select('*')
        .eq('incident_id', selectedIncident)
        .order('created_at', { ascending: true });
      if (error) throw error;
      return data;
    },
    enabled: !!selectedIncident
  });

  // Create incident mutation
  const createIncident = useMutation({
    mutationFn: async (incident: typeof newIncident) => {
      const { data, error } = await supabase
        .from('incidents')
        .insert([{
          incident_number: 'PENDING', // Will be overwritten by trigger
          title: incident.title,
          description: incident.description,
          severity: incident.severity,
          affected_services: incident.affected_services,
          impact: incident.impact
        }])
        .select()
        .single();
      if (error) throw error;
      
      // Add timeline entry
      await supabase.from('incident_timeline').insert([{
        incident_id: data.id,
        event_type: 'created',
        description: t('admin.incident.incidentCreated'),
        new_status: 'open',
        created_by: user?.id
      }]);
      
      return data;
    },
    onSuccess: () => {
      toast.success(t('admin.incident.incidentCreated'));
      setIsCreateOpen(false);
      setNewIncident({ title: '', description: '', severity: 'medium', affected_services: [], impact: '' });
      queryClient.invalidateQueries({ queryKey: ['incidents'] });
    },
    onError: (error: any) => {
      toast.error(t('admin.incident.incidentCreateFailed').replace('{error}', error.message));
    }
  });

  // Update incident status
  const updateStatus = useMutation({
    mutationFn: async ({ incidentId, newStatus }: { incidentId: string; newStatus: string }) => {
      const incident = incidents?.find(i => i.id === incidentId);
      const oldStatus = incident?.status;
      
      const updates: any = { status: newStatus, updated_at: new Date().toISOString() };
      
      if (newStatus === 'investigating') {
        updates.acknowledged_at = new Date().toISOString();
      } else if (newStatus === 'resolved') {
        updates.resolved_at = new Date().toISOString();
      }
      
      const { error } = await supabase
        .from('incidents')
        .update(updates)
        .eq('id', incidentId);
      if (error) throw error;
      
      // Add timeline entry
      await supabase.from('incident_timeline').insert({
        incident_id: incidentId,
        event_type: 'status_change',
        description: `Status changed from ${oldStatus} to ${newStatus}`,
        old_status: oldStatus,
        new_status: newStatus,
        created_by: user?.id
      });
    },
    onSuccess: () => {
      toast.success(t('admin.incident.statusUpdated'));
      queryClient.invalidateQueries({ queryKey: ['incidents'] });
      queryClient.invalidateQueries({ queryKey: ['incident-timeline'] });
    }
  });

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">{t('admin.incident.severityCritical')}</Badge>;
      case 'high':
        return <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">{t('admin.incident.severityHigh')}</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">{t('admin.incident.severityMedium')}</Badge>;
      case 'low':
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">{t('admin.incident.severityLow')}</Badge>;
      default:
        return <Badge variant="secondary">{severity}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">{t('admin.incident.statusOpen')}</Badge>;
      case 'investigating':
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">{t('admin.incident.statusInvestigating')}</Badge>;
      case 'identified':
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">{t('admin.incident.statusIdentified')}</Badge>;
      case 'monitoring':
        return <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">{t('admin.incident.statusMonitoring')}</Badge>;
      case 'resolved':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">{t('admin.incident.statusResolved')}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const openIncidents = incidents?.filter(i => i.status !== 'resolved') || [];
  const resolvedIncidents = incidents?.filter(i => i.status === 'resolved') || [];

  // Calculate MTTR (Mean Time to Resolution)
  const calculateMTTR = () => {
    const resolved = incidents?.filter(i => i.resolved_at && i.detected_at);
    if (!resolved || resolved.length === 0) return '-';
    
    const totalMs = resolved.reduce((sum, i) => {
      return sum + (new Date(i.resolved_at!).getTime() - new Date(i.detected_at).getTime());
    }, 0);
    
    const avgMs = totalMs / resolved.length;
    const hours = Math.round(avgMs / (1000 * 60 * 60));
    return `${hours}h`;
  };

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-red-500/10 border-red-500/30">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-400">{t('admin.incident.openIncidents')}</p>
                <p className="text-3xl font-bold text-red-400">{openIncidents.length}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-500/10 border-green-500/30">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-400">{t('admin.incident.resolved30d')}</p>
                <p className="text-3xl font-bold text-green-400">{resolvedIncidents.length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-yellow-500/10 border-yellow-500/30">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-400">{t('admin.incident.mttr')}</p>
                <p className="text-3xl font-bold text-yellow-400">{calculateMTTR()}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-500/10 border-purple-500/30">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-400">{t('admin.incident.criticalActive')}</p>
                <p className="text-3xl font-bold text-purple-400">
                  {openIncidents.filter(i => i.severity === 'critical').length}
                </p>
              </div>
              <AlertTriangle className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{t('admin.incident.management')}</h3>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              {t('admin.incident.createIncident')}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{t('admin.incident.createNew')}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <label className="text-sm font-medium">{t('admin.incident.title')}</label>
                <Input
                  value={newIncident.title}
                  onChange={(e) => setNewIncident({ ...newIncident, title: e.target.value })}
                  placeholder={t('admin.incident.titlePlaceholder')}
                />
              </div>
              <div>
                <label className="text-sm font-medium">{t('admin.incident.description')}</label>
                <Textarea
                  value={newIncident.description}
                  onChange={(e) => setNewIncident({ ...newIncident, description: e.target.value })}
                  placeholder={t('admin.incident.descriptionPlaceholder')}
                />
              </div>
              <div>
                <label className="text-sm font-medium">{t('admin.incident.severity')}</label>
                <Select
                  value={newIncident.severity}
                  onValueChange={(value) => setNewIncident({ ...newIncident, severity: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">{t('admin.incident.severityLow')}</SelectItem>
                    <SelectItem value="medium">{t('admin.incident.severityMedium')}</SelectItem>
                    <SelectItem value="high">{t('admin.incident.severityHigh')}</SelectItem>
                    <SelectItem value="critical">{t('admin.incident.severityCritical')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">{t('admin.incident.impact')}</label>
                <Input
                  value={newIncident.impact}
                  onChange={(e) => setNewIncident({ ...newIncident, impact: e.target.value })}
                  placeholder={t('admin.incident.impactPlaceholder')}
                />
              </div>
              <Button 
                onClick={() => createIncident.mutate(newIncident)}
                disabled={!newIncident.title || createIncident.isPending}
                className="w-full"
              >
                {t('admin.incident.createIncident')}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Incidents */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-400" />
              {t('admin.incident.activeIncidents')}
            </CardTitle>
            <CardDescription>{t('admin.incident.activeIncidentsDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px]">
              <div className="space-y-3">
                {openIncidents.map((incident) => (
                  <Card 
                    key={incident.id} 
                    className={`bg-background/50 cursor-pointer transition-colors ${selectedIncident === incident.id ? 'ring-2 ring-primary' : ''}`}
                    onClick={() => setSelectedIncident(incident.id)}
                  >
                    <CardContent className="pt-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="space-y-1">
                          <p className="font-medium text-sm">{incident.incident_number}</p>
                          <p className="text-sm">{incident.title}</p>
                        </div>
                        <div className="flex gap-2">
                          {getSeverityBadge(incident.severity)}
                          {getStatusBadge(incident.status)}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">
                        {t('admin.incident.detected')}: {new Date(incident.detected_at).toLocaleString()}
                      </p>
                      <div className="flex gap-2">
                        {incident.status === 'open' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              updateStatus.mutate({ incidentId: incident.id, newStatus: 'investigating' });
                            }}
                          >
                            {t('admin.incident.investigate')}
                          </Button>
                        )}
                        {incident.status === 'investigating' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              updateStatus.mutate({ incidentId: incident.id, newStatus: 'identified' });
                            }}
                          >
                            {t('admin.incident.markIdentified')}
                          </Button>
                        )}
                        {(incident.status === 'identified' || incident.status === 'monitoring') && (
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                            onClick={(e) => {
                              e.stopPropagation();
                              updateStatus.mutate({ incidentId: incident.id, newStatus: 'resolved' });
                            }}
                          >
                            {t('admin.incident.resolve')}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {openIncidents.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <CheckCircle className="h-12 w-12 mx-auto mb-2 text-green-400" />
                    <p>{t('admin.incident.noActiveIncidents')}</p>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Incident Timeline */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              {t('admin.incident.timeline')}
            </CardTitle>
            <CardDescription>
              {selectedIncident 
                ? `${t('admin.incident.timelineFor')} ${incidents?.find(i => i.id === selectedIncident)?.incident_number}`
                : t('admin.incident.selectIncident')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px]">
              {selectedIncident && timeline && timeline.length > 0 ? (
                <div className="space-y-4">
                  {timeline.map((event: any, index: number) => (
                    <div key={event.id} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full ${
                          event.event_type === 'created' ? 'bg-blue-500' :
                          event.event_type === 'status_change' ? 'bg-yellow-500' :
                          event.event_type === 'resolved' ? 'bg-green-500' : 'bg-gray-500'
                        }`} />
                        {index < timeline.length - 1 && (
                          <div className="w-px h-full bg-border min-h-[20px]" />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <p className="text-sm font-medium">{event.description}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(event.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Activity className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>{t('admin.incident.selectIncident')}</p>
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Recently Resolved */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-400" />
            {t('admin.incident.recentlyResolved')}
          </CardTitle>
          <CardDescription>{t('admin.incident.recentlyResolvedDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            <div className="space-y-3">
              {resolvedIncidents.slice(0, 10).map((incident) => (
                <div key={incident.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <div>
                      <p className="font-medium">{incident.incident_number}: {incident.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('admin.incident.resolvedAt')}: {incident.resolved_at ? new Date(incident.resolved_at).toLocaleString() : '-'}
                      </p>
                    </div>
                  </div>
                  {getSeverityBadge(incident.severity)}
                </div>
              ))}
              {resolvedIncidents.length === 0 && (
                <p className="text-center text-muted-foreground py-8">{t('admin.incident.noResolvedIncidents')}</p>
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
