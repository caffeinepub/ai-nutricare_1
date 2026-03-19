# AI-NutriCare

## Current State
New project. No existing pages or components.

## Requested Changes (Diff)

### Add
- Full multi-page React website for AI-NutriCare (AI/ML-Based Personalized Diet Plan Generator from Medical Reports)
- Navbar with logo and links to all pages
- Home page: hero, feature cards, workflow section, benefits
- About page: problem statement, objectives, tech stack, learning outcomes
- Dashboard page: patient summary, health metrics, detected conditions, AI notes, diet preview, action buttons
- Upload Report page: drag-and-drop upload area, processing steps with progress UI
- Diet Plan Results page: full 7-day meal plan with export options
- Contact/Team page: contact form, team section, social links
- 404 Not Found page
- Sample data file with patient info, health metrics, diet plans
- React Router for navigation
- Responsive design across all pages

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Backend: store patient data, uploaded reports, generated diet plans via Motoko actor
2. Frontend components: Navbar, Footer, HeroSection, FeatureCard, MetricCard, DietPlanCard, UploadBox, SectionTitle
3. Frontend pages: Home, About, Dashboard, UploadReport, Results, Contact, NotFound
4. Sample data in data/sampleData.js
5. React Router setup with all routes
6. Responsive CSS with dark healthcare/AI theme (deep navy + teal/green accents)
7. Hover effects, gradients, glassmorphism cards, smooth transitions
