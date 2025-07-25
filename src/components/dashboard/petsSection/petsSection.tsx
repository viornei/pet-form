import ActionButton from "@/components/ui/ActionButton";
import PetCard from "../cards/PetCard";

const PetsSection = () => {
  return (
    <section id="pets" className="space-y-6">
      <div className="flex items-center justify-between">
        <h3>Pets Section</h3>
      </div>
      <div className="w-80 rounded-xl border bg-white py-12 text-center">
        <h4 className="mb-2">No pets here... </h4>
        <ActionButton>Add</ActionButton>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PetCard />
      </div>
    </section>
  );
};
export default PetsSection;
