"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[63979],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,b=m["".concat(p,".").concat(u)]||m[u]||s[u]||o;return n?a.createElement(b,i(i({ref:t},h),{},{components:n})):a.createElement(b,i({ref:t},h))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48913:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"\u914d\u7f6e Shibboleth (SAML)",weight:1210},p=void 0,c={unversionedId:"pages-for-subheaders/configure-shibboleth-saml",id:"pages-for-subheaders/configure-shibboleth-saml",title:"\u914d\u7f6e Shibboleth (SAML)",description:"\u5982\u679c\u4f60\u7684\u7ec4\u7ec7\u4f7f\u7528 Shibboleth Identity Provider (IdP)) \u8fdb\u884c\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e Rancher \u6765\u5141\u8bb8\u7528\u6237\u4f7f\u7528 Shibboleth \u51ed\u8bc1\u767b\u5f55\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/configure-shibboleth-saml.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/configure-shibboleth-saml",permalink:"/zh/pages-for-subheaders/configure-shibboleth-saml",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/configure-shibboleth-saml.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"\u914d\u7f6e Shibboleth (SAML)",weight:1210},sidebar:"tutorialSidebar",previous:{title:"2. \u5728 Rancher \u4e2d\u914d\u7f6e Microsoft AD FS",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs"},next:{title:"Shibboleth \u548c OpenLDAP \u7684\u7ec4\u6743\u9650",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions"}},h={},s=[{value:"Shibboleth \u5148\u51b3\u6761\u4ef6",id:"shibboleth-\u5148\u51b3\u6761\u4ef6",level:3},{value:"\u5728 Rancher \u4e2d\u914d\u7f6e Shibboleth",id:"\u5728-rancher-\u4e2d\u914d\u7f6e-shibboleth",level:3},{value:"SAML \u63d0\u4f9b\u5546\u6ce8\u610f\u4e8b\u9879",id:"saml-\u63d0\u4f9b\u5546\u6ce8\u610f\u4e8b\u9879",level:3},{value:"OpenLDAP \u5148\u51b3\u6761\u4ef6",id:"openldap-\u5148\u51b3\u6761\u4ef6",level:3},{value:"\u5728 Rancher \u4e2d\u914d\u7f6e OpenLDAP",id:"\u5728-rancher-\u4e2d\u914d\u7f6e-openldap",level:3}],m={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684\u7ec4\u7ec7\u4f7f\u7528 Shibboleth Identity Provider (IdP)) \u8fdb\u884c\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e Rancher \u6765\u5141\u8bb8\u7528\u6237\u4f7f\u7528 Shibboleth \u51ed\u8bc1\u767b\u5f55\u3002"),(0,o.kt)("p",null,"\u5728\u6b64\u914d\u7f6e\u4e2d\uff0c\u5f53 Rancher \u7528\u6237\u767b\u5f55\u65f6\uff0c\u4ed6\u4eec\u5c06\u88ab\u91cd\u5b9a\u5411\u5230 Shibboleth IdP \u6765\u8f93\u5165\u51ed\u8bc1\u3002\u8eab\u4efd\u9a8c\u8bc1\u7ed3\u675f\u540e\uff0c\u4ed6\u4eec\u5c06\u88ab\u91cd\u5b9a\u5411\u56de Rancher UI\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u5c06 OpenLDAP \u914d\u7f6e\u4e3a Shibboleth \u7684\u540e\u7aef\uff0cSAML \u65ad\u8a00\u4f1a\u8fd4\u56de\u5230 Rancher\uff0c\u5176\u4e2d\u5305\u62ec\u7528\u4e8e\u5f15\u7528\u7ec4\u7684\u7528\u6237\u5c5e\u6027\u3002\u7136\u540e\uff0c\u901a\u8fc7\u8eab\u4efd\u9a8c\u8bc1\u7684\u7528\u6237\u5c06\u80fd\u591f\u8bbf\u95ee\u5176\u6240\u5728\u7684\u7ec4\u6709\u6743\u8bbf\u95ee\u7684 Rancher \u8d44\u6e90\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u8282\u5047\u5b9a\u4f60\u5df2\u4e86\u89e3 Rancher\uff0cShibboleth \u548c OpenLDAP \u662f\u5982\u4f55\u534f\u540c\u5de5\u4f5c\u7684\u3002\u6709\u5173\u5de5\u4f5c\u539f\u7406\u7684\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions"},"\u672c\u9875"),"\u3002")),(0,o.kt)("h1",{id:"\u5728-rancher-\u4e2d\u8bbe\u7f6e-shibboleth"},"\u5728 Rancher \u4e2d\u8bbe\u7f6e Shibboleth"),(0,o.kt)("h3",{id:"shibboleth-\u5148\u51b3\u6761\u4ef6"},"Shibboleth \u5148\u51b3\u6761\u4ef6"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"\u4f60\u5fc5\u987b\u914d\u7f6e\u4e86 Shibboleth IdP \u670d\u52a1\u5668\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u662f Rancher Service Provider \u914d\u7f6e\u6240\u9700\u7684 URL\uff1a\n\u5143\u6570\u636e URL\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"https://<rancher-server>/v1-saml/shibboleth/saml/metadata"),"\n\u65ad\u8a00\u4f7f\u7528\u8005\u670d\u52a1 (ACS) URL\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"https://<rancher-server>/v1-saml/shibboleth/saml/acs")),(0,o.kt)("li",{parentName:"ul"},"\u4ece IdP \u670d\u52a1\u5668\u5bfc\u51fa ",(0,o.kt)("inlineCode",{parentName:"li"},"metadata.xml")," \u6587\u4ef6\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.shibboleth.net/confluence/display/SP3/Home"},"Shibboleth \u6587\u6863"),"\u3002"))),(0,o.kt)("h3",{id:"\u5728-rancher-\u4e2d\u914d\u7f6e-shibboleth"},"\u5728 Rancher \u4e2d\u914d\u7f6e Shibboleth"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684\u7ec4\u7ec7\u4f7f\u7528 Shibboleth \u8fdb\u884c\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e Rancher \u6765\u5141\u8bb8\u4f60\u7684\u7528\u6237\u4f7f\u7528 IdP \u51ed\u8bc1\u767b\u5f55\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u8ba4\u8bc1"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Shibboleth"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u586b\u5199",(0,o.kt)("strong",{parentName:"p"},"\u914d\u7f6e Shibboleth \u8d26\u53f7"),"\u8868\u5355\u3002Shibboleth IdP \u5141\u8bb8\u4f60\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u6570\u636e\u5b58\u50a8\u3002\u4f60\u53ef\u4ee5\u6dfb\u52a0\u6570\u636e\u5e93\u6216\u4f7f\u7528\u73b0\u6709\u7684 ldap \u670d\u52a1\u5668\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u9009\u62e9 Active Directory (AD) \u670d\u52a1\u5668\uff0c\u4e0b\u9762\u7684\u793a\u4f8b\u5c06\u63cf\u8ff0\u5982\u4f55\u5c06 AD \u5c5e\u6027\u6620\u5c04\u5230 Rancher \u4e2d\u7684\u5b57\u6bb5\uff1a"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u663e\u793a\u540d\u79f0\u5b57\u6bb5"),"\uff1a\u5305\u542b\u7528\u6237\u663e\u793a\u540d\u79f0\u7684 AD \u5c5e\u6027\uff08\u4f8b\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"displayName"),"\uff09\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u7528\u6237\u540d\u5b57\u6bb5"),"\uff1a\u5305\u542b\u7528\u6237\u540d/\u7ed9\u5b9a\u540d\u79f0\u7684 AD \u5c5e\u6027\uff08\u4f8b\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"givenName"),"\uff09\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"UID \u5b57\u6bb5"),"\uff1a\u6bcf\u4e2a\u7528\u6237\u552f\u4e00\u7684 AD \u5c5e\u6027\uff08\u4f8b\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"sAMAccountName"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"distinguishedName"),"\uff09\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u7528\u6237\u7ec4\u5b57\u6bb5"),": \u521b\u5efa\u7528\u4e8e\u7ba1\u7406\u7ec4\u6210\u5458\u5173\u7cfb\u7684\u6761\u76ee\uff08\u4f8b\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"memberOf"),"\uff09\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Rancher API \u4e3b\u673a"),"\uff1a\u4f60\u7684 Rancher Server \u7684 URL\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u79c1\u94a5"),"\u548c",(0,o.kt)("strong",{parentName:"p"},"\u8bc1\u4e66"),"\uff1a\u5bc6\u94a5/\u8bc1\u4e66\u5bf9\uff0c\u7528\u4e8e\u5728 Rancher \u548c\u4f60\u7684 IdP \u4e4b\u95f4\u521b\u5efa\u4e00\u4e2a\u5b89\u5168\u5916\u58f3\uff08SSH\uff09\u3002"),(0,o.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 openssl \u547d\u4ee4\u8fdb\u884c\u521b\u5efa\u3002\u4f8b\u5982\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"IDP \u5143\u6570\u636e"),"\uff1a\u4ece IdP \u670d\u52a1\u5668\u5bfc\u51fa\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.xml")," \u6587\u4ef6\u3002"))))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5b8c\u6210",(0,o.kt)("strong",{parentName:"p"},"\u914d\u7f6e Shibboleth \u8d26\u53f7"),"\u8868\u5355\u540e\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u542f\u7528"),"\u3002"),(0,o.kt)("p",{parentName:"li"},"Rancher \u4f1a\u5c06\u4f60\u91cd\u5b9a\u5411\u5230 IdP \u767b\u5f55\u9875\u9762\u3002\u8f93\u5165\u4f7f\u7528 Shibboleth IdP \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u7684\u51ed\u8bc1\uff0c\u6765\u9a8c\u8bc1\u4f60\u7684 Rancher Shibboleth \u914d\u7f6e\u3002"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4f60\u53ef\u80fd\u9700\u8981\u7981\u7528\u5f39\u51fa\u7a97\u53e3\u963b\u6b62\u7a0b\u5e8f\u624d\u80fd\u770b\u5230 IdP \u767b\u5f55\u9875\u9762\u3002"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5c06 Rancher \u914d\u7f6e\u4e3a\u4f7f\u7528 Shibboleth\u3002\u4f60\u7684\u7528\u6237\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528 Shibboleth \u767b\u5f55\u540d\u767b\u5f55 Rancher\u3002"),(0,o.kt)("h3",{id:"saml-\u63d0\u4f9b\u5546\u6ce8\u610f\u4e8b\u9879"},"SAML \u63d0\u4f9b\u5546\u6ce8\u610f\u4e8b\u9879"),(0,o.kt)("p",null,"SAML \u534f\u8bae\u4e0d\u652f\u6301\u7528\u6237\u6216\u7528\u6237\u7ec4\u7684\u641c\u7d22\u6216\u67e5\u627e\u3002\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u6ca1\u6709\u4e3a Shibboleth \u914d\u7f6e OpenLDAP\uff0c\u5219\u8bf7\u7559\u610f\u4ee5\u4e0b\u8b66\u544a\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728 Rancher \u4e2d\u4e3a\u7528\u6237\u6216\u7ec4\u5206\u914d\u6743\u9650\u65f6\uff0c\u4e0d\u4f1a\u5bf9\u7528\u6237\u6216\u7ec4\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u7528\u6237\u65f6\uff0c\u5fc5\u987b\u6b63\u786e\u8f93\u5165\u51c6\u786e\u7684\u7528\u6237 ID\uff08\u5373 UID \u5b57\u6bb5\uff09\u3002\u5728\u4f60\u8f93\u5165\u7528\u6237 ID \u65f6\uff0c\u5c06\u4e0d\u4f1a\u641c\u7d22\u53ef\u80fd\u5339\u914d\u7684\u5176\u4ed6\u7528\u6237 ID\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u7ec4\u65f6\uff0c\u5fc5\u987b\u4ece\u6587\u672c\u6846\u65c1\u8fb9\u7684\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9\u7ec4\u3002Rancher \u5047\u5b9a\u6765\u81ea\u6587\u672c\u6846\u7684\u4efb\u4f55\u8f93\u5165\u90fd\u662f\u7528\u6237\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7528\u6237\u7ec4\u4e0b\u62c9\u5217\u8868\u4ec5\u663e\u793a\u4f60\u6240\u5c5e\u7684\u7528\u6237\u7ec4\u3002\u5982\u679c\u4f60\u4e0d\u662f\u67d0\u4e2a\u7ec4\u7684\u6210\u5458\uff0c\u4f60\u5c06\u65e0\u6cd5\u6dfb\u52a0\u8be5\u7ec4\u3002")),(0,o.kt)("p",null,"\u8981\u5728 Rancher \u4e2d\u5206\u914d\u6743\u9650\u65f6\u542f\u7528\u641c\u7d22\u7ec4\uff0c\u4f60\u9700\u8981\u4e3a\u652f\u6301\u7ec4\u7684 SAML \u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u5546\u914d\u7f6e\u540e\u7aef\uff08\u4f8b\u5982 OpenLDAP\uff09\u3002"),(0,o.kt)("h1",{id:"\u5728-rancher-\u4e2d\u8bbe\u7f6e-openldap"},"\u5728 Rancher \u4e2d\u8bbe\u7f6e OpenLDAP"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u5c06 OpenLDAP \u914d\u7f6e\u4e3a Shibboleth \u7684\u540e\u7aef\uff0cSAML \u65ad\u8a00\u4f1a\u8fd4\u56de\u5230 Rancher\uff0c\u5176\u4e2d\u5305\u62ec\u7528\u4e8e\u5f15\u7528\u7ec4\u7684\u7528\u6237\u5c5e\u6027\u3002\u7136\u540e\uff0c\u901a\u8fc7\u8eab\u4efd\u9a8c\u8bc1\u7684\u7528\u6237\u5c06\u80fd\u591f\u8bbf\u95ee\u5176\u6240\u5728\u7684\u7ec4\u6709\u6743\u8bbf\u95ee\u7684 Rancher \u8d44\u6e90\u3002"),(0,o.kt)("h3",{id:"openldap-\u5148\u51b3\u6761\u4ef6"},"OpenLDAP \u5148\u51b3\u6761\u4ef6"),(0,o.kt)("p",null,"\u5fc5\u987b\u4e3a Rancher \u914d\u7f6e LDAP \u7ed1\u5b9a\u8d26\u53f7\uff08\u5373 ServiceAccount\uff09\uff0c\u6765\u641c\u7d22\u548c\u68c0\u7d22\u5e94\u8be5\u5177\u6709\u8bbf\u95ee\u6743\u9650\u7684\u7528\u6237\u548c\u7ec4\u7684 LDAP \u6761\u76ee\u3002\u5efa\u8bae\u4e0d\u8981\u4f7f\u7528\u7ba1\u7406\u5458\u8d26\u53f7\u6216\u4e2a\u4eba\u8d26\u53f7\uff0c\u800c\u5e94\u5728 OpenLDAP \u4e2d\u521b\u5efa\u4e00\u4e2a\u4e13\u7528\u8d26\u53f7\uff0c\u8be5\u8d26\u53f7\u5bf9\u914d\u7f6e\u7684\u641c\u7d22\u5e93\u4e0b\u7684\u7528\u6237\u548c\u7ec4\u9700\u8981\u5177\u6709\u53ea\u8bfb\u6743\u9650\uff08\u53c2\u89c1\u4e0b\u6587\uff09\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u4f7f\u7528 TLS\uff1f")),(0,o.kt)("p",{parentName:"blockquote"},"\u5982\u679c OpenLDAP \u670d\u52a1\u5668\u4f7f\u7528\u7684\u8bc1\u4e66\u662f\u81ea\u7b7e\u540d\u7684\u6216\u4e0d\u662f\u6765\u81ea\u8ba4\u53ef\u7684\u8bc1\u4e66\u9881\u53d1\u673a\u6784\uff0c\u8bf7\u786e\u4fdd\u624b\u5934\u6709 PEM \u683c\u5f0f\u7684 CA \u8bc1\u4e66\uff08\u5305\u542b\u6240\u6709\u4e2d\u95f4\u8bc1\u4e66\uff09\u3002\u4f60\u5fc5\u987b\u5728\u914d\u7f6e\u671f\u95f4\u7c98\u8d34\u6b64\u8bc1\u4e66\uff0c\u4ee5\u4fbf Rancher \u80fd\u591f\u9a8c\u8bc1\u8bc1\u4e66\u94fe\u3002")),(0,o.kt)("h3",{id:"\u5728-rancher-\u4e2d\u914d\u7f6e-openldap"},"\u5728 Rancher \u4e2d\u914d\u7f6e OpenLDAP"),(0,o.kt)("p",null,"\u914d\u7f6e OpenLDAP \u670d\u52a1\u5668\uff0c\u7ec4\u548c\u7528\u6237\u7684\u8bbe\u7f6e\u3002\u6709\u5173\u586b\u5199\u6bcf\u4e2a\u5b57\u6bb5\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"/zh/reference-guides/configure-openldap/openldap-config-reference"},"\u914d\u7f6e\u53c2\u8003"),"\u3002\u8bf7\u6ce8\u610f\uff0c\u5d4c\u5957\u7ec4\u6210\u5458\u8d44\u683c\u4e0d\u9002\u7528\u4e8e Shibboleth\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u719f\u6089",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/about-authentication#%E5%A4%96%E9%83%A8%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81%E9%85%8D%E7%BD%AE%E5%92%8C%E7%94%A8%E6%88%B7%E4%B8%BB%E4%BD%93"},"\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1\u914d\u7f6e\u548c\u4e3b\u4f53\u7528\u6237"),"\u7684\u6982\u5ff5\u3002")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u521d\u59cb\u7684\u672c\u5730 ",(0,o.kt)("inlineCode",{parentName:"li"},"admin")," \u8d26\u53f7\u767b\u5f55\u5230 Rancher UI\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u8ba4\u8bc1"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"OpenLDAP"),"\u3002\u5c06\u663e\u793a",(0,o.kt)("strong",{parentName:"li"},"\u914d\u7f6e OpenLDAP \u670d\u52a1\u5668"),"\u8868\u5355\u3002")),(0,o.kt)("h1",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,o.kt)("p",null,"\u5982\u679c\u5728\u6d4b\u8bd5\u4e0e OpenLDAP \u670d\u52a1\u5668\u7684\u8fde\u63a5\u65f6\u9047\u5230\u95ee\u9898\uff0c\u8bf7\u9996\u5148\u4ed4\u7ec6\u68c0\u67e5\u4e3a ServiceAccount \u8f93\u5165\u7684\u51ed\u8bc1\u4ee5\u53ca\u641c\u7d22\u5e93\u914d\u7f6e\u3002\u4f60\u8fd8\u53ef\u4ee5\u68c0\u67e5 Rancher \u65e5\u5fd7\u6765\u67e5\u660e\u95ee\u9898\u7684\u539f\u56e0\u3002\u8c03\u8bd5\u65e5\u5fd7\u53ef\u80fd\u5305\u542b\u6709\u5173\u9519\u8bef\u7684\u66f4\u8be6\u7ec6\u4fe1\u606f\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"/zh/faq/technical-items#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8%E8%B0%83%E8%AF%95%E6%97%A5%E5%BF%97%E8%AE%B0%E5%BD%95%EF%BC%9F"},"\u5982\u4f55\u542f\u7528\u8c03\u8bd5\u65e5\u5fd7"),"\u3002"))}u.isMDXComponent=!0}}]);