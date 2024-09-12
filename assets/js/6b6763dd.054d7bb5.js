"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[1835],{9654:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var s=t(6070),i=t(5296),r=t(7404);const l={},o="Contribution Guide",a={id:"contribution",title:"Contribution Guide",description:"Thank you for your interest in contributing to Farm!. Before submitting your contribution, please make sure to take a moment and read through the following guidelines.",source:"@site/docs/contribution.mdx",sourceDirName:".",slug:"/contribution",permalink:"/docs/contribution",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/contribution.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Plugins",permalink:"/docs/using-plugins"},next:{title:"Overview",permalink:"/docs/tutorials/overview"}},c={},d=[{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Bug reports",id:"bug-reports",level:2},{value:"Feature requests",id:"feature-requests",level:2},{value:"Pull Request Guidelines",id:"pull-request-guidelines",level:2},{value:"Setup",id:"setup",level:2},{value:"Development Environment Setup",id:"development-environment-setup",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"IDE",id:"ide",level:3},{value:"Setup Other Dependencies",id:"setup-other-dependencies",level:3},{value:"Start running",id:"start-running",level:2},{value:"Testing",id:"testing",level:2},{value:"Rust Testing",id:"rust-testing",level:3},{value:"Node Testing",id:"node-testing",level:3},{value:"Quickly create plugins through scaffold",id:"quickly-create-plugins-through-scaffold",level:2},{value:"Pull Request Preface Tip",id:"pull-request-preface-tip",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"contribution-guide",children:"Contribution Guide"}),"\n",(0,s.jsx)(n.p,{children:"Thank you for your interest in contributing to Farm!. Before submitting your contribution, please make sure to take a moment and read through the following guidelines."}),"\n",(0,s.jsx)(n.h2,{id:"code-of-conduct",children:"Code of Conduct"}),"\n",(0,s.jsxs)(n.p,{children:["All contributors are expected to follow our ",(0,s.jsx)(n.a,{href:"https://www.rust-lang.org/policies/code-of-conduct",children:"Code of Conduct"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"bug-reports",children:"Bug reports"}),"\n",(0,s.jsx)(n.p,{children:"As farm is currently in the process of rapid development iteration, some unexpected problems may be encountered in the process of development."}),"\n",(0,s.jsx)(n.p,{children:"We can't fix what we don't know about, so please report problems and unexpected behavior."}),"\n",(0,s.jsxs)(n.p,{children:["You can open a new issue by following ",(0,s.jsx)(n.a,{href:"https://github.com/farm-fe/farm/issues/new/choose",children:"new-issues"})," and choosing one of the issue templates."]}),"\n",(0,s.jsx)(n.h2,{id:"feature-requests",children:"Feature requests"}),"\n",(0,s.jsxs)(n.p,{children:["Please feel free to open an issue using the ",(0,s.jsx)(n.a,{href:"https://github.com/farm-fe/farm/issues/new/choose",children:"feature request template"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"pull-request-guidelines",children:"Pull Request Guidelines"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Please adhere to the code style that you see around the location you are working on."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Setup Your Development Environment."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Checkout a topic branch from a base branch, e.g. ",(0,s.jsx)(n.code,{children:"main"})," ."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"cargo test"})," and make sure that it passes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you've changed some packages And prepare for an updated version, you should output ",(0,s.jsx)(n.code,{children:"npx changeset"})," in the root directory. we should try our best to keep releasing the ",(0,s.jsx)(n.code,{children:"patch version"}),". If there are no major changes, please choose to update the ",(0,s.jsx)(n.code,{children:"patch version"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["When you are done with your work, verify that it works locally with ",(0,s.jsx)(n.code,{children:"pnpm run ready"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Fork and clone the repo."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a branch for your PR with ",(0,s.jsx)(n.code,{children:"git checkout -b your-branch-name"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To keep ",(0,s.jsx)(n.code,{children:"main"})," branch pointing to remote repository and make pull requests from branches on your fork. To do this, run:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"  git remote add upstream https://github.com/farm-fe/farm.git\n  git fetch upstream\n  git branch --set-upstream-to=upstream/main main\n"})}),"\n",(0,s.jsx)(n.h2,{id:"development-environment-setup",children:"Development Environment Setup"}),"\n",(0,s.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install Rust using ",(0,s.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"rustup"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://nodejs.org",children:"Node.js"})," ",(0,s.jsx)(n.strong,{children:"version 16+"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://pnpm.io",children:"Pnpm"})," ",(0,s.jsx)(n.strong,{children:"version 8+"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ide",children:"IDE"}),"\n",(0,s.jsx)(n.p,{children:"We recommend that you use vscode for development and recommend two necessary plugins that you need to install"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"rust-analyzer"})," support rust language"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"biome"})," farm use biome to detect and format the code"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can install them in the extension"}),"\n",(0,s.jsx)(n.h3,{id:"setup-other-dependencies",children:"Setup Other Dependencies"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Install ",(0,s.jsx)(n.a,{href:"https://grpc.io/docs/protoc-installation/",children:"protoc"})," for building ",(0,s.jsx)(n.code,{children:"sass-embedded"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TIP:"})," When you run ",(0,s.jsx)(n.code,{children:"pnpm bootstrap"})," and you use mac or linux systems, farm will automatically install protoc for you system"]}),"\n",(0,s.jsx)(n.h2,{id:"start-running",children:"Start running"}),"\n",(0,s.jsxs)(n.p,{children:["Farm development is very simple. You only need to execute ",(0,s.jsx)(n.code,{children:"pnpm bootstrap"})," in the root directory for development."]}),"\n",(0,s.jsx)(r.k,{command:"pnpm bootstrap"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["use ",(0,s.jsx)(n.code,{children:"pnpm bootstrap"})," to install dependencies and build core packages with series of initialization operations."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Work with examples (open a new terminal): ",(0,s.jsx)(n.code,{children:"cd examples/react && pnpm start"}),", report an issue if the example does not start normally."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"examples/react"})," project runs successfully, the development environment has been configured successfully"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you changed Rust code in ",(0,s.jsx)(n.code,{children:"crates"}),", run ",(0,s.jsx)(n.code,{children:"npm run build:rs"})," under ",(0,s.jsx)(n.code,{children:"packages/core"})," again to get the latest binary."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When you are developing node side code, the root directory executes pnpm start to debug the code in real time, and when you are developing rust side code, the root directory executes pnpm start",":rs"," to debug the code in real time."]}),"\n",(0,s.jsx)(r.k,{command:"pnpm start   // node side"}),"\n",(0,s.jsx)(r.k,{command:"pnpm start:rs   // rust side"}),"\n",(0,s.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,s.jsxs)(n.p,{children:["We also need to test two parts, a set of ",(0,s.jsx)(n.code,{children:"Rust"})," tests and a set of ",(0,s.jsx)(n.code,{children:"Node"})," tests. Make sure all the tests pass before you submit the code."]}),"\n",(0,s.jsx)(n.h3,{id:"rust-testing",children:"Rust Testing"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Input ",(0,s.jsx)(n.code,{children:"cargo test"})," in the root directory will run all the test cases."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# root path or crates path\ncargo test\n"})}),"\n",(0,s.jsx)(n.h3,{id:"node-testing",children:"Node Testing"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Input ",(0,s.jsx)(n.code,{children:"pnpm test"})," in the root directory to run all test cases based on ",(0,s.jsx)(n.code,{children:"vitest"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# root path\npnpm test\n"})}),"\n",(0,s.jsx)(n.h2,{id:"quickly-create-plugins-through-scaffold",children:"Quickly create plugins through scaffold"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to develop a plugin for farm, farm provides a scaffolding to help you quickly create a plugin, which you can create with the following command.\nYou can go to the ",(0,s.jsx)(n.code,{children:"cd packages/ cli"})," directory, run ",(0,s.jsx)(n.code,{children:"npm link"})," or global installation ",(0,s.jsx)(n.code,{children:"@ farmfe/ cli"})," to use this CLI, after the installation is complete, You can create a plugin through ",(0,s.jsx)(n.code,{children:"farm plugin create"}),".\nFarm supports the creation of rust and js plugins."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ farm plugin create <plugin-name> # create a plugin support js or rust\n"})}),"\n",(0,s.jsx)(n.h2,{id:"pull-request-preface-tip",children:"Pull Request Preface Tip"}),"\n",(0,s.jsxs)(n.p,{children:["Farm is divided into two parts: the ",(0,s.jsx)(n.code,{children:"JavaScript side"})," and the ",(0,s.jsx)(n.code,{children:"Rust side"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"the JavaScript side"}),":\nsee code in the ",(0,s.jsx)(n.code,{children:"packages"})," directory. contains core (dev server, file watcher, and compiler wrapper), CLI, runtime, and runtime plugins (module system, HMR)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"the Rust side"}),":\nsee code in the ",(0,s.jsx)(n.code,{children:"crates"})," and ",(0,s.jsx)(n.code,{children:"rust-plugins"})," directory. contains core (compilation context, plugin drivers, etc.), compiler (compile process, HMR update, etc.), and plugins."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7404:(e,n,t)=>{t.d(n,{k:()=>w});var s=t(758);const i=(0,s.createContext)({tabData:{},setTabData:()=>{}}),r="container__nVC",l="tab-list_aJ1t",o="tab_J4Y8",a="not-selected_sRGg",c="selected_erAK",d="no-scrollbar_vtMC";var h=t(6070);const u=e=>function(e){return!(!e||"object"!=typeof e||!("label"in e))}(e)?e.label||e.value:e,p=(0,s.forwardRef)(((e,n)=>{const{values:t,defaultValue:p,onChange:x,children:m,groupId:j,tabPosition:f="left",tabContainerClassName:g}=e,v=s.Children.toArray(m).filter((e=>!("string"==typeof e&&""===e.trim())));let b=t||[];0===b.length&&(b=s.Children.map(v,(e=>(0,s.isValidElement)(e)?{label:e.props?.label,value:e.props?.value||e.props?.label}:{label:void 0,value:void 0})));const{tabData:y,setTabData:w}=(0,s.useContext)(i),[k,C]=(0,s.useState)((()=>void 0===p?0:b.findIndex((e=>"string"==typeof e?e===p:!(!e||"object"!=typeof e||!("value"in e))&&e.value===p)))),[M,S]=function(e,n){void 0===n&&(n=null);const[t,i]=(0,s.useState)((()=>"undefined"==typeof window?n:localStorage.getItem(e)??n)),r=(0,s.useCallback)((n=>{i((t=>{const s="function"==typeof n?n(t):n;return null==s?localStorage.removeItem(e):localStorage.setItem(e,s),s}))}),[e]);return(0,s.useEffect)((()=>{const t=t=>{t.key===e&&i(localStorage.getItem(e)??n)};return window.addEventListener("storage",t),()=>{window.removeEventListener("storage",t)}}),[e,n]),[t,r]}(`tabs.${j}`,k),A=(0,s.useMemo)((()=>j?void 0!==y[j]?y[j]:Number.parseInt(M):k),[y[j]]);(0,s.useEffect)((()=>{if(j){const e=Number.parseInt(M);A!==e&&w({...y,[j]:e})}}),[M]),(0,s.useEffect)((()=>{I(j?A:k)}),[j,A,k]);const[Z,I]=(0,s.useState)(j?A:k);return(0,h.jsxs)("div",{className:r,ref:n,children:[(0,h.jsx)("div",{className:g,children:b.length?(0,h.jsx)("div",{className:`${l} ${d}`,style:{display:"flex",justifyContent:"center"===f?"center":"flex-start"},children:b.map(((e,n)=>(0,h.jsx)("div",{className:`${o} ${Z===n?c:a}`,onClick:()=>{const e=n;x?.(e),I(e),j?(w({...y,[j]:e}),S(e)):C(e)},children:u(e)},n)))}):null}),(0,h.jsx)("div",{children:s.Children.toArray(v)[Z]})]})}));function x(e){let{children:n,...t}=e;return(0,h.jsx)("div",{...t,className:"rounded px-2",children:n})}var m=t(9873);function j(e){return(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256",...e,children:[(0,h.jsx)("path",{fill:"#C12127",d:"M0 256V0h256v256z"}),(0,h.jsx)("path",{fill:"#FFF",d:"M48 48h160v160h-32V80h-48v128H48z"})]})}function f(e){return(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 128 128",...e,children:(0,h.jsxs)("g",{fill:"#2c8ebb",children:[(0,h.jsx)("path",{d:"M99.24 80.71C94.9 80.76 91.1 83 87.89 85c-6 3.71-9 3.47-9 3.47l-.1-.17c-.41-.67 1.92-6.68-.69-13.84c-2.82-7.83-7.3-9.72-6.94-10.32c1.53-2.59 5.36-6.7 6.89-14.36c.91-4.64.67-12.28-1.39-16.28c-.38-.74-3.78 1.24-3.78 1.24s-3.18-7.09-4.07-7.66c-2.87-1.84-6 7.61-6 7.61a14 14 0 0 0-11.71 4.5a9.64 9.64 0 0 1-3.85 2.27c-.41.14-.91.12-2.15 3.47c-1.9 5.07 3.24 10.81 3.24 10.81s-6.13 4.33-8.4 9.72a24.78 24.78 0 0 0-1.75 11.68s-4.36 3.78-4.64 7.68a12.87 12.87 0 0 0 1.77 7.83a1.94 1.94 0 0 0 2.63.91s-2.9 3.38-.19 4.81c2.47 1.29 6.63 2 8.83-.19c1.6-1.6 1.92-5.17 2.51-6.63c.14-.34.62.57 1.08 1a10 10 0 0 0 1.36 1s-3.9 1.68-2.3 5.51c.53 1.27 2.42 2.08 5.51 2.06c1.15 0 13.76-.72 17.12-1.53a4.33 4.33 0 0 0 2.61-1.46a63 63 0 0 0 15.49-7c4.74-3.09 6.68-3.93 10.51-4.84c3.16-.75 2.95-5.65-1.24-5.58z"}),(0,h.jsx)("path",{d:"M64 2a62 62 0 1 0 62 62A62 62 0 0 0 64 2zm37.3 87.83c-3.35.81-4.91 1.44-9.41 4.36a67 67 0 0 1-15.56 7.18a8.71 8.71 0 0 1-3.64 1.77c-3.81.93-16.88 1.63-17.91 1.63h-.24c-4 0-6.27-1.24-7.49-2.54c-3.4 1.7-7.8 1-11-.69a5.55 5.55 0 0 1-3-3.9a6 6 0 0 1 0-2.06a6.66 6.66 0 0 1-.79-1A16.38 16.38 0 0 1 30 84.52c.29-3.73 2.87-7.06 4.55-8.83A28.56 28.56 0 0 1 36.61 64a26.82 26.82 0 0 1 6.82-9c-1.65-2.78-3.33-7.06-1.7-11.42c1.17-3.11 2.13-4.84 4.24-5.58a6.84 6.84 0 0 0 2.51-1.34A17.65 17.65 0 0 1 60.34 31c.19-.48.41-1 .65-1.46c1.6-3.4 3.3-5.31 5.29-6a4.88 4.88 0 0 1 4.4.5c.65.43 1.48 1 3.9 6a4.69 4.69 0 0 1 2.85-.1a3.81 3.81 0 0 1 2.39 1.94c2.47 4.74 2.8 13.19 1.72 18.62a33.8 33.8 0 0 1-5.84 13.31a25.73 25.73 0 0 1 5.77 9.43a25.42 25.42 0 0 1 1.41 10.41A28.7 28.7 0 0 0 86 81.91c3.06-1.89 7.68-4.74 13.19-4.81a6.62 6.62 0 0 1 7 5.7a6.35 6.35 0 0 1-4.89 7.03z"})]})})}function g(e){return(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 128 128",...e,children:[(0,h.jsx)("path",{fill:"#f8ab00",d:"M0 .004V40h39.996V.004Zm43.996 0V40h40V.004Zm44.008 0V40H128V.004Zm0 43.996v39.996H128V44Z"}),(0,h.jsx)("path",{fill:"#4c4c4c",d:"M43.996 44v39.996h40V44ZM0 87.996v40h39.996v-40Zm43.996 0v40h40v-40Zm44.008 0v40H128v-40Z"})]})}function v(e){return(0,h.jsxs)("svg",{id:"Bun",width:"1.2em",height:"1.2em",viewBox:"0 0 80 70",...e,children:[(0,h.jsx)("path",{id:"Shadow",d:"M71.09,20.74c-.16-.17-.33-.34-.5-.5s-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5A26.46,26.46,0,0,1,75.5,35.7c0,16.57-16.82,30.05-37.5,30.05-11.58,0-21.94-4.23-28.83-10.86l.5.5.5.5.5.5.5.5.5.5.5.5.5.5C19.55,65.3,30.14,69.75,42,69.75c20.68,0,37.5-13.48,37.5-30C79.5,32.69,76.46,26,71.09,20.74Z"}),(0,h.jsxs)("g",{id:"Body",children:[(0,h.jsx)("path",{id:"Background",d:"M73,35.7c0,15.21-15.67,27.54-35,27.54S3,50.91,3,35.7C3,26.27,9,17.94,18.22,13S33.18,3,38,3s8.94,4.13,19.78,10C67,17.94,73,26.27,73,35.7Z",style:{fill:"#fbf0df"}}),(0,h.jsx)("path",{id:"Bottom_Shadow","data-name":"Bottom Shadow",d:"M73,35.7a21.67,21.67,0,0,0-.8-5.78c-2.73,33.3-43.35,34.9-59.32,24.94A40,40,0,0,0,38,63.24C57.3,63.24,73,50.89,73,35.7Z",style:{fill:"#f6dece"}}),(0,h.jsx)("path",{id:"Light_Shine","data-name":"Light Shine",d:"M24.53,11.17C29,8.49,34.94,3.46,40.78,3.45A9.29,9.29,0,0,0,38,3c-2.42,0-5,1.25-8.25,3.13-1.13.66-2.3,1.39-3.54,2.15-2.33,1.44-5,3.07-8,4.7C8.69,18.13,3,26.62,3,35.7c0,.4,0,.8,0,1.19C9.06,15.48,20.07,13.85,24.53,11.17Z",style:{fill:"#fffefc"}}),(0,h.jsx)("path",{id:"Top",d:"M35.12,5.53A16.41,16.41,0,0,1,29.49,18c-.28.25-.06.73.3.59,3.37-1.31,7.92-5.23,6-13.14C35.71,5,35.12,5.12,35.12,5.53Zm2.27,0A16.24,16.24,0,0,1,39,19c-.12.35.31.65.55.36C41.74,16.56,43.65,11,37.93,5,37.64,4.74,37.19,5.14,37.39,5.49Zm2.76-.17A16.42,16.42,0,0,1,47,17.12a.33.33,0,0,0,.65.11c.92-3.49.4-9.44-7.17-12.53C40.08,4.54,39.82,5.08,40.15,5.32ZM21.69,15.76a16.94,16.94,0,0,0,10.47-9c.18-.36.75-.22.66.18-1.73,8-7.52,9.67-11.12,9.45C21.32,16.4,21.33,15.87,21.69,15.76Z",style:{fill:"#ccbea7",fillRule:"evenodd"}}),(0,h.jsx)("path",{id:"Outline",d:"M38,65.75C17.32,65.75.5,52.27.5,35.7c0-10,6.18-19.33,16.53-24.92,3-1.6,5.57-3.21,7.86-4.62,1.26-.78,2.45-1.51,3.6-2.19C32,1.89,35,.5,38,.5s5.62,1.2,8.9,3.14c1,.57,2,1.19,3.07,1.87,2.49,1.54,5.3,3.28,9,5.27C69.32,16.37,75.5,25.69,75.5,35.7,75.5,52.27,58.68,65.75,38,65.75ZM38,3c-2.42,0-5,1.25-8.25,3.13-1.13.66-2.3,1.39-3.54,2.15-2.33,1.44-5,3.07-8,4.7C8.69,18.13,3,26.62,3,35.7,3,50.89,18.7,63.25,38,63.25S73,50.89,73,35.7C73,26.62,67.31,18.13,57.78,13,54,11,51.05,9.12,48.66,7.64c-1.09-.67-2.09-1.29-3-1.84C42.63,4,40.42,3,38,3Z"})]}),(0,h.jsxs)("g",{id:"Mouth",children:[(0,h.jsx)("g",{id:"Background-2","data-name":"Background",children:(0,h.jsx)("path",{d:"M45.05,43a8.93,8.93,0,0,1-2.92,4.71,6.81,6.81,0,0,1-4,1.88A6.84,6.84,0,0,1,34,47.71,8.93,8.93,0,0,1,31.12,43a.72.72,0,0,1,.8-.81H44.26A.72.72,0,0,1,45.05,43Z",style:{fill:"#b71422"}})}),(0,h.jsxs)("g",{id:"Tongue",children:[(0,h.jsx)("path",{id:"Background-3","data-name":"Background",d:"M34,47.79a6.91,6.91,0,0,0,4.12,1.9,6.91,6.91,0,0,0,4.11-1.9,10.63,10.63,0,0,0,1-1.07,6.83,6.83,0,0,0-4.9-2.31,6.15,6.15,0,0,0-5,2.78C33.56,47.4,33.76,47.6,34,47.79Z",style:{fill:"#ff6164"}}),(0,h.jsx)("path",{id:"Outline-2","data-name":"Outline",d:"M34.16,47a5.36,5.36,0,0,1,4.19-2.08,6,6,0,0,1,4,1.69c.23-.25.45-.51.66-.77a7,7,0,0,0-4.71-1.93,6.36,6.36,0,0,0-4.89,2.36A9.53,9.53,0,0,0,34.16,47Z"})]}),(0,h.jsx)("path",{id:"Outline-3","data-name":"Outline",d:"M38.09,50.19a7.42,7.42,0,0,1-4.45-2,9.52,9.52,0,0,1-3.11-5.05,1.2,1.2,0,0,1,.26-1,1.41,1.41,0,0,1,1.13-.51H44.26a1.44,1.44,0,0,1,1.13.51,1.19,1.19,0,0,1,.25,1h0a9.52,9.52,0,0,1-3.11,5.05A7.42,7.42,0,0,1,38.09,50.19Zm-6.17-7.4c-.16,0-.2.07-.21.09a8.29,8.29,0,0,0,2.73,4.37A6.23,6.23,0,0,0,38.09,49a6.28,6.28,0,0,0,3.65-1.73,8.3,8.3,0,0,0,2.72-4.37.21.21,0,0,0-.2-.09Z"})]}),(0,h.jsxs)("g",{id:"Face",children:[(0,h.jsx)("ellipse",{id:"Right_Blush","data-name":"Right Blush",cx:"53.22",cy:"40.18",rx:"5.85",ry:"3.44",style:{fill:"#febbd0"}}),(0,h.jsx)("ellipse",{id:"Left_Bluch","data-name":"Left Bluch",cx:"22.95",cy:"40.18",rx:"5.85",ry:"3.44",style:{fill:"#febbd0"}}),(0,h.jsx)("path",{id:"Eyes",d:"M25.7,38.8a5.51,5.51,0,1,0-5.5-5.51A5.51,5.51,0,0,0,25.7,38.8Zm24.77,0A5.51,5.51,0,1,0,45,33.29,5.5,5.5,0,0,0,50.47,38.8Z",style:{fillRule:"evenodd"}}),(0,h.jsx)("path",{id:"Iris",d:"M24,33.64a2.07,2.07,0,1,0-2.06-2.07A2.07,2.07,0,0,0,24,33.64Zm24.77,0a2.07,2.07,0,1,0-2.06-2.07A2.07,2.07,0,0,0,48.75,33.64Z",style:{fill:"#fff",fillRule:"evenodd"}})]})]})}function b(e){if(!e?.includes("install"))return e;const n=e.split(" ").filter((e=>!e.startsWith("-")&&!e.startsWith("--"))).join(" ");return"yarn install"===n||"bun install"===n?e:e.replace("install","add")}function y(e,n){let t=e;return["npm","yarn","pnpm","bun"].forEach((e=>{const s=new RegExp(`\\b${e}\\b`,"g");t=t.replace(s,n)})),t}function w(e){let n,{command:t,skip:s=!0,additionalTabs:i=[]}=e;const r={npm:(0,h.jsx)(j,{}),yarn:(0,h.jsx)(f,{}),pnpm:(0,h.jsx)(g,{}),bun:(0,h.jsx)(v,{})};if(i.forEach((e=>{r[e.tool]=e.icon})),"string"==typeof t?(n={npm:`npm ${t}`,yarn:`yarn ${t}`,pnpm:`pnpm ${t}`,bun:`bun ${t}`},i.forEach((e=>{n[e.tool]=s?y(t,e.tool):`${e.tool} ${t}`}))):n=t,n.yarn&&(n.yarn=b(n.yarn)),n.bun&&(n.bun=b(n.bun)),s){["npm","yarn","pnpm","bun"].forEach((e=>{n[e]=y(t,e)}))}return(0,h.jsx)(p,{groupId:"package.manager",values:Object.entries(n).map((e=>{let[n]=e;return(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",fontSize:15},children:[r[n],(0,h.jsx)("span",{style:{marginLeft:6,marginBottom:2},children:n})]},n)})),children:Object.entries(n).map((e=>{let[n,t]=e;return(0,h.jsx)(x,{children:(0,h.jsx)(m.A,{className:"my-2",children:t})},n)}))})}}}]);