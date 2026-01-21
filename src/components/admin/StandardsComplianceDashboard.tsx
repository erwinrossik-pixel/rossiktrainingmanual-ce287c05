import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Shield, FileCheck, AlertTriangle, CheckCircle, Download, 
  FileText, Globe, Building2, Lock, TrendingUp, BookOpen,
  ChevronRight, Award, Target, Zap
} from 'lucide-react';
import { 
  calculateChapterCompliance, 
  calculateOverallCompliance,
  FIATA_REQUIREMENTS,
  IATA_REQUIREMENTS,
  ISO9001_REQUIREMENTS,
  ISO28000_REQUIREMENTS,
  type GapItem
} from '@/data/internationalStandards';
import { ALL_CHAPTER_IDS } from '@/data/chaptersConfig';
import { useLanguage } from '@/contexts/LanguageContext';

interface StandardInfo {
  name: string;
  fullName: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  requirements: number;
}

const STANDARDS_INFO: Record<string, StandardInfo> = {
  FIATA: {
    name: 'FIATA',
    fullName: 'FIATA Model Rules for Freight Forwarding',
    icon: <Globe className="w-5 h-5" />,
    color: 'bg-blue-500',
    description: 'International Federation of Freight Forwarders Associations standards',
    requirements: FIATA_REQUIREMENTS.length
  },
  IATA: {
    name: 'IATA',
    fullName: 'IATA Cargo Training Framework',
    icon: <Zap className="w-5 h-5" />,
    color: 'bg-purple-500',
    description: 'International Air Transport Association cargo standards',
    requirements: IATA_REQUIREMENTS.length
  },
  ISO9001: {
    name: 'ISO 9001',
    fullName: 'ISO 9001:2015 Quality Management',
    icon: <Award className="w-5 h-5" />,
    color: 'bg-green-500',
    description: 'Quality management system requirements',
    requirements: ISO9001_REQUIREMENTS.length
  },
  ISO28000: {
    name: 'ISO 28000',
    fullName: 'ISO 28000:2022 Supply Chain Security',
    icon: <Lock className="w-5 h-5" />,
    color: 'bg-orange-500',
    description: 'Security management for supply chain',
    requirements: ISO28000_REQUIREMENTS.length
  }
};

