"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[36100],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75093:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"Logging \u6700\u4f73\u5b9e\u8df5",weight:1},p=void 0,u={unversionedId:"reference-guides/best-practices/rancher-managed-clusters/logging-best-practices",id:"reference-guides/best-practices/rancher-managed-clusters/logging-best-practices",title:"Logging \u6700\u4f73\u5b9e\u8df5",description:"\u672c\u6307\u5357\u4ecb\u7ecd\u4e86\u96c6\u7fa4\u7ea7\u522b\u65e5\u5fd7\u548c\u5e94\u7528\u65e5\u5fd7\u7684\u6700\u4f73\u5b9e\u8df5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices.md",sourceDirName:"reference-guides/best-practices/rancher-managed-clusters",slug:"/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices",permalink:"/zh/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"Logging \u6700\u4f73\u5b9e\u8df5",weight:1},sidebar:"tutorialSidebar",previous:{title:"Rancher \u7ba1\u7406\u96c6\u7fa4\u7684\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/pages-for-subheaders/rancher-managed-clusters"},next:{title:"\u76d1\u63a7\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices"}},c={},s=[{value:"\u96c6\u7fa4\u7ea7\u522b\u65e5\u5fd7",id:"\u96c6\u7fa4\u7ea7\u522b\u65e5\u5fd7",level:2},{value:"\u6293\u53d6\u96c6\u7fa4\u5185\u65e5\u5fd7",id:"\u6293\u53d6\u96c6\u7fa4\u5185\u65e5\u5fd7",level:3},{value:"Kubernetes \u7ec4\u4ef6",id:"kubernetes-\u7ec4\u4ef6",level:3},{value:"\u5e94\u7528\u65e5\u5fd7",id:"\u5e94\u7528\u65e5\u5fd7",level:2},{value:"\u7279\u5b9a\u65e5\u5fd7\u6587\u4ef6",id:"\u7279\u5b9a\u65e5\u5fd7\u6587\u4ef6",level:3},{value:"\u901a\u7528\u6700\u4f73\u5b9e\u8df5",id:"\u901a\u7528\u6700\u4f73\u5b9e\u8df5",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6307\u5357\u4ecb\u7ecd\u4e86\u96c6\u7fa4\u7ea7\u522b\u65e5\u5fd7\u548c\u5e94\u7528\u65e5\u5fd7\u7684\u6700\u4f73\u5b9e\u8df5\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E9%9B%86%E7%BE%A4%E7%BA%A7%E5%88%AB%E6%97%A5%E5%BF%97"},"\u96c6\u7fa4\u7ea7\u522b\u65e5\u5fd7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%BA%94%E7%94%A8%E6%97%A5%E5%BF%97"},"\u5e94\u7528\u65e5\u5fd7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E9%80%9A%E7%94%A8%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5"},"\u901a\u7528\u6700\u4f73\u5b9e\u8df5"))),(0,l.kt)("p",null,"\u5728 Rancher 2.5 \u4e4b\u524d\uff0cRancher \u7684 Logging \u662f\u4e00\u4e2a\u9759\u6001\u96c6\u6210\u3002\u53ef\u4f9b\u9009\u62e9\u7684\u805a\u5408\u5668\u662f\u56fa\u5b9a\u7684\uff08\u5305\u62ec ElasticSearch\u3001Splunk\u3001Kafka\u3001Fluentd \u548c Syslog\uff09\uff0c\u800c\u4e14\u53ea\u6709\u4e24\u4e2a\u914d\u7f6e\u7ea7\u522b\u53ef\u4f9b\u9009\u62e9\uff08\u96c6\u7fa4\u7ea7\u522b\u548c\u9879\u76ee\u7ea7\u522b\uff09\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\uff0cRancher \u7684\u65e5\u5fd7\u805a\u5408\u66f4\u52a0\u7075\u6d3b\u3002\u901a\u8fc7\u65b0\u7684 Logging \u7684\u529f\u80fd\uff0c\u7ba1\u7406\u5458\u548c\u7528\u6237\u90fd\u53ef\u4ee5\u90e8\u7f72\u7b26\u5408\u7ec6\u7c92\u5ea6\u6536\u96c6\u6807\u51c6\u7684\u65e5\u5fd7\u8bb0\u5f55\uff0c\u540c\u65f6\u63d0\u4f9b\u66f4\u591a\u7684\u76ee\u6807\u548c\u914d\u7f6e\u9009\u9879\u3002"),(0,l.kt)("p",null,"Rancher \u7684 Logging \u4f7f\u7528\u7684\u662f Banzai Cloud logging operator\u3002\u6211\u4eec\u8ba9\u4f60\u53ef\u4ee5\u7ba1\u7406\u8fd9\u4e2a operator \u53ca\u5176\u8d44\u6e90\uff0c\u5e76\u5c06\u5b83\u7684\u7ba1\u7406\u529f\u80fd\u548c Rancher \u96c6\u7fa4\u7ba1\u7406\u8054\u7cfb\u8d77\u6765\u3002"),(0,l.kt)("h2",{id:"\u96c6\u7fa4\u7ea7\u522b\u65e5\u5fd7"},"\u96c6\u7fa4\u7ea7\u522b\u65e5\u5fd7"),(0,l.kt)("h3",{id:"\u6293\u53d6\u96c6\u7fa4\u5185\u65e5\u5fd7"},"\u6293\u53d6\u96c6\u7fa4\u5185\u65e5\u5fd7"),(0,l.kt)("p",null,"\u67d0\u4e9b\u7528\u6237\u53ef\u80fd\u60f3\u4ece\u96c6\u7fa4\u4e2d\u8fd0\u884c\u7684\u6bcf\u4e2a\u5bb9\u5668\u4e2d\u6293\u53d6\u65e5\u5fd7\u3002\u4f46\u662f\u4f60\u7684\u5b89\u5168\u56e2\u961f\u53ef\u80fd\u8981\u6c42\u4f60\u4ece\u6240\u6709\u6267\u884c\u70b9\u6536\u96c6\u6240\u6709\u65e5\u5fd7\u3002"),(0,l.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u81f3\u5c11\u521b\u5efa\u4e24\u4e2a ",(0,l.kt)("em",{parentName:"p"},"ClusterOutput")," \u5bf9\u8c61 - \u4e00\u4e2a\u7528\u4e8e\u5b89\u5168\u56e2\u961f\uff08\u5982\u679c\u9700\u8981\uff09\uff0c\u53e6\u4e00\u4e2a\u7528\u4e8e\u4f60\u81ea\u5df1\uff0c\u5373\u96c6\u7fa4\u7ba1\u7406\u5458\u3002\u521b\u5efa\u8fd9\u4e9b\u5bf9\u8c61\u65f6\uff0c\u8bf7\u9009\u62e9\u4e00\u4e2a\u53ef\u4ee5\u5904\u7406\u6574\u4e2a\u96c6\u7fa4\u7684\u5927\u91cf\u65e5\u5fd7\u7684\u8f93\u51fa\u7aef\u70b9\u3002\u6b64\u5916\uff0c\u4f60\u8fd8\u9700\u8981\u9009\u62e9\u5408\u9002\u7684\u7d22\u5f15\u6765\u63a5\u6536\u8fd9\u4e9b\u65e5\u5fd7\u3002"),(0,l.kt)("p",null,"\u521b\u5efa\u8fd9\u4e9b ",(0,l.kt)("em",{parentName:"p"},"ClusterOutput")," \u5bf9\u8c61\u540e\uff0c\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"ClusterFlow")," \u6765\u6536\u96c6\u6240\u6709\u65e5\u5fd7\u3002\u4e0d\u8981\u5728\u6b64 flow \u4e0a\u5b9a\u4e49\u4efb\u4f55 ",(0,l.kt)("em",{parentName:"p"},"Include")," \u6216 ",(0,l.kt)("em",{parentName:"p"},"Exclude")," \u89c4\u5219\u3002\u8fd9\u53ef\u4ee5\u786e\u4fdd\u4f60\u80fd\u6536\u96c6\u6574\u4e2a\u96c6\u7fa4\u7684\u6240\u6709\u65e5\u5fd7\u3002\u5982\u679c\u4f60\u6709\u4e24\u4e2a ",(0,l.kt)("em",{parentName:"p"},"ClusterOutputs"),"\uff0c\u8bf7\u786e\u4fdd\u5b83\u4eec\u90fd\u80fd\u6536\u5230\u65e5\u5fd7\u3002"),(0,l.kt)("h3",{id:"kubernetes-\u7ec4\u4ef6"},"Kubernetes \u7ec4\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"ClusterFlows")," \u80fd\u591f\u6536\u96c6 Kubernetes \u96c6\u7fa4\u4e2d\u6240\u6709\u4e3b\u673a\u4e0a\u6240\u6709\u5bb9\u5668\u7684\u65e5\u5fd7\u3002\u5982\u679c\u8fd9\u4e9b\u5bb9\u5668\u5305\u542b\u5728 Kubernetes Pod \u4e2d\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u662f\u9002\u7528\u7684\u3002\u4f46\u662f\uff0cRKE \u5bb9\u5668\u4e0d\u5b58\u5728\u4e8e Kubernetes \u5185\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\uff0cRancher \u80fd\u641c\u96c6 RKE \u5bb9\u5668\u7684\u65e5\u5fd7\uff0c\u4f46\u4e0d\u80fd\u8f7b\u6613\u8fc7\u6ee4\u3002\u8fd9\u662f\u56e0\u4e3a\u8fd9\u4e9b\u65e5\u5fd7\u4e0d\u5305\u542b\u6e90\u5bb9\u5668\u7684\u4fe1\u606f\uff08\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"etcd")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"kube-apiserver"),"\uff09\u3002"),(0,l.kt)("p",null,"Rancher \u7684\u672a\u6765\u7248\u672c\u5c06\u5305\u542b\u6e90\u5bb9\u5668\u540d\u79f0\uff0c\u6765\u652f\u6301\u8fc7\u6ee4\u8fd9\u4e9b\u7ec4\u4ef6\u7684\u65e5\u5fd7\u3002\u8be5\u529f\u80fd\u5b9e\u73b0\u4e4b\u540e\uff0c\u4f60\u5c06\u80fd\u591f\u81ea\u5b9a\u4e49 ",(0,l.kt)("em",{parentName:"p"},"ClusterFlow")," \u6765",(0,l.kt)("strong",{parentName:"p"},"\u4ec5"),"\u68c0\u7d22 Kubernetes \u7ec4\u4ef6\u65e5\u5fd7\uff0c\u5e76\u5c06\u65e5\u5fd7\u53d1\u9001\u5230\u9002\u5f53\u7684\u8f93\u51fa\u4f4d\u7f6e\u3002"),(0,l.kt)("h2",{id:"\u5e94\u7528\u65e5\u5fd7"},"\u5e94\u7528\u65e5\u5fd7"),(0,l.kt)("p",null,"\u5bf9\u4e8e Kubernetes \u548c\u6240\u6709\u57fa\u4e8e\u5bb9\u5668\u7684\u5e94\u7528\u800c\u8a00\uff0c\u6700\u4f73\u5b9e\u8df5\u662f\u5c06\u5e94\u7528\u65e5\u5fd7\u5f15\u5bfc\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"stderr"),"\u3002\u5bb9\u5668\u8fd0\u884c\u65f6\u5c06\u6355\u83b7\u8fd9\u4e9b\u65e5\u5fd7\u5e76\u7528\u5b83\u4eec\u8fdb\u884c",(0,l.kt)("strong",{parentName:"p"},"\u67d0\u4e9b\u64cd\u4f5c")," - \u901a\u5e38\u662f\u5c06\u5b83\u4eec\u5199\u5165\u6587\u4ef6\u3002\u6839\u636e\u5bb9\u5668\u8fd0\u884c\u65f6\uff08\u53ca\u5176\u914d\u7f6e\uff09\uff0c\u8fd9\u4e9b\u65e5\u5fd7\u53ef\u4ee5\u653e\u7f6e\u5728\u4efb\u610f\u6570\u91cf\u7684\u4f4d\u7f6e\u3002"),(0,l.kt)("p",null,"\u5728\u5c06\u65e5\u5fd7\u5199\u5165\u6587\u4ef6\u7684\u60c5\u51b5\u4e0b\uff0cKubernetes \u901a\u8fc7\u5728\u6bcf\u4e2a\u4e3b\u673a\u4e0a\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/log/containers")," \u76ee\u5f55\u6765\u63d0\u4f9b\u5e2e\u52a9\u3002\u8fd9\u4e2a\u76ee\u5f55\u5c06\u65e5\u5fd7\u6587\u4ef6\u7b26\u53f7\u94fe\u63a5\u5230\u5b83\u4eec\u7684\u5b9e\u9645\u76ee\u7684\u5730\uff08\u53ef\u80fd\u56e0\u4e3a\u914d\u7f6e\u6216\u5bb9\u5668\u8fd0\u884c\u65f6\u800c\u6709\u6240\u4e0d\u540c\uff09\u3002"),(0,l.kt)("p",null,"Rancher \u7684 Logging \u5c06\u8bfb\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/log/containers")," \u4e2d\u7684\u6240\u6709\u65e5\u5fd7\u6761\u76ee\uff0c\u786e\u4fdd\u6240\u6709\u5bb9\u5668\u7684\u6240\u6709\u65e5\u5fd7\u6761\u76ee\uff08\u5047\u8bbe\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\uff09\u5747\u80fd\u88ab\u6536\u96c6\u548c\u5904\u7406\u3002"),(0,l.kt)("h3",{id:"\u7279\u5b9a\u65e5\u5fd7\u6587\u4ef6"},"\u7279\u5b9a\u65e5\u5fd7\u6587\u4ef6"),(0,l.kt)("p",null,"\u65e5\u5fd7\u6536\u96c6\u4ec5\u4ece Kubernetes \u4e2d\u7684 Pod \u4e2d\u68c0\u7d22 ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"stderr")," \u65e5\u5fd7\u3002\u4f46\u662f\uff0c\u6211\u4eec\u4e5f\u53ef\u80fd\u60f3\u4ece\u5e94\u7528\u751f\u6210\u7684\u5176\u4ed6\u6587\u4ef6\u4e2d\u6536\u96c6\u65e5\u5fd7\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\uff08\u6216\u4e24\u4e2a\uff09\u65e5\u5fd7\u6d41 Sidecar\u3002"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u65e5\u5fd7\u6d41 Sidecar \u7684\u76ee\u7684\u662f\u83b7\u53d6\u5199\u5165\u78c1\u76d8\u7684\u65e5\u5fd7\u6587\u4ef6\uff0c\u5e76\u5c06\u5176\u5185\u5bb9\u4f20\u8f93\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout"),"\u3002\u8fd9\u6837\u4e00\u6765\uff0cBanzai Logging Operator \u5c31\u53ef\u4ee5\u63a5\u6536\u8fd9\u4e9b\u65e5\u5fd7\uff0c\u5e76\u628a\u65e5\u5fd7\u53d1\u9001\u5230\u76ee\u6807\u8f93\u51fa\u4f4d\u7f6e\u3002"),(0,l.kt)("p",null,"\u8981\u8fdb\u884c\u8bbe\u7f6e\uff0c\u7f16\u8f91\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u8d44\u6e90\uff08\u4f8b\u5982 Deployment\uff09\u5e76\u6dfb\u52a0\u4ee5\u4e0b Sidecar \u5b9a\u4e49\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"...\ncontainers:\n- args:\n  - -F\n  - /path/to/your/log/file.log\n  command:\n  - tail\n  image: busybox\n  name: stream-log-file-[name]\n  volumeMounts:\n  - mountPath: /path/to/your/log\n    name: mounted-log\n...\n")),(0,l.kt)("p",null,"\u8fd9\u5c06\u6dfb\u52a0\u4e00\u4e2a\u5bb9\u5668\u5230\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5b9a\u4e49\u4e2d\uff0c\u7528\u4e8e\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"/path/to/your/log/file.log")," \u7684\u5185\u5bb9\uff08\u5728\u672c\u793a\u4f8b\u4e2d\uff09\u4f20\u8f93\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout"),"\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u5c06\u6839\u636e\u4f60\u8bbe\u7f6e\u7684 ",(0,l.kt)("em",{parentName:"p"},"Flows")," \u6216 ",(0,l.kt)("em",{parentName:"p"},"ClusterFlows")," \u81ea\u52a8\u6536\u96c6\u8be5\u65e5\u5fd7\u6d41\u3002\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u5bb9\u5668\u7684\u540d\u79f0\uff0c\u4e13\u95e8\u4e3a\u8be5\u65e5\u5fd7\u6587\u4ef6\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"Flow"),"\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"...\nspec:\n  match:\n  - select:\n      container_names:\n      - stream-log-file-name\n...\n")),(0,l.kt)("h2",{id:"\u901a\u7528\u6700\u4f73\u5b9e\u8df5"},"\u901a\u7528\u6700\u4f73\u5b9e\u8df5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u8f93\u51fa\u7ed3\u6784\u5316\u65e5\u5fd7\u6761\u76ee\uff08\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"syslog"),"\u3001JSON\uff09\u3002\u8fd9\u4e9b\u683c\u5f0f\u5df2\u7ecf\u6709\u4e86\u89e3\u6790\u5668\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u66f4\u8f7b\u677e\u5730\u5904\u7406\u65e5\u5fd7\u6761\u76ee\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u5728\u65e5\u5fd7\u6761\u76ee\u5185\u63d0\u4f9b\u521b\u5efa\u8be5\u65e5\u5fd7\u6761\u76ee\u7684\u5e94\u7528\u7684\u540d\u79f0\u3002\u8fd9\u53ef\u4ee5\u4f7f\u6545\u969c\u6392\u9664\u66f4\u5bb9\u6613\u3002\u8fd9\u662f\u56e0\u4e3a Kubernetes \u5e76\u4e0d\u603b\u662f\u5c06\u5e94\u7528\u7684\u540d\u79f0\u4f5c\u4e3a\u5bf9\u8c61\u540d\u79f0\u3002\u4f8b\u5982\uff0c\u67d0\u4e2a Pod ID \u53ef\u80fd\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"myapp-098kjhsdf098sdf98"),"\uff0c\u4ece\u8fd9\u4e2a ID \u4e2d\u6211\u4eec\u4e0d\u80fd\u83b7\u53d6\u8fd0\u884c\u5728\u5bb9\u5668\u5185\u7684\u5e94\u7528\u7684\u592a\u591a\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9664\u4e86\u5728\u96c6\u7fa4\u8303\u56f4\u5185\u6536\u96c6\u6240\u6709\u65e5\u5fd7\u7684\u60c5\u51b5\u5916\uff0c\u5c3d\u91cf\u4e25\u683c\u9650\u5b9a ",(0,l.kt)("em",{parentName:"li"},"Flow")," \u548c ",(0,l.kt)("em",{parentName:"li"},"ClusterFlow")," \u5bf9\u8c61\u7684\u8303\u56f4\u3002\u8fd9\u4f7f\u5f97\u5728\u51fa\u73b0\u95ee\u9898\u65f6\u66f4\u5bb9\u6613\u8fdb\u884c\u6545\u969c\u6392\u9664\uff0c\u5e76\u4e14\u8fd8\u6709\u52a9\u4e8e\u786e\u4fdd\u4e0d\u76f8\u5173\u7684\u65e5\u5fd7\u6761\u76ee\u4e0d\u4f1a\u51fa\u73b0\u5728\u4f60\u7684\u805a\u5408\u5668\u4e2d\u3002\u4e25\u683c\u9650\u5b9a\u8303\u56f4\u7684\u4e00\u4e2a\u4f8b\u5b50\u662f\u5c06 ",(0,l.kt)("em",{parentName:"li"},"Flow")," \u9650\u5236\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u5355\u4e2a ",(0,l.kt)("em",{parentName:"li"},"Deployment"),"\uff0c\u751a\u81f3\u662f ",(0,l.kt)("em",{parentName:"li"},"Pod")," \u4e2d\u7684\u5355\u4e2a\u5bb9\u5668\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9664\u975e\u8981\u8fdb\u884c\u6545\u969c\u6392\u9664\uff0c\u5426\u5219\u4e0d\u8981\u8ba9\u65e5\u5fd7\u592a\u8be6\u7ec6\u3002\u592a\u8be6\u7ec6\u7684\u65e5\u5fd7\u4f1a\u5e26\u6765\u8bb8\u591a\u95ee\u9898\uff0c\u5176\u4e2d\u6700\u4e3b\u8981\u7684\u662f",(0,l.kt)("strong",{parentName:"li"},"\u5e26\u6765\u5e72\u6270"),"\uff0c\u5373\u91cd\u8981\u4e8b\u4ef6\u53ef\u80fd\u4f1a\u6df9\u6ca1\u5728\u6d77\u91cf ",(0,l.kt)("inlineCode",{parentName:"li"},"DEBUG")," \u4fe1\u606f\u4e2d\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u81ea\u52a8\u544a\u8b66\u548c\u811a\u672c\u6765\u7f13\u89e3\u8fd9\u79cd\u95ee\u9898\uff0c\u4f46\u592a\u8be6\u7ec6\u7684\u65e5\u5fd7\u4ecd\u7136\u7ed9\u65e5\u5fd7\u7ba1\u7406\u57fa\u7840\u8bbe\u65bd\u5e26\u6765\u8fc7\u5927\u7684\u538b\u529b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u53ef\u80fd\uff0c\u5c3d\u91cf\u5728\u65e5\u5fd7\u6761\u76ee\u4e2d\u63d0\u4f9b\u4e8b\u52a1\u6216\u8bf7\u6c42 ID\u3002\u8fd9\u53ef\u4ee5\u4f7f\u8de8\u65e5\u5fd7\u6e90\u8ffd\u8e2a\u5e94\u7528\u6d3b\u52a8\u53d8\u5f97\u66f4\u5bb9\u6613\uff0c\u5c24\u5176\u662f\u5728\u5904\u7406\u5206\u5e03\u5f0f\u5e94\u7528\u65f6\u3002")))}d.isMDXComponent=!0}}]);