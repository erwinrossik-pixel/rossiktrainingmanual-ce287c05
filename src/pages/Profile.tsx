import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCompany } from "@/contexts/CompanyContext";
import { useProgressContext } from "@/contexts/ProgressContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ProgressProvider } from "@/contexts/ProgressContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, User, Settings, BarChart3, Globe, Save, CheckCircle2, 
  Trophy, Target, BookOpen, Award, Building2
} from "lucide-react";
import { toast } from "sonner";
import { ALL_CHAPTERS } from "@/data/chaptersConfig";

function ProfileContent() {
  const navigate = useNavigate();
  const { user, profile, updateProfile, loading: authLoading } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const { company, branding } = useCompany();
  const { getOverallProgress, getChapterProgress } = useProgressContext();
  
  const [firstName, setFirstName] = useState(profile?.first_name || "");
  const [lastName, setLastName] = useState(profile?.last_name || "");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (profile) {
      setFirstName(profile.first_name || "");
      setLastName(profile.last_name || "");
    }
  }, [profile]);

  const overallProgress = getOverallProgress();
  
  // Calculate statistics
  const stats = ALL_CHAPTERS.reduce((acc, chapter) => {
    const chapterProgress = getChapterProgress(chapter.id);
    if (chapterProgress?.completed) acc.completedChapters++;
    if (chapterProgress?.quizScore !== undefined) {
      acc.totalQuizzes++;
      acc.totalScore += chapterProgress.quizScore;
      acc.totalQuestions += chapterProgress.quizTotal || 0;
      if (chapterProgress.quizScore >= (chapterProgress.quizTotal || 0) * 0.7) {
        acc.passedQuizzes++;
      }
    }
    return acc;
  }, { completedChapters: 0, totalQuizzes: 0, totalScore: 0, totalQuestions: 0, passedQuizzes: 0 });

  const averageScore = stats.totalQuestions > 0 
    ? Math.round((stats.totalScore / stats.totalQuestions) * 100) 
    : 0;

  const handleSaveProfile = async () => {
    if (!user) return;
    setSaving(true);
    
    const { error } = await updateProfile({
      first_name: firstName,
      last_name: lastName,
    });
    
    setSaving(false);
    
    if (!error) {
      toast.success(
        language === 'ro' ? 'Profil actualizat cu succes!' :
        language === 'de' ? 'Profil erfolgreich aktualisiert!' :
        'Profile updated successfully!'
      );
    }
  };

  const handleLanguageChange = (lang: 'ro' | 'de' | 'en') => {
    setLanguage(lang);
    toast.success(
      lang === 'ro' ? 'Limba schimbată în Română' :
      lang === 'de' ? 'Sprache auf Deutsch geändert' :
      'Language changed to English'
    );
  };

  const initials = firstName && lastName
    ? `${firstName[0]}${lastName[0]}`
    : user?.email?.substring(0, 2).toUpperCase() || 'U';

  const translations = {
    ro: {
      title: 'Profilul Meu',
      subtitle: 'Gestionează datele personale și preferințele',
      back: 'Înapoi la Manual',
      personalInfo: 'Informații Personale',
      personalInfoDesc: 'Actualizează datele tale personale',
      firstName: 'Prenume',
      lastName: 'Nume',
      email: 'Email',
      emailHint: 'Emailul nu poate fi modificat',
      save: 'Salvează Modificările',
      saving: 'Se salvează...',
      progress: 'Progres Training',
      progressDesc: 'Vizualizează progresul tău în training',
      overallProgress: 'Progres General',
      completedChapters: 'Capitole Completate',
      quizzesTaken: 'Quiz-uri Susținute',
      averageScore: 'Scor Mediu',
      passedQuizzes: 'Quiz-uri Promovate',
      preferences: 'Preferințe',
      preferencesDesc: 'Personalizează experiența ta',
      language: 'Limba Preferată',
      languageHint: 'Selectează limba pentru interfață și conținut',
      company: 'Companie',
      companyHint: 'Compania la care ești înregistrat',
    },
    de: {
      title: 'Mein Profil',
      subtitle: 'Persönliche Daten und Einstellungen verwalten',
      back: 'Zurück zum Handbuch',
      personalInfo: 'Persönliche Informationen',
      personalInfoDesc: 'Aktualisieren Sie Ihre persönlichen Daten',
      firstName: 'Vorname',
      lastName: 'Nachname',
      email: 'E-Mail',
      emailHint: 'E-Mail kann nicht geändert werden',
      save: 'Änderungen Speichern',
      saving: 'Speichern...',
      progress: 'Trainingsfortschritt',
      progressDesc: 'Sehen Sie Ihren Trainingsfortschritt',
      overallProgress: 'Gesamtfortschritt',
      completedChapters: 'Abgeschlossene Kapitel',
      quizzesTaken: 'Absolvierte Quiz',
      averageScore: 'Durchschnittsnote',
      passedQuizzes: 'Bestandene Quiz',
      preferences: 'Einstellungen',
      preferencesDesc: 'Personalisieren Sie Ihre Erfahrung',
      language: 'Bevorzugte Sprache',
      languageHint: 'Wählen Sie die Sprache für Oberfläche und Inhalt',
      company: 'Unternehmen',
      companyHint: 'Ihr registriertes Unternehmen',
    },
    en: {
      title: 'My Profile',
      subtitle: 'Manage your personal data and preferences',
      back: 'Back to Manual',
      personalInfo: 'Personal Information',
      personalInfoDesc: 'Update your personal details',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      emailHint: 'Email cannot be changed',
      save: 'Save Changes',
      saving: 'Saving...',
      progress: 'Training Progress',
      progressDesc: 'View your training progress',
      overallProgress: 'Overall Progress',
      completedChapters: 'Completed Chapters',
      quizzesTaken: 'Quizzes Taken',
      averageScore: 'Average Score',
      passedQuizzes: 'Passed Quizzes',
      preferences: 'Preferences',
      preferencesDesc: 'Customize your experience',
      language: 'Preferred Language',
      languageHint: 'Select the language for interface and content',
      company: 'Company',
      companyHint: 'Your registered company',
    }
  };

  const txt = translations[language];

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!user) {
    navigate('/auth');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-6 lg:p-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={profile?.avatar_url || undefined} />
              <AvatarFallback className="text-lg">{initials}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{txt.title}</h1>
              <p className="text-muted-foreground">{txt.subtitle}</p>
            </div>
          </div>
          <Button variant="outline" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            {txt.back}
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="info" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="info" className="gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">{txt.personalInfo}</span>
            </TabsTrigger>
            <TabsTrigger value="progress" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">{txt.progress}</span>
            </TabsTrigger>
            <TabsTrigger value="preferences" className="gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">{txt.preferences}</span>
            </TabsTrigger>
          </TabsList>

          {/* Personal Info Tab */}
          <TabsContent value="info">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  {txt.personalInfo}
                </CardTitle>
                <CardDescription>{txt.personalInfoDesc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{txt.firstName}</Label>
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder={txt.firstName}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{txt.lastName}</Label>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder={txt.lastName}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">{txt.email}</Label>
                  <Input
                    id="email"
                    value={user.email || ""}
                    disabled
                    className="bg-muted"
                  />
                  <p className="text-xs text-muted-foreground">{txt.emailHint}</p>
                </div>

                {company && (
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      {txt.company}
                    </Label>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      {branding?.logo_url && (
                        <img src={branding.logo_url} alt={company.name} className="h-8 w-8 object-contain" />
                      )}
                      <span className="font-medium">{company.name}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{txt.companyHint}</p>
                  </div>
                )}

                <Button onClick={handleSaveProfile} disabled={saving}>
                  <Save className="h-4 w-4 mr-2" />
                  {saving ? txt.saving : txt.save}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  {txt.progress}
                </CardTitle>
                <CardDescription>{txt.progressDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-primary/10 text-center">
                    <Target className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-primary">{overallProgress}%</p>
                    <p className="text-xs text-muted-foreground">{txt.overallProgress}</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-success/10 text-center">
                    <CheckCircle2 className="h-6 w-6 text-success mx-auto mb-2" />
                    <p className="text-2xl font-bold text-success">{stats.completedChapters}</p>
                    <p className="text-xs text-muted-foreground">{txt.completedChapters}</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-warning/10 text-center">
                    <Trophy className="h-6 w-6 text-warning mx-auto mb-2" />
                    <p className="text-2xl font-bold text-warning">{stats.totalQuizzes}</p>
                    <p className="text-xs text-muted-foreground">{txt.quizzesTaken}</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-info/10 text-center">
                    <Award className="h-6 w-6 text-info mx-auto mb-2" />
                    <p className="text-2xl font-bold text-info">{averageScore}%</p>
                    <p className="text-xs text-muted-foreground">{txt.averageScore}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{txt.overallProgress}</span>
                    <span className="font-medium">{overallProgress}%</span>
                  </div>
                  <Progress value={overallProgress} className="h-2" />
                </div>

                <div className="mt-6 p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm">{txt.passedQuizzes}</span>
                    </div>
                    <span className="font-medium">{stats.passedQuizzes} / {stats.totalQuizzes}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  {txt.preferences}
                </CardTitle>
                <CardDescription>{txt.preferencesDesc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    {txt.language}
                  </Label>
                  <div className="flex gap-2">
                    <Button
                      variant={language === 'ro' ? 'default' : 'outline'}
                      onClick={() => handleLanguageChange('ro')}
                      className="flex-1"
                    >
                      🇷🇴 Română
                    </Button>
                    <Button
                      variant={language === 'de' ? 'default' : 'outline'}
                      onClick={() => handleLanguageChange('de')}
                      className="flex-1"
                    >
                      🇩🇪 Deutsch
                    </Button>
                    <Button
                      variant={language === 'en' ? 'default' : 'outline'}
                      onClick={() => handleLanguageChange('en')}
                      className="flex-1"
                    >
                      🇬🇧 English
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">{txt.languageHint}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <LanguageProvider>
      <ProgressProvider>
        <ProfileContent />
      </ProgressProvider>
    </LanguageProvider>
  );
}
