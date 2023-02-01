"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8990],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),o=a(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(7462),o=a(7294),r=a(6010),i=a(2466),s=a(6550),l=a(1980),c=a(7392),u=a(12);function d(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function p(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[l,c]=m({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),g=(()=>{const e=l??d;return h({value:e,tabValues:r})?e:null})();(0,o.useEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,r]),tabValues:r}}var g=a(2389);const k="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==s&&(d(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:p},i,{className:(0,r.Z)("tabs__item",b,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",k)},o.createElement(y,(0,n.Z)({},e,t)),o.createElement(w,(0,n.Z)({},e,t)))}function C(e){const t=(0,g.Z)();return o.createElement(v,(0,n.Z)({key:String(t)},e))}},6007:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(7462),o=(a(7294),a(3905)),r=a(4866),i=a(5162);const s={slug:"/guides/crash-course/introduction",title:"Introduction"},l=void 0,c={unversionedId:"guides/crash-course/introduction",id:"guides/crash-course/introduction",title:"Introduction",description:"This course is designed to give you an end-to-end introduction to Chia. We'll start off with a foundational understanding of the Chia blockchain. This includes what blockchains are for and what makes Chia different from other options. Once you understand the basics, we'll learn about plotting and farming. Finally, we'll cover many of the DeFi possibilities including fungible tokens (CATs), non-fungible tokens (NFTs), and writing custom coins in Chialisp.",source:"@site/docs/guides/crash-course/introduction.md",sourceDirName:"guides/crash-course",slug:"/guides/crash-course/introduction",permalink:"/zh/guides/crash-course/introduction",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/crash-course/introduction.md",tags:[],version:"current",frontMatter:{slug:"/guides/crash-course/introduction",title:"Introduction"}},u={},d=[{value:"Intro to Chia",id:"intro-to-chia",level:2},{value:"Consensus",id:"consensus",level:3},{value:"Decentralization",id:"decentralization",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Getting Started with the CLI",id:"getting-started-with-the-cli",level:2},{value:"Getting on Testnet",id:"getting-on-testnet",level:2},{value:"CLI",id:"cli",level:2},{value:"Getting TXCH",id:"getting-txch",level:2}],p={toc:d};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This course is designed to give you an end-to-end introduction to Chia. We'll start off with a foundational understanding of the Chia blockchain. This includes what blockchains are for and what makes Chia different from other options. Once you understand the basics, we'll learn about plotting and farming. Finally, we'll cover many of the DeFi possibilities including fungible tokens (CATs), non-fungible tokens (NFTs), and writing custom coins in Chialisp."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Chialisp is Chia's on-chain programming language for writing custom coins. If you want to skip ahead to development, see the ",(0,o.kt)("a",{parentName:"p",href:"/guides/crash-course/intro-to-chialisp"},"Intro to Chialisp section")," of this course.")),(0,o.kt)("h2",{id:"intro-to-chia"},"Intro to Chia"),(0,o.kt)("p",null,"The goal of cryptocurrency is to transfer monetary value on a peer-to-peer decentralized network. This means that there is no centralized intermediary to facilitate the transaction. Instead, blockchain relies on a network of nodes to confirm transactions according to some rules. Additionally, cryptocurrency makes the exchange of value extremely fast and easy, even for cross-border payments."),(0,o.kt)("p",null,"However, cryptocurrencies can be used for more than just facilitating digital payments. We are seeing many projects pop up that are designed as decentralized applications, or ",(0,o.kt)("strong",{parentName:"p"},"dApps"),". The value of a cryptocurrency is not only in its ability to be used for buying and selling goods, but also that it is designed to host applications without a centralized authority."),(0,o.kt)("p",null,"Each person who runs a Chia blockchain node runs a full copy of the software and is required to adhere to the consensus algorithm. This allows for peer-to-peer transactions confirmed against an entire network of nodes as opposed to a single entity."),(0,o.kt)("h3",{id:"consensus"},"Consensus"),(0,o.kt)("p",null,"As new transactions are added to the network, full nodes must confirm these transactions. For a decentralized network to work, every node must be in agreement with every other node. This means they must follow the same rules."),(0,o.kt)("p",null,"The rules are known as the ",(0,o.kt)("strong",{parentName:"p"},"consensus")," and are rules defined in the software every node must adhere to."),(0,o.kt)("p",null,"Chia follows a consensus algorithm known as ",(0,o.kt)("strong",{parentName:"p"},"Proof of Space and Time")," (PoST). The way it works is by utilizing hard drive space and elapsed time as your contribution to the network. This is required to prevent what's known as a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sybil_attack"},"Sybil attack"),"."),(0,o.kt)("p",null,"Chia is intentionally different than networks that use ",(0,o.kt)("strong",{parentName:"p"},"Proof of Stake")," (PoS). Many argue that staking has a centralizing effect on proof of stake networks as there are much fewer decision-making nodes, and they continue to gain power. Chia, on the other hand, has over 100K full nodes all following the PoST consensus mechanism, a protocol that is similar to that of Bitcoin (but with less electricity usage required)."),(0,o.kt)("h3",{id:"decentralization"},"Decentralization"),(0,o.kt)("p",null,"For a network to be decentralized, we want the creation of a full node to be possible for many. Ideally, running a full node would be as permissionless as possible."),(0,o.kt)("p",null,"Anyone can become a full node in Chia. The majority of computers can handle the technical requirements with many people even running off of a Raspberry Pi. A full node can be ran with less storage requirements and computing power. These smaller requirements for a full node allow for stronger decentralization."),(0,o.kt)("p",null,"Farmers in the network are those who designate hard drive storage to support the network. The more space you reserve, the higher chances you have of confirming a block and getting rewarded Chia (XCH). As you'll learn, the network has grown so much that solo farming can be quite unrewarding with massive times to win. Pooling was introduced as a solution to more evenly distribute farming rewards based on your space contribution."),(0,o.kt)("p",null,"Pooling is possible with other major cryptocurrencies, but a major difference is that the Chia network designed an official protocol where the individual farmers confirm their blocks rather than the pool. This completely removes the problem of centralization introduced by current ",(0,o.kt)("strong",{parentName:"p"},"Proof of Work")," (PoW) mining. Centralized mining power puts the integrity of the network in question as large pools are capable of easily performing 51% attacks. This specific centralization problem is not a problem with the pooling protocol, even if a single farming pool maintained a majority of the network."),(0,o.kt)("p",null,"Essentially:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chia is a blockchain that is decentralized."),(0,o.kt)("li",{parentName:"ul"},"It uses significantly less electricity."),(0,o.kt)("li",{parentName:"ul"},"It offers dApp capabilities with the Chialisp programming language.")),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"You can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.chia.net/quick-start-guide"},"Quick Start Guide page")," to download and install the Chia client. The installer is usually the simplest and we will go through how to set up the ",(0,o.kt)("inlineCode",{parentName:"p"},"chia")," command for CLI use."),(0,o.kt)("p",null,"To make the commands as close as possible across operating systems I recommend Windows users ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/download/win"},"download Git"),", which comes with Git bash. You can of course use Windows Command Prompt or PowerShell, but commands may be slightly different."),(0,o.kt)("p",null,"Before we get started using the CLI, we need to be able to issue the ",(0,o.kt)("inlineCode",{parentName:"p"},"chia")," command."),(0,o.kt)("p",null,"Use this line in Git Bash / terminal:"),(0,o.kt)(r.Z,{groupId:"OS",defaultValue:"windows (Git Bash)",values:[{label:"Windows (Git Bash)",value:"windows (Git Bash)"},{label:"Linux/MacOS",value:"nix"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"windows (Git Bash)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"~/AppData/Local/chia-blockchain/app-1.5.1/resources/app.asar.unpacked/daemon/chia.exe\n"))),(0,o.kt)(i.Z,{value:"nix",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/Applications/Chia.app/Contents/Resources/app.asar.unpacked/daemon/chia\n")))),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: chia.exe [OPTIONS] COMMAND [ARGS]...\n\n  Manage chia blockchain infrastructure (1.5.1)\n\nOptions:\n  --root-path PATH                Config file root  [default:\n                                  C:\\Users\\calebcurry\\.chia\\mainnet]\n\n  --keys-root-path PATH           Keyring file root  [default:\n                                  C:\\Users\\calebcurry\\.chia_keys]\n\n  --passphrase-file FILENAME      File or descriptor to read the keyring\n                                  passphrase from\n\n  --force-legacy-keyring-migration / --no-force-legacy-keyring-migration\n                                  Force legacy keyring migration. Legacy\n                                  keyring support will be removed in an\n                                  upcoming version!\n\n  -h, --help                      Show this message and exit.\n\nCommands:\n  configure   Modify configuration\n  db          Manage the blockchain database\n  farm        Manage your farm\n  init        Create or migrate the configuration\n  keys        Manage your keys\n  netspace    Estimate total farmed space on the network\n  passphrase  Manage your keyring passphrase\n  plotnft     Manage your plot NFTs\n  plots       Manage your plots\n  plotters    Advanced plotting options\n  rpc         RPC Client\n  run_daemon  Runs chia daemon\n  show        Show node information\n  start       Start service groups\n  stop        Stop services\n  version     Show chia version\n  wallet      Manage your wallet\n\n  Try 'chia start node', 'chia netspace -d 192', or 'chia show -s'\n\n")),(0,o.kt)("p",null,"Using this path each time can get old, so you have the option of creating an alias or environment variable."),(0,o.kt)(r.Z,{groupId:"OS",defaultValue:"windows (Git Bash)",values:[{label:"Windows (Git Bash)",value:"windows (Git Bash)"},{label:"Linux/MacOS",value:"nix"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"windows (Git Bash)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"alias chia=~/AppData/Local/chia-blockchain/app-1.5.1/resources/app.asar.unpacked/daemon/chia.exe\n"))),(0,o.kt)(i.Z,{value:"nix",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"alias chia=/Applications/Chia.app/Contents/Resources/app.asar.unpacked/daemon/chia\n")))),(0,o.kt)("p",null,"Now, you can just say:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia\n")),(0,o.kt)("h2",{id:"getting-started-with-the-cli"},"Getting Started with the CLI"),(0,o.kt)("p",null,"Once you can issue the ",(0,o.kt)("inlineCode",{parentName:"p"},"chia")," command, the differences between operating systems are minimal."),(0,o.kt)("p",null,"To gain more experience in Chia and to be more comfortable with troubleshooting you should become comfortable with the command line interface (this will allow you to interact with Chia through the terminal). A lot of other tools like madMAx plotter also are commonly used through the terminal."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"madMAx is a software created as an alternative way of creating plots for Chia. The software performed great and was ultimately brought in to the official software. This is the easiest way to get started created plots with Chia.")),(0,o.kt)("p",null,"The instructions to use the CLI depends on the operating system, you can get the exact instructions in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/wiki/CLI-Commands-Reference"},"this document"),"."),(0,o.kt)("p",null,"So the goal is to be able to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"chia")," command from the terminal. On mac, you can issue ",(0,o.kt)("inlineCode",{parentName:"p"},"/Applications/Chia.app/Contents/Resources/app.asar.unpacked/daemon/chia"),"."),(0,o.kt)("p",null,"Add this to your path with ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH=/Applications/Chia.app/Contents/Resources/app.asar.unpacked/daemon:$PATH"),". This will allow you to just type ",(0,o.kt)("inlineCode",{parentName:"p"},"chia")," in the terminal without everything else."),(0,o.kt)("p",null,"Now that you have the CLI running you can initialize Chia."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia init\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia keys generate\n")),(0,o.kt)("admonition",{title:"Fingerprints",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"It's possible to manage multiple keys from a single Chia client. These will be identified by a ",(0,o.kt)("strong",{parentName:"p"},"fingerprint"),". In ",(0,o.kt)("inlineCode",{parentName:"p"},"chia wallet show")," you'll see a message like ",(0,o.kt)("inlineCode",{parentName:"p"},"fingerprint: 1660000549"),"."),(0,o.kt)("p",{parentName:"admonition"},"Working with only a single fingerprint in your client is easier as if you have multiple you'll often need to specify which fingerprint you want to use. For example. here is the usuage for ",(0,o.kt)("inlineCode",{parentName:"p"},"chia wallet send"),":"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet send [OPTIONS]\n\nOptions:\n\n  ...\n\n  -f, --fingerprint INTEGER       Set the fingerprint to specify which wallet\n                                  to use\n\n  ...\n\n")),(0,o.kt)("p",{parentName:"admonition"},"By managing just a single wallet, all of your chia commands can be simplified by leaving off the ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," option.")),(0,o.kt)("h2",{id:"getting-on-testnet"},"Getting on Testnet"),(0,o.kt)("p",null,"If you are already on a testnet, skip to ",(0,o.kt)("a",{parentName:"p",href:"#cli"},"instructions for the CLI"),"."),(0,o.kt)("p",null,"For most dev work on Chia, you'll want to be on the testnet. That way, you're learning with fake Chia and don't put any funds at risk."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia stop all -d\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia configure --testnet true\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia start farmer\n")),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"chia_harvester: started\nchia_farmer: started\nchia_full_node: started\nchia_wallet: started\n")),(0,o.kt)("h2",{id:"cli"},"CLI"),(0,o.kt)("p",null,"At this point you should be able to use the CLI to get information about your farm and confirm you are on testnet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia show --state\n")),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Network: testnet10    Port: 58444   RPC Port: 8555\nNode ID: 67095d445d879556da95feeee70174c66b131d4f29bd447df5fbc56789a01f24\nGenesis Challenge: ae83525ba8d1dd3f09b277de18ca3e43fc0af20d20c4b3e92ef2a48bd291ccb2\nCurrent Blockchain Status: Not Synced. Peak height: 1462514\n      Time: Wed Aug 31 2022 13:49:51 EDT                  Height:    1462514\n\nEstimated network space: 1.181 TiB\nCurrent difficulty: 708\nCurrent VDF sub_slot_iters: 70778880\nTotal iterations since the start of the blockchain: 3364480016373\n\n  Height: |   Hash:\n  1462514 | d799fedae1ef226669f61ad843c5ae7947b42e596664f39fd68fcd299e076916\n  1462513 | 0764f546d9186da788485ce69ebe91969e8cf9495722d9567d67e54e3e3e6ed3\n  1462512 | d6132b015365b7609d0b5179b9daf9e4fd2ad7a9040ec1d13e15df65660cf69e\n  1462511 | 8ae2273b4a86fd9af85837c538faa75b572014ac281c6c51ad1eb4ce2a7f8072\n  1462510 | fb392a40b7e3bf38c8628311224b5aaa4a32ecdea403c16ae5d3c48d16b57f47\n  1462509 | 012b1f9213bf823e6b73408019f18ff8330e46b911ba78c1d64fd5019d6cc6d9\n  1462508 | e0f66ca2e00566eee9a3ce4028b6aa11771aa42c9bce34f296d89f42d1a909ce\n  1462507 | c900e2fb449db0def030a3c0e6a8bff5d23f6470730236120bcac442b2f1ab0f\n  1462506 | 39db9fe7658b545dcf45e8e99797c937b7b93a041485ef28bf9cda2b3529ac0a\n  1462505 | ca343b0e985fe9dafb7cba7cee0c1515c6bddd732e2542b8fbd49ac8d90c13f3\n\n")),(0,o.kt)("p",null,"Ideally, you'll see within this response a value like ",(0,o.kt)("inlineCode",{parentName:"p"},"Current Blockchain Status: Syncing 1462514/1462514 (0 behind)")," showing that you are syncing."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Testnet Database"),(0,o.kt)("p",null,"For many things you will need a synced full node. Fortunately, an official ",(0,o.kt)("a",{parentName:"p",href:"https://downloads.chia.net/testnet10/"},"testnet database")," download is available, which can be a much faster option than syncing from scratch."),(0,o.kt)("p",null,"Once this file is downloaded, stop your node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia stop all -d\n")),(0,o.kt)("p",null,"Now, ",(0,o.kt)("strong",{parentName:"p"},"unzip the file")," and replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"blockchain_v2_mainnet.sqlite")," database file in ",(0,o.kt)("inlineCode",{parentName:"p"},"/Users/<username>/.chia/mainnet/db")," directory."),(0,o.kt)("p",null,"Once this is complete, you can restart chia."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia start farmer\n")),(0,o.kt)("p",null,"Now, you can confirm your sync height. It should be much closer to the peak height of the blockchain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia show --state\n"))),(0,o.kt)("h2",{id:"getting-txch"},"Getting TXCH"),(0,o.kt)("p",null,"For the rest of this workshop you will need some TXCH (Testnet Chia). You can get some for free from the ",(0,o.kt)("a",{parentName:"p",href:"https://testnet10-faucet.chia.net/"},"official Chia faucet"),"."),(0,o.kt)("p",null,"For this you will need a receive address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet get_address\n")),(0,o.kt)("p",null,"Example response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"txch14hdpnww04nezf9y7gmsdaryjtqpgnyrv6set8fykdx7v8u3jjvps5xjxre\n")),(0,o.kt)("p",null,"Once this transaction has been added to the blockchain and your wallet sees it, you will have a TXCH balance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet show\n")),(0,o.kt)("p",null,"Example response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Chia Wallet:\n   -Total Balance:         0.899259999996 txch (899259999996 mojo)\n   -Pending Total Balance: 0.899259999996 txch (899259999996 mojo)\n   -Spendable:             0.899259999996 txch (899259999996 mojo)\n   -Type:                  STANDARD_WALLET\n   -Wallet ID:             1\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Sending Chia"),"You can send Chia through the CLI as well. This requires a little more information, but isn't too bad.",(0,o.kt)("p",null,"The command looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet send -i 1 -a <amount in XCH> -m <amount in fee in XCH> -t <target address>\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-i 1")," is the wallet ID. Later on we will have multiple wallet IDs to store different types of assets (tokens). For now, ",(0,o.kt)("inlineCode",{parentName:"p"},"-i 1")," refers to the default Chia wallet as seen in the ",(0,o.kt)("inlineCode",{parentName:"p"},"-Wallet ID")," response from the ",(0,o.kt)("inlineCode",{parentName:"p"},"chia wallet show")," command."),(0,o.kt)("p",null,"Any Chia keys will have multiple receive addresses. You can test sending Chia by sending some to yourself (or a friend). Take a note of the response from ",(0,o.kt)("inlineCode",{parentName:"p"},"chia wallet get_address")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet send -i 1 -a .01 -m 0 -t txch14hdpnww04nezf9y7gmsdaryjtqpgnyrv6set8fykdx7v8u3jjvps5xjxre\n")),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Submitting transaction...\nTransaction submitted to nodes: ...\nRun 'chia wallet get_transaction -f 1660000549 -tx 0x468399be58604e7199f6899d838d3206fada9c12b29f545410616856413457c7' to get status\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet get_transaction -f 1660000549 -tx 0x468399be58604e7199f6899d838d3206fada9c12b29f545410616856413457c7\n")),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Transaction 468399be58604e7199f6899d838d3206fada9c12b29f545410616856413457c7\nStatus: In mempool\nAmount sent: 0.01 TXCH\nTo address: txch14hdpnww04nezf9y7gmsdaryjtqpgnyrv6set8fykdx7v8u3jjvps5xjxre\nCreated at: 2022-09-08 10:52:15\n")),(0,o.kt)("p",null,"You can see ",(0,o.kt)("inlineCode",{parentName:"p"},"Status: In mempool"),", which means a full node has not yet confirmed the transaction. This can take some time if the network is busy or if you did not include a fee. Ultimately we want this command to return ",(0,o.kt)("inlineCode",{parentName:"p"},"Status: Confirmed"),"."),(0,o.kt)("p",null,"You can see all your transactions as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet get_transactions\n")),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"...\n\nTransaction 2aa603c52e4b56b8af41a489081056de40421a6398caf4fbdc8be861eb210b2e\nStatus: Confirmed\nAmount received in trade: 0.01 TXCH\nTo address: txch1ttx32j6lg9c6d4jhf9rdpugk7ulmuxsz4u42jdmy5xr94t933q5skfv0av\nCreated at: 2022-09-01 13:40:07\n\nTransaction 29dd86e548957ff90bebd83aaa11f5e5f0fa4978f9c207252137dcbed40b2222\nStatus: Confirmed\nAmount sent in trade: 0.01 TXCH\nTo address: txch1qyqszqgpqyqszqgpqyqszqgpqyqszqgpqyqszqgpqyqszqgpqyqszf0rpn\nCreated at: 2022-09-01 13:40:07\n\n...\n"))),"At this point you have a Chia wallet and a basic understanding of the CLI. You should now be able to move on to the next section which will introduce many of the Chia primitives including CATs, offers, and NFTs.")}h.isMDXComponent=!0}}]);