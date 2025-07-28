import { TClientProfileData } from "@/components/landing/auth/type";
import { create } from "zustand";
type PetBehaviorFlag = {
  key: string;
  label?: string;
  value: boolean;
};
type ProfileState = {
  profile: TClientProfileData | null;
  setProfile: (profile: TClientProfileData) => void;
  clearProfile: () => void;
};

export const useClientProfileStore = create<ProfileState>((set, get) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
  clearProfile: () => set({ profile: null }),
}));
