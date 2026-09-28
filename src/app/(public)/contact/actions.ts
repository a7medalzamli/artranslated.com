"use server";

import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { quoteRequestSchema } from "@/lib/validation/quote";
import { rateLimit } from "@/lib/rateLimit";
import { sendQuoteEmails } from "@/lib/email/quote";
import { homeServices } from "@/content/homeServices";

export type QuoteState = {
  ok: boolean;
  error: string | null;
  fieldErrors?: Record<string, string>;
};

const nullIfEmpty = (v: string) => (v === "" ? null : v);

export async function submitQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  // 1. Honeypot: bots fill the hidden "company" field. Pretend success.
  if (String(formData.get("company") ?? "") !== "") {
    return { ok: true, error: null };
  }

  // 2. Basic rate limiting by IP.
  const headerList = await headers();
  const ip = (headerList.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (!rateLimit(`quote:${ip}`)) {
    return { ok: false, error: "Too many requests. Please wait a minute and try again." };
  }

  // 3. Validate on the server.
  const parsed = quoteRequestSchema.safeParse({
    name: formData.get("name") ?? "",
    email: formData.get("email") ?? "",
    language_pair: formData.get("language_pair") ?? "",
    specialization: formData.get("specialization") ?? "",
    volume: formData.get("volume") ?? "",
    deadline: formData.get("deadline") ?? "",
    message: formData.get("message") ?? "",
    nda_requested: formData.get("nda_requested") === "on",
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "");
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { ok: false, error: "Please fix the highlighted fields.", fieldErrors };
  }

  const input = parsed.data;

  // "Service needed" is captured in the message (whitelisted against real
  // services), so no schema change is needed.
  const serviceRaw = String(formData.get("service") ?? "");
  const service = homeServices.some((s) => s.title === serviceRaw) ? serviceRaw : "";
  const composedMessage = [service ? `Service needed: ${service}` : "", input.message ?? ""]
    .filter(Boolean)
    .join("\n\n");
  const finalInput = { ...input, message: composedMessage };

  // 4. Save the request (RLS allows anonymous inserts on quote_requests).
  const supabase = await createClient();
  const { error } = await supabase.from("quote_requests").insert({
    name: finalInput.name,
    email: finalInput.email,
    language_pair: finalInput.language_pair,
    specialization: nullIfEmpty(finalInput.specialization),
    volume: nullIfEmpty(finalInput.volume),
    deadline: nullIfEmpty(finalInput.deadline),
    message: nullIfEmpty(finalInput.message),
    nda_requested: finalInput.nda_requested,
  });

  if (error) {
    return { ok: false, error: "Something went wrong saving your request. Please try again." };
  }

  // 5. Email is best-effort and must never block success (saved already).
  await sendQuoteEmails(finalInput);

  return { ok: true, error: null };
}
