"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { rateLimit } from "@/lib/rateLimit";
import { sendContactEmails } from "@/lib/email/quote";
import { isLocale, defaultLocale } from "@/i18n/config";

/** Result of the small footer contact form. `error` is a code the form turns into text. */
export type FooterMessageState = { ok: boolean; error: null | "invalid" | "rate" | "server" };

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email(),
  message: z.string().trim().min(1).max(4000),
});

export async function sendFooterMessage(
  _prev: FooterMessageState,
  formData: FormData,
): Promise<FooterMessageState> {
  // Honeypot: bots fill the hidden "company" field. Pretend success.
  if (String(formData.get("company") ?? "") !== "") return { ok: true, error: null };

  const headerList = await headers();
  const ip = (headerList.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (!rateLimit(`footer:${ip}`)) return { ok: false, error: "rate" };

  const parsed = schema.safeParse({
    name: formData.get("name") ?? "",
    email: formData.get("email") ?? "",
    message: formData.get("message") ?? "",
  });
  if (!parsed.success) return { ok: false, error: "invalid" };

  const localeRaw = String(formData.get("locale") ?? "");
  const locale = isLocale(localeRaw) ? localeRaw : defaultLocale;
  const { name, email, message } = parsed.data;

  // Saved with the quote requests so it also shows in the admin dashboard.
  const supabase = await createClient();
  const { error } = await supabase.from("quote_requests").insert({
    name,
    email,
    language_pair: "",
    message: `[Footer message]\n\n${message}`,
    nda_requested: false,
  });
  if (error) return { ok: false, error: "server" };

  await sendContactEmails({ name, email, message }, locale);
  return { ok: true, error: null };
}
