import{H as f,s as y,a6 as m,W as q,a7 as w}from"./index.01f00b63.js";const o=[];function z(n,i){return{subscribe:A(n,i).subscribe}}function A(n,i=f){let u;const t=new Set;function a(e){if(y(n,e)&&(n=e,u)){const r=!o.length;for(const s of t)s[1](),o.push(s,n);if(r){for(let s=0;s<o.length;s+=2)o[s][0](o[s+1]);o.length=0}}}function l(e){a(e(n))}function b(e,r=f){const s=[e,r];return t.add(s),t.size===1&&(u=i(a)||f),e(n),()=>{t.delete(s),t.size===0&&(u(),u=null)}}return{set:a,update:l,subscribe:b}}function H(n,i,u){const t=!Array.isArray(n),a=t?[n]:n,l=i.length<2;return z(u,b=>{let e=!1;const r=[];let s=0,d=f;const g=()=>{if(s)return;d();const c=i(t?r[0]:r,b);l?b(c):d=w(c)?c:f},_=a.map((c,p)=>m(c,h=>{r[p]=h,s&=~(1<<p),e&&g()},()=>{s|=1<<p}));return e=!0,g(),function(){q(_),d()}})}export{H as d,A as w};
