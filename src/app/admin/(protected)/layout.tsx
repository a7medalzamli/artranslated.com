import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { adminRoutes } from "@/lib/routes";
import { signOut } from "./actions";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function ProtectedAdminLayout({ children }: { children: ReactNode }) {
  // Server-side gate (defense in depth alongside middleware): verify the user
  // with getUser(), which revalidates the token with Supabase.
  let user = null;
  try {
    const supabase = await createClient();
    const result = await supabase.auth.getUser();
    user = result.data.user;
  } catch {
    // Database unreachable (e.g. a paused Supabase project) — send to login
    // rather than crashing the admin area.
    redirect(adminRoutes.login);
  }

  if (!user) {
    redirect(adminRoutes.login);
  }

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>Admin</div>
        <nav className={styles.nav} aria-label="Admin">
          <Link href={adminRoutes.dashboard}>Dashboard</Link>
          <Link href={adminRoutes.content}>Home page</Link>
          <Link href={adminRoutes.settings}>Site settings</Link>
          <Link href={adminRoutes.posts}>Posts</Link>
          <Link href={adminRoutes.quotes}>Quote requests</Link>
          <Link href="/" className={styles.viewSite}>
            View site &rarr;
          </Link>
        </nav>
        <div className={styles.account}>
          <p className={styles.email}>{user.email}</p>
          <form action={signOut}>
            <button type="submit" className={styles.signOut}>
              Sign out
            </button>
          </form>
        </div>
      </aside>
      <main className={styles.content}>{children}</main>
    </div>
  );
}
