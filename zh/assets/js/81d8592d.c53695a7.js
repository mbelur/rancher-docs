"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[75765],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=a,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a=n(86010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(87462),a=n(67294),i=n(86010),l=n(72389),o=n(67392),p=n(7094),s=n(12466),u="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,n,l=e.lazy,c=e.block,k=e.defaultValue,d=e.values,N=e.groupId,f=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===k?k:null!=(t=null!=k?k:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,p.U)(),w=y.tabGroupChoices,T=y.setTabGroupChoices,O=(0,a.useState)(h),x=O[0],E=O[1],D=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=N){var M=w[N];null!=M&&M!==x&&v.some((function(e){return e.value===M}))&&E(M)}var Z=function(e){var t=e.currentTarget,n=D.indexOf(t),r=v[n].value;r!==x&&(j(t),E(r),null!=N&&T(N,String(r)))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=D.indexOf(e.currentTarget)+1;n=null!=(r=D[a])?r:D[0];break;case"ArrowLeft":var i,l=D.indexOf(e.currentTarget)-1;n=null!=(i=D[l])?i:D[D.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return D.push(e)},onKeyDown:C,onFocus:Z,onClick:Z},l,{className:(0,i.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function k(e){var t=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},20573:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return N},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return k}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=n(65488),o=n(85162),p=["components"],s={title:"\u4e3a\u6d41\u6c34\u7ebf\u7ec4\u4ef6\u914d\u7f6e\u6301\u4e45\u6570\u636e",weight:600},u=void 0,m={unversionedId:"reference-guides/pipelines/configure-persistent-data",id:"reference-guides/pipelines/configure-persistent-data",title:"\u4e3a\u6d41\u6c34\u7ebf\u7ec4\u4ef6\u914d\u7f6e\u6301\u4e45\u6570\u636e",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6d41\u6c34\u7ebf\u5185\u90e8\u7684 Docker \u955c\u50cf\u4ed3\u5e93\u548c Minio \u5de5\u4f5c\u8d1f\u8f7d\u90fd\u4f7f\u7528\u4e34\u65f6\u5377\u3002\u8fd9\u662f\u5f00\u7bb1\u5373\u7528\u7684\u9ed8\u8ba4\u5b58\u50a8\u65b9\u5f0f\uff0c\u80fd\u8ba9\u6d4b\u8bd5\u53d8\u5f97\u66f4\u52a0\u4fbf\u5229\u3002\u4f46\u5982\u679c\u8fd0\u884c Docker \u955c\u50cf\u4ed3\u5e93\u6216 Minio \u7684\u8282\u70b9\u51fa\u73b0\u6545\u969c\uff0c\u4f60\u5c06\u4e22\u5931\u6784\u5efa\u955c\u50cf\u548c\u6784\u5efa\u65e5\u5fd7\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e0d\u662f\u592a\u5927\u7684\u95ee\u9898\u3002\u5982\u679c\u4f60\u5e0c\u671b\u6784\u5efa\u955c\u50cf\u548c\u65e5\u5fd7\u80fd\u591f\u5728\u8282\u70b9\u6545\u969c\u4e2d\u5e78\u514d\u4e8e\u96be\uff0c\u4f60\u53ef\u4ee5\u8ba9 Docker \u955c\u50cf\u4ed3\u5e93\u548c Minio \u4f7f\u7528\u6301\u4e45\u5377\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/pipelines/configure-persistent-data.md",sourceDirName:"reference-guides/pipelines",slug:"/reference-guides/pipelines/configure-persistent-data",permalink:"/zh/reference-guides/pipelines/configure-persistent-data",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/pipelines/configure-persistent-data.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"\u4e3a\u6d41\u6c34\u7ebf\u7ec4\u4ef6\u914d\u7f6e\u6301\u4e45\u6570\u636e",weight:600},sidebar:"tutorialSidebar",previous:{title:"\u6d41\u6c34\u7ebf\u914d\u7f6e\u53c2\u8003",permalink:"/zh/reference-guides/pipelines/pipeline-configuration"},next:{title:"\u793a\u4f8b\u4ed3\u5e93",permalink:"/zh/reference-guides/pipelines/example-repositories"}},c={},k=[{value:"A. \u4e3a Docker \u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6301\u4e45\u6570\u636e",id:"a-\u4e3a-docker-\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6301\u4e45\u6570\u636e",level:3},{value:"B. \u4e3a Minio \u914d\u7f6e\u6301\u4e45\u6570\u636e",id:"b-\u4e3a-minio-\u914d\u7f6e\u6301\u4e45\u6570\u636e",level:3}],d={toc:k};function N(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6d41\u6c34\u7ebf\u5185\u90e8\u7684 Docker \u955c\u50cf\u4ed3\u5e93\u548c Minio \u5de5\u4f5c\u8d1f\u8f7d\u90fd\u4f7f\u7528\u4e34\u65f6\u5377\u3002\u8fd9\u662f\u5f00\u7bb1\u5373\u7528\u7684\u9ed8\u8ba4\u5b58\u50a8\u65b9\u5f0f\uff0c\u80fd\u8ba9\u6d4b\u8bd5\u53d8\u5f97\u66f4\u52a0\u4fbf\u5229\u3002\u4f46\u5982\u679c\u8fd0\u884c Docker \u955c\u50cf\u4ed3\u5e93\u6216 Minio \u7684\u8282\u70b9\u51fa\u73b0\u6545\u969c\uff0c\u4f60\u5c06\u4e22\u5931\u6784\u5efa\u955c\u50cf\u548c\u6784\u5efa\u65e5\u5fd7\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e0d\u662f\u592a\u5927\u7684\u95ee\u9898\u3002\u5982\u679c\u4f60\u5e0c\u671b\u6784\u5efa\u955c\u50cf\u548c\u65e5\u5fd7\u80fd\u591f\u5728\u8282\u70b9\u6545\u969c\u4e2d\u5e78\u514d\u4e8e\u96be\uff0c\u4f60\u53ef\u4ee5\u8ba9 Docker \u955c\u50cf\u4ed3\u5e93\u548c Minio \u4f7f\u7528\u6301\u4e45\u5377\u3002"),(0,i.kt)("p",null,"\u672c\u8282\u5047\u8bbe\u4f60\u4e86\u89e3\u6301\u4e45\u5b58\u50a8\u5728 Kubernetes \u4e2d\u7684\u5de5\u4f5c\u539f\u7406\u3002\u5982\u9700\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage"},"\u5b58\u50a8\u7684\u5de5\u4f5c\u539f\u7406"),"\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff08\u9002\u7528\u4e8e A \u548c B\uff09\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/create-kubernetes-persistent-storage"},"\u6301\u4e45\u5377"),"\u5fc5\u987b\u5728\u96c6\u7fa4\u4e2d\u53ef\u7528\u3002"))),(0,i.kt)("h3",{id:"a-\u4e3a-docker-\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6301\u4e45\u6570\u636e"},"A. \u4e3a Docker \u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6301\u4e45\u6570\u636e"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u627e\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-registry")," \u5de5\u4f5c\u8d1f\u8f7d\u5e76\u9009\u62e9 ",(0,i.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6eda\u52a8\u5230",(0,i.kt)("strong",{parentName:"p"},"\u5377"),"\u90e8\u5206\u5e76\u5c55\u5f00\u5b83\u3002\u4ece\u5e95\u90e8\u7684",(0,i.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u5377"),"\u83dc\u5355\u4e2d\u9009\u62e9\u4ee5\u4e0b\u9009\u9879\u4e4b\u4e00\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u5377 > \u6dfb\u52a0\u65b0\u7684\u6301\u4e45\u5377\uff08\u58f0\u660e\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u5377 > \u4f7f\u7528\u5df2\u6709\u7684\u6301\u4e45\u5377\uff08\u58f0\u660e\uff09")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5b8c\u6210\u4e3a\u5185\u90e8 Docker \u955c\u50cf\u4ed3\u5e93\u9009\u62e9\u6301\u4e45\u5377\u7684\u8868\u5355\u3002"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"\u6dfb\u52a0\u65b0\u7684\u6301\u4e45\u5377",mdxType:"TabItem"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u8f93\u5165\u5377\u58f0\u660e\u7684",(0,i.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4e00\u4e2a\u5377\u58f0\u660e",(0,i.kt)("strong",{parentName:"li"},"\u6e90"),"\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u9009\u62e9",(0,i.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u5b58\u50a8\u7c7b\u6765\u914d\u7f6e\u65b0\u6301\u4e45\u5377"),"\uff0c\u8bf7\u9009\u62e9\u5b58\u50a8\u7c7b\u5e76\u8f93\u5165",(0,i.kt)("strong",{parentName:"li"},"\u5bb9\u91cf"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u9009\u62e9",(0,i.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u5df2\u6709\u7684\u6301\u4e45\u5377"),"\uff0c\u8bf7\u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9",(0,i.kt)("strong",{parentName:"li"},"\u6301\u4e45\u5377"),"\u3002"))),(0,i.kt)("li",{parentName:"ol"},"\u4ece",(0,i.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49"),"\u4e2d\uff0c\u9009\u62e9\u5377\u7684\u8bfb/\u5199\u8bbf\u95ee\u6743\u9650\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u5b9a\u4e49"),"\u3002"))),(0,i.kt)(o.Z,{value:"\u4f7f\u7528\u5df2\u6709\u7684\u6301\u4e45\u5377",mdxType:"TabItem"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u8f93\u5165\u5377\u58f0\u660e\u7684",(0,i.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9",(0,i.kt)("strong",{parentName:"li"},"\u6301\u4e45\u5377\u58f0\u660e"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4ece",(0,i.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49"),"\u4e2d\uff0c\u9009\u62e9\u5377\u7684\u8bfb/\u5199\u8bbf\u95ee\u6743\u9650\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u5b9a\u4e49"),"\u3002"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728",(0,i.kt)("strong",{parentName:"p"},"\u6302\u8f7d\u70b9"),"\u5b57\u6bb5\u4e2d\uff0c\u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/registry"),"\uff0c\u8fd9\u662f Docker \u955c\u50cf\u4ed3\u5e93\u5bb9\u5668\u5185\u7684\u6570\u636e\u5b58\u50a8\u8def\u5f84\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u5347\u7ea7"),"\u3002"))),(0,i.kt)("h3",{id:"b-\u4e3a-minio-\u914d\u7f6e\u6301\u4e45\u6570\u636e"},"B. \u4e3a Minio \u914d\u7f6e\u6301\u4e45\u6570\u636e"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8f6c\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"minio")," \u5de5\u4f5c\u8d1f\u8f7d\u5e76\u9009\u62e9 ",(0,i.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6eda\u52a8\u5230",(0,i.kt)("strong",{parentName:"p"},"\u5377"),"\u90e8\u5206\u5e76\u5c55\u5f00\u5b83\u3002\u4ece\u5e95\u90e8\u7684",(0,i.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u5377"),"\u83dc\u5355\u4e2d\u9009\u62e9\u4ee5\u4e0b\u9009\u9879\u4e4b\u4e00\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u5377 > \u6dfb\u52a0\u65b0\u7684\u6301\u4e45\u5377\uff08\u58f0\u660e\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u5377 > \u4f7f\u7528\u5df2\u6709\u7684\u6301\u4e45\u5377\uff08\u58f0\u660e\uff09")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5b8c\u6210\u4e3a\u5185\u90e8 Docker \u955c\u50cf\u4ed3\u5e93\u9009\u62e9\u6301\u4e45\u5377\u7684\u8868\u5355\u3002"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"\u6dfb\u52a0\u65b0\u7684\u6301\u4e45\u5377",mdxType:"TabItem"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u8f93\u5165\u5377\u58f0\u660e\u7684",(0,i.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4e00\u4e2a\u5377\u58f0\u660e",(0,i.kt)("strong",{parentName:"li"},"\u6e90"),"\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u9009\u62e9",(0,i.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u5b58\u50a8\u7c7b\u6765\u914d\u7f6e\u65b0\u6301\u4e45\u5377"),"\uff0c\u8bf7\u9009\u62e9\u5b58\u50a8\u7c7b\u5e76\u8f93\u5165",(0,i.kt)("strong",{parentName:"li"},"\u5bb9\u91cf"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u9009\u62e9",(0,i.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u5df2\u6709\u7684\u6301\u4e45\u5377"),"\uff0c\u8bf7\u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9",(0,i.kt)("strong",{parentName:"li"},"\u6301\u4e45\u5377"),"\u3002"))),(0,i.kt)("li",{parentName:"ol"},"\u4ece",(0,i.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49"),"\u4e2d\uff0c\u9009\u62e9\u5377\u7684\u8bfb/\u5199\u8bbf\u95ee\u6743\u9650\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u5b9a\u4e49"),"\u3002"))),(0,i.kt)(o.Z,{value:"\u4f7f\u7528\u5df2\u6709\u7684\u6301\u4e45\u5377",mdxType:"TabItem"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u8f93\u5165\u5377\u58f0\u660e\u7684",(0,i.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9",(0,i.kt)("strong",{parentName:"li"},"\u6301\u4e45\u5377\u58f0\u660e"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4ece",(0,i.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49"),"\u4e2d\uff0c\u9009\u62e9\u5377\u7684\u8bfb/\u5199\u8bbf\u95ee\u6743\u9650\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u5b9a\u4e49"),"\u3002"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728",(0,i.kt)("strong",{parentName:"p"},"\u6302\u8f7d\u70b9"),"\u5b57\u6bb5\u4e2d\uff0c\u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"/data"),"\uff0c\u8fd9\u662f Minio \u5bb9\u5668\u5185\u7684\u6570\u636e\u5b58\u50a8\u8def\u5f84\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u5347\u7ea7"),"\u3002"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u4e3a\u4f60\u7684\u6d41\u6c34\u7ebf\u7ec4\u4ef6\u914d\u7f6e\u4e86\u6301\u4e45\u5b58\u50a8\u3002"))}N.isMDXComponent=!0}}]);