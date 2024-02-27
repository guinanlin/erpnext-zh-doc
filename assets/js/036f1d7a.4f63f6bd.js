"use strict";(self.webpackChunkstsinc_docs=self.webpackChunkstsinc_docs||[]).push([[4361],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},i="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),i=c(r),u=a,y=i["".concat(l,".").concat(u)]||i[u]||k[u]||s;return r?n.createElement(y,o(o({ref:t},m),{},{components:r})):n.createElement(y,o({ref:t},m))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[i]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},554:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const s={},o="docker \u5f00\u542fTls",p={unversionedId:"\u8fd0\u7ef4\u96c6\u6210/Docker\u5f00\u542fTls",id:"\u8fd0\u7ef4\u96c6\u6210/Docker\u5f00\u542fTls",title:"docker \u5f00\u542fTls",description:"TLS\u8ba4\u8bc1\u8bbf\u95ee\u63a7\u5236",source:"@site/best-practice/30. \u8fd0\u7ef4\u96c6\u6210/140.Docker\u5f00\u542fTls.md",sourceDirName:"30. \u8fd0\u7ef4\u96c6\u6210",slug:"/\u8fd0\u7ef4\u96c6\u6210/Docker\u5f00\u542fTls",permalink:"/best-practice/\u8fd0\u7ef4\u96c6\u6210/Docker\u5f00\u542fTls",draft:!1,tags:[],version:"current",sidebarPosition:140,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u7edcDNS\u914d\u7f6e",permalink:"/best-practice/\u8fd0\u7ef4\u96c6\u6210/\u7f51\u7edcDNS\u914d\u7f6e"},next:{title:"\u62a5\u4ef7\u5355\u754c\u9762\u62a5\u4ef7\u91d1\u989d\u663e\u793a\u6570\u5b57\u5927\u5199",permalink:"/best-practice/\u5b9a\u5236\u6848\u4f8b/\u62a5\u4ef7\u5355\u754c\u9762\u62a5\u4ef7\u91d1\u989d\u663e\u793a\u6570\u5b57\u5927\u5199"}},l={},c=[],m={toc:c},i="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(i,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker-\u5f00\u542ftls"},"docker \u5f00\u542fTls"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TLS\u8ba4\u8bc1\u8bbf\u95ee\u63a7\u5236")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6e\u4e3b\u673a\u540d"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"[root@localhost~]# hostnamectl set-hostname master\n[root@localhost~]# su\n[root@master ~]# echo \u201c127.0.0.1 master\u201d >>/etc/hosts\n")))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efatls\u76ee\u5f55\u5b58\u653e\u76f8\u5173\u6587\u4ef6"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"[root@master ~]# mkdir /tls\n[root@master ~]# cd /tls\n")))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efaca\u79d8\u94a5\u548c\u8bc1\u4e66"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efaca\u79d8\u94a5")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@master tls]# openssl genrsa -aes256 -out ca-key.pem 4096\nGenerating RSA private key, 4096 bit long modulus\n....................................++\n..........................................................................................................................++\ne is 65537 (0x10001)\nEnter pass phrase for ca-key.pem:                 ## \u8f93\u5165\u5bc6\u7801\nVerifying - Enter pass phrase for ca-key.pem:     ##\u518d\u6b21\u8f93\u5165\u5bc6\u7801\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efaca\u8bc1\u4e66")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[root@master tls]# openssl req -new -x509 -days 1000 -key ca-key.pem -sha256 -subj "/CN=*" -out ca.pem\nEnter pass phrase for ca-key.pem:     ##\u8f93\u5165\u5bc6\u7801\uff0c\u521b\u5efa\u8bc1\u4e66\n')),(0,a.kt)("p",null,"3 \u521b\u5efa\u670d\u52a1\u5668\u79c1\u94a5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@master tls]# openssl genrsa -out server-key.pem 4096\nGenerating RSA private key, 4096 bit long modulus\n..........................++\n............++\ne is 65537 (0x10001)\n1\n")),(0,a.kt)("p",null,"4 \u7b7e\u540d\u79c1\u94a5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[root@master tls]# openssl req -subj "/CN=*" -sha256 -new -key server-key.pem -out server.csr\n\n1\n2\n')),(0,a.kt)("p",null,"5 \u4f7f\u7528ca\u8bc1\u4e66\u4e0e\u79c1\u94a5\u8bc1\u4e66\u7b7e\u540d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@master tls]# openssl x509 -req -days 3650 -sha256 -in server.csr -CA ca.pem -CAkey ca-key.pem -CAcreateserial -out server-cert.pem\nSignature ok\nsubject=/CN=*\nGetting CA Private Key\nEnter pass phrase for ca-key.pem:     ##\u8f93\u5165\u8ba4\u8bc1\u5bc6\u7801\n")),(0,a.kt)("p",null,"6 \u751f\u6210\u5ba2\u6237\u7aef\u5bc6\u94a5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@master tls]# openssl genrsa -out key.pem 4096\nGenerating RSA private key, 4096 bit long modulus\n......................................................++\n........................................++\ne is 65537 (0x10001)\n\n1\n2\n")),(0,a.kt)("p",null,"7 \u7b7e\u540d\u5ba2\u6237\u7aef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[root@master tls]# openssl req -subj "/CN=client" -new -key key.pem -out client.csr\n\n')),(0,a.kt)("p",null,"8 \u521b\u5efa\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@master tls]# echo extendedKeyUsage=clientAuth > extfile.cnf\n1\n")),(0,a.kt)("p",null,"9 \u7b7e\u540d\u8bc1\u4e66"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@master tls]# openssl x509 -req -days 3650 -sha256 -in client.csr -CA ca.pem -CAkey ca-key.pem -CAcreateserial -out cert.pem -extfile extfile.cnf\nSignature ok\nsubject=/CN=client\nGetting CA Private Key\nEnter pass phrase for ca-key.pem:     ##\u8f93\u5165\u5bc6\u7801\n1\n2\n3\n4\n5\n")),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u591a\u4f59\u6587\u4ef6\uff0c\u4ee5.pem\u7ed3\u5c3e\u7684\u662f\u6709\u7528\u6587\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[root@master tls]# ls\nca-key.pem  ca.pem  ca.srl  cert.pem  client.csr  extfile.cnf  key.pem  server-cert.pem  server.csr  server-key.pem\n[root@master tls]# ls *.pem\nca-key.pem  ca.pem  cert.pem  key.pem  server-cert.pem  server-key.pem\n\n[root@master tls]# ls |egrep -v "*.pem" |xargs rm -rf   ##\u5220\u9664\u65e0\u7528\u6587\u4ef6\n\n[root@master tls]# ls\nca-key.pem  ca.pem  cert.pem  key.pem  server-cert.pem  server-key.pem\n1\n2\n3\n')),(0,a.kt)("ol",{start:11},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u653e\u901a\u7aef\u53e3, \u7aef\u53e3\u6700\u597d\u4e0d\u8981\u8bbe\u7f6e\u4e3a2376\uff0c \u8bbe\u7f6e\u6210\u4ec0\u4e48\u7aef\u53e3\u90fd\u53ef\u4ee5\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"[root@master tls]#  vim /lib/systemd/system/docker.service\nExecStart=/usr/bin/dockerd --tlsverify --tlscacert=/tls/ca.pem --tlscert=/tls/server-cert.pem --tlskey=/tls/server-key.pem -H tcp://0.0.0.0:2376 -H unix:///var/run/docker.sock   \n##\u4fee\u6539\u51c6\u542f\u52a8\u9879\n[root@master tls]# systemctl daemon-reload\n[root@master tls]# systemctl restart docker\n1\n")))),(0,a.kt)("ol",{start:12},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06/tls/ca.pem /tls/cert.pem /tls/key.pem\u4e09\u4e2a\u6587\u4ef6\u590d\u5236\u5230\u53e6\u4e00\u53f0\u4e3b\u673a\uff08\u5ba2\u6237\u7aef\uff09"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"12. [root@master tls]# scp ca.pem cert.pem key.pem root@192.168.10.20:/etc/docker/\n\nroot@192.168.10.20's password: \nca.pem                                         100% 1765   891.6KB/s   00:00    \ncert.pem                                       100% 1696     2.1MB/s   00:00    \nkey.pem                                        100% 3243     4.7MB/s   00:00    \n\n1\n")))),(0,a.kt)("ol",{start:13},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5230\u5ba2\u6237\u7aef\uff08192.168.10.20\uff09\u8bbf\u95ee\u63a7\u5236\u6d4b\u8bd5"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'[root@client ~]# ls /etc/docker/*.pem    ##\u67e5\u770b\u8bc1\u4e66\u6587\u4ef6\n /etc/docker/ca.pem  /etc/docker/cert.pem  /etc/docker/key.pem\n\n[root@client ~]# echo "192.168.10.10 master" >>/etc/hosts\n\n[root@client docker]# docker --tlsverify --tlscacert=ca.pem --tlscert=cert.pem --tlskey=key.pem -H tcp://master:2376 images\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nnginx               latest              c39a868aad02        12 days ago         133MB\n\n1\n2\n')))))}k.isMDXComponent=!0}}]);