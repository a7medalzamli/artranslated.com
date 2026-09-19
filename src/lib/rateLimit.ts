/**
 * Minimal in-memory rate limiter (best-effort). Keyed by an arbitrary string
 * (e.g. IP). Suitable as basic spam protection alongside the honeypot; note that
 * on serverless it only limits within a single warm instance. A shared store
 * (e.g. Upstash) could replace this later without changing call sites.
 */
const hits = new Map<string, number[]>();

export function rateLimit(key: string, limit = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);

  if (recent.length >= limit) {
    hits.set(key, recent);
    return false;
  }

  recent.push(now);
  hits.set(key, recent);
  return true;
}
