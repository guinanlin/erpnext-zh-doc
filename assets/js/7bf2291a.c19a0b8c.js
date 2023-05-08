"use strict";(self.webpackChunkstsinc_docs=self.webpackChunkstsinc_docs||[]).push([[5210],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={},p=void 0,l={unversionedId:"\u5e94\u7528\u5f00\u53d1/Rest API",id:"\u5e94\u7528\u5f00\u53d1/Rest API",title:"Rest API",description:"\u5185\u90e8\u8c03\u7528",source:"@site/best-practice/20. \u5e94\u7528\u5f00\u53d1/Rest API.md",sourceDirName:"20. \u5e94\u7528\u5f00\u53d1",slug:"/\u5e94\u7528\u5f00\u53d1/Rest API",permalink:"/best-practice/\u5e94\u7528\u5f00\u53d1/Rest API",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Frappe.call \u8c03\u7528\u4f8b\u5b50",permalink:"/best-practice/\u5e94\u7528\u5f00\u53d1/Frappe.call \u8c03\u7528\u4f8b\u5b50"},next:{title:"bench execute\u65b9\u6cd5",permalink:"/best-practice/\u8c03\u8bd5\u6280\u5de7/bench execute\u65b9\u6cd5"}},c={},i=[{value:"\u5185\u90e8\u8c03\u7528",id:"\u5185\u90e8\u8c03\u7528",level:2},{value:"\u5916\u90e8\u8c03\u7528",id:"\u5916\u90e8\u8c03\u7528",level:2},{value:"WebHooks\u8c03\u7528",id:"webhooks\u8c03\u7528",level:2}],s={toc:i},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5185\u90e8\u8c03\u7528"},"\u5185\u90e8\u8c03\u7528"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Doctype CRUD \u64cd\u4f5c\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST\uff1a  /api/resource/{doctype}\nGET:       /api/resource/{doctype}/{name}\nPUT:       /api/resource/{doctype}/{name}\nDELETE: /api/resource/{doctype}/{name}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GET \u67e5\u8be2")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'GET /api/resource/Sales Order\n    ?filters=[["customer","=","Frappe shcool"]]\n    &fields=["name","grand_total"]\n    &order_by=creation desc\n')),(0,o.kt)("h2",{id:"\u5916\u90e8\u8c03\u7528"},"\u5916\u90e8\u8c03\u7528"),(0,o.kt)("p",null,"\u8fdc\u7a0b\u65b9\u6cd5\u8c03\u7528"),(0,o.kt)("p",null,"\u670d\u52a1\u7aef\u6587\u4ef6\u7ed3\u6784\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'app/module/file.py\n@frappe.whitelist()\ndef greet(name):\n    return f"Hello,{name}"\n')),(0,o.kt)("p",null,"\u5ba2\u6237\u7aef\u8c03\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'POST /api/method/app.module.file.greet\n{"name": "JImmy"}\n')),(0,o.kt)("p",null,"\u54cd\u5e94\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n"message": "Hello,Jimmy"\n}\n')),(0,o.kt)("h2",{id:"webhooks\u8c03\u7528"},"WebHooks\u8c03\u7528"),(0,o.kt)("p",null,"From ERPNext to Telegram"),(0,o.kt)("p",null,"ERPNext"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Doctye: Sales Order\n\nHook: on_submit\n\nCondition: doc.via_ecommerce\n\n//request body simplified\n\n{\n\n"chat_id": 1310788794\n\n"text": "New Order from {{doc.customer}}",\n\n"url": "{{frappe.utils.get_url_to_form(doc.doctype,doc.name)}}"\n\n}\n')),(0,o.kt)("p",null,"Telegram:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"post\n\napi.telegram.org /token/sendMessage\n")))}m.isMDXComponent=!0}}]);