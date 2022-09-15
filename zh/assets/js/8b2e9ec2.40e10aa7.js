"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89221],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,g=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9953:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],s={title:"TLS Settings",weight:3,aliases:["/rancher/v2.5/en/installation/options/tls-settings/","/rancher/v2.5/en/admin-settings/tls-settings","/rancher/v2.5/en/installation/resources/encryption/tls-settings","/rancher/v2.x/en/installation/resources/tls-settings/"]},o=void 0,c={unversionedId:"reference-guides/installation-references/tls-settings",id:"version-2.5/reference-guides/installation-references/tls-settings",title:"TLS Settings",description:"Changing the default TLS settings depends on the chosen installation method.",source:"@site/versioned_docs/version-2.5/reference-guides/installation-references/tls-settings.md",sourceDirName:"reference-guides/installation-references",slug:"/reference-guides/installation-references/tls-settings",permalink:"/zh/v2.5/reference-guides/installation-references/tls-settings",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/installation-references/tls-settings.md",tags:[],version:"2.5",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"TLS Settings",weight:3,aliases:["/rancher/v2.5/en/installation/options/tls-settings/","/rancher/v2.5/en/admin-settings/tls-settings","/rancher/v2.5/en/installation/resources/encryption/tls-settings","/rancher/v2.x/en/installation/resources/tls-settings/"]},sidebar:"tutorialSidebar",previous:{title:"Rancher Helm Chart Options",permalink:"/zh/v2.5/reference-guides/installation-references/helm-chart-options"},next:{title:"Feature Flags",permalink:"/zh/v2.5/reference-guides/installation-references/feature-flags"}},u={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Changing the default TLS settings depends on the chosen installation method."),(0,i.kt)("h1",{id:"running-rancher-in-a-highly-available-kubernetes-cluster"},"Running Rancher in a highly available Kubernetes cluster"),(0,i.kt)("p",null,"When you install Rancher inside of a Kubernetes cluster, TLS is offloaded at the cluster's ingress controller. The possible TLS settings depend on the used ingress controller:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"nginx-ingress-controller (default for RKE1 and RKE2): ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/user-guide/tls/#default-tls-version-and-ciphers"},"Default TLS Version and Ciphers"),"."),(0,i.kt)("li",{parentName:"ul"},"traefik (default for K3s): ",(0,i.kt)("a",{parentName:"li",href:"https://doc.traefik.io/traefik/https/tls/#tls-options"},"TLS Options"),".")),(0,i.kt)("h1",{id:"running-rancher-in-a-single-docker-container"},"Running Rancher in a single Docker container"),(0,i.kt)("p",null,"The default TLS configuration only accepts TLS 1.2 and secure TLS cipher suites. You can change this by setting the following environment variables:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Available options"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_TLS_MIN_VERSION")),(0,i.kt)("td",{parentName:"tr",align:null},"Minimum TLS version"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.2")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.0"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.1"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.2"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.3"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_TLS_CIPHERS")),(0,i.kt)("td",{parentName:"tr",align:null},"Allowed TLS cipher suites"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"),",",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384"),",",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305"),",",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256"),",",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384"),",",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305")),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"https://golang.org/pkg/crypto/tls/#pkg-constants"},"Golang tls constants"))))))}f.isMDXComponent=!0}}]);