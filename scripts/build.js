const PACKAGE = require("../package.json");

const {dirname} = require("path");

const {startService} = require("esbuild");
const glob = require("glob");

const OPTIONS_DEFAULT = {
    sourcemap: true,
};

const OPTIONS_NODE = {
    ...OPTIONS_DEFAULT,

    platform: "node",
    entryPoints: [...glob.sync("./src/**/*.ts")],
};

(async () => {
    const service = await startService();

    try {
        await Promise.all([
            service.build({
                ...OPTIONS_NODE,
                format: "cjs",
                outdir: dirname(PACKAGE.main),
            }),

            service.build({
                ...OPTIONS_NODE,
                format: "esm",
                outdir: dirname(PACKAGE.module),
            }),
        ]);
    } catch (err) {
        console.error(err);
        process.exit(1);
    } finally {
        service.stop();
    }
})();
