"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[3373],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(a),k=n,f=s["".concat(p,".").concat(k)]||s[k]||d[k]||l;return a?r.createElement(f,i(i({ref:t},m),{},{components:a})):r.createElement(f,i({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(7462),n=a(7294),l=a(6010),i=a(2389),o=a(7392),p=a(7094),c=a(2466);const m="tabList__CuJ",d="tabItem_LNqP";function s(e){var t;const{lazy:a,block:i,defaultValue:s,values:k,groupId:f,className:N}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),u=k??g.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),h=(0,o.l)(u,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===s?s:s??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==b&&!u.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${u.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,p.U)(),[v,T]=(0,n.useState)(b),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=f){const e=y[f];null!=e&&e!==v&&u.some((t=>t.value===e))&&T(e)}const _=e=>{const t=e.currentTarget,a=E.indexOf(t),r=u[a].value;r!==v&&(O(t),T(r),null!=f&&w(f,String(r)))},C=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]??E[E.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",m)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},N)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>E.push(e),onKeyDown:C,onFocus:_,onClick:_},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":v===t})}),a??t)}))),a?(0,n.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function k(e){const t=(0,i.Z)();return n.createElement(s,(0,r.Z)({key:String(t)},e))}},320:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));a(5488),a(5162);const l={sidebar_label:"Offers",title:"Offer CLI",slug:"/offer-cli"},i=void 0,o={unversionedId:"cli-reference/offers",id:"cli-reference/offers",title:"Offer CLI",description:"Note about Windows command escaping",source:"@site/docs/cli-reference/offers.mdx",sourceDirName:"cli-reference",slug:"/offer-cli",permalink:"/zh/offer-cli",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/cli-reference/offers.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Offers",title:"Offer CLI",slug:"/offer-cli"},sidebar:"tutorialSidebar",previous:{title:"NFTs",permalink:"/zh/nft-cli"},next:{title:"DataLayer",permalink:"/zh/datalayer-cli"}},p={},c=[{value:"Reference",id:"reference",level:2},{value:"<code>make_offer</code>",id:"make_offer",level:3},{value:"<strong><code>take_offer</code></strong>",id:"take_offer",level:3},{value:"<strong><code>cancel_offer</code></strong>",id:"cancel_offer",level:3},{value:"<strong><code>get_offers</code></strong>",id:"get_offers",level:3}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Note about Windows command escaping"),(0,n.kt)("p",null,"This document will use Linux/MacOS RPC syntax. When running rpc commands on Windows, you'll need to escape all quotes with backslashes."),(0,n.kt)("p",null,"For example, here is a typical RPC command on Linux and MacOS:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'chia rpc wallet create_new_wallet \'{"wallet_type": "nft_wallet"}\'\n')),(0,n.kt)("p",null,"To run the same command on Windows, you need to escape the quotes, so it looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'chia rpc wallet create_new_wallet \'{\\"wallet_type\\": \\"nft_wallet\\"}\'\n'))),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("h3",{id:"make_offer"},(0,n.kt)("inlineCode",{parentName:"h3"},"make_offer")),(0,n.kt)("p",null,"Functionality: Create an offer of XCH/CATs for XCH/CATs."),(0,n.kt)("p",null,"Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"chia wallet make_offer [OPTIONS]")),(0,n.kt)("p",null,"Options:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Short Command"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Long Command"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-wp"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--wallet-rpc-port"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INTEGER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--fingerprint"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INTEGER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-o"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--offer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"True"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A wallet id to offer and the amount to offer (formatted like wallet_id:amount)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-r"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--request"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"True"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A wallet id of an asset to receive and the amount you wish to receive (formatted like wallet_id:amount)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-p"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--filepath"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"True"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The path to write the generated offer file to")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-m"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--fee"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A fee to add to the offer when it gets taken")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-h"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--help"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"take_offer"},(0,n.kt)("strong",{parentName:"h3"},(0,n.kt)("inlineCode",{parentName:"strong"},"take_offer"))),(0,n.kt)("p",null,"Functionality: Examine or take an offer."),(0,n.kt)("p",null,"Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"chia wallet take_offer [OPTIONS] PATH_OR_HEX")),(0,n.kt)("p",null,"Options:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Short Command"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Long Command"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-wp"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--wallet-rpc-port"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INTEGER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--fingerprint"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INTEGER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-e"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--examine-only"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Print the summary of the offer file but do not take it")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-m"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--fee"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fee to use when pushing the completed offer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-h"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--help"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"cancel_offer"},(0,n.kt)("strong",{parentName:"h3"},(0,n.kt)("inlineCode",{parentName:"strong"},"cancel_offer"))),(0,n.kt)("p",null,"Functionality: Cancel an existing offer. Must be the offer's Maker."),(0,n.kt)("p",null,"Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"chia wallet cancel_offer [OPTIONS]")),(0,n.kt)("p",null,"Options:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Short Command"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Long Command"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-wp"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--wallet-rpc-port"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INTEGER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--fingerprint"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INTEGER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-id"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--id"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"True"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The offer ID that you wish to cancel")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--insecure"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Don't make an on-chain transaction, simply mark the offer as canceled")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-m"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--fee"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fee to use when canceling the offer securely")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-h"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--help"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"get_offers"},(0,n.kt)("strong",{parentName:"h3"},(0,n.kt)("inlineCode",{parentName:"strong"},"get_offers"))),(0,n.kt)("p",null,"Functionality: Get the status of existing offers."),(0,n.kt)("p",null,"Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"chia wallet get_offers [OPTIONS]")),(0,n.kt)("p",null,"Options:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Short Command"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Long Command"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-wp"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--wallet-rpc-port"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INTEGER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--fingerprint"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INTEGER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-id"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--id"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ID of the offer that you wish to examine")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-p"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--filepath"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The path to rewrite the offer file to (must be used in conjunction with --id)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-em"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--exclude-my-offers"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Exclude your own offers from the output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-et"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--exclude-taken-offers"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Exclude offers that you've accepted from the output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-ic"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--include-completed"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Include offers that have already been confirmed/canceled or failed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-s"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--summaries"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Show the assets being offered and requested for each offer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-r"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--reverse"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Reverse the order of the output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-h"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--help"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))))}d.isMDXComponent=!0}}]);