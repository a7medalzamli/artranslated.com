"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { adminRoutes } from "@/lib/routes";

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect(adminRoutes.login);
}
