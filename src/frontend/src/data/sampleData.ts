export const samplePatient = {
  name: "John Doe",
  age: 45,
  dob: "March 15, 1979",
  bmi: 27.4,
  bloodSugar: 185,
  cholesterol: 220,
  allergies: ["Shellfish", "Peanuts"],
  dietaryPreferences: ["Low-sugar", "High-fiber", "Heart-healthy"],
  detectedConditions: ["Type 2 Diabetes", "High Cholesterol"],
  reportDate: "March 19, 2026",
  reportStatus: "Analyzed",
  doctorNotes:
    "Patient exhibits elevated fasting blood glucose and LDL levels. Recommend dietary modifications focusing on glycemic index management, increased soluble fiber intake, and reduction of saturated fats. Follow-up in 8 weeks. Avoid high-sodium processed foods.",
};

export const healthMetrics = [
  {
    label: "BMI",
    value: 27.4,
    unit: "kg/m²",
    status: "Borderline",
    statusColor: "#F59E0B",
    progress: 62,
  },
  {
    label: "Blood Sugar",
    value: 185,
    unit: "mg/dL",
    status: "High",
    statusColor: "#EF4444",
    progress: 78,
  },
  {
    label: "Cholesterol",
    value: 220,
    unit: "mg/dL",
    status: "High",
    statusColor: "#EF4444",
    progress: 73,
  },
  {
    label: "Age",
    value: 45,
    unit: "years",
    status: "Normal",
    statusColor: "#34D399",
    progress: 45,
  },
];

export const medicalNotes = [
  { icon: "🚫", text: "Avoid refined sugar and high-GI foods" },
  { icon: "🌾", text: "Increase soluble fiber intake (oats, legumes, fruits)" },
  { icon: "🥩", text: "Prefer lean protein sources (chicken, fish, tofu)" },
  { icon: "🧂", text: "Maintain low sodium diet (< 2000mg/day)" },
  { icon: "💧", text: "Stay well hydrated (8–10 glasses of water daily)" },
  { icon: "⏰", text: "Maintain regular meal timing — avoid skipping meals" },
];

export interface Meal {
  meal: string;
  calories: number;
  notes: string;
}

export interface DayPlan {
  day: number;
  breakfast: Meal;
  lunch: Meal;
  snack: Meal;
  dinner: Meal;
}

export const dietPlan: DayPlan[] = [
  {
    day: 1,
    breakfast: {
      meal: "Oatmeal with skim milk, green tea",
      calories: 310,
      notes: "High fiber, low GI",
    },
    lunch: {
      meal: "Grilled chicken salad with olive oil dressing",
      calories: 420,
      notes: "Lean protein, healthy fats",
    },
    snack: {
      meal: "Apple slices, almonds",
      calories: 180,
      notes: "Low GI, omega-3",
    },
    dinner: {
      meal: "Steamed fish, steamed vegetables",
      calories: 380,
      notes: "Omega-3, low sodium",
    },
  },
  {
    day: 2,
    breakfast: {
      meal: "Vegetable smoothie, whole grain toast",
      calories: 290,
      notes: "Vitamins, complex carbs",
    },
    lunch: {
      meal: "Quinoa salad with legumes",
      calories: 410,
      notes: "Complete protein, high fiber",
    },
    snack: {
      meal: "Low-fat yogurt, berries",
      calories: 160,
      notes: "Probiotics, antioxidants",
    },
    dinner: {
      meal: "Grilled tofu with spinach",
      calories: 360,
      notes: "Plant protein, iron",
    },
  },
  {
    day: 3,
    breakfast: {
      meal: "Scrambled egg whites, multigrain bread, black coffee",
      calories: 300,
      notes: "High protein, low fat",
    },
    lunch: {
      meal: "Lentil soup, brown rice, side salad",
      calories: 430,
      notes: "High fiber, complex carbs",
    },
    snack: {
      meal: "Celery sticks, hummus",
      calories: 140,
      notes: "Low calorie, plant protein",
    },
    dinner: {
      meal: "Baked salmon, asparagus, quinoa",
      calories: 450,
      notes: "Omega-3, anti-inflammatory",
    },
  },
  {
    day: 4,
    breakfast: {
      meal: "Greek yogurt parfait with granola, mixed berries",
      calories: 330,
      notes: "Probiotics, antioxidants",
    },
    lunch: {
      meal: "Turkey wrap with lettuce, tomato, mustard (whole wheat)",
      calories: 440,
      notes: "Lean protein, fiber",
    },
    snack: {
      meal: "Walnuts, green apple",
      calories: 190,
      notes: "Brain health, low GI",
    },
    dinner: {
      meal: "Chicken stir-fry with broccoli, bell peppers, low-sodium soy sauce",
      calories: 400,
      notes: "Lean protein, vitamins",
    },
  },
  {
    day: 5,
    breakfast: {
      meal: "Avocado toast on rye bread, poached egg",
      calories: 340,
      notes: "Healthy fats, protein",
    },
    lunch: {
      meal: "Mixed bean salad with olive oil, lemon dressing",
      calories: 390,
      notes: "Plant protein, fiber",
    },
    snack: {
      meal: "Carrot sticks, tzatziki dip",
      calories: 130,
      notes: "Beta-carotene, probiotics",
    },
    dinner: {
      meal: "Steamed cod with roasted vegetables, sweet potato",
      calories: 410,
      notes: "Lean protein, vitamin A",
    },
  },
  {
    day: 6,
    breakfast: {
      meal: "Chia seed pudding with almond milk, banana",
      calories: 320,
      notes: "Omega-3, potassium",
    },
    lunch: {
      meal: "Grilled veggie panini on whole grain, cucumber salad",
      calories: 400,
      notes: "Fiber, antioxidants",
    },
    snack: {
      meal: "Pumpkin seeds, dried cranberries",
      calories: 170,
      notes: "Zinc, antioxidants",
    },
    dinner: {
      meal: "Lean beef tenderloin, steamed broccoli, mashed cauliflower",
      calories: 460,
      notes: "Iron, vitamin C",
    },
  },
  {
    day: 7,
    breakfast: {
      meal: "Smoothie bowl (spinach, banana, almond milk), granola topping",
      calories: 300,
      notes: "Iron, complex carbs",
    },
    lunch: {
      meal: "Baked chicken breast, roasted sweet potato, green beans",
      calories: 450,
      notes: "Lean protein, vitamins",
    },
    snack: {
      meal: "Mixed nuts, herbal tea",
      calories: 200,
      notes: "Healthy fats, antioxidants",
    },
    dinner: {
      meal: "Gluten-free prawn pasta, marinara sauce, salad",
      calories: 430,
      notes: "Low-fat protein, lycopene",
    },
  },
];

