"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[6787],{8593:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>u,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var s=i(6070),l=i(5296);const t={},u="Community Plugins",r={id:"plugins/community-plugins",title:"Community Plugins",description:"Vite/Rollup Plugins",source:"@site/docs/plugins/community-plugins.md",sourceDirName:"plugins",slug:"/plugins/community-plugins",permalink:"/docs/plugins/community-plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/community-plugins.md",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/js-plugin-dts",permalink:"/docs/plugins/official-plugins/js-dts"},next:{title:"Overview",permalink:"/docs/plugins/writing-plugins/overview"}},o={},c=[{value:"Vite/Rollup Plugins",id:"viterollup-plugins",level:2},{value:"unplugin",id:"unplugin",level:2}];function p(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"community-plugins",children:"Community Plugins"}),"\n",(0,s.jsx)(e.h2,{id:"viterollup-plugins",children:"Vite/Rollup Plugins"}),"\n",(0,s.jsxs)(e.p,{children:["Farm support ",(0,s.jsx)(e.code,{children:"Vite/Rollup"})," plugins out of box. So ",(0,s.jsx)(e.code,{children:"Vite/Rollup"})," or ",(0,s.jsx)(e.code,{children:"unplugin"})," plugins can be used in Farm directly."]}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["Farm recommends to write Farm Plugins instead of ",(0,s.jsx)(e.code,{children:"Vite/Rollup"})," plugins for Farm. Because Farm Plugins have the best compatibility and performance. Still, PR welcome if you developed a Farm compatible plugin and you want to list it here."]})}),"\n",(0,s.jsxs)(e.p,{children:["using ",(0,s.jsx)(e.code,{children:"vitePlugins"})," in ",(0,s.jsx)(e.code,{children:"farm.config.ts"})," to configure ",(0,s.jsx)(e.code,{children:"Vite/Rollup"})," plugins."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:'import { UserConfig } from "@farmfe/core";\nimport vue from "@vitejs/plugin-vue";\nimport vueJsx from "@vitejs/plugin-vue-jsx";\n\nconst config: UserConfig = {\n  vitePlugins: [vue(), vueJsx()],\n};\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"https://github.com/vitejs/vite-plugin-vue/blob/main/packages/plugin-vue/README.md",children:(0,s.jsx)(e.code,{children:"@vitejs/plugin-vue"})})}),": Vue support."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx",children:(0,s.jsx)(e.code,{children:"@vitejs/plugin-vue-jsx"})})}),": Vue Jsx/Tsx support."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"https://www.npmjs.com/package/vite-plugin-solid",children:(0,s.jsx)(e.code,{children:"vite-plugin-solid"})})}),": Solid support for Farm."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"https://www.npmjs.com/package/vite-plugin-solid",children:(0,s.jsx)(e.code,{children:"vite-plugin-mock"})})}),": Mock data in both dev and prod."]}),"\n",(0,s.jsx)(e.li,{children:"..."}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"unplugin",children:"unplugin"}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.p,{children:["Currently you can use ",(0,s.jsx)(e.code,{children:"unplugin/farm"}),", ",(0,s.jsx)(e.code,{children:"unplugin/vite"})," and ",(0,s.jsx)(e.code,{children:"unplugin/rollup"})," in Farm. If you are using ",(0,s.jsx)(e.code,{children:"unplugin/vite"})," or ",(0,s.jsx)(e.code,{children:"unplugin/rollup"}),", some attributes may not have been fully adapted, or the Farm team believes that the api does not have the adaptation conditions, you can provide ",(0,s.jsx)(e.a,{href:"https://github.com/farm-fe/farm/issues/new/choose",children:"issues"}),"."]})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:'import Icons from "unplugin-icons/vite";\nimport IconsResolver from "unplugin-icons/resolver";\nimport Components from "unplugin-vue-components/rollup";\nimport { NaiveUiResolver } from "unplugin-vue-components/resolvers";\nimport { FileSystemIconLoader } from "unplugin-icons/loaders";\n\nconst config: UserConfig = {\n  vitePlugins: [\n    Icons({\n      compiler: "vue3",\n      customCollections: {\n        [collectionName]: FileSystemIconLoader(localIconPath, (svg) =>\n          svg.replace(/^<svg\\s/, \'<svg width="1em" height="1em" \')\n        ),\n      },\n      scale: 1,\n      defaultClass: "inline-block",\n    }),\n    Components({\n      dts: "src/typings/components.d.ts",\n      types: [{ from: "vue-router", names: ["RouterLink", "RouterView"] }],\n      resolvers: [\n        NaiveUiResolver(),\n        IconsResolver({\n          customCollections: [collectionName],\n          componentPrefix: VITE_ICON_PREFIX,\n        }),\n      ],\n    }),\n  ],\n};\n'})}),"\n",(0,s.jsx)(e.p,{children:"All unplugin are supported in Farm:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/antfu/unplugin-auto-import",children:"unplugin-auto-import"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/antfu/unplugin-vue2-script-setup",children:"unplugin-vue2-script-setup"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/antfu/unplugin-icons",children:"unplugin-icons"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/antfu/unplugin-vue-components",children:"unplugin-vue-components"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/zenotsai/unplugin-upload-cdn",children:"unplugin-upload-cdn"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/jwr12135/unplugin-web-ext",children:"unplugin-web-ext"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/pd4d10/unplugin-properties",children:"unplugin-properties"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/1247748612/unplugin-moment-to-dayjs",children:"unplugin-moment-to-dayjs"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/m0ksem/unplugin-object-3d",children:"unplugin-object-3d"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/ssssota/unplugin-parcel-css",children:"unplugin-parcel-css"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/sxzz/unplugin-vue",children:"unplugin-vue"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/sxzz/unplugin-vue-macros",children:"unplugin-vue-macros"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/sxzz/unplugin-vue-macros/tree/main/packages/define-options",children:"unplugin-vue-define-options"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/sxzz/unplugin-jsx-string",children:"unplugin-jsx-string"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/sxzz/unplugin-ast",children:"unplugin-ast"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/element-plus/unplugin-element-plus",children:"unplugin-element-plus"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/sxzz/unplugin-glob",children:"unplugin-glob"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/kricsleo/unplugin-sentry",children:"unplugin-sentry"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/ErKeLost/unplugin-imagemin",children:"unplugin-imagemin"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/ssssota/typedotenv",children:"unplugin-typedotenv"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/cssninjaStudio/unplugin-fonts",children:"unplugin-fonts"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/getsentry/sentry-javascript-bundler-plugins",children:"sentry-javascript-bundler-plugins"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/Jevon617/unplugin-svg-component",children:"unplugin-svg-component"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/baiwusanyu-c/unplugin-vue-cssvars",children:"unplugin-vue-cssvars"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},5296:(n,e,i)=>{i.d(e,{R:()=>u,x:()=>r});var s=i(758);const l={},t=s.createContext(l);function u(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:u(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);