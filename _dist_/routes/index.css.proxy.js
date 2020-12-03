// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "pre{padding:0}blockquote > p:last-child{margin-bottom:0}.card.svelte-1nq5l93.svelte-1nq5l93{padding:0}.card.svelte-1nq5l93>pre.svelte-1nq5l93{padding:1rem}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}