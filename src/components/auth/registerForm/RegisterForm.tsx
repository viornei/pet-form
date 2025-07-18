"use client";
import { FormProvider, useForm } from "react-hook-form";
import StepPetData from "./steps/StepPetData";
import StepOwnerData from "./steps/StepOwnerData";
import { useState } from "react";
import styles from "./RegisterForm.module.css";

type TData = {
  petName: string;
  petType: "cat" | "dog";
  petAge: number;
  ownerName: string;
  ownerEmail: string;
  ownerTel: number;
};

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
        className={styles.formWrapper}
      >
        <div>
          {step === 1 && <StepPetData />}
          {step === 2 && <StepOwnerData />}
        </div>
        {step < 2 ? (
          <button
            type="button"
            onClick={goStepSubmit}
            className={styles.buttonForm}
          >
            GO
          </button>
        ) : (
          <button type="submit" className={styles.buttonForm}>
            REGISTER
          </button>
        )}
      </form>
    </FormProvider>
  );
};
export default RegisterForm;
