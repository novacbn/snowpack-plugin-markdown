const highlight = require("remark-highlight.js");

const {code, code_highlightjs} = require("./plugins/codeblock");

module.exports = {
    plugins: [
        "@snowpack/plugin-svelte",
        [
            "snowpack-plugin-markdown",
            {
                remark: [[code, {block: true}], highlight],
                rehype: [code_highlightjs],
            },
        ],
    ],

    alias: {
        "@content": "./src/content",
    },

    buildOptions: {
        baseUrl: "/snowpack-plugin-markdown",
    },

    mount: {
        public: "/",
        src: "/_dist_",
    },
};
