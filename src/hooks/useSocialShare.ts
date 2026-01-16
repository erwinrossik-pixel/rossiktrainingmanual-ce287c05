import { useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from 'sonner';

type ShareType = 'certificate' | 'achievement' | 'milestone' | 'challenge';
type Platform = 'linkedin' | 'twitter' | 'facebook';

interface ShareContent {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

export function useSocialShare() {
  const { user } = useAuth();

  const generateShareUrl = useCallback((platform: Platform, content: ShareContent): string => {
    const encodedTitle = encodeURIComponent(content.title);
    const encodedDesc = encodeURIComponent(content.description);
    const pageUrl = content.url || window.location.origin;
    const encodedUrl = encodeURIComponent(pageUrl);

    switch (platform) {
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDesc}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?text=${encodedTitle}%20${encodedDesc}&url=${encodedUrl}`;
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`;
      default:
        return '';
    }
  }, []);

  const share = useCallback(async (
    shareType: ShareType,
    contentId: string,
    platform: Platform,
    content: ShareContent
  ) => {
    const shareUrl = generateShareUrl(platform, content);
    
    // Open share window
    window.open(shareUrl, '_blank', 'width=600,height=400');

    // Log the share
    if (user) {
      try {
        await supabase
          .from('social_shares')
          .insert({
            user_id: user.id,
            share_type: shareType,
            content_id: contentId,
            platform,
            share_url: shareUrl
          });
      } catch (error) {
        console.error('Error logging share:', error);
      }
    }

    toast.success(`Shared on ${platform.charAt(0).toUpperCase() + platform.slice(1)}!`);
  }, [user, generateShareUrl]);

  const shareCertificate = useCallback((certificateCode: string, traineeName: string) => {
    const content: ShareContent = {
      title: '🎓 Certificate Earned!',
      description: `${traineeName} has completed the Freight Forwarding Training Program!`,
      url: `${window.location.origin}/verify/${certificateCode}`
    };

    return {
      shareOnLinkedIn: () => share('certificate', certificateCode, 'linkedin', content),
      shareOnTwitter: () => share('certificate', certificateCode, 'twitter', content),
      shareOnFacebook: () => share('certificate', certificateCode, 'facebook', content)
    };
  }, [share]);

  const shareAchievement = useCallback((achievementId: string, achievementName: string) => {
    const content: ShareContent = {
      title: `🏆 Achievement Unlocked: ${achievementName}!`,
      description: `I just earned the "${achievementName}" achievement in my training journey!`
    };

    return {
      shareOnLinkedIn: () => share('achievement', achievementId, 'linkedin', content),
      shareOnTwitter: () => share('achievement', achievementId, 'twitter', content),
      shareOnFacebook: () => share('achievement', achievementId, 'facebook', content)
    };
  }, [share]);

  const shareMilestone = useCallback((milestone: string, details: string) => {
    const content: ShareContent = {
      title: `🎯 ${milestone}`,
      description: details
    };

    return {
      shareOnLinkedIn: () => share('milestone', milestone, 'linkedin', content),
      shareOnTwitter: () => share('milestone', milestone, 'twitter', content),
      shareOnFacebook: () => share('milestone', milestone, 'facebook', content)
    };
  }, [share]);

  const shareChallengeCompletion = useCallback((challengeId: string, challengeName: string) => {
    const content: ShareContent = {
      title: `🏅 Challenge Completed: ${challengeName}!`,
      description: `I successfully completed the weekly challenge "${challengeName}"!`
    };

    return {
      shareOnLinkedIn: () => share('challenge', challengeId, 'linkedin', content),
      shareOnTwitter: () => share('challenge', challengeId, 'twitter', content),
      shareOnFacebook: () => share('challenge', challengeId, 'facebook', content)
    };
  }, [share]);

  return {
    share,
    shareCertificate,
    shareAchievement,
    shareMilestone,
    shareChallengeCompletion
  };
}
