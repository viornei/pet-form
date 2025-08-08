import DashBoardPage from "@/components/dashboard/DashboardPage";
import { createServClient } from "@/lib/supabase/supabaseServerClient";
import { normalizeProfileFromDB } from "@/utils/ normalizeProfileFromDB";

import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = await createServClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/");

  const { data, error } = await supabase
    .from("registrations")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (!data) redirect("/");
  return <DashBoardPage user={user} profile={normalizeProfileFromDB(data)} />;
}
