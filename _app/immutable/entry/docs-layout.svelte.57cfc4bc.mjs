import{S as z,b as B,s as F,m as v,p,q as b,k as _,u as h,f as A,j as N,z as K,h as X,g as I,W as te,c as P,d as S,M as d,C,D as T,E as W,F as x,w,x as j,y as q,n as R,T as Y,N as se,v as le,P as ae,Q as re,R as ne}from"../chunks/index.2dafc823.mjs";import{p as Z}from"../chunks/stores.cee9e844.mjs";function Q(i,e,t){const s=i.slice();return s[1]=e[t].text,s[2]=e[t].href,s[3]=e[t].submenu,s}function ce(i){let e=i[1]+"",t;return{c(){t=w(e)},l(s){t=j(s,e)},m(s,l){A(s,t,l)},p(s,l){l&1&&e!==(e=s[1]+"")&&q(t,e)},d(s){s&&_(t)}}}function ue(i){let e,t=i[1]+"",s,l;return{c(){e=v("a"),s=w(t),this.h()},l(u){e=p(u,"A",{href:!0,class:!0});var r=b(e);s=j(r,t),r.forEach(_),this.h()},h(){h(e,"href",l=i[2]),h(e,"class","svelte-10yuc2m")},m(u,r){A(u,e,r),d(e,s)},p(u,r){r&1&&t!==(t=u[1]+"")&&q(s,t),r&1&&l!==(l=u[2])&&h(e,"href",l)},d(u){u&&_(e)}}}function U(i){let e,t;return e=new ee({props:{items:i[3]}}),{c(){C(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,l){W(e,s,l),t=!0},p(s,l){const u={};l&1&&(u.items=s[3]),e.$set(u)},i(s){t||(N(e.$$.fragment,s),t=!0)},o(s){I(e.$$.fragment,s),t=!1},d(s){x(e,s)}}}function J(i){let e,t,s,l,u;function r(o,f){return o[2]&&!o[3]?ue:ce}let n=r(i),a=n(i),c=i[3]&&U(i);return{c(){e=v("li"),t=v("span"),a.c(),s=P(),c&&c.c(),l=P(),this.h()},l(o){e=p(o,"LI",{class:!0});var f=b(e);t=p(f,"SPAN",{class:!0});var m=b(t);a.l(m),m.forEach(_),s=S(f),c&&c.l(f),l=S(f),f.forEach(_),this.h()},h(){h(t,"class","item svelte-10yuc2m"),h(e,"class","svelte-10yuc2m")},m(o,f){A(o,e,f),d(e,t),a.m(t,null),d(e,s),c&&c.m(e,null),d(e,l),u=!0},p(o,f){n===(n=r(o))&&a?a.p(o,f):(a.d(1),a=n(o),a&&(a.c(),a.m(t,null))),o[3]?c?(c.p(o,f),f&1&&N(c,1)):(c=U(o),c.c(),N(c,1),c.m(e,l)):c&&(K(),I(c,1,1,()=>{c=null}),X())},i(o){u||(N(c),u=!0)},o(o){I(c),u=!1},d(o){o&&_(e),a.d(),c&&c.d()}}}function ie(i){let e,t,s=i[0],l=[];for(let r=0;r<s.length;r+=1)l[r]=J(Q(i,s,r));const u=r=>I(l[r],1,1,()=>{l[r]=null});return{c(){e=v("ul");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=p(r,"UL",{class:!0});var n=b(e);for(let a=0;a<l.length;a+=1)l[a].l(n);n.forEach(_),this.h()},h(){h(e,"class","svelte-10yuc2m")},m(r,n){A(r,e,n);for(let a=0;a<l.length;a+=1)l[a].m(e,null);t=!0},p(r,[n]){if(n&1){s=r[0];let a;for(a=0;a<s.length;a+=1){const c=Q(r,s,a);l[a]?(l[a].p(c,n),N(l[a],1)):(l[a]=J(c),l[a].c(),N(l[a],1),l[a].m(e,null))}for(K(),a=s.length;a<l.length;a+=1)u(a);X()}},i(r){if(!t){for(let n=0;n<s.length;n+=1)N(l[n]);t=!0}},o(r){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)I(l[n]);t=!1},d(r){r&&_(e),te(l,r)}}}function oe(i,e,t){let{items:s}=e;return i.$$set=l=>{"items"in l&&t(0,s=l.items)},[s]}class ee extends z{constructor(e){super(),B(this,e,oe,ie,F,{items:0})}}function fe(i){let e;return{c(){e=v("div"),this.h()},l(t){e=p(t,"DIV",{class:!0}),b(e).forEach(_),this.h()},h(){h(e,"class","svelte-3ugd59")},m(t,s){A(t,e,s)},p:R,d(t){t&&_(e)}}}function _e(i){var o;let e,t,s,l,u,r,n=((o=i[1])==null?void 0:o.text)+"",a,c;return{c(){e=v("a"),t=v("span"),s=v("strong"),l=w("Previous page"),u=P(),r=v("span"),a=w(n),this.h()},l(f){e=p(f,"A",{class:!0,href:!0});var m=b(e);t=p(m,"SPAN",{class:!0});var $=b(t);s=p($,"STRONG",{class:!0});var E=b(s);l=j(E,"Previous page"),E.forEach(_),$.forEach(_),u=S(m),r=p(m,"SPAN",{class:!0});var D=b(r);a=j(D,n),D.forEach(_),m.forEach(_),this.h()},h(){var f;h(s,"class","svelte-3ugd59"),h(t,"class","desc svelte-3ugd59"),h(r,"class","text svelte-3ugd59"),h(e,"class","prev svelte-3ugd59"),h(e,"href",c=(f=i[1])==null?void 0:f.href)},m(f,m){A(f,e,m),d(e,t),d(t,s),d(s,l),d(e,u),d(e,r),d(r,a)},p(f,m){var $,E;m&2&&n!==(n=(($=f[1])==null?void 0:$.text)+"")&&q(a,n),m&2&&c!==(c=(E=f[1])==null?void 0:E.href)&&h(e,"href",c)},d(f){f&&_(e)}}}function he(i){let e;return{c(){e=v("div"),this.h()},l(t){e=p(t,"DIV",{class:!0}),b(e).forEach(_),this.h()},h(){h(e,"class","svelte-3ugd59")},m(t,s){A(t,e,s)},p:R,d(t){t&&_(e)}}}function de(i){var c;let e,t,s,l,u,r=((c=i[0])==null?void 0:c.text)+"",n,a;return{c(){e=v("a"),t=v("span"),s=w("Next page"),l=P(),u=v("span"),n=w(r),this.h()},l(o){e=p(o,"A",{class:!0,href:!0});var f=b(e);t=p(f,"SPAN",{class:!0});var m=b(t);s=j(m,"Next page"),m.forEach(_),l=S(f),u=p(f,"SPAN",{class:!0});var $=b(u);n=j($,r),$.forEach(_),f.forEach(_),this.h()},h(){var o;h(t,"class","desc svelte-3ugd59"),h(u,"class","text svelte-3ugd59"),h(e,"class","next svelte-3ugd59"),h(e,"href",a=(o=i[0])==null?void 0:o.href)},m(o,f){A(o,e,f),d(e,t),d(t,s),d(e,l),d(e,u),d(u,n)},p(o,f){var m,$;f&1&&r!==(r=((m=o[0])==null?void 0:m.text)+"")&&q(n,r),f&1&&a!==(a=($=o[0])==null?void 0:$.href)&&h(e,"href",a)},d(o){o&&_(e)}}}function me(i){let e,t;function s(c,o){return c[1]?_e:fe}let l=s(i),u=l(i);function r(c,o){return c[0]?de:he}let n=r(i),a=n(i);return{c(){e=v("div"),u.c(),t=P(),a.c(),this.h()},l(c){e=p(c,"DIV",{class:!0});var o=b(e);u.l(o),t=S(o),a.l(o),o.forEach(_),this.h()},h(){h(e,"class","prev-next svelte-3ugd59")},m(c,o){A(c,e,o),u.m(e,null),d(e,t),a.m(e,null)},p(c,[o]){l===(l=s(c))&&u?u.p(c,o):(u.d(1),u=l(c),u&&(u.c(),u.m(e,t))),n===(n=r(c))&&a?a.p(c,o):(a.d(1),a=n(c),a&&(a.c(),a.m(e,null)))},i:R,o:R,d(c){c&&_(e),u.d(),a.d()}}}function ve(i,e,t){let s,l,u,r;Y(i,Z,a=>t(4,r=a));let{menu:n}=e;return i.$$set=a=>{"menu"in a&&t(2,n=a.menu)},i.$$.update=()=>{i.$$.dirty&20&&t(3,s=n.findIndex(a=>r.url.pathname.startsWith(a.href))),i.$$.dirty&12&&t(1,l=s>0?n[s-1]:null),i.$$.dirty&12&&t(0,u=n.length>s+1?n[s+1]:null)},[u,l,n,s,r]}class pe extends z{constructor(e){super(),B(this,e,ve,me,F,{menu:2})}}function ge(i){let e,t,s,l,u,r,n,a,c,o,f,m,$,E;l=new ee({props:{items:i[0].data.menu}});const D=i[2].default,k=se(D,i,i[1],null);return $=new pe({props:{menu:i[0].data.menu}}),{c(){e=v("div"),t=v("div"),s=v("nav"),C(l.$$.fragment),u=P(),r=v("div"),n=v("div"),a=v("main"),k&&k.c(),c=P(),o=v("hr"),f=P(),m=v("nav"),C($.$$.fragment),this.h()},l(g){e=p(g,"DIV",{class:!0});var y=b(e);t=p(y,"DIV",{class:!0});var M=b(t);s=p(M,"NAV",{"aria-label":!0,class:!0});var L=b(s);T(l.$$.fragment,L),L.forEach(_),M.forEach(_),u=S(y),r=p(y,"DIV",{class:!0});var G=b(r);n=p(G,"DIV",{class:!0});var V=b(n);a=p(V,"MAIN",{class:!0});var H=b(a);k&&k.l(H),H.forEach(_),c=S(V),o=p(V,"HR",{class:!0}),f=S(V),m=p(V,"NAV",{class:!0});var O=b(m);T($.$$.fragment,O),O.forEach(_),V.forEach(_),G.forEach(_),y.forEach(_),this.h()},h(){h(s,"aria-label","Docs"),h(s,"class","svelte-1jxh5k7"),h(t,"class","sidebar svelte-1jxh5k7"),h(a,"class","stack svelte-1jxh5k7"),h(o,"class","svelte-1jxh5k7"),h(m,"class","svelte-1jxh5k7"),h(n,"class","stack center with-gutters"),h(r,"class","content"),h(e,"class","docs with-sidebar wrap-reverse"),le(e,"--gap","var(--s5) var(--space)")},m(g,y){A(g,e,y),d(e,t),d(t,s),W(l,s,null),d(e,u),d(e,r),d(r,n),d(n,a),k&&k.m(a,null),d(n,c),d(n,o),d(n,f),d(n,m),W($,m,null),E=!0},p(g,[y]){const M={};y&1&&(M.items=g[0].data.menu),l.$set(M),k&&k.p&&(!E||y&2)&&ae(k,D,g,g[1],E?ne(D,g[1],y,null):re(g[1]),null);const L={};y&1&&(L.menu=g[0].data.menu),$.$set(L)},i(g){E||(N(l.$$.fragment,g),N(k,g),N($.$$.fragment,g),E=!0)},o(g){I(l.$$.fragment,g),I(k,g),I($.$$.fragment,g),E=!1},d(g){g&&_(e),x(l),k&&k.d(g),x($)}}}function be(i,e,t){let s;Y(i,Z,r=>t(0,s=r));let{$$slots:l={},$$scope:u}=e;return i.$$set=r=>{"$$scope"in r&&t(1,u=r.$$scope)},[s,u,l]}class Ee extends z{constructor(e){super(),B(this,e,be,ge,F,{})}}export{Ee as default};