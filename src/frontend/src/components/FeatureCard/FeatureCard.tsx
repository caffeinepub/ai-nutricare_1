import "./FeatureCard.css";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  return (
    <div className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="feature-card__icon">
        <span className="feature-card__emoji" role="img" aria-label={title}>
          {icon}
        </span>
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__desc">{description}</p>
    </div>
  );
}
