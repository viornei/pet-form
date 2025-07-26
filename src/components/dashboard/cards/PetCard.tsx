import ActionButton from "@/components/ui/ActionButton";
import { useClientProfileStore } from "@/store/useProfileStore";
import Image from "next/image";
import { PropsWithChildren } from "react";

const PetCard = (pet: PropsWithChildren) => {
  const profile = useClientProfileStore((s) => s.profile);
  return (
    <div className="flex max-h-60 min-h-80 w-full max-w-full flex-col justify-items-start gap-6 rounded-xl border-1 bg-white p-4 md:max-w-80">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={"/home/side-view-smiley-woman-dog.webp"}
          alt={"pet.name"}
          width={200}
          height={200}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <h4>{profile?.petType}</h4>
          <span className="font-semibold">{profile?.petName}</span>
        </div>
        <div className="flex gap-2">
          <h4>was born</h4>
          <span>{profile?.petBirthDate.toLocaleString()}</span>
        </div>
      </div>
      <ActionButton>Edit</ActionButton>
    </div>
  );
};
export default PetCard;
