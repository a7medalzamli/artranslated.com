import type { Dictionary } from "@/i18n";
import { routes } from "@/lib/routes";

export type NavLink = { href: string; label: string; children?: NavLink[] };

/**
 * The Services menu shared by the header dropdown and the footer. Translation
 * carries its specializations as a nested list.
 */
export function buildServiceNav(dict: Dictionary): NavLink[] {
  const m = dict.serviceMenu;
  const spec = dict.footer.serviceLinks;
  return [
    {
      href: routes.translation,
      label: m.translation,
      children: [
        { href: routes.technical, label: spec.technical },
        { href: routes.legal, label: spec.legal },
        { href: routes.financial, label: spec.financial },
        { href: routes.healthcare, label: spec.healthcare },
        { href: routes.audiovisual, label: spec.audiovisual },
      ],
    },
    { href: routes.mtpe, label: m.mtpe },
    { href: routes.transcreation, label: m.transcreation },
    { href: routes.consulting, label: m.consulting },
    { href: routes.aiDataAnnotation, label: m.aiDataAnnotation },
    { href: routes.digitalMarketing, label: m.digitalMarketing },
  ];
}
