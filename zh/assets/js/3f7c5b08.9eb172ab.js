"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[700],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return n?a.createElement(f,i(i({ref:t},h),{},{components:n})):a.createElement(f,i({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={title:"Foliage",slug:"/consensus-foliage"},i=void 0,s={unversionedId:"consensus/foliage",id:"consensus/foliage",title:"Foliage",description:"In the previous diagrams, there is no place for farmers to specify their rewards, since all blocks are canonical.",source:"@site/docs/consensus/foliage.md",sourceDirName:"consensus",slug:"/consensus-foliage",permalink:"/zh/consensus-foliage",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/consensus/foliage.md",tags:[],version:"current",frontMatter:{title:"Foliage",slug:"/consensus-foliage"},sidebar:"tutorialSidebar",previous:{title:"Overflow Blocks and Weight",permalink:"/zh/overflow-blocks"},next:{title:"Epoch and Difficulty",permalink:"/zh/epoch-and-difficulty"}},l={},c=[{value:"Transaction Block Time",id:"transaction-block-time",level:3}],h={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the previous diagrams, there is no place for farmers to specify their rewards, since all blocks are canonical.\nThere is also no place to include transactions. Everything we have talked about so far is the trunk of the blockchain."),(0,o.kt)("p",null,"Farmers have no say in how their block is constructed in the trunk, since they must use the exact proof of space, VDFs, and signatures that are specified.\nIn order to include farming rewards, as well as transactions, in the system, we must introduce an additional component of blocks called ",(0,o.kt)("em",{parentName:"p"},"foliage"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Trunk"),": The component of blocks and the blockchain which includes VDFs, proofs of space, PoSpace signatures, challenges, and previous trunk blocks, and is completely canonical. The trunk never refers to the foliage chain."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Foliage"),": The component of blocks and the blockchain which includes specification of where rewards should go, which transactions should be included, and what the previous foliage block is. This is up to the farmer to decide and is grindable, so it can never be used as input to the challenges."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Re-org"),": A re-org (or reorganization) is when a node\u2019s view of the peak changes, such that the old view contains a block that is not included in the new view (some block has been reversed). Both trunk and foliage re-orgs are possible, but should be rare in practice, and low in depth."),(0,o.kt)("p",null,"In figure 11 below we can see that the foliage is added to blocks to produce an additional chain. This foliage includes a hash of the previous foliage, a reward block hash, and a signature. These foliage pointers are separate from the trunk chain, and are not canonical. That is, farmers could theoretically create a foliage re-org where foliage is replaced, but the exact same trunk (proofs of space and time) are used."),(0,o.kt)("p",null,"To prevent a foliage re-org, honest farmers only create one foliage block per block. As soon as one honest farmer has added a foliage block, the foliage becomes impossible to re-org beyond that height with the same PoSpace, since that farmer will not sign again with the same PoSpace."),(0,o.kt)("p",null,"Furthermore, blocks like B3, which come parallel with another foliage block (B2), do not have to sign the previous foliage block, since they do not necessarily have enough time to see it."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'By "coming in parallel", we mean that the second block\u2019s signage point occurs before the first block\'s infusion point.')),(0,o.kt)("p",null,"The red arrows in the diagram represent a foliage pointer that is signed by the plot key for the proof of space in that block. The gray arrows represent a hash pointer which is not signed by the plot key (therefore the gray arrow in B3 can be replaced if B2 changes or is withheld). This prevents attacks where B2 modifies their block and forces B3 to re-org."),(0,o.kt)("p",null,"Blocks which have red pointers are also eligible to create transactions, and are therefore called transaction blocks."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A block is a transaction block if and only if it is the first block whose signage point occurs after the infusion of the previous transaction block.")),(0,o.kt)("p",null,"In the diagram, sp3 comes before B2, (a transaction block, and the previous block of B3), so B3 cannot be a transaction block."),(0,o.kt)("p",null,"The red arrows provide security by burying foliage blocks, but the gray arrows do not. The purpose of the gray arrows is to maintain a linked list in the foliage, and to reduce complexity in implementations. However, blocks with gray arrows pointing to them do get buried in the next-next block."),(0,o.kt)("figure",null,(0,o.kt)("img",{src:"/img/foliage.png",alt:"drawing",width:"1400"}),(0,o.kt)("figcaption",null,"Figure 11: Foliage blocks and trunk blocks. Blocks B1, B2, and B4 have transactions and have red pointers (pointers to last block). Note that the start of the sub-slot is also a signage point.")),(0,o.kt)("p",null,"The block hash is a hash of the entire foliage and trunk block. Re-orgs work on block hashes. Even if we see a chain with the same proofs of space and time, as long as the foliages are different, the blocks will have different hashes."),(0,o.kt)("p",null,"Note that the farmers of blocks B2 and B3 might both have a chance to create the block, so they must both provide the signed pointer and transactions. However, any transaction block can be included as a normal block as well, and since B2 and B3 are in parallel, only one of them can make a transaction block."),(0,o.kt)("p",null,"While all blocks still choose the puzzle hashes of where their rewards go, those transactions do not get included into the blockchain until the next transaction block."),(0,o.kt)("h3",{id:"transaction-block-time"},"Transaction Block Time"),(0,o.kt)("p",null,"The average time between transaction blocks is 52 seconds. Several values are required to calculate this average:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sub-slot time = 600 seconds"),(0,o.kt)("li",{parentName:"ul"},"Signage point time = 64 per sub-slot, or 600/64 = 9.375 seconds"),(0,o.kt)("li",{parentName:"ul"},"Average block time = 32 per sub-slot, or 600/32 = 18.75 seconds"),(0,o.kt)("li",{parentName:"ul"},"Minimum signage points from current signage point until infusion_iterations is reached = 3 (See the ",(0,o.kt)("a",{parentName:"li",href:"/signage-and-infusion-points"},"Signage and Infusion Points page")," for more info.)"),(0,o.kt)("li",{parentName:"ul"},"Minimum time for infusion_iterations to be reached (and therefore, minimum time between transaction blocks) = 3 ","*"," (600/64) = 28.125 seconds"),(0,o.kt)("li",{parentName:"ul"},"Average signage points until infusion_iterations is reached is slightly more than 3.5 (must wait 3 signage points, plus an average wait of about 50% of the next signage point), or around 3.5 ","*"," 9.375 = 32.8125 seconds."),(0,o.kt)("li",{parentName:"ul"},"To create a transaction block, infusion_iterations first must be met, and then the next block some seconds afterwards will be a transaction block. The total average time for this to happen is around 52 seconds."),(0,o.kt)("li",{parentName:"ul"},"The formal equation is ",(0,o.kt)("img",{src:"/img/block-time-calc.png",alt:"(1/(e^(0.5)-1)+4)*9.375",width:"200"})," or ",(0,o.kt)("inlineCode",{parentName:"li"},"(1/(e^(0.5)-1)+4)*9.375")," which equals 51.95 seconds.")),(0,o.kt)("p",null,"The time between transaction blocks was deliberately chosen for a specific game-theoretic reason: If transaction blocks occurred at the same rate but there were no empty blocks between them, re-orgs and bribery attacks would be easier to pull off."),(0,o.kt)("p",null,"Additionally, the fact that there are empty blocks between transaction blocks provides several benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If blocks were created at the same rate and all of them contained transactions, low-power machines such as the Raspberry Pi wouldn't be able to keep up with the chain and therefore wouldn't be supported."),(0,o.kt)("li",{parentName:"ul"},"Empty blocks can also help dampen the effect of the chain slowing down, for example during a dust storm."),(0,o.kt)("li",{parentName:"ul"},"Finally, empty blocks help to smooth farmers' rewards.")))}p.isMDXComponent=!0}}]);