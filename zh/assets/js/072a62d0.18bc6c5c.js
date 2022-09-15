"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[30822],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1541:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={title:"\u96c6\u7fa4\u6a21\u677f",weight:100},p=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates",title:"\u96c6\u7fa4\u6a21\u677f",description:"\u96c6\u7fa4\u6a21\u677f\u5305\u542b Kubernetes \u914d\u7f6e\u548c\u8282\u70b9\u6c60\u914d\u200b\u200b\u7f6e\uff0c\u5141\u8bb8\u5355\u4e2a\u6a21\u677f\u5305\u542b Rancher \u5728\u4e91\u63d0\u4f9b\u5546\u4e2d\u914d\u7f6e\u65b0\u8282\u70b9\u5e76\u5728\u8fd9\u4e9b\u8282\u70b9\u4e0a\u5b89\u88c5 Kubernetes \u6240\u9700\u7684\u6240\u6709\u4fe1\u606f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"\u96c6\u7fa4\u6a21\u677f",weight:100},sidebar:"tutorialSidebar",previous:{title:"\u793a\u4f8b\u573a\u666f",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases"},next:{title:"Pod \u5b89\u5168\u7b56\u7565",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"}},m={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"Kubernetes \u53d1\u884c\u7248",id:"kubernetes-\u53d1\u884c\u7248",level:3},{value:"\u7248\u672c\u63a7\u5236",id:"\u7248\u672c\u63a7\u5236",level:3},{value:"RKE2 \u96c6\u7fa4\u6a21\u677f",id:"rke2-\u96c6\u7fa4\u6a21\u677f",level:2},{value:"\u5411 Rancher \u6dfb\u52a0\u96c6\u7fa4\u6a21\u677f",id:"\u5411-rancher-\u6dfb\u52a0\u96c6\u7fa4\u6a21\u677f",level:2},{value:"\u4f7f\u7528\u96c6\u7fa4\u6a21\u677f\u521b\u5efa\u96c6\u7fa4",id:"\u4f7f\u7528\u96c6\u7fa4\u6a21\u677f\u521b\u5efa\u96c6\u7fa4",level:2},{value:"\u66f4\u65b0\u4f7f\u7528\u96c6\u7fa4\u6a21\u677f\u521b\u5efa\u7684\u96c6\u7fa4",id:"\u66f4\u65b0\u4f7f\u7528\u96c6\u7fa4\u6a21\u677f\u521b\u5efa\u7684\u96c6\u7fa4",level:2},{value:"\u4f7f\u7528 Fleet \u4ece\u6a21\u677f\u90e8\u7f72\u96c6\u7fa4",id:"\u4f7f\u7528-fleet-\u4ece\u6a21\u677f\u90e8\u7f72\u96c6\u7fa4",level:2},{value:"\u5378\u8f7d\u96c6\u7fa4\u6a21\u677f",id:"\u5378\u8f7d\u96c6\u7fa4\u6a21\u677f",level:2},{value:"\u914d\u7f6e\u9009\u9879",id:"\u914d\u7f6e\u9009\u9879",level:2}],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u96c6\u7fa4\u6a21\u677f\u5305\u542b Kubernetes \u914d\u7f6e\u548c\u8282\u70b9\u6c60\u914d\u200b\u200b\u7f6e\uff0c\u5141\u8bb8\u5355\u4e2a\u6a21\u677f\u5305\u542b Rancher \u5728\u4e91\u63d0\u4f9b\u5546\u4e2d\u914d\u7f6e\u65b0\u8282\u70b9\u5e76\u5728\u8fd9\u4e9b\u8282\u70b9\u4e0a\u5b89\u88c5 Kubernetes \u6240\u9700\u7684\u6240\u6709\u4fe1\u606f\u3002"),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("p",null,"\u96c6\u7fa4\u6a21\u677f\u4ee5 Helm Chart \u7684\u5f62\u5f0f\u63d0\u4f9b\u3002\u8981\u4f7f\u7528\u96c6\u7fa4\u6a21\u677f\uff0c\u4f60\u9700\u8981\u514b\u9686\u548c\u590d\u523b\u6a21\u677f\uff0c\u6839\u636e\u4f60\u7684\u7528\u4f8b\u66f4\u6539\u6a21\u677f\uff0c\u7136\u540e\u5728 Rancher \u7ba1\u7406\u96c6\u7fa4\u4e0a\u5b89\u88c5 Helm Chart\u3002\u5982\u679c Helm Chart \u5b89\u88c5\u5728 Rancher \u7ba1\u7406\u96c6\u7fa4\u4e0a\uff0c\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u96c6\u7fa4\u8d44\u6e90\uff0cRancher \u4f7f\u7528\u5b83\u6765\u914d\u7f6e\u65b0\u96c6\u7fa4\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u6a21\u677f\u914d\u7f6e\u96c6\u7fa4\u540e\uff0c\u5bf9\u6a21\u677f\u7684\u4efb\u4f55\u66f4\u6539\u90fd\u4e0d\u4f1a\u5f71\u54cd\u96c6\u7fa4\u3002\u4f7f\u7528\u96c6\u7fa4\u6a21\u677f\u521b\u5efa\u96c6\u7fa4\u540e\uff0c\u96c6\u7fa4\u7684\u914d\u7f6e\u548c\u57fa\u7840\u8bbe\u65bd\u53ef\u80fd\u4f1a\u53d1\u751f\u53d8\u5316\uff0c\u56e0\u4e3a\u96c6\u7fa4\u6a21\u677f\u6ca1\u6709\u4efb\u4f55\u6267\u884c\u9650\u5236\u3002"),(0,l.kt)("h3",{id:"kubernetes-\u53d1\u884c\u7248"},"Kubernetes \u53d1\u884c\u7248"),(0,l.kt)("p",null,"\u96c6\u7fa4\u6a21\u677f\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55 Kubernetes \u53d1\u884c\u7248\u3002\u73b0\u5728\uff0c\u6211\u4eec\u63d0\u4f9b\u4e00\u4e2a\u5e26\u6709 RKE2 Kubernetes \u96c6\u7fa4\u7684\u793a\u4f8b\u3002\u5c06\u6765\u6211\u4eec\u53ef\u80fd\u4f1a\u63d0\u4f9b\u66f4\u591a\u4f7f\u7528\u5176\u4ed6 Kubernetes \u53d1\u884c\u7248\u7684\u793a\u4f8b\u3002"),(0,l.kt)("h3",{id:"\u7248\u672c\u63a7\u5236"},"\u7248\u672c\u63a7\u5236"),(0,l.kt)("p",null,"Rancher \u4e0d\u7ba1\u7406\u96c6\u7fa4\u6a21\u677f\u7684\u7248\u672c\u63a7\u5236\u3002\u7248\u672c\u63a7\u5236\u5728\u5305\u542b\u6a21\u677f\u7684 Helm Chart \u7684\u4ed3\u5e93\u4e2d\u5904\u7406\u3002"),(0,l.kt)("h2",{id:"rke2-\u96c6\u7fa4\u6a21\u677f"},"RKE2 \u96c6\u7fa4\u6a21\u677f"),(0,l.kt)("p",null,"RKE2 \u96c6\u7fa4\u6a21\u677f\u7684\u793a\u4f8b\u4ed3\u5e93\u5728",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/cluster-template-examples"},"\u8fd9\u91cc"),"\u3002\u4ece Rancher 2.6.0 \u5f00\u59cb\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a RKE2 \u96c6\u7fa4\u6a21\u677f\uff0c\u672a\u6765\u53ef\u80fd\u4f1a\u6dfb\u52a0\u66f4\u591a\u6a21\u677f\u3002"),(0,l.kt)("h2",{id:"\u5411-rancher-\u6dfb\u52a0\u96c6\u7fa4\u6a21\u677f"},"\u5411 Rancher \u6dfb\u52a0\u96c6\u7fa4\u6a21\u677f"),(0,l.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u5c06\u96c6\u7fa4\u6a21\u677f\u6dfb\u52a0\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"\u672c\u5730"),"\u96c6\u7fa4\u7684 Chart \u4ed3\u5e93\u5217\u8868\u4e2d\u3002\u8fd9\u6837\uff0c\u5f53\u7528\u6237\u5b89\u88c5\u65b0\u7684 Kubernetes \u96c6\u7fa4\u65f6\uff0cRancher \u5c06\u63d0\u4f9b\u96c6\u7fa4\u6a21\u677f\u7684\u9009\u9879\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u4f60\u9700\u8981\u6709\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"\u672c\u5730")," Kubernetes \u96c6\u7fa4\u4e0a\u5b89\u88c5 Helm Chart \u7684\u6743\u9650\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u4f7f Chart \u4ee5\u521b\u5efa\u65b0\u96c6\u7fa4\u7684\u5f62\u5f0f\u51fa\u73b0\uff0cChart \u5fc5\u987b\u5177\u6709\u6ce8\u91ca ",(0,l.kt)("inlineCode",{parentName:"li"},"catalog.cattle.io/type: cluster-template"),"\u3002")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u96c6\u7fa4\u6a21\u677f\u793a\u4f8b\u4ed3\u5e93\u3002\u4f60\u53ef\u4ee5\u5728",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/cluster-template-examples"},"\u6b64 GitHub \u4ed3\u5e93"),"\u4e2d\u627e\u5230 Rancher \u7684\u793a\u4f8b\u3002\u4ece Rancher 2.6.0 \u5f00\u59cb\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a RKE2 \u96c6\u7fa4\u6a21\u677f\uff0c\u672a\u6765\u53ef\u80fd\u4f1a\u6dfb\u52a0\u66f4\u591a\u6a21\u677f\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u590d\u523b\u4ed3\u5e93\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u901a\u8fc7\u7f16\u8f91 ",(0,l.kt)("inlineCode",{parentName:"li"},"values.yaml")," \u6587\u4ef6\u6765\u7f16\u8f91\u96c6\u7fa4\u9009\u9879\u3002\u6709\u5173\u7f16\u8f91\u6587\u4ef6\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605\u96c6\u7fa4\u6a21\u677f\u7684 Helm Chart \u81ea\u8ff0\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5c06 Chart \u4ed3\u5e93\u6dfb\u52a0\u5230 Rancher\u3002\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8f6c\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"\u672c\u5730"),"\u96c6\u7fa4\u5e76\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a > Chart \u4ed3\u5e93\u3002")),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8f93\u5165\u96c6\u7fa4\u6a21\u677f\u4ed3\u5e93\u7684\u540d\u79f0\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u5305\u542b Helm Chart \u5b9a\u4e49\u7684 Git \u4ed3\u5e93"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728 ",(0,l.kt)("strong",{parentName:"li"},"Git \u4ed3\u5e93 URL"),"\u5b57\u6bb5\uff0c\u8f93\u5165\u4ed3\u5e93\u7684 URL\uff0c\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"https://github.com/rancher/cluster-template-examples.git"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"Git \u5206\u652f"),"\u5b57\u6bb5\uff0c\u8f93\u5165\u8981\u7528\u4f5c\u6a21\u677f\u6e90\u7684\u5206\u652f\u3002Rancher \u7684\u793a\u4f8b\u4ed3\u5e93\u4f7f\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"main")," \u5206\u652f\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u96c6\u7fa4\u6a21\u677f\u53ef\u4ece Rancher \u7684",(0,l.kt)("inlineCode",{parentName:"p"},"\u672c\u5730"),"\u96c6\u7fa4\u4e2d\u7684",(0,l.kt)("strong",{parentName:"p"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a"),"\u83b7\u5f97\u3002\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6a21\u677f\u6765\u90e8\u7f72\u96c6\u7fa4\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u53d7\u9650\u7ba1\u7406\u5458\u8bbf\u95ee\uff1a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u662f\u53d7\u9650\u7ba1\u7406\u5458\u5e76\u4e14\u65e0\u6743\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," \u96c6\u7fa4\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u6dfb\u52a0\u65b0\u7684 RKE2 \u6a21\u677f\u5e76\u7ba1\u7406\u96c6\u7fa4\u4ed3\u5e93\u3002\u8981\u5bfc\u822a\u5230 Chart \u4ed3\u5e93\uff0c\u8bf7\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u5355\u51fb ",(0,l.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406 > \u9ad8\u7ea7\u9009\u9879 > \u4ed3\u5e93"),"\u3002\u4f60\u5c06\u7ed5\u8fc7\u4e0a\u8ff0\u6b65\u9aa4 1 - 6\uff0c\u7136\u540e\u7ee7\u7eed\u6309\u7167\u6b65\u9aa4 7 - 12 \u521b\u5efa\u96c6\u7fa4\u6a21\u677f\u3002"))),(0,l.kt)("h2",{id:"\u4f7f\u7528\u96c6\u7fa4\u6a21\u677f\u521b\u5efa\u96c6\u7fa4"},"\u4f7f\u7528\u96c6\u7fa4\u6a21\u677f\u521b\u5efa\u96c6\u7fa4"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u4f60\u9700\u8981\u83b7\u5f97\u914d\u7f6e\u65b0 Kubernetes \u96c6\u7fa4\u7684\u6743\u9650\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f60\u5c06\u9700\u8981\u4e91\u51ed\u8bc1\u6765\u4f7f\u7528\u6a21\u677f\u914d\u7f6e\u57fa\u7840\u8bbe\u65bd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u4ee5\u521b\u5efa\u65b0\u96c6\u7fa4\u7684\u5f62\u5f0f\u663e\u793a\uff0c\u96c6\u7fa4\u6a21\u677f\u7684 Helm Chart \u5fc5\u987b\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"catalog.cattle.io/type: cluster-template")," \u6ce8\u91ca\u3002")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\uff0c\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb\u96c6\u7fa4\u6a21\u677f\u7684\u540d\u79f0\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5b8c\u6210 Helm Chart \u7684\u5b89\u88c5\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5728 Rancher \u914d\u7f6e\u65b0\u96c6\u7fa4\u540e\uff0c\u4f60\u53ef\u4ee5\u50cf\u7ba1\u7406\u5176\u4ed6 Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u4e00\u6837\u7ba1\u7406\u8be5\u65b0\u96c6\u7fa4\u3002\u5982\u679c\u96c6\u7fa4\u6a21\u677f\u6709\u53ef\u4f9b\u7528\u6237\u9009\u62e9\u7684\u9009\u9879\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 UI \u914d\u7f6e\u8fd9\u4e9b\u9009\u9879\u3002"),(0,l.kt)("h2",{id:"\u66f4\u65b0\u4f7f\u7528\u96c6\u7fa4\u6a21\u677f\u521b\u5efa\u7684\u96c6\u7fa4"},"\u66f4\u65b0\u4f7f\u7528\u96c6\u7fa4\u6a21\u677f\u521b\u5efa\u7684\u96c6\u7fa4"),(0,l.kt)("p",null,"\u5982\u679c\u96c6\u7fa4\u6240\u7528\u7684\u6a21\u677f\u6709\u4e86\u65b0\u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("strong",{parentName:"p"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a > \u5df2\u5b89\u88c5\u7684\u5e94\u7528"),"\u9875\u9762\u4e2d\u7684\u6a21\u677f\u66f4\u65b0\u96c6\u7fa4\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528-fleet-\u4ece\u6a21\u677f\u90e8\u7f72\u96c6\u7fa4"},"\u4f7f\u7528 Fleet \u4ece\u6a21\u677f\u90e8\u7f72\u96c6\u7fa4"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u4f60\u9700\u8981\u83b7\u5f97\u914d\u7f6e\u65b0 Kubernetes \u96c6\u7fa4\u7684\u6743\u9650\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f60\u5c06\u9700\u8981\u4e91\u51ed\u8bc1\u6765\u4f7f\u7528\u6a21\u677f\u914d\u7f6e\u57fa\u7840\u8bbe\u65bd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u4ee5\u521b\u5efa\u65b0\u96c6\u7fa4\u7684\u5f62\u5f0f\u663e\u793a\uff0c\u96c6\u7fa4\u6a21\u677f\u7684 Helm Chart \u5fc5\u987b\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"catalog.cattle.io/type:cluster-template")," \u6ce8\u91ca\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u5c06\u6a21\u677f\u7528\u4f5c\u6301\u7eed\u4ea4\u4ed8/GitOps \u7684\u4e00\u90e8\u5206\uff0c\u96c6\u7fa4\u6a21\u677f\u9700\u8981\u90e8\u7f72\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"\u672c\u5730"),"\u96c6\u7fa4\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"fleet-local")," \u547d\u540d\u7a7a\u95f4\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u503c\u90fd\u5fc5\u987b\u5728\u6a21\u677f\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"values.yaml")," \u4e2d\u8bbe\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"Fleet \u4ed3\u5e93\u5fc5\u987b\u9075\u5faa\u6b64\u5904\u7684",(0,l.kt)("a",{parentName:"li",href:"http://fleet.rancher.io/gitrepo-structure/"},"\u51c6\u5219"),"\u3002\u5bf9\u4e8e RKE2 \u96c6\u7fa4\u6a21\u677f\uff0c\u5219\u5fc5\u987b\u628a ",(0,l.kt)("inlineCode",{parentName:"li"},"fleet.yaml")," \u6587\u4ef6\u6dfb\u52a0\u5230\u4ed3\u5e93\u3002")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\uff0c\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u6a21\u677f\u521b\u5efa\u96c6\u7fa4"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aRancher \u914d\u7f6e\u597d\u65b0\u96c6\u7fa4\u540e\uff0c\u96c6\u7fa4\u7531 Fleet \u7ba1\u7406\u3002"),(0,l.kt)("h2",{id:"\u5378\u8f7d\u96c6\u7fa4\u6a21\u677f"},"\u5378\u8f7d\u96c6\u7fa4\u6a21\u677f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u524d\u5f80",(0,l.kt)("inlineCode",{parentName:"li"},"\u672c\u5730"),"\u96c6\u7fa4\u5e76\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a > Chart \u4ed3\u5e93"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u96c6\u7fa4\u6a21\u677f\u7684 Chart \u4ed3\u5e93\uff0c\u7136\u540e\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u22ee > \u5220\u9664\u3002")),(0,l.kt)("li",{parentName:"ol"},"\u786e\u8ba4\u5220\u9664\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u96c6\u7fa4\u6a21\u677f\u5df2\u5378\u8f7d\u3002\u6b64\u64cd\u4f5c\u4e0d\u4f1a\u5f71\u54cd\u4f7f\u7528\u96c6\u7fa4\u6a21\u677f\u521b\u5efa\u7684\u73b0\u6709\u96c6\u7fa4\u3002"),(0,l.kt)("p",null,"\u80fd\u591f\u8bbf\u95ee",(0,l.kt)("inlineCode",{parentName:"p"},"\u672c\u5730"),"\u96c6\u7fa4\u7684\u7ba1\u7406\u5458\u8fd8\u53ef\u4ee5\u524d\u5f80",(0,l.kt)("strong",{parentName:"p"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a > \u5df2\u5b89\u88c5\u7684\u5e94\u7528"),"\u9875\u9762\uff0c\u901a\u8fc7\u96c6\u7fa4\u6a21\u677f\u6765\u79fb\u9664\u5df2\u90e8\u7f72\u7684\u96c6\u7fa4\u3002"),(0,l.kt)("h2",{id:"\u914d\u7f6e\u9009\u9879"},"\u914d\u7f6e\u9009\u9879"),(0,l.kt)("p",null,"\u96c6\u7fa4\u6a21\u677f\u975e\u5e38\u7075\u6d3b\uff0c\u53ef\u7528\u4e8e\u914d\u7f6e\u4ee5\u4e0b\u6240\u6709\u9009\u9879\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u6c60"),(0,l.kt)("li",{parentName:"ul"},"\u9884\u5148\u6307\u5b9a\u7684\u4e91\u51ed\u8bc1"),(0,l.kt)("li",{parentName:"ul"},"\u542f\u7528/\u914d\u7f6e\u6388\u6743\u7684\u96c6\u7fa4\u7aef\u70b9\uff0c\u4ee5\u5728\u4e0d\u4f7f\u7528 Rancher \u4f5c\u4e3a\u4ee3\u7406\u7684\u60c5\u51b5\u4e0b\u83b7\u5f97\u5bf9\u96c6\u7fa4\u7684 kubectl \u8bbf\u95ee\u6743\u9650"),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5 Rancher V2 monitoring"),(0,l.kt)("li",{parentName:"ul"},"Kubernetes \u7248\u672c"),(0,l.kt)("li",{parentName:"ul"},"\u5206\u914d\u96c6\u7fa4\u6210\u5458"),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u57fa\u7840\u8bbe\u65bd\uff0c\u4f8b\u5982 AWS VPC/\u5b50\u7f51\u6216 vSphere \u6570\u636e\u4e2d\u5fc3"),(0,l.kt)("li",{parentName:"ul"},"\u4e91\u63d0\u4f9b\u5546\u9009\u9879"),(0,l.kt)("li",{parentName:"ul"},"Pod \u5b89\u5168\u9009\u9879"),(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u63d0\u4f9b\u5546"),(0,l.kt)("li",{parentName:"ul"},"Ingress Controller"),(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u5b89\u5168\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u63d2\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93 URL \u548c\u51ed\u8bc1"),(0,l.kt)("li",{parentName:"ul"},"\u9644\u52a0\u7ec4\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"Kubernetes \u9009\u9879\uff0c\u5305\u62ec kube-api\u3001kube-controller\u3001kubelet \u548c\u670d\u52a1\u7b49 Kubernetes \u7ec4\u4ef6\u7684\u914d\u7f6e")),(0,l.kt)("p",null,"\u6709\u5173\u5982\u4f55\u914d\u7f6e\u6a21\u677f\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u96c6\u7fa4\u6a21\u677f\u7684 Helm Chart README \u6587\u4ef6\u3002"))}d.isMDXComponent=!0}}]);