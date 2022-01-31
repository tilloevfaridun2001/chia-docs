"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5277],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return k}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=c(a),k=n,u=p["".concat(s,".").concat(k)]||p[k]||d[k]||i;return a?o.createElement(u,l(l({ref:t},h),{},{components:a})):o.createElement(u,l({ref:t},h))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var c=2;c<i;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4716:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return h},default:function(){return p}});var o=a(7462),n=a(3366),i=(a(7294),a(3905)),l=["components"],r={sidebar_position:1},s="5.1 Block Validation",c={unversionedId:"05block-validation/block-validation",id:"05block-validation/block-validation",isDocsHomePage:!1,title:"5.1 Block Validation",description:"Block validation in Chia is composed of two parts: header validation and body validation.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/05block-validation/block-validation.md",sourceDirName:"05block-validation",slug:"/05block-validation/block-validation",permalink:"/zh/docs/05block-validation/block-validation",editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/05block-validation/block-validation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"4.4 Addresses",permalink:"/zh/docs/04coin-set-model/addresses"},next:{title:"5.2 Block format",permalink:"/zh/docs/05block-validation/block_format"}},h=[{value:"Full Sync vs Normal Operation",id:"full-sync-vs-normal-operation",children:[{value:"Full Sync",id:"full-sync",children:[]},{value:"Normal Operation",id:"normal-operation",children:[]}]},{value:"Block Validation Steps",id:"block-validation-steps",children:[{value:"Header Validation",id:"header-validation",children:[]},{value:"Body Validation",id:"body-validation",children:[]}]}],d={toc:h};function p(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"51-block-validation"},"5.1 Block Validation"),(0,i.kt)("p",null,"Block validation in Chia is composed of two parts: header validation and body validation."),(0,i.kt)("p",null,"The header validation performs consensus algorithm-related checks, such as proof of space and time, signage points and infusion points, previous block hashes, foliage hashes, and timestamps. Notably, it does not validate any CLVM, coin spends, or signatures. Usually, for efficiency, light clients will want to validate headers but not the body. Notably, it does not validate any CLVM, coin spends, or signatures. Usually, for efficiency, light clients will want to validate headers but not the body."),(0,i.kt)("p",null,"Body validation entails running all puzzles for spent coins, reading the coin database, verifying signatures, checking for duplicate or invalid removals and additions, etc."),(0,i.kt)("p",null,"Validating a block in Chia will require access to some blocks in the past, up to a maximum theoretical value of three times the max number of blocks in a slot (3x128=384), but usually only a few are needed. Also, information regarding previous sub-epochs and epochs is needed for validation, as well as the current system timestamp. Implementations can cache only some recent blocks instead of storing all blocks in memory. ",(0,i.kt)("inlineCode",{parentName:"p"},"chia-blockchain")," maintains a database of BlockRecords, which contain only the important pieces of block information required for validating future blocks. Also, information regarding previous sub-epochs and epochs is needed for validation, as well as the current system timestamp. Implementations can cache only some recent blocks instead of storing all blocks in memory. ",(0,i.kt)("inlineCode",{parentName:"p"},"chia-blockchain")," maintains a database of BlockRecords, which contain only the important pieces of block information required for validating future blocks."),(0,i.kt)("h2",{id:"full-sync-vs-normal-operation"},"Full Sync vs Normal Operation"),(0,i.kt)("p",null,"There are two cases when a node might verify blocks."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"During a full sync, where the node is trying to catch up to the most recent block, starting from an old block height. In this case, the node is able to download many blocks at once. In this case, the node is able to download many blocks at once."),(0,i.kt)("li",{parentName:"ol"},"During normal operation, where the node is caught up to the most recent block, and is only downloading one block every few seconds.")),(0,i.kt)("p",null,"We'll cover both of these cases below."),(0,i.kt)("h3",{id:"full-sync"},"Full Sync"),(0,i.kt)("p",null,"Full sync is the process by which a full node downloads and validates all of the blocks in the blockchain and catches up to the most recent block. Full sync is important, because it allows new nodes to validate that a blockchain is the heaviest -- and thus, the currently valid -- chain. It allows everyone to come to consensus on the current state, regardless of when they come online, or for how long they go offline. Full sync is important, because it allows new nodes to validate that a blockchain is the heaviest -- and thus, the currently valid -- chain. It allows everyone to come to consensus on the current state, regardless of when they come online, or for how long they go offline."),(0,i.kt)("p",null,"The method of full sync can vary between implementations, but the high level algorithm is the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Connect to other peers on the network, by querying the DNS introducer, and crawling the network."),(0,i.kt)("li",{parentName:"ol"},"Check the current weight of the peak of the peers, and select a few peers to sync from."),(0,i.kt)("li",{parentName:"ol"},"Download and validate a weight proof, to ensure that the given peak has real work behind it."),(0,i.kt)("li",{parentName:"ol"},"Download and validate all blocks in the blockchain, in batches.")),(0,i.kt)("p",null,"Weight proofs are important, because they prevent other peers from lying to us about what the heaviest peak is. They also prevent us from downloading potentially useless data. Once the full node is caught up to the blockchain, it can properly farm, access the coin state, etc. They also prevent us from downloading potentially useless data. Once the full node is caught up to the blockchain, it can properly farm, access the coin state, etc."),(0,i.kt)("h3",{id:"normal-operation"},"Normal Operation"),(0,i.kt)("p",null,"Normal operation is the process by which a full node continuously gossips and receives blocks with other peers, always following the heaviest peak. If our node is at weight 2000, and we see that a peer has a peak at weight 2100, then we fetch that block from the peer. Usually, this is done in two phases: If our node is at weight 2000, and we see that a peer has a peak at weight 2100, then we fetch that block from the peer. Usually, this is done in two phases:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The unfinished block is propagated across the network, along with all information up to the signage point, transactions, etc."),(0,i.kt)("li",{parentName:"ol"},"The finished block, which includes infusion point VDFs, is also propagated. This typically excludes the transactions, which were already sent in step 1. This typically excludes the transactions, which were already sent in step 1.")),(0,i.kt)("p",null,"Normal operation is much less CPU-intensive than full sync, since there is only one block every 18 seconds, and one transaction block every 47 seconds, on average. Low-power machines like the Raspberry PI 4 should be able to easily continue normal operation. Low-power machines like the Raspberry PI 4 should be able to easily continue normal operation."),(0,i.kt)("h2",{id:"block-validation-steps"},"Block Validation Steps"),(0,i.kt)("p",null,"The following sections list all of the required checks to ensure validity of a block. The following sections list all of the required checks to ensure validity of a block. Please note that the official protocol and specification are defined by the ",(0,i.kt)("inlineCode",{parentName:"p"},"chia-blockchain")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/tree/main/chia/consensus"},"Python implementation"),", and NOT by this documentation page."),(0,i.kt)("h3",{id:"header-validation"},"Header Validation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Check that the previous block exists in the blockchain, or that it is genesis."),(0,i.kt)("li",{parentName:"ol"},"Check finished slots that have been crossed since ",(0,i.kt)("inlineCode",{parentName:"li"},"prev_b"),"= the previous block in the chain.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check sub-slot challenge hash for genesis block."),(0,i.kt)("li",{parentName:"ul"},"Check sub-slot challenge hash for non-genesis block."),(0,i.kt)("li",{parentName:"ul"},"Check sub-slot challenge hash for empty slot."),(0,i.kt)("li",{parentName:"ul"},"Validate that genesis block has no ICC=Infused challenge chain."),(0,i.kt)("li",{parentName:"ul"},"Validate that there is not icc iff icc_challenge hash is None."),(0,i.kt)("li",{parentName:"ul"},"Check infused challenge chain sub-slot VDF."),(0,i.kt)("li",{parentName:"ul"},"Check infused challenge sub-slot hash in challenge chain, deficit 16."),(0,i.kt)("li",{parentName:"ul"},"Check infused challenge sub-slot hash not included for other deficits."),(0,i.kt)("li",{parentName:"ul"},"Check infused challenge sub-slot hash in reward sub-slot."),(0,i.kt)("li",{parentName:"ul"},"If no icc, check that the cc=challenge chain doesn't include it."),(0,i.kt)("li",{parentName:"ul"},"If no icc, check that the rc=reward chain doesn't include it."),(0,i.kt)("li",{parentName:"ul"},"Check sub-epoch summary hash is None for empty slots."),(0,i.kt)("li",{parentName:"ul"},"Check new difficulty and ssi if applicable."),(0,i.kt)("li",{parentName:"ul"},"Check new difficulty and ssi are None if we don't finish epoch."),(0,i.kt)("li",{parentName:"ul"},"Check challenge sub-slot hash in reward sub-slot."),(0,i.kt)("li",{parentName:"ul"},"Check end of reward slot VDF."),(0,i.kt)("li",{parentName:"ul"},"Check challenge chain sub-slot VDF."),(0,i.kt)("li",{parentName:"ul"},"Check deficit (MIN_SUB.. deficit edge case for genesis block) deficit edge case for genesis block)"),(0,i.kt)("li",{parentName:"ul"},"If prev sb had deficit 0, resets deficit to MIN_BLOCK_PER_CHALLENGE_BLOCK"),(0,i.kt)("li",{parentName:"ul"},"Otherwise, deficit stays the same at the slot ends, cannot reset until 0"))),(0,i.kt)("li",{parentName:"ol"},"Check sub-epoch summary",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check that genesis block does not have sub-epoch summary"),(0,i.kt)("li",{parentName:"ul"},"Check that we finished a slot and we finished a sub-epoch"),(0,i.kt)("li",{parentName:"ul"},"Check the actual sub-epoch is correct"),(0,i.kt)("li",{parentName:"ul"},"Check that we don't have to include a sub-epoch summary"))),(0,i.kt)("li",{parentName:"ol"},"Check if the number of blocks is less than the max"),(0,i.kt)("li",{parentName:"ol"},"Check proof of space"),(0,i.kt)("li",{parentName:"ol"},"Check signage point index"),(0,i.kt)("li",{parentName:"ol"},"Check required iters"),(0,i.kt)("li",{parentName:"ol"},"check signage point index 0 has no cc sp and no rc sp"),(0,i.kt)("li",{parentName:"ol"},"Check no overflows in the first sub-slot of a new epoch"),(0,i.kt)("li",{parentName:"ol"},"Check total iters"),(0,i.kt)("li",{parentName:"ol"},"Check reward chain sp proof"),(0,i.kt)("li",{parentName:"ol"},"Check reward chain sp signature"),(0,i.kt)("li",{parentName:"ol"},"Check cc sp vdf"),(0,i.kt)("li",{parentName:"ol"},"Check cc sp sig"),(0,i.kt)("li",{parentName:"ol"},"Check is_transaction_block"),(0,i.kt)("li",{parentName:"ol"},"Check foliage block signature by plot key"),(0,i.kt)("li",{parentName:"ol"},"Check foliage block signature by plot key"),(0,i.kt)("li",{parentName:"ol"},"Check unfinished reward chain block hash"),(0,i.kt)("li",{parentName:"ol"},"Check pool target max height"),(0,i.kt)("li",{parentName:"ol"},"Check pre-farm puzzle hashes for genesis block.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If pospace has a pool pk, check pool target signature. Should not check this for genesis block. Should not check this for genesis block."),(0,i.kt)("li",{parentName:"ul"},"Otherwise, the plot is associated with a contract puzzle hash, not a public key, so check pool contract ph"))),(0,i.kt)("li",{parentName:"ol"},"Check extension data if applicable. None for mainnet. None for mainnet."),(0,i.kt)("li",{parentName:"ol"},"Check if foliage block is present"),(0,i.kt)("li",{parentName:"ol"},"Check foliage block hash"),(0,i.kt)("li",{parentName:"ol"},"Check prev block hash for genesis and non-genesis"),(0,i.kt)("li",{parentName:"ol"},"The filter hash in the Foliage Block must be the hash of the filter"),(0,i.kt)("li",{parentName:"ol"},"The timestamp in Foliage Block must not be over 5 minutes in the future, and the timestamp must be greater than the previous transaction block timestamp"),(0,i.kt)("li",{parentName:"ol"},"Check block height for genesis and non-genesis"),(0,i.kt)("li",{parentName:"ol"},"Check block weight for genesis and non-genesis"),(0,i.kt)("li",{parentName:"ol"},"Check challenge chain infusion point VDF"),(0,i.kt)("li",{parentName:"ol"},"Check reward chain infusion point VDF"),(0,i.kt)("li",{parentName:"ol"},"Check infused challenge chain infusion point VDF"),(0,i.kt)("li",{parentName:"ol"},"Check reward block hash"),(0,i.kt)("li",{parentName:"ol"},"Check reward block is_transaction_block")),(0,i.kt)("h3",{id:"body-validation"},"Body Validation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"For non transaction-blocs: foliage block, transaction filter, transactions info, and generator must be empty. If it is a block but not a transaction block, there is no body to validate. Check that all fields are None, and return. If it is a block but not a transaction block, there is no body to validate. Check that all fields are None, and return."),(0,i.kt)("li",{parentName:"ol"},"For blocks, foliage block, transactions info must not be empty."),(0,i.kt)("li",{parentName:"ol"},"The transaction info hash in the Foliage block must match the transaction info."),(0,i.kt)("li",{parentName:"ol"},"The foliage block hash in the foliage block must match the foliage block."),(0,i.kt)("li",{parentName:"ol"},"The reward claims must be valid for the previous blocks, and current block fees."),(0,i.kt)("li",{parentName:"ol"},"No transactions before INITIAL_TRANSACTION_FREEZE timestamp (this check has been removed)."),(0,i.kt)("li",{parentName:"ol"},"The generator root must be the hash of the serialized bytes of the generator for this block (or zeroes if no generator)"),(0,i.kt)("li",{parentName:"ol"},"Check the transactions generator reference list:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The generator_ref_list must be the hash of the serialized bytes of"),(0,i.kt)("li",{parentName:"ul"},"the generator ref list for this block (or 'one' bytes ","[0x01]"," if no generator)"),(0,i.kt)("li",{parentName:"ul"},"The generator ref list length must be less than or equal to MAX_GENERATOR_REF_LIST_SIZE entries"),(0,i.kt)("li",{parentName:"ul"},"The generator ref list must not point to a height >= this block's height"),(0,i.kt)("li",{parentName:"ul"},"If we have a generator reference list, we must have a generator"),(0,i.kt)("li",{parentName:"ul"},"Check that cost <= MAX_BLOCK_COST_CLVM"),(0,i.kt)("li",{parentName:"ul"},"The CLVM program must not return any errors"))),(0,i.kt)("li",{parentName:"ol"},"Check that the correct cost is in the transactions info"),(0,i.kt)("li",{parentName:"ol"},"Check additions for max coin amount (be careful to check for 64 bit overflows in other languages. This is the max 64 bit unsigned integer) This is the max 64 bit unsigned integer)"),(0,i.kt)("li",{parentName:"ol"},"Validate addition and removal merkle set roots."),(0,i.kt)("li",{parentName:"ol"},"The additions and removals must result in the correct filter."),(0,i.kt)("li",{parentName:"ol"},"Check for duplicate outputs in additions."),(0,i.kt)("li",{parentName:"ol"},"Check for duplicate spends inside block."),(0,i.kt)("li",{parentName:"ol"},"Check if removals exist and were not previously spent. (coin_db up to the fork point + fork block + this_block). Check if removals exist and were not previously spent. (coin_db up to the fork point + fork block + this_block). Be careful with forks and with ephemeral coins (added and removed in same block)."),(0,i.kt)("li",{parentName:"ol"},"Check that the total coin amount for added is <= removed."),(0,i.kt)("li",{parentName:"ol"},"Check that the assert fee sum <= fees, and that each reserved fee is non-negative."),(0,i.kt)("li",{parentName:"ol"},"Check that the fee amount + farmer reward < maximum coin amount."),(0,i.kt)("li",{parentName:"ol"},"Check that the computed fees are equal to the fees in the block header."),(0,i.kt)("li",{parentName:"ol"},"Verify that removed coin puzzle_hashes match with calculated puzzle_hashes."),(0,i.kt)("li",{parentName:"ol"},"Verify CLVM conditions."),(0,i.kt)("li",{parentName:"ol"},"Verify aggregated signature.")))}p.isMDXComponent=!0}}]);