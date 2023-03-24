"use strict";(self.webpackChunkstsinc_docs=self.webpackChunkstsinc_docs||[]).push([[8347],{5998:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const o={},p="REST API",s={unversionedId:"Python API/RESTAPI",id:"Python API/RESTAPI",title:"REST API",description:"Frappe\u6846\u67b6\u53ef\u4ee5\u76f4\u63a5\u4e3a\u60a8\u7684\u6240\u6709DocTypes\u751f\u6210REST API\u3002\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5b83\u4eec\u7684 \u6a21\u5757\u540d. \u65b9\u6cd5 \u8fd0\u884c\u4efb\u610fPython\u65b9\u6cd5\u3002",source:"@site/docs/200. Python API/RESTAPI.md",sourceDirName:"200. Python API",slug:"/Python API/RESTAPI",permalink:"/docs/V14/Python API/RESTAPI",draft:!1,editUrl:"https://github.com/guinanlin/erpnext-zh-doc/docs/200. Python API/RESTAPI.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6982\u5ff5\u4e0e\u672f\u8bed",permalink:"/docs/V14/\u4ecb\u7ecd/\u6982\u5ff5\u548c\u672f\u8bed"}},l={},i=[{value:"\u6388\u6743\u673a\u5236 ",id:"\u6388\u6743\u673a\u5236-",level:2},{value:"1. \u57fa\u4e8e\u4ee4\u724c ",id:"1-\u57fa\u4e8e\u4ee4\u724c-",level:3},{value:"2. \u57fa\u4e8e\u8d26\u53f7\u5bc6\u7801\u9a8c\u8bc1 ",id:"2-\u57fa\u4e8e\u8d26\u53f7\u5bc6\u7801\u9a8c\u8bc1-",level:3},{value:"3. \u8bbf\u95ee\u4ee4\u724c ",id:"3-\u8bbf\u95ee\u4ee4\u724c-",level:3},{value:"\u5217\u51fa\u5355\u636e\u7c7b ",id:"\u5217\u51fa\u5355\u636e\u7c7b-",level:2},{value:"CRUD Operations ",id:"crud-operations-",level:2},{value:"Create ",id:"create-",level:3},{value:"Read ",id:"read-",level:3},{value:"Update ",id:"update-",level:3},{value:"Delete ",id:"delete-",level:3},{value:"Remote Method Calls ",id:"remote-method-calls-",level:2},{value:"File Uploads ",id:"file-uploads-",level:2}],d={toc:i},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rest-api"},"REST API"),(0,r.kt)("p",null,"Frappe\u6846\u67b6\u53ef\u4ee5\u76f4\u63a5\u4e3a\u60a8\u7684\u6240\u6709DocTypes\u751f\u6210REST API\u3002\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5b83\u4eec\u7684 \u6a21\u5757\u540d. \u65b9\u6cd5 \u8fd0\u884c\u4efb\u610fPython\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/embed/c1gJIYr77sk"},"https://www.youtube.com/embed/c1gJIYr77sk")),(0,r.kt)("h2",{id:"\u6388\u6743\u673a\u5236-"},"\u6388\u6743\u673a\u5236",(0,r.kt)("a",{parentName:"h2",href:"https://frappeframework.com/docs/v14/user/en/api/rest#authentication"}," ")),(0,r.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u901a\u8fc7Frappe REST API\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002\u57fa\u4e8e\u4ee4\u724c\u7684\u8eab\u4efd\u9a8c\u8bc1\u548c\u57fa\u4e8e\u5bc6\u7801\u7684\u8eab\u4efd\u9a8c\u8bc1\u3002"),(0,r.kt)("h3",{id:"1-\u57fa\u4e8e\u4ee4\u724c-"},"1. \u57fa\u4e8e\u4ee4\u724c",(0,r.kt)("a",{parentName:"h3",href:"https://frappeframework.com/docs/v14/user/en/api/rest#1-token-based-authentication"}," ")),(0,r.kt)("p",null,"\u4ee4\u724c\u662fAPI\u5bc6\u94a5\u548cAPI\u79d8\u94a5\u7684\u7ec4\u5408\u3002\u9996\u5148\uff0c\u60a8\u5fc5\u987b\u521b\u5efa\u4e00\u4e2aAPI\u7528\u6237\uff0c\u7136\u540e\u5728\u7528\u6237\u7684\u8bbe\u7f6e\u4e2d\uff0c \u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},"API\u8bbf\u95ee")," \u751f\u6210\u5bc6\u94a5\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u5c06api_key\u548capi_secret\u7528\u5192\u53f7:\u8fde\u63a5\u8d77\u6765\u751f\u6210\u4ee4\u724c\u3002\u5c06\u5b57\u7b26\u4e32token api_key\uff1aapi_secret\u4f20\u9012\u5230\u8bf7\u6c42\u7684Authorization\u6807\u5934\u4e2d\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fetch('http://<base-url>/api/method/frappe.auth.get_logged_user', {\n    headers: {\n        'Authorization': 'token api_key:api_secret'\n    }\n})\n.then(r => r.json())\n.then(r => {\n    console.log(r);\n})\n\u279c curl http://<base-url>/api/method/frappe.auth.get_logged_user -H \"Authorization: token api_key:api_secret\"\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a "),(0,r.kt)("p",null,"base 64\u7684\u751f\u6210\u5730\u5740\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://www.base64encode.org/"},"https://www.base64encode.org/")),(0,r.kt)("p",null,"\u4e91\u7aef\u7684frappe cloud \u9a8c\u8bc1\u7684\u4ee3\u7801\uff1a"),(0,r.kt)("p",null,"Authorization: token \u8fd9\u91cc\u5199base64\u7f16\u7801"),(0,r.kt)("p",null,"\u5982\u679c\u5728\u672c\u673a\u5f00\u53d1\uff0c \u5219\u7528\u5982\u4e0b\u7684\u9a8c\u8bc1\u4ee3\u7801"),(0,r.kt)("p",null,"Authorization: Basic \u8fd9\u91cc\u5199base64\u7f16\u7801"),(0,r.kt)("h3",{id:"2-\u57fa\u4e8e\u8d26\u53f7\u5bc6\u7801\u9a8c\u8bc1-"},"2. \u57fa\u4e8e\u8d26\u53f7\u5bc6\u7801\u9a8c\u8bc1",(0,r.kt)("a",{parentName:"h3",href:"https://frappeframework.com/docs/v14/user/en/api/rest#2-password-based-authentication"}," ")),(0,r.kt)("p",null,"\u57fa\u4e8e\u5bc6\u7801\u7684\u8eab\u4efd\u9a8c\u8bc1\u4f9d\u8d56\u4e8e cookie \u548c\u4f1a\u8bdd\u6570\u636e\u6765\u7ef4\u62a4\u540e\u7eed\u8bf7\u6c42\u4e2d\u7684\u8eab\u4efd\u9a8c\u8bc1\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u60a8\u7528\u4e8e\u53d1\u51fa REST \u8c03\u7528\u7684\u5c06\u5904\u7406\u4f1a\u8bdd\u6570\u636e\uff0c\u4f46\u5982\u679c\u6ca1\u6cd5\u5904\u7406\uff0c\u5219\u5e94\u4f7f\u7528\u57fa\u4e8e\u4ee4\u724c\u7684\u8eab\u4efd\u9a8c\u8bc1\uff08\u610f\u601d\u662f\uff1a \u6709\u90e8\u5206\u63a5\u53e3\u8bbf\u95ee\uff0c \u5355\u7eaf\u901a\u8fc7\u57fa\u4e8e\u5bc6\u7801\u7684\u9a8c\u8bc1\u662f\u6ca1\u6cd5\u8bbf\u95ee\u7684\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'fetch(\'http://<base-url>/api/method/login\', {\n    method: \'POST\',\n    headers: {\n        \'Accept\': \'application/json\',\n        \'Content-Type\': \'application/json\',\n    },\n    body: JSON.stringify({\n        usr: \'username or email\',\n        pwd: \'password\'\n    })\n})\n.then(r => r.json())\n.then(r => {\n    console.log(r);\n})\n\u279c curl --cookie-jar snowcookie --request POST "http://<base-url>/api/method/login" -H \'Content-Type: application/json\' -H \'Accept: application/json\' --data-raw "{ \\"usr\\" : \\"<username>\\", \\"pwd\\": \\"<password>\\" }"\n{"message":"Logged In","home_page":"/app","full_name":"<user:full_name>","dashboard_route":"/sites"}\n\n\u279c curl --cookie snowcookie --request POST "http://<base-url>/api/method/frappe.auth.get_logged_user" -H \'Accept: application/json\'\n{"message":"<username>"}\n')),(0,r.kt)("h3",{id:"3-\u8bbf\u95ee\u4ee4\u724c-"},"3. \u8bbf\u95ee\u4ee4\u724c",(0,r.kt)("a",{parentName:"h3",href:"https://frappeframework.com/docs/v14/user/en/api/rest#3-access-token"}," ")),(0,r.kt)("p",null,"\u8bf7\u53c2\u8003\u6587\u6863\u4e86\u89e3 ",(0,r.kt)("a",{parentName:"p",href:"https://frappeframework.com/docs/v14/user/en/guides/integration/how_to_set_up_oauth"},"\u5982\u4f55\u8bbe\u7f6eOAuth"),"\u3002"),(0,r.kt)("p",null,"\u5728\u8bf7\u6c42\u5934\u4e2d\u4f7f\u7528\u751f\u6210\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"access_token"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fetch('http://<base-url>/api/method/frappe.auth.get_logged_user', {\n    headers: {\n        'Authorization': 'Bearer access_token'\n    }\n})\n.then(r => r.json())\n.then(r => {\n    console.log(r);\n})\n")),(0,r.kt)("h2",{id:"\u5217\u51fa\u5355\u636e\u7c7b-"},"\u5217\u51fa\u5355\u636e\u7c7b",(0,r.kt)("a",{parentName:"h2",href:"https://frappeframework.com/docs/v14/user/en/api/rest#listing-documents"}," ")),(0,r.kt)("p",null,"To get a list of records of a DocType, send a GET request at ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/resource/:doctype"),". By default, it will return 20 records and will only fetch the name of the records. The result for the query can be found under ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," of the payload."),(0,r.kt)("p",null,"We'll be using the ToDo DocType to show example responses for the queries below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"GET /api/resource/:doctype\n")),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data":[\n    {"name":"f765eef382"},\n    {"name":"2a26fa1c64"},\n    {"name":"f32c68060f"},\n    {"name":"9065fa9832"},\n    {"name":"419082fc38"},\n    {"name":"6234d15099"},\n    {"name":"62f2181ee0"},\n    {"name":"a50afbbfaa"},\n    ...\n  ]\n}\n')),(0,r.kt)("p",null,"You can specify which fields to fetch in the ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," param. It should be a JSON array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'GET /api/resource/:doctype?fields=["field1", "field2"]\n')),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data":[\n    {"description":"Business worker talk society. Each try theory prove notice middle. Crime couple trouble guy project hit.","name":"f765eef382"},\n    {"description":"This reveal as look near sister. Car staff bar specific address.","name":"2a26fa1c64"},\n    {"description":"Wear bag some walk. Movie partner new class tough run. Brother Democrat imagine.","name":"f32c68060f"},\n    {"description":"Break laugh apply reveal new now focus heavy. Outside local staff research total. Else point try despite.","name":"9065fa9832"},\n    {"description":"Truth reduce baby artist actually model. Cost phone us others himself wife almost. Language thing wonder share talk. Factor glass significant could window certain yet.","name":"419082fc38"},\n    {"description":"Tv memory understand opportunity window beat physical.","name":"6234d15099"},\n    {"description":"Should floor situation in response sell. Our assume company mean red majority shoulder.","name":"62f2181ee0"},\n    {"description":"Performance seem sign recent. Court form me tonight simple trouble. Address job garden play teach. Happy speech amount offer change then.","name":"a50afbbfaa"},\n    ...\n  ]\n}\n')),(0,r.kt)("p",null,"You can filter the records by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," param. Filters should be an array, where each filter is of the format: ",(0,r.kt)("inlineCode",{parentName:"p"},"[field, operator, value]")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'GET /api/resource/:doctype?filters=[["field1", "=", "value1"], ["field2", ">", "value2"]]\n')),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data":[\n    {"name":"f765eef382"},\n    {"name":"2a26fa1c64"},\n    {"name":"f32c68060f"},\n    {"name":"9065fa9832"},\n    {"name":"419082fc38"},\n    {"name":"6234d15099"},\n    {"name":"62f2181ee0"},\n    {"name":"a50afbbfaa"},\n    ...\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"filters")," parameter joins all the specified filters using ",(0,r.kt)("inlineCode",{parentName:"p"},"AND")," SQL operator, if you want ",(0,r.kt)("inlineCode",{parentName:"p"},"OR")," filters you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"or_filters")," param. Syntax for ",(0,r.kt)("inlineCode",{parentName:"p"},"or_filters")," is same as `filters."),(0,r.kt)("p",null,"You can also provide the sort field and order. It should be of the format ",(0,r.kt)("inlineCode",{parentName:"p"},"fieldname asc")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"fieldname desc"),". The space should be URL encoded. In the following line, we're taking fieldname to be ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"GET /api/resource/:doctype?order_by=title%20desc\n")),(0,r.kt)("p",null,"You can also page the results by providing the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit_start")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"limit_page_length")," params."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"GET /api/resource/:doctype?limit_start=5&amp;limit_page_length=10\n")),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {"name":"6234d15099"},\n    {"name":"62f2181ee0"},\n    {"name":"a50afbbfaa"},\n    {"name":"aa12a5cf71"},\n    {"name":"6ac9800d4e"},\n    {"name":"4bcf8b701c"},\n    {"name":"aee15f4c20"},\n    {"name":"6ba753afef"},\n    ...\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"limit")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"limit_page_length")," for accessing ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/resource")," in Version 13. This means the following should also return the same payload as the above query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"GET /api/resource/:doctype?limit_start=5&amp;limit=10\n")),(0,r.kt)("p",null,"By default, you will receive the data as ",(0,r.kt)("inlineCode",{parentName:"p"},"List[dict]"),". You can retrieve your data as ",(0,r.kt)("inlineCode",{parentName:"p"},"List[List]")," by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"as_dict=False"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"GET /api/resource/:doctype?limit_start=5&amp;limit=5&amp;as_dict=False\n")),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    ["6234d15099"],\n    ["62f2181ee0"],\n    ["a50afbbfaa"],\n    ["aa12a5cf71"],\n    ["6ac9800d4e"]\n  ]\n}\n')),(0,r.kt)("p",null,"To debug the query built for your reqeusts, you can pass ",(0,r.kt)("inlineCode",{parentName:"p"},"debug=True")," with the request. This returns the executed query and execution time under ",(0,r.kt)("inlineCode",{parentName:"p"},"exc")," of the payload."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"GET /api/resource/:doctype?limit_start=10&amp;limit=5&amp;debug=True\n")),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {"name":"4bcf8b701c"},\n    {"name":"aee15f4c20"},\n    {"name":"6ba753afef"},\n    {"name":"f4b7e24abc"},\n    {"name":"bd9156096c"}\n  ],\n  "exc": "[\\"select `tabToDo`.`name`\\\\n\\\\t\\\\t\\\\tfrom `tabToDo`\\\\n\\\\t\\\\t\\\\t\\\\n\\\\t\\\\t\\\\t\\\\n\\\\t\\\\t\\\\t order by `tabToDo`.`modified` DESC\\\\n\\\\t\\\\t\\\\tlimit 5 offset 10\\", \\"Execution time: 0.0 sec\\"]"\n}\n')),(0,r.kt)("h2",{id:"crud-operations-"},"CRUD Operations",(0,r.kt)("a",{parentName:"h2",href:"https://frappeframework.com/docs/v14/user/en/api/rest#crud-operations"}," ")),(0,r.kt)("p",null,"Frappe generates REST endpoints for CRUD operations for all DocTypes automatically. Make sure you set the following headers in your requests so that you get proper JSON responses."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Accept": "application/json",\n    "Content-Type": "application/json",\n}\n')),(0,r.kt)("h3",{id:"create-"},"Create",(0,r.kt)("a",{parentName:"h3",href:"https://frappeframework.com/docs/v14/user/en/api/rest#create"}," ")),(0,r.kt)("p",null,"Create a new document by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/resource/:doctype"),". Send the document as JSON in the Request Body."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'POST /api/resource/:doctype\n\n# Body\n{"description": "New ToDo"}\n')),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "name": "af2e2d0e33",\n    "owner": "Administrator",\n    "creation": "2019-06-03 14:19:00.281026",\n    "modified": "2019-06-03 14:19:00.281026",\n    "modified_by": "Administrator",\n    "idx": 0,\n    "docstatus": 0,\n    "status": "Open",\n    "priority": "Medium",\n    "description": "New ToDo",\n    "doctype": "ToDo"\n  }\n}\n')),(0,r.kt)("h3",{id:"read-"},"Read",(0,r.kt)("a",{parentName:"h3",href:"https://frappeframework.com/docs/v14/user/en/api/rest#read"}," ")),(0,r.kt)("p",null,"Get a document by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/resource/:doctype/:name"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"GET /api/resource/:doctype/:name\n")),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "name": "bf2e760e13",\n    "owner": "Administrator",\n    "creation": "2019-06-03 14:19:00.281026",\n    "modified": "2019-06-03 14:19:00.281026",\n    "modified_by": "Administrator",\n    "idx": 0,\n    "docstatus": 0,\n    "status": "Open",\n    "priority": "Medium",\n    "description": "<p>Test description</p>",\n    "doctype": "ToDo"\n  }\n}\n')),(0,r.kt)("h3",{id:"update-"},"Update",(0,r.kt)("a",{parentName:"h3",href:"https://frappeframework.com/docs/v14/user/en/api/rest#update"}," ")),(0,r.kt)("p",null,"Update a document by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/resource/:doctype/:name"),". You don't need to send the whole document, instead you can just send the fields that you want to update."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'PUT /api/resource/:doctype/:name\n\n# Body\n{"description": "New description"}\n')),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "name": "bf2e760e13",\n    "owner": "Administrator",\n    "creation": "2019-06-03 14:19:00.281026",\n    "modified": "2019-06-03 14:21:00.785117",\n    "modified_by": "Administrator",\n    "idx": 0,\n    "docstatus": 0,\n    "status": "Open",\n    "priority": "Medium",\n    "description": "New description",\n    "doctype": "ToDo"\n  }\n}\n')),(0,r.kt)("h3",{id:"delete-"},"Delete",(0,r.kt)("a",{parentName:"h3",href:"https://frappeframework.com/docs/v14/user/en/api/rest#delete"}," ")),(0,r.kt)("p",null,"Delete a document by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/resource/:doctype/:name"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"DELETE /api/resource/:doctype/:name\n")),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"message": "ok"}\n')),(0,r.kt)("h2",{id:"remote-method-calls-"},"Remote Method Calls",(0,r.kt)("a",{parentName:"h2",href:"https://frappeframework.com/docs/v14/user/en/api/rest#remote-method-calls"}," ")),(0,r.kt)("p",null,"Frappe allows you to trigger arbitrary python methods using the REST API for handling custom logic. These methods must be marked as ",(0,r.kt)("em",{parentName:"p"},"whitelisted")," to make them accessible via REST."),(0,r.kt)("p",null,"To run a whitelisted python method at ",(0,r.kt)("inlineCode",{parentName:"p"},"frappe.auth.get_logged_user"),", send a request to the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/method/frappe.auth.get_logged_user"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"GET /api/method/frappe.auth.get_logged_user\n")),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "john@doe.com"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If your method returns some values, you should send a ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," request."),(0,r.kt)("li",{parentName:"ul"},"If your method changes the state of the database, use ",(0,r.kt)("inlineCode",{parentName:"li"},"POST"),". After a successful ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," request, the framework will automatically call ",(0,r.kt)("inlineCode",{parentName:"li"},"frappe.db.commit()")," to commit the changes to the database."),(0,r.kt)("li",{parentName:"ul"},"A successful response will return a JSON object with a ",(0,r.kt)("inlineCode",{parentName:"li"},"message")," key."),(0,r.kt)("li",{parentName:"ul"},"An errored response will return a JSON object with ",(0,r.kt)("inlineCode",{parentName:"li"},"exc")," key which contains the stack trace and ",(0,r.kt)("inlineCode",{parentName:"li"},"exc_type")," which contains the thrown Exception."),(0,r.kt)("li",{parentName:"ul"},"The return value of the method will be converted to a JSON and sent as the response.")),(0,r.kt)("h2",{id:"file-uploads-"},"File Uploads",(0,r.kt)("a",{parentName:"h2",href:"https://frappeframework.com/docs/v14/user/en/api/rest#file-uploads"}," ")),(0,r.kt)("p",null,"There is a dedicated method ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/method/upload_file")," that accepts binary file data and uploads it into the system."),(0,r.kt)("p",null,"Here is the curl command for it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\u279c curl -X POST \\\n  http://<base-url>/api/method/upload_file \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: token xxxx:yyyy' \\\n  -F file=@/path/to/file/file.png\n")),(0,r.kt)("p",null,"If you are using client side Javascript to upload files, you can append the uploaded files as FormData and send an XHR request. Here is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/frappe/frappe/blob/421f070e78ee1186e7f2f4b2575d8be1d3e2d646/frappe/public/js/frappe/file_uploader/FileUploader.vue#L381-L401"},"implementation code")," in Frappe Desk."))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=i(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,p(p({ref:t},d),{},{components:a})):n.createElement(h,p({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,p[1]=s;for(var i=2;i<o;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);