"use strict";(self.webpackChunkegui_docs=self.webpackChunkegui_docs||[]).push([[538],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2418:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={sidebar_position:1,slug:"/"},c="Getting Started",u={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Install library",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/nanos-world/egui-docs/edit/master/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Grid System",permalink:"/docs/grid-system"}},s=[{value:"Install library",id:"install-library",children:[],level:2},{value:"Example GUI",id:"example-gui",children:[],level:2}],p={toc:s};function d(e){var t=e.components,o=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"install-library"},"Install library"),(0,a.kt)("p",null,"Download the library and place it into your ",(0,a.kt)("inlineCode",{parentName:"p"},"Packages")," folder."),(0,a.kt)("h2",{id:"example-gui"},"Example GUI"),(0,a.kt)("p",null,"To use the library you need to import it first with ",(0,a.kt)("inlineCode",{parentName:"p"},'Package.RequirePackage("egui")'),". The whole library is client only."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example GUI",src:n(941).Z,width:"190",height:"130"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'Package.RequirePackage("egui")\n\nlocal window = EGUI.Window(10, 10, 170, 110, "Getting Started", true, true)\nlocal label = EGUI.Label(5, 5, 50, 30, "Hello", window)\nlocal input = EGUI.Input(60, 5, 100, 30, window):SetValue("World!")\nlocal sliderLabel = EGUI.Label(5, 40, 50, 30, "75", window)\nlocal slider = EGUI.Slider(60, 40, 100, 30, 75, 1, 100, window)\n\nslider:Subscribe("Change", function(value)\n    sliderLabel:SetText(tostring(value))\nend)\n')))}d.isMDXComponent=!0},941:function(e,t,n){t.Z=n.p+"assets/images/example-gui-80159860b939e18cc752231aa5091f79.png"}}]);