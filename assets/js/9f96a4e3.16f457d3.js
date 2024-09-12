"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[5608],{6472:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>u,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=s(6070),o=s(5296);const r={},t="Plugins Options",l={id:"config/plugins-options",title:"Plugins Options",description:"Configure Farm's plug-ins, support Rust plug-ins or Js plug-ins, examples are as follows:",source:"@site/versioned_docs/version-0.x/config/plugins-options.md",sourceDirName:"config",slug:"/config/plugins-options",permalink:"/farm-fe.github.io/docs/0.x/config/plugins-options",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/config/plugins-options.md",tags:[],version:"0.x",frontMatter:{},sidebar:"configSidebar",previous:{title:"Environment variable",permalink:"/farm-fe.github.io/docs/0.x/config/environment-variable"},next:{title:"Hmr Api",permalink:"/farm-fe.github.io/docs/0.x/api/hmr-api"}},u={},c=[{value:"Rust Plugins",id:"rust-plugins",level:3},{value:"Js Plugins",id:"js-plugins",level:3}];function p(n){const e={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"plugins-options",children:"Plugins Options"}),"\n",(0,i.jsx)(e.p,{children:"Configure Farm's plug-ins, support Rust plug-ins or Js plug-ins, examples are as follows:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import type { UserConfig } from '@farmfe/core';\nimport less from '@farmfe/js-plugin-less';\n\nfunction defineConfig(config: UserConfig) {\n   return config;\n}\n\nexport default defineConfig({\n   plugins: ['@farmfe/plugin-react', '@farmfe/plugin-sass', less()],\n});\n"})}),"\n",(0,i.jsx)(e.h3,{id:"rust-plugins",children:"Rust Plugins"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"default"}),": ",(0,i.jsx)(e.code,{children:"[]"})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Rust plugins are configured via ",(0,i.jsx)(e.code,{children:"plugin name"})," or ",(0,i.jsx)(e.code,{children:"[plugin name, configuration option]"}),", as follows:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import type { UserConfig } from '@farmfe/core';\n\nfunction defineConfig(config: UserConfig) {\n   return config;\n}\n\nexport default defineConfig({\n   plugins: [['@farmfe/plugin-react', { /* options here */}], '@farmfe/plugin-sass'],\n});\n"})}),"\n",(0,i.jsx)(e.h3,{id:"js-plugins",children:"Js Plugins"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"default"}),": ",(0,i.jsx)(e.code,{children:"[]"})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Js plugin is an object, for details, please refer to ",(0,i.jsx)(e.a,{href:"/docs/plugins/js-plugin",children:"Js plugin"})]})]})}function a(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},5296:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>l});var i=s(758);const o={},r=i.createContext(o);function t(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);