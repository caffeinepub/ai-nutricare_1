import { Link } from "@tanstack/react-router";
import { ArrowLeft, Home } from "lucide-react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__glow" />
      <div className="not-found__content">
        <div className="not-found__code">404</div>
        <div className="not-found__icon">🥗</div>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__subtitle">
          The page you&apos;re looking for doesn&apos;t exist. Perhaps the AI
          ate it while generating diet plans.
        </p>
        <div className="not-found__actions">
          <Link
            to="/"
            className="nc-btn-primary"
            data-ocid="notfound.primary_button"
          >
            <Home size={16} /> Back to Home
          </Link>
          <button
            type="button"
            className="nc-btn-secondary"
            onClick={() => window.history.back()}
            data-ocid="notfound.secondary_button"
          >
            <ArrowLeft size={16} /> Go Back
          </button>
        </div>
        <div className="not-found__links">
          <Link to="/dashboard" className="not-found__link">
            Dashboard
          </Link>
          <Link to="/upload" className="not-found__link">
            Upload Report
          </Link>
          <Link to="/results" className="not-found__link">
            Diet Results
          </Link>
        </div>
      </div>
    </div>
  );
}
