"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[44555],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(t),f=s,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(h,u(u({ref:r},l),{},{components:t})):n.createElement(h,u({ref:r},l))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,u=new Array(o);u[0]=d;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:s,u[1]=a;for(var c=2;c<o;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86202:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var n=t(87462),s=t(63366),o=(t(67294),t(3905)),u=["components"],a={title:"Configuration for Storage Classes in Azure",weight:3},i=void 0,c={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/azure-storageclass-configuration",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/azure-storageclass-configuration",title:"Configuration for Storage Classes in Azure",description:"If you are using Azure VMs for your nodes, you can use Azure files as a StorageClass for the cluster.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/azure-storageclass-configuration.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/azure-storageclass-configuration",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/azure-storageclass-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/azure-storageclass-configuration.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"Configuration for Storage Classes in Azure",weight:3},sidebar:"tutorialSidebar",previous:{title:"Launching Kubernetes on Windows Clusters",permalink:"/v2.0-v2.4/pages-for-subheaders/use-windows-clusters"},next:{title:"Networking Requirements for Host Gateway (L2bridge)",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway"}},l={},p=[],d={toc:p};function f(e){var r=e.components,t=(0,s.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you are using Azure VMs for your nodes, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/azure-files-dynamic-pv"},"Azure files")," as a StorageClass for the cluster."),(0,o.kt)("p",null,"In order to have the Azure platform create the required storage resources, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure"},"Configure the Azure cloud provider."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," to connect to your cluster.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterRole")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterRoleBinding")," manifest for the service account:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: system:azure-cloud-provider\nrules:\n- apiGroups: ['']\n  resources: ['secrets']\n  verbs:     ['get','create']\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: system:azure-cloud-provider\nroleRef:\n  kind: ClusterRole\n  apiGroup: rbac.authorization.k8s.io\n  name: system:azure-cloud-provider\nsubjects:\n- kind: ServiceAccount\n  name: persistent-volume-binder\n  namespace: kube-system\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create these in your cluster using one of the follow command."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl create -f <MANIFEST>\n")))))}f.isMDXComponent=!0}}]);