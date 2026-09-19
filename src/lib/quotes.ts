import "server-only";
import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/database.types";

export type QuoteRequest = Database["public"]["Tables"]["quote_requests"]["Row"];
type QuoteStatus = QuoteRequest["status"];

/** All quote requests, newest first. Optionally filtered by status. Admin only. */
export async function getQuoteRequests(status?: string): Promise<QuoteRequest[]> {
  const supabase = await createClient();
  let query = supabase.from("quote_requests").select("*").order("created_at", { ascending: false });

  if (status) {
    query = query.eq("status", status as QuoteStatus);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}
