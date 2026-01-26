import { useState, memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  MessageCircle, 
  Heart, 
  Reply, 
  Pin, 
  CheckCircle, 
  Trash2,
  Send,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useDiscussions, Discussion } from '@/hooks/useDiscussions';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { formatDistanceToNow } from 'date-fns';
import { ro, de, enUS } from 'date-fns/locale';

interface ChapterDiscussionsProps {
  chapterId: string;
}

const DiscussionItem = memo(({ 
  discussion, 
  onLike, 
  onReply, 
  onDelete,
  currentUserId,
  isReply = false
}: {
  discussion: Discussion;
  onLike: (id: string) => void;
  onReply: (id: string) => void;
  onDelete: (id: string) => void;
  currentUserId?: string;
  isReply?: boolean;
}) => {
  const [showReplies, setShowReplies] = useState(true);
  const isOwner = currentUserId === discussion.user_id;

  return (
    <div className={`${isReply ? 'ml-8 border-l-2 border-muted pl-4' : ''}`}>
      <div className="flex gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
        <Avatar className="h-8 w-8">
          <AvatarImage src={discussion.profile?.avatar_url || undefined} />
          <AvatarFallback className="text-xs">
            {discussion.profile?.first_name?.[0] || '?'}
            {discussion.profile?.last_name?.[0] || ''}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium text-sm">
              {discussion.profile?.first_name || 'User'} {discussion.profile?.last_name || ''}
            </span>
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(discussion.created_at), { 
                addSuffix: true, 
                locale: ro 
              })}
            </span>
            {discussion.is_pinned && (
              <Badge variant="secondary" className="text-xs">
                <Pin className="h-3 w-3 mr-1" /> Fixat
              </Badge>
            )}
            {discussion.is_resolved && (
              <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                <CheckCircle className="h-3 w-3 mr-1" /> Rezolvat
              </Badge>
            )}
          </div>
          
          <p className="text-sm mt-1 text-foreground whitespace-pre-wrap">
            {discussion.content}
          </p>
          
          <div className="flex items-center gap-3 mt-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`h-7 px-2 ${discussion.user_liked ? 'text-red-500' : ''}`}
              onClick={() => onLike(discussion.id)}
            >
              <Heart className={`h-3.5 w-3.5 mr-1 ${discussion.user_liked ? 'fill-red-500' : ''}`} />
              {discussion.likes_count || 0}
            </Button>
            
            {!isReply && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-7 px-2"
                onClick={() => onReply(discussion.id)}
              >
                <Reply className="h-3.5 w-3.5 mr-1" />
                <span className="sr-only">Reply</span>
              </Button>
            )}
            
            {isOwner && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-7 px-2 text-destructive hover:text-destructive"
                onClick={() => onDelete(discussion.id)}
              >
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Replies */}
      {discussion.replies && discussion.replies.length > 0 && (
        <div className="mt-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 text-xs mb-2"
            onClick={() => setShowReplies(!showReplies)}
          >
            {showReplies ? <ChevronUp className="h-3 w-3 mr-1" /> : <ChevronDown className="h-3 w-3 mr-1" />}
            {discussion.replies.length} răspunsuri
          </Button>
          
          {showReplies && (
            <div className="space-y-2">
              {discussion.replies.map(reply => (
                <DiscussionItem
                  key={reply.id}
                  discussion={reply}
                  onLike={onLike}
                  onReply={() => {}}
                  onDelete={onDelete}
                  currentUserId={currentUserId}
                  isReply
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

DiscussionItem.displayName = 'DiscussionItem';

export const ChapterDiscussions = memo(({ chapterId }: ChapterDiscussionsProps) => {
  const { user } = useAuth();
  const { t, language } = useLanguage();
  const { discussions, loading, addDiscussion, toggleLike, deleteDiscussion } = useDiscussions(chapterId);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const dateLocale = language === 'de' ? de : language === 'en' ? enUS : ro;

  const handleSubmit = async () => {
    if (!newComment.trim()) return;
    setIsSubmitting(true);
    await addDiscussion(newComment.trim());
    setNewComment('');
    setIsSubmitting(false);
  };

  const handleReply = async () => {
    if (!replyContent.trim() || !replyTo) return;
    setIsSubmitting(true);
    await addDiscussion(replyContent.trim(), replyTo);
    setReplyContent('');
    setReplyTo(null);
    setIsSubmitting(false);
  };

  return (
    <Card className="mt-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-primary" />
          {t('discussions.title')} ({discussions.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* New comment form */}
        {user ? (
          <div className="flex gap-3">
            <Avatar className="h-8 w-8 shrink-0">
              <AvatarFallback>
                {user.email?.[0]?.toUpperCase() || '?'}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
              <Textarea
                placeholder={t('discussions.addComment')}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-[80px] resize-none"
              />
              <Button 
                size="sm" 
                onClick={handleSubmit}
                disabled={!newComment.trim() || isSubmitting}
              >
                <Send className="h-4 w-4 mr-2" />
                {t('discussions.send')}
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-4 text-muted-foreground">
            {t('discussions.loginRequired')}
          </div>
        )}

        {/* Reply form */}
        {replyTo && (
          <div className="ml-11 p-3 bg-muted/50 rounded-lg space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{t('discussions.replyTo')}</span>
              <Button variant="ghost" size="sm" onClick={() => setReplyTo(null)}>
                {t('discussions.cancel')}
              </Button>
            </div>
            <Textarea
              placeholder={t('discussions.writePlaceholder')}
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              className="min-h-[60px] resize-none"
              autoFocus
            />
            <Button 
              size="sm" 
              onClick={handleReply}
              disabled={!replyContent.trim() || isSubmitting}
            >
              <Send className="h-4 w-4 mr-2" />
              {t('discussions.send')}
            </Button>
          </div>
        )}

        {/* Discussions list */}
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary" />
          </div>
        ) : discussions.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            {t('discussions.noDiscussions')}
          </div>
        ) : (
          <ScrollArea className="max-h-[500px]">
            <div className="space-y-3">
              {discussions.map(discussion => (
                <DiscussionItem
                  key={discussion.id}
                  discussion={discussion}
                  onLike={toggleLike}
                  onReply={(id) => setReplyTo(id)}
                  onDelete={deleteDiscussion}
                  currentUserId={user?.id}
                />
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
});

ChapterDiscussions.displayName = 'ChapterDiscussions';
