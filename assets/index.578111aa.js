import{e as o,T as i}from"./vendor.abe1c4fb.js";o.defaults.baseURL="/";o.interceptors.response.use(e=>{let n=e.data;const{state:t,subMsg:r,code:s}=n;return t&&t!==200||s&&s!=="0"?(i(`\u9519\u8BEF\uFF1A${r}`),e.data):n},e=>{if(e.response)switch(e.response.status){case 403:i({type:"error",message:"\u9519\u8BEF\uFF1A403"});break;case 404:i({type:"error",message:"\u9519\u8BEF\uFF1A404"})}});function c(e,n,t){let r={method:e,url:n};return(e==="POST"||e==="PATCH"||e==="PUT")&&t&&(r.data=t),(e==="GET"||e==="DELETE")&&t&&(r.params=t),o(r).then(s=>s,s=>s)}var a={apiDomain:"blog.yuyinws.top",userName:"yuyinws",repo:"easydoc",clientId:"b46f59e6be5dff5ce391",secrets:"6c555701c1d52183e9a8b4351365bb50914bcf6b"};function f(e="doc"){return c("get",`https://api.github.com/repos/${a.userName}/${a.repo}/contents/${e}?ref=gh-pages&client_id=${a.clientId}&client_secret=${a.secrets}`)}function p(e){return c("get",`/${a.repo}/${e}`)}export{p as a,f as g};
