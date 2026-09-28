export type HomeServiceIcon = "chip" | "scale" | "finance" | "heart" | "film" | "robot" | "globe";

export type HomeService = {
  title: string;
  summary: string;
  icon: HomeServiceIcon;
};

/** Icon service grid shown on the home page. */
export const homeServices: HomeService[] = [
  {
    title: "Technical translation",
    summary:
      "Precise terminology for engineering, IT, manufacturing and user manuals — clear and consistent.",
    icon: "chip",
  },
  {
    title: "Legal",
    summary:
      "Careful handling of contracts, agreements and compliance documentation, with strict terminology control.",
    icon: "scale",
  },
  {
    title: "Financial & Banking",
    summary:
      "Reports, statements and banking communications translated with precise, consistent terminology.",
    icon: "finance",
  },
  {
    title: "Healthcare & medical",
    summary:
      "Accurate translation for medical devices, pharmaceuticals, clinical documentation and patient records.",
    icon: "heart",
  },
  {
    title: "MT post-editing",
    summary:
      "Editing machine-translated Arabic to human quality — correcting nuance, tone and terminology.",
    icon: "robot",
  },
  {
    title: "Website localization",
    summary:
      "Adapting digital content, UI/UX and e-commerce so it reads naturally for the Arabic-speaking market.",
    icon: "globe",
  },
];
