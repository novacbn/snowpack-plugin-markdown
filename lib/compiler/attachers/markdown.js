var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
__export(exports, {
  frontmatter_persist: () => frontmatter_persist
});
function frontmatter_persist(options = []) {
  const processor = this;
  const frontmatter_values = new Map();
  const frontmatter_types = Object.fromEntries(options.map((config) => [config.type, config]));
  processor.data("frontmatter", frontmatter_values);
  return (tree) => {
    const {children} = tree;
    const node = children.find((node2) => !!frontmatter_types[node2.type]);
    if (!node)
      return;
    const {parser} = frontmatter_types[node.type];
    const data = parser(node.value);
    for (const key in data)
      frontmatter_values.set(key, data[key]);
    return {
      ...tree,
      children: children.filter((_node) => node !== _node)
    };
  };
}
//# sourceMappingURL=markdown.js.map
