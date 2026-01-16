import { useEffect } from 'react';
import { useMLPredictions } from '@/hooks/useMLPredictions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Calendar, 
  AlertTriangle, 
  BookOpen, 
  Clock,
  RefreshCw,
  TrendingUp
} from 'lucide-react';
import { format } from 'date-fns';

export function MLInsights() {
  const { predictions, loading, generatePredictions } = useMLPredictions();

  useEffect(() => {
    // Generate predictions if none exist
    if (!loading && Object.keys(predictions).length === 0) {
      generatePredictions();
    }
  }, [loading, predictions, generatePredictions]);

  if (loading) {
    return (
      <Card className="animate-pulse">
        <CardHeader>
          <div className="h-6 bg-muted rounded w-1/3" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-20 bg-muted rounded" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            AI Insights
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={generatePredictions}>
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Completion Prediction */}
        {predictions.completion_date && (
          <div className="p-4 rounded-lg bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Estimated Completion</h4>
              <Badge variant="outline" className="ml-auto">
                {Math.round(predictions.completion_date.confidence * 100)}% confidence
              </Badge>
            </div>
            <p className="text-2xl font-bold text-primary">
              {format(new Date(predictions.completion_date.estimated_date), 'MMM d, yyyy')}
            </p>
            <p className="text-sm text-muted-foreground">
              ~{predictions.completion_date.days_remaining} days remaining at current pace
            </p>
          </div>
        )}

        {/* At Risk Assessment */}
        {predictions.at_risk && (
          <div className={`p-4 rounded-lg ${
            predictions.at_risk.is_at_risk 
              ? 'bg-destructive/10 border border-destructive/20' 
              : 'bg-green-500/10 border border-green-500/20'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              {predictions.at_risk.is_at_risk ? (
                <AlertTriangle className="h-4 w-4 text-destructive" />
              ) : (
                <TrendingUp className="h-4 w-4 text-green-500" />
              )}
              <h4 className="font-medium">
                {predictions.at_risk.is_at_risk ? 'Attention Needed' : 'On Track'}
              </h4>
            </div>
            
            {predictions.at_risk.is_at_risk && predictions.at_risk.risk_factors.length > 0 && (
              <div className="space-y-1 mb-3">
                <p className="text-sm font-medium">Risk factors:</p>
                <ul className="text-sm text-muted-foreground list-disc list-inside">
                  {predictions.at_risk.risk_factors.map((factor, i) => (
                    <li key={i}>{factor}</li>
                  ))}
                </ul>
              </div>
            )}

            {predictions.at_risk.recommended_actions.length > 0 && (
              <div className="space-y-1">
                <p className="text-sm font-medium">Recommendations:</p>
                <ul className="text-sm text-muted-foreground list-disc list-inside">
                  {predictions.at_risk.recommended_actions.map((action, i) => (
                    <li key={i}>{action}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Optimal Study Time */}
        {predictions.optimal_time && (
          <div className="p-4 rounded-lg bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Best Study Times</h4>
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-muted-foreground">Best hours:</p>
                <div className="flex gap-1 flex-wrap mt-1">
                  {predictions.optimal_time.best_hours.map(hour => (
                    <Badge key={hour} variant="secondary">
                      {hour}:00
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Best days:</p>
                <div className="flex gap-1 flex-wrap mt-1">
                  {predictions.optimal_time.best_days.map(day => (
                    <Badge key={day} variant="outline">
                      {day}
                    </Badge>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Recommended session: {predictions.optimal_time.avg_session_length} minutes
              </p>
            </div>
          </div>
        )}

        {/* Recommended Chapters */}
        {predictions.recommended_chapters && predictions.recommended_chapters.chapters.length > 0 && (
          <div className="p-4 rounded-lg bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Recommended Next</h4>
            </div>
            <ul className="space-y-2">
              {predictions.recommended_chapters.chapters.slice(0, 3).map((chapter, i) => (
                <li key={chapter.id} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-medium">
                    {i + 1}
                  </span>
                  <span className="text-sm">{chapter.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {Object.keys(predictions).length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Brain className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>Generating personalized insights...</p>
            <Button variant="outline" size="sm" className="mt-2" onClick={generatePredictions}>
              Generate Now
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
