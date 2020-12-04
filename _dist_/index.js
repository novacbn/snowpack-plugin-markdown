var nn={MODE:"production",NODE_ENV:"production",SSR:!1};function S(){}function $n(n,e){for(let t in e)n[t]=e[t];return n}function en(n){return n()}function tn(){return Object.create(null)}function L(n){n.forEach(en)}function Tn(n){return typeof n=="function"}function A(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Mn(n){return Object.keys(n).length===0}function an(n,e,t,s){if(n){let a=sn(n,e,t,s);return n[0](a)}}function sn(n,e,t,s){return n[1]&&s?$n(t.ctx.slice(),n[1](s(e))):t.ctx}function Sn(n,e,t,s){if(n[2]&&s){let a=n[2](s(t));if(e.dirty===void 0)return a;if(typeof a=="object"){let o=[],i=Math.max(e.dirty.length,a.length);for(let c=0;c<i;c+=1)o[c]=e.dirty[c]|a[c];return o}return e.dirty|a}return e.dirty}function ln(n,e,t,s,a,o,i){let c=Sn(e,s,a,o);if(c){let f=sn(e,t,s,i);n.p(f,c)}}function v(n,e){n.appendChild(e)}function j(n,e,t){n.insertBefore(e,t||null)}function y(n){n.parentNode.removeChild(n)}function b(n){return document.createElement(n)}function J(n){return document.createTextNode(n)}function $(){return J(" ")}function x(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function An(n){return Array.from(n.childNodes)}function Y(n,e,t){n.classList[t?"add":"remove"](e)}var z=class{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,s=null){this.e||(this.e=b(t.nodeName),this.t=t,this.h(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)j(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(y)}},on;function I(n){on=n}var R=[],rn=[],D=[],cn=[],On=Promise.resolve(),G=!1;function Rn(){G||(G=!0,On.then(pn))}function K(n){D.push(n)}var V=!1,U=new Set;function pn(){if(V)return;V=!0;do{for(let n=0;n<R.length;n+=1){let e=R[n];I(e),En(e.$$)}for(I(null),R.length=0;rn.length;)rn.pop()();for(let n=0;n<D.length;n+=1){let e=D[n];U.has(e)||(U.add(e),e())}D.length=0}while(R.length);for(;cn.length;)cn.pop()();G=!1,V=!1,U.clear()}function En(n){if(n.fragment!==null){n.update(),L(n.before_update);let e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(K)}}var P=new Set,Hn;function T(n,e){n&&n.i&&(P.delete(n),n.i(e))}function E(n,e,t,s){if(n&&n.o){if(P.has(n))return;P.add(n),Hn.c.push(()=>{P.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}}function un(n,e){n.d(1),e.delete(n.key)}function hn(n,e,t,s,a,o,i,c,f,r,p,h){let g=n.length,u=o.length,l=g,m={};for(;l--;)m[n[l].key]=l;let _=[],C=new Map,B=new Map;for(l=u;l--;){let d=h(a,o,l),w=t(d),k=i.get(w);k?s&&k.p(d,e):(k=r(w,d),k.c()),C.set(w,_[l]=k),w in m&&B.set(w,Math.abs(l-m[w]))}let X=new Set,Z=new Set;function W(d){T(d,1),d.m(c,p),i.set(d.key,d),p=d.first,u--}for(;g&&u;){let d=_[u-1],w=n[g-1],k=d.key,N=w.key;d===w?(p=d.first,g--,u--):C.has(N)?!i.has(k)||X.has(k)?W(d):Z.has(N)?g--:B.get(k)>B.get(N)?(Z.add(k),W(d)):(X.add(N),g--):(f(w,i),g--)}for(;g--;){let d=n[g];C.has(d.key)||f(d,i)}for(;u;)W(_[u-1]);return _}function Q(n){n&&n.c()}function q(n,e,t){let{fragment:s,on_mount:a,on_destroy:o,after_update:i}=n.$$;s&&s.m(e,t),K(()=>{let c=a.map(en).filter(Tn);o?o.push(...c):L(c),n.$$.on_mount=[]}),i.forEach(K)}function F(n,e){let t=n.$$;t.fragment!==null&&(L(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Nn(n,e){n.$$.dirty[0]===-1&&(R.push(n),Rn(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function O(n,e,t,s,a,o,i=[-1]){let c=on;I(n);let f=e.props||{},r=n.$$={fragment:null,ctx:null,props:o,update:S,not_equal:a,bound:tn(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:tn(),dirty:i,skip_bound:!1},p=!1;if(r.ctx=t?t(n,f,(h,g,...u)=>{let l=u.length?u[0]:g;return r.ctx&&a(r.ctx[h],r.ctx[h]=l)&&(!r.skip_bound&&r.bound[h]&&r.bound[h](l),p&&Nn(n,h)),g}):[],r.update(),p=!0,L(r.before_update),r.fragment=s?s(r.ctx):!1,e.target){if(e.hydrate){let h=An(e.target);r.fragment&&r.fragment.l(h),h.forEach(y)}else r.fragment&&r.fragment.c();e.intro&&T(n.$$.fragment),q(n,e.target,e.anchor),pn()}I(c)}var M=class{$destroy(){F(this,1),this.$destroy=S}$on(e,t){let s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{let a=s.indexOf(t);a!==-1&&s.splice(a,1)}}$set(e){this.$$set&&!Mn(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};function fn(n,e,t){let s=n.slice();return s[2]=e[t],s}function mn(n,e){let t,s=e[2].text+"",a,o,i,c;return{key:n,first:null,c(){t=b("a"),a=J(s),x(t,"href",o=e[2].href),x(t,"target",i=e[2].target),x(t,"rel",c=e[2].rel),Y(t,"active",dn(e[2].href)),this.first=t},m(f,r){j(f,t,r),v(t,a)},p(f,r){r&0&&Y(t,"active",dn(f[2].href))},d(f){f&&y(t)}}}function Ln(n){let e,t,s,a,o,i=[],c=new Map,f,r,p=gn,h=l=>l[2].href;for(let l=0;l<p.length;l+=1){let m=fn(n,p,l),_=h(m);c.set(_,i[l]=mn(_,m))}let g=n[1].default,u=an(g,n,n[0],null);return{c(){e=b("main"),t=b("center"),s=b("h1"),s.innerHTML="<code>snowpack-plugin-markdown</code>",a=$(),o=b("nav");for(let l=0;l<i.length;l+=1)i[l].c();f=$(),u&&u.c(),x(o,"class","tabs svelte-xylpso"),x(e,"class","container")},m(l,m){j(l,e,m),v(e,t),v(t,s),v(t,a),v(t,o);for(let _=0;_<i.length;_+=1)i[_].m(o,null);v(e,f),u&&u.m(e,null),r=!0},p(l,[m]){if(m&0){let _=gn;i=hn(i,m,h,1,l,_,c,o,un,mn,null,fn)}u&&(u.p&&m&1&&ln(u,g,l,l[0],m,null,null))},i(l){if(r)return;T(u,l),r=!0},o(l){E(u,l),r=!1},d(l){l&&y(e);for(let m=0;m<i.length;m+=1)i[m].d();u&&u.d(l)}}}var gn=[{href:"#/",text:"README"},{href:"https://github.com/novacbn/snowpack-plugin-markdown",text:"GitHub",target:"_blank",rel:"noopener"}];function dn(n){return n.startsWith("#")}function In(n,e,t){let{$$slots:s={},$$scope:a}=e;return n.$$set=o=>{"$$scope"in o&&t(0,a=o.$$scope)},[a,s]}var _n=class extends M{constructor(e){super();O(this,e,In,Ln,A,{})}},bn=_n;var yn={"secret-message":"You found the parsed Frontmatter!"},jn=`<blockquote>
<p><strong>NOTE</strong>: This plugin comes preconfigured to parse JSON, TOML, and YAML Frontmatter!</p>
</blockquote>
<h2>Description</h2>
<p>Simple Snowpack plugin for preprocessing Markdown files to HTML via rehype / remark</p>
<h2>Sample</h2>
<pre><code class="hljs language-javascript"><span
  class="hljs-comment"
>// Below, we're importing \`remark\`-based plugins that will give our</span>
<span
  class="hljs-comment"
>// header text GitHub-style \`id=""\` slugs. And then automatically wrap them</span>
<span class="hljs-comment">// in hoverable links</span>
<span class="hljs-keyword">const</span> headings = <span class="hljs-built_in">require</span>(<span class="hljs-string">"remark-autolink-headings"</span>);
<span class="hljs-keyword">const</span> slug = <span class="hljs-built_in">require</span>(<span class="hljs-string">"remark-slug"</span>);

<span
  class="hljs-comment"
>// Next, we'll tell Snowpack to use the Markdown plugin and utilize</span>
<span class="hljs-comment">// the \`remark\`-based plugins</span>
<span class="hljs-built_in">module</span>.exports = {
    <span class="hljs-attr">plugins</span>: [
        [
            <span class="hljs-string">"snowpack-plugin-markdown"</span>,
            {
                <span class="hljs-attr">remark</span>: [slug, headings],
            },
        ],
    ],

    <span
  class="hljs-attr"
>mount</span>: {
        <span class="hljs-attr">public</span>: <span class="hljs-string">"/"</span>,
        <span class="hljs-attr">src</span>: <span class="hljs-string">"/_dist_"</span>,
    },
};</code></pre>
<h2><code>unified.js</code> Plugins</h2>
<p>You can find plugins from the <a href="https://github.com/unifiedjs"><code>unified.js</code></a> ecosystem that can work with this Snowpack plugin:</p>
<ul>
<li><a
  href="https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins"
><code>remark</code> Plugins</a></li>
<li><a
  href="https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins"
><code>rehype</code> Plugins</a></li>
</ul>
<h2>Options</h2>
<pre><code class="hljs language-typescript"><span class="hljs-comment">/**
 * Represents the options passable to \`snowpack-plugin-markdown\`
 */</span>
<span class="hljs-keyword">interface</span> IMarkdownPluginOptions <span class="hljs-keyword">extends</span> ICompileOptions {
    <span class="hljs-comment">/**
     * Represents the file extensions used for denote which files
     * will be parsed by the plugin
     */</span>
    <span class="hljs-attr">extensions</span>: <span class="hljs-built_in">string</span>[];

    <span class="hljs-comment">/**
     * Represents options passable to \`remark-rehype\` for Markdown (MDAST) -> HTML (HAST) conversion
     * See more information at: https://github.com/remarkjs/remark-rehype#api
     */</span>
    mdast2hast: IMDASTToHASTOptions;

    <span class="hljs-comment">/**
     * Represents options passable to \`<span class="hljs-doctag">@starptech</span>/prettyhtml-hast-to-html\` for HTML stringification
     * See more information at: https://github.com/Prettyhtml/prettyhtml/tree/master/packages/prettyhtml-hast-to-html#api
     */</span>
    stringify: IHASTToHTMLOptions;

    <span class="hljs-comment">/**
     * Represents that options frontmatter types configured for parsing to \`remark-frontmatter\`
     * See more information at: https://github.com/remarkjs/remark-frontmatter#api
     */</span>
    frontmatter: IFrontMatterOptions[];

    <span class="hljs-comment">/**
     * Represents \`rehype\`-based plugins to be configured with a \`unified.Processor\`
     */</span>
    rehype: IRehypePlugin[];

    <span class="hljs-comment">/**
     * Represents \`remark\`-based plugins to be configured with a \`unified.Processor\`
     */</span>
    remark: IRemarkPlugin[];
}

<span class="hljs-keyword">interface</span> IMDASTToHASTOptions {
    <span class="hljs-comment">/**
     * Represents whether the Compiler should drop raw HTML markup from
     * the Markdown document
     */</span>
    <span class="hljs-attr">allowDangerousHtml</span>: <span class="hljs-built_in">boolean</span>;
}

<span class="hljs-keyword">interface</span> IHASTToHTMLOptions {
    <span class="hljs-comment">/**
     * When this property true the node is skipped for attribute collapsing.
     */</span>
    <span class="hljs-attr">ignore</span>: <span class="hljs-built_in">boolean</span>;

    <span class="hljs-comment">/**
     * When this property true the node is skipped for attribute collapsing.
     */</span>
    preserveAttrWrapping: <span class="hljs-built_in">boolean</span>;
}

<span class="hljs-keyword">interface</span> IFrontMatterOptions&lt;T = {[key: <span class="hljs-built_in">string</span>]: <span class="hljs-built_in">any</span>}> {
    <span class="hljs-comment">/**
     * Represents how the Frontmatter type should be identified as. Usually
     * it should be the the shortname of your syntax type, e.g. json, yaml, etc...
     */</span>
    <span class="hljs-attr">type</span>: <span class="hljs-built_in">string</span>;

    <span class="hljs-comment">/**
     * Represents the character used to construct fences. By providing an object with open
     * and close. different characters can be used for opening and closing fences. For example
     * * the character '-' will result in '---' being used as the fence.
     */</span>
    marker: <span class="hljs-built_in">string</span> | {<span class="hljs-attr">open</span>: <span class="hljs-built_in">string</span>; close: <span class="hljs-built_in">string</span>};

    <span class="hljs-comment">/**
     * Represents the string used as the complete fence. By providing an object with open and
     * close different values can be used for opening and closing fences. This can be used too
     * if fences contain different characters or lengths other than 3
     */</span>
    fence: <span class="hljs-built_in">string</span> | {<span class="hljs-attr">open</span>: <span class="hljs-built_in">string</span>; close: <span class="hljs-built_in">string</span>};

    <span class="hljs-comment">/**
     * Represents if the Frontmatter can be anywhere in the Markdown document,
     * or only at the top of the document
     */</span>
    anywhere: <span class="hljs-built_in">boolean</span>;

    <span class="hljs-comment">/**
     * Represents a callback to parse frontmatter identified string into a
     * JSON-serializable Javascript data structure
     */</span>
    parser: <span class="hljs-function">(<span class="hljs-params"><span class="hljs-built_in">string</span>: <span class="hljs-built_in">string</span></span>) =></span> T;
}</code></pre>
<h2>Developer</h2>
<h3>Installation</h3>
<p>Open your terminal and install via <code>npm</code>:</p>
<pre><code
  class="hljs language-sh"
>npm install git+https://github.com/novacbn/snowpack-plugin-markdown<span
  class="hljs-comment"
>#0.0.1 -D</span></code></pre>
<p>Install current in-development code:</p>
<pre><code
  class="hljs language-sh"
>npm install git+https://github.com/novacbn/snowpack-plugin-markdown -D</code></pre>`;function Dn(n){let e,t,s,a,o,i,c,f,r;return{c(){t=$(),s=b("h2"),s.textContent="Parsed Frontmatter",a=$(),o=b("blockquote"),o.innerHTML="<b>NOTE:</b> Below Frontmatter was parsed from this README document",i=$(),c=b("div"),f=b("pre"),r=b("code"),r.textContent=`${JSON.stringify(yn,null,4)}`,e=new z(t),x(f,"class","svelte-1nq5l93"),x(c,"class","card svelte-1nq5l93")},m(p,h){e.m(jn,p,h),j(p,t,h),j(p,s,h),j(p,a,h),j(p,o,h),j(p,i,h),j(p,c,h),v(c,f),v(f,r)},p:S,i:S,o:S,d(p){p&&e.d(),p&&y(t),p&&y(s),p&&y(a),p&&y(o),p&&y(i),p&&y(c)}}}var wn=class extends M{constructor(e){super();O(this,e,null,Dn,A,{})}},kn=wn;function Pn(n){let e,t;return e=new kn({}),{c(){Q(e.$$.fragment)},m(s,a){q(e,s,a),t=!0},i(s){if(t)return;T(e.$$.fragment,s),t=!0},o(s){E(e.$$.fragment,s),t=!1},d(s){F(e,s)}}}function qn(n){let e,t;return e=new bn({props:{$$slots:{default:[Pn]},$$scope:{ctx:n}}}),{c(){Q(e.$$.fragment)},m(s,a){q(e,s,a),t=!0},p(s,[a]){let o={};a&1&&(o.$$scope={dirty:a,ctx:s}),e.$set(o)},i(s){if(t)return;T(e.$$.fragment,s),t=!0},o(s){E(e.$$.fragment,s),t=!1},d(s){F(e,s)}}}var vn=class extends M{constructor(e){super();O(this,e,null,qn,A,{})}},xn=vn,H={};H.env=nn;window._application=new xn({target:document.body});console.log({meta:H});H.hot&&(H.hot.accept(),H.hot.dispose(()=>{window._application.$destroy()}));
