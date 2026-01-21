import React, { useEffect, useRef, useState, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Users, Globe, RefreshCw, Key } from 'lucide-react';
import { subMinutes } from 'date-fns';
import { toast } from 'sonner';

interface ActiveUser {
  id: string;
  session_id: string;
  latitude: number;
  longitude: number;
  country: string | null;
  city: string | null;
  device_type: string | null;
  browser: string | null;
  last_activity_at: string;
}

const ActiveUsersMap: React.FC = () => {
  const { t } = useLanguage();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [activeUsers, setActiveUsers] = useState<ActiveUser[]>([]);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);
  const [tokenInput, setTokenInput] = useState('');

  // Load token from localStorage
  useEffect(() => {
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
    }
  }, []);

  // Fetch active users with location
  const fetchActiveUsers = useCallback(async () => {
    const fiveMinutesAgo = subMinutes(new Date(), 5).toISOString();

    const { data, error } = await supabase
      .from('user_sessions')
      .select('id, session_id, latitude, longitude, country, city, device_type, browser, last_activity_at')
      .gte('last_activity_at', fiveMinutesAgo)
      .not('latitude', 'is', null)
      .not('longitude', 'is', null);

    if (error) {
      console.error('Error fetching active users:', error);
      return;
    }

    setActiveUsers((data as ActiveUser[]) || []);
  }, []);

  // Initial fetch and subscribe to realtime
  useEffect(() => {
    fetchActiveUsers();

    const channel = supabase
      .channel('map-sessions')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'user_sessions'
        },
        () => {
          fetchActiveUsers();
        }
      )
      .subscribe();

    // Refresh every 30 seconds
    const interval = setInterval(fetchActiveUsers, 30000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(interval);
    };
  }, [fetchActiveUsers]);

  // Initialize map when token is available
  useEffect(() => {
    if (!mapContainer.current || !mapboxToken || isMapInitialized) return;

    try {
      mapboxgl.accessToken = mapboxToken;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        projection: 'globe',
        zoom: 2.5,
        center: [20, 50], // Center on Europe
        pitch: 30,
      });

      map.current.addControl(
        new mapboxgl.NavigationControl({ visualizePitch: true }),
        'top-right'
      );

      map.current.on('style.load', () => {
        map.current?.setFog({
          color: 'rgb(20, 20, 30)',
          'high-color': 'rgb(40, 40, 60)',
          'horizon-blend': 0.2,
        });
      });

      setIsMapInitialized(true);
    } catch (error) {
      console.error('Error initializing map:', error);
      toast.error(t('admin.map.mapError'));
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
        setIsMapInitialized(false);
      }
    };
  }, [mapboxToken, isMapInitialized]);

  // Update markers when users change
  useEffect(() => {
    if (!map.current || !isMapInitialized) return;

    // Remove existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add new markers
    activeUsers.forEach((user) => {
      // Create custom marker element
      const el = document.createElement('div');
      el.className = 'user-marker';
      el.innerHTML = `
        <div class="relative">
          <div class="w-4 h-4 bg-green-500 rounded-full animate-ping absolute"></div>
          <div class="w-4 h-4 bg-green-400 rounded-full relative border-2 border-white shadow-lg"></div>
        </div>
      `;
      el.style.cursor = 'pointer';

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div class="p-2 text-sm">
          <div class="font-semibold text-gray-900">${user.city || 'Unknown'}, ${user.country || 'Unknown'}</div>
          <div class="text-gray-600 text-xs mt-1">
            <span class="capitalize">${user.device_type || 'Desktop'}</span> • ${user.browser || 'Browser'}
          </div>
        </div>
      `);

      const marker = new mapboxgl.Marker(el)
        .setLngLat([user.longitude, user.latitude])
        .setPopup(popup)
        .addTo(map.current!);

      markersRef.current.push(marker);
    });
  }, [activeUsers, isMapInitialized]);

  const handleSaveToken = () => {
    if (tokenInput.trim()) {
      localStorage.setItem('mapbox_token', tokenInput.trim());
      setMapboxToken(tokenInput.trim());
      toast.success(t('admin.map.tokenSaved'));
    }
  };

  // Group users by country
  const usersByCountry = activeUsers.reduce((acc, user) => {
    const country = user.country || 'Unknown';
    acc[country] = (acc[country] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  if (!mapboxToken) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            {t('admin.map.configTitle')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {t('admin.map.configDesc')}
            <br />
            {t('admin.map.getToken')}{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              mapbox.com
            </a>{' '}
            → Dashboard → Tokens.
          </p>
          <div className="flex gap-2">
            <Input
              placeholder="pk.eyJ1Ijoi..."
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSaveToken}>
              {t('admin.map.save')}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t('admin.map.usersOnMap')}</p>
                <p className="text-3xl font-bold text-green-600">{activeUsers.length}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t('admin.map.activeCountries')}</p>
                <p className="text-3xl font-bold text-blue-600">{Object.keys(usersByCountry).length}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              {Object.entries(usersByCountry)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 5)
                .map(([country, count]) => (
                  <Badge key={country} variant="secondary" className="text-xs">
                    {country}: {count}
                  </Badge>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              {t('admin.map.mapTitle')}
              <Badge variant="outline" className="ml-2 animate-pulse bg-green-50 text-green-700 border-green-200">
                LIVE
              </Badge>
            </CardTitle>
            <Button variant="outline" size="sm" onClick={fetchActiveUsers}>
              <RefreshCw className="h-4 w-4 mr-2" />
              {t('admin.map.refresh')}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
            <div ref={mapContainer} className="absolute inset-0" />
            {activeUsers.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                  <p className="text-muted-foreground">{t('admin.map.noActiveUsers')}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t('admin.map.locationsCollected')}
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Custom styles for markers */}
      <style>{`
        .user-marker {
          width: 16px;
          height: 16px;
        }
        .mapboxgl-popup-content {
          border-radius: 8px;
          padding: 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
      `}</style>
    </div>
  );
};

export default ActiveUsersMap;
