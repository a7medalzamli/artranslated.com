import type { Dictionary } from "@/i18n";
import { routes } from "@/lib/routes";

export type NavLink = { href: string; label: string; children?: NavLink[] };

/**
 * The Services menu shared by the header dropdown and the footer. Each item
 * jumps to that service's section on the Services page; the section's
 * "Learn more" link leads on to the service's own page.
 */
export function buildServiceNav(dict: Dictionary): NavLink[] {
  const m = dict.serviceMenu;
  const section = (slug: string) => `${routes.services}#${slug}`;
  return [
    { href: section("translation"), label: m.translation },
    { href: section("mtpe"), label: m.mtpe },
    { href: section("transcreation"), label: m.transcreation },
    { href: section("consulting"), label: m.consulting },
    { href: section("digital-marketing"), label: m.digitalMarketing },
  ];
}
