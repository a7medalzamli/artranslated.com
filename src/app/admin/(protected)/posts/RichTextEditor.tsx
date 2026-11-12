"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Markdown } from "@/components/Markdown/Markdown";
import prose from "@/components/Markdown/Markdown.module.css";
import { cleanHtml, htmlToMarkdown, textToHtml } from "./richText";
import styles from "./richText.module.css";

type Props = {
  /** Article text as Markdown (what gets saved). */
  value: string;
  onChange: (markdown: string) => void;
  dir: "ltr" | "rtl";
  /** Uploads an image and returns its address, or null on failure. */
  uploadImage: (file: File) => Promise<string | null>;
  labelledBy: string;
};

type Active = {
  bold: boolean;
  italic: boolean;
  strike: boolean;
  ul: boolean;
  ol: boolean;
  block: string;
  inTable: boolean;
};

const IDLE: Active = { bold: false, italic: false, strike: false, ul: false, ol: false, block: "p", inTable: false };

function exec(command: string, value?: string) {
  document.execCommand(command, false, value);
}

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const icons = {
  ul: (
    <Icon>
      <path d="M9 6h11M9 12h11M9 18h11" />
      <circle cx="4.5" cy="6" r="1" fill="currentColor" />
      <circle cx="4.5" cy="12" r="1" fill="currentColor" />
      <circle cx="4.5" cy="18" r="1" fill="currentColor" />
    </Icon>
  ),
  ol: (
    <Icon>
      <path d="M10 6h10M10 12h10M10 18h10" />
      <path d="M4 4.5h1.5V9M3.5 9h3.5" strokeWidth="1.5" />
      <path d="M3.5 14.6c.4-.9 3-1.1 3 .5 0 1.3-3 2-3 3.4h3.2" strokeWidth="1.5" />
    </Icon>
  ),
  quote: (
    <Icon>
      <path d="M6 7h4v4c0 3-1.5 5-4 6M14 7h4v4c0 3-1.5 5-4 6" />
    </Icon>
  ),
  link: (
    <Icon>
      <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" />
    </Icon>
  ),
  unlink: (
    <Icon>
      <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" />
      <path d="M3 3l18 18" />
    </Icon>
  ),
  image: (
    <Icon>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="10" r="1.5" />
      <path d="M21 16l-5-5-8 8" />
    </Icon>
  ),
  table: (
    <Icon>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 10h18M3 15h18M9 4v16M15 4v16" />
    </Icon>
  ),
  hr: (
    <Icon>
      <path d="M3 12h18" />
      <path d="M7 6h10M7 18h10" opacity=".35" />
    </Icon>
  ),
  undo: (
    <Icon>
      <path d="M9 14L4 9l5-5" />
      <path d="M4 9h11a5 5 0 0 1 0 10h-3" />
    </Icon>
  ),
  redo: (
    <Icon>
      <path d="M15 14l5-5-5-5" />
      <path d="M20 9H9a5 5 0 0 0 0 10h3" />
    </Icon>
  ),
  clear: (
    <Icon>
      <path d="M6 5h12M12 5l-3 14" />
      <path d="M15 15l5 5M20 15l-5 5" />
    </Icon>
  ),
  indent: (
    <Icon>
      <path d="M11 6h9M11 12h9M11 18h9M3 9l3 3-3 3" />
    </Icon>
  ),
  outdent: (
    <Icon>
      <path d="M11 6h9M11 12h9M11 18h9M7 9l-3 3 3 3" />
    </Icon>
  ),
};

