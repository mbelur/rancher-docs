"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[14075],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return h}});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),h=s,v=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return t?n.createElement(v,o(o({ref:r},l),{},{components:t})):n.createElement(v,o({ref:r},l))}));function h(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},29127:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var n=t(87462),s=t(63366),a=(t(67294),t(3905)),o=["components"],i={title:"Restoring Rancher Installed on a K3s Kubernetes Cluster",shortTitle:"K3s Installs",weight:1,aliases:["/rancher/v2.0-v2.4/en/backups/restorations/k3s-restoration","/rancher/v2.0-v2.4/en/backups/restorations/k8s-restore/k3s-restore","/rancher/v2.0-v2.4/en/backups/legacy/restore/k8s-restore/k3s-restore/","/rancher/v2.0-v2.4/en/backups/legacy/restore/k3s-restore","/rancher/v2.0-v2.4/en/backups/v2.0.x-v2.4.x/restore/k3s-restore","/rancher/v2.x/en/backups/v2.0.x-v2.4.x/restore/k3s-restore/"]},c=void 0,u={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-k3s-installed-rancher",id:"version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-k3s-installed-rancher",title:"Restoring Rancher Installed on a K3s Kubernetes Cluster",description:"When Rancher is installed on a high-availability Kubernetes cluster, we recommend using an external database to store the cluster data.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-k3s-installed-rancher.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-k3s-installed-rancher",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-k3s-installed-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-k3s-installed-rancher.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"Restoring Rancher Installed on a K3s Kubernetes Cluster",shortTitle:"K3s Installs",weight:1,aliases:["/rancher/v2.0-v2.4/en/backups/restorations/k3s-restoration","/rancher/v2.0-v2.4/en/backups/restorations/k8s-restore/k3s-restore","/rancher/v2.0-v2.4/en/backups/legacy/restore/k8s-restore/k3s-restore/","/rancher/v2.0-v2.4/en/backups/legacy/restore/k3s-restore","/rancher/v2.0-v2.4/en/backups/v2.0.x-v2.4.x/restore/k3s-restore","/rancher/v2.x/en/backups/v2.0.x-v2.4.x/restore/k3s-restore/"]},sidebar:"tutorialSidebar",previous:{title:"Backing up Rancher Installed on a K3s Kubernetes Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-k3s-installed-rancher"},next:{title:"Backing up Rancher Installed on an RKE Kubernetes Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters"}},l={},d=[{value:"Creating Snapshots and Restoring Databases from Snapshots",id:"creating-snapshots-and-restoring-databases-from-snapshots",level:3}],p={toc:d};function h(e){var r=e.components,t=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When Rancher is installed on a high-availability Kubernetes cluster, we recommend using an external database to store the cluster data."),(0,a.kt)("p",null,"The database administrator will need to back up the external database, or restore it from a snapshot or dump."),(0,a.kt)("p",null,"We recommend configuring the database to take recurring snapshots."),(0,a.kt)("h3",{id:"creating-snapshots-and-restoring-databases-from-snapshots"},"Creating Snapshots and Restoring Databases from Snapshots"),(0,a.kt)("p",null,"For details on taking database snapshots and restoring your database from them, refer to the official database documentation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-snapshot-method.html"},"Official MySQL documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/8.3/backup-dump.html"},"Official PostgreSQL documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/etcd-io/etcd/blob/master/Documentation/op-guide/recovery.md"},"Official etcd documentation"))))}h.isMDXComponent=!0}}]);