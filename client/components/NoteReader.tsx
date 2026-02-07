import { useState } from "react";
import { X, Bookmark, Share2, Download, ThumbsUp, Star } from "lucide-react";
import { NoteContent } from "@/data/notesDatabase";

interface NoteReaderProps {
  note: NoteContent | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function NoteReader({ note, isOpen, onClose }: NoteReaderProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isDarkReading, setIsDarkReading] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  if (!isOpen || !note) return null;

  const handleDownload = () => {
    alert(`Downloading: ${note.fileName}`);
  };

  const handleShare = () => {
    alert(`Sharing: ${note.title}\n\nLink copied to clipboard!`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
      <div className={`min-h-screen ${isDarkReading ? "bg-zinc-950" : "bg-white"}`}>
        {/* Header */}
        <div
          className={`sticky top-0 z-10 border-b ${
            isDarkReading
              ? "bg-zinc-900 border-zinc-800"
              : "bg-background border-border"
          } shadow-lg`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h1
                  className={`text-2xl sm:text-3xl font-bold mb-2 ${
                    isDarkReading ? "text-white" : "text-foreground"
                  }`}
                >
                  {note.title}
                </h1>
                <div
                  className={`flex flex-wrap items-center gap-3 text-sm ${
                    isDarkReading ? "text-zinc-300" : "text-muted-foreground"
                  }`}
                >
                  <span>By {note.uploadedBy}</span>
                  <span>•</span>
                  <span>{note.uploadDate.toLocaleDateString()}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-current text-yellow-500" />
                    <span>{note.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className={`p-2 rounded-lg transition-colors flex-shrink-0 ${
                  isDarkReading
                    ? "hover:bg-zinc-800 text-white"
                    : "hover:bg-muted text-foreground"
                }`}
              >
                <X size={24} />
              </button>
            </div>

            {/* Reading Progress */}
            <div className={`mt-4 h-1 rounded-full overflow-hidden ${
              isDarkReading ? "bg-zinc-800" : "bg-muted"
            }`}>
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${readingProgress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div
          className={`sticky top-20 z-10 border-b py-3 px-4 sm:px-6 ${
            isDarkReading
              ? "bg-zinc-900 border-zinc-800"
              : "bg-card border-border"
          }`}
        >
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3">
            {/* Font Size Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                className={`px-3 py-1 rounded font-semibold ${
                  isDarkReading
                    ? "bg-zinc-800 hover:bg-zinc-700 text-white"
                    : "bg-muted hover:bg-primary/10"
                } transition-colors`}
              >
                A-
              </button>
              <span className={`text-sm font-semibold min-w-12 text-center ${isDarkReading ? "text-white" : ""}`}>
                {fontSize}px
              </span>
              <button
                onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                className={`px-3 py-1 rounded font-semibold ${
                  isDarkReading
                    ? "bg-zinc-800 hover:bg-zinc-700 text-white"
                    : "bg-muted hover:bg-primary/10"
                } transition-colors`}
              >
                A+
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkReading(!isDarkReading)}
              className={`px-4 py-2 rounded font-semibold transition-colors ${
                isDarkReading
                  ? "bg-zinc-800 hover:bg-zinc-700 text-white"
                  : "bg-muted hover:bg-primary/10"
              }`}
            >
              {isDarkReading ? "☀️ Light" : "🌙 Dark"}
            </button>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded transition-colors ${
                  isBookmarked
                    ? "bg-primary/20 text-primary"
                    : isDarkReading
                      ? "hover:bg-zinc-800 text-zinc-300"
                      : "hover:bg-muted text-muted-foreground"
                }`}
                title={isBookmarked ? "Remove bookmark" : "Add bookmark"}
              >
                <Bookmark size={20} className={isBookmarked ? "fill-current" : ""} />
              </button>

              <button
                onClick={handleShare}
                className={`p-2 rounded transition-colors ${
                  isDarkReading
                    ? "hover:bg-zinc-800 text-zinc-300"
                    : "hover:bg-muted text-muted-foreground"
                }`}
                title="Share note"
              >
                <Share2 size={20} />
              </button>

              <button
                onClick={handleDownload}
                className={`p-2 rounded transition-colors ${
                  isDarkReading
                    ? "hover:bg-zinc-800 text-zinc-300"
                    : "hover:bg-muted text-muted-foreground"
                }`}
                title="Download note"
              >
                <Download size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Metadata */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 p-6 rounded-lg ${
              isDarkReading
                ? "bg-zinc-900 border border-zinc-800"
                : "bg-card border border-border"
            }`}
          >
            <div>
              <p className={`text-sm font-medium ${isDarkReading ? "text-zinc-400" : "text-muted-foreground"}`}>
                Downloads
              </p>
              <p className={`text-2xl font-bold ${isDarkReading ? "text-white" : "text-foreground"}`}>
                {note.downloads}
              </p>
            </div>
            <div>
              <p className={`text-sm font-medium ${isDarkReading ? "text-zinc-400" : "text-muted-foreground"}`}>
                Views
              </p>
              <p className={`text-2xl font-bold ${isDarkReading ? "text-white" : "text-foreground"}`}>
                {note.views}
              </p>
            </div>
            <div>
              <p className={`text-sm font-medium ${isDarkReading ? "text-zinc-400" : "text-muted-foreground"}`}>
                Credits
              </p>
              <p className={`text-2xl font-bold text-secondary`}>+{note.credits}</p>
            </div>
            <div>
              <p className={`text-sm font-medium ${isDarkReading ? "text-zinc-400" : "text-muted-foreground"}`}>
                Difficulty
              </p>
              <p className={`text-2xl font-bold capitalize ${
                note.difficulty === "easy"
                  ? "text-green-400"
                  : note.difficulty === "medium"
                    ? "text-amber-400"
                    : "text-red-400"
              }`}>
                {note.difficulty}
              </p>
            </div>
          </div>

          {/* Note Content */}
          <article
            className={`max-w-none mb-12 leading-relaxed ${isDarkReading ? "prose-dark-reading" : "prose"} prose-lg`}
            style={{
              fontSize: `${fontSize}px`,
              color: isDarkReading ? "#e4e4e7" : "inherit",
              lineHeight: "1.8"
            }}
            dangerouslySetInnerHTML={{ __html: note.content }}
          ></article>

          {/* Tags */}
          <div className="mb-8">
            <p className={`font-semibold mb-3 ${isDarkReading ? "text-white" : "text-foreground"}`}>
              Topics:
            </p>
            <div className="flex flex-wrap gap-2">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    isDarkReading
                      ? "bg-zinc-800 text-white border border-zinc-700"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Rating Section */}
          <div
            className={`border-t border-b py-6 ${
              isDarkReading ? "border-zinc-800" : "border-border"
            }`}
          >
            <p className={`font-semibold mb-4 ${isDarkReading ? "text-white" : "text-foreground"}`}>
              Was this helpful?
            </p>
            <div className="flex gap-3">
              <button
                className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition-colors ${
                  isDarkReading
                    ? "bg-green-700/40 hover:bg-green-700/60 text-green-300 border border-green-600"
                    : "bg-green-500/20 hover:bg-green-500/30 text-green-600"
                }`}
              >
                <ThumbsUp size={20} />
                Very Helpful
              </button>
              <button
                className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition-colors ${
                  isDarkReading
                    ? "bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground"
                }`}
              >
                Good
              </button>
            </div>
          </div>

          {/* Author Info */}
          <div className={`mt-8 p-6 rounded-lg ${isDarkReading ? "bg-zinc-900 border border-zinc-800" : "bg-card border border-border"}`}>
            <h3 className={`font-bold mb-2 ${isDarkReading ? "text-white" : "text-foreground"}`}>
              About the Author
            </h3>
            <p className={isDarkReading ? "text-zinc-300" : "text-muted-foreground"}>
              <strong>{note.uploadedBy}</strong> is a verified educator with expertise in {note.subject}. They have
              contributed {Math.floor(Math.random() * 50) + 10} notes to the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
