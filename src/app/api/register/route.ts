import { createServClient } from "@/lib/supabase/supabaseServerClient";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const supabase = await createServClient();
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

    const { error: insertError } = await supabase.from("registrations").insert({
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
  }
}
