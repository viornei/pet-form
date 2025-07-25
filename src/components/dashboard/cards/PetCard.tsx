import ActionButton from "@/components/ui/ActionButton";
import Image from "next/image";
import { PropsWithChildren } from "react";

const PetCard = (pet: PropsWithChildren) => {
  return (
    <div className="flex min-h-80 w-full max-w-80 flex-col justify-items-start gap-6 rounded-xl border-1 bg-white p-4">
      <h2 className="text-3xl">Pet Card</h2>
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={""}
          alt={"pet.name"}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="flex flex-col gap-2">
        <h4>name</h4>
        <span>type</span>
        <span>additional info </span>
      </div>
      <ActionButton>Edit</ActionButton>
    </div>
  );
};
export default PetCard;
