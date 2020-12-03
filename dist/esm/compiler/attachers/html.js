import toHTML from "@starptech/prettyhtml-hast-to-html";
function html_stringify(options = {}) {
  function compiler(tree) {
    return toHTML(tree, options);
  }
  this.Compiler = compiler;
}
export {
  html_stringify
};
//# sourceMappingURL=html.js.map
