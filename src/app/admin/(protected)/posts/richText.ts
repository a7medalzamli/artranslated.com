/**
 * Helpers for the visual (Word-style) article editor.
 *
 * Articles are stored as Markdown, so the public site keeps rendering them the
 * same safe way. The editor shows formatted HTML; these helpers turn that HTML
 * back into Markdown, and clean HTML pasted from Word, Google Docs or web pages
 * so only the formatting the site supports survives.
 */

const BLOCK_TAGS = new Set([
  "P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "UL", "OL", "LI", "BLOCKQUOTE",
  "TABLE", "HR", "PRE", "SECTION", "ARTICLE", "HEADER", "FOOTER", "FIGURE", "MAIN",
]);

const DROP_TAGS = new Set(["SCRIPT", "STYLE", "META", "LINK", "TITLE", "HEAD", "NOSCRIPT", "IFRAME", "OBJECT", "SVG", "XML"]);

type Marks = { bold: boolean; italic: boolean; strike: boolean };

const NO_MARKS: Marks = { bold: false, italic: false, strike: false };

function isElement(node: Node): node is HTMLElement {
  return node.nodeType === 1;
}

function isBlock(node: Node): boolean {
  return isElement(node) && BLOCK_TAGS.has(node.tagName);
}

/** Bold / italic / strikethrough set by inline styles (Word and Google Docs use these). */
function styleMarks(el: HTMLElement): Partial<Marks> & { notBold?: boolean } {
  const s = el.style;
  const weight = s.fontWeight;
  const out: Partial<Marks> & { notBold?: boolean } = {};
  if (weight === "bold" || weight === "bolder" || Number(weight) >= 600) out.bold = true;
  if (weight === "normal" || (weight !== "" && Number(weight) > 0 && Number(weight) < 600)) out.notBold = true;
  if (s.fontStyle === "italic") out.italic = true;
  if (s.textDecoration.includes("line-through") || s.textDecorationLine.includes("line-through")) out.strike = true;
  return out;
}

function safeUrl(url: string | null): string | null {
  if (!url) return null;
  const u = url.trim();
  if (/^(https?:|mailto:)/i.test(u) || u.startsWith("/") || u.startsWith("#")) return u;
  return null;
}

/* ------------------------------------------------------------------ */
/* HTML -> Markdown                                                    */
/* ------------------------------------------------------------------ */

function escapeText(text: string): string {
  return text.replace(/([\\`*_[\]<>~|])/g, "\\$1");
}

/** Stops a paragraph that starts with "1." or "-" from turning into a list, etc. */
function escapeLineStart(line: string): string {
  if (/^\d+[.)]\s/.test(line)) return line.replace(/^(\d+)([.)])/, "$1\\$2");
  if (/^(#{1,6}\s|[-+]\s|>)/.test(line)) return "\\" + line;
  return line;
}

function wrap(mark: string, inner: string): string {
  const m = inner.match(/^(\s*)([\s\S]*?)(\s*)$/);
  if (!m || !m[2]) return inner;
  return `${m[1]}${mark}${m[2]}${mark}${m[3]}`;
}

function inline(nodes: Node[], marks: Marks): string {
  let out = "";
  for (const node of nodes) {
    if (node.nodeType === 3) {
      out += escapeText((node.textContent ?? "").replace(/[\s ]+/g, " "));
      continue;
    }
    if (!isElement(node) || DROP_TAGS.has(node.tagName)) continue;
    const tag = node.tagName;
    const kids = Array.from(node.childNodes);

    if (tag === "BR") {
      out += "\\\n";
      continue;
    }
    if (tag === "IMG") {
      const src = safeUrl(node.getAttribute("src"));
      if (src) out += `![${escapeText(node.getAttribute("alt") ?? "")}](${src.replace(/ /g, "%20").replace(/\)/g, "%29")})`;
      continue;
    }
    if (tag === "A") {
      const href = safeUrl(node.getAttribute("href"));
      const text = inline(kids, marks);
      out += href && text.trim() ? `[${text}](${href.replace(/ /g, "%20").replace(/\)/g, "%29")})` : text;
      continue;
    }
    if (tag === "CODE") {
      const text = (node.textContent ?? "").replace(/`/g, "");
      out += text ? "`" + text + "`" : "";
      continue;
    }

    const fromStyle = styleMarks(node);
    let bold = (tag === "STRONG" || tag === "B" || fromStyle.bold === true) && !fromStyle.notBold;
    let italic = tag === "EM" || tag === "I" || fromStyle.italic === true;
    let strike = tag === "S" || tag === "DEL" || tag === "STRIKE" || fromStyle.strike === true;
    // Already inside the same format: don't open it twice.
    if (marks.bold) bold = false;
    if (marks.italic) italic = false;
    if (marks.strike) strike = false;

    let text = inline(kids, {
      bold: marks.bold || bold,
      italic: marks.italic || italic,
      strike: marks.strike || strike,
    });
    if (strike) text = wrap("~~", text);
    if (italic) text = wrap("*", text);
    if (bold) text = wrap("**", text);
    out += text;
  }
  return out;
}

