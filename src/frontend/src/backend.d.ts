import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Meal {
    fat: number;
    carbs: number;
    calories: number;
    name: string;
    description: string;
    protein: number;
}
export type Time = bigint;
export interface DayDietPlan {
    breakfast: Array<Meal>;
    nutritionalNotes: string;
    lunch: Array<Meal>;
    snack: Array<Meal>;
    dayNumber: bigint;
    dinner: Array<Meal>;
}
export interface DietPlan {
    dayDietPlans: Array<DayDietPlan>;
    patientId: PatientId;
}
export type Condition = string;
export type FoodItem = string;
export interface MedicalReport {
    status: ReportStatus;
    filename: string;
    filetype: string;
    uploadDate: Time;
}
export type PatientId = bigint;
export interface Patient {
    id: PatientId;
    age: bigint;
    bmi: number;
    dietaryPreferences: Array<string>;
    name: string;
    bloodSugar: number;
    detectedConditions: Array<Condition>;
    allergies: Array<FoodItem>;
    cholesterol: number;
}
export enum ReportStatus {
    pending = "pending",
    analyzed = "analyzed",
    archived = "archived"
}
export interface backendInterface {
    addPatient(name: string, age: bigint, bmi: number, bloodSugar: number, cholesterol: number, allergies: Array<FoodItem>, dietaryPreferences: Array<string>, detectedConditions: Array<Condition>): Promise<PatientId>;
    getAllPatients(): Promise<Array<Patient>>;
    getDietPlan(patientId: PatientId): Promise<DietPlan>;
    getPatient(id: PatientId): Promise<Patient>;
    getPatientReports(patientId: PatientId): Promise<Array<MedicalReport>>;
    saveDietPlan(patientId: PatientId, dayDietPlans: Array<DayDietPlan>): Promise<void>;
    uploadMedicalReport(patientId: PatientId, filename: string, filetype: string, status: ReportStatus): Promise<void>;
}
