import { useState } from "react";
import { X, Upload, AlertCircle, CheckCircle } from "lucide-react";
import { useNotes, Note } from "@/context/NotesContext";
import { useLanguage } from "@/hooks/useLanguage";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UploadModal({ isOpen, onClose }: UploadModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    stream: "jee" as const,
    subject: "",
    uploadedBy: "",
    fileName: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { addNote } = useNotes();
  const { t } = useLanguage();

  const streams = [
    { id: "jee", label: "JEE", subjects: ["Physics", "Chemistry", "Mathematics"] },
    { id: "neet", label: "NEET", subjects: ["Biology", "Chemistry", "Physics"] },
    { id: "ca", label: "CA", subjects: ["Accounts", "Laws", "Economics"] },
    { id: "iit-nit", label: "IIT/NIT", subjects: ["CS", "Data Structures", "Algorithms"] },
  ];

  const currentStream = streams.find((s) => s.id === formData.stream);
  const subjects = currentStream?.subjects || [];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 50 * 1024 * 1024) {
        setErrorMessage("File size must be less than 50MB");
        setUploadStatus("error");
        return;
      }
      setFile(selectedFile);
      setFormData({ ...formData, fileName: selectedFile.name });
      setUploadStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.subject || !formData.uploadedBy || !file) {
      setErrorMessage("Please fill all fields and select a file");
      setUploadStatus("error");
      return;
    }

    setUploadStatus("uploading");

    // Simulate upload delay
    setTimeout(() => {
      const newNote: Note = {
        id: Date.now().toString(),
        title: formData.title,
        stream: formData.stream as "jee" | "neet" | "ca" | "iit-nit",
        subject: formData.subject,
        fileName: formData.fileName,
        uploadedBy: formData.uploadedBy,
        uploadDate: new Date(),
        credits: Math.floor(Math.random() * 50) + 50,
        downloads: Math.floor(Math.random() * 100),
        verified: true,
      };

      addNote(newNote);
      setUploadStatus("success");

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ title: "", stream: "jee", subject: "", uploadedBy: "", fileName: "" });
        setFile(null);
        onClose();
        setUploadStatus("idle");
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-background rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-border sticky top-0 bg-background">
          <h2 className="text-2xl font-bold text-foreground">{t("upload.uploadNotes")}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            disabled={uploadStatus === "uploading"}
          >
            <X size={24} className="text-foreground" />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Notes Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., Physics Chapter 1 - Mechanics"
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
              disabled={uploadStatus === "uploading"}
            />
          </div>

          {/* Stream Selection */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Stream *
            </label>
            <select
              value={formData.stream}
              onChange={(e) =>
                setFormData({ ...formData, stream: e.target.value as any, subject: "" })
              }
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
              disabled={uploadStatus === "uploading"}
            >
              {streams.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Subject Selection */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Subject *
            </label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
              disabled={uploadStatus === "uploading"}
            >
              <option value="">Select a subject</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          {/* Uploader Name */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Your Name *
            </label>
            <input
              type="text"
              value={formData.uploadedBy}
              onChange={(e) => setFormData({ ...formData, uploadedBy: e.target.value })}
              placeholder="Your full name"
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
              disabled={uploadStatus === "uploading"}
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Select File (PDF, DOC, Images) *
            </label>
            <div className="relative">
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                className="hidden"
                id="file-input"
                disabled={uploadStatus === "uploading"}
              />
              <label
                htmlFor="file-input"
                className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-all"
              >
                <div className="text-center">
                  <Upload size={32} className="text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground">
                    {file ? file.name : "Click to upload or drag and drop"}
                  </p>
                  <p className="text-xs text-muted-foreground">PDF, DOC, PNG, JPG (Max 50MB)</p>
                </div>
              </label>
            </div>
          </div>

          {/* Status Messages */}
          {uploadStatus === "error" && (
            <div className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
              <AlertCircle size={20} className="text-destructive" />
              <p className="text-sm text-destructive">{errorMessage}</p>
            </div>
          )}

          {uploadStatus === "success" && (
            <div className="flex items-center gap-2 p-4 bg-primary/10 border border-primary/30 rounded-lg">
              <CheckCircle size={20} className="text-primary" />
              <p className="text-sm text-primary">Notes uploaded successfully! You earned credits! 🎉</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={uploadStatus === "uploading" || uploadStatus === "success"}
            className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {uploadStatus === "uploading" && (
              <>
                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                Uploading...
              </>
            )}
            {uploadStatus === "success" && "Upload Complete!"}
            {uploadStatus === "idle" && uploadStatus !== "success" && (
              <>
                <Upload size={20} />
                Upload Notes
              </>
            )}
            {uploadStatus === "error" && (
              <>
                <AlertCircle size={20} />
                Try Again
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
