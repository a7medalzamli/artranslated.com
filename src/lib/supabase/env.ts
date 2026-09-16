/**
 * Reads Supabase environment variables. Functions throw only when called with a
 * missing value, so a missing key never breaks the build — it fails loudly at
 * the point of use instead.
 */

export function getSupabaseUrl(): string {
  const value = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!value) throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
  return value;
}

export function getSupabaseAnonKey(): string {
  const value = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!value) throw new Error("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY");
  return value;
}

/** SERVER-ONLY. Never import into code that reaches the browser. */
export function getSupabaseServiceRoleKey(): string {
  const value = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!value) throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");
  return value;
}
