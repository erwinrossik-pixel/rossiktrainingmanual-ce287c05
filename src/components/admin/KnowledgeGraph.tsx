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

const CATEGORY_LABELS: Record<ConceptCategory, string> = {
  legal: 'Legal',
  operational: 'Operational',
  commercial: 'Commercial',
  technical: 'Technical',
  geographic: 'Geographic',
  financial: 'Financial',
  safety: 'Safety',
  documentation: 'Documentation'
};

export function KnowledgeGraph() {
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
      requires: 'text-red-400',
      extends: 'text-blue-400',
      related: 'text-gray-400',
      conflicts: 'text-orange-400',
      enables: 'text-green-400',
      validates: 'text-purple-400'
    };
    return colors[type];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-white/20 rounded-lg">
            <Network className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Knowledge Graph</h2>
        </div>
        <p className="text-white/80">
          Vizualizează dependențele între concepte și analizează impactul actualizărilor
        </p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 gap-2 bg-slate-800/50 p-1">
          <TabsTrigger 
            value="graph" 
            className="data-[state=active]:bg-violet-600 data-[state=active]:text-white"
          >
            <Layers className="h-4 w-4 mr-2" />
            Graf Concepte
          </TabsTrigger>
          <TabsTrigger 
            value="impact" 
            className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
          >
            <Target className="h-4 w-4 mr-2" />
            Analiză Impact
          </TabsTrigger>
          <TabsTrigger 
            value="chapters" 
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Capitole Afectate
          </TabsTrigger>
        </TabsList>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Caută concept..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800/50 border-slate-700"
            />
          </div>
          <Select value={selectedCategory} onValueChange={(v) => setSelectedCategory(v as ConceptCategory | "all")}>
            <SelectTrigger className="w-full sm:w-48 bg-slate-800/50 border-slate-700">
              <SelectValue placeholder="Categorie" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toate categoriile</SelectItem>
              {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
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

        {/* Graph Tab */}
        <TabsContent value="graph" className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Concept List */}
            <Card className="bg-slate-900/50 border-slate-700 lg:col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Layers className="h-5 w-5 text-violet-400" />
                  Concepte ({filteredConcepts.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] pr-4">
                  <div className="space-y-2">
                    {filteredConcepts.map(concept => (
                      <button
                        key={concept.id}
                        onClick={() => setSelectedConcept(concept)}
                        className={`w-full text-left p-3 rounded-lg transition-all ${
                          selectedConcept?.id === concept.id
                            ? 'bg-violet-600/30 border border-violet-500'
                            : 'bg-slate-800/50 hover:bg-slate-700/50 border border-transparent'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div 
                            className="p-2 rounded-lg mt-0.5"
                            style={{ backgroundColor: `${CATEGORY_COLORS[concept.category]}20` }}
                          >
                            <div style={{ color: CATEGORY_COLORS[concept.category] }}>
                              {CATEGORY_ICONS[concept.category]}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-white truncate">{concept.name}</div>
                            <div className="text-sm text-slate-400 truncate">{concept.nameRo}</div>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${getImportanceBadge(concept.importance)}`}
                              >
                                {concept.importance}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {concept.chapterIds.length} capitole
                              </Badge>
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-slate-500" />
                        </div>
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Concept Details & Relations */}
            <Card className="bg-slate-900/50 border-slate-700 lg:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Network className="h-5 w-5 text-purple-400" />
                  {selectedConcept ? selectedConcept.name : 'Selectează un concept'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedConcept ? (
                  <div className="space-y-6">
                    {/* Description */}
                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs text-slate-500 mb-1">English</div>
                          <div className="text-sm text-slate-300">{selectedConcept.description}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 mb-1">Română</div>
                          <div className="text-sm text-slate-300">{selectedConcept.descriptionRo}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 mb-1">Deutsch</div>
                          <div className="text-sm text-slate-300">{selectedConcept.descriptionDe}</div>
                        </div>
                      </div>
                    </div>

                    {/* Relations Visualization */}
                    <div>
                      <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-blue-400" />
                        Relații ({relatedConcepts.length})
                      </h4>
                      <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                        {relatedConcepts.map(({ concept, relation }) => {
                          const isOutgoing = relation.from === selectedConcept.id;
                          return (
                            <div 
                              key={`${relation.from}-${relation.to}`}
                              className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors cursor-pointer"
                              onClick={() => setSelectedConcept(concept)}
                            >
                              <div 
                                className="p-2 rounded-lg"
                                style={{ backgroundColor: `${CATEGORY_COLORS[concept.category]}20` }}
                              >
                                <div style={{ color: CATEGORY_COLORS[concept.category] }}>
                                  {CATEGORY_ICONS[concept.category]}
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="text-sm text-white">{concept.name}</div>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className={`text-xs ${getRelationColor(relation.type)}`}>
                                    {isOutgoing ? '→' : '←'} {RELATION_TYPE_LABELS[relation.type].ro}
                                  </span>
                                  <div className="flex items-center gap-1">
                                    <div className="text-xs text-slate-500">Putere:</div>
                                    <div className="flex gap-0.5">
                                      {Array.from({ length: 10 }).map((_, i) => (
                                        <div
                                          key={i}
                                          className={`w-1.5 h-3 rounded-sm ${
                                            i < relation.strength 
                                              ? 'bg-violet-500' 
                                              : 'bg-slate-700'
                                          }`}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-slate-500" />
                            </div>
                          );
                        })}
                        {relatedConcepts.length === 0 && (
                          <div className="text-center py-8 text-slate-500">
                            Nu există relații pentru acest concept
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-[400px] flex items-center justify-center text-slate-500">
                    <div className="text-center">
                      <Network className="h-16 w-16 mx-auto mb-4 opacity-20" />
                      <p>Selectează un concept din lista din stânga</p>
                      <p className="text-sm mt-1">pentru a vedea detalii și relații</p>
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
            <Card className="bg-slate-900/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-400" />
                  Analiză Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedConcept && impactAnalysis ? (
                  <div className="space-y-6">
                    {/* Score */}
                    <div className="p-4 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl border border-orange-500/30">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-orange-400">
                          {impactAnalysis.totalScore.toFixed(1)}
                        </div>
                        <div className="text-sm text-slate-400 mt-1">Scor Impact Total</div>
                      </div>
                    </div>

                    {/* Direct Impact */}
                    <div>
                      <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-red-400" />
                        Impact Direct ({impactAnalysis.directImpact.length})
                      </h4>
                      <div className="space-y-2">
                        {impactAnalysis.directImpact.map(concept => (
                          <div 
                            key={concept.id}
                            className="flex items-center gap-3 p-2 bg-red-500/10 rounded-lg border border-red-500/20"
                          >
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: CATEGORY_COLORS[concept.category] }}
                            />
                            <span className="text-sm text-white">{concept.name}</span>
                            <Badge 
                              variant="outline" 
                              className={`ml-auto text-xs ${getImportanceBadge(concept.importance)}`}
                            >
                              {concept.importance}
                            </Badge>
                          </div>
                        ))}
                        {impactAnalysis.directImpact.length === 0 && (
                          <div className="text-sm text-slate-500 text-center py-4">
                            Fără impact direct
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Indirect Impact */}
                    <div>
                      <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                        <Layers className="h-4 w-4 text-yellow-400" />
                        Impact Indirect ({impactAnalysis.indirectImpact.length})
                      </h4>
                      <div className="space-y-2">
                        {impactAnalysis.indirectImpact.slice(0, 8).map(concept => (
                          <div 
                            key={concept.id}
                            className="flex items-center gap-3 p-2 bg-yellow-500/10 rounded-lg border border-yellow-500/20"
                          >
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: CATEGORY_COLORS[concept.category] }}
                            />
                            <span className="text-sm text-white">{concept.name}</span>
                          </div>
                        ))}
                        {impactAnalysis.indirectImpact.length > 8 && (
                          <div className="text-xs text-slate-500 text-center">
                            +{impactAnalysis.indirectImpact.length - 8} alte concepte
                          </div>
                        )}
                        {impactAnalysis.indirectImpact.length === 0 && (
                          <div className="text-sm text-slate-500 text-center py-4">
                            Fără impact indirect
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-[300px] flex items-center justify-center text-slate-500">
                    <div className="text-center">
                      <Target className="h-12 w-12 mx-auto mb-3 opacity-20" />
                      <p>Selectează un concept pentru analiză</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Category Distribution */}
            <Card className="bg-slate-900/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-lg">Distribuție pe Categorii</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
                    const concepts = getConceptsByCategory(key as ConceptCategory);
                    const percentage = (concepts.length / CONCEPTS.length) * 100;
                    return (
                      <div key={key} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: CATEGORY_COLORS[key as ConceptCategory] }}
                            />
                            {label}
                          </div>
                          <span className="text-slate-400">{concepts.length}</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
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
                <div className="mt-6 pt-4 border-t border-slate-700">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-violet-400">{CONCEPTS.length}</div>
                      <div className="text-xs text-slate-500">Concepte</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">{CONCEPT_RELATIONS.length}</div>
                      <div className="text-xs text-slate-500">Relații</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">
                        {CONCEPTS.filter(c => c.importance === 'critical').length}
                      </div>
                      <div className="text-xs text-slate-500">Critice</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Affected Chapters Tab */}
        <TabsContent value="chapters" className="mt-4">
          <Card className="bg-slate-900/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-emerald-400" />
                Capitole Afectate la Update
                {selectedConcept && (
                  <Badge className="ml-2 bg-emerald-600">
                    {affectedChapters.length} capitole
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedConcept ? (
                <div className="space-y-4">
                  <div className="p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-emerald-400" />
                      <span className="font-medium text-white">
                        Update la "{selectedConcept.name}"
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">
                      Modificarea acestui concept va necesita revizuirea următoarelor capitole:
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
                              ? 'bg-emerald-500/20 border-emerald-500/50'
                              : 'bg-slate-800/50 border-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                              isDirectChapter ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300'
                            }`}>
                              {index + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-white truncate">
                                {getChapterName(chapterId)}
                              </div>
                              <div className="text-xs text-slate-500">
                                {isDirectChapter ? 'Capitol direct' : 'Impact indirect'}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {affectedChapters.length === 0 && (
                    <div className="text-center py-8 text-slate-500">
                      Nu există capitole afectate
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-[200px] flex items-center justify-center text-slate-500">
                  <div className="text-center">
                    <BookOpen className="h-12 w-12 mx-auto mb-3 opacity-20" />
                    <p>Selectează un concept pentru a vedea capitolele afectate</p>
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
