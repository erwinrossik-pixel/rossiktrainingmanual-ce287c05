import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md px-6">
        <div className="mb-6">
          <span className="text-8xl font-bold text-primary">404</span>
        </div>
        <h1 className="mb-3 text-2xl font-bold text-foreground">Pagină negăsită</h1>
        <p className="mb-6 text-muted-foreground">
          Ne pare rău, pagina pe care o cauți nu există sau a fost mutată.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => navigate(-1)} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Înapoi
          </Button>
          <Button onClick={() => navigate('/')}>
            <Home className="mr-2 h-4 w-4" />
            Acasă
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
