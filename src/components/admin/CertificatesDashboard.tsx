import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { logger } from '@/utils/logger';
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Award, Search, Download, XCircle, Eye, RefreshCw, CheckCircle2, Clock, AlertTriangle, ExternalLink, TrendingUp, Calendar, Users, BarChart3, Printer } from "lucide-react";
import { OfficialDiploma } from "./OfficialDiploma";
import { format, subMonths, startOfMonth, endOfMonth, parseISO, isSameMonth } from "date-fns";
import { ro, de, enUS } from "date-fns/locale";
import { toast } from "sonner";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from "recharts";

interface Certificate {
  id: string;
  user_id: string;
  certificate_code: string;
  trainee_name: string;
  issued_at: string;
  expires_at: string;
  chapters_completed: number;
  quizzes_passed: number;
  average_score: number;
  total_training_hours: number;
  is_revoked: boolean;
  revoked_at: string | null;
  revoke_reason: string | null;
  final_exam_score?: number;
  final_exam_passed_at?: string;
}

type FilterType = "all" | "active" | "expired" | "revoked";

export function CertificatesDashboard() {
  const { t, language } = useLanguage();
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [revokeDialogOpen, setRevokeDialogOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [revokeReason, setRevokeReason] = useState("");
  const [isRevoking, setIsRevoking] = useState(false);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [diplomaDialogOpen, setDiplomaDialogOpen] = useState(false);
  
  const dateLocale = language === 'de' ? de : language === 'en' ? enUS : ro;

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("certificates")
      .select("*")
      .order("issued_at", { ascending: false });

    if (error) {
      logger.error("Error fetching certificates:", error);
      toast.error(t('admin.certificates.errorLoading'));
    } else {
      setCertificates(data || []);
    }
    setLoading(false);
  };

  const getStatus = (cert: Certificate): "active" | "expired" | "revoked" => {
    if (cert.is_revoked) return "revoked";
    if (new Date(cert.expires_at) < new Date()) return "expired";
    return "active";
  };

  const filteredCertificates = certificates.filter((cert) => {
    const status = getStatus(cert);
    const matchesFilter = filter === "all" || status === filter;
    const matchesSearch = 
      cert.trainee_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.certificate_code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = {
    total: certificates.length,
    active: certificates.filter((c) => getStatus(c) === "active").length,
    expired: certificates.filter((c) => getStatus(c) === "expired").length,
    revoked: certificates.filter((c) => getStatus(c) === "revoked").length,
  };

  // Monthly chart data - last 12 months
  const monthlyData = useMemo(() => {
    const months: { month: string; issued: number; active: number; expired: number; revoked: number }[] = [];
    
    for (let i = 11; i >= 0; i--) {
      const monthDate = subMonths(new Date(), i);
      const monthStart = startOfMonth(monthDate);
      const monthEnd = endOfMonth(monthDate);
      
      const monthCerts = certificates.filter(cert => {
        const issuedDate = parseISO(cert.issued_at);
        return issuedDate >= monthStart && issuedDate <= monthEnd;
      });
      
      months.push({
        month: format(monthDate, "MMM yy", { locale: dateLocale }),
        issued: monthCerts.length,
        active: monthCerts.filter(c => getStatus(c) === "active").length,
        expired: monthCerts.filter(c => getStatus(c) === "expired").length,
        revoked: monthCerts.filter(c => getStatus(c) === "revoked").length,
      });
    }
    
    return months;
  }, [certificates, dateLocale]);

  // Status distribution for pie chart
  const statusDistribution = useMemo(() => [
    { name: t('admin.certificates.active'), value: stats.active, color: "#22c55e" },
    { name: t('admin.certificates.expired'), value: stats.expired, color: "#eab308" },
    { name: t('admin.certificates.revoked'), value: stats.revoked, color: "#ef4444" },
  ].filter(item => item.value > 0), [stats, t]);

  // Average score trend
  const scoreTrend = useMemo(() => {
    const months: { month: string; avgScore: number; count: number }[] = [];
    
    for (let i = 11; i >= 0; i--) {
      const monthDate = subMonths(new Date(), i);
      const monthStart = startOfMonth(monthDate);
      const monthEnd = endOfMonth(monthDate);
      
      const monthCerts = certificates.filter(cert => {
        const issuedDate = parseISO(cert.issued_at);
        return issuedDate >= monthStart && issuedDate <= monthEnd;
      });
      
      const avgScore = monthCerts.length > 0 
        ? Math.round(monthCerts.reduce((sum, c) => sum + c.average_score, 0) / monthCerts.length)
        : 0;
      
      months.push({
        month: format(monthDate, "MMM yy", { locale: dateLocale }),
        avgScore,
        count: monthCerts.length
      });
    }
    
    return months;
  }, [certificates, dateLocale]);

  // Top performers
  const topPerformers = useMemo(() => {
    return [...certificates]
      .sort((a, b) => b.average_score - a.average_score)
      .slice(0, 5);
  }, [certificates]);

  // Calculate rate and growth
  const thisMonthCount = monthlyData[monthlyData.length - 1]?.issued || 0;
  const lastMonthCount = monthlyData[monthlyData.length - 2]?.issued || 0;
  const growthRate = lastMonthCount > 0 
    ? Math.round(((thisMonthCount - lastMonthCount) / lastMonthCount) * 100) 
    : 0;

  const handleRevoke = async () => {
    if (!selectedCertificate || !revokeReason.trim()) return;

    setIsRevoking(true);
    const { error } = await supabase
      .from("certificates")
      .update({
        is_revoked: true,
        revoked_at: new Date().toISOString(),
        revoke_reason: revokeReason.trim(),
      })
      .eq("id", selectedCertificate.id);

    if (error) {
      logger.error("Error revoking certificate:", error);
      toast.error(t('admin.certificates.errorRevoke'));
    } else {
      toast.success(t('admin.certificates.revokeSuccess').replace('{code}', selectedCertificate.certificate_code));
      fetchCertificates();
    }

    setIsRevoking(false);
    setRevokeDialogOpen(false);
    setRevokeReason("");
    setSelectedCertificate(null);
  };

  const openRevokeDialog = (cert: Certificate) => {
    setSelectedCertificate(cert);
    setRevokeDialogOpen(true);
  };

  const openDetailsDialog = (cert: Certificate) => {
    setSelectedCertificate(cert);
    setDetailsDialogOpen(true);
  };

  const exportToCSV = () => {
    const headers = [
      "Cod Certificat",
      "Nume",
      "Data Emitere",
      "Data Expirare",
      "Status",
      "Capitole",
      "Quiz-uri",
      "Scor Mediu",
      "Ore Training"
    ];
    
    const rows = filteredCertificates.map((cert) => [
      cert.certificate_code,
      cert.trainee_name,
      format(new Date(cert.issued_at), "dd.MM.yyyy"),
      format(new Date(cert.expires_at), "dd.MM.yyyy"),
      getStatus(cert).toUpperCase(),
      cert.chapters_completed,
      cert.quizzes_passed,
      `${cert.average_score}%`,
      Math.round(cert.total_training_hours || 0)
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `certificates-${format(new Date(), "yyyy-MM-dd")}.csv`;
    link.click();
  };

  const getStatusBadge = (cert: Certificate) => {
    const status = getStatus(cert);
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            {t('admin.certificates.active')}
          </Badge>
        );
      case "expired":
        return (
          <Badge className="bg-yellow-500 hover:bg-yellow-600">
            <Clock className="w-3 h-3 mr-1" />
            {t('admin.certificates.expired')}
          </Badge>
        );
      case "revoked":
        return (
          <Badge className="bg-red-500 hover:bg-red-600">
            <XCircle className="w-3 h-3 mr-1" />
            {t('admin.certificates.revoked')}
          </Badge>
        );
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{t('admin.certificates.total')}</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {thisMonthCount} {t('admin.certificates.thisMonth')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{t('admin.certificates.active')}</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.active}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.total > 0 ? Math.round((stats.active / stats.total) * 100) : 0}% {t('admin.certificates.ofTotal')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{t('admin.certificates.expired')}</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stats.expired}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.total > 0 ? Math.round((stats.expired / stats.total) * 100) : 0}% {t('admin.certificates.ofTotal')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{t('admin.certificates.revoked')}</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.revoked}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.total > 0 ? Math.round((stats.revoked / stats.total) * 100) : 0}% {t('admin.certificates.ofTotal')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{t('admin.certificates.monthlyGrowth')}</CardTitle>
            <TrendingUp className={`h-4 w-4 ${growthRate >= 0 ? 'text-green-500' : 'text-red-500'}`} />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${growthRate >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {growthRate >= 0 ? '+' : ''}{growthRate}%
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {t('admin.certificates.vsLastMonth')}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Issued Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              {t('admin.certificates.issuedMonthly')}
            </CardTitle>
            <CardDescription>{t('admin.certificates.last12Months')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} className="fill-muted-foreground" />
                  <YAxis tick={{ fontSize: 12 }} className="fill-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="active" name={t('admin.certificates.active')} fill="#22c55e" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expired" name={t('admin.certificates.expired')} fill="#eab308" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="revoked" name={t('admin.certificates.revoked')} fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Status Distribution Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              {t('admin.certificates.statusDist')}
            </CardTitle>
            <CardDescription>{t('admin.certificates.byStatus')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              {statusDistribution.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={statusDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {statusDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--background))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="text-center text-muted-foreground">
                  <Award className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>{t('admin.certificates.noCertificates')}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Score Trend and Top Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Score Trend Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              {t('admin.certificates.avgScoreTrend')}
            </CardTitle>
            <CardDescription>{t('admin.certificates.avgScoresDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={scoreTrend}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} className="fill-muted-foreground" />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} className="fill-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => [`${value}%`, t('admin.kpi.avgScore')]}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="avgScore" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-500" />
              Top Performeri
            </CardTitle>
            <CardDescription>Cele mai mari scoruri</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topPerformers.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">Nu există certificate</p>
              ) : (
                topPerformers.map((cert, index) => (
                  <div key={cert.id} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === 0 ? 'bg-yellow-100 text-yellow-700' :
                      index === 1 ? 'bg-gray-100 text-gray-700' :
                      index === 2 ? 'bg-orange-100 text-orange-700' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{cert.trainee_name}</p>
                      <p className="text-xs text-muted-foreground">{format(parseISO(cert.issued_at), "dd.MM.yyyy")}</p>
                    </div>
                    <Badge variant="outline" className="font-mono">
                      {cert.average_score}%
                    </Badge>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Certificate Emise</CardTitle>
              <CardDescription>Gestionarea tuturor certificatelor emise</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={fetchCertificates}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" size="sm" onClick={exportToCSV}>
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Caută după nume sau cod..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filter} onValueChange={(value: FilterType) => setFilter(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t('admin.certificates.filterAll')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('admin.certificates.filterAll')} ({stats.total})</SelectItem>
                <SelectItem value="active">{t('admin.certificates.filterActive')} ({stats.active})</SelectItem>
                <SelectItem value="expired">{t('admin.certificates.filterExpired')} ({stats.expired})</SelectItem>
                <SelectItem value="revoked">{t('admin.certificates.filterRevoked')} ({stats.revoked})</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filteredCertificates.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Award className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Nu s-au găsit certificate</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cod</TableHead>
                  <TableHead>Nume</TableHead>
                  <TableHead>Data Emitere</TableHead>
                  <TableHead>Data Expirare</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Scor</TableHead>
                  <TableHead>Acțiuni</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCertificates.map((cert) => (
                  <TableRow key={cert.id}>
                    <TableCell className="font-mono text-sm">{cert.certificate_code}</TableCell>
                    <TableCell className="font-medium">{cert.trainee_name}</TableCell>
                    <TableCell>{format(new Date(cert.issued_at), "dd.MM.yyyy")}</TableCell>
                    <TableCell>{format(new Date(cert.expires_at), "dd.MM.yyyy")}</TableCell>
                    <TableCell>{getStatusBadge(cert)}</TableCell>
                    <TableCell>{cert.average_score}%</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openDetailsDialog(cert)}
                          title={t('admin.certificates.viewDetails')}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSelectedCertificate(cert);
                            setDiplomaDialogOpen(true);
                          }}
                          title={language === 'ro' ? 'Printează Diplomă' : language === 'de' ? 'Diplom drucken' : 'Print Diploma'}
                          className="text-amber-600 hover:text-amber-700 hover:bg-amber-50"
                        >
                          <Printer className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(`/verify/${cert.certificate_code}`, "_blank")}
                          title={t('admin.certificates.verify')}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        {!cert.is_revoked && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-100"
                            onClick={() => openRevokeDialog(cert)}
                            title={t('admin.certificates.revoke')}
                          >
                            <XCircle className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Revoke Dialog */}
      <Dialog open={revokeDialogOpen} onOpenChange={setRevokeDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="h-5 w-5" />
              Revocare Certificat
            </DialogTitle>
            <DialogDescription>
              Această acțiune va invalida permanent certificatul. Motivul revocării va fi vizibil public.
            </DialogDescription>
          </DialogHeader>
          {selectedCertificate && (
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Certificat</p>
                <p className="font-mono font-semibold">{selectedCertificate.certificate_code}</p>
                <p className="text-sm mt-1">{selectedCertificate.trainee_name}</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="reason">Motivul Revocării *</Label>
                <Textarea
                  id="reason"
                  placeholder="Introduceți motivul revocării..."
                  value={revokeReason}
                  onChange={(e) => setRevokeReason(e.target.value)}
                  rows={3}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setRevokeDialogOpen(false)}>
              Anulează
            </Button>
            <Button
              variant="destructive"
              onClick={handleRevoke}
              disabled={!revokeReason.trim() || isRevoking}
            >
              {isRevoking ? "Se revocă..." : "Revocă Certificat"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Details Dialog */}
      <Dialog open={detailsDialogOpen} onOpenChange={setDetailsDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Detalii Certificat
            </DialogTitle>
          </DialogHeader>
          {selectedCertificate && (
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground">Cod Certificat</p>
                  <p className="font-mono font-bold text-lg">{selectedCertificate.certificate_code}</p>
                </div>
                {getStatusBadge(selectedCertificate)}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Titular</p>
                  <p className="font-semibold">{selectedCertificate.trainee_name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Scor Mediu</p>
                  <p className="font-semibold">{selectedCertificate.average_score}%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Data Emitere</p>
                  <p className="font-semibold">{format(new Date(selectedCertificate.issued_at), "dd.MM.yyyy HH:mm")}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Data Expirare</p>
                  <p className="font-semibold">{format(new Date(selectedCertificate.expires_at), "dd.MM.yyyy")}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Capitole Completate</p>
                  <p className="font-semibold">{selectedCertificate.chapters_completed}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Quiz-uri Trecute</p>
                  <p className="font-semibold">{selectedCertificate.quizzes_passed}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ore Training</p>
                  <p className="font-semibold">{Math.round(selectedCertificate.total_training_hours || 0)} ore</p>
                </div>
              </div>

              {selectedCertificate.is_revoked && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600 font-semibold">Revocat la: {format(new Date(selectedCertificate.revoked_at!), "dd.MM.yyyy HH:mm")}</p>
                  <p className="text-sm text-red-600 mt-1">Motiv: {selectedCertificate.revoke_reason}</p>
                </div>
              )}

              <Button
                className="w-full"
                variant="outline"
                onClick={() => window.open(`/verify/${selectedCertificate.certificate_code}`, "_blank")}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Deschide Pagina de Verificare
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Official Diploma Dialog */}
      {selectedCertificate && (
        <OfficialDiploma
          certificate={selectedCertificate}
          open={diplomaDialogOpen}
          onOpenChange={setDiplomaDialogOpen}
        />
      )}
    </div>
  );
}
