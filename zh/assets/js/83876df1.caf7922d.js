"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1571],{3905:(c,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>u});var a=t(7294);function o(c,e,t){return e in c?Object.defineProperty(c,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):c[e]=t,c}function i(c,e){var t=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable}))),t.push.apply(t,a)}return t}function r(c){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(c,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(t,e))}))}return c}function n(c,e){if(null==c)return{};var t,a,o=function(c,e){if(null==c)return{};var t,a,o={},i=Object.keys(c);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(o[t]=c[t]);return o}(c,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(c,t)&&(o[t]=c[t])}return o}var l=a.createContext({}),s=function(c){var e=a.useContext(l),t=e;return c&&(t="function"==typeof c?c(e):r(r({},e),c)),t},p=function(c){var e=s(c.components);return a.createElement(l.Provider,{value:e},c.children)},b={inlineCode:"code",wrapper:function(c){var e=c.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(c,e){var t=c.components,o=c.mdxType,i=c.originalType,l=c.parentName,p=n(c,["components","mdxType","originalType","parentName"]),m=s(t),u=o,f=m["".concat(l,".").concat(u)]||m[u]||b[u]||i;return t?a.createElement(f,r(r({ref:e},p),{},{components:t})):a.createElement(f,r({ref:e},p))}));function u(c,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof c||o){var i=t.length,r=new Array(i);r[0]=m;var n={};for(var l in e)hasOwnProperty.call(e,l)&&(n[l]=e[l]);n.originalType=c,n.mdxType="string"==typeof c?c:o,r[1]=n;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5856:(c,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>b,frontMatter:()=>i,metadata:()=>n,toc:()=>s});var a=t(7462),o=(t(7294),t(3905));const i={title:"Serialization Protocol",slug:"/serialization-protocol"},r=void 0,n={unversionedId:"protocol/serialization-protocol",id:"protocol/serialization-protocol",title:"Serialization Protocol",description:"Serialization in Chia refers to how objects are converted into bytes for uses such as transmitting to other nodes, storing on disk, or hashing objects.",source:"@site/docs/protocol/serialization-protocol.md",sourceDirName:"protocol",slug:"/serialization-protocol",permalink:"/zh/serialization-protocol",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/protocol/serialization-protocol.md",tags:[],version:"current",frontMatter:{title:"Serialization Protocol",slug:"/serialization-protocol"},sidebar:"tutorialSidebar",previous:{title:"Networking Protocol",permalink:"/zh/networking-protocol"},next:{title:"Harvester Protocol",permalink:"/zh/harvester-protocol"}},l={},s=[{value:"Streamable Format",id:"streamable-format",level:2},{value:"Examples",id:"examples",level:2},{value:"ProofOfSpace type definition",id:"proofofspace-type-definition",level:3},{value:"Creating and serializing a proof of space",id:"creating-and-serializing-a-proof-of-space",level:3},{value:"Output",id:"output",level:3}],p={toc:s};function b(c){let{components:e,...t}=c;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Serialization in Chia refers to how objects are converted into bytes for uses such as transmitting to other nodes, storing on disk, or hashing objects."),(0,o.kt)("p",null,"For example, a header_hash refers to the sha256 hash of the header of a block, but\nsha256 takes in bytes, so we need a consistent way to convert objects into bytes."),(0,o.kt)("h2",{id:"streamable-format"},"Streamable Format"),(0,o.kt)("p",null,"To prevent consensus issues, the streamable format was designed to be deterministic and easy to implement. All objects in the Chia protocol are transmitted using the streamable format. Furthermore, some database tables use streamable representation as well."),(0,o.kt)("p",null,"The primitives are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sized ints serialized in big endian format, i.e uint64"),(0,o.kt)("li",{parentName:"ul"},"Sized bytes serialized in big endian format, i.e bytes32"),(0,o.kt)("li",{parentName:"ul"},"BLS public keys serialized in bls format (48 bytes)"),(0,o.kt)("li",{parentName:"ul"},"BLS signatures serialized in bls format (96 bytes)"),(0,o.kt)("li",{parentName:"ul"},"bool serialized into 1 byte (0x01 or 0x00)"),(0,o.kt)("li",{parentName:"ul"},"bytes serialized as a 4 byte size prefix and then the bytes."),(0,o.kt)("li",{parentName:"ul"},"ConditionOpcode is serialized as a 1 byte value."),(0,o.kt)("li",{parentName:"ul"},"str serialized as a 4 byte size prefix and then the utf-8 representation in bytes.")),(0,o.kt)("p",null,"An item is one of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"primitive"),(0,o.kt)("li",{parentName:"ul"},"Tuple","[item1, .. itemx]"),(0,o.kt)("li",{parentName:"ul"},"List","[item1, .. itemx]"),(0,o.kt)("li",{parentName:"ul"},"Optional","[item]"),(0,o.kt)("li",{parentName:"ul"},"Custom item")),(0,o.kt)("p",null,"A streamable must be a Tuple at the root level. Iters are serialized in the following way:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A tuple of x items is serialized by appending the serialization of each item."),(0,o.kt)("li",{parentName:"ol"},"A List is serialized into a 4-byte prefix (number of items) and the serialization of each item."),(0,o.kt)("li",{parentName:"ol"},"An Optional is serialized into a 1-byte prefix of 0x00 or 0x01, and if it's one, it's followed by the serialization of the item."),(0,o.kt)("li",{parentName:"ol"},"A Custom item is serialized by calling the .parse method, passing in the stream of bytes into it. And example is a CLVM program.")),(0,o.kt)("p",null,"This format can be implemented very easily, and allows us to hash objects like headers and proofs of space, without complex serialization logic."),(0,o.kt)("p",null,"Note that in the python implementation, we don't use a Tuple at the root level, but instead just use a dataclass with ordered type fields for ease of use. However, it is streamed as a Tuple."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"The streamable specification has been designed to work well with Python using the @streamable decorator available in ",(0,o.kt)("inlineCode",{parentName:"p"},"chia-blockchain"),", but it can work just as well with other programming languages. A class with the @streamable decorator becomes immutable, and has the ",(0,o.kt)("inlineCode",{parentName:"p"},"__bytes__()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".from_bytes(b)")," methods."),(0,o.kt)("h3",{id:"proofofspace-type-definition"},"ProofOfSpace type definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@streamable\nclass ProofOfSpace(Streamable):\n    challenge: bytes32\n    pool_public_key: Optional[G1Element]\n    pool_contract_puzzle_hash: Optional[bytes32]\n    plot_public_key: G1Element\n    size: uint8\n    proof: bytes\n")),(0,o.kt)("h3",{id:"creating-and-serializing-a-proof-of-space"},"Creating and serializing a proof of space"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from chia.types.blockchain_format.proof_of_space import ProofOfSpace\nfrom blspy import G1Element\nfrom chia.types.sized_bytes import bytes32\nfrom chia.util.ints import uint8, uint32\npospace = ProofOfSpace(bytes([0xaa]*32), None, bytes32([0xbb]*32), G1Element.generator(), uint8(33), bytes([0xcc]*264))\nprint(bytes(pospace))\n")),(0,o.kt)("h3",{id:"output"},"Output"),(0,o.kt)("p",null,"As you can see, each one of the fields is serialized in order, according to the above specification. The G1 Generator value\nis serialized in BLS format as: ",(0,o.kt)("inlineCode",{parentName:"p"},"<G1Element 97f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb>"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa0001bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb97f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb2100000108cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\n")))}b.isMDXComponent=!0}}]);