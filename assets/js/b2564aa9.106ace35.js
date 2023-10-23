"use strict";(self.webpackChunkstsinc_docs=self.webpackChunkstsinc_docs||[]).push([[3850],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||k[d]||l;return n?a.createElement(m,i(i({ref:e},c),{},{components:n})):a.createElement(m,i({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[s]="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9418:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={title:"OAuth \u9274\u6743",description:"OAuth \u9274\u6743",keywords:["OAuth","\u9274\u6743"],tags:["\u6743\u9650"],sidebar_position:6,author:"7Wate",date:new Date("2022-08-31T00:00:00.000Z")},i=void 0,p={unversionedId:"\u7528\u6237\u5b89\u5168/\u7528\u6237\u9274\u6743/OAuth \u9274\u6743",id:"\u7528\u6237\u5b89\u5168/\u7528\u6237\u9274\u6743/OAuth \u9274\u6743",title:"OAuth \u9274\u6743",description:"OAuth \u9274\u6743",source:"@site/theroy/computer-security/\u7528\u6237\u5b89\u5168/\u7528\u6237\u9274\u6743/OAuth \u9274\u6743.md",sourceDirName:"\u7528\u6237\u5b89\u5168/\u7528\u6237\u9274\u6743",slug:"/\u7528\u6237\u5b89\u5168/\u7528\u6237\u9274\u6743/OAuth \u9274\u6743",permalink:"/computer-security/\u7528\u6237\u5b89\u5168/\u7528\u6237\u9274\u6743/OAuth \u9274\u6743",draft:!1,tags:[{label:"\u6743\u9650",permalink:"/computer-security/tags/\u6743\u9650"}],version:"current",sidebarPosition:6,frontMatter:{title:"OAuth \u9274\u6743",description:"OAuth \u9274\u6743",keywords:["OAuth","\u9274\u6743"],tags:["\u6743\u9650"],sidebar_position:6,author:"7Wate",date:"2022-08-31T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"SSO \u5355\u70b9\u767b\u5f55",permalink:"/computer-security/\u7528\u6237\u5b89\u5168/\u7528\u6237\u9274\u6743/\u5355\u70b9\u767b\u5f55\uff08Single Sign On\uff09"},next:{title:"\u8054\u5408\u767b\u5f55\u548c\u4fe1\u4efb\u767b\u5f55",permalink:"/computer-security/\u7528\u6237\u5b89\u5168/\u7528\u6237\u9274\u6743/\u8054\u5408\u767b\u5f55\u548c\u4fe1\u4efb\u767b\u5f55"}},o={},u=[{value:"OAuth 2.0",id:"oauth-20",level:2},{value:"OAuth 2.0 \u5b9a\u4e49",id:"oauth-20-\u5b9a\u4e49",level:3},{value:"\u4ee4\u724c\u4e0e\u5bc6\u7801\u7684\u5dee\u5f02",id:"\u4ee4\u724c\u4e0e\u5bc6\u7801\u7684\u5dee\u5f02",level:4},{value:"\u6388\u6743\u7801\u6a21\u5f0f",id:"\u6388\u6743\u7801\u6a21\u5f0f",level:2},{value:"\u6b65\u9aa4\u8be6\u89e3",id:"\u6b65\u9aa4\u8be6\u89e3",level:3},{value:"1. \u5ba2\u6237\u7aef",id:"1-\u5ba2\u6237\u7aef",level:4},{value:"2. \u6388\u6743\u670d\u52a1\u5668",id:"2-\u6388\u6743\u670d\u52a1\u5668",level:4},{value:"3. \u7f51\u7ad9 A \u670d\u52a1\u5668",id:"3-\u7f51\u7ad9-a-\u670d\u52a1\u5668",level:4},{value:"4. \u6388\u6743\u670d\u52a1\u5668",id:"4-\u6388\u6743\u670d\u52a1\u5668",level:4},{value:"\u9690\u85cf\u5f0f\u6a21\u5f0f\uff08Implicit Grant\uff09",id:"\u9690\u85cf\u5f0f\u6a21\u5f0fimplicit-grant",level:2},{value:"\u6b65\u9aa4\u8be6\u89e3",id:"\u6b65\u9aa4\u8be6\u89e3-1",level:3},{value:"1. \u5ba2\u6237\u7aef",id:"1-\u5ba2\u6237\u7aef-1",level:4},{value:"2. \u6388\u6743\u670d\u52a1\u5668",id:"2-\u6388\u6743\u670d\u52a1\u5668-1",level:4},{value:"\u7528\u6237\u540d\u5bc6\u7801\u5f0f\u6a21\u5f0f\uff08Password Credentials Grant\uff09",id:"\u7528\u6237\u540d\u5bc6\u7801\u5f0f\u6a21\u5f0fpassword-credentials-grant",level:2},{value:"\u6b65\u9aa4\u8be6\u89e3",id:"\u6b65\u9aa4\u8be6\u89e3-2",level:3},{value:"1. \u5ba2\u6237\u7aef",id:"1-\u5ba2\u6237\u7aef-2",level:5},{value:"2. \u6388\u6743\u670d\u52a1\u5668",id:"2-\u6388\u6743\u670d\u52a1\u5668-2",level:5},{value:"\u5ba2\u6237\u7aef\u6a21\u5f0f\uff08Client Credentials Grant\uff09",id:"\u5ba2\u6237\u7aef\u6a21\u5f0fclient-credentials-grant",level:2},{value:"\u6b65\u9aa4\u8be6\u89e3",id:"\u6b65\u9aa4\u8be6\u89e3-3",level:3},{value:"1. \u5ba2\u6237\u7aef",id:"1-\u5ba2\u6237\u7aef-3",level:5},{value:"2. \u6388\u6743\u670d\u52a1\u5668",id:"2-\u6388\u6743\u670d\u52a1\u5668-3",level:5},{value:"\u6388\u6743\u6a21\u5f0f\u5bf9\u6bd4",id:"\u6388\u6743\u6a21\u5f0f\u5bf9\u6bd4",level:2},{value:"\u6388\u6743\u6a21\u5f0f\u5206\u7c7b",id:"\u6388\u6743\u6a21\u5f0f\u5206\u7c7b",level:2}],c={toc:u},s="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"oauth-20"},"OAuth 2.0"),(0,r.kt)("p",null,"OAuth \u534f\u8bae\u53c8\u6709 1.0 \u548c 2.0 \u4e24\u4e2a\u7248\u672c\uff0c2.0 \u7248\u6574\u4e2a\u6388\u6743\u9a8c\u8bc1\u6d41\u7a0b\u66f4\u7b80\u5355\u66f4\u5b89\u5168\uff0c\u4e5f\u662f\u76ee\u524d\u6700\u4e3b\u8981\u7684\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\u548c\u6388\u6743\u65b9\u5f0f\u3002"),(0,r.kt)("h3",{id:"oauth-20-\u5b9a\u4e49"},"OAuth 2.0 \u5b9a\u4e49"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OAuth")," \u662f\u4e00\u4e2a\u5f00\u653e\u6807\u51c6\uff0c\u5141\u8bb8\u7528\u6237\u6388\u6743\u7b2c\u4e09\u65b9\u7f51\u7ad9\uff08\u4f8b\u5982 CSDN\u3001\u601d\u5426\u7b49\uff09\u83b7\u53d6\u7528\u6237\u6570\u636e\u3002\u800c\u4e0d\u9700\u8981\u5c06\u7528\u6237\u540d\u548c\u5bc6\u7801\u63d0\u4f9b\u7ed9\u7b2c\u4e09\u65b9\u7f51\u7ad9\uff1b\u5e38\u89c1\u7684\u63d0\u4f9b OAuth \u8ba4\u8bc1\u670d\u52a1\u7684\u5382\u5546\uff1a ",(0,r.kt)("strong",{parentName:"p"},"\u652f\u4ed8\u5b9d\u3001QQ\u3001\u5fae\u4fe1\u3001\u5fae\u535a\u3002")),(0,r.kt)("p",null,"\u7b80\u5355\u8bf4\uff0c",(0,r.kt)("strong",{parentName:"p"},"OAuth \u5c31\u662f\u4e00\u79cd\u6388\u6743\u673a\u5236\u3002\u6570\u636e\u7684\u6240\u6709\u8005\u544a\u8bc9\u7cfb\u7edf\uff0c\u540c\u610f\u6388\u6743\u7b2c\u4e09\u65b9\u5e94\u7528\u8fdb\u5165\u7cfb\u7edf\u5e76\u83b7\u53d6\u8fd9\u4e9b\u6570\u636e\u3002\u7cfb\u7edf\u4ece\u800c\u4ea7\u751f\u4e00\u4e2a\u77ed\u671f\u7684\u8fdb\u5165\u4ee4\u724c\uff08Token\uff09\uff0c\u7528\u6765\u4ee3\u66ff\u5bc6\u7801\uff0c\u4f9b\u7b2c\u4e09\u65b9\u5e94\u7528\u4f7f\u7528\u3002")),(0,r.kt)("h4",{id:"\u4ee4\u724c\u4e0e\u5bc6\u7801\u7684\u5dee\u5f02"},"\u4ee4\u724c\u4e0e\u5bc6\u7801\u7684\u5dee\u5f02"),(0,r.kt)("p",null,"\u4ee4\u724c\uff08Token\uff09\u4e0e\u5bc6\u7801\uff08Password\uff09\u7684\u4f5c\u7528\u662f\u4e00\u6837\u7684\uff0c\u90fd\u53ef\u4ee5\u8fdb\u5165\u7cfb\u7edf\uff0c\u4f46\u662f\u6709\u4e09\u70b9\u5dee\u5f02\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u4ee4\u724c\u662f\u77ed\u671f\u7684\uff0c\u5230\u671f\u4f1a\u81ea\u52a8\u5931\u6548\uff0c"),"\u7528\u6237\u81ea\u5df1\u65e0\u6cd5\u4fee\u6539\u3002\u5bc6\u7801\u4e00\u822c\u957f\u671f\u6709\u6548\uff0c\u7528\u6237\u4e0d\u4fee\u6539\uff0c\u5c31\u4e0d\u4f1a\u53d1\u751f\u53d8\u5316\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u4ee4\u724c\u53ef\u4ee5\u88ab\u6570\u636e\u6240\u6709\u8005\u64a4\u9500\uff0c\u4f1a\u7acb\u5373\u5931\u6548\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u4ee4\u724c\u6709\u6743\u9650\u8303\u56f4\uff08scope\uff09\uff1a")," \u5bf9\u4e8e\u7f51\u7edc\u670d\u52a1\u6765\u8bf4\uff0c\u53ea\u8bfb\u4ee4\u724c\u5c31\u6bd4\u8bfb\u5199\u4ee4\u724c\u66f4\u5b89\u5168\u3002\u5bc6\u7801\u4e00\u822c\u662f\u5b8c\u6574\u6743\u9650\u3002")),(0,r.kt)("p",null,"OAuth 2.0 \u5bf9\u4e8e\u5982\u4f55\u9881\u53d1\u4ee4\u724c\u7684\u7ec6\u8282\uff0c\u89c4\u5b9a\u5f97\u975e\u5e38\u8be6\u7ec6\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u4e00\u5171\u5206\u6210",(0,r.kt)("strong",{parentName:"p"},"\u56db\u79cd\u6388\u6743"),"\u6a21\u5f0f ",(0,r.kt)("strong",{parentName:"p"},"\uff08Authorization Grant\uff09")," \uff0c\u9002\u7528\u4e8e\u4e0d\u540c\u7684\u4e92\u8054\u7f51\u573a\u666f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6388\u6743\u7801\uff08authorization-code\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u9690\u85cf\u5f0f\uff08implicit\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5bc6\u7801\u5f0f\uff08password\uff09\uff1a"),(0,r.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u51ed\u8bc1\uff08client credentials\uff09")),(0,r.kt)("p",null,"\u65e0\u8bba\u54ea\u4e2a\u6a21\u5f0f\u90fd\u62e5\u6709\u4e09\u4e2a\u5fc5\u8981\u89d2\u8272\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"\u6388\u6743\u670d\u52a1\u5668"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"\u8d44\u6e90\u670d\u52a1\u5668"),"\uff0c\u6709\u7684\u8fd8\u6709",(0,r.kt)("strong",{parentName:"p"},"\u7528\u6237\uff08\u8d44\u6e90\u62e5\u6709\u8005\uff09"),"\u3002"),(0,r.kt)("h2",{id:"\u6388\u6743\u7801\u6a21\u5f0f"},"\u6388\u6743\u7801\u6a21\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6388\u6743\u7801\uff08Authorization Code Grant) \u65b9\u5f0f\uff0c\u6307\u7684\u662f\u7b2c\u4e09\u65b9\u5e94\u7528\u5148\u7533\u8bf7\u4e00\u4e2a\u6388\u6743\u7801\uff0c\u7136\u540e\u518d\u7528\u8be5\u7801\u83b7\u53d6\u4ee4\u724c\u3002")),(0,r.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u662f\u6700\u5e38\u7528\u7684\u6d41\u7a0b\uff0c\u5b89\u5168\u6027\u4e5f\u6700\u9ad8\uff0c\u5b83\u9002\u7528\u4e8e\u90a3\u4e9b\u6709\u540e\u7aef\u670d\u52a1\u7684 Web \u5e94\u7528\u3002\u6388\u6743\u7801\u901a\u8fc7\u524d\u7aef\u4f20\u9001\uff0c\u4ee4\u724c\u5219\u662f\u50a8\u5b58\u5728\u540e\u7aef\uff0c\u800c\u4e14\u6240\u6709\u4e0e\u8d44\u6e90\u670d\u52a1\u5668\u7684\u901a\u4fe1\u90fd\u5728\u540e\u7aef\u5b8c\u6210\u3002\u8fd9\u6837\u7684\u524d\u540e\u7aef\u5206\u79bb\uff0c\u53ef\u4ee5\u907f\u514d\u4ee4\u724c\u6cc4\u6f0f\u3002"),(0,r.kt)("p",null,"\u4e00\u53e5\u8bdd\u6982\u62ec\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef\u6362\u53d6\u6388\u6743\u7801\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528\u6388\u6743\u7801\u6362 Token\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528 Token \u8bbf\u95ee\u8d44\u6e90"),"\u3002"),(0,r.kt)("h3",{id:"\u6b65\u9aa4\u8be6\u89e3"},"\u6b65\u9aa4\u8be6\u89e3"),(0,r.kt)("h4",{id:"1-\u5ba2\u6237\u7aef"},"1. \u5ba2\u6237\u7aef"),(0,r.kt)("p",null,"\u6253\u5f00\u7f51\u7ad9 A\uff0c\u70b9\u51fb\u767b\u5f55\u6309\u94ae\uff0c\u8bf7\u6c42 A \u670d\u52a1\uff0cA \u670d\u52a1\u91cd\u5b9a\u5411 (\u91cd\u5b9a\u5411\u5730\u5740\u5982\u4e0b) \u81f3\u6388\u6743\u670d\u52a1\u5668\uff08\u5982QQ\u3001\u5fae\u4fe1\u6388\u6743\u670d\u52a1\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"https://qq.com/oauth/authorize?\n response_type=code&\n client_id=CLIENT_ID&\n redirect_uri=CALLBACK_URL&\n scope=read\n")),(0,r.kt)("p",null,"\u4e0a\u9762 URL \u4e2d\uff0cresponse_type \u53c2\u6570\u8868\u793a\u8981\u6c42\u8fd4\u56de\u6388\u6743\u7801\uff08code\uff09\uff0cclient_id \u53c2\u6570\u8ba9 B \u77e5\u9053\u662f\u8c01\u5728\u8bf7\u6c42\uff0credirect_uri \u53c2\u6570\u662f B \u63a5\u53d7\u6216\u62d2\u7edd\u8bf7\u6c42\u540e\u7684\u8df3\u8f6c\u7f51\u5740\uff0cscope \u53c2\u6570\u8868\u793a\u8981\u6c42\u7684\u6388\u6743\u8303\u56f4\uff08\u8fd9\u91cc\u662f\u53ea\u8bfb\uff09"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.7wate.com/img/2022/08/30/cd507ff3bb9b9.png",alt:"\u6388\u6743\u7801\u6a21\u5f0f"})),(0,r.kt)("h4",{id:"2-\u6388\u6743\u670d\u52a1\u5668"},"2. \u6388\u6743\u670d\u52a1\u5668"),(0,r.kt)("p",null,"\u6388\u6743\u670d\u52a1\u7f51\u7ad9\u4f1a\u8981\u6c42\u7528\u6237\u767b\u5f55\uff0c\u7136\u540e\u8be2\u95ee\u662f\u5426\u540c\u610f\u7ed9\u4e88 A \u7f51\u7ad9\u6388\u6743\u3002\u7528\u6237\u8868\u793a\u540c\u610f\uff0c\u8fd9\u65f6\u6388\u6743\u670d\u52a1\u7f51\u7ad9\u5c31\u4f1a\u8df3\u56de redirect_uri \u53c2\u6570\u6307\u5b9a\u7684\u7f51\u5740\u3002\u8df3\u8f6c\u65f6\uff0c\u4f1a\u4f20\u56de\u4e00\u4e2a\u6388\u6743\u7801\uff0c\u5c31\u50cf\u4e0b\u9762\u8fd9\u6837\uff0ccode \u53c2\u6570\u5c31\u662f\u6388\u6743\u7801\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"https://a.com/callback?code=AUTHORIZATION_CODE\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.7wate.com/img/2022/08/30/e8a2a515684a0.png",alt:"\u6388\u6743\u670d\u52a1\u5668"})),(0,r.kt)("h4",{id:"3-\u7f51\u7ad9-a-\u670d\u52a1\u5668"},"3. \u7f51\u7ad9 A \u670d\u52a1\u5668"),(0,r.kt)("p",null,"\u62ff\u5230\u6388\u6743\u7801\u4ee5\u540e\uff0c\u5c31\u53ef\u4ee5\u5411 \u6388\u6743\u670d\u52a1\u5668 (qq.com) \u8bf7\u6c42\u4ee4\u724c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"https://qq.com/oauth/token?\n client_id=CLIENT_ID&\n client_secret=CLIENT_SECRET&\n grant_type=authorization_code&\n code=AUTHORIZATION_CODE&\n redirect_uri=CALLBACK_URL\n")),(0,r.kt)("p",null,"\u4e0a\u9762 URL \u4e2d\uff0cclient_id \u53c2\u6570\u548c client_secret \u53c2\u6570\u7528\u6765\u8ba9\u6388\u6743\u670d\u52a1\u5668 \u786e\u8ba4 A \u7684\u8eab\u4efd\uff08client_secret \u53c2\u6570\u662f\u4fdd\u5bc6\u7684\uff0c\u56e0\u6b64\u53ea\u80fd\u5728\u540e\u7aef\u53d1\u8bf7\u6c42\uff09\uff0cgrant_type \u53c2\u6570\u7684\u503c\u662f AUTHORIZATION_CODE\uff0c\u8868\u793a\u91c7\u7528\u7684\u6388\u6743\u65b9\u5f0f\u662f\u6388\u6743\u7801\uff0ccode \u53c2\u6570\u662f\u4e0a\u4e00\u6b65\u62ff\u5230\u7684\u6388\u6743\u7801\uff0credirect_uri \u53c2\u6570\u662f\u4ee4\u724c\u9881\u53d1\u540e\u7684\u56de\u8c03\u7f51\u5740\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.7wate.com/img/2022/08/30/f75bff03879bd.png",alt:"\u7f51\u7ad9 A \u670d\u52a1\u5668"})),(0,r.kt)("h4",{id:"4-\u6388\u6743\u670d\u52a1\u5668"},"4. \u6388\u6743\u670d\u52a1\u5668"),(0,r.kt)("p",null,"\u6536\u5230\u8bf7\u6c42\u4ee5\u540e\uff0c\u9a8c\u8bc1\u901a\u8fc7\uff0c\u5c31\u4f1a\u9881\u53d1\u4ee4\u724c\uff1b\u5177\u4f53\u505a\u6cd5\u662f\u5411 redirect_uri \u6307\u5b9a\u7684\u7f51\u5740\uff0c\u53d1\u9001\u4e00\u6bb5 JSON \u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{    \n   "access_token":"ACCESS_TOKEN",\n   "token_type":"bearer",\n   "expires_in":2592000,\n   "refresh_token":"REFRESH_TOKEN",\n   "scope":"read",\n   "uid":100101,\n   "info":{...}\n}\n')),(0,r.kt)("p",null,"\u4e0a\u9762 JSON \u6570\u636e\u4e2d\uff0caccess_token \u5b57\u6bb5\u5c31\u662f\u4ee4\u724c\uff0cA \u7f51\u7ad9\u5728\u540e\u7aef\u62ff\u5230\u4e86\uff0c\u7136\u540e\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u5373\u53ef\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.7wate.com/img/2022/08/30/e8a7b64693d3c.png",alt:"\u6388\u6743\u670d\u52a1\u5668"})),(0,r.kt)("h2",{id:"\u9690\u85cf\u5f0f\u6a21\u5f0fimplicit-grant"},"\u9690\u85cf\u5f0f\u6a21\u5f0f\uff08Implicit Grant\uff09"),(0,r.kt)("p",null,"\u6709\u4e9b Web \u5e94\u7528\u662f\u7eaf\u524d\u7aef\u5e94\u7528\uff0c\u6ca1\u6709\u540e\u7aef\uff1b\u8fd9\u65f6\u5c31\u4e0d\u80fd\u7528\u4e0a\u9762\u7684\u65b9\u5f0f\u4e86\uff0c\u5fc5\u987b\u5c06\u4ee4\u724c\u50a8\u5b58\u5728\u524d\u7aef\u3002"),(0,r.kt)("p",null,"OAuth2.0 \u5c31\u89c4\u5b9a\u4e86",(0,r.kt)("strong",{parentName:"p"},'\u7b2c\u4e8c\u79cd\u65b9\u5f0f\uff0c\u5141\u8bb8\u76f4\u63a5\u5411\u524d\u7aef\u9881\u53d1\u4ee4\u724c\u3002\u8fd9\u79cd\u65b9\u5f0f\u6ca1\u6709\u6388\u6743\u7801\u8fd9\u4e2a\u4e2d\u95f4\u6b65\u9aa4\uff0c\u6240\u4ee5\u79f0\u4e3a\uff08\u6388\u6743\u7801\uff09"\u9690\u85cf\u5f0f"\uff08implicit\uff09'),"\u3002"),(0,r.kt)("p",null,"\u4e00\u53e5\u8bdd\u6982\u62ec\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef\u8ba9\u7528\u6237\u767b\u5f55\u6388\u6743\u670d\u52a1\u5668\u6362 Token\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528 Token \u8bbf\u95ee\u8d44\u6e90\u3002")),(0,r.kt)("h3",{id:"\u6b65\u9aa4\u8be6\u89e3-1"},"\u6b65\u9aa4\u8be6\u89e3"),(0,r.kt)("h4",{id:"1-\u5ba2\u6237\u7aef-1"},"1. \u5ba2\u6237\u7aef"),(0,r.kt)("p",null,"\u6253\u5f00\u7f51\u7ad9 A\uff0c\u7136\u540e A \u7f51\u7ad9\u63d0\u4f9b\u4e00\u4e2a\u94fe\u63a5\uff0c\u8981\u6c42\u7528\u6237\u8df3\u8f6c\u5230\u6388\u6743\u670d\u52a1\u5668\uff0c\u6388\u6743\u7528\u6237\u6570\u636e\u7ed9 A \u7f51\u7ad9\u4f7f\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"https://qq.com/oauth/authorize?\n response_type=token&\n client_id=CLIENT_ID&\n redirect_uri=CALLBACK_URL&\n scope=read\n")),(0,r.kt)("p",null,"\u4e0a\u9762 URL \u4e2d\uff0cresponse_type \u53c2\u6570\u4e3a token\uff0c\u8868\u793a\u8981\u6c42\u76f4\u63a5\u8fd4\u56de\u4ee4\u724c\u3002"),(0,r.kt)("h4",{id:"2-\u6388\u6743\u670d\u52a1\u5668-1"},"2. \u6388\u6743\u670d\u52a1\u5668"),(0,r.kt)("p",null,"\u7528\u6237\u8df3\u8f6c\u5230\u6388\u6743\u670d\u52a1\u5668\uff0c\u767b\u5f55\u540e\u540c\u610f\u7ed9\u4e88 A \u7f51\u7ad9\u6388\u6743\u3002\u8fd9\u65f6\uff0c\u6388\u6743\u670d\u52a1\u5668\u5c31\u4f1a\u8df3\u56de redirect_uri \u53c2\u6570\u6307\u5b9a\u7684\u8df3\u8f6c\u7f51\u5740\uff0c\u5e76\u4e14\u628a\u4ee4\u724c\u4f5c\u4e3a URL \u53c2\u6570\uff0c\u4f20\u7ed9 A \u7f51\u7ad9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"https://a.com/callback#token=ACCESS_TOKEN\n")),(0,r.kt)("p",null,"\u4e0a\u9762 URL \u4e2d\uff0ctoken \u53c2\u6570\u5c31\u662f\u4ee4\u724c\uff0cA \u7f51\u7ad9\u56e0\u6b64\u76f4\u63a5\u5728\u524d\u7aef\u62ff\u5230\u4ee4\u724c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.7wate.com/img/2022/08/30/0e02abdb53ae8.png",alt:"\u6388\u6743\u670d\u52a1\u5668"})),(0,r.kt)("p",null,"\u8fd8\u6709\u9700\u8981",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\u7684\u5730\u65b9\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'\u4ee4\u724c\u7684\u4f4d\u7f6e\u662f URL \u951a\u70b9\uff08fragment\uff09\uff0c\u800c\u4e0d\u662f\u67e5\u8be2\u5b57\u7b26\u4e32\uff08querystring\uff09\uff0c\u8fd9\u662f\u56e0\u4e3a OAuth 2.0 \u5141\u8bb8\u8df3\u8f6c\u7f51\u5740\u662f HTTP \u534f\u8bae\uff0c\u56e0\u6b64\u5b58\u5728"\u4e2d\u95f4\u4eba\u653b\u51fb"\u7684\u98ce\u9669\uff0c\u800c\u6d4f\u89c8\u5668\u8df3\u8f6c\u65f6\uff0c\u951a\u70b9\u4e0d\u4f1a\u53d1\u5230\u670d\u52a1\u5668\uff0c\u5c31\u51cf\u5c11\u4e86\u6cc4\u6f0f\u4ee4\u724c\u7684\u98ce\u9669\u3002'),(0,r.kt)("li",{parentName:"ol"},"\u8fd9\u79cd\u65b9\u5f0f\u628a\u4ee4\u724c\u76f4\u63a5\u4f20\u7ed9\u524d\u7aef\uff0c\u662f\u5f88\u4e0d\u5b89\u5168\u7684\u3002\u56e0\u6b64\uff0c\u53ea\u80fd\u7528\u4e8e\u4e00\u4e9b\u5b89\u5168\u8981\u6c42\u4e0d\u9ad8\u7684\u573a\u666f\uff0c\u5e76\u4e14\u4ee4\u724c\u7684\u6709\u6548\u671f\u5fc5\u987b\u975e\u5e38\u77ed\uff0c\u901a\u5e38\u5c31\u662f\u4f1a\u8bdd\u671f\u95f4\uff08session\uff09\u6709\u6548\uff0c\u6d4f\u89c8\u5668\u5173\u6389\uff0c\u4ee4\u724c\u5c31\u5931\u6548\u4e86\u3002")),(0,r.kt)("h2",{id:"\u7528\u6237\u540d\u5bc6\u7801\u5f0f\u6a21\u5f0fpassword-credentials-grant"},"\u7528\u6237\u540d\u5bc6\u7801\u5f0f\u6a21\u5f0f\uff08Password Credentials Grant\uff09"),(0,r.kt)("p",null,'\u5982\u679c\u4f60\u9ad8\u5ea6\u4fe1\u4efb\u67d0\u4e2a\u5e94\u7528\uff0cOAuth 2.0 \u4e5f\u5141\u8bb8\u7528\u6237\u628a\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u76f4\u63a5\u544a\u8bc9\u8be5\u5e94\u7528\u3002\u8be5\u5e94\u7528\u5c31\u4f7f\u7528\u4f60\u7684\u5bc6\u7801\uff0c\u7533\u8bf7\u4ee4\u724c\uff0c\u8fd9\u79cd\u65b9\u5f0f\u79f0\u4e3a"\u5bc6\u7801\u5f0f"\uff08password\uff09\u3002'),(0,r.kt)("p",null,"\u4e00\u53e5\u8bdd\u6982\u62ec\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u7528\u6237\u5728\u5ba2\u6237\u7aef\u63d0\u4ea4\u8d26\u53f7\u5bc6\u7801\u6362 Token\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528 Token\u8bbf\u95ee\u8d44\u6e90\u3002")),(0,r.kt)("h3",{id:"\u6b65\u9aa4\u8be6\u89e3-2"},"\u6b65\u9aa4\u8be6\u89e3"),(0,r.kt)("h5",{id:"1-\u5ba2\u6237\u7aef-2"},"1. \u5ba2\u6237\u7aef"),(0,r.kt)("p",null,"A \u7f51\u7ad9\u8981\u6c42\u7528\u6237\u63d0\u4f9b \u6388\u6743\u670d\u52a1\u5668\uff08qq.com\uff09\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002\u62ff\u5230\u4ee5\u540e\uff0cA \u5c31\u76f4\u63a5\u5411\u6388\u6743\u670d\u52a1\u5668\u8bf7\u6c42\u4ee4\u724c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"https://oauth.b.com/token?\n grant_type=password&\n username=USERNAME&\n password=PASSWORD&\n client_id=CLIENT_ID\n")),(0,r.kt)("p",null,'\u4e0a\u9762 URL \u4e2d\uff0cgrant_type \u53c2\u6570\u662f\u6388\u6743\u65b9\u5f0f\uff0c\u8fd9\u91cc\u7684 password \u8868\u793a"\u5bc6\u7801\u5f0f"\uff0cusername \u548c password \u662f\u6388\u6743\u670d\u52a1\u5668\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002'),(0,r.kt)("h5",{id:"2-\u6388\u6743\u670d\u52a1\u5668-2"},"2. \u6388\u6743\u670d\u52a1\u5668"),(0,r.kt)("p",null,"\u6388\u6743\u670d\u52a1\u5668\u9a8c\u8bc1\u8eab\u4efd\u901a\u8fc7\u540e\uff0c\u76f4\u63a5\u7ed9\u51fa\u4ee4\u724c\u3002\u6ce8\u610f\uff0c\u8fd9\u65f6\u4e0d\u9700\u8981\u8df3\u8f6c\uff0c\u800c\u662f\u628a\u4ee4\u724c\u653e\u5728 JSON \u6570\u636e\u91cc\u9762\uff0c\u4f5c\u4e3a HTTP \u56de\u5e94\uff0cA \u7f51\u7ad9\u56e0\u6b64\u62ff\u5230\u4ee4\u724c\u3002"),(0,r.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u9700\u8981\u7528\u6237\u7ed9\u51fa\u81ea\u5df1\u7684\u7528\u6237\u540d/\u5bc6\u7801\uff0c\u663e\u7136\u98ce\u9669\u5f88\u5927\uff0c\u56e0\u6b64\u53ea\u9002\u7528\u4e8e\u5176\u4ed6\u6388\u6743\u65b9\u5f0f\u90fd\u65e0\u6cd5\u91c7\u7528\u7684\u60c5\u51b5\uff0c\u800c\u4e14\u5fc5\u987b\u662f\u7528\u6237\u9ad8\u5ea6\u4fe1\u4efb\u7684\u5e94\u7528\u3002"),(0,r.kt)("h2",{id:"\u5ba2\u6237\u7aef\u6a21\u5f0fclient-credentials-grant"},"\u5ba2\u6237\u7aef\u6a21\u5f0f\uff08Client Credentials Grant\uff09"),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u6a21\u5f0f\u6307\u5ba2\u6237\u7aef\u4ee5\u81ea\u5df1\u7684\u540d\u4e49\uff0c\u800c\u4e0d\u662f\u4ee5\u7528\u6237\u7684\u540d\u4e49\uff0c\u5411\u6388\u6743\u670d\u52a1\u5668\u8fdb\u884c\u8ba4\u8bc1\u3002\u4e3b\u8981\u9002\u7528\u4e8e\u6ca1\u6709\u524d\u7aef\u7684\u547d\u4ee4\u884c\u5e94\u7528\u3002"),(0,r.kt)("p",null,"\u4e00\u53e5\u8bdd\u6982\u62ec\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef\u4f7f\u7528\u81ea\u5df1\u7684\u6807\u8bc6\u6362token\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528token\u8bbf\u95ee\u8d44\u6e90"),"\u3002"),(0,r.kt)("h3",{id:"\u6b65\u9aa4\u8be6\u89e3-3"},"\u6b65\u9aa4\u8be6\u89e3"),(0,r.kt)("h5",{id:"1-\u5ba2\u6237\u7aef-3"},"1. \u5ba2\u6237\u7aef"),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u5411\u6388\u6743\u670d\u52a1\u5668\u8fdb\u884c\u8eab\u4efd\u8ba4\u8bc1\uff0c\u5e76\u8981\u6c42\u4e00\u4e2a\u8bbf\u95ee\u4ee4\u724c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"https://oauth.b.com/token?\n grant_type=client_credentials&\n client_id=CLIENT_ID&\n client_secret=CLIENT_SECRET\n")),(0,r.kt)("p",null,"\u4e0a\u9762 URL \u4e2d\uff0cgrant_type \u53c2\u6570\u7b49\u4e8e client_credentials \u8868\u793a\u91c7\u7528\u51ed\u8bc1\u5f0f\uff0cclient_id \u548c client_secret \u7528\u6765\u8ba9\u6388\u6743\u670d\u52a1\u5668\u786e\u8ba4 A \u7684\u8eab\u4efd\u3002"),(0,r.kt)("h5",{id:"2-\u6388\u6743\u670d\u52a1\u5668-3"},"2. \u6388\u6743\u670d\u52a1\u5668"),(0,r.kt)("p",null,"\u6388\u6743\u670d\u52a1\u5668\u9a8c\u8bc1\u901a\u8fc7\u4ee5\u540e\uff0c\u76f4\u63a5\u8fd4\u56de\u4ee4\u724c\u3002\u8fd9\u79cd\u65b9\u5f0f\u7ed9\u51fa\u7684\u4ee4\u724c\uff0c\u662f\u9488\u5bf9\u7b2c\u4e09\u65b9\u5e94\u7528\u7684\uff0c\u800c\u4e0d\u662f\u9488\u5bf9\u7528\u6237\u7684\uff0c\u5373\u6709\u53ef\u80fd\u591a\u4e2a\u7528\u6237\u5171\u4eab\u540c\u4e00\u4e2a\u4ee4\u724c\u3002"),(0,r.kt)("h2",{id:"\u6388\u6743\u6a21\u5f0f\u5bf9\u6bd4"},"\u6388\u6743\u6a21\u5f0f\u5bf9\u6bd4"),(0,r.kt)("p",null,"\u6309\u6388\u6743\u9700\u8981\u7684\u591a\u7aef\u60c5\u51b5\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6a21\u5f0f"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9700\u8981\u524d\u7aef"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9700\u8981\u540e\u7aef"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9700\u8981\u7528\u6237\u54cd\u5e94"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9700\u8981\u5ba2\u6237\u7aef\u5bc6\u94a5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6388\u6743\u7801\u6a21\u5f0f Authorization Code"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u9690\u5f0f\u6388\u6743\u6a21\u5f0f Implicit Grant"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801\u6388\u6743\u6a21\u5f0f Password Grant"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u6388\u6743\u6a21\u5f0f Client Credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("h2",{id:"\u6388\u6743\u6a21\u5f0f\u5206\u7c7b"},"\u6388\u6743\u6a21\u5f0f\u5206\u7c7b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.7wate.com/img/2022/08/30/aa101efbae0a2.png",alt:"\u6309\u7167\u5ba2\u6237\u7aef\u7c7b\u578b\u4e0e\u8bbf\u95ee\u4ee4\u724c\u6240\u6709\u8005\u5206\u7c7b"})))}k.isMDXComponent=!0}}]);