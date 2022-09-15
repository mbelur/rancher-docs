"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[88946],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(n),p=i,m=g["".concat(s,".").concat(p)]||g[p]||d[p]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9016:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"\u5378\u8f7d Monitoring",weight:2},s=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring",id:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring",title:"\u5378\u8f7d Monitoring",description:"1. \u70b9\u51fb \u2630 > \u96c6\u7fa4\u7ba1\u7406\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"\u5378\u8f7d Monitoring",weight:2},sidebar:"tutorialSidebar",previous:{title:"\u542f\u7528 Monitoring",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring"},next:{title:"\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u8bbe\u7f6e Monitoring",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads"}},u={},d=[],g={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5df2\u5b89\u88c5\u7684\u5e94\u7528"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," \u547d\u540d\u7a7a\u95f4\u5e76\u9009\u4e2d ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher-monitoring-crd")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher-monitoring"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u786e\u8ba4",(0,o.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5378\u8f7d ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),"\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u7684 Monitoring V2 \u7248\u672c\u662f v9.4.203 \u6216\u66f4\u4f4e\u7248\u672c\uff0c\u5378\u8f7d Monitoring chart \u5c06\u540c\u65f6\u5220\u9664 cattle-dashboards \u547d\u540d\u7a7a\u95f4\uff0c\u6240\u6709\u6301\u4e45\u5316\u7684\u4eea\u8868\u677f\u5c06\u88ab\u5220\u9664\uff08\u9664\u975e\u547d\u540d\u7a7a\u95f4\u5e26\u6709\u6ce8\u91ca ",(0,o.kt)("inlineCode",{parentName:"p"},'helm.sh/resource-policy: "keep"'),"\uff09\u3002Monitoring V2 v14.5.100+ \u4f1a\u9ed8\u8ba4\u6dfb\u52a0\u6b64\u6ce8\u91ca\u3002\u4f46\u5982\u679c\u4f60\u7684\u96c6\u7fa4\u4e0a\u5b89\u88c5\u4e86\u65e7\u7248\u672c\u7684 Monitoring Chart\uff0c\u4f60\u53ef\u4ee5\u5728\u5378\u8f7d\u5b83\u4e4b\u524d\u624b\u52a8\u5c06\u6ce8\u91ca\u5e94\u7528\u5230 cattle-dashboards \u547d\u540d\u7a7a\u95f4\u3002"))))}p.isMDXComponent=!0}}]);