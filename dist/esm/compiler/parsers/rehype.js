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
export {
  configure
};
//# sourceMappingURL=rehype.js.map
