import './$layout.css.proxy.js';
/* src/routes/$layout.svelte generated by Svelte v3.31.0 */
import {
	SvelteComponent,
	append,
	attr,
	create_slot,
	destroy_block,
	detach,
	element,
	init,
	insert,
	safe_not_equal,
	space,
	text,
	toggle_class,
	transition_in,
	transition_out,
	update_keyed_each,
	update_slot
} from "../../web_modules/svelte/internal.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (29:12) {#each LINKS as link (link.href)}
function create_each_block(key_1, ctx) {
	let a;
	let t_value = /*link*/ ctx[2].text + "";
	let t;
	let a_href_value;
	let a_target_value;
	let a_rel_value;

	return {
		key: key_1,
		first: null,
		c() {
			a = element("a");
			t = text(t_value);
			attr(a, "href", a_href_value = /*link*/ ctx[2].href);
			attr(a, "target", a_target_value = /*link*/ ctx[2].target);
			attr(a, "rel", a_rel_value = /*link*/ ctx[2].rel);
			toggle_class(a, "active", is_active(/*link*/ ctx[2].href));
			this.first = a;
		},
		m(target, anchor) {
			insert(target, a, anchor);
			append(a, t);
		},
		p(ctx, dirty) {
			if (dirty & /*is_active, LINKS*/ 0) {
				toggle_class(a, "active", is_active(/*link*/ ctx[2].href));
			}
		},
		d(detaching) {
			if (detaching) detach(a);
		}
	};
}

function create_fragment(ctx) {
	let main;
	let center;
	let h1;
	let t1;
	let nav;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let t2;
	let current;
	let each_value = LINKS;
	const get_key = ctx => /*link*/ ctx[2].href;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	const default_slot_template = /*#slots*/ ctx[1].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);

	return {
		c() {
			main = element("main");
			center = element("center");
			h1 = element("h1");
			h1.innerHTML = `<code>snowpack-plugin-markdown</code>`;
			t1 = space();
			nav = element("nav");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = space();
			if (default_slot) default_slot.c();
			attr(nav, "class", "tabs svelte-xylpso");
			attr(main, "class", "container");
		},
		m(target, anchor) {
			insert(target, main, anchor);
			append(main, center);
			append(center, h1);
			append(center, t1);
			append(center, nav);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(nav, null);
			}

			append(main, t2);

			if (default_slot) {
				default_slot.m(main, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*LINKS, is_active*/ 0) {
				const each_value = LINKS;
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, nav, destroy_block, create_each_block, null, get_each_context);
			}

			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 1) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[0], dirty, null, null);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(main);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			if (default_slot) default_slot.d(detaching);
		}
	};
}

const LINKS = [
	{ href: "#/", text: "README" },
	{
		href: "https://github.com/novacbn/snowpack-plugin-markdown",
		text: "GitHub",
		target: "_blank",
		rel: "noopener"
	}
];

function is_active(href) {
	return href.startsWith("#");
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;

	$$self.$$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	return [$$scope, slots];
}

class $layout extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default $layout;