export const featureCards = [
  {
    icon: "📄",
    title: "Medical Report Upload",
    description:
      "Upload PDF, image, or text-based medical reports securely for AI-powered analysis.",
  },
  {
    icon: "🔍",
    title: "Data Extraction",
    description:
      "OCR and NLP engines extract structured numeric data and doctor notes automatically.",
  },
  {
    icon: "🧠",
    title: "ML Health Analysis",
    description:
      "Machine learning models (XGBoost/LightGBM) analyze your health metrics and detect conditions.",
  },
  {
    icon: "💬",
    title: "AI/NLP Interpretation",
    description:
      "GPT and BERT models interpret complex doctor prescriptions and clinical notes.",
  },
  {
    icon: "🥗",
    title: "Personalized Diet Plans",
    description:
      "Generate a complete 7-day meal plan tailored to your conditions, preferences, and allergies.",
  },
  {
    icon: "📊",
    title: "PDF/JSON Export",
    description:
      "Download your personalized diet plan as a print-ready PDF or structured JSON for EHR integration.",
  },
];

export const techStack = [
  {
    name: "Python 3",
    icon: "🐍",
    category: "Backend",
    desc: "Core processing language",
  },
  {
    name: "scikit-learn / XGBoost / LightGBM",
    icon: "🤖",
    category: "ML",
    desc: "Health condition classification",
  },
  {
    name: "GPT / BERT",
    icon: "💡",
    category: "NLP/AI",
    desc: "Doctor note interpretation",
  },
  {
    name: "Tesseract / EasyOCR",
    icon: "👁️",
    category: "OCR",
    desc: "Text extraction from reports",
  },
  {
    name: "React + TypeScript",
    icon: "⚛️",
    category: "Frontend",
    desc: "Modern interactive UI",
  },
  {
    name: "PostgreSQL / SQLite",
    icon: "🗄️",
    category: "Database",
    desc: "Structured data storage",
  },
  {
    name: "PDF / JSON Export",
    icon: "📤",
    category: "Output",
    desc: "Portable result delivery",
  },
];

export const workflowSteps = [
  {
    step: 1,
    title: "Medical Report Input",
    desc: "PDF, image, or text upload",
    icon: "📄",
  },
  {
    step: 2,
    title: "Data Extraction Module",
    desc: "OCR + NLP parsing",
    icon: "🔍",
  },
  { step: 3, title: "ML Analysis", desc: "Condition detection", icon: "🧠" },
  {
    step: 4,
    title: "AI/NLP Interpretation",
    desc: "Doctor note parsing",
    icon: "💬",
  },
  {
    step: 5,
    title: "Diet Plan Generator",
    desc: "Personalized 7-day plan",
    icon: "🥗",
  },
  { step: 6, title: "Output Module", desc: "PDF / JSON / HTML", icon: "📊" },
];

export const benefits = [
  {
    title: "Personalized Recommendations",
    desc: "Diet plans based on YOUR specific medical profile, not generic templates.",
    icon: "🎯",
  },
  {
    title: "Health-Aware Planning",
    desc: "Every meal considers your diagnosed conditions, allergies, and medication.",
    icon: "❤️",
  },
  {
    title: "Smart Report Interpretation",
    desc: "AI reads complex clinical language so you don't have to.",
    icon: "🔬",
  },
  {
    title: "Condition-Based Diet",
    desc: "Specialized meals for diabetes, cholesterol, hypertension, and more.",
    icon: "💊",
  },
];
