import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, LineChart, Shield, Zap } from "lucide-react";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import HeroSection from "../../components/HeroSection/HeroSection";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { benefits, featureCards, workflowSteps } from "../../data/sampleData";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <HeroSection />

      <div className="trust-banner">
        <div className="trust-banner__inner">
          <Shield size={20} className="trust-banner__icon" />
          <span>
            Trusted by Healthcare Professionals &amp; Researchers Worldwide
          </span>
          <ChevronRight size={18} className="trust-banner__arrow" />
        </div>
      </div>

      <section className="home__section nc-section nc-glow-bg">
        <div className="nc-container">
          <SectionTitle
            badge="🤖 AI-Powered Features"
            title="Everything You Need for"
            titleHighlight="Personalized Nutrition"
            subtitle="Our end-to-end AI pipeline takes your medical report and transforms it into a medically-informed, personalized diet plan."
            centered
          />
          <div className="home__features-grid">
            {featureCards.map((card, i) => (
              <FeatureCard
                key={card.title}
                index={i}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="home__section nc-section">
        <div className="nc-container">
          <SectionTitle
            badge="⚙️ Workflow"
            title="How"
            titleHighlight="It Works"
            subtitle="A seamless 6-step AI pipeline from medical report to personalized diet plan."
            centered
          />
          <div className="home__workflow">
            {workflowSteps.map((step, i) => (
              <div key={step.title} className="home__workflow-item">
                <div className="home__workflow-card">
                  <div className="home__workflow-icon">{step.icon}</div>
                  <div className="home__workflow-num">{step.step}</div>
                  <h4 className="home__workflow-title">{step.title}</h4>
                  <p className="home__workflow-desc">{step.desc}</p>
                </div>
                {i < workflowSteps.length - 1 && (
                  <div className="home__workflow-arrow">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home__section nc-section nc-glow-bg">
        <div className="nc-container">
          <div className="home__benefits">
            <div className="home__benefits-left">
              <SectionTitle
                badge="❤️ Benefits"
                title="Why"
                titleHighlight="AI-NutriCare?"
                subtitle="Generic diet plans ignore your medical history. AI-NutriCare reads your actual health data to generate a plan that is truly yours."
              />
              <Link
                to="/upload"
                className="nc-btn-primary"
                data-ocid="benefits.primary_button"
              >
                Start Your Journey <ArrowRight size={16} />
              </Link>
            </div>
            <div className="home__benefits-grid">
              {benefits.map((b) => (
                <div key={b.title} className="home__benefit-card">
                  <div className="home__benefit-icon">{b.icon}</div>
                  <h4 className="home__benefit-title">{b.title}</h4>
                  <p className="home__benefit-desc">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home__cta-section">
        <div className="nc-container">
          <div className="home__cta-card">
            <div className="home__cta-glow" />
            <Zap size={40} className="home__cta-icon" />
            <h2 className="home__cta-title">Ready to Transform Your Health?</h2>
            <p className="home__cta-subtitle">
              Upload your medical report today and get a complete AI-generated
              personalized diet plan in minutes.
            </p>
            <div className="home__cta-actions">
              <Link
                to="/upload"
                className="nc-btn-primary"
                data-ocid="cta.primary_button"
              >
                Upload Report <ArrowRight size={16} />
              </Link>
              <Link
                to="/dashboard"
                className="nc-btn-secondary"
                data-ocid="cta.secondary_button"
              >
                View Demo <LineChart size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
