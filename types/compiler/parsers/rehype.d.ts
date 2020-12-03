import type { Processor } from "unified";
import type { Node } from "unist";
import type { VFile } from "vfile";
/**
 * Represents a `rehype`-based `unified` Attacher, for modifying HAST
 */
export declare type IRehypeAttacher<T> = (this: Processor, options: T) => IRehypeTransformer | undefined;
/**
 * Represents a `remark`-based `unified` Transformer, for modifying HAST
 */
export declare type IRehypeTransformer = (tree: Node, file: VFile) => Node | undefined;
/**
 * Represents a `rehype`-based plugin, that will be configured for a `unified.Processor`
 */
export declare type IRehypePlugin = [IRehypeAttacher<any>, any];
/**
 * Represents options passable for `rehype` configured `unified.Processor`
 */
export interface IRehypeOptions {
    /**
     * Represents `rehype`-based plugins to be configured with a `unified.Processor`
     */
    rehype: IRehypePlugin[];
}
/**
 * Configures a `unified.Processor` with a package-level standard of `rehype`-based plugins
 *
 * @internal
 *
 * @param processor
 * @param options
 */
export declare function configure(processor: Processor, options?: Partial<IRehypeOptions>): void;
