import "server-only";
import { Resend } from "resend";
import type { QuoteRequestInput } from "@/lib/validation/quote";

/**
 * Sends the admin notification and the client confirmation for a quote request.
 *
 * Degrades gracefully: if Resend isn't configured, or sending fails, this logs
 * and returns without throwing — the caller must still treat the request as
 * saved and show success (email must never block the submission).
 */
export async function sendQuoteEmails(quote: QuoteRequestInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const adminTo = process.env.QUOTE_NOTIFICATION_EMAIL;

  if (!apiKey || !from) {
    console.warn("[email] Resend not configured (RESEND_API_KEY/EMAIL_FROM) — skipping emails.");
    return;
  }

  const resend = new Resend(apiKey);

  try {
    if (adminTo) {
      await resend.emails.send({
        from,
        to: adminTo,
        replyTo: quote.email,
        subject: `New quote request from ${quote.name}`,
        text: adminText(quote),
      });
    }

    await resend.emails.send({
      from,
      to: quote.email,
      subject: "Thanks — your quote request was received",
      text: clientText(quote),
    });
  } catch (error) {
    console.error("[email] Failed to send quote emails:", error);
  }
}

function adminText(q: QuoteRequestInput): string {
  return [
    "New quote request:",
    "",
    `Name: ${q.name}`,
    `Email: ${q.email}`,
    `Language pair: ${q.language_pair}`,
    `Specialization: ${q.specialization || "—"}`,
    `Word count / runtime: ${q.volume || "—"}`,
    `Deadline: ${q.deadline || "—"}`,
    `NDA requested: ${q.nda_requested ? "Yes" : "No"}`,
    "",
    "Message:",
    q.message || "—",
  ].join("\n");
}

function clientText(q: QuoteRequestInput): string {
  return [
    `Hi ${q.name},`,
    "",
    "Thank you for your quote request — I've received it and will get back to you shortly.",
    "",
    "As a reminder, please do not send confidential files until we've agreed terms" +
      (q.nda_requested ? " and an NDA is in place." : "."),
    "",
    "Best regards,",
    "[Your Name]",
  ].join("\n");
}
