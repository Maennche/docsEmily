import{d,x as m,B as b,an as f,ac as g,c as x,ag as _,w as n,i as s,C as a,n as o,f as v,t as c,bb as y,bc as C,bd as h,ad as S,a9 as k}from"./CJUmJSca.js";import{r as w}from"./B6YSVUPI.js";import"./hbOoBq-x.js";const B=d({__name:"Collapsible",props:{name:{type:String,default:"properties"},openText:{type:String,default:"Show"},closeText:{type:String,default:"Hide"}},setup(t){const i=m(),l=b(()=>({button:{base:"flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{name:i.ui.icons.chevron,base:"w-4 h-4 transform transition-transform duration-200",active:"",inactive:"-rotate-90"}},panel:"mt-4 ml-2 py-2.5 pl-4 border-l border-gray-200 dark:border-gray-800 [&>div]:!mt-0"})),{ui:e}=f("content.collapsible",void 0,l,void 0,!0);return g(()=>S()),(p,T)=>{const u=k;return x(),_(a(h),{as:"div"},{default:n(({open:r})=>[s(a(y),{class:o(a(e).button.base)},{default:n(()=>[s(u,{name:a(e).button.icon.name,class:o([a(e).button.icon.base,r?a(e).button.icon.active:a(e).button.icon.inactive])},null,8,["name","class"]),v("span",null,c(r?t.closeText:t.openText)+" "+c(t.name),1)]),_:2},1032,["class"]),s(a(C),{class:o(a(e).panel)},{default:n(()=>[w(p.$slots,"default",{unwrap:"p"})]),_:3},8,["class"])]),_:3})}}}),U=Object.assign(B,{__name:"Collapsible"});export{U as default};
