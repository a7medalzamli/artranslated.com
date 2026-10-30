import "server-only";
import { Resend } from "resend";
import type { QuoteRequestInput } from "@/lib/validation/quote";
import { site } from "@/lib/site";

/** Where new quote requests and messages are delivered. */
const DEFAULT_NOTIFY = site.contact.email; // ahmed@artranslated.com
/** Sender address; artranslated.com must be a verified domain in Resend. */
const DEFAULT_FROM = "Translated into Arabic <noreply@artranslated.com>";

type Lang = "en" | "ar" | "fr" | "es";

/**
 * Sends the notification to Ahmed and the confirmation to the client.
 *
 * Degrades gracefully: if Resend isn't configured, or sending fails, this logs
 * and returns without throwing. The request is already saved in the database,
 * so the visitor still sees success (email must never block the submission).
 */
export async function sendQuoteEmails(quote: QuoteRequestInput, locale: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM || DEFAULT_FROM;
  const adminTo = process.env.QUOTE_NOTIFICATION_EMAIL || DEFAULT_NOTIFY;
  const lang: Lang = (["en", "ar", "fr", "es"] as const).includes(locale as Lang) ? (locale as Lang) : "en";

  if (!apiKey) {
    console.warn("[email] RESEND_API_KEY is not set, so no emails were sent.");
    return;
  }

  const resend = new Resend(apiKey);

  try {
    const admin = await resend.emails.send({
      from,
      to: adminTo,
      replyTo: quote.email,
      subject: `New quote request from ${quote.name} (${quote.language_pair})`,
      text: adminText(quote, lang),
    });
    if (admin.error) console.error("[email] Notification failed:", admin.error);

    const c = CLIENT[lang];
    const client = await resend.emails.send({
      from,
      to: quote.email,
      replyTo: adminTo,
      subject: c.subject,
      text: c.body(quote.name),
    });
    if (client.error) console.error("[email] Confirmation failed:", client.error);
  } catch (error) {
    console.error("[email] Failed to send quote emails:", error);
  }
}

const LANG_NAMES: Record<Lang, string> = { en: "English", ar: "Arabic", fr: "French", es: "Spanish" };

function adminText(q: QuoteRequestInput, lang: Lang): string {
  return [
    "New quote request from artranslated.com",
    "",
    `Name: ${q.name}`,
    `Email: ${q.email}`,
    `Language pair: ${q.language_pair}`,
    `Specialization: ${q.specialization || "—"}`,
    `Word count / runtime: ${q.volume || "—"}`,
    `Deadline: ${q.deadline || "—"}`,
    `NDA requested: ${q.nda_requested ? "Yes" : "No"}`,
    `Sent from the ${LANG_NAMES[lang]} version of the site`,
    "",
    "Message:",
    q.message || "—",
    "",
    "Reply to this email to answer the client directly.",
  ].join("\n");
}

const SIGNATURE = ["Ahmed Alzamli", "Translated into Arabic (TIA)", "https://www.artranslated.com"].join("\n");

/** Client confirmation, in the language of the page the form was sent from. */
const CLIENT: Record<Lang, { subject: string; body: (name: string) => string }> = {
  en: {
    subject: "Your quote request was received",
    body: (name) =>
      [
        `Hi ${name},`,
        "",
        "Thank you for your request. I've received it and will reply with a clear, tailored quote shortly.",
        "",
        "If you have anything to add, simply reply to this email.",
        "",
        "Best regards,",
        SIGNATURE,
      ].join("\n"),
  },
  ar: {
    subject: "تم استلام طلب عرض السعر",
    body: (name) =>
      [
        `مرحبًا ${name}،`,
        "",
        "شكرًا لتواصلك. لقد استلمت طلبك وسأرد عليك قريبًا بعرض سعر واضح ومناسب لاحتياجاتك.",
        "",
        "إن كانت لديك أي تفاصيل إضافية، يكفي أن ترد على هذه الرسالة.",
        "",
        "مع خالص التحية،",
        SIGNATURE,
      ].join("\n"),
  },
  fr: {
    subject: "Votre demande de devis a bien été reçue",
    body: (name) =>
      [
        `Bonjour ${name},`,
        "",
        "Merci pour votre demande. Je l’ai bien reçue et je vous enverrai rapidement un devis clair et adapté.",
        "",
        "Pour toute précision, il vous suffit de répondre à cet e-mail.",
        "",
        "Bien cordialement,",
        SIGNATURE,
      ].join("\n"),
  },
  es: {
    subject: "Hemos recibido tu solicitud de presupuesto",
    body: (name) =>
      [
        `Hola, ${name}:`,
        "",
        "Gracias por tu solicitud. La he recibido y te enviaré en breve un presupuesto claro y a tu medida.",
        "",
        "Si quieres añadir algo, solo tienes que responder a este correo.",
        "",
        "Un saludo,",
        SIGNATURE,
      ].join("\n"),
  },
};
