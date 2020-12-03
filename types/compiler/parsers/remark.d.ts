import type { Processor } from "unified";
import type { Node } from "unist";
import type { VFile } from "vfile";
import type { IFrontMatterOptions } from "../attachers/markdown";
/**
 * Represents a `remark`-based `unified` Attacher, for modifying HAST
 */
export declare type IRemarkAttacher<T> = (this: Processor, options: T) => IRemarkTransformer | undefined;
/**
 * Represents a `remark`-based `unified` Transformer, for modifying HAST
 */
export declare type IRemarkTransformer = (tree: Node, file: VFile) => Node | undefined;
/**
 * Represents a `remark`-based plugin, that will be configured for a `unified.Processor`
 */
export declare type IRemarkPlugin = [IRemarkAttacher<any>, any];
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
 * Configures a `unified.Processor` with a package-level standard of `remark`-based plugins
 *
 * @internal
 *
 * @param processor
 * @param options
 */
export declare function configure(processor: Processor, options?: Partial<IRemarkOptions>): void;
