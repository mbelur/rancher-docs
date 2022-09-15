"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[50153],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),h=r,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},29841:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={title:"Upgrading Kubernetes without Upgrading Rancher",weight:30},l=void 0,d={unversionedId:"getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher",id:"getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher",title:"Upgrading Kubernetes without Upgrading Rancher",description:"The RKE metadata feature allows you to provision clusters with new versions of Kubernetes as soon as they are released, without upgrading Rancher. This feature is useful for taking advantage of patch versions of Kubernetes, for example, if you want to upgrade to Kubernetes v1.14.7 when your Rancher server originally supported v1.14.6.",source:"@site/docs/getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher.md",sourceDirName:"getting-started/installation-and-upgrade",slug:"/getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher",permalink:"/getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"Upgrading Kubernetes without Upgrading Rancher",weight:30},sidebar:"tutorialSidebar",previous:{title:"Upgrading and Rolling Back Kubernetes",permalink:"/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},next:{title:"Advanced",permalink:"/pages-for-subheaders/advanced-options"}},p={},u=[{value:"Refresh Kubernetes Metadata",id:"refresh-kubernetes-metadata",level:3},{value:"Configuring the Metadata Synchronization",id:"configuring-the-metadata-synchronization",level:3},{value:"Air Gap Setups",id:"air-gap-setups",level:3}],c={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The RKE metadata feature allows you to provision clusters with new versions of Kubernetes as soon as they are released, without upgrading Rancher. This feature is useful for taking advantage of patch versions of Kubernetes, for example, if you want to upgrade to Kubernetes v1.14.7 when your Rancher server originally supported v1.14.6."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Kubernetes API can change between minor versions. Therefore, we don't support introducing minor Kubernetes versions, such as introducing v1.15 when Rancher currently supports v1.14. You would need to upgrade Rancher to add support for minor Kubernetes versions."))),(0,i.kt)("p",null,"Rancher's Kubernetes metadata contains information specific to the Kubernetes version that Rancher uses to provision ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE clusters"),". Rancher syncs the data periodically and creates custom resource definitions (CRDs) for ",(0,i.kt)("strong",{parentName:"p"},"system images,")," ",(0,i.kt)("strong",{parentName:"p"},"service options")," and ",(0,i.kt)("strong",{parentName:"p"},"addon templates"),". Consequently, when a new Kubernetes version is compatible with the Rancher server version, the Kubernetes metadata makes the new version available to Rancher for provisioning clusters. The metadata gives you an overview of the information that the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"Rancher Kubernetes Engine")," (RKE) uses for deploying various Kubernetes versions."),(0,i.kt)("p",null,"This table below describes the CRDs that are affected by the periodic data sync. "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only administrators can edit metadata CRDs. It is recommended not to update existing objects unless explicitly advised."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Resource"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Rancher API URL"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"System Images"),(0,i.kt)("td",{parentName:"tr",align:null},"List of system images used to deploy Kubernetes through RKE."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<RANCHER_SERVER_URL>/v3/rkek8ssystemimages"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Service Options"),(0,i.kt)("td",{parentName:"tr",align:null},"Default options passed to Kubernetes components like ",(0,i.kt)("inlineCode",{parentName:"td"},"kube-api"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"scheduler"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"kubelet"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"kube-proxy"),", and ",(0,i.kt)("inlineCode",{parentName:"td"},"kube-controller-manager")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<RANCHER_SERVER_URL>/v3/rkek8sserviceoptions"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Addon Templates"),(0,i.kt)("td",{parentName:"tr",align:null},"YAML definitions used to deploy addon components like Canal, Calico, Flannel, Weave, Kube-dns, CoreDNS, ",(0,i.kt)("inlineCode",{parentName:"td"},"metrics-server"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"nginx-ingress")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<RANCHER_SERVER_URL>/v3/rkeaddons"))))),(0,i.kt)("p",null,"Administrators might configure the RKE metadata settings to do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Refresh the Kubernetes metadata, if a new patch version of Kubernetes comes out and they want Rancher to provision clusters with the latest version of Kubernetes without having to upgrade Rancher"),(0,i.kt)("li",{parentName:"ul"},"Change the metadata URL that Rancher uses to sync the metadata, which is useful for air gap setups if you need to sync Rancher locally instead of with GitHub"),(0,i.kt)("li",{parentName:"ul"},"Prevent Rancher from auto-syncing the metadata, which is one way to prevent new and unsupported Kubernetes versions from being available in Rancher")),(0,i.kt)("h3",{id:"refresh-kubernetes-metadata"},"Refresh Kubernetes Metadata"),(0,i.kt)("p",null,"The option to refresh the Kubernetes metadata is available for administrators by default, or for any user who has the ",(0,i.kt)("strong",{parentName:"p"},"Manage Cluster Drivers")," ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"global role.")),(0,i.kt)("p",null,"To force Rancher to refresh the Kubernetes metadata, a manual refresh action is available:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,i.kt)("strong",{parentName:"li"},"Drivers"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Refresh Kubernetes Metadata"),".")),(0,i.kt)("p",null,"You can configure Rancher to only refresh metadata when desired by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh-interval-minutes")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," (see below) and using this button to perform the metadata refresh manually when desired."),(0,i.kt)("h3",{id:"configuring-the-metadata-synchronization"},"Configuring the Metadata Synchronization"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only administrators can change these settings."))),(0,i.kt)("p",null,"The RKE metadata config controls how often Rancher syncs metadata and where it downloads data from. You can configure the metadata from the settings in the Rancher UI, or through the Rancher API at the endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"v3/settings/rke-metadata-config"),"."),(0,i.kt)("p",null,"The way that the metadata is configured depends on the Rancher version."),(0,i.kt)("p",null,"To edit the metadata config in Rancher,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Global Settings"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"rke-metadata-config")," section. Click  ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Edit Setting"),"."),(0,i.kt)("li",{parentName:"ol"},"You can optionally fill in the following parameters:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refresh-interval-minutes"),": This is the amount of time that Rancher waits to sync the metadata. To disable the periodic refresh, set ",(0,i.kt)("inlineCode",{parentName:"li"},"refresh-interval-minutes")," to 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url"),": This is the HTTP path that Rancher fetches data from. The path must be a direct path to a JSON file. For example, the default URL for Rancher v2.4 is ",(0,i.kt)("inlineCode",{parentName:"li"},"https://releases.rancher.com/kontainer-driver-metadata/release-v2.4/data.json"),".")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save"),".")),(0,i.kt)("p",null,"If you don't have an air gap setup, you don't need to specify the URL where Rancher gets the metadata, because the default setting is to pull from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/kontainer-driver-metadata/blob/dev-v2.5/data/data.json"},"Rancher's metadata Git repository.")),(0,i.kt)("p",null,"However, if you have an ",(0,i.kt)("a",{parentName:"p",href:"#air-gap-setups"},"air gap setup,")," you will need to mirror the Kubernetes metadata repository in a location available to Rancher. Then you need to change the URL to point to the new location of the JSON file."),(0,i.kt)("h3",{id:"air-gap-setups"},"Air Gap Setups"),(0,i.kt)("p",null,"Rancher relies on a periodic refresh of the ",(0,i.kt)("inlineCode",{parentName:"p"},"rke-metadata-config")," to download new Kubernetes version metadata if it is supported with the current version of the Rancher server. For a table of compatible Kubernetes and Rancher versions, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/all-supported-versions/rancher-v2.2.8/"},"service terms section.")),(0,i.kt)("p",null,"If you have an air gap setup, you might not be able to get the automatic periodic refresh of the Kubernetes metadata from Rancher's Git repository. In that case, you should disable the periodic refresh to prevent your logs from showing errors. Optionally, you can configure your metadata settings so that Rancher can sync with a local copy of the RKE metadata."),(0,i.kt)("p",null,"To sync Rancher with a local mirror of the RKE metadata, an administrator would configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"rke-metadata-config")," settings to point to the mirror. For details, refer to ",(0,i.kt)("a",{parentName:"p",href:"#configuring-the-metadata-synchronization"},"Configuring the Metadata Synchronization.")),(0,i.kt)("p",null,"After new Kubernetes versions are loaded into the Rancher setup, additional steps would be required in order to use them for launching clusters. Rancher needs access to updated system images. While the metadata settings can only be changed by administrators, any user can download the Rancher system images and prepare a private Docker registry for them."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To download the system images for the private registry, click the Rancher server version at the bottom left corner of the Rancher UI."),(0,i.kt)("li",{parentName:"ol"},"Download the OS specific image lists for Linux or Windows."),(0,i.kt)("li",{parentName:"ol"},"Download ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-images.txt"),"."),(0,i.kt)("li",{parentName:"ol"},"Prepare the private registry using the same steps during the ",(0,i.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},"air gap install"),", but instead of using the ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-images.txt")," from the releases page, use the one obtained from the previous steps.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The air gap installation of Rancher can now sync the Kubernetes metadata. If you update your private registry when new versions of Kubernetes are released, you can provision clusters with the new version without having to upgrade Rancher."))}h.isMDXComponent=!0}}]);