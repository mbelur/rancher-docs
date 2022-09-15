"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[33634],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return g}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),l=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=l(e.components);return a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),g=n,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||i;return t?a.createElement(m,o(o({ref:r},s),{},{components:t})):a.createElement(m,o({ref:r},s))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77502:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var a=t(87462),n=t(63366),i=(t(67294),t(3905)),o=["components"],c={title:"\u90e8\u7f72 Rancher Server",weight:100},u=void 0,l={unversionedId:"pages-for-subheaders/deploy-rancher-manager",id:"pages-for-subheaders/deploy-rancher-manager",title:"\u90e8\u7f72 Rancher Server",description:"\u4f60\u53ef\u4f7f\u7528\u4ee5\u4e0b\u6307\u5357\u4e4b\u4e00\uff0c\u5728\u4f60\u9009\u62e9\u7684\u63d0\u4f9b\u5546\u4e2d\u90e8\u7f72\u548c\u914d\u7f6e Rancher \u548c Kubernetes \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/deploy-rancher-manager.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/deploy-rancher-manager",permalink:"/zh/pages-for-subheaders/deploy-rancher-manager",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/deploy-rancher-manager.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"\u90e8\u7f72 Rancher Server",weight:100},sidebar:"tutorialSidebar",previous:{title:"Rancher \u90e8\u7f72\u5feb\u901f\u5165\u95e8\u6307\u5357",permalink:"/zh/pages-for-subheaders/quick-start-guides"},next:{title:"Rancher AWS \u5feb\u901f\u5165\u95e8\u6307\u5357",permalink:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/aws"}},s={},p=[],d={toc:p};function g(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4f60\u53ef\u4f7f\u7528\u4ee5\u4e0b\u6307\u5357\u4e4b\u4e00\uff0c\u5728\u4f60\u9009\u62e9\u7684\u63d0\u4f9b\u5546\u4e2d\u90e8\u7f72\u548c\u914d\u7f6e Rancher \u548c Kubernetes \u96c6\u7fa4\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/aws"},"AWS"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/aws-marketplace"},"AWS Marketplace"),"\uff08\u4f7f\u7528 Amazon EKS\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/azure"},"Azure"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean"},"DigitalOcean"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/gcp"},"GCP"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/hetzner-cloud"},"Hetzner Cloud"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/vagrant"},"Vagrant")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal"},"Equinix Metal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/outscale-qs"},"Outscale"),"\uff08\u4f7f\u7528 Terraform\uff09")),(0,i.kt)("p",null,"\u5982\u6709\u9700\u8981\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u4ee5\u4e0b\u6307\u5357\u4ee5\u4e86\u89e3\u5206\u6b65\u6b65\u9aa4\u3002\u5982\u679c\u4f60\u9700\u8981\u5728\u5176\u4ed6\u63d0\u4f9b\u5546\u4e2d\u6216\u672c\u5730\u8fd0\u884c Rancher\uff0c\u6216\u8005\u4f60\u53ea\u662f\u60f3\u770b\u770b\u5b83\u662f\u591a\u4e48\u5bb9\u6613\u4e0a\u624b\uff0c\u4f60\u53ef\u9605\u8bfb\u4ee5\u4e0b\u6307\u5357\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli"},"\u624b\u52a8\u5b89\u88c5"))))}g.isMDXComponent=!0}}]);