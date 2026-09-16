import "server-only";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";
import { getSupabaseServiceRoleKey, getSupabaseUrl } from "./env";

/**
 * SERVER-ONLY admin client using the service role key. Bypasses Row Level
 * Security, so it must never be imported into client code. The `server-only`
 * import above makes any accidental client import a build error.
 *
 * Use only for trusted server operations (e.g. saving a quote request even when
 * the visitor is anonymous, or admin data management).
 */
export function createAdminClient() {
  return createClient<Database>(getSupabaseUrl(), getSupabaseServiceRoleKey(), {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
