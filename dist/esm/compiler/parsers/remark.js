import toml2 from "toml";
import yaml from "js-yaml";
import frontmatter_parse from "remark-frontmatter";
import {frontmatter_persist} from "../attachers/markdown";
function RemarkOptions(options = {}) {
  let {frontmatter = [], remark = []} = options;
  frontmatter = [
    {
      type: "json",
      fence: {open: "{", close: "}"},
      parser: (s) => JSON.parse("{" + s + "}")
    },
    {type: "toml", marker: "+", parser: (s) => toml2.parse(s)},
    {type: "yaml", marker: "-", parser: (s) => yaml.safeLoad(s)},
    ...frontmatter
  ];
  remark = [[frontmatter_parse, frontmatter], [frontmatter_persist, frontmatter], ...remark];
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
export {
  configure
};
//# sourceMappingURL=remark.js.map
