import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight } from "lucide-react";

const Placeholder = () => {
  const { page } = useParams();
  const { t } = useLanguage();

  const pageContent: Record<string, { title: string; description: string }> = {
    dashboard: {
      title: "Your Learning Dashboard",
      description:
        "Track your progress, view credit scores, and manage your study materials all in one place.",
    },
    "my-tasks": {
      title: "My Study Tasks",
      description:
        "Organize your study schedule with smart task management and personalized reminders.",
    },
    "ai-help": {
      title: "AI Study Assistant",
      description:
        "Get instant, AI-powered explanations for complex concepts anytime, anywhere.",
    },
    "download-notes": {
      title: "Download Study Materials",
      description:
        "Download your favorite notes in PDF, DOCX, or image formats for offline access.",
    },
    "my-achievements": {
      title: "Your Achievements",
      description:
        "View your credit score, badges, and celebrate your learning milestones.",
    },
    "help-center": {
      title: "Help & Support",
      description:
        "Get answers to your questions and find helpful guides for using NotesHub.",
    },
    streams: {
      title: "Browse All Streams",
      description:
        "Explore comprehensive study materials for JEE, NEET, CA, and IIT/NIT courses.",
    },
    features: {
      title: "All Features",
      description:
        "Discover the complete set of tools and features available to enhance your learning.",
    },
  };

  const content = pageContent[page || "dashboard"] || {
    title: t("placeholder.featureComingSoon"),
    description: t("placeholder.inDevelopment"),
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">📝</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {content.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {content.description}
            </p>
          </div>

          <div className="bg-card rounded-lg border border-border p-8 mb-8">
            <p className="text-muted-foreground mb-6">
              {t("placeholder.inDevelopment")}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              {t("placeholder.explore")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              {t("placeholder.backHome")}
              <ArrowRight size={20} />
            </a>
            <a
              href="/#features"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              {t("placeholder.exploreFeatures")}
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              {t("placeholder.feedback")}
            </p>
            <button className="text-primary hover:text-primary/80 font-semibold transition-colors">
              {t("placeholder.sendFeedback")}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Placeholder;
