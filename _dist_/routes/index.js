import './index.css.proxy.js';
/* src/routes/index.svelte generated by Svelte v3.31.0 */
import {
	HtmlTag,
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space
} from "../../web_modules/svelte/internal.js";

import { FRONTMATTER, HTML } from "../content/README.js";

function create_fragment(ctx) {
	let html_tag;
	let t0;
	let h2;
	let t2;
	let blockquote;
	let t5;
	let div;
	let pre;
	let code;

	return {
		c() {
			t0 = space();
			h2 = element("h2");
			h2.textContent = "Parsed Frontmatter";
			t2 = space();
			blockquote = element("blockquote");
			blockquote.innerHTML = `<b>NOTE:</b> Below Frontmatter was parsed from this README document`;
			t5 = space();
			div = element("div");
			pre = element("pre");
			code = element("code");
			code.textContent = `${JSON.stringify(FRONTMATTER, null, 4)}`;
			html_tag = new HtmlTag(t0);
			attr(pre, "class", "svelte-1nq5l93");
			attr(div, "class", "card svelte-1nq5l93");
		},
		m(target, anchor) {
			html_tag.m(HTML, target, anchor);
			insert(target, t0, anchor);
			insert(target, h2, anchor);
			insert(target, t2, anchor);
			insert(target, blockquote, anchor);
			insert(target, t5, anchor);
			insert(target, div, anchor);
			append(div, pre);
			append(pre, code);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) html_tag.d();
			if (detaching) detach(t0);
			if (detaching) detach(h2);
			if (detaching) detach(t2);
			if (detaching) detach(blockquote);
			if (detaching) detach(t5);
			if (detaching) detach(div);
		}
	};
}

class Routes extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Routes;