export function StandardsComplianceDashboard() {
  const { t, language } = useLanguage();
  const [selectedStandard, setSelectedStandard] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  // Calculate compliance data
  const complianceData = useMemo(() => {
    const chapterMappings = ALL_CHAPTER_IDS.map(id => ({
      id,
      ...calculateChapterCompliance(id)
    }));

    const overall = calculateOverallCompliance(ALL_CHAPTER_IDS);

    return {
      chapters: chapterMappings,
      overall
    };
  }, []);

  // Get gaps grouped by severity
  const allGaps = useMemo(() => {
    const gaps: GapItem[] = [];
    complianceData.chapters.forEach(chapter => {
      chapter.gaps.forEach(gap => {
        gaps.push({ ...gap, chapterId: chapter.chapterId } as GapItem & { chapterId: string });
      });
    });
    return {
      critical: gaps.filter(g => g.severity === 'critical'),
      high: gaps.filter(g => g.severity === 'high'),
      medium: gaps.filter(g => g.severity === 'medium'),
      low: gaps.filter(g => g.severity === 'low')
    };
  }, [complianceData]);

  const generatePDFReport = async (standard: string) => {
    // Generate compliance report
    const info = STANDARDS_INFO[standard];
    const compliance = complianceData.overall.byStandard[standard];
    
    const complianceLevelText = compliance >= 90 
      ? t('admin.standards.level.excellent')
      : compliance >= 70 
        ? t('admin.standards.level.good')
        : t('admin.standards.level.needsImprovement');
    
    const reportContent = `
${t('admin.standards.complianceReport')} - ${info.fullName}
═══════════════════════════════════════════════════════════

${t('admin.quality.generatedAt')}: ${new Date().toLocaleDateString(language === 'ro' ? 'ro-RO' : language === 'de' ? 'de-DE' : 'en-US')}
${t('admin.standards.standard')}: ${info.fullName}
${t('admin.standards.compliancePercent')}: ${compliance.toFixed(1)}%

${t('admin.standards.executiveSummary')}
──────────────────────────────────────────────────────────
• ${t('admin.standards.totalRequirements')}: ${info.requirements}
• ${t('admin.standards.coveredRequirements')}: ${Math.floor(info.requirements * compliance / 100)}
• ${t('admin.standards.missingRequirements')}: ${info.requirements - Math.floor(info.requirements * compliance / 100)}
• ${t('admin.standards.complianceLevel')}: ${complianceLevelText}

${t('admin.standards.analyzedChapters')}
──────────────────────────────────────────────────────────
${complianceData.chapters
  .filter(ch => ch.mappedStandards.some(s => s.standard === standard))
  .map(ch => {
    const std = ch.mappedStandards.find(s => s.standard === standard);
    return `• ${ch.chapterName}: ${std?.compliancePercentage.toFixed(1)}%`;
  })
  .join('\n')}

${t('admin.standards.identifiedGaps')}
──────────────────────────────────────────────────────────
${complianceData.chapters
  .flatMap(ch => ch.gaps.filter(g => g.standard === standard || g.standard === info.name))
  .map(gap => `[${gap.severity.toUpperCase()}] ${gap.requirement}: ${gap.description}`)
  .join('\n') || t('admin.standards.noGaps')}

${t('admin.standards.recommendations')}
──────────────────────────────────────────────────────────
1. ${t('admin.standards.rec1')}
2. ${t('admin.standards.rec2')}
3. ${t('admin.standards.rec3')}
4. ${t('admin.standards.rec4')}

═══════════════════════════════════════════════════════════
${t('admin.standards.generatedBy')}
    `;

    // Create and download the report
    const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${t('admin.standards.complianceReport')}_${standard}_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getComplianceColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getComplianceBadge = (percentage: number) => {
    if (percentage >= 90) return <Badge className="bg-green-500">{t('admin.standards.compliant')}</Badge>;
    if (percentage >= 70) return <Badge className="bg-yellow-500">{t('admin.standards.partial')}</Badge>;
    return <Badge className="bg-red-500">{t('admin.standards.needsAttention')}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            {t('admin.standards.title')}
          </h2>
          <p className="text-muted-foreground">
            {t('admin.standards.subtitle')}
          </p>
        </div>
        <Button onClick={() => {
          Object.keys(STANDARDS_INFO).forEach(std => generatePDFReport(std));
        }}>
          <Download className="w-4 h-4 mr-2" />
          {t('admin.standards.exportAll')}
        </Button>
      </div>

      {/* Overall Compliance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(STANDARDS_INFO).map(([key, info]) => (
          <Card 
            key={key} 
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedStandard === key ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setSelectedStandard(selectedStandard === key ? null : key)}
          >
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg ${info.color} text-white`}>
                  {info.icon}
                </div>
                {getComplianceBadge(complianceData.overall.byStandard[key])}
              </div>
              <CardTitle className="text-lg">{info.name}</CardTitle>
              <CardDescription className="text-xs">{info.fullName}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t('admin.standards.compliance')}</span>
                  <span className={`text-2xl font-bold ${getComplianceColor(complianceData.overall.byStandard[key])}`}>
                    {complianceData.overall.byStandard[key].toFixed(1)}%
                  </span>
                </div>
                <Progress value={complianceData.overall.byStandard[key]} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {info.requirements} {t('admin.standards.totalReqs')}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Overall Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            {t('admin.standards.summary')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold text-primary">
                {complianceData.overall.overall.toFixed(1)}%
              </div>
              <div className="text-sm text-muted-foreground">{t('admin.standards.globalCompliance')}</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold text-blue-600">
                {ALL_CHAPTER_IDS.length}
              </div>
              <div className="text-sm text-muted-foreground">{t('admin.standards.analyzedChaptersCount')}</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold text-orange-600">
                {complianceData.overall.totalGaps}
              </div>
              <div className="text-sm text-muted-foreground">{t('admin.standards.totalGaps')}</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold text-red-600">
                {complianceData.overall.criticalGaps}
              </div>
              <div className="text-sm text-muted-foreground">{t('admin.standards.criticalGaps')}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="chapters" className="space-y-4">
        <TabsList>
          <TabsTrigger value="chapters">
            <BookOpen className="w-4 h-4 mr-2" />
            {t('admin.standards.perChapter')}
          </TabsTrigger>
          <TabsTrigger value="gaps">
            <AlertTriangle className="w-4 h-4 mr-2" />
            {t('admin.standards.gapAnalysis')}
          </TabsTrigger>
          <TabsTrigger value="requirements">
            <FileCheck className="w-4 h-4 mr-2" />
            {t('admin.standards.requirements')}
          </TabsTrigger>
        </TabsList>

        {/* Chapters Tab */}
        <TabsContent value="chapters">
          <Card>
            <CardHeader>
              <CardTitle>{t('admin.standards.compliancePerChapter')}</CardTitle>
              <CardDescription>
                {t('admin.standards.clickForDetails')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t('admin.standards.chapter')}</TableHead>
                      <TableHead className="text-center">FIATA</TableHead>
                      <TableHead className="text-center">IATA</TableHead>
                      <TableHead className="text-center">ISO 9001</TableHead>
                      <TableHead className="text-center">ISO 28000</TableHead>
                      <TableHead className="text-center">{t('admin.standards.total')}</TableHead>
                      <TableHead className="text-center">{t('admin.standards.gaps')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {complianceData.chapters.map(chapter => (
                      <TableRow 
                        key={chapter.chapterId}
                        className={`cursor-pointer hover:bg-muted ${
                          selectedChapter === chapter.chapterId ? 'bg-muted' : ''
                        }`}
                        onClick={() => setSelectedChapter(
                          selectedChapter === chapter.chapterId ? null : chapter.chapterId
                        )}
                      >
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <ChevronRight className={`w-4 h-4 transition-transform ${
                              selectedChapter === chapter.chapterId ? 'rotate-90' : ''
                            }`} />
                            {chapter.chapterName}
                          </div>
                        </TableCell>
                        {['FIATA', 'IATA', 'ISO9001', 'ISO28000'].map(std => {
                          const mapping = chapter.mappedStandards.find(s => s.standard === std);
                          return (
                            <TableCell key={std} className="text-center">
                              {mapping ? (
                                <span className={getComplianceColor(mapping.compliancePercentage)}>
                                  {mapping.compliancePercentage.toFixed(0)}%
                                </span>
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </TableCell>
                          );
                        })}
                        <TableCell className="text-center">
                          <span className={`font-bold ${getComplianceColor(chapter.overallCompliance)}`}>
                            {chapter.overallCompliance.toFixed(0)}%
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          {chapter.gaps.length > 0 ? (
                            <Badge variant="destructive">{chapter.gaps.length}</Badge>
                          ) : (
                            <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Gaps Tab */}
        <TabsContent value="gaps">
          <div className="grid gap-4">
            {/* Critical Gaps */}
            <Card className="border-red-500/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-red-600 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  {t('admin.standards.criticalGapsTitle')} ({allGaps.critical.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {allGaps.critical.length > 0 ? (
                  <div className="space-y-2">
                    {allGaps.critical.map((gap, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                        <Badge variant="destructive">{gap.standard}</Badge>
                        <div>
                          <p className="font-medium">{gap.requirement}</p>
                          <p className="text-sm text-muted-foreground">{gap.description}</p>
                          <Badge variant="outline" className="mt-1">
                            {t('admin.standards.action')}: {gap.action === 'add' ? t('admin.standards.addContent') : gap.action === 'extend' ? t('admin.standards.extend') : t('admin.standards.rewrite')}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-4">
                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    {t('admin.standards.noCriticalGaps')}
                  </p>
                )}
              </CardContent>
            </Card>

            {/* High Priority Gaps */}
            <Card className="border-orange-500/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-orange-600 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  {t('admin.standards.highPriorityGaps')} ({allGaps.high.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {allGaps.high.length > 0 ? (
                  <div className="space-y-2">
                    {allGaps.high.slice(0, 5).map((gap, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                        <Badge className="bg-orange-500">{gap.standard}</Badge>
                        <div>
                          <p className="font-medium">{gap.requirement}</p>
                          <p className="text-sm text-muted-foreground">{gap.description}</p>
                        </div>
                      </div>
                    ))}
                    {allGaps.high.length > 5 && (
                      <p className="text-sm text-muted-foreground text-center">
                        + {allGaps.high.length - 5} {t('admin.standards.additionalGaps')}
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-4">
                    {t('admin.standards.noHighPriorityGaps')}
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Medium & Low Priority Summary */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-yellow-600 flex items-center gap-2 text-lg">
                    {t('admin.standards.mediumPriorityGaps')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{allGaps.medium.length}</div>
                  <p className="text-sm text-muted-foreground">{t('admin.standards.moderateAttention')}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-blue-600 flex items-center gap-2 text-lg">
                    {t('admin.standards.lowPriorityGaps')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{allGaps.low.length}</div>
                  <p className="text-sm text-muted-foreground">{t('admin.standards.optionalImprovements')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Requirements Tab */}
        <TabsContent value="requirements">
          <div className="grid gap-4">
            {Object.entries(STANDARDS_INFO).map(([key, info]) => (
              <Card key={key}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${info.color} text-white`}>
                        {info.icon}
                      </div>
                      <div>
                        <CardTitle>{info.fullName}</CardTitle>
                        <CardDescription>{info.description}</CardDescription>
                      </div>
                    </div>
                    <Button variant="outline" onClick={() => generatePDFReport(key)}>
                      <Download className="w-4 h-4 mr-2" />
                      {t('admin.standards.pdfReport')}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {(key === 'FIATA' ? FIATA_REQUIREMENTS :
                      key === 'IATA' ? IATA_REQUIREMENTS :
                      key === 'ISO9001' ? ISO9001_REQUIREMENTS :
                      ISO28000_REQUIREMENTS
                    ).slice(0, 6).map(req => (
                      <div key={req.id} className="p-2 bg-muted rounded-lg">
                        <div className="flex items-center gap-2">
                          <Badge variant={req.priority === 'critical' ? 'destructive' : 'outline'} className="text-xs">
                            {req.priority}
                          </Badge>
                          <span className="text-sm font-medium">{req.requirement}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{req.section}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 text-center">
                    {t('admin.standards.total')}: {info.requirements} {t('admin.standards.requirementsInStandard')}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
