"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[3468],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),i=n(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),i=n(7294),l=n(6010),r=n(2466),o=n(6550),s=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return i.Children.map(e,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function d(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,i.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[r,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:n,groupId:a}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,i.useEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var g=n(2389);const f="tabList__CuJ",N="tabItem_LNqP";function w(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==o&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},r,{className:(0,l.Z)("tabs__item",N,r?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=k(e);return i.createElement("div",{className:(0,l.Z)("tabs-container",f)},i.createElement(w,(0,a.Z)({},e,t)),i.createElement(v,(0,a.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return i.createElement(b,(0,a.Z)({key:String(t)},e))}},3545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(7462),i=(n(7294),n(3905)),l=n(4866),r=n(5162);const o={slug:"/guides/crash-course/intro-to-chialisp",title:"Chialisp"},s=void 0,u={unversionedId:"guides/crash-course/intro-to-chialisp",id:"guides/crash-course/intro-to-chialisp",title:"Chialisp",description:"For this section of the course, you will learn how to set up your development environment, write Chialisp code, and execute it on the command-line.",source:"@site/docs/guides/crash-course/intro-to-chialisp.md",sourceDirName:"guides/crash-course",slug:"/guides/crash-course/intro-to-chialisp",permalink:"/zh/guides/crash-course/intro-to-chialisp",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/crash-course/intro-to-chialisp.md",tags:[],version:"current",frontMatter:{slug:"/guides/crash-course/intro-to-chialisp",title:"Chialisp"}},p={},c=[{value:"Dev Tools",id:"dev-tools",level:2},{value:"Chia Dev Tools",id:"chia-dev-tools",level:3},{value:"Run",id:"run",level:3},{value:"Brun",id:"brun",level:3},{value:"Writing a Chialisp Puzzle",id:"writing-puzzle",level:2},{value:"Comparisons and If",id:"comparisons-and-if",level:2},{value:"Text Editor",id:"text-editor",level:2},{value:"Chialisp Files",id:"chialisp-files",level:2},{value:"Conventions",id:"conventions",level:3},{value:"Putting it Together",id:"putting-it-together",level:2},{value:"Defining Functions",id:"defining-functions",level:2},{value:"More Complicated Function",id:"more-complicated-function",level:2},{value:"Invoking our Code",id:"invoking-our-code",level:3}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For this section of the course, you will learn how to set up your development environment, write Chialisp code, and execute it on the command-line."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you are using PowerShell, make sure to install the PowerShell 7.3 preview version:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"winget install --id Microsoft.Powershell.Preview --source winget\n")),(0,i.kt)("p",{parentName:"admonition"},"This version fixes nested quoting, which is required for many of the commands on this page.")),(0,i.kt)("h2",{id:"dev-tools"},"Dev Tools"),(0,i.kt)("p",null,"To get started with Chialisp, you will first want to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-dev-tools"},"install Chia Dev Tools"),"."),(0,i.kt)("p",null,"Here is a summary of the instructions:"),(0,i.kt)(l.Z,{groupId:"OS",defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Linux/MacOS",value:"linux-macos"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"windows",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir learning\ncd learning\npy -m venv venv\n./venv/Scripts/activate\npip install chia-dev-tools\ncdv --version\n"))),(0,i.kt)(r.Z,{value:"linux-macos",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir learning\ncd learning\npython3 -m venv venv\n. ./venv/bin/activate\npip install chia-dev-tools\ncdv --version\n")))),(0,i.kt)("p",null,"This will install the Chia Dev Tools within your activated virtual environment. You'll want to make sure this virtual environment is activated before working on Chialisp. You'll see a ",(0,i.kt)("inlineCode",{parentName:"p"},"(venv)")," on the left of your terminal prompt."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Virtual environments allow you to install specific Python packages that will only be usable with the environment that is currently active. This allows you to switch between different environments for different projects, or if you just want to use different software versions.")),(0,i.kt)("h3",{id:"chia-dev-tools"},"Chia Dev Tools"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"cdv")," command provides a set of useful commands for building and running Chialisp programs, as well as some utilities for deploying smart coins on the Chia blockchain, which we will cover later on."),(0,i.kt)("p",null,"Run the following to see what commands it provides:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cdv\n")),(0,i.kt)("p",null,"For example, a Chialisp file can be built like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cdv clsp build something.clsp\n")),(0,i.kt)("h3",{id:"run"},"Run"),(0,i.kt)("p",null,"You also have access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," command that can be used to compile Chialisp code directly."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If Chialisp code doesn't depend on any external parameters, the compiler will simplify it to the smallest form it can, which often means that this command will return the final output of the program."),(0,i.kt)("p",{parentName:"admonition"},"If this is the case, you can skip the ",(0,i.kt)("inlineCode",{parentName:"p"},"brun")," command.")),(0,i.kt)("p",null,"Run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"run '(+ 2 3)'\n")),(0,i.kt)("p",null,"Which should return the following result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"5\n")),(0,i.kt)("hr",null),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The syntax ",(0,i.kt)("inlineCode",{parentName:"p"},"(+ 2 3)")," may look confusing. In Chialisp, we place the operator first, followed by the operands. This is known as ",(0,i.kt)("strong",{parentName:"p"},"prefix notation"),". Think of this as the equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"2 + 3")," in math and most other programming languages."),(0,i.kt)("p",{parentName:"admonition"},"It is set up this way because every program in Chialisp is written as a list, where the first item is the operator. ",(0,i.kt)("inlineCode",{parentName:"p"},"(+ 2 3)")," is a list of three elements with the first being the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," operator, and thus it's a valid Chialisp program.")),(0,i.kt)("h3",{id:"brun"},"Brun"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"brun")," command is different from the ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," command in that it doesn't compile code. Instead, it takes the result of the ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," command and executes it on the Chialisp Virtual Machine (CLVM) directly."),(0,i.kt)("p",null,"If you need to pass external parameters into the program, you will need to first compile it with ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),", then use the ",(0,i.kt)("inlineCode",{parentName:"p"},"brun")," command with the parameters."),(0,i.kt)("p",null,"For example, let's say that the ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," command produced the following CLVM bytecode output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"2\n")),(0,i.kt)("p",null,"You could run it like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brun '2' '(42)'\n")),(0,i.kt)("p",null,"Which should produce the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"42\n")),(0,i.kt)("p",null,"So Chialisp can calculate the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/42_(number)#The_Hitchhiker's_Guide_to_the_Galaxy"},"meaning of life"),"!"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"writing-puzzle"},"Writing a Chialisp Puzzle"),(0,i.kt)("p",null,"Let's start off with some terminology. Firstly, coins on the Chia blockchain use Chialisp programs named ",(0,i.kt)("strong",{parentName:"p"},"puzzles")," to secure the value stored within. The parameters to a puzzle are called its ",(0,i.kt)("strong",{parentName:"p"},"solution"),"."),(0,i.kt)("p",null,"To create puzzles that require a solution, we will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"mod")," operator. It allows us to take arguments passed in to customize the functionality and result of the puzzle."),(0,i.kt)("p",null,"A very basic example would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"run '(mod (arg1 arg2) (+ arg1 arg2))'\n")),(0,i.kt)("p",null,"Which should return the following result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"(+ 2 5)\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"What in the world is ",(0,i.kt)("inlineCode",{parentName:"p"},"(+ 2 5)")," that ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," returned? This is an example of Chialisp bytecode that is later executed by the Chialisp Virtual Machine (CLVM). It is not very human-readable, but don't worry about that, as you are not required to understand CLVM bytecode in order to use it."),(0,i.kt)("p",{parentName:"admonition"},"Our first command, ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),", will take Chialisp code and compile it to bytecode. Next, ",(0,i.kt)("inlineCode",{parentName:"p"},"brun")," will take that bytecode and execute it.")),(0,i.kt)("p",null,"We will then run this puzzle with the ",(0,i.kt)("inlineCode",{parentName:"p"},"brun")," command, followed by a solution of your choice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brun '(+ 2 5)' '(10 5)'\n")),(0,i.kt)("p",null,"Which should return the following result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"15\n")),(0,i.kt)("admonition",{title:"reminder",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We are now using ",(0,i.kt)("inlineCode",{parentName:"p"},"mod")," to demand a solution for our puzzle. Whenever this is the case, you will be required to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"brun")," command after ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),".")),(0,i.kt)("p",null,"Pay close attention to the location of quotes and parenthesis. It's easy to get lost! With ",(0,i.kt)("inlineCode",{parentName:"p"},"brun"),", the solution is passed in as a distinct value surrounded by quotes. ",(0,i.kt)("inlineCode",{parentName:"p"},"(10, 5)")," is the solution in this example and translates to ",(0,i.kt)("inlineCode",{parentName:"p"},"arg1 = 10")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"arg2 = 5"),"."),(0,i.kt)("p",null,"You can run it again with a different solution:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brun '(+ 2 5)' '(20 7)'\n")),(0,i.kt)("p",null,"Which should return the following result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"27\n")),(0,i.kt)("p",null,"At this point you have a working Chialisp puzzle that will take inputs and give back an output. Congrats on making it this far!"),(0,i.kt)("h2",{id:"comparisons-and-if"},"Comparisons and If"),(0,i.kt)("p",null,"Going with a contrived example, let's say we wanted to add two numbers and return ",(0,i.kt)("inlineCode",{parentName:"p"},"large")," if they were ",(0,i.kt)("inlineCode",{parentName:"p"},"> 100"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"small")," if they were ",(0,i.kt)("inlineCode",{parentName:"p"},"<= 100"),"."),(0,i.kt)("p",null,"You can compare two values like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(> apples oranges)\n")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"apples")," is larger than ",(0,i.kt)("inlineCode",{parentName:"p"},"oranges"),", this returns ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". Otherwise, the output is ",(0,i.kt)("inlineCode",{parentName:"p"},"()"),", which is equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,i.kt)("p",null,"You can then use an if statement to return one of two different things depending on the result."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(if <comparison> <result if true> <result if false>)\n")),(0,i.kt)("p",null,"A concrete example of an ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'run \'(if 1 "true" "false")\'\n')),(0,i.kt)("p",null,"Which should return the following result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},'"true"\n')),(0,i.kt)("p",null,"Now, we will add ",(0,i.kt)("inlineCode",{parentName:"p"},"arg1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"arg2")," with the code ",(0,i.kt)("inlineCode",{parentName:"p"},"(+ arg1 arg2)")," and compare it to the literal value ",(0,i.kt)("inlineCode",{parentName:"p"},"100"),". This comparison will determine whether the ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". We end up with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'run \'(mod (arg1 arg2) (if (> (+ arg1 arg2) 100) "large" "small"))\'\n')),(0,i.kt)("p",null,"Which should return the following result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},'(a (i (> (+ 2 5) (q . 100)) (q 1 . "large") (q 1 . "small")) 1)\n')),(0,i.kt)("p",null,"Next, let's put this bytecode through ",(0,i.kt)("inlineCode",{parentName:"p"},"brun"),", giving it a solution:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brun '(a (i (> (+ 2 5) (q . 100)) (q 1 . \"large\") (q 1 . \"small\")) 1)' '(10 90)'\n")),(0,i.kt)("p",null,"Which should return the following result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"small\n")),(0,i.kt)("p",null,"Now, again with a different solution:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brun '(a (i (> (+ 2 5) (q . 100)) (q 1 . \"large\") (q 1 . \"small\")) 1)' '(10 91)'\n")),(0,i.kt)("p",null,"Which should return the following result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"large\n")),(0,i.kt)("p",null,"The difference here being the new solution of ",(0,i.kt)("inlineCode",{parentName:"p"},"(10 91)"),". When added together, ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"91")," are greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"100"),"."),(0,i.kt)("h2",{id:"text-editor"},"Text Editor"),(0,i.kt)("p",null,"Up to this point, we've been using the command line to write and run Chialisp programs. While this is efficient for quickly prototyping and testing small programs, it doesn't scale very well."),(0,i.kt)("p",null,"When writing larger programs in Chialisp, it'll be much easier to use a text editor of your choice and save them to a file. Both ",(0,i.kt)("a",{parentName:"p",href:"https://atom.io"},"Atom")," and ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code")," have extensions to improve the quality of life of writing Chialisp code. However, any LISP-based syntax highlighting will help as well."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you decide to use ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code"),", we have begun development on a ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ChiaNetwork.chialisp"},"Chialisp language server extension"),"."),(0,i.kt)("p",{parentName:"admonition"},"You may need to click the dropdown in the editor to install the prerelease version.")),(0,i.kt)("h2",{id:"chialisp-files"},"Chialisp Files"),(0,i.kt)("p",null,"We will be storing Chialisp code in files, then building and running the files on the command line using Chia Dev Tools. There are a few commands that we can use more effectively after setting up a project in this way."),(0,i.kt)("h3",{id:"conventions"},"Conventions"),(0,i.kt)("p",null,"The following file extensions are used for Chialisp:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Extension"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".clsp")),(0,i.kt)("td",{parentName:"tr",align:null},"Chialisp source code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".clvm")),(0,i.kt)("td",{parentName:"tr",align:null},"Deserialized CLVM bytecode")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".clvm.hex")),(0,i.kt)("td",{parentName:"tr",align:null},"Serialized CLVM bytecode")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".clsp.hex")),(0,i.kt)("td",{parentName:"tr",align:null},"Generated CLVM bytecode")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".sym")),(0,i.kt)("td",{parentName:"tr",align:null},"Generated Chialisp symbol table")))),(0,i.kt)("p",null,"You will be writing code in ",(0,i.kt)("inlineCode",{parentName:"p"},".clsp")," files."),(0,i.kt)("h2",{id:"putting-it-together"},"Putting it Together"),(0,i.kt)("p",null,"Using a text editor and files allows us to format our code nicely."),(0,i.kt)("p",null,"Put the following in a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"first.clsp"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp",metastring:'title="first.clsp"',title:'"first.clsp"'},"(mod (arg1 arg2)\n    (if (> (+ arg1 arg2) 100) 'large' 'small')\n)\n")),(0,i.kt)("p",null,"Now, we can execute the file by name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"run first.clsp\n")),(0,i.kt)("p",null,"This output will be exactly the same as before, but our code is a bit easier to manage."),(0,i.kt)("p",null,"We will still execute the output like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brun '(a (i (> (+ 2 5) (q . 100)) (q 1 . \"large\") (q 1 . \"small\")) 1)' '(50 51)'\n")),(0,i.kt)("p",null,"And, using nesting, ",(0,i.kt)("inlineCode",{parentName:"p"},"$()")," will execute anything within ",(0,i.kt)("inlineCode",{parentName:"p"},"()")," first. We can simplify further with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'brun "$(run first.clsp)" "(50 51)"\n')),(0,i.kt)("h2",{id:"defining-functions"},"Defining Functions"),(0,i.kt)("p",null,"A function will give a name to some lines of code, often taking an input and returning a result. Let's create a new file to practice functions inside of Chialisp."),(0,i.kt)("p",null,"Create a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"sum.clsp"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp",metastring:'title="sum.clsp"',title:'"sum.clsp"'},"(mod (arg1 arg2)\n    (defun sum (s1 s2)\n        (+ s1 s2)\n    )\n\n    (sum arg1 arg2)\n)\n")),(0,i.kt)("p",null,"This example is silly because we are just adding two numbers, but it shows that we can define a function with parameters. Now, while our solution parameters are still ",(0,i.kt)("inlineCode",{parentName:"p"},"arg1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"arg2"),", we've introduced ",(0,i.kt)("inlineCode",{parentName:"p"},"s1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"s2"),". We define the function following this structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(defun function_name (parameters)\n    function body)\n)\n")),(0,i.kt)("p",null,"We can then refer to this function by name later on in our code body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(function_name arguments)\n")),(0,i.kt)("h2",{id:"more-complicated-function"},"More Complicated Function"),(0,i.kt)("p",null,"Now that we have a basic function, we can build on this to create a sum function to add all values from a list."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(mod (items)\n  (defun sum (items)\n    (if items\n      (+ (f items) (sum (r items)))\n      0\n    )\n  )\n\n  (sum items)\n)\n")),(0,i.kt)("p",null,"Chialisp will use a lot of recursion. In this example, we will use ",(0,i.kt)("inlineCode",{parentName:"p"},"(f items)")," to refer to the first element in the list, and ",(0,i.kt)("inlineCode",{parentName:"p"},"(r items)")," to refer to the rest of the items in the list. By saying ",(0,i.kt)("inlineCode",{parentName:"p"},"+ (f items) (sum (r items)))"),", we are adding the first element with a recursive call to the sum of the rest of the elements. This will repeat until items is empty, returning 0."),(0,i.kt)("p",null,"Imagine passing in a list ",(0,i.kt)("inlineCode",{parentName:"p"},"(10 5 3 7)"),", we would have a call stack like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(+ 10 (sum (list 5 3 7)))\n        \u21aa (+ 5 (sum (list 3 7)))\n                 \u21aa (+ 3 (sum (list 7)))\n                          \u21aa (+ 7 (sum (list)))\n                                   \u21aa 0\n")),(0,i.kt)("p",null,"We make our way through these calls until we return (0). We then work our way back up adding 0 with 7, 7 with 3, 10 with 5, and finally 15 with 10."),(0,i.kt)("p",null,"Because we need to stop the recursive calls when the list is empty, we check if the ",(0,i.kt)("inlineCode",{parentName:"p"},"items")," has a value. This can be done with ",(0,i.kt)("inlineCode",{parentName:"p"},"if items"),"."),(0,i.kt)("h3",{id:"invoking-our-code"},"Invoking our Code"),(0,i.kt)("p",null,"We now have just a single parameter called ",(0,i.kt)("inlineCode",{parentName:"p"},"items"),". This is expected to be a list, so we will pass a solution that is a list. We would normally pass a solution in ",(0,i.kt)("inlineCode",{parentName:"p"},"()")," and a list is surrounded with ",(0,i.kt)("inlineCode",{parentName:"p"},"()"),", so it may look like ",(0,i.kt)("inlineCode",{parentName:"p"},'"((10 5 3 7))"'),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\nbrun "$(run sum.clsp)" "((10 5 3 7))"\n\n')),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"25\n")))}m.isMDXComponent=!0}}]);