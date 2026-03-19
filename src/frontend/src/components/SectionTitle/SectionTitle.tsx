import "./SectionTitle.css";

interface SectionTitleProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  titleHighlight,
  subtitle,
  centered = false,
}: SectionTitleProps) {
  return (
    <div
      className={`section-title ${centered ? "section-title--centered" : ""}`}
    >
      {badge && <span className="section-title__badge">{badge}</span>}
      <h2 className="section-title__heading">
        {title}
        {titleHighlight && (
          <>
            {" "}
            <span className="section-title__highlight">{titleHighlight}</span>
          </>
        )}
      </h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  );
}
