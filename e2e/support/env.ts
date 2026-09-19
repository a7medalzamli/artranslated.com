import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

/** Load .env.local so e2e specs can reach Supabase for cleanup / admin creds. */
function loadEnvFile(filename: string) {
  const path = resolve(process.cwd(), filename);
  if (!existsSync(path)) return;
  for (const rawLine of readFileSync(path, "utf-8").split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

export const env = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  adminEmail: process.env.TEST_ADMIN_EMAIL,
  adminPassword: process.env.TEST_ADMIN_PASSWORD,
};
