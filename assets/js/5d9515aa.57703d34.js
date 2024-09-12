"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[9242],{391:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var l=n(6070),r=n(5296),t=n(9873),a=n(2244),i=n(5276);const o={},c="@farmfe/js-plugin-less",u={id:"plugins/official-plugins/js-less",title:"@farmfe/js-plugin-less",description:"Support less for Farm.",source:"@site/docs/plugins/official-plugins/js-less.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/js-less",permalink:"/farm-fe.github.io/docs/plugins/official-plugins/js-less",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/official-plugins/js-less.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/js-plugin-postcss",permalink:"/farm-fe.github.io/docs/plugins/official-plugins/js-postcss"},next:{title:"@farmfe/js-plugin-sass",permalink:"/farm-fe.github.io/docs/plugins/official-plugins/js-sass"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"lessOptions",id:"lessoptions",level:3},{value:"filters",id:"filters",level:3},{value:"implementation",id:"implementation",level:3},{value:"additionalData",id:"additionaldata",level:3}];function f(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{id:"farmfejs-plugin-less",children:"@farmfe/js-plugin-less"}),"\n",(0,l.jsxs)(s.p,{children:["Support ",(0,l.jsx)(s.code,{children:"less"})," for Farm."]}),"\n",(0,l.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsxs)(a.A,{children:[(0,l.jsx)(i.A,{value:"npm",label:"npm",children:(0,l.jsx)(t.A,{children:"npm install @farmfe/js-plugin-less less"})}),(0,l.jsx)(i.A,{value:"yarn",label:"yarn",children:(0,l.jsx)(t.A,{children:"yarn add @farmfe/js-plugin-less less"})}),(0,l.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,l.jsx)(t.A,{children:"pnpm add @farmfe/js-plugin-less less"})})]}),"\n",(0,l.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",metastring:"{2,6}",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginLess from '@farmfe/js-plugin-less';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginLess({ /* options */ })\n  ]\n}\n"})}),"\n",(0,l.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"export type LessPluginOptions = {\n  lessOptions?: Less.Options;\n  implementation?: string;\n  filters?: {\n    resolvedPaths?: string[];\n    moduleTypes?: string[];\n  };\n  additionalData?:\n    | string\n    | ((context?: string, resolvePath?: string) => string | Promise<string>);\n};\n"})}),"\n",(0,l.jsx)(s.h3,{id:"lessoptions",children:"lessOptions"}),"\n",(0,l.jsxs)(s.p,{children:["Less options. See ",(0,l.jsx)(s.a,{href:"https://lesscss.org/usage/#less-options",children:"less options"}),"."]}),"\n",(0,l.jsx)(s.p,{children:"Example:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"import path from 'node:path';\nimport { UserConfig } from '@farmfe/core';\nimport farmJsPluginLess from '@farmfe/js-plugin-less';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginLess({\n      lessOptions: {\n        paths: [path.resolve(process.cwd(), 'styles')]\n      }\n    })\n  ]\n}\n\nexport default config;\n"})}),"\n",(0,l.jsx)(s.h3,{id:"filters",children:"filters"}),"\n",(0,l.jsxs)(s.p,{children:["Which files should be processed by ",(0,l.jsx)(s.code,{children:"less"}),". default to ",(0,l.jsx)(s.code,{children:"{ resolvedPaths: ['\\\\.less$'] }"})," for load and ",(0,l.jsx)(s.code,{children:"{ moduleTypes: ['less'] }"})," for transform."]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"resolvedPaths"}),": Only files under these paths will be processed. Support regex."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"moduleTypes"}),": Only files with these module types will be processed."]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"resolvedPaths"})," and ",(0,l.jsx)(s.code,{children:"moduleTypes"})," are unioned, which means files match any of them will be processed."]}),"\n",(0,l.jsx)(s.p,{children:"Example:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginLess from '@farmfe/js-plugin-less';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginLess({\n      filters: {\n        // all files end with .custom-css will be processed\n        resolvedPaths: ['\\\\.custom-less$'],\n        moduleTypes: ['less']\n      }\n    })\n  ]\n}\n\nexport default config;\n"})}),"\n",(0,l.jsx)(s.h3,{id:"implementation",children:"implementation"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"implementation"})," package name of ",(0,l.jsx)(s.code,{children:"less"}),". Default to ",(0,l.jsx)(s.code,{children:"less"}),"."]}),"\n",(0,l.jsx)(s.h3,{id:"additionaldata",children:"additionalData"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"type AdditionalDataOption = string | ((content?: string, resolvePath?: string) => string | Promise<string>);\n"})}),"\n",(0,l.jsx)(s.p,{children:"Additional data to be added to every less file. Example:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginLess from '@farmfe/js-plugin-less';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginLess({\n      // add variables.less to every less file\n      additionalData: `\n        @import \"./src/styles/variables.less\";\n      `\n    })\n  ]\n}\n"})}),"\n",(0,l.jsx)(s.p,{children:"For less file:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-less",metastring:'title="index.less"',children:".foo {\n  color: @primary-color;\n}\n"})}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"additionalData"})," will be added to the top of the file:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-less",metastring:'title="index.less"',children:'@import "./src/styles/variables.less";\n\n.foo {\n  color: @primary-color;\n}\n'})}),"\n",(0,l.jsx)(s.p,{children:"Function form:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginLess from '@farmfe/js-plugin-less';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginLess({\n      // add variables.less to every less file\n      additionalData: (content, resolvePath) => {\n        if (resolvePath === '/path/to/index.less') {\n          return `\n            @import \"./src/styles/variables.less\";\n          `;\n        }\n      }\n    })\n  ]\n}\n"})})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(f,{...e})}):f(e)}},5276:(e,s,n)=>{n.d(s,{A:()=>a});n(758);var l=n(3526);const r={tabItem:"tabItem__ncD"};var t=n(6070);function a(e){let{children:s,hidden:n,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,a),hidden:n,children:s})}},2244:(e,s,n)=>{n.d(s,{A:()=>w});var l=n(758),r=n(3526),t=n(5351),a=n(5557),i=n(7090),o=n(536),c=n(745),u=n(2455);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:s,children:n}=e;return(0,l.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:n,attributes:l,default:r}}=e;return{value:s,label:n,attributes:l,default:r}}))}(n);return function(e){const s=(0,c.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function f(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:n}=e;const r=(0,a.W6)(),t=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,o.aZ)(t),(0,l.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(r.location.search);s.set(t,e),r.replace({...r.location,search:s.toString()})}),[t,r])]}function h(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,t=p(e),[a,o]=(0,l.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!f({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:s,tabValues:t}))),[c,d]=m({queryString:n,groupId:r}),[h,g]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,t]=(0,u.Dv)(n);return[r,(0,l.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:r}),j=(()=>{const e=c??h;return f({value:e,tabValues:t})?e:null})();(0,i.A)((()=>{j&&o(j)}),[j]);return{selectedValue:a,selectValue:(0,l.useCallback)((e=>{if(!f({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,t]),tabValues:t}}var g=n(6298);const j={tabList:"tabList_vFQY",tabItem:"tabItem_w9v8"};var x=n(6070);function b(e){let{className:s,block:n,selectedValue:l,selectValue:a,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),u=e=>{const s=e.currentTarget,n=o.indexOf(s),r=i[n].value;r!==l&&(c(s),a(r))},d=e=>{let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;s=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;s=o[n]??o[o.length-1];break}}s?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},s),children:i.map((e=>{let{value:s,label:n,attributes:t}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:l===s?0:-1,"aria-selected":l===s,ref:e=>o.push(e),onKeyDown:d,onClick:u,...t,className:(0,r.A)("tabs__item",j.tabItem,t?.className,{"tabs__item--active":l===s}),children:n??s},s)}))})}function v(e){let{lazy:s,children:n,selectedValue:r}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=t.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:t.map(((e,s)=>(0,l.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function y(e){const s=h(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,x.jsx)(b,{...s,...e}),(0,x.jsx)(v,{...s,...e})]})}function w(e){const s=(0,g.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(s))}}}]);