import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileJson, Info, Printer } from "lucide-react";
import { useState } from "react";
import DietPlanCard from "../../components/DietPlanCard/DietPlanCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { dietPlan, medicalNotes, samplePatient } from "../../data/sampleData";
import "./Results.css";

export default function Results() {
  const [activeDay, setActiveDay] = useState("1");

  const handleExport = (type: string) => {
    window.alert(
      `${type} export feature — available in the backend-connected version.`,
    );
  };

  const currentPlan =
    dietPlan.find((d) => d.day === Number(activeDay)) ?? dietPlan[0];

  return (
    <div className="results">
      <div className="results__header">
        <div className="results__header-glow" />
        <div className="nc-container">
          <div className="results__header-inner">
            <div>
              <div className="results__header-badge">
                Personalized Diet Plan
              </div>
              <h1 className="results__header-title">
                {samplePatient.name}&rsquo;s Nutrition Plan
              </h1>
              <div className="results__header-conditions">
                {samplePatient.detectedConditions.map((c) => (
                  <span key={c} className="nc-badge nc-badge--red">
                    {c}
                  </span>
                ))}
                {samplePatient.dietaryPreferences.map((p) => (
                  <span key={p} className="nc-badge nc-badge--teal">
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div className="results__export-btns">
              <button
                type="button"
                className="results__export-btn"
                onClick={() => handleExport("PDF")}
                data-ocid="results.secondary_button"
              >
                <Download size={15} /> Download PDF
              </button>
              <button
                type="button"
                className="results__export-btn"
                onClick={() => handleExport("JSON")}
                data-ocid="results.secondary_button"
              >
                <FileJson size={15} /> Export JSON
              </button>
              <button
                type="button"
                className="results__export-btn"
                onClick={() => window.print()}
                data-ocid="results.secondary_button"
              >
                <Printer size={15} /> Print
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="nc-container">
        <div className="results__body">
          <div className="results__main">
            <SectionTitle
              badge="🗓️ 7-Day Plan"
              title="Daily"
              titleHighlight="Meal Schedule"
              subtitle="Each meal is optimized for your conditions: Type 2 Diabetes and High Cholesterol."
            />

            <Tabs
              value={activeDay}
              onValueChange={setActiveDay}
              data-ocid="results.tab"
            >
              <TabsList className="results__tabs-list">
                {dietPlan.map((d) => (
                  <TabsTrigger
                    key={d.day}
                    value={String(d.day)}
                    className="results__tab-trigger"
                    data-ocid={`results.tab.${d.day}`}
                  >
                    Day {d.day}
                  </TabsTrigger>
                ))}
              </TabsList>
              {dietPlan.map((d) => (
                <TabsContent
                  key={d.day}
                  value={String(d.day)}
                  className="results__tab-content"
                >
                  <DietPlanCard plan={d} />
                </TabsContent>
              ))}
            </Tabs>

            <div className="results__weekly">
              <h3 className="results__weekly-title">Weekly Snapshot</h3>
              <div className="results__weekly-grid">
                {dietPlan.map((d) => (
                  <button
                    type="button"
                    key={d.day}
                    className={`results__weekly-card ${activeDay === String(d.day) ? "results__weekly-card--active" : ""}`}
                    onClick={() => setActiveDay(String(d.day))}
                    data-ocid={`results.item.${d.day}`}
                  >
                    <div className="results__weekly-day">Day {d.day}</div>
                    <div className="results__weekly-meal">
                      {d.breakfast.meal.split(",")[0]}
                    </div>
                    <div className="results__weekly-cal">
                      {d.breakfast.calories +
                        d.lunch.calories +
                        d.snack.calories +
                        d.dinner.calories}{" "}
                      kcal
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="results__sidebar">
            <div className="results__notes-card">
              <div className="results__notes-header">
                <Info size={18} className="results__notes-icon" />
                <h3>Medical Notes</h3>
              </div>
              <p className="results__notes-subtitle">
                Dietary guidelines based on your conditions and doctor&apos;s
                recommendations.
              </p>
              <div className="results__notes-list">
                {medicalNotes.map((n) => (
                  <div key={n.text} className="results__note-item">
                    <span className="results__note-icon">{n.icon}</span>
                    <span className="results__note-text">{n.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="results__summary-card">
              <h4 className="results__summary-title">Today&apos;s Plan</h4>
              <div className="results__summary-stats">
                <div className="results__summary-stat">
                  <span className="results__summary-num">
                    {currentPlan.breakfast.calories +
                      currentPlan.lunch.calories +
                      currentPlan.snack.calories +
                      currentPlan.dinner.calories}
                  </span>
                  <span>Total kcal</span>
                </div>
                <div className="results__summary-stat">
                  <span className="results__summary-num">4</span>
                  <span>Meals</span>
                </div>
                <div className="results__summary-stat">
                  <span className="results__summary-num">7</span>
                  <span>Days</span>
                </div>
              </div>
              <div className="results__allergy-notice">
                <span>⚠️</span>
                <div>
                  <strong>Allergen-Free</strong>
                  <p>All meals exclude: {samplePatient.allergies.join(", ")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
