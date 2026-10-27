import type { Dictionary } from "@/i18n";
import { routes } from "@/lib/routes";

export type NavLink = { href: string; label: string; children?: NavLink[] };

/**
 * The Services menu shared by the header dropdown and the footer.
 */
export function buildServiceNav(dict: Dictionary): NavLink[] {
  const m = dict.serviceMenu;
  return [
    // Specializations are listed on the Translation page itself.
    { href: routes.translation, label: m.translation },
    { href: routes.mtpe, label: m.mtpe },
    { href: routes.transcreation, label: m.transcreation },
    { href: routes.consulting, label: m.consulting },
    { href: routes.aiDataAnnotation, label: m.aiDataAnnotation },
    { href: routes.digitalMarketing, label: m.digitalMarketing },
  ];
}
