import "../public/extern/styles/chota.css";
import "highlight.js/styles/github.css";

import Application from "./Application.svelte";

window._application = new Application({
    target: document.body,
});

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => {
        window._application.$destroy();
    });
}
