import{h as ae}from"../chunks/_page.svelte.4db732e0.js";import{h as ne}from"../chunks/_page.svelte.738497ff.js";import{h as ie}from"../chunks/_page.svelte.da7cef57.js";import{b as T}from"../chunks/paths.26636d67.js";import{s as z,f as v,g,h as b,d as _,j as h,i as A,I as ce,a as I,c as S,A as d,l as M,m as w,n as C,y as x,G as Z,J as ee,B as oe,k as ue,D as fe,E as he,F as _e}from"../chunks/scheduler.1edb13c4.js";import{S as F,i as G,a as E,g as te,c as se,t as N,b as H,d as O,m as W,e as q}from"../chunks/index.6194150d.js";import{p as le}from"../chunks/stores.6cedb1ef.js";import{e as Q}from"../chunks/Overlay.svelte_svelte_type_style_lang.6564828b.js";function B(i,e,t){const s=e.find(l=>l.rank===t);return{text:(s==null?void 0:s.text)??"",href:i,submenu:de(i,e,t+1)}}function de(i,e,t){return e.filter(s=>s.rank===t).map(s=>({text:s.text,href:`${i}#${s.id}`}))}const me=async i=>{var s;const e=[B(T+"/docs/getting-started",ae,1),B(T+"/docs/tutorial",ne,1),B(T+"/docs/reference",ie,1)],t=((s=e.find(l=>l.href&&i.url.pathname.startsWith(l.href)))==null?void 0:s.text)??"Documentation";return{menu:e,seo:{title:t,description:t}}},Te=Object.freeze(Object.defineProperty({__proto__:null,load:me},Symbol.toStringTag,{value:"Module"}));function R(i,e,t){const s=i.slice();return s[1]=e[t].text,s[2]=e[t].href,s[3]=e[t].submenu,s}function pe(i){let e=i[1]+"",t;return{c(){t=M(e)},l(s){t=w(s,e)},m(s,l){A(s,t,l)},p(s,l){l&1&&e!==(e=s[1]+"")&&C(t,e)},d(s){s&&_(t)}}}function ve(i){let e,t=i[1]+"",s,l;return{c(){e=v("a"),s=M(t),this.h()},l(c){e=g(c,"A",{href:!0,class:!0});var a=b(e);s=w(a,t),a.forEach(_),this.h()},h(){h(e,"href",l=i[2]),h(e,"class","svelte-10yuc2m")},m(c,a){A(c,e,a),d(e,s)},p(c,a){a&1&&t!==(t=c[1]+"")&&C(s,t),a&1&&l!==(l=c[2])&&h(e,"href",l)},d(c){c&&_(e)}}}function X(i){let e,t;return e=new re({props:{items:i[3]}}),{c(){H(e.$$.fragment)},l(s){O(e.$$.fragment,s)},m(s,l){W(e,s,l),t=!0},p(s,l){const c={};l&1&&(c.items=s[3]),e.$set(c)},i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){N(e.$$.fragment,s),t=!1},d(s){q(e,s)}}}function Y(i){let e,t,s,l,c;function a(n,f){return n[2]&&!n[3]?ve:pe}let o=a(i),r=o(i),u=i[3]&&X(i);return{c(){e=v("li"),t=v("span"),r.c(),s=I(),u&&u.c(),l=I(),this.h()},l(n){e=g(n,"LI",{class:!0});var f=b(e);t=g(f,"SPAN",{class:!0});var m=b(t);r.l(m),m.forEach(_),s=S(f),u&&u.l(f),l=S(f),f.forEach(_),this.h()},h(){h(t,"class","item svelte-10yuc2m"),h(e,"class","svelte-10yuc2m")},m(n,f){A(n,e,f),d(e,t),r.m(t,null),d(e,s),u&&u.m(e,null),d(e,l),c=!0},p(n,f){o===(o=a(n))&&r?r.p(n,f):(r.d(1),r=o(n),r&&(r.c(),r.m(t,null))),n[3]?u?(u.p(n,f),f&1&&E(u,1)):(u=X(n),u.c(),E(u,1),u.m(e,l)):u&&(te(),N(u,1,1,()=>{u=null}),se())},i(n){c||(E(u),c=!0)},o(n){N(u),c=!1},d(n){n&&_(e),r.d(),u&&u.d()}}}function ge(i){let e,t,s=Q(i[0]),l=[];for(let a=0;a<s.length;a+=1)l[a]=Y(R(i,s,a));const c=a=>N(l[a],1,1,()=>{l[a]=null});return{c(){e=v("ul");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=g(a,"UL",{class:!0});var o=b(e);for(let r=0;r<l.length;r+=1)l[r].l(o);o.forEach(_),this.h()},h(){h(e,"class","svelte-10yuc2m")},m(a,o){A(a,e,o);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(e,null);t=!0},p(a,[o]){if(o&1){s=Q(a[0]);let r;for(r=0;r<s.length;r+=1){const u=R(a,s,r);l[r]?(l[r].p(u,o),E(l[r],1)):(l[r]=Y(u),l[r].c(),E(l[r],1),l[r].m(e,null))}for(te(),r=s.length;r<l.length;r+=1)c(r);se()}},i(a){if(!t){for(let o=0;o<s.length;o+=1)E(l[o]);t=!0}},o(a){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)N(l[o]);t=!1},d(a){a&&_(e),ce(l,a)}}}function be(i,e,t){let{items:s}=e;return i.$$set=l=>{"items"in l&&t(0,s=l.items)},[s]}class re extends F{constructor(e){super(),G(this,e,be,ge,z,{items:0})}}function $e(i){let e;return{c(){e=v("div"),this.h()},l(t){e=g(t,"DIV",{class:!0}),b(e).forEach(_),this.h()},h(){h(e,"class","svelte-3ugd59")},m(t,s){A(t,e,s)},p:x,d(t){t&&_(e)}}}function ke(i){var u;let e,t,s='<strong class="svelte-3ugd59">Previous page</strong>',l,c,a=((u=i[1])==null?void 0:u.text)+"",o,r;return{c(){e=v("a"),t=v("span"),t.innerHTML=s,l=I(),c=v("span"),o=M(a),this.h()},l(n){e=g(n,"A",{class:!0,href:!0});var f=b(e);t=g(f,"SPAN",{class:!0,["data-svelte-h"]:!0}),ee(t)!=="svelte-1riu517"&&(t.innerHTML=s),l=S(f),c=g(f,"SPAN",{class:!0});var m=b(c);o=w(m,a),m.forEach(_),f.forEach(_),this.h()},h(){var n;h(t,"class","desc svelte-3ugd59"),h(c,"class","text svelte-3ugd59"),h(e,"class","prev svelte-3ugd59"),h(e,"href",r=(n=i[1])==null?void 0:n.href)},m(n,f){A(n,e,f),d(e,t),d(e,l),d(e,c),d(c,o)},p(n,f){var m,$;f&2&&a!==(a=((m=n[1])==null?void 0:m.text)+"")&&C(o,a),f&2&&r!==(r=($=n[1])==null?void 0:$.href)&&h(e,"href",r)},d(n){n&&_(e)}}}function ye(i){let e;return{c(){e=v("div"),this.h()},l(t){e=g(t,"DIV",{class:!0}),b(e).forEach(_),this.h()},h(){h(e,"class","svelte-3ugd59")},m(t,s){A(t,e,s)},p:x,d(t){t&&_(e)}}}function Ee(i){var u;let e,t,s="Next page",l,c,a=((u=i[0])==null?void 0:u.text)+"",o,r;return{c(){e=v("a"),t=v("span"),t.textContent=s,l=I(),c=v("span"),o=M(a),this.h()},l(n){e=g(n,"A",{class:!0,href:!0});var f=b(e);t=g(f,"SPAN",{class:!0,["data-svelte-h"]:!0}),ee(t)!=="svelte-o9ev86"&&(t.textContent=s),l=S(f),c=g(f,"SPAN",{class:!0});var m=b(c);o=w(m,a),m.forEach(_),f.forEach(_),this.h()},h(){var n;h(t,"class","desc svelte-3ugd59"),h(c,"class","text svelte-3ugd59"),h(e,"class","next svelte-3ugd59"),h(e,"href",r=(n=i[0])==null?void 0:n.href)},m(n,f){A(n,e,f),d(e,t),d(e,l),d(e,c),d(c,o)},p(n,f){var m,$;f&1&&a!==(a=((m=n[0])==null?void 0:m.text)+"")&&C(o,a),f&1&&r!==(r=($=n[0])==null?void 0:$.href)&&h(e,"href",r)},d(n){n&&_(e)}}}function Ae(i){let e,t;function s(u,n){return u[1]?ke:$e}let l=s(i),c=l(i);function a(u,n){return u[0]?Ee:ye}let o=a(i),r=o(i);return{c(){e=v("div"),c.c(),t=I(),r.c(),this.h()},l(u){e=g(u,"DIV",{class:!0});var n=b(e);c.l(n),t=S(n),r.l(n),n.forEach(_),this.h()},h(){h(e,"class","prev-next svelte-3ugd59")},m(u,n){A(u,e,n),c.m(e,null),d(e,t),r.m(e,null)},p(u,[n]){l===(l=s(u))&&c?c.p(u,n):(c.d(1),c=l(u),c&&(c.c(),c.m(e,t))),o===(o=a(u))&&r?r.p(u,n):(r.d(1),r=o(u),r&&(r.c(),r.m(e,null)))},i:x,o:x,d(u){u&&_(e),c.d(),r.d()}}}function Ie(i,e,t){let s,l,c,a;Z(i,le,r=>t(4,a=r));let{menu:o}=e;return i.$$set=r=>{"menu"in r&&t(2,o=r.menu)},i.$$.update=()=>{i.$$.dirty&20&&t(3,s=o.findIndex(r=>a.url.pathname.startsWith(r.href))),i.$$.dirty&12&&t(1,l=s>0?o[s-1]:null),i.$$.dirty&12&&t(0,c=o.length>s+1?o[s+1]:null)},[c,l,o,s,a]}class Se extends F{constructor(e){super(),G(this,e,Ie,Ae,z,{menu:2})}}function Ne(i){let e,t,s,l,c,a,o,r,u,n,f,m,$,D;l=new re({props:{items:i[0].data.menu}});const L=i[2].default,k=oe(L,i,i[1],null);return $=new Se({props:{menu:i[0].data.menu}}),{c(){e=v("div"),t=v("div"),s=v("nav"),H(l.$$.fragment),c=I(),a=v("div"),o=v("div"),r=v("main"),k&&k.c(),u=I(),n=v("hr"),f=I(),m=v("nav"),H($.$$.fragment),this.h()},l(p){e=g(p,"DIV",{class:!0});var y=b(e);t=g(y,"DIV",{class:!0});var V=b(t);s=g(V,"NAV",{"aria-label":!0,class:!0});var j=b(s);O(l.$$.fragment,j),j.forEach(_),V.forEach(_),c=S(y),a=g(y,"DIV",{class:!0});var J=b(a);o=g(J,"DIV",{class:!0});var P=b(o);r=g(P,"MAIN",{class:!0});var U=b(r);k&&k.l(U),U.forEach(_),u=S(P),n=g(P,"HR",{class:!0}),f=S(P),m=g(P,"NAV",{class:!0});var K=b(m);O($.$$.fragment,K),K.forEach(_),P.forEach(_),J.forEach(_),y.forEach(_),this.h()},h(){h(s,"aria-label","Docs"),h(s,"class","svelte-1jxh5k7"),h(t,"class","sidebar svelte-1jxh5k7"),h(r,"class","stack svelte-1jxh5k7"),h(n,"class","svelte-1jxh5k7"),h(m,"class","svelte-1jxh5k7"),h(o,"class","stack center with-gutters"),h(a,"class","content"),h(e,"class","docs with-sidebar wrap-reverse"),ue(e,"--gap","var(--s5) var(--space)")},m(p,y){A(p,e,y),d(e,t),d(t,s),W(l,s,null),d(e,c),d(e,a),d(a,o),d(o,r),k&&k.m(r,null),d(o,u),d(o,n),d(o,f),d(o,m),W($,m,null),D=!0},p(p,[y]){const V={};y&1&&(V.items=p[0].data.menu),l.$set(V),k&&k.p&&(!D||y&2)&&fe(k,L,p,p[1],D?_e(L,p[1],y,null):he(p[1]),null);const j={};y&1&&(j.menu=p[0].data.menu),$.$set(j)},i(p){D||(E(l.$$.fragment,p),E(k,p),E($.$$.fragment,p),D=!0)},o(p){N(l.$$.fragment,p),N(k,p),N($.$$.fragment,p),D=!1},d(p){p&&_(e),q(l),k&&k.d(p),q($)}}}function De(i,e,t){let s;Z(i,le,a=>t(0,s=a));let{$$slots:l={},$$scope:c}=e;return i.$$set=a=>{"$$scope"in a&&t(1,c=a.$$scope)},[s,c,l]}class Be extends F{constructor(e){super(),G(this,e,De,Ne,z,{})}}export{Be as component,Te as universal};
