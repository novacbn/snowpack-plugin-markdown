import type {Processor} from "unified";
import type {Node} from "unist";
import type {VFile} from "vfile";

import toml from "toml";
import yaml from "js-yaml";

import frontmatter_parse from "remark-frontmatter";
import type {IFrontMatterOptions} from "../attachers/markdown";
import {frontmatter_persist} from "../attachers/markdown";

/**
 * Represents a `remark`-based `unified` Attacher, for modifying HAST
 */
export type IRemarkAttacher<T> = (this: Processor, options: T) => IRemarkTransformer | undefined;

/**
 * Represents a `remark`-based `unified` Transformer, for modifying HAST
 */
export type IRemarkTransformer = (tree: Node, file: VFile) => Node | undefined;

/**
 * Represents a `remark`-based plugin, that will be configured for a `unified.Processor`
 */
export type IRemarkPlugin = [IRemarkAttacher<any>, any];

/**
 * Represents options passable for `remark` configured `unified.Processor`
 */
export interface IRemarkOptions {
    /**
     * Represents that options frontmatter types configured for parsing to `remark-frontmatter`
     * See more information at: https://github.com/remarkjs/remark-frontmatter#api
     */
    frontmatter: IFrontMatterOptions[];

    /**
     * Represents `remark`-based plugins to be configured with a `unified.Processor`
     */
    remark: IRemarkPlugin[];
}

/**
 * Returns the options standardized with defaults
 *
 * @internal
 *
 * @param options
 */
function RemarkOptions(options: Partial<IRemarkOptions> = {}): IRemarkOptions {
    let {frontmatter = [], remark = []} = options;

    frontmatter = [
        {
            type: "json",
            fence: {open: "{", close: "}"},
            parser: (s: string) => JSON.parse("{" + s + "}"),
        },

        {type: "toml", marker: "+", parser: (s: string) => toml.parse(s)},
        {type: "yaml", marker: "-", parser: (s: string) => yaml.safeLoad(s)},

        ...frontmatter,
    ];

    remark = [[frontmatter_parse, frontmatter], [frontmatter_persist, frontmatter], ...remark];

    return {
        frontmatter,
        remark,
    };
}

/**
 * Configures a `unified.Processor` with a package-level standard of `remark`-based plugins
 *
 * @internal
 *
 * @param processor
 * @param options
 */
export function configure(processor: Processor, options: Partial<IRemarkOptions> = {}): void {
    const {remark: plugins} = RemarkOptions(options);

    for (const plugin of plugins) {
        if (Array.isArray(plugin)) processor.use(plugin[0], plugin[1]);
        else processor.use(plugin);
    }
}
