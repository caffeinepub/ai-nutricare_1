import { Book, CheckCircle2, Cpu, GitBranch } from "lucide-react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { techStack } from "../../data/sampleData";
import "./About.css";

const objectives = [
  {
    step: 1,
    title: "Parse Medical Reports",
    desc: "Accept PDF, image, or text medical reports and extract usable content via OCR and document parsing.",
  },
  {
    step: 2,
    title: "Extract Structured Data",
    desc: "Identify and normalize numeric health values — blood sugar, cholesterol, BMI, hemoglobin, etc.",
  },
  {
    step: 3,
    title: "Analyze Health Metrics",
    desc: "Run ML classifiers (XGBoost/LightGBM) to detect underlying conditions and risk levels.",
  },
  {
    step: 4,
    title: "Interpret Doctor Notes",
    desc: "Use GPT/BERT-based NLP to understand prescriptions, clinical notes, and dietary restrictions.",
  },
  {
    step: 5,
    title: "Generate Daily Diet Plans",
    desc: "Produce a 7-day personalized meal plan with calorie targets based on the patient's full health profile.",
  },
  {
    step: 6,
    title: "Export Results",
    desc: "Deliver the diet plan as a print-ready PDF, structured JSON, or HTML report for EHR integration.",
  },
];

const outcomes = [
  "End-to-end ML pipeline from raw document to structured health data",
  "NLP-powered interpretation of clinical notes using transformer models",
  "Condition-aware diet plan generation aligned with nutritional guidelines",
  "RESTful API design for healthcare system integration",
  "Modular, scalable Python architecture for medical AI applications",
  "Privacy-first data handling compliant with healthcare regulations",
];

const systemFlow = [
  "Medical Report Input (PDF/Text/Image)",
  "Data Extraction Module",
  "ML Analysis of Numeric Data",
  "AI/NLP Text Interpretation",
  "Diet Plan Generator",
  "Output Module (PDF/JSON/HTML)",
];

export default function About() {
  return (
    <div className="about">
      <div className="about__banner">
        <div className="about__banner-glow" />
        <div className="nc-container">
          <div className="about__banner-badge">
            <Book size={16} /> About the Project
          </div>
          <h1 className="about__banner-title">
            The Science Behind
            <br />
            <span className="nc-gradient-text">AI-NutriCare</span>
          </h1>
          <p className="about__banner-sub">
            An end-to-end AI/ML system that reads your medical reports and
            generates a medically-informed, personalized diet plan.
          </p>
        </div>
      </div>

      <section className="nc-section">
        <div className="nc-container">
          <div className="about__problem">
            <div className="about__problem-text">
              <SectionTitle
                badge="⚠️ Problem Statement"
                title="The Gap in"
                titleHighlight="Personalized Nutrition"
                subtitle=""
              />
              <p className="about__problem-desc">
                Millions of patients receive medical reports with complex data
                they can&apos;t interpret — and generic diet plans that ignore
                their individual conditions.
              </p>
              <p className="about__problem-desc">
                Standard dietary advice fails to account for specific conditions
                like diabetes, high cholesterol, or hypertension. Patients need
                a system that reads their actual health data and generates truly
                personalized recommendations.
              </p>
              <div className="about__problem-points">
                <div className="about__problem-point">
                  <span className="about__problem-point-icon">❌</span>
                  <span>
                    Generic diet plans ignore individual health conditions
                  </span>
                </div>
                <div className="about__problem-point">
                  <span className="about__problem-point-icon">❌</span>
                  <span>
                    Medical reports are complex and hard for patients to
                    interpret
                  </span>
                </div>
                <div className="about__problem-point">
                  <span className="about__problem-point-icon">❌</span>
                  <span>
                    Doctor notes are often written in clinical language
                  </span>
                </div>
              </div>
            </div>
            <div className="about__problem-visual">
              <div className="about__problem-card">
                <div className="about__problem-card-icon">🎯</div>
                <h3>Our Solution</h3>
                <p>
                  AI that reads your medical report and generates a diet plan
                  personalized to your exact health profile.
                </p>
                <div className="about__solution-points">
                  <div className="about__sol-item">
                    <CheckCircle2 size={14} color="#34D399" /> Reads
                    PDF/image/text reports
                  </div>
                  <div className="about__sol-item">
                    <CheckCircle2 size={14} color="#34D399" /> Detects
                    conditions via ML
                  </div>
                  <div className="about__sol-item">
                    <CheckCircle2 size={14} color="#34D399" /> Interprets doctor
                    notes via NLP
                  </div>
                  <div className="about__sol-item">
                    <CheckCircle2 size={14} color="#34D399" /> Generates 7-day
                    diet plans
                  </div>
                  <div className="about__sol-item">
                    <CheckCircle2 size={14} color="#34D399" /> Exports as PDF or
                    JSON
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nc-section nc-glow-bg">
        <div className="nc-container">
          <SectionTitle
            badge="📌 Objectives"
            title="Project"
            titleHighlight="Objectives"
            subtitle="Six core objectives that define the end-to-end system architecture."
            centered
          />
          <div className="about__timeline">
            {objectives.map((obj) => (
              <div key={obj.step} className="about__timeline-item">
                <div className="about__timeline-step">{obj.step}</div>
                <div className="about__timeline-line" />
                <div className="about__timeline-card">
                  <h4 className="about__timeline-title">{obj.title}</h4>
                  <p className="about__timeline-desc">{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nc-section">
        <div className="nc-container">
          <SectionTitle
            badge="⚙️ Technology"
            title="Technology"
            titleHighlight="Stack"
            subtitle="Built with modern AI/ML tools and a production-grade tech stack."
            centered
          />
          <div className="about__tech-grid">
            {techStack.map((tech) => (
              <div key={tech.name} className="about__tech-card">
                <span className="about__tech-icon">{tech.icon}</span>
                <div>
                  <div className="about__tech-category">{tech.category}</div>
                  <div className="about__tech-name">{tech.name}</div>
                  <div className="about__tech-desc">{tech.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nc-section nc-glow-bg">
        <div className="nc-container">
          <SectionTitle
            badge="🔄 Architecture"
            title="End-to-End"
            titleHighlight="System Flow"
            centered
          />
          <div className="about__flow">
            {systemFlow.map((step, i) => (
              <div key={step} className="about__flow-item">
                <div className="about__flow-step">
                  <span className="about__flow-num">{i + 1}</span>
                  <span>{step}</span>
                </div>
                {i < systemFlow.length - 1 && (
                  <div className="about__flow-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nc-section">
        <div className="nc-container">
          <div className="about__outcomes">
            <div>
              <SectionTitle
                badge="🎓 Learning Outcomes"
                title="What This"
                titleHighlight="Project Teaches"
              />
              <ul className="about__outcomes-list">
                {outcomes.map((o) => (
                  <li key={o} className="about__outcomes-item">
                    <Cpu size={16} className="about__outcomes-icon" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="about__outcomes-card">
              <GitBranch size={40} className="about__outcomes-card-icon" />
              <h3>Final Year Project</h3>
              <p>
                AI-NutriCare demonstrates the full lifecycle of a production AI
                application — from raw data ingestion to intelligent output
                generation.
              </p>
              <div className="about__outcomes-tags">
                <span className="nc-badge nc-badge--teal">AI/ML</span>
                <span className="nc-badge nc-badge--teal">NLP</span>
                <span className="nc-badge nc-badge--teal">Healthcare</span>
                <span className="nc-badge nc-badge--teal">React</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
