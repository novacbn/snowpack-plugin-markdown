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
  compile: () => compile
});
const unified = __toModule(require("unified"));
const remark_parse = __toModule(require("remark-parse"));
const rehype_raw = __toModule(require("rehype-raw"));
const remark_rehype = __toModule(require("remark-rehype"));
const rehype = __toModule(require("./parsers/rehype"));
const remark = __toModule(require("./parsers/remark"));
const html = __toModule(require("./attachers/html"));
function ProcessorOptions(options = {}) {
  const {mdast2hast = {}, parse = {}, stringify = {}} = options;
  return {
    parse: {...parse},
    stringify: {...stringify},
    mdast2hast: {
      allowDangerousHtml: true,
      ...mdast2hast
    }
  };
}
async function compile(markdown, options = {}) {
  const processor = unified.default();
  const {mdast2hast, parse, stringify} = ProcessorOptions(options);
  processor.use(remark_parse.default, parse).use(html.html_stringify, stringify);
  remark.configure(processor, options);
  processor.use(remark_rehype.default, mdast2hast).use(rehype_raw.default);
  rehype.configure(processor, options);
  const vfile = await processor.process(markdown);
  const frontmatter = processor.data("frontmatter");
  return {
    markdown,
    frontmatter: Object.fromEntries(frontmatter),
    html: vfile.toString()
  };
}
//# sourceMappingURL=index.js.map
