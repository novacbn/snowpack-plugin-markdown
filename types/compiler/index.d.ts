import type { Options as IMDASTFromMarkdownOptions } from "mdast-util-from-markdown";
import type { Options as IMDASTToHASTOptions } from "mdast-util-to-hast";
import type { IRehypeOptions } from "./parsers/rehype";
import type { IRemarkOptions } from "./parsers/remark";
import type { IHASTToHTMLOptions } from "./attachers/html";
/**
 * HACK: Hackity hackity! Quickly converted from Javascript into Typescript from
 * a different project. So uh, there be dargons
 */
/**
 * Represents the composite of options that are passable to [[compile]]
 */
export interface ICompileOptions extends IProcessorOptions, IRemarkOptions, IRehypeOptions {
}
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
export interface ICompileResult<T = {
    [key: string]: any;
}> {
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
 * Returns a Markdown document parsed into a HTML string and Frontmatter data, with
 * a preconfigured `unified.Processor` based pipeline. Accepting plugins to extend functionality
 * @param markdown
 * @param options
 */
export declare function compile<T extends Object>(markdown: string, options?: Partial<ICompileOptions>): Promise<ICompileResult<T>>;