/** Toolbar button that keeps the text selection when clicked. */
function Btn({
  label,
  onClick,
  pressed,
  children,
  disabled,
}: {
  label: string;
  onClick: () => void;
  pressed?: boolean;
  children: ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      className={styles.btn}
      title={label}
      aria-label={label}
      aria-pressed={pressed}
      disabled={disabled}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function countWords(markdown: string): number {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\]\([^)]*\)/g, " ")
    .replace(/[#*_>|`~[\]\\-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

/**
 * A Word-style editor: toolbar buttons for headings, bold, lists, links,
 * images and tables. What you see is what the article will look like.
 * The text is saved as Markdown, so the public site renders it safely.
 */
export function RichTextEditor({ value, onChange, dir, uploadImage, labelledBy }: Props) {
  const editorRef = useRef<HTMLDivElement>(null);
  const seedRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const savedRange = useRef<Range | null>(null);
  // The Markdown to load into the editor once (rendered hidden, then copied in).
  const [seed, setSeed] = useState<string | null>(value);
  const [active, setActive] = useState<Active>(IDLE);
  const [uploading, setUploading] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [words, setWords] = useState(() => countWords(value));

  useEffect(() => {
    if (seed === null || !seedRef.current || !editorRef.current) return;
    exec("defaultParagraphSeparator", "p");
    // Skip the article wrapper <div> that the Markdown renderer adds.
    const rendered = seedRef.current.firstElementChild?.innerHTML ?? "";
    editorRef.current.innerHTML = cleanHtml(rendered) || "<p><br></p>";
    setSeed(null);
  }, [seed]);

  function selectionInEditor(): Range | null {
    const sel = window.getSelection();
    const editor = editorRef.current;
    if (!sel || sel.rangeCount === 0 || !editor) return null;
    const range = sel.getRangeAt(0);
    return editor.contains(range.commonAncestorContainer) ? range : null;
  }

  function currentElement(): HTMLElement | null {
    const range = selectionInEditor();
    if (!range) return null;
    const node = range.startContainer;
    return node.nodeType === 1 ? (node as HTMLElement) : node.parentElement;
  }

  function refresh() {
    if (!selectionInEditor()) return;
    const block = (document.queryCommandValue("formatBlock") || "p").toLowerCase();
    const next: Active = {
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      strike: document.queryCommandState("strikeThrough"),
      ul: document.queryCommandState("insertUnorderedList"),
      ol: document.queryCommandState("insertOrderedList"),
      block: ["h2", "h3", "blockquote"].includes(block) ? block : "p",
      inTable: Boolean(currentElement()?.closest("table")),
    };
    // Only re-draw the toolbar when something changed.
    setActive((prev) =>
      (Object.keys(next) as (keyof Active)[]).every((k) => prev[k] === next[k]) ? prev : next,
    );
  }

  useEffect(() => {
    document.addEventListener("selectionchange", refresh);
    return () => document.removeEventListener("selectionchange", refresh);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function sync() {
    const editor = editorRef.current;
    if (!editor) return;
    if (editor.innerHTML === "" || editor.innerHTML === "<br>") editor.innerHTML = "<p><br></p>";
    const md = htmlToMarkdown(editor);
    setWords(countWords(md));
    onChange(md);
  }

  /** Runs a toolbar action on the editor, then saves and refreshes the buttons. */
  function run(action: () => void) {
    editorRef.current?.focus();
    action();
    sync();
    refresh();
  }

  function setBlock(tag: string) {
    run(() => exec("formatBlock", `<${tag}>`));
  }

  function insertLink() {
    const url = window.prompt("Link address, for example https://… or /en/contact", "https://");
    if (!url || url === "https://") return;
    const href = url.trim();
    if (!/^(https?:|mailto:|\/|#)/i.test(href)) {
      setNotice("Links must start with https://, mailto: or /");
      return;
    }
    setNotice(null);
    run(() => {
      const range = selectionInEditor();
      if (range && range.collapsed) {
        const a = document.createElement("a");
        a.href = href;
        a.textContent = href;
        exec("insertHTML", a.outerHTML);
      } else {
        exec("createLink", href);
      }
    });
  }

  function insertTable() {
    const table = document.createElement("table");
    const thead = table.createTHead().insertRow();
    ["Column 1", "Column 2", "Column 3"].forEach((t) => {
      const th = document.createElement("th");
      th.textContent = t;
      thead.appendChild(th);
    });
    const body = table.createTBody();
    for (let r = 0; r < 2; r++) {
      const row = body.insertRow();
      for (let c = 0; c < 3; c++) row.insertCell().innerHTML = "<br>";
    }
    run(() => exec("insertHTML", table.outerHTML + "<p><br></p>"));
  }

  function tableAction(kind: "row" | "column" | "delete") {
    const cell = currentElement()?.closest("td, th");
    const table = cell?.closest("table");
    if (!cell || !table) return;
    const row = cell.parentElement as HTMLTableRowElement;
    if (kind === "delete") {
      table.remove();
    } else if (kind === "row") {
      const fresh = document.createElement("tr");
      Array.from(row.children).forEach(() => {
        const td = document.createElement("td");
        td.innerHTML = "<br>";
        fresh.appendChild(td);
      });
      // A new row under the header goes into the body.
      if (row.parentElement?.tagName === "THEAD") {
        const tbody = table.tBodies[0] ?? table.createTBody();
        tbody.insertBefore(fresh, tbody.firstChild);
      } else {
        row.after(fresh);
      }
    } else {
      const index = Array.from(row.children).indexOf(cell);
      table.querySelectorAll("tr").forEach((tr) => {
        const isHead = tr.parentElement?.tagName === "THEAD";
        const added = document.createElement(isHead ? "th" : "td");
        added.innerHTML = "<br>";
        const ref = tr.children[index];
        if (ref) ref.after(added);
        else tr.appendChild(added);
      });
    }
    sync();
    refresh();
  }

  async function onImageChosen(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    setUploading(true);
    setNotice(null);
    const url = await uploadImage(file);
    setUploading(false);
    if (!url) {
      setNotice("The image could not be uploaded. Use PNG, JPEG, WebP or GIF, up to 5 MB.");
      return;
    }
    const alt = window.prompt("Short description of the image (helps Google and screen readers)", "") ?? "";
    const editor = editorRef.current;
    if (!editor) return;
    editor.focus();
    const sel = window.getSelection();
    if (sel && savedRange.current) {
      sel.removeAllRanges();
      sel.addRange(savedRange.current);
    }
    const img = document.createElement("img");
    img.src = url;
    img.alt = alt;
    run(() => exec("insertHTML", img.outerHTML));
  }

  function onPaste(event: React.ClipboardEvent<HTMLDivElement>) {
    event.preventDefault();
    const html = event.clipboardData.getData("text/html");
    const text = event.clipboardData.getData("text/plain");
    if (!html && !/\r?\n/.test(text.trim())) {
      exec("insertText", text);
    } else {
      exec("insertHTML", html ? cleanHtml(html) : textToHtml(text));
    }
    sync();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const mod = event.ctrlKey || event.metaKey;
    const key = event.key.toLowerCase();
    // Underline can't be shown on the website (it looks like a link), so it is turned off.
    if (mod && key === "u") {
      event.preventDefault();
      return;
    }
    if (mod && key === "k") {
      event.preventDefault();
      insertLink();
      return;
    }
    if (event.key === "Tab" && currentElement()?.closest("li")) {
      event.preventDefault();
      run(() => exec(event.shiftKey ? "outdent" : "indent"));
    }
  }

  function rememberSelection() {
    const range = selectionInEditor();
    savedRange.current = range ? range.cloneRange() : null;
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.toolbar} role="toolbar" aria-label="Formatting" dir="ltr">
        <div className={styles.group}>
          <Btn label="Undo (Ctrl+Z)" onClick={() => run(() => exec("undo"))}>
            {icons.undo}
          </Btn>
          <Btn label="Redo (Ctrl+Y)" onClick={() => run(() => exec("redo"))}>
            {icons.redo}
          </Btn>
        </div>

        <div className={styles.group}>
          <select
            className={styles.select}
            aria-label="Text style"
            value={active.block}
            onChange={(e) => setBlock(e.target.value)}
          >
            <option value="p">Normal text</option>
            <option value="h2">Heading</option>
            <option value="h3">Subheading</option>
            <option value="blockquote">Quote</option>
          </select>
        </div>

        <div className={styles.group}>
          <Btn label="Bold (Ctrl+B)" pressed={active.bold} onClick={() => run(() => exec("bold"))}>
            <strong className={styles.glyph}>B</strong>
          </Btn>
          <Btn label="Italic (Ctrl+I)" pressed={active.italic} onClick={() => run(() => exec("italic"))}>
            <em className={styles.glyph}>I</em>
          </Btn>
          <Btn label="Strikethrough" pressed={active.strike} onClick={() => run(() => exec("strikeThrough"))}>
            <s className={styles.glyph}>S</s>
          </Btn>
        </div>

        <div className={styles.group}>
          <Btn label="Bulleted list" pressed={active.ul} onClick={() => run(() => exec("insertUnorderedList"))}>
            {icons.ul}
          </Btn>
          <Btn label="Numbered list" pressed={active.ol} onClick={() => run(() => exec("insertOrderedList"))}>
            {icons.ol}
          </Btn>
          <Btn label="Decrease indent (Shift+Tab)" onClick={() => run(() => exec("outdent"))}>
            {icons.outdent}
          </Btn>
          <Btn label="Increase indent (Tab)" onClick={() => run(() => exec("indent"))}>
            {icons.indent}
          </Btn>
          <Btn
            label="Quote"
            pressed={active.block === "blockquote"}
            onClick={() => setBlock(active.block === "blockquote" ? "p" : "blockquote")}
          >
            {icons.quote}
          </Btn>
        </div>

        <div className={styles.group}>
          <Btn label="Insert link (Ctrl+K)" onClick={insertLink}>
            {icons.link}
          </Btn>
          <Btn label="Remove link" onClick={() => run(() => exec("unlink"))}>
            {icons.unlink}
          </Btn>
          <Btn
            label={uploading ? "Uploading image…" : "Insert image"}
            disabled={uploading}
            onClick={() => {
              rememberSelection();
              fileRef.current?.click();
            }}
          >
            {icons.image}
          </Btn>
          <Btn label="Insert table" onClick={insertTable}>
            {icons.table}
          </Btn>
          <Btn label="Divider line" onClick={() => run(() => exec("insertHorizontalRule"))}>
            {icons.hr}
          </Btn>
        </div>

        <div className={styles.group}>
          <Btn
            label="Clear formatting"
            onClick={() =>
              run(() => {
                exec("removeFormat");
                exec("formatBlock", "<p>");
              })
            }
          >
            {icons.clear}
          </Btn>
        </div>

        {active.inTable && (
          <div className={styles.group}>
            <button type="button" className={styles.textBtn} onMouseDown={(e) => e.preventDefault()} onClick={() => tableAction("row")}>
              + Row
            </button>
            <button type="button" className={styles.textBtn} onMouseDown={(e) => e.preventDefault()} onClick={() => tableAction("column")}>
              + Column
            </button>
            <button type="button" className={styles.textBtn} onMouseDown={(e) => e.preventDefault()} onClick={() => tableAction("delete")}>
              Delete table
            </button>
          </div>
        )}

        <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/webp,image/gif" hidden onChange={onImageChosen} />
      </div>

      <div
        ref={editorRef}
        className={`${prose.prose} ${styles.editable}`}
        contentEditable
        suppressContentEditableWarning
        role="textbox"
        aria-multiline="true"
        aria-labelledby={labelledBy}
        dir={dir}
        spellCheck
        onInput={sync}
        onPaste={onPaste}
        onKeyDown={onKeyDown}
        onDrop={(e) => {
          if (e.dataTransfer.files.length) e.preventDefault();
        }}
        onBlur={rememberSelection}
      />

      <div className={styles.status}>
        <span>
          {words.toLocaleString("en")} {words === 1 ? "word" : "words"}
        </span>
        <span>Font, size and alignment follow the website design automatically.</span>
      </div>
      {notice && (
        <p role="alert" className={styles.notice}>
          {notice}
        </p>
      )}

      {/* Turns the saved Markdown into HTML once, to load it into the editor. */}
      {seed !== null && (
        <div ref={seedRef} hidden>
          <Markdown>{seed}</Markdown>
        </div>
      )}
    </div>
  );
}
