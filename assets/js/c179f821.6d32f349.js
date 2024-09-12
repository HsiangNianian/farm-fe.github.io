"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[1110],{5480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=n(6070),a=n(5296),r=n(7404);const s={sidebar_position:1},l="Quick Start",c={id:"quick-start",title:"Quick Start",description:"Farm needs Node 16.18.0 and above.",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/farm-fe.github.io/docs/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/quick-start.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Why Farm?",permalink:"/farm-fe.github.io/docs/why-farm"},next:{title:"Using Plugins",permalink:"/farm-fe.github.io/docs/using-plugins"}},o={},d=[{value:"Online experience",id:"online-experience",level:2},{value:"Create a Farm Project",id:"create-a-farm-project",level:2},{value:"2. Start the Project",id:"2-start-the-project",level:2},{value:"3. Configuring the Project",id:"3-configuring-the-project",level:2},{value:"4. Building the project",id:"4-building-the-project",level:2},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Farm needs ",(0,i.jsx)(t.strong,{children:"Node 16.18.0 and above"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"online-experience",children:"Online experience"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://codesandbox.io/p/github/ErKeLost/react/main",children:(0,i.jsx)(t.img,{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit Farm"})})}),"\n",(0,i.jsx)(t.h2,{id:"create-a-farm-project",children:"Create a Farm Project"}),"\n",(0,i.jsx)(r.k,{command:"pnpm create farm@latest"}),"\n",(0,i.jsx)(t.admonition,{title:"Then follow the prompts!",type:"note",children:(0,i.jsx)(t.p,{children:"You can also directly specify the project name and the template you want to use via additional command line options:"})}),"\n",(0,i.jsx)(r.k,{command:"pnpm create farm farm-app --template react"}),"\n",(0,i.jsx)(t.h2,{id:"2-start-the-project",children:"2. Start the Project"}),"\n",(0,i.jsx)(t.p,{children:"Choose the package manager you like, install dependencies, then start the project.\nThen, start the project:"}),"\n",(0,i.jsx)(r.k,{command:"cd farm-app && pnpm install && pnpm start"}),"\n",(0,i.jsxs)(t.p,{children:["The project will start at ",(0,i.jsx)(t.code,{children:"http://localhost:9000"})," by default."]}),"\n",(0,i.jsx)(t.h2,{id:"3-configuring-the-project",children:"3. Configuring the Project"}),"\n",(0,i.jsxs)(t.p,{children:["The project is configured by ",(0,i.jsx)(t.code,{children:"farm.config.ts/js/mjs"})," file in the root directory of the project."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:'import { defineConfig } from "@farmfe/core";\n\nexport default defineConfig({\n  // Options related to the compilation\n  compilation: {\n    input: {\n      // can be a relative path or an absolute path\n      index: "./index.html",\n    },\n    output: {\n      path: "./build",\n      publicPath: "/",\n    },\n    // ...\n  },\n  // Options related to the dev server\n  server: {\n    port: 9000,\n    // ...\n  },\n  // Additional plugins\n  plugins: [],\n});\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"/docs/config/configuring-farm",children:"Configuring Farm"})})," for details."]})}),"\n",(0,i.jsx)(t.h2,{id:"4-building-the-project",children:"4. Building the project"}),"\n",(0,i.jsx)(t.p,{children:"Build the Farm project as production-ready static files:"}),"\n",(0,i.jsx)(r.k,{command:"npm run build"}),"\n",(0,i.jsxs)(t.p,{children:["The built product is downgraded to ",(0,i.jsx)(t.code,{children:"ES2017"})," by default, and the product will be compressed and Tree Shake. If you want to preview the build product locally, you can execute ",(0,i.jsx)(t.code,{children:"npm run preview"})," or ",(0,i.jsx)(t.code,{children:"npx farm preview"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"/docs/tutorials/build",children:"Build For Production"})})," for details."]})}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/why-farm",children:"Why Farm?"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/features/html",children:"Features"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/config/configuring-farm",children:"Configuring Farm"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/plugins/official-plugins/overview",children:"Plugins"})}),"\n"]}),"\n",(0,i.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7404:(e,t,n)=>{n.d(t,{k:()=>w});var i=n(758);const a=(0,i.createContext)({tabData:{},setTabData:()=>{}}),r="container__nVC",s="tab-list_aJ1t",l="tab_J4Y8",c="not-selected_sRGg",o="selected_erAK",d="no-scrollbar_vtMC";var h=n(6070);const p=e=>function(e){return!(!e||"object"!=typeof e||!("label"in e))}(e)?e.label||e.value:e,u=(0,i.forwardRef)(((e,t)=>{const{values:n,defaultValue:u,onChange:m,children:f,groupId:x,tabPosition:j="left",tabContainerClassName:g}=e,v=i.Children.toArray(f).filter((e=>!("string"==typeof e&&""===e.trim())));let b=n||[];0===b.length&&(b=i.Children.map(v,(e=>(0,i.isValidElement)(e)?{label:e.props?.label,value:e.props?.value||e.props?.label}:{label:void 0,value:void 0})));const{tabData:y,setTabData:w}=(0,i.useContext)(a),[C,k]=(0,i.useState)((()=>void 0===u?0:b.findIndex((e=>"string"==typeof e?e===u:!(!e||"object"!=typeof e||!("value"in e))&&e.value===u)))),[S,Z]=function(e,t){void 0===t&&(t=null);const[n,a]=(0,i.useState)((()=>"undefined"==typeof window?t:localStorage.getItem(e)??t)),r=(0,i.useCallback)((t=>{a((n=>{const i="function"==typeof t?t(n):t;return null==i?localStorage.removeItem(e):localStorage.setItem(e,i),i}))}),[e]);return(0,i.useEffect)((()=>{const n=n=>{n.key===e&&a(localStorage.getItem(e)??t)};return window.addEventListener("storage",n),()=>{window.removeEventListener("storage",n)}}),[e,t]),[n,r]}(`tabs.${x}`,C),M=(0,i.useMemo)((()=>x?void 0!==y[x]?y[x]:Number.parseInt(S):C),[y[x]]);(0,i.useEffect)((()=>{if(x){const e=Number.parseInt(S);M!==e&&w({...y,[x]:e})}}),[S]),(0,i.useEffect)((()=>{B(x?M:C)}),[x,M,C]);const[A,B]=(0,i.useState)(x?M:C);return(0,h.jsxs)("div",{className:r,ref:t,children:[(0,h.jsx)("div",{className:g,children:b.length?(0,h.jsx)("div",{className:`${s} ${d}`,style:{display:"flex",justifyContent:"center"===j?"center":"flex-start"},children:b.map(((e,t)=>(0,h.jsx)("div",{className:`${l} ${A===t?o:c}`,onClick:()=>{const e=t;m?.(e),B(e),x?(w({...y,[x]:e}),Z(e)):k(e)},children:p(e)},t)))}):null}),(0,h.jsx)("div",{children:i.Children.toArray(v)[A]})]})}));function m(e){let{children:t,...n}=e;return(0,h.jsx)("div",{...n,className:"rounded px-2",children:t})}var f=n(9873);function x(e){return(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256",...e,children:[(0,h.jsx)("path",{fill:"#C12127",d:"M0 256V0h256v256z"}),(0,h.jsx)("path",{fill:"#FFF",d:"M48 48h160v160h-32V80h-48v128H48z"})]})}function j(e){return(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 128 128",...e,children:(0,h.jsxs)("g",{fill:"#2c8ebb",children:[(0,h.jsx)("path",{d:"M99.24 80.71C94.9 80.76 91.1 83 87.89 85c-6 3.71-9 3.47-9 3.47l-.1-.17c-.41-.67 1.92-6.68-.69-13.84c-2.82-7.83-7.3-9.72-6.94-10.32c1.53-2.59 5.36-6.7 6.89-14.36c.91-4.64.67-12.28-1.39-16.28c-.38-.74-3.78 1.24-3.78 1.24s-3.18-7.09-4.07-7.66c-2.87-1.84-6 7.61-6 7.61a14 14 0 0 0-11.71 4.5a9.64 9.64 0 0 1-3.85 2.27c-.41.14-.91.12-2.15 3.47c-1.9 5.07 3.24 10.81 3.24 10.81s-6.13 4.33-8.4 9.72a24.78 24.78 0 0 0-1.75 11.68s-4.36 3.78-4.64 7.68a12.87 12.87 0 0 0 1.77 7.83a1.94 1.94 0 0 0 2.63.91s-2.9 3.38-.19 4.81c2.47 1.29 6.63 2 8.83-.19c1.6-1.6 1.92-5.17 2.51-6.63c.14-.34.62.57 1.08 1a10 10 0 0 0 1.36 1s-3.9 1.68-2.3 5.51c.53 1.27 2.42 2.08 5.51 2.06c1.15 0 13.76-.72 17.12-1.53a4.33 4.33 0 0 0 2.61-1.46a63 63 0 0 0 15.49-7c4.74-3.09 6.68-3.93 10.51-4.84c3.16-.75 2.95-5.65-1.24-5.58z"}),(0,h.jsx)("path",{d:"M64 2a62 62 0 1 0 62 62A62 62 0 0 0 64 2zm37.3 87.83c-3.35.81-4.91 1.44-9.41 4.36a67 67 0 0 1-15.56 7.18a8.71 8.71 0 0 1-3.64 1.77c-3.81.93-16.88 1.63-17.91 1.63h-.24c-4 0-6.27-1.24-7.49-2.54c-3.4 1.7-7.8 1-11-.69a5.55 5.55 0 0 1-3-3.9a6 6 0 0 1 0-2.06a6.66 6.66 0 0 1-.79-1A16.38 16.38 0 0 1 30 84.52c.29-3.73 2.87-7.06 4.55-8.83A28.56 28.56 0 0 1 36.61 64a26.82 26.82 0 0 1 6.82-9c-1.65-2.78-3.33-7.06-1.7-11.42c1.17-3.11 2.13-4.84 4.24-5.58a6.84 6.84 0 0 0 2.51-1.34A17.65 17.65 0 0 1 60.34 31c.19-.48.41-1 .65-1.46c1.6-3.4 3.3-5.31 5.29-6a4.88 4.88 0 0 1 4.4.5c.65.43 1.48 1 3.9 6a4.69 4.69 0 0 1 2.85-.1a3.81 3.81 0 0 1 2.39 1.94c2.47 4.74 2.8 13.19 1.72 18.62a33.8 33.8 0 0 1-5.84 13.31a25.73 25.73 0 0 1 5.77 9.43a25.42 25.42 0 0 1 1.41 10.41A28.7 28.7 0 0 0 86 81.91c3.06-1.89 7.68-4.74 13.19-4.81a6.62 6.62 0 0 1 7 5.7a6.35 6.35 0 0 1-4.89 7.03z"})]})})}function g(e){return(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 128 128",...e,children:[(0,h.jsx)("path",{fill:"#f8ab00",d:"M0 .004V40h39.996V.004Zm43.996 0V40h40V.004Zm44.008 0V40H128V.004Zm0 43.996v39.996H128V44Z"}),(0,h.jsx)("path",{fill:"#4c4c4c",d:"M43.996 44v39.996h40V44ZM0 87.996v40h39.996v-40Zm43.996 0v40h40v-40Zm44.008 0v40H128v-40Z"})]})}function v(e){return(0,h.jsxs)("svg",{id:"Bun",width:"1.2em",height:"1.2em",viewBox:"0 0 80 70",...e,children:[(0,h.jsx)("path",{id:"Shadow",d:"M71.09,20.74c-.16-.17-.33-.34-.5-.5s-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5A26.46,26.46,0,0,1,75.5,35.7c0,16.57-16.82,30.05-37.5,30.05-11.58,0-21.94-4.23-28.83-10.86l.5.5.5.5.5.5.5.5.5.5.5.5.5.5C19.55,65.3,30.14,69.75,42,69.75c20.68,0,37.5-13.48,37.5-30C79.5,32.69,76.46,26,71.09,20.74Z"}),(0,h.jsxs)("g",{id:"Body",children:[(0,h.jsx)("path",{id:"Background",d:"M73,35.7c0,15.21-15.67,27.54-35,27.54S3,50.91,3,35.7C3,26.27,9,17.94,18.22,13S33.18,3,38,3s8.94,4.13,19.78,10C67,17.94,73,26.27,73,35.7Z",style:{fill:"#fbf0df"}}),(0,h.jsx)("path",{id:"Bottom_Shadow","data-name":"Bottom Shadow",d:"M73,35.7a21.67,21.67,0,0,0-.8-5.78c-2.73,33.3-43.35,34.9-59.32,24.94A40,40,0,0,0,38,63.24C57.3,63.24,73,50.89,73,35.7Z",style:{fill:"#f6dece"}}),(0,h.jsx)("path",{id:"Light_Shine","data-name":"Light Shine",d:"M24.53,11.17C29,8.49,34.94,3.46,40.78,3.45A9.29,9.29,0,0,0,38,3c-2.42,0-5,1.25-8.25,3.13-1.13.66-2.3,1.39-3.54,2.15-2.33,1.44-5,3.07-8,4.7C8.69,18.13,3,26.62,3,35.7c0,.4,0,.8,0,1.19C9.06,15.48,20.07,13.85,24.53,11.17Z",style:{fill:"#fffefc"}}),(0,h.jsx)("path",{id:"Top",d:"M35.12,5.53A16.41,16.41,0,0,1,29.49,18c-.28.25-.06.73.3.59,3.37-1.31,7.92-5.23,6-13.14C35.71,5,35.12,5.12,35.12,5.53Zm2.27,0A16.24,16.24,0,0,1,39,19c-.12.35.31.65.55.36C41.74,16.56,43.65,11,37.93,5,37.64,4.74,37.19,5.14,37.39,5.49Zm2.76-.17A16.42,16.42,0,0,1,47,17.12a.33.33,0,0,0,.65.11c.92-3.49.4-9.44-7.17-12.53C40.08,4.54,39.82,5.08,40.15,5.32ZM21.69,15.76a16.94,16.94,0,0,0,10.47-9c.18-.36.75-.22.66.18-1.73,8-7.52,9.67-11.12,9.45C21.32,16.4,21.33,15.87,21.69,15.76Z",style:{fill:"#ccbea7",fillRule:"evenodd"}}),(0,h.jsx)("path",{id:"Outline",d:"M38,65.75C17.32,65.75.5,52.27.5,35.7c0-10,6.18-19.33,16.53-24.92,3-1.6,5.57-3.21,7.86-4.62,1.26-.78,2.45-1.51,3.6-2.19C32,1.89,35,.5,38,.5s5.62,1.2,8.9,3.14c1,.57,2,1.19,3.07,1.87,2.49,1.54,5.3,3.28,9,5.27C69.32,16.37,75.5,25.69,75.5,35.7,75.5,52.27,58.68,65.75,38,65.75ZM38,3c-2.42,0-5,1.25-8.25,3.13-1.13.66-2.3,1.39-3.54,2.15-2.33,1.44-5,3.07-8,4.7C8.69,18.13,3,26.62,3,35.7,3,50.89,18.7,63.25,38,63.25S73,50.89,73,35.7C73,26.62,67.31,18.13,57.78,13,54,11,51.05,9.12,48.66,7.64c-1.09-.67-2.09-1.29-3-1.84C42.63,4,40.42,3,38,3Z"})]}),(0,h.jsxs)("g",{id:"Mouth",children:[(0,h.jsx)("g",{id:"Background-2","data-name":"Background",children:(0,h.jsx)("path",{d:"M45.05,43a8.93,8.93,0,0,1-2.92,4.71,6.81,6.81,0,0,1-4,1.88A6.84,6.84,0,0,1,34,47.71,8.93,8.93,0,0,1,31.12,43a.72.72,0,0,1,.8-.81H44.26A.72.72,0,0,1,45.05,43Z",style:{fill:"#b71422"}})}),(0,h.jsxs)("g",{id:"Tongue",children:[(0,h.jsx)("path",{id:"Background-3","data-name":"Background",d:"M34,47.79a6.91,6.91,0,0,0,4.12,1.9,6.91,6.91,0,0,0,4.11-1.9,10.63,10.63,0,0,0,1-1.07,6.83,6.83,0,0,0-4.9-2.31,6.15,6.15,0,0,0-5,2.78C33.56,47.4,33.76,47.6,34,47.79Z",style:{fill:"#ff6164"}}),(0,h.jsx)("path",{id:"Outline-2","data-name":"Outline",d:"M34.16,47a5.36,5.36,0,0,1,4.19-2.08,6,6,0,0,1,4,1.69c.23-.25.45-.51.66-.77a7,7,0,0,0-4.71-1.93,6.36,6.36,0,0,0-4.89,2.36A9.53,9.53,0,0,0,34.16,47Z"})]}),(0,h.jsx)("path",{id:"Outline-3","data-name":"Outline",d:"M38.09,50.19a7.42,7.42,0,0,1-4.45-2,9.52,9.52,0,0,1-3.11-5.05,1.2,1.2,0,0,1,.26-1,1.41,1.41,0,0,1,1.13-.51H44.26a1.44,1.44,0,0,1,1.13.51,1.19,1.19,0,0,1,.25,1h0a9.52,9.52,0,0,1-3.11,5.05A7.42,7.42,0,0,1,38.09,50.19Zm-6.17-7.4c-.16,0-.2.07-.21.09a8.29,8.29,0,0,0,2.73,4.37A6.23,6.23,0,0,0,38.09,49a6.28,6.28,0,0,0,3.65-1.73,8.3,8.3,0,0,0,2.72-4.37.21.21,0,0,0-.2-.09Z"})]}),(0,h.jsxs)("g",{id:"Face",children:[(0,h.jsx)("ellipse",{id:"Right_Blush","data-name":"Right Blush",cx:"53.22",cy:"40.18",rx:"5.85",ry:"3.44",style:{fill:"#febbd0"}}),(0,h.jsx)("ellipse",{id:"Left_Bluch","data-name":"Left Bluch",cx:"22.95",cy:"40.18",rx:"5.85",ry:"3.44",style:{fill:"#febbd0"}}),(0,h.jsx)("path",{id:"Eyes",d:"M25.7,38.8a5.51,5.51,0,1,0-5.5-5.51A5.51,5.51,0,0,0,25.7,38.8Zm24.77,0A5.51,5.51,0,1,0,45,33.29,5.5,5.5,0,0,0,50.47,38.8Z",style:{fillRule:"evenodd"}}),(0,h.jsx)("path",{id:"Iris",d:"M24,33.64a2.07,2.07,0,1,0-2.06-2.07A2.07,2.07,0,0,0,24,33.64Zm24.77,0a2.07,2.07,0,1,0-2.06-2.07A2.07,2.07,0,0,0,48.75,33.64Z",style:{fill:"#fff",fillRule:"evenodd"}})]})]})}function b(e){if(!e?.includes("install"))return e;const t=e.split(" ").filter((e=>!e.startsWith("-")&&!e.startsWith("--"))).join(" ");return"yarn install"===t||"bun install"===t?e:e.replace("install","add")}function y(e,t){let n=e;return["npm","yarn","pnpm","bun"].forEach((e=>{const i=new RegExp(`\\b${e}\\b`,"g");n=n.replace(i,t)})),n}function w(e){let t,{command:n,skip:i=!0,additionalTabs:a=[]}=e;const r={npm:(0,h.jsx)(x,{}),yarn:(0,h.jsx)(j,{}),pnpm:(0,h.jsx)(g,{}),bun:(0,h.jsx)(v,{})};if(a.forEach((e=>{r[e.tool]=e.icon})),"string"==typeof n?(t={npm:`npm ${n}`,yarn:`yarn ${n}`,pnpm:`pnpm ${n}`,bun:`bun ${n}`},a.forEach((e=>{t[e.tool]=i?y(n,e.tool):`${e.tool} ${n}`}))):t=n,t.yarn&&(t.yarn=b(t.yarn)),t.bun&&(t.bun=b(t.bun)),i){["npm","yarn","pnpm","bun"].forEach((e=>{t[e]=y(n,e)}))}return(0,h.jsx)(u,{groupId:"package.manager",values:Object.entries(t).map((e=>{let[t]=e;return(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",fontSize:15},children:[r[t],(0,h.jsx)("span",{style:{marginLeft:6,marginBottom:2},children:t})]},t)})),children:Object.entries(t).map((e=>{let[t,n]=e;return(0,h.jsx)(m,{children:(0,h.jsx)(f.A,{className:"my-2",children:n})},t)}))})}}}]);