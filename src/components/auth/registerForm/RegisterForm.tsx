"use client";
import { FormProvider, useForm } from "react-hook-form";
import StepPetData from "./steps/StepPetData";
import StepOwnerData from "./steps/StepOwnerData";
import { useState } from "react";

type PetData = {
  petName: string;
  petType: "cat" | "dog";
  petAge: number;
};

type OwnerData = {
  ownerName: string;
  ownerEmail: string;
  ownerTel: number;
};

type TData = PetData & OwnerData;

const RegisterForm = () => {
  const methods = useForm<TData>();
  const [step, setStep] = useState(1);
  const onSubmit = (data: TData) => {
    console.log(data);
  };
  const goStepSubmit = methods.handleSubmit(() => {
    setStep(step + 1);
  });
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-8 py-6 w-80"
      >
        <div>
          {step === 1 && <StepPetData />}
          {step === 2 && <StepOwnerData />}
        </div>
        {step < 2 ? (
          <button
            type="button"
            onClick={goStepSubmit}
            className="bg-primary-pink-500 w-26 h-10 rounded-full font-bold border-b-4 border-primary-pink-700 shadow-2xl "
          >
            Go
          </button>
        ) : (
          <button
            type="submit"
            className="bg-primary-pink-500 w-26 h-10 rounded-full font-bold border-b-4 border-primary-pink-700 shadow-2xl "
          >
            Register
          </button>
        )}
      </form>
    </FormProvider>
  );
};
export default RegisterForm;
