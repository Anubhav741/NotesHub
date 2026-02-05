import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">📚</span>
              </div>
              <h3 className="font-bold text-lg">NotesHub</h3>
            </div>
            <p className="text-background/80 text-sm">
              {t("footer.about")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#streams" className="text-background/80 hover:text-background transition-colors">{t("header.streams")}</a></li>
              <li><a href="#features" className="text-background/80 hover:text-background transition-colors">{t("header.features")}</a></li>
              <li><a href="#upload" className="text-background/80 hover:text-background transition-colors">{t("upload.uploadNotes")}</a></li>
              <li><a href="#help" className="text-background/80 hover:text-background transition-colors">{t("header.help")}</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.resources")}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Study Tips</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">FAQ</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.getInTouch")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/80">
                <Mail size={16} className="flex-shrink-0" />
                <span>support@noteshub.com</span>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Phone size={16} className="flex-shrink-0" />
                <span>+91 9876 543 210</span>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <MapPin size={16} className="flex-shrink-0" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/20 rounded-lg p-8 mb-8 text-center">
          <h3 className="text-xl font-bold mb-2">{t("footer.startJourney")}</h3>
          <p className="text-background/80 mb-4">{t("footer.description")}</p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors">
            {t("footer.getStartedFree")}
          </button>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/80 text-sm">
              {t("footer.copyright")}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
