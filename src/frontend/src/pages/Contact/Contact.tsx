import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Send,
  Twitter,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Contact.css";

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "ML Engineer",
    avatar: "👩‍💻",
    expertise: "XGBoost, LightGBM, Feature Engineering",
  },
  {
    name: "Arjun Mehta",
    role: "NLP Specialist",
    avatar: "👨‍🔬",
    expertise: "GPT, BERT, Clinical NLP",
  },
  {
    name: "Sara Chen",
    role: "Frontend Dev",
    avatar: "👩‍🎨",
    expertise: "React, TypeScript, UI/UX",
  },
  {
    name: "David Okafor",
    role: "Backend Architect",
    avatar: "👨‍💼",
    expertise: "Python, PostgreSQL, API Design",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    toast.success("Message sent! We'll get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <div className="contact__banner">
        <div className="contact__banner-glow" />
        <div className="nc-container">
          <SectionTitle
            badge="📞 Get in Touch"
            title="Meet the"
            titleHighlight="Team"
            subtitle="Final year project by a passionate team of AI/ML and healthcare technology enthusiasts."
            centered
          />
        </div>
      </div>

      <div className="nc-container">
        <section className="nc-section">
          <div className="contact__team-grid">
            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className="contact__team-card"
                data-ocid={`contact.item.${i + 1}`}
              >
                <div className="contact__team-avatar">{member.avatar}</div>
                <h3 className="contact__team-name">{member.name}</h3>
                <div className="contact__team-role">{member.role}</div>
                <p className="contact__team-expertise">{member.expertise}</p>
                <div className="contact__team-links">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__team-link"
                    aria-label="GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__team-link"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__team-link"
                    aria-label="Twitter"
                  >
                    <Twitter size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="contact__body">
          <div className="contact__form-section">
            <SectionTitle
              badge="✉️ Contact"
              title="Send a"
              titleHighlight="Message"
              subtitle="Questions about the project? Partnership inquiries? Reach out to us."
            />
            <form
              className="contact__form"
              onSubmit={handleSubmit}
              data-ocid="contact.modal"
            >
              <div className="contact__form-group">
                <label htmlFor="contact-name" className="contact__label">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="contact__input"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, name: e.target.value }))
                  }
                  required
                  data-ocid="contact.input"
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="contact-email" className="contact__label">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="contact__input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, email: e.target.value }))
                  }
                  required
                  data-ocid="contact.input"
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="contact-message" className="contact__label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className="contact__textarea"
                  placeholder="Tell us about your inquiry..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                  required
                  data-ocid="contact.textarea"
                />
              </div>
              <button
                type="submit"
                className="nc-btn-primary contact__submit-btn"
                disabled={sending}
                data-ocid="contact.submit_button"
              >
                {sending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={15} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="contact__info-section">
            <div className="contact__project-card">
              <div className="contact__project-icon">🥗</div>
              <h3 className="contact__project-title">AI-NutriCare</h3>
              <p className="contact__project-desc">
                AI/ML-Based Personalized Diet Plan Generator from Medical
                Reports. Final year project exploring the intersection of
                healthcare data, ML classification, and clinical NLP.
              </p>
              <div className="contact__project-links">
                <a
                  href="https://github.com/ainutricare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__project-link"
                  data-ocid="contact.link"
                >
                  <Github size={16} /> View on GitHub <ExternalLink size={13} />
                </a>
                <a
                  href="https://github.com/ainutricare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__project-link"
                  data-ocid="contact.link"
                >
                  <ExternalLink size={16} /> Live Demo{" "}
                  <ExternalLink size={13} />
                </a>
                <a
                  href="https://github.com/ainutricare/paper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__project-link"
                  data-ocid="contact.link"
                >
                  <Mail size={16} /> Research Paper <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <div className="contact__connect-card">
              <Users size={24} className="contact__connect-icon" />
              <h4>Project Repository</h4>
              <p>
                Contributions and forks welcome. Check our GitHub for the
                complete source code, dataset samples, and deployment guides.
              </p>
              <div className="contact__connect-links">
                <a
                  href="mailto:team@ainutricare.ai"
                  className="contact__email-link"
                  data-ocid="contact.link"
                >
                  <Mail size={14} /> team@ainutricare.ai
                </a>
                <a
                  href="https://github.com/ainutricare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__email-link"
                  data-ocid="contact.link"
                >
                  <Github size={14} /> github.com/ainutricare
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
