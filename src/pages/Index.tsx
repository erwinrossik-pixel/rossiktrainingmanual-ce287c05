import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "@/components/manual/Sidebar";
import { ManualContent } from "@/components/manual/ManualContent";
import { ProgressDashboard } from "@/components/manual/ProgressDashboard";
import { ProgressProvider, useProgressContext } from "@/contexts/ProgressContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
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

function UserMenu() {
  const navigate = useNavigate();
  const { user, profile, loading, isAdmin, signOut } = useAuth();

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
        {isAdmin && (
          <DropdownMenuItem onClick={() => navigate('/admin')}>
            <Shield className="mr-2 h-4 w-4" />
            <span>Admin Dashboard</span>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem disabled>
          <User className="mr-2 h-4 w-4" />
          <span>Profil</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Settings className="mr-2 h-4 w-4" />
          <span>Setări</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Deconectare</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ManualApp() {
  const [activeChapter, setActiveChapter] = useState("intro");
  const [showDashboard, setShowDashboard] = useState(false);
  const { visitChapter } = useProgressContext();

  // Track chapter visits
  useEffect(() => {
    if (!showDashboard) {
      visitChapter(activeChapter);
    }
  }, [activeChapter, visitChapter, showDashboard]);

  const handleNavigateFromDashboard = (chapterId: string) => {
    setActiveChapter(chapterId);
    setShowDashboard(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed User Menu in top-right */}
      <div className="fixed top-4 right-4 z-50">
        <UserMenu />
      </div>
      
      <Sidebar 
        activeChapter={activeChapter} 
        onChapterChange={(chapter) => {
          setActiveChapter(chapter);
          setShowDashboard(false);
        }}
        onShowDashboard={() => setShowDashboard(true)}
      />
      {showDashboard ? (
        <main className="lg:ml-72 min-h-screen p-6 lg:p-10">
          <ProgressDashboard 
            onNavigate={handleNavigateFromDashboard}
            onClose={() => setShowDashboard(false)}
          />
        </main>
      ) : (
        <ManualContent activeChapter={activeChapter} onChapterChange={setActiveChapter} />
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