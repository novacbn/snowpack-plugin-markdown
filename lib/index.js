var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __exportStar = (target, module2, desc) => {
  __markAsModule(target);
  if (typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  if (module2 && module2.__esModule)
    return module2;
  return __exportStar(__defProp(__create(__getProtoOf(module2)), "default", {value: module2, enumerable: true}), module2);
};
__export(exports, {
  default: () => src_default
});
const promises = __toModule(require("fs/promises"));
const compiler = __toModule(require("./compiler"));
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
      const contents = await promises.readFile(file_path, "utf-8");
      const {frontmatter, html} = await compiler.compile(contents, options);
      const script = TEMPLATE_MODULE(frontmatter, html);
      return {
        ".js": {
          code: script
        }
      };
    }
  };
};
//# sourceMappingURL=index.js.map
