import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ArrowLeft, Bell, BellOff, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import NotificationCenter from '@/components/NotificationCenter';

interface AdminHeaderProps {
  notificationsEnabled: boolean;
  onToggleNotifications: () => void;
  onExportCSV: () => void;
}

export const AdminHeader = memo(function AdminHeader({ 
  notificationsEnabled, 
  onToggleNotifications, 
  onExportCSV 
}: AdminHeaderProps) {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="admin-header text-white">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => navigate('/')}
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-black tracking-tight">{t('admin.title')}</h1>
            <p className="text-white/80 font-medium">{t('admin.subtitle')}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white/10 rounded-lg p-1">
            <NotificationCenter />
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={onToggleNotifications}
                  className={`${notificationsEnabled 
                    ? 'bg-emerald-500 border-emerald-400 text-white hover:bg-emerald-600' 
                    : 'bg-white/10 border-white/30 text-white hover:bg-white/20'
                  }`}
                >
                  {notificationsEnabled ? (
                    <Bell className="h-4 w-4" />
                  ) : (
                    <BellOff className="h-4 w-4" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {notificationsEnabled 
                  ? t('admin.notificationsActive')
                  : t('admin.enableNotifications')}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button 
            onClick={onExportCSV}
            className="bg-white text-slate-800 hover:bg-white/90 font-bold shadow-lg"
          >
            <Download className="h-4 w-4 mr-2" />
            {t('admin.exportCSV')}
          </Button>
        </div>
      </div>
    </div>
  );
});
