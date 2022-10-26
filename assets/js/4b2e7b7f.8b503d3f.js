"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={title:"Moving Plots",slug:"/moving-plots"},i=void 0,l={unversionedId:"plotting/moving-plots",id:"plotting/moving-plots",title:"Moving Plots",description:"Plots are just a static file. Plots can be moved from one folder/directory to another, and even to another machine (of a different operating system). It may also be mounted from an external USB drive or over the network.",source:"@site/docs/plotting/moving-plots.md",sourceDirName:"plotting",slug:"/moving-plots",permalink:"/moving-plots",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/plotting/moving-plots.md",tags:[],version:"current",frontMatter:{title:"Moving Plots",slug:"/moving-plots"},sidebar:"tutorialSidebar",previous:{title:"SSD Endurance",permalink:"/ssd-endurance"},next:{title:"Plotting FAQ",permalink:"/plotting-faq"}},p={},s=[],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Plots are ",(0,r.kt)("em",{parentName:"p"},"just")," a static file. Plots can be moved from one folder/directory to another, and even to another machine (of a different operating system). It may also be mounted from an external USB drive or over the network."),(0,r.kt)("h1",{id:"moving-plots-within-the-same-machine"},"Moving plots within the same machine"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Move the plot file"),(0,r.kt)("li",{parentName:"ol"},"Add the new plot directory",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For command line: do ",(0,r.kt)("inlineCode",{parentName:"li"},"chia plots add -d '/Users/example/folder'")),(0,r.kt)("li",{parentName:"ul"},"For GUI: go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Farmer")," tab and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Add plots"),", and select the new directory.")))),(0,r.kt)("p",null,"A trick is to rename a plot file from ",(0,r.kt)("em",{parentName:"p"},".plot to "),".plot-mv, copy/move it, and rename it back. This way the harvester will not see it as bad if the copy hasn't completed yet."),(0,r.kt)("h1",{id:"moving-plots-to-a-different-machine"},"Moving plots to a different machine"),(0,r.kt)("p",null,"Pre-requisite: You'd need to have the same keys on the new machine."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install Chia on the new machine"),(0,r.kt)("li",{parentName:"ol"},"Find your private keys using ",(0,r.kt)("inlineCode",{parentName:"li"},"chia keys show --show-mnemonic-seed"),' on the old machine, or on the UI by clicking on "Keys".'),(0,r.kt)("li",{parentName:"ol"},"Copy the 24 mnemonic words (this is your private key) and add them to the new machine using ",(0,r.kt)("inlineCode",{parentName:"li"},"chia keys add")),(0,r.kt)("li",{parentName:"ol"},"Move the plot file"),(0,r.kt)("li",{parentName:"ol"},"Add the new plot directory",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For command line: do ",(0,r.kt)("inlineCode",{parentName:"li"},"chia plots add -d '/Users/example/folder'")),(0,r.kt)("li",{parentName:"ul"},"For GUI: go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Farmer")," tab and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Add plots"),", and select the new directory.")))),(0,r.kt)("p",null,"After following these steps, and restarting your farmer, the new plots should be visible."),(0,r.kt)("h1",{id:"plots-checking"},"Plots checking"),(0,r.kt)("p",null,"It's good to check your plots periodically to ensure that it is not corrupted for whatever reason."),(0,r.kt)("p",null,"You can check if they are working by running ",(0,r.kt)("inlineCode",{parentName:"p"},"chia plots check")," or using the UI and checking if the plots are visible."),(0,r.kt)("h1",{id:"farming-from-multiple-source-plots"},"Farming from multiple source plots"),(0,r.kt)("p",null,"If you would like to farm on many machines, but only run one full node and farmer (to save disk space, bandwidth, and keep private keys safer), you should ",(0,r.kt)("a",{parentName:"p",href:"/farming-on-many-machines"},"run one harvester per machine"),"."))}m.isMDXComponent=!0}}]);