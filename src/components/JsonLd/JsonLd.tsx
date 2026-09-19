/**
 * Renders a JSON-LD structured-data script. Data is our own (not user input),
 * so serializing it into a script tag is safe.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
