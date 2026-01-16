import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';
import { 
  CheckCircle, 
  XCircle, 
  Shield, 
  Zap, 
  Activity, 
  Database,
  FileText,
  AlertTriangle
} from 'lucide-react';

const categoryIcons: Record<string, any> = {
  security: Shield,
  performance: Zap,
  monitoring: Activity,
  backup: Database,
  documentation: FileText
};

const categoryColors: Record<string, string> = {
  security: 'text-red-400',
  performance: 'text-blue-400',
  monitoring: 'text-green-400',
  backup: 'text-purple-400',
  documentation: 'text-yellow-400'
};

export function ProductionChecklist() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [notes, setNotes] = useState<Record<string, string>>({});

  // Fetch checklist items
  const { data: checklistItems } = useQuery({
    queryKey: ['production-checklist'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('production_checklist')
        .select('*')
        .order('category', { ascending: true })
        .order('is_required', { ascending: false });
      if (error) throw error;
      return data;
    }
  });

  // Toggle item completion
  const toggleItem = useMutation({
    mutationFn: async ({ itemId, isCompleted }: { itemId: string; isCompleted: boolean }) => {
      const { error } = await supabase
        .from('production_checklist')
        .update({
          is_completed: isCompleted,
          completed_at: isCompleted ? new Date().toISOString() : null,
          completed_by: isCompleted ? user?.id : null,
          notes: notes[itemId] || null
        })
        .eq('id', itemId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['production-checklist'] });
    }
  });

  // Group items by category
  const groupedItems = checklistItems?.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof checklistItems>);

  // Calculate progress
  const totalItems = checklistItems?.length || 0;
  const completedItems = checklistItems?.filter(i => i.is_completed).length || 0;
  const requiredItems = checklistItems?.filter(i => i.is_required).length || 0;
  const completedRequired = checklistItems?.filter(i => i.is_required && i.is_completed).length || 0;
  const overallProgress = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
  const requiredProgress = requiredItems > 0 ? (completedRequired / requiredItems) * 100 : 0;

  // Check if production ready
  const isProductionReady = requiredProgress === 100;

  const getCategoryProgress = (category: string) => {
    const items = groupedItems?.[category] || [];
    const completed = items.filter(i => i.is_completed).length;
    return items.length > 0 ? (completed / items.length) * 100 : 0;
  };

  return (
    <div className="space-y-6">
      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className={`${isProductionReady ? 'bg-green-500/10 border-green-500/30' : 'bg-yellow-500/10 border-yellow-500/30'}`}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Production Status</p>
                <p className={`text-xl font-bold ${isProductionReady ? 'text-green-400' : 'text-yellow-400'}`}>
                  {isProductionReady ? 'READY' : 'NOT READY'}
                </p>
              </div>
              {isProductionReady ? (
                <CheckCircle className="h-10 w-10 text-green-400" />
              ) : (
                <AlertTriangle className="h-10 w-10 text-yellow-400" />
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-2">Overall Progress</p>
            <div className="flex items-center gap-3">
              <Progress value={overallProgress} className="flex-1 h-3" />
              <span className="font-bold">{Math.round(overallProgress)}%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {completedItems} of {totalItems} items completed
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-2">Required Items</p>
            <div className="flex items-center gap-3">
              <Progress 
                value={requiredProgress} 
                className={`flex-1 h-3 ${requiredProgress === 100 ? '[&>div]:bg-green-500' : '[&>div]:bg-red-500'}`} 
              />
              <span className="font-bold">{Math.round(requiredProgress)}%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {completedRequired} of {requiredItems} required items
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Category Progress */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.keys(groupedItems || {}).map((category) => {
          const Icon = categoryIcons[category] || FileText;
          const progress = getCategoryProgress(category);
          return (
            <Card key={category} className="bg-card/50 border-border/50">
              <CardContent className="pt-4 text-center">
                <Icon className={`h-6 w-6 mx-auto mb-2 ${categoryColors[category]}`} />
                <p className="text-xs font-medium capitalize mb-2">{category}</p>
                <Progress value={progress} className="h-1" />
                <p className="text-xs text-muted-foreground mt-1">{Math.round(progress)}%</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Checklist */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle>Production Readiness Checklist</CardTitle>
          <CardDescription>Complete all required items before deploying to production</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="space-y-2">
            {Object.entries(groupedItems || {}).map(([category, items]) => {
              const Icon = categoryIcons[category] || FileText;
              const progress = getCategoryProgress(category);
              const completedCount = items?.filter(i => i.is_completed).length || 0;
              
              return (
                <AccordionItem key={category} value={category} className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3 flex-1">
                      <Icon className={`h-5 w-5 ${categoryColors[category]}`} />
                      <span className="capitalize font-medium">{category}</span>
                      <Badge variant="outline" className="ml-auto mr-4">
                        {completedCount}/{items?.length}
                      </Badge>
                      <Progress value={progress} className="w-24 h-2" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ScrollArea className="max-h-[400px]">
                      <div className="space-y-3 py-2">
                        {items?.map((item: any) => (
                          <div 
                            key={item.id} 
                            className={`p-4 rounded-lg border ${
                              item.is_completed 
                                ? 'bg-green-500/5 border-green-500/20' 
                                : item.is_required 
                                  ? 'bg-red-500/5 border-red-500/20' 
                                  : 'bg-background/50 border-border/50'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <Checkbox
                                checked={item.is_completed}
                                onCheckedChange={(checked) => {
                                  toggleItem.mutate({ 
                                    itemId: item.id, 
                                    isCompleted: checked as boolean 
                                  });
                                }}
                                className="mt-1"
                              />
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className={`font-medium ${item.is_completed ? 'line-through text-muted-foreground' : ''}`}>
                                    {item.item_name}
                                  </span>
                                  {item.is_required && (
                                    <Badge variant="destructive" className="text-xs">Required</Badge>
                                  )}
                                  {item.is_completed && (
                                    <CheckCircle className="h-4 w-4 text-green-400" />
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                                
                                {!item.is_completed && (
                                  <div className="mt-2">
                                    <Textarea
                                      placeholder="Add notes or evidence..."
                                      value={notes[item.id] || ''}
                                      onChange={(e) => setNotes({ ...notes, [item.id]: e.target.value })}
                                      className="h-20 text-sm"
                                    />
                                  </div>
                                )}
                                
                                {item.is_completed && item.completed_at && (
                                  <p className="text-xs text-muted-foreground mt-2">
                                    Completed: {new Date(item.completed_at).toLocaleString()}
                                  </p>
                                )}
                                
                                {item.notes && (
                                  <p className="text-xs bg-muted/50 p-2 rounded mt-2">
                                    {item.notes}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardContent>
      </Card>

      {/* Final Status */}
      <Card className={`${isProductionReady ? 'bg-green-500/10 border-green-500/30' : 'bg-yellow-500/10 border-yellow-500/30'}`}>
        <CardContent className="py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {isProductionReady ? (
                <CheckCircle className="h-12 w-12 text-green-400" />
              ) : (
                <AlertTriangle className="h-12 w-12 text-yellow-400" />
              )}
              <div>
                <h3 className={`text-xl font-bold ${isProductionReady ? 'text-green-400' : 'text-yellow-400'}`}>
                  {isProductionReady ? 'System is Production Ready!' : 'Complete Required Items'}
                </h3>
                <p className="text-muted-foreground">
                  {isProductionReady 
                    ? 'All required checks have passed. The system is ready for enterprise deployment.'
                    : `${requiredItems - completedRequired} required items remaining before production deployment.`}
                </p>
              </div>
            </div>
            {isProductionReady && (
              <Badge className="bg-green-500 text-white text-lg px-4 py-2">
                ✓ VALIDATED
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
