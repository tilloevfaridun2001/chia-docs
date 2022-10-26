"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[3029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(n),g=a,m=h["".concat(c,".").concat(g)]||h[g]||p[g]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={title:"Check if Things are Working",slug:"/check-if-things-are-working"},o=void 0,l={unversionedId:"reference-client/check-if-things-are-working",id:"reference-client/check-if-things-are-working",title:"Check if Things are Working",description:"This doc assumes you know how to use the CLI. Using the CLI is the best way to troubleshoot (and to do everything Chia too). The Quick Start Guide page and the CLI Commands Reference page have useful info to get you familiar with the CLI.",source:"@site/docs/reference-client/check-if-things-are-working.mdx",sourceDirName:"reference-client",slug:"/check-if-things-are-working",permalink:"/check-if-things-are-working",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/reference-client/check-if-things-are-working.mdx",tags:[],version:"current",frontMatter:{title:"Check if Things are Working",slug:"/check-if-things-are-working"},sidebar:"tutorialSidebar",previous:{title:"Chia Installation Guide",permalink:"/chia-installation-guide"},next:{title:"Node Syncing",permalink:"/node-syncing"}},c={},s=[{value:"Where to Find Things",id:"where-to-find-things",level:2},{value:"Linux &amp; macOS",id:"linux--macos",level:3},{value:"Windows",id:"windows",level:3},{value:"CLI",id:"cli",level:2},{value:"Config File",id:"config-file",level:2},{value:"Harvester",id:"harvester",level:2},{value:"Plotting",id:"plotting",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This doc assumes you know how to use the CLI. Using the CLI is the best way to troubleshoot (and to do everything Chia too). The ",(0,a.kt)("a",{parentName:"p",href:"/quick-start-guide"},"Quick Start Guide page")," and the ",(0,a.kt)("a",{parentName:"p",href:"/cli"},"CLI Commands Reference page")," have useful info to get you familiar with the CLI."),(0,a.kt)("h2",{id:"where-to-find-things"},"Where to Find Things"),(0,a.kt)("p",null,"The file structure for Linux, macOS, and Windows versions of Chia are similar."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/home/user\n\u251c\u2500 .chia/\n\u2502   \u2514\u2500\u2500 mainnet/\n\u2502      \u251c\u2500 config/\n\u2502      \u2502      \u251c\u2500 config.yaml\n\u2502      \u2502      \u2514\u2500 ssl/\n\u2502      \u2502            \u2514\u2500 (and more...)\n\u2502      \u251c\u2500 db/\n\u2502      \u251c\u2500 log/\n\u2502      \u2502      \u2514\u2500 debug.log\n\u2502      \u251c\u2500 run/\n\u2502      \u2502      \u2514\u2500 (and more...)\n\u2502      \u2514\u2500 wallet/\n\u2502             \u2514\u2500 (and more...)\n\u2514\u2500\u2500 /chia-blockchain\n       \u2514\u2500 (and more...)\n")),(0,a.kt)("h3",{id:"linux--macos"},"Linux & macOS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chia config: ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.chia/mainnet/config/config.yaml")),(0,a.kt)("li",{parentName:"ul"},"Chia logs: ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.chia/mainnet/log/"))),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chia config: ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\%USERNAME%\\.chia\\mainnet\\config\\config.yaml")),(0,a.kt)("li",{parentName:"ul"},"Chia logs: ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\%USERNAME%\\.chia\\mainnet\\log\\"))),(0,a.kt)("h1",{id:"logs"},"Logs"),(0,a.kt)("h2",{id:"cli"},"CLI"),(0,a.kt)("p",null,"You can use the CLI command ",(0,a.kt)("inlineCode",{parentName:"p"},"chia configure --set-log-level INFO")," to set your log level to the useful INFO setting. Be sure to restart Chia after making settings changes."),(0,a.kt)("h2",{id:"config-file"},"Config File"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," you can set the level of detail for your logs."),(0,a.kt)("p",null,"Look for this section in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml"),". It\u2019s useful to change the logger setting ",(0,a.kt)("inlineCode",{parentName:"p"},"log_level")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"WARNING")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"INFO")," to get the detail needed to troubleshoot."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"logging: &id001\n  log_filename: log/debug.log\n  log_level: INFO\n  log_stdout: false\n")),(0,a.kt)("p",null,"You can run ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," (",(0,a.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man1/grep.1.html"},"Linux"),", ",(0,a.kt)("a",{parentName:"p",href:"https://ss64.com/osx/grep.html"},"macOS"),") or ",(0,a.kt)("inlineCode",{parentName:"p"},"Select-String")," (",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/select-string?view=powershell-7.1"},"Windows"),") to search through your logs for relevant information."),(0,a.kt)("h1",{id:"is-it-working"},"Is It Working?"),(0,a.kt)("p",null,"If you want to quickly find errors, run this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux/macOS: ",(0,a.kt)("inlineCode",{parentName:"li"},"cat ~/.chia/mainnet/log/debug.log | grep -i 'error'")),(0,a.kt)("li",{parentName:"ul"},"Windows: ",(0,a.kt)("inlineCode",{parentName:"li"},'Get-Content -Path "~\\.chia\\mainnet\\log\\debug.log" | Select-String -Pattern "error"'))),(0,a.kt)("h2",{id:"harvester"},"Harvester"),(0,a.kt)("p",null,"The time it takes to do a proof challenge should be below 30 seconds. If you see higher times, something is wrong with your setup."),(0,a.kt)("p",null,"Here are some commands you can use to examine ",(0,a.kt)("inlineCode",{parentName:"p"},"debug.log")," for problems."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux/macOS: ",(0,a.kt)("inlineCode",{parentName:"li"},"tail ~/.chia/mainnet/log/debug.log | grep eligible")),(0,a.kt)("li",{parentName:"ul"},"Windows:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'Select-String -Path "~\\.chia\\mainnet\\log\\debug*" -Pattern "eligible"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'Select-String -Path "~\\.chia\\mainnet\\log\\debug*" -Pattern "Found [^0] proof"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'Select-String -Path "~\\.chia\\mainnet\\log\\debug*" -Pattern "Farmed unfinished_block"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'Get-Content -Path "~\\.chia\\mainnet\\log\\debug.log" -Wait | Select-String -Pattern "found"'))))),(0,a.kt)("h2",{id:"plotting"},"Plotting"),(0,a.kt)("p",null,"You can find the documentation for the ",(0,a.kt)("inlineCode",{parentName:"p"},"check")," command on the ",(0,a.kt)("a",{parentName:"p",href:"/cli#check"},"CLI Commands Reference page")," page"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To check all your plots, run ",(0,a.kt)("inlineCode",{parentName:"li"},"chia plots check"),". This will check all directories you have listed in your ",(0,a.kt)("inlineCode",{parentName:"li"},"config.yaml")," to contain plots."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"chia plots check -h")," to see the options for this command.")))}p.isMDXComponent=!0}}]);