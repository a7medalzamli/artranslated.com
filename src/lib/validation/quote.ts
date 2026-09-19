import { z } from "zod";

/** Server-side validation for the public quote-request form. */
export const quoteRequestSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(120, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address."),
  language_pair: z.string().trim().min(1, "Please choose a language pair."),
  specialization: z.string().trim().max(120).optional().default(""),
  volume: z.string().trim().max(120, "This field is too long.").optional().default(""),
  deadline: z.string().trim().max(120, "This field is too long.").optional().default(""),
  message: z.string().trim().max(4000, "Message is too long.").optional().default(""),
  nda_requested: z.boolean().default(false),
});

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;
