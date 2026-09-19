import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { adminRoutes } from "@/lib/routes";
import styles from "./page.module.css";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [postsResult, newQuotesResult] = await Promise.all([
    supabase.from("posts").select("*", { count: "exact", head: true }),
    supabase.from("quote_requests").select("*", { count: "exact", head: true }).eq("status", "new"),
  ]);

  const postCount = postsResult.count ?? 0;
  const newQuoteCount = newQuotesResult.count ?? 0;

  return (
    <div>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.grid}>
        <Link href={adminRoutes.posts} className={styles.stat}>
          <span className={styles.number}>{postCount}</span>
          <span className={styles.label}>Posts</span>
        </Link>
        <Link href={adminRoutes.quotes} className={styles.stat}>
          <span className={styles.number}>{newQuoteCount}</span>
          <span className={styles.label}>New quote requests</span>
        </Link>
      </div>
    </div>
  );
}
