"use client";

import ActionButton from "@/components/ui/ActionButton";
import { useClientProfileStore } from "@/store/useProfileStore";
import { getBehaviorFlags } from "@/utils/ getBehaviorFlags";
import Image from "next/image";
import { useMemo } from "react";

const PetCard = () => {
  const profile = useClientProfileStore((s) => s.profile);
  const behaviorFlags = useMemo(() => getBehaviorFlags(profile), [profile]);
  return (
    <div className="group flex max-h-150 min-h-80 w-full max-w-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 md:max-w-80">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={"/home/side-view-smiley-woman-dog.webp"}
          alt={profile?.petName || "Pet photo"}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        <div className="absolute right-6 bottom-2 left-6">
          <div className="border-gray rounded-xl border bg-white p-4 opacity-85 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <h2 className="text-fluid-base font-bold text-gray-900">
                  {profile?.petName}
                </h2>
                <p className="text-fluid-sm font-medium text-gray-600">
                  {profile?.petType}
                </p>
                {/* {profile?.petGender === "female" ? "♀️" : "♂️"} */}
              </div>
              <div className="text-right">
                <p className="text-fluid-sm font-medium text-gray-500">Born</p>
                <p className="text-fluid-sm font-semibold text-gray-700">
                  {profile?.petBirthDate?.toLocaleString("en-US")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div>
          <h3 className="text-fluid-base mb-3 font-semibold tracking-tight text-gray-900">
            Specifics
          </h3>
          {behaviorFlags.length ? (
            <div className="flex flex-wrap gap-2">
              {behaviorFlags.map((flag) => (
                <span
                  key={flag.key}
                  className="inline-flex items-center rounded-full border border-gray-300 bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200"
                >
                  {flag.label}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400 italic">No specifics</p>
          )}
        </div>
        <div className="mt-2">
          <ActionButton>Edit </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
