var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
__export(exports, {
  configure: () => configure
});
function RehypeOptions(options = {}) {
  let {rehype = []} = options;
  rehype = [...rehype];
  return {rehype};
}
function configure(processor, options = {}) {
  const {rehype: plugins} = RehypeOptions(options);
  for (const plugin of plugins) {
    if (Array.isArray(plugin))
      processor.use(plugin[0], plugin[1]);
    else
      processor.use(plugin);
  }
}
//# sourceMappingURL=rehype.js.map
