import { useState } from 'react';
import { useMentorship, MentorProfile } from '@/hooks/useMentorship';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Users, Star, Clock, UserPlus, BookOpen } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

export function MentorDirectory() {
  const { mentors, myMentorships, myMentorProfile, loading, requestMentor, becomeMentor } = useMentorship();
  const { user } = useAuth();
  const [showBecomeModal, setShowBecomeModal] = useState(false);
  const [newMentorData, setNewMentorData] = useState({
    bio: '',
    expertise: '',
    availability: 5,
    maxMentees: 3
  });

  const handleRequestMentor = async (mentorId: string) => {
    if (!user) {
      toast.error('Please log in to request a mentor');
      return;
    }
    const success = await requestMentor(mentorId);
    if (success) {
      toast.success('Mentor request sent!');
    } else {
      toast.error('Failed to send request');
    }
  };

  const handleBecomeMentor = async () => {
    const success = await becomeMentor({
      bio: newMentorData.bio,
      expertise_areas: newMentorData.expertise.split(',').map(s => s.trim()).filter(Boolean),
      availability_hours: newMentorData.availability,
      max_mentees: newMentorData.maxMentees
    });

    if (success) {
      toast.success('You are now a mentor!');
      setShowBecomeModal(false);
    } else {
      toast.error('Failed to create mentor profile');
    }
  };

  const hasPendingRequest = (mentorId: string) => {
    return myMentorships.some(m => m.mentor_id === mentorId && m.status === 'pending');
  };

  const hasActiveMentorship = (mentorId: string) => {
    return myMentorships.some(m => m.mentor_id === mentorId && m.status === 'active');
  };

  if (loading) {
    return (
      <Card className="animate-pulse">
        <CardHeader>
          <div className="h-6 bg-muted rounded w-1/3" />
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-32 bg-muted rounded" />
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
            <Users className="h-5 w-5" />
            Mentor Directory
          </CardTitle>
          {user && !myMentorProfile && (
            <Dialog open={showBecomeModal} onOpenChange={setShowBecomeModal}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Become a Mentor
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Become a Mentor</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label>Bio</Label>
                    <Textarea
                      placeholder="Tell mentees about your experience..."
                      value={newMentorData.bio}
                      onChange={e => setNewMentorData(prev => ({ ...prev, bio: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Areas of Expertise (comma separated)</Label>
                    <Input
                      placeholder="e.g., Customs, ADR, Pricing"
                      value={newMentorData.expertise}
                      onChange={e => setNewMentorData(prev => ({ ...prev, expertise: e.target.value }))}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Hours/week available</Label>
                      <Input
                        type="number"
                        min={1}
                        max={40}
                        value={newMentorData.availability}
                        onChange={e => setNewMentorData(prev => ({ ...prev, availability: parseInt(e.target.value) || 5 }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Max mentees</Label>
                      <Input
                        type="number"
                        min={1}
                        max={10}
                        value={newMentorData.maxMentees}
                        onChange={e => setNewMentorData(prev => ({ ...prev, maxMentees: parseInt(e.target.value) || 3 }))}
                      />
                    </div>
                  </div>
                  <Button onClick={handleBecomeMentor} className="w-full">
                    Create Mentor Profile
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {mentors.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">
            No mentors available yet. Be the first!
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {mentors.map(mentor => (
              <MentorCard
                key={mentor.id}
                mentor={mentor}
                onRequest={() => handleRequestMentor(mentor.id)}
                isPending={hasPendingRequest(mentor.id)}
                isActive={hasActiveMentorship(mentor.id)}
                isOwnProfile={mentor.user_id === user?.id}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface MentorCardProps {
  mentor: MentorProfile;
  onRequest: () => void;
  isPending: boolean;
  isActive: boolean;
  isOwnProfile: boolean;
}

function MentorCard({ mentor, onRequest, isPending, isActive, isOwnProfile }: MentorCardProps) {
  const isFull = (mentor.current_mentees || 0) >= mentor.max_mentees;

  return (
    <div className="p-4 rounded-lg border bg-card">
      <div className="flex items-start gap-3">
        <Avatar className="h-12 w-12">
          <AvatarFallback>
            {mentor.mentor_name?.slice(0, 2).toUpperCase() || 'M'}
          </AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{mentor.mentor_name || 'Mentor'}</h3>
            {mentor.rating > 0 && (
              <span className="flex items-center gap-1 text-sm text-warning">
                <Star className="h-3 w-3 fill-current" />
                {mentor.rating.toFixed(1)}
              </span>
            )}
          </div>
          {mentor.bio && (
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {mentor.bio}
            </p>
          )}
          <div className="flex flex-wrap gap-1 mt-2">
            {mentor.expertise_areas.slice(0, 3).map(area => (
              <Badge key={area} variant="secondary" className="text-xs">
                {area}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {mentor.availability_hours}h/week
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              {mentor.total_sessions} sessions
            </span>
            <span>
              {mentor.current_mentees}/{mentor.max_mentees} mentees
            </span>
          </div>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t">
        {isOwnProfile ? (
          <Badge variant="outline">Your Profile</Badge>
        ) : isActive ? (
          <Badge className="bg-success text-success-foreground">Active Mentorship</Badge>
        ) : isPending ? (
          <Badge variant="secondary">Request Pending</Badge>
        ) : (
          <Button 
            size="sm" 
            onClick={onRequest}
            disabled={isFull}
            className="w-full"
          >
            {isFull ? 'Mentor is Full' : 'Request Mentorship'}
          </Button>
        )}
      </div>
    </div>
  );
}
