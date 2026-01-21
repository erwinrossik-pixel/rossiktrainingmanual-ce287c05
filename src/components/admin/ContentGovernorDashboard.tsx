import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { 
  Shield, Lock, AlertTriangle, CheckCircle, XCircle, 
  RotateCcw, FileText, Languages, BookOpen, Clock,
  Eye, Edit, Trash2, Plus, RefreshCw
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  LOCKED_TERMINOLOGY,
  LOCKED_CONCEPTS,
  CONTENT_RULES,
  getGovernanceStats,
  validateContentUpdate,
  type TerminologyRule,
  type LockedConcept,
  type ContentRule,
  type ContentIncident
} from '@/data/contentGovernance';

interface GovernanceIncident {
  id: string;
  created_at: string;
  updated_at: string;
  incident_type: string;
  severity: string;
  chapter_id: string | null;
  update_id: string | null;
  violated_rule: string | null;
  content_preview: string | null;
  details: Record<string, unknown> | null;
  status: string;
  resolved_at: string | null;
  resolved_by: string | null;
  resolution_notes: string | null;
}

export function ContentGovernorDashboard() {
  const { t, language } = useLanguage();
  const [incidents, setIncidents] = useState<GovernanceIncident[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIncident, setSelectedIncident] = useState<GovernanceIncident | null>(null);
  const [showResolveDialog, setShowResolveDialog] = useState(false);
  const [resolutionNote, setResolutionNote] = useState('');
  const [testOriginal, setTestOriginal] = useState('');
  const [testNew, setTestNew] = useState('');
  const [testResult, setTestResult] = useState<{ isValid: boolean; violations: ContentIncident[]; warnings: string[] } | null>(null);

  const stats = getGovernanceStats();

  // Calculate incident stats
  const openIncidents = incidents.filter(i => i.status === 'open').length;
  const criticalIncidents = incidents.filter(i => i.severity === 'critical' && i.status === 'open').length;

  useEffect(() => {
    fetchIncidents();
  }, []);

  const fetchIncidents = async () => {
    try {
      const { data, error } = await supabase
        .from('governance_incidents')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (error) throw error;
      setIncidents((data as GovernanceIncident[]) || []);
    } catch (error) {
      console.error('Error fetching governance incidents:', error);
      toast.error(t('admin.governor.errorLoad'));
    } finally {
      setLoading(false);
    }
  };

  const handleResolveIncident = async () => {
    if (!selectedIncident) return;

    try {
      const { error } = await supabase
        .from('governance_incidents')
        .update({
          status: 'resolved',
          resolved_at: new Date().toISOString(),
          resolution_notes: resolutionNote
        })
        .eq('id', selectedIncident.id);

      if (error) throw error;

      toast.success(t('admin.governor.incidentResolved'));
      setShowResolveDialog(false);
      setSelectedIncident(null);
      setResolutionNote('');
      fetchIncidents();
    } catch (error) {
      console.error('Error resolving incident:', error);
      toast.error(t('admin.governor.errorResolve'));
    }
  };

  const handleIgnoreIncident = async (incident: GovernanceIncident) => {
    try {
      const { error } = await supabase
        .from('governance_incidents')
        .update({ status: 'ignored' })
        .eq('id', incident.id);

      if (error) throw error;
      toast.success(t('admin.governor.incidentIgnored'));
      fetchIncidents();
    } catch (error) {
      toast.error(t('admin.governor.errorResolve'));
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge className="bg-red-500">{t('admin.governor.statusOpen')}</Badge>;
      case 'reviewed':
        return <Badge className="bg-yellow-500">{t('admin.governor.statusReviewed')}</Badge>;
      case 'resolved':
        return <Badge className="bg-green-500">{t('admin.governor.statusResolved')}</Badge>;
      case 'ignored':
        return <Badge variant="secondary">{t('admin.governor.statusIgnored')}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const runValidationTest = () => {
    const result = validateContentUpdate(testOriginal, testNew, 'test-chapter', language as 'ro' | 'de' | 'en');
    setTestResult(result);
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <Badge variant="destructive">{t('admin.governor.severityCritical')}</Badge>;
      case 'high':
        return <Badge className="bg-orange-500">{t('admin.governor.severityHigh')}</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-500">{t('admin.governor.severityMedium')}</Badge>;
      default:
        return <Badge variant="secondary">{t('admin.governor.severityLow')}</Badge>;
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'legal':
        return <Badge className="bg-purple-500">{t('admin.governor.categoryLegal')}</Badge>;
      case 'operational':
        return <Badge className="bg-blue-500">{t('admin.governor.categoryOperational')}</Badge>;
      case 'technical':
        return <Badge className="bg-cyan-500">{t('admin.governor.categoryTechnical')}</Badge>;
      case 'compliance':
        return <Badge className="bg-green-500">{t('admin.governor.categoryCompliance')}</Badge>;
      default:
        return <Badge variant="outline">{category}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Lock className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.lockedTerms}</p>
                <p className="text-sm text-muted-foreground">{t('admin.governor.lockedTerms')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <BookOpen className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.lockedConcepts}</p>
                <p className="text-sm text-muted-foreground">{t('admin.governor.protectedConcepts')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-amber-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/20 rounded-lg">
                <Shield className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.activeRules}</p>
                <p className="text-sm text-muted-foreground">{t('admin.governor.activeRules')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border-cyan-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-cyan-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.criticalRules}</p>
                <p className="text-sm text-muted-foreground">{t('admin.governor.criticalRules')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{openIncidents}</p>
                <p className="text-sm text-muted-foreground">{t('admin.governor.openIncidents')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-500/10 to-red-600/5 border-red-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-500/20 rounded-lg">
                <XCircle className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{criticalIncidents}</p>
                <p className="text-sm text-muted-foreground">{t('admin.governor.criticalIncidents')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="terminology" className="space-y-4">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="terminology" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">{t('admin.governor.tabTerminology')}</span>
          </TabsTrigger>
          <TabsTrigger value="concepts" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">{t('admin.governor.tabConcepts')}</span>
          </TabsTrigger>
          <TabsTrigger value="rules" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">{t('admin.governor.tabRules')}</span>
          </TabsTrigger>
          <TabsTrigger value="incidents" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span className="hidden sm:inline">{t('admin.governor.tabIncidents')}</span>
          </TabsTrigger>
          <TabsTrigger value="test" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            <span className="hidden sm:inline">{t('admin.governor.tabTest')}</span>
          </TabsTrigger>
        </TabsList>

        {/* Locked Terminology Tab */}
        <TabsContent value="terminology">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                {t('admin.governor.lockedTerminology')}
              </CardTitle>
              <CardDescription>
                {t('admin.governor.lockedTerminologyDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t('admin.governor.term')}</TableHead>
                      <TableHead>{t('admin.governor.definition')} ({language.toUpperCase()})</TableHead>
                      <TableHead>{t('admin.governor.category')}</TableHead>
                      <TableHead>{t('admin.governor.source')}</TableHead>
                      <TableHead>{t('admin.governor.status')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {LOCKED_TERMINOLOGY.map((term) => (
                      <TableRow key={term.id}>
                        <TableCell className="font-medium">{term.term}</TableCell>
                        <TableCell className="max-w-md">
                          <p className="text-sm truncate">{term.definition[language as keyof typeof term.definition]}</p>
                        </TableCell>
                        <TableCell>{getCategoryBadge(term.category)}</TableCell>
                        <TableCell>
                          <span className="text-sm text-muted-foreground">{term.source}</span>
                        </TableCell>
                        <TableCell>
                          {term.isLocked ? (
                            <Badge className="bg-red-500/20 text-red-500 border-red-500/30">
                              <Lock className="h-3 w-3 mr-1" />
                              {t('admin.governor.locked')}
                            </Badge>
                          ) : (
                            <Badge variant="outline">{t('admin.governor.unlocked')}</Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Locked Concepts Tab */}
        <TabsContent value="concepts">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                {t('admin.governor.protectedConceptsTitle')}
              </CardTitle>
              <CardDescription>
                {t('admin.governor.protectedConceptsDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                <div className="space-y-4">
                  {LOCKED_CONCEPTS.map((concept) => (
                    <Card key={concept.id} className="border-l-4 border-l-amber-500">
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <h4 className="font-semibold">
                              {concept.conceptName[language as keyof typeof concept.conceptName]}
                            </h4>
                            <p className="text-sm text-muted-foreground">{concept.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {concept.chapters.map(ch => (
                                <Badge key={ch} variant="outline" className="text-xs">
                                  {ch}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="text-right space-y-1">
                            <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/30">
                              <Lock className="h-3 w-3 mr-1" />
                              {t('admin.governor.protected')}
                            </Badge>
                            <p className="text-xs text-muted-foreground">{concept.lockReason}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Content Rules Tab */}
        <TabsContent value="rules">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                {t('admin.governor.governanceRules')}
              </CardTitle>
              <CardDescription>
                {t('admin.governor.governanceRulesDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t('admin.governor.rule')}</TableHead>
                      <TableHead>{t('admin.governor.type')}</TableHead>
                      <TableHead>{t('admin.governor.description')}</TableHead>
                      <TableHead>{t('admin.governor.severity')}</TableHead>
                      <TableHead>{t('admin.governor.autoReject')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {CONTENT_RULES.map((rule) => (
                      <TableRow key={rule.id}>
                        <TableCell className="font-medium">{rule.ruleName}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{rule.ruleType}</Badge>
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <p className="text-sm truncate">{rule.description}</p>
                        </TableCell>
                        <TableCell>{getSeverityBadge(rule.severity)}</TableCell>
                        <TableCell>
                          {rule.autoReject ? (
                            <Badge className="bg-red-500">
                              <XCircle className="h-3 w-3 mr-1" />
                              {t('admin.governor.yes')}
                            </Badge>
                          ) : (
                            <Badge variant="outline">
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              {t('admin.governor.warning')}
                            </Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Incidents Tab */}
        <TabsContent value="incidents">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Jurnal Incidente
                  </CardTitle>
                  <CardDescription>
                    Istoric respingeri, rollback-uri și încălcări de reguli
                  </CardDescription>
                </div>
                <Button variant="outline" onClick={fetchIncidents}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Actualizează
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                {loading ? (
                  <div className="flex justify-center py-8">
                    <RefreshCw className="h-6 w-6 animate-spin" />
                  </div>
                ) : incidents.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
                    <p>Niciun incident înregistrat</p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Data</TableHead>
                        <TableHead>Severitate</TableHead>
                        <TableHead>Tip</TableHead>
                        <TableHead>Regulă Încălcată</TableHead>
                        <TableHead>Capitol</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Acțiuni</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {incidents.map((incident) => (
                        <TableRow key={incident.id}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">
                                {new Date(incident.created_at).toLocaleDateString('ro-RO')}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>{getSeverityBadge(incident.severity)}</TableCell>
                          <TableCell>
                            <Badge variant="outline">
                              {incident.incident_type === 'terminology_violation' ? 'Terminologie' :
                               incident.incident_type === 'concept_violation' ? 'Concept' :
                               incident.incident_type === 'consistency_failure' ? 'Consistență' :
                               incident.incident_type === 'auto_rejection' ? 'Auto-Respins' :
                               incident.incident_type}
                            </Badge>
                          </TableCell>
                          <TableCell className="max-w-xs">
                            <p className="text-sm truncate">{incident.violated_rule || '-'}</p>
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary">{incident.chapter_id || 'N/A'}</Badge>
                          </TableCell>
                          <TableCell>{getStatusBadge(incident.status)}</TableCell>
                          <TableCell>
                            {incident.status === 'open' && (
                              <div className="flex gap-1">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => {
                                    setSelectedIncident(incident);
                                    setShowResolveDialog(true);
                                  }}
                                >
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleIgnoreIncident(incident)}
                                >
                                  <XCircle className="h-4 w-4 text-muted-foreground" />
                                </Button>
                              </div>
                            )}
                            {incident.status === 'resolved' && incident.resolution_notes && (
                              <span className="text-xs text-muted-foreground truncate max-w-[100px] block">
                                {incident.resolution_notes}
                              </span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Test Validation Tab */}
        <TabsContent value="test">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5" />
                Testare Validare Conținut
              </CardTitle>
              <CardDescription>
                Testează regulile de validare înainte de aplicarea lor
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Conținut Original</label>
                  <Textarea 
                    placeholder="Introdu conținutul original..."
                    value={testOriginal}
                    onChange={(e) => setTestOriginal(e.target.value)}
                    className="h-40"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Conținut Nou (propus)</label>
                  <Textarea 
                    placeholder="Introdu conținutul nou propus..."
                    value={testNew}
                    onChange={(e) => setTestNew(e.target.value)}
                    className="h-40"
                  />
                </div>
              </div>
              
              <Button onClick={runValidationTest} className="w-full">
                <Shield className="h-4 w-4 mr-2" />
                Rulează Validare
              </Button>

              {testResult && (
                <Card className={testResult.isValid ? 'border-green-500' : 'border-red-500'}>
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-2 mb-4">
                      {testResult.isValid ? (
                        <>
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="font-medium text-green-500">Validare reușită</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="font-medium text-red-500">Validare eșuată</span>
                        </>
                      )}
                    </div>

                    {testResult.violations.length > 0 && (
                      <div className="space-y-2 mb-4">
                        <h4 className="text-sm font-medium text-red-500">Încălcări:</h4>
                        {testResult.violations.map((v, i) => (
                          <div key={i} className="text-sm p-2 bg-red-500/10 rounded">
                            {v.description}
                          </div>
                        ))}
                      </div>
                    )}

                    {testResult.warnings.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-amber-500">Avertizări:</h4>
                        {testResult.warnings.map((w, i) => (
                          <div key={i} className="text-sm p-2 bg-amber-500/10 rounded">
                            {w}
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Resolve Incident Dialog */}
      <Dialog open={showResolveDialog} onOpenChange={setShowResolveDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rezolvare Incident</DialogTitle>
            <DialogDescription>
              Adaugă o notă despre cum a fost rezolvat acest incident de guvernanță.
            </DialogDescription>
          </DialogHeader>
          
          {selectedIncident && (
            <div className="space-y-4">
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  {getSeverityBadge(selectedIncident.severity)}
                  <Badge variant="outline">{selectedIncident.incident_type}</Badge>
                </div>
                <p className="text-sm">{selectedIncident.violated_rule}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Capitol: {selectedIncident.chapter_id || 'N/A'}
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Note de Rezolvare</label>
                <Textarea
                  placeholder="Descrie cum a fost rezolvat incidentul..."
                  value={resolutionNote}
                  onChange={(e) => setResolutionNote(e.target.value)}
                  className="h-24"
                />
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowResolveDialog(false)}>
              Anulează
            </Button>
            <Button onClick={handleResolveIncident}>
              <CheckCircle className="h-4 w-4 mr-2" />
              Marchează Rezolvat
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
