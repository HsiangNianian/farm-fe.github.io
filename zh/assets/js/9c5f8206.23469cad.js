"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[7354],{3704:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var s=n(6070),i=n(5296);const t={},d="DevServer \u548c HMR",o={id:"features/dev-server",title:"DevServer \u548c HMR",description:"Farm\u9ed8\u8ba4\u5728 development \u73af\u5883\u4e2d\u63d0\u4f9b DevServer \u5e76\u542f\u7528\u4e86 HMR \u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/features/dev-server.md",sourceDirName:"features",slug:"/features/dev-server",permalink:"/zh/docs/features/dev-server",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/features/dev-server.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3. \u4f7f\u7528 Farm \u6784\u5efa\u751f\u4ea7\u9879\u76ee",permalink:"/zh/docs/tutorials/build"},next:{title:"Html",permalink:"/zh/docs/features/html"}},c={},a=[{value:"\u914d\u7f6e Dev Server",id:"\u914d\u7f6e-dev-server",level:2},{value:"Dev Server \u4e2d\u95f4\u4ef6",id:"dev-server-\u4e2d\u95f4\u4ef6",level:2},{value:"Hot Module Replacement(HMR)",id:"hot-module-replacementhmr",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"devserver-\u548c-hmr",children:"DevServer \u548c HMR"}),"\n",(0,s.jsxs)(r.p,{children:["Farm\u9ed8\u8ba4\u5728 ",(0,s.jsx)(r.code,{children:"development"})," \u73af\u5883\u4e2d\u63d0\u4f9b ",(0,s.jsx)(r.code,{children:"DevServer"})," \u5e76\u542f\u7528\u4e86 ",(0,s.jsx)(r.code,{children:"HMR"})," \u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"\u914d\u7f6e-dev-server",children:"\u914d\u7f6e Dev Server"}),"\n",(0,s.jsxs)(r.p,{children:["Farm\u63d0\u4f9b\u4e86\u8bb8\u591a\u6709\u7528\u7684\u9009\u9879\u6765\u914d\u7f6e\u5f00\u53d1\u670d\u52a1\u5668\u3002\u6240\u6709\u7684DevServer\u9009\u9879\u90fd\u662f\u901a\u8fc7",(0,s.jsx)(r.a,{href:"/zh/docs/config/dev-server",children:(0,s.jsx)(r.code,{children:"server"})}),"\u914d\u7f6e\u7684\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  server: {\n    port: 9801,\n    cors: true,\n    proxy: {\n      // ...\n    },\n    open: true,\n  }\n})\n"})}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:["\u5982\u679c\u4f60\u6b63\u5728\u4e3aFarm\u5f00\u53d1\u5de5\u5177\uff0c\u8bf7\u53c2\u8003",(0,s.jsx)(r.a,{href:"/zh/docs/api/javascript-api",children:"Javascript API"}),"\u7136\u540e\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u521b\u5efa\u5f00\u53d1\u670d\u52a1\u5668\u3002"]})}),"\n",(0,s.jsx)(r.h2,{id:"dev-server-\u4e2d\u95f4\u4ef6",children:"Dev Server \u4e2d\u95f4\u4ef6"}),"\n",(0,s.jsxs)(r.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(r.a,{href:"/zh/docs/config/dev-server#middlewares",children:(0,s.jsx)(r.code,{children:"middlewares"})})," \u6765\u5904\u7406\u5f00\u53d1\u670d\u52a1\u5668\u7684\u8bf7\u6c42\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import { Middleware } from 'koa';\nimport { Server, defineConfig } from '@farmfe/core';\n\nexport function headers(devSeverContext: Server): Middleware {\n  const { config } = devSeverContext;\n  if (!config.headers) return;\n\n  return async (ctx, next) => {\n    if (config.headers) {\n      for (const name in config.headers) {\n        ctx.set(name, config.headers[name] as string | string[]);\n      }\n    }\n    await next();\n  };\n}\n\nexport default defineConfig({\n  server: {\n    middlewares: [\n      headers\n    ]\n  }\n})\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u5728\u4e0a\u8ff0\u793a\u4f8b\u4e2d\uff0cFarm\u4e2d\u95f4\u4ef6\u662f\u4e00\u4e2a\u66b4\u9732 ",(0,s.jsx)(r.code,{children:"Koa Middleware"})," \u7684\u51fd\u6570\u3002\u5e38\u89c1\u7684Koa\u4e2d\u95f4\u4ef6\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",metastring:"{2,7}",children:"import { defineConfig } from \"@farmfe/core\";\nimport compression from 'koa-compress';\n\nexport default defineConfig({\n  server: {\n    middlewares: [\n      compression\n    ]\n  },\n});\n"})}),"\n",(0,s.jsx)(r.h2,{id:"hot-module-replacementhmr",children:"Hot Module Replacement(HMR)"}),"\n",(0,s.jsxs)(r.p,{children:["Farm\u63d0\u4f9b\u4e86\u4e00\u4e2a\u4e0e ",(0,s.jsx)(r.a,{href:"/zh/docs/api/hmr-api",children:"\u517c\u5bb9 Vite \u7684HMR API"}),"\u3002\u5982\u679c\u4f60\u662f\u6846\u67b6\u4f5c\u8005\uff0c\u53ef\u4ee5\u5229\u7528\u8fd9\u4e2a API \u6765\u66f4\u65b0\u4f60\u7684\u5e94\u7528\u5b9e\u4f8b\uff0c\u800c\u65e0\u9700\u91cd\u65b0\u52a0\u8f7d\u9875\u9762\u3002"]}),"\n",(0,s.jsx)(r.p,{children:"HMR API\u5141\u8bb8\u4f60\u5728\u5e94\u7528\u8fd0\u884c\u65f6\u63a5\u6536\u6a21\u5757\u7684\u66f4\u65b0\uff0c\u5e76\u5e94\u7528\u8fd9\u4e9b\u66f4\u65b0\uff0c\u800c\u65e0\u9700\u91cd\u65b0\u52a0\u8f7d\u6574\u4e2a\u9875\u9762\u3002\u8fd9\u53ef\u4ee5\u6781\u5927\u5730\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0c\u56e0\u4e3a\u5b83\u5141\u8bb8\u4f60\u5728\u4e0d\u4e22\u5931\u5e94\u7528\u72b6\u6001\u7684\u60c5\u51b5\u4e0b\u770b\u5230\u4ee3\u7801\u66f4\u6539\u7684\u6548\u679c\u3002"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u5bf9\u4e8eReact\uff0c\u5b98\u65b9\u63d2\u4ef6 ",(0,s.jsx)(r.a,{href:"/docs/plugins/official-plugins/react",children:"@farmfe/plugin-react"}),"\u4f1a\u81ea\u52a8\u542f\u7528 HMR\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:["\u5bf9\u4e8eVue\u3001Solid\u7b49\u6846\u67b6\uff0c\u5b83\u4eec\u7684\u63d2\u4ef6\u5982 ",(0,s.jsx)(r.code,{children:"@vitejs/plugin-vue"})," \u3001 ",(0,s.jsx)(r.code,{children:"vite-plugin-solid"})," \u7b49\u90fd\u652f\u6301HMR\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Farm\u63d0\u4f9b\u4e86\u5b98\u65b9\u6a21\u677f\uff0c\u8fd9\u4e9b\u6a21\u677f\u5df2\u7ecf\u8bbe\u7f6e\u597d\u4e86\u6240\u6709\u8fd9\u4e9b\u80fd\u529b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7create-farm\u521b\u5efa\u5e94\u7528\uff0c\u7136\u540e\u6240\u6709\u7684HMR\u80fd\u529b\u5c31\u53ef\u7528\u4e86\u3002"}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u5bf9\u4e8e\u5e94\u7528\u7528\u6237\uff0cHMR\u901a\u5e38\u662f\u5f00\u7bb1\u5373\u7528\u7684\uff0c\u5982\u679c\u4f60\u9700\u8981\u81ea\u5b9a\u4e49HMR\u884c\u4e3a\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.a,{href:"/zh/docs/api/hmr-api",children:"\u517c\u5bb9 Vite \u7684 HMR API"})}),"\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:["\u5982\u679c\u4f60\u662f\u6846\u67b6\u4f5c\u8005\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,s.jsx)(r.a,{href:"/zh/docs/config/dev-server#hmr",children:"HMR\u9009\u9879"})," \u6765\u914d\u7f6eHMR\u3002"]}),"\n"]})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},5296:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>o});var s=n(758);const i={},t=s.createContext(i);function d(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);