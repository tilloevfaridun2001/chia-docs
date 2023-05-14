"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[2501],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),i=a(6550),p=a(1980),s=a(7392),d=a(12);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[p,s]=k({queryString:a,groupId:n}),[u,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=p??u;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var h=a(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:i,selectValue:p,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=s[a].value;n!==i&&(u(t),p(n))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:c,onClick:m},o,{className:(0,l.Z)("tabs__item",N.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function v(e){const t=(0,h.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));a(4866),a(5162);const l={sidebar_label:"Harvester",title:"Harvester RPC",slug:"/harvester-rpc"},o=void 0,i={unversionedId:"rpc-reference/harvester",id:"rpc-reference/harvester",title:"Harvester RPC",description:"This document provides a comprehensive reference to Chia's Harvester RPC API.",source:"@site/docs/rpc-reference/harvester.md",sourceDirName:"rpc-reference",slug:"/harvester-rpc",permalink:"/zh/harvester-rpc",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/rpc-reference/harvester.md",tags:[],version:"current",frontMatter:{sidebar_label:"Harvester",title:"Harvester RPC",slug:"/harvester-rpc"},sidebar:"tutorialSidebar",previous:{title:"Full Node",permalink:"/zh/full-node-rpc"},next:{title:"NFTs",permalink:"/zh/nft-rpc"}},p={},s=[{value:"<code>add_plot_directory</code>",id:"add_plot_directory",level:3},{value:"<code>delete_plot</code>",id:"delete_plot",level:3},{value:"<code>get_plots</code>",id:"get_plots",level:3},{value:"<code>get_plot_directories</code>",id:"get_plot_directories",level:3},{value:"<code>get_routes</code>",id:"get_routes",level:3},{value:"<code>refresh_plots</code>",id:"refresh_plots",level:3},{value:"<code>remove_plot_directory</code>",id:"remove_plot_directory",level:3}],d={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document provides a comprehensive reference to Chia's Harvester RPC API."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Note about Windows command escaping"),(0,r.kt)("p",null,"This document will use Linux/MacOS RPC syntax. When running rpc commands on Windows, you'll need to escape all quotes with backslashes."),(0,r.kt)("p",null,"For example, here is a typical RPC command on Linux and MacOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'chia rpc harvester add_plot_directory \'{"dirname": "C:\\\\plots"}\'\n')),(0,r.kt)("p",null,"To run the same command on Windows, you need to escape the quotes with backslashes. In other words, add a \\ before each double quote, such that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"dirname" becomes \\"dirname\\"\n"C:\\\\plots" becomes \\"C:\\\\plots\\"\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"add_plot_directory"},(0,r.kt)("inlineCode",{parentName:"h3"},"add_plot_directory")),(0,r.kt)("p",null,"Functionality: Add a new plot directory"),(0,r.kt)("p",null,"Usage: chia rpc harvester ","[OPTIONS]"," add_plot_directory ","[REQUEST]"),(0,r.kt)("p",null,"Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-j"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--json-file"),(0,r.kt)("td",{parentName:"tr",align:"left"},"FILENAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optionally instead of REQUEST you can provide a json file containing the request data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,r.kt)("p",null,"Request Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Flag"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"dirname"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The full path of the directory to add")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that the new directory must already exist on the system")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("p",null,"First, add the directory to the local file system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /plots_new\n")),(0,r.kt)("p",null,"Next, add the new directory to the harvester's list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'chia rpc harvester add_plot_directory \'{"dirname": "/plots_new"}\'\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"delete_plot"},(0,r.kt)("inlineCode",{parentName:"h3"},"delete_plot")),(0,r.kt)("p",null,"Functionality: Delete a single plot"),(0,r.kt)("p",null,"Usage: chia rpc harvester ","[OPTIONS]"," delete_plot ","[REQUEST]"),(0,r.kt)("p",null,"Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-j"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--json-file"),(0,r.kt)("td",{parentName:"tr",align:"left"},"FILENAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optionally instead of REQUEST you can provide a json file containing the request data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,r.kt)("p",null,"Request Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Flag"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"filename"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The file name of the plot to delete")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"As long as this command includes the required ",(0,r.kt)("inlineCode",{parentName:"p"},"filename")," flag, it will always output ",(0,r.kt)("inlineCode",{parentName:"p"},'"success": true'),", even if the filename was invalid")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'chia rpc harvester delete_plot \'{"filename": "/plots/plot-k25-2022-07-11-19-22-a2ece0fd13e017f7b88911be5f91aa1e1866c89964c863f743f5c92e07118805.plot"}\'\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"get_plots"},(0,r.kt)("inlineCode",{parentName:"h3"},"get_plots")),(0,r.kt)("p",null,"Functionality: List all local plots"),(0,r.kt)("p",null,"Usage: chia rpc harvester ","[OPTIONS]"," get_plots ","[REQUEST]"),(0,r.kt)("p",null,"Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-j"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--json-file"),(0,r.kt)("td",{parentName:"tr",align:"left"},"FILENAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optionally instead of REQUEST you can provide a json file containing the request data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,r.kt)("p",null,"Request Parameters: None"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The plots will be grouped into three categories:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"failed_to_open_filenames")," - plots that the harvester was unable to open; these plots may be incomplete, corrupted or otherwise damaged"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"not_found_filenames")," - typically these are plots that exist and are readable, but were created under a different key than the current one"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plots")," - a listing of all valid plots that were created with the current key used by the harvester"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"chia rpc harvester get_plots\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "failed_to_open_filenames": [],\n    "not_found_filenames": [\n        "/plots/plot-k25-2022-07-11-21-33-4c01531e1b09b758705d1f12c77028e81cafb79c091330453eb249b089e46471.plot",\n    ],\n    "plots": [\n        {\n            "file_size": 674281385,\n            "filename": "/plots/plot-k25-2023-03-01-14-52-160798793b22b998133bbf5b2021ed70d24feb0e20d040668c685df2c7caf76a_2.plot",\n            "plot_id": "0x160798793b22b998133bbf5b2021ed70d24feb0e20d040668c685df2c7caf76a",\n            "plot_public_key": "0xa82069430a7ef8a6491f8b3a5ec64553a33b86e0a713ad03106879231ae77161a0b860df659dbfbb1cc07b6343e95d62",\n            "pool_contract_puzzle_hash": "0xf5daa5a0d83c6a628782a386aa1f94ff041e29c4da4b9b97f91f4d46563d8e9b",\n            "pool_public_key": null,\n            "size": 25,\n            "time_modified": 1677653720\n        },\n        {\n            "file_size": 674281385,\n            "filename": "/plots/plot-k25-2023-03-01-14-52-160798793b22b998133bbf5b2021ed70d24feb0e20d040668c685df2c7caf76a.plot",\n            "plot_id": "0x160798793b22b998133bbf5b2021ed70d24feb0e20d040668c685df2c7caf76a",\n            "plot_public_key": "0xa82069430a7ef8a6491f8b3a5ec64553a33b86e0a713ad03106879231ae77161a0b860df659dbfbb1cc07b6343e95d62",\n            "pool_contract_puzzle_hash": "0xf5daa5a0d83c6a628782a386aa1f94ff041e29c4da4b9b97f91f4d46563d8e9b",\n            "pool_public_key": null,\n            "size": 25,\n            "time_modified": 1677653720\n        }\n    ],\n    "success": true\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"get_plot_directories"},(0,r.kt)("inlineCode",{parentName:"h3"},"get_plot_directories")),(0,r.kt)("p",null,"Functionality: List all plot directories"),(0,r.kt)("p",null,"Usage: chia rpc harvester ","[OPTIONS]"," get_plot_directories ","[REQUEST]"),(0,r.kt)("p",null,"Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-j"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--json-file"),(0,r.kt)("td",{parentName:"tr",align:"left"},"FILENAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optionally instead of REQUEST you can provide a json file containing the request data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,r.kt)("p",null,"Request Parameters: None"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"chia rpc harvester get_plot_directories\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "directories": [\n        "/plots"\n        "/plots_new"\n    ],\n    "success": true\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"get_routes"},(0,r.kt)("inlineCode",{parentName:"h3"},"get_routes")),(0,r.kt)("p",null,"Functionality: List all available RPC routes"),(0,r.kt)("p",null,"Usage: chia rpc harvester ","[OPTIONS]"," get_routes ","[REQUEST]"),(0,r.kt)("p",null,"Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-j"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--json-file"),(0,r.kt)("td",{parentName:"tr",align:"left"},"FILENAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optionally instead of REQUEST you can provide a json file containing the request data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,r.kt)("p",null,"Request Parameters: None"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "routes": [\n        "/get_plots",\n        "/refresh_plots",\n        "/delete_plot",\n        "/add_plot_directory",\n        "/get_plot_directories",\n        "/remove_plot_directory",\n        "/get_connections",\n        "/open_connection",\n        "/close_connection",\n        "/stop_node",\n        "/get_routes",\n        "/healthz"\n    ],\n    "success": true\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"chia rpc harvester get_routes\n"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"refresh_plots"},(0,r.kt)("inlineCode",{parentName:"h3"},"refresh_plots")),(0,r.kt)("p",null,"Functionality: Refresh all plots from the harvester"),(0,r.kt)("p",null,"Usage: chia rpc harvester ","[OPTIONS]"," refresh_plots ","[REQUEST]"),(0,r.kt)("p",null,"Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-j"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--json-file"),(0,r.kt)("td",{parentName:"tr",align:"left"},"FILENAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optionally instead of REQUEST you can provide a json file containing the request data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,r.kt)("p",null,"Request Parameters: None"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If successful, this command will output ",(0,r.kt)("inlineCode",{parentName:"p"},'"success": true'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"chia rpc harvester refresh_plots\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"remove_plot_directory"},(0,r.kt)("inlineCode",{parentName:"h3"},"remove_plot_directory")),(0,r.kt)("p",null,"Functionality: Remove a directory from the harvester's list of plot directories"),(0,r.kt)("p",null,"Usage: chia rpc harvester ","[OPTIONS]"," remove_plot_directory ","[REQUEST]"),(0,r.kt)("p",null,"Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-j"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--json-file"),(0,r.kt)("td",{parentName:"tr",align:"left"},"FILENAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optionally instead of REQUEST you can provide a json file containing the request data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,r.kt)("p",null,"Request Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Flag"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"dirname"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The full path of the directory to remove")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"As long as this command includes the required ",(0,r.kt)("inlineCode",{parentName:"p"},"dirname")," flag, it will always output ",(0,r.kt)("inlineCode",{parentName:"p"},'"success": true'),", even if the dirname is not in the directory list")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'chia rpc harvester remove_plot_directory \'{"dirname": "/plots_new"}\'\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n'))),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);