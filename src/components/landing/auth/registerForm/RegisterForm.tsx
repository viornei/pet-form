"use client";
import ActionButton from "@/components/ui/ActionButton";
import { createClient } from "@/lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TClientProfileData } from "../type";
import StepOwnerData from "./steps/StepOwnerData";
import StepPetData from "./steps/StepPetData";

const RegisterForm = () => {
  const methods = useForm<TClientProfileData>();
  const [step, setStep] = useState(1);

  const router = useRouter();

  const supabase = createClient();
  const onSubmit = async (data: TClientProfileData) => {
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
        className="flex w-80 flex-col items-center gap-8 py-3 md:py-6"
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
