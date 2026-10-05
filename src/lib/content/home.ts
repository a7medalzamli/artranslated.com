import { z } from "zod";
import { homeServices } from "@/content/homeServices";
import { site } from "@/lib/site";

export const serviceIconEnum = z.enum([
  "chip",
  "scale",
  "finance",
  "heart",
  "film",
  "robot",
  "globe",
]);

export const homeContentSchema = z.object({
  hero: z.object({
    label: z.string(),
    title: z.string(),
    lead: z.string(),
  }),
  about: z.object({
    title: z.string(),
    text: z.string(),
    image: z.string(),
  }),
  services: z.object({
    eyebrow: z.string(),
    title: z.string(),
    items: z.array(
      z.object({
        title: z.string(),
        summary: z.string(),
        icon: serviceIconEnum,
      }),
    ),
  }),
  why: z.object({
    eyebrow: z.string(),
    title: z.string(),
    intro: z.string(),
    items: z.array(z.object({ title: z.string(), text: z.string() })),
  }),
  contact: z.object({
    eyebrow: z.string(),
    title: z.string(),
    intro: z.string(),
  }),
  partners: z.array(z.object({ src: z.string(), label: z.string() })),
});

export type HomeContent = z.infer<typeof homeContentSchema>;

/** Current site text — used until the admin saves edits, and as a safety net. */
export const defaultHomeContent: HomeContent = {
  hero: {
    label: "English · French · Spanish → Arabic",
    title: "Precise Arabic translation agencies and companies can rely on",
    lead: "Technical, legal, financial, healthcare and audiovisual specializations — delivered with a full Translation–Editing–Proofreading workflow and SDL Trados terminology control.",
  },
  about: {
    title: "About me",
    text: `${site.role}.`,
    image: "/portrait.jpg",
  },
  services: {
    eyebrow: "Our expertise",
    title: "Specialized translation services",
    items: homeServices.map((s) => ({ title: s.title, summary: s.summary, icon: s.icon })),
  },
  why: {
    eyebrow: "The advantage",
    title: "Why partner with me?",
    intro:
      "Reaching the Arabic market takes cultural intelligence, technical precision and reliability — not just language.",
    items: [
      {
        title: "Meticulous quality assurance",
        text: "A full Translation–Editing–Proofreading review keeps quality and tone consistent.",
      },
      {
        title: "Industry-standard tools",
        text: "SDL Trados translation memories and termbases ensure consistency and efficiency.",
      },
      {
        title: "Cultural & terminology accuracy",
        text: "Content is adapted so it reads naturally and correctly for the target audience.",
      },
      {
        title: "On-time delivery",
        text: "Projects are scoped realistically and delivered by the agreed deadline.",
      },
      {
        title: "Clear communication",
        text: "Questions are raised early and progress is easy to follow from start to finish.",
      },
      {
        title: "Confidentiality by default",
        text: "Files are handled securely, with an NDA available before anything is shared.",
      },
    ],
  },
  contact: {
    eyebrow: "Ready to start?",
    title: "Get a free quote",
    intro: "Tell me about your project and I'll reply with a clear quote.",
  },
  partners: site.badges.map((b) => ({ src: b.src, label: b.label })),
};
