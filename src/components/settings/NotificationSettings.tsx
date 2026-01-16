import React, { memo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Bell, BellOff, CheckCircle2, AlertTriangle, Info } from 'lucide-react';
import { usePushNotifications } from '@/hooks/usePushNotifications';

export const NotificationSettings = memo(function NotificationSettings() {
  const {
    isSupported,
    isSubscribed,
    permission,
    loading,
    subscribe,
    unsubscribe,
  } = usePushNotifications();

  const handleToggle = async () => {
    if (isSubscribed) {
      await unsubscribe();
    } else {
      await subscribe();
    }
  };

  if (!isSupported) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BellOff className="h-5 w-5 text-muted-foreground" />
            <CardTitle className="text-lg">Notificări Push</CardTitle>
          </div>
          <CardDescription>
            Notificările push nu sunt suportate în acest browser
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Browser incompatibil</p>
              <p>Pentru a primi notificări push, folosește un browser modern precum Chrome, Firefox sau Edge.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Notificări Push</CardTitle>
          </div>
          <Badge variant={isSubscribed ? 'default' : 'secondary'}>
            {isSubscribed ? 'Activ' : 'Inactiv'}
          </Badge>
        </div>
        <CardDescription>
          Primește notificări despre progresul tău și reminder-uri de training
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Permission Status */}
        {permission === 'denied' && (
          <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-destructive mb-1">Notificări blocate</p>
              <p className="text-muted-foreground">
                Ai blocat notificările pentru acest site. Pentru a le activa, accesează setările browserului și permite notificările pentru acest site.
              </p>
            </div>
          </div>
        )}

        {/* Main Toggle */}
        <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-3">
            {isSubscribed ? (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            ) : (
              <BellOff className="h-5 w-5 text-muted-foreground" />
            )}
            <div>
              <Label htmlFor="push-toggle" className="font-medium">
                Notificări Push
              </Label>
              <p className="text-sm text-muted-foreground">
                {isSubscribed ? 'Vei primi notificări pe acest dispozitiv' : 'Activează pentru a primi notificări'}
              </p>
            </div>
          </div>
          <Switch
            id="push-toggle"
            checked={isSubscribed}
            onCheckedChange={handleToggle}
            disabled={loading || permission === 'denied'}
          />
        </div>

        {/* What you'll receive */}
        <div>
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <Info className="h-4 w-4 text-muted-foreground" />
            Ce vei primi
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Reminder-uri zilnice de training
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Alerte pentru obiective atinse
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Notificări despre certificate noi
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Update-uri despre conținut nou
            </li>
          </ul>
        </div>

        {/* Test Notification */}
        {isSubscribed && (
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              new Notification('Test notificare', {
                body: 'Notificările funcționează corect! 🎉',
                icon: '/favicon.ico',
              });
            }}
          >
            <Bell className="h-4 w-4 mr-2" />
            Trimite notificare de test
          </Button>
        )}
      </CardContent>
    </Card>
  );
});
