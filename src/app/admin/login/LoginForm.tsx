"use client";

import { useActionState } from "react";
import { signIn, type SignInState } from "./actions";
import styles from "./login.module.css";

const initialState: SignInState = { error: null };

export function LoginForm() {
  const [state, formAction, pending] = useActionState(signIn, initialState);

  return (
    <form action={formAction} className={styles.form} noValidate>
      <label className={styles.field}>
        <span>Email</span>
        <input name="email" type="email" required autoComplete="username" />
      </label>

      <label className={styles.field}>
        <span>Password</span>
        <input name="password" type="password" required autoComplete="current-password" />
      </label>

      {state.error && (
        <p role="alert" className={styles.error}>
          {state.error}
        </p>
      )}

      <button type="submit" className={styles.submit} disabled={pending}>
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
