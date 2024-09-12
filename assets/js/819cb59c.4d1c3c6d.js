"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[1869],{79:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var o=t(6070),i=t(5296);const r={},s="Syntax Downgrade and Polyfill",l={id:"features/polyfill",title:"Syntax Downgrade and Polyfill",description:"By default, Farm will downgrade to ES5 and inject polyfills automatically in production mode.",source:"@site/versioned_docs/version-0.x/features/polyfill.md",sourceDirName:"features",slug:"/features/polyfill",permalink:"/farm-fe.github.io/docs/0.x/features/polyfill",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/features/polyfill.md",tags:[],version:"0.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Minification",permalink:"/farm-fe.github.io/docs/0.x/features/minification"},next:{title:"Incremental Building",permalink:"/farm-fe.github.io/docs/0.x/features/persistent-cache"}},d={},a=[{value:"Configuring <code>presetEnv</code>",id:"configuring-presetenv",level:2},{value:"With <code>script.target</code>",id:"with-scripttarget",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"syntax-downgrade-and-polyfill",children:"Syntax Downgrade and Polyfill"}),"\n",(0,o.jsxs)(n.p,{children:["By default, Farm will downgrade to ",(0,o.jsx)(n.code,{children:"ES5"})," and inject ",(0,o.jsx)(n.code,{children:"polyfills"})," automatically in production mode."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["By default, Farm won't do transformation and inject polyfills for modules under ",(0,o.jsx)(n.code,{children:"node_modules/"}),", if you need to downgrade syntax and inject polyfills for ",(0,o.jsx)(n.code,{children:"node_modules/"})," you can use ",(0,o.jsx)(n.code,{children:"compilation.presetEnv.include"}),"."]})}),"\n",(0,o.jsxs)(n.h2,{id:"configuring-presetenv",children:["Configuring ",(0,o.jsx)(n.code,{children:"presetEnv"})]}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.code,{children:"compilation.presetEnv"})," to custom syntax downgrade and polyfill. Using include to add external modules that need to be polyfilled.s"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"export default {\n   compilation: {\n     presetEnv: {\n      // include a package under node_modules\n      include: ['node_modules/package-name'],\n      options: {\n        targets: \"Chrome >= 48\"\n      }\n     }\n   },\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["By default, Farm will set targets to ",(0,o.jsx)(n.code,{children:"> 0.25%, not dead"}),". If your project does not require browser compatibility, you can use set a looser value for ",(0,o.jsx)(n.code,{children:"targets"}),", then less polyfills will be injected and output sizes will be smaller."]}),"\n",(0,o.jsxs)(n.p,{children:["Refer to ",(0,o.jsx)(n.a,{href:"/docs/config/farm-config#presetenv",children:"compilation.presetEnv"})," for more options."]}),"\n",(0,o.jsxs)(n.h2,{id:"with-scripttarget",children:["With ",(0,o.jsx)(n.code,{children:"script.target"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"script.target"})," can also control the target env when generate code. If you want to downgrade your project to ",(0,o.jsx)(n.code,{children:"ES5"}),", you should set both:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"export default {\n   compilation: {\n     script: {\n      target: 'ES5'\n     },\n     presetEnv: {\n      // include a package under node_modules\n      include: ['node_modules/package-name'],\n      options: {\n        targets: \"> 0.25%, not dead\"\n      }\n     }\n   },\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},5296:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var o=t(758);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);