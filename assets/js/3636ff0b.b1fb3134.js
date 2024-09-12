"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[1137],{1875:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>f});var t=n(6070),a=n(5296),l=n(9873),s=n(2244),i=n(5276);const u={},o="@farmfe/plugin-react",c={id:"plugins/official-plugins/react",title:"@farmfe/plugin-react",description:"Support React Jsx and React Refresh for Farm.",source:"@site/docs/plugins/official-plugins/react.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/react",permalink:"/farm-fe.github.io/docs/plugins/official-plugins/react",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/official-plugins/react.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"Overview",permalink:"/farm-fe.github.io/docs/plugins/official-plugins/overview"},next:{title:"@farmfe/plugin-sass",permalink:"/farm-fe.github.io/docs/plugins/official-plugins/sass"}},d={},f=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"farmfeplugin-react",children:"@farmfe/plugin-react"}),"\n",(0,t.jsxs)(r.p,{children:["Support ",(0,t.jsx)(r.code,{children:"React Jsx"})," and ",(0,t.jsx)(r.code,{children:"React Refresh"})," for Farm."]}),"\n",(0,t.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"npm",label:"npm",children:(0,t.jsx)(l.A,{children:"npm install @farmfe/plugin-react react-refresh"})}),(0,t.jsx)(i.A,{value:"yarn",label:"yarn",children:(0,t.jsx)(l.A,{children:"yarn add @farmfe/plugin-react react-refresh"})}),(0,t.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(l.A,{children:"pnpm add @farmfe/plugin-react react-refresh"})})]}),"\n",(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"@farmfe/plugin-react"})," is a Rust plugin, you only need to configure its package name in ",(0,t.jsx)(r.code,{children:"plugins"})," field in ",(0,t.jsx)(r.code,{children:"farm.config.ts"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:"{4}",children:"import { UserConfig } from '@farmfe/core';\n\nconst config: UserConfig = {\n  plugins: ['@farmfe/plugin-react', { /** options here */}]\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"https://swc.rs/docs/configuration/compilation#jsctransformreact",children:"SWC Transform React Options"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},5276:(e,r,n)=>{n.d(r,{A:()=>s});n(758);var t=n(3526);const a={tabItem:"tabItem__ncD"};var l=n(6070);function s(e){let{children:r,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:n,children:r})}},2244:(e,r,n)=>{n.d(r,{A:()=>w});var t=n(758),a=n(3526),l=n(5351),s=n(5557),i=n(7090),u=n(536),o=n(745),c=n(2455);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:n}=e;const a=(0,s.W6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,u.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(a.location.search);r.set(l,e),a.replace({...a.location,search:r.toString()})}),[l,a])]}function m(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,l=f(e),[s,u]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:l}))),[o,d]=h({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,l]=(0,c.Dv)(n);return[a,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=o??m;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{b&&u(b)}),[b]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=n(6298);const b={tabList:"tabList_vFQY",tabItem:"tabItem_w9v8"};var v=n(6070);function x(e){let{className:r,block:n,selectedValue:t,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),c=e=>{const r=e.currentTarget,n=u.indexOf(r),a=i[n].value;a!==t&&(o(r),s(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;r=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;r=u[n]??u[u.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>u.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function j(e){let{lazy:r,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function y(e){const r=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...r,...e}),(0,v.jsx)(j,{...r,...e})]})}function w(e){const r=(0,g.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(r))}}}]);