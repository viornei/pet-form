type PetData = {
  petName: string;
  petType: "cat" | "dog";
  petBirthDate: Date;
  petAnimalAgression: boolean;
  petPeopleAgression: boolean;
  petAnxiety: boolean;
  petHealthProblem: boolean;
  petChewing: boolean;
  petBarking: boolean;
  petGender?: "male" | "female";
};

type OwnerData = {
  ownerName: string;
  ownerEmail: string;
  ownerTel: number;
  password: string;
  aiFormCompleted: boolean;
};

export type TClientProfileData = PetData & OwnerData;
