import ActionButton from "@/components/ui/ActionButton";
import { useClientProfileStore } from "@/store/useProfileStore";
import PetCard from "../cards/PetCard";

const PetsSection = () => {
  const profile = useClientProfileStore((s) => s.profile);

  return (
    <div className="space-y-6">
      {profile?.petName && (
        <div className="grid w-full grid-cols-1 items-end gap-6">
          <PetCard />
        </div>
      )}
      <ActionButton className="justify-self-end rounded-full border-b-4 border-gray-500 bg-gray-100 px-4 py-2 font-bold shadow-2xl transition-all duration-100 hover:brightness-105 active:translate-y-0.5 active:border-b-2 md:block">
        Add Pet
      </ActionButton>
    </div>
  );
};

export default PetsSection;
