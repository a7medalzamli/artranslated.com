import { createClient } from "@supabase/supabase-js";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Database } from "@/lib/supabase/database.types";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const hasEnv = Boolean(url && anonKey && serviceKey);

// Skip cleanly (rather than fail) when Supabase keys are not configured yet.
const suite = hasEnv ? describe : describe.skip;

suite("Row Level Security policies", () => {
  const anon = createClient<Database>(url ?? "http://localhost:54321", anonKey ?? "anon");
  const admin = createClient<Database>(url ?? "http://localhost:54321", serviceKey ?? "service", {
    auth: { persistSession: false },
  });

  const marker = `rls-test-${Date.now()}`;
  const seedEmail = `${marker}@example.com`;
  const anonEmail = `anon-insert-${marker}@example.com`;
  let publishedId = "";
  let draftId = "";

  beforeAll(async () => {
    const { data: pub, error: pubErr } = await admin
      .from("posts")
      .insert({
        title: "RLS published",
        slug: `${marker}-pub`,
        status: "published",
        published_at: new Date().toISOString(),
        content: "seed",
      })
      .select("id")
      .single();
    if (pubErr) throw pubErr;
    publishedId = pub.id;

    const { data: draft, error: draftErr } = await admin
      .from("posts")
      .insert({ title: "RLS draft", slug: `${marker}-draft`, status: "draft", content: "seed" })
      .select("id")
      .single();
    if (draftErr) throw draftErr;
    draftId = draft.id;

    const { error: qErr } = await admin
      .from("quote_requests")
      .insert({ name: "Seed", email: seedEmail, language_pair: "EN>AR" });
    if (qErr) throw qErr;
  });

  afterAll(async () => {
    await admin.from("posts").delete().in("id", [publishedId, draftId]);
    await admin.from("quote_requests").delete().in("email", [seedEmail, anonEmail]);
  });

  it("anon can read published posts", async () => {
    const { data, error } = await anon.from("posts").select("id").eq("id", publishedId);
    expect(error).toBeNull();
    expect(data).toHaveLength(1);
  });

  it("anon cannot read draft posts", async () => {
    const { data, error } = await anon.from("posts").select("id").eq("id", draftId);
    expect(error).toBeNull();
    expect(data).toHaveLength(0);
  });

  it("anon cannot insert a post", async () => {
    const { error } = await anon
      .from("posts")
      .insert({ title: "hack", slug: `${marker}-hack`, content: "x" });
    expect(error).not.toBeNull();
  });

  it("anon cannot read quote requests", async () => {
    const { data, error } = await anon.from("quote_requests").select("id");
    expect(error).toBeNull();
    expect(data).toHaveLength(0);
  });

  it("anon can create a quote request", async () => {
    const { error } = await anon
      .from("quote_requests")
      .insert({ name: "Anon", email: anonEmail, language_pair: "EN>AR" });
    expect(error).toBeNull();
  });

  it("anon cannot update or delete quote requests", async () => {
    await anon.from("quote_requests").update({ status: "closed" }).eq("email", seedEmail);
    await anon.from("quote_requests").delete().eq("email", seedEmail);

    // The seed row must still exist and be unchanged, proving both were blocked.
    const { data } = await admin
      .from("quote_requests")
      .select("status")
      .eq("email", seedEmail)
      .single();
    expect(data?.status).toBe("new");
  });
});
