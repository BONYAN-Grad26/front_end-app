

export interface RegisterUserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

enum ErrorType {
    NOT_FOUND_ERR,
    BAD_REQUEST_ERR,
    UNAUTHORIZED_ERR,
    FORBIDDEN_ERR,
    VALIDATION_ERR,
    INTERNAL_SERVER_ERR,
    NONE
}

type ErrorResonse = {
    message: string;
    type: ErrorType;

}
export interface ResponseData {
    success: boolean;
    error: ErrorResonse;
    data: Record<string, any> | null;



}
export enum DietGoal {
  LOSE_WEIGHT = "LOSE_WEIGHT",
  GAIN_MUSCLE = "GAIN_MUSCLE",
  MAINTAIN_WEIGHT = "MAINTAIN_WEIGHT",
  IMPROVE_HEALTH = "IMPROVE_HEALTH",
}

export enum ActivityLevel {
  SEDENTARY = "SEDENTARY",
  LIGHTLY_ACTIVE = "LIGHTLY_ACTIVE",
  MODERATELY_ACTIVE = "MODERATELY_ACTIVE",
  VERY_ACTIVE = "VERY_ACTIVE",
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export enum DietType {
  BALANCED = "BALANCED",
  KETOGENIC = "KETOGENIC",
  VEGETARIAN = "VEGETARIAN",
  VEGAN = "VEGAN",
  PALEO = "PALEO",
  MEDITERRANEAN = "MEDITERRANEAN",
  LOW_CARB = "LOW_CARB",
  HIGH_PROTEIN = "HIGH_PROTEIN",
  INTERMITTENT_FASTING = "INTERMITTENT_FASTING",
}
export interface OnboardingData {
  // Basic Info
  age: number;
  gender: Gender ;
  height: number;
  weight: number;
  // Body Composition
  musclePercentage: number;
  fatPercentage: number;
  // Lifestyle
  activityLevel: ActivityLevel;
  // Goals
  dietGoal: DietGoal;
  targetWeight: number;
  dailyCalories: number;
  dietType: DietType;
  // Allergies
  allergies: string[];
  // Medical Notes
  medicalNotes: string;
}

export interface HealthData {
  "age": number;
  "weightKg": number;
  "heightCm": number;
  "muscleMassKg": number;
  "fatPercentage": number;
  "gender": Gender;
  "activityLevel": ActivityLevel;
  "medicalNotes": string;
  "dietType": DietType;
  "dietGoal": DietGoal;
  "targetWeightKg": number;
  "dailyCalorieTarget": number;
}

export interface HealthProfileData {
  id: number;
  age: number;
  weightKg: number;
  heightCm: number;
  muscleMassKg: number;
  fatPercentage: number;

  gender: Gender;
  activityLevel: ActivityLevel;

  medicalNotes: string | null;

  dietType: DietType;
  dietGoal: DietGoal;

  bmi: number;
  bmiCategory: string | null;

  tdee: number;

  fatMass: number;
  leanMass: number;

  bodyFatCategory: string | null;

  targetWeightKg: number | null;
  dailyCalorieTarget: number;
}

