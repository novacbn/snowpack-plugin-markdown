import type {Root} from "mdast";
import type {Processor} from "unified";

// NOTE: afaik, there is no types available for the package
// @ts-ignore
import toHTML from "@starptech/prettyhtml-hast-to-html";

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
export function html_stringify(this: Processor, options: Partial<IHASTToHTMLOptions> = {}): void {
    function compiler(tree: Root) {
        return toHTML(tree, options);
    }

    // @ts-ignore
    this.Compiler = compiler;
}
