import { Link } from "@tanstack/react-router";
import { ArrowRight, LineChart } from "lucide-react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="nc-container hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            AI-Powered Medical Nutrition Analysis
          </div>
          <h1 className="hero__title">
            Transform Your Health with
            <span className="hero__title-gradient"> AI-Powered</span> Nutrition
          </h1>
          <p className="hero__subtitle">
            Upload your medical reports and let our AI analyze your health data
            — blood sugar, cholesterol, BMI — to generate a personalized diet
            plan tailored specifically for your conditions.
          </p>
          <div className="hero__actions">
            <Link
              to="/upload"
              className="nc-btn-primary hero__btn"
              data-ocid="hero.primary_button"
            >
              Upload Report <ArrowRight size={16} />
            </Link>
            <Link
              to="/dashboard"
              className="nc-btn-secondary hero__btn"
              data-ocid="hero.secondary_button"
            >
              Explore Dashboard <LineChart size={16} />
            </Link>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">7-Day</span>
              <span className="hero__stat-label">Diet Plans</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">AI/ML</span>
              <span className="hero__stat-label">Analysis Engine</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">100%</span>
              <span className="hero__stat-label">Personalized</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__visual-glow" />
          <img
            src="/assets/generated/hero-nutricare.dim_600x520.png"
            alt="AI NutriCare Dashboard"
            className="hero__image"
          />
          <div className="hero__floating-card hero__floating-card--1">
            <div className="hero__card-indicator hero__card-indicator--red" />
            <div>
              <div className="hero__card-label">Blood Sugar</div>
              <div className="hero__card-value">185 mg/dL</div>
            </div>
          </div>
          <div className="hero__floating-card hero__floating-card--2">
            <div className="hero__card-indicator hero__card-indicator--teal" />
            <div>
              <div className="hero__card-label">Diet Plan</div>
              <div className="hero__card-value">Day 1 Ready ✔️</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
