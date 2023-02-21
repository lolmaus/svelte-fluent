import{S as ht,i as _t,s as mt,a as gt,e as D,c as wt,b as M,g as te,t as V,d as ne,f as C,h as F,j as yt,o as je,k as bt,l as vt,m as Et,n as Pe,p as X,q as kt,r as Rt,u as St,v as le,w as G,x as z,y as he,z as J,A as W,B as be}from"./chunks/index-d7ccb192.js";import{S as lt,a as ct,I as K,g as Qe,f as xe,b as Oe,c as ve,s as Z,i as et,d as ue,P as tt,e as Lt,h as It}from"./chunks/singletons-57ff727d.js";import{b as ae,s as At}from"./chunks/paths-26fdc0a1.js";import{R as nt,H as de}from"./chunks/control-e7f5239e.js";function Pt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function Ot(a){return a.split("%25").map(decodeURI).join("%25")}function Nt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Ut=["href","pathname","search","searchParams","toString","toJSON"];function Tt(a,e){const n=new URL(a);for(const s of Ut){let r=n[s];Object.defineProperty(n,s,{get(){return e(),r},enumerable:!0,configurable:!0})}return $t(n),n}function $t(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const jt="/__data.json";function Dt(a){return a.replace(/\/$/,"")+jt}function ft(a){try{return JSON.parse(sessionStorage[a])}catch{}}function at(a,e){const n=JSON.stringify(e);try{sessionStorage[a]=n}catch{}}function Vt(...a){let e=5381;for(const n of a)if(typeof n=="string"){let s=n.length;for(;s;)e=e*33^n.charCodeAt(--s)}else if(ArrayBuffer.isView(n)){const s=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let r=s.length;for(;r;)e=e*33^s[--r]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const Ee=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&pe.delete(Ve(a)),Ee(a,e));const pe=new Map;function Ct(a,e){const n=Ve(a,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:r,...d}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&pe.set(n,{body:r,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(r,d))}return Ee(a,e)}function qt(a,e,n){if(pe.size>0){const s=Ve(a,n),r=pe.get(s);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);pe.delete(s)}}return Ee(e,n)}function Ve(a,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;if(e!=null&&e.headers||e!=null&&e.body){const r=[];e.headers&&r.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&r.push(e.body),s+=`[data-hash="${Vt(...r)}"]`}return s}const Bt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ft(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Kt(a).map(s=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((u,_)=>{if(_%2){if(u.startsWith("x+"))return Ne(String.fromCharCode(parseInt(u.slice(2),16)));if(u.startsWith("u+"))return Ne(String.fromCharCode(...u.slice(2).split("-").map(A=>parseInt(A,16))));const g=Bt.exec(u);if(!g)throw new Error(`Invalid param: ${u}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,y,U,T,q]=g;return e.push({name:T,matcher:q,optional:!!y,rest:!!U,chained:U?_===1&&t[0]==="":!1}),U?"(.*?)":y?"([^/]*)?":"([^/]+?)"}return Ne(u)}).join("")}).join("")}/?$`),params:e}}function Ht(a){return!/^\([^)]+\)$/.test(a)}function Kt(a){return a.slice(1).split("/").filter(Ht)}function Mt(a,e,n){const s={},r=a.slice(1);let d=0;for(let t=0;t<e.length;t+=1){const f=e[t],u=r[t-d];if(f.chained&&f.rest&&d){s[f.name]=r.slice(t-d,t+1).filter(_=>_).join("/"),d=0;continue}if(u===void 0){f.rest&&(s[f.name]="");continue}if(!f.matcher||n[f.matcher](u)){s[f.name]=u;continue}if(f.optional&&f.chained){d++;continue}return}if(!d)return s}function Ne(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Gt(a,e,n,s){const r=new Set(e);return Object.entries(n).map(([f,[u,_,g]])=>{const{pattern:y,params:U}=Ft(f),T={id:f,exec:q=>{const A=y.exec(q);if(A)return Mt(A,U,s)},errors:[1,...g||[]].map(q=>a[q]),layouts:[0,..._||[]].map(t),leaf:d(u)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function d(f){const u=f<0;return u&&(f=~f),[u,a[f]]}function t(f){return f===void 0?f:[r.has(f),a[f]]}}function zt(a){let e,n,s;var r=a[1][0];function d(t){return{props:{data:t[3],form:t[2]}}}return r&&(e=G(r,d(a)),a[15](e)),{c(){e&&z(e.$$.fragment),n=D()},l(t){e&&he(e.$$.fragment,t),n=D()},m(t,f){e&&J(e,t,f),M(t,n,f),s=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&4&&(u.form=t[2]),r!==(r=t[1][0])){if(e){te();const _=e;V(_.$$.fragment,1,0,()=>{W(_,1)}),ne()}r?(e=G(r,d(t)),t[15](e),z(e.$$.fragment),C(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&V(e.$$.fragment,t),s=!1},d(t){a[15](null),t&&F(n),e&&W(e,t)}}}function Jt(a){let e,n,s;var r=a[1][0];function d(t){return{props:{data:t[3],$$slots:{default:[Zt]},$$scope:{ctx:t}}}}return r&&(e=G(r,d(a)),a[14](e)),{c(){e&&z(e.$$.fragment),n=D()},l(t){e&&he(e.$$.fragment,t),n=D()},m(t,f){e&&J(e,t,f),M(t,n,f),s=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&65591&&(u.$$scope={dirty:f,ctx:t}),r!==(r=t[1][0])){if(e){te();const _=e;V(_.$$.fragment,1,0,()=>{W(_,1)}),ne()}r?(e=G(r,d(t)),t[14](e),z(e.$$.fragment),C(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&V(e.$$.fragment,t),s=!1},d(t){a[14](null),t&&F(n),e&&W(e,t)}}}function Wt(a){let e,n,s;var r=a[1][1];function d(t){return{props:{data:t[4],form:t[2]}}}return r&&(e=G(r,d(a)),a[13](e)),{c(){e&&z(e.$$.fragment),n=D()},l(t){e&&he(e.$$.fragment,t),n=D()},m(t,f){e&&J(e,t,f),M(t,n,f),s=!0},p(t,f){const u={};if(f&16&&(u.data=t[4]),f&4&&(u.form=t[2]),r!==(r=t[1][1])){if(e){te();const _=e;V(_.$$.fragment,1,0,()=>{W(_,1)}),ne()}r?(e=G(r,d(t)),t[13](e),z(e.$$.fragment),C(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&V(e.$$.fragment,t),s=!1},d(t){a[13](null),t&&F(n),e&&W(e,t)}}}function Yt(a){let e,n,s;var r=a[1][1];function d(t){return{props:{data:t[4],$$slots:{default:[Xt]},$$scope:{ctx:t}}}}return r&&(e=G(r,d(a)),a[12](e)),{c(){e&&z(e.$$.fragment),n=D()},l(t){e&&he(e.$$.fragment,t),n=D()},m(t,f){e&&J(e,t,f),M(t,n,f),s=!0},p(t,f){const u={};if(f&16&&(u.data=t[4]),f&65575&&(u.$$scope={dirty:f,ctx:t}),r!==(r=t[1][1])){if(e){te();const _=e;V(_.$$.fragment,1,0,()=>{W(_,1)}),ne()}r?(e=G(r,d(t)),t[12](e),z(e.$$.fragment),C(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&V(e.$$.fragment,t),s=!1},d(t){a[12](null),t&&F(n),e&&W(e,t)}}}function Xt(a){let e,n,s;var r=a[1][2];function d(t){return{props:{data:t[5],form:t[2]}}}return r&&(e=G(r,d(a)),a[11](e)),{c(){e&&z(e.$$.fragment),n=D()},l(t){e&&he(e.$$.fragment,t),n=D()},m(t,f){e&&J(e,t,f),M(t,n,f),s=!0},p(t,f){const u={};if(f&32&&(u.data=t[5]),f&4&&(u.form=t[2]),r!==(r=t[1][2])){if(e){te();const _=e;V(_.$$.fragment,1,0,()=>{W(_,1)}),ne()}r?(e=G(r,d(t)),t[11](e),z(e.$$.fragment),C(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&V(e.$$.fragment,t),s=!1},d(t){a[11](null),t&&F(n),e&&W(e,t)}}}function Zt(a){let e,n,s,r;const d=[Yt,Wt],t=[];function f(u,_){return u[1][2]?0:1}return e=f(a),n=t[e]=d[e](a),{c(){n.c(),s=D()},l(u){n.l(u),s=D()},m(u,_){t[e].m(u,_),M(u,s,_),r=!0},p(u,_){let g=e;e=f(u),e===g?t[e].p(u,_):(te(),V(t[g],1,1,()=>{t[g]=null}),ne(),n=t[e],n?n.p(u,_):(n=t[e]=d[e](u),n.c()),C(n,1),n.m(s.parentNode,s))},i(u){r||(C(n),r=!0)},o(u){V(n),r=!1},d(u){t[e].d(u),u&&F(s)}}}function rt(a){let e,n=a[7]&&st(a);return{c(){e=bt("div"),n&&n.c(),this.h()},l(s){e=vt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=Et(e);n&&n.l(r),r.forEach(F),this.h()},h(){Pe(e,"id","svelte-announcer"),Pe(e,"aria-live","assertive"),Pe(e,"aria-atomic","true"),X(e,"position","absolute"),X(e,"left","0"),X(e,"top","0"),X(e,"clip","rect(0 0 0 0)"),X(e,"clip-path","inset(50%)"),X(e,"overflow","hidden"),X(e,"white-space","nowrap"),X(e,"width","1px"),X(e,"height","1px")},m(s,r){M(s,e,r),n&&n.m(e,null)},p(s,r){s[7]?n?n.p(s,r):(n=st(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&F(e),n&&n.d()}}}function st(a){let e;return{c(){e=kt(a[8])},l(n){e=Rt(n,a[8])},m(n,s){M(n,e,s)},p(n,s){s&256&&St(e,n[8])},d(n){n&&F(e)}}}function Qt(a){let e,n,s,r,d;const t=[Jt,zt],f=[];function u(g,y){return g[1][1]?0:1}e=u(a),n=f[e]=t[e](a);let _=a[6]&&rt(a);return{c(){n.c(),s=gt(),_&&_.c(),r=D()},l(g){n.l(g),s=wt(g),_&&_.l(g),r=D()},m(g,y){f[e].m(g,y),M(g,s,y),_&&_.m(g,y),M(g,r,y),d=!0},p(g,[y]){let U=e;e=u(g),e===U?f[e].p(g,y):(te(),V(f[U],1,1,()=>{f[U]=null}),ne(),n=f[e],n?n.p(g,y):(n=f[e]=t[e](g),n.c()),C(n,1),n.m(s.parentNode,s)),g[6]?_?_.p(g,y):(_=rt(g),_.c(),_.m(r.parentNode,r)):_&&(_.d(1),_=null)},i(g){d||(C(n),d=!0)},o(g){V(n),d=!1},d(g){f[e].d(g),g&&F(s),_&&_.d(g),g&&F(r)}}}function xt(a,e,n){let{stores:s}=e,{page:r}=e,{constructors:d}=e,{components:t=[]}=e,{form:f}=e,{data_0:u=null}=e,{data_1:_=null}=e,{data_2:g=null}=e;yt(s.page.notify);let y=!1,U=!1,T=null;je(()=>{const k=s.page.subscribe(()=>{y&&(n(7,U=!0),n(8,T=document.title||"untitled page"))});return n(6,y=!0),k});function q(k){le[k?"unshift":"push"](()=>{t[2]=k,n(0,t)})}function A(k){le[k?"unshift":"push"](()=>{t[1]=k,n(0,t)})}function re(k){le[k?"unshift":"push"](()=>{t[1]=k,n(0,t)})}function Y(k){le[k?"unshift":"push"](()=>{t[0]=k,n(0,t)})}function _e(k){le[k?"unshift":"push"](()=>{t[0]=k,n(0,t)})}return a.$$set=k=>{"stores"in k&&n(9,s=k.stores),"page"in k&&n(10,r=k.page),"constructors"in k&&n(1,d=k.constructors),"components"in k&&n(0,t=k.components),"form"in k&&n(2,f=k.form),"data_0"in k&&n(3,u=k.data_0),"data_1"in k&&n(4,_=k.data_1),"data_2"in k&&n(5,g=k.data_2)},a.$$.update=()=>{a.$$.dirty&1536&&s.page.set(r)},[t,d,f,u,_,g,y,U,T,s,r,q,A,re,Y,_e]}class en extends ht{constructor(e){super(),_t(this,e,xt,Qt,mt,{stores:9,page:10,constructors:1,components:0,form:2,data_0:3,data_1:4,data_2:5})}}const tn="modulepreload",nn=function(a,e){return new URL(a,e).href},ot={},Q=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=nn(d,s),d in ot)return;ot[d]=!0;const t=d.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!s)for(let g=r.length-1;g>=0;g--){const y=r[g];if(y.href===d&&(!t||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const _=document.createElement("link");if(_.rel=t?"stylesheet":tn,t||(_.as="script",_.crossOrigin=""),_.href=d,document.head.appendChild(_),t)return new Promise((g,y)=>{_.addEventListener("load",g),_.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},an={},ke=[()=>Q(()=>import("./chunks/0-eaeb7c93.js"),["./chunks/0-eaeb7c93.js","./chunks/_layout-a3c21a9e.js","./chunks/highlight-a84913a5.js","./chunks/paths-26fdc0a1.js","./components/pages/_layout.svelte-1ba1fdc2.js","./chunks/index-d7ccb192.js","./chunks/logo-e9919c70.js","./chunks/stores-a4890d31.js","./chunks/singletons-57ff727d.js","./assets/_layout-5450d3f6.css"],import.meta.url),()=>Q(()=>import("./chunks/1-bdbb4c36.js"),["./chunks/1-bdbb4c36.js","./components/error.svelte-4fb02ea5.js","./chunks/index-d7ccb192.js","./chunks/stores-a4890d31.js","./chunks/singletons-57ff727d.js","./chunks/paths-26fdc0a1.js"],import.meta.url),()=>Q(()=>import("./chunks/2-93d30079.js"),["./chunks/2-93d30079.js","./chunks/_layout-af2a24a2.js","./components/pages/docs/getting-started/_page.svelte.md-b7c97874.js","./chunks/index-d7ccb192.js","./chunks/paths-26fdc0a1.js","./components/pages/docs/tutorial/_page.svelte.md-bba99649.js","./chunks/Overlay.svelte_svelte_type_style_lang-1a01065c.js","./chunks/highlight-a84913a5.js","./chunks/stores-a4890d31.js","./chunks/singletons-57ff727d.js","./assets/Overlay-2c91afa1.css","./assets/_page.svelte-e07d2c57.css","./components/pages/docs/components/_page.svelte.md-7eaaece2.js","./components/pages/docs/_layout.svelte-aee6108e.js","./assets/_layout-b000c885.css"],import.meta.url),()=>Q(()=>import("./chunks/3-595f3f89.js"),["./chunks/3-595f3f89.js","./chunks/_page-5a8d6825.js","./components/pages/_page.svelte-c464f97c.js","./chunks/index-d7ccb192.js","./chunks/Overlay.svelte_svelte_type_style_lang-1a01065c.js","./chunks/highlight-a84913a5.js","./chunks/paths-26fdc0a1.js","./chunks/stores-a4890d31.js","./chunks/singletons-57ff727d.js","./assets/Overlay-2c91afa1.css","./chunks/logo-e9919c70.js","./assets/_page-108e3cb2.css"],import.meta.url),()=>Q(()=>import("./chunks/4-f9fd1e32.js"),["./chunks/4-f9fd1e32.js","./chunks/_page-f1d04661.js","./chunks/paths-26fdc0a1.js","./chunks/control-e7f5239e.js"],import.meta.url),()=>Q(()=>import("./chunks/5-ac645e79.js"),["./chunks/5-ac645e79.js","./components/pages/docs/components/_page.svelte.md-7eaaece2.js","./chunks/index-d7ccb192.js","./chunks/Overlay.svelte_svelte_type_style_lang-1a01065c.js","./chunks/highlight-a84913a5.js","./chunks/paths-26fdc0a1.js","./chunks/stores-a4890d31.js","./chunks/singletons-57ff727d.js","./assets/Overlay-2c91afa1.css"],import.meta.url),()=>Q(()=>import("./chunks/6-4c534f34.js"),["./chunks/6-4c534f34.js","./components/pages/docs/getting-started/_page.svelte.md-b7c97874.js","./chunks/index-d7ccb192.js","./chunks/paths-26fdc0a1.js"],import.meta.url),()=>Q(()=>import("./chunks/7-c17a4789.js"),["./chunks/7-c17a4789.js","./components/pages/docs/tutorial/_page.svelte.md-bba99649.js","./chunks/index-d7ccb192.js","./chunks/Overlay.svelte_svelte_type_style_lang-1a01065c.js","./chunks/highlight-a84913a5.js","./chunks/paths-26fdc0a1.js","./chunks/stores-a4890d31.js","./chunks/singletons-57ff727d.js","./assets/Overlay-2c91afa1.css","./assets/_page.svelte-e07d2c57.css"],import.meta.url)],ut=[],rn={"/":[3],"/docs":[4,[2]],"/docs/components":[5,[2]],"/docs/getting-started":[6,[2]],"/docs/tutorial":[7,[2]]},sn={handleError:({error:a})=>{console.error(a)}};async function on(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([s,r])=>[s,await r])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const ln=-1,cn=-2,fn=-3,un=-4,dn=-5,pn=-6;function hn(a){if(typeof a=="number")return s(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function s(r,d=!1){if(r===ln)return;if(r===fn)return NaN;if(r===un)return 1/0;if(r===dn)return-1/0;if(r===pn)return-0;if(d)throw new Error("Invalid input");if(r in n)return n[r];const t=e[r];if(!t||typeof t!="object")n[r]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[r]=new Date(t[1]);break;case"Set":const u=new Set;n[r]=u;for(let y=1;y<t.length;y+=1)u.add(s(t[y]));break;case"Map":const _=new Map;n[r]=_;for(let y=1;y<t.length;y+=2)_.set(s(t[y]),s(t[y+1]));break;case"RegExp":n[r]=new RegExp(t[1],t[2]);break;case"Object":n[r]=Object(t[1]);break;case"BigInt":n[r]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[r]=g;for(let y=1;y<t.length;y+=2)g[t[y]]=s(t[y+1]);break}else{const f=new Array(t.length);n[r]=f;for(let u=0;u<t.length;u+=1){const _=t[u];_!==cn&&(f[u]=s(_))}}else{const f={};n[r]=f;for(const u in t){const _=t[u];f[u]=s(_)}}return n[r]}return s(0)}function _n(a){return a.filter(e=>e!=null)}const Ue=Gt(ke,ut,rn,an),dt=ke[0],De=ke[1];dt();De();const ee=ft(lt)??{},ce=ft(ct)??{};function Te(a){ee[a]=ue()}function mn({target:a}){var Ye;const e=document.documentElement,n=[],s=[];let r=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,u=!1,_=!0,g=!1,y=!1,U=!1,T=!1,q,A=(Ye=history.state)==null?void 0:Ye[K];A||(A=Date.now(),history.replaceState({...history.state,[K]:A},"",location.href));const re=ee[A];re&&(history.scrollRestoration="manual",scrollTo(re.x,re.y));let Y,_e,k;async function Ce(){k=k||Promise.resolve(),await k,k=null;const i=new URL(location.href),o=oe(i,!0);r=null,await He(o,i,[])}function qe(i){s.some(o=>o==null?void 0:o.snapshot)&&(ce[i]=s.map(o=>{var c;return(c=o==null?void 0:o.snapshot)==null?void 0:c.capture()}))}function Be(i){var o;(o=ce[i])==null||o.forEach((c,l)=>{var h,p;(p=(h=s[l])==null?void 0:h.snapshot)==null||p.restore(c)})}async function Re(i,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:h={},invalidateAll:p=!1},w,m){return typeof i=="string"&&(i=new URL(i,Qe(document))),ye({url:i,scroll:o?ue():null,keepfocus:l,redirect_chain:w,details:{state:h,replaceState:c},nav_token:m,accepted:()=>{p&&(T=!0)},blocked:()=>{},type:"goto"})}async function Fe(i){return r={id:i.id,promise:Ge(i).then(o=>(o.type==="loaded"&&o.state.error&&(r=null),o))},r.promise}async function me(...i){const c=Ue.filter(l=>i.some(h=>l.exec(h))).map(l=>Promise.all([...l.layouts,l.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(c)}async function He(i,o,c,l,h,p={},w){var v,b,I;_e=p;let m=i&&await Ge(i);if(m||(m=await We(o,{id:null},await fe(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(i==null?void 0:i.url)||o,_e!==p)return!1;if(m.type==="redirect")if(c.length>10||c.includes(o.pathname))m=await ge({status:500,error:await fe(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return Re(new URL(m.location,o).href,{},[...c,o.pathname],p),!1;else((v=m.props.page)==null?void 0:v.status)>=400&&await Z.updated.check()&&await ie(o);if(n.length=0,T=!1,g=!0,l&&(Te(l),qe(l)),(b=m.props.page)!=null&&b.url&&m.props.page.url.pathname!==o.pathname&&(o.pathname=(I=m.props.page)==null?void 0:I.url.pathname),h&&h.details){const{details:S}=h,j=S.replaceState?0:1;if(S.state[K]=A+=j,history[S.replaceState?"replaceState":"pushState"](S.state,"",o),!S.replaceState){let L=A+1;for(;ce[L]||ee[L];)delete ce[L],delete ee[L],L+=1}}if(r=null,u?(t=m.state,m.props.page&&(m.props.page.url=o),q.$set(m.props)):Ke(m),h){const{scroll:S,keepfocus:j}=h,{activeElement:L}=document;await be();const E=document.activeElement!==L&&document.activeElement!==document.body;if(!j&&!E&&await $e(),_){const P=o.hash&&document.getElementById(decodeURIComponent(o.hash.slice(1)));S?scrollTo(S.x,S.y):P?P.scrollIntoView():scrollTo(0,0)}}else await be();_=!0,m.props.page&&(Y=m.props.page),w&&w(),g=!1}function Ke(i){var l;t=i.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),Y=i.props.page,q=new en({target:a,props:{...i.props,stores:Z,components:s},hydrate:!0}),Be(A);const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(h=>h(c)),u=!0}async function se({url:i,params:o,branch:c,status:l,error:h,route:p,form:w}){let m="never";for(const L of c)(L==null?void 0:L.slash)!==void 0&&(m=L.slash);i.pathname=Pt(i.pathname,m),i.search=i.search;const v={type:"loaded",state:{url:i,params:o,branch:c,error:h,route:p},props:{constructors:_n(c).map(L=>L.node.component)}};w!==void 0&&(v.props.form=w);let b={},I=!Y,S=0;for(let L=0;L<Math.max(c.length,t.branch.length);L+=1){const E=c[L],P=t.branch[L];(E==null?void 0:E.data)!==(P==null?void 0:P.data)&&(I=!0),E&&(b={...b,...E.data},I&&(v.props[`data_${S}`]=b),S+=1)}return(!t.url||i.href!==t.url.href||t.error!==h||w!==void 0&&w!==Y.form||I)&&(v.props.page={error:h,params:o,route:{id:(p==null?void 0:p.id)??null},status:l,url:new URL(i),form:w??null,data:I?b:Y.data}),v}async function Se({loader:i,parent:o,url:c,params:l,route:h,server_data_node:p}){var b,I,S;let w=null;const m={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await i();if((b=v.universal)!=null&&b.load){let j=function(...E){for(const P of E){const{href:B}=new URL(P,c);m.dependencies.add(B)}};const L={route:{get id(){return m.route=!0,h.id}},params:new Proxy(l,{get:(E,P)=>(m.params.add(P),E[P])}),data:(p==null?void 0:p.data)??null,url:Tt(c,()=>{m.url=!0}),async fetch(E,P){let B;E instanceof Request?(B=E.url,P={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...P}):B=E;const H=new URL(B,c);return j(H.href),H.origin===c.origin&&(B=H.href.slice(c.origin.length)),u?qt(B,H.href,P):Ct(B,P)},setHeaders:()=>{},depends:j,parent(){return m.parent=!0,o()}};w=await v.universal.load.call(null,L)??null,w=w?await on(w):null}return{node:v,loader:i,server:p,universal:(I=v.universal)!=null&&I.load?{type:"data",data:w,uses:m}:null,data:w??(p==null?void 0:p.data)??null,slash:((S=v.universal)==null?void 0:S.trailingSlash)??(p==null?void 0:p.slash)}}function Me(i,o,c,l,h){if(T)return!0;if(!l)return!1;if(l.parent&&i||l.route&&o||l.url&&c)return!0;for(const p of l.params)if(h[p]!==t.params[p])return!0;for(const p of l.dependencies)if(n.some(w=>w(new URL(p))))return!0;return!1}function Le(i,o){return(i==null?void 0:i.type)==="data"?{type:"data",data:i.data,uses:{dependencies:new Set(i.uses.dependencies??[]),params:new Set(i.uses.params??[]),parent:!!i.uses.parent,route:!!i.uses.route,url:!!i.uses.url},slash:i.slash}:(i==null?void 0:i.type)==="skip"?o??null:null}async function Ge({id:i,invalidating:o,url:c,params:l,route:h}){if((r==null?void 0:r.id)===i)return r.promise;const{errors:p,layouts:w,leaf:m}=h,v=[...w,m];p.forEach(R=>R==null?void 0:R().catch(()=>{})),v.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let b=null;const I=t.url?i!==t.url.pathname+t.url.search:!1,S=t.route?h.id!==t.route.id:!1;let j=!1;const L=v.map((R,$)=>{var x;const O=t.branch[$],N=!!(R!=null&&R[0])&&((O==null?void 0:O.loader)!==R[1]||Me(j,S,I,(x=O.server)==null?void 0:x.uses,l));return N&&(j=!0),N});if(L.some(Boolean)){try{b=await it(c,L)}catch(R){return ge({status:R instanceof de?R.status:500,error:await fe(R,{url:c,params:l,route:{id:h.id}}),url:c,route:h})}if(b.type==="redirect")return b}const E=b==null?void 0:b.nodes;let P=!1;const B=v.map(async(R,$)=>{var Ie;if(!R)return;const O=t.branch[$],N=E==null?void 0:E[$];if((!N||N.type==="skip")&&R[1]===(O==null?void 0:O.loader)&&!Me(P,S,I,(Ie=O.universal)==null?void 0:Ie.uses,l))return O;if(P=!0,(N==null?void 0:N.type)==="error")throw N;return Se({loader:R[1],url:c,params:l,route:h,parent:async()=>{var Ze;const Xe={};for(let Ae=0;Ae<$;Ae+=1)Object.assign(Xe,(Ze=await B[Ae])==null?void 0:Ze.data);return Xe},server_data_node:Le(N===void 0&&R[0]?{type:"skip"}:N??null,R[0]?O==null?void 0:O.server:void 0)})});for(const R of B)R.catch(()=>{});const H=[];for(let R=0;R<v.length;R+=1)if(v[R])try{H.push(await B[R])}catch($){if($ instanceof nt)return{type:"redirect",location:$.location};let O=500,N;if(E!=null&&E.includes($))O=$.status??O,N=$.error;else if($ instanceof de)O=$.status,N=$.body;else{if(await Z.updated.check())return await ie(c);N=await fe($,{params:l,url:c,route:{id:h.id}})}const x=await ze(R,H,p);return x?await se({url:c,params:l,branch:H.slice(0,x.idx).concat(x.node),status:O,error:N,route:h}):await We(c,{id:h.id},N,O)}else H.push(void 0);return await se({url:c,params:l,branch:H,status:200,error:null,route:h,form:o?void 0:null})}async function ze(i,o,c){for(;i--;)if(c[i]){let l=i;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[i](),loader:c[i],data:{},server:null,universal:null}}}catch{continue}}}async function ge({status:i,error:o,url:c,route:l}){const h={};let p=null;if(ut[0]===0)try{const b=await it(c,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;p=b.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ie(c)}const m=await Se({loader:dt,url:c,params:h,route:l,parent:()=>Promise.resolve({}),server_data_node:Le(p)}),v={node:await De(),loader:De,universal:null,server:null,data:null};return await se({url:c,params:h,branch:[m,v],status:i,error:o,route:null})}function oe(i,o){if(et(i,ae))return;const c=we(i);for(const l of Ue){const h=l.exec(c);if(h)return{id:i.pathname+i.search,invalidating:o,route:l,params:Nt(h),url:i}}}function we(i){return Ot(i.pathname.slice(ae.length)||"/")}function Je({url:i,type:o,intent:c,delta:l}){var m,v;let h=!1;const p={from:{params:t.params,route:{id:((m=t.route)==null?void 0:m.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((v=c==null?void 0:c.route)==null?void 0:v.id)??null},url:i},willUnload:!c,type:o};l!==void 0&&(p.delta=l);const w={...p,cancel:()=>{h=!0}};return y||d.before_navigate.forEach(b=>b(w)),h?null:p}async function ye({url:i,scroll:o,keepfocus:c,redirect_chain:l,details:h,type:p,delta:w,nav_token:m,accepted:v,blocked:b}){const I=oe(i,!1),S=Je({url:i,type:p,delta:w,intent:I});if(!S){b();return}const j=A;v(),y=!0,u&&Z.navigating.set(S),await He(I,i,l,j,{scroll:o,keepfocus:c,details:h},m,()=>{y=!1,d.after_navigate.forEach(L=>L(S)),Z.navigating.set(null)})}async function We(i,o,c,l){return i.origin===location.origin&&i.pathname===location.pathname&&!f?await ge({status:l,error:c,url:i,route:o}):await ie(i)}function ie(i){return location.href=i.href,new Promise(()=>{})}function pt(){let i;e.addEventListener("mousemove",p=>{const w=p.target;clearTimeout(i),i=setTimeout(()=>{l(w,2)},20)});function o(p){l(p.composedPath()[0],1)}e.addEventListener("mousedown",o),e.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(p=>{for(const w of p)w.isIntersecting&&(me(we(new URL(w.target.href))),c.unobserve(w.target))},{threshold:0});function l(p,w){const m=xe(p,e);if(!m)return;const{url:v,external:b}=Oe(m,ae);if(b)return;const I=ve(m);if(!I.reload)if(w<=I.preload_data){const S=oe(v,!1);S&&Fe(S)}else w<=I.preload_code&&me(we(v))}function h(){c.disconnect();for(const p of e.querySelectorAll("a")){const{url:w,external:m}=Oe(p,ae);if(m)continue;const v=ve(p);v.reload||(v.preload_code===tt.viewport&&c.observe(p),v.preload_code===tt.eager&&me(we(w)))}}d.after_navigate.push(h),h()}return{after_navigate:i=>{je(()=>(d.after_navigate.push(i),()=>{const o=d.after_navigate.indexOf(i);d.after_navigate.splice(o,1)}))},before_navigate:i=>{je(()=>(d.before_navigate.push(i),()=>{const o=d.before_navigate.indexOf(i);d.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(g||!u)&&(_=!1)},goto:(i,o={})=>Re(i,o,[]),invalidate:i=>{if(typeof i=="function")n.push(i);else{const{href:o}=new URL(i,location.href);n.push(c=>c.href===o)}return Ce()},invalidateAll:()=>(T=!0,Ce()),preload_data:async i=>{const o=new URL(i,Qe(document)),c=oe(o,!1);if(!c)throw new Error(`Attempted to preload a URL that does not belong to this app: ${o}`);await Fe(c)},preload_code:me,apply_action:async i=>{if(i.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const h=await ze(t.branch.length,c,l.errors);if(h){const p=await se({url:o,params:t.params,branch:c.slice(0,h.idx).concat(h.node),status:i.status??500,error:i.error,route:l});t=p.state,q.$set(p.props),be().then($e)}}else if(i.type==="redirect")Re(i.location,{invalidateAll:!0},[]);else{const o={form:i.data,page:{...Y,form:i.data,status:i.status}};q.$set(o),i.type==="success"&&be().then($e)}},_start_router:()=>{var i;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let c=!1;if(!y){const h={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(p=>p(h))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(Te(A),at(lt,ee),qe(A),at(ct,ce))}),(i=navigator.connection)!=null&&i.saveData||pt(),e.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=xe(o.composedPath()[0],e);if(!c)return;const{url:l,external:h,target:p}=Oe(c,ae);if(!l)return;if(p==="_parent"||p==="_top"){if(window.parent!==window)return}else if(p&&p!=="_self")return;const w=ve(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(h||w.reload){Je({url:l,type:"link"})||o.preventDefault(),y=!0;return}const[v,b]=l.href.split("#");if(b!==void 0&&v===location.href.split("#")[0]){U=!0,Te(A),t.url=l,Z.page.set({...Y,url:l}),Z.page.notify();return}ye({url:l,scroll:w.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),e.addEventListener("submit",o=>{if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const p=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(et(p,ae))return;const w=o.target,{noscroll:m,reload:v}=ve(w);if(v)return;o.preventDefault(),o.stopPropagation();const b=new FormData(w),I=l==null?void 0:l.getAttribute("name");I&&b.append(I,(l==null?void 0:l.getAttribute("value"))??""),p.search=new URLSearchParams(b).toString(),ye({url:p,scroll:m?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async o=>{var c;if((c=o.state)!=null&&c[K]){if(o.state[K]===A)return;const l=ee[o.state[K]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){ee[A]=ue(),A=o.state[K],scrollTo(l.x,l.y);return}const h=o.state[K]-A;let p=!1;await ye({url:new URL(location.href),scroll:l,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=o.state[K]},blocked:()=>{history.go(-h),p=!0},type:"popstate",delta:h}),p||Be(A)}}),addEventListener("hashchange",()=>{U&&(U=!1,history.replaceState({...history.state,[K]:++A},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&Z.navigating.set(null)})},_hydrate:async({status:i=200,error:o,node_ids:c,params:l,route:h,data:p,form:w})=>{f=!0;const m=new URL(location.href);({params:l={},route:h={id:null}}=oe(m,!1)||{});let v;try{const b=c.map(async(I,S)=>{const j=p[S];return Se({loader:ke[I],url:m,params:l,route:h,parent:async()=>{const L={};for(let E=0;E<S;E+=1)Object.assign(L,(await b[E]).data);return L},server_data_node:Le(j)})});v=await se({url:m,params:l,branch:await Promise.all(b),status:i,error:o,form:w,route:Ue.find(({id:I})=>I===h.id)??null})}catch(b){if(b instanceof nt){await ie(new URL(b.location,location.href));return}v=await ge({status:b instanceof de?b.status:500,error:await fe(b,{url:m,params:l,route:h}),url:m,route:h})}Ke(v)}}}async function it(a,e){var d;const n=new URL(a);n.pathname=Dt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await Ee(n.href),r=await s.json();if(!s.ok)throw new de(s.status,r);return(d=r.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=hn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),r}function fe(a,e){return a instanceof de?a.body:sn.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function $e(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(s=>{setTimeout(()=>{var r;s((r=getSelection())==null?void 0:r.removeAllRanges())})})}}async function vn({assets:a,env:e,hydrate:n,target:s,version:r}){At(a),It(r);const d=mn({target:s});Lt({client:d}),n?await d._hydrate(n):d.goto(location.href,{replaceState:!0}),d._start_router()}export{vn as start};