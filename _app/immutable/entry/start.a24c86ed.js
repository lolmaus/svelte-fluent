import{o as De,t as ye}from"../chunks/index.cd621e7a.js";import{S as Be,a as Ke,I as V,g as Ce,f as Ve,b as we,c as le,s as M,d as Q,i as _e,P as qe,e as We}from"../chunks/singletons.cdf9b67e.js";import{b as K}from"../chunks/paths.47d05366.js";import{R as Fe,H as ee}from"../chunks/control.f5b05b5f.js";function Xe(n,o){return n==="/"||o==="ignore"?n:o==="never"?n.endsWith("/")?n.slice(0,-1):n:o==="always"&&!n.endsWith("/")?n+"/":n}function Ze(n){return n.split("%25").map(decodeURI).join("%25")}function Qe(n){for(const o in n)n[o]=decodeURIComponent(n[o]);return n}const et=["href","pathname","search","searchParams","toString","toJSON"];function tt(n,o){const d=new URL(n);for(const i of et)Object.defineProperty(d,i,{get(){return o(),n[i]},enumerable:!0,configurable:!0});return nt(d),d}function nt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const at="/__data.json";function rt(n){return n.replace(/\/$/,"")+at}function ze(n){try{return JSON.parse(sessionStorage[n])}catch{}}function Me(n,o){const d=JSON.stringify(o);try{sessionStorage[n]=d}catch{}}function ot(...n){let o=5381;for(const d of n)if(typeof d=="string"){let i=d.length;for(;i;)o=o*33^d.charCodeAt(--i)}else if(ArrayBuffer.isView(d)){const i=new Uint8Array(d.buffer,d.byteOffset,d.byteLength);let u=i.length;for(;u;)o=o*33^i[--u]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const fe=window.fetch;window.fetch=(n,o)=>((n instanceof Request?n.method:(o==null?void 0:o.method)||"GET")!=="GET"&&te.delete(Se(n)),fe(n,o));const te=new Map;function it(n,o){const d=Se(n,o),i=document.querySelector(d);if(i!=null&&i.textContent){const{body:u,...f}=JSON.parse(i.textContent),S=i.getAttribute("data-ttl");return S&&te.set(d,{body:u,init:f,ttl:1e3*Number(S)}),Promise.resolve(new Response(u,f))}return fe(n,o)}function st(n,o,d){if(te.size>0){const i=Se(n,d),u=te.get(i);if(u){if(performance.now()<u.ttl&&["default","force-cache","only-if-cached",void 0].includes(d==null?void 0:d.cache))return new Response(u.body,u.init);te.delete(i)}}return fe(o,d)}function Se(n,o){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(o!=null&&o.headers||o!=null&&o.body){const u=[];o.headers&&u.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&u.push(o.body),i+=`[data-hash="${ot(...u)}"]`}return i}const ct=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function lt(n){const o=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${ut(n).map(i=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(u)return o.push({name:u[1],matcher:u[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(f)return o.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const S=i.split(/\[(.+?)\](?!\])/);return"/"+S.map((w,_)=>{if(_%2){if(w.startsWith("x+"))return be(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return be(String.fromCharCode(...w.slice(2).split("-").map(P=>parseInt(P,16))));const p=ct.exec(w);if(!p)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,x,k,N]=p;return o.push({name:k,matcher:N,optional:!!D,rest:!!x,chained:x?_===1&&S[0]==="":!1}),x?"(.*?)":D?"([^/]*)?":"([^/]+?)"}return be(w)}).join("")}).join("")}/?$`),params:o}}function ft(n){return!/^\([^)]+\)$/.test(n)}function ut(n){return n.slice(1).split("/").filter(ft)}function dt(n,o,d){const i={},u=n.slice(1);let f=0;for(let S=0;S<o.length;S+=1){const l=o[S];let w=u[S-f];if(l.chained&&l.rest&&f&&(w=u.slice(S-f,S+1).filter(_=>_).join("/"),f=0),w===void 0){l.rest&&(i[l.name]="");continue}if(!l.matcher||d[l.matcher](w)){i[l.name]=w;const _=o[S+1],p=u[S+1];_&&!_.rest&&_.optional&&p&&l.chained&&(f=0);continue}if(l.optional&&l.chained){f++;continue}return}if(!f)return i}function be(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function pt({nodes:n,server_loads:o,dictionary:d,matchers:i}){const u=new Set(o);return Object.entries(d).map(([l,[w,_,p]])=>{const{pattern:D,params:x}=lt(l),k={id:l,exec:N=>{const P=D.exec(N);if(P)return dt(P,x,i)},errors:[1,...p||[]].map(N=>n[N]),layouts:[0,..._||[]].map(S),leaf:f(w)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function f(l){const w=l<0;return w&&(l=~l),[w,n[l]]}function S(l){return l===void 0?l:[u.has(l),n[l]]}}async function ht(n){var o;for(const d in n)if(typeof((o=n[d])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([i,u])=>[i,await u])));return n}const mt=-1,gt=-2,yt=-3,wt=-4,_t=-5,bt=-6;function vt(n,o){if(typeof n=="number")return u(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const d=n,i=Array(d.length);function u(f,S=!1){if(f===mt)return;if(f===yt)return NaN;if(f===wt)return 1/0;if(f===_t)return-1/0;if(f===bt)return-0;if(S)throw new Error("Invalid input");if(f in i)return i[f];const l=d[f];if(!l||typeof l!="object")i[f]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const w=l[0],_=o==null?void 0:o[w];if(_)return i[f]=_(u(l[1]));switch(w){case"Date":i[f]=new Date(l[1]);break;case"Set":const p=new Set;i[f]=p;for(let k=1;k<l.length;k+=1)p.add(u(l[k]));break;case"Map":const D=new Map;i[f]=D;for(let k=1;k<l.length;k+=2)D.set(u(l[k]),u(l[k+1]));break;case"RegExp":i[f]=new RegExp(l[1],l[2]);break;case"Object":i[f]=Object(l[1]);break;case"BigInt":i[f]=BigInt(l[1]);break;case"null":const x=Object.create(null);i[f]=x;for(let k=1;k<l.length;k+=2)x[l[k]]=u(l[k+1]);break;default:throw new Error(`Unknown type ${w}`)}}else{const w=new Array(l.length);i[f]=w;for(let _=0;_<l.length;_+=1){const p=l[_];p!==gt&&(w[_]=u(p))}}else{const w={};i[f]=w;for(const _ in l){const p=l[_];w[_]=u(p)}}return i[f]}return u(0)}const Ge=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ge];const Et=new Set([...Ge]);[...Et];function St(n){return n.filter(o=>o!=null)}const kt="x-sveltekit-invalidated",z=ze(Be)??{},Z=ze(Ke)??{};function ve(n){z[n]=Q()}function Rt(n,o){var $e;const d=pt(n),i=n.nodes[0],u=n.nodes[1];i(),u();const f=document.documentElement,S=[],l=[];let w=null;const _={before_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},D=!1,x=!1,k=!0,N=!1,P=!1,G=!1,H=!1,q,j=($e=history.state)==null?void 0:$e[V];j||(j=Date.now(),history.replaceState({...history.state,[V]:j},"",location.href));const ue=z[j];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let F,ne,ae;async function ke(){ae=ae||Promise.resolve(),await ae,ae=null;const e=new URL(location.href),t=W(e,!0);w=null;const r=ne={},a=t&&await he(t);if(r===ne&&a){if(a.type==="redirect")return re(new URL(a.location,e).href,{},[e.pathname],r);a.props.page!==void 0&&(F=a.props.page),q.$set(a.props)}}function Re(e){l.some(t=>t==null?void 0:t.snapshot)&&(Z[e]=l.map(t=>{var r;return(r=t==null?void 0:t.snapshot)==null?void 0:r.capture()}))}function Ae(e){var t;(t=Z[e])==null||t.forEach((r,a)=>{var s,c;(c=(s=l[a])==null?void 0:s.snapshot)==null||c.restore(r)})}function Ie(){ve(j),Me(Be,z),Re(j),Me(Ke,Z)}async function re(e,{noScroll:t=!1,replaceState:r=!1,keepFocus:a=!1,state:s={},invalidateAll:c=!1},m,g){return typeof e=="string"&&(e=new URL(e,Ce(document))),ce({url:e,scroll:t?Q():null,keepfocus:a,redirect_chain:m,details:{state:s,replaceState:r},nav_token:g,accepted:()=>{c&&(H=!0)},blocked:()=>{},type:"goto"})}async function Le(e){return w={id:e.id,promise:he(e).then(t=>(t.type==="loaded"&&t.state.error&&(w=null),t))},w.promise}async function oe(...e){const r=d.filter(a=>e.some(s=>a.exec(s))).map(a=>Promise.all([...a.layouts,a.leaf].map(s=>s==null?void 0:s[1]())));await Promise.all(r)}function Oe(e){var a;p=e.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),F=e.props.page,q=new n.root({target:o,props:{...e.props,stores:M,components:l},hydrate:!0}),Ae(j);const r={from:null,to:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};_.after_navigate.forEach(s=>s(r)),x=!0}async function Y({url:e,params:t,branch:r,status:a,error:s,route:c,form:m}){let g="never";for(const b of r)(b==null?void 0:b.slash)!==void 0&&(g=b.slash);e.pathname=Xe(e.pathname,g),e.search=e.search;const v={type:"loaded",state:{url:e,params:t,branch:r,error:s,route:c},props:{constructors:St(r).map(b=>b.node.component)}};m!==void 0&&(v.props.form=m);let y={},R=!F,A=0;for(let b=0;b<Math.max(r.length,p.branch.length);b+=1){const h=r[b],U=p.branch[b];(h==null?void 0:h.data)!==(U==null?void 0:U.data)&&(R=!0),h&&(y={...y,...h.data},R&&(v.props[`data_${A}`]=y),A+=1)}return(!p.url||e.href!==p.url.href||p.error!==s||m!==void 0&&m!==F.form||R)&&(v.props.page={error:s,params:t,route:{id:(c==null?void 0:c.id)??null},status:a,url:new URL(e),form:m??null,data:R?y:F.data}),v}async function de({loader:e,parent:t,url:r,params:a,route:s,server_data_node:c}){var y,R,A;let m=null;const g={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await e();if((y=v.universal)!=null&&y.load){let O=function(...h){for(const U of h){const{href:$}=new URL(U,r);g.dependencies.add($)}};const b={route:{get id(){return g.route=!0,s.id}},params:new Proxy(a,{get:(h,U)=>(g.params.add(U),h[U])}),data:(c==null?void 0:c.data)??null,url:tt(r,()=>{g.url=!0}),async fetch(h,U){let $;h instanceof Request?($=h.url,U={body:h.method==="GET"||h.method==="HEAD"?void 0:await h.blob(),cache:h.cache,credentials:h.credentials,headers:h.headers,integrity:h.integrity,keepalive:h.keepalive,method:h.method,mode:h.mode,redirect:h.redirect,referrer:h.referrer,referrerPolicy:h.referrerPolicy,signal:h.signal,...U}):$=h;const C=new URL($,r);return O(C.href),C.origin===r.origin&&($=C.href.slice(r.origin.length)),x?st($,C.href,U):it($,U)},setHeaders:()=>{},depends:O,parent(){return g.parent=!0,t()}};m=await v.universal.load.call(null,b)??null,m=m?await ht(m):null}return{node:v,loader:e,server:c,universal:(R=v.universal)!=null&&R.load?{type:"data",data:m,uses:g}:null,data:m??(c==null?void 0:c.data)??null,slash:((A=v.universal)==null?void 0:A.trailingSlash)??(c==null?void 0:c.slash)}}function Pe(e,t,r,a,s){if(H)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&r)return!0;for(const c of a.params)if(s[c]!==p.params[c])return!0;for(const c of a.dependencies)if(S.some(m=>m(new URL(c))))return!0;return!1}function pe(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}async function he({id:e,invalidating:t,url:r,params:a,route:s}){if((w==null?void 0:w.id)===e)return w.promise;const{errors:c,layouts:m,leaf:g}=s,v=[...m,g];c.forEach(E=>E==null?void 0:E().catch(()=>{})),v.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let y=null;const R=p.url?e!==p.url.pathname+p.url.search:!1,A=p.route?s.id!==p.route.id:!1;let O=!1;const b=v.map((E,L)=>{var B;const I=p.branch[L],T=!!(E!=null&&E[0])&&((I==null?void 0:I.loader)!==E[1]||Pe(O,A,R,(B=I.server)==null?void 0:B.uses,a));return T&&(O=!0),T});if(b.some(Boolean)){try{y=await He(r,b)}catch(E){return ie({status:E instanceof ee?E.status:500,error:await X(E,{url:r,params:a,route:{id:s.id}}),url:r,route:s})}if(y.type==="redirect")return y}const h=y==null?void 0:y.nodes;let U=!1;const $=v.map(async(E,L)=>{var me;if(!E)return;const I=p.branch[L],T=h==null?void 0:h[L];if((!T||T.type==="skip")&&E[1]===(I==null?void 0:I.loader)&&!Pe(U,A,R,(me=I.universal)==null?void 0:me.uses,a))return I;if(U=!0,(T==null?void 0:T.type)==="error")throw T;return de({loader:E[1],url:r,params:a,route:s,parent:async()=>{var Te;const je={};for(let ge=0;ge<L;ge+=1)Object.assign(je,(Te=await $[ge])==null?void 0:Te.data);return je},server_data_node:pe(T===void 0&&E[0]?{type:"skip"}:T??null,E[0]?I==null?void 0:I.server:void 0)})});for(const E of $)E.catch(()=>{});const C=[];for(let E=0;E<v.length;E+=1)if(v[E])try{C.push(await $[E])}catch(L){if(L instanceof Fe)return{type:"redirect",location:L.location};let I=500,T;if(h!=null&&h.includes(L))I=L.status??I,T=L.error;else if(L instanceof ee)I=L.status,T=L.body;else{if(await M.updated.check())return await J(r);T=await X(L,{params:a,url:r,route:{id:s.id}})}const B=await Ue(E,C,c);return B?await Y({url:r,params:a,branch:C.slice(0,B.idx).concat(B.node),status:I,error:T,route:s}):await Ne(r,{id:s.id},T,I)}else C.push(void 0);return await Y({url:r,params:a,branch:C,status:200,error:null,route:s,form:t?void 0:null})}async function Ue(e,t,r){for(;e--;)if(r[e]){let a=e;for(;!t[a];)a-=1;try{return{idx:a+1,node:{node:await r[e](),loader:r[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:t,url:r,route:a}){const s={};let c=null;if(n.server_loads[0]===0)try{const y=await He(r,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;c=y.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||D)&&await J(r)}const g=await de({loader:i,url:r,params:s,route:a,parent:()=>Promise.resolve({}),server_data_node:pe(c)}),v={node:await u(),loader:u,universal:null,server:null,data:null};return await Y({url:r,params:s,branch:[g,v],status:e,error:t,route:null})}function W(e,t){if(_e(e,K))return;const r=se(e);for(const a of d){const s=a.exec(r);if(s)return{id:e.pathname+e.search,invalidating:t,route:a,params:Qe(s),url:e}}}function se(e){return Ze(e.pathname.slice(K.length)||"/")}function xe({url:e,type:t,intent:r,delta:a}){var g,v;let s=!1;const c={from:{params:p.params,route:{id:((g=p.route)==null?void 0:g.id)??null},url:p.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((v=r==null?void 0:r.route)==null?void 0:v.id)??null},url:e},willUnload:!r,type:t};a!==void 0&&(c.delta=a);const m={...c,cancel:()=>{s=!0}};return P||_.before_navigate.forEach(y=>y(m)),s?null:c}async function ce({url:e,scroll:t,keepfocus:r,redirect_chain:a,details:s,type:c,delta:m,nav_token:g={},accepted:v,blocked:y}){var $,C,E;const R=W(e,!1),A=xe({url:e,type:c,delta:m,intent:R});if(!A){y();return}const O=j;v(),P=!0,x&&M.navigating.set(A),ne=g;let b=R&&await he(R);if(!b){if(_e(e,K))return await J(e);b=await Ne(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(R==null?void 0:R.url)||e,ne!==g)return!1;if(b.type==="redirect")if(a.length>10||a.includes(e.pathname))b=await ie({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(b.location,e).href,{},[...a,e.pathname],g),!1;else(($=b.props.page)==null?void 0:$.status)>=400&&await M.updated.check()&&await J(e);if(S.length=0,H=!1,N=!0,ve(O),Re(O),(C=b.props.page)!=null&&C.url&&b.props.page.url.pathname!==e.pathname&&(e.pathname=(E=b.props.page)==null?void 0:E.url.pathname),s){const L=s.replaceState?0:1;if(s.state[V]=j+=L,history[s.replaceState?"replaceState":"pushState"](s.state,"",e),!s.replaceState){let I=j+1;for(;Z[I]||z[I];)delete Z[I],delete z[I],I+=1}}w=null,x?(p=b.state,b.props.page&&(b.props.page.url=e),q.$set(b.props)):Oe(b);const{activeElement:h}=document;if(await ye(),k){const L=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));t?scrollTo(t.x,t.y):L?L.scrollIntoView():scrollTo(0,0)}const U=document.activeElement!==h&&document.activeElement!==document.body;!r&&!U&&Ee(),k=!0,b.props.page&&(F=b.props.page),P=!1,c==="popstate"&&Ae(j),_.after_navigate.forEach(L=>L(A)),M.navigating.set(null),N=!1}async function Ne(e,t,r,a){return e.origin===location.origin&&e.pathname===location.pathname&&!D?await ie({status:a,error:r,url:e,route:t}):await J(e)}function J(e){return location.href=e.href,new Promise(()=>{})}function Ye(){let e;f.addEventListener("mousemove",c=>{const m=c.target;clearTimeout(e),e=setTimeout(()=>{a(m,2)},20)});function t(c){a(c.composedPath()[0],1)}f.addEventListener("mousedown",t),f.addEventListener("touchstart",t,{passive:!0});const r=new IntersectionObserver(c=>{for(const m of c)m.isIntersecting&&(oe(se(new URL(m.target.href))),r.unobserve(m.target))},{threshold:0});function a(c,m){const g=Ve(c,f);if(!g)return;const{url:v,external:y,download:R}=we(g,K);if(y||R)return;const A=le(g);if(!A.reload)if(m<=A.preload_data){const O=W(v,!1);O&&Le(O)}else m<=A.preload_code&&oe(se(v))}function s(){r.disconnect();for(const c of f.querySelectorAll("a")){const{url:m,external:g,download:v}=we(c,K);if(g||v)continue;const y=le(c);y.reload||(y.preload_code===qe.viewport&&r.observe(c),y.preload_code===qe.eager&&oe(se(m)))}}_.after_navigate.push(s),s()}function X(e,t){return e instanceof ee?e.body:n.hooks.handleError({error:e,event:t})??{message:t.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{De(()=>(_.after_navigate.push(e),()=>{const t=_.after_navigate.indexOf(e);_.after_navigate.splice(t,1)}))},before_navigate:e=>{De(()=>(_.before_navigate.push(e),()=>{const t=_.before_navigate.indexOf(e);_.before_navigate.splice(t,1)}))},disable_scroll_handling:()=>{(N||!x)&&(k=!1)},goto:(e,t={})=>re(e,t,[]),invalidate:e=>{if(typeof e=="function")S.push(e);else{const{href:t}=new URL(e,location.href);S.push(r=>r.href===t)}return ke()},invalidate_all:()=>(H=!0,ke()),preload_data:async e=>{const t=new URL(e,Ce(document)),r=W(t,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);await Le(r)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const t=new URL(location.href),{branch:r,route:a}=p;if(!a)return;const s=await Ue(p.branch.length,r,a.errors);if(s){const c=await Y({url:t,params:p.params,branch:r.slice(0,s.idx).concat(s.node),status:e.status??500,error:e.error,route:a});p=c.state,q.$set(c.props),ye().then(Ee)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(q.$set({form:null,page:{...F,form:e.data,status:e.status}}),await ye(),q.$set({form:e.data}),e.type==="success"&&Ee())},_start_router:()=>{var e;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{var a;let r=!1;if(Ie(),!P){const s={from:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:p.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};_.before_navigate.forEach(c=>c(s))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ie()}),(e=navigator.connection)!=null&&e.saveData||Ye(),f.addEventListener("click",t=>{var A;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Ve(t.composedPath()[0],f);if(!r)return;const{url:a,external:s,target:c,download:m}=we(r,K);if(!a)return;if(c==="_parent"||c==="_top"){if(window.parent!==window)return}else if(c&&c!=="_self")return;const g=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||m)return;if(s||g.reload){xe({url:a,type:"link"})?P=!0:t.preventDefault();return}const[y,R]=a.href.split("#");if(R!==void 0&&y===location.href.split("#")[0]){if(p.url.hash===a.hash){t.preventDefault(),(A=r.ownerDocument.getElementById(R))==null||A.scrollIntoView();return}if(G=!0,ve(j),p.url=a,M.page.set({...F,url:a}),M.page.notify(),!g.replace_state)return;G=!1,t.preventDefault()}ce({url:a,scroll:g.noscroll?Q():null,keepfocus:g.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:g.replace_state??a.href===location.href},accepted:()=>t.preventDefault(),blocked:()=>t.preventDefault(),type:"link"})}),f.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const c=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(_e(c,K))return;const m=t.target,{keep_focus:g,noscroll:v,reload:y,replace_state:R}=le(m);if(y)return;t.preventDefault(),t.stopPropagation();const A=new FormData(m),O=a==null?void 0:a.getAttribute("name");O&&A.append(O,(a==null?void 0:a.getAttribute("value"))??""),c.search=new URLSearchParams(A).toString(),ce({url:c,scroll:v?Q():null,keepfocus:g??!1,redirect_chain:[],details:{state:{},replaceState:R??c.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[V]){if(t.state[V]===j)return;const a=z[t.state[V]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){z[j]=Q(),j=t.state[V],scrollTo(a.x,a.y);return}const s=t.state[V]-j;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=t.state[V]},blocked:()=>{history.go(-s)},type:"popstate",delta:s})}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[V]:++j},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&M.navigating.set(null)})},_hydrate:async({status:e=200,error:t,node_ids:r,params:a,route:s,data:c,form:m})=>{D=!0;const g=new URL(location.href);({params:a={},route:s={id:null}}=W(g,!1)||{});let v;try{const y=r.map(async(O,b)=>{const h=c[b];return h!=null&&h.uses&&(h.uses=Je(h.uses)),de({loader:n.nodes[O],url:g,params:a,route:s,parent:async()=>{const U={};for(let $=0;$<b;$+=1)Object.assign(U,(await y[$]).data);return U},server_data_node:pe(h)})}),R=await Promise.all(y),A=d.find(({id:O})=>O===s.id);if(A){const O=A.layouts;for(let b=0;b<O.length;b++)O[b]||R.splice(b,0,void 0)}v=await Y({url:g,params:a,branch:R,status:e,error:t,form:m,route:A??null})}catch(y){if(y instanceof Fe){await J(new URL(y.location,location.href));return}v=await ie({status:y instanceof ee?y.status:500,error:await X(y,{url:g,params:a,route:s}),url:g,route:s})}Oe(v)}}}async function He(n,o){const d=new URL(n);d.pathname=rt(n.pathname),d.searchParams.append(kt,o.map(u=>u?"1":"0").join(""));const i=await fe(d.href);if(!i.ok)throw new ee(i.status,await i.json());return new Promise(async u=>{var p;const f=new Map,S=i.body.getReader(),l=new TextDecoder;function w(D){return vt(D,{Promise:x=>new Promise((k,N)=>{f.set(x,{fulfil:k,reject:N})})})}let _="";for(;;){const{done:D,value:x}=await S.read();if(D&&!_)break;for(_+=!x&&_?`
`:l.decode(x);;){const k=_.indexOf(`
`);if(k===-1)break;const N=JSON.parse(_.slice(0,k));if(_=_.slice(k+1),N.type==="redirect")return u(N);if(N.type==="data")(p=N.nodes)==null||p.forEach(P=>{(P==null?void 0:P.type)==="data"&&(P.uses=Je(P.uses),P.data=w(P.data))}),u(N);else if(N.type==="chunk"){const{id:P,data:G,error:H}=N,q=f.get(P);f.delete(P),H?q.reject(w(H)):q.fulfil(w(G))}}}})}function Je(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function Ee(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const o=document.body,d=o.getAttribute("tabindex");o.tabIndex=-1,o.focus({preventScroll:!0,focusVisible:!1}),d!==null?o.setAttribute("tabindex",d):o.removeAttribute("tabindex");const i=getSelection();if(i&&i.type!=="None"){const u=[];for(let f=0;f<i.rangeCount;f+=1)u.push(i.getRangeAt(f));setTimeout(()=>{if(i.rangeCount===u.length){for(let f=0;f<i.rangeCount;f+=1){const S=u[f],l=i.getRangeAt(f);if(S.commonAncestorContainer!==l.commonAncestorContainer||S.startContainer!==l.startContainer||S.endContainer!==l.endContainer||S.startOffset!==l.startOffset||S.endOffset!==l.endOffset)return}i.removeAllRanges()}})}}}async function Pt(n,o,d){const i=Rt(n,o);We({client:i}),d?await i._hydrate(d):i.goto(location.href,{replaceState:!0}),i._start_router()}export{Pt as start};
