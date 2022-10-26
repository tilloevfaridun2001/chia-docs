"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6973],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),h=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=h(a),u=r,m=f["".concat(l,".").concat(u)]||f[u]||p[u]||n;return a?o.createElement(m,i(i({ref:t},c),{},{components:a})):o.createElement(m,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var h=2;h<n;h++)i[h]=a[h];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}f.displayName="MDXCreateElement"},1834:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>h});var o=a(7462),r=(a(7294),a(3905));const n={title:"Proof of Space",slug:"/proof-of-space"},i=void 0,s={unversionedId:"consensus/proof-of-space",id:"consensus/proof-of-space",title:"Proof of Space",description:"A Proof of Space protocol is one in which:",source:"@site/docs/consensus/proof-of-space.md",sourceDirName:"consensus",slug:"/proof-of-space",permalink:"/zh/proof-of-space",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/consensus/proof-of-space.md",tags:[],version:"current",frontMatter:{title:"Proof of Space",slug:"/proof-of-space"},sidebar:"tutorialSidebar",previous:{title:"Consensus Introduction",permalink:"/zh/consensus-intro"},next:{title:"Proof of Time",permalink:"/zh/proof-of-time"}},l={},h=[{value:"Plotting",id:"plotting",level:2},{value:"Farming",id:"farming",level:2},{value:"Verifying",id:"verifying",level:2}],c={toc:h};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Proof of Space protocol is one in which:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Verifier can send a challenge to a Prover."),(0,r.kt)("li",{parentName:"ul"},"The Prover can demonstrate to the Verifier that the Prover is reserving a specific amount of storage space at that precise time.")),(0,r.kt)("p",null,"The Proof of Space protocol has three components: plotting, proving/farming, and verifying. For more info, see our ",(0,r.kt)("a",{parentName:"p",href:"https://www.chia.net/assets/Chia_Proof_of_Space_Construction_v1.1.pdf"},"Details of the chiapos specification"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chiapos"},"reference implementation"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"chia-architecture",src:a(9166).Z,width:"1211",height:"583"})),(0,r.kt)("h2",{id:"plotting"},"Plotting"),(0,r.kt)("p",null,"Plotting is the process by which a Prover, who we refer to as a ",(0,r.kt)("em",{parentName:"p"},"farmer"),", initializes a certain amount of space. To become a farmer, one must have at least 101.4 GiB available to reserve on their computer (the minimum spec is a ",(0,r.kt)("a",{parentName:"p",href:"/chia-on-raspberry-pi"},"Raspberry Pi 4"),"). There is no upper limit to the size of a Chia farm. Several farmers have multi-PiB farms."),(0,r.kt)("p",null,"As of Chia 1.2.7, a k32 plot can be created in around five minutes with a high-end machine with 400 GiB of RAM, or six hours with a normal commodity machine, or 12 hours with a slow machine using one CPU core and a few GB of RAM. Opportunities still remain for huge speedups. Furthermore, each plot only needs to be created once; a farmer can farm with the same plots for many years."),(0,r.kt)("p",null,"Plot sizes are determined by a k parameter, where ",(0,r.kt)("inlineCode",{parentName:"p"},"space = 780 * k * pow(2, k - 10)"),", with a minimum k of 32 (101.4 GiB). The Proof of Space construction is based on ",(0,r.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2017/893.pdf",title:"Beyond Hellman's Time-Memory Trade Offs with Applications to Proofs of Space"},"Beyond Hellman"),", but it is nested six times (thereby creating seven tables), and it contains other heuristics to make it practical."),(0,r.kt)("p",null,'Each of the seven tables in a plot is filled with random-looking data that cannot be compressed. Each table has 2^k entries. Each entry in table i contains two pointers to table i-1 (the previous table). Finally, each table-1 entry contains a pair of integers between 0 and 2^k, called "x-values." A proof of space is a collection of 64 x-values that have a certain mathematical relationship. The actual on-disk structure and the algorithm required to generate it are quite ',(0,r.kt)("a",{parentName:"p",href:"https://www.chia.net/assets/Chia_Proof_of_Space_Construction_v1.1.pdf"},"complicated"),", but this is the general idea."),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/plot.png",alt:"drawing"}),(0,r.kt)("figcaption",null,"Figure 2: Structure of a plot file. The 64 red x-values represent the proof, the 2 green x-values represent the quality.")),(0,r.kt)("p",null,"Once the Prover has initialized 101.4 GiB, they are ready to receive a challenge and create a proof. One attractive property of this scheme is that it is non-interactive unless the farmer chooses ",(0,r.kt)("a",{parentName:"p",href:"/pool-architecture"},"plot NFT style pooling"),": no registration or online connection is required to create a plot using the original plot format. Nothing hits the blockchain until a reward is won, similar to PoW. For pool portable plots, a farmer only needs a few mojos to create a plot NFT before plotting and then everything has the same characteristics from there."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/plotting-faq"},"Plotting FAQ page")," for more info."),(0,r.kt)("h2",{id:"farming"},"Farming"),(0,r.kt)("p",null,"Farming is the process by which a farmer receives a sequence of 256-bit challenges to prove that they have legitimately put aside a defined amount of storage. In response to each challenge, the farmer checks their plots, generates a proof, and submits any winning proofs to the network for verification."),(0,r.kt)("p",null,"For each eligible plot (explained later), a farmer uses the following procedure to generate a full proof of space. Keep in mind that a plot consists of 7 tables (T1-T7) of approximately the same size, as well as 3 checkpoint tables (C1-C3), which are much smaller:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The farmer receives a challenge from the VDF"),(0,r.kt)("li",{parentName:"ol"},"For each eligible plot, extract a k-sized value from the challenge, where ",(0,r.kt)("em",{parentName:"li"},"k")," denotes the size of the plot (k32, k33, etc)"),(0,r.kt)("li",{parentName:"ol"},"Look in the C2 table for a location at which to start scanning the C1 table"),(0,r.kt)("li",{parentName:"ol"},"Scan the C1 table for the location at which to start scanning the C3 table"),(0,r.kt)("li",{parentName:"ol"},"Read either one or two C3 parks. The number of parks to read depends on the index and value calculated from the C1 table. This requires an average of 5000 reads (the maximum is 10 000). These are sequential reads of 4 bytes (for an average total of 20 KiB)"),(0,r.kt)("li",{parentName:"ol"},"Grab all the f7 entries matching the challenge value (which can be 0 or more), along with the index in the table at which they were found"),(0,r.kt)("li",{parentName:"ol"},"For each matching f7 value, read T7 at the same index where the f7 value was found in its own table, and grab that entry, which is an index into T6"),(0,r.kt)("li",{parentName:"ol"},"The T6 index contains one ",(0,r.kt)("em",{parentName:"li"},"line point")," with two ",(0,r.kt)("em",{parentName:"li"},"back pointers")," to T5, four to T4, eight to T3, sixteen to T2 and thirty-two to T1. Each back pointer requires 1 read, so a total of 64 disk reads (1 index from T7, 63 back pointers) are performed to fetch the whole tree of 64 x-values.")),(0,r.kt)("p",null,"Since most proofs generated by this process are not good enough (as discussed in the ",(0,r.kt)("a",{parentName:"p",href:"/signage-and-infusion-points"},"Signage and Infusion Points page"),') to be submitted to the network for verification, we can optimize this process by only checking one branch of the tree. This branch will return two of the 64 x-values. The position of the x-values will always be consecutive and will depend on the signage point (eg x0 and x1... or x34 and x35). We hash these x-values to produce a random 256-bit "quality string." This is combined with the difficulty and the plot size to generate the required_iterations. If the required_iterations is less than a certain number, the proof can be included in the blockchain. At this point, we look up the whole proof of space.'),(0,r.kt)("p",null,"By only looking up one branch to determine the quality string, we can rule out most proofs. This optimization requires only around 7-9 disk seeks and reads, or about 70-90 ms on a slow hard drive."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Throughout this website, we'll make a simple assumption that a single disk seek requires 10ms. In reality, this is typically 5-10ms, so we're using a conservative estimate."),(0,r.kt)("p",{parentName:"admonition"},"The 10ms estimate also takes into account the time required to transfer data after the seek. While storage industry specs typically assume that large files are being transferred, this does not hold true for Chia farming, where proof lookups only require a tiny amount of data to be transferred. Therefore, for this website, it's safe to assume the transfer is almost instant.")),(0,r.kt)("p",null,"Chia also uses a further optimization to disqualify a certain proportion of plots from eligibility for each challenge. This is referred to as the ",(0,r.kt)("em",{parentName:"p"},"plot filter"),". The current requirement is that the hash of the plot ID, challenge, and signage point starts with 9 zeros. This excludes 511 out of every 512 plots. The filter hurts everyone equally (except for ",(0,r.kt)("a",{parentName:"p",href:"/consensus-attacks#replotting"},"replotting attackers"),"), and is therefore fair. The plot filter is discussed in greater detail in the ",(0,r.kt)("a",{parentName:"p",href:"/signage-and-infusion-points"},"Signage and Infusion Points page"),"."),(0,r.kt)("p",null,"The plot filter effectively reduces the amount of resources required for farming by 512x -- each plot only requires a few disk reads every few minutes. A farmer with 1 PiB of storage (10,000 plots) will only have an average of 20 plots that pass the filter for each challenge. Even if these plots all are stored on slow HDDs, and connected to a single Raspberry Pi, the average time required to respond to each challenge will be less than two seconds. This is well within the limits to avoid missing out on any challenges."),(0,r.kt)("p",null,"Each plot file has its own unique private key called a ",(0,r.kt)("em",{parentName:"p"},"plot key"),". The plot ID is generated by hashing the plot public key, the farmer public key, and either the pool public key (for OG plots) or the pool contract puzzle hash (for pooled plots). The requirements for signing a proof of space depend on the type of plots being used. See the ",(0,r.kt)("a",{parentName:"p",href:"/plot-public-keys"},"Plot Public Keys page")," for details on the keys used for plot construction."),(0,r.kt)("p",null,"In practice, the plot key is a 2/2 BLS aggregate public key between a local key stored in the plot and a key stored by the farmer software. For security and efficiency, a farmer may run on one server using this key and signature scheme. This server can then be connected to one or more harvester machines that store the actual plots. Farming requires the farmer key and the local key, but it does not require the pool key, since the pool\u2019s signature can be cached and reused for many blocks."),(0,r.kt)("h2",{id:"verifying"},"Verifying"),(0,r.kt)("p",null,"After the farmer has successfully created a proof of space, the proof can be verified by performing a few hashes and making comparisons between the x-values in the proof. Recall that the proof is a list of 64 x-values, where each x-value is k bits long. For a k32 this is 256 bytes (2048 bits), and is therefore very compact. Verification is very fast, but not quite fast enough to be verified in Solidity on Ethereum (something that would enable trustless transfers between chains), since this verification requires blake3 and chacha8 operations."))}p.isMDXComponent=!0},9166:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/pospace-353b68d6b2441a5106c100e48d31b7d8.png"}}]);