import{c as v,a as y,r as g,o as _,b,V as h,g as w,d as x,e as z,f as L}from"./vendor.b33d976e.js";const H=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};H();const E="modulepreload",f={},M="/easydoc/",V=function(r,s){return!s||s.length===0?r():Promise.all(s.map(o=>{if(o=`${M}${o}`,o in f)return;f[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":E,e||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),e)return new Promise((l,d)=>{i.addEventListener("load",l),i.addEventListener("error",d)})})).then(()=>r())},B=[{path:"/easydoc",name:"index",component:()=>V(()=>import("./index.f6c52dc7.js"),["assets/index.f6c52dc7.js","assets/index.6e76a013.css","assets/vendor.b33d976e.js"])}],C=v({history:y(),routes:B});var A=(c,r)=>{for(const[s,o]of r)c[s]=o;return c};const O={};function P(c,r){const s=g("router-view");return _(),b(s)}var T=A(O,[["render",P]]);(function(c){var r,s,o,e,t,i='<svg><symbol id="icon-guanbi" viewBox="0 0 1024 1024"><path d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z"  ></path></symbol><symbol id="icon-houtui" viewBox="0 0 1024 1024"><path d="M635.2 784c-6.4 0-12.8-1.6-17.6-6.4L371.2 529.6c-9.6-9.6-9.6-24 0-33.6l248-248c9.6-9.6 24-9.6 33.6 0 9.6 9.6 9.6 24 0 33.6L422.4 512l230.4 230.4c9.6 9.6 9.6 24 0 33.6-4.8 4.8-11.2 8-17.6 8z"  ></path></symbol><symbol id="icon-wenjianjia" viewBox="0 0 1024 1024"><path d="M912 208H427.872l-50.368-94.176A63.936 63.936 0 0 0 321.056 80H112c-35.296 0-64 28.704-64 64v736c0 35.296 28.704 64 64 64h800c35.296 0 64-28.704 64-64v-608c0-35.296-28.704-64-64-64z m-800-64h209.056l68.448 128H912v97.984c-0.416 0-0.8-0.128-1.216-0.128H113.248c-0.416 0-0.8 0.128-1.248 0.128V144z m0 736v-96l1.248-350.144 798.752 1.216V784h0.064v96H112z"  ></path></symbol><symbol id="icon-zhuye" viewBox="0 0 1024 1024"><path d="M149.5808 580.4544L113.3824 544.256l384.512-384.512 384.512 384.512-36.1984 36.1984L497.8944 232.1408z" fill="" ></path><path d="M745.5232 864.256H250.2144V552.2432h51.2V813.056h392.9088V552.2432h51.2z" fill="" ></path></symbol><symbol id="icon-24gl-fileText" viewBox="0 0 1024 1024"><path d="M842.666667 981.333333H181.333333a53.393333 53.393333 0 0 1-53.333333-53.333333V96a53.393333 53.393333 0 0 1 53.333333-53.333333h466.746667a52.986667 52.986667 0 0 1 37.713333 15.62l194.586667 194.586666a52.986667 52.986667 0 0 1 15.62 37.713334V928a53.393333 53.393333 0 0 1-53.333333 53.333333zM181.333333 85.333333a10.666667 10.666667 0 0 0-10.666666 10.666667v832a10.666667 10.666667 0 0 0 10.666666 10.666667h661.333334a10.666667 10.666667 0 0 0 10.666666-10.666667V298.666667h-160a53.393333 53.393333 0 0 1-53.333333-53.333334V85.333333z m501.333334 30.166667V245.333333a10.666667 10.666667 0 0 0 10.666666 10.666667h129.833334z m21.333333 652.5H320a21.333333 21.333333 0 0 1 0-42.666667h384a21.333333 21.333333 0 0 1 0 42.666667z m0-213.333333H320a21.333333 21.333333 0 0 1 0-42.666667h384a21.333333 21.333333 0 0 1 0 42.666667zM490.666667 298.666667H320a21.333333 21.333333 0 0 1 0-42.666667h170.666667a21.333333 21.333333 0 0 1 0 42.666667z" fill="#5C5C66" ></path></symbol><symbol id="icon-cebianlan" viewBox="0 0 1024 1024"><path d="M0.000256 844.8c0-28.288 22.8352-51.2 51.1232-51.2h921.7536c28.2368 0 51.1232 22.7328 51.1232 51.2 0 28.288-22.8352 51.2-51.1232 51.2H51.123456A51.0464 51.0464 0 0 1 0.000256 844.8z m0-332.8c0-28.288 22.8352-51.2 51.1232-51.2h921.7536c28.2368 0 51.1232 22.7328 51.1232 51.2 0 28.288-22.8352 51.2-51.1232 51.2H51.123456A51.0464 51.0464 0 0 1 0.000256 512zM0.000256 179.2c0-28.288 22.8352-51.2 51.1232-51.2h921.7536C1001.113856 128 1024.000256 150.7328 1024.000256 179.2c0 28.288-22.8352 51.2-51.1232 51.2H51.123456A51.0464 51.0464 0 0 1 0.000256 179.2z" fill="#9099B0" ></path></symbol></svg>',l=(l=document.getElementsByTagName("script"))[l.length-1].getAttribute("data-injectcss"),d=function(n,a){a.parentNode.insertBefore(n,a)};if(l&&!c.__iconfont__svg__cssinject__){c.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(n){console&&console.log(n)}}function u(){t||(t=!0,o())}function m(){try{e.documentElement.doScroll("left")}catch(n){return void setTimeout(m,50)}u()}r=function(){var n,a;(a=document.createElement("div")).innerHTML=i,i=null,(n=a.getElementsByTagName("svg")[0])&&(n.setAttribute("aria-hidden","true"),n.style.position="absolute",n.style.width=0,n.style.height=0,n.style.overflow="hidden",a=n,(n=document.body).firstChild?d(a,n.firstChild):n.appendChild(a))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(r,0):(s=function(){document.removeEventListener("DOMContentLoaded",s,!1),r()},document.addEventListener("DOMContentLoaded",s,!1)):document.attachEvent&&(o=r,e=c.document,t=!1,m(),e.onreadystatechange=function(){e.readyState=="complete"&&(e.onreadystatechange=null,u())})})(window);h.use(w);const p=x(T);p.config.globalProperties.$axios=z;p.use(C).use(L).use(h).mount("#app");export{A as _};
