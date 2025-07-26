"use client";
import { useClientProfileStore } from "@/store/useProfileStore";
import { useUserStore } from "@/store/useUserStore";

import { useEffect } from "react";
import PetsSection from "./petsSection/petsSection";

const DashBoardPage = ({ user, profile }: any) => {
  const { setUser } = useUserStore();
  const { setProfile } = useClientProfileStore();

  useEffect(() => {
    setUser(user);
    if (profile) setProfile(profile);
  }, [user, profile, setUser, setProfile]);

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-330 flex-col items-center justify-center px-16 py-12 md:py-25">
        <h1 className="text-xl md:text-4xl">
          Hello, {profile?.ownerName || undefined}
        </h1>
        <div className="w-full items-start py-2 md:py-25">
          <PetsSection />
        </div>
      </div>
    </div>
  );
};
export default DashBoardPage;
