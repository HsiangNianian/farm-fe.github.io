"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[5517],{6510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(6070),i=n(5296);const r={},o="Static Assets",a={id:"features/static",title:"Static Assets",description:"Since v0.4",source:"@site/versioned_docs/version-0.x/features/static.md",sourceDirName:"features",slug:"/features/static",permalink:"/farm-fe.github.io/docs/0.x/features/static",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/features/static.md",tags:[],version:"0.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Script",permalink:"/farm-fe.github.io/docs/0.x/features/script"},next:{title:"Lazy Compilation",permalink:"/farm-fe.github.io/docs/0.x/features/lazy-compilation"}},l={},c=[{value:"url",id:"url",level:2},{value:"inline",id:"inline",level:2},{value:"raw",id:"raw",level:2},{value:"Configuring Assets",id:"configuring-assets",level:2}];function d(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"static-assets",children:"Static Assets"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Since v0.4\nFarm supports three resource loading methods: ",(0,s.jsx)(t.code,{children:"url"}),", ",(0,s.jsx)(t.code,{children:"inline"}),", ",(0,s.jsx)(t.code,{children:"raw"})," \u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"url",children:"url"}),"\n",(0,s.jsx)(t.p,{children:"Import a image\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"import rocketUrl from './assets/rocket.svg'; // return the url of this image\n\nexport function Main() {\n  return <img src={rocketUrl} /> // using the url\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Default to use url method when import a image. When using url methods to import a image, the image will be emitted to the output dir directly, and the image module itself will be compiled to a js module like:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"export default '/rocket.<content hash>.svg'\n"})}),"\n",(0,s.jsxs)(t.p,{children:["using ",(0,s.jsx)(t.code,{children:"compilation.output.assetFilename"})," to config your asset name\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"inline",children:"inline"}),"\n",(0,s.jsxs)(t.p,{children:["Using query ",(0,s.jsx)(t.code,{children:"?inline"})," to tell Farm that you want to inline your assets\uff0cthen the assets will be transformed to base64\uff0cfor example\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// importer\nimport logo from './assets/logo.png?inline'; // logo is a base 64 str\n\n// the image module will be compiled to:\nexport default 'data:image/png,base64,xxxxx==';\n"})}),"\n",(0,s.jsx)(t.h2,{id:"raw",children:"raw"}),"\n",(0,s.jsxs)(t.p,{children:["Using query ",(0,s.jsx)(t.code,{children:"?raw"})," to tell Farm that you want to read the raw string of the assets, for example"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// import \nimport logo from './assets/license.txt?raw'; // return the content string of the assets\n\n// the txt file will be compiled to:\nexport default 'MIT xxxx';\n"})}),"\n",(0,s.jsx)(t.h2,{id:"configuring-assets",children:"Configuring Assets"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Using ",(0,s.jsx)(t.code,{children:"compilation.output.assetFileName"})," to control the production file name"]}),"\n",(0,s.jsxs)(t.li,{children:["using ",(0,s.jsx)(t.code,{children:"compilation.assets.include"})," to treat more kind of files as asset modules."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"export default {\n  compilation: {\n    output: {\n      assetFilename: 'assets/[resourceName].[hash].[ext]', // [] is a placeholder, Farm currently only these three kind of placeholders\n    },\n    assets: {\n      include: ['txt'] // extra static asset extension\n    }\n  }\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5296:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(758);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);