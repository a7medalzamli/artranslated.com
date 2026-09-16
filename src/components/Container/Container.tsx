import type { ElementType, ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  children: ReactNode;
  /** Element to render as (e.g. "section", "header", "main"). Defaults to div. */
  as?: ElementType;
  /** "narrow" constrains width for long-form prose. */
  size?: "default" | "narrow";
  className?: string;
};

export function Container({
  children,
  as: Tag = "div",
  size = "default",
  className,
}: ContainerProps) {
  const cls = [styles.container, size === "narrow" && styles.narrow, className]
    .filter(Boolean)
    .join(" ");
  return <Tag className={cls}>{children}</Tag>;
}
