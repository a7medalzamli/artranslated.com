import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";
import { updateSession } from "@/lib/supabase/middleware";

const hasEnv = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

// updateSession calls Supabase getUser(), so it needs the project env.
const suite = hasEnv ? describe : describe.skip;

suite("admin route protection (middleware)", () => {
  it("redirects an unauthenticated request from /admin to the login page", async () => {
    const request = new NextRequest(new URL("http://localhost:3000/admin"));
    const response = await updateSession(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/admin/login");
  });

  it("redirects an unauthenticated request from a nested admin route", async () => {
    const request = new NextRequest(new URL("http://localhost:3000/admin/posts"));
    const response = await updateSession(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/admin/login");
  });

  it("allows the login page itself without a session", async () => {
    const request = new NextRequest(new URL("http://localhost:3000/admin/login"));
    const response = await updateSession(request);

    // Should pass through (no redirect Location header).
    expect(response.headers.get("location")).toBeNull();
  });
});
