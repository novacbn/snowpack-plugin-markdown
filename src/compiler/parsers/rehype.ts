import type {Processor} from "unified";
import type {Node} from "unist";
import type {VFile} from "vfile";

/**
 * Represents a `rehype`-based `unified` Attacher, for modifying HAST
 */
export type IRehypeAttacher<T> = (this: Processor, options: T) => IRehypeTransformer | undefined;

/**
 * Represents a `remark`-based `unified` Transformer, for modifying HAST
 */
export type IRehypeTransformer = (tree: Node, file: VFile) => Node | undefined;

/**
 * Represents a `rehype`-based plugin, that will be configured for a `unified.Processor`
 */
export type IRehypePlugin = [IRehypeAttacher<any>, any];

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
 * Returns the options standardized with defaults
 *
 * @internal
 *
 * @param options
 */
function RehypeOptions(options: Partial<IRehypeOptions> = {}): IRehypeOptions {
    let {rehype = []} = options;

    rehype = [...rehype];

    return {rehype};
}

/**
 * Configures a `unified.Processor` with a package-level standard of `rehype`-based plugins
 *
 * @internal
 *
 * @param processor
 * @param options
 */
export function configure(processor: Processor, options: Partial<IRehypeOptions> = {}): void {
    const {rehype: plugins} = RehypeOptions(options);

    for (const plugin of plugins) {
        if (Array.isArray(plugin)) processor.use(plugin[0], plugin[1]);
        else processor.use(plugin);
    }
}
