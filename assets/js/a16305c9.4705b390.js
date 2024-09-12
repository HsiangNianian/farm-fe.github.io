"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[1413],{5569:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>t,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var s=i(6070),r=i(5296);const l={},t="Using Plugins",o={id:"using-plugins",title:"Using Plugins",description:"There are 4 kinds of plugins supported in Farm:",source:"@site/versioned_docs/version-0.x/using-plugins.md",sourceDirName:".",slug:"/using-plugins",permalink:"/farm-fe.github.io/docs/0.x/using-plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/using-plugins.md",tags:[],version:"0.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/farm-fe.github.io/docs/0.x/quick-start"},next:{title:"Benchmarks",permalink:"/farm-fe.github.io/docs/0.x/benchmark"}},u={},a=[{value:"Farm Compilation Plugins",id:"farm-compilation-plugins",level:2},{value:"Using Rust Plugins",id:"using-rust-plugins",level:3},{value:"Using Js Plugins",id:"using-js-plugins",level:3},{value:"Using Vite/Rollup/Unplugin Plugins In Farm",id:"using-viterollupunplugin-plugins-in-farm",level:2},{value:"Farm Runtime Plugin",id:"farm-runtime-plugin",level:2},{value:"Using SWC Plugins",id:"using-swc-plugins",level:2}];function c(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"using-plugins",children:"Using Plugins"}),"\n",(0,s.jsx)(e.p,{children:"There are 4 kinds of plugins supported in Farm:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"Farm Compilation Plugins"})}),": Both Rust plugins and Js Plugins, which adopt a rollup-style hooks."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"Vite/Rollup/Unplugin Plugin"})}),": Vite/Rollup/Unplugin plugins are supported in Farm out of Box"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"Farm Runtime Plugin"})}),": Adding abilities for Farm's runtime system."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"Swc Plugins"})}),": Swc plugins are supported in Farm out of Box."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Farm adopt Vite/Rollup ecosystem, Vite/Rollup Plugins can be used directly in Farm."}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["For how to write your own plugins, refer to ",(0,s.jsx)(e.a,{href:"/docs/plugins/writing-plugins/overview",children:"Plugins"})]})}),"\n",(0,s.jsx)(e.h2,{id:"farm-compilation-plugins",children:"Farm Compilation Plugins"}),"\n",(0,s.jsx)(e.p,{children:"First, install the plugins your need, for example:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"pnpm add -D @farmfe/plugin-sass @farmfe/js-plugin-postcss\n"})}),"\n",(0,s.jsxs)(e.p,{children:["Using ",(0,s.jsx)(e.code,{children:"plugins"})," to configure Farm compilation plugins:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:'import farmPostcssPlugin from "@farmfe/js-plugin-postcss";\n\nexport default defineConfig({\n  // ...\n  plugins: [\n    // Rust plugin, configure its package name\n    "@farmfe/plugin-sass",\n    // Js plugin, configure the plugin object\n    farmPostcssPlugin()\n  ],\n});\n'})}),"\n",(0,s.jsx)(e.p,{children:"There are 2 kinds of Farm compilation plugins:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"Rust Plugins"})}),": which is written in Rust and has best performance."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"Js Plugins"})}),": which is written in JS/TS, and it's used for compatibility with current JS ecosystem"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"using-rust-plugins",children:"Using Rust Plugins"}),"\n",(0,s.jsxs)(e.p,{children:["Using ",(0,s.jsx)(e.code,{children:"package name"})," to configure a Rust Plugin, for example:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:'export default defineConfig({\n  // ...\n  plugins: [\n    // Rust plugin, configure its package name\n    "@farmfe/plugin-sass",\n  ],\n});\n'})}),"\n",(0,s.jsxs)(e.p,{children:["For above example, Farm will resolve package ",(0,s.jsx)(e.code,{children:"@farmfe/plugin-sass"})," and treat it as a Farm Rust Plugin."]}),"\n",(0,s.jsxs)(e.p,{children:["If you want to configure options for rust plugins, you can use ",(0,s.jsx)(e.code,{children:"array syntax"})," like ",(0,s.jsx)(e.code,{children:"[packageName, optionsObject]"}),", for example:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"export default defineConfig({\n  // ...\n  plugins: [\n    // using array syntax to configure a rust plugin\n    [\n      // rust plugin's name\n      \"@farmfe/plugin-sass\",\n      // rust plugin's options\n      {\n        additionalData: '@use \"@/global-variables.scss\";'\n      }\n    ],\n  ],\n});\n"})}),"\n",(0,s.jsx)(e.p,{children:"Currently Farm supports 2 rust plugins officially:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"@farmfe/plugin-react"})}),": Farm rust plugin for react jsx compilation and react-refresh injection."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"@farmfe/plugin-sass"})}),": Farm rust plugin for scss files compilation, uses ",(0,s.jsx)(e.code,{children:"sass-embedded"})," internally."]}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["To learn more about rust plugins, see ",(0,s.jsx)(e.a,{href:"/docs/plugins/official-plugins/overview",children:"Rust Plugins"})]})}),"\n",(0,s.jsx)(e.h3,{id:"using-js-plugins",children:"Using Js Plugins"}),"\n",(0,s.jsx)(e.p,{children:"Farm JS plugin is a JS object with methods as hooks, for example:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:'import farmPostcssPlugin from "@farmfe/js-plugin-postcss";\n\nexport default defineConfig({\n  plugins: [\n    // Js plugin, configure the plugin object\n    farmPostcssPlugin({\n      // ... configure postcss options\n    })\n  ],\n});\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"farmPostcssPlugin()"})," returns a plugin object, and you can pass any postcss options by its arguments."]}),"\n",(0,s.jsxs)(e.p,{children:["You can use ",(0,s.jsx)(e.code,{children:"priority"})," to control the order of your plugins, for example:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts" {10,11}',children:'import farmPostcssPlugin from "@farmfe/js-plugin-postcss";\n\nexport default defineConfig({\n  plugins: [\n    // Js plugin, configure the plugin object\n    {\n      ...farmPostcssPlugin({\n        // ... configure postcss options\n      }),\n      // larger priority will be executed first, priority of internal plugin are 100.\n      priority: 1000,\n    }\n  ],\n});\n'})}),"\n",(0,s.jsx)(e.p,{children:"priority of internal plugin are 100, if you want the plugin execute first, set it larger than 100, otherwise set it smaller than 100."}),"\n",(0,s.jsx)(e.p,{children:"If you want to add a Farm JS plugin quickly, you can just configure a plugin object:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import readFileSync from 'fs';\n\nexport default defineConfig({\n  plugins: [\n    // configure a custom plugin\n    {\n      // plugin name, required\n      name: 'my-first-farm-plugin',\n      // this priority of this plugin, bigger value will be executed first, default to 100. \n      priority: 1000,\n      // define a load hook to determine how to load a more\n      load: {\n        // to improve performance, modules will be skipped if they don't match the filters.\n        filters: {\n          // only be executed for .png files.\n          resolvedPaths: ['\\\\.txt$']\n        },\n        // executor callback for this hook\n        executor: (params, context) => {\n          const { resolvedPath } = params;\n          const content = readFileSync(resolvedPath, 'utf-8');\n\n          return {\n            content: `export default '${content}'`,\n            moduleType: 'js'\n          }\n        }\n      }\n    }\n  ],\n});\n"})}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"filters"})," is required in Farm for js plugins. Because Js Plugin is really slow and we should avoid executing it as much as possible. For those modules that don't match the filters, Farm won't trigger js plugin hook for them at all! Which means Farm can handle them only on Rust side safely and concurrently."]})}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["To learn more about Farm Js Plugins, refer to ",(0,s.jsx)(e.a,{href:"/docs/plugins/official-plugins/overview",children:"JS Plugin"})]})}),"\n",(0,s.jsx)(e.h2,{id:"using-viterollupunplugin-plugins-in-farm",children:"Using Vite/Rollup/Unplugin Plugins In Farm"}),"\n",(0,s.jsx)(e.p,{children:"Farm supports Vite plugins out of Box. First you need to install vite plugins\uff0cfor example:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"pnpm add @vitejs/plugin-vue @vitejs/plugin-vue-jsx vite -D\n"})}),"\n",(0,s.jsxs)(e.p,{children:["Then you can use vite plugins directly by ",(0,s.jsx)(e.code,{children:"vitePlugins"})," in ",(0,s.jsx)(e.code,{children:"farm.config.ts"}),"."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import vue from '@vitejs/plugin-vue',\nimport vueJsx from '@vitejs/plugin-vue-jsx';\n\nexport default defineConfig({\n  // configuring vite plugins\n  vitePlugins: [\n    vue(),\n    vueJsx()\n  ]\n});\n"})}),"\n",(0,s.jsxs)(e.p,{children:["To improve performance of vite plugins, you can use ",(0,s.jsx)(e.code,{children:"function syntax"})," that returns a ",(0,s.jsx)(e.code,{children:"filters"}),", for example:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import vue from '@vitejs/plugin-vue',\n\n// Using function syntax of Vite plugin\nfunction configureVitePluginVue() {\n  // return plugin and its filters\n  return {\n    // using plugin vue\n    vitePlugin: vue(),\n    // configuring filters for it. Unmatched module paths will be skipped.\n    filters: ['\\\\.vue$', '\\\\\\\\0.+']\n  };\n}\n\nexport default defineConfig({\n  // configuring vite plugins\n  vitePlugins: [\n    configureVitePluginVue()\n  ]\n});\n"})}),"\n",(0,s.jsx)(e.p,{children:"Using unplugin\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"pnpm add unplugin-auto-import unplugin-vue-components -D\n"})}),"\n",(0,s.jsxs)(e.p,{children:["configuring unplugin in ",(0,s.jsx)(e.code,{children:"vitePlugins"})," via ",(0,s.jsx)(e.code,{children:"unplugin/vite"})," or ",(0,s.jsx)(e.code,{children:"unplugin/rollup"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import vue from '@vitejs/plugin-vue',\nimport AutoImport from 'unplugin-auto-import/vite'\nimport Components from 'unplugin-vue-components/vite'\nimport { ElementPlusResolver } from 'unplugin-vue-components/resolvers'\n\nexport default defineConfig({\n  vitePlugins: [\n    vue(),\n    // ...\n    AutoImport({\n      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],\n    }),\n    Components({\n      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],\n    }),\n  ]\n});\n"})}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.p,{children:["Currently you can use ",(0,s.jsx)(e.code,{children:"unplugin/vite"})," or ",(0,s.jsx)(e.code,{children:"unplugin/rollup"}),". ",(0,s.jsx)(e.code,{children:"unplugin/farm"})," will be available as soon as ",(0,s.jsx)(e.a,{href:"https://github.com/unjs/unplugin/pull/341",children:"this unplugin PR"})," merged."]})}),"\n",(0,s.jsx)(e.h2,{id:"farm-runtime-plugin",children:"Farm Runtime Plugin"}),"\n",(0,s.jsxs)(e.p,{children:["Farm has a runtime module system to control how to load and execute modules. Configuring ",(0,s.jsx)(e.code,{children:"compilation.runtime.plugins"})," to add more runtime plugin, for example:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"export default defineConfig({\n  compilation: {\n    // configure Farm runtime module system\n    runtime: {\n      plugins: [\n        // a runtime plugin package\n        require.resolve('farm-plugin-runtime-mock'),\n        // a local runtime plugin\n        path.join(process.cwd(), \"build/runtime-plugin.ts\")\n      ]\n    }\n  }\n});\n"})}),"\n",(0,s.jsx)(e.p,{children:"you have to configure a path that point to your runtime plugin's entry. Recommend to a absolute path to avoid path issue."}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["To learn more about runtime plugin refer to ",(0,s.jsx)(e.a,{href:"/docs/plugins/runtime-plugin",children:"Runtime Plugin"})]})}),"\n",(0,s.jsx)(e.h2,{id:"using-swc-plugins",children:"Using SWC Plugins"}),"\n",(0,s.jsxs)(e.p,{children:["Swc Plugin can also be used directly in Farm, Configuring ",(0,s.jsx)(e.code,{children:"compilation.script.plugins"})," to add SWC plugins, for example:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import jsPluginVue from '@farmfe/js-plugin-vue';\n\n/**\n  * @type {import('@farmfe/core').UserConfig}\n  */\nexport default {\n   compilation: {\n     script: {\n       plugins: [{\n        // the package name of the swc plugin \n         name: 'swc-plugin-vue-jsx',\n         // options of this swc plugin\n         options: {\n           \"transformOn\": true,\n           \"optimize\": true\n         },\n         // plugin execute when the filters are matched.\n         filters: {\n           // resolvedPaths: [\".+\"]\n           moduleTypes: ['tsx', 'jsx'],\n         }\n       }]\n     }\n   },\n   plugins: [jsPluginVue()],\n};\n"})}),"\n",(0,s.jsx)(e.p,{children:"Each plugin item of the array contains three fields:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"name"}),": the package name of the swc plugin"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"options"}),": Configuration items passed to swc plugin"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"filters"}),": Which modules to execute the plug-in, must be configured, support ",(0,s.jsx)(e.code,{children:"resolvedPaths"})," and ",(0,s.jsx)(e.code,{children:"moduleTypes"})," these two filter items, if both are specified at the same time, take the union."]}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsx)(e.p,{children:"SWC plugin may not be compatible with the SWC version that Farm uses. If a error occurred, try upgrade the plugin."})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},5296:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>o});var s=i(758);const r={},l=s.createContext(r);function t(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);