"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[4055],{2420:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=s(6070),t=s(5296);const o={},i="Script",c={id:"features/script",title:"Script",description:"Farm \u652f\u6301\u5f00\u7bb1\u5373\u7528\u5730\u7f16\u8bd1Js/Jsx/Ts/Tsx\uff0c\u5e76\u9ed8\u8ba4\u5c06Jsx/Tsx\u7f16\u8bd1\u4e3a React\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.x/features/script.md",sourceDirName:"features",slug:"/features/script",permalink:"/zh/docs/0.x/features/script",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/features/script.md",tags:[],version:"0.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CSS",permalink:"/zh/docs/0.x/features/css"},next:{title:"\u9759\u6001\u8d44\u6e90",permalink:"/zh/docs/0.x/features/static"}},l={},d=[{value:"\u914d\u7f6e Swc \u89e3\u6790\u5668",id:"\u914d\u7f6e-swc-\u89e3\u6790\u5668",level:2},{value:"\u914d\u7f6e\u76ee\u6807\u6267\u884c\u73af\u5883",id:"\u914d\u7f6e\u76ee\u6807\u6267\u884c\u73af\u5883",level:2},{value:"\u88c5\u9970\u5668",id:"\u88c5\u9970\u5668",level:2},{value:"\u4f7f\u7528 SWC \u63d2\u4ef6",id:"\u4f7f\u7528-swc-\u63d2\u4ef6",level:2},{value:"Vite \u98ce\u683c\u7684 <code>import.meta.glob</code>",id:"vite-\u98ce\u683c\u7684-importmetaglob",level:2}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"script",children:"Script"}),"\n",(0,r.jsxs)(n.p,{children:["Farm \u652f\u6301\u5f00\u7bb1\u5373\u7528\u5730\u7f16\u8bd1",(0,r.jsx)(n.code,{children:"Js/Jsx/Ts/Tsx"}),"\uff0c\u5e76\u9ed8\u8ba4\u5c06",(0,r.jsx)(n.code,{children:"Jsx/Tsx"}),"\u7f16\u8bd1\u4e3a React\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="./button.tsx"',children:'import Button from "./Button";\n\nfunction ButtonGroup(props: ButtonProps) {\n  return (\n    <div>\n      {props.buttons.map((b) => (\n        <Button>{b}</Button>\n      ))}\n    </div>\n  );\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Farm \u4f7f\u7528 SWC \u6765\u7f16\u8bd1\u811a\u672c\uff0cFarm \u4e3a\u811a\u672c\u7f16\u8bd1\u8bbe\u7f6e\u4e86\u5408\u7406\u7684\u9ed8\u8ba4\u914d\u7f6e\u3002 \u53e6\u5916\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"compilation.script"}),"\u6765\u914d\u7f6e\u5982\u4f55\u7f16\u8bd1\u811a\u672c\u6587\u4ef6\u3002 \u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(n.a,{href:"/docs/config/farm-config#compilation-options",children:"compilation.script"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e-swc-\u89e3\u6790\u5668",children:"\u914d\u7f6e Swc \u89e3\u6790\u5668"}),"\n",(0,r.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(n.code,{children:"compilation.script.parser"}),"\u914d\u7f6e SWC \u89e3\u6790\u5668\u3002 \u8bf7\u53c2\u9605 ",(0,r.jsx)(n.a,{href:"https://swc.rs/docs/configuration/compilation#jscparser%E3%80%82",children:"https://swc.rs/docs/configuration/compilation#jscparser\u3002"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u60f3\u542f\u7528\u88c5\u9970\u5668\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e",(0,r.jsx)(n.code,{children:"compilation.script.parser.esConfig.decorators"}),"\uff08\u5982\u679c\u6a21\u5757\u662f TS\uff0c\u5219\u8bbe\u7f6e tsConfig.decorators\uff09\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"export default {\n  compilation: {\n    script: {\n      // for .js/.jsx files\n      esConfig: {\n        decorators: true,\n      },\n      // for .ts/.tsx files\n      tsConfig: {\n        decorators: true,\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm \u4e3a",(0,r.jsx)(n.code,{children:".jsx|.tsx"}),"\u6587\u4ef6\u8bbe\u7f6e",(0,r.jsx)(n.code,{children:"jsx: true"}),"\u3002 \u5176\u4ed6\u5b57\u6bb5\u9ed8\u8ba4\u4e3a SWC \u7684\u9ed8\u8ba4\u503c\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e\u76ee\u6807\u6267\u884c\u73af\u5883",children:"\u914d\u7f6e\u76ee\u6807\u6267\u884c\u73af\u5883"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd0\u884c\u9879\u76ee\u65f6\u4f7f\u7528",(0,r.jsx)(n.code,{children:"compilation.script.target"}),"\u914d\u7f6e\u76ee\u6807\u73af\u5883\uff0cFarm \u5c06\u5176\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a",(0,r.jsx)(n.code,{children:"ESNext"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u9009\u9879\u53ef\u4ee5\u4e0e",(0,r.jsx)(n.code,{children:"compilation.presetEnv"}),"\u4e00\u8d77\u4f7f\u7528\uff0c\u4ee5\u9488\u5bf9\u65e7\u6d4f\u89c8\u5668\u4f18\u96c5\u5730\u964d\u7ea7\u60a8\u7684\u9879\u76ee\u3002 \u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u5c06 target \u8bbe\u7f6e\u4e3a ",(0,r.jsx)(n.code,{children:"ES5"})," \u5e76\u542f\u7528 ",(0,r.jsx)(n.code,{children:"presetEnv"}),"\uff0c\u90a3\u4e48\u60a8\u7684\u9879\u76ee\u5c06\u5b8c\u5168\u964d\u7ea7\u5230 ES5\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:'export default {\n  compilation: {\n    script: {\n      target: "ES5",\n    },\n    presetEnv: true,\n  },\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u5173",(0,r.jsx)(n.code,{children:"presetEnv"}),"\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(n.a,{href:"/docs/features/polyfill",children:"Polyfill"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u88c5\u9970\u5668",children:"\u88c5\u9970\u5668"}),"\n",(0,r.jsxs)(n.p,{children:["\u88c5\u9970\u5668\u9ed8\u8ba4\u4e0d\u542f\u7528, \u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",(0,r.jsx)(n.code,{children:"compilation.script.parser.tsConfig.decorators"})," \u4e3a ",(0,r.jsx)(n.code,{children:"true"})," \u6765\u542f\u7528\u88c5\u9970\u5668\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { defineConfig } from \"@farmfe/core\";\n\nexport default defineConfig({\n  compilation: {\n    script: {\n      parser: {\n        tsConfig: {\n          // \u542f\u7528\u88c5\u9970\u5668\n          decorators: true,\n        },\n      },\n      // \u914d\u7f6e\u88c5\u9970\u5668\n      decorators: {\n        legacyDecorator: true,\n        decoratorMetadata: false,\n        decoratorVersion: '2021-12',\n        includes: [\"src/broken.ts\"],\n        excludes: ['node_modules/'],\n      }\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Farm \u63d0\u4f9b\u4e86\u4e00\u4e2a\u88c5\u9970\u5668\u7684\u793a\u4f8b\uff0c\u53ef\u4ee5\u770b ",(0,r.jsx)(n.a,{href:"https://github.com/farm-fe/farm/tree/main/examples/decorators",children:"https://github.com/farm-fe/farm/tree/main/examples/decorators"})]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b, Farm \u4e0d\u4f1a\u8f6c\u8bd1 ",(0,r.jsx)(n.code,{children:"node_modules"})," \u4e0b\u7684\u88c5\u9970\u5668, \u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/docs/config/farm-config#scriptdecorators",children:"compilation.script.decorators.excludes"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528-swc-\u63d2\u4ef6",children:"\u4f7f\u7528 SWC \u63d2\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"SWC Plugins \u53ef\u4ee5\u76f4\u63a5\u5728 Farm \u4e2d\u4f7f\u7528\uff0c\u4f8b\u5982\u6211\u4eec\u5728 Farm \u4e2d\u4f7f\u7528 swc-plugin-vue-jsx \u6765\u7f16\u8bd1 vue jsx\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:'import jsPluginVue from "@farmfe/js-plugin-vue";\n\n/**\n * @type {import(\'@farmfe/core\').UserConfig}\n */\nexport default {\n  compilation: {\n    script: {\n      plugins: [\n        {\n          name: "swc-plugin-vue-jsx",\n          options: {\n            transformOn: true,\n            optimize: true,\n          },\n          filters: {\n            // resolvedPaths: [".+"]\n            moduleTypes: ["tsx", "jsx"],\n          },\n        },\n      ],\n    },\n  },\n  plugins: [jsPluginVue()],\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.jsx)(n.a,{href:"/docs/using-plugins#using-swc-plugins",children:"\u4f7f\u7528\u63d2\u4ef6"}),"\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"vite-\u98ce\u683c\u7684-importmetaglob",children:["Vite \u98ce\u683c\u7684 ",(0,r.jsx)(n.code,{children:"import.meta.glob"})]}),"\n",(0,r.jsxs)(n.p,{children:["Farm \u5b8c\u6574\u652f\u6301 Vite \u98ce\u683c\u7684 ",(0,r.jsx)(n.code,{children:"import.meta.glob"}),", \u53c2\u8003 ",(0,r.jsx)(n.a,{href:"https://vitejs.dev/guide/features.html#glob-import",children:"glob import"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5982:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const modules = import.meta.glob("./dir/*.js");\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u4f1a\u88ab\u7f16\u8bd1\u6210\u4ee5\u4e0b\u7ed3\u679c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'// code produced by Farm\nconst modules = {\n  "./dir/foo.js": () => import("./dir/foo.js"),\n  "./dir/bar.js": () => import("./dir/bar.js"),\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"{ eager: true }"})," \u540e:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const modules = import.meta.glob("./dir/*.js", { eager: true });\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u4f1a\u88ab\u7f16\u8bd1\u6210\u4ee5\u4e0b\u7ed3\u679c:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'// code produced by Farm\nimport * as __glob__0_0 from "./dir/foo.js";\nimport * as __glob__0_1 from "./dir/bar.js";\nconst modules = {\n  "./dir/foo.js": __glob__0_0,\n  "./dir/bar.js": __glob__0_1,\n};\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u652f\u6301\u6570\u7ec4\u5f62\u5f0f:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const modules = import.meta.glob(["./dir/*.js", "./another/*.js"]);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u652f\u6301\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"!"})," \u6392\u9664\u67d0\u4e9b\u5339\u914d:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const modules = import.meta.glob(["./dir/*.js", "!**/bar.js"]);\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'// code produced by Farm\nconst modules = {\n  "./dir/foo.js": () => import("./dir/foo.js"),\n};\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"import.meta.glob"})," \u53c2\u6570\u5fc5\u987b\u5168\u90e8\u662f\u5b57\u9762\u91cf\uff0c\u4e0d\u80fd\u4f7f\u7528\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"import.meta.glob"})," \u5728\u7f16\u8bd1\u65f6\u5904\u7406\u548c\u8f6c\u6362\uff0c\u5728\u8fd0\u884c\u65f6\u4e0d\u5b58\u5728\u3002"]}),"\n"]})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},5296:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var r=s(758);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);