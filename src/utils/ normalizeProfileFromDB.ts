import { TClientProfileData } from "@/components/landing/auth/type";

export const normalizeProfileFromDB = (data: any): TClientProfileData => ({
  ownerName: data.owner_name,
  ownerTel: data.owner_tel,
  ownerEmail: "",
  password: "",
  petName: data.pet_name,
  petType: data.pet_type,
  petBirthDate: data.pet_birth_date,
  petAnimalAgression: data.pet_animal_agression,
  petPeopleAgression: data.pet_people_agression,
  petAnxiety: data.pet_anxiety,
  petHealthProblem: data.pet_health_problem,
  petChewing: data.pet_chewing,
  petBarking: data.pet_barking,
});
