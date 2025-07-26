import ActionButton from "@/components/ui/ActionButton";
import { useClientProfileStore } from "@/store/useProfileStore";
import PetCard from "../cards/PetCard";

const PetsSection = () => {
  const profile = useClientProfileStore((s) => s.profile);

  return (
    <section id="pets" className="space-y-6">
      <div className="flex items-center justify-between">
      </div>
      {profile?.petName ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PetCard />
        </div>
      ) : (
        <div className="w-80 rounded-xl border bg-white py-12 text-center">
          <h4 className="mb-2">No pets here... </h4>
          <ActionButton>Add</ActionButton>
        </div>
      )}
    </section>
  );
};
export default PetsSection;
