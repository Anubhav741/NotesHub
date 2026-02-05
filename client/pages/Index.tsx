import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy, Download, CheckCircle, Sparkles, BookOpen, Users, ArrowRight, Star, Zap } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your <span className="text-primary">Complete Study Hub</span> for Board & Competitive Exams
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Organized notes, structured study plans, and AI-powered explanations. Everything you need to ace JEE, NEET, CA, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                Start Learning Now
                <ArrowRight size={20} />
              </button>
              <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3 rounded-lg transition-colors">
                Explore Streams
              </button>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">10K+</div>
              <div className="text-sm text-muted-foreground">Study Materials</div>
            </div>
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1">50K+</div>
              <div className="text-sm text-muted-foreground">Active Students</div>
            </div>
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Streams Section */}
      <section id="streams" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Choose Your Stream</h2>
            <p className="text-lg text-muted-foreground">Tailored study materials for your exam board</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* JEE Stream */}
            <div className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Zap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">JEE</h3>
              <p className="text-muted-foreground text-sm mb-4">Physics, Chemistry & Mathematics notes for JEE Mains & Advanced</p>
              <div className="flex items-center text-primary font-semibold text-sm hover:gap-2 transition-all">
                Explore <ArrowRight size={16} />
              </div>
            </div>

            {/* NEET Stream */}
            <div className="bg-background rounded-lg p-6 border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <BookOpen className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">NEET</h3>
              <p className="text-muted-foreground text-sm mb-4">Biology, Chemistry & Physics comprehensive study material for NEET</p>
              <div className="flex items-center text-secondary font-semibold text-sm hover:gap-2 transition-all">
                Explore <ArrowRight size={16} />
              </div>
            </div>

            {/* CA Stream */}
            <div className="bg-background rounded-lg p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Trophy className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">CA</h3>
              <p className="text-muted-foreground text-sm mb-4">Accounts, Laws & Economics notes for CA Foundation & Intermediate</p>
              <div className="flex items-center text-accent font-semibold text-sm hover:gap-2 transition-all">
                Explore <ArrowRight size={16} />
              </div>
            </div>

            {/* IIT/NIT Stream */}
            <div className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">IIT/NIT</h3>
              <p className="text-muted-foreground text-sm mb-4">Advanced CS courses and interview preparation materials</p>
              <div className="flex items-center text-primary font-semibold text-sm hover:gap-2 transition-all">
                Explore <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground">Everything you need for effective studying</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Credit Score */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Credit Score</h3>
              <p className="text-muted-foreground text-sm mb-4">Earn credits by completing notes and milestones. Track your progress with our gamified credit system.</p>
              <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                <Star size={16} /> Unlock rewards
              </div>
            </div>

            {/* Tasks */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-secondary/50 transition-all duration-300">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Smart Tasks</h3>
              <p className="text-muted-foreground text-sm mb-4">Personalized task lists and study schedules. Never miss important topics or revision deadlines.</p>
              <div className="flex items-center gap-2 text-secondary text-sm font-semibold">
                <Zap size={16} /> Stay organized
              </div>
            </div>

            {/* AI Explanation */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-accent/50 transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">AI Explanations</h3>
              <p className="text-muted-foreground text-sm mb-4">Get instant, AI-powered explanations for complex concepts. Available 24/7 for quick doubts.</p>
              <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                <Sparkles size={16} /> Instant help
              </div>
            </div>

            {/* Download Notes */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Download className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Download Notes</h3>
              <p className="text-muted-foreground text-sm mb-4">Download notes in PDF, DOCX, or images. Study offline with no internet required.</p>
              <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                <Download size={16} /> Offline access
              </div>
            </div>

            {/* Mark Complete */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-secondary/50 transition-all duration-300">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Mark Completed</h3>
              <p className="text-muted-foreground text-sm mb-4">Track completed chapters and topics. Visual progress indicators keep you motivated.</p>
              <div className="flex items-center gap-2 text-secondary text-sm font-semibold">
                <CheckCircle size={16} /> Track progress
              </div>
            </div>

            {/* Language Support */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-accent/50 transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Multi-Language</h3>
              <p className="text-muted-foreground text-sm mb-4">Study in English or Hindi. Switch languages anytime while learning.</p>
              <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                <Users size={16} /> Learn comfortably
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Transform Your Studies?</h2>
          <p className="text-lg text-muted-foreground mb-8">Join students who are already acing their exams with NotesHub</p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 rounded-lg transition-colors inline-flex items-center gap-2">
            Get Started Today
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Help Section */}
      <section id="help" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Get answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "Is NotesHub free to use?",
                a: "Yes! NotesHub offers a free tier with access to thousands of study materials. Premium features are available at affordable prices."
              },
              {
                q: "Can I download notes for offline use?",
                a: "Absolutely! You can download any notes in PDF or DOCX format and study offline anytime."
              },
              {
                q: "How often are notes updated?",
                a: "We update our content regularly based on exam patterns, student feedback, and curriculum changes."
              },
              {
                q: "Is the AI explanation feature always available?",
                a: "Yes, our AI-powered explanation feature is available 24/7 to answer your academic questions."
              },
              {
                q: "Can I switch between streams?",
                a: "Yes, you can explore and access multiple streams based on your educational needs."
              },
              {
                q: "How do I track my progress?",
                a: "Use our credit score system and progress tracker to monitor your learning journey and earned achievements."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
