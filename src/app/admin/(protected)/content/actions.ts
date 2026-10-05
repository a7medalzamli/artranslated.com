"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { homeContentSchema, type HomeContent } from "@/lib/content/home";

export type SaveState = { ok: boolean; error: string | null };

export async function saveHomeContent(content: HomeContent): Promise<SaveState> {
  const parsed = homeContentSchema.safeParse(content);
  if (!parsed.success) {
    return { ok: false, error: "Some fields are invalid — please check and try again." };
  }

  const supabase = await createClient();
  const { error } = await supabase
    .from("site_content")
    .upsert(
      { key: "home", data: parsed.data as unknown as Record<string, unknown> },
      { onConflict: "key" },
    );

  if (error) {
    return {
      ok: false,
      error: "Could not save. Make sure the site_content migration has been applied in Supabase.",
    };
  }

  revalidatePath("/");
  return { ok: true, error: null };
}
