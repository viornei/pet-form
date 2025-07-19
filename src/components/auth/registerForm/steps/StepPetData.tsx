import { useFormContext } from "react-hook-form";
const StepPetData = () => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col w-70 gap-4">
      <label className="flex flex-col">
        Pet name
        <input type="text" {...register("petName", { required: true })} />
      </label>
      <div className="flex gap-4">
        <label className="flex gap-2">
          <input
            type="radio"
            value="dog"
            {...register("petType", { required: true })}
          />
          Dog
        </label>
        <label className="flex gap-2">
          <input
            type="radio"
            value="cat"
            {...register("petType", { required: true })}
          />
          Cat
        </label>
      </div>
      <label className="flex flex-col">
        Pet age
        <input
          type="number"
          min={0}
          max={25}
          {...register("petAge", { required: true })}
        />
      </label>
    </div>
  );
};
export default StepPetData;
