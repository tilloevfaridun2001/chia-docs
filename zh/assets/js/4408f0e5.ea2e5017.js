"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8986],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=f(e,["components","mdxType","originalType","parentName"]),u=s(r),p=a,m=u["".concat(i,".").concat(p)]||u[p]||d[p]||l;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var f={};for(var i in t)hasOwnProperty.call(t,i)&&(f[i]=t[i]);f.originalType=e,f[u]="string"==typeof e?e:a,o[1]=f;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(7462),a=r(7294),l=r(6010),o=r(2466),f=r(6550),i=r(1980),s=r(7392),c=r(12);function u(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,f.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=d(e),[o,f]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,s]=m({queryString:r,groupId:n}),[u,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),_=(()=>{const e=i??u;return p({value:e,tabValues:l})?e:null})();(0,a.useEffect)((()=>{_&&f(_)}),[_]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);f(e),s(e),h(e)}),[s,h,l]),tabValues:l}}var _=r(2389);const k="tabList__CuJ",y="tabItem_LNqP";function b(e){let{className:t,block:r,selectedValue:f,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==f&&(u(t),i(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},o,{className:(0,l.Z)("tabs__item",y,o?.className,{"tabs__item--active":f===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",k)},a.createElement(b,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function N(e){const t=(0,_.Z)();return a.createElement(v,(0,n.Z)({key:String(t)},e))}},829:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>f,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));r(4866),r(5162);const l={sidebar_label:"Offers",title:"Offer RPC",slug:"/offer-rpc"},o=void 0,f={unversionedId:"rpc-reference/offers",id:"rpc-reference/offers",title:"Offer RPC",description:"Note about Windows command escaping",source:"@site/docs/rpc-reference/offers.mdx",sourceDirName:"rpc-reference",slug:"/offer-rpc",permalink:"/zh/offer-rpc",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/rpc-reference/offers.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Offers",title:"Offer RPC",slug:"/offer-rpc"},sidebar:"tutorialSidebar",previous:{title:"NFTs",permalink:"/zh/nft-rpc"},next:{title:"DataLayer",permalink:"/zh/datalayer-rpc"}},i={},s=[{value:"Reference",id:"reference",level:2},{value:"<code>create_offer_for_ids</code>",id:"create_offer_for_ids",level:3},{value:"<code>get_offer_summary</code>",id:"get_offer_summary",level:3},{value:"<code>check_offer_validity</code>",id:"check_offer_validity",level:3},{value:"<code>take_offer</code>",id:"take_offer",level:3},{value:"<code>get_offer</code>",id:"get_offer",level:3},{value:"<code>get_all_offers</code>",id:"get_all_offers",level:3},{value:"<code>cancel_offer</code>",id:"cancel_offer",level:3}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Note about Windows command escaping"),(0,a.kt)("p",null,"This document will use Linux/MacOS RPC syntax. When running rpc commands on Windows, you'll need to escape all quotes with backslashes."),(0,a.kt)("p",null,"For example, here is a typical RPC command on Linux and MacOS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'chia rpc wallet create_new_wallet \'{"wallet_type": "nft_wallet"}\'\n')),(0,a.kt)("p",null,"To run the same command on Windows, you need to escape the quotes with backslashes. In other words, add a \\ before each double quote, such that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"wallet_type" becomes \\"wallet_type\\"'),(0,a.kt)("li",{parentName:"ul"},'"nft_wallet" becomes \\"nft_wallet\\"'),(0,a.kt)("li",{parentName:"ul"},"etc"))),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("h3",{id:"create_offer_for_ids"},(0,a.kt)("inlineCode",{parentName:"h3"},"create_offer_for_ids")),(0,a.kt)("p",null,"Creates a new offer."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"offer_dict"),": A dictionary of the offer to create."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fee:")," An optional fee (in mojos) to include with the offer. Defaults to 0."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"validate_only:")," Defaults to False. Set to True to verify the validity of a potential offer, rather than actually creating an offer.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'async def create_offer_for_ids(\n  self, offer_dict: Dict[uint32, int], fee=uint64(0), validate_only: bool = False\n) -> Tuple[Optional[Offer], TradeRecord]:\n  send_dict: Dict[str, int] = {}\n  for key in offer_dict:\n    send_dict[str(key)] = offer_dict[key]\n\n  res = await self.fetch("create_offer_for_ids", {"offer": send_dict, "validate_only": validate_only, "fee": fee})\n  offer: Optional[Offer] = None if validate_only else Offer.from_bytes(hexstr_to_bytes(res["offer"]))\n  return offer, TradeRecord.from_json_dict_convenience(res["trade_record"], res["offer"])\n')),(0,a.kt)("h3",{id:"get_offer_summary"},(0,a.kt)("inlineCode",{parentName:"h3"},"get_offer_summary")),(0,a.kt)("p",null,"Returns the summary of a specific offer. Works for offers in any state."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"offer:")," The offer to summarize.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'async def get_offer_summary(self, offer: Offer) -> Dict[str, Dict[str, int]]:\n  res = await self.fetch("get_offer_summary", {"offer": bytes(offer).hex()})\n  return res["summary"]\n')),(0,a.kt)("h3",{id:"check_offer_validity"},(0,a.kt)("inlineCode",{parentName:"h3"},"check_offer_validity")),(0,a.kt)("p",null,"Checks whether a specific offer is valid."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"offer:")," The offer to check. The offer is considered valid if it is in any of the following states:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PENDING_ACCEPT"),(0,a.kt)("li",{parentName:"ul"},"PENDING_CONFIRM"),(0,a.kt)("li",{parentName:"ul"},"PENDING_CANCEL")),(0,a.kt)("p",{parentName:"li"},"The offer is no longer valid if it is in any of the following states:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CANCELLED"),(0,a.kt)("li",{parentName:"ul"},"CONFIRMED"),(0,a.kt)("li",{parentName:"ul"},"FAILED")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'async def check_offer_validity(self, offer: Offer) -> bool:\n  res = await self.fetch("check_offer_validity", {"offer": bytes(offer).hex()})\n  return res["valid"]\n')),(0,a.kt)("h3",{id:"take_offer"},(0,a.kt)("inlineCode",{parentName:"h3"},"take_offer")),(0,a.kt)("p",null,"Takes (accepts) a specific offer, with a given fee."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"offer:")," The offer to accept. Must be in the PENDING_ACCEPT state."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fee:")," An optional fee (in mojos) to include with the offer. Defaults to 0.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'async def take_offer(self, offer: Offer, fee=uint64(0)) -> TradeRecord:\n  res = await self.fetch("take_offer", {"offer": bytes(offer).hex(), "fee": fee})\n  return TradeRecord.from_json_dict_convenience(res["trade_record"])\n')),(0,a.kt)("h3",{id:"get_offer"},(0,a.kt)("inlineCode",{parentName:"h3"},"get_offer")),(0,a.kt)("p",null,"Given an offer's unique identifier, return that offer's details."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"trade_id:")," The ID of the offer to examine. Can be retrieved from an offer file by calling ",(0,a.kt)("inlineCode",{parentName:"li"},"cdv inspect spendbundles <offer_file>"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"file_contents:")," Set to True to return a summary for the offer. Defaults to False, which only returns the offer's basic metadata.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'async def get_offer(self, trade_id: bytes32, file_contents: bool = False) -> TradeRecord:\n  res = await self.fetch("get_offer", {"trade_id": trade_id.hex(), "file_contents": file_contents})\n  offer_str = res["offer"] if file_contents else ""\n  return TradeRecord.from_json_dict_convenience(res["trade_record"], offer_str)\n')),(0,a.kt)("h3",{id:"get_all_offers"},(0,a.kt)("inlineCode",{parentName:"h3"},"get_all_offers")),(0,a.kt)("p",null,"Gets all offers for the current wallet. Includes offers in every state."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"file_contents")," Set to True to return a summary for the offer. Defaults to False, which only returns the offer's basic metadata.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'async def get_all_offers(self, file_contents: bool = False) -> List[TradeRecord]:\n  res = await self.fetch("get_all_offers", {"file_contents": file_contents})\n\n  records = []\n  optional_offers = res["offers"] if file_contents else ([""] * len(res["trade_records"]))\n  for record, offer in zip(res["trade_records"], optional_offers):\n    records.append(TradeRecord.from_json_dict_convenience(record, offer))\n\n  return records\n')),(0,a.kt)("h3",{id:"cancel_offer"},(0,a.kt)("inlineCode",{parentName:"h3"},"cancel_offer")),(0,a.kt)("p",null,"Cancel an offer with a specific identifier."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"trade_id:")," The ID of the offer to examine. Can be retrieved from an offer file by calling ",(0,a.kt)("inlineCode",{parentName:"li"},"cdv inspect spendbundles <offer_file>"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fee:")," An optional fee (in mojos) to include with the cancellation. Defaults to 0."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"secure:")," Defaults to True, which means \"cancel on blockchain,\" ie spend the coins being offered and create new coin's in the Maker's wallet. Set to False to cancel locally. See ",(0,a.kt)("a",{parentName:"li",href:"#cancellation",title:"Offer cancellation"},"cancellation")," for more info.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'async def cancel_offer(self, trade_id: bytes32, fee=uint64(0), secure: bool = True):\n  await self.fetch("cancel_offer", {"trade_id": trade_id.hex(), "secure": secure, "fee": fee})\n')))}u.isMDXComponent=!0}}]);