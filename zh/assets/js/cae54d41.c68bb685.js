"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[5188],{3805:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var i=r(6070),a=r(5296);const t={},s="Farm CLI",c={id:"cli/cli-api",title:"Farm CLI",description:"Farm Cli \u5141\u8bb8\u60a8\u542f\u52a8\u3001\u6784\u5efa\u3001\u9884\u89c8\u548c\u76d1\u542c\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.x/cli/cli-api.md",sourceDirName:"cli",slug:"/cli/cli-api",permalink:"/farm-fe.github.io/zh/docs/0.x/cli/cli-api",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/cli/cli-api.md",tags:[],version:"0.x",frontMatter:{},sidebar:"configSidebar",previous:{title:"Rust Api",permalink:"/farm-fe.github.io/zh/docs/0.x/api/rust-api"}},l={},o=[{value:"Start",id:"start",level:2},{value:"Build",id:"build",level:2},{value:"Preview",id:"preview",level:2},{value:"Watch",id:"watch",level:2},{value:"Clean",id:"clean",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"farm-cli",children:"Farm CLI"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Farm Cli"})," \u5141\u8bb8\u60a8\u542f\u52a8\u3001\u6784\u5efa\u3001\u9884\u89c8\u548c\u76d1\u542c\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u9700\u8981\u67e5\u770b ",(0,i.jsx)(e.code,{children:"Farm Cli"})," \u7684\u53ef\u7528\u547d\u4ee4, \u60a8\u53ef\u4ee5\u5728\u7ec8\u7aef\u4e2d\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",metastring:'title="Terminal"',children:"npx farm -h\n"})}),"\n",(0,i.jsx)(e.p,{children:"The output look like this:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",metastring:'title="Terminal"',children:"farm/0.5.11\n\nUsage:\n  $ farm [root]\n\nCommands:\n  [root]\n  start             \u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668\n  build             \u5728\u751f\u4ea7\u73af\u5883\u4e0b\u6784\u5efa\u9879\u76ee\n  watch             \u76d1\u542c\u6587\u4ef6\u53d8\u5316\u5e76\u4e14\u91cd\u65b0\u6784\u5efa\n  preview           \u5728\u672c\u5730\u53ef\u4ee5\u76f4\u63a5\u9884\u89c8\u60a8\u7684\u751f\u4ea7\u73af\u5883\u6784\u5efa\u51fa\u7684\u4ea7\u7269\n  clean [path]      \u6e05\u7406`farm`\u589e\u91cf\u6784\u5efa\u7684\u7f13\u5b58\u6587\u4ef6\n  plugin [command]  \u7ba1\u7406\u63d2\u4ef6\u7684\u547d\u4ee4\n\nFor more info, run any command with the `--help` flag:\n  $ farm --help\n  $ farm build --help\n  $ farm watch --help\n  $ farm preview --help\n  $ farm clean --help\n  $ farm plugin --help\n\nOptions:\n  -l, --lazy           \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm \u4f1a\u5728\u5f00\u53d1\u4e2d\u5ef6\u8fdf\u7f16\u8bd1\u52a8\u6001\u5bfc\u5165\u7684\u6a21\u5757\uff0c\u53ea\u6709\u5728\u6a21\u5757\u771f\u6b63\u6267\u884c\u65f6\u624d\u4f1a\u7f16\u8bd1\u5b83\u4eec\u3002\u61d2\u60f0\u7f16\u8bd1\u786e\u5b9e\u53ef\u4ee5\u52a0\u5feb\u5927\u578b\u9879\u76ee\u7684\u7f16\u8bd1\u901f\u5ea6\u3002\n  --host <host>        host\uff08\u4e3b\u673a\uff09\u9009\u9879\u3002\u5b83\u5141\u8bb8\u4f60\u6307\u5b9a\u670d\u52a1\u5668\u7684\u4e3b\u673a\u5730\u5740\u3002\u4f60\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a\u7279\u5b9a\u7684IP\u5730\u5740\u6216\u57df\u540d\u3002\n  --port <port>        \u7aef\u53e3\uff09\u9009\u9879\u3002\u5b83\u5141\u8bb8\u4f60\u6307\u5b9a\u670d\u52a1\u5668\u7684\u7aef\u53e3\u53f7\u3002\u4f60\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a\u4efb\u4f55\u672a\u88ab\u5360\u7528\u7684\u7aef\u53e3\u53f7\u3002\n  --open               \u6253\u5f00\uff09\u9009\u9879\u3002\u5b83\u5728\u670d\u52a1\u5668\u542f\u52a8\u65f6\u81ea\u52a8\u6253\u5f00\u6d4f\u89c8\u5668\u3002\u8fd9\u5bf9\u4e8e\u5feb\u901f\u9884\u89c8\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u6216\u7f51\u7ad9\u975e\u5e38\u65b9\u4fbf\u3002\n  --hmr                \u70ed\u6a21\u5757\u66ff\u6362\uff09\u9009\u9879\u3002\u5b83\u542f\u7528\u70ed\u6a21\u5757\u66ff\u6362\u529f\u80fd\uff0c\u5141\u8bb8\u5728\u8fd0\u884c\u65f6\u66ff\u6362\u6a21\u5757\uff0c\u800c\u65e0\u9700\u5237\u65b0\u6574\u4e2a\u9875\u9762\u3002\u8fd9\u5bf9\u4e8e\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7684\u5b9e\u65f6\u66f4\u65b0\u975e\u5e38\u6709\u7528\u3002\n  --cors               \uff08\u8de8\u57df\u8d44\u6e90\u5171\u4eab\uff09\u9009\u9879\u3002\u5b83\u542f\u7528\u8de8\u57df\u8d44\u6e90\u5171\u4eab\uff0c\u5141\u8bb8\u4ece\u4e0d\u540c\u57df\u7684\u670d\u52a1\u5668\u8bf7\u6c42\u8d44\u6e90\u3002\u8fd9\u5bf9\u4e8e\u5f00\u53d1\u6d89\u53ca\u8de8\u57df\u8bf7\u6c42\u7684\u5e94\u7528\u7a0b\u5e8f\u975e\u5e38\u6709\u7528\u3002\n  --strictPort        \uff08\u4e25\u683c\u7aef\u53e3\uff09\u9009\u9879\u3002\u5982\u679c\u6307\u5b9a\u7684\u7aef\u53e3\u5df2\u7ecf\u88ab\u5360\u7528\uff0c\u5b83\u4f1a\u5bfc\u81f4\u670d\u52a1\u5668\u9000\u51fa\u5e76\u663e\u793a\u9519\u8bef\u6d88\u606f\u3002\n  -c, --config <file>  \uff08\u914d\u7f6e\u6587\u4ef6\uff09\u9009\u9879\u3002\u5b83\u5141\u8bb8\u4f60\u6307\u5b9a\u4e00\u4e2a\u7279\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6\u6765\u914d\u7f6e\u4f60\u7684\u9879\u76ee\u3002\u4f60\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a\u6587\u4ef6\u7684\u8def\u5f84\u3002\n  -m, --mode <mode>    \uff08\u73af\u5883\u6a21\u5f0f\uff09\u9009\u9879\u3002\u5b83\u5141\u8bb8\u4f60\u8bbe\u7f6e\u9879\u76ee\u7684\u73af\u5883\u53d8\u91cf\u3002\u73af\u5883\u6a21\u5f0f\u53ef\u4ee5\u662f\u5f00\u53d1\u6a21\u5f0f\u3001\u751f\u4ea7\u6a21\u5f0f\u6216\u5176\u4ed6\u81ea\u5b9a\u4e49\u6a21\u5f0f\u3002\n  --base <path>        \uff08\u57fa\u7840\u8def\u5f84\uff09\u9009\u9879\u3002\u5b83\u5141\u8bb8\u4f60\u6307\u5b9a\u516c\u5171\u57fa\u7840\u8def\u5f84\uff0c\u7528\u4e8e\u89e3\u6790\u9759\u6001\u8d44\u6e90\u7684\u76f8\u5bf9\u8def\u5f84\u3002\n  --clearScreen       \uff08\u6e05\u9664\u5c4f\u5e55\uff09\u9009\u9879\u3002\u5b83\u5141\u8bb8\u4f60\u5728\u8bb0\u5f55\u65e5\u5fd7\u65f6\u542f\u7528\u6216\u7981\u7528\u6e05\u9664\u5c4f\u5e55\u7684\u529f\u80fd\u3002\u8fd9\u5bf9\u4e8e\u5728\u7ec8\u7aef\u4e2d\u4fdd\u6301\u65e5\u5fd7\u6e05\u6670\u53ef\u89c1\u975e\u5e38\u6709\u7528\u3002\n  -h, --help           \u663e\u793a\u547d\u4ee4\u5e2e\u52a9\u4fe1\u606f\n  -v, --version        \u67e5\u770b\u5f53\u524d\u7248\u672c\n"})}),"\n",(0,i.jsx)(e.h2,{id:"start",children:"Start"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"farm start"})," \u547d\u4ee4\u7528\u4e8e\u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668, \u5c06\u4ee3\u7801\u8fdb\u884c\u5f00\u53d1\u73af\u5883\u7684\u7f16\u8bd1"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",metastring:'title="Terminal"',children:"Usage:\n  $ farm [root]\n\nOptions:\n  -l, --lazy           \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm \u4f1a\u5728\u5f00\u53d1\u4e2d\u5ef6\u8fdf\u7f16\u8bd1\u52a8\u6001\u5bfc\u5165\u7684\u6a21\u5757\uff0c\u53ea\u6709\u5728\u6a21\u5757\u771f\u6b63\u6267\u884c\u65f6\u624d\u4f1a\u7f16\u8bd1\u5b83\u4eec\u3002\u61d2\u60f0\u7f16\u8bd1\u786e\u5b9e\u53ef\u4ee5\u52a0\u5feb\u5927\u578b\u9879\u76ee\u7684\u7f16\u8bd1\u901f\u5ea6\u3002\n  --host <host>        host\uff08\u4e3b\u673a\uff09\u9009\u9879\u3002\u5b83\u5141\u8bb8\u4f60\u6307\u5b9a\u670d\u52a1\u5668\u7684\u4e3b\u673a\u5730\u5740\u3002\u4f60\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a\u7279\u5b9a\u7684IP\u5730\u5740\u6216\u57df\u540d\u3002\n  --port <port>        \u7aef\u53e3\uff09\u9009\u9879\u3002\u5b83\u5141\u8bb8\u4f60\u6307\u5b9a\u670d\u52a1\u5668\u7684\u7aef\u53e3\u53f7\u3002\u4f60\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a\u4efb\u4f55\u672a\u88ab\u5360\u7528\u7684\u7aef\u53e3\u53f7\u3002\n  --open               \u6253\u5f00\uff09\u9009\u9879\u3002\u5b83\u5728\u670d\u52a1\u5668\u542f\u52a8\u65f6\u81ea\u52a8\u6253\u5f00\u6d4f\u89c8\u5668\u3002\u8fd9\u5bf9\u4e8e\u5feb\u901f\u9884\u89c8\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u6216\u7f51\u7ad9\u975e\u5e38\u65b9\u4fbf\u3002\n  --hmr                \u70ed\u6a21\u5757\u66ff\u6362\uff09\u9009\u9879\u3002\u5b83\u542f\u7528\u70ed\u6a21\u5757\u66ff\u6362\u529f\u80fd\uff0c\u5141\u8bb8\u5728\u8fd0\u884c\u65f6\u66ff\u6362\u6a21\u5757\uff0c\u800c\u65e0\u9700\u5237\u65b0\u6574\u4e2a\u9875\u9762\u3002\u8fd9\u5bf9\u4e8e\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7684\u5b9e\u65f6\u66f4\u65b0\u975e\u5e38\u6709\u7528\u3002\n  --cors               \uff08\u8de8\u57df\u8d44\u6e90\u5171\u4eab\uff09\u9009\u9879\u3002\u5b83\u542f\u7528\u8de8\u57df\u8d44\u6e90\u5171\u4eab\uff0c\u5141\u8bb8\u4ece\u4e0d\u540c\u57df\u7684\u670d\u52a1\u5668\u8bf7\u6c42\u8d44\u6e90\u3002\u8fd9\u5bf9\u4e8e\u5f00\u53d1\u6d89\u53ca\u8de8\u57df\u8bf7\u6c42\u7684\u5e94\u7528\u7a0b\u5e8f\u975e\u5e38\u6709\u7528\u3002\n  --strictPort        \uff08\u4e25\u683c\u7aef\u53e3\uff09\u9009\u9879\u3002\u5982\u679c\u6307\u5b9a\u7684\u7aef\u53e3\u5df2\u7ecf\u88ab\u5360\u7528\uff0c\u5b83\u4f1a\u5bfc\u81f4\u670d\u52a1\u5668\u9000\u51fa\u5e76\u663e\u793a\u9519\u8bef\u6d88\u606f\u3002\n  -c, --config <file>  \uff08\u914d\u7f6e\u6587\u4ef6\uff09\u9009\u9879\u3002\u5b83\u5141\u8bb8\u4f60\u6307\u5b9a\u4e00\u4e2a\u7279\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6\u6765\u914d\u7f6e\u4f60\u7684\u9879\u76ee\u3002\u4f60\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a\u6587\u4ef6\u7684\u8def\u5f84\u3002\n  -m, --mode <mode>    \uff08\u73af\u5883\u6a21\u5f0f\uff09\u9009\u9879\u3002\u5b83\u5141\u8bb8\u4f60\u8bbe\u7f6e\u9879\u76ee\u7684\u73af\u5883\u53d8\u91cf\u3002\u73af\u5883\u6a21\u5f0f\u53ef\u4ee5\u662f\u5f00\u53d1\u6a21\u5f0f\u3001\u751f\u4ea7\u6a21\u5f0f\u6216\u5176\u4ed6\u81ea\u5b9a\u4e49\u6a21\u5f0f\u3002\n  --base <path>        \uff08\u57fa\u7840\u8def\u5f84\uff09\u9009\u9879\u3002\u5b83\u5141\u8bb8\u4f60\u6307\u5b9a\u516c\u5171\u57fa\u7840\u8def\u5f84\uff0c\u7528\u4e8e\u89e3\u6790\u9759\u6001\u8d44\u6e90\u7684\u76f8\u5bf9\u8def\u5f84\u3002\n  --clearScreen       \uff08\u6e05\u9664\u5c4f\u5e55\uff09\u9009\u9879\u3002\u5b83\u5141\u8bb8\u4f60\u5728\u8bb0\u5f55\u65e5\u5fd7\u65f6\u542f\u7528\u6216\u7981\u7528\u6e05\u9664\u5c4f\u5e55\u7684\u529f\u80fd\u3002\u8fd9\u5bf9\u4e8e\u5728\u7ec8\u7aef\u4e2d\u4fdd\u6301\u65e5\u5fd7\u6e05\u6670\u53ef\u89c1\u975e\u5e38\u6709\u7528\u3002\n"})}),"\n",(0,i.jsx)(e.h2,{id:"build",children:"Build"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"farm build"})," \u547d\u4ee4\u4f1a\u5728\u9ed8\u8ba4\u7684 ",(0,i.jsx)(e.code,{children:"dist"})," \u76ee\u5f55\u4e0b\u6784\u5efa\u51fa\u53ef\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u7684\u4ea7\u7269\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",metastring:'title="Terminal"',children:"Usage:\n  $ farm build\n\nOptions:\n  -o, --outDir <dir>    \u8f93\u51fa\u6784\u5efa\u4ea7\u7269\n  -i, --input <file>    \u5165\u53e3\u6587\u4ef6\n  -w, --watch           \u662f\u5426\u76d1\u542c\u6587\u4ef6\u5e76\u4e14\u91cd\u65b0\u6784\u5efa\n  --targetEnv <target>  \u6784\u5efa\u73af\u5883 node, browser\n  --format <format>     \u6784\u5efa\u4ea7\u7269\u683c\u5f0f esm, commonjs\n  --sourcemap           \u662f\u5426\u8f93\u51fa sourcemap\n  --treeShaking         \u6d88\u9664\u65e0\u7528\u4ee3\u7801\u800c\u4e0d\u4f1a\u4ea7\u751f\u526f\u4f5c\u7528\n  --minify              \u6784\u5efa\u65f6\u7684\u4ee3\u7801\u538b\u7f29\n  -c, --config <file>   \u4f7f\u7528\u6307\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6\n  -m, --mode <mode>     \u8bbe\u7f6e\u73af\u5883\u6a21\u5f0f\n  --base <path>        \u5b83\u5141\u8bb8\u4f60\u6307\u5b9a\u516c\u5171\u57fa\u7840\u8def\u5f84\uff0c\u7528\u4e8e\u89e3\u6790\u9759\u6001\u8d44\u6e90\u7684\u76f8\u5bf9\u8def\u5f84\u3002\n  --clearScreen       \u5b83\u5141\u8bb8\u4f60\u5728\u8bb0\u5f55\u65e5\u5fd7\u65f6\u542f\u7528\u6216\u7981\u7528\u6e05\u9664\u5c4f\u5e55\u7684\u529f\u80fd\u3002\u8fd9\u5bf9\u4e8e\u5728\u7ec8\u7aef\u4e2d\u4fdd\u6301\u65e5\u5fd7\u6e05\u6670\u53ef\u89c1\u975e\u5e38\u6709\u7528\u3002\n  -h, --help            \u663e\u793a\u547d\u4ee4\u5e2e\u52a9\u4fe1\u606f\n"})}),"\n",(0,i.jsx)(e.h2,{id:"preview",children:"Preview"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"farm preview"})," \u7528\u4e8e\u5728\u672c\u5730\u53ef\u4ee5\u76f4\u63a5\u9884\u89c8\u60a8\u7684\u751f\u4ea7\u73af\u5883\u6784\u5efa\u51fa\u7684\u4ea7\u7269, \u60a8\u9700\u8981\u63d0\u524d\u6267\u884c ",(0,i.jsx)(e.code,{children:"farm build"})," \u6765\u6784\u5efa\u51fa\u751f\u4ea7\u73af\u5883\u7684\u4ea7\u7269"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",metastring:'title="Terminal"',children:"Usage:\n  $ farm preview\n\nOptions:\n  --open [url]          \u542f\u52a8\u65f6\u662f\u5426\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u9875\u9762\n  --port <port>         \u8bbe\u7f6e Server \u76d1\u542c\u7684\u7aef\u53e3\u53f7\n  --host <host>         \u6307\u5b9a Server \u542f\u52a8\u65f6\u76d1\u542c\u7684 host\n  -c --config <config>  \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\n  -h, --help            \u663e\u793a\u547d\u4ee4\u5e2e\u52a9\n"})}),"\n",(0,i.jsx)(e.h2,{id:"watch",children:"Watch"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"farm watch"})," \u4e00\u822c\u4f5c\u7528\u4e8e ",(0,i.jsx)(e.code,{children:"node"})," \u73af\u5883\u4e0b\u76d1\u542c\u6587\u4ef6\u53d8\u5316\u5e76\u4e14\u91cd\u65b0\u6784\u5efa"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",metastring:'title="Terminal"',children:"\nUsage:\n  $ farm watch\n\nOptions:\n  --format <format>    \u6784\u5efa\u4ea7\u7269\u683c\u5f0f esm, commonjs\n  -o, --outDir <dir>   \u8f93\u51fa\u6784\u5efa\u4ea7\u7269\n  -i, --input <file>   \u5165\u53e3\u6587\u4ef6\n  -c, --config <file>   \u4f7f\u7528\u6307\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6\n  -m, --mode <mode>     \u8bbe\u7f6e\u73af\u5883\u6a21\u5f0f\n  --base <path>        \u5b83\u5141\u8bb8\u4f60\u6307\u5b9a\u516c\u5171\u57fa\u7840\u8def\u5f84\uff0c\u7528\u4e8e\u89e3\u6790\u9759\u6001\u8d44\u6e90\u7684\u76f8\u5bf9\u8def\u5f84\u3002\n  --clearScreen       \u5b83\u5141\u8bb8\u4f60\u5728\u8bb0\u5f55\u65e5\u5fd7\u65f6\u542f\u7528\u6216\u7981\u7528\u6e05\u9664\u5c4f\u5e55\u7684\u529f\u80fd\u3002\u8fd9\u5bf9\u4e8e\u5728\u7ec8\u7aef\u4e2d\u4fdd\u6301\u65e5\u5fd7\u6e05\u6670\u53ef\u89c1\u975e\u5e38\u6709\u7528\u3002\n  -h, --help            \u663e\u793a\u547d\u4ee4\u5e2e\u52a9\u4fe1\u606f\n"})}),"\n",(0,i.jsx)(e.h2,{id:"clean",children:"Clean"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"farm clean"})," \u7531\u4e8e ",(0,i.jsx)(e.code,{children:"farm"})," \u63d0\u4f9b\u7684\u589e\u91cf\u6784\u5efa\u4f1a\u5728\u672c\u5730\u751f\u6210\u7f13\u5b58\u6587\u4ef6, \u5982\u679c\u5728\u7279\u5b9a\u60c5\u51b5\u4e0b(\u4e0d\u53ef\u9884\u77e5\u7684\u7f16\u8bd1\u9519\u8bef)\u53ef\u80fd\u60a8\u9700\u8981\u6e05\u7406\u7f13\u5b58\u6587\u4ef6"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",metastring:'title="Terminal"',children:"Usage:\n  $ farm clean [path]\n\nOptions:\n  --recursive          \u9012\u5f52\u641c\u7d22 `node_modules` \u76ee\u5f55\u5e76\u6e05\u9664\u7f13\u5b58\u6587\u4ef6\n  -c, --config <file>   \u4f7f\u7528\u6307\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6\n  -m, --mode <mode>     \u8bbe\u7f6e\u73af\u5883\u6a21\u5f0f\n  --base <path>        \u5b83\u5141\u8bb8\u4f60\u6307\u5b9a\u516c\u5171\u57fa\u7840\u8def\u5f84\uff0c\u7528\u4e8e\u89e3\u6790\u9759\u6001\u8d44\u6e90\u7684\u76f8\u5bf9\u8def\u5f84\u3002\n  --clearScreen       \u5b83\u5141\u8bb8\u4f60\u5728\u8bb0\u5f55\u65e5\u5fd7\u65f6\u542f\u7528\u6216\u7981\u7528\u6e05\u9664\u5c4f\u5e55\u7684\u529f\u80fd\u3002\u8fd9\u5bf9\u4e8e\u5728\u7ec8\u7aef\u4e2d\u4fdd\u6301\u65e5\u5fd7\u6e05\u6670\u53ef\u89c1\u975e\u5e38\u6709\u7528\u3002\n  -h, --help            \u663e\u793a\u547d\u4ee4\u5e2e\u52a9\u4fe1\u606f\n"})})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},5296:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>c});var i=r(758);const a={},t=i.createContext(a);function s(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);