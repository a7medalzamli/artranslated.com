import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * Load .env.local into process.env for tests.
 *
 * We parse the file manually rather than using @next/env because Next
 * deliberately skips .env.local when NODE_ENV === "test" (which Vitest sets),
 * and our Supabase keys live in .env.local.
 */
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
    // Strip surrounding quotes if present.
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    // Do not override variables already set in the real environment.
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");
