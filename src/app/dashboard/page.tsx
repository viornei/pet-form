import DashBoardPage from "@/components/dashboard/DashboardPage";
import { createServClient } from "@/lib/supabase/supabaseServerClient";

import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = await createServClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/");
  }
  return <DashBoardPage />;
}
