import { createClient } from "@/lib/supabase/server";
import { defaultHomeContent, homeContentSchema, type HomeContent } from "./home";

/**
 * Reads editable home content from the database, falling back to the built-in
 * defaults if the table/row is missing or the stored data is invalid — so the
 * site always renders, even before the migration is applied.
 */
export async function getHomeContent(): Promise<HomeContent> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("site_content")
      .select("data")
      .eq("key", "home")
      .maybeSingle();

    if (error || !data) return defaultHomeContent;

    const parsed = homeContentSchema.safeParse(data.data);
    return parsed.success ? parsed.data : defaultHomeContent;
  } catch {
    return defaultHomeContent;
  }
}
