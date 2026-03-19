import { Link } from "@tanstack/react-router";
import { Activity, Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/upload", label: "Upload Report" },
    { to: "/results", label: "Results" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" data-ocid="nav.link">
          <div className="navbar__logo-mark">
            <Activity size={18} strokeWidth={2.5} />
          </div>
          <span className="navbar__logo-text">AI-NutriCare</span>
        </Link>

        <div
          className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="navbar__link"
              activeProps={{ className: "navbar__link navbar__link--active" }}
              onClick={() => setMenuOpen(false)}
              data-ocid="nav.link"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar__actions">
          <Link
            to="/upload"
            className="navbar__cta"
            data-ocid="nav.primary_button"
          >
            Get Started
          </Link>
          <button
            type="button"
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
