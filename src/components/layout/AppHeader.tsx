import { memo } from "react";
import { useNavigate } from "react-router-dom";
import rossikLogo from "@/assets/rossik-logo.jpg";
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
import { LogIn, LogOut, Settings, User, Shield, Phone, Mail, ExternalLink } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";

export const AppHeader = memo(function AppHeader() {
  const navigate = useNavigate();
  const { user, profile, loading, isAdmin, signOut } = useAuth();
  const { t } = useLanguage();

  const initials = profile?.first_name && profile?.last_name
    ? `${profile.first_name[0]}${profile.last_name[0]}`
    : user?.email?.substring(0, 2).toUpperCase() || 'U';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-rossik-navy border-b border-rossik-navy/80 shadow-lg">
      <div className="flex items-center justify-between h-14 px-4 lg:pl-[19rem]">
        {/* Left: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          <a 
            href="https://www.rossik.eu/dienstleistungen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="header-nav-link"
          >
            {t('header.services') || 'Servicii'}
          </a>
          <a 
            href="https://www.rossik.eu/about" 
            target="_blank" 
            rel="noopener noreferrer"
            className="header-nav-link"
          >
            {t('header.about') || 'Despre noi'}
          </a>
          <a 
            href="https://www.rossik.eu/karriere" 
            target="_blank" 
            rel="noopener noreferrer"
            className="header-nav-link"
          >
            {t('header.career') || 'Carieră'}
          </a>
        </nav>

        {/* Right: CTA + User */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Contact CTA */}
          <a 
            href="https://www.rossik.eu/contact-7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium text-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md"
          >
            <Mail className="w-4 h-4" />
            {t('header.contact') || 'Solicită ofertă'}
          </a>
          
          {/* User Menu */}
          {loading ? (
            <div className="w-8 h-8 rounded-full bg-white/10 animate-pulse" />
          ) : !user ? (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/auth')}
              className="text-white/90 hover:text-white hover:bg-white/10 border border-white/20"
            >
              <LogIn className="h-4 w-4 mr-2" />
              {t('header.login') || 'Autentificare'}
            </Button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full hover:bg-white/10">
                  <Avatar className="h-9 w-9 border-2 border-white/20">
                    <AvatarImage src={profile?.avatar_url || undefined} alt={profile?.first_name || 'User'} />
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">{initials}</AvatarFallback>
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
          )}
        </div>
      </div>
    </header>
  );
});
