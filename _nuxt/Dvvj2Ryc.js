import{d,bh as l,B as v,m as f,z as p,aT as g,bi as m,aY as h,b6 as _,S as i,aJ as y}from"./DXZkYQzd.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:t}=l(u),n=v(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&f("dd-navigation").value){const{navigation:a}=p();return{navigation:a}}const{data:o}=await g(`content-navigation-${h(n.value)}`,()=>m(n.value));return{navigation:o}},render(u){const t=_(),{navigation:n}=u,o=e=>i(y,{to:e._path},()=>e.title),a=(e,r)=>i("ul",r?{"data-level":r}:null,e.map(s=>s.children?i("li",null,[o(s),a(s.children,r+1)]):i("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),b=C,q=Object.assign(b,{__name:"ContentNavigation"});export{q as default};