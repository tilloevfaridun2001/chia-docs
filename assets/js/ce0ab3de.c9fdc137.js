"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1861],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(t),h=a,m=f["".concat(c,".").concat(h)]||f[h]||p[h]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6318:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const o={title:"Farmers",slug:"/farmer-architecture"},i=void 0,s={unversionedId:"architecture/farmers",id:"architecture/farmers",title:"Farmers",description:"Chia's farmers are analogous to Bitcoin's miners. They earn block rewards and fees by finding valid proofs of space inside their stored plots. The farmer processes don't maintain a copy of the blockchain, but they trust a full node to provide updates. The full node and farmer processes communicate with each other using the farmer protocol.",source:"@site/docs/architecture/farmers.md",sourceDirName:"architecture",slug:"/farmer-architecture",permalink:"/farmer-architecture",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/architecture/farmers.md",tags:[],version:"current",frontMatter:{title:"Farmers",slug:"/farmer-architecture"},sidebar:"tutorialSidebar",previous:{title:"Full Nodes",permalink:"/full-node-architecture"},next:{title:"Harvesters",permalink:"/harvester-architecture"}},c={},l=[],u={toc:l};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Chia's farmers are analogous to Bitcoin's miners. They earn block rewards and fees by finding valid proofs of space inside their stored plots. The farmer processes don't maintain a copy of the blockchain, but they trust a full node to provide updates. The full node and farmer processes communicate with each other using the farmer protocol."),(0,a.kt)("p",null,"Farmers communicate with harvesters (individual machines, including the farmer machine, that actually store the plots) through the harvester protocol."),(0,a.kt)("p",null,"Farmers operate by waiting for updates from a full node, which gives them new signage points (equivalent to a lottery's winning numbers) approximately every nine seconds. Farmers then send the signage point to each harvester, to check whether any winning proofs of space exist. If the harvester finds any valid proofs, it sends them to the farmer, which separates them into two categories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Full proofs must match or surpass the quality required by the network's difficulty level. These proofs are sent to the full node, which then creates a new block."),(0,a.kt)("li",{parentName:"ul"},"Partial proofs are used by pools to approximate a node's total storage.")),(0,a.kt)("p",null,"Farmers also have a private key, which is used for both signing blocks when a winning proof is found, as well as for signing partial proofs, which are then sent to pools."))}p.isMDXComponent=!0}}]);