"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[75559],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),u=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(o.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,h=d["".concat(o,".").concat(f)]||d[f]||p[f]||c;return t?n.createElement(h,l(l({ref:r},s),{},{components:t})):n.createElement(h,l({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=d;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<c;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38313:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=t(87462),a=t(63366),c=(t(67294),t(3905)),l=["components"],i={title:"Rancher \u90e8\u7f72\u7b56\u7565",weight:100},o=void 0,u={unversionedId:"reference-guides/best-practices/rancher-server/rancher-deployment-strategy",id:"reference-guides/best-practices/rancher-server/rancher-deployment-strategy",title:"Rancher \u90e8\u7f72\u7b56\u7565",description:"\u672c\u6587\u63d0\u4f9b Rancher Server \u7684\u4e24\u79cd\u90e8\u7f72\u7b56\u7565\uff0c\u7528\u4e8e\u7ba1\u7406\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u3002\u6bcf\u79cd\u7b56\u7565\u90fd\u6709\u4f18\u7f3a\u70b9\u3002\u8bf7\u6309\u7167\u4f60\u7684\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u6700\u9002\u5408\u7684\u90e8\u7f72\u7b56\u7565\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/best-practices/rancher-server/rancher-deployment-strategy.md",sourceDirName:"reference-guides/best-practices/rancher-server",slug:"/reference-guides/best-practices/rancher-server/rancher-deployment-strategy",permalink:"/zh/reference-guides/best-practices/rancher-server/rancher-deployment-strategy",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/best-practices/rancher-server/rancher-deployment-strategy.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"Rancher \u90e8\u7f72\u7b56\u7565",weight:100},sidebar:"tutorialSidebar",previous:{title:"\u5728 vSphere \u73af\u5883\u4e2d\u5b89\u88c5 Rancher",permalink:"/zh/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere"},next:{title:"Rancher \u8fd0\u884c\u6280\u5de7",permalink:"/zh/reference-guides/best-practices/rancher-server/tips-for-running-rancher"}},s={},p=[{value:"\u4e2d\u5fc3\u8f90\u5c04\u578b\u7b56\u7565",id:"\u4e2d\u5fc3\u8f90\u5c04\u578b\u7b56\u7565",level:2},{value:"\u4f18\u70b9",id:"\u4f18\u70b9",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:3},{value:"\u533a\u57df\u578b\u7b56\u7565",id:"\u533a\u57df\u578b\u7b56\u7565",level:2},{value:"\u4f18\u70b9",id:"\u4f18\u70b9-1",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9-1",level:3}],d={toc:p};function f(e){var r=e.components,i=(0,a.Z)(e,l);return(0,c.kt)("wrapper",(0,n.Z)({},d,i,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u672c\u6587\u63d0\u4f9b Rancher Server \u7684\u4e24\u79cd\u90e8\u7f72\u7b56\u7565\uff0c\u7528\u4e8e\u7ba1\u7406\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u3002\u6bcf\u79cd\u7b56\u7565\u90fd\u6709\u4f18\u7f3a\u70b9\u3002\u8bf7\u6309\u7167\u4f60\u7684\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u6700\u9002\u5408\u7684\u90e8\u7f72\u7b56\u7565\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"#%E4%B8%AD%E5%BF%83%E8%BE%90%E5%B0%84%E5%9E%8B%E7%AD%96%E7%95%A5"},"\u4e2d\u5fc3\u8f90\u5c04\u578b\u7b56\u7565")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"#%E5%8C%BA%E5%9F%9F%E5%9E%8B%E7%AD%96%E7%95%A5"},"\u533a\u57df\u578b\u7b56\u7565"))),(0,c.kt)("h2",{id:"\u4e2d\u5fc3\u8f90\u5c04\u578b\u7b56\u7565"},"\u4e2d\u5fc3\u8f90\u5c04\u578b\u7b56\u7565"),(0,c.kt)("hr",null),(0,c.kt)("p",null,"\u5728\u4e2d\u5fc3\u8f90\u5c04\u578b\u90e8\u7f72\u4e2d\uff0c\u4e00\u4e2a Rancher controlplane \u5c31\u53ef\u4ee5\u7ba1\u7406\u904d\u5e03\u5168\u7403\u7684 Kubernetes \u96c6\u7fa4\u3002\u8fd9\u4e2a controlplane \u8fd0\u884c\u5728\u9ad8\u53ef\u7528 Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u5e76\u4e14\u4f1a\u53d7\u5ef6\u8fdf\u5f71\u54cd\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{src:t(56904).Z,width:"1332",height:"749"})),(0,c.kt)("h3",{id:"\u4f18\u70b9"},"\u4f18\u70b9"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u73af\u5883\u4e2d\u53ef\u4ee5\u5177\u6709\u8de8\u533a\u57df\u7684\u8282\u70b9\u548c\u7f51\u7edc\u8fde\u63a5\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a controlplane \u754c\u9762\u67e5\u770b\u6240\u6709\u533a\u57df\u548c\u73af\u5883\u3002"),(0,c.kt)("li",{parentName:"ul"},"Kubernetes \u4e0d\u9700\u8981 Rancher \u8fdb\u884c\u64cd\u4f5c\uff0c\u5e76\u4e14\u53ef\u4ee5\u5bb9\u5fcd\u4e0e Rancher controlplane \u65ad\u5f00\u8fde\u63a5\u3002")),(0,c.kt)("h3",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u53d7\u9650\u4e8e\u7f51\u7edc\u5ef6\u8fdf\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u5982\u679c controlplane \u51fa\u73b0\u6545\u969c\uff0c\u5728\u6062\u590d\u4e4b\u524d\u4e0d\u53ef\u4ee5\u5728\u5168\u7403\u8303\u56f4\u5185\u521b\u5efa\u65b0\u670d\u52a1\u3002\u4f46\u662f\u6bcf\u4e2a Kubernetes \u96c6\u7fa4\u90fd\u53ef\u4ee5\u7ee7\u7eed\u5355\u72ec\u7ba1\u7406\u3002")),(0,c.kt)("h2",{id:"\u533a\u57df\u578b\u7b56\u7565"},"\u533a\u57df\u578b\u7b56\u7565"),(0,c.kt)("hr",null),(0,c.kt)("p",null,"\u5728\u533a\u57df\u578b\u90e8\u7f72\u6a21\u578b\u4e2d\uff0ccontrolplane \u90e8\u7f72\u5728\u9760\u8fd1\u8ba1\u7b97\u8282\u70b9\u7684\u4f4d\u7f6e\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{src:t(38039).Z,width:"1331",height:"557"})),(0,c.kt)("h3",{id:"\u4f18\u70b9-1"},"\u4f18\u70b9"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u5982\u679c\u67d0\u4e2a\u533a\u57df\u7684 controlplane \u51fa\u73b0\u6545\u969c\uff0c\u5176\u4ed6\u533a\u57df\u5185\u7684 Rancher \u529f\u80fd\u4ecd\u7136\u53ef\u4ee5\u4fdd\u6301\u6b63\u5e38\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u5ef6\u8fdf\u5927\u5927\u964d\u4f4e\uff0c\u63d0\u9ad8 Rancher \u7684\u6027\u80fd\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728\u6bcf\u4e2a\u533a\u57df\u5185\u72ec\u7acb\u5347\u7ea7 Rancher controlplane\u3002")),(0,c.kt)("h3",{id:"\u7f3a\u70b9-1"},"\u7f3a\u70b9"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u591a\u4e2a Rancher \u5b89\u88c5\u7684\u5f00\u9500\u8f83\u5927\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u9700\u8981\u5728\u591a\u4e2a\u754c\u9762\u4e2d\u67e5\u770b\u5168\u7403\u6240\u6709\u7684 Kubernetes \u96c6\u7fa4\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u5728 Rancher \u4e2d\u90e8\u7f72\u591a\u96c6\u7fa4\u5e94\u7528\u65f6\uff0c\u9700\u8981\u5728\u6bcf\u4e2a Rancher Server \u4e2d\u91cd\u590d\u90e8\u7f72\u6b65\u9aa4\u3002")))}f.isMDXComponent=!0},56904:function(e,r,t){r.Z=t.p+"assets/images/hub-and-spoke-e5f8b93bb0f2caaa2932942b77ac2a2f.png"},38039:function(e,r,t){r.Z=t.p+"assets/images/regional-85aa0ca404aa35cee043f324fdbdd3cb.png"}}]);