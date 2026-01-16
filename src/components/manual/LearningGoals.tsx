import React, { memo, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Target, 
  Plus, 
  Trophy, 
  BookOpen, 
  TrendingUp, 
  Flame, 
  Clock,
  CheckCircle2,
  Trash2,
  Calendar
} from 'lucide-react';
import { useLearningGoals, LearningGoal } from '@/hooks/useLearningGoals';
import { format, differenceInDays } from 'date-fns';
import { ro } from 'date-fns/locale';

const goalTypeConfig = {
  chapters: { icon: BookOpen, label: 'Capitole completate', unit: 'capitole', color: 'text-blue-500' },
  score: { icon: TrendingUp, label: 'Scor mediu', unit: '%', color: 'text-green-500' },
  time: { icon: Clock, label: 'Timp de studiu', unit: 'ore', color: 'text-purple-500' },
  streak: { icon: Flame, label: 'Zile consecutive', unit: 'zile', color: 'text-orange-500' },
  custom: { icon: Target, label: 'Obiectiv custom', unit: '', color: 'text-primary' },
};

export const LearningGoals = memo(function LearningGoals() {
  const { goals, loading, createGoal, deleteGoal, activeGoals, completedGoals } = useLearningGoals();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    goal_type: 'chapters' as LearningGoal['goal_type'],
    target_value: 10,
    target_date: '',
  });

  const handleCreateGoal = async () => {
    if (!newGoal.title.trim()) return;
    
    await createGoal({
      title: newGoal.title,
      description: newGoal.description || null,
      goal_type: newGoal.goal_type,
      target_value: newGoal.target_value,
      target_date: newGoal.target_date || null,
    });
    
    setNewGoal({
      title: '',
      description: '',
      goal_type: 'chapters',
      target_value: 10,
      target_date: '',
    });
    setIsDialogOpen(false);
  };

  const getProgressPercentage = (goal: LearningGoal) => {
    return Math.min(100, Math.round((goal.current_value / goal.target_value) * 100));
  };

  const getDaysRemaining = (targetDate: string | null) => {
    if (!targetDate) return null;
    const days = differenceInDays(new Date(targetDate), new Date());
    return days;
  };

  if (loading) {
    return (
      <Card className="border-primary/20">
        <CardContent className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Obiectivele Mele</CardTitle>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Obiectiv nou
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Creează un obiectiv nou</DialogTitle>
                <DialogDescription>
                  Stabilește-ți un obiectiv de învățare pentru a-ți urmări progresul
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Titlu obiectiv</Label>
                  <Input
                    id="title"
                    placeholder="ex: Finalizează modulul ADR"
                    value={newGoal.title}
                    onChange={(e) => setNewGoal(prev => ({ ...prev, title: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Tip obiectiv</Label>
                  <Select
                    value={newGoal.goal_type}
                    onValueChange={(value) => setNewGoal(prev => ({ ...prev, goal_type: value as LearningGoal['goal_type'] }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(goalTypeConfig).map(([key, config]) => (
                        <SelectItem key={key} value={key}>
                          <div className="flex items-center gap-2">
                            <config.icon className={`h-4 w-4 ${config.color}`} />
                            {config.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target">Țintă ({goalTypeConfig[newGoal.goal_type].unit})</Label>
                  <Input
                    id="target"
                    type="number"
                    min={1}
                    value={newGoal.target_value}
                    onChange={(e) => setNewGoal(prev => ({ ...prev, target_value: parseInt(e.target.value) || 1 }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Termen limită (opțional)</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newGoal.target_date}
                    onChange={(e) => setNewGoal(prev => ({ ...prev, target_date: e.target.value }))}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Anulează
                </Button>
                <Button onClick={handleCreateGoal} disabled={!newGoal.title.trim()}>
                  Creează obiectiv
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <CardDescription>
          Urmărește-ți progresul spre obiectivele tale de învățare
        </CardDescription>
      </CardHeader>
      <CardContent>
        {goals.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Target className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p className="font-medium">Nu ai niciun obiectiv setat</p>
            <p className="text-sm">Creează primul tău obiectiv pentru a-ți urmări progresul!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Active Goals */}
            {activeGoals.length > 0 && (
              <div>
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  Obiective active ({activeGoals.length})
                </h4>
                <ScrollArea className="h-[200px]">
                  <div className="space-y-3 pr-4">
                    {activeGoals.map((goal) => {
                      const config = goalTypeConfig[goal.goal_type];
                      const progress = getProgressPercentage(goal);
                      const daysRemaining = getDaysRemaining(goal.target_date);
                      
                      return (
                        <div
                          key={goal.id}
                          className="bg-muted/50 rounded-lg p-4 border"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3 flex-1">
                              <div className={`p-2 rounded-lg bg-background ${config.color}`}>
                                <config.icon className="h-4 w-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h5 className="font-medium text-sm truncate">{goal.title}</h5>
                                  {daysRemaining !== null && (
                                    <Badge variant={daysRemaining < 3 ? 'destructive' : 'secondary'} className="text-xs">
                                      <Calendar className="h-3 w-3 mr-1" />
                                      {daysRemaining > 0 ? `${daysRemaining} zile` : 'Astăzi'}
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                                  <span>{goal.current_value} / {goal.target_value} {config.unit}</span>
                                  <span>•</span>
                                  <span>{progress}% completat</span>
                                </div>
                                <Progress value={progress} className="h-2" />
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-muted-foreground hover:text-destructive"
                              onClick={() => deleteGoal(goal.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </div>
            )}

            {/* Completed Goals */}
            {completedGoals.length > 0 && (
              <div>
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  Obiective atinse ({completedGoals.length})
                </h4>
                <div className="space-y-2">
                  {completedGoals.slice(0, 3).map((goal) => {
                    const config = goalTypeConfig[goal.goal_type];
                    
                    return (
                      <div
                        key={goal.id}
                        className="bg-green-500/10 border border-green-200 rounded-lg p-3 flex items-center gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{goal.title}</p>
                          <p className="text-xs text-muted-foreground">
                            Completat {goal.completed_at ? format(new Date(goal.completed_at), 'd MMM yyyy', { locale: ro }) : ''}
                          </p>
                        </div>
                        <Badge variant="secondary" className="shrink-0">
                          {goal.target_value} {config.unit}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
});
