"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8986],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=f(e,["components","mdxType","originalType","parentName"]),d=s(r),p=n,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||l;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var f={};for(var i in t)hasOwnProperty.call(t,i)&&(f[i]=t[i]);f.originalType=e,f.mdxType="string"==typeof e?e:n,o[1]=f;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(7462),n=r(7294),l=r(6010),o=r(2389),f=r(7392),i=r(7094),s=r(2466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:r,block:o,defaultValue:d,values:p,groupId:m,className:_}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=p??h.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),y=(0,f.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:g}=(0,i.U)(),[N,w]=(0,n.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=m){const e=b[m];null!=e&&e!==N&&k.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,r=O.indexOf(t),a=k[r].value;a!==N&&(T(t),w(a),null!=m&&g(m,String(a)))},E=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;r=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;r=O[t]??O[O.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},_)},k.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,n.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,o.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},829:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>f,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));r(5488),r(5162);const l={sidebar_label:"Offers",title:"Offer RPC",slug:"/offer-rpc"},o=void 0,f={unversionedId:"rpc-reference/offers",id:"rpc-reference/offers",title:"Offer RPC",description:"Note about Windows command escaping",source:"@site/docs/rpc-reference/offers.mdx",sourceDirName:"rpc-reference",slug:"/offer-rpc",permalink:"/zh/offer-rpc",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/rpc-reference/offers.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Offers",title:"Offer RPC",slug:"/offer-rpc"},sidebar:"tutorialSidebar",previous:{title:"NFTs",permalink:"/zh/nft-rpc"},next:{title:"DataLayer",permalink:"/zh/datalayer-rpc"}},i={},s=[{value:"Reference",id:"reference",level:2},{value:"<code>create_offer_for_ids</code>",id:"create_offer_for_ids",level:3},{value:"<code>get_offer_summary</code>",id:"get_offer_summary",level:3},{value:"<code>check_offer_validity</code>",id:"check_offer_validity",level:3},{value:"<code>take_offer</code>",id:"take_offer",level:3},{value:"<code>get_offer</code>",id:"get_offer",level:3},{value:"<code>get_all_offers</code>",id:"get_all_offers",level:3},{value:"<code>cancel_offer</code>",id:"cancel_offer",level:3}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Note about Windows command escaping"),(0,n.kt)("p",null,"This document will use Linux/MacOS RPC syntax. When running rpc commands on Windows, you'll need to escape all quotes with backslashes."),(0,n.kt)("p",null,"For example, here is a typical RPC command on Linux and MacOS:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'chia rpc wallet create_new_wallet \'{"wallet_type": "nft_wallet"}\'\n')),(0,n.kt)("p",null,"To run the same command on Windows, you need to escape the quotes, so it looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'chia rpc wallet create_new_wallet \'{\\"wallet_type\\": \\"nft_wallet\\"}\'\n'))),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("h3",{id:"create_offer_for_ids"},(0,n.kt)("inlineCode",{parentName:"h3"},"create_offer_for_ids")),(0,n.kt)("p",null,"Creates a new offer."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"offer_dict"),": A dictionary of the offer to create."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fee:")," An optional fee to include with the offer. Defaults to 0."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"validate_only:")," Defaults to False. Set to True to verify the validity of a potential offer, rather than actually creating an offer.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'async def create_offer_for_ids(\n  self, offer_dict: Dict[uint32, int], fee=uint64(0), validate_only: bool = False\n) -> Tuple[Optional[Offer], TradeRecord]:\n  send_dict: Dict[str, int] = {}\n  for key in offer_dict:\n    send_dict[str(key)] = offer_dict[key]\n\n  res = await self.fetch("create_offer_for_ids", {"offer": send_dict, "validate_only": validate_only, "fee": fee})\n  offer: Optional[Offer] = None if validate_only else Offer.from_bytes(hexstr_to_bytes(res["offer"]))\n  return offer, TradeRecord.from_json_dict_convenience(res["trade_record"], res["offer"])\n')),(0,n.kt)("h3",{id:"get_offer_summary"},(0,n.kt)("inlineCode",{parentName:"h3"},"get_offer_summary")),(0,n.kt)("p",null,"Returns the summary of a specific offer. Works for offers in any state."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"offer:")," The offer to summarize.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'async def get_offer_summary(self, offer: Offer) -> Dict[str, Dict[str, int]]:\n  res = await self.fetch("get_offer_summary", {"offer": bytes(offer).hex()})\n  return res["summary"]\n')),(0,n.kt)("h3",{id:"check_offer_validity"},(0,n.kt)("inlineCode",{parentName:"h3"},"check_offer_validity")),(0,n.kt)("p",null,"Checks whether a specific offer is valid."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"offer:")," The offer to check. The offer is considered valid if it is in any of the following states:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"PENDING_ACCEPT"),(0,n.kt)("li",{parentName:"ul"},"PENDING_CONFIRM"),(0,n.kt)("li",{parentName:"ul"},"PENDING_CANCEL")),(0,n.kt)("p",{parentName:"li"},"The offer is no longer valid if it is in any of the following states:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CANCELLED"),(0,n.kt)("li",{parentName:"ul"},"CONFIRMED"),(0,n.kt)("li",{parentName:"ul"},"FAILED")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'async def check_offer_validity(self, offer: Offer) -> bool:\n  res = await self.fetch("check_offer_validity", {"offer": bytes(offer).hex()})\n  return res["valid"]\n')),(0,n.kt)("h3",{id:"take_offer"},(0,n.kt)("inlineCode",{parentName:"h3"},"take_offer")),(0,n.kt)("p",null,"Takes (accepts) a specific offer, with a given fee."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"offer:")," The offer to accept. Must be in the PENDING_ACCEPT state."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fee:")," An optional fee to include with the offer. Defaults to 0.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'async def take_offer(self, offer: Offer, fee=uint64(0)) -> TradeRecord:\n  res = await self.fetch("take_offer", {"offer": bytes(offer).hex(), "fee": fee})\n  return TradeRecord.from_json_dict_convenience(res["trade_record"])\n')),(0,n.kt)("h3",{id:"get_offer"},(0,n.kt)("inlineCode",{parentName:"h3"},"get_offer")),(0,n.kt)("p",null,"Given an offer's unique identifier, return that offer's details."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"trade_id:")," The ID of the offer to examine. Can be retrieved from an offer file by calling ",(0,n.kt)("inlineCode",{parentName:"li"},"cdv inspect spendbundles <offer_file>"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"file_contents:")," Set to True to return a summary for the offer. Defaults to False, which only returns the offer's basic metadata.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'async def get_offer(self, trade_id: bytes32, file_contents: bool = False) -> TradeRecord:\n  res = await self.fetch("get_offer", {"trade_id": trade_id.hex(), "file_contents": file_contents})\n  offer_str = res["offer"] if file_contents else ""\n  return TradeRecord.from_json_dict_convenience(res["trade_record"], offer_str)\n')),(0,n.kt)("h3",{id:"get_all_offers"},(0,n.kt)("inlineCode",{parentName:"h3"},"get_all_offers")),(0,n.kt)("p",null,"Gets all offers for the current wallet. Includes offers in every state."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"file_contents")," Set to True to return a summary for the offer. Defaults to False, which only returns the offer's basic metadata.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'async def get_all_offers(self, file_contents: bool = False) -> List[TradeRecord]:\n  res = await self.fetch("get_all_offers", {"file_contents": file_contents})\n\n  records = []\n  optional_offers = res["offers"] if file_contents else ([""] * len(res["trade_records"]))\n  for record, offer in zip(res["trade_records"], optional_offers):\n    records.append(TradeRecord.from_json_dict_convenience(record, offer))\n\n  return records\n')),(0,n.kt)("h3",{id:"cancel_offer"},(0,n.kt)("inlineCode",{parentName:"h3"},"cancel_offer")),(0,n.kt)("p",null,"Cancel an offer with a specific identifier."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"trade_id:")," The ID of the offer to examine. Can be retrieved from an offer file by calling ",(0,n.kt)("inlineCode",{parentName:"li"},"cdv inspect spendbundles <offer_file>"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fee:")," An optional fee to include with the cancellation. Defaults to 0."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"secure:")," Defaults to True, which means \"cancel on blockchain,\" ie spend the coins being offered and create new coin's in the Maker's wallet. Set to False to cancel locally. See ",(0,n.kt)("a",{parentName:"li",href:"#cancellation",title:"Offer cancellation"},"cancellation")," for more info.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'async def cancel_offer(self, trade_id: bytes32, fee=uint64(0), secure: bool = True):\n  await self.fetch("cancel_offer", {"trade_id": trade_id.hex(), "secure": secure, "fee": fee})\n')))}u.isMDXComponent=!0}}]);