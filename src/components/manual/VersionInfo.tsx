import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ScrollArea } from '@/components/ui/scroll-area';
import { History, ChevronDown, ExternalLink, Calendar, User, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '@/contexts/LanguageContext';

interface ChapterVersion {
  id: string;
  version_number: number;
  change_summary: string | null;
  update_source: string | null;
  source_url: string | null;
  created_at: string;
  is_approved: boolean;
  approved_by: string | null;
  approved_at: string | null;
}

interface VersionInfoProps {
  chapterId: string;
  className?: string;
}

const translations = {
  ro: {
    versionHistory: 'Istoric Versiuni',
    currentVersion: 'Versiunea curentă',
    lastUpdated: 'Ultima actualizare',
    source: 'Sursă',
    noVersions: 'Nu există versiuni înregistrate',
    version: 'Versiunea',
    approved: 'Aprobat',
    pending: 'În așteptare',
    showHistory: 'Afișează istoric',
    hideHistory: 'Ascunde istoric',
  },
  de: {
    versionHistory: 'Versionsverlauf',
    currentVersion: 'Aktuelle Version',
    lastUpdated: 'Zuletzt aktualisiert',
    source: 'Quelle',
    noVersions: 'Keine Versionen aufgezeichnet',
    version: 'Version',
    approved: 'Genehmigt',
    pending: 'Ausstehend',
    showHistory: 'Verlauf anzeigen',
    hideHistory: 'Verlauf ausblenden',
  },
  en: {
    versionHistory: 'Version History',
    currentVersion: 'Current version',
    lastUpdated: 'Last updated',
    source: 'Source',
    noVersions: 'No versions recorded',
    version: 'Version',
    approved: 'Approved',
    pending: 'Pending',
    showHistory: 'Show history',
    hideHistory: 'Hide history',
  },
};

export function VersionInfo({ chapterId, className }: VersionInfoProps) {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  
  const [versions, setVersions] = useState<ChapterVersion[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchVersions();
  }, [chapterId]);

  const fetchVersions = async () => {
    const { data, error } = await supabase
      .from('chapter_versions')
      .select('id, version_number, change_summary, update_source, source_url, created_at, is_approved, approved_by, approved_at')
      .eq('chapter_id', chapterId)
      .order('version_number', { ascending: false })
      .limit(10);

    if (error) {
      console.error('Error fetching versions:', error);
    } else {
      setVersions(data || []);
    }
    setLoading(false);
  };

  if (loading) {
    return null;
  }

  const currentVersion = versions[0];

  if (!currentVersion) {
    return (
      <div className={`text-sm text-muted-foreground ${className}`}>
        <FileText className="h-4 w-4 inline mr-1" />
        {t.noVersions}
      </div>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className={className}>
      <div className="flex items-center justify-between gap-4 p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1.5">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">{t.currentVersion}:</span>
            <Badge variant="outline">v{currentVersion.version_number}</Badge>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{format(new Date(currentVersion.created_at), 'dd.MM.yyyy HH:mm')}</span>
          </div>
          {currentVersion.update_source && (
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <span>{t.source}: {currentVersion.update_source}</span>
            </div>
          )}
        </div>
        
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-1">
            <History className="h-4 w-4" />
            {isOpen ? t.hideHistory : t.showHistory}
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent>
        <Card className="mt-2">
          <CardHeader className="py-3">
            <CardTitle className="text-base flex items-center gap-2">
              <History className="h-4 w-4" />
              {t.versionHistory}
            </CardTitle>
            <CardDescription>Ultimele 10 versiuni</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[300px]">
              <div className="divide-y">
                {versions.map((version, index) => (
                  <div 
                    key={version.id} 
                    className={`p-4 ${index === 0 ? 'bg-primary/5' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant={index === 0 ? 'default' : 'outline'}>
                            v{version.version_number}
                          </Badge>
                          <Badge 
                            variant={version.is_approved ? 'outline' : 'secondary'}
                            className={version.is_approved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                          >
                            {version.is_approved ? t.approved : t.pending}
                          </Badge>
                          {index === 0 && (
                            <span className="text-xs text-primary font-medium">({t.currentVersion})</span>
                          )}
                        </div>
                        {version.change_summary && (
                          <p className="text-sm text-muted-foreground">{version.change_summary}</p>
                        )}
                      </div>
                      <div className="text-right text-xs text-muted-foreground space-y-1">
                        <div>{format(new Date(version.created_at), 'dd.MM.yyyy HH:mm')}</div>
                        {version.source_url && (
                          <a 
                            href={version.source_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            <ExternalLink className="h-3 w-3" />
                            {t.source}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  );
}
