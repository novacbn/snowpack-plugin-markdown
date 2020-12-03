import unified2 from "unified";
import markdown_parse from "remark-parse";
import hast_raw from "rehype-raw";
import mdast_to_hast from "remark-rehype";
import {configure as configure_rehype} from "./parsers/rehype";
import {configure as configure_remark} from "./parsers/remark";
import {html_stringify} from "./attachers/html";
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
  const processor = unified2();
  const {mdast2hast, parse, stringify} = ProcessorOptions(options);
  processor.use(markdown_parse, parse).use(html_stringify, stringify);
  configure_remark(processor, options);
  processor.use(mdast_to_hast, mdast2hast).use(hast_raw);
  configure_rehype(processor, options);
  const vfile = await processor.process(markdown);
  const frontmatter = processor.data("frontmatter");
  return {
    markdown,
    frontmatter: Object.fromEntries(frontmatter),
    html: vfile.toString()
  };
}
export {
  compile
};
//# sourceMappingURL=index.js.map
