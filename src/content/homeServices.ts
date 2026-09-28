export type HomeServiceIcon = "chip" | "scale" | "heart" | "film" | "robot" | "globe";

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
    title: "Legal & financial",
    summary:
      "Careful handling of contracts, reports and compliance material, with strict terminology control.",
    icon: "scale",
  },
  {
    title: "Healthcare & medical",
    summary:
      "Accurate translation for medical devices, pharmaceuticals, clinical documentation and patient records.",
    icon: "heart",
  },
  {
    title: "Audiovisual & dubbing",
    summary:
      "Culturally adapted subtitling and dubbing with lip-sync alignment for film, media and corporate video.",
    icon: "film",
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
