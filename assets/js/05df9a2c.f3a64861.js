"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[25589],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=o,d=p["".concat(l,".").concat(g)]||p[g]||f[g]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},18254:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={title:"Project Tools for Logging, Monitoring, and Visibility",weight:2525},l=void 0,c={unversionedId:"reference-guides/rancher-project-tools",id:"reference-guides/rancher-project-tools",title:"Project Tools for Logging, Monitoring, and Visibility",description:"Rancher contains a variety of tools that aren't included in Kubernetes to assist in your DevOps operations. Rancher can integrate with external services to help your clusters run more efficiently.",source:"@site/docs/reference-guides/rancher-project-tools.md",sourceDirName:"reference-guides",slug:"/reference-guides/rancher-project-tools",permalink:"/reference-guides/rancher-project-tools",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/rancher-project-tools.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"Project Tools for Logging, Monitoring, and Visibility",weight:2525},sidebar:"tutorialSidebar",previous:{title:"Cluster Tools for Logging, Monitoring, and Visibility",permalink:"/reference-guides/rancher-cluster-tools"},next:{title:"System Tools",permalink:"/reference-guides/system-tools"}},u={},f=[{value:"Notifiers and Alerts",id:"notifiers-and-alerts",level:2},{value:"Logging",id:"logging",level:2},{value:"Monitoring",id:"monitoring",level:2}],p={toc:f};function g(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rancher contains a variety of tools that aren't included in Kubernetes to assist in your DevOps operations. Rancher can integrate with external services to help your clusters run more efficiently."),(0,i.kt)("h2",{id:"notifiers-and-alerts"},"Notifiers and Alerts"),(0,i.kt)("p",null,"Notifiers and alerts are two features that work together to inform you of events in the Rancher system. Before they can be enabled, the monitoring application must be installed."),(0,i.kt)("p",null,"Notifiers are services that inform you of alert events. You can configure notifiers to send alert notifications to staff best suited to take corrective action. Notifications can be sent with Slack, email, PagerDuty, WeChat, and webhooks."),(0,i.kt)("p",null,"Alerts are rules that trigger those notifications. Before you can receive alerts, you must configure one or more notifier in Rancher. The scope for alerts can be set at either the cluster or project level."),(0,i.kt)("h2",{id:"logging"},"Logging"),(0,i.kt)("p",null,"Logging is helpful because it allows you to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Capture and analyze the state of your cluster"),(0,i.kt)("li",{parentName:"ul"},"Look for trends in your environment"),(0,i.kt)("li",{parentName:"ul"},"Save your logs to a safe location outside of your cluster"),(0,i.kt)("li",{parentName:"ul"},"Stay informed of events like a container crashing, a pod eviction, or a node dying"),(0,i.kt)("li",{parentName:"ul"},"More easily debugg and troubleshoot problems")),(0,i.kt)("p",null,"Rancher can integrate with Elasticsearch, splunk, kafka, syslog, and fluentd."),(0,i.kt)("p",null,"For details, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/logging"},"logging section.")),(0,i.kt)("h2",{id:"monitoring"},"Monitoring"),(0,i.kt)("p",null,"Using Rancher, you can monitor the state and processes of your cluster nodes, Kubernetes components, and software deployments through integration with ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),", a leading open-source monitoring solution. For details, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/monitoring-and-alerting"},"monitoring section.")))}g.isMDXComponent=!0}}]);