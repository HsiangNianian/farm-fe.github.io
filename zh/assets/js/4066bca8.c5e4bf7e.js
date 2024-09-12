"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[4093],{5505:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>l});var r=s(6070),i=s(5296);const c={},a="Tree Shake",t={id:"advanced/tree-shake",title:"Tree Shake",description:"Farm \u652f\u6301 Tree Shake\uff0c\u8be5\u529f\u80fd\u5728\u9ed8\u8ba4\u7684\u751f\u4ea7\u73af\u5883\u4e2d\u81ea\u52a8\u542f\u7528\uff0c\u53ef\u4ee5\u901a\u8fc7compilation.treeShaking\u9009\u9879\u6253\u5f00\u6216\u5173\u95ed\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/advanced/tree-shake.md",sourceDirName:"advanced",slug:"/advanced/tree-shake",permalink:"/farm-fe.github.io/zh/docs/advanced/tree-shake",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/advanced/tree-shake.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5c40\u90e8\u6253\u5305",permalink:"/farm-fe.github.io/zh/docs/advanced/partial-bundling"},next:{title:"\u4ea7\u7269\u538b\u7f29",permalink:"/farm-fe.github.io/zh/docs/advanced/minification"}},d={},l=[{value:"\u914d\u7f6e Tree Shake",id:"\u914d\u7f6e-tree-shake",level:2},{value:"\u5904\u7406 Side Effects",id:"\u5904\u7406-side-effects",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tree-shake",children:"Tree Shake"}),"\n",(0,r.jsxs)(n.p,{children:["Farm \u652f\u6301 Tree Shake\uff0c\u8be5\u529f\u80fd\u5728\u9ed8\u8ba4\u7684\u751f\u4ea7\u73af\u5883\u4e2d\u81ea\u52a8\u542f\u7528\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(n.a,{href:"/zh/document/config/compcompation-option#treeshaking",children:"compilation.treeShaking"}),"\u9009\u9879\u6253\u5f00\u6216\u5173\u95ed\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5728 Tree Shake \u671f\u95f4\uff0cpackage.json \u4e2d\u7684 sideEffects \u5b57\u6bb5\u5c06\u88ab\u81ea\u52a8\u8bfb\u53d6\uff0c\u5177\u6709 sideEffects \u7684\u6a21\u5757\u5c06\u4e0d\u4f1a\u6267\u884c Tree Shake\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Farm \u4f1a\u5c06\u6240\u6709\u5faa\u73af\u4f9d\u8d56\u7684\u6a21\u5757\u89c6\u4e3a sideEffects\uff0c\u4e0d\u4f1a\u6267\u884c Tree Shake\u3002\u8bf7\u5c3d\u91cf\u907f\u514d\u9879\u76ee\u4e2d\u7684\u5faa\u73af\u4f9d\u8d56\u3002"})}),"\n",(0,r.jsx)(n.p,{children:"Tree shake \u793a\u4f8b:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="a.js"',children:"import { b1, b2 } from 'b';\nconsole.log(b1);\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="b.js"',children:'export b1 = "B1";\nexport b2 = "B2";\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"a.js"})," \u662f entry\uff0c\u5b83\u5bfc\u5165",(0,r.jsx)(n.code,{children:"b.js"}),"\uff0ctree shaking \u540e\uff0c\u7ed3\u679c\u662f\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="a.js"',children:"import { b1 } from 'b';\nconsole.log(b1);\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="b.js"',children:'export b1 = "B1";\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"b2"}),"\u672a\u4f7f\u7528\uff0c\u5c06\u5728",(0,r.jsx)(n.code,{children:"a.js"}),"\u548c ",(0,r.jsx)(n.code,{children:"b.js"}),"\u4e2d\u5220\u9664"]}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e-tree-shake",children:"\u914d\u7f6e Tree Shake"}),"\n",(0,r.jsxs)(n.p,{children:["Tree Shake \u9ed8\u8ba4\u5728\u751f\u4ea7\u6a21\u5f0f\u4e0b\u542f\u7528\uff0c\u8981\u7981\u7528 tree Shake\uff0c\u8bf7\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"compilation. treeShaking"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"export default {\n  compilation: {\n    treeShaking: false,\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5904\u7406-side-effects",children:"\u5904\u7406 Side Effects"}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u4e00\u4e2a\u6a21\u5757\u5305\u542b",(0,r.jsx)(n.code,{children:"Side Effects"}),"\u65f6\uff0cFarm \u4e0d\u4f1a\u4e3a\u5176\u5e94\u7528 tree shake\uff0c\u5176\u6240\u6709\u5bfc\u5165\u548c\u5bfc\u51fa\u90fd\u88ab\u89c6\u4e3a\u5df2\u4f7f\u7528\u3002Farm \u4f1a\u8ba4\u4e3a\u4ee5\u4e0b\u6a21\u5757\u6709 ",(0,r.jsx)(n.code,{children:"Side effects"}),"\uff1a"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Common Js \u6a21\u5757\u603b\u662f\u6709\u526f\u4f5c\u7528."}),"\n",(0,r.jsxs)(n.li,{children:["\u4e00\u4e2a\u6a21\u5757\u5305\u542b",(0,r.jsx)(n.code,{children:"\u81ea\u6267\u884c"}),"\u7684\u8bed\u53e5\u5728\u5168\u5c40\u8303\u56f4\u6709\u526f\u4f5c\u7528"]}),"\n",(0,r.jsx)(n.li,{children:"\u5305\u542b\u5faa\u73af\u4f9d\u8d56\u7684\u6a21\u5757\u6709\u526f\u4f5c\u7528"}),"\n",(0,r.jsxs)(n.li,{children:["\u6a21\u5757\u5339\u914d ",(0,r.jsx)(n.code,{children:"sideEffects"})," \u914d\u7f6e\u5728\u5176\u6700\u63a5\u8fd1\u7684 ",(0,r.jsx)(n.code,{children:"package. json"})]}),"\n",(0,r.jsx)(n.li,{children:"\u5165\u53e3\u6a21\u5757\u603b\u662f\u6709\u526f\u4f5c\u7528"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b 1:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const a = require('./');\nmodule.exports = a;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Common Js \u6a21\u5757\u603b\u662f\u6709\u526f\u4f5c\u7528."}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b 2:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import a from './';\n\na();\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"a()"})," \u5728\u5168\u5c40\u8303\u56f4\u5185\u6267\u884c\uff0c\u6211\u4eec\u5c06\u5176\u89c6\u4e3a\u526f\u4f5c\u7528."]}),"\n",(0,r.jsx)(n.p,{children:"Example 3:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// a.js\nimport b from './b.js';\n\n// b.js\nimport a from './a.js';\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"a"}),"\uff0c",(0,r.jsx)(n.code,{children:"b"}),"\u662f\u5faa\u73af\u4f9d\u8d56\u5173\u7cfb\uff0c\u6240\u4ee5\u5b83\u4eec\u4e5f\u4f1a\u88ab\u89c6\u4e3a\u526f\u4f5c\u7528."]}),"\n",(0,r.jsx)(n.p,{children:"Example 4:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "name": "my-package",\n  "sideEffects": ["./global/**.ts"]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6240\u6709 ",(0,r.jsx)(n.code,{children:"global/"})," \u4e0b\u7684 ts \u6a21\u5757\u90fd\u88ab\u89c6\u4e3a\u526f\u4f5c\u7528."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},5296:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>t});var r=s(758);const i={},c=r.createContext(i);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);