import { useState, useMemo, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Network,
  Search,
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  Layers,
  Target,
  BookOpen,
  Zap,
  Shield,
  TrendingUp,
  FileText,
  Globe,
  DollarSign,
  Settings
} from "lucide-react";
import {
  CONCEPTS,
  CONCEPT_RELATIONS,
  CATEGORY_COLORS,
  RELATION_TYPE_LABELS,
  getConceptById,
  getRelatedConcepts,
  getConceptsByCategory,
  calculateImpact,
  getAffectedChapters,
  type Concept,
  type ConceptCategory,
  type ConceptRelation
} from "@/data/knowledgeGraph";
import { ALL_CHAPTERS } from "@/data/chaptersConfig";
import { useLanguage } from "@/contexts/LanguageContext";

const CATEGORY_ICONS: Record<ConceptCategory, React.ReactNode> = {
  legal: <Shield className="h-4 w-4" />,
  operational: <Settings className="h-4 w-4" />,
  commercial: <TrendingUp className="h-4 w-4" />,
  technical: <Zap className="h-4 w-4" />,
  geographic: <Globe className="h-4 w-4" />,
  financial: <DollarSign className="h-4 w-4" />,
  safety: <AlertTriangle className="h-4 w-4" />,
  documentation: <FileText className="h-4 w-4" />
};

const getCategoryLabels = (t: (key: string) => string): Record<ConceptCategory, string> => ({
  legal: t('admin.graph.categoryLegal'),
  operational: t('admin.graph.categoryOperational'),
  commercial: t('admin.graph.categoryCommercial'),
  technical: t('admin.graph.categoryTechnical'),
  geographic: t('admin.graph.categoryGeographic'),
  financial: t('admin.graph.categoryFinancial'),
  safety: t('admin.graph.categorySafety'),
  documentation: t('admin.graph.categoryDocumentation')
});

