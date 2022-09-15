"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[91360],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),c=n(12466),u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,o=e.lazy,m=e.block,d=e.defaultValue,k=e.values,g=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.U)(),w=v.tabGroupChoices,C=v.setTabGroupChoices,R=(0,r.useState)(y),_=R[0],T=R[1],P=[],E=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var O=w[g];null!=O&&O!==_&&b.some((function(e){return e.value===O}))&&T(O)}var I=function(e){var t=e.currentTarget,n=P.indexOf(t),a=b[n].value;a!==_&&(E(t),T(a),null!=g&&C(g,String(a)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=P.indexOf(e.currentTarget)+1;n=null!=(a=P[r])?a:P[0];break;case"ArrowLeft":var l,o=P.indexOf(e.currentTarget)-1;n=null!=(l=P[o])?l:P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},f)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return P.push(e)},onKeyDown:j,onFocus:I,onClick:I},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===_}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function d(e){var t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},88015:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(65488),i=n(85162),s=["components"],c={title:"Upgrading to v2.0.7+ \u2014 Namespace Migration",weight:1040,aliases:["/rancher/v2.0-v2.4/en/upgrades/upgrades/namespace-migration","/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/upgrades/namespace-migration","/rancher/v2.0-v2.4/en/installation/install-rancher-on-k8s/upgrades-rollbacks/upgrades/namespace-migration","/rancher/v2.x/en/installation/install-rancher-on-k8s/upgrades/namespace-migration/"]},u=void 0,p={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration",id:"version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration",title:"Upgrading to v2.0.7+ \u2014 Namespace Migration",description:"This section applies only to Rancher upgrades from v2.0.6 or earlier to v2.0.7 or later. Upgrades from v2.0.7 to later version are unaffected.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"Upgrading to v2.0.7+ \u2014 Namespace Migration",weight:1040,aliases:["/rancher/v2.0-v2.4/en/upgrades/upgrades/namespace-migration","/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/upgrades/namespace-migration","/rancher/v2.0-v2.4/en/installation/install-rancher-on-k8s/upgrades-rollbacks/upgrades/namespace-migration","/rancher/v2.x/en/installation/install-rancher-on-k8s/upgrades/namespace-migration/"]},sidebar:"tutorialSidebar",previous:{title:"Migrating from a Kubernetes Install with an RKE Add-on",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},next:{title:"Upgrading Rancher Installed on Kubernetes with Helm 2",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/helm2"}},m={},d=[{value:"Preventing Cluster Networking Issues",id:"preventing-cluster-networking-issues",level:2},{value:"Restoring Cluster Networking",id:"restoring-cluster-networking",level:2}],k={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This section applies only to Rancher upgrades from v2.0.6 or earlier to v2.0.7 or later. Upgrades from v2.0.7 to later version are unaffected.")),(0,l.kt)("p",null,"In Rancher v2.0.6 and prior, system namespaces crucial for Rancher and Kubernetes operations were not assigned to any Rancher project by default. Instead, these namespaces existed independently from all Rancher projects, but you could move these namespaces into any project without affecting cluster operations."),(0,l.kt)("p",null,"These namespaces include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kube-system")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kube-public")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cattle-system")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cattle-alerting"),(0,l.kt)("sup",null,"1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cattle-logging"),(0,l.kt)("sup",null,"1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cattle-pipeline"),(0,l.kt)("sup",null,"1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ingress-nginx"))),(0,l.kt)("blockquote",null,(0,l.kt)("sup",null,"1")," Only displays if this feature is enabled for the cluster."),(0,l.kt)("p",null,"However, with the release of Rancher v2.0.7, the ",(0,l.kt)("inlineCode",{parentName:"p"},"System")," project was introduced. This project, which is automatically created during the upgrade, is assigned the system namespaces above to hold these crucial components for safe keeping."),(0,l.kt)("p",null,"During upgrades from Rancher v2.0.6- to Rancher v2.0.7+, all system namespaces are moved from their default location outside of all projects into the newly created ",(0,l.kt)("inlineCode",{parentName:"p"},"System")," project. However, if you assigned any of your system namespaces to a project before upgrading, your cluster networking may encounter issues afterwards. This issue occurs because the system namespaces are not where the upgrade expects them to be during the upgrade, so it cannot move them to the ",(0,l.kt)("inlineCode",{parentName:"p"},"System")," project."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To prevent this issue from occurring before the upgrade, see ",(0,l.kt)("a",{parentName:"li",href:"#preventing-cluster-networking-issues"},"Preventing Cluster Networking Issues"),"."),(0,l.kt)("li",{parentName:"ul"},"To fix this issue following upgrade, see ",(0,l.kt)("a",{parentName:"li",href:"#restoring-cluster-networking"},"Restoring Cluster Networking"),".")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," If you are upgrading from from Rancher v2.0.13 or earlier, or v2.1.8 or earlier, and your cluster's certificates have expired, you will need to perform ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates#rotating-expired-certificates-after-upgrading-older-rancher-versions"},"additional steps")," to rotate the certificates.")),(0,l.kt)("h2",{id:"preventing-cluster-networking-issues"},"Preventing Cluster Networking Issues"),(0,l.kt)("p",null,"You can prevent cluster networking issues from occurring during your upgrade to v2.0.7+ by unassigning system namespaces from all of your Rancher projects. Complete this task if you've assigned any of a cluster's system namespaces into a Rancher project."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Log into the Rancher UI before upgrade.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the context menu, open the ",(0,l.kt)("strong",{parentName:"p"},"local")," cluster (or any of your other clusters).")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the main menu, select ",(0,l.kt)("strong",{parentName:"p"},"Project/Namespaces"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Find and select the following namespaces. Click ",(0,l.kt)("strong",{parentName:"p"},"Move")," and then choose ",(0,l.kt)("strong",{parentName:"p"},"None")," to move them out of your projects. Click ",(0,l.kt)("strong",{parentName:"p"},"Move")," again."),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," Some or all of these namespaces may already be unassigned from all projects.")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kube-system")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kube-public")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cattle-system")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cattle-alerting"),(0,l.kt)("sup",null,"1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cattle-logging"),(0,l.kt)("sup",null,"1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cattle-pipeline"),(0,l.kt)("sup",null,"1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ingress-nginx"))),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("sup",null,"1")," Only displays if this feature is enabled for the cluster."),(0,l.kt)("figcaption",null,"Moving namespaces out of projects"),"![Moving Namespaces](/img/move-namespaces.png)"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Repeat these steps for each cluster where you've assigned system namespaces to projects."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," All system namespaces are moved out of Rancher projects. You can now safely begin the ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/upgrades"},"upgrade"),"."),(0,l.kt)("h2",{id:"restoring-cluster-networking"},"Restoring Cluster Networking"),(0,l.kt)("p",null,"Reset the cluster nodes' network policies to restore connectivity."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,l.kt)("p",{parentName:"blockquote"},"Download and setup ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl"),".")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Kubernetes Install",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From ",(0,l.kt)("strong",{parentName:"p"},"Terminal"),", change directories to your kubectl file that's generated during Rancher install, ",(0,l.kt)("inlineCode",{parentName:"p"},"kube_config_rancher-cluster.yml"),". This file is usually in the directory where you ran RKE during Rancher installation.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Before repairing networking, run the following two commands to make sure that your nodes have a status of ",(0,l.kt)("inlineCode",{parentName:"p"},"Ready")," and that your cluster components are ",(0,l.kt)("inlineCode",{parentName:"p"},"Healthy"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'kubectl --kubeconfig kube_config_rancher-cluster.yml get nodes\n\nNAME                          STATUS    ROLES                      AGE       VERSION\n165.227.114.63                Ready     controlplane,etcd,worker   11m       v1.10.1\n165.227.116.167               Ready     controlplane,etcd,worker   11m       v1.10.1\n165.227.127.226               Ready     controlplane,etcd,worker   11m       v1.10.1\n\nkubectl --kubeconfig kube_config_rancher-cluster.yml get cs\n\nNAME                 STATUS    MESSAGE              ERROR\nscheduler            Healthy   ok\ncontroller-manager   Healthy   ok\netcd-0               Healthy   {"health": "true"}\netcd-2               Healthy   {"health": "true"}\netcd-1               Healthy   {"health": "true"}\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check the ",(0,l.kt)("inlineCode",{parentName:"p"},"networkPolicy")," for all clusters by running the following command."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'kubectl --kubeconfig kube_config_rancher-cluster.yml get cluster -o=custom-columns=ID:.metadata.name,NAME:.spec.displayName,NETWORKPOLICY:.spec.enableNetworkPolicy,APPLIEDNP:.status.appliedSpec.enableNetworkPolicy,ANNOTATION:.metadata.annotations."networking\\.management\\.cattle\\.io/enable-network-policy"\n\nID      NAME    NETWORKPOLICY   APPLIEDNP   ANNOTATION\nc-59ptz custom  <nil>           <nil>       <none>\nlocal   local   <nil>           <nil>       <none>\n')))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Disable the ",(0,l.kt)("inlineCode",{parentName:"p"},"networkPolicy")," for all clusters, still pointing toward your ",(0,l.kt)("inlineCode",{parentName:"p"},"kube_config_rancher-cluster.yml"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'kubectl --kubeconfig kube_config_rancher-cluster.yml get cluster -o jsonpath=\'{range .items[*]}{@.metadata.name}{"\\n"}{end}\' | xargs -I {} kubectl --kubeconfig kube_config_rancher-cluster.yml patch cluster {} --type merge -p \'{"spec": {"enableNetworkPolicy": false},"status": {"appliedSpec": {"enableNetworkPolicy": false }}}\'\n')),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Tip:")," If you want to keep ",(0,l.kt)("inlineCode",{parentName:"p"},"networkPolicy")," enabled for all created clusters, you can run the following command to disable ",(0,l.kt)("inlineCode",{parentName:"p"},"networkPolicy")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," cluster (i.e., your Rancher Server nodes):"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"},' kubectl --kubeconfig kube_config_rancher-cluster.yml patch cluster local --type merge -p \'{"spec": {"enableNetworkPolicy": false},"status": {"appliedSpec": {"enableNetworkPolicy": false }}}\'\n')))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Remove annotations for network policy for all clusters"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'kubectl --kubeconfig kube_config_rancher-cluster.yml get cluster -o jsonpath=\'{range .items[*]}{@.metadata.name}{"\\n"}{end}\' | xargs -I {} kubectl --kubeconfig kube_config_rancher-cluster.yml annotate cluster {} "networking.management.cattle.io/enable-network-policy"="false" --overwrite\n')),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Tip:")," If you want to keep ",(0,l.kt)("inlineCode",{parentName:"p"},"networkPolicy")," enabled for all created clusters, you can run the following command to disable ",(0,l.kt)("inlineCode",{parentName:"p"},"networkPolicy")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," cluster (i.e., your Rancher Server nodes):"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"},' kubectl --kubeconfig kube_config_rancher-cluster.yml annotate cluster local "networking.management.cattle.io/enable-network-policy"="false" --overwrite\n')))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check the ",(0,l.kt)("inlineCode",{parentName:"p"},"networkPolicy")," for all clusters again to make sure the policies have a status of ",(0,l.kt)("inlineCode",{parentName:"p"},"false "),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'kubectl --kubeconfig kube_config_rancher-cluster.yml get cluster -o=custom-columns=ID:.metadata.name,NAME:.spec.displayName,NETWORKPOLICY:.spec.enableNetworkPolicy,APPLIEDNP:.status.appliedSpec.enableNetworkPolicy,ANNOTATION:.metadata.annotations."networking\\.management\\.cattle\\.io/enable-network-policy"\n\nID      NAME    NETWORKPOLICY   APPLIEDNP   ANNOTATION\nc-59ptz custom  false           false       false\nlocal   local   false           false       false\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Remove all network policies from all namespaces.  Run this command for each cluster, using the kubeconfig generated by RKE."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"for namespace in $(kubectl --kubeconfig kube_config_rancher-cluster.yml get ns -o custom-columns=NAME:.metadata.name --no-headers); do\n    kubectl --kubeconfig kube_config_rancher-cluster.yml -n $namespace delete networkpolicy --all;\ndone\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Remove all the projectnetworkpolicies created for the clusters, to make sure networkpolicies are not recreated."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"for cluster in $(kubectl --kubeconfig kube_config_rancher-cluster.yml get clusters -o custom-columns=NAME:.metadata.name --no-headers); do\n    for project in $(kubectl --kubeconfig kube_config_rancher-cluster.yml get project -n $cluster -o custom-columns=NAME:.metadata.name --no-headers); do\n        kubectl --kubeconfig kube_config_rancher-cluster.yml delete projectnetworkpolicy -n $project --all\n    done\ndone\n")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Tip:")," If you want to keep ",(0,l.kt)("inlineCode",{parentName:"p"},"networkPolicy")," enabled for all created clusters, you can run the following command to disable ",(0,l.kt)("inlineCode",{parentName:"p"},"networkPolicy")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," cluster (i.e., your Rancher Server nodes):"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"}," for project in $(kubectl --kubeconfig kube_config_rancher-cluster.yml get project -n local -o custom-columns=NAME:.metadata.name --no-headers); do\n     kubectl --kubeconfig kube_config_rancher-cluster.yml -n $project delete projectnetworkpolicy --all;\n done\n")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Wait a few minutes and then log into the Rancher UI."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If you can access Rancher, you're done, so you can skip the rest of the steps."),(0,l.kt)("li",{parentName:"ul"},"If you still can't access Rancher, complete the steps below."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Force your pods to recreate themselves by entering the following command."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"kubectl --kubeconfig kube_config_rancher-cluster.yml delete pods -n cattle-system --all\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Log into the Rancher UI and view your clusters. Created clusters will show errors from attempting to contact Rancher while it was unavailable. However, these errors should resolve automatically.")))),(0,l.kt)(i.Z,{value:"Rancher Launched Kubernetes",mdxType:"TabItem"},(0,l.kt)("p",null,"If you can access Rancher, but one or more of the clusters that you launched using Rancher has no networking, you can repair them by moving them:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Using the cluster's ",(0,l.kt)("a",{parentName:"p",href:"../../../../how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md"},"embedded kubectl shell"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"By ",(0,l.kt)("a",{parentName:"p",href:"../../../../how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md"},"downloading the cluster kubeconfig file and running it")," from your workstation."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"for namespace in $(kubectl --kubeconfig kube_config_rancher-cluster.yml get ns -o custom-columns=NAME:.metadata.name --no-headers); do\n  kubectl --kubeconfig kube_config_rancher-cluster.yml -n $namespace delete networkpolicy --all;\ndone\n")))))))}g.isMDXComponent=!0}}]);