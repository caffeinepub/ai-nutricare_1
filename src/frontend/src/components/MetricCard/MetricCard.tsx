import "./MetricCard.css";

interface MetricCardProps {
  label: string;
  value: number;
  unit: string;
  status: string;
  statusColor: string;
  progress: number;
}

export default function MetricCard({
  label,
  value,
  unit,
  status,
  statusColor,
  progress,
}: MetricCardProps) {
  return (
    <div className="metric-card">
      <div className="metric-card__header">
        <span className="metric-card__label">{label}</span>
        <span
          className="metric-card__status"
          style={{
            color: statusColor,
            borderColor: `${statusColor}40`,
            backgroundColor: `${statusColor}15`,
          }}
        >
          {status}
        </span>
      </div>
      <div className="metric-card__value">
        <span className="metric-card__number">{value}</span>
        <span className="metric-card__unit">{unit}</span>
      </div>
      <div className="metric-card__progress-bg">
        <div
          className="metric-card__progress-fill"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${statusColor}80, ${statusColor})`,
          }}
        />
      </div>
      <div className="metric-card__progress-labels">
        <span>0</span>
        <span style={{ color: statusColor }}>{progress}%</span>
      </div>
    </div>
  );
}
