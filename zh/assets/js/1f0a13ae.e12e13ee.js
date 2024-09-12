"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[8837],{7311:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var r=a(6070),s=a(5296),t=a(9873),l=a(2244),i=a(5276);const u={},o="@farmfe/plugin-sass",c={id:"plugins/official-plugins/sass",title:"@farmfe/plugin-sass",description:"\u652f\u6301 sass \u7f16\u8bd1",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugins/official-plugins/sass.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/sass",permalink:"/zh/docs/plugins/official-plugins/sass",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/official-plugins/sass.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/plugin-react",permalink:"/zh/docs/plugins/official-plugins/react"},next:{title:"@farmfe/plugin-strip",permalink:"/zh/docs/plugins/official-plugins/strip"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"additionalData",id:"additionaldata",level:3}];function f(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"farmfeplugin-sass",children:"@farmfe/plugin-sass"}),"\n",(0,r.jsxs)(n.p,{children:["\u652f\u6301 ",(0,r.jsx)(n.code,{children:"sass"})," \u7f16\u8bd1"]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(i.A,{value:"npm",label:"npm",children:(0,r.jsx)(t.A,{children:"npm install @farmfe/plugin-sass"})}),(0,r.jsx)(i.A,{value:"yarn",label:"yarn",children:(0,r.jsx)(t.A,{children:"yarn add @farmfe/plugin-sass"})}),(0,r.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.A,{children:"pnpm add @farmfe/plugin-sass"})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@farmfe/plugin-sass"})," \u662f\u4e00\u4e2a Rust \u63d2\u4ef6\uff0c\u4f60\u53ea\u9700\u8981\u5728 ",(0,r.jsx)(n.code,{children:"farm.config.ts"})," \u7684 ",(0,r.jsx)(n.code,{children:"plugins"})," \u5b57\u6bb5\u4e2d\u914d\u7f6e\u5b83\u7684\u5305\u540d\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"{4}",children:"import { UserConfig } from '@farmfe/core';\n\nconst config: UserConfig = {\n  plugins: ['@farmfe/plugin-sass', { /** options here */}]\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.h3,{id:"additionaldata",children:"additionalData"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u7c7b\u578b"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u6bcf\u4e2a ",(0,r.jsx)(n.code,{children:"sass"})," \u6587\u4ef6\u5934\u90e8\u6dfb\u52a0\u989d\u5916\u5185\u5bb9\uff0c\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"@import '@/styles/variables.scss';"})," \u8bed\u53e5\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},5276:(e,n,a)=>{a.d(n,{A:()=>l});a(758);var r=a(3526);const s={tabItem:"tabItem__ncD"};var t=a(6070);function l(e){let{children:n,hidden:a,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:a,children:n})}},2244:(e,n,a)=>{a.d(n,{A:()=>w});var r=a(758),s=a(3526),t=a(5351),l=a(5557),i=a(7090),u=a(536),o=a(745),c=a(2455);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:s}}=e;return{value:n,label:a,attributes:r,default:s}}))}(a);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function f(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:a}=e;const s=(0,l.W6)(),t=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,u.aZ)(t),(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(s.location.search);n.set(t,e),s.replace({...s.location,search:n.toString()})}),[t,s])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,t=p(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:t}))),[o,d]=h({queryString:a,groupId:s}),[m,g]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,t]=(0,c.Dv)(a);return[s,(0,r.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:s}),b=(()=>{const e=o??m;return f({value:e,tabValues:t})?e:null})();(0,i.A)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,t]),tabValues:t}}var g=a(6298);const b={tabList:"tabList_vFQY",tabItem:"tabItem_w9v8"};var v=a(6070);function x(e){let{className:n,block:a,selectedValue:r,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),c=e=>{const n=e.currentTarget,a=u.indexOf(n),s=i[a].value;s!==r&&(o(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;n=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;n=u[a]??u[u.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:t}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...t,className:(0,s.A)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:s}=e;const t=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}}}]);