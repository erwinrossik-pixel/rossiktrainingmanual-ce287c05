import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Award, Search, Download, XCircle, Eye, RefreshCw, CheckCircle2, Clock, AlertTriangle, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

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
}

type FilterType = "all" | "active" | "expired" | "revoked";

export function CertificatesDashboard() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [revokeDialogOpen, setRevokeDialogOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [revokeReason, setRevokeReason] = useState("");
  const [isRevoking, setIsRevoking] = useState(false);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);

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
      console.error("Error fetching certificates:", error);
      toast.error("Eroare la încărcarea certificatelor");
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
      console.error("Error revoking certificate:", error);
      toast.error("Eroare la revocarea certificatului");
    } else {
      toast.success(`Certificatul ${selectedCertificate.certificate_code} a fost revocat`);
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
            Activ
          </Badge>
        );
      case "expired":
        return (
          <Badge className="bg-yellow-500 hover:bg-yellow-600">
            <Clock className="w-3 h-3 mr-1" />
            Expirat
          </Badge>
        );
      case "revoked":
        return (
          <Badge className="bg-red-500 hover:bg-red-600">
            <XCircle className="w-3 h-3 mr-1" />
            Revocat
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Certificate</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.active}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Expirate</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stats.expired}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Revocate</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.revoked}</div>
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
                <SelectValue placeholder="Filtrează" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toate ({stats.total})</SelectItem>
                <SelectItem value="active">Active ({stats.active})</SelectItem>
                <SelectItem value="expired">Expirate ({stats.expired})</SelectItem>
                <SelectItem value="revoked">Revocate ({stats.revoked})</SelectItem>
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
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(`/verify/${cert.certificate_code}`, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        {!cert.is_revoked && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-100"
                            onClick={() => openRevokeDialog(cert)}
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
    </div>
  );
}
