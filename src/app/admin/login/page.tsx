import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";
import styles from "./login.module.css";

export const metadata: Metadata = {
  title: "Admin sign in",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <main className={styles.wrap}>
      <div className={styles.card}>
        <h1 className={styles.title}>Admin sign in</h1>
        <p className={styles.subtitle}>Sign in to manage posts and quote requests.</p>
        <LoginForm />
      </div>
    </main>
  );
}
