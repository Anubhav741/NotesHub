import { Download, Star, Eye, Trash2 } from "lucide-react";
import { useNotes } from "@/context/NotesContext";
import { useState } from "react";

interface NotesGalleryProps {
  filter?: string;
}

export default function NotesGallery({ filter }: NotesGalleryProps) {
  const { notes, deleteNote } = useNotes();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredNotes = filter ? notes.filter((note) => note.stream === filter) : notes;

  if (filteredNotes.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg mb-4">No notes available yet</p>
        <p className="text-muted-foreground text-sm">Be the first to upload notes and earn credits!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredNotes.map((note) => (
        <div
          key={note.id}
          onMouseEnter={() => setHoveredId(note.id)}
          onMouseLeave={() => setHoveredId(null)}
          className="bg-card rounded-lg border border-border hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-lg group"
        >
          {/* Header with Stream Badge */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 border-b border-border">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-foreground text-lg leading-tight">{note.title}</h3>
              <span className="text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">
                {note.stream.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Subject & Uploader */}
            <div>
              <p className="text-xs text-muted-foreground mb-1">Subject</p>
              <p className="text-sm font-semibold text-foreground">{note.subject}</p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-1">Uploaded by</p>
              <p className="text-sm text-foreground">{note.uploadedBy}</p>
            </div>

            {/* Date */}
            <p className="text-xs text-muted-foreground">
              {note.uploadDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-4 py-3 border-t border-b border-border">
              <div className="flex items-center gap-1 text-primary">
                <Eye size={16} />
                <span className="text-sm font-semibold">{note.downloads}</span>
              </div>
              <div className="flex items-center gap-1 text-secondary">
                <Star size={16} className="fill-current" />
                <span className="text-sm font-semibold">{note.credits}</span>
              </div>
              {note.verified && (
                <div className="flex items-center gap-1 text-accent">
                  <span className="text-xs font-semibold">✓ Verified</span>
                </div>
              )}
            </div>

            {/* File Info */}
            <p className="text-xs text-muted-foreground truncate">📄 {note.fileName}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-2 p-4 border-t border-border bg-muted/30">
            <button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2 group-hover:shadow-md">
              <Download size={18} />
              <span className="hidden sm:inline">Download</span>
            </button>
            <button
              onClick={() => deleteNote(note.id)}
              className="flex-1 bg-destructive/10 hover:bg-destructive/20 text-destructive font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Trash2 size={18} />
              <span className="hidden sm:inline">Delete</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
