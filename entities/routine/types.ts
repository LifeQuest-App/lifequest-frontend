export type RoutineType = "steps" | "workout" | "water" | "sleep" | "custom";

export type Routine = {
  id: string;
  userId: string;
  title: string;
  type: RoutineType;
  targetValue: number;
  unit: string;
  isActive: boolean;
  createdAt: string;
};
