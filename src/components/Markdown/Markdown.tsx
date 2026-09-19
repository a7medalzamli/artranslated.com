import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import styles from "./Markdown.module.css";

/**
 * Renders Markdown as sanitized HTML. react-markdown never injects raw HTML by
 * default, and rehype-sanitize strips anything unsafe — so post content (and the
 * live editor preview) cannot execute injected scripts.
 */
export function Markdown({ children }: { children: string }) {
  return (
    <div className={styles.prose}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
