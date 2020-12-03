import {readFile} from "fs/promises";

import type {SnowpackConfig, SnowpackPlugin} from "snowpack";

import type {ICompileOptions} from "./compiler";
import {compile} from "./compiler";

/**
 * Represents the default file extensions used for denote which files
 * will be parsed by the plugin
 *
 * @internal
 */
const DEFAULT_INPUT_EXTENSIONS = [".md"];

/**
 * Represents the file extensions the plugin outputs to
 *
 * @internal
 */
const PLUGIN_OUTPUT_EXTENSIONS = [".js"];

/**
 * Formats a parsed Markdown document into a Javascript module
 *
 * @internal
 *
 * @param frontmatter
 * @param html
 */
const TEMPLATE_MODULE = (
    frontmatter: any,
    html: string
) => `export const FRONTMATTER = ${JSON.stringify(frontmatter)};
export const HTML = ${JSON.stringify(html)};`;

/**
 * Represents the options passable to `snowpack-plugin-markdown`
 */
export interface IMarkdownPluginOptions extends ICompileOptions {
    /**
     * Represents the file extensions used for denote which files
     * will be parsed by the plugin
     */
    extensions: string[];
}

/**
 * Returns the options standardized with defaults
 *
 * @internal
 *
 * @param options
 */
function MarkdownPluginOptions(
    options: Partial<IMarkdownPluginOptions> = {}
): IMarkdownPluginOptions {
    const {extensions = DEFAULT_INPUT_EXTENSIONS} = options;

    // @ts-ignore
    return {
        ...options,
        extensions,
    };
}

/**
 * Represents the Snowpack Plugin for the package
 */
export default <T>(
    config: SnowpackConfig,
    options: Partial<IMarkdownPluginOptions> = {}
): SnowpackPlugin => {
    options = MarkdownPluginOptions(options);

    const {extensions} = options;

    return {
        name: "snowpack-plugin-markdown",
        resolve: {
            // @ts-ignore
            input: extensions,
            output: PLUGIN_OUTPUT_EXTENSIONS,
        },

        async load(file) {
            const {filePath: file_path} = file;

            const contents = await readFile(file_path, "utf-8");
            const {frontmatter, html} = await compile<T>(contents, options);

            const script = TEMPLATE_MODULE(frontmatter, html);

            return {
                ".js": {
                    code: script,
                },
            };
        },
    };
};
