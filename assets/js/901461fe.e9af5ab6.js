"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[7723],{3456:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=i(6070),r=i(5296);const a={},o="Farm CLI",l={id:"cli/cli-api",title:"Farm CLI",description:"The Farm CLI allows you to start, build, preview, and watch your application.",source:"@site/docs/cli/cli-api.md",sourceDirName:"cli",slug:"/cli/cli-api",permalink:"/farm-fe.github.io/docs/cli/cli-api",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/cli/cli-api.md",tags:[],version:"current",frontMatter:{},sidebar:"configSidebar",previous:{title:"Shared Options",permalink:"/farm-fe.github.io/docs/config/shared"}},s={},c=[{value:"Start",id:"start",level:2},{value:"Build",id:"build",level:2},{value:"Preview",id:"preview",level:2},{value:"Watch",id:"watch",level:2},{value:"Clean",id:"clean",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"farm-cli",children:"Farm CLI"}),"\n",(0,t.jsx)(n.p,{children:"The Farm CLI allows you to start, build, preview, and watch your application."}),"\n",(0,t.jsx)(n.p,{children:"To get a list of cli available to Farm, run the following command inside your command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Terminal"',children:"npx farm -h\n"})}),"\n",(0,t.jsx)(n.p,{children:"The output look like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Terminal"',children:"farm/0.5.11\n\nUsage:\n  $ farm [root]\n\nCommands:\n  [root]            Compile the project in dev mode and serve it with farm dev server\n  build             compile the project in production mode\n  watch             watch file change\n  preview           compile the project in watch mode\n  clean [path]      Clean up the cache built incrementally\n  plugin [command]  Commands for manage plugins\n\nFor more info, run any command with the `--help` flag:\n  $ farm --help\n  $ farm build --help\n  $ farm watch --help\n  $ farm preview --help\n  $ farm clean --help\n  $ farm plugin --help\n\nOptions:\n  -l, --lazy           lazyCompilation\n  --host <host>        specify host\n  --port <port>        specify port\n  --open               open browser on server start\n  --hmr                enable hot module replacement\n  --cors               enable cors\n  --strictPort         specified port is already in use, exit with error\n  -c, --config <file>  use specified config file\n  -m, --mode <mode>    set env mode\n  --base <path>        public base path\n  --clearScreen        allow/disable clear screen when logging\n  -h, --help           Display this message\n  -v, --version        Display version number\n"})}),"\n",(0,t.jsx)(n.h2,{id:"start",children:"Start"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"farm start"})," The command is used to start the development server and compile the code in the development environment"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Terminal"',children:"Usage:\n  $ farm [root]\n\nOptions:\n  -l, --lazy           lazyCompilation\n  --host <host>        specify host\n  --port <port>        specify port\n  --open               open browser on server start\n  --hmr                enable hot module replacement\n  --cors               enable cors\n  --strictPort         specified port is already in use, exit with error\n  -c, --config <file>  use specified config file\n  -m, --mode <mode>    set env mode\n  --base <path>        public base path\n  --clearScreen        allow/disable clear screen when logging\n"})}),"\n",(0,t.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"farm build"})," The command builds the products that can be used in the production environment in the default ",(0,t.jsx)(n.code,{children:"dist"})," directory."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Terminal"',children:"Usage:\n  $ farm build\n\nOptions:\n  -o, --outDir <dir>    output directory\n  -i, --input <file>    input file path\n  -w, --watch           watch file change\n  --targetEnv <target>  transpile targetEnv node, browser\n  --format <format>     transpile format esm, commonjs\n  --sourcemap           output source maps for build\n  --treeShaking         Eliminate useless code without side effects\n  --minify              code compression at build time\n  -c, --config <file>   use specified config file\n  -m, --mode <mode>     set env mode\n  --base <path>         public base path\n  --clearScreen         allow/disable clear screen when logging\n  -h, --help            Display this message\n"})}),"\n",(0,t.jsx)(n.h2,{id:"preview",children:"Preview"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"farm preview"})," the command for locally previewing the products built in your production environment, you need to execute farm build in advance to build the products in the production environment."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Terminal"',children:"Usage:\n  $ farm preview\n\nOptions:\n  --open [url]          Whether to open the page in the browser at startup\n  --port <port>         Set the port number for Server snooping\n  --host <host>         Specify the host to listen to when Server starts\n  -c --config <config>  Specify the profile path\n  -h, --help            Show command help\n"})}),"\n",(0,t.jsx)(n.h2,{id:"watch",children:"Watch"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"farm watch"})," the command generally listen for file changes and rebuild in ",(0,t.jsx)(n.code,{children:"node"})," environment"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Terminal"',children:"\nUsage:\n  $ farm watch\n\nOptions:\n  --format <format>    transpile format esm, commonjs\n  -o, --outDir <dir>   output directory\n  -i, --input <file>   input file path\n  -c, --config <file>  use specified config file\n  -m, --mode <mode>    set env mode\n  --base <path>        public base path\n  --clearScreen        allow/disable clear screen when logging\n  -h, --help           Display this message\n"})}),"\n",(0,t.jsx)(n.h2,{id:"clean",children:"Clean"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"farm clean"})," Because the incremental build provided by ",(0,t.jsx)(n.code,{children:"farm"})," generates the cache file locally, you may need to clean up the cache file under certain circumstances (unpredictable compilation errors)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Terminal"',children:"Usage:\n  $ farm clean [path]\n\nOptions:\n  --recursive          Recursively search for node_modules directories and clean them\n  -c, --config <file>  use specified config file\n  -m, --mode <mode>    set env mode\n  --base <path>        public base path\n  --clearScreen        allow/disable clear screen when logging\n  -h, --help           Display this message\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5296:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(758);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);