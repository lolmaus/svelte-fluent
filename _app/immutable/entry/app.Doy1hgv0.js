function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_app/immutable/nodes/0.QaeFuTda.js","_app/immutable/chunks/scheduler.BMc8JP4_.js","_app/immutable/chunks/index.CNWtZWm0.js","_app/immutable/chunks/paths.DcAZ9DN7.js","_app/immutable/chunks/logo.B5LvHz18.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/stores.cDM_iDwR.js","_app/immutable/chunks/entry.B1tnDJCf.js","_app/immutable/chunks/index.BW80JnTU.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/assets/0.KOIZywfo.css","_app/immutable/nodes/1.BiWdQCnP.js","_app/immutable/nodes/2.BwxrDKgk.js","_app/immutable/chunks/5.D7w770mv.js","_app/immutable/chunks/7.DPQjk-6I.js","_app/immutable/chunks/Overlay.svelte_svelte_type_style_lang.CjScpKtc.js","_app/immutable/assets/Overlay.CjqHa47R.css","_app/immutable/assets/7.CeghM7c4.css","_app/immutable/chunks/6.B3X-IBhL.js","_app/immutable/assets/2.D1AHHVgP.css","_app/immutable/nodes/3.BLWjuTmj.js","_app/immutable/assets/3.BgRWjXtK.css","_app/immutable/nodes/4.DbMl-gbg.js","_app/immutable/nodes/5.BpE_E7S6.js","_app/immutable/nodes/6.Cakf2FPj.js","_app/immutable/nodes/7.DSYguIlT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as U,a as j,l as d,g as z,i as w,f as g,q as W,u as F,e as G,c as H,b as J,v as T,w as y,t as K,d as Q,j as X,x as I,y as b,z as Y}from"../chunks/scheduler.BMc8JP4_.js";import{S as Z,i as M,t as p,c as L,a as h,g as A,b as k,d as O,m as E,e as v}from"../chunks/index.CNWtZWm0.js";const x="modulepreload",ee=function(f){return"/svelte-fluent/"+f},V={},R=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),o=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));s=Promise.all(n.map(i=>{if(i=ee(i),i in V)return;V[i]=!0;const c=i.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!r)for(let P=_.length-1;P>=0;P--){const D=_[P];if(D.href===i&&(!c||D.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":x,c||(u.as="script",u.crossOrigin=""),u.href=i,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((P,D)=>{u.addEventListener("load",P),u.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${i}`)))})}))}return s.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},_e={};function te(f){let e,n,r;var s=f[1][0];function _(t,o){return{props:{data:t[3],form:t[2]}}}return s&&(e=b(s,_(f)),f[15](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,o){e&&E(e,t,o),w(t,n,o),r=!0},p(t,o){if(o&2&&s!==(s=t[1][0])){if(e){A();const i=e;p(i.$$.fragment,1,0,()=>{v(i,1)}),L()}s?(e=b(s,_(t)),t[15](e),k(e.$$.fragment),h(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(s){const i={};o&8&&(i.data=t[3]),o&4&&(i.form=t[2]),e.$set(i)}},i(t){r||(e&&h(e.$$.fragment,t),r=!0)},o(t){e&&p(e.$$.fragment,t),r=!1},d(t){t&&g(n),f[15](null),e&&v(e,t)}}}function ne(f){let e,n,r;var s=f[1][0];function _(t,o){return{props:{data:t[3],$$slots:{default:[oe]},$$scope:{ctx:t}}}}return s&&(e=b(s,_(f)),f[14](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,o){e&&E(e,t,o),w(t,n,o),r=!0},p(t,o){if(o&2&&s!==(s=t[1][0])){if(e){A();const i=e;p(i.$$.fragment,1,0,()=>{v(i,1)}),L()}s?(e=b(s,_(t)),t[14](e),k(e.$$.fragment),h(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(s){const i={};o&8&&(i.data=t[3]),o&65591&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)}},i(t){r||(e&&h(e.$$.fragment,t),r=!0)},o(t){e&&p(e.$$.fragment,t),r=!1},d(t){t&&g(n),f[14](null),e&&v(e,t)}}}function ie(f){let e,n,r;var s=f[1][1];function _(t,o){return{props:{data:t[4],form:t[2]}}}return s&&(e=b(s,_(f)),f[13](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,o){e&&E(e,t,o),w(t,n,o),r=!0},p(t,o){if(o&2&&s!==(s=t[1][1])){if(e){A();const i=e;p(i.$$.fragment,1,0,()=>{v(i,1)}),L()}s?(e=b(s,_(t)),t[13](e),k(e.$$.fragment),h(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(s){const i={};o&16&&(i.data=t[4]),o&4&&(i.form=t[2]),e.$set(i)}},i(t){r||(e&&h(e.$$.fragment,t),r=!0)},o(t){e&&p(e.$$.fragment,t),r=!1},d(t){t&&g(n),f[13](null),e&&v(e,t)}}}function se(f){let e,n,r;var s=f[1][1];function _(t,o){return{props:{data:t[4],$$slots:{default:[re]},$$scope:{ctx:t}}}}return s&&(e=b(s,_(f)),f[12](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,o){e&&E(e,t,o),w(t,n,o),r=!0},p(t,o){if(o&2&&s!==(s=t[1][1])){if(e){A();const i=e;p(i.$$.fragment,1,0,()=>{v(i,1)}),L()}s?(e=b(s,_(t)),t[12](e),k(e.$$.fragment),h(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(s){const i={};o&16&&(i.data=t[4]),o&65575&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)}},i(t){r||(e&&h(e.$$.fragment,t),r=!0)},o(t){e&&p(e.$$.fragment,t),r=!1},d(t){t&&g(n),f[12](null),e&&v(e,t)}}}function re(f){let e,n,r;var s=f[1][2];function _(t,o){return{props:{data:t[5],form:t[2]}}}return s&&(e=b(s,_(f)),f[11](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,o){e&&E(e,t,o),w(t,n,o),r=!0},p(t,o){if(o&2&&s!==(s=t[1][2])){if(e){A();const i=e;p(i.$$.fragment,1,0,()=>{v(i,1)}),L()}s?(e=b(s,_(t)),t[11](e),k(e.$$.fragment),h(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(s){const i={};o&32&&(i.data=t[5]),o&4&&(i.form=t[2]),e.$set(i)}},i(t){r||(e&&h(e.$$.fragment,t),r=!0)},o(t){e&&p(e.$$.fragment,t),r=!1},d(t){t&&g(n),f[11](null),e&&v(e,t)}}}function oe(f){let e,n,r,s;const _=[se,ie],t=[];function o(i,c){return i[1][2]?0:1}return e=o(f),n=t[e]=_[e](f),{c(){n.c(),r=d()},l(i){n.l(i),r=d()},m(i,c){t[e].m(i,c),w(i,r,c),s=!0},p(i,c){let l=e;e=o(i),e===l?t[e].p(i,c):(A(),p(t[l],1,1,()=>{t[l]=null}),L(),n=t[e],n?n.p(i,c):(n=t[e]=_[e](i),n.c()),h(n,1),n.m(r.parentNode,r))},i(i){s||(h(n),s=!0)},o(i){p(n),s=!1},d(i){i&&g(r),t[e].d(i)}}}function $(f){let e,n=f[7]&&N(f);return{c(){e=G("div"),n&&n.c(),this.h()},l(r){e=H(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=J(e);n&&n.l(s),s.forEach(g),this.h()},h(){T(e,"id","svelte-announcer"),T(e,"aria-live","assertive"),T(e,"aria-atomic","true"),y(e,"position","absolute"),y(e,"left","0"),y(e,"top","0"),y(e,"clip","rect(0 0 0 0)"),y(e,"clip-path","inset(50%)"),y(e,"overflow","hidden"),y(e,"white-space","nowrap"),y(e,"width","1px"),y(e,"height","1px")},m(r,s){w(r,e,s),n&&n.m(e,null)},p(r,s){r[7]?n?n.p(r,s):(n=N(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(r){r&&g(e),n&&n.d()}}}function N(f){let e;return{c(){e=K(f[8])},l(n){e=Q(n,f[8])},m(n,r){w(n,e,r)},p(n,r){r&256&&X(e,n[8])},d(n){n&&g(e)}}}function fe(f){let e,n,r,s,_;const t=[ne,te],o=[];function i(l,m){return l[1][1]?0:1}e=i(f),n=o[e]=t[e](f);let c=f[6]&&$(f);return{c(){n.c(),r=j(),c&&c.c(),s=d()},l(l){n.l(l),r=z(l),c&&c.l(l),s=d()},m(l,m){o[e].m(l,m),w(l,r,m),c&&c.m(l,m),w(l,s,m),_=!0},p(l,[m]){let u=e;e=i(l),e===u?o[e].p(l,m):(A(),p(o[u],1,1,()=>{o[u]=null}),L(),n=o[e],n?n.p(l,m):(n=o[e]=t[e](l),n.c()),h(n,1),n.m(r.parentNode,r)),l[6]?c?c.p(l,m):(c=$(l),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null)},i(l){_||(h(n),_=!0)},o(l){p(n),_=!1},d(l){l&&(g(r),g(s)),o[e].d(l),c&&c.d(l)}}}function le(f,e,n){let{stores:r}=e,{page:s}=e,{constructors:_}=e,{components:t=[]}=e,{form:o}=e,{data_0:i=null}=e,{data_1:c=null}=e,{data_2:l=null}=e;W(r.page.notify);let m=!1,u=!1,P=null;F(()=>{const a=r.page.subscribe(()=>{m&&(n(7,u=!0),Y().then(()=>{n(8,P=document.title||"untitled page")}))});return n(6,m=!0),a});function D(a){I[a?"unshift":"push"](()=>{t[2]=a,n(0,t)})}function S(a){I[a?"unshift":"push"](()=>{t[1]=a,n(0,t)})}function q(a){I[a?"unshift":"push"](()=>{t[1]=a,n(0,t)})}function C(a){I[a?"unshift":"push"](()=>{t[0]=a,n(0,t)})}function B(a){I[a?"unshift":"push"](()=>{t[0]=a,n(0,t)})}return f.$$set=a=>{"stores"in a&&n(9,r=a.stores),"page"in a&&n(10,s=a.page),"constructors"in a&&n(1,_=a.constructors),"components"in a&&n(0,t=a.components),"form"in a&&n(2,o=a.form),"data_0"in a&&n(3,i=a.data_0),"data_1"in a&&n(4,c=a.data_1),"data_2"in a&&n(5,l=a.data_2)},f.$$.update=()=>{f.$$.dirty&1536&&r.page.set(s)},[t,_,o,i,c,l,m,u,P,r,s,D,S,q,C,B]}class ue extends Z{constructor(e){super(),M(this,e,le,fe,U,{stores:9,page:10,constructors:1,components:0,form:2,data_0:3,data_1:4,data_2:5})}}const me=[()=>R(()=>import("../nodes/0.QaeFuTda.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])),()=>R(()=>import("../nodes/1.BiWdQCnP.js"),__vite__mapDeps([11,1,2,6,7,8,3,9])),()=>R(()=>import("../nodes/2.BwxrDKgk.js"),__vite__mapDeps([12,13,1,2,3,14,15,5,8,16,17,18,6,7,9,19])),()=>R(()=>import("../nodes/3.BLWjuTmj.js"),__vite__mapDeps([20,1,2,15,5,8,16,4,3,21])),()=>R(()=>import("../nodes/4.DbMl-gbg.js"),__vite__mapDeps([22,3,9])),()=>R(()=>import("../nodes/5.BpE_E7S6.js"),__vite__mapDeps([23,13,1,2,3])),()=>R(()=>import("../nodes/6.Cakf2FPj.js"),__vite__mapDeps([24,18,1,2,15,5,8,16])),()=>R(()=>import("../nodes/7.DSYguIlT.js"),__vite__mapDeps([25,14,1,2,15,5,8,16,17]))],de=[],pe={"/":[3],"/docs":[4,[2]],"/docs/getting-started":[5,[2]],"/docs/reference":[6,[2]],"/docs/tutorial":[7,[2]]},he={handleError:({error:f})=>{console.error(f)},reroute:()=>{}};export{pe as dictionary,he as hooks,_e as matchers,me as nodes,ue as root,de as server_loads};
