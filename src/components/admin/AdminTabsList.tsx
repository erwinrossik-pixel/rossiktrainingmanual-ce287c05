import { memo } from 'react';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Users, BookOpen, Trophy, BarChart3, RefreshCw, RotateCcw, 
  Shield, Activity, Timer, TrendingUp, Calendar, FileSearch, 
  Award, Radio, Building2, CreditCard, Server, Database, 
  AlertTriangle, CheckCircle, Lock, Target, Network, Gamepad2, 
  Globe, Zap, GraduationCap, Eye, HelpCircle, FileBarChart
} from 'lucide-react';

interface AdminTabsListProps {
  isSuperAdmin: boolean;
  isCompanyAdmin: boolean;
}

export const AdminTabsList = memo(function AdminTabsList({ 
  isSuperAdmin, 
  isCompanyAdmin 
}: AdminTabsListProps) {
  const { t } = useLanguage();

  return (
    <TabsList className="admin-tabs-list flex-wrap h-auto gap-1 p-2">
      
      {/* ═══════════════════════════════════════════════════════════════════
          CATEGORIA 1: SUPER ADMIN - Gestiune Platformă
      ═══════════════════════════════════════════════════════════════════ */}
      {isSuperAdmin && (
        <>
          <div className="w-full flex items-center gap-2 py-1 px-2 mb-1">
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300 text-xs font-bold">
              {t('admin.category.superAdmin')}
            </Badge>
            <div className="flex-1 h-px bg-blue-200"></div>
          </div>
          <TabsTrigger value="companies" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-blue-700 data-[state=active]:border-b-2 data-[state=active]:border-blue-500">
            <Building2 className="h-4 w-4" />
            {t('admin.tab.companies')}
          </TabsTrigger>
          <TabsTrigger value="plans" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-emerald-700 data-[state=active]:border-b-2 data-[state=active]:border-emerald-500">
            <CreditCard className="h-4 w-4" />
            {t('admin.tab.plans')}
          </TabsTrigger>
          <TabsTrigger value="premium-chapters" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-amber-700 data-[state=active]:border-b-2 data-[state=active]:border-amber-500">
            <Lock className="h-4 w-4" />
            {t('admin.tab.premium')}
          </TabsTrigger>
        </>
      )}
      
      {/* ═══════════════════════════════════════════════════════════════════
          CATEGORIA 2: GESTIUNE UTILIZATORI & COMPANIE
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="w-full flex items-center gap-2 py-1 px-2 mb-1 mt-2">
        <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-300 text-xs font-bold">
          {t('admin.category.users')}
        </Badge>
        <div className="flex-1 h-px bg-purple-200"></div>
      </div>
      {(isCompanyAdmin || isSuperAdmin) && (
        <>
          <TabsTrigger value="company-users" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-purple-700 data-[state=active]:border-b-2 data-[state=active]:border-purple-500">
            <Users className="h-4 w-4" />
            {t('admin.tab.companyUsers')}
          </TabsTrigger>
          <TabsTrigger value="chapters" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-indigo-700 data-[state=active]:border-b-2 data-[state=active]:border-indigo-500">
            <BookOpen className="h-4 w-4" />
            {t('admin.tab.chapters')}
          </TabsTrigger>
          <TabsTrigger value="reports" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-cyan-700 data-[state=active]:border-b-2 data-[state=active]:border-cyan-500">
            <FileBarChart className="h-4 w-4" />
            {t('admin.tab.reports')}
          </TabsTrigger>
        </>
      )}
      
      <TabsTrigger value="users" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-blue-700 data-[state=active]:border-b-2 data-[state=active]:border-blue-500">
        <Users className="h-4 w-4" />
        {t('admin.tab.allProfiles')}
      </TabsTrigger>
      
      <TabsTrigger value="user-progress-exam" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-green-700 data-[state=active]:border-b-2 data-[state=active]:border-green-500">
        <GraduationCap className="h-4 w-4" />
        <span className="font-medium">{t('admin.tab.progressExam')}</span>
      </TabsTrigger>
      
      <TabsTrigger value="retention" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-rose-700 data-[state=active]:border-b-2 data-[state=active]:border-rose-500">
        <TrendingUp className="h-4 w-4" />
        {t('admin.tab.retention')}
      </TabsTrigger>
      
      {/* ═══════════════════════════════════════════════════════════════════
          CATEGORIA 3: ANALIZE & KPI
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="w-full flex items-center gap-2 py-1 px-2 mb-1 mt-2">
        <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-300 text-xs font-bold">
          {t('admin.category.analytics')}
        </Badge>
        <div className="flex-1 h-px bg-orange-200"></div>
      </div>
      <TabsTrigger value="quiz-analytics" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-orange-700 data-[state=active]:border-b-2 data-[state=active]:border-orange-500">
        <HelpCircle className="h-4 w-4" />
        {t('admin.tab.quizAnalytics')}
      </TabsTrigger>
      
      <TabsTrigger value="quiz-resets" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-red-700 data-[state=active]:border-b-2 data-[state=active]:border-red-500">
        <RotateCcw className="h-4 w-4" />
        <span className="font-medium">{t('admin.tab.quizResets')}</span>
      </TabsTrigger>
      
      <TabsTrigger value="analytics" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-violet-700 data-[state=active]:border-b-2 data-[state=active]:border-violet-500">
        <BarChart3 className="h-4 w-4" />
        {t('admin.tab.charts')}
      </TabsTrigger>
      
      <TabsTrigger value="learning-kpi" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-teal-700 data-[state=active]:border-b-2 data-[state=active]:border-teal-500">
        <TrendingUp className="h-4 w-4" />
        {t('admin.tab.learningKPI')}
      </TabsTrigger>
      
      <TabsTrigger value="usage" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-cyan-700 data-[state=active]:border-b-2 data-[state=active]:border-cyan-500">
        <Activity className="h-4 w-4" />
        {t('admin.tab.usage')}
      </TabsTrigger>
      
      <TabsTrigger value="training-time" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-pink-700 data-[state=active]:border-b-2 data-[state=active]:border-pink-500">
        <Timer className="h-4 w-4" />
        {t('admin.tab.trainingTime')}
      </TabsTrigger>
      
      <TabsTrigger value="realtime" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-red-700 data-[state=active]:border-b-2 data-[state=active]:border-red-500">
        <Radio className="h-4 w-4" />
        {t('admin.tab.realtime')}
      </TabsTrigger>
      
      {/* ═══════════════════════════════════════════════════════════════════
          CATEGORIA 4: COMPETENȚE & GAMIFICARE
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="w-full flex items-center gap-2 py-1 px-2 mb-1 mt-2">
        <Badge variant="outline" className="bg-emerald-100 text-emerald-800 border-emerald-300 text-xs font-bold">
          {t('admin.category.competencies')}
        </Badge>
        <div className="flex-1 h-px bg-emerald-200"></div>
      </div>
      <TabsTrigger value="competency-matrix" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-emerald-700 data-[state=active]:border-b-2 data-[state=active]:border-emerald-500">
        <BarChart3 className="h-4 w-4" />
        {t('admin.tab.teamCompetencies')}
      </TabsTrigger>
      
      <TabsTrigger value="competency-gap" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-amber-700 data-[state=active]:border-b-2 data-[state=active]:border-amber-500">
        <Target className="h-4 w-4" />
        {t('admin.tab.competencyGaps')}
      </TabsTrigger>
      
      <TabsTrigger value="gamification" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-fuchsia-700 data-[state=active]:border-b-2 data-[state=active]:border-fuchsia-500">
        <Gamepad2 className="h-4 w-4" />
        {t('admin.tab.gamification')}
      </TabsTrigger>
      
      <TabsTrigger value="certificates" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-yellow-700 data-[state=active]:border-b-2 data-[state=active]:border-yellow-500">
        <Award className="h-4 w-4" />
        {t('admin.tab.certificates')}
      </TabsTrigger>
      
      <TabsTrigger value="final-exam-results" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-rose-700 data-[state=active]:border-b-2 data-[state=active]:border-rose-500">
        <Trophy className="h-4 w-4" />
        {t('admin.tab.finalExamResults')}
      </TabsTrigger>
      
      {/* ═══════════════════════════════════════════════════════════════════
          CATEGORIA 5: CONȚINUT & GUVERNANȚĂ
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="w-full flex items-center gap-2 py-1 px-2 mb-1 mt-2">
        <Badge variant="outline" className="bg-sky-100 text-sky-800 border-sky-300 text-xs font-bold">
          {t('admin.category.content')}
        </Badge>
        <div className="flex-1 h-px bg-sky-200"></div>
      </div>
      <TabsTrigger value="quality" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-sky-700 data-[state=active]:border-b-2 data-[state=active]:border-sky-500">
        <FileSearch className="h-4 w-4" />
        {t('admin.tab.contentQuality')}
      </TabsTrigger>
      
      <TabsTrigger value="governance" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-slate-700 data-[state=active]:border-b-2 data-[state=active]:border-slate-500">
        <Shield className="h-4 w-4" />
        {t('admin.tab.governance')}
      </TabsTrigger>
      
      <TabsTrigger value="content-governor" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-purple-700 data-[state=active]:border-b-2 data-[state=active]:border-purple-500">
        <Shield className="h-4 w-4" />
        {t('admin.tab.aiGovernor')}
      </TabsTrigger>
      
      <TabsTrigger value="auto-updates" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-lime-700 data-[state=active]:border-b-2 data-[state=active]:border-lime-500">
        <RefreshCw className="h-4 w-4" />
        {t('admin.tab.autoUpdate')}
      </TabsTrigger>
      
      <TabsTrigger value="standards" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-indigo-700 data-[state=active]:border-b-2 data-[state=active]:border-indigo-500">
        <Globe className="h-4 w-4" />
        {t('admin.tab.intStandards')}
      </TabsTrigger>
      
      <TabsTrigger value="knowledge-graph" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-violet-700 data-[state=active]:border-b-2 data-[state=active]:border-violet-500">
        <Network className="h-4 w-4" />
        {t('admin.tab.knowledgeGraph')}
      </TabsTrigger>
      
      <TabsTrigger value="visual-analyzer" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-cyan-700 data-[state=active]:border-b-2 data-[state=active]:border-cyan-500">
        <Eye className="h-4 w-4" />
        {t('admin.tab.visualAnalyzer')}
      </TabsTrigger>
      
      {/* ═══════════════════════════════════════════════════════════════════
          CATEGORIA 6: SISTEM & ENTERPRISE
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="w-full flex items-center gap-2 py-1 px-2 mb-1 mt-2">
        <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-300 text-xs font-bold">
          {t('admin.category.system')}
        </Badge>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>
      <TabsTrigger value="cron-jobs" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-gray-500">
        <Calendar className="h-4 w-4" />
        {t('admin.tab.cronJobs')}
      </TabsTrigger>
      
      {isSuperAdmin && (
        <>
          <TabsTrigger value="monitoring" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-emerald-700 data-[state=active]:border-b-2 data-[state=active]:border-emerald-500">
            <Server className="h-4 w-4" />
            {t('admin.tab.monitoring')}
          </TabsTrigger>
          <TabsTrigger value="backup" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-sky-700 data-[state=active]:border-b-2 data-[state=active]:border-sky-500">
            <Database className="h-4 w-4" />
            {t('admin.tab.backup')}
          </TabsTrigger>
          <TabsTrigger value="incidents" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-orange-700 data-[state=active]:border-b-2 data-[state=active]:border-orange-500">
            <AlertTriangle className="h-4 w-4" />
            {t('admin.tab.incidents')}
          </TabsTrigger>
          <TabsTrigger value="production" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-green-700 data-[state=active]:border-b-2 data-[state=active]:border-green-500">
            <CheckCircle className="h-4 w-4" />
            {t('admin.tab.production')}
          </TabsTrigger>
        </>
      )}
    </TabsList>
  );
});
