"use strict";(self.webpackChunkstsinc_docs=self.webpackChunkstsinc_docs||[]).push([[802],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1643:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},o="frappe-js-sdk",i={unversionedId:"API/frappe-js-sdk API",id:"API/frappe-js-sdk API",title:"frappe-js-sdk",description:"\u5730\u5740\uff1ahttps://github.com/The-Commit-Company/frappe-js-sdk",source:"@site/resource-center/10. API/20. frappe-js-sdk API.md",sourceDirName:"10. API",slug:"/API/frappe-js-sdk API",permalink:"/resource-center/API/frappe-js-sdk API",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Frappe DataTable \u914d\u7f6e",permalink:"/resource-center/API/Frappe DataTabale API"},next:{title:"\u8d22\u52a1\u8d44\u6e90\u7d22\u5f15",permalink:"/resource-center/\u8d22\u52a1\u8d44\u6e90/\u8d22\u52a1\u8d44\u6e90\u7d22\u5f15"}},s={},p=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"Maintainers",id:"maintainers",level:2},{value:"Installation",id:"installation",level:2},{value:"Initialising the library",id:"initialising-the-library",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Initialise the auth library",id:"initialise-the-auth-library",level:4},{value:"Login a user:",id:"login-a-user",level:4},{value:"Get currently logged in user:",id:"get-currently-logged-in-user",level:4},{value:"Logout:",id:"logout",level:4},{value:"Forget Password",id:"forget-password",level:4},{value:"Database",id:"database",level:2},{value:"Initialise the database library",id:"initialise-the-database-library",level:4},{value:"Fetch document using document name",id:"fetch-document-using-document-name",level:4},{value:"Fetch list of documents",id:"fetch-list-of-documents",level:4},{value:"Fetch number of documents with filters",id:"fetch-number-of-documents-with-filters",level:4},{value:"Create a document",id:"create-a-document",level:4},{value:"Update a document",id:"update-a-document",level:4},{value:"Delete a document",id:"delete-a-document",level:4},{value:"Usage with Typescript",id:"usage-with-typescript",level:2},{value:"API Calls",id:"api-calls",level:2},{value:"Initialise the call library",id:"initialise-the-call-library",level:4},{value:"GET request",id:"get-request",level:4},{value:"POST request",id:"post-request",level:4},{value:"PUT request",id:"put-request",level:4},{value:"DELETE request",id:"delete-request",level:4},{value:"File Uploads",id:"file-uploads",level:2},{value:"Initialise the file library",id:"initialise-the-file-library",level:4},{value:"Upload a file with on progress callback",id:"upload-a-file-with-on-progress-callback",level:4}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"frappe-js-sdk"},"frappe-js-sdk"),(0,r.kt)("p",null,"\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/The-Commit-Company/frappe-js-sdk"},"https://github.com/The-Commit-Company/frappe-js-sdk")),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a \u4e00\u6b3e\u975e\u5e38\u4f18\u79c0\u7684js \u8c03\u7528frappe\u7684js sdk\u3002"),(0,r.kt)("p",null," ",(0,r.kt)("a",{parentName:"p",href:"https://frappeframework.com"},"Frappe Framework")," TypeScript/JavaScript\u5e93."),(0,r.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,r.kt)("p",null,"\u652f\u6301\u7684\u529f\u80fd\u70b9:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd10 \u6388\u6743\uff1a  \u7528\u6237\u540d\u5bc6\u7801\u767b\u5f55 (\u57fa\u4e8ecookie)  \u4ee5\u53ca \u57fa\u4e8e token "),(0,r.kt)("li",{parentName:"ul"},"\ud83d\uddc4 \u6570\u636e\u5e93\u4ea4\u4e92- Get document, get list of documents, get count, create, update and delete documents"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcc4 \u6587\u4ef6\u4e0a\u4f20"),(0,r.kt)("li",{parentName:"ul"},"\ud83e\udd19\ud83c\udffb API\u8c03\u7528")),(0,r.kt)("p",null,"We plan to add the following features in the future:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support for common functions like ",(0,r.kt)("inlineCode",{parentName:"li"},"exists")," in the database.")),(0,r.kt)("p",null,"The library uses ",(0,r.kt)("a",{parentName:"p",href:"https://axios-http.com"},"Axios")," under the hood to make API calls to your Frappe backend."),(0,r.kt)("h2",{id:"maintainers"},"Maintainers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Maintainer"),(0,r.kt)("th",{parentName:"tr",align:null},"GitHub"),(0,r.kt)("th",{parentName:"tr",align:null},"Social"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nikhil Kothari"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nikkothari22"},"nikkothari22")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://twitter.com/nik_kothari22"},"@nik_kothari22"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Janhvi Patil"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/janhvipatil"},"janhvipatil")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://twitter.com/janhvipatil_"},"@janhvipatil_"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sumit Jain"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/sumitjain236"},"sumitjain236")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.linkedin.com/in/sumit-jain-66bb5719a"},"LinkedIn"))))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install frappe-js-sdk\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add frappe-js-sdk\n")),(0,r.kt)("h2",{id:"initialising-the-library"},"Initialising the library"),(0,r.kt)("p",null,"To get started, initialise the library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { FrappeApp } from 'frappe-js-sdk';\n//Add your Frappe backend's URL\nconst frappe = new FrappeApp('https://test.frappe.cloud');\n")),(0,r.kt)("p",null,"In case you want to use the library with token based authentication (OAuth bearer tokens or API key/secret pairs), you can initialise the library like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { FrappeApp } from "frappe-js-sdk";\n\nconst frappe = new FrappeApp("https://test.frappe.cloud", {\n    useToken: true,\n    // Pass a custom function that returns the token as a string - this could be fetched from LocalStorage or auth providers like Firebase, Auth0 etc.\n    token: getTokenFromLocalStorage(),\n    // This can be "Bearer" or "token"\n    type: "Bearer"\n})\n')),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("h4",{id:"initialise-the-auth-library"},"Initialise the auth library"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const auth = frappe.auth()\n")),(0,r.kt)("h4",{id:"login-a-user"},"Login a user:"),(0,r.kt)("p",null,"This makes an API call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/method/login")," endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"auth\n  .loginWithUsernamePassword({ username: 'admin', password: 'my-password' })\n  .then((response) => console.log('Logged in'))\n  .catch((error) => console.error(error));\n")),(0,r.kt)("h4",{id:"get-currently-logged-in-user"},"Get currently logged in user:"),(0,r.kt)("p",null,"This makes an API call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/method/frappe.auth.get_logged_user")," endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"auth\n  .getLoggedInUser()\n  .then((user) => console.log(`User ${user} is logged in.`))\n  .catch((error) => console.error(error));\n")),(0,r.kt)("h4",{id:"logout"},"Logout:"),(0,r.kt)("p",null,"This makes an API call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/method/logout")," endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"auth\n  .logout()\n  .then(() => console.log('Logged out.'))\n  .catch((error) => console.error(error));\n")),(0,r.kt)("h4",{id:"forget-password"},"Forget Password"),(0,r.kt)("p",null,"This makes an API sends a password reset link to the specified email address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"auth\n  .forgetPassword('example@example.com')\n  .then(() => console.log('Password Reset Email Sent!'))\n  .catch(() => console.error(\"We couldn't find your account.\"));\n")),(0,r.kt)("h2",{id:"database"},"Database"),(0,r.kt)("h4",{id:"initialise-the-database-library"},"Initialise the database library"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const db = frappe.db();\n")),(0,r.kt)("h4",{id:"fetch-document-using-document-name"},"Fetch document using document name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.getDoc('DocType', 'My DocType Name')\n  .then((doc) => console.log(doc))\n  .catch((error) => console.error(error));\n")),(0,r.kt)("h4",{id:"fetch-list-of-documents"},"Fetch list of documents"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.getDocList('DocType')\n  .then((docs) => console.log(docs))\n  .catch((error) => console.error(error));\n")),(0,r.kt)("p",null,"Optionally, a second argument can be provided to filter, sort, limit and paginate results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.getDocList('DocType', {\n  /** Fields to be fetched */\n  fields: ['name', 'creation'],\n  /** Filters to be applied - SQL AND operation */\n  filters: [['creation', '>', '2021-10-09']],\n  /** Filters to be applied - SQL OR operation */\n  orFilters: [],\n  /** Fetch from nth document in filtered and sorted list. Used for pagination  */\n  limit_start: 5,\n  /** Number of documents to be fetched. Default is 20  */\n  limit: 10,\n  /** Sort results by field and order  */\n  orderBy: {\n    field: 'creation',\n    order: 'desc',\n  },\n  /** Group the results by particular field */\n  groupBy: 'name',\n  /** Fetch documents as a dictionary */\n  asDict: false,\n})\n  .then((docs) => console.log(docs))\n  .catch((error) => console.error(error));\n")),(0,r.kt)("p",null,"Type declarations are available for the second argument in the source code."),(0,r.kt)("h4",{id:"fetch-number-of-documents-with-filters"},"Fetch number of documents with filters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const filters = [['creation', '>', '2021-10-09']];\nconst useCache = true; /** Default is false - Optional **/\nconst debug = false; /** Default is false - Optional **/\n\ndb.getCount('DocType', filters, cache, debug)\n  .then((count) => console.log(count))\n  .catch((error) => console.error(error));\n")),(0,r.kt)("h4",{id:"create-a-document"},"Create a document"),(0,r.kt)("p",null,"To create a new document, pass the name of the DocType and the fields to ",(0,r.kt)("inlineCode",{parentName:"p"},"createDoc"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.createDoc('My Custom DocType', {\n  name: 'Test',\n  test_field: 'This is a test field',\n})\n  .then((doc) => console.log(doc))\n  .catch((error) => console.error(error));\n")),(0,r.kt)("h4",{id:"update-a-document"},"Update a document"),(0,r.kt)("p",null,"To update an existing document, pass the name of the DocType, name of the document and the fields to be updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"updateDoc"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.updateDoc('My Custom DocType', 'Test', {\n  test_field: 'This is an updated test field.',\n})\n  .then((doc) => console.log(doc))\n  .catch((error) => console.error(error));\n")),(0,r.kt)("h4",{id:"delete-a-document"},"Delete a document"),(0,r.kt)("p",null,"To create a new document, pass the name of the DocType and the name of the document to be deleted to ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteDoc"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.deleteDoc('My Custom DocType', 'Test')\n  .then((response) => console.log(response.message)) // Message will be \"ok\"\n  .catch((error) => console.error(error));\n")),(0,r.kt)("h2",{id:"usage-with-typescript"},"Usage with Typescript"),(0,r.kt)("p",null,"The library supports Typescript out of the box.\nFor example, to enforce type on the ",(0,r.kt)("inlineCode",{parentName:"p"},"updateDoc")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface TestDoc {\n  test_field: string;\n}\ndb.updateDoc<TestDoc>('My Custom DocType', 'Test', {\n  test_field: 'This is an updated test field.',\n});\n")),(0,r.kt)("p",null,"The library also has an inbuilt type ",(0,r.kt)("inlineCode",{parentName:"p"},"FrappeDoc")," which adds the following fields to your type declarations when you use it with the database methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export type FrappeDoc<T> = T & {\n  /** User who created the document */\n  owner: string;\n  /** Date and time when the document was created - ISO format */\n  creation: string;\n  /** Date and time when the document was last modified - ISO format */\n  modified: string;\n  /** User who last modified the document */\n  modified_by: string;\n  idx: number;\n  /** 0 - Saved, 1 - Submitted, 2 - Cancelled */\n  docstatus: 0 | 1 | 2;\n  parent?: any;\n  parentfield?: any;\n  parenttype?: any;\n  /** The primary key of the DocType table */\n  name: string;\n};\n")),(0,r.kt)("p",null,"All document responses are returned as an intersection of ",(0,r.kt)("inlineCode",{parentName:"p"},"FrappeDoc")," and the specified type."),(0,r.kt)("h2",{id:"api-calls"},"API Calls"),(0,r.kt)("h4",{id:"initialise-the-call-library"},"Initialise the call library"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const call = frappe.call();\n")),(0,r.kt)("p",null,"Make sure all endpoints are whitelisted (",(0,r.kt)("inlineCode",{parentName:"p"},"@frappe.whitelist()"),") in your backend"),(0,r.kt)("h4",{id:"get-request"},"GET request"),(0,r.kt)("p",null,"Make a GET request to your endpoint with parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const searchParams = {\n  doctype: 'Currency',\n  txt: 'IN',\n};\ncall\n  .get('frappe.desk.search_link', searchParams)\n  .then((result) => console.log(result))\n  .catch((error) => console.error(error));\n")),(0,r.kt)("h4",{id:"post-request"},"POST request"),(0,r.kt)("p",null,"Make a POST request to your endpoint with parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const updatedFields = {\n  doctype: 'User',\n  name: 'Administrator',\n  fieldname: 'interest',\n  value: 'Frappe Framework, ERPNext',\n};\ncall\n  .post('frappe.client.set_value', updatedFields)\n  .then((result) => console.log(result))\n  .catch((error) => console.error(error));\n")),(0,r.kt)("h4",{id:"put-request"},"PUT request"),(0,r.kt)("p",null,"Make a PUT request to your endpoint with parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const updatedFields = {\n  doctype: 'User',\n  name: 'Administrator',\n  fieldname: 'interest',\n  value: 'Frappe Framework, ERPNext',\n};\ncall\n  .put('frappe.client.set_value', updatedFields)\n  .then((result) => console.log(result))\n  .catch((error) => console.error(error));\n")),(0,r.kt)("h4",{id:"delete-request"},"DELETE request"),(0,r.kt)("p",null,"Make a DELETE request to your endpoint with parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const documentToBeDeleted = {\n  doctype: 'Tag',\n  name: 'Random Tag',\n};\ncall\n  .put('frappe.client.delete', documentToBeDeleted)\n  .then((result) => console.log(result))\n  .catch((error) => console.error(error));\n")),(0,r.kt)("h2",{id:"file-uploads"},"File Uploads"),(0,r.kt)("h4",{id:"initialise-the-file-library"},"Initialise the file library"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const file = frappe.file();\n")),(0,r.kt)("h4",{id:"upload-a-file-with-on-progress-callback"},"Upload a file with on progress callback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const myFile; //Your File object\n\nconst fileArgs = {\n  /** If the file access is private then set to TRUE (optional) */\n  "isPrivate": true,\n  /** Folder the file exists in (optional) */\n  "folder": "Home",\n  /** File URL (optional) */\n  "file_url": "",\n  /** Doctype associated with the file (optional) */\n  "doctype": "User",\n  /** Docname associated with the file (mandatory if doctype is present) */\n  "docname": "Administrator",\n  /** Field in the document **/\n  "fieldname": "image"\n}\n\nfile.uploadFile(\n            myFile,\n            fileArgs,\n            /** Progress Indicator callback function **/\n            (completedBytes, totalBytes) => console.log(Math.round((completedBytes / totalBytes) * 100), " completed")\n        )\n        .then(() => console.log("File Upload complete"))\n        .catch(e => console.error(e))\n')))}u.isMDXComponent=!0}}]);