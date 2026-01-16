import { useState, useEffect, useCallback, memo, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "@/components/manual/Sidebar";
import { ManualContent } from "@/components/manual/ManualContent";
import { ProgressDashboard } from "@/components/manual/ProgressDashboard";
import { ProgressProvider, useProgressContext } from "@/contexts/ProgressContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useCompany } from "@/contexts/CompanyContext";
import { useAnalytics } from "@/hooks/useAnalytics";
import { PendingApproval } from "@/components/PendingApproval";
import { TrialBanner } from "@/components/subscription";
import NotificationCenter from "@/components/NotificationCenter";
import { LearningPathAI } from "@/components/manual/LearningPathAI";
import { LearningGoals } from "@/components/manual/LearningGoals";

// Lazy load OperationalSimulation for better performance
const OperationalSimulation = lazy(() => import("@/components/manual/OperationalSimulation"));
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogIn, LogOut, Settings, User, Shield } from "lucide-react";

// Memoized UserMenu to prevent unnecessary re-renders
const UserMenu = memo(function UserMenu() {
  const navigate = useNavigate();
  const { user, profile, loading, isAdmin, signOut } = useAuth();
  const { isSuperAdmin, isCompanyAdmin, company, branding } = useCompany();

  if (loading) {
    return (
      <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
    );
  }

  if (!user) {
    return (
      <Button variant="outline" size="sm" onClick={() => navigate('/auth')}>
        <LogIn className="h-4 w-4 mr-2" />
        Autentificare
      </Button>
    );
  }

  const initials = profile?.first_name && profile?.last_name
    ? `${profile.first_name[0]}${profile.last_name[0]}`
    : user.email?.substring(0, 2).toUpperCase() || 'U';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={profile?.avatar_url || undefined} alt={profile?.first_name || 'User'} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {profile?.first_name} {profile?.last_name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {(isAdmin || isSuperAdmin || isCompanyAdmin) && (
          <DropdownMenuItem onClick={() => navigate('/admin')}>
            <Shield className="mr-2 h-4 w-4" />
            <span>Admin Dashboard</span>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={() => navigate('/profile')}>
          <User className="mr-2 h-4 w-4" />
          <span>Profil</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Deconectare</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});

function ManualApp() {
  const { isPendingApproval, company, branding } = useCompany();
  const [activeChapter, setActiveChapter] = useState("intro");
  const [showDashboard, setShowDashboard] = useState(false);
  const [showSimulations, setShowSimulations] = useState(false);
  const { visitChapter } = useProgressContext();
  const { trackChapterVisit } = useAnalytics();
  const lastTrackedChapter = useState<string>("");

  // Memoized chapter change handler
  const handleChapterChange = useCallback((chapter: string) => {
    setActiveChapter(chapter);
    setShowDashboard(false);
    setShowSimulations(false);
  }, []);

  // Memoized dashboard handlers
  const handleShowDashboard = useCallback(() => {
    setShowDashboard(true);
    setShowSimulations(false);
  }, []);
  const handleCloseDashboard = useCallback(() => setShowDashboard(false), []);

  // Memoized simulations handlers
  const handleShowSimulations = useCallback(() => {
    setShowSimulations(true);
    setShowDashboard(false);
  }, []);

  const handleNavigateFromDashboard = useCallback((chapterId: string) => {
    setActiveChapter(chapterId);
    setShowDashboard(false);
    setShowSimulations(false);
  }, []);

  // Track chapter visits - only when chapter actually changes
  useEffect(() => {
    if (!showDashboard && !showSimulations && activeChapter !== lastTrackedChapter[0]) {
      visitChapter(activeChapter);
      trackChapterVisit(activeChapter);
      lastTrackedChapter[0] = activeChapter;
    }
  }, [activeChapter, showDashboard, showSimulations]);

  // Show pending approval screen if user is waiting for approval
  if (isPendingApproval) {
    return <PendingApproval />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Trial Banner */}
      <div className="lg:ml-72 px-4 pt-4">
        <TrialBanner />
      </div>
      
      {/* Fixed User Menu in top-right */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <NotificationCenter />
        <UserMenu />
      </div>
      
      <Sidebar 
        activeChapter={activeChapter} 
        onChapterChange={handleChapterChange}
        onShowDashboard={handleShowDashboard}
        onShowSimulations={handleShowSimulations}
      />
      {showSimulations ? (
        <main className="lg:ml-72 min-h-screen p-6 lg:p-10">
          <Suspense fallback={<div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>}>
            <OperationalSimulation />
          </Suspense>
        </main>
      ) : showDashboard ? (
        <main className="lg:ml-72 min-h-screen p-6 lg:p-10">
          <ProgressDashboard 
            onNavigate={handleNavigateFromDashboard}
            onClose={handleCloseDashboard}
          />
        </main>
      ) : (
        <div className="lg:ml-72">
          <ManualContent activeChapter={activeChapter} onChapterChange={handleChapterChange} />
          {/* Learning Path AI & Goals - shown on intro chapter */}
          {activeChapter === 'intro' && (
            <div className="px-6 lg:px-10 pb-10 space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <LearningPathAI />
                <LearningGoals />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const Index = () => {
  return (
    <LanguageProvider>
      <ProgressProvider>
        <ManualApp />
      </ProgressProvider>
    </LanguageProvider>
  );
};

export default Index;
