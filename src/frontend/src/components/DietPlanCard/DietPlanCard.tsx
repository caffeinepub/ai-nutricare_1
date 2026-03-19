import type { DayPlan } from "../../data/sampleData";
import "./DietPlanCard.css";

interface DietPlanCardProps {
  plan: DayPlan;
  compact?: boolean;
}

const mealIcons: Record<string, string> = {
  Breakfast: "🌅",
  Lunch: "☀️",
  Snack: "🍎",
  Dinner: "🌙",
};

export default function DietPlanCard({
  plan,
  compact = false,
}: DietPlanCardProps) {
  const meals = [
    { label: "Breakfast", data: plan.breakfast },
    { label: "Lunch", data: plan.lunch },
    { label: "Snack", data: plan.snack },
    { label: "Dinner", data: plan.dinner },
  ];

  const totalCals = meals.reduce((acc, m) => acc + m.data.calories, 0);

  return (
    <div className="diet-card">
      <div className="diet-card__header">
        <div className="diet-card__day-badge">Day {plan.day}</div>
        <div className="diet-card__total">{totalCals} kcal/day</div>
      </div>
      <div
        className={`diet-card__meals ${compact ? "diet-card__meals--compact" : ""}`}
      >
        {meals.map((meal) => (
          <div key={meal.label} className="diet-card__meal">
            <div className="diet-card__meal-icon">{mealIcons[meal.label]}</div>
            <div className="diet-card__meal-info">
              <span className="diet-card__meal-label">{meal.label}</span>
              <span className="diet-card__meal-text">{meal.data.meal}</span>
              {!compact && (
                <span className="diet-card__meal-meta">
                  {meal.data.calories} kcal · {meal.data.notes}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
