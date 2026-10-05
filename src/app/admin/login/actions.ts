"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signInSchema } from "@/lib/validation/auth";

export type SignInState = { error: string | null };

export async function signIn(_prev: SignInState, formData: FormData): Promise<SignInState> {
  const parsed = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input." };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword(parsed.data);
    if (error) {
      // Deliberately generic — don't reveal whether the email exists.
      return { error: "Invalid email or password." };
    }
  } catch {
    // Network/database unreachable (e.g. a paused Supabase project).
    return { error: "Sign-in is temporarily unavailable. Please try again in a few minutes." };
  }

  // redirect() throws internally, so it must be outside the try/catch.
  redirect("/admin");
}
