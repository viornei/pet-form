import { createServClient } from "@/lib/supabase/supabaseServerClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const supabase = await createServClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { questions, answers, petName } = body;

  if (!questions || !answers) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }
  const { data: registration } = await supabase
    .from("registrations")
    .select("id")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (!registration) {
    return NextResponse.json(
      { error: "Registration not found" },
      { status: 404 },
    );
  }
  const data = questions.map((question: string, index: number) => ({
    registration_id: registration.id,
    question_text: question,
    answer_text: answers[index] || "",
    pet_name: petName || "",
  }));
  const { error: insertError } = await supabase
    .from("ai_questionnaire")
    .insert(data);
  if (insertError) {
    console.error("Database insert error:", insertError);

    return NextResponse.json({ error: "Failed to save answers" });
  }
  const { error: updateError } = await supabase
    .from("registrations")
    .update({ ai_form_completed: true })
    .eq("id", registration.id);

  if (updateError) {
    console.error("Update error:", updateError);
    return NextResponse.json({ error: "Failed to update form status" });
  }
  return NextResponse.json({ success: true });
}
