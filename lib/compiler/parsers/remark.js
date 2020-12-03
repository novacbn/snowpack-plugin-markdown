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
  configure: () => configure
});
const toml = __toModule(require("toml"));
const js_yaml = __toModule(require("js-yaml"));
const remark_frontmatter = __toModule(require("remark-frontmatter"));
const markdown = __toModule(require("../attachers/markdown"));
function RemarkOptions(options = {}) {
  let {frontmatter = [], remark = []} = options;
  frontmatter = [
    {
      type: "json",
      fence: {open: "{", close: "}"},
      parser: (s) => JSON.parse("{" + s + "}")
    },
    {type: "toml", marker: "+", parser: (s) => toml.default.parse(s)},
    {type: "yaml", marker: "-", parser: (s) => js_yaml.default.safeLoad(s)},
    ...frontmatter
  ];
  remark = [[remark_frontmatter.default, frontmatter], [markdown.frontmatter_persist, frontmatter], ...remark];
  return {
    frontmatter,
    remark
  };
}
function configure(processor, options = {}) {
  const {remark: plugins} = RemarkOptions(options);
  for (const plugin of plugins) {
    if (Array.isArray(plugin))
      processor.use(plugin[0], plugin[1]);
    else
      processor.use(plugin);
  }
}
//# sourceMappingURL=remark.js.map
