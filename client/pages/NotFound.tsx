import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-2xl font-bold text-foreground mb-2">
            {t("notFound.title")}
          </p>
          <p className="text-muted-foreground text-lg mb-8">
            {t("notFound.description")}
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
            {t("notFound.returnHome")}
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
