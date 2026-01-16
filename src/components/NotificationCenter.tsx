import React from 'react';
import { Bell, Check, CheckCheck, Trash2, Trophy, Info, AlertTriangle, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useNotifications, UserNotification } from '@/hooks/useNotifications';
import { useLanguage } from '@/contexts/LanguageContext';
import { formatDistanceToNow } from 'date-fns';
import { ro, de, enUS } from 'date-fns/locale';

const translations = {
  ro: {
    notifications: 'Notificări',
    noNotifications: 'Nu ai notificări',
    markAllRead: 'Marchează toate ca citite',
    clearAll: 'Șterge toate',
    justNow: 'acum'
  },
  de: {
    notifications: 'Benachrichtigungen',
    noNotifications: 'Keine Benachrichtigungen',
    markAllRead: 'Alle als gelesen markieren',
    clearAll: 'Alle löschen',
    justNow: 'jetzt'
  },
  en: {
    notifications: 'Notifications',
    noNotifications: 'No notifications',
    markAllRead: 'Mark all as read',
    clearAll: 'Clear all',
    justNow: 'just now'
  }
};

const getLocale = (lang: string) => {
  switch (lang) {
    case 'ro': return ro;
    case 'de': return de;
    default: return enUS;
  }
};

const getTypeIcon = (type: UserNotification['type']) => {
  switch (type) {
    case 'achievement': return Trophy;
    case 'success': return Star;
    case 'warning': return AlertTriangle;
    case 'reminder': return Clock;
    default: return Info;
  }
};

const getTypeColor = (type: UserNotification['type']) => {
  switch (type) {
    case 'achievement': return 'text-amber-400';
    case 'success': return 'text-green-400';
    case 'warning': return 'text-orange-400';
    case 'reminder': return 'text-blue-400';
    default: return 'text-muted-foreground';
  }
};

const NotificationCenter: React.FC = () => {
  const { language } = useLanguage();
  const { notifications, unreadCount, loading, markAsRead, markAllAsRead, deleteNotification, clearAll } = useNotifications();
  const t = translations[language as keyof typeof translations] || translations.en;
  const locale = getLocale(language);

  const formatTime = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return formatDistanceToNow(date, { addSuffix: true, locale });
    } catch {
      return t.justNow;
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs"
            >
              {unreadCount > 9 ? '9+' : unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between p-3 border-b border-border">
          <h4 className="font-semibold">{t.notifications}</h4>
          {notifications.length > 0 && (
            <div className="flex gap-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7"
                onClick={markAllAsRead}
                title={t.markAllRead}
              >
                <CheckCheck className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 text-destructive"
                onClick={clearAll}
                title={t.clearAll}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
        
        <ScrollArea className="h-80">
          {loading ? (
            <div className="flex items-center justify-center h-20">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary" />
            </div>
          ) : notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-32 text-muted-foreground">
              <Bell className="h-8 w-8 mb-2 opacity-50" />
              <p className="text-sm">{t.noNotifications}</p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {notifications.map((notification) => {
                const Icon = getTypeIcon(notification.type);
                const iconColor = getTypeColor(notification.type);
                
                return (
                  <div 
                    key={notification.id}
                    className={`p-3 hover:bg-muted/50 transition-colors cursor-pointer ${
                      !notification.is_read ? 'bg-primary/5' : ''
                    }`}
                    onClick={() => !notification.is_read && markAsRead(notification.id)}
                  >
                    <div className="flex gap-3">
                      <div className={`mt-0.5 ${iconColor}`}>
                        {notification.icon ? (
                          <span className="text-lg">{notification.icon}</span>
                        ) : (
                          <Icon className="h-5 w-5" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <p className={`text-sm font-medium ${!notification.is_read ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {notification.title}
                          </p>
                          <div className="flex items-center gap-1 shrink-0">
                            {!notification.is_read && (
                              <div className="h-2 w-2 rounded-full bg-primary" />
                            )}
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 opacity-0 group-hover:opacity-100 hover:opacity-100"
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteNotification(notification.id);
                              }}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground/70 mt-1">
                          {formatTime(notification.created_at)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationCenter;
