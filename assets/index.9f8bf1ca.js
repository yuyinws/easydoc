import{o as c,f as g,h,t as P,r as _,b as d,w,j as S,k as L,l as b,m as p,n as C,p as r,u as x,F as $}from"./vendor.abe1c4fb.js";import{g as B,a as j}from"./index.578111aa.js";import{_ as y}from"./index.c42389c2.js";import{N as T}from"./Tree.c62e8447.js";const F={class:"min-w-full bg-gray-100 p-3 grid grid-cols-3"},N={class:"text-center"},E={props:{title:{type:String,default:""}},emits:["changePop"],setup(s,{emit:n}){return(t,e)=>(c(),g("div",F,[h("i",{class:"iconfont icon-cebianlan",onClick:e[0]||(e[0]=o=>n("changePop"))}),h("div",N,P(s.title),1)]))}},I={props:{isPopShow:Boolean},setup(s){return(n,t)=>{const e=_("van-popup");return c(),d(e,{style:{"min-width":"50%",height:"100%"},show:s.isPopShow,"onUpdate:show":t[0]||(t[0]=o=>L(isPopShow)?isPopShow.value=o:null),position:"left"},{default:w(()=>[S(n.$slots,"default")]),_:3},8,["show"])}}};const V={key:1},D={emits:["getText"],setup(s,{emit:n}){const t=b({catalog:[]}),e=p(!0),o=async(a,l=null)=>{const i=await u(a);let f=!1;l?t.catalog[l].children=i:t.catalog=i,i.forEach((m,k)=>{m.type==="dir"&&(f=!0,o(m.path,k))}),e.value=f},u=async a=>await B(a),v=a=>{console.log(a)};return C(()=>{o()}),(a,l)=>{const i=_("van-loading");return e.value?(c(),d(i,{key:0,class:"loading",color:"#1989fa"})):(c(),g("div",V,[r(x(T),{"block-line":"",data:x(t).catalog,selectable:"","key-field":"sha","label-field":"name","on-update:selected-keys":v},null,8,["data"])]))}}};var G=y(D,[["__scopeId","data-v-48e5ca96"]]);const H={props:{text:{type:String,default:""},iscontainerLoading:Boolean},setup(s){return(n,t)=>{const e=_("van-loading"),o=_("v-md-preview");return s.iscontainerLoading?(c(),d(e,{key:0,class:"loading",color:"#1989fa"})):(c(),d(o,{key:1,text:s.text},null,8,["text"]))}}};var M=y(H,[["__scopeId","data-v-50168092"]]);const A={setup(s){const n=p(!1),t=p("**Empty**"),e=p("Home"),o=p(!1),u=()=>{n.value=!n.value},v=async a=>{e.value=a.name,u(),o.value=!0;const l=await j(a.path);t.value=l,o.value=!1};return(a,l)=>{const i=_("router-view");return c(),g($,null,[r(E,{title:e.value,onChangePop:u},null,8,["title"]),r(I,{isPopShow:n.value},{default:w(()=>[r(G,{onGetText:v})]),_:1},8,["isPopShow"]),r(M,{text:t.value,iscontainerLoading:o.value},null,8,["text","iscontainerLoading"]),r(i)],64)}}};export{A as default};
