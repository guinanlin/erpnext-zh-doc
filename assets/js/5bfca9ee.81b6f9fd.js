"use strict";(self.webpackChunkstsinc_docs=self.webpackChunkstsinc_docs||[]).push([[5112],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>O});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,O=s["".concat(p,".").concat(m)]||s[m]||f[m]||o;return r?n.createElement(O,c(c({ref:t},l),{},{components:r})):n.createElement(O,c({ref:t},l))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},c="OAuth\u6388\u6743",i={unversionedId:"\u8fd0\u7ef4\u96c6\u6210/OAuth\u6388\u6743",id:"\u8fd0\u7ef4\u96c6\u6210/OAuth\u6388\u6743",title:"OAuth\u6388\u6743",description:"OAuth Client\u7684\u4f7f\u7528",source:"@site/best-practice/30. \u8fd0\u7ef4\u96c6\u6210/100.OAuth\u6388\u6743.md",sourceDirName:"30. \u8fd0\u7ef4\u96c6\u6210",slug:"/\u8fd0\u7ef4\u96c6\u6210/OAuth\u6388\u6743",permalink:"/best-practice/\u8fd0\u7ef4\u96c6\u6210/OAuth\u6388\u6743",draft:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7ad9\u70b9\u52a0\u8f7dSSL\u8bc1\u4e66",permalink:"/best-practice/\u8fd0\u7ef4\u96c6\u6210/\u7ad9\u70b9\u52a0\u8f7dSSL\u8bc1\u4e66"},next:{title:"\u62a5\u4ef7\u5355\u754c\u9762\u62a5\u4ef7\u91d1\u989d\u663e\u793a\u6570\u5b57\u5927\u5199",permalink:"/best-practice/\u5b9a\u5236\u6848\u4f8b/\u62a5\u4ef7\u5355\u754c\u9762\u62a5\u4ef7\u91d1\u989d\u663e\u793a\u6570\u5b57\u5927\u5199"}},p={},u=[{value:"OAuth Client\u7684\u4f7f\u7528",id:"oauth-client\u7684\u4f7f\u7528",level:3}],l={toc:u},s="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"oauth\u6388\u6743"},"OAuth\u6388\u6743"),(0,a.kt)("h3",{id:"oauth-client\u7684\u4f7f\u7528"},"OAuth Client\u7684\u4f7f\u7528"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://frappeframework.com/docs/user/en/using_frappe_as_oauth_service"},"https://frappeframework.com/docs/user/en/using_frappe_as_oauth_service")),(0,a.kt)("p",null,"\u7406\u89e3\uff1a "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u628aFrappe\u4f5c\u4e3a\u6388\u6743\u670d\u52a1\u7684\u63d0\u4f9b\u65b9\uff0c \u5916\u90e8\u7b2c\u4e09\u65b9\u7cfb\u7edf\u4f9d\u8d56Frappe\u7684OAuth\u7684\u6388\u6743\u673a\u5236\u3002 "),(0,a.kt)("li",{parentName:"ol"},"\u6bd4\u5982\u4e0a\u8ff0\u4e3e\u4f8b\u5c31\u662f\u7531Frappe\u63d0\u4f9b client id\uff0c secrect\uff0c \u7136\u540e\u5728 Grafana  \u505a\u96c6\u6210\u767b\u5f55\u3002")))}f.isMDXComponent=!0}}]);