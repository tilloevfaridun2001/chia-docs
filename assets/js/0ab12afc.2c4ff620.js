"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6869],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3289:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"Reference Farming Hardware",slug:"/reference-farming-hardware"},i=void 0,s={unversionedId:"farming/reference-farming-hardware",id:"farming/reference-farming-hardware",title:"Reference Farming Hardware",description:"The farming process is very lightweight and can be run with minimal CPU and DRAM resources. The goal of a good farming platform is to have the maximum amount of capacity in the least amount of space, using as little power as possible. In other words, the priority for a farming platform, independent of obtaining storage for the lowest cost possible, is to have the highest amount of TB/W in a small space.",source:"@site/docs/farming/reference-farming-hardware.md",sourceDirName:"farming",slug:"/reference-farming-hardware",permalink:"/reference-farming-hardware",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/farming/reference-farming-hardware.md",tags:[],version:"current",frontMatter:{title:"Reference Farming Hardware",slug:"/reference-farming-hardware"},sidebar:"tutorialSidebar",previous:{title:"Checking Farm Health",permalink:"/checking-farm-health"},next:{title:"Farming FAQ",permalink:"/farming-faq"}},l={},p=[{value:"DIY Farms",id:"diy-farms",level:2},{value:"Farming over 2200 x K32 plots in mostly under 1 second..",id:"farming-over-2200-x-k32-plots-in-mostly-under-1-second",level:3},{value:"Desktop Farming",id:"desktop-farming",level:2},{value:"Examples",id:"examples",level:3},{value:"JBOD, DAS (direct-attached storage)",id:"jbod-das-direct-attached-storage",level:2},{value:"Example",id:"example",level:3},{value:"NAS Farming",id:"nas-farming",level:2},{value:"Examples",id:"examples-1",level:3}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The farming process is very lightweight and can be run with minimal CPU and DRAM resources. The goal of a good farming platform is to have the maximum amount of capacity in the least amount of space, using as little power as possible. In other words, the priority for a farming platform, independent of obtaining storage for the lowest cost possible, is to have the highest amount of TB/W in a small space."),(0,n.kt)("h2",{id:"diy-farms"},"DIY Farms"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Building your own rig as illustrated below requires solid IT skills and knowledge of how to safely handle electrical components. In some places these builds are not lawful without being a licensed electrician. Replicate at your own risk! Keep this far away from kids!")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Farming productively")," (03/19/2021 through 04/04/2021), 163 blocks / 326 XCH at network space 120 ~ 200 PiB."),(0,n.kt)("p",null,"There are many unique DIY builds in the farming hardware channel that find unique uses for repurposing existing hardware to mount drives.\nHere a build from early community user that houses 32 drives farming off a ",(0,n.kt)("a",{parentName:"p",href:"https://rockpi.org/rockpi4"},"RockPi4")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.amazon.com/dp/B07KHRLSTT/ref=cm_sw_r_cp_awdb_imm_t1_1DEK038PXEQEHDMAR6F8"},"Sabrent USB hubs")," for an average power consumption of ~250W & ~5.6kWh per day (last 30 days) - easily making it one of the most power-efficient farms built so far!"),(0,n.kt)("p",null,"Parts list (prices change constantly):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"32x Hard drives, different sizes and models from sizes 3 to 16 TB"),(0,n.kt)("li",{parentName:"ul"},"32x USB3/SATA PCB boards, re-used from shucking external hard drives ",(0,n.kt)("a",{parentName:"li",href:"https://www.ebay.com/itm/SEAGATE-Expansion-STEB8000100-ASM1153-94V-0-PCB-Sata-USB-Replacement-Board/293098894236"},"but can also be ordered online")),(0,n.kt)("li",{parentName:"ul"},"32x 12V DC power cables, re-used from shucking external hard drives"),(0,n.kt)("li",{parentName:"ul"},"1x ",(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/gp/product/B085G65K3Y"},"MEAN WELL RSP-500-12 DC Power Supply 500W/12V/42A"),", $85"),(0,n.kt)("li",{parentName:"ul"},"1x ",(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/gp/product/B0000510ZO"},"Replacement Power Cable, 3 Pin Connector"),", $4 (PSU does not come with it)"),(0,n.kt)("li",{parentName:"ul"},"2x ",(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/gp/product/B07KHRLSTT"},"Sabrent 16-Port USB 3.0 Data HUB"),", $69"),(0,n.kt)("li",{parentName:"ul"},"1x ",(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/gp/product/B01HQ9ENJG"},"SMAKN 4 USB Car Charger Power Supply Step Down Module DC 9-40V to 5V 6A"),", $10"),(0,n.kt)("li",{parentName:"ul"},"0.1x ",(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/GS-Power-Aluminum-Primary-Trailer/dp/B088QG9WG3/"},"8 AWG Copper Wire"),", $34 (this wire is used to connect power dist. bank with power supply)"),(0,n.kt)("li",{parentName:"ul"},"2x ",(0,n.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/737"},"Power Distribution Banks"),", $2"),(0,n.kt)("li",{parentName:"ul"},"2x ",(0,n.kt)("a",{parentName:"li",href:"https://www.homedepot.com/p/Rubbermaid-68-in-Single-Track-Upright-for-Wood-or-Wire-Shelving-FG4A7501UTLTY/100133076"},"Single Shelf Upright"),", $8"),(0,n.kt)("li",{parentName:"ul"},"a handful of metal screws and nuts"),(0,n.kt)("li",{parentName:"ul"},"1x ",(0,n.kt)("a",{parentName:"li",href:"https://shop.allnetchina.cn/products/rock-pi-4-model-a-board-only-no-wlan-bluetooth-poe?variant=15971694084198"},"Rock Pi 4A 4GB"),", $65"),(0,n.kt)("li",{parentName:"ul"},"1x ",(0,n.kt)("a",{parentName:"li",href:"https://shop.allnetchina.cn/products/heatsink-for-rock-pi-4"},"Aluminum Heat Sink for Rock Pi 4"),", $8"),(0,n.kt)("li",{parentName:"ul"},"1x and optional ",(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/gp/product/B07G95FFN3"},"Kasa Smart HS300 Plug Power Strip"),", $69 (this can be used to monitor power consumption and control power remotely via smart phone)")),(0,n.kt)("p",null,"(approx. $179.02 US for 2 Rock PI 4 & matching heat sink tax/shipping included)\nTotal: ~ $350 US (hard drives & UB3/SATA PCB not included : -)"),(0,n.kt)("p",null,"(approx. 240W for 16x 3T HDD + 16x 10-16T HDD, less than 1W per TB, can be much improved when 3T HDD are replaced with larger drives)"),(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/61642896/108285617-7db36600-7155-11eb-82bb-34c0665d45a2.jpg",width:"700"}),(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/61642896/108290337-2a91e100-715e-11eb-9aab-8216c1760966.jpg",width:"700"}),(0,n.kt)("h3",{id:"farming-over-2200-x-k32-plots-in-mostly-under-1-second"},"Farming over 2200 x K32 plots in mostly under 1 second.."),(0,n.kt)("p",null,"With the new consensus plots are probed very regularly. No issue for the RockPi4 to keep up with."),(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/61642896/108285566-59f02000-7155-11eb-83eb-29aea9fa023e.PNG",width:"900"}),(0,n.kt)("p",null,"Plots with proofs for submission are found on a regular basis with over 2250x K32, providing the proof still no more than one second, with currently 22 PiB of total netspace."),(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/61642896/108290839-2c0fd900-715f-11eb-9067-9d8c885a73f0.PNG",widt:"700"}),(0,n.kt)("h2",{id:"desktop-farming"},"Desktop Farming"),(0,n.kt)("p",null,"A desktop in a full tower can house between 12-16 drives. This is a great setup for small farmers as desktops are the easiest to build and manage for PC enthusiasts. A full tower case that houses many drives can be found from many different vendors at a low cost. Typical desktop motherboards contain between 6-10 SATA ports, so expanding past that will also require a SAS HBA.\nPros \u2013 cheap, easy to configure and customize\nCons \u2013 need to build yourself and source"),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.corsair.com/us/en/Categories/Products/Cases/Obsidian-Series%E2%84%A2-750D-Full-Tower-ATX-Case/p/CC-9011035-WW"},"Obsidian Series\u2122 750D Full Tower ATX Case")),(0,n.kt)("img",{src:"https://preview.redd.it/xd8bgja34vg61.png?width=960&crop=smart&auto=webp&s=b4879c70c0afc1a79a0157b9d1f3abbc61e3c590",width:"300"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/DataHoarder/comments/lhp1g7/first_nas_build_update_corsair_750d/"},"Source for pic")),(0,n.kt)("p",null,"A desktop board can be put into an easily obtainable ",(0,n.kt)("a",{parentName:"p",href:"https://www.amazon.com/dp/B0091IZ1ZG/ref=cm_sw_em_r_mt_dp_RQRJF9S2PHGBPC6DQ90D"},"Rosewill 4U Server Chassis Case"),". This case features up to 16 drives and 7 fans included, and just needs a standard desktop PSU to get going."),(0,n.kt)("h2",{id:"jbod-das-direct-attached-storage"},"JBOD, DAS (direct-attached storage)"),(0,n.kt)("p",null,'A JBOD, or "Just a bunch of disks" is a device dedicated to housing a large number of hard disk drives, and does not contain any integrated compute resources. A JBOD is typically made up of an enclosure, enclosure slots that identify each drive individually, a SAS expander and backplane, fans, and power supplies. All the disks in a JBOD can be accessed by a single SAS cable connected to a host server or desktop through a HBA (host bus adapter) which converts a PCIe slot to SAS.'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.supermicro.com/a_images/products/Chassis/4U/SC847-RJBOD_spec.jpg",alt:"SM45"})),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("p",null,"Mainstream JBOD \u2013 45 disks in 4U chassis. Referred to in the farming channel as the SM45, this can be found on eBay for $300-400 making it very cost-efficient for medium to large size farms\n",(0,n.kt)("a",{parentName:"p",href:"https://www.supermicro.com/en/products/chassis/4U/847/SC847E16-RJBOD1"},"Supermicro SuperChassis 847E16-RJBOD1")),(0,n.kt)("p",null,"Recommended HBAs to attach to host - LSI 9200-8e ",(0,n.kt)("a",{parentName:"p",href:"https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=LSI+9200-8e&_sacat=0"},"(ebay)"),", 9200-16e ",(0,n.kt)("a",{parentName:"p",href:"https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1311&_nkw=lsi+sas9200-16e&_sacat=0"},"(ebay)")," along with SFF-8088 to SFF-8088 1M External SAS Cable, or 9300 ",(0,n.kt)("a",{parentName:"p",href:"https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1311&_nkw=lsi+9300&_sacat=0"},"(ebay)")," or 9400-8e ",(0,n.kt)("a",{parentName:"p",href:"https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1311&_nkw=9400-8e&_sacat=0"},"(ebay)")," with SAS SFF-8644 to SFF-8088 cable"),(0,n.kt)("p",null,"High drive count \u2013 90 disks in 4U chassis. highest density on the market, but typically goes for $1200-2000 used.\n",(0,n.kt)("a",{parentName:"p",href:"https://www.supermicro.com/en/products/chassis/4U/946/SC946ED-R2KJBOD"},"Supermicro SuperChassis 946ED-R2KJBOD")),(0,n.kt)("img",{src:"https://www.supermicro.com/CDS_Image/uploads/chassis/sc946ed_ad_pull-out_new_20150727.jpg",width:"300"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pros"),"\nHigh number of slots. Fully integrated power supplies and fans. Uses SAS enclosure management to identify slots in software and identify a failed device with an LED locate function. Can use SAS or SATA drives."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cons"),"\nFans can be loud. Heavy. Requires data center rack to be mounted correctly."),(0,n.kt)("h2",{id:"nas-farming"},"NAS Farming"),(0,n.kt)("p",null,"A NAS, or networked attached storage, is a device dedicated to having hard drives included in a backplane and a lightweight CPU and DRAM. NAS serves storage through the network (as opposed to DAS, or direct-attached storage)"),(0,n.kt)("h3",{id:"examples-1"},"Examples"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.synology.com/en-us/products/DS1821+"},"Synology DiskStation DS1821+")),(0,n.kt)("img",{src:"https://www.synology.com/img/products/detail/DS1821plus/heading@2x.png",width:"300"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pros")," \u2013 high number of drives in small space, extremely power efficient"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cons")," \u2013 expensive compared to other options, plugin required for farmer or harvester (not complete yet), typically setup with redundancy for data protection which is not required for farming. SATA drives only (which is fine for most)"))}m.isMDXComponent=!0}}]);