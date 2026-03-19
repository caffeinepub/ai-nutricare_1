import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  FileSearch,
  Loader2,
  Salad,
  Scan,
} from "lucide-react";
import { useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import UploadBox from "../../components/UploadBox/UploadBox";
import "./UploadReport.css";

const processingSteps = [
  {
    icon: Scan,
    label: "OCR Extraction",
    desc: "Extracting text from document...",
  },
  {
    icon: FileSearch,
    label: "Numeric Data Parsing",
    desc: "Parsing health metrics and values...",
  },
  {
    icon: BrainCircuit,
    label: "Text Interpretation",
    desc: "Analyzing doctor notes with AI/NLP...",
  },
  {
    icon: Salad,
    label: "Diet Recommendation Generation",
    desc: "Generating personalized meal plan...",
  },
];

export default function UploadReport() {
  const [, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const [activeFormat, setActiveFormat] = useState("PDF");

  const handleAnalyze = async () => {
    setIsProcessing(true);
    setCompletedSteps([]);
    setDone(false);
    for (let i = 0; i < processingSteps.length; i++) {
      await new Promise((r) => setTimeout(r, 900 + i * 300));
      setCompletedSteps((prev) => [...prev, i]);
    }
    setIsProcessing(false);
    setDone(true);
  };

  return (
    <div className="upload-page">
      <div className="upload-page__banner">
        <div className="upload-page__banner-glow" />
        <div className="nc-container">
          <SectionTitle
            badge="📄 Upload Report"
            title="Upload Your"
            titleHighlight="Medical Report"
            subtitle="Securely upload your medical report in any format. Our AI pipeline will extract, analyze, and generate your personalized diet plan."
            centered
          />
        </div>
      </div>

      <div className="nc-container">
        <div className="upload-page__body">
          <div className="upload-page__upload-panel">
            <div className="upload-page__panel-header">
              <h3 className="upload-page__panel-title">Select Report</h3>
              <div className="upload-page__format-btns">
                {["PDF", "Image", "Text"].map((fmt) => (
                  <button
                    key={fmt}
                    type="button"
                    className={`upload-page__format-btn ${activeFormat === fmt ? "upload-page__format-btn--active" : ""}`}
                    onClick={() => setActiveFormat(fmt)}
                    data-ocid="upload.toggle"
                  >
                    {fmt === "PDF" ? "📄" : fmt === "Image" ? "🖼️" : "📝"} {fmt}
                  </button>
                ))}
              </div>
            </div>

            <UploadBox onFileSelected={(f) => setSelectedFile(f)} />

            <div className="upload-page__upload-tips">
              <p>Supported: PDF, PNG, JPG, JPEG, TXT, DOC, DOCX</p>
              <p>Max file size: 50MB &middot; Encrypted upload</p>
            </div>

            <button
              type="button"
              className="upload-page__analyze-btn nc-btn-primary"
              onClick={handleAnalyze}
              disabled={isProcessing}
              data-ocid="upload.primary_button"
            >
              {isProcessing ? (
                <>
                  <Loader2 size={16} className="upload-page__spin" />{" "}
                  Analyzing...
                </>
              ) : done ? (
                <>
                  Re-Analyze Report <ArrowRight size={16} />
                </>
              ) : (
                <>
                  Analyze Report <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>

          <div className="upload-page__steps-panel">
            <h3 className="upload-page__panel-title">Processing Pipeline</h3>
            <div className="upload-page__steps">
              {processingSteps.map((step, i) => {
                const Icon = step.icon;
                const isComplete = completedSteps.includes(i);
                const isActive = isProcessing && completedSteps.length === i;
                return (
                  <div
                    key={step.label}
                    className={`upload-page__step ${isComplete ? "upload-page__step--done" : isActive ? "upload-page__step--active" : ""}`}
                    data-ocid={`upload.item.${i + 1}`}
                  >
                    <div className="upload-page__step-icon">
                      {isComplete ? (
                        <CheckCircle2 size={20} />
                      ) : isActive ? (
                        <Loader2 size={20} className="upload-page__spin" />
                      ) : (
                        <Icon size={20} />
                      )}
                    </div>
                    <div className="upload-page__step-content">
                      <div className="upload-page__step-label">
                        {step.label}
                      </div>
                      <div className="upload-page__step-desc">
                        {isComplete
                          ? "Completed successfully"
                          : isActive
                            ? step.desc
                            : "Waiting..."}
                      </div>
                    </div>
                    <div className="upload-page__step-num">{i + 1}</div>
                  </div>
                );
              })}
            </div>

            {done && (
              <div
                className="upload-page__success"
                data-ocid="upload.success_state"
              >
                <CheckCircle2 size={28} className="upload-page__success-icon" />
                <div>
                  <h4>Analysis Complete!</h4>
                  <p>
                    Your personalized diet plan is ready. View your results
                    below.
                  </p>
                </div>
                <Link
                  to="/results"
                  className="nc-btn-primary"
                  data-ocid="upload.primary_button"
                >
                  View Results <ArrowRight size={16} />
                </Link>
              </div>
            )}

            {!isProcessing && !done && (
              <div className="upload-page__idle">
                <span>🔍</span>
                <p>
                  Pipeline will execute automatically once you click
                  &ldquo;Analyze Report&rdquo;
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
