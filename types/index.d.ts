import type { SnowpackConfig, SnowpackPlugin } from "snowpack";
import type { ICompileOptions } from "./compiler";
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
declare const _default: <T>(config: SnowpackConfig, options?: Partial<IMarkdownPluginOptions>) => SnowpackPlugin;
/**
 * Represents the Snowpack Plugin for the package
 */
export default _default;
