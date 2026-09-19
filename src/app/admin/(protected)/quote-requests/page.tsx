import Link from "next/link";
import { getQuoteRequests } from "@/lib/quotes";
import { formatDate } from "@/lib/blog/format";
import { adminRoutes } from "@/lib/routes";
import { QuoteStatusControl } from "./QuoteStatusControl";
import styles from "./quotes.module.css";

export const dynamic = "force-dynamic";

const filters = [
  { key: "", label: "All" },
  { key: "new", label: "New" },
  { key: "replied", label: "Replied" },
  { key: "closed", label: "Closed" },
];

export default async function AdminQuoteRequestsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const active = status && ["new", "replied", "closed"].includes(status) ? status : undefined;
  const requests = await getQuoteRequests(active);

  return (
    <div>
      <h1 className={styles.title}>Quote requests</h1>

      <nav className={styles.filters} aria-label="Filter by status">
        {filters.map((f) => {
          const href = f.key ? `${adminRoutes.quotes}?status=${f.key}` : adminRoutes.quotes;
          const isActive = (active ?? "") === f.key;
          return (
            <Link
              key={f.key || "all"}
              href={href}
              className={styles.filter}
              aria-current={isActive ? "true" : undefined}
            >
              {f.label}
            </Link>
          );
        })}
      </nav>

      {requests.length === 0 ? (
        <p className={styles.empty}>No quote requests{active ? ` with status “${active}”` : ""}.</p>
      ) : (
        <ul className={styles.list}>
          {requests.map((r) => (
            <li key={r.id} className={styles.card}>
              <div className={styles.cardHead}>
                <div>
                  <h2 className={styles.name}>{r.name}</h2>
                  <a href={`mailto:${r.email}`} className={styles.email}>
                    {r.email}
                  </a>
                </div>
                <QuoteStatusControl id={r.id} status={r.status} />
              </div>

              <dl className={styles.details}>
                <div>
                  <dt>Language pair</dt>
                  <dd>{r.language_pair}</dd>
                </div>
                <div>
                  <dt>Specialization</dt>
                  <dd>{r.specialization ?? "—"}</dd>
                </div>
                <div>
                  <dt>Word count / runtime</dt>
                  <dd>{r.volume ?? "—"}</dd>
                </div>
                <div>
                  <dt>Deadline</dt>
                  <dd>{r.deadline ?? "—"}</dd>
                </div>
                <div>
                  <dt>NDA requested</dt>
                  <dd>{r.nda_requested ? "Yes" : "No"}</dd>
                </div>
                <div>
                  <dt>Received</dt>
                  <dd>{formatDate(r.created_at)}</dd>
                </div>
              </dl>

              {r.message && <p className={styles.message}>{r.message}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
