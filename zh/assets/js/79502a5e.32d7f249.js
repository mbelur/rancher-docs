"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[74518],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||c;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,l=new Array(c);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<c;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65026:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=r(87462),a=r(63366),c=(r(67294),r(3905)),l=["components"],o={title:"\u5378\u8f7d Adapter",weight:3},i=void 0,p={unversionedId:"explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter",id:"explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter",title:"\u5378\u8f7d Adapter",description:"1. \u4f7f\u7528 Helm \u5378\u8f7d Adapter Chart\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter.md",sourceDirName:"explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace",slug:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter",permalink:"/zh/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"\u5378\u8f7d Adapter",weight:3},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5 Adapter",permalink:"/zh/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/common-issues"}},u={},s=[{value:"1. \u4f7f\u7528 Helm \u5378\u8f7d Adapter Chart\uff1a",id:"1-\u4f7f\u7528-helm-\u5378\u8f7d-adapter-chart",level:3},{value:"2. \u5220\u9664\u4e3a Adapter \u521b\u5efa\u7684\u547d\u540d\u7a7a\u95f4\uff1a",id:"2-\u5220\u9664\u4e3a-adapter-\u521b\u5efa\u7684\u547d\u540d\u7a7a\u95f4",level:3},{value:"3. \uff08\u53ef\u9009\uff09\u5220\u9664\u672a\u5b8c\u6210\u7684\u7528\u6237\u901a\u77e5\uff1a",id:"3-\u53ef\u9009\u5220\u9664\u672a\u5b8c\u6210\u7684\u7528\u6237\u901a\u77e5",level:3}],d={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h3",{id:"1-\u4f7f\u7528-helm-\u5378\u8f7d-adapter-chart"},"1. \u4f7f\u7528 Helm \u5378\u8f7d Adapter Chart\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall rancher-csp-adapter -n cattle-csp-adapter-system\n")),(0,c.kt)("h3",{id:"2-\u5220\u9664\u4e3a-adapter-\u521b\u5efa\u7684\u547d\u540d\u7a7a\u95f4"},"2. \u5220\u9664\u4e3a Adapter \u521b\u5efa\u7684\u547d\u540d\u7a7a\u95f4\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete ns cattle-csp-adapter-system\n")),(0,c.kt)("h3",{id:"3-\u53ef\u9009\u5220\u9664\u672a\u5b8c\u6210\u7684\u7528\u6237\u901a\u77e5"},"3. \uff08\u53ef\u9009\uff09\u5220\u9664\u672a\u5b8c\u6210\u7684\u7528\u6237\u901a\u77e5\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete RancherUserNotification csp-compliance\n")))}m.isMDXComponent=!0}}]);