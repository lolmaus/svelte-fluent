import{S as C,i as G,s as J,k as d,l as p,m as y,h as _,n as h,b as A,g as N,v as F,f as X,d as I,Q as te,a as P,c as S,J as m,y as H,z as O,A as R,B as z,q as w,r as j,u as B,H as q,P as Y,K as se,p as le,M as ae,N as re,O as ne}from"../chunks/index.94c7d07e.js";import{p as Z}from"../chunks/stores.a6887c90.js";function U(o,e,t){const s=o.slice();return s[1]=e[t].text,s[2]=e[t].href,s[3]=e[t].submenu,s}function ce(o){let e=o[1]+"",t;return{c(){t=w(e)},l(s){t=j(s,e)},m(s,l){A(s,t,l)},p(s,l){l&1&&e!==(e=s[1]+"")&&B(t,e)},d(s){s&&_(t)}}}function ie(o){let e,t=o[1]+"",s,l;return{c(){e=d("a"),s=w(t),this.h()},l(i){e=p(i,"A",{href:!0,class:!0});var r=y(e);s=j(r,t),r.forEach(_),this.h()},h(){h(e,"href",l=o[2]),h(e,"class","svelte-10yuc2m")},m(i,r){A(i,e,r),m(e,s)},p(i,r){r&1&&t!==(t=i[1]+"")&&B(s,t),r&1&&l!==(l=i[2])&&h(e,"href",l)},d(i){i&&_(e)}}}function W(o){let e,t;return e=new ee({props:{items:o[3]}}),{c(){H(e.$$.fragment)},l(s){O(e.$$.fragment,s)},m(s,l){R(e,s,l),t=!0},p(s,l){const i={};l&1&&(i.items=s[3]),e.$set(i)},i(s){t||(N(e.$$.fragment,s),t=!0)},o(s){I(e.$$.fragment,s),t=!1},d(s){z(e,s)}}}function x(o){let e,t,s,l,i;function r(u,f){return u[2]&&!u[3]?ie:ce}let n=r(o),a=n(o),c=o[3]&&W(o);return{c(){e=d("li"),t=d("span"),a.c(),s=P(),c&&c.c(),l=P(),this.h()},l(u){e=p(u,"LI",{class:!0});var f=y(e);t=p(f,"SPAN",{class:!0});var v=y(t);a.l(v),v.forEach(_),s=S(f),c&&c.l(f),l=S(f),f.forEach(_),this.h()},h(){h(t,"class","item svelte-10yuc2m"),h(e,"class","svelte-10yuc2m")},m(u,f){A(u,e,f),m(e,t),a.m(t,null),m(e,s),c&&c.m(e,null),m(e,l),i=!0},p(u,f){n===(n=r(u))&&a?a.p(u,f):(a.d(1),a=n(u),a&&(a.c(),a.m(t,null))),u[3]?c?(c.p(u,f),f&1&&N(c,1)):(c=W(u),c.c(),N(c,1),c.m(e,l)):c&&(F(),I(c,1,1,()=>{c=null}),X())},i(u){i||(N(c),i=!0)},o(u){I(c),i=!1},d(u){u&&_(e),a.d(),c&&c.d()}}}function oe(o){let e,t,s=o[0],l=[];for(let r=0;r<s.length;r+=1)l[r]=x(U(o,s,r));const i=r=>I(l[r],1,1,()=>{l[r]=null});return{c(){e=d("ul");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=p(r,"UL",{class:!0});var n=y(e);for(let a=0;a<l.length;a+=1)l[a].l(n);n.forEach(_),this.h()},h(){h(e,"class","svelte-10yuc2m")},m(r,n){A(r,e,n);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null);t=!0},p(r,[n]){if(n&1){s=r[0];let a;for(a=0;a<s.length;a+=1){const c=U(r,s,a);l[a]?(l[a].p(c,n),N(l[a],1)):(l[a]=x(c),l[a].c(),N(l[a],1),l[a].m(e,null))}for(F(),a=s.length;a<l.length;a+=1)i(a);X()}},i(r){if(!t){for(let n=0;n<s.length;n+=1)N(l[n]);t=!0}},o(r){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)I(l[n]);t=!1},d(r){r&&_(e),te(l,r)}}}function ue(o,e,t){let{items:s}=e;return o.$$set=l=>{"items"in l&&t(0,s=l.items)},[s]}class ee extends C{constructor(e){super(),G(this,e,ue,oe,J,{items:0})}}function fe(o){let e;return{c(){e=d("div"),this.h()},l(t){e=p(t,"DIV",{class:!0}),y(e).forEach(_),this.h()},h(){h(e,"class","svelte-1agryny")},m(t,s){A(t,e,s)},p:q,d(t){t&&_(e)}}}function _e(o){var u;let e,t,s,l,i,r,n=((u=o[1])==null?void 0:u.text)+"",a,c;return{c(){e=d("a"),t=d("span"),s=d("strong"),l=w("Previous page"),i=P(),r=d("span"),a=w(n),this.h()},l(f){e=p(f,"A",{class:!0,href:!0});var v=y(e);t=p(v,"SPAN",{class:!0});var b=y(t);s=p(b,"STRONG",{class:!0});var k=y(s);l=j(k,"Previous page"),k.forEach(_),b.forEach(_),i=S(v),r=p(v,"SPAN",{class:!0});var V=y(r);a=j(V,n),V.forEach(_),v.forEach(_),this.h()},h(){var f;h(s,"class","svelte-1agryny"),h(t,"class","desc svelte-1agryny"),h(r,"class","text svelte-1agryny"),h(e,"class","prev svelte-1agryny"),h(e,"href",c=(f=o[1])==null?void 0:f.href)},m(f,v){A(f,e,v),m(e,t),m(t,s),m(s,l),m(e,i),m(e,r),m(r,a)},p(f,v){var b,k;v&2&&n!==(n=((b=f[1])==null?void 0:b.text)+"")&&B(a,n),v&2&&c!==(c=(k=f[1])==null?void 0:k.href)&&h(e,"href",c)},d(f){f&&_(e)}}}function he(o){let e;return{c(){e=d("div"),this.h()},l(t){e=p(t,"DIV",{class:!0}),y(e).forEach(_),this.h()},h(){h(e,"class","svelte-1agryny")},m(t,s){A(t,e,s)},p:q,d(t){t&&_(e)}}}function me(o){var c;let e,t,s,l,i,r=((c=o[0])==null?void 0:c.text)+"",n,a;return{c(){e=d("a"),t=d("span"),s=w("Next page"),l=P(),i=d("span"),n=w(r),this.h()},l(u){e=p(u,"A",{class:!0,href:!0});var f=y(e);t=p(f,"SPAN",{class:!0});var v=y(t);s=j(v,"Next page"),v.forEach(_),l=S(f),i=p(f,"SPAN",{class:!0});var b=y(i);n=j(b,r),b.forEach(_),f.forEach(_),this.h()},h(){var u;h(t,"class","desc svelte-1agryny"),h(i,"class","text svelte-1agryny"),h(e,"class","next svelte-1agryny"),h(e,"href",a=(u=o[0])==null?void 0:u.href)},m(u,f){A(u,e,f),m(e,t),m(t,s),m(e,l),m(e,i),m(i,n)},p(u,f){var v,b;f&1&&r!==(r=((v=u[0])==null?void 0:v.text)+"")&&B(n,r),f&1&&a!==(a=(b=u[0])==null?void 0:b.href)&&h(e,"href",a)},d(u){u&&_(e)}}}function ve(o){let e,t;function s(c,u){return c[1]?_e:fe}let l=s(o),i=l(o);function r(c,u){return c[0]?me:he}let n=r(o),a=n(o);return{c(){e=d("div"),i.c(),t=P(),a.c(),this.h()},l(c){e=p(c,"DIV",{class:!0});var u=y(e);i.l(u),t=S(u),a.l(u),u.forEach(_),this.h()},h(){h(e,"class","prev-next svelte-1agryny")},m(c,u){A(c,e,u),i.m(e,null),m(e,t),a.m(e,null)},p(c,[u]){l===(l=s(c))&&i?i.p(c,u):(i.d(1),i=l(c),i&&(i.c(),i.m(e,t))),n===(n=r(c))&&a?a.p(c,u):(a.d(1),a=n(c),a&&(a.c(),a.m(e,null)))},i:q,o:q,d(c){c&&_(e),i.d(),a.d()}}}function de(o,e,t){let s,l,i,r;Y(o,Z,a=>t(4,r=a));let{menu:n}=e;return o.$$set=a=>{"menu"in a&&t(2,n=a.menu)},o.$$.update=()=>{o.$$.dirty&20&&t(3,s=n.findIndex(a=>r.url.pathname.startsWith(a.href))),o.$$.dirty&12&&t(1,l=s>0?n[s-1]:null),o.$$.dirty&12&&t(0,i=n.length>s+1?n[s+1]:null)},[i,l,n,s,r]}class pe extends C{constructor(e){super(),G(this,e,de,ve,J,{menu:2})}}function ge(o){let e,t,s,l,i,r,n,a,c,u,f,v,b,k;l=new ee({props:{items:o[0].data.menu}});const V=o[2].default,$=se(V,o,o[1],null);return b=new pe({props:{menu:o[0].data.menu}}),{c(){e=d("div"),t=d("div"),s=d("nav"),H(l.$$.fragment),i=P(),r=d("div"),n=d("div"),a=d("main"),$&&$.c(),c=P(),u=d("hr"),f=P(),v=d("nav"),H(b.$$.fragment),this.h()},l(g){e=p(g,"DIV",{class:!0});var E=y(e);t=p(E,"DIV",{class:!0});var M=y(t);s=p(M,"NAV",{"aria-label":!0,class:!0});var L=y(s);O(l.$$.fragment,L),L.forEach(_),M.forEach(_),i=S(E),r=p(E,"DIV",{class:!0});var K=y(r);n=p(K,"DIV",{class:!0});var D=y(n);a=p(D,"MAIN",{class:!0});var Q=y(a);$&&$.l(Q),Q.forEach(_),c=S(D),u=p(D,"HR",{class:!0}),f=S(D),v=p(D,"NAV",{class:!0});var T=y(v);O(b.$$.fragment,T),T.forEach(_),D.forEach(_),K.forEach(_),E.forEach(_),this.h()},h(){h(s,"aria-label","Docs"),h(s,"class","svelte-1jxh5k7"),h(t,"class","sidebar svelte-1jxh5k7"),h(a,"class","stack svelte-1jxh5k7"),h(u,"class","svelte-1jxh5k7"),h(v,"class","svelte-1jxh5k7"),h(n,"class","stack center with-gutters"),h(r,"class","content"),h(e,"class","docs with-sidebar wrap-reverse"),le(e,"--gap","var(--s5) var(--space)")},m(g,E){A(g,e,E),m(e,t),m(t,s),R(l,s,null),m(e,i),m(e,r),m(r,n),m(n,a),$&&$.m(a,null),m(n,c),m(n,u),m(n,f),m(n,v),R(b,v,null),k=!0},p(g,[E]){const M={};E&1&&(M.items=g[0].data.menu),l.$set(M),$&&$.p&&(!k||E&2)&&ae($,V,g,g[1],k?ne(V,g[1],E,null):re(g[1]),null);const L={};E&1&&(L.menu=g[0].data.menu),b.$set(L)},i(g){k||(N(l.$$.fragment,g),N($,g),N(b.$$.fragment,g),k=!0)},o(g){I(l.$$.fragment,g),I($,g),I(b.$$.fragment,g),k=!1},d(g){g&&_(e),z(l),$&&$.d(g),z(b)}}}function ye(o,e,t){let s;Y(o,Z,r=>t(0,s=r));let{$$slots:l={},$$scope:i}=e;return o.$$set=r=>{"$$scope"in r&&t(1,i=r.$$scope)},[s,i,l]}class ke extends C{constructor(e){super(),G(this,e,ye,ge,J,{})}}export{ke as default};
