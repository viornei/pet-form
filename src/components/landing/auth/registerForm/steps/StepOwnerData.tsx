import { useFormContext } from "react-hook-form";

const StepOwnerData = () => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col w-80 md:w-100 gap-4">
      <label className="flex flex-col">
        <p className="text-sm"> Your name</p>
        <input
          type="text"
          {...register("ownerName", { required: true })}
          className="bg-custom-gray-100"
        />
      </label>
      <label className="flex flex-col">
        <p className="text-sm"> Email</p>
        <input
          type="email"
          {...register("ownerEmail", { required: true })}
          className="bg-custom-gray-100"
        />
      </label>
      <label className="flex flex-col">
        <p className="text-sm"> Phone</p>
        <input
          type="tel"
          {...register("ownerTel")}
          className="bg-custom-gray-100"
        />
      </label>
      <label className="flex flex-col">
        <p className="text-sm"> Password</p>
        <input
          type="password"
          {...register("password")}
          className="bg-custom-gray-100"
        />
      </label>
    </div>
  );
};
export default StepOwnerData;
