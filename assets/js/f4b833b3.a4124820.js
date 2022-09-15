"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[91565],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85208:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Role-based Access Control",shortTitle:"RBAC",weight:2},s=void 0,d={unversionedId:"explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring",id:"explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring",title:"Role-based Access Control",description:"This section describes the expectations for RBAC for Rancher Monitoring.",source:"@site/docs/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring.md",sourceDirName:"explanations/integrations-in-rancher/monitoring-and-alerting",slug:"/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring",permalink:"/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"Role-based Access Control",shortTitle:"RBAC",weight:2},sidebar:"tutorialSidebar",previous:{title:"How Monitoring Works",permalink:"/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},next:{title:"Built-in Dashboards",permalink:"/explanations/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards"}},u={},p=[{value:"Cluster Admins",id:"cluster-admins",level:2},{value:"Users with Kubernetes ClusterRole-based Permissions",id:"users-with-kubernetes-clusterrole-based-permissions",level:2},{value:"Users with Kubernetes Admin/Edit Permissions",id:"users-with-kubernetes-adminedit-permissions",level:3},{value:"Users with Kubernetes View Permissions",id:"users-with-kubernetes-view-permissions",level:3},{value:"Additional Monitoring Roles",id:"additional-monitoring-roles",level:3},{value:"Additional Monitoring ClusterRoles",id:"additional-monitoring-clusterroles",level:3},{value:"Assigning Roles and ClusterRoles with kubectl",id:"assigning-roles-and-clusterroles-with-kubectl",level:3},{value:"Users with Rancher Based Permissions",id:"users-with-rancher-based-permissions",level:2},{value:"Differences in 2.5.x",id:"differences-in-25x",level:3},{value:"Assigning Additional Access",id:"assigning-additional-access",level:3},{value:"Role-based Access Control for Grafana",id:"role-based-access-control-for-grafana",level:2}],m={toc:p};function c(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes the expectations for RBAC for Rancher Monitoring."),(0,i.kt)("h2",{id:"cluster-admins"},"Cluster Admins"),(0,i.kt)("p",null,"By default, only those with the cluster-admin ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRole")," should be able to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install the ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-monitoring")," App onto a cluster and all other relevant configuration performed on the chart deploy",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g. whether default dashboards are created, what exporters are deployed onto the cluster to collect metrics, etc."))),(0,i.kt)("li",{parentName:"ul"},"Create / modify / delete Prometheus deployments in the cluster via Prometheus CRs"),(0,i.kt)("li",{parentName:"ul"},"Create / modify / delete Alertmanager deployments in the cluster via Alertmanager CRs"),(0,i.kt)("li",{parentName:"ul"},"Persist new Grafana dashboards or datasources via creating ConfigMaps in the appropriate namespace"),(0,i.kt)("li",{parentName:"ul"},"Expose certain Prometheus metrics to the k8s Custom Metrics API for HPA via a Secret in the ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," namespace")),(0,i.kt)("h2",{id:"users-with-kubernetes-clusterrole-based-permissions"},"Users with Kubernetes ClusterRole-based Permissions"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," chart installs the following three ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRoles"),". By default, they aggregate into the corresponding k8s ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRoles"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ClusterRole"),(0,i.kt)("th",{parentName:"tr",align:null},"Aggregates To Default K8s ClusterRole"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"monitoring-admin")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"admin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"monitoring-edit")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"edit"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"monitoring-view")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"view "))))),(0,i.kt)("p",null,"These ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRoles")," provide different levels of access to the Monitoring CRDs based on the actions that can be performed:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"CRDs (monitoring.coreos.com)"),(0,i.kt)("th",{parentName:"tr",align:null},"Admin"),(0,i.kt)("th",{parentName:"tr",align:null},"Edit"),(0,i.kt)("th",{parentName:"tr",align:null},"View"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"prometheuses")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"alertmanagers")))),(0,i.kt)("td",{parentName:"tr",align:null},"Get, List, Watch"),(0,i.kt)("td",{parentName:"tr",align:null},"Get, List, Watch"),(0,i.kt)("td",{parentName:"tr",align:null},"Get, List, Watch")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"servicemonitors")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"podmonitors")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"prometheusrules")))),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"Get, List, Watch")))),(0,i.kt)("p",null,"On a high level, the following permissions are assigned by default as a result."),(0,i.kt)("h3",{id:"users-with-kubernetes-adminedit-permissions"},"Users with Kubernetes Admin/Edit Permissions"),(0,i.kt)("p",null,"Only those with the the cluster-admin, admin or edit ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRole")," should be able to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Modify the scrape configuration of Prometheus deployments via ServiceMonitor and PodMonitor CRs"),(0,i.kt)("li",{parentName:"ul"},"Modify the alerting / recording rules of a Prometheus deployment via PrometheusRules CRs")),(0,i.kt)("h3",{id:"users-with-kubernetes-view-permissions"},"Users with Kubernetes View Permissions"),(0,i.kt)("p",null,"Only those with who have some Kubernetes ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRole")," should be able to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"View the configuration of Prometheuses that are deployed within the cluster"),(0,i.kt)("li",{parentName:"ul"},"View the configuration of Alertmanagers that are deployed within the cluster"),(0,i.kt)("li",{parentName:"ul"},"View the scrape configuration of Prometheus deployments via ServiceMonitor and PodMonitor CRs"),(0,i.kt)("li",{parentName:"ul"},"View the alerting/recording rules of a Prometheus deployment via PrometheusRules CRs")),(0,i.kt)("h3",{id:"additional-monitoring-roles"},"Additional Monitoring Roles"),(0,i.kt)("p",null,"Monitoring also creates additional ",(0,i.kt)("inlineCode",{parentName:"p"},"Roles")," that are not assigned to users by default but are created within the cluster. They can be bound to a namespace by deploying a ",(0,i.kt)("inlineCode",{parentName:"p"},"RoleBinding")," that references it. To define a ",(0,i.kt)("inlineCode",{parentName:"p"},"RoleBinding")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," instead of through Rancher, click ",(0,i.kt)("a",{parentName:"p",href:"#assigning-roles-and-clusterroles-with-kubectl"},"here"),"."),(0,i.kt)("p",null,"Admins should use these roles to provide more fine-grained access to users:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Role"),(0,i.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"monitoring-config-admin"),(0,i.kt)("td",{parentName:"tr",align:null},"Allow admins to assign roles to users to be able to view / modify Secrets and ConfigMaps within the cattle-monitoring-system namespace. Modifying Secrets / ConfigMaps in this namespace could allow users to alter the cluster's Alertmanager configuration, Prometheus Adapter configuration, additional Grafana datasources, TLS secrets, etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"monitoring-config-edit"),(0,i.kt)("td",{parentName:"tr",align:null},"Allow admins to assign roles to users to be able to view / modify Secrets and ConfigMaps within the cattle-monitoring-system namespace. Modifying Secrets / ConfigMaps in this namespace could allow users to alter the cluster's Alertmanager configuration, Prometheus Adapter configuration, additional Grafana datasources, TLS secrets, etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"monitoring-config-view"),(0,i.kt)("td",{parentName:"tr",align:null},"Allow admins to assign roles to users to be able to view Secrets and ConfigMaps within the cattle-monitoring-system namespace. Viewing Secrets / ConfigMaps in this namespace could allow users to observe the cluster's Alertmanager configuration, Prometheus Adapter configuration, additional Grafana datasources, TLS secrets, etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"monitoring-dashboard-admin"),(0,i.kt)("td",{parentName:"tr",align:null},"Allow admins to assign roles to users to be able to edit / view ConfigMaps within the cattle-dashboards namespace. ConfigMaps in this namespace will correspond to Grafana Dashboards that are persisted onto the cluster.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"monitoring-dashboard-edit"),(0,i.kt)("td",{parentName:"tr",align:null},"Allow admins to assign roles to users to be able to edit / view ConfigMaps within the cattle-dashboards namespace. ConfigMaps in this namespace will correspond to Grafana Dashboards that are persisted onto the cluster.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"monitoring-dashboard-view"),(0,i.kt)("td",{parentName:"tr",align:null},"Allow admins to assign roles to users to be able to view ConfigMaps within the cattle-dashboards namespace. ConfigMaps in this namespace will correspond to Grafana Dashboards that are persisted onto the cluster.")))),(0,i.kt)("h3",{id:"additional-monitoring-clusterroles"},"Additional Monitoring ClusterRoles"),(0,i.kt)("p",null,"Monitoring also creates additional ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRoles")," that are not assigned to users by default but are created within the cluster.  They are not aggregated by default but can be bound to a namespace by deploying a ",(0,i.kt)("inlineCode",{parentName:"p"},"RoleBinding")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRoleBinding")," that references it. To define a ",(0,i.kt)("inlineCode",{parentName:"p"},"RoleBinding")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," instead of through Rancher, click ",(0,i.kt)("a",{parentName:"p",href:"#assigning-roles-and-clusterroles-with-kubectl"},"here"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Role"),(0,i.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"monitoring-ui-view"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{id:"monitoring-ui-view"}),(0,i.kt)("em",{parentName:"td"},"Available as of Monitoring v2 14.5.100+")," Provides read-only access to external Monitoring UIs by giving a user permission to list the Prometheus, Alertmanager, and Grafana endpoints and make GET requests to Prometheus, Grafana, and Alertmanager UIs through the Rancher proxy.")))),(0,i.kt)("h3",{id:"assigning-roles-and-clusterroles-with-kubectl"},"Assigning Roles and ClusterRoles with kubectl"),(0,i.kt)("p",null,"An alternative method to using Rancher to attach a ",(0,i.kt)("inlineCode",{parentName:"p"},"Role")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRole")," to a user or group is by defining bindings in YAML files that you create. You must first configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"RoleBinding")," with the YAML file, then you apply the config changes by running the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply")," command. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Roles"),": Below is an example of a YAML file to help you configure ",(0,i.kt)("inlineCode",{parentName:"li"},"RoleBindings")," in Kubernetes. You will need to fill in the name below, and name is case-sensitive. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# monitoring-config-view-role-binding.yaml\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: monitoring-config-view\n  namespace: cattle-monitoring-system\nroleRef:\n  kind: Role\n  name: monitoring-config-view\n  apiGroup: rbac.authorization.k8s.io\nsubjects:\n- kind: User\n  name: u-b4qkhsnliz # this can be found via `kubectl get users -A`\n  apiGroup: rbac.authorization.k8s.io\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"kubectl"),": Below is an example of a ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," command used to apply the binding you've created in the YAML file. As noted, you will need to fill in your YAML filename accordingly."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"**",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl apply -f monitoring-config-view-role-binding.yaml"))))),(0,i.kt)("h2",{id:"users-with-rancher-based-permissions"},"Users with Rancher Based Permissions"),(0,i.kt)("p",null,"The relationship between the default roles deployed by Rancher (i.e. cluster-owner, cluster-member, project-owner, project-member), the default Kubernetes roles, and the roles deployed by the rancher-monitoring chart are detailed in the table below:"),(0,i.kt)("figcaption",null,"Default Rancher Permissions and Corresponding Kubernetes ClusterRoles"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Rancher Role"),(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes Role"),(0,i.kt)("th",{parentName:"tr",align:null},"Monitoring ClusterRole / Role"),(0,i.kt)("th",{parentName:"tr",align:null},"ClusterRoleBinding or RoleBinding?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cluster-owner"),(0,i.kt)("td",{parentName:"tr",align:null},"cluster-admin"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},"ClusterRoleBinding")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cluster-member"),(0,i.kt)("td",{parentName:"tr",align:null},"admin"),(0,i.kt)("td",{parentName:"tr",align:null},"monitoring-admin"),(0,i.kt)("td",{parentName:"tr",align:null},"ClusterRoleBinding")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"project-owner"),(0,i.kt)("td",{parentName:"tr",align:null},"admin"),(0,i.kt)("td",{parentName:"tr",align:null},"monitoring-admin"),(0,i.kt)("td",{parentName:"tr",align:null},"RoleBinding within Project namespace")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"project-member"),(0,i.kt)("td",{parentName:"tr",align:null},"edit"),(0,i.kt)("td",{parentName:"tr",align:null},"monitoring-edit"),(0,i.kt)("td",{parentName:"tr",align:null},"RoleBinding within Project namespace")))),(0,i.kt)("p",null,"In addition to these default Roles, the following additional Rancher project roles can be applied to members of your Cluster to provide additional access to Monitoring. These Rancher Roles will be tied to ClusterRoles deployed by the Monitoring chart:"),(0,i.kt)("figcaption",null,"Non-default Rancher Permissions and Corresponding Kubernetes ClusterRoles"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Rancher Role"),(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes ClusterRole"),(0,i.kt)("th",{parentName:"tr",align:null},"Available In Rancher From"),(0,i.kt)("th",{parentName:"tr",align:null},"Available in Monitoring v2 From"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"View Monitoring*"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#monitoring-ui-view"},"monitoring-ui-view")),(0,i.kt)("td",{parentName:"tr",align:null},"2.4.8+"),(0,i.kt)("td",{parentName:"tr",align:null},"9.4.204+")))),(0,i.kt)("p",null,"*"," A User bound to the ",(0,i.kt)("strong",{parentName:"p"},"View Monitoring")," Rancher Role only has permissions to access external Monitoring UIs if provided links to those UIs. In order to access the Monitoring Pane to get those links, the User must be a Project Member of at least one Project."),(0,i.kt)("h3",{id:"differences-in-25x"},"Differences in 2.5.x"),(0,i.kt)("p",null,"Users with the project-member or project-owners roles assigned will not be given access to either Prometheus or Grafana in Rancher 2.5.x since we only create Grafana or Prometheus on a cluster-level."),(0,i.kt)("p",null,"In addition, while project owners will still be only able to add ServiceMonitors / PodMonitors that scrape resources within their project's namespace by default, PrometheusRules are not scoped to a single namespace / project. Therefore, any alert rules or recording rules created by project-owners within their project namespace will be applied across the entire cluster, although they will be unable to view / edit / delete any rules that were created outside the project's namespace."),(0,i.kt)("h3",{id:"assigning-additional-access"},"Assigning Additional Access"),(0,i.kt)("p",null,"If cluster-admins would like to provide additional admin/edit access to users outside of the roles offered by the rancher-monitoring chart, the following table identifies the potential impact:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"CRDs (monitoring.coreos.com)"),(0,i.kt)("th",{parentName:"tr",align:null},"Can it cause impact outside of a namespace / project?"),(0,i.kt)("th",{parentName:"tr",align:null},"Impact"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"prometheuses")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes, this resource can scrape metrics from any targets across the entire cluster (unless the Operator itself is otherwise configured)."),(0,i.kt)("td",{parentName:"tr",align:null},"User will be able to define the configuration of new cluster-level Prometheus deployments that should be created in the cluster.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"alertmanagers")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"User will be able to define the configuration of new cluster-level Alertmanager deployments that should be created in the cluster. Note: if you just want to allow users to configure settings like Routes and Receivers, you should just provide access to the Alertmanager Config Secret instead.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"servicemonitors")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"podmonitors")))),(0,i.kt)("td",{parentName:"tr",align:null},"No, not by default; this is configurable via ",(0,i.kt)("inlineCode",{parentName:"td"},"ignoreNamespaceSelectors")," on the Prometheus CR."),(0,i.kt)("td",{parentName:"tr",align:null},"User will be able to set up scrapes by Prometheus on endpoints exposed by Services / Pods within the namespace they are given this permission in.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"prometheusrules")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes, PrometheusRules are cluster-scoped."),(0,i.kt)("td",{parentName:"tr",align:null},"User will be able to define alert or recording rules on Prometheus based on any series collected across the entire cluster.")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"k8s Resources"),(0,i.kt)("th",{parentName:"tr",align:null},"Namespace"),(0,i.kt)("th",{parentName:"tr",align:null},"Can it cause impact outside of a namespace / project?"),(0,i.kt)("th",{parentName:"tr",align:null},"Impact"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"secrets")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"configmaps")))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cattle-monitoring-system")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes, Configs and Secrets in this namespace can impact the entire monitoring / alerting pipeline."),(0,i.kt)("td",{parentName:"tr",align:null},"User will be able to create or edit Secrets / ConfigMaps such as the Alertmanager Config, Prometheus Adapter Config, TLS secrets, additional Grafana datasources, etc. This can have broad impact on all cluster monitoring / alerting.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"secrets")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"configmaps")))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cattle-dashboards")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes, Configs and Secrets in this namespace can create dashboards that make queries on all metrics collected at a cluster-level."),(0,i.kt)("td",{parentName:"tr",align:null},"User will be able to create Secrets / ConfigMaps that persist new Grafana Dashboards only.")))),(0,i.kt)("h2",{id:"role-based-access-control-for-grafana"},"Role-based Access Control for Grafana"),(0,i.kt)("p",null,"Rancher allows any users who are authenticated by Kubernetes and have access the Grafana service deployed by the Rancher Monitoring chart to access Grafana via the Rancher Dashboard UI. By default, all users who are able to access Grafana are given the ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/permissions/organization_roles/#viewer-role"},"Viewer")," role, which allows them to view any of the default dashboards deployed by Rancher."),(0,i.kt)("p",null,"However, users can choose to log in to Grafana as an ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/permissions/organization_roles/#admin-role"},"Admin")," if necessary. The default Admin username and password for the Grafana instance will be ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"prom-operator"),", but alternative credentials can also be supplied on deploying or upgrading the chart."),(0,i.kt)("p",null,"To see the Grafana UI, install ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),". Then:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to see the visualizations and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,i.kt)("strong",{parentName:"li"},"Monitoring"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Grafana"),".")),(0,i.kt)("figcaption",null,"Cluster Compute Resources Dashboard in Grafana"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Cluster Compute Resources Dashboard in Grafana",src:n(20507).Z,width:"2234",height:"1718"})),(0,i.kt)("figcaption",null,"Default Dashboards in Grafana"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Default Dashboards in Grafana",src:n(89986).Z,width:"1305",height:"1106"})))}c.isMDXComponent=!0},20507:function(e,t,n){t.Z=n.p+"assets/images/cluster-compute-resources-dashboard-025b46a16d139fbae87db2a94461b808.png"},89986:function(e,t,n){t.Z=n.p+"assets/images/grafana-default-dashboard-957af33a50c22962b8accddd50b2a85e.png"}}]);