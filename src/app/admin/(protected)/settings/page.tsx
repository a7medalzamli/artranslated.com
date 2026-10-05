import { getSiteSettings } from "@/lib/content/getSiteSettings";
import { SettingsEditor } from "./SettingsEditor";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  const settings = await getSiteSettings();
  return <SettingsEditor initial={settings} />;
}
