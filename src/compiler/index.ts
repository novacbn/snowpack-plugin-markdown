import unified from "unified";

import type {Options as IMDASTFromMarkdownOptions} from "mdast-util-from-markdown";
import markdown_parse from "remark-parse";

import hast_raw from "rehype-raw";

import type {Options as IMDASTToHASTOptions} from "mdast-util-to-hast";
import mdast_to_hast from "remark-rehype";

import type {IRehypeOptions} from "./parsers/rehype";
import {configure as configure_rehype} from "./parsers/rehype";

import type {IRemarkOptions} from "./parsers/remark";
import {configure as configure_remark} from "./parsers/remark";

import type {IHASTToHTMLOptions} from "./attachers/html";
import {html_stringify} from "./attachers/html";

/**
 * HACK: Hackity hackity! Quickly converted from Javascript into Typescript from
 * a different project. So uh, there be dargons
 */

/**
 * Represents the composite of options that are passable to [[compile]]
 */
export interface ICompileOptions extends IProcessorOptions, IRemarkOptions, IRehypeOptions {}

/**
 * Represents the baseline options passable to [[compile]]
 */
export interface IProcessorOptions {
    /**
     * Represents options passable to `remark-parse` for Markdown parsing
     */
    parse: IMDASTFromMarkdownOptions;

    /**
     * Represents options passable to `remark-rehype` for Markdown (MDAST) -> HTML (HAST) conversion
     * See more information at: https://github.com/remarkjs/remark-rehype#api
     */
    mdast2hast: IMDASTToHASTOptions;

    /**
     * Represents options passable to `@starptech/prettyhtml-hast-to-html` for HTML stringification
     * See more information at: https://github.com/Prettyhtml/prettyhtml/tree/master/packages/prettyhtml-hast-to-html#api
     */
    stringify: Partial<IHASTToHTMLOptions>;
}

/**
 * Represents the results returned by calling [[compile]]
 */
export interface ICompileResult<T = {[key: string]: any}> {
    /**
     * Represents the parsed Frontmatter, if was present in the document
     */
    frontmatter: T;

    /**
     * Represents the converted HTML from parsing the Markdown document
     */
    html: string;

    /**
     * Represents the original Markdown document, pre-parsed
     */
    markdown: string;
}

/**
 * Returns the options standardized with defaults
 *
 * @internal
 *
 * @param options
 */
function ProcessorOptions(options: Partial<IProcessorOptions> = {}): IProcessorOptions {
    const {mdast2hast = {}, parse = {}, stringify = {}} = options;

    return {
        parse: {...parse},
        stringify: {...stringify},

        mdast2hast: {
            allowDangerousHtml: true,

            ...mdast2hast,
        },
    };
}

/**
 * Returns a Markdown document parsed into a HTML string and Frontmatter data, with
 * a preconfigured `unified.Processor` based pipeline. Accepting plugins to extend functionality
 * @param markdown
 * @param options
 */
export async function compile<T extends Object>(
    markdown: string,
    options: Partial<ICompileOptions> = {}
): Promise<ICompileResult<T>> {
    const processor = unified();
    // @ts-ignore
    const {mdast2hast, parse, stringify} = ProcessorOptions(options);

    processor.use(markdown_parse, parse).use(html_stringify, stringify);

    configure_remark(processor, options);
    processor.use(mdast_to_hast, mdast2hast).use(hast_raw);
    configure_rehype(processor, options);

    const vfile = await processor.process(markdown);
    const frontmatter = processor.data("frontmatter") as Map<string, any>;

    return {
        markdown,
        frontmatter: Object.fromEntries(frontmatter) as T,
        html: vfile.toString(),
    };
}
