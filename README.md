# snowpack-plugin-markdown

> **NOTE**: This plugin comes preconfigured to parse JSON, TOML, and YAML Frontmatter!

## Description

Simple Snowpack plugin for preprocessing Markdown files to HTML via rehype / remark

## Sample

```javascript
// Below, we're importing `remark`-based plugins that will give our
// header text GitHub-style `id=""` slugs. And then automatically wrap them
// in hoverable links
const headings = require("remark-autolink-headings");
const slug = require("remark-slug");

// Next, we'll tell Snowpack to use the Markdown plugin and utilize
// the `remark`-based plugins
module.exports = {
    plugins: [
        [
            "snowpack-plugin-markdown",
            {
                remark: [slug, headings],
            },
        ],
    ],

    mount: {
        public: "/",
        src: "/_dist_",
    },
};
```

## `unified.js` Plugins

You can find plugins from the [`unified.js`](https://github.com/unifiedjs) ecosystem that can work with this Snowpack plugin:

-   [`remark` Plugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins)
-   [`rehype` Plugins](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins)

## Options

```typescript
/**
 * Represents the options passable to `snowpack-plugin-markdown`
 */
interface IMarkdownPluginOptions extends ICompileOptions {
    /**
     * Represents the file extensions used for denote which files
     * will be parsed by the plugin
     */
    extensions: string[];

    /**
     * Represents options passable to `remark-rehype` for Markdown (MDAST) -> HTML (HAST) conversion
     * See more information at: https://github.com/remarkjs/remark-rehype#api
     */
    mdast2hast: IMDASTToHASTOptions;

    /**
     * Represents options passable to `@starptech/prettyhtml-hast-to-html` for HTML stringification
     * See more information at: https://github.com/Prettyhtml/prettyhtml/tree/master/packages/prettyhtml-hast-to-html#api
     */
    stringify: IHASTToHTMLOptions;

    /**
     * Represents that options frontmatter types configured for parsing to `remark-frontmatter`
     * See more information at: https://github.com/remarkjs/remark-frontmatter#api
     */
    frontmatter: IFrontMatterOptions[];

    /**
     * Represents `rehype`-based plugins to be configured with a `unified.Processor`
     */
    rehype: IRehypePlugin[];

    /**
     * Represents `remark`-based plugins to be configured with a `unified.Processor`
     */
    remark: IRemarkPlugin[];
}

interface IMDASTToHASTOptions {
    /**
     * Represents whether the Compiler should drop raw HTML markup from
     * the Markdown document
     */
    allowDangerousHtml: boolean;
}

interface IHASTToHTMLOptions {
    /**
     * When this property true the node is skipped for attribute collapsing.
     */
    ignore: boolean;

    /**
     * When this property true the node is skipped for attribute collapsing.
     */
    preserveAttrWrapping: boolean;
}

interface IFrontMatterOptions<T = {[key: string]: any}> {
    /**
     * Represents how the Frontmatter type should be identified as. Usually
     * it should be the the shortname of your syntax type, e.g. json, yaml, etc...
     */
    type: string;

    /**
     * Represents the character used to construct fences. By providing an object with open
     * and close. different characters can be used for opening and closing fences. For example
     * * the character '-' will result in '---' being used as the fence.
     */
    marker: string | {open: string; close: string};

    /**
     * Represents the string used as the complete fence. By providing an object with open and
     * close different values can be used for opening and closing fences. This can be used too
     * if fences contain different characters or lengths other than 3
     */
    fence: string | {open: string; close: string};

    /**
     * Represents if the Frontmatter can be anywhere in the Markdown document,
     * or only at the top of the document
     */
    anywhere: boolean;

    /**
     * Represents a callback to parse frontmatter identified string into a
     * JSON-serializable Javascript data structure
     */
    parser: (string: string) => T;
}
```

## Developer

### Installation

Open your terminal and install via `npm`:

```sh
npm install git+https://github.com/novacbn/snowpack-plugin-markdown#0.0.1 -D
```

Install current in-development code:

```sh
npm install git+https://github.com/novacbn/snowpack-plugin-markdown -D
```
