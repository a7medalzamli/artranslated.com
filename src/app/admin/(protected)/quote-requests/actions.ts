"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { adminRoutes } from "@/lib/routes";

const STATUSES = ["new", "replied", "closed"] as const;

export async function updateQuoteStatus(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");

  if (!id || !(STATUSES as readonly string[]).includes(status)) return;

  const supabase = await createClient();
  await supabase
    .from("quote_requests")
    .update({ status: status as (typeof STATUSES)[number] })
    .eq("id", id);

  revalidatePath(adminRoutes.quotes);
}
