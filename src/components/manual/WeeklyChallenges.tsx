import { useWeeklyChallenges } from '@/hooks/useWeeklyChallenges';
import { useSocialShare } from '@/hooks/useSocialShare';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Users, Calendar, Share2, Linkedin, Twitter } from 'lucide-react';
import { format, differenceInDays } from 'date-fns';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function WeeklyChallenges() {
  const { challenges, loading, joinChallenge, getChallengeTypeLabel } = useWeeklyChallenges();
  const { shareChallengeCompletion } = useSocialShare();
  const { user } = useAuth();

  const handleJoin = async (challengeId: string) => {
    if (!user) {
      toast.error('Please log in to join challenges');
      return;
    }
    const success = await joinChallenge(challengeId);
    if (success) {
      toast.success('Joined the challenge!');
    } else {
      toast.error('Failed to join');
    }
  };

  const handleShare = (challenge: typeof challenges[0]) => {
    const shareActions = shareChallengeCompletion(challenge.id, challenge.title);
    return shareActions;
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

  if (challenges.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Weekly Challenges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            No active challenges this week
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5" />
          Weekly Challenges
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {challenges.map(challenge => {
          const daysLeft = differenceInDays(new Date(challenge.end_date), new Date());
          const progressPercent = challenge.is_joined 
            ? Math.min(100, (challenge.my_progress! / challenge.target_value) * 100)
            : 0;

          return (
            <div
              key={challenge.id}
              className={`p-4 rounded-lg border ${
                challenge.is_completed ? 'bg-success/10 border-success/30' : 'bg-card'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{challenge.title}</h3>
                    {challenge.is_completed && (
                      <Badge className="bg-green-500">Completed!</Badge>
                    )}
                  </div>
                  {challenge.description && (
                    <p className="text-sm text-muted-foreground mb-2">
                      {challenge.description}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                    <Badge variant="outline">
                      {getChallengeTypeLabel(challenge.challenge_type)}
                    </Badge>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {daysLeft > 0 ? `${daysLeft} days left` : 'Ends today'}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {challenge.participants_count} participants
                    </span>
                    <span className="text-primary font-medium">
                      +{challenge.xp_reward} XP
                    </span>
                  </div>

                  {challenge.is_joined && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">
                          {challenge.my_progress} / {challenge.target_value}
                        </span>
                      </div>
                      <Progress value={progressPercent} className="h-2" />
                    </div>
                  )}
                </div>

                <div className="flex-shrink-0 flex flex-col gap-2">
                  {challenge.is_completed ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => handleShare(challenge).shareOnLinkedIn()}>
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleShare(challenge).shareOnTwitter()}>
                          <Twitter className="h-4 w-4 mr-2" />
                          Twitter
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : challenge.is_joined ? (
                    <Badge variant="secondary">Joined</Badge>
                  ) : (
                    <Button size="sm" onClick={() => handleJoin(challenge.id)}>
                      Join Challenge
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
