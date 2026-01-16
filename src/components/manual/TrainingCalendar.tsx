import { useState, memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  CalendarDays, 
  Plus, 
  Clock, 
  CheckCircle, 
  Trash2,
  Bell,
  Repeat,
  BookOpen
} from 'lucide-react';
import { useTrainingSessions, TrainingSession } from '@/hooks/useTrainingSessions';
import { format, isToday, isTomorrow, isPast, addDays } from 'date-fns';
import { ro } from 'date-fns/locale';

const SessionCard = memo(({ 
  session, 
  onComplete, 
  onDelete 
}: { 
  session: TrainingSession; 
  onComplete: () => void; 
  onDelete: () => void;
}) => {
  const scheduledDate = new Date(session.scheduled_at);
  const isPastSession = isPast(scheduledDate) && !session.completed;

  return (
    <div className={`p-3 rounded-lg border ${
      session.completed ? 'bg-green-50 border-green-200' :
      isPastSession ? 'bg-red-50 border-red-200' :
      isToday(scheduledDate) ? 'bg-primary/5 border-primary/30' :
      'bg-muted/30'
    }`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="font-medium text-sm truncate">{session.title}</h4>
            {session.completed && (
              <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                <CheckCircle className="h-3 w-3 mr-1" /> Finalizat
              </Badge>
            )}
            {session.recurrence && (
              <Badge variant="outline" className="text-xs">
                <Repeat className="h-3 w-3 mr-1" /> {session.recurrence}
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {format(scheduledDate, 'HH:mm')}
            </span>
            <span>{session.duration_minutes} min</span>
            {session.chapter_id && (
              <span className="flex items-center gap-1">
                <BookOpen className="h-3 w-3" />
                {session.chapter_id}
              </span>
            )}
          </div>
          
          {session.description && (
            <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
              {session.description}
            </p>
          )}
        </div>
        
        <div className="flex items-center gap-1">
          {!session.completed && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-7 w-7 p-0"
              onClick={onComplete}
            >
              <CheckCircle className="h-4 w-4 text-green-600" />
            </Button>
          )}
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-7 w-7 p-0"
            onClick={onDelete}
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      </div>
    </div>
  );
});

SessionCard.displayName = 'SessionCard';

export const TrainingCalendar = memo(() => {
  const { sessions, loading, createSession, markComplete, deleteSession, getToday, getUpcoming } = useTrainingSessions();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newSession, setNewSession] = useState({
    title: '',
    description: '',
    time: '09:00',
    duration: 60,
    recurrence: ''
  });

  const todaySessions = getToday();
  const upcomingSessions = getUpcoming().slice(0, 5);

  const handleCreateSession = async () => {
    if (!newSession.title.trim()) return;

    const [hours, minutes] = newSession.time.split(':').map(Number);
    const scheduledAt = new Date(selectedDate);
    scheduledAt.setHours(hours, minutes, 0, 0);

    await createSession({
      title: newSession.title,
      description: newSession.description || undefined,
      scheduled_at: scheduledAt,
      duration_minutes: newSession.duration,
      recurrence: newSession.recurrence || undefined
    });

    setNewSession({ title: '', description: '', time: '09:00', duration: 60, recurrence: '' });
    setIsDialogOpen(false);
  };

  const getDateLabel = (date: Date) => {
    if (isToday(date)) return 'Azi';
    if (isTomorrow(date)) return 'Mâine';
    return format(date, 'EEEE, d MMMM', { locale: ro });
  };

  // Get dates with sessions for calendar highlighting
  const sessionDates = sessions.map(s => new Date(s.scheduled_at));

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-primary" />
            Calendar Training
          </CardTitle>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Programează
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Programează sesiune de training</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4 mt-4">
                <div>
                  <label className="text-sm font-medium">Titlu</label>
                  <Input
                    placeholder="Ex: Studiu capitolul ADR"
                    value={newSession.title}
                    onChange={(e) => setNewSession(prev => ({ ...prev, title: e.target.value }))}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Descriere (opțional)</label>
                  <Textarea
                    placeholder="Detalii despre sesiune..."
                    value={newSession.description}
                    onChange={(e) => setNewSession(prev => ({ ...prev, description: e.target.value }))}
                    className="resize-none"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Dată</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <CalendarDays className="h-4 w-4 mr-2" />
                          {format(selectedDate, 'd MMM yyyy', { locale: ro })}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) => date && setSelectedDate(date)}
                          disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Ora</label>
                    <Input
                      type="time"
                      value={newSession.time}
                      onChange={(e) => setNewSession(prev => ({ ...prev, time: e.target.value }))}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Durată (minute)</label>
                    <Select 
                      value={String(newSession.duration)}
                      onValueChange={(v) => setNewSession(prev => ({ ...prev, duration: Number(v) }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 minute</SelectItem>
                        <SelectItem value="45">45 minute</SelectItem>
                        <SelectItem value="60">1 oră</SelectItem>
                        <SelectItem value="90">1.5 ore</SelectItem>
                        <SelectItem value="120">2 ore</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Repetă</label>
                    <Select 
                      value={newSession.recurrence}
                      onValueChange={(v) => setNewSession(prev => ({ ...prev, recurrence: v }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Nu repeta" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Nu repeta</SelectItem>
                        <SelectItem value="daily">Zilnic</SelectItem>
                        <SelectItem value="weekly">Săptămânal</SelectItem>
                        <SelectItem value="monthly">Lunar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button onClick={handleCreateSession} className="w-full">
                  <Bell className="h-4 w-4 mr-2" />
                  Programează
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Today's sessions */}
        {todaySessions.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Azi ({todaySessions.length})
            </h4>
            <div className="space-y-2">
              {todaySessions.map(session => (
                <SessionCard
                  key={session.id}
                  session={session}
                  onComplete={() => markComplete(session.id)}
                  onDelete={() => deleteSession(session.id)}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Upcoming sessions */}
        {upcomingSessions.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              Următoarele sesiuni
            </h4>
            <ScrollArea className="max-h-[300px]">
              <div className="space-y-2">
                {upcomingSessions.map(session => (
                  <div key={session.id}>
                    <span className="text-xs text-muted-foreground">
                      {getDateLabel(new Date(session.scheduled_at))}
                    </span>
                    <SessionCard
                      session={session}
                      onComplete={() => markComplete(session.id)}
                      onDelete={() => deleteSession(session.id)}
                    />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}
        
        {sessions.length === 0 && !loading && (
          <div className="text-center py-8 text-muted-foreground">
            <CalendarDays className="h-12 w-12 mx-auto mb-2 opacity-30" />
            <p>Nicio sesiune programată</p>
            <p className="text-xs">Programează prima ta sesiune de training!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
});

TrainingCalendar.displayName = 'TrainingCalendar';
