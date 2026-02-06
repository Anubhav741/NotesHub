import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotesHub from "@/components/NotesHub";

export default function NotesHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <NotesHub />
      <Footer />
    </div>
  );
}
