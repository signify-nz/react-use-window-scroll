(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{K2tT:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return b})),o.d(t,"default",(function(){return p}));o("1c7q"),o("abGl"),o("gZHo"),o("Fdmb"),o("Ir+3"),o("2mQt");var n=o("/FXl"),l=o("TjRS"),r=o("5xmX");o("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/hooks/useScrollTo.mdx"}});var i={_frontmatter:b},c=l.a;function p(e){var t=e.components,o=function(e,t){if(null==e)return{};var o,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,["components"]);return Object(n.b)(c,a({},i,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",null,"useScrollTo"),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"This ",Object(n.b)("a",a({parentName:"p"},{href:"https://reactjs.org/docs/hooks-intro.html"}),"hook")," scrolls the page to the specified page coordinates using the ",Object(n.b)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window"}),"Window Web API"),"'s ",Object(n.b)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo"}),"Window.scrollTo")," function."),Object(n.b)("p",null,"Smooth scrolling behavior (native to the browser) is supported by providing ",Object(n.b)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions"}),"ScrollToOptions"),"."),Object(n.b)("h2",{id:"usage"},"Usage"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport { useScrollTo } from '@devboldly/react-use-scroll';\n\nconst HookExample = () => {\n  const scrollTo = useScrollTo();\n  return (\n    <div style={{ border: 'solid 2px #67788a', padding: '20px' }}>\n      <button onClick={() => scrollTo(0, 0)}>Hard Scroll To Top (0, 0)</button>{' '}\n      <button onClick={() => scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>Smooth Scroll To Top (0, 0)</button>\n    </div>\n  );\n};\n")),Object(n.b)("h2",{id:"signatures"},"Signatures"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"  useScrollTo(options?: { polyfillDisabled?: boolean | undefined; }) => ((scrollToOptions: ScrollToOptions) => void)\n")),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"  useScrollTo(options?: { polyfillDisabled?: boolean | undefined; }) => ((top: number, left: number) => void)\n")),Object(n.b)("h3",{id:"params"},"Params"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",a({parentName:"tr"},{align:null}),"Param"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"options"),Object(n.b)("td",a({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"{ polyfillDisabled?:")," ",Object(n.b)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",Object(n.b)("inlineCode",{parentName:"td"},"undefined; }")," ","|"," ",Object(n.b)("inlineCode",{parentName:"td"},"undefined")),Object(n.b)("td",a({parentName:"tr"},{align:null}),"You can optionally provide the hook with ",Object(n.b)("inlineCode",{parentName:"td"},"{ polyfillDisabled: true }")," to disable the polyfill for browsers that don't natively support smooth scrolling. The polyfill is enabled by default and only patches browsers that lack support.")))),Object(n.b)("h3",{id:"return"},"Return"),Object(n.b)("p",null,"The hook returns an overloaded ",Object(n.b)("inlineCode",{parentName:"p"},"function")," that can take either a ",Object(n.b)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions"}),"ScrollToOptions"),", or ",Object(n.b)("inlineCode",{parentName:"p"},"top")," and ",Object(n.b)("inlineCode",{parentName:"p"},"left"),", for scrolling the page to the provided page coordinates."),Object(n.b)("p",null,"Use the ",Object(n.b)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions"}),"ScrollToOptions")," signature if you'd like to use smooth scrolling."),Object(n.b)("h4",{id:"scrolltooptions-scrolltooptions--void"},Object(n.b)("inlineCode",{parentName:"h4"},"(scrollToOptions: ScrollToOptions) => void")),Object(n.b)("p",null,"This return function takes a ",Object(n.b)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions"}),"ScrollToOptions"),". This enables you to use smooth scrolling implemented by the native browser."),Object(n.b)("p",null,"If ",Object(n.b)("inlineCode",{parentName:"p"},"top")," or ",Object(n.b)("inlineCode",{parentName:"p"},"left")," are not provided, they are defaulted to ",Object(n.b)("inlineCode",{parentName:"p"},"0"),"."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",a({parentName:"tr"},{align:null}),"Argument"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"scrollToOptions"),Object(n.b)("td",a({parentName:"tr"},{align:null}),Object(n.b)("a",a({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions"}),"ScrollToOptions")),Object(n.b)("td",a({parentName:"tr"},{align:null}),"The scroll options, including the ",Object(n.b)("inlineCode",{parentName:"td"},"top")," and ",Object(n.b)("inlineCode",{parentName:"td"},"left")," page coordinates in pixels. Provide ",Object(n.b)("inlineCode",{parentName:"td"},"{ behavior: 'smooth' }")," for smooth scrolling.")))),Object(n.b)("h5",{id:"return-function-example"},"Return Function Example:"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"const scrollTo = useScrollTo();\n...\n// Smoothly scrolls to the top of the page\nscrollTo({ top: 0, left: 0, behavior: 'smooth' })}\n")),Object(n.b)("h4",{id:"top-number-left-number--void"},Object(n.b)("inlineCode",{parentName:"h4"},"(top: number, left: number) => void")),Object(n.b)("p",null,"This return function takes vertical and horizontal page coordinates in pixels. Smooth scrolling is not supported with this method."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",a({parentName:"tr"},{align:null}),"Argument"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"top"),Object(n.b)("td",a({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"number")),Object(n.b)("td",a({parentName:"tr"},{align:null}),"Vertical pixel page coordinate.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"left"),Object(n.b)("td",a({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"number")),Object(n.b)("td",a({parentName:"tr"},{align:null}),"Horizontal pixel page coordinate.")))),Object(n.b)("h5",{id:"return-function-example-1"},"Return Function Example:"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"const scrollTo = useScrollTo();\n...\n// Hard scrolls to 200px from the top of the page\nscrollTo(200, 0)\n")),Object(n.b)("h2",{id:"disable-polyfill-option"},"Disable Polyfill Option"),Object(n.b)("p",null,"This hook includes a polyfill to support legacy browsers that do not support smooth scrolling natively. It may surprise you (or it may not), but this includes Safari."),Object(n.b)("p",null,"To disable the polyfill, pass the following options:"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"const scrollTo = useScrollTo({ polyfillDisabled: true });\n")),Object(n.b)("p",null,"Doing so will remove smooth scrolling support for browsers that do not support it natively."),Object(n.b)("h2",{id:"hook-example"},"Hook Example"),Object(n.b)(r.a,{mdxType:"ScrollToExample"}),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport { useScrollTo } from '@devboldly/react-use-scroll';\n\nconst HookExample = (props) => {\n  const scrollTo = useScrollTo();\n  return (\n    <div style={{ border: 'solid 2px #67788a', padding: '20px' }}>\n      <button onClick={() => scrollTo(500, 0)}>Hard Scroll To (500, 0)</button>{' '}\n      <button onClick={() => scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>Smooth Scroll To Top (0, 0)</button>\n    </div>\n  );\n}\n")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/hooks/useScrollTo.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-hooks-use-scroll-to-mdx-5400a109789035a4838b.js.map