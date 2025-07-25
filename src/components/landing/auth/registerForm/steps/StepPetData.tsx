import DatePickerField from "@/components/ui/DatepickerField";
import { Controller, useFormContext } from "react-hook-form";
const StepPetData = () => {
  const { register, control } = useFormContext();
  return (
    <div className="flex w-80 flex-col gap-4 md:w-100">
      <label className="flex flex-col gap-1">
        <span className="text-sm">Pet name</span>
        <input
          type="text"
          {...register("petName", { required: true })}
          className="bg-custom-gray-100"
        />
      </label>
      <div className="flex gap-4">
        <label className="flex items-center gap-1">
          <input
            id="dog"
            type="radio"
            value="dog"
            {...register("petType", { required: true })}
            className="accent-primary-pink-700"
          />
          <span className="text-sm"> Dog </span>
        </label>
        <label className="flex items-center gap-1">
          <input
            id="cat"
            type="radio"
            value="cat"
            {...register("petType", { required: true })}
            className="accent-primary-pink-700"
          />
          <span className="text-sm"> Cat</span>
        </label>
      </div>
      <Controller
        name="petBirthDate"
        control={control}
        render={({ field }) => <DatePickerField {...field} />}
      />
      <div className="flex flex-col gap-1">
        <span className="text-sm">Behavioral traits</span>
        <div className="grid grid-cols-2 gap-x-10 gap-y-0.5 text-sm md:text-base">
          <label className="flex items-center justify-between gap-2">
            <span> Animal agression</span>
            <input
              type="checkbox"
              {...register("petAnimalgression")}
              className="bg-custom-gray-100 size-3"
            />
          </label>
          <label className="flex items-center justify-between gap-2">
            <span>People agression</span>
            <input
              type="checkbox"
              {...register("petPeopleAgression")}
              className="bg-custom-gray-100 size-3"
            />
          </label>
          <label className="flex items-center justify-between gap-2">
            <span>Separation anxiety</span>
            <input
              type="checkbox"
              {...register("petAnxiety")}
              className="bg-custom-gray-100 size-3"
            />
          </label>
          <label className="flex items-center justify-between gap-2">
            <span>Health Problem</span>
            <input
              type="checkbox"
              {...register("petHealthProblem")}
              className="bg-custom-gray-100 size-3"
            />
          </label>
          <label className="flex items-center justify-between gap-2">
            <span>Chewing</span>
            <input
              type="checkbox"
              {...register("petChewing")}
              className="bg-custom-gray-100 size-3"
            />
          </label>
          <label className="flex items-center justify-between gap-2">
            <span>Excessive barking</span>
            <input
              type="checkbox"
              {...register("petBarking")}
              className="bg-custom-gray-100 size-3"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
export default StepPetData;
