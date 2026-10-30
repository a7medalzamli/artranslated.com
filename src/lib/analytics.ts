/**
 * Send a Google Analytics 4 event. Does nothing unless the visitor accepted
 * cookies (gtag is only loaded after consent), so it is always safe to call.
 */
export function trackEvent(name: string, params: Record<string, string> = {}): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
