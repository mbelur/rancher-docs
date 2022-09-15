"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[90674],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(t),d=o,v=h["".concat(l,".").concat(d)]||h[d]||c[d]||s;return t?n.createElement(v,a(a({ref:r},u),{},{components:t})):n.createElement(v,a({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=h;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9980:function(e,r,t){var n=t(67294),o=t(45697),s=function(e){var r=e.id;return n.createElement("div",{className:"video-responsive"},n.createElement("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/"+r,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"}))};s.propTypes={embedId:t.n(o)().string.isRequired},r.Z=s},85502:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return h}});var n=t(87462),o=t(63366),s=(t(67294),t(3905)),a=t(9980),i=["components"],l={title:"Creating a vSphere Cluster",shortTitle:"vSphere",description:"Use Rancher to create a vSphere cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",metaDescription:"Use Rancher to create a vSphere cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",weight:2225,aliases:["/rancher/v2.0-v2.4/en/tasks/clusters/creating-a-cluster/create-cluster-vsphere/"]},p=void 0,u={unversionedId:"pages-for-subheaders/vsphere",id:"version-2.0-2.4/pages-for-subheaders/vsphere",title:"Creating a vSphere Cluster",description:"Use Rancher to create a vSphere cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/vsphere.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/vsphere",permalink:"/v2.0-v2.4/pages-for-subheaders/vsphere",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/vsphere.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"Creating a vSphere Cluster",shortTitle:"vSphere",description:"Use Rancher to create a vSphere cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",metaDescription:"Use Rancher to create a vSphere cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",weight:2225,aliases:["/rancher/v2.0-v2.4/en/tasks/clusters/creating-a-cluster/create-cluster-vsphere/"]},sidebar:"tutorialSidebar",previous:{title:"Creating an Azure Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster"},next:{title:"Provisioning Kubernetes Clusters in vSphere",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere"}},c={},h=[{value:"vSphere Enhancements in Rancher v2.3",id:"vsphere-enhancements-in-rancher-v23",level:2},{value:"Self-healing Node Pools",id:"self-healing-node-pools",level:3},{value:"Dynamically Populated Options for Instances and Scheduling",id:"dynamically-populated-options-for-instances-and-scheduling",level:3},{value:"More Supported Operating Systems",id:"more-supported-operating-systems",level:3},{value:"Video Walkthrough of v2.3.3 Node Template Features",id:"video-walkthrough-of-v233-node-template-features",level:3},{value:"Creating a vSphere Cluster",id:"creating-a-vsphere-cluster",level:2},{value:"Provisioning Storage",id:"provisioning-storage",level:2},{value:"Enabling the vSphere Cloud Provider",id:"enabling-the-vsphere-cloud-provider",level:2}],d={toc:h};function v(e){var r=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"By using Rancher with vSphere, you can bring cloud operations on-premises."),(0,s.kt)("p",null,"Rancher can provision nodes in vSphere and install Kubernetes on them. When creating a Kubernetes cluster in vSphere, Rancher first provisions the specified number of virtual machines by communicating with the vCenter API. Then it installs Kubernetes on top of them."),(0,s.kt)("p",null,"A vSphere cluster may consist of multiple groups of VMs with distinct properties, such as the amount of memory or the number of vCPUs. This grouping allows for fine-grained control over the sizing of nodes for each Kubernetes role."),(0,s.kt)("h2",{id:"vsphere-enhancements-in-rancher-v23"},"vSphere Enhancements in Rancher v2.3"),(0,s.kt)("p",null,"The vSphere node templates have been updated, allowing you to bring cloud operations on-premises with the following enhancements:"),(0,s.kt)("h3",{id:"self-healing-node-pools"},"Self-healing Node Pools"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Available as of v2.3.0")),(0,s.kt)("p",null,"One of the biggest advantages of provisioning vSphere nodes with Rancher is that it allows you to take advantage of Rancher's self-healing node pools, also called the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#about-node-auto-replace"},"node auto-replace feature,")," in your on-premises clusters. Self-healing node pools are designed to help you replace worker nodes for stateless applications. When Rancher provisions nodes from a node template, Rancher can automatically replace unreachable nodes."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Important:")," It is not recommended to enable node auto-replace on a node pool of master nodes or nodes with persistent volumes attached, because VMs are treated ephemerally. When a node in a node pool loses connectivity with the cluster, its persistent volumes are destroyed, resulting in data loss for stateful applications.")),(0,s.kt)("h3",{id:"dynamically-populated-options-for-instances-and-scheduling"},"Dynamically Populated Options for Instances and Scheduling"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Available as of v2.3.3")),(0,s.kt)("p",null,"Node templates for vSphere have been updated so that when you create a node template with your vSphere credentials, the template is automatically populated with the same options for provisioning VMs that you have access to in the vSphere console."),(0,s.kt)("p",null,"For the fields to be populated, your setup needs to fulfill the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere#prerequisites"},"prerequisites.")),(0,s.kt)("h3",{id:"more-supported-operating-systems"},"More Supported Operating Systems"),(0,s.kt)("p",null,"In Rancher v2.3.3+, you can provision VMs with any operating system that supports ",(0,s.kt)("inlineCode",{parentName:"p"},"cloud-init"),". Only YAML format is supported for the ",(0,s.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/topics/examples.html"},"cloud config.")),(0,s.kt)("p",null,"In Rancher before v2.3.3, the vSphere node driver included in Rancher only supported the provisioning of VMs with ",(0,s.kt)("a",{parentName:"p",href:"%7B%7B%3Cbaseurl%3E%7D%7D/os/v1.x/en/"},"RancherOS")," as the guest operating system."),(0,s.kt)("h3",{id:"video-walkthrough-of-v233-node-template-features"},"Video Walkthrough of v2.3.3 Node Template Features"),(0,s.kt)("p",null,"In this YouTube video, we demonstrate how to set up a node template with the new features designed to help you bring cloud operations to on-premises clusters."),(0,s.kt)(a.Z,{id:"dPIwg6x1AlU",mdxType:"YouTube"}),(0,s.kt)("h2",{id:"creating-a-vsphere-cluster"},"Creating a vSphere Cluster"),(0,s.kt)("p",null,"In ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere"},"this section,")," you'll learn how to use Rancher to install an ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE")," Kubernetes cluster in vSphere."),(0,s.kt)("h2",{id:"provisioning-storage"},"Provisioning Storage"),(0,s.kt)("p",null,"For an example of how to provision storage in vSphere using Rancher, refer to ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage"},"this section.")," In order to dynamically provision storage in vSphere, the vSphere provider must be ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/vsphere"},"enabled.")),(0,s.kt)("h2",{id:"enabling-the-vsphere-cloud-provider"},"Enabling the vSphere Cloud Provider"),(0,s.kt)("p",null,"When a cloud provider is set up in Rancher, the Rancher server can automatically provision new infrastructure for the cluster, including new nodes or persistent storage devices."),(0,s.kt)("p",null,"For details, refer to the section on ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/vsphere"},"enabling the vSphere cloud provider.")))}v.isMDXComponent=!0}}]);