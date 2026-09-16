import { loadEnvConfig } from "@next/env";

// Load .env.local (and .env) the same way Next.js does, so tests can read
// Supabase keys. Uses @next/env, which ships with Next (no extra dependency).
loadEnvConfig(process.cwd());
