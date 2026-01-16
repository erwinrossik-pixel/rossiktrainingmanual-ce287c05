import { useWebinars } from '@/hooks/useWebinars';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Video, Calendar, Users, ExternalLink, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

export function WebinarsList() {
  const { webinars, loading, registerForWebinar, unregisterFromWebinar } = useWebinars();
  const { user } = useAuth();

  const handleRegister = async (webinarId: string) => {
    if (!user) {
      toast.error('Please log in to register');
      return;
    }
    const success = await registerForWebinar(webinarId);
    if (success) {
      toast.success('Successfully registered for webinar!');
    } else {
      toast.error('Failed to register');
    }
  };

  const handleUnregister = async (webinarId: string) => {
    const success = await unregisterFromWebinar(webinarId);
    if (success) {
      toast.success('Unregistered from webinar');
    } else {
      toast.error('Failed to unregister');
    }
  };

  if (loading) {
    return (
      <Card className="animate-pulse">
        <CardHeader>
          <div className="h-6 bg-muted rounded w-1/3" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2].map(i => (
              <div key={i} className="h-24 bg-muted rounded" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (webinars.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5" />
            Upcoming Webinars
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            No upcoming webinars scheduled
          </p>
        </CardContent>
      </Card>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-red-500';
      case 'scheduled': return 'bg-blue-500';
      case 'completed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Video className="h-5 w-5" />
          Upcoming Webinars
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {webinars.map(webinar => (
          <div
            key={webinar.id}
            className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{webinar.title}</h3>
                  <Badge className={getStatusColor(webinar.status)}>
                    {webinar.status === 'live' ? '🔴 LIVE' : webinar.status}
                  </Badge>
                </div>
                {webinar.description && (
                  <p className="text-sm text-muted-foreground mb-2">
                    {webinar.description}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {format(new Date(webinar.scheduled_at), 'MMM d, yyyy')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {format(new Date(webinar.scheduled_at), 'HH:mm')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {webinar.registered_count}/{webinar.max_participants}
                  </span>
                  {webinar.host_name && (
                    <span>Host: {webinar.host_name}</span>
                  )}
                </div>
              </div>
              <div className="flex-shrink-0">
                {webinar.status === 'live' && webinar.meeting_url ? (
                  <Button asChild>
                    <a href={webinar.meeting_url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Join Now
                    </a>
                  </Button>
                ) : webinar.is_registered ? (
                  <Button variant="outline" onClick={() => handleUnregister(webinar.id)}>
                    Unregister
                  </Button>
                ) : (
                  <Button 
                    onClick={() => handleRegister(webinar.id)}
                    disabled={webinar.registered_count! >= webinar.max_participants}
                  >
                    Register
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
