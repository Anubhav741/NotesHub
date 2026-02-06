import { createContext, useContext, useState, ReactNode } from "react";

export interface Note {
  id: string;
  title: string;
  stream: "jee" | "neet" | "ca" | "iit-nit";
  subject: string;
  fileName: string;
  uploadedBy: string;
  uploadDate: Date;
  credits: number;
  downloads: number;
  verified: boolean;
}

interface NotesContextType {
  notes: Note[];
  addNote: (note: Note) => void;
  deleteNote: (id: string) => void;
  getUserCredits: () => number;
  getStreamNotes: (stream: string) => Note[];
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "1",
      title: "JEE Physics - Mechanics Notes",
      stream: "jee",
      subject: "Physics",
      fileName: "physics_mechanics.pdf",
      uploadedBy: "Rahul Kumar",
      uploadDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      credits: 50,
      downloads: 342,
      verified: true,
    },
    {
      id: "2",
      title: "NEET Biology - Cell Structure & Functions",
      stream: "neet",
      subject: "Biology",
      fileName: "biology_cells.pdf",
      uploadedBy: "Priya Singh",
      uploadDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      credits: 75,
      downloads: 521,
      verified: true,
    },
    {
      id: "3",
      title: "CA Foundation - Accounting Basics",
      stream: "ca",
      subject: "Accounts",
      fileName: "ca_accounting.pdf",
      uploadedBy: "Amit Patel",
      uploadDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      credits: 100,
      downloads: 128,
      verified: true,
    },
  ]);

  const addNote = (note: Note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const getUserCredits = () => {
    return notes.reduce((total, note) => total + note.credits, 0);
  };

  const getStreamNotes = (stream: string) => {
    return notes.filter((note) => note.stream === stream);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, getUserCredits, getStreamNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within NotesProvider");
  }
  return context;
};
