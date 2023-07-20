import{s as ys,f as p,a as n,H as V,e as ps,g as o,A as r,c as a,w as W,j as E,i as e,y as q,d as t}from"./scheduler.9e62786c.js";import{S as Cs,i as us}from"./index.39045ece.js";import{b as fs}from"./paths.aaf74114.js";function vs(os){let i,$="Getting started",L,D,J='<a href="#what-is-svelte-fluent">What is svelte-fluent?</a>',A,v,N=`<code>svelte-fluent</code> is a svelte component library that aims to make it effortless to localize applications using
the <a href="https://projectfluent.org/" rel="noopener noreferrer" target="_blank">Fluent</a> localization system by Mozilla.`,j,c,Q='<a href="#installation">Installation</a>',P,d,X="Install <code>svelte-fluent</code> with your package manager of choice.",S,b,rs=`<pre class="shiki dark-plus" style="background-color: #1E1E1E" tabindex="0"><code><span class="line"><span style="color: #D4D4D4">npm install --save-dev @nubolab-ffwd/svelte-fluent</span></span>
<span class="line"><span style="color: #D4D4D4">npm install --save jsdom</span></span></code></pre>`,k,y,Y='<a href="#configure-bundler">Configure bundler</a>',z,m,Z=`<code>svelte-fluent</code> needs an additional bundler plugin to support server-side rendering (SSR) and <a href="${fs}/docs/reference#overlay-experimental">DOM Overlays</a>. Currently vite and rollup are supported.`,I,C,ss='<a href="#sveltekit">SvelteKit</a>',R,x,ls="vite.config.js",B,H,is=`<pre class="shiki dark-plus" style="background-color: #1E1E1E" tabindex="0"><code><span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> &#123; </span><span style="color: #9CDCFE">sveltekit</span><span style="color: #D4D4D4"> &#125; </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;@sveltejs/kit/vite&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">svelteFluent</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;@nubolab-ffwd/svelte-fluent/rollup-plugin&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #6A9955">/** </span><span style="color: #569CD6">@type</span><span style="color: #6A9955"> </span><span style="color: #4EC9B0">&#123;import(&#39;vite&#39;).UserConfig&#125;</span><span style="color: #6A9955"> */</span></span>
<span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">config</span><span style="color: #D4D4D4"> = &#123;</span></span>
<span class="line"><span style="color: #D4D4D4">	</span><span style="color: #9CDCFE">plugins:</span><span style="color: #D4D4D4"> [</span><span style="color: #DCDCAA">svelteFluent</span><span style="color: #D4D4D4">(), </span><span style="color: #DCDCAA">sveltekit</span><span style="color: #D4D4D4">()]</span></span>
<span class="line"><span style="color: #D4D4D4">&#125;;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C586C0">export</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">default</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">config</span><span style="color: #D4D4D4">;</span></span></code></pre>`,F,u,es='<a href="#vite">Vite</a>',G,_,ts="vite.config.js",K,M,Ds=`<pre class="shiki dark-plus" style="background-color: #1E1E1E" tabindex="0"><code><span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">svelteFluent</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;@nubolab-ffwd/svelte-fluent/rollup-plugin&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #6A9955">/** </span><span style="color: #569CD6">@type</span><span style="color: #6A9955"> </span><span style="color: #4EC9B0">&#123;import(&#39;vite&#39;).UserConfig&#125;</span><span style="color: #6A9955"> */</span></span>
<span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">config</span><span style="color: #D4D4D4"> = &#123;</span></span>
<span class="line"><span style="color: #D4D4D4">	</span><span style="color: #9CDCFE">plugins:</span><span style="color: #D4D4D4"> [</span><span style="color: #DCDCAA">svelteFluent</span><span style="color: #D4D4D4">()]</span></span>
<span class="line"><span style="color: #D4D4D4">&#125;;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C586C0">export</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">default</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">config</span><span style="color: #D4D4D4">;</span></span></code></pre>`,T,f,ns='<a href="#rollup--sapper">Rollup / Sapper</a>',O,h,as="rollup.config.js",U,g,cs=`<pre class="shiki dark-plus" style="background-color: #1E1E1E" tabindex="0"><code><span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">svelteFluent</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;@nubolab-ffwd/svelte-fluent/rollup-plugin&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C586C0">export</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">default</span><span style="color: #D4D4D4"> &#123;</span></span>
<span class="line"><span style="color: #D4D4D4">	</span><span style="color: #9CDCFE">client:</span><span style="color: #D4D4D4"> &#123;</span></span>
<span class="line"><span style="color: #D4D4D4">		</span><span style="color: #9CDCFE">plugins:</span><span style="color: #D4D4D4"> [</span><span style="color: #DCDCAA">svelteFluent</span><span style="color: #D4D4D4">()]</span></span>
<span class="line"><span style="color: #D4D4D4">	&#125;,</span></span>
<span class="line"><span style="color: #D4D4D4">	</span><span style="color: #9CDCFE">server:</span><span style="color: #D4D4D4"> &#123;</span></span>
<span class="line"><span style="color: #D4D4D4">		</span><span style="color: #9CDCFE">plugins:</span><span style="color: #D4D4D4"> [</span><span style="color: #DCDCAA">svelteFluent</span><span style="color: #D4D4D4">(&#123; </span><span style="color: #9CDCFE">ssr:</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">true</span><span style="color: #D4D4D4"> &#125;)]</span></span>
<span class="line"><span style="color: #D4D4D4">	&#125;</span></span>
<span class="line"><span style="color: #D4D4D4">&#125;;</span></span></code></pre>`,w;return{c(){i=p("h1"),i.textContent=$,L=n(),D=p("h2"),D.innerHTML=J,A=n(),v=p("p"),v.innerHTML=N,j=n(),c=p("h2"),c.innerHTML=Q,P=n(),d=p("p"),d.innerHTML=X,S=n(),b=new V(!1),k=n(),y=p("h2"),y.innerHTML=Y,z=n(),m=p("p"),m.innerHTML=Z,I=n(),C=p("h3"),C.innerHTML=ss,R=n(),x=p("p"),x.textContent=ls,B=n(),H=new V(!1),F=n(),u=p("h3"),u.innerHTML=es,G=n(),_=p("p"),_.textContent=ts,K=n(),M=new V(!1),T=n(),f=p("h3"),f.innerHTML=ns,O=n(),h=p("p"),h.textContent=as,U=n(),g=new V(!1),w=ps(),this.h()},l(s){i=o(s,"H1",{id:!0,["data-svelte-h"]:!0}),r(i)!=="svelte-1e3ll1p"&&(i.textContent=$),L=a(s),D=o(s,"H2",{id:!0,["data-svelte-h"]:!0}),r(D)!=="svelte-j7199n"&&(D.innerHTML=J),A=a(s),v=o(s,"P",{["data-svelte-h"]:!0}),r(v)!=="svelte-mgnzhj"&&(v.innerHTML=N),j=a(s),c=o(s,"H2",{id:!0,["data-svelte-h"]:!0}),r(c)!=="svelte-18vig38"&&(c.innerHTML=Q),P=a(s),d=o(s,"P",{["data-svelte-h"]:!0}),r(d)!=="svelte-1jnhm40"&&(d.innerHTML=X),S=a(s),b=W(s,!1),k=a(s),y=o(s,"H2",{id:!0,["data-svelte-h"]:!0}),r(y)!=="svelte-1rwk9oo"&&(y.innerHTML=Y),z=a(s),m=o(s,"P",{["data-svelte-h"]:!0}),r(m)!=="svelte-4nfoto"&&(m.innerHTML=Z),I=a(s),C=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),r(C)!=="svelte-ts3zx1"&&(C.innerHTML=ss),R=a(s),x=o(s,"P",{["data-svelte-h"]:!0}),r(x)!=="svelte-1fu31bl"&&(x.textContent=ls),B=a(s),H=W(s,!1),F=a(s),u=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),r(u)!=="svelte-13rmenk"&&(u.innerHTML=es),G=a(s),_=o(s,"P",{["data-svelte-h"]:!0}),r(_)!=="svelte-1fu31bl"&&(_.textContent=ts),K=a(s),M=W(s,!1),T=a(s),f=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),r(f)!=="svelte-1jfxdiy"&&(f.innerHTML=ns),O=a(s),h=o(s,"P",{["data-svelte-h"]:!0}),r(h)!=="svelte-1b3so7x"&&(h.textContent=as),U=a(s),g=W(s,!1),w=ps(),this.h()},h(){E(i,"id","getting-started"),E(D,"id","what-is-svelte-fluent"),E(c,"id","installation"),b.a=k,E(y,"id","configure-bundler"),E(C,"id","sveltekit"),H.a=F,E(u,"id","vite"),M.a=T,E(f,"id","rollup--sapper"),g.a=w},m(s,l){e(s,i,l),e(s,L,l),e(s,D,l),e(s,A,l),e(s,v,l),e(s,j,l),e(s,c,l),e(s,P,l),e(s,d,l),e(s,S,l),b.m(rs,s,l),e(s,k,l),e(s,y,l),e(s,z,l),e(s,m,l),e(s,I,l),e(s,C,l),e(s,R,l),e(s,x,l),e(s,B,l),H.m(is,s,l),e(s,F,l),e(s,u,l),e(s,G,l),e(s,_,l),e(s,K,l),M.m(Ds,s,l),e(s,T,l),e(s,f,l),e(s,O,l),e(s,h,l),e(s,U,l),g.m(cs,s,l),e(s,w,l)},p:q,i:q,o:q,d(s){s&&(t(i),t(L),t(D),t(A),t(v),t(j),t(c),t(P),t(d),t(S),b.d(),t(k),t(y),t(z),t(m),t(I),t(C),t(R),t(x),t(B),H.d(),t(F),t(u),t(G),t(_),t(K),M.d(),t(T),t(f),t(O),t(h),t(U),t(w),g.d())}}}const _s=[{rank:1,text:"Getting started",id:"getting-started"},{rank:2,text:"What is svelte-fluent?",id:"what-is-svelte-fluent"},{rank:2,text:"Installation",id:"installation"},{rank:2,text:"Configure bundler",id:"configure-bundler"},{rank:3,text:"SvelteKit",id:"sveltekit"},{rank:3,text:"Vite",id:"vite"},{rank:3,text:"Rollup / Sapper",id:"rollup--sapper"}];class hs extends Cs{constructor(i){super(),us(this,i,null,vs,ys,{})}}export{hs as P,_s as h};