function inlineBlock(el: Node): string {
  return inline(Array.from(el.childNodes), NO_MARKS)
    .replace(/\*\*\*\*/g, "")
    .replace(/~~~~/g, "")
    .replace(/ *\\\n */g, "\\\n")
    .replace(/^(\\\n)+|(\\\n)+$/g, "")
    .trim();
}

function list(el: HTMLElement, ordered: boolean): string {
  const start = Number(el.getAttribute("start")) || 1;
  const items = Array.from(el.children).filter((c) => c.tagName === "LI");
  return items
    .map((li, i) => {
      const marker = ordered ? `${start + i}. ` : "- ";
      const pad = " ".repeat(marker.length);
      const parts = blocks(li);
      let body = "";
      parts.forEach((part, j) => {
        if (j === 0) body = part;
        else body += (/^([-*+]|\d+\.) /.test(part) ? "\n" : "\n\n") + part;
      });
      return (
        marker +
        body
          .split("\n")
          .map((line, j) => (j === 0 || !line ? line : pad + line))
          .join("\n")
      );
    })
    .join("\n");
}

function table(el: HTMLElement): string {
  const rows = Array.from(el.querySelectorAll("tr")).map((tr) =>
    Array.from(tr.children)
      .filter((c) => c.tagName === "TD" || c.tagName === "TH")
      .map((cell) => blocks(cell).join(" ").replace(/\n/g, " ").trim()),
  );
  if (rows.length === 0) return "";
  const cols = Math.max(...rows.map((r) => r.length), 1);
  const line = (cells: string[]) =>
    "| " + Array.from({ length: cols }, (_, i) => cells[i] ?? "").join(" | ") + " |";
  const [head, ...body] = rows;
  return [line(head), "|" + " --- |".repeat(cols), ...body.map(line)].join("\n");
}

