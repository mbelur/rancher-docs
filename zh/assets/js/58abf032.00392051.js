"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[4875],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49234:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],u={title:"Horizontal Pod Autoscaler \u4ecb\u7ecd",weight:3027},i=void 0,s={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas",title:"Horizontal Pod Autoscaler \u4ecb\u7ecd",description:"Horizontal Pod Autoscaler\uff08HPA\uff09\u662f\u4e00\u9879 Kubernetes \u529f\u80fd\uff0c\u7528\u4e8e\u5c06\u96c6\u7fa4\u914d\u7f6e\u4e3a\u81ea\u52a8\u6269\u7f29\u5176\u8fd0\u884c\u7684\u670d\u52a1\u3002\u672c\u8282\u4ecb\u7ecd HPA \u5982\u4f55\u4e0e Kubernetes \u4e00\u8d77\u5de5\u4f5c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"Horizontal Pod Autoscaler \u4ecb\u7ecd",weight:3027},sidebar:"tutorialSidebar",previous:{title:"Horizontal Pod Autoscaler",permalink:"/zh/pages-for-subheaders/horizontal-pod-autoscaler"},next:{title:"\u4f7f\u7528 Rancher UI \u7ba1\u7406 HPA",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui"}},p={},c=[{value:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528 Horizo\u200b\u200bntal Pod Autoscaler\uff1f",id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528-horizontal-pod-autoscaler",level:2},{value:"HPA \u7684\u5de5\u4f5c\u539f\u7406",id:"hpa-\u7684\u5de5\u4f5c\u539f\u7406",level:2},{value:"Horizo\u200b\u200bntal Pod Autoscaler API \u5bf9\u8c61",id:"horizontal-pod-autoscaler-api-\u5bf9\u8c61",level:2}],d={toc:c};function m(e){var t=e.components,u=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"},"Horizontal Pod Autoscaler\uff08HPA\uff09"),"\u662f\u4e00\u9879 Kubernetes \u529f\u80fd\uff0c\u7528\u4e8e\u5c06\u96c6\u7fa4\u914d\u7f6e\u4e3a\u81ea\u52a8\u6269\u7f29\u5176\u8fd0\u884c\u7684\u670d\u52a1\u3002\u672c\u8282\u4ecb\u7ecd HPA \u5982\u4f55\u4e0e Kubernetes \u4e00\u8d77\u5de5\u4f5c\u3002"),(0,o.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528-horizontal-pod-autoscaler"},"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528 Horizo\u200b\u200bntal Pod Autoscaler\uff1f"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 HPA \u6765\u81ea\u52a8\u6269\u7f29 ReplicationController\u3001Deployment \u6216 ReplicaSet \u4e2d\u7684 pod \u6570\u91cf\u3002HPA \u4f1a\u81ea\u52a8\u6269\u7f29\u6b63\u5728\u8fd0\u884c\u7684 pod \u6570\u91cf\u4ee5\u5b9e\u73b0\u6700\u9ad8\u6548\u7387\u3002\u5f71\u54cd pod \u6570\u91cf\u7684\u56e0\u7d20\u5305\u62ec\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u8fd0\u884c\u7684\u6700\u5c0f\u548c\u6700\u5927 pod \u6570\uff0c\u7531\u7528\u6237\u5b9a\u4e49\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u6307\u6807\u4e2d\u62a5\u544a\u7684 CPU/\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u65b9\u6307\u6807\u5e94\u7528\u7a0b\u5e8f\uff08\u5982 Prometheus\u3001Datadog \u7b49\uff09\u63d0\u4f9b\u7684\u81ea\u5b9a\u4e49\u6307\u6807\u3002")),(0,o.kt)("p",null,"HPA \u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u6539\u8fdb\u4f60\u7684\u670d\u52a1\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u91ca\u653e\u786c\u4ef6\u8d44\u6e90\uff0c\u907f\u514d\u8d44\u6e90\u88ab\u8fc7\u591a\u7684 pod \u6d6a\u8d39\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6309\u9700\u63d0\u9ad8/\u964d\u4f4e\u6027\u80fd\u4ee5\u8fbe\u5230\u670d\u52a1\u7ea7\u522b\u534f\u8bae\u3002")),(0,o.kt)("h2",{id:"hpa-\u7684\u5de5\u4f5c\u539f\u7406"},"HPA \u7684\u5de5\u4f5c\u539f\u7406"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"HPA \u67b6\u6784",src:r(5276).Z,width:"1200",height:"862"})),(0,o.kt)("p",null,"HPA \u5b9e\u73b0\u4e3a\u4e00\u4e2a\u63a7\u5236\u5faa\u73af\uff0c\u5176\u5468\u671f\u7531\u4ee5\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," \u6807\u5fd7\u63a7\u5236\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,o.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--horizontal-pod-autoscaler-sync-period")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"30s")),(0,o.kt)("td",{parentName:"tr",align:null},"HPA \u5728 deployment \u4e2d\u5ba1\u6838\u8d44\u6e90/\u81ea\u5b9a\u4e49\u6307\u6807\u7684\u9891\u7387\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--horizontal-pod-autoscaler-downscale-delay")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"5m0s")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5b8c\u6210\u7f29\u51cf\u64cd\u4f5c\u540e\uff0cHPA \u5fc5\u987b\u7b49\u5f85\u591a\u957f\u65f6\u95f4\u624d\u80fd\u542f\u52a8\u53e6\u4e00\u4e2a\u7f29\u51cf\u64cd\u4f5c\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--horizontal-pod-autoscaler-upscale-delay")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"3m0s")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5b8c\u6210\u6269\u5c55\u64cd\u4f5c\u540e\uff0cHPA \u5fc5\u987b\u7b49\u5f85\u591a\u957f\u65f6\u95f4\u624d\u80fd\u542f\u52a8\u53e6\u4e00\u4e2a\u6269\u5c55\u64cd\u4f5c\u3002")))),(0,o.kt)("p",null,"\u6709\u5173 HPA \u7684\u5b8c\u6574\u6587\u6863\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"},"Kubernetes \u6587\u6863"),"\u3002"),(0,o.kt)("h2",{id:"horizontal-pod-autoscaler-api-\u5bf9\u8c61"},"Horizo\u200b\u200bntal Pod Autoscaler API \u5bf9\u8c61"),(0,o.kt)("p",null,"HPA \u662f Kubernetes ",(0,o.kt)("inlineCode",{parentName:"p"},"autoscaling")," API \u7ec4\u4e2d\u7684 API \u8d44\u6e90\u3002\u5f53\u524d\u7684\u7a33\u5b9a\u7248\u672c\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"autoscaling/v1"),"\uff0c\u5b83\u53ea\u652f\u6301\u5bf9 CPU \u81ea\u52a8\u6269\u7f29\u3002\u8981\u83b7\u5f97\u5185\u5b58\u548c\u81ea\u5b9a\u4e49\u6307\u6807\u7684\u6269\u7f29\u652f\u6301\uff0c\u8bf7\u6539\u7528 beta \u7248\u672c ",(0,o.kt)("inlineCode",{parentName:"p"},"autoscaling/v2beta1"),"\u3002"),(0,o.kt)("p",null,"\u6709\u5173 HPA API \u5bf9\u8c61\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://git.k8s.io/community/contributors/design-proposals/autoscaling/horizontal-pod-autoscaler.md#horizontalpodautoscaler-object"},"HPA GitHub \u81ea\u8ff0\u6587\u4ef6"),"\u3002"))}m.isMDXComponent=!0},5276:function(e,t,r){t.Z=r.p+"assets/images/horizontal-pod-autoscaler-73e94153b61adc40a276899a326addc9.jpg"}}]);