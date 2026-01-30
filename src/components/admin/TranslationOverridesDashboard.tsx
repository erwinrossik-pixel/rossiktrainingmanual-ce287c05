import React from 'react';
import { logger } from '@/utils/logger';
import { useAllTranslationOverrides } from '@/hooks/useTranslationOverrides';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle2, Languages, RefreshCw, Clock, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { format } from 'date-fns';

const TranslationOverridesDashboard: React.FC = () => {
  const { data: overrides = [], isLoading, refetch } = useAllTranslationOverrides();
  const [isRunning, setIsRunning] = React.useState(false);

  const runAnalysis = async () => {
    setIsRunning(true);
    try {
      const { data, error } = await supabase.functions.invoke('content-visual-analyzer', {
        body: { auto_fix: true, language: 'ro' }
      });

      if (error) throw error;
      
      toast.success(`Analiză completă! ${data.results?.length || 0} capitole procesate.`);
      refetch();
    } catch (err) {
      logger.error('Analysis error:', err);
      toast.error('Eroare la analiză');
    } finally {
      setIsRunning(false);
    }
  };

  const stats = React.useMemo(() => {
    const byLanguage = overrides.reduce((acc, o) => {
      acc[o.language] = (acc[o.language] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const byChapter = new Set(overrides.map(o => o.chapter_id)).size;
    const active = overrides.filter(o => o.is_active).length;

    return { byLanguage, byChapter, active, total: overrides.length };
  }, [overrides]);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Corecturi Active</p>
                <p className="text-2xl font-bold">{stats.active}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Languages className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Limbi Acoperite</p>
                <p className="text-2xl font-bold">{Object.keys(stats.byLanguage).length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Wand2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Capitole cu Corecturi</p>
                <p className="text-2xl font-bold">{stats.byChapter}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <Button 
              onClick={runAnalysis} 
              disabled={isRunning}
              className="w-full h-full"
            >
              {isRunning ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Analizez...
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4 mr-2" />
                  Rulează Analiză
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Overrides table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Languages className="h-5 w-5" />
            Corecturi de Traducere Aplicate
          </CardTitle>
          <CardDescription>
            Traduceri corectate automat de sistemul de analiză vizuală
          </CardDescription>
        </CardHeader>
        <CardContent>
          {overrides.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Languages className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Nicio corecție aplicată încă.</p>
              <p className="text-sm">Rulați analiza pentru a detecta și corecta probleme de traducere.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Capitol</TableHead>
                    <TableHead>Limba</TableHead>
                    <TableHead>Cheie</TableHead>
                    <TableHead>Valoare Corectată</TableHead>
                    <TableHead>Sursă</TableHead>
                    <TableHead>Aplicat La</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {overrides.slice(0, 50).map((override) => (
                    <TableRow key={override.id}>
                      <TableCell className="font-medium">{override.chapter_id}</TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {override.language.toUpperCase()}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-mono text-xs max-w-[150px] truncate">
                        {override.translation_key}
                      </TableCell>
                      <TableCell className="max-w-[200px] truncate">
                        {override.corrected_value}
                      </TableCell>
                      <TableCell>
                        <Badge variant={override.fix_source === 'auto' ? 'default' : 'secondary'}>
                          {override.fix_source === 'auto' ? 'AI Auto' : 'Manual'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {format(new Date(override.applied_at), 'dd.MM.yyyy HH:mm')}
                        </div>
                      </TableCell>
                      <TableCell>
                        {override.is_active ? (
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Activ
                          </Badge>
                        ) : (
                          <Badge variant="secondary">Inactiv</Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TranslationOverridesDashboard;
