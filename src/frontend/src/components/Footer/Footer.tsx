import { Link } from "@tanstack/react-router";
import { Activity, Github, Linkedin, Mail, Twitter } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-mark">
                <Activity size={16} strokeWidth={2.5} />
              </div>
              <span>AI-NutriCare</span>
            </div>
            <p className="footer__tagline">
              AI-powered personalized nutrition from your medical reports.
              Smart, safe, and condition-aware.
            </p>
            <div className="footer__socials">
              <a
                href="https://github.com/ainutricare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="footer__social-link"
              >
                <Github size={18} />
              </a>
              <a
                href="https://twitter.com/ainutricare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="footer__social-link"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com/company/ainutricare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer__social-link"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:team@ainutricare.ai"
                aria-label="Email"
                className="footer__social-link"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              <li>
                <Link to="/" className="footer__link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer__link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="footer__link">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/upload" className="footer__link">
                  Upload Report
                </Link>
              </li>
              <li>
                <Link to="/results" className="footer__link">
                  Diet Results
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Resources</h4>
            <ul className="footer__links">
              <li>
                <a
                  href="https://github.com/ainutricare/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ainutricare/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ainutricare/paper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  Research Paper
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ainutricare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  GitHub Repo
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__links">
              <li>
                <a href="mailto:team@ainutricare.ai" className="footer__link">
                  team@ainutricare.ai
                </a>
              </li>
              <li>
                <span className="footer__link">+1 (555) 012-3456</span>
              </li>
              <li>
                <span className="footer__link">Research Lab, AI Dept.</span>
              </li>
              <li>
                <Link to="/contact" className="footer__link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {year}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__caffeine-link"
            >
              caffeine.ai
            </a>
          </p>
          <div className="footer__badges">
            <span className="footer__badge">🔒 HIPAA-Aware Design</span>
            <span className="footer__badge">🤖 AI-Powered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
