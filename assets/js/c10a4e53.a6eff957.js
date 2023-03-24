"use strict";(self.webpackChunkstsinc_docs=self.webpackChunkstsinc_docs||[]).push([[1953],{4745:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={},o="\u914d\u7f6eLDAP",l={unversionedId:"ERPNext\u96c6\u6210/\u8ba4\u8bc1\u96c6\u6210/\u914d\u7f6eLDAP",id:"ERPNext\u96c6\u6210/\u8ba4\u8bc1\u96c6\u6210/\u914d\u7f6eLDAP",title:"\u914d\u7f6eLDAP",description:"LDAP\u88ab\u8bb8\u591a\u4e2d\u5c0f\u7ec4\u7ec7\u7528\u4e8e\u505a\u96c6\u4e2d\u8bbf\u95ee\u63a7\u5236\u7684\u7ba1\u7406\u3002 \u901a\u8fc7\u8bbe\u7f6eLDAP\u7684\u670d\u52a1\uff0c \u4f60\u80fd\u591f\u901a\u8fc7LDAP\u7684\u8ba4\u8bc1\u4fe1\u606f\u4f5c\u4e3a\u8d26\u53f7\u8bbf\u95eeERPNext\u3002",source:"@site/docs/120. ERPNext\u96c6\u6210/\u8ba4\u8bc1\u96c6\u6210/\u914d\u7f6eLDAP.md",sourceDirName:"120. ERPNext\u96c6\u6210/\u8ba4\u8bc1\u96c6\u6210",slug:"/ERPNext\u96c6\u6210/\u8ba4\u8bc1\u96c6\u6210/\u914d\u7f6eLDAP",permalink:"/docs/V14/ERPNext\u96c6\u6210/\u8ba4\u8bc1\u96c6\u6210/\u914d\u7f6eLDAP",draft:!1,editUrl:"https://github.com/guinanlin/erpnext-zh-doc/docs/120. ERPNext\u96c6\u6210/\u8ba4\u8bc1\u96c6\u6210/\u914d\u7f6eLDAP.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ERPNext\u96c6\u6210",permalink:"/docs/V14/ERPNext\u96c6\u6210/"},next:{title:"\u4ecb\u7ecd",permalink:"/docs/V14/\u8d22\u52a1/"}},p={},s=[{value:"1. \u524d\u63d0 ",id:"1-\u524d\u63d0-",level:2},{value:"2. \u914d\u7f6eLDAP ",id:"2-\u914d\u7f6eldap-",level:2},{value:"2.1 LDAP Security ",id:"21-ldap-security-",level:3},{value:"2.2 LDAP Group Mappings ",id:"22-ldap-group-mappings-",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u914d\u7f6eldap"},"\u914d\u7f6eLDAP"),(0,a.kt)("p",null,"LDAP\u88ab\u8bb8\u591a\u4e2d\u5c0f\u7ec4\u7ec7\u7528\u4e8e\u505a\u96c6\u4e2d\u8bbf\u95ee\u63a7\u5236\u7684\u7ba1\u7406\u3002 \u901a\u8fc7\u8bbe\u7f6eLDAP\u7684\u670d\u52a1\uff0c \u4f60\u80fd\u591f\u901a\u8fc7LDAP\u7684\u8ba4\u8bc1\u4fe1\u606f\u4f5c\u4e3a\u8d26\u53f7\u8bbf\u95eeERPNext\u3002"),(0,a.kt)("h2",{id:"1-\u524d\u63d0-"},"1. \u524d\u63d0",(0,a.kt)("a",{parentName:"h2",href:"https://docs.erpnext.com/docs/v13/user/manual/en/erpnext_integration/ldap-integration#1-prerequisites"}," ")),(0,a.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7528LDAP\uff0c \u9996\u5148\u8981\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"ldap3"),"\u7684Python\u6a21\u5757. \u9996\u5148\u662f\u8981\u5148\u6253\u5f00ERPNext\u5b9e\u4f8b\u7684\u4e3b\u673a\u7ec8\u7aef\u3002 "),(0,a.kt)("p",null,"\u8fdb\u5165\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"frappe-bench"),"\u76ee\u5f55\uff0c \u8fd0\u884c\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"./env/bin/pip install ldap3")," "),(0,a.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u7684\u65b9\u5f0f\u9a8c\u8bc1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./env/bin/pip freeze | grep ldap3\nldap3==2.9.1\n")),(0,a.kt)("p",null,"\u73b0\u5728\u4f60\u5c31\u53ef\u4ee5\u5728ERPNext\u4e2d\u542f\u7528LDAP\u670d\u52a1\u3002"),(0,a.kt)("h2",{id:"2-\u914d\u7f6eldap-"},"2. \u914d\u7f6eLDAP",(0,a.kt)("a",{parentName:"h2",href:"https://docs.erpnext.com/docs/v13/user/manual/en/erpnext_integration/ldap-integration#2-setting-up-ldap"}," ")),(0,a.kt)("p",null,"\u4e3a\u4e86\u914d\u7f6eLDAP\uff0c\u9996\u5148\u9700\u8981\u8fdb\u5165\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9996\u9875 > \u96c6\u6210 > LDAP \u914d\u7f6e")),(0,a.kt)("p",null,"\u4e3a\u4e86 ERPNext \u80fd\u591f\u8fde\u63a5\u5230 LDAP\uff0c \u8bb8\u591a\u53c2\u6570\u90fd\u662f\u5fc5\u987b\u7684. \u4e3b\u8981\u5305\u62ec:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"LDAP Server URL: LDAP \u670d\u52a1\u5668\u5730\u5740. \u5730\u5740\u7684\u683c\u5f0f ",(0,a.kt)("inlineCode",{parentName:"p"},"ldap://yourserver:port")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"ldaps://yourserver:port"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Base Distinguished Name (DN): This is the distinguished name of the user that has permissions to look up user details on your LDAP server. This should be a user that only has read-only permissions on your LDAP Server.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Password for Base DN: This is the password for the user above, that is used to look up user details on your LDAP server.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Organization Unit of Users: This is the DN of the Organizational Unit that all users in your LDAP server must be part of to be able to log into ERPNext.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Default Role on Creation: When the user is created in ERPNext, they will be assigned with this default role, the first time they log in.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"LDAP Search String: This field allows ERPNext to match the user/email entered in the ERPNext login screen, with the LDAP Server. For example, you could use email address, or username depending on your preference."),(0,a.kt)("p",{parentName:"li"},"It must be entered in the format: ",(0,a.kt)("inlineCode",{parentName:"p"},"LDAPFIELD={0}")),(0,a.kt)("p",{parentName:"li"},"Active Directory username example: ",(0,a.kt)("inlineCode",{parentName:"p"},"sAMAccountName={0}")),(0,a.kt)("p",{parentName:"li"},"Open LDAP username example: ",(0,a.kt)("inlineCode",{parentName:"p"},"uid={0}"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"LDAP Email Field: Specifies the LDAP field that contains the email address of the user."),(0,a.kt)("p",{parentName:"li"},"Active Directory and Open LDAP example: ",(0,a.kt)("inlineCode",{parentName:"p"},"mail"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"LDAP Username Field: Specifies the LDAP field that contains the username of the user."),(0,a.kt)("p",{parentName:"li"},"Active Directory example : ",(0,a.kt)("inlineCode",{parentName:"p"},"sAMAccountName")),(0,a.kt)("p",{parentName:"li"},"Open LDAP example: ",(0,a.kt)("inlineCode",{parentName:"p"},"uid"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"LDAP First Name Field: Specifies the LDAP field that contains the first name of the user."),(0,a.kt)("p",{parentName:"li"},"Active Directory example: ",(0,a.kt)("inlineCode",{parentName:"p"},"givenName")),(0,a.kt)("p",{parentName:"li"},"Open LDAP example: ",(0,a.kt)("inlineCode",{parentName:"p"},"sn")))),(0,a.kt)("p",null,"There are many other non-mandatory fields that you can use to map your LDAP user fields to the ERPNext user fields. They are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Middle Name"),(0,a.kt)("li",{parentName:"ul"},"Phone"),(0,a.kt)("li",{parentName:"ul"},"Mobile")),(0,a.kt)("p",null,"Once your settings are correct, you can click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Enabled")," checkbox at the top. When attempting to enable LDAP, ERPNext will try and connect to the LDAP server to ensure the settings are correct. If it fails, you will not be able to enable LDAP and will receive an error message."),(0,a.kt)("p",null,"The error message will indicate the issue that needs to be resolved to continue."),(0,a.kt)("p",null,"After setting enabling LDAP, on the login screen, the system enables ",(0,a.kt)("strong",{parentName:"p"},"Login Via LDAP")," option."),(0,a.kt)("h3",{id:"21-ldap-security-"},"2.1 LDAP Security",(0,a.kt)("a",{parentName:"h3",href:"https://docs.erpnext.com/docs/v13/user/manual/en/erpnext_integration/ldap-integration#21-ldap-security"}," ")),(0,a.kt)("p",null,"In the LDAP Security section, You have many options to connect securely to your LDAP server."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"ssltls-mode-"},"SSL/TLS Mode",(0,a.kt)("a",{parentName:"h5",href:"https://docs.erpnext.com/docs/v13/user/manual/en/erpnext_integration/ldap-integration#ssltls-mode"}," ")),(0,a.kt)("p",{parentName:"li"},"Specifies whether you want to start a TLS session on initial connection to the LDAP server.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"require-trusted-certificate-"},"Require Trusted Certificate",(0,a.kt)("a",{parentName:"h5",href:"https://docs.erpnext.com/docs/v13/user/manual/en/erpnext_integration/ldap-integration#require-trusted-certificate"}," ")),(0,a.kt)("p",{parentName:"li"},"Specifies if you require a trusted certificate to connect to the LDAP server"),(0,a.kt)("p",{parentName:"li"},"If you are specifying a trusted certificate, you will need to specify the paths to your certificate files. These files are to be placed on your ERPNext server, and the following fields should be an absolute path to the files on your server. The certificate fields are:")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Path to private Key File")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Path to Server Certificate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Path to CA Certs File"))),(0,a.kt)("h3",{id:"22-ldap-group-mappings-"},"2.2 LDAP Group Mappings",(0,a.kt)("a",{parentName:"h3",href:"https://docs.erpnext.com/docs/v13/user/manual/en/erpnext_integration/ldap-integration#22-ldap-group-mappings"}," ")),(0,a.kt)("p",null,"ERPNext also allows you to automatically map multiple LDAP groups to the appropriate ERPNext roles. For example, you may want all of your Accounting employees, to automatically have the Accounts User Role."),(0,a.kt)("p",null,"Ensure that you fill out the LDAP Group Field to allow this. This is the LDAP field that is found on a user object in LDAP, that has all of the groups the user is a member of."),(0,a.kt)("p",null,"For Active Directory and Open LDAP, this field should be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"memberOf"),"."),(0,a.kt)("p",null,"Open LDAP may need this field to be enabled on your LDAP server. Please see examples on the internet for more details."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that all ERPNext roles will be checked each time a user logs on and will be removed or added to the user's permissions.")),(0,a.kt)("p",null,"In the LDAP Settings area, there are two dropdowns. 1. SSL/TLS Mode - set this to ",(0,a.kt)("strong",{parentName:"p"},"StartTLS")," to connect to your LDAP server using StartTLS. If your LDAP server does not support StartTLS, setting this to StartTLS will result in an error ",(0,a.kt)("inlineCode",{parentName:"p"},"StartTLS is not supported"),". Check the configuration on your LDAP server if you receive this error. 2. Require Trusted Certificate - if you change this to ",(0,a.kt)("strong",{parentName:"p"},"Yes")," then the certificate provided by the LDAP server must be trusted by the Frappe/ERPNext server. If you would rather use StartTLS with a self-signed (untrusted) certificate, set this to ",(0,a.kt)("strong",{parentName:"p"},"No"),". If you do not use StartTLS, this setting is ignored."))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);