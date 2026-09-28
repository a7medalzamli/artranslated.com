import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost" | "accent";
type Size = "md" | "lg";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** If provided, renders a Next.js Link styled as a button. */
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  type = "button",
  onClick,
  disabled,
  target,
  rel,
  ...aria
}: ButtonProps) {
  const cls = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(" ");

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick} target={target} rel={rel} {...aria}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} type={type} onClick={onClick} disabled={disabled} {...aria}>
      {children}
    </button>
  );
}
