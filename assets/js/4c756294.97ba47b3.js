"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[1831],{132:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>f});var a=n(6070),r=n(5296),l=n(9873),t=n(2244),i=n(5276);const o={},c="@farmfe/js-plugin-sass",d={id:"plugins/official-plugins/js-sass",title:"@farmfe/js-plugin-sass",description:"Support sass for Farm.",source:"@site/versioned_docs/version-0.x/plugins/official-plugins/js-sass.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/js-sass",permalink:"/docs/0.x/plugins/official-plugins/js-sass",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/plugins/official-plugins/js-sass.mdx",tags:[],version:"0.x",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/js-plugin-less",permalink:"/docs/0.x/plugins/official-plugins/js-less"},next:{title:"@farmfe/js-plugin-svgr",permalink:"/docs/0.x/plugins/official-plugins/js-svgr"}},u={},f=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"sassOptions",id:"sassoptions",level:3},{value:"filters",id:"filters",level:3},{value:"implementation",id:"implementation",level:3},{value:"additionalData",id:"additionaldata",level:3},{value:"globals",id:"globals",level:3}];function p(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"farmfejs-plugin-sass",children:"@farmfe/js-plugin-sass"}),"\n",(0,a.jsxs)(s.p,{children:["Support ",(0,a.jsx)(s.code,{children:"sass"})," for Farm."]}),"\n",(0,a.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(t.A,{children:[(0,a.jsx)(i.A,{value:"npm",label:"npm",children:(0,a.jsx)(l.A,{children:"npm install @farmfe/js-plugin-sass sass"})}),(0,a.jsx)(i.A,{value:"yarn",label:"yarn",children:(0,a.jsx)(l.A,{children:"yarn add @farmfe/js-plugin-sass sass"})}),(0,a.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(l.A,{children:"pnpm add @farmfe/js-plugin-sass sass"})})]}),"\n",(0,a.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",metastring:"{2,6}",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSass from '@farmfe/js-plugin-sass';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSass({ /* options */ })\n  ]\n}\n"})}),"\n",(0,a.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"export type SassPluginOptions = {\n  sassOptions?: StringOptions<'async'>;\n  filters?: {\n    resolvedPaths?: string[];\n    moduleTypes?: string[];\n  };\n\n  /**\n   * - relative or absolute path\n   * - globals file will be added to the top of the sass file\n   * - when file changed, the file can't be hot-reloaded\n   *\n   * relative to project root or cwd\n   */\n  implementation?: string | undefined;\n  globals?: string[];\n  additionalData?:\n    | string\n    | ((content?: string, resolvePath?: string) => string | Promise<string>);\n};\n"})}),"\n",(0,a.jsx)(s.h3,{id:"sassoptions",children:"sassOptions"}),"\n",(0,a.jsxs)(s.p,{children:["Sass options. See ",(0,a.jsx)(s.a,{href:"https://sass-lang.com/documentation/js-api/interfaces/options/",children:"sass options"})," for more details."]}),"\n",(0,a.jsx)(s.p,{children:"Example:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"import path from 'node:path';\nimport { UserConfig } from '@farmfe/core';\nimport farmJsPluginSass from '@farmfe/js-plugin-sass';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSass({\n      sassOptions: {\n        loadPaths: [path.resolve(process.cwd(), 'styles')]\n      }\n    })\n  ]\n}\n\nexport default config;\n"})}),"\n",(0,a.jsx)(s.h3,{id:"filters",children:"filters"}),"\n",(0,a.jsxs)(s.p,{children:["Which files should be processed by ",(0,a.jsx)(s.code,{children:"sass"}),". Default to ",(0,a.jsx)(s.code,{children:"{ resolvedPaths: ['\\\\.(s[ac]ss)$'] }"})," for load and ",(0,a.jsx)(s.code,{children:"{ moduleTypes: ['sass'] }"})," for transform."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"resolvedPaths"}),": Only files under these paths will be processed. Support regex."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"moduleTypes"}),": Only files with these module types will be processed."]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"resolvedPaths"})," and ",(0,a.jsx)(s.code,{children:"moduleTypes"})," are unioned, which means files match any of them will be processed."]}),"\n",(0,a.jsx)(s.p,{children:"Example:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSass from '@farmfe/js-plugin-sass';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSass({\n      filters: {\n        // all files end with .custom-css will be processed\n        resolvedPaths: ['\\\\.custom-sass$'],\n        moduleTypes: ['sass']\n      }\n    })\n  ]\n}\n\nexport default config;\n"})}),"\n",(0,a.jsx)(s.h3,{id:"implementation",children:"implementation"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"implementation"})," package name of ",(0,a.jsx)(s.code,{children:"sass"}),". Default to ",(0,a.jsx)(s.code,{children:"sass"}),". If you want to use ",(0,a.jsx)(s.code,{children:"sass-embedded"}),", you can set it to ",(0,a.jsx)(s.code,{children:"sass-embedded"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSass from '@farmfe/js-plugin-sass';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSass({\n      implementation: 'sass-embedded'\n    })\n  ]\n}\n"})}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsxs)(s.p,{children:["You should install ",(0,a.jsx)(s.code,{children:"sass-embedded"})," manually."]})}),"\n",(0,a.jsx)(s.h3,{id:"additionaldata",children:"additionalData"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"type AdditionalDataOption = string | ((content?: string, resolvePath?: string) => string | Promise<string>);\n"})}),"\n",(0,a.jsx)(s.p,{children:"Additional data to be added to every sass file. Example:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSass from '@farmfe/js-plugin-sass';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSass({\n      // add variables.sass to every sass file\n      additionalData: `\n        @import \"./src/styles/variables.scss\";\n      `\n    })\n  ]\n}\n"})}),"\n",(0,a.jsx)(s.p,{children:"For sass file:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sass",metastring:'title="index.scss"',children:".foo {\n  color: @primary-color;\n}\n"})}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"additionalData"})," will be added to the top of the file:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sass",metastring:'title="index.scss"',children:'@import "./src/styles/variables.scss";\n\n.foo {\n  color: @primary-color;\n}\n'})}),"\n",(0,a.jsx)(s.p,{children:"Function form:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSass from '@farmfe/js-plugin-sass';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSass({\n      // add variables.sass to every sass file\n      additionalData: (content, resolvePath) => {\n        if (resolvePath === '/path/to/index.sass') {\n          return `\n            @import \"./src/styles/variables.sass\";\n          `;\n        }\n      }\n    })\n  ]\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"globals",children:"globals"}),"\n",(0,a.jsxs)(s.p,{children:["Global sass files. These files will be added to the top of every sass file. It's the same as ",(0,a.jsx)(s.code,{children:"additionalData"})," but more convenient."]})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5276:(e,s,n)=>{n.d(s,{A:()=>t});n(758);var a=n(3526);const r={tabItem:"tabItem__ncD"};var l=n(6070);function t(e){let{children:s,hidden:n,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,t),hidden:n,children:s})}},2244:(e,s,n)=>{n.d(s,{A:()=>w});var a=n(758),r=n(3526),l=n(5351),t=n(5557),i=n(7090),o=n(536),c=n(745),d=n(2455);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:s,children:n}=e;return(0,a.useMemo)((()=>{const e=s??function(e){return u(e).map((e=>{let{props:{value:s,label:n,attributes:a,default:r}}=e;return{value:s,label:n,attributes:a,default:r}}))}(n);return function(e){const s=(0,c.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function p(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:n}=e;const r=(0,t.W6)(),l=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,o.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const s=new URLSearchParams(r.location.search);s.set(l,e),r.replace({...r.location,search:s.toString()})}),[l,r])]}function h(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,l=f(e),[t,o]=(0,a.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:l}))),[c,u]=m({queryString:n,groupId:r}),[h,g]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,l]=(0,d.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),j=(()=>{const e=c??h;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{j&&o(j)}),[j]);return{selectedValue:t,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var g=n(6298);const j={tabList:"tabList_vFQY",tabItem:"tabItem_w9v8"};var x=n(6070);function b(e){let{className:s,block:n,selectedValue:a,selectValue:t,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const s=e.currentTarget,n=o.indexOf(s),r=i[n].value;r!==a&&(c(s),t(r))},u=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;s=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;s=o[n]??o[o.length-1];break}}s?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},s),children:i.map((e=>{let{value:s,label:n,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===s?0:-1,"aria-selected":a===s,ref:e=>o.push(e),onKeyDown:u,onClick:d,...l,className:(0,r.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":a===s}),children:n??s},s)}))})}function v(e){let{lazy:s,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,s)=>(0,a.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function y(e){const s=h(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,x.jsx)(b,{...s,...e}),(0,x.jsx)(v,{...s,...e})]})}function w(e){const s=(0,g.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(s))}}}]);