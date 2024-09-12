"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[514],{9708:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=r(6070),t=r(5296);const i={},d="\u670d\u52a1\u7aef\u6e32\u67d3 (SSR)",c={id:"advanced/ssr",title:"\u670d\u52a1\u7aef\u6e32\u67d3 (SSR)",description:"Server-Side Rendering\uff08SSR\uff09\u610f\u5473\u7740\u5728Node.js\uff08\u670d\u52a1\u5668\u7aef\uff09\u4e2d\u5c06\u524d\u7aef\u6846\u67b6\uff08\u4f8b\u5982React\u3001Vue\u3001Solid\u7b49\uff09\u6e32\u67d3\u4e3a html \uff0c\u5e76\u5728\u5ba2\u6237\u7aef\u5bf9\u5df2\u7ecf\u6e32\u67d3\u597d\u7684HTML\uff08 rendered html \uff09\u8fdb\u884c\u6ce8\u6c34 (hydrate)\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/advanced/ssr.md",sourceDirName:"advanced",slug:"/advanced/ssr",permalink:"/farm-fe.github.io/zh/docs/advanced/ssr",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/advanced/ssr.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NestJs",permalink:"/farm-fe.github.io/zh/docs/frameworks/nestjs"},next:{title:"\u5c40\u90e8\u6253\u5305",permalink:"/farm-fe.github.io/zh/docs/advanced/partial-bundling"}},l={},a=[{value:"\u793a\u4f8b\u9879\u76ee",id:"\u793a\u4f8b\u9879\u76ee",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"\u8bbe\u7f6e\u5f00\u53d1\u670d\u52a1\u5668",id:"\u8bbe\u7f6e\u5f00\u53d1\u670d\u52a1\u5668",level:2},{value:"\u6784\u5efa Node.js \u670d\u52a1\u7aef\u4ea7\u7269",id:"\u6784\u5efa-nodejs-\u670d\u52a1\u7aef\u4ea7\u7269",level:2},{value:"\u5f00\u53d1SSR\u9879\u76ee",id:"\u5f00\u53d1ssr\u9879\u76ee",level:2},{value:"\u751f\u4ea7\u73af\u5883\u6784\u5efa",id:"\u751f\u4ea7\u73af\u5883\u6784\u5efa",level:2},{value:"\u9759\u6001\u7ad9\u70b9\u751f\u6210(SSG)",id:"\u9759\u6001\u7ad9\u70b9\u751f\u6210ssg",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u670d\u52a1\u7aef\u6e32\u67d3-ssr",children:"\u670d\u52a1\u7aef\u6e32\u67d3 (SSR)"}),"\n",(0,s.jsxs)(n.p,{children:["Server-Side Rendering\uff08SSR\uff09\u610f\u5473\u7740\u5728Node.js\uff08\u670d\u52a1\u5668\u7aef\uff09\u4e2d\u5c06\u524d\u7aef\u6846\u67b6\uff08\u4f8b\u5982React\u3001Vue\u3001Solid\u7b49\uff09\u6e32\u67d3\u4e3a ",(0,s.jsx)(n.code,{children:"html"})," \uff0c\u5e76\u5728\u5ba2\u6237\u7aef\u5bf9\u5df2\u7ecf\u6e32\u67d3\u597d\u7684HTML\uff08 ",(0,s.jsx)(n.code,{children:"rendered html"})," \uff09\u8fdb\u884c\u6ce8\u6c34 (hydrate)\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"\u672c\u6587\u6863\u63cf\u8ff0\u4e86\u5982\u4f55\u4ece\u5934\u5f00\u59cb\u5728 Farm \u4e0a\u6784\u5efa SSR \u5e94\u7528\u7a0b\u5e8f\u3002"})}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b\u9879\u76ee",children:"\u793a\u4f8b\u9879\u76ee"}),"\n",(0,s.jsxs)(n.p,{children:["Farm\u4e3a\u6d41\u884c\u7684\u6846\u67b6\u63d0\u4f9b\u4e86 SSR ",(0,s.jsx)(n.a,{href:"https://github.com/farm-fe/farm/tree/main/examples",children:"\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://github.com/farm-fe/farm/tree/main/examples/react-ssr",children:"React"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://github.com/farm-fe/farm/tree/main/examples/vue-ssr",children:"Vue"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://github.com/farm-fe/farm/tree/main/examples/solid-ssr",children:"Solid"})})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u4e2a",(0,s.jsx)(n.a,{href:"https://github.com/farm-fe/farm/tree/main/examples",children:"\u5178\u578b\u7684SSR\u5e94\u7528\u7a0b\u5e8f"}),"\u901a\u5e38\u5177\u6709\u4ee5\u4e0b\u6e90\u6587\u4ef6\u7ed3\u6784\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:".\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 farm.config.ts\n\u251c\u2500\u2500 farm.config.server.ts\n\u251c\u2500\u2500 server.js\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 index-client.tsx\n    \u251c\u2500\u2500 index-server.tsx\n    \u2514\u2500\u2500 main.tsx\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"index.html"})}),": \u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u5728\u5ba2\u6237\u7aef\uff08\u6d4f\u89c8\u5668\uff09\u4e0a\u7684\u5165\u53e3HTML"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"farm.config.ts"})}),": \u6784\u5efa\u9879\u76ee\u5230\u5ba2\u6237\u7aef\u7684farm\u914d\u7f6e"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"farm.config.server.ts"})}),": \u6784\u5efa\u9879\u76ee\u5230Node.js\uff08\u670d\u52a1\u7aef\uff09\u7684farm\u914d\u7f6e"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"server.js"})}),": \u5e94\u8be5\u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883\u7684\u670d\u52a1\u7aef\u811a\u672c"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"src/index-client.tsx"})}),": \u5ba2\u6237\u7aef\u5165\u53e3\u811a\u672c"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"src/index-server.tsx"})}),": \u670d\u52a1\u7aef\u5165\u53e3\u811a\u672c"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"src/main.tsx"})}),": \u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u5171\u4eab\u7684\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"index.html"})," \u9700\u8981\u5f15\u7528 ",(0,s.jsx)(n.code,{children:"index-client.tsx"})," \u5e76\u5305\u542b\u4e00\u4e2a\u5360\u4f4d\u7b26\uff0c\u5176\u4e2d\u5e94\u6ce8\u5165\u670d\u52a1\u5668\u6e32\u67d3\u7684\u6807\u8bb0\uff08",(0,s.jsx)(n.code,{children:"markup"}),"\uff09\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<div id="root"><div>app-html-to-replace</div></div>\n<script src="./src/index-client.tsx"><\/script>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u5e94\u8be5\u5c06 ",(0,s.jsx)(n.code,{children:"<div>app-html-to-replace</div>"})," \u66ff\u6362\u4e3a\u670d\u52a1\u5668\u6e32\u67d3\u7684",(0,s.jsx)(n.code,{children:"markup"}),"\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u5fc5\u987b\u4e3a\u5ba2\u6237\u7aef\uff08\u6d4f\u89c8\u5668\uff09\u548c\u670d\u52a1\u7aef\uff08Node.js\uff09\u5206\u522b\u6784\u5efaSSR\u5e94\u7528\u7a0b\u5e8f",(0,s.jsx)(n.strong,{children:"\u5171\u4e24\u6b21"}),"\u3002\u56e0\u6b64\uff0c\u9700\u8981 ",(0,s.jsx)(n.code,{children:"farm.config.ts"})," \u548c ",(0,s.jsx)(n.code,{children:"farm.config.server.ts"})," \uff0c\u6211\u4eec\u5c06\u5728\u540e\u9762\u7684\u7ae0\u8282\u4e2d\u8ba8\u8bba\u8be6\u7ec6\u4fe1\u606f\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u8bbe\u7f6e\u5f00\u53d1\u670d\u52a1\u5668",children:"\u8bbe\u7f6e\u5f00\u53d1\u670d\u52a1\u5668"}),"\n",(0,s.jsxs)(n.p,{children:["\u5bf9\u4e8e\u4e0a\u8ff0\u793a\u4f8b\uff0c ",(0,s.jsx)(n.code,{children:"farm.config.ts"})," \u7528\u4e8e",(0,s.jsx)(n.strong,{children:"\u6784\u5efa\u6d4f\u89c8\u5668\u7aef\u9879\u76ee"}),"\u5e76\u8bbe\u7f6e\u5f00\u53d1\u670d\u52a1\u5668\u8fdb\u884c\u670d\u52a1\u5668\u6e32\u67d3\u3002 ",(0,s.jsx)(n.code,{children:"farm.config.ts"})," \u7684\u901a\u5e38\u8fd9\u6837\u5199\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import path from 'path';\nimport { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  compilation: {\n    input: {\n      index_client: './index.html'\n    },\n    output: {\n      path: './build'\n    },\n  },\n  server: {\n    hmr: true,\n    cors: true,\n    middlewares: [\n        // \u6ce8\u518c\u4e00\u4e2a\u4e2d\u95f4\u4ef6\uff0c\u5728\u670d\u52a1\u7aef\u6e32\u67d3\u5e94\u7528\uff0c\n        // \u7136\u540e\u6ce8\u5165\u5230\u670d\u52a1\u5668\u6e32\u67d3\u7684\u6807\u8bb0\u5e76\u8fd4\u56de\u6700\u7ec8\u7684index.html\n      (server) => {\n        server.app().use(async (ctx, next) => {\n          await next();\n\n          // \u5904\u7406index.html\u6216\u5355\u9875\u9762\u5e94\u7528\u8def\u7531\u8bbe\u7f6e\n          if (ctx.path === '/' || ctx.status === 404) {\n            // \u52a0\u8f7d\u670d\u52a1\u7aef\u5165\u53e3\uff0c\u5e76\u901a\u8fc7ctx.path\u6e32\u67d3\n            const render = await import(path.join(process.cwd(), 'dist', 'index.js')).then(\n              (m) => m.default\n            );\n            const renderedHtml = render(ctx.path);\n\n            // \u901a\u8fc7server.getCompiler()\u83b7\u53d6\u7f16\u8bd1\u7684index.html\u5185\u5bb9\n            // \u8fd9\u91cc\u7684html\u7ecf\u8fc7\u7f16\u8bd1\u5e76\u6ce8\u5165\u4e86\u6240\u6709\u5ba2\u6237\u7aefbundles\u6587\u4ef6\n            const template = server\n              .getCompiler()\n              .resource('index_client.html')\n              .toString();\n\n            // \u5c06\u5360\u4f4d\u7b26\u66ff\u6362\u4e3a\u6e32\u67d3\u597d\u7684\u5185\u5bb9\uff0c\u5e76\u5c06\u5176\u4f5c\u4e3aHTML\u8fd4\u56de\n            const html = template.replace(\n              '<div>app-html-to-replace</div>',\n              renderedHtml\n            );\n            ctx.body = html;\n            ctx.type = 'text/html';\n            ctx.status = 200;\n          }\n\n          console.log('ctx.path outer', ctx.path);\n        });\n      }\n    ]\n  },\n  plugins: ['@farmfe/plugin-react', '@farmfe/plugin-sass']\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u9700\u8981\u4e00\u4e2a\u4e2d\u95f4\u4ef6\uff08",(0,s.jsx)(n.code,{children:"middleware"}),"\uff09\u6765\u5c06\u5e94\u7528\u7a0b\u5e8f\u6e32\u67d3\u4e3a\u6807\u8bb0\u5e76\u5c06\u5176\u4f5c\u4e3aHTML\u63d0\u4f9b\u3002\u4e2d\u95f4\u4ef6\u4e2dSSR\u7684\u6b63\u5e38\u5de5\u4f5c\u6d41\u7a0b\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u52a0\u8f7d\u7f16\u8bd1\u540e\u7684\u670d\u52a1\u7aef\u5165\u53e3:"})," \u9700\u8981\u4e00\u4e2a\u5bfc\u51fa ",(0,s.jsx)(n.code,{children:"render"})," \u51fd\u6570\u7684index-server\u5165\u53e3\uff0c\u7136\u540e\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"import(server_entry_path)"})," \u6765\u83b7\u53d6\u8fd9\u4e2a ",(0,s.jsx)(n.code,{children:"render"})," \u51fd\u6570\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u83b7\u53d6\u7f16\u8bd1\u540e\u7684\u5ba2\u6237\u7aefindex.html:"})," \u6240\u6709\u5ba2\u6237\u7aef\u6253\u5305\u4ee3\u7801\u548cFarm\u8fd0\u884c\u65f6\u90fd\u6ce8\u5165\u5230 ",(0,s.jsx)(n.code,{children:"index.html"}),"\u4e2d\uff0c\u7528\u4e8e\u5728\u5ba2\u6237\u7aef\u8fdb\u884c\u6c34\u5408\u4f5c\u7528\uff08",(0,s.jsx)(n.code,{children:"hydrate"}),"\uff09\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5c06\u5360\u4f4d\u7b26\u66ff\u6362\u4e3a\u6e32\u67d3\u540e\u7684\u4ee3\u7801:"})," \u66ff\u6362\u5360\u4f4d\u7b26\u5e76\u8fd4\u56de\u6700\u7ec8\u7684html\u4ee3\u7801\uff08",(0,s.jsx)(n.code,{children:"final html"}),"\uff09\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"if (ctx.path === '/' || ctx.status === 404) {"})," \u6765\u6784\u5efa\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"SPA"})," SSR\u5e94\u7528\u7a0b\u5e8f\uff0c\u5982\u679c\u4f60\u9700\u8981\u6784\u5efa\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"MPA"})," SSR\u5e94\u7528\u7a0b\u5e8f\uff0c\u8bf7\u5c06 ",(0,s.jsx)(n.code,{children:"ctx.path"})," \u4f20\u9012\u5230\u4f60\u7684\u9875\u9762\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u6784\u5efa-nodejs-\u670d\u52a1\u7aef\u4ea7\u7269",children:"\u6784\u5efa Node.js \u670d\u52a1\u7aef\u4ea7\u7269"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"farm.config.server.ts"})," \u7528\u4e8e",(0,s.jsx)(n.strong,{children:"\u6784\u5efa Node.js \u7aef\u4ea7\u7269"}),"\uff0c\u751f\u6210\u7f16\u8bd1\u540e\u7684\u670d\u52a1\u7aef\u5165\u53e3\uff0c\u53ef\u7528\u4e8e\u5728\u670d\u52a1\u7aef\u5c06\u5e94\u7528\u6e32\u67d3\u4e3a\u6807\u8bb0\uff08",(0,s.jsx)(n.code,{children:"markup"}),"\uff09\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.server.ts"',children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  compilation: {\n    // c-highlight-start\n    input: {\n      index: './src/index-server.tsx'\n    },\n    output: {\n      path: './dist',\n      targetEnv: 'node'\n    }\n    // c-highlight-end\n  },\n  plugins: [\n    [\n      '@farmfe/plugin-react',\n      {\n        refresh: false,\n        development: false\n      }\n    ],\n    '@farmfe/plugin-sass'\n  ]\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5bf9\u4e8e ",(0,s.jsx)(n.code,{children:"farm.config.server.ts"})," \uff0c\u6211\u4eec\u5c06 ",(0,s.jsx)(n.code,{children:"input"})," \u8bbe\u7f6e\u4e3a",(0,s.jsx)(n.strong,{children:"\u670d\u52a1\u7aef\u5165\u53e3"}),"\uff0c\u5e76\u5c06 ",(0,s.jsx)(n.a,{href:"/zh/docs/config/compilation-options#output-targetenv",children:(0,s.jsx)(n.code,{children:"output.targetEnv"})})," \u8bbe\u7f6e\u4e3a ",(0,s.jsx)(n.code,{children:"node"})," \u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm\u5c06\u670d\u52a1\u7aef\u5165\u53e3\u811a\u672c\u7f16\u8bd1\u4e3a ",(0,s.jsx)(n.code,{children:"esm"})," \uff0c\u5982\u679c\u4f60\u60f3\u8981\u5c06\u5176\u7f16\u8bd1\u4e3acjs\uff0c\u8bf7\u5c1d\u8bd5\u8bbe\u7f6e ",(0,s.jsx)(n.a,{href:"/zh/docs/config/compilation-options#output-format",children:(0,s.jsx)(n.code,{children:"output.format"})}),"\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u5f00\u53d1ssr\u9879\u76ee",children:"\u5f00\u53d1SSR\u9879\u76ee"}),"\n",(0,s.jsx)(n.p,{children:"\u4f60\u9700\u8981\u4e3a\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u542f\u52a8\u7f16\u8bd1\uff0c\u4f8b\u5982\uff0c\u4f60\u53ef\u80fd\u4f1a\u5728package.json\u4e2d\u6709\u4ee5\u4e0b\u811a\u672c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "name": "@farmfe-examples/react-ssr",\n  "scripts": {\n    // c-highlight-start\n    "start": "farm start",\n    "start:server": "farm watch --config farm.config.server.mjs",\n    // c-highlight-end\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u4f60\u5f00\u53d1SSR\u9879\u76ee\u65f6\uff0c\u4f60\u9700\u8981\u5728\u4e0d\u540c\u7684\u7ec8\u7aef\u4e2d\u8fd0\u884c ",(0,s.jsx)(n.code,{children:"npm run start"})," \u548c ",(0,s.jsx)(n.code,{children:"npm run start:server"})," \u3002\u540c\u65f6\u76d1\u542c server \u548c client \u7684\u53d8\u52a8\u5e76\u91cd\u65b0\u7f16\u8bd1\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u751f\u4ea7\u73af\u5883\u6784\u5efa",children:"\u751f\u4ea7\u73af\u5883\u6784\u5efa"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u9700\u8981\u540c\u65f6\u4e3a\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u6784\u5efa\u9879\u76ee\uff0c\u4f8b\u5982\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u5728 ",(0,s.jsx)(n.code,{children:"scripts"})," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "name": "@farmfe-examples/react-ssr",\n  "scripts": {\n    "start": "farm start",\n    "start:server": "farm watch --config farm.config.server.mjs",\n    // c-highlight-start\n    "build": "farm build",\n    "build:server": "farm build --config farm.config.server.mjs"\n    // c-highlight-end\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6253\u5305\u6784\u5efa\u65f6\uff0c\u4f60\u9700\u8981\u8fd0\u884c ",(0,s.jsx)(n.code,{children:"npm run build"})," \u548c ",(0,s.jsx)(n.code,{children:"npm run build:server"}),"\uff0c\u5ba2\u6237\u7aef\u6253\u5305\u5c06\u88ab\u8f93\u51fa\u5230 ",(0,s.jsx)(n.code,{children:"build"})," \u76ee\u5f55\uff0c\u670d\u52a1\u7aef\u6253\u5305\u5c06\u88ab\u8f93\u51fa\u5230 ",(0,s.jsx)(n.code,{children:"dist"})," \u76ee\u5f55\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883\uff0c\u4f60\u9700\u8981\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"node server"})," \u6765\u6e32\u67d3\u548c\u63d0\u4f9b ",(0,s.jsx)(n.code,{children:"rendered html"}),"\u3002\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"server.js"})," \u4f5c\u4e3a\u751f\u4ea7\u670d\u52a1\u7aef\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="server.js"',children:"import path from 'node:path';\nimport { fileURLToPath } from 'node:url'\nimport fsp from 'fs/promises';\nimport express from 'express';\n\nfunction resolve(p) {\n  const __dirname = path.dirname(fileURLToPath(import.meta.url));\n  return path.resolve(__dirname, p);\n}\n\n// \u521b\u5efa\u4e00\u4e2aNode\u751f\u4ea7\u670d\u52a1\u7aef\nasync function createServer() {\n  let app = express();\n  // \u4e3a\u5ba2\u6237\u7aef\u6253\u5305\u4ea7\u7269\u63d0\u4f9b\u9759\u6001\u6587\u4ef6\u670d\u52a1\uff0c\u4e5f\u53ef\u4ee5\u5c06\u5ba2\u6237\u7aef\u6784\u5efa\u90e8\u7f72\u5230CDN\u6216\u5355\u72ec\u7684\u5f00\u53d1\u670d\u52a1\u5668\uff0c\u6309\u7167\u4f60\u7684\u9700\u6c42\u3002\n  app.use(express.static(resolve('build')));\n  // \u76d1\u542c '/' \u8def\u7531, \u4f60\u4e5f\u53ef\u4ee5\u5c06\u5176\u66ff\u6362\u4e3a\u4f60\u9700\u8981\u7684\u8def\u7531.\n  app.use('/', async (req, res) => {\n    let url = req.originalUrl;\n\n    try {\n      let template;\n      let render;\n\n      // \u52a0\u8f7d\u5ba2\u6237\u7aefhtml\n      template = await fsp.readFile(resolve('build/index_client.html'), 'utf8');\n      // \u52a0\u8f7d\u670d\u52a1\u7aef\u6e32\u67d3\u51fd\u6570\n      render = await import(resolve('dist/index.js')).then(\n        (m) => m.default\n      );\n      // \u5c06\u5e94\u7528\u6e32\u67d3\u4e3a\u6807\u8bb0\n      const markup = render(url);\n\n      let html = template.replace(\n        '<div>app-html-to-replace</div>',\n        markup\n      );\n      // \u8fd4\u56de\u5305\u542b\u5ba2\u6237\u7aef\u6253\u5305\u7684rendered html\n      // \u5ba2\u6237\u7aef\u6253\u5305\u4ee3\u7801\u548c\u670d\u52a1\u5668\u6e32\u67d3\u7684\u6807\u8bb0\u8fdb\u884c\u6c34\u548c\u4f5c\u7528\uff0c\n      // \u5e76\u4f7f\u5176\u5177\u6709\u4ea4\u4e92\u6027\n      res.setHeader('Content-Type', 'text/html');\n      return res.status(200).end(html);\n    } catch (error) {\n      console.log(error.stack);\n      res.status(500).end(error.stack);\n    }\n  });\n\n  return app;\n}\n// create and listen the server\ncreateServer().then((app) => {\n  app.listen(3000, () => {\n    console.log('HTTP server is running at http://localhost:3000');\n  });\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u5728\u8fd9\u91cc\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"express"})," \u4f5c\u4e3a\u670d\u52a1\u7aef\uff0c\u4f46\u4f60\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u4f60\u60f3\u8981\u7684\u670d\u52a1\u7aef\u6846\u67b6\u3002\u6e32\u67d3\u8fc7\u7a0b\u662f\u76f8\u540c\u7684\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u52a0\u8f7d\u5ba2\u6237\u7aef\u7f16\u8bd1\u540e\u7684HTML(",(0,s.jsx)(n.code,{children:"client index.html"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4ece\u670d\u52a1\u7aef\u811a\u672c\u4ee3\u7801\u52a0\u8f7d ",(0,s.jsx)(n.code,{children:"render"})," \u51fd\u6570"]}),"\n",(0,s.jsxs)(n.li,{children:["\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"const markup = render(url)"})," \u51fd\u6570\u4ee5\u83b7\u53d6\u5e94\u7528\u7684\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u6807\u8bb0"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5c06 ",(0,s.jsx)(n.code,{children:"client index.html"})," \u4e2d\u5360\u4f4d\u7b26\u66ff\u6362\u4e3a\u670d\u52a1\u7aef\u6e32\u67d3\u6807\u8bb0\uff0c\u5e76\u5c06\u66ff\u6362\u540e\u7684html\u4f5c\u4e3a\u6700\u7ec8\u7ed3\u679c\u8fd4\u56de"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9759\u6001\u7ad9\u70b9\u751f\u6210ssg",children:"\u9759\u6001\u7ad9\u70b9\u751f\u6210(SSG)"}),"\n",(0,s.jsx)(n.p,{children:"SSG\u7684\u6d41\u7a0b\u4e0eSSR\u76f8\u540c\uff0c\u4e0d\u540c\u7684\u662fSSG\u5c06\u66ff\u6362\u7684html\u8f93\u51fa\u5230\u6700\u7ec8\u4ea7\u7269\u3002SSG\u7684\u793a\u4f8b\u811a\u672c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// \u52a0\u8f7d client html\nconst template = await fsp.readFile(resolve('build/index_client.html'), 'utf8');\n// \u52a0\u8f7d\u670d\u52a1\u7aef\u6e32\u67d3\u51fd\u6570\nconst render = await import(resolve('dist/index.js')).then(\n  (m) => m.default\n);\n\nconst pages = renderDirEntry('src/pages');\n\nfor (const page of pages) {\n  // \u5c06\u5e94\u7528\u6e32\u67d3\u4e3a\u6807\u8bb0\n  const markup = render(url);\n  const html = template.replace(\n    '<div>app-html-to-replace</div>',\n    markup\n  );\n  // \u8f93\u51fa\u9759\u6001\u751f\u6210\u7684\u9875\u9762\uff0c\u4f8b\u5982\u5c06\u5176\u5199\u5165\u786c\u76d8\n  emitPage(page, html);\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},5296:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var s=r(758);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);