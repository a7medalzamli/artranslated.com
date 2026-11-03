/**
 * Send a Google Analytics 4 event. Without cookie consent it is sent as an
 * anonymous, cookie-free signal (Consent Mode). Always safe to call.
 */
export function trackEvent(name: string, params: Record<string, string> = {}): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
