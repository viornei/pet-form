import { TClientProfileData } from "@/components/landing/auth/type";
import { create } from "zustand";

type ProfileState = {
  profile: TClientProfileData | null;
  setProfile: (profile: TClientProfileData) => void;
  clearProfile: () => void;
};

export const useClientProfileStore = create<ProfileState>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
  clearProfile: () => set({ profile: null }),
}));
