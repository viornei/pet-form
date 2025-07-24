"use client";
import { FormProvider, useForm } from "react-hook-form";
import StepPetData from "./steps/StepPetData";
import StepOwnerData from "./steps/StepOwnerData";
import { useState } from "react";
import ActionButton from "@/components/ui/ActionButton";
import { createClient } from "@/lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";

type PetData = {
  petName: string;
  petType: "cat" | "dog";
  petBirthDate: Date;
  petAnimalAgression: boolean;
  petPeopleAgression: boolean;
  petAnxiety: boolean;
  petHealthProblem: boolean;
  petChewing: boolean;
  petBarking: boolean;
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

  const router = useRouter();

  const supabase = createClient();
  const onSubmit = async (data: TData) => {
    const { ownerEmail, password } = data;

    const { error } = await supabase.auth.signUp({
      email: ownerEmail,
      password,
      options: {
        emailRedirectTo: `${location.origin}/confirm-email/success`,
        data: {
          ownerName: data.ownerName,
          ownerTel: data.ownerTel,
          petName: data.petName,
          petType: data.petType,
          petBirthDate: data.petBirthDate,
          petAnimalAgression: data.petAnimalAgression,
          petPeopleAgression: data.petPeopleAgression,
          petAnxiety: data.petAnxiety,
          petHealthProblem: data.petHealthProblem,
          petChewing: data.petChewing,
          petBarking: data.petBarking,
        },
      },
    });

    if (error) {
      alert(error.message || "Signup error");
      return;
    }

    router.push("/confirm-email");
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
