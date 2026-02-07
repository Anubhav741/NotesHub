import { useState } from "react";
import {
  Search,
  Filter,
  BookMarked,
  Download,
  Eye,
  Star,
  X,
  ChevronLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import NoteReader from "./NoteReader";
import { notesDatabase, searchNotes, NoteContent } from "@/data/notesDatabase";

export default function NotesHub() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNote, setSelectedNote] = useState<NoteContent | null>(null);
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [selectedStream, setSelectedStream] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"latest" | "popular" | "rating">(
    "latest",
  );
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);

  // Get filtered and searched notes
  let filteredNotes = searchQuery ? searchNotes(searchQuery) : notesDatabase;

  if (selectedStream) {
    filteredNotes = filteredNotes.filter((n) => n.stream === selectedStream);
  }

  if (selectedSubject) {
    filteredNotes = filteredNotes.filter((n) => n.subject === selectedSubject);
  }

  if (difficultyFilter) {
    filteredNotes = filteredNotes.filter(
      (n) => n.difficulty === difficultyFilter,
    );
  }

  // Sort notes
  if (sortBy === "popular") {
    filteredNotes.sort((a, b) => b.downloads - a.downloads);
  } else if (sortBy === "rating") {
    filteredNotes.sort((a, b) => b.rating - a.rating);
  } else {
    filteredNotes.sort(
      (a, b) =>
        new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime(),
    );
  }

  // Get unique subjects for selected stream
  const uniqueSubjects = selectedStream
    ? [
        ...new Set(
          notesDatabase
            .filter((n) => n.stream === selectedStream)
            .map((n) => n.subject),
        ),
      ]
    : [];

  const openNote = (note: NoteContent) => {
    setSelectedNote(note);
    setIsReaderOpen(true);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      {/* Note Reader Modal */}
      <NoteReader
        note={selectedNote}
        isOpen={isReaderOpen}
        onClose={() => setIsReaderOpen(false)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button & Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold mb-4 transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Home
          </button>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            📚 Complete Notes Library
          </h1>
          <p className="text-lg text-muted-foreground">
            Access thousands of quality notes across all streams and subjects
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search
              className="absolute left-4 top-3.5 text-muted-foreground"
              size={20}
            />
            <input
              type="text"
              placeholder="Search notes by title, subject, topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {/* Stream Filter */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Stream
            </label>
            <select
              value={selectedStream || ""}
              onChange={(e) => {
                setSelectedStream(e.target.value || null);
                setSelectedSubject(null);
              }}
              className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Streams</option>
              <option value="jee">JEE</option>
              <option value="neet">NEET</option>
              <option value="ca">CA</option>
              <option value="iit-nit">IIT/NIT</option>
            </select>
          </div>

          {/* Subject Filter */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Subject
            </label>
            <select
              value={selectedSubject || ""}
              onChange={(e) => setSelectedSubject(e.target.value || null)}
              disabled={!selectedStream}
              className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            >
              <option value="">All Subjects</option>
              {uniqueSubjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Difficulty
            </label>
            <select
              value={difficultyFilter || ""}
              onChange={(e) => setDifficultyFilter(e.target.value || null)}
              className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Levels</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="latest">Latest</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-muted-foreground">
            Found <strong>{filteredNotes.length}</strong>{" "}
            {filteredNotes.length === 1 ? "note" : "notes"}
          </p>
          {(selectedStream ||
            selectedSubject ||
            difficultyFilter ||
            searchQuery) && (
            <button
              onClick={() => {
                setSelectedStream(null);
                setSelectedSubject(null);
                setDifficultyFilter(null);
                setSearchQuery("");
              }}
              className="text-sm text-primary hover:text-primary/80 font-semibold"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Notes Grid */}
        {filteredNotes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <div
                key={note.id}
                className="bg-card rounded-lg border border-border hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-lg group flex flex-col h-full"
              >
                {/* Pinned Badge */}
                {note.isPinned && (
                  <div className="bg-primary/20 border-b border-primary/30 px-4 py-2 text-sm font-semibold text-primary">
                    📌 Pinned - Popular
                  </div>
                )}

                {/* Header */}
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 border-b border-border">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="font-bold text-foreground text-lg leading-tight flex-1 line-clamp-2">
                      {note.title}
                    </h3>
                    <span className="text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full whitespace-nowrap">
                      {note.stream.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {note.description}
                  </p>

                  <div className="space-y-2 mb-4 flex-1">
                    <div>
                      <p className="text-xs text-muted-foreground">Subject</p>
                      <p className="text-sm font-semibold text-foreground">
                        {note.subject}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        By {note.uploadedBy}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {note.uploadDate.toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 py-3 border-t border-border">
                    <div className="flex items-center gap-1 text-primary text-sm">
                      <Eye size={14} />
                      <span className="font-semibold">{note.views}</span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                      <Star size={14} className="fill-current" />
                      <span className="font-semibold">
                        {note.rating.toFixed(1)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-secondary text-sm">
                      <Download size={14} />
                      <span className="font-semibold">{note.downloads}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {note.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Difficulty Badge */}
                  <div className="mb-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        note.difficulty === "easy"
                          ? "bg-green-500/20 text-green-700 dark:text-green-400"
                          : note.difficulty === "medium"
                            ? "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400"
                            : "bg-red-500/20 text-red-700 dark:text-red-400"
                      }`}
                    >
                      {note.difficulty.toUpperCase()} • {note.estimatedReadTime}{" "}
                      min read
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 p-4 border-t border-border bg-muted/30">
                  <button
                    onClick={() => openNote(note)}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2 group-hover:shadow-md"
                  >
                    📖 Read
                  </button>
                  <button className="flex-1 bg-secondary/20 hover:bg-secondary/30 text-secondary font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Download size={18} />
                    <span className="hidden sm:inline">Save</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-2xl font-bold text-foreground mb-2">
              No notes found
            </p>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={() => {
                setSelectedStream(null);
                setSelectedSubject(null);
                setDifficultyFilter(null);
                setSearchQuery("");
              }}
              className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View All Notes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
