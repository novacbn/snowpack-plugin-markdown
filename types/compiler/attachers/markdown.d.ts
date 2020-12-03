import type { Processor } from "unified";
import type { Matter } from "remark-frontmatter";
/**
 * Represents the options passable to [[frontmatter_persist]]
 */
export interface IFrontMatterOptions<T = {
    [key: string]: any;
}> extends Matter {
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
export declare function frontmatter_persist(this: Processor, options?: IFrontMatterOptions[]): any;
