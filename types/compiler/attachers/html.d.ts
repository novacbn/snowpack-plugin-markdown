import type { Processor } from "unified";
/**
 * Represents the options passable to [[html_stringify]]
 */
export interface IHASTToHTMLOptions {
    /**
     * When this property true the node is skipped for attribute collapsing.
     */
    ignore: boolean;
    /**
     * When this property true the node is skipped for attribute collapsing.
     */
    preserveAttrWrapping: boolean;
}
/**
 * Configures a `unified.Processor` to compile the end-result AST to HTML
 *
 * @internal
 *
 * @param this
 * @param options
 */
export declare function html_stringify(this: Processor, options?: Partial<IHASTToHTMLOptions>): void;
