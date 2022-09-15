"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[82493],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(o,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84301:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),l=["components"],i={title:"\u5728 Azure Kubernetes Service \u4e0a\u5b89\u88c5 Rancher",shortTitle:"AKS",weight:3},o=void 0,c={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks",id:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks",title:"\u5728 Azure Kubernetes Service \u4e0a\u5b89\u88c5 Rancher",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u5fae\u8f6f\u7684 Azure Kubernetes Service (AKS) \u4e0a\u5b89\u88c5 Rancher\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"\u5728 Azure Kubernetes Service \u4e0a\u5b89\u88c5 Rancher",shortTitle:"AKS",weight:3},sidebar:"tutorialSidebar",previous:{title:"\u5728 Amazon EKS \u4e0a\u5b89\u88c5 Rancher",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks"},next:{title:"\u5728 GKE \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke"}},u={},p=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"1. \u51c6\u5907\u4f60\u7684\u5de5\u4f5c\u7ad9",id:"1-\u51c6\u5907\u4f60\u7684\u5de5\u4f5c\u7ad9",level:2},{value:"2. \u521b\u5efa\u8d44\u6e90\u7ec4",id:"2-\u521b\u5efa\u8d44\u6e90\u7ec4",level:2},{value:"3. \u521b\u5efa AKS \u96c6\u7fa4",id:"3-\u521b\u5efa-aks-\u96c6\u7fa4",level:2},{value:"4. \u83b7\u53d6\u8bbf\u95ee\u51ed\u8bc1",id:"4-\u83b7\u53d6\u8bbf\u95ee\u51ed\u8bc1",level:2},{value:"5. \u5b89\u88c5 Ingress",id:"5-\u5b89\u88c5-ingress",level:2},{value:"6. \u83b7\u53d6\u8d1f\u8f7d\u5747\u8861\u5668\u7684 IP",id:"6-\u83b7\u53d6\u8d1f\u8f7d\u5747\u8861\u5668\u7684-ip",level:2},{value:"7. \u8bbe\u7f6e DNS",id:"7-\u8bbe\u7f6e-dns",level:2},{value:"8. \u5b89\u88c5 Rancher Helm Chart",id:"8-\u5b89\u88c5-rancher-helm-chart",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u5fae\u8f6f\u7684 Azure Kubernetes Service (AKS) \u4e0a\u5b89\u88c5 Rancher\u3002"),(0,s.kt)("p",null,"\u672c\u6307\u5357\u4f7f\u7528\u547d\u4ee4\u884c\u5de5\u5177\u6765\u914d\u7f6e\u4e00\u4e2a\u5e26\u6709 Ingress \u7684 AKS \u96c6\u7fa4\u3002\u5982\u679c\u4f60\u66f4\u559c\u6b22\u4f7f\u7528 Azure \u95e8\u6237\u6765\u914d\u7f6e\u96c6\u7fa4\uff0c\u8bf7\u53c2\u89c1",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough-portal"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u6709\u4e00\u4e2a AKS Kubernetes \u96c6\u7fa4\uff0c\u8bf7\u76f4\u63a5\u8df3\u5230",(0,s.kt)("a",{parentName:"p",href:"#5-%E5%AE%89%E8%A3%85-ingress"},"\u5b89\u88c5 Ingress")," \u7684\u6b65\u9aa4\uff0c\u7136\u540e\u6309\u7167",(0,s.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#%E5%AE%89%E8%A3%85-rancher-helm-chart"},"\u6b64\u9875"),"\u7684\u8bf4\u660e\u5b89\u88c5 Rancher Helm Chart\u3002"),(0,s.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u90e8\u7f72\u5230 Microsoft Azure \u4f1a\u4ea7\u751f\u8d39\u7528\u3002"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/free/"},"Microsoft Azure \u8d26\u53f7"),"\uff1a\u7528\u4e8e\u521b\u5efa\u90e8\u7f72 Rancher \u548c Kubernetes \u7684\u8d44\u6e90\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/create-subscription#create-a-subscription-in-the-azure-portal"},"Microsoft Azure \u8ba2\u9605"),"\uff1a\u5982\u679c\u4f60\u6ca1\u6709\u7684\u8bdd\uff0c\u8bf7\u8bbf\u95ee\u6b64\u94fe\u63a5\u67e5\u770b\u5982\u4f55\u521b\u5efa Microsoft Azure \u8ba2\u9605\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant"},"Micsoroft Azure \u79df\u6237"),"\uff1a\u8bbf\u95ee\u6b64\u94fe\u63a5\u5e76\u53c2\u8003\u6559\u7a0b\u4ee5\u521b\u5efa Microsoft Azure \u79df\u6237\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u4f60\u7684\u8ba2\u9605\u6709\u8db3\u591f\u7684\u914d\u989d\uff0c\u81f3\u5c11\u6709 2 \u4e2a vCPU\u3002\u6709\u5173 Rancher Server \u8d44\u6e90\u8981\u6c42\u7684\u8be6\u60c5\uff0c\u8bf7\u53c2\u89c1",(0,s.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/installation-requirements#rke-%E5%92%8C%E6%89%98%E7%AE%A1-kubernetes"},"\u6b64\u8282"),"\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u5728 Azure \u4e2d\u7528 Helm \u5b89\u88c5 Rancher \u65f6\uff0c\u8bf7\u4f7f\u7528 L7 \u8d1f\u8f7d\u5747\u8861\u5668\u6765\u907f\u514d\u7f51\u7edc\u95ee\u9898\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,s.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/load-balancer/components#limitations"},"Azure \u8d1f\u8f7d\u5747\u8861\u5668\u9650\u5236"),"\u3002")),(0,s.kt)("h2",{id:"1-\u51c6\u5907\u4f60\u7684\u5de5\u4f5c\u7ad9"},"1. \u51c6\u5907\u4f60\u7684\u5de5\u4f5c\u7ad9"),(0,s.kt)("p",null,"\u5728\u5de5\u4f5c\u7ad9\u4e0a\u5b89\u88c5\u4ee5\u4e0b\u547d\u4ee4\u884c\u5de5\u5177\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"az"),"\uff0cAzure CLI\uff1a\u5982\u9700\u83b7\u5f97\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1",(0,s.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/cli/azure/"},"\u5b89\u88c5\u6b65\u9aa4"),"\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"kubectl"),"\uff1a\u5982\u9700\u83b7\u5f97\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"\u5b89\u88c5\u6b65\u9aa4"),"\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"helm"),"\uff1a\u5982\u9700\u83b7\u53d6\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1",(0,s.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"\u5b89\u88c5\u6b65\u9aa4"),"\u3002")),(0,s.kt)("h2",{id:"2-\u521b\u5efa\u8d44\u6e90\u7ec4"},"2. \u521b\u5efa\u8d44\u6e90\u7ec4"),(0,s.kt)("p",null,"\u5b89\u88c5 CLI \u540e\uff0c\u4f60\u9700\u8981\u7528\u4f60\u7684 Azure \u8d26\u6237\u767b\u5f55\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"az login\n")),(0,s.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal"},"\u8d44\u6e90\u7ec4")," \u6765\u4fdd\u5b58\u96c6\u7fa4\u7684\u6240\u6709\u76f8\u5173\u8d44\u6e90\u3002\u4f7f\u7528\u4e00\u4e2a\u9002\u7528\u4e8e\u4f60\u5b9e\u9645\u60c5\u51b5\u7684\u4f4d\u7f6e\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"az group create --name rancher-rg --location eastus\n")),(0,s.kt)("h2",{id:"3-\u521b\u5efa-aks-\u96c6\u7fa4"},"3. \u521b\u5efa AKS \u96c6\u7fa4"),(0,s.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a AKS \u96c6\u7fa4\u3002\u9009\u62e9\u9002\u7528\u4e8e\u4f60\u5b9e\u9645\u60c5\u51b5\u7684\u865a\u62df\u673a\u5927\u5c0f\u3002\u5982\u9700\u83b7\u5f97\u53ef\u7528\u7684\u5927\u5c0f\u548c\u9009\u9879\uff0c\u8bf7\u53c2\u89c1",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/sizes"},"\u6b64\u5904"),"\u3002\u5728\u9009\u62e9 Kubernetes \u7248\u672c\u65f6\uff0c\u8bf7\u52a1\u5fc5\u5148\u67e5\u9605",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/support-matrix/"},"\u652f\u6301\u77e9\u9635"),"\uff0c\u4ee5\u627e\u51fa\u5df2\u9488\u5bf9\u4f60\u7684 Rancher \u7248\u672c\u9a8c\u8bc1\u7684\u6700\u65b0 Kubernetes \u7248\u672c\u3002"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u5982\u679c Kubernetes \u7684\u7248\u672c\u66f4\u65b0\u5230 v1.22 \u6216\u66f4\u9ad8\u7248\u672c\uff0c\u5219 ingress-nginx \u7684\u7248\u672c\u4e5f\u9700\u8981",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/#faq-migration-to-apiversion-networkingk8siov1"},"\u66f4\u65b0"),"\u3002"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"az aks create \\\n  --resource-group rancher-rg \\\n  --name rancher-server \\\n  --kubernetes-version <VERSION> \\\n  --node-count 3 \\\n  --node-vm-size Standard_D2_v3\n")),(0,s.kt)("p",null,"\u96c6\u7fa4\u90e8\u7f72\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\u624d\u80fd\u5b8c\u6210\u3002"),(0,s.kt)("h2",{id:"4-\u83b7\u53d6\u8bbf\u95ee\u51ed\u8bc1"},"4. \u83b7\u53d6\u8bbf\u95ee\u51ed\u8bc1"),(0,s.kt)("p",null,"\u96c6\u7fa4\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u83b7\u53d6\u8bbf\u95ee\u51ed\u8bc1\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"az aks get-credentials --resource-group rancher-rg --name rancher-server\n")),(0,s.kt)("p",null,"\u6b64\u547d\u4ee4\u628a\u96c6\u7fa4\u7684\u51ed\u8bc1\u5408\u5e76\u5230\u73b0\u6709\u7684 kubeconfig \u4e2d\uff0c\u5e76\u5141\u8bb8 ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," \u4e0e\u96c6\u7fa4\u4ea4\u4e92\u3002"),(0,s.kt)("h2",{id:"5-\u5b89\u88c5-ingress"},"5. \u5b89\u88c5 Ingress"),(0,s.kt)("p",null,"\u96c6\u7fa4\u9700\u8981\u4e00\u4e2a Ingress\uff0c\u4ee5\u4ece\u96c6\u7fa4\u5916\u90e8\u8bbf\u95ee Rancher\u3002\u8981 Ingress\uff0c\u4f60\u9700\u8981\u5206\u914d\u4e00\u4e2a\u516c\u5171 IP \u5730\u5740\u3002\u8bf7\u786e\u4fdd\u4f60\u6709\u8db3\u591f\u7684\u914d\u989d\uff0c\u5426\u5219\u5b83\u5c06\u65e0\u6cd5\u5206\u914d IP \u5730\u5740\u3002\u516c\u5171 IP \u5730\u5740\u7684\u9650\u5236\u5728\u6bcf\u4e2a\u8ba2\u9605\u7684\u533a\u57df\u7ea7\u522b\u751f\u6548\u3002"),(0,s.kt)("p",null,"\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u4e86\u5e26\u6709 Kubernetes \u8d1f\u8f7d\u5747\u8861\u5668\u670d\u52a1\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"nginx-ingress-controller"),"\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\nhelm repo update\nhelm upgrade --install \\\n  ingress-nginx ingress-nginx/ingress-nginx \\\n  --namespace ingress-nginx \\\n  --set controller.service.type=LoadBalancer \\\n  --version 4.0.18 \\\n  --create-namespace\n")),(0,s.kt)("h2",{id:"6-\u83b7\u53d6\u8d1f\u8f7d\u5747\u8861\u5668\u7684-ip"},"6. \u83b7\u53d6\u8d1f\u8f7d\u5747\u8861\u5668\u7684 IP"),(0,s.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u83b7\u53d6\u8d1f\u8f7d\u5747\u8861\u5668\u7684 IP \u5730\u5740\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl get service ingress-nginx-controller --namespace=ingress-nginx\n")),(0,s.kt)("p",null,"\u8fd4\u56de\u7684\u7ed3\u679c\u5e94\u4e0e\u4ee5\u4e0b\u5185\u5bb9\u7c7b\u4f3c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"NAME                       TYPE           CLUSTER-IP     EXTERNAL-IP    PORT(S)\n AGE\ningress-nginx-controller   LoadBalancer   10.0.116.18    40.31.180.83   80:31229/TCP,443:31050/TCP\n 67s\n")),(0,s.kt)("p",null,"\u4fdd\u5b58 ",(0,s.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP"),"\u3002"),(0,s.kt)("h2",{id:"7-\u8bbe\u7f6e-dns"},"7. \u8bbe\u7f6e DNS"),(0,s.kt)("p",null,"\u5230 Rancher Server \u7684\u5916\u90e8\u6d41\u91cf\u9700\u8981\u91cd\u5b9a\u5411\u5230\u4f60\u521b\u5efa\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u3002"),(0,s.kt)("p",null,"\u521b\u5efa\u6307\u5411\u4f60\u4fdd\u5b58\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," \u7684 DNS\u3002\u8fd9\u4e2a DNS \u4f1a\u7528\u4f5c Rancher Server \u7684 URL\u3002"),(0,s.kt)("p",null,"\u8bbe\u7f6e DNS \u7684\u6709\u6548\u65b9\u6cd5\u6709\u5f88\u591a\u3002\u5982\u9700\u83b7\u53d6\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/dns/"},"Azure DNS \u6587\u6863\u4e2d\u5fc3"),"\u3002"),(0,s.kt)("h2",{id:"8-\u5b89\u88c5-rancher-helm-chart"},"8. \u5b89\u88c5 Rancher Helm Chart"),(0,s.kt)("p",null,"\u6309\u7167",(0,s.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#%E5%AE%89%E8%A3%85-rancher-helm-chart"},"\u672c\u9875"),"\u7684\u8bf4\u660e\u5b89\u88c5 Rancher Helm Chart\u3002\u4efb\u4f55 Kubernetes \u53d1\u884c\u7248\u4e0a\u5b89\u88c5\u7684 Rancher \u7684 Helm \u8bf4\u660e\u90fd\u662f\u4e00\u6837\u7684\u3002"),(0,s.kt)("p",null,"\u5b89\u88c5 Rancher \u65f6\uff0c\u4f7f\u7528\u4e0a\u4e00\u6b65\u83b7\u53d6\u7684 DNS \u540d\u79f0\u4f5c\u4e3a Rancher Server \u7684 URL\u3002\u5b83\u53ef\u4ee5\u4f5c\u4e3a Helm \u9009\u9879\u4f20\u9012\u8fdb\u6765\u3002\u4f8b\u5982\uff0c\u5982\u679c DNS \u540d\u79f0\u662f ",(0,s.kt)("inlineCode",{parentName:"p"},"rancher.my.org"),"\uff0c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"--set hostname=rancher.my.org")," \u9009\u9879\u6765\u8fd0\u884c Helm \u5b89\u88c5\u547d\u4ee4\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"v2.6.7 \u65b0\u529f\u80fd"))),(0,s.kt)("p",null,"\u5728\u6b64\u8bbe\u7f6e\u4e4b\u4e0a\u5b89\u88c5 Rancher \u65f6\uff0c\u4f60\u8fd8\u9700\u8981\u5c06\u4ee5\u4e0b\u503c\u4f20\u9012\u5230 Rancher Helm \u5b89\u88c5\u547d\u4ee4\uff0c\u4ee5\u8bbe\u7f6e\u4e0e Rancher \u7684 Ingress \u8d44\u6e90\u4e00\u8d77\u4f7f\u7528\u7684 Ingress Controller \u7684\u540d\u79f0\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"--set ingress.ingressClassName=nginx\n")),(0,s.kt)("p",null,"\u8bf7\u53c2\u9605",(0,s.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#5-%E6%A0%B9%E6%8D%AE%E4%BD%A0%E9%80%89%E6%8B%A9%E7%9A%84%E8%AF%81%E4%B9%A6%E9%80%89%E9%A1%B9%EF%BC%8C%E9%80%9A%E8%BF%87-helm-%E5%AE%89%E8%A3%85-rancher"},"Helm \u5b89\u88c5\u547d\u4ee4"),"\u4e86\u89e3\u4f60\u7684\u8bc1\u4e66\u9009\u9879\u3002"))}d.isMDXComponent=!0}}]);