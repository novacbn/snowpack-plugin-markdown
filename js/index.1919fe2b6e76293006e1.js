(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(n,t,e){(function(t){var e=function(n){return n&&n.Math==Math&&n};n.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,e(37))},function(n,t){var e={}.hasOwnProperty;n.exports=function(n,t){return e.call(n,t)}},function(n,t,e){var r=e(5),o=e(6),s=e(14);n.exports=r?function(n,t,e){return o.f(n,t,s(1,e))}:function(n,t,e){return n[t]=e,n}},function(n,t){n.exports=function(n){try{return!!n()}catch(n){return!0}}},function(n,t,e){var r=e(0),o=e(20),s=e(1),a=e(24),i=e(25),c=e(43),u=o("wks"),l=r.Symbol,p=c?l:l&&l.withoutSetter||a;n.exports=function(n){return s(u,n)||(i&&s(l,n)?u[n]=l[n]:u[n]=p("Symbol."+n)),u[n]}},function(n,t,e){var r=e(3);n.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(n,t,e){var r=e(5),o=e(21),s=e(8),a=e(23),i=Object.defineProperty;t.f=r?i:function(n,t,e){if(s(n),t=a(t,!0),s(e),o)try{return i(n,t,e)}catch(n){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(n[t]=e.value),n}},function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},function(n,t,e){var r=e(7);n.exports=function(n){if(!r(n))throw TypeError(String(n)+" is not an object");return n}},function(n,t,e){var r=e(40),o=e(19);n.exports=function(n){return r(o(n))}},function(n,t,e){var r=e(0),o=e(38),s=e(39),a=e(2),i=e(4),c=i("iterator"),u=i("toStringTag"),l=s.values;for(var p in o){var f=r[p],h=f&&f.prototype;if(h){if(h[c]!==l)try{a(h,c,l)}catch(n){h[c]=l}if(h[u]||a(h,u,p),o[p])for(var d in s)if(h[d]!==s[d])try{a(h,d,s[d])}catch(n){h[d]=s[d]}}}},function(n,t){n.exports=!1},function(n,t,e){var r=e(0),o=e(13),s="__core-js_shared__",a=r[s]||o(s,{});n.exports=a},function(n,t,e){var r=e(0),o=e(2);n.exports=function(n,t){try{o(r,n,t)}catch(e){r[n]=t}return t}},function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},function(n,t){n.exports={}},function(n,t){n.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(n,t,e){var r=e(20),o=e(24),s=r("keys");n.exports=function(n){return s[n]||(s[n]=o(n))}},function(n,t){n.exports={}},function(n,t){n.exports=function(n){if(null==n)throw TypeError("Can't call method on "+n);return n}},function(n,t,e){var r=e(11),o=e(12);(n.exports=function(n,t){return o[n]||(o[n]=void 0!==t?t:{})})("versions",[]).push({version:"3.8.0",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(n,t,e){var r=e(5),o=e(3),s=e(22);n.exports=!r&&!o((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},function(n,t,e){var r=e(0),o=e(7),s=r.document,a=o(s)&&o(s.createElement);n.exports=function(n){return a?s.createElement(n):{}}},function(n,t,e){var r=e(7);n.exports=function(n,t){if(!r(n))return n;var e,o;if(t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;if("function"==typeof(e=n.valueOf)&&!r(o=e.call(n)))return o;if(!t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;throw TypeError("Can't convert object to primitive value")}},function(n,t){var e=0,r=Math.random();n.exports=function(n){return"Symbol("+String(void 0===n?"":n)+")_"+(++e+r).toString(36)}},function(n,t,e){var r=e(3);n.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(n,t,e){var r,o=e(8),s=e(44),a=e(16),i=e(15),c=e(49),u=e(22),l=e(17),p=l("IE_PROTO"),f=function(){},h=function(n){return"<script>"+n+"</"+"script>"},d=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(n){}var n,t;d=r?function(n){n.write(h("")),n.close();var t=n.parentWindow.Object;return n=null,t}(r):((t=u("iframe")).style.display="none",c.appendChild(t),t.src=String("javascript:"),(n=t.contentWindow.document).open(),n.write(h("document.F=Object")),n.close(),n.F);for(var e=a.length;e--;)delete d.prototype[a[e]];return d()};i[p]=!0,n.exports=Object.create||function(n,t){var e;return null!==n?(f.prototype=o(n),e=new f,f.prototype=null,e[p]=n):e=d(),void 0===t?e:s(e,t)}},function(n,t,e){var r=e(1),o=e(9),s=e(46).indexOf,a=e(15);n.exports=function(n,t){var e,i=o(n),c=0,u=[];for(e in i)!r(a,e)&&r(i,e)&&u.push(e);for(;t.length>c;)r(i,e=t[c++])&&(~s(u,e)||u.push(e));return u}},function(n,t){var e=Math.ceil,r=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?r:e)(n)}},function(n,t,e){var r=e(50),o=e(0),s=function(n){return"function"==typeof n?n:void 0};n.exports=function(n,t){return arguments.length<2?s(r[n])||s(o[n]):r[n]&&r[n][t]||o[n]&&o[n][t]}},function(n,t,e){var r,o,s,a=e(51),i=e(0),c=e(7),u=e(2),l=e(1),p=e(12),f=e(17),h=e(15),d=i.WeakMap;if(a){var m=p.state||(p.state=new d),g=m.get,y=m.has,b=m.set;r=function(n,t){return t.facade=n,b.call(m,n,t),t},o=function(n){return g.call(m,n)||{}},s=function(n){return y.call(m,n)}}else{var v=f("state");h[v]=!0,r=function(n,t){return t.facade=n,u(n,v,t),t},o=function(n){return l(n,v)?n[v]:{}},s=function(n){return l(n,v)}}n.exports={set:r,get:o,has:s,enforce:function(n){return s(n)?o(n):r(n,{})},getterFor:function(n){return function(t){var e;if(!c(t)||(e=o(t)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return e}}}},function(n,t,e){var r=e(12),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(n){return o.call(n)}),n.exports=r.inspectSource},function(n,t,e){var r=e(5),o=e(54),s=e(14),a=e(9),i=e(23),c=e(1),u=e(21),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(n,t){if(n=a(n),t=i(t,!0),u)try{return l(n,t)}catch(n){}if(c(n,t))return s(!o.f.call(n,t),n[t])}},function(n,t,e){var r=e(0),o=e(2),s=e(1),a=e(13),i=e(31),c=e(30),u=c.get,l=c.enforce,p=String(String).split("String");(n.exports=function(n,t,e,i){var c,u=!!i&&!!i.unsafe,f=!!i&&!!i.enumerable,h=!!i&&!!i.noTargetGet;"function"==typeof e&&("string"!=typeof t||s(e,"name")||o(e,"name",t),(c=l(e)).source||(c.source=p.join("string"==typeof t?t:""))),n!==r?(u?!h&&n[t]&&(f=!0):delete n[t],f?n[t]=e:o(n,t,e)):f?n[t]=e:a(t,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||i(this)}))},function(n,t,e){"use strict";var r,o,s,a=e(35),i=e(2),c=e(1),u=e(4),l=e(11),p=u("iterator"),f=!1;[].keys&&("next"in(s=[].keys())?(o=a(a(s)))!==Object.prototype&&(r=o):f=!0),null==r&&(r={}),l||c(r,p)||i(r,p,(function(){return this})),n.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:f}},function(n,t,e){var r=e(1),o=e(61),s=e(17),a=e(62),i=s("IE_PROTO"),c=Object.prototype;n.exports=a?Object.getPrototypeOf:function(n){return n=o(n),r(n,i)?n[i]:"function"==typeof n.constructor&&n instanceof n.constructor?n.constructor.prototype:n instanceof Object?c:null}},function(n,t,e){var r=e(6).f,o=e(1),s=e(4)("toStringTag");n.exports=function(n,t,e){n&&!o(n=e?n:n.prototype,s)&&r(n,s,{configurable:!0,value:t})}},function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"==typeof window&&(e=window)}n.exports=e},function(n,t){n.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(n,t,e){"use strict";var r=e(9),o=e(42),s=e(18),a=e(30),i=e(52),c="Array Iterator",u=a.set,l=a.getterFor(c);n.exports=i(Array,"Array",(function(n,t){u(this,{type:c,target:r(n),index:0,kind:t})}),(function(){var n=l(this),t=n.target,e=n.kind,r=n.index++;return!t||r>=t.length?(n.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:r,done:!1}:"values"==e?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),s.Arguments=s.Array,o("keys"),o("values"),o("entries")},function(n,t,e){var r=e(3),o=e(41),s="".split;n.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(n){return"String"==o(n)?s.call(n,""):Object(n)}:Object},function(n,t){var e={}.toString;n.exports=function(n){return e.call(n).slice(8,-1)}},function(n,t,e){var r=e(4),o=e(26),s=e(6),a=r("unscopables"),i=Array.prototype;null==i[a]&&s.f(i,a,{configurable:!0,value:o(null)}),n.exports=function(n){i[a][n]=!0}},function(n,t,e){var r=e(25);n.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(n,t,e){var r=e(5),o=e(6),s=e(8),a=e(45);n.exports=r?Object.defineProperties:function(n,t){s(n);for(var e,r=a(t),i=r.length,c=0;i>c;)o.f(n,e=r[c++],t[e]);return n}},function(n,t,e){var r=e(27),o=e(16);n.exports=Object.keys||function(n){return r(n,o)}},function(n,t,e){var r=e(9),o=e(47),s=e(48),a=function(n){return function(t,e,a){var i,c=r(t),u=o(c.length),l=s(a,u);if(n&&e!=e){for(;u>l;)if((i=c[l++])!=i)return!0}else for(;u>l;l++)if((n||l in c)&&c[l]===e)return n||l||0;return!n&&-1}};n.exports={includes:a(!0),indexOf:a(!1)}},function(n,t,e){var r=e(28),o=Math.min;n.exports=function(n){return n>0?o(r(n),9007199254740991):0}},function(n,t,e){var r=e(28),o=Math.max,s=Math.min;n.exports=function(n,t){var e=r(n);return e<0?o(e+t,0):s(e,t)}},function(n,t,e){var r=e(29);n.exports=r("document","documentElement")},function(n,t,e){var r=e(0);n.exports=r},function(n,t,e){var r=e(0),o=e(31),s=r.WeakMap;n.exports="function"==typeof s&&/native code/.test(o(s))},function(n,t,e){"use strict";var r=e(53),o=e(60),s=e(35),a=e(63),i=e(36),c=e(2),u=e(33),l=e(4),p=e(11),f=e(18),h=e(34),d=h.IteratorPrototype,m=h.BUGGY_SAFARI_ITERATORS,g=l("iterator"),y="keys",b="values",v="entries",j=function(){return this};n.exports=function(n,t,e,l,h,w,x){o(e,t,l);var k,S,O,_=function(n){if(n===h&&P)return P;if(!m&&n in M)return M[n];switch(n){case y:case b:case v:return function(){return new e(this,n)}}return function(){return new e(this)}},$=t+" Iterator",T=!1,M=n.prototype,L=M[g]||M["@@iterator"]||h&&M[h],P=!m&&L||_(h),A="Array"==t&&M.entries||L;if(A&&(k=s(A.call(new n)),d!==Object.prototype&&k.next&&(p||s(k)===d||(a?a(k,d):"function"!=typeof k[g]&&c(k,g,j)),i(k,$,!0,!0),p&&(f[$]=j))),h==b&&L&&L.name!==b&&(T=!0,P=function(){return L.call(this)}),p&&!x||M[g]===P||c(M,g,P),f[t]=P,h)if(S={values:_(b),keys:w?P:_(y),entries:_(v)},x)for(O in S)(m||T||!(O in M))&&u(M,O,S[O]);else r({target:t,proto:!0,forced:m||T},S);return S}},function(n,t,e){var r=e(0),o=e(32).f,s=e(2),a=e(33),i=e(13),c=e(55),u=e(59);n.exports=function(n,t){var e,l,p,f,h,d=n.target,m=n.global,g=n.stat;if(e=m?r:g?r[d]||i(d,{}):(r[d]||{}).prototype)for(l in t){if(f=t[l],p=n.noTargetGet?(h=o(e,l))&&h.value:e[l],!u(m?l:d+(g?".":"#")+l,n.forced)&&void 0!==p){if(typeof f==typeof p)continue;c(f,p)}(n.sham||p&&p.sham)&&s(f,"sham",!0),a(e,l,f,n)}}},function(n,t,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,s=o&&!r.call({1:2},1);t.f=s?function(n){var t=o(this,n);return!!t&&t.enumerable}:r},function(n,t,e){var r=e(1),o=e(56),s=e(32),a=e(6);n.exports=function(n,t){for(var e=o(t),i=a.f,c=s.f,u=0;u<e.length;u++){var l=e[u];r(n,l)||i(n,l,c(t,l))}}},function(n,t,e){var r=e(29),o=e(57),s=e(58),a=e(8);n.exports=r("Reflect","ownKeys")||function(n){var t=o.f(a(n)),e=s.f;return e?t.concat(e(n)):t}},function(n,t,e){var r=e(27),o=e(16).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(n){return r(n,o)}},function(n,t){t.f=Object.getOwnPropertySymbols},function(n,t,e){var r=e(3),o=/#|\.prototype\./,s=function(n,t){var e=i[a(n)];return e==u||e!=c&&("function"==typeof t?r(t):!!t)},a=s.normalize=function(n){return String(n).replace(o,".").toLowerCase()},i=s.data={},c=s.NATIVE="N",u=s.POLYFILL="P";n.exports=s},function(n,t,e){"use strict";var r=e(34).IteratorPrototype,o=e(26),s=e(14),a=e(36),i=e(18),c=function(){return this};n.exports=function(n,t,e){var u=t+" Iterator";return n.prototype=o(r,{next:s(1,e)}),a(n,u,!1,!0),i[u]=c,n}},function(n,t,e){var r=e(19);n.exports=function(n){return Object(r(n))}},function(n,t,e){var r=e(3);n.exports=!r((function(){function n(){}return n.prototype.constructor=null,Object.getPrototypeOf(new n)!==n.prototype}))},function(n,t,e){var r=e(8),o=e(64);n.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var n,t=!1,e={};try{(n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),t=e instanceof Array}catch(n){}return function(e,s){return r(e),o(s),t?n.call(e,s):e.__proto__=s,e}}():void 0)},function(n,t,e){var r=e(7);n.exports=function(n){if(!r(n)&&null!==n)throw TypeError("Can't set "+String(n)+" as a prototype");return n}},function(n,t,e){"use strict";e.r(t);var r={MODE:"production",NODE_ENV:"production",SSR:!1};e(10);function o(){}function s(n){return n()}function a(){return Object.create(null)}function i(n){n.forEach(s)}function c(n){return"function"==typeof n}function u(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}function l(n,t,e,r){return n[1]&&r?function(n,t){for(const e in t)n[e]=t[e];return n}(e.ctx.slice(),n[1](r(t))):e.ctx}function p(n,t,e,r,o,s,a){const i=function(n,t,e,r){if(n[2]&&r){const o=n[2](r(e));if(void 0===t.dirty)return o;if("object"==typeof o){const n=[],e=Math.max(t.dirty.length,o.length);for(let r=0;r<e;r+=1)n[r]=t.dirty[r]|o[r];return n}return t.dirty|o}return t.dirty}(t,r,o,s);if(i){const o=l(t,e,r,a);n.p(o,i)}}function f(n,t){n.appendChild(t)}function h(n,t,e){n.insertBefore(t,e||null)}function d(n){n.parentNode.removeChild(n)}function m(n){return document.createElement(n)}function g(n){return document.createTextNode(n)}function y(){return g(" ")}function b(n,t,e){null==e?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function v(n,t,e){n.classList[e?"add":"remove"](t)}class j{constructor(n=null){this.a=n,this.e=this.n=null}m(n,t,e=null){this.e||(this.e=m(t.nodeName),this.t=t,this.h(n)),this.i(e)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let t=0;t<this.n.length;t+=1)h(this.t,this.n[t],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(d)}}let w;function x(n){w=n}const k=[],S=[],O=[],_=[],$=Promise.resolve();let T=!1;function M(n){O.push(n)}let L=!1;const P=new Set;function A(){if(!L){L=!0;do{for(let n=0;n<k.length;n+=1){const t=k[n];x(t),E(t.$$)}for(x(null),k.length=0;S.length;)S.pop()();for(let n=0;n<O.length;n+=1){const t=O[n];P.has(t)||(P.add(t),t())}O.length=0}while(k.length);for(;_.length;)_.pop()();T=!1,L=!1,P.clear()}}function E(n){if(null!==n.fragment){n.update(),i(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(M)}}const I=new Set;function R(n,t){n&&n.i&&(I.delete(n),n.i(t))}function F(n,t,e,r){if(n&&n.o){if(I.has(n))return;I.add(n),undefined.c.push((()=>{I.delete(n),r&&(e&&n.d(1),r())})),n.o(t)}}function N(n,t){n.d(1),t.delete(n.key)}function D(n){n&&n.c()}function H(n,t,e){const{fragment:r,on_mount:o,on_destroy:a,after_update:u}=n.$$;r&&r.m(t,e),M((()=>{const t=o.map(s).filter(c);a?a.push(...t):i(t),n.$$.on_mount=[]})),u.forEach(M)}function C(n,t){const e=n.$$;null!==e.fragment&&(i(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function G(n,t){-1===n.$$.dirty[0]&&(k.push(n),T||(T=!0,$.then(A)),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function q(n,t,e,r,s,c,u=[-1]){const l=w;x(n);const p=t.props||{},f=n.$$={fragment:null,ctx:null,props:c,update:o,not_equal:s,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:a(),dirty:u,skip_bound:!1};let h=!1;if(f.ctx=e?e(n,p,((t,e,...r)=>{const o=r.length?r[0]:e;return f.ctx&&s(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),h&&G(n,t)),e})):[],f.update(),h=!0,i(f.before_update),f.fragment=!!r&&r(f.ctx),t.target){if(t.hydrate){const n=(m=t.target,Array.from(m.childNodes));f.fragment&&f.fragment.l(n),n.forEach(d)}else f.fragment&&f.fragment.c();t.intro&&R(n.$$.fragment),H(n,t.target,t.anchor),A()}var m;x(l)}class V{$destroy(){C(this,1),this.$destroy=o}$on(n,t){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(t),()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}$set(n){var t;this.$$set&&(t=n,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}function B(n,t,e){const r=n.slice();return r[2]=t[e],r}function W(n,t){let e,r,o,s,a,i=t[2].text+"";return{key:n,first:null,c(){e=m("a"),r=g(i),b(e,"href",o=t[2].href),b(e,"target",s=t[2].target),b(e,"rel",a=t[2].rel),v(e,"active",z(t[2].href)),this.first=e},m(n,t){h(n,e,t),f(e,r)},p(n,t){0&t&&v(e,"active",z(n[2].href))},d(n){n&&d(e)}}}function J(n){let t,e,r,o,s,a,i,c=[],u=new Map,g=Y;const v=n=>n[2].href;for(let t=0;t<g.length;t+=1){let e=B(n,g,t),r=v(e);u.set(r,c[t]=W(r,e))}const j=n[1].default,w=function(n,t,e,r){if(n){const o=l(n,t,e,r);return n[0](o)}}(j,n,n[0],null);return{c(){t=m("main"),e=m("center"),r=m("h1"),r.innerHTML="<code>snowpack-plugin-markdown</code>",o=y(),s=m("nav");for(let n=0;n<c.length;n+=1)c[n].c();a=y(),w&&w.c(),b(s,"class","tabs svelte-xylpso"),b(t,"class","container")},m(n,u){h(n,t,u),f(t,e),f(e,r),f(e,o),f(e,s);for(let n=0;n<c.length;n+=1)c[n].m(s,null);f(t,a),w&&w.m(t,null),i=!0},p(n,[t]){if(0&t){c=function(n,t,e,r,o,s,a,i,c,u,l,p){let f=n.length,h=s.length,d=f;const m={};for(;d--;)m[n[d].key]=d;const g=[],y=new Map,b=new Map;for(d=h;d--;){const n=p(o,s,d),i=e(n);let c=a.get(i);c?r&&c.p(n,t):(c=u(i,n),c.c()),y.set(i,g[d]=c),i in m&&b.set(i,Math.abs(d-m[i]))}const v=new Set,j=new Set;function w(n){R(n,1),n.m(i,l),a.set(n.key,n),l=n.first,h--}for(;f&&h;){const t=g[h-1],e=n[f-1],r=t.key,o=e.key;t===e?(l=t.first,f--,h--):y.has(o)?!a.has(r)||v.has(r)?w(t):j.has(o)?f--:b.get(r)>b.get(o)?(j.add(r),w(t)):(v.add(o),f--):(c(e,a),f--)}for(;f--;){const t=n[f];y.has(t.key)||c(t,a)}for(;h;)w(g[h-1]);return g}(c,t,v,1,n,Y,u,s,N,W,null,B)}w&&w.p&&1&t&&p(w,j,n,n[0],t,null,null)},i(n){i||(R(w,n),i=!0)},o(n){F(w,n),i=!1},d(n){n&&d(t);for(let n=0;n<c.length;n+=1)c[n].d();w&&w.d(n)}}}const Y=[{href:"#/",text:"README"},{href:"https://github.com/novacbn/snowpack-plugin-markdown",text:"GitHub",target:"_blank",rel:"noopener"}];function z(n){return n.startsWith("#")}function U(n,t,e){let{$$slots:r={},$$scope:o}=t;return n.$$set=n=>{"$$scope"in n&&e(0,o=n.$$scope)},[o,r]}var K=class extends V{constructor(n){super(),q(this,n,U,J,u,{})}};const X={"secret-message":"You found the parsed Frontmatter!"};function Q(n){let t,e,r,s,a,i,c,u,l;return{c(){e=y(),r=m("h2"),r.textContent="Parsed Frontmatter",s=y(),a=m("blockquote"),a.innerHTML="<b>NOTE:</b> Below Frontmatter was parsed from this README document",i=y(),c=m("div"),u=m("pre"),l=m("code"),l.textContent=`${JSON.stringify(X,null,4)}`,t=new j(e),b(u,"class","svelte-1nq5l93"),b(c,"class","card svelte-1nq5l93")},m(n,o){t.m('<blockquote>\n<p><strong>NOTE</strong>: This plugin comes preconfigured to parse JSON, TOML, and YAML Frontmatter!</p>\n</blockquote>\n<h2>Description</h2>\n<p>Simple Snowpack plugin for preprocessing Markdown files to HTML via rehype / remark</p>\n<h2>Sample</h2>\n<pre><code class="hljs language-javascript"><span\n  class="hljs-comment"\n>// Below, we\'re importing `remark`-based plugins that will give our</span>\n<span\n  class="hljs-comment"\n>// header text GitHub-style `id=""` slugs. And then automatically wrap them</span>\n<span class="hljs-comment">// in hoverable links</span>\n<span class="hljs-keyword">const</span> headings = <span class="hljs-built_in">require</span>(<span class="hljs-string">"remark-autolink-headings"</span>);\n<span class="hljs-keyword">const</span> slug = <span class="hljs-built_in">require</span>(<span class="hljs-string">"remark-slug"</span>);\n\n<span\n  class="hljs-comment"\n>// Next, we\'ll tell Snowpack to use the Markdown plugin and utilize</span>\n<span class="hljs-comment">// the `remark`-based plugins</span>\n<span class="hljs-built_in">module</span>.exports = {\n    <span class="hljs-attr">plugins</span>: [\n        [\n            <span class="hljs-string">"snowpack-plugin-markdown"</span>,\n            {\n                <span class="hljs-attr">remark</span>: [slug, headings],\n            },\n        ],\n    ],\n\n    <span\n  class="hljs-attr"\n>mount</span>: {\n        <span class="hljs-attr">public</span>: <span class="hljs-string">"/"</span>,\n        <span class="hljs-attr">src</span>: <span class="hljs-string">"/_dist_"</span>,\n    },\n};</code></pre>\n<h2><code>unified.js</code> Plugins</h2>\n<p>You can find plugins from the <a href="https://github.com/unifiedjs"><code>unified.js</code></a> ecosystem that can work with this Snowpack plugin:</p>\n<ul>\n<li><a\n  href="https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins"\n><code>remark</code> Plugins</a></li>\n<li><a\n  href="https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins"\n><code>rehype</code> Plugins</a></li>\n</ul>\n<h2>Options</h2>\n<pre><code class="hljs language-typescript"><span class="hljs-comment">/**\n * Represents the options passable to `snowpack-plugin-markdown`\n */</span>\n<span class="hljs-keyword">interface</span> IMarkdownPluginOptions <span class="hljs-keyword">extends</span> ICompileOptions {\n    <span class="hljs-comment">/**\n     * Represents the file extensions used for denote which files\n     * will be parsed by the plugin\n     */</span>\n    <span class="hljs-attr">extensions</span>: <span class="hljs-built_in">string</span>[];\n\n    <span class="hljs-comment">/**\n     * Represents options passable to `remark-rehype` for Markdown (MDAST) -> HTML (HAST) conversion\n     * See more information at: https://github.com/remarkjs/remark-rehype#api\n     */</span>\n    mdast2hast: IMDASTToHASTOptions;\n\n    <span class="hljs-comment">/**\n     * Represents options passable to `<span class="hljs-doctag">@starptech</span>/prettyhtml-hast-to-html` for HTML stringification\n     * See more information at: https://github.com/Prettyhtml/prettyhtml/tree/master/packages/prettyhtml-hast-to-html#api\n     */</span>\n    stringify: IHASTToHTMLOptions;\n\n    <span class="hljs-comment">/**\n     * Represents that options frontmatter types configured for parsing to `remark-frontmatter`\n     * See more information at: https://github.com/remarkjs/remark-frontmatter#api\n     */</span>\n    frontmatter: IFrontMatterOptions[];\n\n    <span class="hljs-comment">/**\n     * Represents `rehype`-based plugins to be configured with a `unified.Processor`\n     */</span>\n    rehype: IRehypePlugin[];\n\n    <span class="hljs-comment">/**\n     * Represents `remark`-based plugins to be configured with a `unified.Processor`\n     */</span>\n    remark: IRemarkPlugin[];\n}\n\n<span class="hljs-keyword">interface</span> IMDASTToHASTOptions {\n    <span class="hljs-comment">/**\n     * Represents whether the Compiler should drop raw HTML markup from\n     * the Markdown document\n     */</span>\n    <span class="hljs-attr">allowDangerousHtml</span>: <span class="hljs-built_in">boolean</span>;\n}\n\n<span class="hljs-keyword">interface</span> IHASTToHTMLOptions {\n    <span class="hljs-comment">/**\n     * When this property true the node is skipped for attribute collapsing.\n     */</span>\n    <span class="hljs-attr">ignore</span>: <span class="hljs-built_in">boolean</span>;\n\n    <span class="hljs-comment">/**\n     * When this property true the node is skipped for attribute collapsing.\n     */</span>\n    preserveAttrWrapping: <span class="hljs-built_in">boolean</span>;\n}\n\n<span class="hljs-keyword">interface</span> IFrontMatterOptions&lt;T = {[key: <span class="hljs-built_in">string</span>]: <span class="hljs-built_in">any</span>}> {\n    <span class="hljs-comment">/**\n     * Represents how the Frontmatter type should be identified as. Usually\n     * it should be the the shortname of your syntax type, e.g. json, yaml, etc...\n     */</span>\n    <span class="hljs-attr">type</span>: <span class="hljs-built_in">string</span>;\n\n    <span class="hljs-comment">/**\n     * Represents the character used to construct fences. By providing an object with open\n     * and close. different characters can be used for opening and closing fences. For example\n     * * the character \'-\' will result in \'---\' being used as the fence.\n     */</span>\n    marker: <span class="hljs-built_in">string</span> | {<span class="hljs-attr">open</span>: <span class="hljs-built_in">string</span>; close: <span class="hljs-built_in">string</span>};\n\n    <span class="hljs-comment">/**\n     * Represents the string used as the complete fence. By providing an object with open and\n     * close different values can be used for opening and closing fences. This can be used too\n     * if fences contain different characters or lengths other than 3\n     */</span>\n    fence: <span class="hljs-built_in">string</span> | {<span class="hljs-attr">open</span>: <span class="hljs-built_in">string</span>; close: <span class="hljs-built_in">string</span>};\n\n    <span class="hljs-comment">/**\n     * Represents if the Frontmatter can be anywhere in the Markdown document,\n     * or only at the top of the document\n     */</span>\n    anywhere: <span class="hljs-built_in">boolean</span>;\n\n    <span class="hljs-comment">/**\n     * Represents a callback to parse frontmatter identified string into a\n     * JSON-serializable Javascript data structure\n     */</span>\n    parser: <span class="hljs-function">(<span class="hljs-params"><span class="hljs-built_in">string</span>: <span class="hljs-built_in">string</span></span>) =></span> T;\n}</code></pre>\n<h2>Developer</h2>\n<h3>Installation</h3>\n<p>Open your terminal and install via <code>npm</code>:</p>\n<pre><code\n  class="hljs language-sh"\n>npm install git+https://github.com/novacbn/snowpack-plugin-markdown<span\n  class="hljs-comment"\n>#0.0.1 -D</span></code></pre>\n<p>Install current in-development code:</p>\n<pre><code\n  class="hljs language-sh"\n>npm install git+https://github.com/novacbn/snowpack-plugin-markdown -D</code></pre>',n,o),h(n,e,o),h(n,r,o),h(n,s,o),h(n,a,o),h(n,i,o),h(n,c,o),f(c,u),f(u,l)},p:o,i:o,o:o,d(n){n&&t.d(),n&&d(e),n&&d(r),n&&d(s),n&&d(a),n&&d(i),n&&d(c)}}}var Z=class extends V{constructor(n){super(),q(this,n,null,Q,u,{})}};function nn(n){let t,e;return t=new Z({}),{c(){D(t.$$.fragment)},m(n,r){H(t,n,r),e=!0},i(n){e||(R(t.$$.fragment,n),e=!0)},o(n){F(t.$$.fragment,n),e=!1},d(n){C(t,n)}}}function tn(n){let t,e;return t=new K({props:{$$slots:{default:[nn]},$$scope:{ctx:n}}}),{c(){D(t.$$.fragment)},m(n,r){H(t,n,r),e=!0},p(n,[e]){const r={};1&e&&(r.$$scope={dirty:e,ctx:n}),t.$set(r)},i(n){e||(R(t.$$.fragment,n),e=!0)},o(n){F(t.$$.fragment,n),e=!1},d(n){C(t,n)}}}var en=class extends V{constructor(n){super(),q(this,n,null,tn,u,{})}};function rn(n){const t=e.p;let r="";return(!t||t.indexOf("://")<0)&&(r+=window.location.protocol+"//"+window.location.host),r+=t||"/",r+n}({url:rn("_dist_/index.js"),env:r}).env=r,window._application=new en({target:document.body}),{url:rn("_dist_/index.js"),env:r}.hot&&({url:rn("_dist_/index.js"),env:r}.hot.accept(),{url:rn("_dist_/index.js"),env:r}.hot.dispose((()=>{window._application.$destroy()})))}],[[65,1]]]);