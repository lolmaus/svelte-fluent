import{s as z,r as T,u as X,v as Y,h as p,d as _,w as R,i as y,x as C,y as Z,f as g,l as J,a as j,g as b,m as K,c as k,j as f,k as ee,z as m,A as te,e as Q,B as se,C as ae,D as le,E as re,F as ne}from"../chunks/scheduler.1cf95dd1.js";import{S as G,i as N,b as I,d as L,m as M,a as x,t as B,e as S}from"../chunks/index.1852e43e.js";import{b as U}from"../chunks/paths.cb8e607e.js";import{L as oe}from"../chunks/logo.cfcd2d93.js";import{g as ie}from"../chunks/spread.8a54911c.js";import{p as ce}from"../chunks/stores.171b7239.js";const ue=!0,Ae=Object.freeze(Object.defineProperty({__proto__:null,prerender:ue},Symbol.toStringTag,{value:"Module"}));function fe(i){let e,s='<path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>',l=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],a={};for(let r=0;r<l.length;r+=1)a=T(a,l[r]);return{c(){e=X("svg"),this.h()},l(r){e=Y(r,"svg",{viewBox:!0,width:!0,height:!0});var c=p(e);c.forEach(_),this.h()},h(){R(e,a)},m(r,c){y(r,e,c),e.innerHTML=s},p(r,[c]){R(e,a=ie(l,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},c&1&&r[0]]))},i:C,o:C,d(r){r&&_(e)}}}function _e(i,e,s){return i.$$set=l=>{s(0,e=T(T({},e),Z(l)))},e=Z(e),[e]}class de extends G{constructor(e){super(),N(this,e,_e,fe,z,{})}}function me(i){let e,s,l,a,r,c,u,n,h,d,t,o,$,w,E;return r=new oe({}),w=new de({}),{c(){e=g("header"),s=g("nav"),l=g("div"),a=g("a"),I(r.$$.fragment),c=J(" svelte-fluent"),u=j(),n=g("div"),h=g("a"),d=J("Docs"),t=j(),o=g("a"),$=g("div"),I(w.$$.fragment),this.h()},l(v){e=b(v,"HEADER",{class:!0});var A=p(e);s=b(A,"NAV",{"aria-label":!0,class:!0});var D=p(s);l=b(D,"DIV",{class:!0});var O=p(l);a=b(O,"A",{class:!0,href:!0});var H=p(a);L(r.$$.fragment,H),c=K(H," svelte-fluent"),H.forEach(_),O.forEach(_),u=k(D),n=b(D,"DIV",{class:!0});var V=p(n);h=b(V,"A",{href:!0,class:!0});var P=p(h);d=K(P,"Docs"),P.forEach(_),t=k(V),o=b(V,"A",{href:!0,target:!0,rel:!0,title:!0,class:!0});var q=p(o);$=b(q,"DIV",{class:!0});var F=p($);L(w.$$.fragment,F),F.forEach(_),q.forEach(_),V.forEach(_),D.forEach(_),A.forEach(_),this.h()},h(){f(a,"class","logo svelte-2ptxw5"),f(a,"href",U+"/"),f(l,"class","cluster"),f(h,"href",U+"/docs"),f(h,"class","svelte-2ptxw5"),f($,"class","icon svelte-2ptxw5"),f(o,"href","https://github.com/nubolab-ffwd/svelte-fluent"),f(o,"target","_blank"),f(o,"rel","noreferrer noopener"),f(o,"title","View on GitHub"),f(o,"class","svelte-2ptxw5"),f(n,"class","cluster"),f(s,"aria-label","Primary"),f(s,"class","cluster"),ee(s,"--justify","space-between"),f(e,"class","svelte-2ptxw5")},m(v,A){y(v,e,A),m(e,s),m(s,l),m(l,a),M(r,a,null),m(a,c),m(s,u),m(s,n),m(n,h),m(h,d),m(n,t),m(n,o),m(o,$),M(w,$,null),E=!0},p:C,i(v){E||(x(r.$$.fragment,v),x(w.$$.fragment,v),E=!0)},o(v){B(r.$$.fragment,v),B(w.$$.fragment,v),E=!1},d(v){v&&_(e),S(r),S(w)}}}class he extends G{constructor(e){super(),N(this,e,null,me,z,{})}}function W(i){let e,s;return{c(){e=g("meta"),this.h()},l(l){e=b(l,"META",{name:!0,content:!0}),this.h()},h(){f(e,"name","description"),f(e,"content",s=i[0].description)},m(l,a){y(l,e,a)},p(l,a){a&1&&s!==(s=l[0].description)&&f(e,"content",s)},d(l){l&&_(e)}}}function ve(i){let e,s,l,a,r,c,u;document.title=e=i[0].title;let n=i[0].description&&W(i);a=new he({});const h=i[3].default,d=te(h,i,i[2],null);return{c(){n&&n.c(),s=Q(),l=j(),I(a.$$.fragment),r=j(),c=g("div"),d&&d.c(),this.h()},l(t){const o=se("svelte-98thyt",document.head);n&&n.l(o),s=Q(),o.forEach(_),l=k(t),L(a.$$.fragment,t),r=k(t),c=b(t,"DIV",{class:!0});var $=p(c);d&&d.l($),$.forEach(_),this.h()},h(){f(c,"class","content svelte-na9ceh")},m(t,o){n&&n.m(document.head,null),m(document.head,s),y(t,l,o),M(a,t,o),y(t,r,o),y(t,c,o),d&&d.m(c,null),u=!0},p(t,[o]){(!u||o&1)&&e!==(e=t[0].title)&&(document.title=e),t[0].description?n?n.p(t,o):(n=W(t),n.c(),n.m(s.parentNode,s)):n&&(n.d(1),n=null),d&&d.p&&(!u||o&4)&&ae(d,h,t,t[2],u?re(h,t[2],o,null):le(t[2]),null)},i(t){u||(x(a.$$.fragment,t),x(d,t),u=!0)},o(t){B(a.$$.fragment,t),B(d,t),u=!1},d(t){t&&(_(l),_(r),_(c)),n&&n.d(t),_(s),S(a,t),d&&d.d(t)}}}"navigator"in globalThis||(globalThis.navigator={languages:[]});function pe(i,e,s){let l,a;ne(i,ce,u=>s(1,a=u));let{$$slots:r={},$$scope:c}=e;return i.$$set=u=>{"$$scope"in u&&s(2,c=u.$$scope)},i.$$.update=()=>{var u;i.$$.dirty&2&&s(0,l={...a.data.seo,title:[(u=a.data.seo)==null?void 0:u.title,"svelte-fluent"].filter(Boolean).join(" | ")})},[l,a,c,r]}class De extends G{constructor(e){super(),N(this,e,pe,ve,z,{})}}export{De as component,Ae as universal};