export function KnowledgeGraph() {
  const { t, language } = useLanguage();
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ConceptCategory | "all">("all");
  const [activeTab, setActiveTab] = useState("graph");

  const filteredConcepts = useMemo(() => {
    return CONCEPTS.filter(concept => {
      const matchesSearch = 
        concept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        concept.nameRo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        concept.nameDe.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || concept.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const impactAnalysis = useMemo(() => {
    if (!selectedConcept) return null;
    return calculateImpact(selectedConcept.id);
  }, [selectedConcept]);

  const affectedChapters = useMemo(() => {
    if (!selectedConcept) return [];
    return getAffectedChapters(selectedConcept.id);
  }, [selectedConcept]);

  const relatedConcepts = useMemo(() => {
    if (!selectedConcept) return [];
    return getRelatedConcepts(selectedConcept.id);
  }, [selectedConcept]);

  const getChapterName = useCallback((chapterId: string) => {
    const chapter = ALL_CHAPTERS.find(ch => ch.id === chapterId);
    return chapter?.labelKey || chapterId;
  }, []);

  const getImportanceBadge = (importance: Concept['importance']) => {
    const styles = {
      critical: 'bg-red-500/20 text-red-300 border-red-500/50',
      high: 'bg-orange-500/20 text-orange-300 border-orange-500/50',
      medium: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50',
      low: 'bg-green-500/20 text-green-300 border-green-500/50'
    };
    return styles[importance];
  };

  const getRelationColor = (type: ConceptRelation['type']) => {
    const colors = {
      requires: 'text-destructive',
      extends: 'text-info',
      related: 'text-muted-foreground',
      conflicts: 'text-warning',
      enables: 'text-success',
      validates: 'text-primary'
    };
    return colors[type];
  };

  const categoryLabels = getCategoryLabels(t);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-white/20 rounded-lg">
            <Network className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">{t('admin.graph.title')}</h2>
        </div>
        <p className="text-white/80">
          {t('admin.graph.subtitle')}
        </p>
        
        {/* Quick Stats in Header */}
        <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{CONCEPTS.length}</div>
            <div className="text-xs text-white/70">{t('admin.graph.concepts')}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{CONCEPT_RELATIONS.length}</div>
            <div className="text-xs text-white/70">{t('admin.graph.relations')}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-300">
              {CONCEPTS.filter(c => c.importance === 'critical').length}
            </div>
            <div className="text-xs text-white/70">{t('admin.graph.criticalCount')}</div>
          </div>
        </div>
      </div>

      {/* Filters - Above Tabs */}
      <Card className="bg-card border-border">
        <CardContent className="pt-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t('admin.graph.searchConcept')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={(v) => setSelectedCategory(v as ConceptCategory | "all")}>
              <SelectTrigger className="w-full sm:w-52">
                <SelectValue placeholder={t('admin.graph.category')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('admin.graph.allCategories')}</SelectItem>
                {Object.entries(categoryLabels).map(([key, label]) => (
                  <SelectItem key={key} value={key}>
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: CATEGORY_COLORS[key as ConceptCategory] }}
                      />
                      {label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 gap-2 bg-muted p-1">
          <TabsTrigger 
            value="graph" 
            className="data-[state=active]:bg-violet-600 data-[state=active]:text-white"
          >
            <Layers className="h-4 w-4 mr-2" />
            {t('admin.graph.conceptGraph')}
          </TabsTrigger>
          <TabsTrigger 
            value="impact" 
            className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
          >
            <Target className="h-4 w-4 mr-2" />
            {t('admin.graph.impactAnalysis')}
          </TabsTrigger>
          <TabsTrigger 
            value="chapters" 
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            {t('admin.graph.affectedChapters')}
          </TabsTrigger>
        </TabsList>

        {/* Graph Tab */}
        <TabsContent value="graph" className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Concept List */}
            <Card className="bg-card border-border lg:col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Layers className="h-5 w-5 text-violet-500" />
                  {t('admin.graph.concepts')} ({filteredConcepts.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] pr-4">
                  <div className="space-y-2">
                    {filteredConcepts.map(concept => (
                      <button
                        key={concept.id}
                        onClick={() => setSelectedConcept(concept)}
                        className={`w-full text-left p-3 rounded-lg transition-all border ${
                          selectedConcept?.id === concept.id
                            ? 'bg-violet-600/20 border-violet-500 shadow-md'
                            : 'bg-muted/50 hover:bg-muted border-transparent hover:border-border'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div 
                            className="p-2 rounded-lg mt-0.5 shrink-0"
                            style={{ backgroundColor: `${CATEGORY_COLORS[concept.category]}20` }}
                          >
                            <div style={{ color: CATEGORY_COLORS[concept.category] }}>
                              {CATEGORY_ICONS[concept.category]}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-foreground truncate">{concept.name}</div>
                            <div className="text-sm text-muted-foreground truncate">{concept.nameRo}</div>
                            <div className="flex flex-wrap items-center gap-1.5 mt-2">
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${getImportanceBadge(concept.importance)}`}
                              >
                                {t(`admin.graph.importance.${concept.importance}`)}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {concept.chapterIds.length} {t('admin.graph.chaptersCount')}
                              </Badge>
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
                        </div>
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Concept Details & Relations */}
            <Card className="bg-card border-border lg:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Network className="h-5 w-5 text-purple-500" />
                  {selectedConcept ? selectedConcept.name : t('admin.graph.selectConcept')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedConcept ? (
                  <div className="space-y-6">
                    {/* Description */}
                    <div className="p-4 bg-muted/50 rounded-lg border border-border">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs text-muted-foreground font-medium mb-1">🇬🇧 English</div>
                          <div className="text-sm text-foreground">{selectedConcept.description}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground font-medium mb-1">🇷🇴 Română</div>
                          <div className="text-sm text-foreground">{selectedConcept.descriptionRo}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground font-medium mb-1">🇩🇪 Deutsch</div>
                          <div className="text-sm text-foreground">{selectedConcept.descriptionDe}</div>
                        </div>
                      </div>
                    </div>

                    {/* Relations Visualization */}
                    <div>
                      <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-blue-500" />
                        {t('admin.graph.relations')} ({relatedConcepts.length})
                      </h4>
                      <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                        {relatedConcepts.map(({ concept, relation }) => {
                          const isOutgoing = relation.from === selectedConcept.id;
                          return (
                            <div 
                              key={`${relation.from}-${relation.to}`}
                              className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer border border-transparent hover:border-border"
                              onClick={() => setSelectedConcept(concept)}
                            >
                              <div 
                                className="p-2 rounded-lg shrink-0"
                                style={{ backgroundColor: `${CATEGORY_COLORS[concept.category]}20` }}
                              >
                                <div style={{ color: CATEGORY_COLORS[concept.category] }}>
                                  {CATEGORY_ICONS[concept.category]}
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-foreground">{concept.name}</div>
                                <div className="flex flex-wrap items-center gap-2 mt-1">
                                  <span className={`text-xs font-medium ${getRelationColor(relation.type)}`}>
                                    {isOutgoing ? '→' : '←'} {language === 'de' ? RELATION_TYPE_LABELS[relation.type].de : language === 'en' ? RELATION_TYPE_LABELS[relation.type].en : RELATION_TYPE_LABELS[relation.type].ro}
                                  </span>
                                  <div className="flex items-center gap-1">
                                    <div className="text-xs text-muted-foreground">{t('admin.graph.strength')}:</div>
                                    <div className="flex gap-0.5">
                                      {Array.from({ length: 10 }).map((_, i) => (
                                        <div
                                          key={i}
                                          className={`w-1.5 h-3 rounded-sm ${
                                            i < relation.strength 
                                              ? 'bg-violet-500' 
                                              : 'bg-muted'
                                          }`}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                            </div>
                          );
                        })}
                        {relatedConcepts.length === 0 && (
                          <div className="text-center py-8 text-muted-foreground">
                            {t('admin.graph.noRelations')}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <Network className="h-16 w-16 mx-auto mb-4 opacity-20" />
                      <p className="font-medium">{t('admin.graph.selectFromList')}</p>
                      <p className="text-sm mt-1">{t('admin.graph.toSeeDetails')}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Impact Analysis Tab */}
        <TabsContent value="impact" className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Impact Overview */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  {t('admin.graph.impactAnalysis')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedConcept && impactAnalysis ? (
                  <div className="space-y-6">
                    {/* Score */}
                    <div className="p-4 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl border border-orange-500/30">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-orange-500">
                          {impactAnalysis.totalScore.toFixed(1)}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">{t('admin.graph.totalImpactScore')}</div>
                      </div>
                    </div>

                    {/* Direct Impact */}
                    <div>
                      <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-red-500" />
                        {t('admin.graph.directImpact')} ({impactAnalysis.directImpact.length})
                      </h4>
                      <div className="space-y-2">
                        {impactAnalysis.directImpact.map(concept => (
                          <div 
                            key={concept.id}
                            className="flex items-center gap-3 p-2.5 bg-red-500/10 rounded-lg border border-red-500/20"
                          >
                            <div 
                              className="w-3 h-3 rounded-full shrink-0"
                              style={{ backgroundColor: CATEGORY_COLORS[concept.category] }}
                            />
                            <span className="text-sm font-medium text-foreground">{concept.name}</span>
                            <Badge 
                              variant="outline" 
                              className={`ml-auto text-xs shrink-0 ${getImportanceBadge(concept.importance)}`}
                            >
                              {t(`admin.graph.importance.${concept.importance}`)}
                            </Badge>
                          </div>
                        ))}
                        {impactAnalysis.directImpact.length === 0 && (
                          <div className="text-sm text-muted-foreground text-center py-4">
                            {t('admin.graph.noDirectImpact')}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Indirect Impact */}
                    <div>
                      <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <Layers className="h-4 w-4 text-yellow-500" />
                        {t('admin.graph.indirectImpact')} ({impactAnalysis.indirectImpact.length})
                      </h4>
                      <div className="space-y-2">
                        {impactAnalysis.indirectImpact.slice(0, 8).map(concept => (
                          <div 
                            key={concept.id}
                            className="flex items-center gap-3 p-2.5 bg-yellow-500/10 rounded-lg border border-yellow-500/20"
                          >
                            <div 
                              className="w-3 h-3 rounded-full shrink-0"
                              style={{ backgroundColor: CATEGORY_COLORS[concept.category] }}
                            />
                            <span className="text-sm text-foreground">{concept.name}</span>
                          </div>
                        ))}
                        {impactAnalysis.indirectImpact.length > 8 && (
                          <div className="text-xs text-muted-foreground text-center py-1">
                            +{impactAnalysis.indirectImpact.length - 8} {t('admin.graph.otherConcepts')}
                          </div>
                        )}
                        {impactAnalysis.indirectImpact.length === 0 && (
                          <div className="text-sm text-muted-foreground text-center py-4">
                            {t('admin.graph.noIndirectImpact')}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <Target className="h-12 w-12 mx-auto mb-3 opacity-20" />
                      <p className="font-medium">{t('admin.graph.selectForAnalysis')}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Category Distribution */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">{t('admin.graph.categoryDistribution')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(categoryLabels).map(([key, label]) => {
                    const concepts = getConceptsByCategory(key as ConceptCategory);
                    const percentage = (concepts.length / CONCEPTS.length) * 100;
                    return (
                      <div key={key} className="space-y-1.5">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-3 h-3 rounded-full shrink-0"
                              style={{ backgroundColor: CATEGORY_COLORS[key as ConceptCategory] }}
                            />
                            <span className="text-foreground">{label}</span>
                          </div>
                          <span className="font-medium text-foreground">{concepts.length}</span>
                        </div>
                        <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{ 
                              width: `${percentage}%`,
                              backgroundColor: CATEGORY_COLORS[key as ConceptCategory]
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Total Stats */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-violet-500/10 rounded-lg">
                      <div className="text-2xl font-bold text-violet-500">{CONCEPTS.length}</div>
                      <div className="text-xs text-muted-foreground">{t('admin.graph.concepts')}</div>
                    </div>
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <div className="text-2xl font-bold text-blue-500">{CONCEPT_RELATIONS.length}</div>
                      <div className="text-xs text-muted-foreground">{t('admin.graph.relations')}</div>
                    </div>
                    <div className="p-3 bg-amber-500/10 rounded-lg">
                      <div className="text-2xl font-bold text-amber-500">
                        {CONCEPTS.filter(c => c.importance === 'critical').length}
                      </div>
                      <div className="text-xs text-muted-foreground">{t('admin.graph.criticalCount')}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Affected Chapters Tab */}
        <TabsContent value="chapters" className="mt-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-emerald-500" />
                {t('admin.graph.affectedOnUpdate')}
                {selectedConcept && (
                  <Badge className="ml-2 bg-emerald-600 text-white">
                    {affectedChapters.length} {t('admin.graph.chaptersCount')}
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedConcept ? (
                <div className="space-y-4">
                  <div className="p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-emerald-500" />
                      <span className="font-medium text-foreground">
                        {t('admin.graph.updateTo')} "{selectedConcept.name}"
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t('admin.graph.modifyingRequires')}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {affectedChapters.map((chapterId, index) => {
                      const isDirectChapter = selectedConcept.chapterIds.includes(chapterId);
                      return (
                        <div
                          key={chapterId}
                          className={`p-3 rounded-lg border transition-colors ${
                            isDirectChapter
                              ? 'bg-emerald-500/15 border-emerald-500/50'
                              : 'bg-muted/50 border-border'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                              isDirectChapter ? 'bg-emerald-600 text-white' : 'bg-muted text-muted-foreground'
                            }`}>
                              {index + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-foreground truncate">
                                {getChapterName(chapterId)}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {isDirectChapter ? t('admin.graph.directChapter') : t('admin.graph.indirectImpactChapter')}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {affectedChapters.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      {t('admin.graph.noAffectedChapters')}
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <BookOpen className="h-12 w-12 mx-auto mb-3 opacity-20" />
                    <p className="font-medium">{t('admin.graph.selectToSeeChapters')}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
