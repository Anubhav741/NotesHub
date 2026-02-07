import { useState, useEffect } from "react";
import { Menu, X, Search, Sun, Moon, Globe, Home } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isNotesPage = location.pathname === "/notes";

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);
  const toggleLanguage = () => setLanguage(language === "en" ? "hi" : "en");

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Home Button */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                📚
              </span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">
              NotesHub
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {isNotesPage ? (
              <>
                <button
                  onClick={() => navigate("/")}
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  <Home size={18} />
                  Home
                </button>
              </>
            ) : (
              <>
                <a
                  href="#streams"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {t("header.streams")}
                </a>
                <a
                  href="#features"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {t("header.features")}
                </a>
                <a
                  href="#help"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {t("header.help")}
                </a>
              </>
            )}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="hidden sm:flex items-center gap-2 bg-muted rounded-lg px-3 py-2 border border-border">
              <Search size={18} className="text-muted-foreground" />
              <input
                type="text"
                placeholder={t("header.searchPlaceholder")}
                className="bg-transparent outline-none text-sm text-foreground placeholder-muted-foreground w-32"
              />
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun size={20} className="text-foreground" />
              ) : (
                <Moon size={20} className="text-foreground" />
              )}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 hover:bg-muted rounded-lg transition-colors flex items-center gap-1"
              aria-label="Toggle language"
            >
              <Globe size={20} className="text-foreground" />
              <span className="text-sm font-medium text-foreground">
                {language.toUpperCase()}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X size={24} className="text-foreground" />
              ) : (
                <Menu size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {isNotesPage ? (
              <button
                onClick={() => {
                  navigate("/");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium flex items-center gap-2"
              >
                <Home size={18} />
                Home
              </button>
            ) : (
              <>
                <a
                  href="#streams"
                  className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.streams")}
                </a>
                <a
                  href="#features"
                  className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.features")}
                </a>
                <a
                  href="#help"
                  className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.help")}
                </a>
              </>
            )}
            <div className="px-4 py-2 flex items-center gap-2 bg-muted rounded-lg border border-border">
              <Search size={18} className="text-muted-foreground" />
              <input
                type="text"
                placeholder={t("header.searchPlaceholder")}
                className="bg-transparent outline-none text-sm text-foreground placeholder-muted-foreground flex-1"
              />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
