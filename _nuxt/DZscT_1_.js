import{d as h,an as v,ao as g,c as u,e as f,f as s,n as l,C as e,ah as o,h as k,ai as b,i as r,bz as y,a1 as x,ag as C,w as i,bA as A,bB as $,aV as w,aZ as N}from"./CJUmJSca.js";const U={class:"relative"},B=h({inheritAttrs:!1,__name:"Aside",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(c){const p={wrapper:"hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] py-8 lg:px-4 lg:-mx-4",top:{wrapper:"sticky -top-8 -mt-8 pointer-events-none z-[1]",header:"h-8 bg-background -mx-4 px-4",body:"bg-background relative pointer-events-auto flex -mx-4 px-4",footer:"h-8 bg-gradient-to-b from-background -mx-4 px-4"}},n=c,{ui:a,attrs:d}=v("aside",g(n,"ui"),p,g(n,"class"),!0);return(t,m)=>{const _=y;return u(),f("aside",b({class:e(a).wrapper},e(d)),[s("div",U,[t.$slots.top?(u(),f("div",{key:0,class:l(e(a).top.wrapper)},[s("div",{class:l(e(a).top.header)},null,2),s("div",{class:l(e(a).top.body)},[o(t.$slots,"top")],2),s("div",{class:l(e(a).top.footer)},null,2)],2)):k("",!0),o(t.$slots,"links",{},()=>[r(_,{links:c.links},null,8,["links"])]),o(t.$slots,"default"),o(t.$slots,"bottom")])],16)}}}),j=Object.assign(B,{__name:"UAside"}),z=h({__name:"docs",setup(c){const p=x("navigation");return(n,a)=>{const d=$,t=j,m=w,_=N;return u(),C(_,null,{default:i(()=>[r(m,null,{left:i(()=>[r(t,null,{default:i(()=>[r(d,{links:("mapContentNavigation"in n?n.mapContentNavigation:e(A))(e(p))},null,8,["links"])]),_:1})]),default:i(()=>[o(n.$slots,"default")]),_:3})]),_:3})}}});export{z as default};
