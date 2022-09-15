"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[79173],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||s;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80780:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],i={title:"Ingress \u914d\u7f6e",description:"Ingress \u914d\u7f6e",weight:9999},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration",title:"Ingress \u914d\u7f6e",description:"Ingress \u914d\u7f6e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"Ingress \u914d\u7f6e",description:"Ingress \u914d\u7f6e",weight:9999},sidebar:"tutorialSidebar",previous:{title:"\u6dfb\u52a0 Ingress",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses"},next:{title:"Services",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services"}},c={},p=[{value:"Kubernetes 1.21 \u4e2d\u7684 NGINX Ingress Controller \u53d8\u66f4",id:"kubernetes-121-\u4e2d\u7684-nginx-ingress-controller-\u53d8\u66f4",level:3},{value:"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u4e3b\u673a\u540d",id:"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u4e3b\u673a\u540d",level:3},{value:"\u8bc1\u4e66",id:"\u8bc1\u4e66",level:3},{value:"\u6807\u7b7e\u548c\u6ce8\u91ca",id:"\u6807\u7b7e\u548c\u6ce8\u91ca",level:3}],d={toc:p};function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"kubernetes-121-\u4e2d\u7684-nginx-ingress-controller-\u53d8\u66f4"},"Kubernetes 1.21 \u4e2d\u7684 NGINX Ingress Controller \u53d8\u66f4"),(0,s.kt)("p",null,"\u5728 Kubernetes 1.21 \u53ca\u66f4\u9ad8\u7248\u672c\u4e2d\uff0cNGINX Ingress Controller \u4e0d\u518d\u8fd0\u884c\u5728 hostNetwork \u4e2d\uff0c\u800c\u662f\u5c06 hostPorts \u7528\u4e8e\u7aef\u53e3 80 \u548c\u7aef\u53e3 443\u3002\u8fd9\u6837\u53ef\u4ee5\u5c06 admission webhook \u914d\u7f6e\u4e3a\u4f7f\u7528 ClusterIP \u8bbf\u95ee\uff0c\u4ece\u800c\u53ea\u5728\u96c6\u7fa4\u5185\u90e8\u8bbf\u95ee\u5b83\u3002"),(0,s.kt)("h1",{id:"ingress-\u89c4\u5219\u914d\u7f6e"},"Ingress \u89c4\u5219\u914d\u7f6e"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#%E6%8C%87%E5%AE%9A%E8%A6%81%E4%BD%BF%E7%94%A8%E7%9A%84%E4%B8%BB%E6%9C%BA%E5%90%8D"},"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u4e3b\u673a\u540d")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#%E7%94%A8%E4%BD%9C%E9%BB%98%E8%AE%A4%E5%90%8E%E7%AB%AF"},"\u7528\u4f5c\u9ed8\u8ba4\u540e\u7aef")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#%E8%AF%81%E4%B9%A6"},"\u8bc1\u4e66")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#%E6%A0%87%E7%AD%BE%E5%92%8C%E6%B3%A8%E9%87%8A"},"\u6807\u7b7e\u548c\u6ce8\u91ca"))),(0,s.kt)("h3",{id:"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u4e3b\u673a\u540d"},"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u4e3b\u673a\u540d"),(0,s.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u6b64\u9009\u9879\uff0cIngress \u4f1a\u5c06\u4e3b\u673a\u540d\u8bf7\u6c42\u8def\u7531\u5230\u4f60\u6307\u5b9a\u7684\u670d\u52a1\u6216\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u8f93\u5165",(0,s.kt)("strong",{parentName:"li"},"\u8bf7\u6c42\u4e3b\u673a"),"\uff0c\u4f60\u7684 Ingress \u4f1a\u4e3a\u5b83\u5904\u7406\u8bf7\u6c42\u8f6c\u53d1\u3002\u4f8b\u5982\uff0c",(0,s.kt)("inlineCode",{parentName:"li"},"www.mysite.com"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e00\u4e2a",(0,s.kt)("strong",{parentName:"li"},"\u76ee\u6807\u670d\u52a1"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"\u53ef\u9009"),"\uff1a\u5982\u679c\u4f60\u60f3\u5728\u5c06\u8bf7\u6c42\u53d1\u9001\u5230\u7279\u5b9a\u4e3b\u673a\u540d\u8def\u5f84\u65f6\u6307\u5b9a\u5de5\u4f5c\u8d1f\u8f7d\u6216\u670d\u52a1\uff0c\u8bf7\u4e3a\u76ee\u6807\u6dfb\u52a0",(0,s.kt)("strong",{parentName:"li"},"\u8def\u5f84"),"\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u5e0c\u671b\u5c06 ",(0,s.kt)("inlineCode",{parentName:"li"},"www.mysite.com/contact-us")," \u7684\u8bf7\u6c42\u53d1\u9001\u5230\u4e0e ",(0,s.kt)("inlineCode",{parentName:"li"},"www.mysite.com")," \u4e0d\u540c\u7684\u670d\u52a1\uff0c\u5728",(0,s.kt)("strong",{parentName:"li"},"\u8def\u5f84"),"\u5b57\u6bb5\u4e2d\u8f93\u5165 ",(0,s.kt)("inlineCode",{parentName:"li"},"/contact-us"),"\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f60\u521b\u5efa\u7684\u7b2c\u4e00\u6761\u89c4\u5219\u4e0d\u5305\u542b\u8def\u5f84\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u8f93\u5165\u6bcf\u4e2a\u76ee\u6807\u64cd\u4f5c\u7684",(0,s.kt)("strong",{parentName:"li"},"\u7aef\u53e3"),"\u53f7\u3002")),(0,s.kt)("h3",{id:"\u8bc1\u4e66"},"\u8bc1\u4e66"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u4f60\u5fc5\u987b\u5177\u6709 SSL \u8bc1\u4e66\uff0cIngress \u53ef\u4f7f\u7528\u8be5\u8bc1\u4e66\u6765\u52a0\u5bc6/\u89e3\u5bc6\u901a\u4fe1\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,s.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"},"\u6dfb\u52a0 SSL \u8bc1\u4e66"),"\u3002"))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u521b\u5efa Ingress \u65f6\uff0c\u5355\u51fb",(0,s.kt)("strong",{parentName:"li"},"\u8bc1\u4e66"),"\u9009\u9879\u5361\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,s.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u8bc1\u4e66"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9\u4e00\u4e2a",(0,s.kt)("strong",{parentName:"li"},"\u8bc1\u4e66 - \u5bc6\u6587\u540d\u79f0"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u52a0\u5bc6\u901a\u4fe1\u8fdb\u5165\u4e3b\u673a\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u8981\u6dfb\u52a0\u4f7f\u7528\u8bc1\u4e66\u7684\u5176\u4ed6\u4e3b\u673a\uff0c\u8bf7\u5355\u51fb",(0,s.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u4e3b\u673a"),"\u3002")),(0,s.kt)("h3",{id:"\u6807\u7b7e\u548c\u6ce8\u91ca"},"\u6807\u7b7e\u548c\u6ce8\u91ca"),(0,s.kt)("p",null,"\u6dfb\u52a0",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"\u6807\u7b7e"),"\u548c/\u6216",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/"},"\u6ce8\u91ca"),"\u4e3a\u4f60\u7684 Ingress \u63d0\u4f9b\u5143\u6570\u636e\u3002"),(0,s.kt)("p",null,"\u6709\u5173\u53ef\u7528\u7684\u6ce8\u91ca\u5217\u8868\uff0c\u8bf7\u53c2\u9605 ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/"},"Nginx Ingress Controller \u6587\u6863"),"\u3002"))}g.isMDXComponent=!0}}]);