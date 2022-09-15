"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[715],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=c(r),m=o,g=l["".concat(s,".").concat(m)]||l[m]||d[m]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=l;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},28092:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],u={title:"\u914d\u7f6e",weight:5},s=void 0,c={unversionedId:"pages-for-subheaders/monitoring-v2-configuration-guides",id:"pages-for-subheaders/monitoring-v2-configuration-guides",title:"\u914d\u7f6e",description:"\u672c\u6587\u4ecb\u7ecd\u5728 Rancher UI \u4e2d\u914d\u7f6e Monitoring V2 \u7684\u4e00\u4e9b\u6700\u91cd\u8981\u9009\u9879\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/monitoring-v2-configuration-guides.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/monitoring-v2-configuration-guides",permalink:"/zh/pages-for-subheaders/monitoring-v2-configuration-guides",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/monitoring-v2-configuration-guides.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"\u914d\u7f6e",weight:5},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5 Project Monitor",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/project-monitors"},next:{title:"\u9ad8\u7ea7\u914d\u7f6e",permalink:"/zh/pages-for-subheaders/advanced-configuration"}},p={},d=[{value:"ServiceMonitor \u548c PodMonitor \u914d\u7f6e",id:"servicemonitor-\u548c-podmonitor-\u914d\u7f6e",level:3},{value:"\u9ad8\u7ea7 Prometheus \u914d\u7f6e",id:"\u9ad8\u7ea7-prometheus-\u914d\u7f6e",level:3},{value:"\u63a5\u6536\u5668",id:"\u63a5\u6536\u5668",level:3},{value:"\u8def\u7531",id:"\u8def\u7531",level:3},{value:"\u9ad8\u7ea7\u914d\u7f6e",id:"\u9ad8\u7ea7\u914d\u7f6e",level:3}],l={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5728 Rancher UI \u4e2d\u914d\u7f6e Monitoring V2 \u7684\u4e00\u4e9b\u6700\u91cd\u8981\u9009\u9879\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u4e3a Prometheus \u914d\u7f6e\u81ea\u5b9a\u4e49\u6293\u53d6\u76ee\u6807\u548c\u89c4\u5219\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus Operator")," \u7684\u4e0a\u6e38\u6587\u6863\u3002Prometheus Operator ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/design.md"},"\u8bbe\u8ba1\u6587\u6863"),"\u4e2d\u89e3\u91ca\u4e86\u4e00\u4e9b\u6700\u91cd\u8981\u7684\u81ea\u5b9a\u4e49\u8d44\u6e90\u3002Prometheus Operator \u6587\u6863\u8fd8\u53ef\u4ee5\u5e2e\u52a9\u4f60\u8bbe\u7f6e RBAC\u3001Thanos \u6216\u8fdb\u884c\u81ea\u5b9a\u4e49\u914d\u7f6e\u3002"),(0,i.kt)("h1",{id:"\u8bbe\u7f6e\u8d44\u6e90\u9650\u5236\u548c\u8bf7\u6c42"},"\u8bbe\u7f6e\u8d44\u6e90\u9650\u5236\u548c\u8bf7\u6c42"),(0,i.kt)("p",null,"\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," \u65f6\u53ef\u4ee5\u914d\u7f6e Monitoring \u5e94\u7528\u7684\u8d44\u6e90\u8bf7\u6c42\u548c\u9650\u5236\u3002\u6709\u5173\u9ed8\u8ba4\u9650\u5236\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/reference-guides/monitoring-v2-configuration/helm-chart-options#%E9%85%8D%E7%BD%AE%E8%B5%84%E6%BA%90%E9%99%90%E5%88%B6%E5%92%8C%E8%AF%B7%E6%B1%82"},"\u6b64\u9875\u9762"),"\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728\u7a7a\u95f2\u96c6\u7fa4\u4e0a\uff0cMonitoring V2 \u7684 CPU \u4f7f\u7528\u7387\uff08\u9ad8\u8fbe 70%\uff09\u6bd4 Monitoring V1 \u663e\u8457\u66f4\u9ad8\u3002\u8981\u63d0\u9ad8\u6027\u80fd\u5e76\u83b7\u5f97\u4e0e Monitoring V1 \u7c7b\u4f3c\u7684\u7ed3\u679c\uff0c\u8bf7\u5173\u95ed Prometheus Adapter\u3002"))),(0,i.kt)("h1",{id:"prometheus-\u914d\u7f6e"},"Prometheus \u914d\u7f6e"),(0,i.kt)("p",null,"\u901a\u5e38\u4e0d\u9700\u8981\u76f4\u63a5\u7f16\u8f91 Prometheus \u81ea\u5b9a\u4e49\u8d44\u6e90\u3002"),(0,i.kt)("p",null,"\u76f8\u53cd\uff0c\u8981\u8ba9 Prometheus \u6293\u53d6\u81ea\u5b9a\u4e49\u6307\u6807\uff0c\u4f60\u53ea\u9700\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ServiceMonitor \u6216 PodMonitor \u6765\u5c06 Prometheus \u914d\u7f6e\u4e3a\u6293\u53d6\u5176\u4ed6\u6307\u6807\u3002"),(0,i.kt)("h3",{id:"servicemonitor-\u548c-podmonitor-\u914d\u7f6e"},"ServiceMonitor \u548c PodMonitor \u914d\u7f6e"),(0,i.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors"},"\u6b64\u9875\u9762"),"\u3002"),(0,i.kt)("h3",{id:"\u9ad8\u7ea7-prometheus-\u914d\u7f6e"},"\u9ad8\u7ea7 Prometheus \u914d\u7f6e"),(0,i.kt)("p",null,"\u6709\u5173\u76f4\u63a5\u7f16\u8f91 Prometheus \u81ea\u5b9a\u4e49\u8d44\u6e90\uff08\u5bf9\u9ad8\u7ea7\u7528\u4f8b\u53ef\u80fd\u6709\u5e2e\u52a9\uff09\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus"},"\u6b64\u9875\u9762"),"\u3002"),(0,i.kt)("h1",{id:"alertmanager-\u914d\u7f6e"},"Alertmanager \u914d\u7f6e"),(0,i.kt)("p",null,"Alertmanager \u81ea\u5b9a\u4e49\u8d44\u6e90\u901a\u5e38\u4e0d\u9700\u8981\u76f4\u63a5\u7f16\u8f91\u3002\u5728\u5e38\u89c1\u7528\u4f8b\u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u66f4\u65b0\u8def\u7531\u548c\u63a5\u6536\u5668\u6765\u7ba1\u7406\u544a\u8b66\u3002"),(0,i.kt)("p",null,"\u8def\u7531\u548c\u63a5\u6536\u5668\u662f Alertmanager \u81ea\u5b9a\u4e49\u8d44\u6e90\u914d\u7f6e\u7684\u4e00\u90e8\u5206\u3002\u5728 Rancher UI \u4e2d\uff0c\u8def\u7531\uff08Route\uff09\u548c\u63a5\u6536\u5668\uff08Receiver\uff09\u5e76\u4e0d\u662f\u771f\u6b63\u7684\u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u800c\u662f Prometheus Operator \u7528\u6765\u5c06\u4f60\u7684\u914d\u7f6e\u4e0e Alertmanager \u81ea\u5b9a\u4e49\u8d44\u6e90\u540c\u6b65\u7684\u4f2a\u81ea\u5b9a\u4e49\u8d44\u6e90\u3002\u5f53\u8def\u7531\u548c\u63a5\u6536\u5668\u66f4\u65b0\u65f6\uff0cMonitoring \u5e94\u7528\u5c06\u81ea\u52a8\u66f4\u65b0 Alertmanager \u6765\u53cd\u6620\u8fd9\u4e9b\u66f4\u6539\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e9b\u9ad8\u7ea7\u7528\u4f8b\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u76f4\u63a5\u914d\u7f6e Alertmanager\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager"},"\u6b64\u9875\u9762"),"\u3002"),(0,i.kt)("h3",{id:"\u63a5\u6536\u5668"},"\u63a5\u6536\u5668"),(0,i.kt)("p",null,"\u63a5\u6536\u5668\uff08Receiver\uff09\u7528\u4e8e\u8bbe\u7f6e\u901a\u77e5\u3002\u6709\u5173\u5982\u4f55\u914d\u7f6e\u63a5\u6536\u5668\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/reference-guides/monitoring-v2-configuration/receivers"},"\u6b64\u9875\u9762"),"\u3002"),(0,i.kt)("h3",{id:"\u8def\u7531"},"\u8def\u7531"),(0,i.kt)("p",null,"\u8def\u7531\uff08Route\uff09\u5728\u901a\u77e5\u5230\u8fbe\u63a5\u6536\u5668\u4e4b\u524d\u8fc7\u6ee4\u5b83\u4eec\u3002\u6bcf\u6761\u8def\u7531\u90fd\u9700\u8981\u5f15\u7528\u4e00\u4e2a\u5df2\u7ecf\u914d\u7f6e\u597d\u7684\u63a5\u6536\u5668\u3002\u6709\u5173\u5982\u4f55\u914d\u7f6e\u8def\u7531\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/reference-guides/monitoring-v2-configuration/routes"},"\u6b64\u9875\u9762"),"\u3002"),(0,i.kt)("h3",{id:"\u9ad8\u7ea7\u914d\u7f6e"},"\u9ad8\u7ea7\u914d\u7f6e"),(0,i.kt)("p",null,"\u6709\u5173\u76f4\u63a5\u7f16\u8f91 Alertmanager \u81ea\u5b9a\u4e49\u8d44\u6e90\uff08\u5bf9\u9ad8\u7ea7\u7528\u4f8b\u53ef\u80fd\u6709\u5e2e\u52a9\uff09\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager"},"\u6b64\u9875\u9762"),"\u3002"))}m.isMDXComponent=!0}}]);