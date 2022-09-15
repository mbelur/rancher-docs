"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[30836],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||c[d]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43584:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={title:"FAQ",weight:500},l=void 0,p={unversionedId:"faq",id:"faq",title:"FAQ",description:"This FAQ is a work in progress designed to answers the questions our users most frequently ask about Rancher v2.x.",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/faq",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/faq.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"FAQ",weight:500},sidebar:"tutorialSidebar",previous:{title:"OPA Gatekeeper",permalink:"/explanations/integrations-in-rancher/opa-gatekeeper"},next:{title:"Deprecated Features in Rancher",permalink:"/faq/deprecated-features-in-v2.5"}},u={},c=[],f={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This FAQ is a work in progress designed to answers the questions our users most frequently ask about Rancher v2.x."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/faq/technical-items"},"Technical FAQ"),", for frequently asked technical questions."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Does Rancher v2.x support Docker Swarm and Mesos as environment types?")),(0,a.kt)("p",null,"When creating an environment in Rancher v2.x, Swarm and Mesos will no longer be standard options you can select. However, both Swarm and Mesos will continue to be available as Catalog applications you can deploy. It was a tough decision to make but, in the end, it came down to adoption. For example, out of more than 15,000 clusters, only about 200 or so are running Swarm."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Is it possible to manage Azure Kubernetes Services with Rancher v2.x?")),(0,a.kt)("p",null,"Yes."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Does Rancher support Windows?")),(0,a.kt)("p",null,"As of Rancher 2.3.0, we support Windows Server 1809 containers. For details on how to set up a cluster with Windows worker nodes, refer to the section on ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-windows-clusters"},"configuring custom clusters for Windows.")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Does Rancher support Istio?")),(0,a.kt)("p",null,"As of Rancher 2.3.0, we support ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/istio"},"Istio.")),(0,a.kt)("p",null,'Furthermore, Istio is implemented in our micro-PaaS "Rio", which works on Rancher 2.x along with any CNCF compliant Kubernetes cluster. You can read more about it ',(0,a.kt)("a",{parentName:"p",href:"https://rio.io/"},"here")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Will Rancher v2.x support Hashicorp's Vault for storing secrets?")),(0,a.kt)("p",null,"Secrets management is on our roadmap but we haven't assigned it to a specific release yet."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Does Rancher v2.x support RKT containers as well?")),(0,a.kt)("p",null,"At this time, we only support Docker."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Does Rancher v2.x support Calico, Contiv, Contrail, Flannel, Weave net, etc., for embedded and registered Kubernetes?")),(0,a.kt)("p",null,"Out-of-the-box, Rancher provides the following CNI network providers for Kubernetes clusters: Canal, Flannel, Calico and Weave.  Always refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"Rancher Support Matrix")," for details about what is officially supported."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Are you planning on supporting Traefik for existing setups?")),(0,a.kt)("p",null,"We don't currently plan on providing embedded Traefik support, but we're still exploring load-balancing approaches."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Can I import OpenShift Kubernetes clusters into v2.x?")),(0,a.kt)("p",null,"Our goal is to run any upstream Kubernetes clusters. Therefore, Rancher v2.x should work with OpenShift, but we haven't tested it yet."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Are you going to integrate Longhorn?")),(0,a.kt)("p",null,"Yes. Longhorn was integrated into Rancher v2.5+."))}d.isMDXComponent=!0}}]);