import{bq as d,br as u,d as l,an as _,r as m,c as b,ag as f,C as y,am as C}from"./CJUmJSca.js";function v(t={}){const{copy:c,isSupported:i}=d(),o=u();function r(e,n={},a={}){i&&c(e).then(()=>{!n.title&&!n.description||o.add({...n,...t})},function(p){o.add({...a,description:a.description||p.message,...t})})}return{copy:r}}const g=l({__name:"ProseCodeButton",props:{code:{type:String,required:!0}},setup(t){const c=t,i={icon:{copy:"i-heroicons-clipboard-document",copied:"i-heroicons-clipboard-document-check"}},{ui:o}=_("content.prose.code.button",void 0,i,void 0,!0),r=v({timeout:2e3}),e=m(o.value.icon.copy);function n(){r.copy(c.code,{title:"Copied to clipboard!"}),e.value=o.value.icon.copied,setTimeout(()=>{e.value=o.value.icon.copy},2e3)}return(a,p)=>{const s=C;return b(),f(s,{icon:y(e),color:"gray",variant:"link",size:"xs","aria-label":"Copy code to clipboard",tabindex:"-1",onClick:n},null,8,["icon"])}}}),h=Object.assign(g,{__name:"ProseCodeButton"});export{h as default};
