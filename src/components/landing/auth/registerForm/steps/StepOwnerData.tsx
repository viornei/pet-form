import Input from "@/components/ui/Input";
import { useFormContext } from "react-hook-form";

const StepOwnerData = () => {
  const { register } = useFormContext();
  return (
    <div className="flex w-80 flex-col gap-4 md:w-100">
      <label className="flex flex-col">
        <p className="text-sm"> Your name</p>
        <Input
          type="text"
          {...register("ownerName", { required: true })}
          className="bg-custom-gray-100"
        />
      </label>
      <label className="flex flex-col">
        <p className="text-sm"> Email</p>
        <Input
          type="email"
          {...register("ownerEmail", { required: true })}
          className="bg-custom-gray-100"
        />
      </label>
      <label className="flex flex-col">
        <p className="text-sm"> Phone</p>
        <Input
          type="tel"
          {...register("ownerTel")}
          className="bg-custom-gray-100"
        />
      </label>
      <label className="flex flex-col">
        <p className="text-sm"> Password</p>
        <Input
          type="password"
          {...register("password")}
          className="bg-custom-gray-100"
        />
      </label>
    </div>
  );
};
export default StepOwnerData;
