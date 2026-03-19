import { Progress } from "@/components/ui/progress";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  CheckCircle,
  Download,
  FileJson,
  FileText,
  TrendingUp,
  User,
} from "lucide-react";
import DietPlanCard from "../../components/DietPlanCard/DietPlanCard";
import MetricCard from "../../components/MetricCard/MetricCard";
import {
  dietPlan,
  healthMetrics,
  medicalNotes,
  samplePatient,
} from "../../data/sampleData";
import "./Dashboard.css";

export default function Dashboard() {
  const handleDownload = (type: string) => {
    window.alert(
      `${type} export feature — available in the full backend-connected version.`,
    );
  };

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div className="nc-container">
          <div className="dashboard__header-inner">
            <div className="dashboard__patient-info">
              <div className="dashboard__avatar">
                <User size={24} />
              </div>
              <div>
                <h1 className="dashboard__patient-name">
                  {samplePatient.name}
                </h1>
                <div className="dashboard__patient-meta">
                  <span>Age {samplePatient.age}</span>
                  <span>·</span>
                  <span>Report: {samplePatient.reportDate}</span>
                </div>
              </div>
            </div>
            <div className="dashboard__header-actions">
              <span className="nc-badge nc-badge--green">
                <CheckCircle size={12} /> {samplePatient.reportStatus}
              </span>
              <button
                type="button"
                className="dashboard__action-btn"
                onClick={() => handleDownload("PDF")}
                data-ocid="dashboard.secondary_button"
              >
                <Download size={15} /> PDF
              </button>
              <button
                type="button"
                className="dashboard__action-btn"
                onClick={() => handleDownload("JSON")}
                data-ocid="dashboard.secondary_button"
              >
                <FileJson size={15} /> JSON
              </button>
              <Link
                to="/results"
                className="nc-btn-primary dashboard__cta"
                data-ocid="dashboard.primary_button"
              >
                <TrendingUp size={15} /> Generate Diet Plan
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="nc-container">
        <div className="dashboard__body">
          <section className="dashboard__section">
            <h2 className="dashboard__section-title">
              Health Metrics Overview
            </h2>
            <div className="dashboard__metrics-grid">
              {healthMetrics.map((m) => (
                <MetricCard key={m.label} {...m} />
              ))}
            </div>
          </section>

          <div className="dashboard__two-col">
            <section className="dashboard__section">
              <h2 className="dashboard__section-title">
                Extracted Patient Information
              </h2>
              <div className="dashboard__info-card nc-card">
                <div className="dashboard__info-row">
                  <span className="dashboard__info-label">Full Name</span>
                  <span className="dashboard__info-value">
                    {samplePatient.name}
                  </span>
                </div>
                <div className="dashboard__info-row">
                  <span className="dashboard__info-label">Date of Birth</span>
                  <span className="dashboard__info-value">
                    {samplePatient.dob}
                  </span>
                </div>
                <div className="dashboard__info-row">
                  <span className="dashboard__info-label">BMI</span>
                  <span className="dashboard__info-value">
                    {samplePatient.bmi} kg/m²
                  </span>
                </div>
                <div className="dashboard__info-row">
                  <span className="dashboard__info-label">Blood Sugar</span>
                  <span className="dashboard__info-value dashboard__info-value--red">
                    {samplePatient.bloodSugar} mg/dL
                  </span>
                </div>
                <div className="dashboard__info-row">
                  <span className="dashboard__info-label">Cholesterol</span>
                  <span className="dashboard__info-value dashboard__info-value--red">
                    {samplePatient.cholesterol} mg/dL
                  </span>
                </div>
                <div className="dashboard__info-row">
                  <span className="dashboard__info-label">Allergies</span>
                  <div className="dashboard__info-tags">
                    {samplePatient.allergies.map((a) => (
                      <span key={a} className="nc-badge nc-badge--yellow">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="dashboard__info-row">
                  <span className="dashboard__info-label">
                    Diet Preferences
                  </span>
                  <div className="dashboard__info-tags">
                    {samplePatient.dietaryPreferences.map((p) => (
                      <span key={p} className="nc-badge nc-badge--teal">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="dashboard__section">
              <h2 className="dashboard__section-title">Detected Conditions</h2>
              <div className="dashboard__conditions-card nc-card">
                {samplePatient.detectedConditions.map((c) => (
                  <div key={c} className="dashboard__condition">
                    <AlertTriangle
                      size={18}
                      className="dashboard__condition-icon"
                    />
                    <div>
                      <div className="dashboard__condition-name">{c}</div>
                      <div className="dashboard__condition-meta">
                        Detected via ML classification
                      </div>
                    </div>
                    <span className="nc-badge nc-badge--red">Active</span>
                  </div>
                ))}
                <div className="dashboard__health-progress">
                  <h4 className="dashboard__progress-title">
                    Health Metric Tracking
                  </h4>
                  {healthMetrics.map((m) => (
                    <div key={m.label} className="dashboard__progress-row">
                      <div className="dashboard__progress-label">
                        <span>{m.label}</span>
                        <span style={{ color: m.statusColor }}>{m.status}</span>
                      </div>
                      <Progress
                        value={m.progress}
                        className="dashboard__progress-bar"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <section className="dashboard__section">
            <h2 className="dashboard__section-title">
              AI Interpreted Doctor Notes
            </h2>
            <div className="dashboard__notes-card nc-card">
              <div className="dashboard__notes-header">
                <FileText size={20} className="dashboard__notes-icon" />
                <span>Clinical Analysis Summary</span>
                <span className="nc-badge nc-badge--teal">AI Processed</span>
              </div>
              <p className="dashboard__notes-text">
                {samplePatient.doctorNotes}
              </p>
              <div className="dashboard__notes-points">
                {medicalNotes.map((n) => (
                  <div key={n.text} className="dashboard__note-point">
                    <span className="dashboard__note-icon">{n.icon}</span>
                    <span>{n.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="dashboard__section">
            <div className="dashboard__section-header">
              <h2 className="dashboard__section-title">
                Personalized Diet Plan Preview
              </h2>
              <Link
                to="/results"
                className="dashboard__view-all"
                data-ocid="dashboard.link"
              >
                View All 7 Days →
              </Link>
            </div>
            <div className="dashboard__diet-grid">
              {dietPlan.slice(0, 3).map((plan) => (
                <DietPlanCard key={plan.day} plan={plan} compact />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
