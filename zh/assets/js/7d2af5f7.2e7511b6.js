"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[95163],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return _}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),_=a,m=c["".concat(s,".").concat(_)]||c[_]||u[_]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},74919:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return _},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"TLS Settings",weight:3,aliases:["/rancher/v2.0-v2.4/en/installation/options/tls-settings/","/rancher/v2.0-v2.4/en/admin-settings/tls-settings","/rancher/v2.0-v2.4/en/installation/resources/encryption/tls-settings"]},s=void 0,d={unversionedId:"reference-guides/installation-references/tls-settings",id:"version-2.0-2.4/reference-guides/installation-references/tls-settings",title:"TLS Settings",description:"In Rancher v2.1.7, the default TLS configuration changed to only accept TLS 1.2 and secure TLS cipher suites. TLS 1.3 and TLS 1.3 exclusive cipher suites are not supported.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/installation-references/tls-settings.md",sourceDirName:"reference-guides/installation-references",slug:"/reference-guides/installation-references/tls-settings",permalink:"/zh/v2.0-v2.4/reference-guides/installation-references/tls-settings",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/installation-references/tls-settings.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"TLS Settings",weight:3,aliases:["/rancher/v2.0-v2.4/en/installation/options/tls-settings/","/rancher/v2.0-v2.4/en/admin-settings/tls-settings","/rancher/v2.0-v2.4/en/installation/resources/encryption/tls-settings"]},sidebar:"tutorialSidebar",previous:{title:"Rancher Helm Chart Options",permalink:"/zh/v2.0-v2.4/reference-guides/installation-references/helm-chart-options"},next:{title:"Feature Flags",permalink:"/zh/v2.0-v2.4/reference-guides/installation-references/feature-flags"}},p={},u=[],c={toc:u};function _(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In Rancher v2.1.7, the default TLS configuration changed to only accept TLS 1.2 and secure TLS cipher suites. TLS 1.3 and TLS 1.3 exclusive cipher suites are not supported."),(0,i.kt)("h1",{id:"configuring-tls-settings"},"Configuring TLS settings"),(0,i.kt)("p",null,"The Audit Log is enabled and configured by passing environment variables to the Rancher server container. See the following to enable on your installation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/single-node-rancher-in-docker/advanced-options#tls-settings"},"TLS settings in Docker options"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/installation-references/helm-chart-options#tls-settings"},"TLS settings in Helm chart options")))),(0,i.kt)("h1",{id:"tls-environment-variables"},"TLS Environment Variables"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Available options"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_TLS_MIN_VERSION")),(0,i.kt)("td",{parentName:"tr",align:null},"Minimum TLS version"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.2")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.0"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.1"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_TLS_CIPHERS")),(0,i.kt)("td",{parentName:"tr",align:null},"Allowed TLS cipher suites"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305")),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"https://golang.org/pkg/crypto/tls/#pkg-constants"},"Golang tls constants"))))),(0,i.kt)("h1",{id:"legacy-configuration"},"Legacy configuration"),(0,i.kt)("p",null,"If you need to configure TLS the same way as it was before Rancher v2.1.7, please use the following settings:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Legacy value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_TLS_MIN_VERSION")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_TLS_CIPHERS")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_RSA_WITH_AES_128_GCM_SHA256,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_RSA_WITH_AES_256_GCM_SHA384,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_RSA_WITH_AES_128_CBC_SHA,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_RSA_WITH_AES_256_CBC_SHA,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TLS_RSA_WITH_3DES_EDE_CBC_SHA"))))))}_.isMDXComponent=!0}}]);