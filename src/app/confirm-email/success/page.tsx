"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/supabaseClient";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (!error && user) {
        const {
          petName,
          petType,
          petBirthDate,
          petAnimalAgression,
          petPeopleAgression,
          petAnxiety,
          petHealthProblem,
          petChewing,
          petBarking,
          ownerTel,
          ownerName,
        } = user.user_metadata;

        const { error: insertError } = await supabase
          .from("registrations")
          .insert({
            user_id: user.id,
            owner_name: ownerName,
            owner_tel: ownerTel,
            pet_name: petName,
            pet_type: petType,
            pet_birth_date: petBirthDate,
            pet_animal_agression: petAnimalAgression,
            pet_people_agression: petPeopleAgression,
            pet_anxiety: petAnxiety,
            pet_health_problem: petHealthProblem,
            pet_chewing: petChewing,
            pet_barking: petBarking,
          });
        if (insertError) {
          console.error("Database insert error:", insertError);
          return;
        }
        router.push("/dashboard");
      }
    };
    getUser();
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-xl">We confirm registration... 🐾</p>
    </div>
  );
}
