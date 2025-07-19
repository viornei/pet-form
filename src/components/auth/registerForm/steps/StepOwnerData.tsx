import { useFormContext } from "react-hook-form";

const StepOwnerData = () => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col w-70 gap-4">
      <label className="flex flex-col">
        Your name
        <input type="text" {...register("ownerName", { required: true })} />
      </label>
      <label className="flex flex-col">
        Email
        <input type="email" {...register("ownerEmail", { required: true })} />
      </label>
      <label className="flex flex-col">
        Phone
        <input type="tel" {...register("ownerTel")} />
      </label>
      <label className="flex flex-col">
        Password
        <input type="password" {...register("password")} />
      </label>
    </div>
  );
};
export default StepOwnerData;
