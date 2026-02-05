import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Trophy,
  Download,
  CheckCircle,
  Sparkles,
  BookOpen,
  Users,
  ArrowRight,
  Star,
  Zap,
  Upload,
} from "lucide-react";

export default function Index() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-slide-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {t("hero.title").split(" & ").length > 1 ? (
                  <>
                    Your{" "}
                    <span className="text-primary">Complete Study Hub</span> for
                    Board & Competitive Exams
                  </>
                ) : (
                  t("hero.title")
                )}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                  {t("hero.startLearning")}
                  <ArrowRight size={20} />
                </button>
                <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3 rounded-lg transition-colors">
                  {t("hero.exploreStreams")}
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 hidden md:flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/3059654/pexels-photo-3059654.jpeg"
                alt="Student studying with books at desk"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                10K+
              </div>
              <div className="text-sm text-muted-foreground">
                {t("hero.materials")}
              </div>
            </div>
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1">
                50K+
              </div>
              <div className="text-sm text-muted-foreground">
                {t("hero.students")}
              </div>
            </div>
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">
                95%
              </div>
              <div className="text-sm text-muted-foreground">
                {t("hero.successRate")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streams Section */}
      <section
        id="streams"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("streams.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("streams.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* JEE Stream */}
            <div className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <img
                src="https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="JEE"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Zap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t("streams.jee")}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("streams.jeeDesc")}
              </p>
              <div className="flex items-center text-primary font-semibold text-sm hover:gap-2 transition-all">
                {t("streams.explore")} <ArrowRight size={16} />
              </div>
            </div>

            {/* NEET Stream */}
            <div className="bg-background rounded-lg p-6 border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <img
                src="https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="NEET"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <BookOpen className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t("streams.neet")}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("streams.neetDesc")}
              </p>
              <div className="flex items-center text-secondary font-semibold text-sm hover:gap-2 transition-all">
                {t("streams.explore")} <ArrowRight size={16} />
              </div>
            </div>

            {/* CA Stream */}
            <div className="bg-background rounded-lg p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <img
                src="https://images.pexels.com/photos/6693857/pexels-photo-6693857.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="CA"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Trophy className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t("streams.ca")}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("streams.caDesc")}
              </p>
              <div className="flex items-center text-accent font-semibold text-sm hover:gap-2 transition-all">
                {t("streams.explore")} <ArrowRight size={16} />
              </div>
            </div>

            {/* IIT/NIT Stream */}
            <div className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <img
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="IIT/NIT"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t("streams.iitNit")}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("streams.iitNitDesc")}
              </p>
              <div className="flex items-center text-primary font-semibold text-sm hover:gap-2 transition-all">
                {t("streams.explore")} <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("features.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("features.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Credit Score */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t("features.creditScore")}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("features.creditScoreDesc")}
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                <Star size={16} /> {t("features.creditScore")}
              </div>
            </div>

            {/* Tasks */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-secondary/50 transition-all duration-300">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t("features.tasks")}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("features.tasksDesc")}
              </p>
              <div className="flex items-center gap-2 text-secondary text-sm font-semibold">
                <Zap size={16} /> {t("features.tasks")}
              </div>
            </div>

            {/* AI Explanation */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-accent/50 transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t("features.aiExplanation")}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("features.aiDesc")}
              </p>
              <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                <Sparkles size={16} /> {t("features.aiExplanation")}
              </div>
            </div>

            {/* Download Notes */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Download className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t("features.downloadNotes")}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("features.downloadDesc")}
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                <Download size={16} /> {t("features.downloadNotes")}
              </div>
            </div>

            {/* Mark Complete */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-secondary/50 transition-all duration-300">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t("features.markComplete")}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("features.markDesc")}
              </p>
              <div className="flex items-center gap-2 text-secondary text-sm font-semibold">
                <CheckCircle size={16} /> {t("features.markComplete")}
              </div>
            </div>

            {/* Language Support */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-accent/50 transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t("features.multiLang")}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("features.multiLangDesc")}
              </p>
              <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                <Users size={16} /> {t("features.multiLang")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Notes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {t("upload.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("upload.subtitle")}
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Upload className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      {t("upload.uploadNotes")}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t("upload.uploadDesc")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Trophy className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      {t("upload.earnCredits")}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t("upload.earnCreditsDesc")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      {t("upload.getVerified")}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t("upload.getVerifiedDesc")}
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors flex items-center gap-2">
                {t("upload.startUploading")}
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Right Image and How It Works */}
            <div>
              <img
                src="https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Upload notes"
                className="rounded-lg shadow-lg mb-8 w-full h-64 object-cover"
              />

              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {t("upload.howItWorks")}
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {t("upload.step1")}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {t("upload.step1Desc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {t("upload.step2")}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {t("upload.step2Desc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {t("upload.step3")}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {t("upload.step3Desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t("cta.subtitle")}
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 rounded-lg transition-colors inline-flex items-center gap-2">
            {t("cta.getStarted")}
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Help Section */}
      <section id="help" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("faq.title")}
            </h2>
            <p className="text-lg text-muted-foreground">{t("faq.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { q: "faq.q1", a: "faq.a1" },
              { q: "faq.q2", a: "faq.a2" },
              { q: "faq.q3", a: "faq.a3" },
              { q: "faq.q4", a: "faq.a4" },
              { q: "faq.q5", a: "faq.a5" },
              { q: "faq.q6", a: "faq.a6" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {t(item.q)}
                </h3>
                <p className="text-muted-foreground text-sm">{t(item.a)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
