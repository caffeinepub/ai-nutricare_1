import { CheckCircle2, File, Upload, X } from "lucide-react";
import { type ChangeEvent, type DragEvent, useRef, useState } from "react";
import "./UploadBox.css";

interface UploadBoxProps {
  onFileSelected?: (file: File) => void;
}

export default function UploadBox({ onFileSelected }: UploadBoxProps) {
  const [dragging, setDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      onFileSelected?.(file);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      setSelectedFile(file);
      onFileSelected?.(file);
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="upload-box">
      {!selectedFile ? (
        <div
          className={`upload-box__drop-area ${dragging ? "upload-box__drop-area--active" : ""}`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
        >
          <button
            type="button"
            className={`upload-box__zone ${dragging ? "upload-box__zone--active" : ""}`}
            onClick={() => inputRef.current?.click()}
            data-ocid="upload.dropzone"
          >
            <div className="upload-box__icon">
              <Upload size={32} />
            </div>
            <h3 className="upload-box__title">Drop your medical report here</h3>
            <p className="upload-box__subtitle">
              Drag &amp; drop or{" "}
              <span className="upload-box__link">browse files</span>
            </p>
            <div className="upload-box__formats">
              <span className="upload-box__format">📄 PDF</span>
              <span className="upload-box__format">🖼️ Image</span>
              <span className="upload-box__format">📝 Text</span>
            </div>
          </button>
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.png,.jpg,.jpeg,.txt,.doc,.docx"
            style={{ display: "none" }}
            onChange={handleFileChange}
            data-ocid="upload.upload_button"
          />
        </div>
      ) : (
        <div className="upload-box__preview">
          <div className="upload-box__file-info">
            <div className="upload-box__file-icon">
              <File size={28} />
            </div>
            <div>
              <div className="upload-box__file-name">{selectedFile.name}</div>
              <div className="upload-box__file-meta">
                {formatSize(selectedFile.size)} ·{" "}
                {selectedFile.type || "Unknown type"}
              </div>
            </div>
            <CheckCircle2 size={22} className="upload-box__check" />
          </div>
          <button
            type="button"
            className="upload-box__clear"
            onClick={clearFile}
            data-ocid="upload.delete_button"
          >
            <X size={16} /> Remove file
          </button>
        </div>
      )}
    </div>
  );
}
