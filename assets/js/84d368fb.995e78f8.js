"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[974],{9829:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>u,metadata:()=>c,toc:()=>f});var l=a(6070),r=a(5296),t=a(9873),i=a(2244),s=a(5276);const u={},o="@farmfe/plugin-yaml",c={id:"plugins/official-plugins/yaml",title:"@farmfe/plugin-yaml",description:"Inspired By @rollup/plugin-yaml",source:"@site/docs/plugins/official-plugins/yaml.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/yaml",permalink:"/farm-fe.github.io/docs/plugins/official-plugins/yaml",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/official-plugins/yaml.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/plugin-dsv",permalink:"/farm-fe.github.io/docs/plugins/official-plugins/dsv"},next:{title:"@farmfe/plugin-virtual",permalink:"/farm-fe.github.io/docs/plugins/official-plugins/virtual"}},d={},f=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"farmfeplugin-yaml",children:"@farmfe/plugin-yaml"}),"\n",(0,l.jsxs)(n.p,{children:["Inspired By ",(0,l.jsx)(n.a,{href:"https://www.npmjs.com/package/@rollup/plugin-yaml",children:"@rollup/plugin-yaml"})]}),"\n",(0,l.jsx)(n.p,{children:"\ud83c\udf63 A Farm plugin which Converts YAML files to ES6 modules."}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsxs)(i.A,{children:[(0,l.jsx)(s.A,{value:"npm",label:"npm",children:(0,l.jsx)(t.A,{children:"npm install @farmfe/plugin-yaml"})}),(0,l.jsx)(s.A,{value:"yarn",label:"yarn",children:(0,l.jsx)(t.A,{children:"yarn add @farmfe/plugin-yaml"})}),(0,l.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,l.jsx)(t.A,{children:"pnpm add @farmfe/plugin-yaml"})})]}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.p,{children:"farm.config.ts"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  plugins: [\n    [\n      '@farmfe/plugin-yaml',\n      {\n        documentMode: 'single' | 'multi', // default single\n        include: Regex, // default None,\n        exclude: Regex, // default None\n      },\n    ],\n  ],\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"notice:"}),"\n",(0,l.jsxs)(n.p,{children:["include or exclude is Regex not glob For example ",(0,l.jsx)(n.code,{children:"**/01.yaml"})," is not illegal\u3002What is right is like ",(0,l.jsx)(n.code,{children:'".*\\\\/01.yaml"'})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},5276:(e,n,a)=>{a.d(n,{A:()=>i});a(758);var l=a(3526);const r={tabItem:"tabItem__ncD"};var t=a(6070);function i(e){let{children:n,hidden:a,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,i),hidden:a,children:n})}},2244:(e,n,a)=>{a.d(n,{A:()=>w});var l=a(758),r=a(3526),t=a(5351),i=a(5557),s=a(7090),u=a(536),o=a(745),c=a(2455);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:a}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:l,default:r}}=e;return{value:n,label:a,attributes:l,default:r}}))}(a);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const r=(0,i.W6)(),t=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,u.aZ)(t),(0,l.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function h(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,t=f(e),[i,u]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=a.find((e=>e.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:t}))),[o,d]=m({queryString:a,groupId:r}),[h,g]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,c.Dv)(a);return[r,(0,l.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:r}),b=(()=>{const e=o??h;return p({value:e,tabValues:t})?e:null})();(0,s.A)((()=>{b&&u(b)}),[b]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,t]),tabValues:t}}var g=a(6298);const b={tabList:"tabList_vFQY",tabItem:"tabItem_w9v8"};var v=a(6070);function x(e){let{className:n,block:a,selectedValue:l,selectValue:i,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),c=e=>{const n=e.currentTarget,a=u.indexOf(n),r=s[a].value;r!==l&&(o(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;n=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;n=u[a]??u[u.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:t}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...t,className:(0,r.A)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":l===n}),children:a??n},n)}))})}function y(e){let{lazy:n,children:a,selectedValue:r}=e;const t=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=h(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(y,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}}}]);