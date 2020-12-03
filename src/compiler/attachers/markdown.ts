import type {Root} from "mdast";
import type {Processor} from "unified";

import type {Matter} from "remark-frontmatter";

/**
 * Represents the options passable to [[frontmatter_persist]]
 */
export interface IFrontMatterOptions<T = {[key: string]: any}> extends Matter {
    /**
     * Represents a callback to parse frontmatter identified string into a
     * JSON-serializable Javascript data structure
     */
    parser: (string: string) => T;
}

/**
 * Parses a MDAST for identified Frontmatter strings, parsing them into data and
 * configuring a `unified.Processor` to persist the structure
 *
 * @internal
 *
 * @param this
 * @param options
 */
export function frontmatter_persist(this: Processor, options: IFrontMatterOptions[] = []): any {
    const processor = this;

    const frontmatter_values = new Map();
    const frontmatter_types = Object.fromEntries(options.map((config) => [config.type, config]));

    processor.data("frontmatter", frontmatter_values);

    return (tree: Root) => {
        const {children} = tree;

        const node = children.find((node: any) => !!frontmatter_types[node.type]);
        if (!node) return;

        const {parser} = frontmatter_types[node.type];
        const data = parser(node.value as string);

        for (const key in data) frontmatter_values.set(key, data[key]);
        return {
            ...tree,
            children: children.filter((_node: any) => node !== _node),
        };
    };
}
