if(!self.define){let e,i={};const t=(t,s)=>(t=new URL(t+".js",s).href,i[t]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=i,document.head.appendChild(e)}else e=t,importScripts(t),i()})).then((()=>{let e=i[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const f=e=>t(e,r),c={module:{uri:r},exports:o,require:f};i[r]=Promise.all(s.map((e=>c[e]||f(e)))).then((e=>(n(...e),o)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"494f8d54d43ec1c5fe66b14a419724e2"},{url:"main.js",revision:"3b0d41fdfe85e28ffef25facdc2b8316"},{url:"main.js.LICENSE.txt",revision:"e518d1e46fd6c0d82735f74ecc24442f"}],{})}));
