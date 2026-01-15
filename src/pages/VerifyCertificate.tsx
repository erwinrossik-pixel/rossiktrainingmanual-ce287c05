import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Search, CheckCircle2, XCircle, AlertTriangle, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import { ro, de, enUS } from "date-fns/locale";

type CertificateStatus = "VALID" | "EXPIRED" | "REVOKED" | "NOT_FOUND" | "LOADING";

interface CertificateData {
  id: string;
  certificate_code: string;
  trainee_name: string;
  issued_at: string;
  expires_at: string;
  chapters_completed: number;
  quizzes_passed: number;
  average_score: number;
  total_training_hours: number;
  is_revoked: boolean;
  revoke_reason?: string;
}

export default function VerifyCertificate() {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const [searchCode, setSearchCode] = useState(code || "");
  const [status, setStatus] = useState<CertificateStatus>(code ? "LOADING" : "NOT_FOUND");
  const [certificate, setCertificate] = useState<CertificateData | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (code) {
      verifyCertificate(code);
    }
  }, [code]);

  const verifyCertificate = async (certCode: string) => {
    setIsSearching(true);
    setStatus("LOADING");

    try {
      const { data, error } = await supabase
        .from("certificates")
        .select("*")
        .eq("certificate_code", certCode.toUpperCase().trim())
        .single();

      if (error || !data) {
        setStatus("NOT_FOUND");
        setCertificate(null);
        setIsSearching(false);
        return;
      }

      setCertificate(data as CertificateData);

      if (data.is_revoked) {
        setStatus("REVOKED");
      } else if (new Date(data.expires_at) < new Date()) {
        setStatus("EXPIRED");
      } else {
        setStatus("VALID");
      }
    } catch (err) {
      console.error("Error verifying certificate:", err);
      setStatus("NOT_FOUND");
      setCertificate(null);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearch = () => {
    if (searchCode.trim()) {
      navigate(`/verify/${searchCode.trim().toUpperCase()}`);
      verifyCertificate(searchCode.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const getStatusDisplay = () => {
    switch (status) {
      case "VALID":
        return {
          icon: <CheckCircle2 className="w-16 h-16 text-green-500" />,
          title: "Certificate Valid",
          description: "This certificate is authentic and currently valid.",
          badgeClass: "bg-green-500 hover:bg-green-600",
          badgeText: "VALID",
        };
      case "EXPIRED":
        return {
          icon: <Clock className="w-16 h-16 text-yellow-500" />,
          title: "Certificate Expired",
          description: "This certificate was valid but has now expired.",
          badgeClass: "bg-yellow-500 hover:bg-yellow-600",
          badgeText: "EXPIRED",
        };
      case "REVOKED":
        return {
          icon: <XCircle className="w-16 h-16 text-red-500" />,
          title: "Certificate Revoked",
          description: certificate?.revoke_reason || "This certificate has been revoked by the administrator.",
          badgeClass: "bg-red-500 hover:bg-red-600",
          badgeText: "REVOKED",
        };
      case "NOT_FOUND":
        return {
          icon: <AlertTriangle className="w-16 h-16 text-muted-foreground" />,
          title: "Certificate Not Found",
          description: "No certificate found with this code. Please check the code and try again.",
          badgeClass: "bg-muted hover:bg-muted",
          badgeText: "NOT FOUND",
        };
      case "LOADING":
        return {
          icon: <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin" />,
          title: "Verifying...",
          description: "Please wait while we verify the certificate.",
          badgeClass: "bg-muted",
          badgeText: "CHECKING",
        };
    }
  };

  const statusDisplay = getStatusDisplay();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Rossik Certificate Verification</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Verify a Certificate
            </CardTitle>
            <CardDescription>
              Enter the certificate code to verify its authenticity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Input
                placeholder="e.g., ROSS-2025-12345"
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value.toUpperCase())}
                onKeyPress={handleKeyPress}
                className="font-mono text-lg tracking-wider"
              />
              <Button onClick={handleSearch} disabled={isSearching || !searchCode.trim()}>
                {isSearching ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Verify
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Result Section */}
        {(code || status !== "NOT_FOUND" || certificate) && (
          <Card className={`border-2 ${
            status === "VALID" ? "border-green-500/30" :
            status === "EXPIRED" ? "border-yellow-500/30" :
            status === "REVOKED" ? "border-red-500/30" :
            "border-muted"
          }`}>
            <CardContent className="pt-8">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {statusDisplay.icon}
                </div>
                <Badge className={statusDisplay.badgeClass}>
                  {statusDisplay.badgeText}
                </Badge>
                <h2 className="text-2xl font-bold mt-4">{statusDisplay.title}</h2>
                <p className="text-muted-foreground mt-2">{statusDisplay.description}</p>
              </div>

              {certificate && status !== "NOT_FOUND" && (
                <div className="border-t pt-6 mt-6">
                  <h3 className="font-semibold text-lg mb-4 text-center">Certificate Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Certificate Holder</p>
                      <p className="font-semibold text-lg">{certificate.trainee_name}</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Certificate Code</p>
                      <p className="font-mono font-semibold text-lg">{certificate.certificate_code}</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Issue Date</p>
                      <p className="font-semibold">
                        {format(new Date(certificate.issued_at), "dd MMMM yyyy", { locale: enUS })}
                      </p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Expiry Date</p>
                      <p className={`font-semibold ${status === "EXPIRED" ? "text-yellow-600" : ""}`}>
                        {format(new Date(certificate.expires_at), "dd MMMM yyyy", { locale: enUS })}
                      </p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Chapters Completed</p>
                      <p className="font-semibold text-lg">{certificate.chapters_completed}</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Quizzes Passed</p>
                      <p className="font-semibold text-lg">{certificate.quizzes_passed}</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Average Score</p>
                      <p className="font-semibold text-lg">{certificate.average_score}%</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Training Hours</p>
                      <p className="font-semibold text-lg">
                        {certificate.total_training_hours > 0 
                          ? `${Math.round(certificate.total_training_hours)} hours` 
                          : "N/A"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-center text-muted-foreground">
                      This certificate was issued by <strong>Rossik Transport & Logistic</strong> for successful completion of the Freight Forwarding Training Manual.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Info Section */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Certificate verification provided by Rossik Transport & Logistic Training Platform.
          </p>
          <p className="mt-2">
            Questions? Contact <a href="mailto:training@rossik.ro" className="text-primary hover:underline">training@rossik.ro</a>
          </p>
        </div>
      </main>
    </div>
  );
}
