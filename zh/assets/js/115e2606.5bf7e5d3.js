"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[9909],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),i=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=i(e.components);return a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=i(t),d=n,k=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return t?a.createElement(k,s(s({ref:r},u),{},{components:t})):a.createElement(k,s({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=h;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<o;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},34871:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var a=t(87462),n=t(63366),o=(t(67294),t(3905)),s=["components"],c={title:"Backups and Disaster Recovery",weight:5,aliases:["/rancher/v2.5/en/backups/v2.5","/rancher/v2.x/en/backups/v2.5/"]},l=void 0,i={unversionedId:"pages-for-subheaders/backup-restore-and-disaster-recovery",id:"version-2.5/pages-for-subheaders/backup-restore-and-disaster-recovery",title:"Backups and Disaster Recovery",description:"In this section, you'll learn how to create backups of Rancher, how to restore Rancher from backup, and how to migrate Rancher to a new Kubernetes cluster.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/backup-restore-and-disaster-recovery.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/backup-restore-and-disaster-recovery",permalink:"/zh/v2.5/pages-for-subheaders/backup-restore-and-disaster-recovery",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/backup-restore-and-disaster-recovery.md",tags:[],version:"2.5",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"Backups and Disaster Recovery",weight:5,aliases:["/rancher/v2.5/en/backups/v2.5","/rancher/v2.x/en/backups/v2.5/"]},sidebar:"tutorialSidebar",previous:{title:"Multi-cluster Apps",permalink:"/zh/v2.5/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps"},next:{title:"Backing up Rancher",permalink:"/zh/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"}},u={},p=[{value:"Changes in Rancher v2.5",id:"changes-in-rancher-v25",level:2},{value:"Backup and Restore for Rancher v2.5 installed with Docker",id:"backup-and-restore-for-rancher-v25-installed-with-docker",level:3},{value:"How Backups and Restores Work",id:"how-backups-and-restores-work",level:2},{value:"Installing the rancher-backup Operator",id:"installing-the-rancher-backup-operator",level:2},{value:"Installing rancher-backup with the Rancher UI",id:"installing-rancher-backup-with-the-rancher-ui",level:3},{value:"Installing rancher-backup with the Helm CLI",id:"installing-rancher-backup-with-the-helm-cli",level:3},{value:"RBAC",id:"rbac",level:3},{value:"Backing up Rancher",id:"backing-up-rancher",level:2},{value:"Restoring Rancher",id:"restoring-rancher",level:2},{value:"Migrating Rancher to a New Cluster",id:"migrating-rancher-to-a-new-cluster",level:2},{value:"Default Storage Location Configuration",id:"default-storage-location-configuration",level:2},{value:"Example values.yaml for the rancher-backup Helm Chart",id:"example-valuesyaml-for-the-rancher-backup-helm-chart",level:3}],h={toc:p};function d(e){var r=e.components,t=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, you'll learn how to create backups of Rancher, how to restore Rancher from backup, and how to migrate Rancher to a new Kubernetes cluster."),(0,o.kt)("p",null,"As of Rancher v2.5, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator is used to backup and restore Rancher. The ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," Helm chart is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts/tree/release-v2.5/charts/rancher-backup"},"here.")),(0,o.kt)("p",null,"The backup-restore operator needs to be installed in the local cluster, and only backs up the Rancher app. The backup and restore operations are performed only in the local Kubernetes cluster."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When restoring a backup into a new Rancher setup, the version of the new setup should be the same as the one where the backup is made.")),(0,o.kt)("h2",{id:"changes-in-rancher-v25"},"Changes in Rancher v2.5"),(0,o.kt)("p",null,"The new ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator allows Rancher to be backed up and restored on any Kubernetes cluster. This application is a Helm chart, and it can be deployed through the Rancher ",(0,o.kt)("strong",{parentName:"p"},"Apps & Marketplace")," page, or by using the Helm CLI."),(0,o.kt)("p",null,"Previously, the way that cluster data was backed up depended on the type of Kubernetes cluster that was used."),(0,o.kt)("p",null,"In Rancher v2.4, it was only supported to install Rancher on two types of Kubernetes clusters: an RKE cluster, or a K3s cluster with an external database. If Rancher was installed on an RKE cluster, RKE would be used to take a snapshot of the etcd database and restore the cluster. If Rancher was installed on a K3s cluster with an external database, the database would need to be backed up and restored using the upstream documentation for the database."),(0,o.kt)("p",null,"In Rancher v2.5, it is now supported to install Rancher hosted Kubernetes clusters, such as Amazon EKS clusters, which do not expose etcd to a degree that would allow snapshots to be created by an external tool. etcd doesn't need to be exposed for ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," to work, because the operator gathers resources by making calls to ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-apiserver"),"."),(0,o.kt)("h3",{id:"backup-and-restore-for-rancher-v25-installed-with-docker"},"Backup and Restore for Rancher v2.5 installed with Docker"),(0,o.kt)("p",null,"For Rancher installed with Docker, refer to the same steps used up till 2.5 for ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},"backups")," and ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"},"restores.")),(0,o.kt)("h2",{id:"how-backups-and-restores-work"},"How Backups and Restores Work"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator introduces three custom resources: Backups, Restores, and ResourceSets. The following cluster-scoped custom resource definitions are added to the cluster:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"backups.resources.cattle.io")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resourcesets.resources.cattle.io")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"restores.resources.cattle.io"))),(0,o.kt)("p",null,"The ResourceSet defines which Kubernetes resources need to be backed up. The ResourceSet is not available to be configured in the Rancher UI because the values required to back up Rancher are predefined. This ResourceSet should not be modified."),(0,o.kt)("p",null,"When a Backup custom resource is created, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," to get the resources in the ResourceSet (specifically, the predefined ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-resource-set"),") that the Backup custom resource refers to."),(0,o.kt)("p",null,"The operator then creates the backup file in the .tar.gz format and stores it in the location configured in the Backup resource."),(0,o.kt)("p",null,"When a Restore custom resource is created, the operator accesses the backup .tar.gz file specified by the Restore, and restores the application from that file."),(0,o.kt)("p",null,"The Backup and Restore custom resources can be created in the Rancher UI, or by using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply"),"."),(0,o.kt)("h2",{id:"installing-the-rancher-backup-operator"},"Installing the rancher-backup Operator"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator can be installed from the Rancher UI, or with the Helm CLI. In both cases, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," Helm chart is installed on the Kubernetes cluster running the Rancher server. It is a cluster-admin only feature and available only for the ",(0,o.kt)("strong",{parentName:"p"},"local")," cluster.  (",(0,o.kt)("em",{parentName:"p"},"If you do not see ",(0,o.kt)("inlineCode",{parentName:"em"},"rancher-backup")," in the Rancher UI, you may have selected the wrong cluster."),")"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," There are two known issues in Fleet that occur after performing a restoration using the backup-restore-operator: Fleet agents are inoperable and clientSecretName and helmSecretName are not included in Fleet gitrepos. Refer ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet#troubleshooting"},"here")," for workarounds.")),(0,o.kt)("h3",{id:"installing-rancher-backup-with-the-rancher-ui"},"Installing rancher-backup with the Rancher UI"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the Rancher UI's Cluster Manager, choose the cluster named ",(0,o.kt)("strong",{parentName:"li"},"local")),(0,o.kt)("li",{parentName:"ol"},"On the upper-right click on the ",(0,o.kt)("strong",{parentName:"li"},"Cluster Explorer.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Apps.")),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher-backup")," operator."),(0,o.kt)("li",{parentName:"ol"},"Optional: Configure the default storage location. For help, refer to the ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.5/reference-guides/backup-restore-configuration/storage-configuration"},"configuration section."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator is installed."),(0,o.kt)("p",null,"From the ",(0,o.kt)("strong",{parentName:"p"},"Cluster Explorer,")," you can see the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator listed under ",(0,o.kt)("strong",{parentName:"p"},"Deployments.")),(0,o.kt)("p",null,"To configure the backup app in Rancher, click ",(0,o.kt)("strong",{parentName:"p"},"Cluster Explorer")," in the upper left corner and click ",(0,o.kt)("strong",{parentName:"p"},"Rancher Backups.")),(0,o.kt)("h3",{id:"installing-rancher-backup-with-the-helm-cli"},"Installing rancher-backup with the Helm CLI"),(0,o.kt)("p",null,"Install the backup app as a Helm chart:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm repo add rancher-charts https://charts.rancher.io\nhelm repo update\nhelm install rancher-backup-crd rancher-charts/rancher-backup-crd -n cattle-resources-system --create-namespace\nhelm install rancher-backup rancher-charts/rancher-backup -n cattle-resources-system\n")),(0,o.kt)("h3",{id:"rbac"},"RBAC"),(0,o.kt)("p",null,"Only the rancher admins and the local cluster\u2019s cluster-owner can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the Chart"),(0,o.kt)("li",{parentName:"ul"},"See the navigation links for Backup and Restore CRDs"),(0,o.kt)("li",{parentName:"ul"},"Perform a backup or restore by creating a Backup CR and Restore CR respectively"),(0,o.kt)("li",{parentName:"ul"},"List backups/restores performed so far")),(0,o.kt)("h2",{id:"backing-up-rancher"},"Backing up Rancher"),(0,o.kt)("p",null,"A backup is performed by creating a Backup custom resource. For a tutorial, refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},"this page.")),(0,o.kt)("h2",{id:"restoring-rancher"},"Restoring Rancher"),(0,o.kt)("p",null,"A restore is performed by creating a Restore custom resource. For a tutorial, refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher"},"this page.")),(0,o.kt)("h2",{id:"migrating-rancher-to-a-new-cluster"},"Migrating Rancher to a New Cluster"),(0,o.kt)("p",null,"A migration is performed by following ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"these steps.")),(0,o.kt)("h2",{id:"default-storage-location-configuration"},"Default Storage Location Configuration"),(0,o.kt)("p",null,"Configure a storage location where all backups are saved by default. You will have the option to override this with each backup, but will be limited to using an S3-compatible or Minio object store."),(0,o.kt)("p",null,"For information on configuring these options, refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/backup-restore-configuration/storage-configuration"},"this page.")),(0,o.kt)("h3",{id:"example-valuesyaml-for-the-rancher-backup-helm-chart"},"Example values.yaml for the rancher-backup Helm Chart"),(0,o.kt)("p",null,"The example ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/backup-restore-configuration/storage-configuration#example-values-yaml-for-the-rancher-backup-helm-chart"},"values.yaml file")," can be used to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator when the Helm CLI is used to install it."))}d.isMDXComponent=!0}}]);