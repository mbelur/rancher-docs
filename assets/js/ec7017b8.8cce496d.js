"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[65822],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=o,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46468:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={title:"RKE Cluster Configuration Reference",weight:2250},l=void 0,c={unversionedId:"reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration",id:"version-2.0-2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration",title:"RKE Cluster Configuration Reference",description:"When Rancher installs Kubernetes, it uses RKE as the Kubernetes distribution.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration.md",sourceDirName:"reference-guides/cluster-configuration/rancher-server-configuration",slug:"/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration",permalink:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"RKE Cluster Configuration Reference",weight:2250},sidebar:"tutorialSidebar",previous:{title:"Rancher Server Configuration",permalink:"/v2.0-v2.4/pages-for-subheaders/rancher-server-configuration"},next:{title:"Launching Kubernetes on Existing Custom Nodes",permalink:"/v2.0-v2.4/pages-for-subheaders/use-existing-nodes"}},u={},p=[{value:"Rancher UI Options",id:"rancher-ui-options",level:2},{value:"Kubernetes Version",id:"kubernetes-version",level:3},{value:"Network Provider",id:"network-provider",level:3},{value:"Kubernetes Cloud Providers",id:"kubernetes-cloud-providers",level:3},{value:"Private registries",id:"private-registries",level:3},{value:"Authorized Cluster Endpoint",id:"authorized-cluster-endpoint",level:3},{value:"Node Pools",id:"node-pools",level:3},{value:"Advanced Options",id:"advanced-options",level:2},{value:"NGINX Ingress",id:"nginx-ingress",level:3},{value:"Node Port Range",id:"node-port-range",level:3},{value:"Metrics Server Monitoring",id:"metrics-server-monitoring",level:3},{value:"Pod Security Policy Support",id:"pod-security-policy-support",level:3},{value:"Docker Version on Nodes",id:"docker-version-on-nodes",level:3},{value:"Docker Root Directory",id:"docker-root-directory",level:3},{value:"Recurring etcd Snapshots",id:"recurring-etcd-snapshots",level:3},{value:"Cluster Config File",id:"cluster-config-file",level:2},{value:"Config File Structure in Rancher v2.3.0+",id:"config-file-structure-in-rancher-v230",level:3},{value:"Config File Structure in Rancher v2.0.0-v2.2.x",id:"config-file-structure-in-rancher-v200-v22x",level:3},{value:"Default DNS provider",id:"default-dns-provider",level:3},{value:"docker_root_dir",id:"docker_root_dir",level:3},{value:"enable_cluster_monitoring",id:"enable_cluster_monitoring",level:3},{value:"enable_network_policy",id:"enable_network_policy",level:3},{value:"local_cluster_auth_endpoint",id:"local_cluster_auth_endpoint",level:3},{value:"Custom Network Plug-in",id:"custom-network-plug-in",level:3}],d={toc:p};function h(e){var n=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When Rancher installs Kubernetes, it uses ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE")," as the Kubernetes distribution."),(0,a.kt)("p",null,"This section covers the configuration options that are available in Rancher for a new or existing RKE Kubernetes cluster."),(0,a.kt)("p",null,"You can configure the Kubernetes options one of two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rancher-ui-options"},"Rancher UI"),": Use the Rancher UI to select options that are commonly customized when setting up a Kubernetes cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#cluster-config-file"},"Cluster Config File"),": Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE config file. Using a config file allows you to set any of the options available in an RKE installation, except for system_images configuration, by specifying them in YAML.")),(0,a.kt)("p",null,"In Rancher v2.0.0-v2.2.x, the RKE cluster config file in Rancher is identical to the  ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"cluster config file for the Rancher Kubernetes Engine"),", which is the tool Rancher uses to provision clusters. In Rancher v2.3.0, the RKE information is still included in the config file, but it is separated from other options, so that the RKE cluster config options are nested under the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config")," directive. For more information, see the section about the ",(0,a.kt)("a",{parentName:"p",href:"#cluster-config-file"},"cluster config file.")),(0,a.kt)("p",null,"This section is a cluster configuration reference, covering the following topics:"),(0,a.kt)("h2",{id:"rancher-ui-options"},"Rancher UI Options"),(0,a.kt)("p",null,"When creating a cluster using one of the options described in ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Launched Kubernetes"),", you can configure basic Kubernetes options using the ",(0,a.kt)("strong",{parentName:"p"},"Cluster Options")," section."),(0,a.kt)("h3",{id:"kubernetes-version"},"Kubernetes Version"),(0,a.kt)("p",null,"The version of Kubernetes installed on your cluster nodes. Rancher packages its own version of Kubernetes based on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/hyperkube"},"hyperkube"),"."),(0,a.kt)("h3",{id:"network-provider"},"Network Provider"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/networking/"},"Network Provider")," that the cluster uses. For more details on the different networking providers, please view our ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/faq/container-network-interface-providers"},"Networking FAQ"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," After you launch the cluster, you cannot change your network provider. Therefore, choose which network provider you want to use carefully, as Kubernetes doesn't allow switching between network providers. Once a cluster is created with a network provider, changing network providers would require you  tear down the entire cluster and all its applications.")),(0,a.kt)("p",null,"Out of the box, Rancher is compatible with the following network providers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/projectcalico/canal"},"Canal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/coreos/flannel#flannel"},"Flannel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.projectcalico.org/v3.11/introduction/"},"Calico")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/weaveworks/weave"},"Weave")," (Available as of v2.2.0)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes on Canal:")),(0,a.kt)("p",null,"In v2.0.0 - v2.0.4 and v2.0.6, this was the default option for these clusters was Canal with network isolation. With the network isolation automatically enabled, it prevented any pod communication between ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"projects"),"."),(0,a.kt)("p",null,"As of v2.0.7, if you use Canal, you also have the option of using ",(0,a.kt)("strong",{parentName:"p"},"Project Network Isolation"),", which will enable or disable communication between pods in different ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"projects"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Attention Rancher v2.0.0 - v2.0.6 Users")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"In previous Rancher releases, Canal isolates project network communications with no option to disable it. If you are using any of these Rancher releases, be aware that using Canal prevents all communication between pods in different projects."),(0,a.kt)("li",{parentName:"ul"},"If you have clusters using Canal and are upgrading to v2.0.7, those clusters enable Project Network Isolation by default. If you want to disable Project Network Isolation, edit the cluster and disable the option."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes on Flannel:")),(0,a.kt)("p",null,"In v2.0.5, this was the default option, which did not prevent any network isolation between projects."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes on Weave:")),(0,a.kt)("p",null,"When Weave is selected as network provider, Rancher will automatically enable encryption by generating a random password. If you want to specify the password manually, please see how to configure your cluster using a ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#cluster-config-file"},"Config File")," and the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/network-plugins/#weave-network-plug-in-options"},"Weave Network Plug-in Options"),"."),(0,a.kt)("h3",{id:"kubernetes-cloud-providers"},"Kubernetes Cloud Providers"),(0,a.kt)("p",null,"You can configure a ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes cloud provider"),". If you want to use ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/create-kubernetes-persistent-storage"},"volumes and storage")," in Kubernetes, typically you must select the specific cloud provider in order to use it. For example, if you want to use Amazon EBS, you would need to select the ",(0,a.kt)("inlineCode",{parentName:"p"},"aws")," cloud provider."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," If the cloud provider you want to use is not listed as an option, you will need to use the ",(0,a.kt)("a",{parentName:"p",href:"#cluster-config-file"},"config file option")," to configure the cloud provider. Please reference the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/"},"RKE cloud provider documentation")," on how to configure the cloud provider.")),(0,a.kt)("p",null,"If you want to see all the configuration options for a cluster, please click ",(0,a.kt)("strong",{parentName:"p"},"Show advanced options")," on the bottom right. The advanced options are described below:"),(0,a.kt)("h3",{id:"private-registries"},"Private registries"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,a.kt)("p",null,"The cluster-level private registry configuration is only used for provisioning clusters."),(0,a.kt)("p",null,"There are two main ways to set up private registries in Rancher: by setting up the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry"},"global default registry")," through the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," tab in the global view, and by setting up a private registry in the advanced options in the cluster-level settings. The global default registry is intended to be used for air-gapped setups, for registries that do not require credentials. The cluster-level private registry is intended to be used in all setups in which the private registry requires credentials."),(0,a.kt)("p",null,"If your private registry requires credentials, you need to pass the credentials to Rancher by editing the cluster options for each cluster that needs to pull images from the registry."),(0,a.kt)("p",null,"The private registry configuration option tells Rancher where to pull the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/system-images/"},"system images")," or ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/"},"addon images")," that will be used in your cluster."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"System images")," are components needed to maintain the Kubernetes cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Add-ons")," are used to deploy several cluster components, including network plug-ins, the ingress controller, the DNS provider, or the metrics server.")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/private-registries/"},"RKE documentation on private registries")," for more information on the private registry for components applied during the provisioning of the cluster."),(0,a.kt)("h3",{id:"authorized-cluster-endpoint"},"Authorized Cluster Endpoint"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,a.kt)("p",null,"Authorized Cluster Endpoint can be used to directly access the Kubernetes API server, without requiring communication through Rancher."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The authorized cluster endpoint is available only in clusters that Rancher has provisioned ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#authorized-cluster-endpoint"},"using RKE"),". It is not available for clusters in hosted Kubernetes providers, such as Amazon's EKS. Additionally, the authorized cluster endpoint cannot be enabled for RKE clusters that are imported into Rancher; it is available only on Rancher-launched Kubernetes clusters.")),(0,a.kt)("p",null,"This is enabled by default in Rancher-launched Kubernetes clusters, using the IP of the node with the ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," role and the default Kubernetes self signed certificates."),(0,a.kt)("p",null,"For more detail on how an authorized cluster endpoint works and why it is used, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/rancher-manager-architecture#4-authorized-cluster-endpoint"},"architecture section.")),(0,a.kt)("p",null,"We recommend using a load balancer with the authorized cluster endpoint. For details, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/rancher-manager-architecture/architecture-recommendations#architecture-for-an-authorized-cluster-endpoint"},"recommended architecture section.")),(0,a.kt)("h3",{id:"node-pools"},"Node Pools"),(0,a.kt)("p",null,"For information on using the Rancher UI to set up node pools in an RKE cluster, refer to ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"this page.")),(0,a.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,a.kt)("p",null,"The following options are available when you create clusters in the Rancher UI. They are located under ",(0,a.kt)("strong",{parentName:"p"},"Advanced Options.")),(0,a.kt)("h3",{id:"nginx-ingress"},"NGINX Ingress"),(0,a.kt)("p",null,"Option to enable or disable the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/ingress-controllers/"},"NGINX ingress controller"),"."),(0,a.kt)("h3",{id:"node-port-range"},"Node Port Range"),(0,a.kt)("p",null,"Option to change the range of ports that can be used for ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#nodeport"},"NodePort services"),". Default is ",(0,a.kt)("inlineCode",{parentName:"p"},"30000-32767"),"."),(0,a.kt)("h3",{id:"metrics-server-monitoring"},"Metrics Server Monitoring"),(0,a.kt)("p",null,"Option to enable or disable ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/metrics-server/"},"Metrics Server"),"."),(0,a.kt)("h3",{id:"pod-security-policy-support"},"Pod Security Policy Support"),(0,a.kt)("p",null,"Option to enable and select a default ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"Pod Security Policy"),". You must have an existing Pod Security Policy configured before you can use this option."),(0,a.kt)("h3",{id:"docker-version-on-nodes"},"Docker Version on Nodes"),(0,a.kt)("p",null,"Option to require ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"a supported Docker version")," installed on the cluster nodes that are added to the cluster, or to allow unsupported Docker versions installed on the cluster nodes."),(0,a.kt)("h3",{id:"docker-root-directory"},"Docker Root Directory"),(0,a.kt)("p",null,"If the nodes you are adding to the cluster have Docker configured with a non-default Docker Root Directory (default is ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/docker"),"), please specify the correct Docker Root Directory in this option."),(0,a.kt)("h3",{id:"recurring-etcd-snapshots"},"Recurring etcd Snapshots"),(0,a.kt)("p",null,"Option to enable or disable ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/etcd-snapshots/#etcd-recurring-snapshots"},"recurring etcd snapshots"),"."),(0,a.kt)("h2",{id:"cluster-config-file"},"Cluster Config File"),(0,a.kt)("p",null,"Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE config file. Using a config file allows you to set any of the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"options available")," in an RKE installation, except for ",(0,a.kt)("inlineCode",{parentName:"p"},"system_images")," configuration. The ",(0,a.kt)("inlineCode",{parentName:"p"},"system_images")," option is not supported when creating a cluster with the Rancher UI or API."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," In Rancher v2.0.5 and v2.0.6, the names of services in the Config File (YAML) should contain underscores only: ",(0,a.kt)("inlineCode",{parentName:"p"},"kube_api")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kube_controller"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To edit an RKE config file directly from the Rancher UI, click ",(0,a.kt)("strong",{parentName:"li"},"Edit as YAML"),"."),(0,a.kt)("li",{parentName:"ul"},"To read from an existing RKE file, click ",(0,a.kt)("strong",{parentName:"li"},"Read from a file"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:t(69871).Z,width:"2708",height:"258"})),(0,a.kt)("p",null,"The structure of the config file is different depending on your version of Rancher. Below are example config files for Rancher v2.0.0-v2.2.x and for Rancher v2.3.0+."),(0,a.kt)("h3",{id:"config-file-structure-in-rancher-v230"},"Config File Structure in Rancher v2.3.0+"),(0,a.kt)("p",null,"RKE (Rancher Kubernetes Engine) is the tool that Rancher uses to provision Kubernetes clusters. Rancher's cluster config files used to have the same structure as ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/example-yamls/"},"RKE config files,")," but the structure changed so that in Rancher, RKE cluster config items are separated from non-RKE config items. Therefore, configuration for your cluster needs to be nested under the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config")," directive in the cluster config file. Cluster config files created with earlier versions of Rancher will need to be updated for this format. An example cluster config file is included below."),(0,a.kt)("details",{id:"v2.3.0-cluster-config-file"},(0,a.kt)("summary",null,"Example Cluster Config File for Rancher v2.3.0+"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#\n# Cluster Config\n#\ndocker_root_dir: /var/lib/docker\nenable_cluster_alerting: false\nenable_cluster_monitoring: false\nenable_network_policy: false\nlocal_cluster_auth_endpoint:\n  enabled: true\n#\n# Rancher Config\n#\nrancher_kubernetes_engine_config: # Your RKE template config goes here.\n  addon_job_timeout: 30\n  authentication:\n    strategy: x509\n  ignore_docker_version: true\n#\n# # Currently only nginx ingress provider is supported.\n# # To disable ingress controller, set `provider: none`\n# # To enable ingress on specific nodes, use the node_selector, eg:\n#    provider: nginx\n#    node_selector:\n#      app: ingress\n#\n  ingress:\n    provider: nginx\n  kubernetes_version: v1.15.3-rancher3-1\n  monitoring:\n    provider: metrics-server\n#\n#   If you are using calico on AWS\n#\n#    network:\n#      plugin: calico\n#      calico_network_provider:\n#        cloud_provider: aws\n#\n# # To specify flannel interface\n#\n#    network:\n#      plugin: flannel\n#      flannel_network_provider:\n#      iface: eth1\n#\n# # To specify flannel interface for canal plugin\n#\n#    network:\n#      plugin: canal\n#      canal_network_provider:\n#        iface: eth1\n#\n  network:\n    options:\n      flannel_backend_type: vxlan\n    plugin: canal\n#\n#    services:\n#      kube-api:\n#        service_cluster_ip_range: 10.43.0.0/16\n#      kube-controller:\n#        cluster_cidr: 10.42.0.0/16\n#        service_cluster_ip_range: 10.43.0.0/16\n#      kubelet:\n#        cluster_domain: cluster.local\n#        cluster_dns_server: 10.43.0.10\n#\n  services:\n    etcd:\n      backup_config:\n        enabled: true\n        interval_hours: 12\n        retention: 6\n        safe_timestamp: false\n      creation: 12h\n      extra_args:\n        election-timeout: 5000\n        heartbeat-interval: 500\n      gid: 0\n      retention: 72h\n      snapshot: false\n      uid: 0\n    kube_api:\n      always_pull_images: false\n      pod_security_policy: false\n      service_node_port_range: 30000-32767\n  ssh_agent_auth: false\nwindows_prefered_cluster: false\n"))),(0,a.kt)("h3",{id:"config-file-structure-in-rancher-v200-v22x"},"Config File Structure in Rancher v2.0.0-v2.2.x"),(0,a.kt)("p",null,"An example cluster config file is included below."),(0,a.kt)("details",{id:"before-v2.3.0-cluster-config-file"},(0,a.kt)("summary",null,"Example Cluster Config File for Rancher v2.0.0-v2.2.x"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"addon_job_timeout: 30\nauthentication:\n  strategy: x509\nignore_docker_version: true\n#\n# # Currently only nginx ingress provider is supported.\n# # To disable ingress controller, set `provider: none`\n# # To enable ingress on specific nodes, use the node_selector, eg:\n#    provider: nginx\n#    node_selector:\n#      app: ingress\n#\ningress:\n  provider: nginx\nkubernetes_version: v1.15.3-rancher3-1\nmonitoring:\n  provider: metrics-server\n#\n#   If you are using calico on AWS\n#\n#    network:\n#      plugin: calico\n#      calico_network_provider:\n#        cloud_provider: aws\n#\n# # To specify flannel interface\n#\n#    network:\n#      plugin: flannel\n#      flannel_network_provider:\n#      iface: eth1\n#\n# # To specify flannel interface for canal plugin\n#\n#    network:\n#      plugin: canal\n#      canal_network_provider:\n#        iface: eth1\n#\nnetwork:\n  options:\n    flannel_backend_type: vxlan\n  plugin: canal\n#\n#    services:\n#      kube-api:\n#        service_cluster_ip_range: 10.43.0.0/16\n#      kube-controller:\n#        cluster_cidr: 10.42.0.0/16\n#        service_cluster_ip_range: 10.43.0.0/16\n#      kubelet:\n#        cluster_domain: cluster.local\n#        cluster_dns_server: 10.43.0.10\n#\nservices:\n  etcd:\n    backup_config:\n      enabled: true\n      interval_hours: 12\n      retention: 6\n      safe_timestamp: false\n    creation: 12h\n    extra_args:\n      election-timeout: 5000\n      heartbeat-interval: 500\n    gid: 0\n    retention: 72h\n    snapshot: false\n    uid: 0\n  kube_api:\n    always_pull_images: false\n    pod_security_policy: false\n    service_node_port_range: 30000-32767\nssh_agent_auth: false\n"))),(0,a.kt)("h3",{id:"default-dns-provider"},"Default DNS provider"),(0,a.kt)("p",null,"The table below indicates what DNS provider is deployed by default. See ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/dns/"},"RKE documentation on DNS provider")," for more information how to configure a different DNS provider. CoreDNS can only be used on Kubernetes v1.12.0 and higher."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Rancher version"),(0,a.kt)("th",{parentName:"tr",align:null},"Kubernetes version"),(0,a.kt)("th",{parentName:"tr",align:null},"Default DNS provider"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v2.2.5 and higher"),(0,a.kt)("td",{parentName:"tr",align:null},"v1.14.0 and higher"),(0,a.kt)("td",{parentName:"tr",align:null},"CoreDNS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v2.2.5 and higher"),(0,a.kt)("td",{parentName:"tr",align:null},"v1.13.x and lower"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-dns")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v2.2.4 and lower"),(0,a.kt)("td",{parentName:"tr",align:null},"any"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-dns")))),(0,a.kt)("h1",{id:"rancher-specific-parameters"},"Rancher specific parameters"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,a.kt)("p",null,"Besides the RKE config file options, there are also Rancher specific settings that can be configured in the Config File (YAML):"),(0,a.kt)("h3",{id:"docker_root_dir"},"docker_root_dir"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"#docker-root-directory"},"Docker Root Directory"),"."),(0,a.kt)("h3",{id:"enable_cluster_monitoring"},"enable_cluster_monitoring"),(0,a.kt)("p",null,"Option to enable or disable ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-monitoring"},"Cluster Monitoring"),"."),(0,a.kt)("h3",{id:"enable_network_policy"},"enable_network_policy"),(0,a.kt)("p",null,"Option to enable or disable Project Network Isolation."),(0,a.kt)("h3",{id:"local_cluster_auth_endpoint"},"local_cluster_auth_endpoint"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"#authorized-cluster-endpoint"},"Authorized Cluster Endpoint"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'local_cluster_auth_endpoint:\n  enabled: true\n  fqdn: "FQDN"\n  ca_certs: "BASE64_CACERT"\n')),(0,a.kt)("h3",{id:"custom-network-plug-in"},"Custom Network Plug-in"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v2.2.4")),(0,a.kt)("p",null,"You can add a custom network plug-in by using the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/user-defined-add-ons/"},"user-defined add-on functionality")," of RKE. You define any add-on that you want deployed after the Kubernetes cluster is deployed."),(0,a.kt)("p",null,"There are two ways that you can specify an add-on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/user-defined-add-ons/#in-line-add-ons"},"In-line Add-ons")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/user-defined-add-ons/#referencing-yaml-files-for-add-ons"},"Referencing YAML Files for Add-ons"))),(0,a.kt)("p",null,"For an example of how to configure a custom network plug-in by editing the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),", refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/network-plugins/custom-network-plugin-example"},"RKE documentation.")))}h.isMDXComponent=!0},69871:function(e,n,t){n.Z=t.p+"assets/images/cluster-options-yaml-994a3b9b3d53ed35101fa31517f64620.png"}}]);