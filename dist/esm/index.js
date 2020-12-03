import {readFile} from "fs/promises";
import {compile} from "./compiler";
const DEFAULT_INPUT_EXTENSIONS = [".md"];
const PLUGIN_OUTPUT_EXTENSIONS = [".js"];
const TEMPLATE_MODULE = (frontmatter, html) => `export const FRONTMATTER = ${JSON.stringify(frontmatter)};
export const HTML = ${JSON.stringify(html)};`;
function MarkdownPluginOptions(options = {}) {
  const {extensions = DEFAULT_INPUT_EXTENSIONS} = options;
  return {
    ...options,
    extensions
  };
}
var src_default = (config, options = {}) => {
  options = MarkdownPluginOptions(options);
  const {extensions} = options;
  return {
    name: "snowpack-plugin-markdown",
    resolve: {
      input: extensions,
      output: PLUGIN_OUTPUT_EXTENSIONS
    },
    async load(file) {
      const {filePath: file_path} = file;
      const contents = await readFile(file_path, "utf-8");
      const {frontmatter, html} = await compile(contents, options);
      const script = TEMPLATE_MODULE(frontmatter, html);
      return {
        ".js": {
          code: script
        }
      };
    }
  };
};
export {
  src_default as default
};
//# sourceMappingURL=index.js.map
