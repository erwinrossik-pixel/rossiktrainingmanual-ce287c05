import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AppMetadata {
  last_published_at: string | null;
  version: string;
}

export function useAppMetadata() {
  const [metadata, setMetadata] = useState<AppMetadata | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetadata = async () => {
      const { data, error } = await supabase
        .from('app_metadata')
        .select('last_published_at, version')
        .eq('id', 'main')
        .single();

      if (!error && data) {
        setMetadata(data);
      }
      setLoading(false);
    };

    fetchMetadata();
  }, []);

  const formatPublishDate = (date: string | null): string => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('ro-RO', { 
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return {
    metadata,
    loading,
    publishDate: metadata?.last_published_at ? formatPublishDate(metadata.last_published_at) : null,
    version: metadata?.version || '2025.1'
  };
}
