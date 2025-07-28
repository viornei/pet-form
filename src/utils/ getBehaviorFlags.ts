import { TClientProfileData } from "@/components/landing/auth/type";

type Flag = { key: string; label: string };

export const getBehaviorFlags = (profile: TClientProfileData | null): Flag[] => {
  if (!profile) return [];

  return [
    profile.petAnimalAgression && { key: "animal_agression", label: "Aggressive to animals" },
    profile.petPeopleAgression && { key: "people_agression", label: "Aggressive to people" },
    profile.petAnxiety && { key: "anxiety", label: "Anxious" },
    profile.petHealthProblem && { key: "health_problem", label: "Has health issues" },
    profile.petChewing && { key: "chewing", label: "Chews things" },
    profile.petBarking && { key: "barking", label: "Barks a lot" },
  ].filter(Boolean) as Flag[];
};
