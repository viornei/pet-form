"use client";
import { useClientProfileStore } from "@/store/useProfileStore";
import { useUserStore } from "@/store/useUserStore";

import { useEffect } from "react";
import AiForm from "./ai-form/AiForm";
import PetsSection from "./petsSection/petsSection";

const DashBoardPage = ({ user, profile: initialProfile }: any) => {
  const { setUser } = useUserStore();
  const { profile, setProfile } = useClientProfileStore();

  useEffect(() => {
    setUser(user);
    if (initialProfile) setProfile(initialProfile);
  }, [user, initialProfile, setUser, setProfile]);
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-330 flex-col items-start px-16 py-12 md:py-25">
        <h1 className="w-full text-end text-xl md:text-4xl">
          Hello, {profile?.ownerName || "friend"} 👋
        </h1>
        <div className="flex flex-col items-start justify-between gap-4 py-2 md:py-12 lg:flex-row">
          <div className="flex w-full flex-col items-start">
            <PetsSection />
          </div>
          {!profile?.aiFormCompleted && <AiForm />}
        </div>
      </div>
    </div>
  );
};
export default DashBoardPage;
