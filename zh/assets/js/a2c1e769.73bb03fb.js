"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[41175],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(k,l(l({ref:e},m),{},{components:n})):r.createElement(k,l({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64530:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"CPU \u548c\u5185\u5b58\u5206\u914d",weight:1},p=void 0,s={unversionedId:"explanations/integrations-in-rancher/istio/cpu-and-memory-allocations",id:"explanations/integrations-in-rancher/istio/cpu-and-memory-allocations",title:"CPU \u548c\u5185\u5b58\u5206\u914d",description:"\u672c\u6587\u4ecb\u7ecd\u6211\u4eec\u5efa\u8bae\u5728\u96c6\u7fa4\u4e2d\u5206\u914d\u7ed9 Istio \u7ec4\u4ef6\u7684\u6700\u5c11\u8ba1\u7b97\u8d44\u6e90\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations.md",sourceDirName:"explanations/integrations-in-rancher/istio",slug:"/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations",permalink:"/zh/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"CPU \u548c\u5185\u5b58\u5206\u914d",weight:1},sidebar:"tutorialSidebar",previous:{title:"Istio",permalink:"/zh/pages-for-subheaders/istio"},next:{title:"RBAC",permalink:"/zh/explanations/integrations-in-rancher/istio/rbac-for-istio"}},m={},u=[{value:"\u914d\u7f6e\u8d44\u6e90\u5206\u914d",id:"\u914d\u7f6e\u8d44\u6e90\u5206\u914d",level:2},{value:"\u7f16\u8f91\u8986\u76d6\u6587\u4ef6",id:"\u7f16\u8f91\u8986\u76d6\u6587\u4ef6",level:3}],c={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u6211\u4eec\u5efa\u8bae\u5728\u96c6\u7fa4\u4e2d\u5206\u914d\u7ed9 Istio \u7ec4\u4ef6\u7684\u6700\u5c11\u8ba1\u7b97\u8d44\u6e90\u3002"),(0,i.kt)("p",null,"\u6bcf\u4e2a\u7ec4\u4ef6\u7684 CPU \u548c\u5185\u5b58\u5206\u914d\u662f",(0,i.kt)("a",{parentName:"p",href:"#%E9%85%8D%E7%BD%AE%E8%B5%84%E6%BA%90%E5%88%86%E9%85%8D"},"\u53ef\u914d\u7f6e"),"\u7684\u3002"),(0,i.kt)("p",null,"\u5728\u542f\u7528 Istio \u4e4b\u524d\uff0c\u5efa\u8bae\u4f60\u5148\u786e\u8ba4\u4f60\u7684 Rancher worker \u8282\u70b9\u662f\u5426\u6709\u8db3\u591f\u7684 CPU \u548c\u5185\u5b58\u6765\u8fd0\u884c Istio \u7684\u6240\u6709\u7ec4\u4ef6\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728\u89c4\u6a21\u8f83\u5927\u7684\u90e8\u7f72\u4e2d\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u901a\u8fc7\u4e3a\u6bcf\u4e2a Istio \u7ec4\u4ef6\u6dfb\u52a0\u8282\u70b9\u9009\u62e9\u5668\uff0c\u6765\u5c06\u57fa\u7840\u8bbe\u65bd\u653e\u7f6e\u5728\u96c6\u7fa4\u4e2d\u7684\u4e13\u7528\u8282\u70b9\u4e0a\u3002"))),(0,i.kt)("p",null,"\u4e0b\u8868\u603b\u7ed3\u4e86\u6bcf\u4e2a\u6838\u5fc3 Istio \u7ec4\u4ef6\u63a8\u8350\u914d\u7f6e\u7684 CPU \u548c\u5185\u5b58\u7684\u6700\u4f4e\u8d44\u6e90\u8bf7\u6c42\u548c\u9650\u5236\u3002"),(0,i.kt)("p",null,"Kubernetes \u4e2d\u7684\u8d44\u6e90\u8bf7\u6c42\u6307\u7684\u662f\uff0c\u9664\u975e\u8be5\u8282\u70b9\u81f3\u5c11\u5177\u6709\u6307\u5b9a\u6570\u91cf\u7684\u53ef\u7528\u5185\u5b58\u548c CPU\uff0c\u5426\u5219\u5de5\u4f5c\u8d1f\u8f7d\u4e0d\u4f1a\u90e8\u7f72\u5728\u8282\u70b9\u4e0a\u3002\u5982\u679c\u5de5\u4f5c\u8d1f\u8f7d\u8d85\u8fc7 CPU \u6216\u5185\u5b58\u7684\u9650\u5236\uff0c\u5219\u53ef\u4ee5\u5c06\u5176\u4ece\u8282\u70b9\u4e2d\u7ec8\u6b62\u6216\u9a71\u9010\u3002\u6709\u5173\u7ba1\u7406\u5bb9\u5668\u8d44\u6e90\u9650\u5236\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/"},"Kubernetes \u6587\u6863"),"\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5de5\u4f5c\u8d1f\u8f7d"),(0,i.kt)("th",{parentName:"tr",align:null},"CPU - \u8bf7\u6c42"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5185\u5b58 - \u8bf7\u6c42"),(0,i.kt)("th",{parentName:"tr",align:null},"CPU - \u9650\u5236"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5185\u5b58 - \u9650\u5236"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u5165\u53e3\u7f51\u5173"),(0,i.kt)("td",{parentName:"tr",align:null},"100m"),(0,i.kt)("td",{parentName:"tr",align:null},"128mi"),(0,i.kt)("td",{parentName:"tr",align:null},"2000m"),(0,i.kt)("td",{parentName:"tr",align:null},"1024mi")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u51fa\u53e3\u7f51\u5173"),(0,i.kt)("td",{parentName:"tr",align:null},"100m"),(0,i.kt)("td",{parentName:"tr",align:null},"128mi"),(0,i.kt)("td",{parentName:"tr",align:null},"2000m"),(0,i.kt)("td",{parentName:"tr",align:null},"1024mi")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"istiod"),(0,i.kt)("td",{parentName:"tr",align:null},"500m"),(0,i.kt)("td",{parentName:"tr",align:null},"2048mi"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6ca1\u6709\u9650\u5236"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6ca1\u6709\u9650\u5236")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"proxy"),(0,i.kt)("td",{parentName:"tr",align:null},"10m"),(0,i.kt)("td",{parentName:"tr",align:null},"10mi"),(0,i.kt)("td",{parentName:"tr",align:null},"2000m"),(0,i.kt)("td",{parentName:"tr",align:null},"1024mi")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"\u603b\u8ba1\uff1a")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"710m")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"2314Mi")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"6000m")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"3072Mi"))))),(0,i.kt)("h2",{id:"\u914d\u7f6e\u8d44\u6e90\u5206\u914d"},"\u914d\u7f6e\u8d44\u6e90\u5206\u914d"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4e3a\u6bcf\u79cd\u7c7b\u578b\u7684 Istio \u7ec4\u4ef6\u5355\u72ec\u914d\u7f6e\u8d44\u6e90\u5206\u914d\u3002\u672c\u8282\u4ecb\u7ecd\u4e86\u6bcf\u4e2a\u7ec4\u4ef6\u9ed8\u8ba4\u5206\u914d\u7684\u8d44\u6e90\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u66f4\u8f7b\u677e\u5730\u5c06\u5de5\u4f5c\u8d1f\u8f7d\u8c03\u5ea6\u5230\u8282\u70b9\uff0c\u96c6\u7fa4\u7ba1\u7406\u5458\u53ef\u4ee5\u964d\u4f4e\u7ec4\u4ef6\u7684 CPU \u548c\u5185\u5b58\u8d44\u6e90\u8bf7\u6c42\u3002\u9ed8\u8ba4 CPU \u548c\u5185\u5b58\u5206\u914d\u662f\u6211\u4eec\u63a8\u8350\u7684\u6700\u5c0f\u503c\u3002"),(0,i.kt)("p",null,"\u5173\u4e8e Istio \u914d\u7f6e\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/"},"Istio \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,i.kt)("p",null,"\u8981\u914d\u7f6e\u5206\u914d\u7ed9 Istio \u7ec4\u4ef6\u7684\u8d44\u6e90\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u5df2\u5b89\u88c5\u7684\u5e94\u7528"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8f6c\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"istio-system")," \u547d\u540d\u7a7a\u95f4\u3002\u5728\u67d0\u4e2a Istio \u5de5\u4f5c\u8d1f\u8f7d\u4e2d\uff08\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-istio"),"\uff09\uff0c\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91/\u5347\u7ea7"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u5347\u7ea7"),"\uff0c\u7136\u540e\u901a\u8fc7\u66f4\u6539 values.yaml \u6216\u6dfb\u52a0",(0,i.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/configuration-options#%E8%A6%86%E7%9B%96%E6%96%87%E4%BB%B6"},"\u8986\u76d6\u6587\u4ef6"),"\u6765\u7f16\u8f91\u57fa\u672c\u7ec4\u4ef6\u3002\u6709\u5173\u7f16\u8f91\u8986\u76d6\u6587\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"li",href:"/zh/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations#%E7%BC%96%E8%BE%91%E8%A6%86%E7%9B%96%E6%96%87%E4%BB%B6"},"\u672c\u8282"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u66f4\u6539 CPU \u6216\u5185\u5b58\u5206\u914d\u3001\u8c03\u5ea6\u5404\u4e2a\u7ec4\u4ef6\u7684\u8282\u70b9\uff0c\u6216\u8282\u70b9\u5bb9\u5fcd\u5ea6\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u5347\u7ea7"),"\u3002\u7136\u540e\uff0c\u66f4\u6539\u5c31\u80fd\u542f\u7528\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u66f4\u65b0 Istio \u7ec4\u4ef6\u7684\u8d44\u6e90\u5206\u914d\u3002"),(0,i.kt)("h3",{id:"\u7f16\u8f91\u8986\u76d6\u6587\u4ef6"},"\u7f16\u8f91\u8986\u76d6\u6587\u4ef6"),(0,i.kt)("p",null,"\u8986\u76d6\u6587\u4ef6\u53ef\u4ee5\u5305\u542b ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/reference/config/istio.operator.v1alpha1/#IstioOperatorSpec"},"Istio Operator \u89c4\u8303"),"\u4e2d\u7684\u4efb\u610f\u503c\u3002\u5305\u542b Istio \u5e94\u7528\u7684\u8986\u76d6\u6587\u4ef6\u53ea\u662f\u8986\u76d6\u6587\u4ef6\u6f5c\u5728\u914d\u7f6e\u7684\u4e00\u4e2a\u793a\u4f8b\u3002"),(0,i.kt)("p",null,"\u53ea\u8981\u6587\u4ef6\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"kind: IstioOperator")," \u4e14 YAML \u9009\u9879\u6709\u6548\uff0c\u6587\u4ef6\u5c31\u53ef\u4ee5\u7528\u4f5c\u8986\u76d6\u3002"),(0,i.kt)("p",null,"\u5728 Istio \u5e94\u7528\u63d0\u4f9b\u7684\u793a\u4f8b\u8986\u76d6\u6587\u4ef6\u4e2d\uff0c\u4ee5\u4e0b\u90e8\u5206\u80fd\u8ba9\u4f60\u66f4\u6539 Kubernetes \u8d44\u6e90\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#      k8s:\n#        resources:\n#          requests:\n#            cpu: 200m\n")))}d.isMDXComponent=!0}}]);