function block(el: HTMLElement): string {
  switch (el.tagName) {
    case "H1":
    case "H2": {
      const t = inlineBlock(el);
      return t ? `## ${t}` : "";
    }
    case "H3":
    case "H4":
    case "H5":
    case "H6": {
      const t = inlineBlock(el);
      return t ? `### ${t}` : "";
    }
    case "UL":
      return list(el, false);
    case "OL":
      return list(el, true);
    case "LI":
      return "- " + blocks(el).join(" ");
    case "BLOCKQUOTE":
      return blocks(el)
        .map((b) => b.split("\n").map((l) => `> ${l}`).join("\n"))
        .join("\n>\n");
    case "TABLE":
      return table(el);
    case "HR":
      return "---";
    case "PRE":
      return "```\n" + (el.textContent ?? "").replace(/```/g, "") + "\n```";
    default: {
      // Paragraphs, and containers such as <div> that may hold other blocks.
      if (Array.from(el.childNodes).some(isBlock)) return blocks(el).join("\n\n");
      return escapeLineStart(inlineBlock(el));
    }
  }
}

function blocks(parent: Node): string[] {
  const out: string[] = [];
  let pending: Node[] = [];
  const flush = () => {
    if (pending.length) {
      const holder = document.createElement("p");
      pending.forEach((n) => holder.appendChild(n.cloneNode(true)));
      const t = escapeLineStart(inlineBlock(holder));
      if (t) out.push(t);
      pending = [];
    }
  };
  parent.childNodes.forEach((node) => {
    if (isElement(node) && DROP_TAGS.has(node.tagName)) return;
    if (isBlock(node)) {
      flush();
      const b = block(node as HTMLElement);
      if (b.trim()) out.push(b);
    } else {
      pending.push(node);
    }
  });
  flush();
  return out;
}

/** Converts the editor's content to Markdown for saving. */
export function htmlToMarkdown(root: HTMLElement): string {
  const md = blocks(root).join("\n\n").replace(/\n{3,}/g, "\n\n").trim();
  return md ? md + "\n" : "";
}

/* ------------------------------------------------------------------ */
/* Cleaning pasted or loaded HTML                                      */
/* ------------------------------------------------------------------ */

const KEEP: Record<string, string> = {
  P: "p", DIV: "p", SECTION: "p", ARTICLE: "p",
  H1: "h2", H2: "h2", H3: "h3", H4: "h3", H5: "h3", H6: "h3",
  UL: "ul", OL: "ol", LI: "li", BLOCKQUOTE: "blockquote",
  TABLE: "table", THEAD: "thead", TBODY: "tbody", TR: "tr", TH: "th", TD: "td",
  BR: "br", HR: "hr", PRE: "pre", CODE: "code",
  STRONG: "strong", B: "strong", EM: "em", I: "em", S: "s", DEL: "s", STRIKE: "s",
  A: "a", IMG: "img",
};

function cleanInto(source: Node, target: Node, doc: Document) {
  source.childNodes.forEach((node) => {
    if (node.nodeType === 3) {
      target.appendChild(doc.createTextNode(node.textContent ?? ""));
      return;
    }
    if (!isElement(node) || DROP_TAGS.has(node.tagName) || node.tagName.includes(":")) return;

    let tag = KEEP[node.tagName];
    const fromStyle = styleMarks(node);
    if (tag === "strong" && fromStyle.notBold) tag = "";

    // Word and Google Docs mark bold/italic with styles on <span>.
    if (!tag) {
      let holder: Node = target;
      if (fromStyle.bold) holder = holder.appendChild(doc.createElement("strong"));
      if (fromStyle.italic) holder = holder.appendChild(doc.createElement("em"));
      if (fromStyle.strike) holder = holder.appendChild(doc.createElement("s"));
      cleanInto(node, holder, doc);
      return;
    }

    // A <div> or <section> that holds paragraphs is only a wrapper: keep its contents.
    if (tag === "p" && Array.from(node.childNodes).some(isBlock)) {
      cleanInto(node, target, doc);
      return;
    }

    const el = doc.createElement(tag);
    if (tag === "a") {
      const href = safeUrl(node.getAttribute("href"));
      if (!href) {
        cleanInto(node, target, doc);
        return;
      }
      el.setAttribute("href", href);
    }
    if (tag === "img") {
      const src = safeUrl(node.getAttribute("src"));
      if (!src || !/^https?:|^\//.test(src)) return;
      el.setAttribute("src", src);
      el.setAttribute("alt", node.getAttribute("alt") ?? "");
    }
    if (tag === "ol" && node.getAttribute("start")) el.setAttribute("start", node.getAttribute("start") ?? "1");
    target.appendChild(el);
    if (tag !== "img" && tag !== "br" && tag !== "hr") cleanInto(node, el, doc);
  });
}

/** Word's bulleted paragraphs ("• text") become a real bulleted list. */
function fixWordBullets(root: HTMLElement, doc: Document) {
  let list: HTMLElement | null = null;
  for (const child of Array.from(root.children)) {
    const text = child.textContent ?? "";
    if (child.tagName === "P" && /^[•·▪◦\-][\s ]/.test(text)) {
      if (list === null) {
        list = doc.createElement("ul");
        root.insertBefore(list, child);
      }
      const li = doc.createElement("li");
      li.innerHTML = child.innerHTML.replace(/^(\s|&nbsp;)*[•·▪◦\-](\s|&nbsp;)*/, "");
      list.appendChild(li);
      child.remove();
    } else {
      list = null;
    }
  }
}

/** Keeps only the formatting the website supports (headings, bold, lists, links, tables…). */
export function cleanHtml(html: string): string {
  const parsed = new DOMParser().parseFromString(html, "text/html");
  const out = document.implementation.createHTMLDocument("");
  const root = out.createElement("div");
  cleanInto(parsed.body, root, out);
  fixWordBullets(root, out);
  // Remove empty paragraphs left by Word.
  root.querySelectorAll("p").forEach((p) => {
    if (!p.textContent?.trim() && !p.querySelector("img")) p.remove();
  });
  return root.innerHTML;
}

/** Plain pasted text: every line becomes its own paragraph, so sentences never run together. */
export function textToHtml(text: string): string {
  const doc = document.implementation.createHTMLDocument("");
  const root = doc.createElement("div");
  text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
    .forEach((line) => {
      const p = doc.createElement("p");
      p.textContent = line;
      root.appendChild(p);
    });
  fixWordBullets(root, doc);
  return root.innerHTML;
}
