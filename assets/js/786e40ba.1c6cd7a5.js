"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[1334],{127:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>v,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var r=i(6070),o=i(5296);const t={},s="Environment variable",c={id:"config/environment-variable",title:"Environment variable",description:"Farm distinguishes between development and production environments through Farm process.env.NODE\\_ ENV`.",source:"@site/versioned_docs/version-0.x/config/environment-variable.md",sourceDirName:"config",slug:"/config/environment-variable",permalink:"/farm-fe.github.io/docs/0.x/config/environment-variable",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/config/environment-variable.md",tags:[],version:"0.x",frontMatter:{},sidebar:"configSidebar",previous:{title:"Dev Server",permalink:"/farm-fe.github.io/docs/0.x/config/dev-server"},next:{title:"Plugins Options",permalink:"/farm-fe.github.io/docs/0.x/config/plugins-options"}},d={},a=[{value:"<code>.env</code> file",id:"env-file",level:3},{value:"envPrefix",id:"envprefix",level:3}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"environment-variable",children:"Environment variable"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Farm"})," distinguishes between development and production environments through ",(0,r.jsx)(n.code,{children:"Farm"})," process.env.NODE_ ENV`."]}),"\n",(0,r.jsx)(n.p,{children:"In different environments, environment variables are replaced statically, so use static constants to represent environment variables instead of dynamic expressions."}),"\n",(0,r.jsxs)(n.h3,{id:"env-file",children:[(0,r.jsx)(n.code,{children:".env"})," file"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Farm"})," uses ",(0,r.jsx)(n.code,{children:"dotenv"})," to load your additional environment variables, such as ",(0,r.jsx)(n.code,{children:".env"})," files."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// .env\nFARM_APP_SECRET=secret\nFarm_APP_PASSWORD=password\nAPP_VERSION=1.0.0\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Farm"})," loads the file ",(0,r.jsx)(n.code,{children:".env"})," via dotenv, and loads it into ",(0,r.jsx)(n.code,{children:"process.env"})," and finally injects it into define."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["In order to ensure the security of the client, preventing the environment variables in the current system from being exposed to the client ",(0,r.jsx)(n.code,{children:"Farm"})," will only identify some important environment variables that start with ",(0,r.jsx)(n.code,{children:"FARM_"}),"\u3001",(0,r.jsx)(n.code,{children:"VITE_"})," (In order to better compatible with vite and its ecological environment)."]})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Farm"})," expands environment variables through dotenv-expand"]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to customize the prefix of env variables, you can configure ",(0,r.jsx)(n.code,{children:"envPrefix"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"envprefix",children:"envPrefix"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"default value"}),": ",(0,r.jsx)(n.code,{children:"FARM_"}),"\u3001",(0,r.jsx)(n.code,{children:"VITE_"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Customize the prefix of the ",(0,r.jsx)(n.code,{children:"env"})," variable by configuring ",(0,r.jsx)(n.code,{children:"envPrefix"}),"."]})]})}function v(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},5296:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var r=i(758);const o={},t=r.createContext(o);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);