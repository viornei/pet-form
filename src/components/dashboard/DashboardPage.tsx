"use client";
import { useClientProfileStore } from "@/store/useProfileStore";
import { useUserStore } from "@/store/useUserStore";

import { useEffect } from "react";
import BookingCalendar from "../features/booking/BookingCalendar";
import AiForm from "./ai-form/AiForm";
import PetsSection from "./petsSection/petsSection";

const DashBoardPage = ({ user, profile: initialProfile }: any) => {
  const { setUser } = useUserStore();
  const { profile, setProfile } = useClientProfileStore();
  console.log("initialProfile:", initialProfile);
  console.log("initialProfile.id:", initialProfile?.id);

  useEffect(() => {
    setUser(user);
    if (initialProfile) setProfile(initialProfile);
  }, [user, initialProfile, setUser, setProfile]);
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-330 flex-col items-start px-16 py-12 md:py-25">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Welcome back, {profile?.ownerName || "friend"} 👋
          </h1>
          <p className="mt-2 text-gray-600">
            Manage your pets and book their stay with us
          </p>
        </div>
        <div className="flex w-full flex-col justify-between gap-6 align-top md:flex-row">
          <BookingCalendar registrationId={profile?.id} />
          <div className="hidden md:block">
            <PetsSection />
          </div>
        </div>
        <div className="flex items-start justify-between gap-4 py-2 md:py-12 lg:flex-row">
          {!profile?.aiFormCompleted && <AiForm />}
        </div>
      </div>
    </div>
  );
};
export default DashBoardPage;
