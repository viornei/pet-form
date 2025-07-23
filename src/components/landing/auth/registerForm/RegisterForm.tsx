"use client";
import { FormProvider, useForm } from "react-hook-form";
import StepPetData from "./steps/StepPetData";
import StepOwnerData from "./steps/StepOwnerData";
import { useState } from "react";
import ActionButton from "@/components/ui/ActionButton";

type PetData = {
  petName: string;
  petType: "cat" | "dog";
  petAge: number;
};

type OwnerData = {
  ownerName: string;
  ownerEmail: string;
  ownerTel: number;
  password: string;
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
          <ActionButton type="button" onClick={goStepSubmit}>
            Go
          </ActionButton>
        ) : (
          <ActionButton type="submit">Register</ActionButton>
        )}
      </form>
    </FormProvider>
  );
};
export default RegisterForm;
