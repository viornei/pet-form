import { useFormContext } from "react-hook-form";
const StepPetData = () => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col w-100 gap-4">
      <label className="flex flex-col gap-1">
        <p className="text-sm">Pet name</p>
        <input
          type="text"
          {...register("petName", { required: true })}
          className="bg-custom-gray-100 "
        />
      </label>
      <div className="flex gap-4">
        <label className="flex gap-1 items-center">
          <input
            id="dog"
            type="radio"
            value="dog"
            {...register("petType", { required: true })}
            className="bg-custom-gray-100"
          />
          <p className="text-sm"> Dog </p>
        </label>
        <label className="flex gap-1 items-center">
          <input
            id="cat"
            type="radio"
            value="cat"
            {...register("petType", { required: true })}
          />
          <p className="text-sm"> Cat</p>
        </label>
      </div>
      <label className="flex flex-col gap-1">
        <p className="text-sm">Pet age</p>
        <input
          type="number"
          min={0}
          max={25}
          {...register("petAge", { required: true })}
          className="bg-custom-gray-100"
        />
      </label>
      <div className="flex flex-col gap-1">
        <p className="text-sm">Important info</p>
        <div className="grid grid-cols-2 gap-x-12 gap-y-1">
          <label className="flex items-center gap-2 justify-between">
            <p className="text-sm">Zoo agression</p>
            <input
              type="checkbox"
              {...register("petAgression")}
              className="bg-custom-gray-100 size-3"
            />
          </label>
          <label className="flex items-center gap-2 justify-between">
            <p className="text-sm">People agression</p>
            <input
              type="checkbox"
              {...register("petPeopleAgression")}
              className="bg-custom-gray-100 size-3"
            />
          </label>
          <label className="flex items-center gap-2 justify-between">
            <p className="text-sm">Separation anxiety</p>
            <input
              type="checkbox"
              {...register("petAnxiety")}
              className="bg-custom-gray-100 size-3"
            />
          </label>
          <label className="flex items-center gap-2 justify-between">
            <p className="text-sm">Health Problem</p>
            <input
              type="checkbox"
              {...register("petHealthProblem")}
              className="bg-custom-gray-100 size-3"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
export default StepPetData;
