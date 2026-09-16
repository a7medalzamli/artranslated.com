import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "./database.types";
import { getSupabaseAnonKey, getSupabaseUrl } from "./env";

/**
 * Supabase client for Server Components, Server Actions and Route Handlers.
 * Reads/writes the auth session via cookies and is constrained by Row Level
 * Security (uses the anon key, plus whatever session cookie is present).
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient<Database>(getSupabaseUrl(), getSupabaseAnonKey(), {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // The `setAll` method was called from a Server Component. This can be
          // ignored when middleware refreshes the session (added in Milestone 5).
        }
      },
    },
  });
}
